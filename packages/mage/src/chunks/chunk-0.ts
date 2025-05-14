import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageAdobeIcon],svg[mage-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.443 3.104L2 20.897V3.104zm2.564 6.566l4.715 11.227h-3.084l-1.398-3.55H8.744zM22 3.104v17.793L14.653 3.104z"></svg:path>`,
})
export class MageAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAeroplaneFillIcon],svg[mage-aeroplane-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.72 14.621a.8.8 0 0 1-.19.35a.7.7 0 0 1-.33.21a.8.8 0 0 1-.4 0l-5.81-1.46l-.27 4.8l1.06.8a.22.22 0 0 1 .1.2v1.75a.27.27 0 0 1-.09.2a.3.3 0 0 1-.16 0h-.06l-2.57-.69l-2.56.69a.25.25 0 0 1-.31-.24v-1.75a.25.25 0 0 1 .1-.2l1.06-.8l-.27-4.8l-5.81 1.46a.73.73 0 0 1-.39 0a.75.75 0 0 1-.34-.21a.73.73 0 0 1-.18-.35a.65.65 0 0 1 0-.39l.52-1.55a.6.6 0 0 1 .15-.27a.8.8 0 0 1 .27-.18l5.75-2.47v-5.23a2 2 0 0 1 .58-1.41a2.06 2.06 0 0 1 2.83 0a2 2 0 0 1 .58 1.42v5.22l5.76 2.47a.74.74 0 0 1 .42.45l.52 1.54a.9.9 0 0 1 .04.44"></svg:path>`,
})
export class MageAeroplaneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAeroplaneIcon],svg[mage-aeroplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M13.235 3.257a1.75 1.75 0 0 1 .508 1.24v5.388l5.917 2.541a.47.47 0 0 1 .274.295l.519 1.545a.508.508 0 0 1-.6.65l-6.1-1.534l-.294 5.245l1.169.875v1.748a338 338 0 0 1-2.633-.708s-1.073.295-2.623.708v-1.748l1.17-.875l-.296-5.245l-6.099 1.535a.509.509 0 0 1-.6-.65l.519-1.546a.47.47 0 0 1 .274-.295l5.917-2.541V4.497a1.75 1.75 0 0 1 .508-1.24a1.76 1.76 0 0 1 2.47 0"></svg:path>`,
})
export class MageAeroplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAfterEffectsIcon],svg[mage-after-effects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.84 12.4c0 .09 0 .09-.07.09H8c.33-1 .68-2.06 1-3.1c0 .08 0 .16.07.24s.09.33.13.49l.18.56c0 .19.11.37.17.56l.19.57z"></svg:path><svg:path fill="currentColor" d="M17.08 11.77a1 1 0 0 0-.76-.67a1.7 1.7 0 0 0-.55 0a.93.93 0 0 0-.64.47a1.7 1.7 0 0 0-.2.58H17c.1 0 .13 0 .12-.14a1 1 0 0 0-.04-.24m0 0a1 1 0 0 0-.76-.67a1.7 1.7 0 0 0-.55 0a.93.93 0 0 0-.64.47a1.7 1.7 0 0 0-.2.58H17c.1 0 .13 0 .12-.14a1 1 0 0 0-.04-.24m0 0a1 1 0 0 0-.76-.67a1.7 1.7 0 0 0-.55 0a.93.93 0 0 0-.64.47a1.7 1.7 0 0 0-.2.58H17c.1 0 .13 0 .12-.14a1 1 0 0 0-.04-.24m0 0a1 1 0 0 0-.76-.67a1.7 1.7 0 0 0-.55 0a.93.93 0 0 0-.64.47a1.7 1.7 0 0 0-.2.58H17c.1 0 .13 0 .12-.14a1 1 0 0 0-.04-.24M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5m-4.27 14h-1.62a.14.14 0 0 1-.142-.068a.14.14 0 0 1-.018-.052c-.08-.25-.17-.49-.25-.74s-.2-.57-.29-.86c0-.16-.13-.18-.27-.18H7.62c-.11 0-.11 0-.15.12s-.1.33-.16.5l-.16.52l-.21.61a.2.2 0 0 1 0 .08c0 .13-.16.11-.26.11H5.39c-.15 0-.2-.07-.14-.21s.11-.3.16-.44l.21-.64l.39-1.1c.11-.3.21-.61.31-.92s.19-.53.29-.8l.21-.63l.37-1l.3-.88c.1-.28.2-.56.29-.85a2 2 0 0 0 0-.41c0-.21 0-.21.21-.21H9.8c.16 0 .15 0 .2.15s.18.49.26.73s.15.42.22.62l.24.65l.24.7c.1.27.2.53.29.8l.26.72c.08.24.17.48.26.73s.12.37.19.55s.14.4.22.6s.13.38.2.57l.29.81l.12.35c.04-.01.01.07-.06.07m6-3q.007.135 0 .27c0 .09-.15.12-.24.12h-3.53c.036.328.18.634.41.87a3 3 0 0 0 2.8.18c.08 0 .12 0 .12.08v1.13c0 .18-.07.2-.22.26l-.36.11a2 2 0 0 1-.35.07c-.25 0-.5.07-.75.08s-.34 0-.51 0H16c-.2 0-.41 0-.6-.07a2.7 2.7 0 0 1-1.44-.8a2.6 2.6 0 0 1-.56-.88a2.8 2.8 0 0 1-.2-.75a9 9 0 0 1 0-.88c.015-.361.083-.718.2-1.06a3.2 3.2 0 0 1 .41-.8a2.5 2.5 0 0 1 .9-.82q.235-.136.49-.23a5 5 0 0 1 .56-.1q.255-.015.51 0q.376.006.74.1q.33.093.63.26a2 2 0 0 1 .74.74c.1.18.18.36.26.54q.064.191.1.39a3 3 0 0 1 .03 1.19zm-2.45-1.85a1.7 1.7 0 0 0-.55 0a.93.93 0 0 0-.64.47a1.7 1.7 0 0 0-.2.58H17c.1 0 .13 0 .12-.14a1 1 0 0 0-.06-.26a1 1 0 0 0-.74-.7zm.76.67a1 1 0 0 0-.76-.67a1.7 1.7 0 0 0-.55 0a.93.93 0 0 0-.64.47a1.7 1.7 0 0 0-.2.58H17c.1 0 .13 0 .12-.14q0-.148-.04-.29zm0 0a1 1 0 0 0-.76-.67a1.7 1.7 0 0 0-.55 0a.93.93 0 0 0-.64.47a1.7 1.7 0 0 0-.2.58H17c.1 0 .13 0 .12-.14q0-.148-.04-.29zm0 0a1 1 0 0 0-.76-.67a1.7 1.7 0 0 0-.55 0a.93.93 0 0 0-.64.47a1.7 1.7 0 0 0-.2.58H17c.1 0 .13 0 .12-.14q0-.148-.04-.29zm0 0a1 1 0 0 0-.76-.67a1.7 1.7 0 0 0-.55 0a.93.93 0 0 0-.64.47a1.7 1.7 0 0 0-.2.58H17c.1 0 .13 0 .12-.14q0-.148-.04-.29z"></svg:path>`,
})
export class MageAfterEffectsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAlarmClockIcon],svg[mage-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"><svg:path d="M14.319 15.203L12 12.883V8.247M20.116 21l-2.319-2.319m-11.594 0L3.883 21M18.377 3l2.319 2.319M5.623 3L3.304 5.319"></svg:path><svg:path d="M12 21a8.116 8.116 0 1 0 0-16.233A8.116 8.116 0 0 0 12 21Z"></svg:path></svg:g>`,
})
export class MageAlarmClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAlarmClockFillIcon],svg[mage-alarm-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.765 18.579a8.87 8.87 0 1 0-13.54 0l-1.88 1.88a.75.75 0 0 0 .53 1.28a.7.7 0 0 0 .53-.22l1.88-1.88a8.81 8.81 0 0 0 11.42 0l1.88 1.88a.7.7 0 0 0 .53.22a.74.74 0 0 0 .53-.22a.75.75 0 0 0 0-1.06zm-3.75-2.68a1 1 0 0 1-1.41 0l-2.61-2.61v-5.06a1 1 0 1 1 2 0v4.23l2 2a1 1 0 0 1 .02 1.44m5.67-9.8a.8.8 0 0 1-.53-.22l-2.31-2.32a.74.74 0 0 1 0-1.06a.75.75 0 0 1 1.06 0l2.36 2.28a.75.75 0 0 1 0 1.06a.8.8 0 0 1-.58.26m-17.42 0a.8.8 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l2.32-2.32a.75.75 0 1 1 1.06 1.06l-2.32 2.32a.75.75 0 0 1-.53.22"></svg:path>`,
})
export class MageAlarmClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAlignLeftIcon],svg[mage-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.5 12h8m-8 6.25h15m-15-12.5h15"></svg:path>`,
})
export class MageAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAlignCenterIcon],svg[mage-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M6.286 12h11.428m-8 5.714h4.572M4 6.286h16"></svg:path>`,
})
export class MageAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAlignRightIcon],svg[mage-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M19.5 12h-8m8-6.25h-15m15 12.5h-15"></svg:path>`,
})
export class MageAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAmazonIcon],svg[mage-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.048 14.693a6.1 6.1 0 0 1-2.051 1.338a5.5 5.5 0 0 1-2.194.186a3 3 0 0 1-2.194-1.162a3.98 3.98 0 0 1 .066-4.531c1.448-1.821 3.85-1.722 5.836-2.04v-1.02a1.448 1.448 0 0 0-1.854-1.34c-.933.154-1.24.626-1.525 1.47c-.088.21-.263.231-.472.187c-.603 0-1.206-.098-1.81-.175c-.285 0-.647-.165-.526-.527c.124-.542.364-1.05.702-1.492a4.56 4.56 0 0 1 3.379-1.722a5.62 5.62 0 0 1 4.3.943a3.83 3.83 0 0 1 1.02 3.204v4.059a2.62 2.62 0 0 0 .592 1.667c.156.16.276.35.352.56a.38.38 0 0 1-.11.384c-.549.46-1.097.932-1.646 1.382a.504.504 0 0 1-.757 0a4.9 4.9 0 0 1-1.108-1.371m-.493-4.388c-1.35.076-3.182.263-3.291 1.974c-.06.475.056.956.329 1.35a1.48 1.48 0 0 0 2.194-.11c.888-.878.779-2.15.724-3.27zm-1.536 9.928A15.04 15.04 0 0 1 2.146 16.6c-.154-.098-.253-.493.055-.384a20.14 20.14 0 0 0 14.92 1.91c.997-.187 1.919-.703 2.895-.878c.867.395-1.24 1.228-1.525 1.448a15.9 15.9 0 0 1-6.472 1.536"></svg:path><svg:path fill="currentColor" d="M19.994 16.58c-.592 0-1.042.054-1.59.12c0 0-.121 0-.121-.055c.208-.811 2.808-.998 3.488-.636c.384.208.176.746.143 1.097a4 4 0 0 1-1.207 2.194c-.197.22-.406 0-.263-.208a6.3 6.3 0 0 0 .592-2.063c.044-.493-.735-.395-1.042-.45"></svg:path>`,
})
export class MageAmazonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAppleIcon],svg[mage-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.89 8.748a4.22 4.22 0 0 0-2.227 4.086a4.46 4.46 0 0 0 2.744 3.828a.4.4 0 0 1 0 .094a11.8 11.8 0 0 1-2.45 4.11a3.12 3.12 0 0 1-1.66 1.06a2.9 2.9 0 0 1-1.448-.118c-.495-.153-.978-.353-1.484-.495a4.23 4.23 0 0 0-2.661.236q-.644.235-1.308.4a2 2 0 0 1-1.566-.294a5.9 5.9 0 0 1-1.413-1.284a12.4 12.4 0 0 1-2.673-5.994a7.54 7.54 0 0 1 .435-4.44a5.06 5.06 0 0 1 3.734-3.062a4.26 4.26 0 0 1 2.272.189l1.555.53c.273.105.575.105.848 0a19 19 0 0 1 2.014-.648a4.86 4.86 0 0 1 5.11 1.59z"></svg:path><svg:path fill="currentColor" d="M16.191 2a3.9 3.9 0 0 1-.235 1.814a4.93 4.93 0 0 1-2.143 2.496a3.1 3.1 0 0 1-1.614.436c-.153 0-.188 0-.2-.2a4.18 4.18 0 0 1 .907-2.709a4.7 4.7 0 0 1 3.05-1.813z"></svg:path>`,
})
export class MageAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArchiveIcon],svg[mage-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4.382 8.813v8.5c0 .845.344 1.656.957 2.253a3.3 3.3 0 0 0 2.308.934h8.706c.866 0 1.696-.336 2.308-.934a3.15 3.15 0 0 0 .957-2.253v-8.5m0-5.313H4.382c-.901 0-1.632.714-1.632 1.594v2.125c0 .88.73 1.593 1.632 1.593h15.236c.901 0 1.632-.713 1.632-1.593V5.094c0-.88-.73-1.594-1.632-1.594"></svg:path><svg:path stroke-miterlimit="10" d="M12 17v-5"></svg:path><svg:path stroke-linejoin="round" d="m9.707 14.895l1.967 1.967a.46.46 0 0 0 .652 0l1.967-1.967"></svg:path></svg:g>`,
})
export class MageArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArchiveDrawerIcon],svg[mage-archive-drawer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.194 9.079V7.821c0-.538-.216-1.054-.602-1.434a2.07 2.07 0 0 0-1.453-.594H6.86a2.07 2.07 0 0 0-1.453.594c-.386.38-.602.896-.602 1.434V9.08"></svg:path><svg:path d="M6.861 5.793V4.779c0-.538.217-1.054.602-1.435a2.07 2.07 0 0 1 1.454-.594h6.166a2.07 2.07 0 0 1 1.454.594c.385.38.602.897.602 1.435v1.014m.781 3.043H6.08c-1.84 0-3.33 1.47-3.33 3.286v5.842c0 1.815 1.49 3.286 3.33 3.286h11.84c1.84 0 3.33-1.471 3.33-3.286v-5.842c0-1.815-1.49-3.286-3.33-3.286"></svg:path><svg:path d="M7.889 12.893v1.014c0 .538.216 1.054.602 1.434c.385.38.908.594 1.453.594h4.112a2.07 2.07 0 0 0 1.453-.594c.386-.38.602-.896.602-1.434v-1.014"></svg:path></svg:g>`,
})
export class MageArchiveDrawerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownIcon],svg[mage-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M12 20V4"></svg:path><svg:path stroke-linejoin="round" d="m4.34 12.968l6.572 6.572a1.53 1.53 0 0 0 2.176 0l6.573-6.572"></svg:path></svg:g>`,
})
export class MageArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArchiveFillIcon],svg[mage-archive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.62 2.725H4.39A2.37 2.37 0 0 0 2 5.065v2.12a2.38 2.38 0 0 0 1.64 2.29v7.86a3.9 3.9 0 0 0 1.18 2.79a4 4 0 0 0 2.83 1.15h8.71a4 4 0 0 0 2.83-1.15a3.9 3.9 0 0 0 1.18-2.79v-7.86A2.38 2.38 0 0 0 22 7.235v-2.12a2.36 2.36 0 0 0-2.38-2.39m-4.79 12.67l-2 2a1.3 1.3 0 0 1-.39.26a1.1 1.1 0 0 1-.31.08h-.3a1.4 1.4 0 0 1-.29-.08a1.2 1.2 0 0 1-.39-.26l-2-2a.75.75 0 0 1 1.06-1.06l1 1v-3.36a.75.75 0 1 1 1.5 0v3.37l1-1a.75.75 0 0 1 1.06 1.06zm5.67-8.21a.86.86 0 0 1-.88.85H4.39a.87.87 0 0 1-.89-.85v-2.12a.86.86 0 0 1 .89-.84h15.23a.85.85 0 0 1 .88.84z"></svg:path>`,
})
export class MageArchiveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownCircleIcon],svg[mage-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M12 17.542V6.458"></svg:path><svg:path stroke-linejoin="round" d="m6.722 12.697l4.529 4.58a1.057 1.057 0 0 0 1.499 0l4.528-4.58"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownCircleFillIcon],svg[mage-arrow-down-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m6 11.65l-4.53 4.58a1.9 1.9 0 0 1-.67.45a1.9 1.9 0 0 1-.79.16a2 2 0 0 1-.79-.16a1.85 1.85 0 0 1-.66-.45L6.03 13.4a1 1 0 1 1 1.42-1.41l3.56 3.6V6.46a1 1 0 1 1 2 0v9.08l3.57-3.55A1.001 1.001 0 0 1 18 13.4"></svg:path>`,
})
export class MageArrowDownCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownLeftIcon],svg[mage-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M6.343 17.657L17.657 6.343"></svg:path><svg:path stroke-linejoin="round" d="M5.899 7.267v9.296A1.53 1.53 0 0 0 7.437 18.1h9.296"></svg:path></svg:g>`,
})
export class MageArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArchiveDrawerFillIcon],svg[mage-archive-drawer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.97 8.685v-.8a2.74 2.74 0 0 0-.83-2a2.9 2.9 0 0 0-1.23-.71v-.37a2.77 2.77 0 0 0-.82-2a2.82 2.82 0 0 0-2-.8H8.92a2.8 2.8 0 0 0-2.81 2.77v.37a2.9 2.9 0 0 0-1.23.71a2.74 2.74 0 0 0-.82 2v.8a4 4 0 0 0-2.06 3.5v5.84a4.07 4.07 0 0 0 4.08 4h11.84a4.07 4.07 0 0 0 4.08-4v-5.84a4 4 0 0 0-2.03-3.47m-3.09 5.28a2.78 2.78 0 0 1-2.8 2.78H9.97a2.81 2.81 0 0 1-2.62-1.725a2.8 2.8 0 0 1-.21-1.085v-1a.75.75 0 0 1 1.5 0v1a1.27 1.27 0 0 0 .38.9c.248.244.582.381.93.38h4.11a1.32 1.32 0 0 0 .92-.38a1.22 1.22 0 0 0 .38-.9v-1a.75.75 0 1 1 1.5 0zm1.59-5.78a3 3 0 0 0-.53 0H6.1a3 3 0 0 0-.52 0v-.3a1.23 1.23 0 0 1 .38-.9a1.32 1.32 0 0 1 .92-.38h10.28c.348 0 .682.136.93.38a1.27 1.27 0 0 1 .38.9z"></svg:path>`,
})
export class MageArchiveDrawerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownLeftCircleIcon],svg[mage-arrow-down-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m8.232 15.768l7.832-7.842"></svg:path><svg:path stroke-linejoin="round" d="M7.926 8.612v6.396a1.055 1.055 0 0 0 1.055 1.056h6.397"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowDownLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownLeftCircleFillIcon],svg[mage-arrow-down-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m4.77 6.88l-6.38 6.39h5a1 1 0 0 1 0 2h-6.4a2 2 0 0 1-1.26-.44a1 1 0 0 1-.19-.15a1 1 0 0 1-.14-.16a2 2 0 0 1-.46-1.29V8.61a1 1 0 0 1 2 0v5l6.43-6.44a1 1 0 1 1 1.41 1.41z"></svg:path>`,
})
export class MageArrowDownLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownLeftSquareIcon],svg[mage-arrow-down-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="m8.187 15.813l7.626-7.626"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7.889 8.845v6.238a1.03 1.03 0 0 0 1.027 1.028h6.24"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowDownLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownLeftSquareFillIcon],svg[mage-arrow-down-left-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.27 6.89l-6.2 6.2h4.84a1 1 0 0 1 0 2H8.92a2 2 0 0 1-1.26-.45a.7.7 0 0 1-.16-.14a.7.7 0 0 1-.13-.16a2 2 0 0 1-.46-1.28V8.82a1 1 0 0 1 2 0v4.86l6.22-6.22a1.001 1.001 0 1 1 1.41 1.41z"></svg:path>`,
})
export class MageArrowDownLeftSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownRightIcon],svg[mage-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M17.657 17.657L6.343 6.343"></svg:path><svg:path stroke-linejoin="round" d="M7.267 18.101h9.296a1.53 1.53 0 0 0 1.538-1.538V7.267"></svg:path></svg:g>`,
})
export class MageArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownRightCircleIcon],svg[mage-arrow-down-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M15.768 15.768L7.926 7.926"></svg:path><svg:path stroke-linejoin="round" d="M8.612 16.075h6.396a1.056 1.056 0 0 0 1.056-1.056V8.622"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowDownRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownRightCircleFillIcon],svg[mage-arrow-down-right-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5 13.27a2 2 0 0 1-.42 1.23a.8.8 0 0 1-.16.22a1 1 0 0 1-.2.15a2 2 0 0 1-1.22.49H8.6a1 1 0 0 1 0-2h5L7.16 8.67a1 1 0 0 1 1.41-1.41l6.39 6.38v-5a1 1 0 1 1 2 0z"></svg:path>`,
})
export class MageArrowDownRightCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownRightSquareIcon],svg[mage-arrow-down-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M15.813 15.813L8.187 8.187"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.845 16.111h6.238a1.03 1.03 0 0 0 1.028-1.028V8.845"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowDownRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownRightSquareFillIcon],svg[mage-arrow-down-right-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.86 13.08a2 2 0 0 1-.46 1.28a1 1 0 0 1-.29.29a2 2 0 0 1-1.28.46H8.85a1 1 0 0 1 0-2h4.85L7.5 8.89a1 1 0 1 1 1.41-1.41l6.2 6.2V8.84a1 1 0 0 1 2 0z"></svg:path>`,
})
export class MageArrowDownRightSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownSquareIcon],svg[mage-arrow-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M12 17.19V6.398"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m6.861 12.462l4.41 4.42a1.03 1.03 0 0 0 1.459 0l4.41-4.42"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowDownSquareFillIcon],svg[mage-arrow-down-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.6 11.17l-4.41 4.42c-.188.19-.413.339-.66.44a2 2 0 0 1-1.56 0a2 2 0 0 1-.66-.44l-4.41-4.42a1 1 0 1 1 1.42-1.41L11 15.2V6.4a1 1 0 0 1 2 0v8.77l3.43-3.41a1.001 1.001 0 0 1 1.42 1.41"></svg:path>`,
})
export class MageArrowDownSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowLeftIcon],svg[mage-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M4 12h16"></svg:path><svg:path stroke-linejoin="round" d="M11.033 4.34L4.46 10.911a1.53 1.53 0 0 0 0 2.176l6.573 6.573"></svg:path></svg:g>`,
})
export class MageArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowLeftCircleIcon],svg[mage-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M6.458 12h11.084"></svg:path><svg:path stroke-linejoin="round" d="m11.303 6.722l-4.528 4.529a1.056 1.056 0 0 0 0 1.499l4.528 4.528"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowLeftCircleFillIcon],svg[mage-arrow-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75M17.54 13h-9l3.51 3.57a1 1 0 0 1 0 1.41a1 1 0 0 1-1.41 0l-4.53-4.52a2.2 2.2 0 0 1-.45-.67a2 2 0 0 1 0-1.58a2.1 2.1 0 0 1 .45-.67l4.53-4.53a1 1 0 1 1 1.41 1.42L8.48 11h9.1a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageArrowLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowLeftSquareIcon],svg[mage-arrow-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M6.81 12H17.6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11.537 6.861l-4.419 4.41a1.03 1.03 0 0 0 0 1.459l4.42 4.409"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowLeftSquareFillIcon],svg[mage-arrow-left-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.35 11H8.83l3.41 3.43a1.002 1.002 0 0 1-.326 1.636a1 1 0 0 1-.384.074a1 1 0 0 1-.71-.29L6.4 13.44a2.1 2.1 0 0 1-.44-.66a2 2 0 0 1 0-1.56a2.1 2.1 0 0 1 .44-.66l4.42-4.41a1 1 0 1 1 1.41 1.42L8.79 11h8.8a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageArrowLeftSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowRightIcon],svg[mage-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M20 12H4"></svg:path><svg:path stroke-linejoin="round" d="m12.968 19.66l6.572-6.572a1.53 1.53 0 0 0 0-2.176L12.968 4.34"></svg:path></svg:g>`,
})
export class MageArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowRightCircleIcon],svg[mage-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M17.542 12H6.458"></svg:path><svg:path stroke-linejoin="round" d="m12.697 17.278l4.58-4.528a1.06 1.06 0 0 0 0-1.5l-4.58-4.528"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowRightCircleFillIcon],svg[mage-arrow-right-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m6.43 11a2.2 2.2 0 0 1-.45.67l-4.58 4.53a1 1 0 0 1-1.42-.01a1 1 0 0 1 0-1.41l3.61-3.57H6.44a1 1 0 0 1 0-2h9.09l-3.55-3.57a1 1 0 1 1 1.42-1.41l4.58 4.53c.19.194.343.42.45.67a2 2 0 0 1 0 1.58z"></svg:path>`,
})
export class MageArrowRightCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowRightSquareIcon],svg[mage-arrow-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M17.396 12H6.604"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12.678 17.139l4.46-4.41a1.03 1.03 0 0 0 .226-1.124a1 1 0 0 0-.225-.335l-4.46-4.409"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowRightSquareFillIcon],svg[mage-arrow-right-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m3 10.78a2.2 2.2 0 0 1-.45.66l-4.46 4.41a1 1 0 0 1-.7.29a1 1 0 0 1-.71-.3a1 1 0 0 1 0-1.41L15.5 13H6.6a1 1 0 0 1 0-2h8.82l-3.44-3.43a1 1 0 1 1 1.4-1.42l4.46 4.41c.19.19.343.414.45.66c.2.5.2 1.06 0 1.56z"></svg:path>`,
})
export class MageArrowRightSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpIcon],svg[mage-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M12 4v16"></svg:path><svg:path stroke-linejoin="round" d="M19.66 11.033L13.089 4.46a1.53 1.53 0 0 0-2.176 0L4.34 11.033"></svg:path></svg:g>`,
})
export class MageArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpCircleIcon],svg[mage-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M12 6.458v11.084"></svg:path><svg:path stroke-linejoin="round" d="m17.278 11.303l-4.529-4.528a1.056 1.056 0 0 0-1.498 0l-4.529 4.528"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpCircleFillIcon],svg[mage-arrow-up-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m6 10.26a1 1 0 0 1-1.42 0l-3.57-3.57v9.1a1 1 0 0 1-2 0v-9l-3.57 3.51a1 1 0 1 1-1.41-1.41l4.55-4.53a2.07 2.07 0 0 1 1.46-.61a2 2 0 0 1 .79.16c.253.1.482.254.67.45l4.53 4.53a1 1 0 0 1-.04 1.37z"></svg:path>`,
})
export class MageArrowUpCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpLeftIcon],svg[mage-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m6.343 6.343l11.314 11.314"></svg:path><svg:path stroke-linejoin="round" d="M16.733 5.899H7.437A1.53 1.53 0 0 0 5.9 7.437v9.296"></svg:path></svg:g>`,
})
export class MageArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpLeftCircleIcon],svg[mage-arrow-up-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m8.232 8.232l7.832 7.832"></svg:path><svg:path stroke-linejoin="round" d="M15.388 7.926H8.992A1.056 1.056 0 0 0 7.936 8.98v6.397"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowUpLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpLeftCircleFillIcon],svg[mage-arrow-up-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m4.77 15a1 1 0 0 1-1.41 0l-6.38-6.37v5a1 1 0 1 1-2 0v-6.4a2 2 0 0 1 .4-1.21a1.1 1.1 0 0 1 .18-.25a.8.8 0 0 1 .21-.16a2.05 2.05 0 0 1 1.26-.44h6.4a1 1 0 0 1 0 2h-5l6.43 6.44a1 1 0 0 1-.09 1.41z"></svg:path>`,
})
export class MageArrowUpLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpLeftSquareIcon],svg[mage-arrow-up-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="m8.187 8.187l7.626 7.626"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.155 7.889H8.916A1.03 1.03 0 0 0 7.89 8.917v6.238"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowUpLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpLeftSquareFillIcon],svg[mage-arrow-up-left-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.25 14.5a1 1 0 0 1-1.41 0l-6.2-6.2v4.84a1 1 0 0 1-2 0V8.9a2 2 0 0 1 .46-1.28a1 1 0 0 1 .29-.29a2 2 0 0 1 1.28-.46h6.24a1 1 0 0 1 0 2H10.3l6.22 6.22a1 1 0 0 1-.02 1.41"></svg:path>`,
})
export class MageArrowUpLeftSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpRightIcon],svg[mage-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M17.657 6.343L6.343 17.657"></svg:path><svg:path stroke-linejoin="round" d="M18.101 16.733V7.437A1.53 1.53 0 0 0 16.563 5.9H7.267"></svg:path></svg:g>`,
})
export class MageArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpRightCircleIcon],svg[mage-arrow-up-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m15.768 8.232l-7.842 7.832"></svg:path><svg:path stroke-linejoin="round" d="M16.074 15.388V8.992a1.055 1.055 0 0 0-1.055-1.056H8.612"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageArrowUpRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpRightCircleFillIcon],svg[mage-arrow-up-right-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5.08 13.64a1 1 0 0 1-2 0v-5l-6.44 6.43a1.001 1.001 0 1 1-1.42-1.41l6.39-6.38h-5a1 1 0 0 1 0-2h6.4a2 2 0 0 1 1.25.42q.114.068.21.16a.3.3 0 0 1 .09.11a.4.4 0 0 1 .07.1a2 2 0 0 1 .44 1.26z"></svg:path>`,
})
export class MageArrowUpRightCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpRightSquareIcon],svg[mage-arrow-up-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="m15.813 8.187l-7.626 7.626"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.111 15.155V8.917a1.03 1.03 0 0 0-1.028-1.028H8.845"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowUpRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpRightSquareFillIcon],svg[mage-arrow-up-right-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.86 13.16a1 1 0 1 1-2 0V10.3l-6.22 6.22a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.41l6.2-6.2H8.84a1 1 0 0 1 0-2h6.24a2 2 0 0 1 1.28.46a1 1 0 0 1 .29.29a2 2 0 0 1 .46 1.28z"></svg:path>`,
})
export class MageArrowUpRightSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpSquareIcon],svg[mage-arrow-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M12 6.81V17.6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17.14 11.537l-4.41-4.419a1.03 1.03 0 0 0-1.46 0l-4.409 4.42"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowUpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpSquareFillIcon],svg[mage-arrow-up-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.59 10.25a1 1 0 0 1-1.41 0L13 8.81v8.8a1 1 0 1 1-2 0V8.84l-3.43 3.41a1 1 0 1 1-1.41-1.42l4.41-4.42a2 2 0 0 1 2.88 0l4.41 4.42a1 1 0 0 1-.02 1.42"></svg:path>`,
})
export class MageArrowUpSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowlistIcon],svg[mage-arrowlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.104 5.552H21M8.104 12H21M8.104 18.448H21m-18-8.06L4.612 12L3 13.612M3 3.94l1.612 1.612L3 7.164m0 9.672l1.612 1.612L3 20.06"></svg:path>`,
})
export class MageArrowlistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowsAllDirectionIcon],svg[mage-arrows-all-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.5 12h-19m15.833 3.167L21.5 12l-3.167-3.167M5.667 15.167L2.5 12l3.167-3.167m3.166 9.5L12 21.5l3.167-3.167M8.833 5.667L12 2.5l3.167 3.167M12 21.5v-19"></svg:path>`,
})
export class MageArrowsAllDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageArrowsAllDirection2Icon],svg[mage-arrows-all-direction-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.375 20.375L3.625 3.625m11.163 16.75h5.587v-5.587M3.625 9.212V3.625h5.587M3.625 14.788v5.587h5.587m5.576-16.75h5.587v5.587M3.625 20.375l16.75-16.75"></svg:path>`,
})
export class MageArrowsAllDirection2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageAttachmentIcon],svg[mage-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.948 7.308L7.42 12.835a2.607 2.607 0 1 0 3.689 3.688l5.982-5.982a4.55 4.55 0 0 0 0-6.452a4.55 4.55 0 0 0-6.4.065l-6.034 5.918a6.517 6.517 0 0 0 9.215 9.214l7.377-7.312"></svg:path>`,
})
export class MageAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBagAIcon],svg[mage-bag-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.45 9.23h11.1a1.85 1.85 0 0 1 1.85 1.85v6.472a3.7 3.7 0 0 1-3.7 3.698H8.3a3.7 3.7 0 0 1-3.7-3.698V11.08a1.85 1.85 0 0 1 1.85-1.85"></svg:path><svg:path d="M16.625 11.553V7.381a4.62 4.62 0 0 0-2.852-4.278a4.627 4.627 0 0 0-6.398 4.278v4.172"></svg:path></svg:g>`,
})
export class MageBagAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBagAFillIcon],svg[mage-bag-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.41 9.238a2.62 2.62 0 0 0-1.84-.77h-.18v-1.06a5.32 5.32 0 0 0-1.57-3.81a5.6 5.6 0 0 0-1.76-1.19a5.44 5.44 0 0 0-4.12 0a5.6 5.6 0 0 0-1.75 1.17a5.43 5.43 0 0 0-1.57 3.8v1.1h-.17a2.61 2.61 0 0 0-2.6 2.6v6.48a4.44 4.44 0 0 0 4.45 4.44h7.4a4.44 4.44 0 0 0 3.14-1.3a4.4 4.4 0 0 0 1.31-3.14v-6.48a2.57 2.57 0 0 0-.74-1.84m-11.27 2.31a.75.75 0 1 1-1.5 0v-1.58h1.5zm0-3.08v-1.06a4 4 0 0 1 1.13-2.74a4.1 4.1 0 0 1 1.26-.84a3.92 3.92 0 0 1 4.26.84a4 4 0 0 1 .84 1.26c.195.468.294.972.29 1.48v1.1zm9.25 3.08a.75.75 0 1 1-1.5 0v-1.58h1.5z"></svg:path>`,
})
export class MageBagAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBagBIcon],svg[mage-bag-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.45 9.23h11.1a1.85 1.85 0 0 1 1.85 1.85v6.472a3.7 3.7 0 0 1-3.7 3.698H8.3a3.7 3.7 0 0 1-3.7-3.698V11.08a1.85 1.85 0 0 1 1.85-1.85"></svg:path><svg:path d="M7.375 9.23V7.381A4.62 4.62 0 0 1 12 2.75a4.627 4.627 0 0 1 4.625 4.631v1.85"></svg:path></svg:g>`,
})
export class MageBagBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBagBFillIcon],svg[mage-bag-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.41 9.238a2.62 2.62 0 0 0-1.84-.77h-.18v-1.06a5.32 5.32 0 0 0-1.57-3.81a5.6 5.6 0 0 0-1.76-1.19a5.44 5.44 0 0 0-4.12 0a5.6 5.6 0 0 0-1.75 1.17a5.43 5.43 0 0 0-1.57 3.8v1.1h-.17a2.61 2.61 0 0 0-2.6 2.6v6.48a4.44 4.44 0 0 0 4.45 4.44h7.4a4.44 4.44 0 0 0 3.14-1.3a4.4 4.4 0 0 0 1.31-3.14v-6.48a2.57 2.57 0 0 0-.74-1.84m-3.52-.77H8.14v-1.06a4 4 0 0 1 1.13-2.74a4.1 4.1 0 0 1 1.26-.84a3.92 3.92 0 0 1 4.26.84a4 4 0 0 1 .84 1.26c.195.468.294.972.29 1.48z"></svg:path>`,
})
export class MageBagBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBarCodeScanIcon],svg[mage-bar-code-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 8.917V5.833a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083v-3.084m-18.5 0v3.084a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 5.833v3.084m3.189-.835v7.836M8.97 8.082v7.836M12 8.082v7.836m3.03-7.836v7.836m3.031-7.836v7.836"></svg:path>`,
})
export class MageBarCodeScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBasketIcon],svg[mage-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.298 9.566H4.702a1.96 1.96 0 0 0-1.535.744a1.94 1.94 0 0 0-.363 1.66l1.565 6.408a3.9 3.9 0 0 0 1.4 2.072c.682.519 1.517.8 2.376.8h7.708c.859 0 1.694-.281 2.376-.8a3.9 3.9 0 0 0 1.4-2.072l1.565-6.407a1.94 1.94 0 0 0-1.044-2.208a2 2 0 0 0-.854-.197M8.087 13.46v3.895M12 13.46v3.895m3.913-3.895v3.895m2.935-7.789a6.8 6.8 0 0 0-2.006-4.82A6.86 6.86 0 0 0 12 2.75a6.86 6.86 0 0 0-4.842 1.996a6.8 6.8 0 0 0-2.005 4.82"></svg:path>`,
})
export class MageBasketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBasketFillIcon],svg[mage-basket-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.947 10.941a2.8 2.8 0 0 0-.52-1.09a2.8 2.8 0 0 0-.94-.76a2.5 2.5 0 0 0-.92-.25a7.46 7.46 0 0 0-2.19-4.62a7.6 7.6 0 0 0-10.74 0a7.46 7.46 0 0 0-2.19 4.62a2.5 2.5 0 0 0-.92.25a2.7 2.7 0 0 0-.94.76a2.74 2.74 0 0 0-.52 2.3l1.57 6.43a4.65 4.65 0 0 0 4.5 3.42h7.71a4.67 4.67 0 0 0 4.51-3.44l1.56-6.41c.1-.396.11-.81.03-1.21m-13.1 6.42a.75.75 0 0 1-1.5 0v-3.94a.75.75 0 1 1 1.5 0zm3.91 0a.75.75 0 1 1-1.5 0v-3.94a.75.75 0 0 1 1.5 0zm3.91 0a.75.75 0 1 1-1.5 0v-3.94a.75.75 0 0 1 1.5 0zm-10.71-8.54a6 6 0 0 1 1.74-3.54a6.11 6.11 0 0 1 8.62 0a6 6 0 0 1 1.74 3.54z"></svg:path>`,
})
export class MageBasketFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryChargingIcon],svg[mage-battery-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.333 5.87H5.556A2.806 2.806 0 0 0 2.75 8.674v6.65a2.806 2.806 0 0 0 2.806 2.806h8.777a2.806 2.806 0 0 0 2.806-2.806v-6.65a2.806 2.806 0 0 0-2.806-2.806m5.355 9.221h.534a1.03 1.03 0 0 0 1.028-1.028V9.95a1.03 1.03 0 0 0-1.028-1.028h-.534"></svg:path><svg:path d="M10.972 8.917L7.89 12H12l-3.083 3.083"></svg:path></svg:g>`,
})
export class MageBatteryChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryChargingFillIcon],svg[mage-battery-charging-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.31 5.12H5.53a3.55 3.55 0 0 0-3.55 3.55v6.65a3.56 3.56 0 0 0 3.55 3.56h8.78a3.57 3.57 0 0 0 3.56-3.56V8.68a3.56 3.56 0 0 0-3.56-3.56m-1.6 7.6L9.63 15.8a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.41l1.37-1.38H7.9a1 1 0 0 1-.71-1.71l3.08-3.08a1 1 0 1 1 1.42 1.41l-1.38 1.38h1.7a1 1 0 0 1 .7 1.71m7.49 3.13h-.49a.75.75 0 1 1 0-1.5h.53a.27.27 0 0 0 .28-.28V9.96a.3.3 0 0 0-.08-.2a.32.32 0 0 0-.2-.08h-.53a.75.75 0 1 1 0-1.5h.53a1.78 1.78 0 0 1 1.78 1.78v4.16a1.78 1.78 0 0 1-1.78 1.78z"></svg:path>`,
})
export class MageBatteryChargingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryDeadIcon],svg[mage-battery-dead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.333 5.87H5.556A2.806 2.806 0 0 0 2.75 8.674v6.65a2.806 2.806 0 0 0 2.806 2.806h8.777a2.806 2.806 0 0 0 2.806-2.806v-6.65a2.806 2.806 0 0 0-2.806-2.806m5.355 9.221h.534a1.03 1.03 0 0 0 1.028-1.028V9.95a1.03 1.03 0 0 0-1.028-1.028h-.534"></svg:path><svg:path stroke-miterlimit="10" d="M12.013 9.931L7.876 14.07m0-4.139l4.137 4.138"></svg:path></svg:g>`,
})
export class MageBatteryDeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryDeadFillIcon],svg[mage-battery-dead-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.33 5.12H5.55A3.55 3.55 0 0 0 2 8.67v6.65a3.56 3.56 0 0 0 3.55 3.56h8.78a3.56 3.56 0 0 0 3.55-3.56V8.68a3.55 3.55 0 0 0-3.55-3.56m-1.61 8.24a1 1 0 0 1-.71 1.71a1 1 0 0 1-.71-.29l-1.36-1.36l-1.36 1.36a1 1 0 0 1-.71.29a1 1 0 0 1-.71-1.71L8.52 12l-1.36-1.36a1.003 1.003 0 1 1 1.42-1.42l1.36 1.36l1.36-1.36a1.004 1.004 0 0 1 1.42 1.42L11.36 12zm7.5 2.49h-.54a.75.75 0 1 1 0-1.5h.54a.27.27 0 0 0 .28-.28V9.96a.25.25 0 0 0-.09-.2a.27.27 0 0 0-.19-.08h-.54a.75.75 0 0 1 0-1.5h.54A1.79 1.79 0 0 1 22 9.96v4.16a1.78 1.78 0 0 1-1.78 1.78z"></svg:path>`,
})
export class MageBatteryDeadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryEmptyIcon],svg[mage-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.333 5.87H5.556A2.806 2.806 0 0 0 2.75 8.674v6.65a2.806 2.806 0 0 0 2.806 2.806h8.777a2.806 2.806 0 0 0 2.806-2.806v-6.65a2.806 2.806 0 0 0-2.806-2.806m5.355 9.221h.534a1.03 1.03 0 0 0 1.028-1.028V9.95a1.03 1.03 0 0 0-1.028-1.028h-.534"></svg:path>`,
})
export class MageBatteryEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryEmptyFillIcon],svg[mage-battery-empty-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.89 8.67v6.65a3.56 3.56 0 0 1-3.55 3.56H5.56A3.57 3.57 0 0 1 2 15.32V8.67a3.56 3.56 0 0 1 3.56-3.55h8.78a3.55 3.55 0 0 1 3.55 3.55m2.34 7.17h-.54a.75.75 0 1 1 0-1.5h.54a.27.27 0 0 0 .19-.08a.32.32 0 0 0 .08-.2V9.95a.3.3 0 0 0-.08-.2a.27.27 0 0 0-.19-.08h-.54a.75.75 0 1 1 0-1.5h.54A1.78 1.78 0 0 1 22 9.95v4.16a1.77 1.77 0 0 1-.52 1.26a1.8 1.8 0 0 1-1.25.47"></svg:path>`,
})
export class MageBatteryEmptyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryFullIcon],svg[mage-battery-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.333 5.87H5.556A2.806 2.806 0 0 0 2.75 8.674v6.65a2.806 2.806 0 0 0 2.806 2.806h8.777a2.806 2.806 0 0 0 2.806-2.806v-6.65a2.806 2.806 0 0 0-2.806-2.806m5.355 9.221h.534a1.03 1.03 0 0 0 1.028-1.028V9.95a1.03 1.03 0 0 0-1.028-1.028h-.534M6.861 9.95v4.11m3.083-4.11v4.11m3.084-4.11v4.11"></svg:path>`,
})
export class MageBatteryFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryFullFillIcon],svg[mage-battery-full-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.32 5.12H5.55a3.56 3.56 0 0 0-3.56 3.55v6.65a3.57 3.57 0 0 0 3.56 3.56h8.77a3.57 3.57 0 0 0 3.56-3.56V8.68a3.56 3.56 0 0 0-3.56-3.56m-6.47 8.94a1 1 0 0 1-2 0v-4.1a1 1 0 1 1 2 0zm3.08 0a1 1 0 1 1-2 0v-4.1a1 1 0 0 1 2 0zm3.09 0a1 1 0 1 1-2 0v-4.1a1 1 0 0 1 2 0zm6.21 1.79h-.53a.75.75 0 1 1 0-1.5h.53a.28.28 0 0 0 .2-.08a.32.32 0 0 0 .08-.2V9.96a.27.27 0 0 0-.28-.28h-.53a.75.75 0 1 1 0-1.5h.53a1.8 1.8 0 0 1 1.26.52a1.75 1.75 0 0 1 .52 1.26v4.16a1.77 1.77 0 0 1-.52 1.26a1.8 1.8 0 0 1-1.26.47"></svg:path>`,
})
export class MageBatteryFullFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryHalfIcon],svg[mage-battery-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.333 5.87H5.556A2.806 2.806 0 0 0 2.75 8.674v6.65a2.806 2.806 0 0 0 2.806 2.806h8.777a2.806 2.806 0 0 0 2.806-2.806v-6.65a2.806 2.806 0 0 0-2.806-2.806m5.355 9.221h.534a1.03 1.03 0 0 0 1.028-1.028V9.95a1.03 1.03 0 0 0-1.028-1.028h-.534M6.861 9.95v4.11m3.083-4.11v4.11"></svg:path>`,
})
export class MageBatteryHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryHalfFillIcon],svg[mage-battery-half-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.33 5.12H5.55A3.55 3.55 0 0 0 2 8.67v6.65a3.56 3.56 0 0 0 3.55 3.56h8.78a3.57 3.57 0 0 0 3.56-3.56V8.68a3.56 3.56 0 0 0-3.56-3.56m-6.47 8.94a1 1 0 1 1-2 0v-4.1a1 1 0 0 1 2 0zm3.08 0a1 1 0 1 1-2 0v-4.1a1 1 0 0 1 2 0zm9.28 1.79h-.53a.75.75 0 1 1 0-1.5h.53a.3.3 0 0 0 .2-.08a.32.32 0 0 0 .08-.2V9.96a.28.28 0 0 0-.08-.2a.3.3 0 0 0-.2-.08h-.53a.75.75 0 1 1 0-1.5h.53A1.78 1.78 0 0 1 22 9.96v4.16a1.78 1.78 0 0 1-1.78 1.78z"></svg:path>`,
})
export class MageBatteryHalfFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryLowIcon],svg[mage-battery-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.333 5.87H5.556A2.806 2.806 0 0 0 2.75 8.674v6.65a2.806 2.806 0 0 0 2.806 2.806h8.777a2.806 2.806 0 0 0 2.806-2.806v-6.65a2.806 2.806 0 0 0-2.806-2.806m5.355 9.221h.534a1.03 1.03 0 0 0 1.028-1.028V9.95a1.03 1.03 0 0 0-1.028-1.028h-.534M6.861 9.95v4.11"></svg:path>`,
})
export class MageBatteryLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBatteryLowFillIcon],svg[mage-battery-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.325 5.12h-8.78a3.55 3.55 0 0 0-3.55 3.55v6.65a3.56 3.56 0 0 0 3.55 3.56h8.78a3.57 3.57 0 0 0 3.56-3.56V8.68a3.56 3.56 0 0 0-3.56-3.56m-6.47 8.94a1 1 0 0 1-2 0v-4.1a1 1 0 1 1 2 0zm12.36 1.79h-.53a.75.75 0 0 1 0-1.5h.54a.27.27 0 0 0 .19-.08a.28.28 0 0 0 .09-.2V9.96a.25.25 0 0 0-.09-.2a.27.27 0 0 0-.19-.08h-.54a.75.75 0 0 1 0-1.5h.54a1.78 1.78 0 0 1 1.78 1.78v4.16a1.78 1.78 0 0 1-1.78 1.78z"></svg:path>`,
})
export class MageBatteryLowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBehanceIcon],svg[mage-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.354 11.107V9.502c0-.095 0-.133.124-.133c1.063 0 1.927-.063 2.356.19c.43.252.448.6.455.704s.004.253-.196.616s-1.095.37-1.741.37h-.855c-.105 0-.143-.038-.143-.142m2.946 1.682a1.12 1.12 0 0 1-.324 1.662a1.7 1.7 0 0 1-.646.133H7.487c-.095 0-.133 0-.133-.123v-1.9c0-.095 0-.133.124-.133h1.225c.76 0 1.235-.067 1.597.36"></svg:path><svg:path fill="currentColor" d="M16.989 11.909a.87.87 0 0 0-.566-.498a1.84 1.84 0 0 0-1.492.235a1.43 1.43 0 0 0-.4.809c0 .107 0 .127.127.127h2.37c.117 0 .117 0 .107-.147a1.3 1.3 0 0 0-.147-.526m0 0a.87.87 0 0 0-.566-.498a1.84 1.84 0 0 0-1.492.235a1.43 1.43 0 0 0-.4.809c0 .107 0 .127.127.127h2.37c.117 0 .117 0 .107-.147a1.3 1.3 0 0 0-.147-.526M18.1 2.5H6.4a3.9 3.9 0 0 0-3.9 3.9v11.7A3.9 3.9 0 0 0 6.4 22h11.7a3.9 3.9 0 0 0 3.9-3.9V6.4a3.9 3.9 0 0 0-3.9-3.9m-3.822 6.21c0-.077 0-.107.088-.107h3.159v.82s.003.058-.049.058h-3.061c-.137 0-.137 0-.137-.136zm-2.925 7.167c-1.2.653-3.217.39-5.606.39V8.184h3.812c.975 0 2.135.244 2.447 1.277a1.95 1.95 0 0 1-.975 2.409a2.213 2.213 0 0 1 .312 4.007zm7.264-2.301h-3.9c-.107 0-.205.058-.186.195c.117.575.38 1.18.976 1.268a1.47 1.47 0 0 0 1.686-.663s.049-.059.078-.059h1.268s.078 0 .058.068a3.5 3.5 0 0 1-.585 1.043a3.05 3.05 0 0 1-4.787-.75a2.5 2.5 0 0 1-.253-.878a3.023 3.023 0 0 1 2.203-3.597c2.213-.478 3.617 1.043 3.617 3.188a.165.165 0 0 1-.185.185zm-2.184-2.165a1.8 1.8 0 0 0-.771-.042c-.257.04-.487.089-.721.277c-.234.187-.358.503-.4.809c0 .107 0 .127.127.127h2.36c.117 0 .117 0 .107-.147a1.3 1.3 0 0 0-.147-.526a.87.87 0 0 0-.565-.498z"></svg:path>`,
})
export class MageBehanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBellNotificationSquareIcon],svg[mage-bell-notification-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M11.974 16.208h4.786a1.095 1.095 0 0 0 1.063-1.53c-.252-.764-1.262-1.682-1.262-2.584c0-2.003 0-2.53-.986-3.708a3.5 3.5 0 0 0-1.162-.903l-.55-.267a.77.77 0 0 1-.36-.513a1.42 1.42 0 0 0-1.53-1.2a1.423 1.423 0 0 0-1.49 1.2a.77.77 0 0 1-.398.513l-.55.267a3.5 3.5 0 0 0-1.163.903c-.986 1.177-.986 1.705-.986 3.708c0 .902-.964 1.728-1.216 2.539c-.153.489-.237 1.575 1.04 1.575z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M14.267 16.208a2.24 2.24 0 0 1-1.408 2.132a2.2 2.2 0 0 1-.885.162a2.245 2.245 0 0 1-2.294-2.294"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageBellNotificationSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBellNotificationSquareFillIcon],svg[mage-bell-notification-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2.02h-6.5A6.76 6.76 0 0 0 2 8.77v6.46a6.76 6.76 0 0 0 6.75 6.75h6.5A6.76 6.76 0 0 0 22 15.23v-6.5a6.76 6.76 0 0 0-6.75-6.71m2 13.12a.5.5 0 0 1-.08.23a.26.26 0 0 1-.15.12a.5.5 0 0 1-.24 0H7.23c-.18 0-.33 0-.37-.09a.8.8 0 0 1 0-.57q.183-.444.47-.83a3.5 3.5 0 0 0 .78-1.92c0-2 0-2.28.82-3.26a3 3 0 0 1 .93-.72l.57-.28a1.24 1.24 0 0 0 .48-.4c.15-.178.25-.391.29-.62a.77.77 0 0 1 .26-.46a.74.74 0 0 1 .45-.15h.15a.9.9 0 0 1 .28 0a.8.8 0 0 1 .23.13a.68.68 0 0 1 .27.48c.044.2.126.39.24.56c.129.187.3.342.5.45l.55.27c.358.17.676.416.93.72c.82 1 .82 1.29.82 3.26c.078.735.37 1.43.84 2q.295.402.49.86a.34.34 0 0 1 .02.22zm-3.53 2.23c-.216.222-.48.392-.77.5a2.3 2.3 0 0 1-.94.17a3 3 0 0 1-.89-.16a2.32 2.32 0 0 1-1.21-1.16h4.25a2 2 0 0 1-.46.65z"></svg:path>`,
})
export class MageBellNotificationSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoltIcon],svg[mage-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.567 14.54V9.46a4.16 4.16 0 0 0-2.082-3.602l-4.403-2.55a4.16 4.16 0 0 0-4.164 0l-4.403 2.55A4.16 4.16 0 0 0 3.433 9.46v5.08a4.16 4.16 0 0 0 2.082 3.602l4.403 2.55a4.16 4.16 0 0 0 4.164 0l4.403-2.55a4.16 4.16 0 0 0 2.082-3.602"></svg:path><svg:path d="M12.906 8.346h-1.812a2.08 2.08 0 0 0-1.81 1.041l-.907 1.572a2.08 2.08 0 0 0 0 2.082l.906 1.572a2.08 2.08 0 0 0 1.811 1.04h1.812a2.08 2.08 0 0 0 1.81-1.04l.907-1.572a2.08 2.08 0 0 0 0-2.082l-.906-1.572a2.08 2.08 0 0 0-1.811-1.04"></svg:path></svg:g>`,
})
export class MageBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoltFillIcon],svg[mage-bolt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.662 6.998a4.9 4.9 0 0 0-1.791-1.801l-4.414-2.552a5 5 0 0 0-4.914 0L5.139 5.197A4.92 4.92 0 0 0 2.677 9.45v5.085a4.91 4.91 0 0 0 2.452 4.253l4.414 2.552a4.9 4.9 0 0 0 4.914 0l4.414-2.552a4.9 4.9 0 0 0 1.791-1.791c.432-.75.66-1.598.66-2.463V9.45c0-.86-.228-1.707-.66-2.452m-4.854 6.255l-.81 1.402a2.5 2.5 0 0 1-.921.93c-.384.22-.819.338-1.261.34h-1.632a2.56 2.56 0 0 1-1.26-.34a2.5 2.5 0 0 1-.922-.93l-.81-1.402a2.49 2.49 0 0 1 0-2.512l.81-1.4c.216-.39.535-.712.921-.932c.384-.22.819-.337 1.261-.34h1.632c.442.003.877.12 1.26.34c.385.223.703.544.921.931l.811 1.401a2.49 2.49 0 0 1 0 2.512"></svg:path>`,
})
export class MageBoltFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookIcon],svg[mage-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.75 16.401a1.15 1.15 0 0 0 1.16 1.15a16.7 16.7 0 0 1 3.535.333c1.64.204 3.204.81 4.555 1.761V6.442A10.24 10.24 0 0 0 7.445 4.68a16.6 16.6 0 0 0-3.6-.322a1.15 1.15 0 0 0-1.074 1.15zm18.5 0a1.15 1.15 0 0 1-1.16 1.15a16.7 16.7 0 0 0-3.535.333c-1.64.204-3.204.81-4.555 1.761V6.442a10.24 10.24 0 0 1 4.555-1.762a16.6 16.6 0 0 1 3.6-.322a1.15 1.15 0 0 1 1.073 1.15z"></svg:path>`,
})
export class MageBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookFillIcon],svg[mage-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16.653c0 .25-.05.5-.15.73a2 2 0 0 1-.41.62c-.181.171-.391.31-.62.41a1.9 1.9 0 0 1-.74.14a15.2 15.2 0 0 0-3.37.32a9.3 9.3 0 0 0-3.71 1.27V5.233c1.091-.52 2.26-.858 3.46-1a17.4 17.4 0 0 1 3.71-.33a1.92 1.92 0 0 1 1.3.61c.33.352.513.817.51 1.3zM11 5.233v14.91a9.25 9.25 0 0 0-3.65-1.27a16.2 16.2 0 0 0-3.43-.32a1.9 1.9 0 0 1-.74-.14a2.2 2.2 0 0 1-.62-.41a1.8 1.8 0 0 1-.41-.62a1.8 1.8 0 0 1-.15-.73v-10.9a1.9 1.9 0 0 1 1.78-1.89a17 17 0 0 1 3.79.33A10.7 10.7 0 0 1 11 5.233"></svg:path>`,
})
export class MageBookFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookTextIcon],svg[mage-book-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.756 16.358a1.09 1.09 0 0 0 1.154 1.198a16.6 16.6 0 0 1 3.54.338c1.635.2 3.197.794 4.552 1.731V6.448A10.16 10.16 0 0 0 7.45 4.694a16.6 16.6 0 0 0-3.605-.316a1.09 1.09 0 0 0-1.09 1.09zm18.492 0a1.09 1.09 0 0 1-1.154 1.154a16.6 16.6 0 0 0-3.54.338a10.16 10.16 0 0 0-4.552 1.775V6.448a10.16 10.16 0 0 1 4.552-1.754a16.6 16.6 0 0 1 3.605-.316a1.09 1.09 0 0 1 1.089 1.155zM5.621 8.234h1.252m-1.252 6.011h1.834M5.78 11.24h3.35"></svg:path>`,
})
export class MageBookTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookTextFillIcon],svg[mage-book-text-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.797v10.76a1.75 1.75 0 0 1-.12.72a1.86 1.86 0 0 1-1.83 1.19a15.4 15.4 0 0 0-3.35.32a9.7 9.7 0 0 0-3.7 1.29V5.218a10.8 10.8 0 0 1 3.46-1a17 17 0 0 1 3.72-.32a1.6 1.6 0 0 1 .71.15c.23.098.437.24.61.42a2 2 0 0 1 .39.64c.08.221.118.455.11.69M7.6 4.187a17 17 0 0 0-3.76-.33a1.81 1.81 0 0 0-1.83 1.83v10.87a1.79 1.79 0 0 0 .51 1.46a1.82 1.82 0 0 0 1.4.56a15.6 15.6 0 0 1 3.44.34a9.3 9.3 0 0 1 3.64 1.23V5.217a10.4 10.4 0 0 0-3.4-1.03m-2 3.52h1.25a.75.75 0 1 1 0 1.5H5.6a.75.75 0 1 1 0-1.5m1.84 7.51H5.6a.75.75 0 1 1 0-1.5h1.84a.75.75 0 1 1 0 1.5m1.67-3H5.76a.75.75 0 1 1 0-1.5h3.35a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageBookTextFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkIcon],svg[mage-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"></svg:path>`,
})
export class MageBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkCheckIcon],svg[mage-bookmark-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"></svg:path><svg:path d="m9 9.918l1.689 1.689a.64.64 0 0 0 .908 0L15 8.204"></svg:path></svg:g>`,
})
export class MageBookmarkCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkCheckFillIcon],svg[mage-bookmark-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.59 3.204a4.4 4.4 0 0 0-3.19-1.2H8.67a4.49 4.49 0 0 0-4.65 4.34v13.36c.03.447.178.879.43 1.25c.254.36.6.646 1 .83c.408.18.857.249 1.3.2a2.47 2.47 0 0 0 1.2-.5l3.43-2.54a1.07 1.07 0 0 1 1.23 0l3.41 2.53a2.46 2.46 0 0 0 1.22.51h.3a2.5 2.5 0 0 0 1-.22c.403-.18.749-.467 1-.83a2.47 2.47 0 0 0 .44-1.3V6.324a4.4 4.4 0 0 0-1.39-3.12m-3 5.53l-3.4 3.4a1.4 1.4 0 0 1-.45.31a1.6 1.6 0 0 1-.53.1a1.4 1.4 0 0 1-.54-.1a1.4 1.4 0 0 1-.45-.32l-1.69-1.68a.75.75 0 0 1 1.06-1.06l1.62 1.62l3.32-3.33a.75.75 0 0 1 1.06 0a.74.74 0 0 1 0 1.06"></svg:path>`,
})
export class MageBookmarkCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkCrossIcon],svg[mage-bookmark-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"></svg:path><svg:path stroke-miterlimit="10" d="m14.25 7.75l-4.5 4.49m0-4.48l4.5 4.49"></svg:path></svg:g>`,
})
export class MageBookmarkCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkCrossFillIcon],svg[mage-bookmark-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.59 3.204a4.4 4.4 0 0 0-3.19-1.2H8.67a4.49 4.49 0 0 0-4.65 4.34v13.36c.03.447.178.879.43 1.25c.254.36.6.646 1 .83c.408.18.857.249 1.3.2a2.47 2.47 0 0 0 1.2-.5l3.43-2.54a1.07 1.07 0 0 1 1.23 0l3.41 2.53a2.46 2.46 0 0 0 1.22.51h.3a2.5 2.5 0 0 0 1-.22a2.4 2.4 0 0 0 1-.83a2.47 2.47 0 0 0 .44-1.3V6.324a4.4 4.4 0 0 0-1.39-3.12m-3.79 8.51a.74.74 0 0 1 0 1.06a.72.72 0 0 1-.53.23a.8.8 0 0 1-.53-.22l-1.73-1.72l-1.71 1.71a.753.753 0 1 1-1.06-1.07l1.71-1.7l-1.71-1.71a.75.75 0 0 1 1.06-1.06l1.71 1.71l1.73-1.72a.75.75 0 0 1 1.06 0a.74.74 0 0 1 0 1.06l-1.72 1.72z"></svg:path>`,
})
export class MageBookmarkCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkDownloadIcon],svg[mage-bookmark-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"></svg:path><svg:path stroke-miterlimit="10" d="M12 13V7"></svg:path><svg:path stroke-linejoin="round" d="m9.249 10.474l2.36 2.36a.55.55 0 0 0 .782 0l2.36-2.36"></svg:path></svg:g>`,
})
export class MageBookmarkDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkDownloadFillIcon],svg[mage-bookmark-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.59 3.204a4.42 4.42 0 0 0-3.19-1.2H8.67a4.44 4.44 0 0 0-3.22 1.2a4.5 4.5 0 0 0-1.43 3.14v13.36c.03.448.178.879.43 1.25c.254.36.6.646 1 .83c.408.18.857.25 1.3.2a2.47 2.47 0 0 0 1.2-.5l3.43-2.54a1.07 1.07 0 0 1 1.23 0l3.41 2.53c.352.278.774.455 1.22.51h.3a2.5 2.5 0 0 0 1-.22a2.4 2.4 0 0 0 1-.83a2.47 2.47 0 0 0 .44-1.3V6.324a4.4 4.4 0 0 0-1.39-3.12m-3.28 7.8l-2.37 2.36a1.2 1.2 0 0 1-.42.28a1 1 0 0 1-.34.09h-.3a1 1 0 0 1-.34-.09a1.3 1.3 0 0 1-.42-.28l-2.36-2.36a.75.75 0 0 1 1.06-1.06l1.47 1.47v-4.41a.75.75 0 1 1 1.5 0v4.41l1.48-1.47a.75.75 0 0 1 1.06 1.06z"></svg:path>`,
})
export class MageBookmarkDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkFillIcon],svg[mage-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.97 6.321v13.33a2.47 2.47 0 0 1-1.45 2.13a2.53 2.53 0 0 1-1.3.2a2.46 2.46 0 0 1-1.22-.51l-3.41-2.53a1.07 1.07 0 0 0-1.23 0l-3.43 2.56a2.47 2.47 0 0 1-1.2.5h-.3a2.4 2.4 0 0 1-1-.22a2.5 2.5 0 0 1-1-.83a2.53 2.53 0 0 1-.43-1.25V6.342a4.49 4.49 0 0 1 4.65-4.34h6.73A4.49 4.49 0 0 1 20 6.321z"></svg:path>`,
})
export class MageBookmarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkMinusIcon],svg[mage-bookmark-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"></svg:path><svg:path stroke-miterlimit="10" d="M9 10.007h6"></svg:path></svg:g>`,
})
export class MageBookmarkMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkMinusFillIcon],svg[mage-bookmark-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.585 3.194a4.4 4.4 0 0 0-3.19-1.2h-6.73a4.49 4.49 0 0 0-4.65 4.34v13.36c.03.447.178.879.43 1.25c.254.36.6.646 1 .83a2.4 2.4 0 0 0 1 .22h.3a2.47 2.47 0 0 0 1.2-.5l3.43-2.54a1.07 1.07 0 0 1 1.23 0l3.41 2.53c.352.278.774.454 1.22.51c.443.049.892-.02 1.3-.2a2.47 2.47 0 0 0 1.45-2.13V6.314a4.4 4.4 0 0 0-1.4-3.12m-3.57 7.55h-6a.75.75 0 1 1 0-1.5h6a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageBookmarkMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkPlusIcon],svg[mage-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"></svg:path><svg:path stroke-miterlimit="10" d="M11.993 7v6M9 10.007h6"></svg:path></svg:g>`,
})
export class MageBookmarkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkPlusFillIcon],svg[mage-bookmark-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.585 3.194a4.4 4.4 0 0 0-3.19-1.2h-6.73a4.49 4.49 0 0 0-4.65 4.34v13.36c.03.447.178.879.43 1.25c.254.36.6.646 1 .83a2.4 2.4 0 0 0 1 .22h.3a2.47 2.47 0 0 0 1.2-.5l3.43-2.54a1.07 1.07 0 0 1 1.23 0l3.41 2.53c.352.278.774.454 1.22.51c.443.049.892-.02 1.3-.2a2.47 2.47 0 0 0 1.45-2.13V6.314a4.4 4.4 0 0 0-1.4-3.12m-3.57 7.55h-2.25v2.25a.75.75 0 1 1-1.5 0v-2.25h-2.25a.75.75 0 1 1 0-1.5h2.25v-2.25a.75.75 0 1 1 1.5 0v2.25h2.25a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageBookmarkPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkQuestionMarkIcon],svg[mage-bookmark-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"></svg:path><svg:path stroke-miterlimit="10" d="M10.274 7.628a1.834 1.834 0 0 1 1.999-1.04a1.78 1.78 0 0 1 1.304.93a1.545 1.545 0 0 1-.9 2.124a1.14 1.14 0 0 0-.734 1.03v.424"></svg:path><svg:path stroke-linejoin="round" d="M11.91 13.442h.005"></svg:path></svg:g>`,
})
export class MageBookmarkQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkQuestionMarkFillIcon],svg[mage-bookmark-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.59 3.204a4.42 4.42 0 0 0-3.19-1.2H8.67a4.49 4.49 0 0 0-4.65 4.34v13.36c.03.447.178.879.43 1.25c.254.36.6.646 1 .83c.408.18.857.249 1.3.2a2.47 2.47 0 0 0 1.2-.5l3.43-2.54a1.07 1.07 0 0 1 1.23 0l3.41 2.53a2.46 2.46 0 0 0 1.22.51h.3a2.5 2.5 0 0 0 1-.22a2.4 2.4 0 0 0 1-.83a2.47 2.47 0 0 0 .44-1.3V6.324a4.4 4.4 0 0 0-1.39-3.12m-6.65 11a.75.75 0 0 1-.75-.75a.74.74 0 0 1 .74-.75a.75.75 0 1 1 0 1.5zm2.38-5.12a2.26 2.26 0 0 1-1.38 1.28a.3.3 0 0 0-.15.13a.3.3 0 0 0-.07.21v.4a.75.75 0 1 1-1.5 0v-.42a1.9 1.9 0 0 1 .34-1.06a1.93 1.93 0 0 1 .88-.67a1.2 1.2 0 0 0 .31-.18a.9.9 0 0 0 .19-.28a.9.9 0 0 0 .06-.32a.7.7 0 0 0-.08-.32a1.05 1.05 0 0 0-.3-.34a1.1 1.1 0 0 0-.44-.18a1.17 1.17 0 0 0-.72.1c-.21.118-.379.3-.48.52a.75.75 0 0 1-1.36-.63a2.55 2.55 0 0 1 2.81-1.46a2.4 2.4 0 0 1 1.06.43c.325.23.59.535.77.89c.158.31.24.652.24 1a2.3 2.3 0 0 1-.15.89z"></svg:path>`,
})
export class MageBookmarkQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkUploadIcon],svg[mage-bookmark-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m10.94 18.339l-3.43 2.548a1.71 1.71 0 0 1-2.76-1.23V6.35a3.735 3.735 0 0 1 3.87-3.597h6.76a3.74 3.74 0 0 1 3.87 3.597v13.309a1.708 1.708 0 0 1-2.76 1.229l-3.43-2.548a1.8 1.8 0 0 0-2.12 0"></svg:path><svg:path stroke-miterlimit="10" d="M12 7v6"></svg:path><svg:path stroke-linejoin="round" d="m14.752 9.526l-2.361-2.36a.55.55 0 0 0-.782 0l-2.36 2.36"></svg:path></svg:g>`,
})
export class MageBookmarkUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBookmarkUploadFillIcon],svg[mage-bookmark-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.59 3.204a4.4 4.4 0 0 0-3.19-1.2H8.67a4.49 4.49 0 0 0-4.65 4.34v13.36c.03.447.178.879.43 1.25c.254.36.6.646 1 .83c.408.18.857.249 1.3.2a2.47 2.47 0 0 0 1.2-.5l3.43-2.54a1.07 1.07 0 0 1 1.23 0l3.41 2.53a2.46 2.46 0 0 0 1.22.51h.3a2.5 2.5 0 0 0 1-.22a2.4 2.4 0 0 0 1-.83a2.47 2.47 0 0 0 .44-1.3V6.324a4.4 4.4 0 0 0-1.39-3.12m-3.28 6.85a.74.74 0 0 1-.53.22a.7.7 0 0 1-.53-.22l-1.48-1.47v4.42a.75.75 0 1 1-1.5 0v-4.42l-1.47 1.47a.75.75 0 0 1-1.06-1.06l2.36-2.36c.124-.122.27-.22.43-.29a1.1 1.1 0 0 1 .33-.08a.9.9 0 0 1 .32 0q.183.015.35.09a1.4 1.4 0 0 1 .42.28l2.36 2.36a.75.75 0 0 1 .03 1.06z"></svg:path>`,
})
export class MageBookmarkUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxIcon],svg[mage-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.382 8.813v8.5c0 .845.344 1.656.957 2.253a3.3 3.3 0 0 0 2.308.934h8.706c.866 0 1.696-.336 2.308-.934a3.15 3.15 0 0 0 .957-2.253v-8.5m0-5.313H4.382c-.901 0-1.632.714-1.632 1.594v2.125c0 .88.73 1.593 1.632 1.593h15.236c.901 0 1.632-.713 1.632-1.593V5.094c0-.88-.73-1.594-1.632-1.594"></svg:path>`,
})
export class MageBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dIcon],svg[mage-box-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M10.55 2.876L4.595 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l5.957-3.306a2.98 2.98 0 0 0 1.529-2.611V8.793a2.98 2.98 0 0 0-1.529-2.61L13.45 2.876a2.98 2.98 0 0 0-2.898 0Z"></svg:path><svg:path d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path></svg:g>`,
})
export class MageBox3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dCheckIcon],svg[mage-box-3d-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12m5.466 3.996l1.408 1.407a.53.53 0 0 0 .757 0l2.835-2.836"></svg:path></svg:g>`,
})
export class MageBox3dCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dCheckFillIcon],svg[mage-box-3d-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.954 8.804v2.21a.75.75 0 1 1-1.5 0v-2.21a2 2 0 0 0-.13-.76l-7.3 4.38v8.19q.173-.051.33-.14l2.53-1.4a.75.75 0 0 1 1 .29a.75.75 0 0 1-.3 1l-2.52 1.4a3.72 3.72 0 0 1-3.62 0l-6-3.3a3.79 3.79 0 0 1-1.92-3.27v-6.39c0-.669.18-1.325.52-1.9q.087-.155.2-.29a1 1 0 0 1 .12-.15a3.45 3.45 0 0 1 1.08-.93l6-3.31a3.81 3.81 0 0 1 3.62 0l6 3.31c.421.231.789.548 1.08.93l.12.15q.114.135.2.29a3.64 3.64 0 0 1 .49 1.9"></svg:path><svg:path fill="currentColor" d="M18.524 18.264a1.3 1.3 0 0 1-.49-.09a1.4 1.4 0 0 1-.42-.29l-1.4-1.4a.737.737 0 0 1 0-1.06a.75.75 0 0 1 1.06 0l1.25 1.25l2.69-2.68a.75.75 0 0 1 1.06 1.06l-2.84 2.84a1.2 1.2 0 0 1-.41.27a1.2 1.2 0 0 1-.5.1"></svg:path>`,
})
export class MageBox3dCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dCrossIcon],svg[mage-box-3d-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path stroke-linejoin="round" d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path><svg:path stroke-miterlimit="10" d="m22.935 14.745l-4 3.992m0-3.983l4 3.991"></svg:path></svg:g>`,
})
export class MageBox3dCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dCrossFillIcon],svg[mage-box-3d-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.695 8.804v2.21a.75.75 0 0 1-1.5 0v-2.21a2 2 0 0 0-.13-.76l-7.3 4.38v8.19q.173-.051.33-.14l2.53-1.4a.75.75 0 0 1 1 .29a.75.75 0 0 1-.3 1l-2.52 1.4a3.72 3.72 0 0 1-3.62 0l-6-3.3a3.79 3.79 0 0 1-1.92-3.27v-6.39c0-.669.18-1.325.52-1.9q.087-.155.2-.29a1 1 0 0 1 .12-.15a3.45 3.45 0 0 1 1.08-.93l6-3.31a3.81 3.81 0 0 1 3.62 0l6 3.31c.421.231.789.548 1.08.93l.12.15q.114.135.2.29a3.64 3.64 0 0 1 .49 1.9"></svg:path><svg:path fill="currentColor" d="M22.445 18.174a.75.75 0 1 1-1.06 1.06l-1.45-1.43l-1.49 1.42a.7.7 0 0 1-.53.22a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l1.46-1.46l-1.4-1.46a.75.75 0 0 1 0-1.06a.74.74 0 0 1 1.06 0l1.46 1.46l1.48-1.47a.76.76 0 0 1 1.07 0a.75.75 0 0 1 0 1.06l-1.47 1.47z"></svg:path>`,
})
export class MageBox3dCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dDownloadIcon],svg[mage-box-3d-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path stroke-linejoin="round" d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path><svg:path stroke-miterlimit="10" d="M19.97 19.245v-5"></svg:path><svg:path stroke-linejoin="round" d="m17.676 17.14l1.968 1.968a.46.46 0 0 0 .65 0l1.968-1.968"></svg:path></svg:g>`,
})
export class MageBox3dDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dDownloadFillIcon],svg[mage-box-3d-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.086 8.804v2.21a.75.75 0 1 1-1.5 0v-2.21a2 2 0 0 0-.13-.76l-7.3 4.38v8.19q.172-.051.33-.14l2.53-1.4a.75.75 0 0 1 1 .29a.75.75 0 0 1-.3 1l-2.52 1.4a3.72 3.72 0 0 1-3.62 0l-6-3.3a3.79 3.79 0 0 1-1.92-3.27v-6.39c0-.669.18-1.325.52-1.9q.086-.155.2-.29l.12-.15a3.45 3.45 0 0 1 1.08-.93l6-3.31a3.81 3.81 0 0 1 3.62 0l6 3.31c.42.231.788.548 1.08.93a1 1 0 0 1 .12.15q.113.135.2.29a3.64 3.64 0 0 1 .49 1.9"></svg:path><svg:path fill="currentColor" d="m22.196 17.624l-2 2a1.2 1.2 0 0 1-.39.26a1.1 1.1 0 0 1-.46.1q-.239 0-.46-.09a1.3 1.3 0 0 1-.4-.27l-2-2a.74.74 0 0 1 0-1.06a.75.75 0 0 1 1.06 0l1 1v-3.36a.75.75 0 0 1 1.5 0v3.38l1-1a.75.75 0 0 1 1.079-.02a.75.75 0 0 1-.02 1.08z"></svg:path>`,
})
export class MageBox3dDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dFillIcon],svg[mage-box-3d-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.22 6.894a3.7 3.7 0 0 0-1.4-1.37l-6-3.31a3.83 3.83 0 0 0-3.63 0l-6 3.31a3.7 3.7 0 0 0-1.4 1.37a3.74 3.74 0 0 0-.52 1.9v6.41a3.79 3.79 0 0 0 1.92 3.27l6 3.3a3.74 3.74 0 0 0 3.63 0l6-3.31a3.72 3.72 0 0 0 1.91-3.26v-6.36a3.64 3.64 0 0 0-.51-1.95m-1 8.31a2.2 2.2 0 0 1-1.14 1.95l-6 3.31q-.158.089-.33.14v-8.18l7.3-4.39c.092.242.136.5.13.76z"></svg:path>`,
})
export class MageBox3dFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dMinusIcon],svg[mage-box-3d-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path stroke-linejoin="round" d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path><svg:path stroke-miterlimit="10" d="M17.409 16.47h5"></svg:path></svg:g>`,
})
export class MageBox3dMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dMinusFillIcon],svg[mage-box-3d-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.945 8.804v2.21a.75.75 0 1 1-1.5 0v-2.21a2 2 0 0 0-.13-.76l-7.3 4.38v8.19a1.6 1.6 0 0 0 .33-.14l2.53-1.4a.75.75 0 0 1 1 .29a.75.75 0 0 1-.3 1l-2.52 1.4a3.7 3.7 0 0 1-1.81.47a3.8 3.8 0 0 1-1.82-.47l-5.95-3.3a3.79 3.79 0 0 1-1.92-3.27v-6.39c0-.669.18-1.325.52-1.9q.086-.155.2-.29l.12-.15a3.45 3.45 0 0 1 1.08-.93l6-3.31a3.81 3.81 0 0 1 3.62 0l6 3.31c.42.231.789.548 1.08.93q.068.069.12.15q.114.135.2.29c.32.58.476 1.237.45 1.9"></svg:path><svg:path fill="currentColor" d="M21.695 17.174h-5a.75.75 0 1 1 0-1.5h5a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageBox3dMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dNotificationIcon],svg[mage-box-3d-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path><svg:circle cx="20.329" cy="16.501" r="2.376"></svg:circle></svg:g>`,
})
export class MageBox3dNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dNotificationFillIcon],svg[mage-box-3d-notification-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 8.804v2.21a.75.75 0 1 1-1.5 0v-2.21a2 2 0 0 0-.13-.76l-7.3 4.38v8.19a1.6 1.6 0 0 0 .33-.14l2.53-1.4a.76.76 0 0 1 1 .29a.75.75 0 0 1-.3 1l-2.52 1.4a3.72 3.72 0 0 1-3.62 0l-6-3.3a3.79 3.79 0 0 1-1.92-3.27v-6.39c0-.669.18-1.325.52-1.9q.086-.155.2-.29a1 1 0 0 1 .12-.15a3.45 3.45 0 0 1 1.08-.93l6-3.31a3.81 3.81 0 0 1 3.62 0l6 3.31c.42.231.789.548 1.08.93l.12.15q.114.135.2.29a3.64 3.64 0 0 1 .49 1.9"></svg:path><svg:path fill="currentColor" d="M22.59 16.454a3.13 3.13 0 1 1-6.26.02a3.13 3.13 0 0 1 6.26-.02"></svg:path>`,
})
export class MageBox3dNotificationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dPlusIcon],svg[mage-box-3d-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path stroke-linejoin="round" d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path><svg:path stroke-miterlimit="10" d="M19.903 13.965v5m-2.494-2.495h5"></svg:path></svg:g>`,
})
export class MageBox3dPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dPlusFillIcon],svg[mage-box-3d-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.955 8.804v2.21a.75.75 0 1 1-1.5 0v-2.21a2 2 0 0 0-.13-.76l-7.3 4.38v8.19a1.6 1.6 0 0 0 .33-.14l2.53-1.4a.76.76 0 0 1 1 .29a.75.75 0 0 1-.3 1l-2.52 1.4a3.7 3.7 0 0 1-1.81.47a3.8 3.8 0 0 1-1.82-.47l-5.95-3.3a3.79 3.79 0 0 1-1.92-3.27v-6.39c0-.669.18-1.325.52-1.9q.086-.155.2-.29a3.56 3.56 0 0 1 1.2-1.08l6-3.31a3.81 3.81 0 0 1 3.62 0l6 3.31c.42.231.789.548 1.08.93q.067.069.12.15q.114.135.2.29c.32.58.476 1.237.45 1.9"></svg:path><svg:path fill="currentColor" d="M22.435 16.424a.75.75 0 0 1-.75.75h-1.76v1.75a.75.75 0 1 1-1.5 0v-1.75h-1.72a.75.75 0 1 1 0-1.5h1.74v-1.75a.75.75 0 1 1 1.5 0v1.75h1.76a.76.76 0 0 1 .73.75"></svg:path>`,
})
export class MageBox3dPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dQuestionMarkIcon],svg[mage-box-3d-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path stroke-linejoin="round" d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path><svg:path stroke-miterlimit="10" d="M18.15 14.714a1.33 1.33 0 0 1 1.452-.755a1.29 1.29 0 0 1 .948.675a1.12 1.12 0 0 1-.654 1.542a.83.83 0 0 0-.533.748v.309"></svg:path><svg:path stroke-linejoin="round" d="M19.34 18.937h.002"></svg:path></svg:g>`,
})
export class MageBox3dQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dQuestionMarkFillIcon],svg[mage-box-3d-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.715 8.804v2.21a.75.75 0 1 1-1.5 0v-2.21a2 2 0 0 0-.13-.76l-7.3 4.38v8.19a1.6 1.6 0 0 0 .33-.14l2.53-1.4a.75.75 0 0 1 1 .29a.75.75 0 0 1-.3 1l-2.52 1.4a3.72 3.72 0 0 1-3.62 0l-6-3.3a3.79 3.79 0 0 1-1.92-3.27v-6.39c0-.669.18-1.325.52-1.9q.086-.155.2-.29a1 1 0 0 1 .12-.15a3.45 3.45 0 0 1 1.08-.93l6-3.31a3.81 3.81 0 0 1 3.62 0l6 3.31c.42.231.788.548 1.08.93l.12.15q.113.135.2.29a3.64 3.64 0 0 1 .49 1.9"></svg:path><svg:path fill="currentColor" d="M19.395 17.944a.76.76 0 0 1-.75-.75v-.31c.004-.32.105-.63.29-.89a1.6 1.6 0 0 1 .73-.56l.16-.09a.4.4 0 0 0 .09-.13q.015-.075 0-.15a.5.5 0 0 0 0-.16a.5.5 0 0 0-.15-.15a.6.6 0 0 0-.89.23a.75.75 0 1 1-1.36-.63a2.11 2.11 0 0 1 2.27-1.18a2 2 0 0 1 .85.36a1.89 1.89 0 0 1 .82 1.49c.002.267-.049.532-.15.78a1.8 1.8 0 0 1-.45.64c-.192.18-.421.316-.67.4v.35a.75.75 0 0 1-.79.75m-.02 1.7a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class MageBox3dQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dScanIcon],svg[mage-box-3d-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M11.008 5.758L6.933 8.02a2.04 2.04 0 0 0-1.046 1.786v4.388a2.04 2.04 0 0 0 1.046 1.786l4.075 2.262a2.04 2.04 0 0 0 1.984 0l4.075-2.262a2.04 2.04 0 0 0 1.046-1.786V9.806a2.04 2.04 0 0 0-1.046-1.786l-4.075-2.262a2.04 2.04 0 0 0-1.984 0Z"></svg:path><svg:path d="M17.699 8.577L12 12L6.301 8.577M12 18.494V12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.25 7.889V5.833a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083V16.11m-18.5.001v2.056a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 5.833V7.89"></svg:path></svg:g>`,
})
export class MageBox3dScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dScanFillIcon],svg[mage-box-3d-scan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.48 8.38a2.8 2.8 0 0 0-1.05-1.002l-4.07-2.275a2.85 2.85 0 0 0-2.72 0L6.57 7.378a2.8 2.8 0 0 0-1.05 1.003c-.25.432-.381.924-.38 1.423v4.391c-.001.5.13.991.38 1.424c.253.423.616.77 1.05 1.002l4.07 2.266a2.82 2.82 0 0 0 2.72 0l4.07-2.266c.434-.233.797-.58 1.05-1.002c.249-.43.38-.917.38-1.414v-4.36a2.83 2.83 0 0 0-.38-1.464m-1.12 5.825c0 .229-.058.453-.17.652c-.119.2-.288.367-.49.481l-3.95 2.196V12.43l4.6-2.777q.007.075 0 .15zm3.89-5.575a.75.75 0 0 1-.75-.751V5.875a2.32 2.32 0 0 0-.68-1.655a2.35 2.35 0 0 0-1.65-.691h-3.09a.75.75 0 0 1-.75-.752a.753.753 0 0 1 .75-.752h3.09a3.85 3.85 0 0 1 2.71 1.133A3.8 3.8 0 0 1 22 5.875V7.88a.753.753 0 0 1-.75.751m-3.08 13.394h-3.09a.75.75 0 0 1-.75-.752a.753.753 0 0 1 .75-.752h3.09a2.32 2.32 0 0 0 2.155-1.44c.117-.284.176-.589.175-.896V16.12a.753.753 0 0 1 .75-.752a.75.75 0 0 1 .75.752v2.065a3.84 3.84 0 0 1-1.119 2.718a3.82 3.82 0 0 1-2.711 1.122m-9.25 0H5.83a3.8 3.8 0 0 1-2.711-1.122A3.83 3.83 0 0 1 2 18.185V16.12a.753.753 0 0 1 .75-.752a.75.75 0 0 1 .75.752v2.065a2.33 2.33 0 0 0 1.437 2.161a2.3 2.3 0 0 0 .893.175h3.09a.75.75 0 0 1 .75.752a.753.753 0 0 1-.75.752M2.75 8.631A.75.75 0 0 1 2 7.88V5.875a3.82 3.82 0 0 1 1.12-2.717a3.85 3.85 0 0 1 2.71-1.133h3.09a.75.75 0 0 1 .75.752a.753.753 0 0 1-.75.752H5.83a2.35 2.35 0 0 0-2.156 1.45a2.3 2.3 0 0 0-.174.896V7.88a.753.753 0 0 1-.75.751"></svg:path>`,
})
export class MageBox3dScanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dUploadIcon],svg[mage-box-3d-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M20.935 11.009V8.793a2.98 2.98 0 0 0-1.529-2.61l-5.957-3.307a2.98 2.98 0 0 0-2.898 0L4.594 6.182a2.98 2.98 0 0 0-1.529 2.611v6.414a2.98 2.98 0 0 0 1.529 2.61l5.957 3.307a2.98 2.98 0 0 0 2.898 0l2.522-1.4"></svg:path><svg:path stroke-linejoin="round" d="M20.33 6.996L12 12L3.67 6.996M12 21.49V12"></svg:path><svg:path stroke-miterlimit="10" d="M19.97 14.245v5"></svg:path><svg:path stroke-linejoin="round" d="m22.262 16.35l-1.967-1.967a.46.46 0 0 0-.652 0l-1.967 1.967"></svg:path></svg:g>`,
})
export class MageBox3dUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBox3dUploadFillIcon],svg[mage-box-3d-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.026 8.804v2.21a.75.75 0 1 1-1.5 0v-2.21a2 2 0 0 0-.13-.76l-7.3 4.38v8.19q.173-.051.33-.14l2.53-1.4a.75.75 0 0 1 1 .29a.75.75 0 0 1-.3 1l-2.52 1.4a3.72 3.72 0 0 1-3.62 0l-6-3.3a3.79 3.79 0 0 1-1.92-3.27v-6.39c0-.669.18-1.325.52-1.9q.086-.155.2-.29a3.56 3.56 0 0 1 1.2-1.08l6-3.31a3.81 3.81 0 0 1 3.62 0l6 3.31c.42.231.789.548 1.08.93q.067.069.12.15q.114.135.2.29a3.64 3.64 0 0 1 .49 1.9"></svg:path><svg:path fill="currentColor" d="M22.136 16.804a.74.74 0 0 1-1.06 0l-1-1v3.38a.75.75 0 0 1-1.5 0v-3.38l-1 1a.74.74 0 0 1-.53.22a.7.7 0 0 1-.53-.22a.74.74 0 0 1 0-1.06l2-2a1.4 1.4 0 0 1 .39-.27q.15-.062.31-.08h.32q.161.022.31.09a1 1 0 0 1 .38.26l2 2a.75.75 0 0 1-.09 1.06"></svg:path>`,
})
export class MageBox3dUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxCheckIcon],svg[mage-box-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.382 8.813v8.5c0 .845.344 1.656.957 2.253a3.3 3.3 0 0 0 2.308.934h8.706c.866 0 1.696-.336 2.308-.934a3.15 3.15 0 0 0 .957-2.253v-8.5m0-5.313H4.382c-.901 0-1.632.714-1.632 1.594v2.125c0 .88.73 1.593 1.632 1.593h15.236c.901 0 1.632-.713 1.632-1.593V5.094c0-.88-.73-1.594-1.632-1.594"></svg:path><svg:path d="m9 14.574l1.689 1.689a.637.637 0 0 0 .908 0L15 12.86"></svg:path></svg:g>`,
})
export class MageBoxCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxCheckFillIcon],svg[mage-box-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.62 2.725H4.39A2.37 2.37 0 0 0 2 5.065v2.12a2.38 2.38 0 0 0 1.64 2.29v7.86a3.9 3.9 0 0 0 1.18 2.79a4 4 0 0 0 2.83 1.15h8.71a4 4 0 0 0 2.83-1.15a3.9 3.9 0 0 0 1.18-2.79v-7.86A2.38 2.38 0 0 0 22 7.235v-2.12a2.36 2.36 0 0 0-2.38-2.39m-4.08 10.64l-3.4 3.4a1.42 1.42 0 0 1-.985.41a1.4 1.4 0 0 1-.535-.11a1.25 1.25 0 0 1-.45-.31l-1.69-1.68a.75.75 0 1 1 1.06-1.06l1.62 1.62l3.32-3.33a.75.75 0 0 1 1.079-.019a.75.75 0 0 1-.019 1.079m5-6.18a.86.86 0 0 1-.88.85H4.39a.87.87 0 0 1-.89-.85v-2.12a.86.86 0 0 1 .89-.84h15.23a.85.85 0 0 1 .88.84z"></svg:path>`,
})
export class MageBoxCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxCrossIcon],svg[mage-box-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4.382 8.813v8.5c0 .845.344 1.656.957 2.253a3.3 3.3 0 0 0 2.308.934h8.706c.866 0 1.696-.336 2.308-.934a3.15 3.15 0 0 0 .957-2.253v-8.5m0-5.313H4.382c-.901 0-1.632.714-1.632 1.594v2.125c0 .88.73 1.593 1.632 1.593h15.236c.901 0 1.632-.713 1.632-1.593V5.094c0-.88-.73-1.594-1.632-1.594"></svg:path><svg:path stroke-miterlimit="10" d="m14 12.656l-4 3.992m0-3.983l4 3.991"></svg:path></svg:g>`,
})
export class MageBoxCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxCrossFillIcon],svg[mage-box-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.62 2.725H4.39A2.37 2.37 0 0 0 2 5.065v2.12a2.38 2.38 0 0 0 1.64 2.29v7.86a3.9 3.9 0 0 0 1.18 2.79a4 4 0 0 0 2.83 1.15h8.71a4 4 0 0 0 2.83-1.15a3.9 3.9 0 0 0 1.18-2.79v-7.86A2.38 2.38 0 0 0 22 7.235v-2.12a2.36 2.36 0 0 0-2.38-2.39m-5.08 13.37a.74.74 0 0 1 0 1.06a.7.7 0 0 1-.53.22a.74.74 0 0 1-.53-.22L12 15.685l-1.46 1.46a.7.7 0 0 1-.53.22a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l1.46-1.46l-1.46-1.46a.75.75 0 0 1 1.06-1.06l1.46 1.46l1.48-1.47a.75.75 0 0 1 1.06 0a.74.74 0 0 1 0 1.06l-1.47 1.47zm6-8.91a.86.86 0 0 1-.88.85H4.39a.87.87 0 0 1-.89-.85v-2.12a.86.86 0 0 1 .89-.84h15.23a.85.85 0 0 1 .88.84z"></svg:path>`,
})
export class MageBoxCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxFillIcon],svg[mage-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.62 2.725H4.39A2.37 2.37 0 0 0 2 5.065v2.12a2.38 2.38 0 0 0 1.64 2.29v7.86a3.9 3.9 0 0 0 1.18 2.79a4 4 0 0 0 2.83 1.15h8.71a4 4 0 0 0 3.699-2.427a3.9 3.9 0 0 0 .311-1.513v-7.86A2.38 2.38 0 0 0 22 7.235v-2.12a2.36 2.36 0 0 0-2.38-2.39m.88 4.46a.86.86 0 0 1-.88.85H4.39a.87.87 0 0 1-.89-.85v-2.12a.86.86 0 0 1 .89-.84h15.23a.85.85 0 0 1 .88.84z"></svg:path>`,
})
export class MageBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxMinusIcon],svg[mage-box-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.382 8.813v8.5c0 .845.344 1.656.957 2.253a3.3 3.3 0 0 0 2.308.934h8.706c.866 0 1.696-.336 2.308-.934a3.15 3.15 0 0 0 .957-2.253v-8.5m0-5.313H4.382c-.901 0-1.632.714-1.632 1.594v2.125c0 .88.73 1.593 1.632 1.593h15.236c.901 0 1.632-.713 1.632-1.593V5.094c0-.88-.73-1.594-1.632-1.594M8.735 15.188h6.53"></svg:path>`,
})
export class MageBoxMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxMinusFillIcon],svg[mage-box-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.62 2.725H4.39A2.37 2.37 0 0 0 2 5.065v2.12a2.38 2.38 0 0 0 1.64 2.29v7.86a3.9 3.9 0 0 0 1.18 2.79a4 4 0 0 0 2.83 1.15h8.71a4 4 0 0 0 3.699-2.427c.202-.479.308-.993.311-1.513v-7.86A2.38 2.38 0 0 0 22 7.235v-2.12a2.36 2.36 0 0 0-2.38-2.39m-4.35 13.18H8.74a.75.75 0 0 1 0-1.5h6.53a.75.75 0 1 1 0 1.5m5.23-8.72a.86.86 0 0 1-.88.85H4.39a.87.87 0 0 1-.89-.85v-2.12a.86.86 0 0 1 .89-.84h15.23a.85.85 0 0 1 .88.84z"></svg:path>`,
})
export class MageBoxMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxPlusIcon],svg[mage-box-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4.382 8.813v8.5c0 .845.344 1.656.957 2.253a3.3 3.3 0 0 0 2.308.934h8.706c.866 0 1.696-.336 2.308-.934a3.15 3.15 0 0 0 .957-2.253v-8.5m0-5.313H4.382c-.901 0-1.632.714-1.632 1.594v2.125c0 .88.73 1.593 1.632 1.593h15.236c.901 0 1.632-.713 1.632-1.593V5.094c0-.88-.73-1.594-1.632-1.594"></svg:path><svg:path stroke-miterlimit="10" d="M11.995 12.156v5M9.5 14.662h5"></svg:path></svg:g>`,
})
export class MageBoxPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxPlusFillIcon],svg[mage-box-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.62 2.725H4.39A2.37 2.37 0 0 0 2 5.065v2.12a2.38 2.38 0 0 0 1.64 2.29v7.86a3.9 3.9 0 0 0 1.18 2.79a4 4 0 0 0 2.83 1.15h8.71a4 4 0 0 0 3.699-2.427c.202-.479.308-.993.311-1.513v-7.86A2.38 2.38 0 0 0 22 7.235v-2.12a2.36 2.36 0 0 0-2.38-2.39m-5.08 12.66h-1.75v1.74a.75.75 0 0 1-1.5 0v-1.74H9.54a.75.75 0 1 1 0-1.5h1.75v-1.76a.75.75 0 1 1 1.5 0v1.76h1.75a.75.75 0 0 1 0 1.5m6-8.2a.86.86 0 0 1-.88.85H4.39a.87.87 0 0 1-.89-.85v-2.12a.86.86 0 0 1 .89-.84h15.23a.85.85 0 0 1 .88.84z"></svg:path>`,
})
export class MageBoxPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxQuestionMarkIcon],svg[mage-box-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4.382 8.813v8.5c0 .845.344 1.656.957 2.253a3.3 3.3 0 0 0 2.308.934h8.706c.866 0 1.696-.336 2.308-.934a3.15 3.15 0 0 0 .957-2.253v-8.5m0-5.313H4.382c-.901 0-1.632.714-1.632 1.594v2.125c0 .88.73 1.593 1.632 1.593h15.236c.901 0 1.632-.713 1.632-1.593V5.094c0-.88-.73-1.594-1.632-1.594"></svg:path><svg:path stroke-miterlimit="10" d="M10.496 12.589a1.6 1.6 0 0 1 1.742-.906a1.55 1.55 0 0 1 1.137.81a1.345 1.345 0 0 1-.784 1.851a.99.99 0 0 0-.64.897v.37"></svg:path><svg:path stroke-linejoin="round" d="M11.922 17.656h.004"></svg:path></svg:g>`,
})
export class MageBoxQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxQuestionMarkFillIcon],svg[mage-box-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.62 2.725H4.39A2.37 2.37 0 0 0 2 5.065v2.12a2.38 2.38 0 0 0 1.64 2.29v7.86a3.9 3.9 0 0 0 1.18 2.79a4 4 0 0 0 2.83 1.15h8.71a4 4 0 0 0 2.83-1.15a3.9 3.9 0 0 0 1.18-2.79v-7.86A2.38 2.38 0 0 0 22 7.235v-2.12a2.36 2.36 0 0 0-2.38-2.39m-7.69 15.65a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m2.16-4.52a2.05 2.05 0 0 1-.51.72a2 2 0 0 1-.75.45l-.08.08a.2.2 0 0 0 0 .13v.35a.75.75 0 1 1-1.5 0v-.37c.005-.36.12-.708.33-1c.197-.284.476-.5.8-.62a.7.7 0 0 0 .16-.12a.6.6 0 0 0 .14-.2a.7.7 0 0 0 .05-.25a.5.5 0 0 0-.06-.24a.8.8 0 0 0-.23-.25a.9.9 0 0 0-.9-.06a.82.82 0 0 0-.38.4a.75.75 0 1 1-1.36-.63a2.36 2.36 0 0 1 2.56-1.33a2.32 2.32 0 0 1 1.66 1.2a2.2 2.2 0 0 1 .22.88a2.1 2.1 0 0 1-.15.86m6.41-6.67a.86.86 0 0 1-.88.85H4.39a.87.87 0 0 1-.89-.85v-2.12a.86.86 0 0 1 .89-.84h15.23a.85.85 0 0 1 .88.84z"></svg:path>`,
})
export class MageBoxQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxUploadIcon],svg[mage-box-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M4.382 8.813v8.5c0 .845.344 1.656.957 2.253a3.3 3.3 0 0 0 2.308.934h8.706c.866 0 1.696-.336 2.308-.934a3.15 3.15 0 0 0 .957-2.253v-8.5m0-5.313H4.382c-.901 0-1.632.714-1.632 1.594v2.125c0 .88.73 1.593 1.632 1.593h15.236c.901 0 1.632-.713 1.632-1.593V5.094c0-.88-.73-1.594-1.632-1.594"></svg:path><svg:path stroke-miterlimit="10" d="M12 12v5"></svg:path><svg:path stroke-linejoin="round" d="m14.293 14.105l-1.967-1.967a.46.46 0 0 0-.652 0l-1.967 1.967"></svg:path></svg:g>`,
})
export class MageBoxUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBoxUploadFillIcon],svg[mage-box-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.62 2.725H4.39A2.37 2.37 0 0 0 2 5.065v2.12a2.38 2.38 0 0 0 1.64 2.29v7.86a3.9 3.9 0 0 0 1.18 2.79a4 4 0 0 0 2.83 1.15h8.71a4 4 0 0 0 2.83-1.15a3.9 3.9 0 0 0 1.18-2.79v-7.86A2.38 2.38 0 0 0 22 7.235v-2.12a2.36 2.36 0 0 0-2.38-2.39m-4.79 11.88a.74.74 0 0 1-.53.22a.7.7 0 0 1-.53-.22l-1-1v3.38a.75.75 0 1 1-1.5 0v-3.38l-1 1a.75.75 0 0 1-1.06-1.06l2-2c.11-.112.244-.2.39-.26a1.1 1.1 0 0 1 .3-.08a.9.9 0 0 1 .32 0q.161.017.31.08q.219.094.39.26l2 2a.75.75 0 0 1-.09 1.06m5.67-7.42a.86.86 0 0 1-.88.85H4.39a.87.87 0 0 1-.89-.85v-2.12a.86.86 0 0 1 .89-.84h15.23a.85.85 0 0 1 .88.84z"></svg:path>`,
})
export class MageBoxUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBriefcaseIcon],svg[mage-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 8.912v1.544a1.03 1.03 0 0 1-1.028 1.03l-6.166 1.543v-.514a1.03 1.03 0 0 0-1.028-1.03h-2.056a1.027 1.027 0 0 0-1.028 1.03v.514l-6.166-1.544a1.027 1.027 0 0 1-1.028-1.03V8.913a2.576 2.576 0 0 1 2.57-2.574h13.36a2.575 2.575 0 0 1 2.57 2.574"></svg:path><svg:path d="m3.778 11.485l.36 7.288a2.204 2.204 0 0 0 2.178 1.977h11.368a2.197 2.197 0 0 0 2.178-1.977l.36-7.288"></svg:path><svg:path d="M13.028 11.485h-2.056a1.03 1.03 0 0 0-1.028 1.03v1.03c0 .568.46 1.028 1.028 1.028h2.056c.567 0 1.028-.46 1.028-1.029v-1.03c0-.568-.46-1.029-1.028-1.029m2.055-5.147V4.28a1.03 1.03 0 0 0-1.027-1.029H9.944a1.027 1.027 0 0 0-1.027 1.03v2.058"></svg:path></svg:g>`,
})
export class MageBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBriefcaseFillIcon],svg[mage-briefcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.286 12.548v.997a.28.28 0 0 1-.269.28h-2.054a.29.29 0 0 1-.279-.28v-.997a.4.4 0 0 1 0-.11a.2.2 0 0 1 .07-.09a.27.27 0 0 1 .19-.079h2.083a.27.27 0 0 1 .26.28"></svg:path><svg:path fill="currentColor" d="M21.003 6.616a3.3 3.3 0 0 0-2.343-.997h-2.84V4.313a1.73 1.73 0 0 0-.519-1.246a1.76 1.76 0 0 0-1.256-.529H9.946a1.785 1.785 0 0 0-1.774 1.775v1.306H5.34a3.33 3.33 0 0 0-2.343.997A3.26 3.26 0 0 0 2 8.96v1.495a1.75 1.75 0 0 0 .519 1.257c.153.154.336.276.538.359l.329 6.75a2.92 2.92 0 0 0 2.911 2.641h11.336c.737.01 1.45-.26 1.994-.757a3 3 0 0 0 .997-1.925l.33-6.71c.2-.085.382-.206.537-.358A1.8 1.8 0 0 0 22 10.455V8.96a3.3 3.3 0 0 0-.997-2.343M9.667 4.333a.28.28 0 0 1 .09-.19a.25.25 0 0 1 .19-.09h4.077a.25.25 0 0 1 .2.09c.05.05.079.119.08.19v1.306H9.646zm5.125 9.242a.2.2 0 0 1 0 .07a1.755 1.755 0 0 1-1.755 1.705h-2.054a1.765 1.765 0 0 1-1.765-1.705a.2.2 0 0 1 0-.07v-.997q0-.219.06-.429a1.6 1.6 0 0 1 .23-.548q.088-.143.209-.26c.247-.242.558-.408.897-.478q.18-.021.36 0h2.053q.18-.021.359 0c.336.07.644.237.887.479q.12.116.21.26q.09.136.15.288c.091.218.139.452.139.688z"></svg:path>`,
})
export class MageBriefcaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBroadcastIcon],svg[mage-broadcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.937 18.938A9.15 9.15 0 0 1 2.75 12a9.15 9.15 0 0 1 3.187-6.939M8.4 7.617a4.8 4.8 0 0 0-.815.809A5.62 5.62 0 0 0 6.299 12c0 1.303.454 2.566 1.286 3.575q.359.452.814.808M14.203 12c-.01.405-.131.8-.352 1.14a2.206 2.206 0 0 1-3.758 0a2.17 2.17 0 0 1 0-2.28a2.206 2.206 0 0 1 3.758 0c.221.341.343.735.352 1.14m1.397 4.383a4.8 4.8 0 0 0 .815-.808A5.62 5.62 0 0 0 17.701 12a5.62 5.62 0 0 0-1.286-3.574a4.8 4.8 0 0 0-.814-.809m2.462-2.554q.494.428.925.918A9.15 9.15 0 0 1 21.25 12a9.15 9.15 0 0 1-3.187 6.938"></svg:path>`,
})
export class MageBroadcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBroadcastFillIcon],svg[mage-broadcast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.935 19.687a.74.74 0 0 1-.49-.19a9 9 0 0 1-1-1a9.87 9.87 0 0 1 0-13a9 9 0 0 1 1-1a.75.75 0 0 1 1.06.07a.76.76 0 0 1-.07 1.06a9 9 0 0 0-.86.85a8.41 8.41 0 0 0 0 11q.404.446.86.84a.75.75 0 0 1-.5 1.32z"></svg:path><svg:path fill="currentColor" d="M8.405 17.127a.76.76 0 0 1-.47-.16a5 5 0 0 1-.93-.93a6.37 6.37 0 0 1 0-8.09a5 5 0 0 1 .94-.92a.74.74 0 0 1 1.05.13a.75.75 0 0 1-.13 1a4 4 0 0 0-.69.68a4.88 4.88 0 0 0 0 6.21q.309.386.7.69a.76.76 0 0 1 .13 1.06a.77.77 0 0 1-.6.33"></svg:path><svg:path fill="currentColor" d="M14.955 11.997a2.9 2.9 0 0 1-.47 1.53a3 3 0 0 1-1 .95a2.9 2.9 0 0 1-1.54.44a3 3 0 0 1-1.54-.43a3.1 3.1 0 0 1-1-1a2.93 2.93 0 0 1 0-3.07a3 3 0 0 1 4.06-1a3.1 3.1 0 0 1 1 1a2.84 2.84 0 0 1 .49 1.58"></svg:path><svg:path fill="currentColor" d="M15.605 17.127a.77.77 0 0 1-.59-.28a.75.75 0 0 1 .13-1.06a4 4 0 0 0 .68-.68a4.85 4.85 0 0 0 0-6.21a4.5 4.5 0 0 0-.69-.69a.75.75 0 1 1 .92-1.18q.53.404.94.93a6.35 6.35 0 0 1 0 8.09a5 5 0 0 1-.93.92a.74.74 0 0 1-.46.16"></svg:path><svg:path fill="currentColor" d="M18.065 19.687a.75.75 0 0 1-.49-1.32q.455-.395.85-.85a8.38 8.38 0 0 0 0-11a10 10 0 0 0-.85-.84a.76.76 0 0 1-.08-1.06a.75.75 0 0 1 1.06-.07a9.4 9.4 0 0 1 1 1a9.87 9.87 0 0 1 0 13a9.4 9.4 0 0 1-1 1a.7.7 0 0 1-.49.14"></svg:path>`,
})
export class MageBroadcastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBuildingAIcon],svg[mage-building-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.531 3.212h6.938a2.775 2.775 0 0 1 2.775 2.775v14.8H5.756v-14.8a2.775 2.775 0 0 1 2.775-2.775M2.75 20.788h18.5"></svg:path><svg:path d="M11.075 14.313h1.85a1.387 1.387 0 0 1 1.387 1.387v5.088H9.689V15.7a1.387 1.387 0 0 1 1.387-1.387m-1.851-7.4h5.55m-5.55 3.7h5.55"></svg:path></svg:g>`,
})
export class MageBuildingAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBuildingAFillIcon],svg[mage-building-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.2 20.035h-2.21V5.985a3.52 3.52 0 0 0-3.52-3.52H8.53A3.53 3.53 0 0 0 5 5.985v14.05H2.75a.75.75 0 1 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zm-7.69 0h-3.12v-4.34a.64.64 0 0 1 .18-.45a.63.63 0 0 1 .45-.18h1.85a.63.63 0 0 1 .64.63zm1.21-8.67H9.17a.75.75 0 0 1 0-1.5h5.55a.75.75 0 0 1 0 1.5m0-3.7H9.17a.75.75 0 0 1 0-1.5h5.55a.75.75 0 0 1 0 1.5"></svg:path>`,
})
export class MageBuildingAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBuildingBIcon],svg[mage-building-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.978 3.212h6.938a2.775 2.775 0 0 1 2.775 2.775v14.8H3.203v-14.8a2.775 2.775 0 0 1 2.775-2.775M2.75 20.788h18.5"></svg:path><svg:path d="M8.531 14.313h1.85A1.39 1.39 0 0 1 11.77 15.7v5.088H7.144V15.7a1.387 1.387 0 0 1 1.387-1.387m-1.859-7.4h5.55m-5.55 3.7h5.55m3.468-1.388h1.85A2.775 2.775 0 0 1 20.317 12v8.788"></svg:path></svg:g>`,
})
export class MageBuildingBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBuildingBFillIcon],svg[mage-building-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.27 19.995h-.21v-8a3.52 3.52 0 0 0-3.52-3.52h-1.1v-2.49a3.52 3.52 0 0 0-3.53-3.52H5.98a3.52 3.52 0 0 0-3.53 3.52v14.12a.73.73 0 0 0-.45.68a.74.74 0 0 0 .75.75h18.5a.75.75 0 1 0 0-1.5zm-15.33-9.42a.75.75 0 0 1 .75-.75h5.55a.75.75 0 1 1 0 1.5H6.69a.76.76 0 0 1-.75-.75m.75-4.45h5.55a.75.75 0 1 1 0 1.5H6.69a.75.75 0 1 1 0-1.5m1.22 13.87v-4.34a.63.63 0 0 1 .64-.63h1.85a.63.63 0 0 1 .64.63v4.34zm11.67 0h-3.12V9.935h1.1a2 2 0 0 1 2 2z"></svg:path>`,
})
export class MageBuildingBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBuildingTreeIcon],svg[mage-building-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.206 3.41h5.263a2.713 2.713 0 0 1 2.712 2.713V20.59H6.493V6.123A2.713 2.713 0 0 1 9.206 3.41m-6.04 17.18H21.25"></svg:path><svg:path d="M11.693 14.26h.325a1.356 1.356 0 0 1 1.356 1.357v4.973h-3.038v-4.973a1.356 1.356 0 0 1 1.357-1.357M9.884 7.027h3.906m-3.906 3.617h3.906m3.391-1.357h.687A2.713 2.713 0 0 1 20.581 12v8.59m-16.475 0v-6.782m1.357-2.712a1.356 1.356 0 1 0-2.713 0v1.356a1.356 1.356 0 1 0 2.713 0z"></svg:path></svg:g>`,
})
export class MageBuildingTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageBuildingTreeFillIcon],svg[mage-building-tree-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.345 19.884V12.02a3.476 3.476 0 0 0-3.406-3.466V6.139a3.476 3.476 0 0 0-3.466-3.476h-5.28A3.45 3.45 0 0 0 6.75 3.665a3.42 3.42 0 0 0-1.002 2.454v3.647A2.104 2.104 0 0 0 2 11.098v1.343a2.07 2.07 0 0 0 1.353 1.953v5.44h-.19a.752.752 0 0 0 0 1.503h18.122a.751.751 0 0 0 .08-1.493zm-16.65-7.443a.61.61 0 0 1-1.212 0v-1.363a.612.612 0 1 1 1.212 0zm1.002 7.393h-.892v-5.39c.351-.126.66-.348.892-.64zm8.395 0H9.544v-3.186a2.124 2.124 0 0 1 2.114-2.113h.33a2.1 2.1 0 0 1 1.493.62c.391.4.61.935.611 1.493zm-.33-8.455H9.843a.752.752 0 0 1 0-1.503h3.918a.752.752 0 1 1 0 1.503m0-3.627H9.843a.752.752 0 1 1 0-1.502h3.918a.752.752 0 1 1 0 1.502m6.01 12.082H17.87v-9.808a1.9 1.9 0 0 1 1.322.572c.366.368.574.863.582 1.382z"></svg:path>`,
})
export class MageBuildingTreeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalculatorIcon],svg[mage-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 2.75H8a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6.75a4 4 0 0 0-4-4"></svg:path><svg:path d="M16.083 6H7.917C7.411 6 7 6.448 7 7v2c0 .552.41 1 .917 1h8.166c.506 0 .917-.448.917-1V7c0-.552-.41-1-.917-1M7.5 13h1m3 0h1m3 0h1m-9 2.5h1m3 0h1m3 0h1m-9 2.5h1m3 0h1m3 0h1"></svg:path></svg:g>`,
})
export class MageCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalculatorFillIcon],svg[mage-calculator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8a4.75 4.75 0 0 0-4.75 4.75v10.5A4.75 4.75 0 0 0 8 22h8a4.76 4.76 0 0 0 4.75-4.75V6.75A4.76 4.76 0 0 0 16 2M8.5 18.75h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m4 5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m4 5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-2.5h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m1.25-5.36a1.71 1.71 0 0 1-1.67 1.75H7.91a1.7 1.7 0 0 1-1.66-1.75v-2a1.71 1.71 0 0 1 1.66-1.75h8.17a1.72 1.72 0 0 1 1.67 1.75z"></svg:path>`,
})
export class MageCalculatorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarIcon],svg[mage-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 6h18m-4-8v4m-10-4v4"></svg:path>`,
})
export class MageCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendar2Icon],svg[mage-calendar-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 6h18m-4-8v4m-10-4v4m.375 7.515h1.028m7.194 0h1.028m-5.139 0h1.028m-5.139 3.084h1.028m7.194 0h1.028m-5.139 0h1.028"></svg:path>`,
})
export class MageCalendar2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendar2FillIcon],svg[mage-calendar-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 1 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-9.35 14h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m4.11 3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m4.11 3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m0-3.08h-1a.75.75 0 1 1 0-1.5h1a.75.75 0 1 1 0 1.5m3.63-5H3.75v-1.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendar2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendar3Icon],svg[mage-calendar-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m0-2v4m-10-4v4m-3.88 9.737h17.76"></svg:path><svg:path d="M12 10.515a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 3a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path></svg:g>`,
})
export class MageCalendar3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendar3FillIcon],svg[mage-calendar-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 1 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-8 5.08a2.25 2.25 0 0 1 4.5 0a2.23 2.23 0 0 1-.58 1.5c.373.41.58.945.58 1.5a2.25 2.25 0 0 1-4.5 0c0-.555.207-1.09.58-1.5a2.23 2.23 0 0 1-.58-1.5m10.5 8.36a3.25 3.25 0 0 1-3.25 3.25H7a3.25 3.25 0 0 1-3.25-3.25v-.26h16.5z"></svg:path><svg:path fill="currentColor" d="M12 9.765a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m0 3a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5"></svg:path>`,
})
export class MageCalendar3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarCheckIcon],svg[mage-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4"></svg:path><svg:path d="m9 14.714l1.689 1.689a.64.64 0 0 0 .908 0L15 13"></svg:path></svg:g>`,
})
export class MageCalendarCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarCheckFillIcon],svg[mage-calendar-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 0 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-2.22 9.6l-3.4 3.4a1.4 1.4 0 0 1-.45.3a1.24 1.24 0 0 1-.54.11a1.2 1.2 0 0 1-.53-.11a1.3 1.3 0 0 1-.46-.3l-1.68-1.69a.75.75 0 1 1 1.06-1.06l1.62 1.62l3.32-3.33a.75.75 0 0 1 1.06 1.06m4.72-4.66H3.75v-.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendarCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarCrossIcon],svg[mage-calendar-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4"></svg:path><svg:path stroke-miterlimit="10" d="m14 13l-4 3.991m0-3.982L14 17"></svg:path></svg:g>`,
})
export class MageCalendarCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarCrossFillIcon],svg[mage-calendar-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 0 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-3.22 12.54a.75.75 0 0 1-1.06 1.06l-1.48-1.47l-1.46 1.46a.75.75 0 0 1-1.06-1.06l1.46-1.46l-1.46-1.46a.75.75 0 0 1 0-1.06a.74.74 0 0 1 1.06 0l1.46 1.46l1.48-1.47a.75.75 0 0 1 1.06 1.06l-1.47 1.47zm5.72-7.6H3.75v-.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendarCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarDownloadIcon],svg[mage-calendar-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4"></svg:path><svg:path stroke-miterlimit="10" d="M12 17.468v-5"></svg:path><svg:path stroke-linejoin="round" d="m9.707 15.363l1.967 1.967a.46.46 0 0 0 .652 0l1.967-1.967"></svg:path></svg:g>`,
})
export class MageCalendarDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarDownloadFillIcon],svg[mage-calendar-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 4.06V2.75a.75.75 0 1 0-1.5 0V4H5.5V2.75a.75.75 0 0 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75a4.75 4.75 0 0 0 4.75 4.75h10a4.75 4.75 0 0 0 4.75-4.75V8.75a4.76 4.76 0 0 0-4-4.69m-2.93 12l-2 2a1.4 1.4 0 0 1-.39.26a1.7 1.7 0 0 1-.3.08h-.3a1.4 1.4 0 0 1-.29-.08a1.2 1.2 0 0 1-.39-.26l-2-2a.74.74 0 0 1 0-1.06a.75.75 0 0 1 1.06 0l1 1v-3.37a.75.75 0 1 1 1.5 0V16l1-1a.75.75 0 0 1 1.06 0a.74.74 0 0 1 .06 1.02zm5.43-7H1.5v-.25A3.24 3.24 0 0 1 4 5.66v1.15a.75.75 0 1 0 1.5 0V5.56H14v1.25a.75.75 0 1 0 1.5 0V5.66A3.24 3.24 0 0 1 18 8.81z"></svg:path>`,
})
export class MageCalendarDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarFillIcon],svg[mage-calendar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 1 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m2.5 5.94H3.75v-1.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 0 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarMinusIcon],svg[mage-calendar-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4"></svg:path><svg:path stroke-miterlimit="10" d="M9.5 14.989h5"></svg:path></svg:g>`,
})
export class MageCalendarMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarMinusFillIcon],svg[mage-calendar-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 1 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-3.25 11.78h-5a.75.75 0 1 1 0-1.5h5a.75.75 0 1 1 0 1.5m5.75-6.87H3.75v-.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendarMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarPlusIcon],svg[mage-calendar-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4"></svg:path><svg:path stroke-miterlimit="10" d="M11.995 12.483v5M9.5 14.989h5"></svg:path></svg:g>`,
})
export class MageCalendarPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarPlusFillIcon],svg[mage-calendar-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 1 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-3.25 11.78h-1.76v1.74a.75.75 0 1 1-1.5 0v-1.74H9.5a.75.75 0 1 1 0-1.5h1.74v-1.76a.75.75 0 1 1 1.5 0v1.76h1.76a.75.75 0 1 1 0 1.5m5.75-6.87H3.75v-.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendarPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarQuestionMarkIcon],svg[mage-calendar-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4"></svg:path><svg:path stroke-miterlimit="10" d="M10.496 12.932a1.6 1.6 0 0 1 1.742-.906a1.55 1.55 0 0 1 1.137.81a1.345 1.345 0 0 1-.784 1.852a.99.99 0 0 0-.64.897v.37"></svg:path><svg:path stroke-linejoin="round" d="M11.922 18h.004"></svg:path></svg:g>`,
})
export class MageCalendarQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarQuestionMarkFillIcon],svg[mage-calendar-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 0 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-5.82 14.78a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m2.16-4.52a2.4 2.4 0 0 1-.5.72a2.4 2.4 0 0 1-.76.45a.17.17 0 0 0-.08.07a.24.24 0 0 0-.05.14v.34a.75.75 0 1 1-1.5 0v-.37c.005-.36.12-.709.33-1a1.7 1.7 0 0 1 .8-.61a.8.8 0 0 0 .24-.14q.079-.095.14-.2a.55.55 0 0 0 0-.25a.6.6 0 0 0-.05-.24a.8.8 0 0 0-.23-.25a.7.7 0 0 0-.35-.14a.88.88 0 0 0-.56.07a.87.87 0 0 0-.38.4a.752.752 0 1 1-1.37-.62a2.4 2.4 0 0 1 1-1.11a2.47 2.47 0 0 1 2.48.17c.292.213.531.49.7.81a2 2 0 0 1 .21.88a2.1 2.1 0 0 1-.07.92zm6.16-5.36H3.75v-.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendarQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarUploadIcon],svg[mage-calendar-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M17 4.625H7a4 4 0 0 0-4 4v8.75a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-8.75a4 4 0 0 0-4-4m-14 5h18m-4-7v4m-10-4v4"></svg:path><svg:path stroke-miterlimit="10" d="M12 12.468v5"></svg:path><svg:path stroke-linejoin="round" d="m14.293 14.573l-1.967-1.968a.46.46 0 0 0-.652 0l-1.967 1.968"></svg:path></svg:g>`,
})
export class MageCalendarUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCalendarUploadFillIcon],svg[mage-calendar-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 0 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-2.92 11.17a.73.73 0 0 1-.53.22a.74.74 0 0 1-.53-.22l-1-1v3.38a.75.75 0 1 1-1.5 0v-3.38l-1 1a.75.75 0 1 1-1.06-1.06l2-2c.116-.11.252-.198.4-.26a1.1 1.1 0 0 1 .3-.08q.16-.015.32 0q.155.019.3.08q.224.094.4.26l2 2a.74.74 0 0 1-.1 1.06m5.43-6.23H3.76v-.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendarUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCameraIcon],svg[mage-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.833 19.708h12.334a3.083 3.083 0 0 0 3.083-3.083V9.431a3.083 3.083 0 0 0-3.083-3.084h-1.419c-.408 0-.8-.163-1.09-.452l-1.15-1.151a1.54 1.54 0 0 0-1.09-.452h-2.836c-.41 0-.8.163-1.09.452l-1.15 1.151c-.29.29-.682.452-1.09.452H5.833A3.083 3.083 0 0 0 2.75 9.431v7.194a3.083 3.083 0 0 0 3.083 3.083"></svg:path><svg:path d="M12 16.625a4.111 4.111 0 1 0 0-8.222a4.111 4.111 0 0 0 0 8.222"></svg:path></svg:g>`,
})
export class MageCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCamera2Icon],svg[mage-camera-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="16" x="2.75" y="4" rx="4"></svg:rect><svg:circle cx="12" cy="12.5" r="3.75"></svg:circle><svg:path stroke-linecap="round" d="M17 7.003h.5"></svg:path></svg:g>`,
})
export class MageCamera2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCamera2FillIcon],svg[mage-camera-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 3H6.75A4.75 4.75 0 0 0 2 7.75v8a4.75 4.75 0 0 0 4.75 4.75h10.5A4.75 4.75 0 0 0 22 15.75v-8A4.75 4.75 0 0 0 17.25 3M12 16.18a3.93 3.93 0 1 1 0-7.86a3.93 3.93 0 0 1 0 7.86m5.5-8.68H17A.75.75 0 1 1 17 6h.5a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageCamera2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCameraFillIcon],svg[mage-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.88 6.715a3.88 3.88 0 0 0-2.71-1.12h-1.42a.8.8 0 0 1-.56-.23l-1.15-1.15a2.3 2.3 0 0 0-1.62-.67h-2.84a2.3 2.3 0 0 0-1.62.67l-1.15 1.15a.8.8 0 0 1-.56.23H5.83A3.82 3.82 0 0 0 2 9.435v7.19a3.82 3.82 0 0 0 3.83 3.83h12.34a3.86 3.86 0 0 0 2.71-1.12a3.82 3.82 0 0 0 1.12-2.71v-7.19a3.84 3.84 0 0 0-1.12-2.72m-8.92 9.48a3.68 3.68 0 1 1 3.68-3.68a3.69 3.69 0 0 1-3.68 3.68"></svg:path>`,
})
export class MageCameraFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCancelIcon],svg[mage-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19m6.713-2.787L5.287 5.287"></svg:path>`,
})
export class MageCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCancelFillIcon],svg[mage-cancel-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.18 10.18 0 0 0 12 1.75m6.69 15.89L6.37 5.31a8.75 8.75 0 0 1 12.32 12.33"></svg:path>`,
})
export class MageCancelFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCaretDownIcon],svg[mage-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12.777 15.628l6.094-6.769A.518.518 0 0 0 18.488 8H5.512a.519.519 0 0 0-.383.86l6.094 6.81a1.037 1.037 0 0 0 1.554-.042"></svg:path>`,
})
export class MageCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCaretDownFillIcon],svg[mage-caret-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.696 8.72a1.2 1.2 0 0 1-.3.64l-6.09 6.76a1.85 1.85 0 0 1-.58.46a1.7 1.7 0 0 1-1.42.03a1.75 1.75 0 0 1-.62-.42l-6.1-6.83a1.3 1.3 0 0 1-.31-.64a1.31 1.31 0 0 1 .56-1.26a1.36 1.36 0 0 1 .68-.21h13a1.29 1.29 0 0 1 1.15.76c.081.228.092.476.03.71"></svg:path>`,
})
export class MageCaretDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCaretLeftIcon],svg[mage-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.372 12.777l6.769 6.094a.518.518 0 0 0 .859-.383V5.512a.518.518 0 0 0-.86-.383l-6.81 6.094a1.036 1.036 0 0 0 .042 1.554"></svg:path>`,
})
export class MageCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCaretLeftFillIcon],svg[mage-caret-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 5.484v13a1.26 1.26 0 0 1-.76 1.16a1.25 1.25 0 0 1-.51.1h-.19a1.2 1.2 0 0 1-.65-.31l-6.76-6.08a2 2 0 0 1-.46-.59a1.8 1.8 0 0 1-.17-.73c-.008-.251.04-.5.14-.73c.095-.237.242-.449.43-.62l6.82-6.11a1.26 1.26 0 0 1 .65-.3a1.23 1.23 0 0 1 1.25.56c.131.192.204.417.21.65"></svg:path>`,
})
export class MageCaretLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCaretRightIcon],svg[mage-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.628 11.223L8.86 5.129a.517.517 0 0 0-.86.383v12.976a.519.519 0 0 0 .86.383l6.81-6.094a1.037 1.037 0 0 0-.042-1.554"></svg:path>`,
})
export class MageCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCaretRightFillIcon],svg[mage-caret-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 11.989a1.82 1.82 0 0 1-.57 1.36l-6.82 6.1a1.27 1.27 0 0 1-.65.31h-.19a1.3 1.3 0 0 1-.52-.1a1.23 1.23 0 0 1-.54-.47a1.2 1.2 0 0 1-.21-.68v-13a1.2 1.2 0 0 1 .21-.69a1.23 1.23 0 0 1 1.25-.56c.24.039.464.143.65.3l6.76 6.09c.19.162.344.363.45.59c.114.234.175.49.18.75"></svg:path>`,
})
export class MageCaretRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCaretUpIcon],svg[mage-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.223 8.372L5.129 15.14a.517.517 0 0 0 .383.859h12.976a.519.519 0 0 0 .383-.86l-6.094-6.81a1.036 1.036 0 0 0-1.554.042"></svg:path>`,
})
export class MageCaretUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCaretUpFillIcon],svg[mage-caret-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.66 16.01a1.35 1.35 0 0 1-.47.54c-.203.13-.439.2-.68.2h-13a1.3 1.3 0 0 1-.69-.2a1.28 1.28 0 0 1-.56-1.25a1.27 1.27 0 0 1 .31-.65l6.09-6.77a1.7 1.7 0 0 1 .58-.45a1.8 1.8 0 0 1 .73-.18c.253.003.503.05.74.14c.23.101.438.247.61.43l6.11 6.83c.163.182.267.408.3.65a1.24 1.24 0 0 1-.07.71"></svg:path>`,
})
export class MageCaretUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartIcon],svg[mage-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M6.209 12.324H4.401c-.579 0-1.048.47-1.048 1.048v6.83c0 .578.47 1.048 1.048 1.048H6.21c.58 0 1.049-.47 1.049-1.049v-6.829a1.05 1.05 0 0 0-1.049-1.049m6.694-9.573h-1.808c-.58 0-1.049.47-1.049 1.049V20.2c0 .58.47 1.049 1.05 1.049h1.807c.58 0 1.049-.47 1.049-1.049V3.8c0-.58-.47-1.049-1.05-1.049m6.696 5.176H17.79c-.58 0-1.049.47-1.049 1.05V20.2c0 .58.47 1.049 1.049 1.049h1.808a1.05 1.05 0 0 0 1.049-1.049V8.976c0-.58-.47-1.049-1.05-1.049"></svg:path>`,
})
export class MageChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChart15Icon],svg[mage-chart-15-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M12 2.5V12l6.721-6.721"></svg:path></svg:g>`,
})
export class MageChart15Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChart15FillIcon],svg[mage-chart-15-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.37 4.82l-.22-.22a10.29 10.29 0 1 0 .25.25zm-6.61 5.3v-6.9a8.65 8.65 0 0 1 4.88 2z"></svg:path>`,
})
export class MageChart15FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChart25Icon],svg[mage-chart-25-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M12 2.5V12h9.5"></svg:path></svg:g>`,
})
export class MageChart25Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChart25FillIcon],svg[mage-chart-25-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m.75 9.5v-8a8.74 8.74 0 0 1 8 8z"></svg:path>`,
})
export class MageChart25FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChart50Icon],svg[mage-chart-50-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19m0-19v19"></svg:path>`,
})
export class MageChart50Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChart50FillIcon],svg[mage-chart-50-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m.75 19V3.29a8.74 8.74 0 0 1 0 17.42z"></svg:path>`,
})
export class MageChart50FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartBIcon],svg[mage-chart-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 9h4v12H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2m6-6h2a2 2 0 0 1 2 2v16H9V5a2 2 0 0 1 2-2m4 4h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4z"></svg:path>`,
})
export class MageChartBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartBFillIcon],svg[mage-chart-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 7.05a2.72 2.72 0 0 0-1.94-.8h-3.25V5A2.75 2.75 0 0 0 13 2.25h-2A2.73 2.73 0 0 0 8.25 5v3.25H5A2.73 2.73 0 0 0 2.25 11v8A2.75 2.75 0 0 0 5 21.75h14A2.77 2.77 0 0 0 21.75 19V9a2.74 2.74 0 0 0-.81-1.95m-6.69 13.2h-4.5V4.97A1.23 1.23 0 0 1 11 3.72h2c.329.002.644.13.88.36a1.3 1.3 0 0 1 .37.89z"></svg:path>`,
})
export class MageChartBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartDownIcon],svg[mage-chart-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M18 12h1.874c.6 0 1.087.487 1.087 1.087v7.076c0 .6-.487 1.087-1.087 1.087h-1.873c-.6 0-1.087-.487-1.087-1.087v-7.076c0-.6.487-1.087 1.087-1.087m-6.938-4.625h1.874c.6 0 1.086.487 1.086 1.087v11.701c0 .6-.486 1.087-1.086 1.087h-1.874c-.6 0-1.086-.487-1.086-1.087V8.462c0-.6.486-1.087 1.086-1.087M4.126 2.75h1.873c.6 0 1.087.487 1.087 1.087v16.326c0 .6-.487 1.087-1.087 1.087H4.126c-.6 0-1.087-.487-1.087-1.087V3.837c0-.6.487-1.087 1.087-1.087"></svg:path>`,
})
export class MageChartDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartDownBIcon],svg[mage-chart-down-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21h-4v-9h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2m-4 0H9V7h4a2 2 0 0 1 2 2zm-6 0H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2z"></svg:path>`,
})
export class MageChartDownBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartDownBFillIcon],svg[mage-chart-down-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 12.05a2.72 2.72 0 0 0-1.94-.8h-3.25V9A2.75 2.75 0 0 0 13 6.25H9.75V5A2.75 2.75 0 0 0 7 2.25H5A2.73 2.73 0 0 0 2.25 5v14A2.75 2.75 0 0 0 5 21.75h14A2.77 2.77 0 0 0 21.75 19v-5a2.74 2.74 0 0 0-.81-1.95m-6.69 8.2h-4.5V7.75H13c.329.002.644.13.88.36a1.3 1.3 0 0 1 .37.89z"></svg:path>`,
})
export class MageChartDownBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartDownFillIcon],svg[mage-chart-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.46 13.06v7.08a1.59 1.59 0 0 1-1.59 1.58h-1.86a1.59 1.59 0 0 1-1.59-1.58v-7.08a1.59 1.59 0 0 1 1.59-1.59h1.87a1.59 1.59 0 0 1 1.58 1.59m-6.94-4.59v11.7a1.59 1.59 0 0 1-1.59 1.58h-1.87a1.59 1.59 0 0 1-1.59-1.58V8.47a1.59 1.59 0 0 1 1.59-1.59h1.87a1.59 1.59 0 0 1 1.59 1.59M7.58 3.84v16.33A1.58 1.58 0 0 1 6 21.75H4.12a1.58 1.58 0 0 1-1.58-1.58V3.84a1.59 1.59 0 0 1 1.58-1.59h1.89a1.59 1.59 0 0 1 1.57 1.59"></svg:path>`,
})
export class MageChartDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartFillIcon],svg[mage-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.755 13.38v6.83a1.54 1.54 0 0 1-1.54 1.54h-1.81a1.54 1.54 0 0 1-1.55-1.54v-6.83a1.54 1.54 0 0 1 1.55-1.55h1.81a1.54 1.54 0 0 1 1.54 1.55m6.7-9.58v16.41a1.54 1.54 0 0 1-1.55 1.54h-1.81a1.55 1.55 0 0 1-1.55-1.54V3.8a1.56 1.56 0 0 1 1.55-1.55h1.81a1.55 1.55 0 0 1 1.55 1.55m6.69 5.18v11.23a1.54 1.54 0 0 1-1.54 1.54h-1.81a1.54 1.54 0 0 1-1.55-1.54V8.98a1.55 1.55 0 0 1 1.55-1.55h1.85a1.55 1.55 0 0 1 1.5 1.55"></svg:path>`,
})
export class MageChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartUpIcon],svg[mage-chart-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M6 12H4.125c-.6 0-1.087.487-1.087 1.087v7.076c0 .6.487 1.087 1.087 1.087h1.873c.6 0 1.087-.487 1.087-1.087v-7.076c0-.6-.487-1.087-1.087-1.087m6.939-4.625h-1.873c-.6 0-1.087.487-1.087 1.087v11.701c0 .6.486 1.087 1.086 1.087h1.874c.6 0 1.087-.487 1.087-1.087V8.462c0-.6-.487-1.087-1.087-1.087m6.937-4.625h-1.873c-.6 0-1.087.487-1.087 1.087v16.326c0 .6.487 1.087 1.087 1.087h1.873c.6 0 1.087-.487 1.087-1.087V3.837c0-.6-.487-1.087-1.087-1.087"></svg:path>`,
})
export class MageChartUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartUpBIcon],svg[mage-chart-up-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12h4v9H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m6-5h4v14H9V9a2 2 0 0 1 2-2m6-4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MageChartUpBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartUpBFillIcon],svg[mage-chart-up-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.94 3.05a2.72 2.72 0 0 0-1.94-.8h-2A2.73 2.73 0 0 0 14.25 5v1.25H11A2.73 2.73 0 0 0 8.25 9v2.25H5A2.73 2.73 0 0 0 2.25 14v5A2.75 2.75 0 0 0 5 21.75h14A2.77 2.77 0 0 0 21.75 19V5a2.74 2.74 0 0 0-.81-1.95m-6.69 17.2h-4.5V8.97A1.23 1.23 0 0 1 11 7.72h3.25z"></svg:path>`,
})
export class MageChartUpBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartUpFillIcon],svg[mage-chart-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.58 13.06v7.08A1.58 1.58 0 0 1 6 21.72H4.12a1.58 1.58 0 0 1-1.58-1.58v-7.08a1.59 1.59 0 0 1 1.58-1.59H6a1.59 1.59 0 0 1 1.58 1.59m6.94-4.59v11.7a1.59 1.59 0 0 1-1.59 1.58h-1.87a1.59 1.59 0 0 1-1.59-1.58V8.47a1.59 1.59 0 0 1 1.59-1.59h1.87a1.59 1.59 0 0 1 1.59 1.59m6.94-4.63v16.33a1.59 1.59 0 0 1-1.59 1.58H18a1.59 1.59 0 0 1-1.59-1.58V3.84A1.59 1.59 0 0 1 18 2.25h1.87a1.59 1.59 0 0 1 1.59 1.59"></svg:path>`,
})
export class MageChartUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartVerticalIcon],svg[mage-chart-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.3" d="M13.632 6.352V4.589c0-.565-.458-1.023-1.023-1.023H7.103c-.565 0-1.023.458-1.023 1.023v1.763c0 .565.458 1.023 1.023 1.023h5.506c.565 0 1.023-.458 1.023-1.023m7.618 6.53v-1.764c0-.564-.458-1.022-1.023-1.022H7.103c-.565 0-1.023.458-1.023 1.022v1.764c0 .564.458 1.022 1.023 1.022h13.124c.565 0 1.023-.458 1.023-1.022m-3.33 6.528v-1.762c0-.565-.458-1.023-1.023-1.023H7.114c-.565 0-1.023.458-1.023 1.023v1.763c0 .565.458 1.023 1.023 1.023h9.783c.565 0 1.023-.458 1.023-1.023M2.75 3.294v17.412"></svg:path>`,
})
export class MageChartVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChartVerticalFillIcon],svg[mage-chart-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.685 3.065h-5.51c-.84 0-1.52.68-1.52 1.52v1.77c0 .84.68 1.52 1.52 1.52h5.51c.84 0 1.52-.68 1.52-1.52v-1.77c0-.84-.68-1.52-1.52-1.52m9.14 8.05v1.77a1.53 1.53 0 0 1-1.53 1.52H7.175a1.52 1.52 0 0 1-1.52-1.52v-1.77a1.52 1.52 0 0 1 1.52-1.52h13.12a1.53 1.53 0 0 1 1.53 1.52m-3.32 6.53v1.77a1.53 1.53 0 0 1-1.53 1.52h-9.78a1.52 1.52 0 0 1-1.52-1.52v-1.77a1.52 1.52 0 0 1 1.52-1.52h9.78a1.53 1.53 0 0 1 1.53 1.52m-15.68 3.71a.65.65 0 0 1-.65-.65V3.295a.65.65 0 1 1 1.3 0v17.41a.65.65 0 0 1-.65.65"></svg:path>`,
})
export class MageChartVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCheckIcon],svg[mage-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.5 11.795l4.221 4.221a1.596 1.596 0 0 0 2.272 0L19.5 7.51"></svg:path>`,
})
export class MageCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCheckCircleIcon],svg[mage-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m6.9 12.087l2.664 2.663a1.01 1.01 0 0 0 1.433 0l5.367-5.368"></svg:path><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCheckCircleFillIcon],svg[mage-check-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5.07 8.34l-5.37 5.37a1.8 1.8 0 0 1-.65.44c-.497.2-1.053.2-1.55 0a2 2 0 0 1-.65-.44L6.19 12.8a1.001 1.001 0 1 1 1.41-1.42l2.67 2.67l5.38-5.37a1 1 0 0 1 1.42 0a1 1 0 0 1 0 1.38z"></svg:path>`,
})
export class MageCheckCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCheckSquareIcon],svg[mage-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7.393 12.084l2.593 2.593a.983.983 0 0 0 1.395 0l5.227-5.226"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCheckSquareFillIcon],svg[mage-check-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.06 8.16l-5.22 5.22a2 2 0 0 1-1.41.59a2 2 0 0 1-.76-.15a2 2 0 0 1-.64-.44l-2.59-2.59a1 1 0 0 1 1.41-1.41l2.59 2.59l5.21-5.23a1.002 1.002 0 0 1 1.41 1.42"></svg:path>`,
})
export class MageCheckSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChecklistIcon],svg[mage-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 6l1 1l2-2m-3 7l1 1l2-2m-3 7l1 1l2-2M9 6h12M9 12h12M9 18h12"></svg:path>`,
})
export class MageChecklistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChecklistNoteIcon],svg[mage-checklist-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.692 7.889h4.52M11.692 12h4.52m-4.52 4.111h4.52M8.066 8.506a.617.617 0 1 0 0-1.234a.617.617 0 0 0 0 1.234m0 4.111a.617.617 0 1 0 0-1.234a.617.617 0 0 0 0 1.234m0 4.111a.617.617 0 1 0 0-1.234a.617.617 0 0 0 0 1.234"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageChecklistNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChecklistNoteFillIcon],svg[mage-checklist-note-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.75 6.75 0 0 0 8.75 22h6.5A6.75 6.75 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2M8.04 17.48a1.37 1.37 0 1 1 1.37-1.37a1.36 1.36 0 0 1-1.37 1.37m0-4.11A1.37 1.37 0 1 1 9.41 12a1.36 1.36 0 0 1-1.37 1.42zm0-4.11a1.37 1.37 0 1 1 1.37-1.37a1.36 1.36 0 0 1-1.37 1.37m8.15 7.6h-4.52a.75.75 0 1 1 0-1.5h4.52a.75.75 0 1 1 0 1.5m0-4.11h-4.52a.75.75 0 1 1 0-1.5h4.52a.75.75 0 1 1 0 1.5m0-4.11h-4.52a.75.75 0 0 1 0-1.5h4.52a.75.75 0 1 1 0 1.5"></svg:path>`,
})
export class MageChecklistNoteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronDownIcon],svg[mage-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 8.417l6.587 6.587a2.013 2.013 0 0 0 2.826 0L20 8.417"></svg:path>`,
})
export class MageChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronDownCircleIcon],svg[mage-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m7.467 10.333l3.777 3.778a1.135 1.135 0 0 0 1.606 0l3.683-3.778"></svg:path><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageChevronDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronDownCircleFillIcon],svg[mage-chevron-down-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.98 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 11.98 1.75m5.27 9.31l-3.68 3.77a2.2 2.2 0 0 1-.7.48a2.3 2.3 0 0 1-.82.16a2.3 2.3 0 0 1-.81-.16a2.2 2.2 0 0 1-.7-.47l-3.8-3.78a1 1 0 0 1 0-1.41a1 1 0 0 1 1.41 0l3.87 3.82l3.77-3.81a1.01 1.01 0 1 1 1.46 1.4"></svg:path>`,
})
export class MageChevronDownCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronDownSquareIcon],svg[mage-chevron-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7.586 10.178l3.678 3.678a1.1 1.1 0 0 0 1.564 0l3.586-3.678"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageChevronDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronDownSquareFillIcon],svg[mage-chevron-down-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.88 8.88l-3.59 3.67a2.07 2.07 0 0 1-1.49.63a2.1 2.1 0 0 1-.81-.16a2 2 0 0 1-.68-.46l-3.68-3.68a1 1 0 0 1 1.41-1.41l3.68 3.68h.11l3.62-3.69a1.001 1.001 0 0 1 1.43 1.4z"></svg:path>`,
})
export class MageChevronDownSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronLeftIcon],svg[mage-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15.583 4l-6.587 6.587a2.013 2.013 0 0 0 0 2.826L15.583 20"></svg:path>`,
})
export class MageChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronLeftCircleIcon],svg[mage-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m13.667 7.467l-3.778 3.777a1.134 1.134 0 0 0 0 1.606l3.778 3.683"></svg:path><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageChevronLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronLeftCircleFillIcon],svg[mage-chevron-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m2.37 14.07a1 1 0 1 1-1.4 1.43L9.2 13.57a2.1 2.1 0 0 1-.48-.7a2.3 2.3 0 0 1-.16-.82a2.3 2.3 0 0 1 .16-.81a2.1 2.1 0 0 1 .47-.7l3.77-3.78a1.004 1.004 0 0 1 1.42 1.42l-3.82 3.88z"></svg:path>`,
})
export class MageChevronLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronLeftSquareIcon],svg[mage-chevron-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13.822 7.586l-3.678 3.678a1.1 1.1 0 0 0 0 1.564l3.678 3.586"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageChevronLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronLeftSquareFillIcon],svg[mage-chevron-left-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-.75 13.7a1 1 0 1 1-1.42 1.41L9.5 13.5a2 2 0 0 1-.47-.69a2.1 2.1 0 0 1 0-1.61a2 2 0 0 1 .46-.68l3.68-3.68a1 1 0 1 1 1.41 1.41l-3.68 3.68v.12z"></svg:path>`,
})
export class MageChevronLeftSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronRightIcon],svg[mage-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.417 20l6.587-6.587a2.013 2.013 0 0 0 0-2.826L8.417 4"></svg:path>`,
})
export class MageChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronRightCircleIcon],svg[mage-chevron-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.333 16.533l3.778-3.778a1.133 1.133 0 0 0 0-1.605l-3.778-3.683"></svg:path><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageChevronRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronRightCircleFillIcon],svg[mage-chevron-right-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m3.28 11a2.1 2.1 0 0 1-.46.69l-3.78 3.78a1 1 0 0 1-1.41-1.42l3.82-3.87l-3.81-3.77a1.004 1.004 0 1 1 1.4-1.44l3.77 3.69c.204.2.367.438.48.7c.104.261.158.54.16.82a2.1 2.1 0 0 1-.17.85z"></svg:path>`,
})
export class MageChevronRightCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronRightSquareIcon],svg[mage-chevron-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10.178 16.414l3.678-3.678a1.1 1.1 0 0 0 0-1.564l-3.678-3.586"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageChevronRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronRightSquareFillIcon],svg[mage-chevron-right-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-.23 10.77a2.1 2.1 0 0 1-.46.67l-3.68 3.68a1 1 0 0 1-1.41 0a1 1 0 0 1 0-1.41l3.68-3.68v-.12L9.5 8.3a1 1 0 1 1 1.4-1.43l3.67 3.59a2.07 2.07 0 0 1 .63 1.49a2.1 2.1 0 0 1-.18.82"></svg:path>`,
})
export class MageChevronRightSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronUpIcon],svg[mage-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20 15.583l-6.587-6.587a2.013 2.013 0 0 0-2.826 0L4 15.583"></svg:path>`,
})
export class MageChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronUpCircleIcon],svg[mage-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.533 13.667l-3.777-3.778a1.135 1.135 0 0 0-1.606 0l-3.683 3.778"></svg:path><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageChevronUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronUpCircleFillIcon],svg[mage-chevron-up-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5.24 12.63a1 1 0 0 1-1.41 0l-3.87-3.82l-3.77 3.81a1.004 1.004 0 0 1-1.44-1.4l3.69-3.77a2.1 2.1 0 0 1 .7-.48a2.2 2.2 0 0 1 1.63 0c.263.108.5.268.7.47l3.77 3.77a1 1 0 0 1 0 1.42"></svg:path>`,
})
export class MageChevronUpCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronUpSquareIcon],svg[mage-chevron-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m16.414 13.822l-3.678-3.678a1.105 1.105 0 0 0-1.564 0l-3.586 3.678"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageChevronUpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChevronUpSquareFillIcon],svg[mage-chevron-up-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.87 12.5a1 1 0 0 1-1.41 0l-3.68-3.68h-.12L8.3 14.5a1 1 0 1 1-1.43-1.4l3.63-3.6a2 2 0 0 1 .69-.47a2.14 2.14 0 0 1 1.61 0a2 2 0 0 1 .68.46l3.68 3.68a1 1 0 0 1-.04 1.33"></svg:path>`,
})
export class MageChevronUpSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChipIcon],svg[mage-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14.423 4.71H9.728a4.705 4.705 0 0 0-4.705 4.706v4.695a4.705 4.705 0 0 0 4.705 4.705h4.695a4.705 4.705 0 0 0 4.705-4.705V9.416a4.705 4.705 0 0 0-4.705-4.706Z"></svg:path><svg:path d="M13.314 8.044h-2.476a2.48 2.48 0 0 0-2.482 2.481v2.476a2.48 2.48 0 0 0 2.482 2.482h2.476a2.48 2.48 0 0 0 2.48-2.482v-2.476a2.48 2.48 0 0 0-2.48-2.481ZM22 8.74h-2.922m-14.005 0H2m20 6.51h-3.013m-13.823 0H2M15.26 22v-3.254m0-13.966V2M8.74 22v-3.285m0-13.904V2"></svg:path></svg:g>`,
})
export class MageChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageChipFillIcon],svg[mage-chip-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.992 14.506h-2.145q.015-.195 0-.39V9.494h2.125a.747.747 0 0 0 .748-.75a.75.75 0 0 0-.748-.75h-2.335A5.44 5.44 0 0 0 15.976 4.2V2a.75.75 0 0 0-.749-.751a.747.747 0 0 0-.748.75V4H9.491V2a.75.75 0 0 0-.748-.751a.747.747 0 0 0-.749.75V4.25a5.43 5.43 0 0 0-3.512 3.742H2.018a.747.747 0 0 0-.748.75a.75.75 0 0 0 .748.75h2.265v4.613q-.015.195 0 .39H1.998a.747.747 0 0 0-.748.75a.75.75 0 0 0 .748.75h2.674a5.43 5.43 0 0 0 3.362 3.282V22a.75.75 0 0 0 .748.75a.747.747 0 0 0 .749-.75v-2.442h4.988v2.432a.75.75 0 0 0 .748.75a.747.747 0 0 0 .749-.75v-2.672a5.37 5.37 0 0 0 3.512-3.331h2.474a.747.747 0 0 0 .748-.75a.75.75 0 0 0-.748-.75zm-5.448-1.5c0 .857-.339 1.68-.943 2.288a3.23 3.23 0 0 1-2.28.953h-2.473a3.23 3.23 0 0 1-2.254-.967a3.25 3.25 0 0 1-.929-2.274v-2.472c0-.857.34-1.679.944-2.285a3.22 3.22 0 0 1 2.279-.946h2.474c.854 0 1.674.34 2.278.946s.944 1.428.944 2.285z"></svg:path><svg:path fill="currentColor" d="M15.048 10.534v2.471a1.734 1.734 0 0 1-1.726 1.741h-2.474a1.73 1.73 0 0 1-1.221-.513a1.74 1.74 0 0 1-.505-1.228v-2.47a1.724 1.724 0 0 1 1.726-1.73h2.474c.458-.001.897.18 1.22.505c.324.325.506.765.506 1.224"></svg:path>`,
})
export class MageChipFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageClipboardIcon],svg[mage-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.94 4.697H17c.796 0 1.559.308 2.121.856S20 6.843 20 7.618v9.737a3.84 3.84 0 0 1-1.172 2.754A4.06 4.06 0 0 1 16 21.25H8c-1.06 0-2.078-.41-2.828-1.14A3.84 3.84 0 0 1 4 17.355V7.618c0-.764.308-1.499.857-2.045a3.04 3.04 0 0 1 2.083-.876"></svg:path><svg:path d="M15.94 2.75h-8c-.552 0-1 .436-1 .974V5.67c0 .538.448.974 1 .974h8c.552 0 1-.436 1-.974V3.724a.987.987 0 0 0-1-.974"></svg:path></svg:g>`,
})
export class MageClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageClipboard2Icon],svg[mage-clipboard-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.94 4.697H17c.796 0 1.559.308 2.121.856S20 6.843 20 7.618v9.737a3.84 3.84 0 0 1-1.172 2.754A4.06 4.06 0 0 1 16 21.25H8c-1.06 0-2.078-.41-2.828-1.14A3.84 3.84 0 0 1 4 17.354V7.618c0-.764.308-1.499.857-2.045a3.04 3.04 0 0 1 2.083-.876"></svg:path><svg:path d="M15.94 2.75h-8c-.552 0-1 .436-1 .974V5.67c0 .538.448.974 1 .974h8c.552 0 1-.436 1-.974V3.724a.987.987 0 0 0-1-.974m-7.787 8.71h7.694m-7.694 4.398h7.694"></svg:path></svg:g>`,
})
export class MageClipboard2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageClipboard2FillIcon],svg[mage-clipboard-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.69 5.015a3.7 3.7 0 0 0-2-1v-.28a1.73 1.73 0 0 0-1.75-1.72h-8a1.74 1.74 0 0 0-1.75 1.72v.3a3.8 3.8 0 0 0-1.86 1a3.58 3.58 0 0 0-1.08 2.58v9.72a4.6 4.6 0 0 0 1.4 3.29A4.73 4.73 0 0 0 8 21.985h8a4.73 4.73 0 0 0 3.35-1.36a4.6 4.6 0 0 0 1.4-3.29v-9.73a3.66 3.66 0 0 0-1.06-2.59m-12-1.29a.24.24 0 0 1 .25-.22h8a.24.24 0 0 1 .25.22v2a.24.24 0 0 1-.25.22h-8a.24.24 0 0 1-.25-.22zm8.16 13.13h-7.7a1 1 0 0 1 0-2h7.7a1 1 0 1 1 0 2m0-4.39h-7.7a1 1 0 0 1 0-2h7.7a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageClipboard2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageClipboard3Icon],svg[mage-clipboard-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.94 4.697H17c.796 0 1.559.308 2.121.856S20 6.843 20 7.618v9.737a3.84 3.84 0 0 1-1.172 2.754A4.06 4.06 0 0 1 16 21.25H8c-1.06 0-2.078-.41-2.828-1.14A3.84 3.84 0 0 1 4 17.355V7.618c0-.764.308-1.499.857-2.045a3.04 3.04 0 0 1 2.083-.876"></svg:path><svg:path d="M15.94 2.75h-8c-.552 0-1 .436-1 .974V5.67c0 .538.448.974 1 .974h8c.552 0 1-.436 1-.974V3.724a.987.987 0 0 0-1-.974m-7.787 8.71h7.694m-7.694 4.398h7.694"></svg:path></svg:g>`,
})
export class MageClipboard3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageClipboardFillIcon],svg[mage-clipboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.69 5.015a3.7 3.7 0 0 0-2-1v-.28a1.73 1.73 0 0 0-1.75-1.72h-8a1.74 1.74 0 0 0-1.75 1.72v.3a3.8 3.8 0 0 0-1.86 1a3.58 3.58 0 0 0-1.08 2.58v9.72a4.6 4.6 0 0 0 1.4 3.29A4.73 4.73 0 0 0 8 21.985h8a4.73 4.73 0 0 0 3.35-1.36a4.6 4.6 0 0 0 1.4-3.29v-9.73a3.66 3.66 0 0 0-1.06-2.59m-3.45.66a.24.24 0 0 1-.25.22h-8a.24.24 0 0 1-.25-.22v-2a.24.24 0 0 1 .25-.22h8a.24.24 0 0 1 .25.22z"></svg:path>`,
})
export class MageClipboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageClockIcon],svg[mage-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m15.172 15.172l-3.167-3.167V5.672"></svg:path><svg:path stroke-linejoin="round" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageClockFillIcon],svg[mage-clock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m3.88 14.13a1 1 0 0 1-.71.3a1 1 0 0 1-.7-.3l-3.46-3.46V5.68a1 1 0 1 1 2 0v5.92l2.87 2.87a1 1 0 0 1 0 1.41"></svg:path>`,
})
export class MageClockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCoinAIcon],svg[mage-coin-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 9.714c-.02.855-.296 1.67-.777 2.286c-1.415 2.011-4.68 3.429-8.473 3.429S4.942 14.01 3.527 12c-.48-.616-.758-1.43-.777-2.286C2.75 6.56 6.894 4 12 4s9.25 2.56 9.25 5.714"></svg:path><svg:path d="M21.25 9.714v4.572C21.25 17.44 17.106 20 12 20s-9.25-2.56-9.25-5.714V9.714"></svg:path></svg:g>`,
})
export class MageCoinAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCoinAFillIcon],svg[mage-coin-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.25c-5.59 0-10 2.82-10 6.46v4.58c0 3.62 4.39 6.46 10 6.46s10-2.84 10-6.46V9.72c0-3.63-4.43-6.47-10-6.47m8.5 11c0 2.69-3.89 5-8.5 5s-8.5-2.27-8.5-5V13.1c1.78 1.87 5 3 8.5 3s6.73-1.18 8.5-3z"></svg:path>`,
})
export class MageCoinAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCoinBIcon],svg[mage-coin-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 9.714c-.02.855-.296 1.67-.777 2.286c-1.415 2.011-4.68 3.429-8.473 3.429S4.942 14.01 3.527 12c-.48-.616-.758-1.43-.777-2.286C2.75 6.56 6.894 4 12 4s9.25 2.56 9.25 5.714"></svg:path><svg:path d="M17.722 9.714a1.7 1.7 0 0 1-.48 1.139c-.876 1.002-2.896 1.708-5.242 1.708s-4.366-.706-5.242-1.708a1.7 1.7 0 0 1-.48-1.139c0-1.571 2.563-2.846 5.722-2.846s5.722 1.275 5.722 2.846"></svg:path><svg:path d="M21.25 9.714v4.572C21.25 17.44 17.106 20 12 20s-9.25-2.56-9.25-5.714V9.714"></svg:path></svg:g>`,
})
export class MageCoinBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCoinBFillIcon],svg[mage-coin-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.25c-5.59 0-10 2.82-10 6.46v4.58c0 3.62 4.39 6.46 10 6.46s10-2.84 10-6.46V9.72c0-3.63-4.43-6.47-10-6.47m0 2.87c3.69 0 6.47 1.55 6.47 3.6a2.46 2.46 0 0 1-.69 1.64c-1 1.18-3.26 1.93-5.78 1.93s-4.75-.75-5.81-2a2.4 2.4 0 0 1-.66-1.61C5.49 7.67 8.27 6.12 12 6.12m8.5 8.17c0 2.69-3.89 5-8.5 5s-8.5-2.27-8.5-5v-1.15c1.78 1.87 5 3 8.5 3s6.73-1.18 8.5-3z"></svg:path><svg:path fill="currentColor" d="M16.93 9.71a1 1 0 0 1-.29.65c-.64.73-2.33 1.45-4.68 1.45s-4-.72-4.71-1.48a.9.9 0 0 1-.26-.61c0-1 2.12-2.1 5-2.1s4.93 1.1 4.94 2.09"></svg:path>`,
})
export class MageCoinBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageColorPickerIcon],svg[mage-color-picker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m16.527 11.46l-7.994 7.964a1.87 1.87 0 0 1-2.303.262l-1.235 1.229a1.114 1.114 0 0 1-1.591 0l-.319-.347a1.116 1.116 0 0 1 0-1.595l1.217-1.22a1.88 1.88 0 0 1 .262-2.316l7.947-7.964z"></svg:path><svg:path d="M18.792 11.797a1.41 1.41 0 0 1-1.985 0l-4.68-4.643a1.418 1.418 0 0 1 .455-2.296a1.39 1.39 0 0 1 1.53.308l.57.562l1.845-2.223a2.805 2.805 0 0 1 3.9.07a2.82 2.82 0 0 1 .068 3.907L18.23 9.237l.562.572a1.397 1.397 0 0 1 0 1.988"></svg:path></svg:g>`,
})
export class MageColorPickerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageColorPickerFillIcon],svg[mage-color-picker-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.042 10.894l-4-4.006a1 1 0 0 0-.2-.14l4.37 4.356a.7.7 0 0 0-.17-.21"></svg:path><svg:path fill="currentColor" d="M20.962 3.002A3.56 3.56 0 0 0 18.502 2a3.64 3.64 0 0 0-2.55 1.002l-1.32 1.592a2.4 2.4 0 0 0-.68-.45a2.17 2.17 0 0 0-1.66 0a2.2 2.2 0 0 0-.7.47a2.185 2.185 0 0 0-.16 2.864l-7.4 7.421a2.64 2.64 0 0 0-.63 2.694l-.85.852a1.9 1.9 0 0 0-.41.61c-.09.227-.137.468-.14.712c.002.25.05.498.14.73q.144.325.39.582l.33.36c.176.176.383.318.61.42c.232.093.48.14.73.141c.247-.002.49-.05.72-.14a1.9 1.9 0 0 0 .6-.41l.87-.862c.36.121.743.16 1.12.11a2.63 2.63 0 0 0 1.55-.741l7.45-7.441c.371.28.825.432 1.29.43c.568 0 1.114-.222 1.52-.62a2.135 2.135 0 0 0 0-3.005l1.6-1.242l.09-.08a3.57 3.57 0 0 0-.08-5.007zm-1 3.886l-2.21 1.722a.77.77 0 0 0-.29.54a.8.8 0 0 0 .21.582l.57.57q.09.099.14.22a.5.5 0 0 1 .05.251a.56.56 0 0 1-.05.25a.6.6 0 0 1-.14.211a.69.69 0 0 1-.93 0l-.11-.1l-4.37-4.357l-.18-.17a.66.66 0 0 1 0-.931a.8.8 0 0 1 .21-.15a.7.7 0 0 1 .25 0a.7.7 0 0 1 .25 0q.115.06.21.15l.58.57a.73.73 0 0 0 .56.21a.77.77 0 0 0 .54-.27l1.78-2.153a1.94 1.94 0 0 1 1.44-.56a2.06 2.06 0 0 1 1.85 1.236a2.07 2.07 0 0 1-.35 2.199z"></svg:path>`,
})
export class MageColorPickerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageColorSwatchIcon],svg[mage-color-swatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.88 21.25h9.87a2.5 2.5 0 0 0 2.5-2.5v-3.63a2.5 2.5 0 0 0-2.5-2.48h-1.27m-6.1 6.09l6.1-6.11l1.87-1.87a2.49 2.49 0 0 0 0-3.53l-2.57-2.57a2.49 2.49 0 0 0-3.53 0l-1.87 1.87"></svg:path><svg:path d="M8.88 2.75H5.25a2.5 2.5 0 0 0-2.5 2.5v13.5a2.5 2.5 0 0 0 2.5 2.5h3.63a2.5 2.5 0 0 0 2.5-2.5V5.25a2.5 2.5 0 0 0-2.5-2.5"></svg:path><svg:path d="M7.065 18.594a1.594 1.594 0 1 0 0-3.188a1.594 1.594 0 0 0 0 3.188"></svg:path></svg:g>`,
})
export class MageColorSwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageColorSwatchFillIcon],svg[mage-color-swatch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.893 12.84a3.23 3.23 0 0 0-1.796-.91l.639-.64c.3-.304.537-.664.698-1.06a3.2 3.2 0 0 0 0-2.48a3.2 3.2 0 0 0-.698-1.06l-2.564-2.56a3 3 0 0 0-.997-.71a3.24 3.24 0 0 0-2.484 0a3.1 3.1 0 0 0-.998.7l-.638.64a3.24 3.24 0 0 0-1.086-1.973A3.23 3.23 0 0 0 8.863 2H5.242a3.25 3.25 0 0 0-2.29.955A3.26 3.26 0 0 0 2 5.25v13.5c0 .862.342 1.689.95 2.298c.608.61 1.432.952 2.292.952h13.466a3.25 3.25 0 0 0 2.295-1A3.24 3.24 0 0 0 22 18.7v-3.58a3.25 3.25 0 0 0-1.107-2.28M6.928 19.35a2.34 2.34 0 0 1-2.166-1.45a2.36 2.36 0 0 1 .508-2.562A2.341 2.341 0 0 1 9.272 17c0 .623-.247 1.221-.687 1.662s-1.036.688-1.657.688m5.057-12.52l1.646-1.65c.162-.163.356-.293.569-.38c.426-.17.9-.17 1.326 0q.317.14.569.38l2.563 2.57a2 2 0 0 1 .38.57a1.8 1.8 0 0 1 0 1.34c-.09.21-.219.4-.38.56l-6.673 6.7z"></svg:path><svg:path fill="currentColor" d="M7.795 17a.852.852 0 0 1-1.007.845a.85.85 0 0 1-.671-.665a.852.852 0 0 1 .83-1.02a.847.847 0 0 1 .848.84"></svg:path>`,
})
export class MageColorSwatchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCompactDiskIcon],svg[mage-compact-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12.25 2.75a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Z"></svg:path><svg:path d="M14.62 12.25a2.37 2.37 0 1 0-4.74 0a2.37 2.37 0 0 0 4.74 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.25 18.93a6.7 6.7 0 0 1-5.24-2.53m7.24-10.53a6.69 6.69 0 0 1 4.4 4.48"></svg:path></svg:g>`,
})
export class MageCompactDiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCompactDiskFillIcon],svg[mage-compact-disk-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.24 4.758a10.24 10.24 0 1 0 3 7.25a10.2 10.2 0 0 0-3-7.25M12 19.438a7.44 7.44 0 0 1-5.83-2.81a.75.75 0 0 1 1.17-.93a6 6 0 0 0 2.07 1.65a6 6 0 0 0 2.59.59a.75.75 0 1 1 0 1.5m0-4.31a3.12 3.12 0 1 1 0-6.24a3.12 3.12 0 0 1 0 6.24m6.61-4.3a.8.8 0 0 1-.22 0a.74.74 0 0 1-.71-.53a5.93 5.93 0 0 0-3.91-4a.75.75 0 0 1 .45-1.43a7.35 7.35 0 0 1 3.07 1.88a7.45 7.45 0 0 1 1.82 3.1a.74.74 0 0 1-.5 1.01z"></svg:path>`,
})
export class MageCompactDiskFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCompassIcon],svg[mage-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="m7.778 16.222l1.942-5.837a1.06 1.06 0 0 1 .675-.665l5.827-1.942l-1.942 5.837a1.06 1.06 0 0 1-.665.665z"></svg:path></svg:g>`,
})
export class MageCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCompassFillIcon],svg[mage-compass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.727a10.25 10.25 0 1 0 10.25 10.25A10.26 10.26 0 0 0 12 1.727m-2.15 8.38a.4.4 0 0 1 .1-.17a.46.46 0 0 1 .18-.11l6-2l-2 6.06a.5.5 0 0 1-.1.15a.37.37 0 0 1-.17.1l-6 2z"></svg:path>`,
})
export class MageCompassFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageContactBookIcon],svg[mage-contact-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15.854 2.75H9.687A5.14 5.14 0 0 0 4.55 7.889v8.222c0 2.838 2.3 5.139 5.138 5.139h6.167c2.838 0 5.139-2.3 5.139-5.139V7.89c0-2.838-2.3-5.139-5.139-5.139M3.007 8.403H6.09m-3.083 7.194H6.09"></svg:path><svg:path d="M16.67 16.745c0-1.653-1.843-2.996-3.495-2.996S9.68 15.092 9.68 16.744m3.495-5.376a2.348 2.348 0 1 0 0-4.696a2.348 2.348 0 0 0 0 4.696"></svg:path></svg:g>`,
})
export class MageContactBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageContactBookFillIcon],svg[mage-contact-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.833 2H9.676A5.885 5.885 0 0 0 3.8 7.66H3a.75.75 0 0 0 0 1.5h.79v5.69h-.76a.75.75 0 0 0 0 1.5h.8A5.88 5.88 0 0 0 9.706 22h6.157a5.886 5.886 0 0 0 5.887-5.89V7.89A5.9 5.9 0 0 0 15.833 2m-2.679 3.93a3.097 3.097 0 0 1 3.038 3.708a3.1 3.1 0 0 1-4.23 2.253a3.1 3.1 0 0 1-.995-5.057a3.1 3.1 0 0 1 2.187-.904m3.499 11.57a.75.75 0 0 1-.75-.75c0-1.21-1.51-2.25-2.749-2.25s-2.738 1-2.738 2.25a.75.75 0 0 1-1.5 0c0-2.15 2.24-3.75 4.238-3.75c2 0 4.248 1.6 4.248 3.75a.76.76 0 0 1-.75.75"></svg:path><svg:path fill="currentColor" d="M14.754 9.02a1.6 1.6 0 1 1-3.2.02a1.6 1.6 0 0 1 3.2-.02"></svg:path>`,
})
export class MageContactBookFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCopyIcon],svg[mage-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.327 7.286h-8.044a1.93 1.93 0 0 0-1.925 1.938v10.088c0 1.07.862 1.938 1.925 1.938h8.044a1.93 1.93 0 0 0 1.925-1.938V9.224c0-1.07-.862-1.938-1.925-1.938"></svg:path><svg:path d="M15.642 7.286V4.688c0-.514-.203-1.007-.564-1.37a1.92 1.92 0 0 0-1.361-.568H5.673c-.51 0-1 .204-1.36.568a1.95 1.95 0 0 0-.565 1.37v10.088c0 .514.203 1.007.564 1.37s.85.568 1.361.568h2.685"></svg:path></svg:g>`,
})
export class MageCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCopyFillIcon],svg[mage-copy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.355 6.54h-1.94V4.69a2.69 2.69 0 0 0-1.646-2.484A2.7 2.7 0 0 0 13.745 2h-8.05a2.68 2.68 0 0 0-2.67 2.69v10.09a2.68 2.68 0 0 0 2.67 2.69h1.94v1.85a2.68 2.68 0 0 0 2.67 2.68h8a2.68 2.68 0 0 0 2.67-2.68V9.23a2.69 2.69 0 0 0-2.62-2.69M7.635 9.23v6.74h-1.94a1.18 1.18 0 0 1-1.17-1.19V4.69a1.18 1.18 0 0 1 1.17-1.19h8.05a1.18 1.18 0 0 1 1.17 1.19v1.85h-4.61a2.69 2.69 0 0 0-2.67 2.69"></svg:path>`,
})
export class MageCopyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCreditCardIcon],svg[mage-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.139 3.778H6.86a4.11 4.11 0 0 0-4.111 4.11v8.223a4.11 4.11 0 0 0 4.111 4.111h10.28a4.11 4.11 0 0 0 4.111-4.11V7.888a4.11 4.11 0 0 0-4.111-4.111m4.11 5.14H2.75m3.468 7.194h5.139"></svg:path>`,
})
export class MageCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCreditCardFillIcon],svg[mage-credit-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.14 3.025H6.86A4.87 4.87 0 0 0 2 7.885v8.23a4.87 4.87 0 0 0 4.86 4.86h10.28a4.87 4.87 0 0 0 4.86-4.86v-8.23a4.87 4.87 0 0 0-4.86-4.86m-5.78 14.09H6.22a1 1 0 0 1 0-2h5.14a1 1 0 1 1 0 2m9.14-8.95h-17v-.28a3.37 3.37 0 0 1 3.36-3.36h10.28a3.37 3.37 0 0 1 3.36 3.36z"></svg:path>`,
})
export class MageCreditCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCrownAIcon],svg[mage-crown-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.349 5.18L16.11 8.317l-3.196-4.382a1.027 1.027 0 0 0-1.83 0L7.89 8.318L4.65 5.18a1.028 1.028 0 0 0-1.901.504v9.802a5.14 5.14 0 0 0 5.139 5.139h8.222a5.14 5.14 0 0 0 5.139-5.14V5.684a1.028 1.028 0 0 0-1.901-.504M8 16.513h8"></svg:path>`,
})
export class MageCrownAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCrownAFillIcon],svg[mage-crown-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.56 4.607a1.81 1.81 0 0 0-2-.54a1.75 1.75 0 0 0-.79.63l-2.56 2.48l-2.66-3.64a1.77 1.77 0 0 0-2.48-.65a1.76 1.76 0 0 0-.62.65l-2.66 3.64l-2.56-2.48a1.77 1.77 0 0 0-2.84-.09A1.76 1.76 0 0 0 2 5.687v9.8a5.89 5.89 0 0 0 5.89 5.89h8.22a5.91 5.91 0 0 0 5.89-5.89v-9.83a1.83 1.83 0 0 0-.44-1.05m-5.57 12.91h-8a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageCrownAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCrownBIcon],svg[mage-crown-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.349 5.255l-3.238 3.11l-3.196-4.354a1.027 1.027 0 0 0-1.83 0L7.89 8.366L4.65 5.255a1.028 1.028 0 0 0-1.901.503l1.593 11.203a4.11 4.11 0 0 0 4.111 3.587h7.195a4.11 4.11 0 0 0 4.11-3.587L21.25 5.758a1.028 1.028 0 0 0-1.901-.503M8 16.447h8"></svg:path>`,
})
export class MageCrownBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCrownBFillIcon],svg[mage-crown-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.626 4.682a1.8 1.8 0 0 0-.93-.61a1.79 1.79 0 0 0-1.912.69l-2.561 2.471l-2.662-3.632a1.9 1.9 0 0 0-.62-.64a1.78 1.78 0 0 0-2.482.64L7.797 7.233L5.236 4.762a1.81 1.81 0 0 0-1.911-.69a1.79 1.79 0 0 0-1.321 1.79l1.59 11.198a4.85 4.85 0 0 0 4.814 4.242h7.274a4.854 4.854 0 0 0 4.823-4.242l1.491-11.207a.5.5 0 0 0 0-.12a1.8 1.8 0 0 0-.37-1.051M16.053 17.42H8.048a1 1 0 1 1 0-2.001h8.005a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageCrownBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCupHotIcon],svg[mage-cup-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.5 9.256h12v7.996a3.997 3.997 0 0 1-4 3.998h-4a4 4 0 0 1-4-3.998z"></svg:path><svg:path d="M15.5 10.256h3a2 2 0 0 1 2 1.999v3.998a2 2 0 0 1-2 1.999h-3.13M5.89 6.748a1.41 1.41 0 0 0 0-2a1.41 1.41 0 0 1 0-1.998m3.25 3.998a1.42 1.42 0 0 0 0-2a1.41 1.41 0 0 1 0-1.998m3.49 3.998a1.41 1.41 0 0 0 0-2a1.41 1.41 0 0 1 0-1.998"></svg:path></svg:g>`,
})
export class MageCupHotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageCupHotFillIcon],svg[mage-cup-hot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.406 10.377a2.75 2.75 0 0 0-1.928-.805H16.24v-.249a.756.756 0 0 0-.745-.745H3.564a.746.746 0 0 0-.746.745v7.954A4.723 4.723 0 0 0 7.541 22h3.977a4.7 4.7 0 0 0 1.8-.368a4.6 4.6 0 0 0 2.555-2.545v-.07h2.575a2.754 2.754 0 0 0 2.734-2.734v-3.977a2.7 2.7 0 0 0-.776-1.929m-.686 5.906a1.25 1.25 0 0 1-.368.875a1.2 1.2 0 0 1-.875.368H16.23a2 2 0 0 0 0-.249v-6.214h2.238a1.253 1.253 0 0 1 1.242 1.243zM5.94 7.573a.746.746 0 0 1-.527-1.272a.6.6 0 0 0 .14-.209a.6.6 0 0 0 0-.249a.6.6 0 0 0 0-.258a.6.6 0 0 0-.14-.209a2.22 2.22 0 0 1-.636-1.521a2.24 2.24 0 0 1 .636-1.531a.746.746 0 1 1 .994 1.064a.6.6 0 0 0-.139.208a.8.8 0 0 0 0 .259a.7.7 0 0 0 0 .248q.055.122.15.22a2.1 2.1 0 0 1 .626 1.52a2.07 2.07 0 0 1-.637 1.522a.73.73 0 0 1-.467.208m3.231 0a.76.76 0 0 1-.527-.208a.746.746 0 0 1 0-1.054a.656.656 0 0 0 0-.945a2.1 2.1 0 0 1-.457-.696a2.08 2.08 0 0 1 0-1.64c.11-.263.268-.503.467-.706a.746.746 0 1 1 .995 1.064a.6.6 0 0 0-.14.208a.8.8 0 0 0 0 .259a.7.7 0 0 0 0 .248q.056.122.15.22a2.147 2.147 0 0 1 0 3.032a.74.74 0 0 1-.488.218m3.47 0a.746.746 0 0 1-.527-1.272a.6.6 0 0 0 .14-.209a.6.6 0 0 0 0-.249a.6.6 0 0 0 0-.258a.6.6 0 0 0-.14-.209a2.18 2.18 0 0 1-.636-1.521a2.1 2.1 0 0 1 .636-1.531a.746.746 0 0 1 1.054 1.054a.5.5 0 0 0-.149.218a.7.7 0 0 0 0 .249a.7.7 0 0 0 0 .249a.6.6 0 0 0 .15.218a2.07 2.07 0 0 1 .625 1.521c.002.283-.052.564-.159.826a2.4 2.4 0 0 1-.467.696a.77.77 0 0 1-.527.218"></svg:path>`,
})
export class MageCupHotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashMenuIcon],svg[mage-dash-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M4.5 12h15m-15 5.77h15M4.5 6.23h15"></svg:path>`,
})
export class MageDashMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardIcon],svg[mage-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.557 2.75m10.761 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932m0 10.75h-3.875a1.94 1.94 0 0 0-1.942 1.933v3.875a1.94 1.94 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942v-3.875a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.94 1.94 0 0 0-1.942-1.942"></svg:path>`,
})
export class MageDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboard2Icon],svg[mage-dashboard-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.557 2.75m10.761 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.94 1.94 0 0 0-1.942-1.942m8.818-.001a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75"></svg:path>`,
})
export class MageDashboard2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboard2FillIcon],svg[mage-dashboard-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.68v3.88a2.45 2.45 0 0 1-1.509 2.258A2.4 2.4 0 0 1 8.56 11H4.68a2.44 2.44 0 0 1-2.43-2.44V4.69a2.44 2.44 0 0 1 2.43-2.44h3.88A2.44 2.44 0 0 1 11 4.68m10.75.01v3.87a2.4 2.4 0 0 1-.71 1.72a2.38 2.38 0 0 1-1.72.72h-3.88a2.45 2.45 0 0 1-2.256-1.502A2.4 2.4 0 0 1 13 8.56V4.69a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.88a2.44 2.44 0 0 1 2.43 2.44M11 15.45v3.87a2.44 2.44 0 0 1-2.44 2.43H4.68a2.45 2.45 0 0 1-1.72-.71a2.4 2.4 0 0 1-.71-1.72v-3.87a2.4 2.4 0 0 1 .71-1.72A2.47 2.47 0 0 1 4.68 13h3.88A2.46 2.46 0 0 1 11 15.45m10.75 1.93A4.37 4.37 0 1 1 17.37 13a4.4 4.4 0 0 1 4.049 2.707c.22.53.332 1.099.331 1.673"></svg:path>`,
})
export class MageDashboard2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboard3Icon],svg[mage-dashboard-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.318 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.885A1.93 1.93 0 0 0 4.682 10.5h14.636a1.93 1.93 0 0 0 1.932-1.932V4.682a1.93 1.93 0 0 0-1.932-1.932M8.567 13.5H4.682a1.93 1.93 0 0 0-1.932 1.933v3.885a1.93 1.93 0 0 0 1.932 1.932h3.885a1.93 1.93 0 0 0 1.932-1.932v-3.885A1.94 1.94 0 0 0 8.567 13.5m10.751 0h-3.885a1.94 1.94 0 0 0-1.932 1.933v3.885a1.93 1.93 0 0 0 1.932 1.932h3.885a1.933 1.933 0 0 0 1.932-1.932v-3.885a1.93 1.93 0 0 0-1.932-1.932"></svg:path>`,
})
export class MageDashboard3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboard3FillIcon],svg[mage-dashboard-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.75 4.69v3.88a2.4 2.4 0 0 1-.71 1.72a2.47 2.47 0 0 1-1.72.71H4.68a2.42 2.42 0 0 1-2.43-2.43V4.69a2.44 2.44 0 0 1 2.43-2.44h14.64a2.44 2.44 0 0 1 1.72.72a2.4 2.4 0 0 1 .71 1.72M11 15.43v3.89a2.42 2.42 0 0 1-2.43 2.43H4.68a2.42 2.42 0 0 1-2.43-2.43v-3.88A2.44 2.44 0 0 1 4.68 13h3.89a2.42 2.42 0 0 1 1.71.72a2.46 2.46 0 0 1 .72 1.71m10.75.01v3.88a2.4 2.4 0 0 1-.71 1.72a2.47 2.47 0 0 1-1.72.71h-3.89a2.45 2.45 0 0 1-1.72-.71a2.4 2.4 0 0 1-.71-1.72v-3.88A2.46 2.46 0 0 1 15.43 13h3.89a2.44 2.44 0 0 1 1.72.72a2.4 2.4 0 0 1 .71 1.72"></svg:path>`,
})
export class MageDashboard3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboard4Icon],svg[mage-dashboard-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.625 2.75a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75m10.75 0a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75M6.625 13.5a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75m10.75 0a3.875 3.875 0 1 0 0 7.75a3.875 3.875 0 0 0 0-7.75"></svg:path>`,
})
export class MageDashboard4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboard4FillIcon],svg[mage-dashboard-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.01 6.625a4.2 4.2 0 0 1-.34 1.67a4.34 4.34 0 0 1-4 2.7a4.37 4.37 0 0 1-3.09-7.46a4.37 4.37 0 0 1 6.19 0a4.47 4.47 0 0 1 1.28 3.09zm10.75 0a4.3 4.3 0 0 1-.33 1.67a4.6 4.6 0 0 1-1 1.42a4.38 4.38 0 0 1-6.19 0a4.37 4.37 0 0 1 0-6.18a4.35 4.35 0 0 1 3.09-1.29a4.4 4.4 0 0 1 3.1 1.29a4.35 4.35 0 0 1 1.33 3.09m-10.75 10.75a4.2 4.2 0 0 1-.36 1.68a4.2 4.2 0 0 1-.94 1.42a4.35 4.35 0 0 1-3.1 1.28a4.37 4.37 0 0 1-3.09-7.46a4.37 4.37 0 0 1 6.19 0a4.47 4.47 0 0 1 1.28 3.09zm10.75 0a4.37 4.37 0 1 1-4.38-4.38a4.42 4.42 0 0 1 3.1 1.29a4.35 4.35 0 0 1 1.28 3.09"></svg:path>`,
})
export class MageDashboard4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardBarIcon],svg[mage-dashboard-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-width="1.6" d="M7.672 16.222v-5.099m4.451 5.099V7.778m4.205 8.444V9.82"></svg:path></svg:g>`,
})
export class MageDashboardBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardBarFillIcon],svg[mage-dashboard-bar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.21 2H8.75A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.21 2M8.43 16.23a.8.8 0 1 1-1.6 0v-5.1a.8.8 0 0 1 1.6 0zm4.45 0a.8.8 0 1 1-1.6 0V7.78a.8.8 0 0 1 1.6 0zm4.21 0a.8.8 0 1 1-1.6 0V9.82a.8.8 0 0 1 1.6 0z"></svg:path>`,
})
export class MageDashboardBarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardBarNotificationIcon],svg[mage-dashboard-bar-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="19" cy="5" r="2.5" stroke-width="1.5"></svg:circle><svg:path stroke-linecap="round" stroke-width="1.5" d="M21.25 10v5.25a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6H14"></svg:path><svg:path stroke-linecap="round" stroke-width="1.6" d="M8.276 16.036v-4.388m3.83 4.388V8.769m3.618 7.267v-5.51"></svg:path></svg:g>`,
})
export class MageDashboardBarNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardChartIcon],svg[mage-dashboard-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 15l2.45-3.26a1 1 0 0 1 1.33-.25L13.17 13a1 1 0 0 0 1.37-.29L17 9"></svg:path></svg:g>`,
})
export class MageDashboardChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardChartArrowIcon],svg[mage-dashboard-chart-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 14.844l2.322-3.09a.95.95 0 0 1 .588-.36a.95.95 0 0 1 .673.123l2.265 1.43c.21.132.46.176.702.124a.95.95 0 0 0 .597-.398l2.332-3.517"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13.683 9.678l2.796-.522l.521 2.797"></svg:path></svg:g>`,
})
export class MageDashboardChartArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardChartArrowFillIcon],svg[mage-dashboard-chart-arrow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.21 2H8.75A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.21 2m1.89 10.69h-.14a.76.76 0 0 1-.74-.62l-.18-1l-1.31 2a1.71 1.71 0 0 1-2.32.5l-2.27-1.44a.18.18 0 0 0-.13 0a.2.2 0 0 0-.13.08L7.56 15.3a.77.77 0 0 1-.6.3a.74.74 0 0 1-.45-.15a.75.75 0 0 1-.15-1l2.32-3.09a1.71 1.71 0 0 1 2.25-.43l2.28 1.44a.23.23 0 0 0 .28-.06l1.34-2l-1.08.15a.753.753 0 0 1-.28-1.48l2.76-.51h.36a.12.12 0 0 1 .08 0l.15.08l.15.12q.054.065.09.14a.5.5 0 0 1 .06.15l.52 2.8a.75.75 0 0 1-.54.93"></svg:path>`,
})
export class MageDashboardChartArrowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardChartFillIcon],svg[mage-dashboard-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.21 2H8.75A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.21 2m2.37 7.42l-2.45 3.71a1.77 1.77 0 0 1-2.4.51l-2.39-1.51a.2.2 0 0 0-.17 0a.24.24 0 0 0-.16.09l-2.45 3.24a.75.75 0 0 1-1 .15a.75.75 0 0 1-.15-1l2.45-3.26a1.75 1.75 0 0 1 2.33-.43l2.39 1.51a.21.21 0 0 0 .19 0a.23.23 0 0 0 .15-.1l2.46-3.71a.75.75 0 0 1 1.25.83z"></svg:path>`,
})
export class MageDashboardChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardChartNotificationIcon],svg[mage-dashboard-chart-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="19" cy="5" r="2.5"></svg:circle><svg:path stroke-linecap="round" d="M21.25 10v5.25a6 6 0 0 1-6 6h-6.5a6 6 0 0 1-6-6v-6.5a6 6 0 0 1 6-6H14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7.27 15.045l2.205-2.934a.9.9 0 0 1 1.197-.225l2.151 1.359a.9.9 0 0 0 1.233-.261l2.214-3.34"></svg:path></svg:g>`,
})
export class MageDashboardChartNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardChartStarIcon],svg[mage-dashboard-chart-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M14 21H8.75a6 6 0 0 1-6-6V8.5a6 6 0 0 1 6-6h6.5a6 6 0 0 1 6 6v5.25"></svg:path><svg:path stroke-linejoin="round" d="m7.5 14.7l2.205-2.934a.9.9 0 0 1 1.197-.225l2.151 1.359a.9.9 0 0 0 1.233-.261L16.5 9.3m2.433 10.38l1.083.569a.276.276 0 0 0 .4-.293l-.207-1.205a.28.28 0 0 1 .08-.245l.876-.854a.276.276 0 0 0-.152-.473l-1.21-.174a.28.28 0 0 1-.207-.152l-.553-1.105a.276.276 0 0 0-.497 0l-.553 1.105a.28.28 0 0 1-.207.152l-1.194.174a.275.275 0 0 0-.23.34a.27.27 0 0 0 .076.133l.876.854a.28.28 0 0 1 .08.245l-.207 1.205a.276.276 0 0 0 .4.293l1.083-.57a.28.28 0 0 1 .263 0"></svg:path></svg:g>`,
})
export class MageDashboardChartStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCheckIcon],svg[mage-dashboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.558 2.75m10.76 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.943 1.943 0 0 0-1.942-1.942m5.892 3.794l1.647 1.647a.62.62 0 0 0 .886 0l3.32-3.319"></svg:path>`,
})
export class MageDashboardCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCheckFillIcon],svg[mage-dashboard-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.68v3.88A2.44 2.44 0 0 1 8.56 11H4.68a2.38 2.38 0 0 1-1.72-.72a2.4 2.4 0 0 1-.71-1.72V4.69a2.44 2.44 0 0 1 2.43-2.44h3.88A2.46 2.46 0 0 1 11 4.68m10.75.01v3.87a2.45 2.45 0 0 1-1.498 2.252a2.4 2.4 0 0 1-.932.188h-3.88A2.42 2.42 0 0 1 13 8.56V4.69a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.88a2.44 2.44 0 0 1 2.43 2.44M11 15.45v3.87a2.44 2.44 0 0 1-2.44 2.43H4.68a2.42 2.42 0 0 1-2.43-2.43v-3.87A2.46 2.46 0 0 1 4.68 13h3.88A2.46 2.46 0 0 1 11 15.45m5.54 4.43a1.4 1.4 0 0 1-.53-.1a1.4 1.4 0 0 1-.45-.31l-1.64-1.64a.74.74 0 0 1 0-1.06a.75.75 0 0 1 1.06 0l1.56 1.57l3.23-3.24a.74.74 0 0 1 1.06 0a.75.75 0 0 1 0 1.06l-3.32 3.32a1.4 1.4 0 0 1-.45.3a1.3 1.3 0 0 1-.52.1"></svg:path>`,
})
export class MageDashboardCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCircleBarIcon],svg[mage-dashboard-circle-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="19" height="19" x="2.5" y="2.5" stroke-width="1.5" rx="9.5"></svg:rect><svg:path stroke-linecap="round" stroke-width="1.6" d="M7.55 14.621V9.38m4.5 6.961V7.66m4.5 6.961V9.38"></svg:path></svg:g>`,
})
export class MageDashboardCircleBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCircleBarFillIcon],svg[mage-dashboard-circle-bar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75M8.35 14.63a.8.8 0 0 1-1.6 0V9.38a.8.8 0 1 1 1.6 0zm4.5 1.71a.8.8 0 1 1-1.6 0V7.66a.8.8 0 0 1 1.6 0zm4.5-1.71a.8.8 0 0 1-1.6 0V9.38a.8.8 0 0 1 1.6 0z"></svg:path>`,
})
export class MageDashboardCircleBarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCircleChartIcon],svg[mage-dashboard-circle-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="19" height="19" x="2.5" y="2.5" rx="9.5"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7.465 14.72l2.222-2.956a.907.907 0 0 1 1.207-.226l2.167 1.369a.907.907 0 0 0 1.243-.263l2.23-3.365"></svg:path></svg:g>`,
})
export class MageDashboardCircleChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCircleChartFillIcon],svg[mage-dashboard-circle-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5.16 8l-2.23 3.36a1.65 1.65 0 0 1-1 .71a1.62 1.62 0 0 1-1.23-.23l-2.17-1.37a.2.2 0 0 0-.11 0a.11.11 0 0 0-.09.06l-2.23 3a.73.73 0 0 1-.6.3a.8.8 0 0 1-.45-.15a.75.75 0 0 1-.14-1.05l2.22-2.95c.243-.33.6-.557 1-.64a1.7 1.7 0 0 1 1.18.22l2.17 1.38a.17.17 0 0 0 .12 0a.14.14 0 0 0 .1-.07l2.23-3.36a.75.75 0 0 1 1.25.83z"></svg:path>`,
})
export class MageDashboardCircleChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCrossIcon],svg[mage-dashboard-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.558 2.75m10.76 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.943 1.943 0 0 0-1.942-1.942"></svg:path><svg:path stroke-miterlimit="10" d="m19.891 14.854l-5.032 5.032m.001-5.021l5.031 5.032"></svg:path></svg:g>`,
})
export class MageDashboardCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardCrossFillIcon],svg[mage-dashboard-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.68v3.88a2.45 2.45 0 0 1-1.514 2.259A2.4 2.4 0 0 1 8.55 11H4.68a2.44 2.44 0 0 1-2.43-2.44V4.69a2.44 2.44 0 0 1 2.43-2.44h3.87A2.44 2.44 0 0 1 11 4.68m10.75.01v3.87a2.45 2.45 0 0 1-.71 1.72a2.38 2.38 0 0 1-1.72.72h-3.88a2.5 2.5 0 0 1-1.73-.71A2.44 2.44 0 0 1 13 8.56V4.69a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.87a2.46 2.46 0 0 1 2.44 2.44M11 15.45v3.87a2.44 2.44 0 0 1-2.45 2.43H4.68a2.45 2.45 0 0 1-1.72-.71a2.4 2.4 0 0 1-.71-1.72v-3.87a2.4 2.4 0 0 1 .71-1.72A2.47 2.47 0 0 1 4.68 13h3.87A2.46 2.46 0 0 1 11 15.45m9.42 3.92a.75.75 0 0 1-1.06 1.06l-2-2l-2 2a.74.74 0 0 1-.53.22a.7.7 0 0 1-.53-.22a.737.737 0 0 1 0-1.06l2-2l-2-2a.737.737 0 0 1 0-1.06a.75.75 0 0 1 1.06 0l2 2l2-2a.75.75 0 0 1 1.06 1.06l-2 2z"></svg:path>`,
})
export class MageDashboardCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardFillIcon],svg[mage-dashboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.995 4.68v3.88A2.44 2.44 0 0 1 8.545 11h-3.86a2.38 2.38 0 0 1-1.72-.72a2.4 2.4 0 0 1-.71-1.72V4.69a2.44 2.44 0 0 1 2.43-2.44h3.87a2.42 2.42 0 0 1 1.72.72a2.4 2.4 0 0 1 .72 1.71m10.75.01v3.87a2.46 2.46 0 0 1-2.43 2.44h-3.88a2.5 2.5 0 0 1-1.73-.71a2.44 2.44 0 0 1-.71-1.73V4.69a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.87a2.46 2.46 0 0 1 2.44 2.44m0 10.75v3.87a2.46 2.46 0 0 1-2.43 2.44h-3.88a2.5 2.5 0 0 1-1.75-.69a2.42 2.42 0 0 1-.71-1.73v-3.87a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.87a2.46 2.46 0 0 1 2.44 2.44zm-10.75.01v3.87a2.46 2.46 0 0 1-2.45 2.43h-3.86a2.42 2.42 0 0 1-2.43-2.43v-3.87A2.46 2.46 0 0 1 4.685 13h3.87a2.5 2.5 0 0 1 1.73.72a2.45 2.45 0 0 1 .71 1.73"></svg:path>`,
})
export class MageDashboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardMinusIcon],svg[mage-dashboard-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.557 2.75m10.761 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.94 1.94 0 0 0-1.942-1.942"></svg:path><svg:path stroke-miterlimit="10" d="M14.317 17.375h6.116"></svg:path></svg:g>`,
})
export class MageDashboardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardMinusFillIcon],svg[mage-dashboard-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.68v3.88A2.44 2.44 0 0 1 8.55 11H4.68a2.38 2.38 0 0 1-1.72-.72a2.4 2.4 0 0 1-.71-1.72V4.69a2.44 2.44 0 0 1 2.43-2.44h3.87a2.46 2.46 0 0 1 1.73.72A2.42 2.42 0 0 1 11 4.68m10.75.01v3.87A2.44 2.44 0 0 1 19.32 11h-3.88a2.5 2.5 0 0 1-1.73-.71A2.44 2.44 0 0 1 13 8.56V4.69a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.83a2.46 2.46 0 0 1 2.44 2.44zM11 15.45v3.87a2.44 2.44 0 0 1-2.45 2.43H4.68a2.42 2.42 0 0 1-2.43-2.43v-3.87A2.46 2.46 0 0 1 4.68 13h3.87a2.47 2.47 0 0 1 1.73.72c.46.458.719 1.08.72 1.73m9.43 2.68h-6.16a.75.75 0 0 1 0-1.5h6.12a.75.75 0 1 1 0 1.5z"></svg:path>`,
})
export class MageDashboardMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardPlusIcon],svg[mage-dashboard-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.557 2.75m10.761 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.94 1.94 0 0 0-1.942-1.942"></svg:path><svg:path stroke-miterlimit="10" d="M17.368 13.817v7.116m-3.551-3.55h7.116"></svg:path></svg:g>`,
})
export class MageDashboardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDashboardPlusFillIcon],svg[mage-dashboard-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.98 4.68v3.88a2.45 2.45 0 0 1-1.514 2.259A2.4 2.4 0 0 1 8.53 11H4.66a2.44 2.44 0 0 1-2.43-2.44V4.69a2.44 2.44 0 0 1 2.43-2.44h3.87a2.5 2.5 0 0 1 1.73.71a2.46 2.46 0 0 1 .72 1.72m10.75.01v3.87a2.45 2.45 0 0 1-.71 1.72a2.38 2.38 0 0 1-1.72.72h-3.84a2.5 2.5 0 0 1-1.73-.71a2.44 2.44 0 0 1-.71-1.73V4.69a2.4 2.4 0 0 1 .72-1.72a2.42 2.42 0 0 1 1.72-.72h3.87a2.46 2.46 0 0 1 2.44 2.44zM10.98 15.45v3.87a2.44 2.44 0 0 1-2.45 2.43H4.66a2.45 2.45 0 0 1-1.72-.71a2.4 2.4 0 0 1-.71-1.72v-3.87a2.4 2.4 0 0 1 .71-1.72A2.46 2.46 0 0 1 4.66 13h3.87a2.46 2.46 0 0 1 2.45 2.45m10.68 1.94a.76.76 0 0 1-.75.75h-2.82v2.8a.75.75 0 0 1-1.5 0v-2.8h-2.8a.75.75 0 1 1 0-1.5h2.8v-2.82a.75.75 0 1 1 1.5 0v2.82h2.82a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class MageDashboardPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDatabaseIcon],svg[mage-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.922 12.005v5.281a2.64 2.64 0 0 1-1.32 2.271A12.7 12.7 0 0 1 12 21.247a12.7 12.7 0 0 1-6.601-1.703a2.64 2.64 0 0 1-1.32-2.258v-5.28A11.57 11.57 0 0 0 12 14.645a11.57 11.57 0 0 0 7.922-2.64m0-6.601A11.57 11.57 0 0 1 12 8.044a11.57 11.57 0 0 1-7.922-2.64A11.57 11.57 0 0 1 12 2.764a11.57 11.57 0 0 1 7.922 2.64m0 0v6.601m-15.844 0V5.404"></svg:path>`,
})
export class MageDatabaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDatabase2Icon],svg[mage-database-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.938 14.315v3.467a2.31 2.31 0 0 1-1.157 1.987A11.14 11.14 0 0 1 12 21.248a11.14 11.14 0 0 1-5.781-1.49a2.31 2.31 0 0 1-1.157-1.976v-3.467A10.13 10.13 0 0 0 12 16.626c2.52.12 4.994-.704 6.938-2.31m0-.001V9.694A10.13 10.13 0 0 1 12 12.004c-2.52.12-4.994-.704-6.937-2.31v4.621m13.875-9.243A10.13 10.13 0 0 0 12 2.762c-2.52-.12-4.994.704-6.937 2.31"></svg:path><svg:path d="M18.938 9.69V5.067A10.13 10.13 0 0 1 12 7.378c-2.52.12-4.994-.704-6.937-2.31v4.621"></svg:path></svg:g>`,
})
export class MageDatabase2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDatabase2FillIcon],svg[mage-database-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.449 4.895v-.09l-.06-.13l-.09-.1l-.06-.06a12.31 12.31 0 0 0-14.77 0l-.09.09a1 1 0 0 0-.06.12a.3.3 0 0 0 0 .12a.5.5 0 0 0 0 .17v12.72a3.05 3.05 0 0 0 1.53 2.62a11.8 11.8 0 0 0 6.14 1.59h.24a11.9 11.9 0 0 0 5.93-1.58a3.06 3.06 0 0 0 1.12-1.11c.271-.464.413-.993.41-1.53V5.035a.9.9 0 0 0-.24-.14m-7.66-1.42a9.37 9.37 0 0 1 5.63 1.56a11.08 11.08 0 0 1-11.34 0a9.5 9.5 0 0 1 5.71-1.56m6.18 10.42a10.85 10.85 0 0 1-12.37 0v-2.79a10.77 10.77 0 0 0 6.15 1.6a10.94 10.94 0 0 0 6.22-1.6z"></svg:path>`,
})
export class MageDatabase2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDatabaseFillIcon],svg[mage-database-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.435 4.898a.5.5 0 0 0-.1-.1h-.06a14 14 0 0 0-16.69 0a.24.24 0 0 0-.1.1a.66.66 0 0 0-.18.47v11.89a3.4 3.4 0 0 0 .47 1.67c.295.51.72.935 1.23 1.23a13.5 13.5 0 0 0 7 1.8h.28a13.4 13.4 0 0 0 6.71-1.79c.514-.295.94-.719 1.24-1.23a3.54 3.54 0 0 0 .46-1.69V5.378a.7.7 0 0 0-.26-.48m-1.33 6.7a12.52 12.52 0 0 1-14.35 0v-4.7a12.13 12.13 0 0 0 7.14 1.92h.59a12.27 12.27 0 0 0 6.65-1.92z"></svg:path>`,
})
export class MageDatabaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDeliveryTruckIcon],svg[mage-delivery-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 6.25v9.51q-.18.225-.29.49H8.29a2.5 2.5 0 0 0-4.58 0H3a1 1 0 0 1-1-1v-9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2m6 7.11v2.89h-1.71a2.49 2.49 0 0 0-4.29-.49V7.25h2.43a1 1 0 0 1 .86.49l.91 1.51l1.23 2.05a4 4 0 0 1 .57 2.06"></svg:path><svg:path d="M8.5 17.25a2.5 2.5 0 1 1-4.79-1a2.5 2.5 0 0 1 4.79 1m12 0a2.5 2.5 0 1 1-4.79-1q.11-.265.29-.49a2.49 2.49 0 0 1 4.29.49c.14.315.212.656.21 1m-9.5-6H6m5-3H6"></svg:path></svg:g>`,
})
export class MageDeliveryTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDeliveryTruckFillIcon],svg[mage-delivery-truck-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.031 10.875l-2.136-3.543a1.76 1.76 0 0 0-1.497-.846h-1.677v-.249a2.73 2.73 0 0 0-.804-1.935a2.75 2.75 0 0 0-1.94-.802H3.994a2.73 2.73 0 0 0-2.541 1.687a2.7 2.7 0 0 0-.204 1.05v8.958a1.74 1.74 0 0 0 1.507 1.722q-.007.135 0 .269a3.15 3.15 0 0 0 .948 2.279A3.24 3.24 0 0 0 6 20.46a3.28 3.28 0 0 0 2.285-.956a3.26 3.26 0 0 0 .96-2.279a2 2 0 0 0 0-.248h5.509a2 2 0 0 0 0 .248a3.15 3.15 0 0 0 .948 2.28A3.24 3.24 0 0 0 18 20.5a3.28 3.28 0 0 0 2.285-.956a3.26 3.26 0 0 0 .959-2.279a2 2 0 0 0 0-.249H22a.76.76 0 0 0 .749-.746v-2.876c0-.89-.25-1.762-.719-2.519m-14.293 6.31a1.7 1.7 0 0 1-.519 1.225a1.79 1.79 0 0 1-2.466 0a1.73 1.73 0 0 1-.508-1.234a1.6 1.6 0 0 1 .14-.687c.132-.313.359-.577.648-.757a1.74 1.74 0 0 1 .998-.288c.338 0 .668.1.948.288c.287.183.513.446.65.757c.098.215.15.45.149.687zm3.244-4.976h-4.99a1 1 0 0 1-.999-.995a.994.994 0 0 1 .998-.996h4.991a1 1 0 0 1 .998.996a.994.994 0 0 1-.998.995m0-3.424h-4.99a1 1 0 0 1-.999-.995a.994.994 0 0 1 .998-.995h4.991a1 1 0 0 1 .998.995a.994.994 0 0 1-.998.995m8.734 8.4a1.7 1.7 0 0 1-.52 1.225a1.79 1.79 0 0 1-2.465 0a1.73 1.73 0 0 1-.509-1.234a1.64 1.64 0 0 1 .33-1.006c.246-.327.599-.56.998-.657h.25a.3.3 0 0 1 .139 0h.2c.303.035.592.148.838.329c.247.181.44.425.559.707c.099.215.15.45.15.686z"></svg:path><svg:path fill="currentColor" d="M17.96 15.434a.3.3 0 0 0-.14 0z"></svg:path>`,
})
export class MageDeliveryTruckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDialerKeypadIcon],svg[mage-dialer-keypad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.926a1.088 1.088 0 1 0 0-2.176a1.088 1.088 0 0 0 0 2.176m5.441 0a1.088 1.088 0 1 0 0-2.176a1.088 1.088 0 0 0 0 2.176m-10.882 0a1.088 1.088 0 1 0 0-2.176a1.088 1.088 0 0 0 0 2.176M12 10.368a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177m5.441 0a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177m-10.882 0a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177M12 15.809a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177m0 5.441a1.088 1.088 0 1 0 0-2.176a1.088 1.088 0 0 0 0 2.176m5.441-5.441a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177m-10.882 0a1.088 1.088 0 1 0 0-2.177a1.088 1.088 0 0 0 0 2.177"></svg:path>`,
})
export class MageDialerKeypadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDialerKeypadFillIcon],svg[mage-dialer-keypad-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.84 3.84a1.838 1.838 0 0 1-3.141 1.3a1.838 1.838 0 1 1 2.602-2.601c.345.345.54.812.54 1.3m3.599 1.839a1.84 1.84 0 1 0 0-3.679a1.84 1.84 0 0 0 0 3.68M8.4 3.84a1.838 1.838 0 0 1-3.141 1.3A1.839 1.839 0 1 1 7.86 2.539c.345.345.539.812.539 1.3m5.441 5.437a1.839 1.839 0 1 1-3.677-.041a1.839 1.839 0 0 1 3.677.041m3.6 1.839a1.84 1.84 0 1 0 0-3.679a1.84 1.84 0 0 0 0 3.68M8.4 9.276a1.839 1.839 0 0 1-3.141 1.3a1.839 1.839 0 1 1 3.141-1.3m5.44 5.438a1.838 1.838 0 0 1-2.193 1.815a1.84 1.84 0 1 1 2.193-1.815m0 5.446a1.838 1.838 0 0 1-2.199 1.805a1.84 1.84 0 0 1-.663-3.333a1.84 1.84 0 0 1 2.862 1.529m5.44-5.447a1.838 1.838 0 0 1-2.193 1.815a1.84 1.84 0 0 1-1.348-2.507a1.84 1.84 0 0 1 3.541.692m-10.88 0a1.838 1.838 0 0 1-3.137 1.314A1.84 1.84 0 1 1 8.4 14.714"></svg:path>`,
})
export class MageDialerKeypadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionRightIcon],svg[mage-direction-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.477 10.826L3.275 6.288a2.154 2.154 0 0 1 2.771-3.016l13.959 6.663a2.155 2.155 0 0 1 0 3.906l-14.16 6.865a2.154 2.154 0 0 1-2.771-3.073l3.403-4.74a2.15 2.15 0 0 0 0-2.067"></svg:path>`,
})
export class MageDirectionRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionRight2Icon],svg[mage-direction-right-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.392 10.884L3.19 6.28a2.164 2.164 0 0 1 2.785-3.03L20 9.945a2.165 2.165 0 0 1 0 3.924L5.772 20.767a2.164 2.164 0 0 1-2.8-2.943l3.42-4.762a2.09 2.09 0 0 0 0-2.178m7.013 1.168H6.68"></svg:path>`,
})
export class MageDirectionRight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionRight2FillIcon],svg[mage-direction-right-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.002 11.884a2.91 2.91 0 0 1-1.69 2.64l-14.21 6.9a3.2 3.2 0 0 1-1.19.25q-.294 0-.58-.06a2.85 2.85 0 0 1-1.53-.85a2.9 2.9 0 0 1-.77-1.57a2.84 2.84 0 0 1 .27-1.72l.06-.11l2.23-3.1a1.66 1.66 0 0 1 1.25-.7l1.16-.08l6.4-.45a1 1 0 0 0 0-2l-6.3-.44l-1.09-.07a1.7 1.7 0 0 1-1.27-.72l-2.17-3.12a2.91 2.91 0 0 1 1.92-4.34a2.82 2.82 0 0 1 1.79.2l14 6.7a2.92 2.92 0 0 1 1.72 2.64"></svg:path>`,
})
export class MageDirectionRight2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionRightFillIcon],svg[mage-direction-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.001 11.86a2.85 2.85 0 0 1-.46 1.56a2.8 2.8 0 0 1-1.22 1.07l-14.15 6.86a2.8 2.8 0 0 1-1.27.3q-.278 0-.55-.06a2.86 2.86 0 0 1-1.6-.9a2.91 2.91 0 0 1-.32-3.48l3.44-4.78c.08-.19.12-.394.12-.6a1.4 1.4 0 0 0-.15-.64l-3.18-4.5a2.87 2.87 0 0 1-.39-1.82a2.89 2.89 0 0 1 2.3-2.51a3 3 0 0 1 1.79.2l14 6.67a2.93 2.93 0 0 1 1.64 2.63"></svg:path>`,
})
export class MageDirectionRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUpIcon],svg[mage-direction-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.832 17.493L6.32 20.678a2.142 2.142 0 0 1-3-2.756L9.947 4.039a2.142 2.142 0 0 1 3.885 0l6.827 14.083a2.142 2.142 0 0 1-3.057 2.756l-4.713-3.385a2.14 2.14 0 0 0-2.057 0"></svg:path>`,
})
export class MageDirectionUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUp2Icon],svg[mage-direction-up-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.884 17.608L6.28 20.81a2.166 2.166 0 0 1-3.03-2.785L9.946 4.001a2.164 2.164 0 0 1 3.924 0l6.897 14.227a2.164 2.164 0 0 1-2.943 2.8l-4.762-3.42a2.09 2.09 0 0 0-2.178 0m1.168-7.013v6.724"></svg:path>`,
})
export class MageDirectionUp2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUp2FillIcon],svg[mage-direction-up-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.907 1.975a2.91 2.91 0 0 1 2.64 1.69l6.9 14.21c.16.377.244.78.25 1.19q0 .294-.06.58a2.85 2.85 0 0 1-.85 1.53a2.9 2.9 0 0 1-1.57.77a2.84 2.84 0 0 1-1.72-.27l-.11-.06l-3.1-2.23a1.66 1.66 0 0 1-.7-1.25l-.08-1.16l-.45-6.4a1 1 0 0 0-2 0l-.44 6.3l-.07 1.09a1.7 1.7 0 0 1-.72 1.27l-3.12 2.17a2.91 2.91 0 0 1-4.34-1.92a2.82 2.82 0 0 1 .2-1.79l6.7-14a2.92 2.92 0 0 1 2.64-1.72"></svg:path>`,
})
export class MageDirectionUp2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUpFillIcon],svg[mage-direction-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.883 1.976a2.85 2.85 0 0 1 1.56.46a2.8 2.8 0 0 1 1.07 1.22l6.86 14.15c.198.394.3.829.3 1.27q0 .279-.06.55a2.86 2.86 0 0 1-.9 1.6a2.91 2.91 0 0 1-3.48.32l-4.78-3.44c-.19-.08-.394-.12-.6-.12a1.4 1.4 0 0 0-.64.15l-4.5 3.18a2.87 2.87 0 0 1-1.82.39a2.89 2.89 0 0 1-2.51-2.3a3 3 0 0 1 .2-1.79l6.67-14a2.93 2.93 0 0 1 2.63-1.64"></svg:path>`,
})
export class MageDirectionUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUpRightIcon],svg[mage-direction-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.697 12.695l-5.271-.91a2.074 2.074 0 0 1-.167-3.941l14.045-4.968a2.075 2.075 0 0 1 2.66 2.66l-4.968 14.318a2.075 2.075 0 0 1-3.981-.205l-.91-5.546a2.08 2.08 0 0 0-1.408-1.408"></svg:path>`,
})
export class MageDirectionUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUpRight2Icon],svg[mage-direction-up-right-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9.706 12.781l-5.316-.953a2.085 2.085 0 0 1-.167-3.96l14.11-4.992a2.084 2.084 0 0 1 2.673 2.673l-4.992 14.386a2.084 2.084 0 0 1-3.91-.098l-.914-5.572a2.02 2.02 0 0 0-1.484-1.484m5.571-3.979l-4.579 4.579"></svg:path>`,
})
export class MageDirectionUpRight2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUpRight2FillIcon],svg[mage-direction-up-right-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.38 2.5a3 3 0 0 1 .78 1.44a2.84 2.84 0 0 1-.12 1.63l-5.17 14.92a3 3 0 0 1-.67 1q-.208.205-.45.37a2.86 2.86 0 0 1-1.68.48a2.9 2.9 0 0 1-2.68-2v-.12l-.62-3.77a1.71 1.71 0 0 1 .4-1.39l.76-.87l4.21-4.84a1.005 1.005 0 0 0-.71-1.715a1 1 0 0 0-.71.294l-4.76 4.15l-.83.72a1.69 1.69 0 0 1-1.4.39l-3.74-.67a3 3 0 0 1-1.56-1a2.92 2.92 0 0 1-.15-3.42a2.83 2.83 0 0 1 1.41-1.12l14.66-5.19a2.93 2.93 0 0 1 3.06.67z"></svg:path>`,
})
export class MageDirectionUpRight2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDirectionUpRightFillIcon],svg[mage-direction-up-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.334 2.46c.397.388.67.886.78 1.43a2.73 2.73 0 0 1-.11 1.62l-5.15 14.86a2.7 2.7 0 0 1-.69 1.11a2 2 0 0 1-.43.35a2.91 2.91 0 0 1-4.45-1.74l-.95-5.81a1.5 1.5 0 0 0-.34-.51a1.36 1.36 0 0 0-.56-.35l-5.43-.93a2.9 2.9 0 0 1-1.56-1a2.94 2.94 0 0 1-.63-1.68a2.9 2.9 0 0 1 .48-1.72a3 3 0 0 1 1.41-1.13l14.59-5.16a2.94 2.94 0 0 1 1.61-.1a2.9 2.9 0 0 1 1.43.76"></svg:path>`,
})
export class MageDirectionUpRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDiscordIcon],svg[mage-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.888 7.335a5.13 5.13 0 0 0-2.893-2.418a9 9 0 0 0-2.275-.508q-.284.504-.508 1.038a15 15 0 0 0-4.56 0a11 11 0 0 0-.519-1.038c-.752.082-1.493.249-2.208.497a5.12 5.12 0 0 0-2.904 2.44a16.18 16.18 0 0 0-1.91 9.717a16.6 16.6 0 0 0 4.98 2.528a4.34 4.34 0 0 0 1.104-1.777q-.81-.304-1.557-.74c-.089-.122.254-.32.364-.354a11.83 11.83 0 0 0 10.037 0c.1 0 .453.232.364.354c-.441.342-1.424.585-1.59.828a7.4 7.4 0 0 0 1.105 1.69a16.6 16.6 0 0 0 4.99-2.53a16.23 16.23 0 0 0-2.02-9.727M8.669 14.7a1.943 1.943 0 0 1-1.92-1.955a1.943 1.943 0 0 1 1.92-1.91a1.94 1.94 0 0 1 1.933 1.965a1.943 1.943 0 0 1-1.933 1.9m6.625 0a1.943 1.943 0 0 1-1.932-1.944a1.932 1.932 0 1 1 3.865.034a1.93 1.93 0 0 1-1.933 1.899z"></svg:path>`,
})
export class MageDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDivideIcon],svg[mage-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M19.5 12.001h-15"></svg:path><svg:path stroke-width="2.5" d="M11.994 17.314h.012m-.012-10.628h.012"></svg:path></svg:g>`,
})
export class MageDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDivideCircleIcon],svg[mage-divide-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M17.014 12H6.986"></svg:path><svg:path stroke-width="2.5" d="M11.995 15.894h.01m-.01-7.788h.01"></svg:path><svg:path stroke-width="1.5" d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageDivideCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDivideCircleFillIcon],svg[mage-divide-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m0 5.11a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m0 10.29a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageDivideCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDivideSquareIcon],svg[mage-divide-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.882 12H7.118"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11.995 15.792h.01m-.01-7.583h.01"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageDivideSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDivideSquareFillIcon],svg[mage-divide-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2M12 7.21a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 9.58a1 1 0 1 1 0-2a1 1 0 0 1 0 2M16.88 13H7.12a1 1 0 0 1 0-2h9.76a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageDivideSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDollarIcon],svg[mage-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M9 14.433a2.82 2.82 0 0 0 3 2.57c2.42 0 3-1.39 3-2.57s-1-2.43-3-2.43s-3-.79-3-2.4a2.75 2.75 0 0 1 3-2.6a2.89 2.89 0 0 1 3 2.6M12 18.5v-1.3m0-11.7v1.499"></svg:path></svg:g>`,
})
export class MageDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDollarFillIcon],svg[mage-dollar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m.75 16v.79a.75.75 0 0 1-1.5 0v-.79a3.47 3.47 0 0 1-1.76-.81a3.5 3.5 0 0 1-1.24-2.4a.75.75 0 0 1 1.23-.638a.76.76 0 0 1 .27.508a2 2 0 0 0 .71 1.39a2.1 2.1 0 0 0 1.49.5c1.56 0 2.3-.6 2.3-1.82c0-.81-.71-1.68-2.25-1.68c-3.26 0-3.75-2-3.75-3.15a3.5 3.5 0 0 1 2.42-3.2q.285-.088.58-.13v-.78a.75.75 0 0 1 1.5 0v.81a3.61 3.61 0 0 1 3 3.22a.75.75 0 0 1-1.49.15a2.14 2.14 0 0 0-2.22-1.92h-.18a2.5 2.5 0 0 0-.72.1a2 2 0 0 0-1.18 1.03a1.9 1.9 0 0 0-.2.77c0 .82.27 1.62 2.25 1.62c2.46 0 3.75 1.6 3.75 3.18a3.11 3.11 0 0 1-3.05 3.21z"></svg:path>`,
})
export class MageDollarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsIcon],svg[mage-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5.92A.96.96 0 1 0 12 4a.96.96 0 0 0 0 1.92m0 7.04a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92M12 20a.96.96 0 1 0 0-1.92a.96.96 0 0 0 0 1.92"></svg:path>`,
})
export class MageDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsCircleIcon],svg[mage-dots-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M12 7.736a.673.673 0 1 0 0-1.346a.673.673 0 0 0 0 1.346m0 4.937a.673.673 0 1 0 0-1.346a.673.673 0 0 0 0 1.346m0 4.937a.673.673 0 1 0 0-1.346a.673.673 0 0 0 0 1.346"></svg:path></svg:g>`,
})
export class MageDotsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsCircleFillIcon],svg[mage-dots-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m0 16.86a1.67 1.67 0 1 1 0-3.34a1.67 1.67 0 0 1 0 3.34m0-4.93a1.68 1.68 0 1 1-.02-3.36a1.68 1.68 0 0 1 .02 3.36m0-4.94a1.68 1.68 0 1 1 1.67-1.67A1.67 1.67 0 0 1 12 8.74"></svg:path>`,
})
export class MageDotsCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalIcon],svg[mage-dots-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.08 12A.96.96 0 1 0 20 12a.96.96 0 0 0-1.92 0m-7.04 0a.96.96 0 1 0 1.92 0a.96.96 0 0 0-1.92 0M4 12a.96.96 0 1 0 1.92 0A.96.96 0 0 0 4 12"></svg:path>`,
})
export class MageDotsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalCircleIcon],svg[mage-dots-horizontal-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 0 0-19 0"></svg:path><svg:path d="M16.264 12a.673.673 0 1 0 1.346 0a.673.673 0 0 0-1.346 0m-4.937 0a.673.673 0 1 0 1.346 0a.673.673 0 0 0-1.346 0M6.39 12a.673.673 0 1 0 1.346 0a.673.673 0 0 0-1.346 0"></svg:path></svg:g>`,
})
export class MageDotsHorizontalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalCircleFillIcon],svg[mage-dots-horizontal-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75M7.06 13.68a1.68 1.68 0 1 1 0-3.36a1.68 1.68 0 0 1 0 3.36m4.94 0a1.68 1.68 0 1 1-.02-3.36a1.68 1.68 0 0 1 .02 3.36m4.94 0a1.68 1.68 0 1 1-.02-3.36a1.68 1.68 0 0 1 .02 3.36"></svg:path>`,
})
export class MageDotsHorizontalCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalSquareIcon],svg[mage-dots-horizontal-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.151 12a.656.656 0 1 0 1.311 0a.656.656 0 0 0-1.31 0m-4.808 0a.656.656 0 1 0 1.311 0a.656.656 0 0 0-1.31 0m-4.807 0a.656.656 0 1 0 1.31 0a.656.656 0 0 0-1.31 0"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageDotsHorizontalSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalSquareFillIcon],svg[mage-dots-horizontal-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2M7.19 13.66a1.66 1.66 0 1 1 0-3.319a1.66 1.66 0 0 1 0 3.319m4.81 0A1.659 1.659 0 1 1 13.66 12A1.67 1.67 0 0 1 12 13.66m4.81 0a1.66 1.66 0 1 1 .06-3.32a1.66 1.66 0 0 1-.06 3.32"></svg:path>`,
})
export class MageDotsHorizontalSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsMenuIcon],svg[mage-dots-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.826A.913.913 0 1 0 12 5a.913.913 0 0 0 0 1.826m6.088 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826m-12.176 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826M12 12.913a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826m6.088 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826m-12.176 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826M12 19a.913.913 0 1 0 0-1.826A.913.913 0 0 0 12 19m6.088 0a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826M5.912 19a.913.913 0 1 0 0-1.826a.913.913 0 0 0 0 1.826"></svg:path>`,
})
export class MageDotsMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsSquareIcon],svg[mage-dots-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7.849a.656.656 0 1 0 0-1.311a.656.656 0 0 0 0 1.31m0 4.808a.656.656 0 1 0 0-1.312a.656.656 0 0 0 0 1.312m0 4.806a.656.656 0 1 0 0-1.31a.656.656 0 0 0 0 1.31"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageDotsSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDotsSquareFillIcon],svg[mage-dots-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2M12 18.5a1.66 1.66 0 1 1-.02-3.318A1.66 1.66 0 0 1 12 18.5m0-4.8a1.66 1.66 0 1 1 1.65-1.66A1.67 1.67 0 0 1 12 13.66zm0-4.81a1.66 1.66 0 1 1 1.65-1.66A1.66 1.66 0 0 1 12 8.85z"></svg:path>`,
})
export class MageDotsSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowCircleIcon],svg[mage-double-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M12 2.5a9.5 9.5 0 1 1 0 19a9.5 9.5 0 0 1 0-19Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 12h12M9 9l-3 3l3 3m6 0l3-3l-3-3"></svg:path></svg:g>`,
})
export class MageDoubleArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowCircleFillIcon],svg[mage-double-arrow-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 4.754a10.25 10.25 0 1 0 3 7.25a10.2 10.2 0 0 0-3-7.25m-.33 7.62q-.04.1-.1.19l-.12.14l-3 3a1 1 0 0 1-.7.3a1 1 0 0 1-.71-1.71l1.29-1.29H8.41l1.29 1.29a1 1 0 0 1 0 1.41a1 1 0 0 1-.7.3a1 1 0 0 1-.71-.3l-3-3a1 1 0 0 1-.25-1a.3.3 0 0 1 0-.14a1 1 0 0 1 .21-.32l3-3a1 1 0 1 1 1.41 1.41l-1.29 1.3h7.17l-1.29-1.3a1 1 0 1 1 1.41-1.41l3 3l.13.15q.051.087.09.18a1 1 0 0 1 .04.8"></svg:path>`,
})
export class MageDoubleArrowCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowDownIcon],svg[mage-double-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 5.36l-5.763 5.763a1.74 1.74 0 0 1-2.474 0L5 5.36m14 7l-5.763 5.763a1.74 1.74 0 0 1-2.474 0L5 12.36"></svg:path>`,
})
export class MageDoubleArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowLeftIcon],svg[mage-double-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m18.64 19l-5.763-5.763a1.737 1.737 0 0 1 0-2.474L18.64 5m-7 14l-5.763-5.763a1.74 1.74 0 0 1 0-2.474L11.64 5"></svg:path>`,
})
export class MageDoubleArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowRightIcon],svg[mage-double-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.36 19l5.763-5.763a1.74 1.74 0 0 0 0-2.474L5.36 5m7 14l5.763-5.763a1.74 1.74 0 0 0 0-2.474L12.36 5"></svg:path>`,
})
export class MageDoubleArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleArrowUpIcon],svg[mage-double-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5 18.64l5.763-5.763a1.74 1.74 0 0 1 2.474 0L19 18.64m-14-7l5.763-5.763a1.74 1.74 0 0 1 2.474 0L19 11.64"></svg:path>`,
})
export class MageDoubleArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleCircleIcon],svg[mage-double-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="19" height="19" x="2.5" y="2.5" rx="9.5"></svg:rect><svg:rect width="8.216" height="8.216" x="7.892" y="7.892" rx="4.108"></svg:rect></svg:g>`,
})
export class MageDoubleCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleCircleFillIcon],svg[mage-double-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75a10.25 10.25 0 1 0 0 20.5a10.25 10.25 0 0 0 0-20.5m0 15.119a4.869 4.869 0 1 1 0-9.738a4.869 4.869 0 0 1 0 9.738"></svg:path>`,
})
export class MageDoubleCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleDiamondIcon],svg[mage-double-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="currentColor" stroke-width="1.5" clip-path="url(#mageDoubleDiamond0)"><svg:path d="M8.754 3.225L3.225 8.754a4.59 4.59 0 0 0 0 6.492l5.529 5.529a4.59 4.59 0 0 0 6.492 0l5.529-5.529a4.59 4.59 0 0 0 0-6.492l-5.529-5.529a4.59 4.59 0 0 0-6.492 0Z"></svg:path><svg:path d="M10.576 8.15L8.15 10.577a2.014 2.014 0 0 0 0 2.848l2.425 2.425a2.014 2.014 0 0 0 2.848 0l2.425-2.425a2.014 2.014 0 0 0 0-2.848L13.424 8.15a2.014 2.014 0 0 0-2.848 0Z"></svg:path></svg:g><svg:defs><svg:clippath id="mageDoubleDiamond0"><svg:path fill="#fff" d="M0 0h24v24H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageDoubleDiamondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleDiamondFillIcon],svg[mage-double-diamond-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.993 8.351L15.65 3.007a5.17 5.17 0 0 0-7.297 0L3.007 8.35a5.17 5.17 0 0 0 0 7.297l5.345 5.345a5.17 5.17 0 0 0 7.297 0l5.344-5.344a5.17 5.17 0 0 0 0-7.298m-5.045 5.413l-2.184 2.175a2.47 2.47 0 0 1-1.76.734a2.5 2.5 0 0 1-1.768-.734l-2.174-2.175a2.513 2.513 0 0 1 0-3.528l2.174-2.174a2.56 2.56 0 0 1 3.528 0l2.184 2.184a2.513 2.513 0 0 1 0 3.528z"></svg:path>`,
})
export class MageDoubleDiamondFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleSquareIcon],svg[mage-double-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:rect width="9" height="9" x="7.5" y="7.5" rx="3"></svg:rect></svg:g>`,
})
export class MageDoubleSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDoubleSquareFillIcon],svg[mage-double-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.75 6.75 0 0 0 8.75 22h6.5A6.75 6.75 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.54 11.37a3.42 3.42 0 0 1-3.42 3.42h-2.74a3.42 3.42 0 0 1-3.42-3.42v-2.74a3.42 3.42 0 0 1 3.42-3.42h2.74a3.42 3.42 0 0 1 3.42 3.42z"></svg:path>`,
})
export class MageDoubleSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDownloadIcon],svg[mage-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M12 15.238V3.213"></svg:path><svg:path stroke-linejoin="round" d="m7.375 10.994l3.966 3.966a.937.937 0 0 0 1.318 0l3.966-3.966"></svg:path><svg:path stroke-linejoin="round" d="M2.75 13.85v4.625a2.313 2.313 0 0 0 2.313 2.313h13.874a2.313 2.313 0 0 0 2.313-2.313V13.85"></svg:path></svg:g>`,
})
export class MageDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageDribbbleIcon],svg[mage-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12a10 10 0 1 1 10 10A10.01 10.01 0 0 1 2 12m11.395 1.125a11.02 11.02 0 0 0-6.48 5.41l.113.09a8.26 8.26 0 0 0 4.106 1.598a8.4 8.4 0 0 0 3.633-.349c.135 0 .18-.101.158-.247a30 30 0 0 0-1.058-4.984c-.146-.506-.315-.99-.472-1.518M12.27 10.48a25.1 25.1 0 0 1-8.616 1.125a8.3 8.3 0 0 0 2.07 5.883a12.75 12.75 0 0 1 7.086-5.759zm-8.358-.56c2.57.153 5.146-.14 7.616-.866a20 20 0 0 0-3.206-4.387a.146.146 0 0 0-.214 0a8.2 8.2 0 0 0-3.16 2.925a8 8 0 0 0-1.013 2.362zm16.356 2.97a35 35 0 0 0-5.107 0c.259 1.012.562 2.002.787 3.003s.383 2.036.574 3.06a8.4 8.4 0 0 0 3.768-6.03zm-2.947-7.3a8.31 8.31 0 0 0-7.368-1.654a20.8 20.8 0 0 1 3.273 4.5a10.5 10.5 0 0 0 4.095-2.847m-3.375 4.308c.214.528.416 1.034.641 1.54c0 0 .113.068.169.068c.45 0 .9-.079 1.35-.09h4.173a8.06 8.06 0 0 0-1.946-4.78a10.27 10.27 0 0 1-4.376 3.262z"></svg:path>`,
})
export class MageDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEarthIcon],svg[mage-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M5.37 5.19c4.24 1 2.25 4.72 2.19 8.5c0 4.1 3.36 1.62 3.21 3.56a13 13 0 0 0 .83 4.24m3.14-18.58c0 1.38 0 2.57-.74 2.78c-1.11.31-.28 4.23-1 6.09s2.53 2.5 4 1S17.39 10 19 10c.57 0 1.44.1 2.32.13"></svg:path></svg:g>`,
})
export class MageEarthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEarthFillIcon],svg[mage-earth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.95 10.105v-.15a10.27 10.27 0 0 0-10-8.19a10.14 10.14 0 0 0-7 2.78l-.21.19a.1.1 0 0 0 0 .05a10.23 10.23 0 0 0 6.86 17.45h.4a10.26 10.26 0 0 0 10.25-10.25a10 10 0 0 0-.3-1.88m-9.94 10.66a12.2 12.2 0 0 1-.61-3.44c.11-1.52-1.21-1.66-1.78-1.72c-.86-.09-1.43-.15-1.43-1.88c.029-.898.119-1.794.27-2.68c.33-2.3.7-4.86-1.72-6.11a8.72 8.72 0 0 1 5.14-1.67a8.6 8.6 0 0 1 2 .23a3.6 3.6 0 0 1-.18 1.49c-1.16.33-1.18 1.85-1.2 3.62c.043.983-.058 1.967-.3 2.92a1.9 1.9 0 0 0 .76 2.38c.545.32 1.168.482 1.8.47a3.72 3.72 0 0 0 2.67-1.05a4 4 0 0 0 1.12-2.19q.045-.162.06-.33a.7.7 0 0 1 .29 0c.28 0 .65 0 1 .06h.62a8.72 8.72 0 0 1-8.54 9.9z"></svg:path>`,
})
export class MageEarthFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEditIcon],svg[mage-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56"></svg:path><svg:path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.36 1.36 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.36 1.36 0 0 1-.953.395H8.197a1.36 1.36 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086"></svg:path></svg:g>`,
})
export class MageEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEditFillIcon],svg[mage-edit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.698 21.996h-11.6a3.06 3.06 0 0 1-2.2-.92a3.1 3.1 0 0 1-.9-2.21V7.276a3 3 0 0 1 .91-2.19a3 3 0 0 1 1-.67a3.1 3.1 0 0 1 1.2-.24h4.44a.75.75 0 0 1 0 1.5h-4.44a2 2 0 0 0-.63.12a1.62 1.62 0 0 0-.99 1.5v11.59a1.62 1.62 0 0 0 .47 1.16a1.62 1.62 0 0 0 1.15.47h11.6c.213 0 .423-.04.62-.12a1.5 1.5 0 0 0 .52-.35a1.5 1.5 0 0 0 .35-.52a1.5 1.5 0 0 0 .13-.63v-4.44a.75.75 0 1 1 1.5 0v4.47a3.06 3.06 0 0 1-.92 2.2a3.2 3.2 0 0 1-1 .68c-.387.14-.798.205-1.21.19"></svg:path><svg:path fill="currentColor" d="M21.808 5.456a1.9 1.9 0 0 0-.46-.68l-2.15-2.15a1.9 1.9 0 0 0-.68-.46a2.1 2.1 0 0 0-2.31.46l-1.71 1.71v.05l-7.74 7.73a2.1 2.1 0 0 0-.61 1.48v2.17a2.12 2.12 0 0 0 2.11 2.11h2.17a2.07 2.07 0 0 0 1.48-.62l7.74-7.74l1.72-1.72c.202-.19.36-.422.46-.68a2 2 0 0 0 0-1.63zm-1.38 1.05a.6.6 0 0 1-.14.2l-1.22 1.22l-3-3l1.23-1.23a.64.64 0 0 1 .44-.18a.6.6 0 0 1 .23.05q.116.049.2.14l2.16 2.15a.7.7 0 0 1 .13.2a.6.6 0 0 1 0 .23a.6.6 0 0 1-.03.22"></svg:path>`,
})
export class MageEditFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEditPenIcon],svg[mage-edit-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.144 16.735l.493-3.425a.97.97 0 0 1 .293-.587l9.665-9.664a1.03 1.03 0 0 1 .973-.281a5.1 5.1 0 0 1 2.346 1.372a5.1 5.1 0 0 1 1.384 2.346a1.07 1.07 0 0 1-.282.973l-9.664 9.664a1.17 1.17 0 0 1-.598.294l-3.437.492a1.044 1.044 0 0 1-1.173-1.184m8.633-11.846l4.41 4.398M3.79 21.25h16.42"></svg:path>`,
})
export class MageEditPenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEditPenFillIcon],svg[mage-edit-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.03 6.313a6.15 6.15 0 0 0-4.28-4.26a1.9 1.9 0 0 0-.91 0a1.9 1.9 0 0 0-.77.46l-1.82 1.83l-7.83 7.83a1.65 1.65 0 0 0-.52 1l-.49 3.42a1.74 1.74 0 0 0 .07.82c.09.262.237.502.43.7c.192.2.428.35.69.44q.283.09.58.09q.125.015.25 0l3.45-.49a2 2 0 0 0 1-.5l9.67-9.67a1.9 1.9 0 0 0 .45-.77a1.9 1.9 0 0 0 .03-.9m-1.47.5a.27.27 0 0 1-.07.13l-1.3 1.3l-3.35-3.31l1.29-1.3a.35.35 0 0 1 .13-.08a.24.24 0 0 1 .12 0a4.62 4.62 0 0 1 3.19 3.15a.3.3 0 0 1-.01.11m1.66 15.19H3.79a.75.75 0 1 1 0-1.5h16.42a.75.75 0 1 1 0 1.5z"></svg:path>`,
})
export class MageEditPenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageElectricityIcon],svg[mage-electricity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.217 2.75h7.246a.525.525 0 0 1 .483.735l-2.835 6.617h4.779a.21.21 0 0 1 .157.347L9.301 21.16a.2.2 0 0 1-.358-.168l.967-7.74H5.436a.526.526 0 0 1-.494-.725l3.78-9.452a.525.525 0 0 1 .495-.326"></svg:path>`,
})
export class MageElectricityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageElectricityDangerIcon],svg[mage-electricity-danger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m13.242 9.8l-3.725 3.725h4.966l-3.725 3.725"></svg:path><svg:path d="M10.367 4.462L2.752 17.655a1.885 1.885 0 0 0 1.634 2.827h15.228a1.885 1.885 0 0 0 1.633-2.827L13.633 4.462a1.885 1.885 0 0 0-3.266 0"></svg:path></svg:g>`,
})
export class MageElectricityDangerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageElectricityDangerFillIcon],svg[mage-electricity-danger-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.855 17.249l-7.61-13.18a2.64 2.64 0 0 0-4.57 0l-7.61 13.19a2.66 2.66 0 0 0 0 2.64a2.6 2.6 0 0 0 1 1c.402.23.857.35 1.32.35h15.22c.463 0 .918-.12 1.32-.35a2.6 2.6 0 0 0 1-1a2.6 2.6 0 0 0 0-2.64zm-6.88-3.18l-3.73 3.72a.7.7 0 0 1-.53.22a.74.74 0 0 1-.53-.22a.75.75 0 0 1 0-1.06l2.45-2.44h-3.16a.75.75 0 0 1-.69-.47a.74.74 0 0 1 .16-.81l3.73-3.73a.75.75 0 0 1 1.06 1.06l-2.45 2.45h3.16a.74.74 0 0 1 .69.46a.76.76 0 0 1-.16.82"></svg:path>`,
})
export class MageElectricityDangerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageElectricityFillIcon],svg[mage-electricity-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.836 10.486a.9.9 0 0 1-.21.47l-9.75 10.71a.94.94 0 0 1-.49.33q-.125.015-.25 0a1 1 0 0 1-.41-.09a.92.92 0 0 1-.45-.46a.9.9 0 0 1-.07-.58l.86-6.86h-3.63a1.7 1.7 0 0 1-.6-.15a1.29 1.29 0 0 1-.68-.99a1.3 1.3 0 0 1 .09-.62l3.78-9.45c.1-.239.266-.444.48-.59a1.3 1.3 0 0 1 .72-.21h7.24c.209.004.414.055.6.15c.188.105.349.253.47.43c.112.179.18.38.2.59a1.2 1.2 0 0 1-.1.61l-2.39 5.57h3.65a1 1 0 0 1 .51.16a1 1 0 0 1 .43 1z"></svg:path>`,
})
export class MageElectricityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEmailIcon],svg[mage-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="17" x="2.682" y="3.5" rx="4"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m2.729 7.59l7.205 4.13a3.96 3.96 0 0 0 3.975 0l7.225-4.13"></svg:path></svg:g>`,
})
export class MageEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEmailFillIcon],svg[mage-email-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.25 2.75H6.75A4.75 4.75 0 0 0 2 7.5v9a4.75 4.75 0 0 0 4.75 4.75h10.5A4.76 4.76 0 0 0 22 16.5v-9a4.76 4.76 0 0 0-4.75-4.75m-3.65 8.32a3.26 3.26 0 0 1-3.23 0L3.52 7.14a3.25 3.25 0 0 1 3.23-2.89h10.5a3.26 3.26 0 0 1 3.23 2.89z"></svg:path>`,
})
export class MageEmailFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEmailNotificationIcon],svg[mage-email-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.25 10.745V16.5a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4v-9a4 4 0 0 1 4-4h7.151"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 7.59L10 11.72a3.94 3.94 0 0 0 4 0l2.219-1.257"></svg:path><svg:circle cx="19" cy="5" r="2.5"></svg:circle></svg:g>`,
})
export class MageEmailNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEmailOpenedIcon],svg[mage-email-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="m4.85 6.095l5.25-2.84a4 4 0 0 1 3.8 0l5.25 2.84a4 4 0 0 1 2.1 3.51v7.62a4 4 0 0 1-4 4H6.75a4 4 0 0 1-4-4v-7.62a4 4 0 0 1 2.1-3.51Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m2.91 8.495l7.09 4.1a4 4 0 0 0 4 0l7.14-4"></svg:path></svg:g>`,
})
export class MageEmailOpenedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEmailOpenedFillIcon],svg[mage-email-opened-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.84 8.561l-.09-.36a5 5 0 0 0-.47-1a4.75 4.75 0 0 0-1.82-1.74l-5.25-2.84a4.8 4.8 0 0 0-4.51 0l-5.25 2.84a4.75 4.75 0 0 0-1.82 1.74a4.3 4.3 0 0 0-.46 1v.14A4.6 4.6 0 0 0 2 9.571v7.62a4.76 4.76 0 0 0 4.75 4.75h10.5a4.75 4.75 0 0 0 4.75-4.75v-7.63a4.8 4.8 0 0 0-.16-1m-8.26 3.35a3.3 3.3 0 0 1-3.25 0L3.8 8.131q.045-.115.11-.22a3.25 3.25 0 0 1 1.25-1.19l5.25-2.84a3.2 3.2 0 0 1 1.54-.39a3.24 3.24 0 0 1 1.55.39l5.25 2.84a3.22 3.22 0 0 1 1.4 1.5z"></svg:path>`,
})
export class MageEmailOpenedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExchangeAIcon],svg[mage-exchange-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.53 11.47v2.118a4.235 4.235 0 0 0 4.235 4.236H20.47M3.53 6.176h12.705a4.235 4.235 0 0 1 4.236 4.236v2.117"></svg:path><svg:path d="m17.294 14.647l3.177 3.176L17.294 21M6.706 9.353L3.529 6.176L6.706 3"></svg:path></svg:g>`,
})
export class MageExchangeAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExchangeBIcon],svg[mage-exchange-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.75 6.75h-12a4 4 0 0 0-4 4v2m16-1v2a4 4 0 0 1-4 4h-12"></svg:path><svg:path d="m16.75 9.75l3-3l-3-3m-10 11l-3 3l3 3"></svg:path></svg:g>`,
})
export class MageExchangeBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExclamationCircleIcon],svg[mage-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M12 2.5A9.5 9.5 0 0 0 2.5 12a9.5 9.5 0 1 0 19 0A9.5 9.5 0 0 0 12 2.5m-.005 4.222v6.334"></svg:path><svg:path stroke-width="2" d="M12.044 16.557h-.01"></svg:path></svg:g>`,
})
export class MageExclamationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExclamationCircleFillIcon],svg[mage-exclamation-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m-1 5a1 1 0 0 1 2 0v6.33a1 1 0 0 1-2 0zm1 11.08a1.25 1.25 0 1 1 1.25-1.25a1.24 1.24 0 0 1-1.21 1.23z"></svg:path>`,
})
export class MageExclamationCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExclamationHexagonIcon],svg[mage-exclamation-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M3.701 15.734V8.266a1.79 1.79 0 0 1 .89-1.542l6.52-3.734a1.77 1.77 0 0 1 1.778 0l6.473 3.734a1.79 1.79 0 0 1 .937 1.542v7.468a1.79 1.79 0 0 1-.89 1.542l-6.52 3.734a1.77 1.77 0 0 1-1.778 0l-6.473-3.735a1.79 1.79 0 0 1-.937-1.54m8.294-8.995v6.319"></svg:path><svg:path stroke-width="2" d="M12.044 16.553h-.01"></svg:path></svg:g>`,
})
export class MageExclamationHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExclamationHexagonFillIcon],svg[mage-exclamation-hexagon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.68 6.967a2.46 2.46 0 0 0-.94-.9l-6.47-3.73a2.56 2.56 0 0 0-2.53 0l-6.53 3.74a2.5 2.5 0 0 0-.92.93a2.53 2.53 0 0 0-.34 1.26v7.48c.012.451.14.892.37 1.28c.235.372.558.682.94.9l6.48 3.73a2.43 2.43 0 0 0 1.26.34a2.4 2.4 0 0 0 1.26-.34l6.53-3.73a2.64 2.64 0 0 0 .92-.93a2.5 2.5 0 0 0 .34-1.26v-7.48a2.64 2.64 0 0 0-.37-1.29M11 6.727a1 1 0 0 1 2 0v6.32a1 1 0 1 1-2 0zm1 11.07a1.25 1.25 0 1 1 .04 0z"></svg:path>`,
})
export class MageExclamationHexagonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExclamationSquareIcon],svg[mage-exclamation-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.958 7.563v6.166"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17.139h-.009"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageExclamationSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExclamationSquareFillIcon],svg[mage-exclamation-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m-4.29 5.56a1 1 0 0 1 2 0v6.17a1 1 0 1 1-2 0zm1 10.58a1 1 0 1 1 .03 0z"></svg:path>`,
})
export class MageExclamationSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExclamationTriangleIcon],svg[mage-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke-width="1.5" d="M10.367 4.462L2.752 17.655a1.885 1.885 0 0 0 1.634 2.827h15.228a1.885 1.885 0 0 0 1.633-2.827L13.633 4.462a1.885 1.885 0 0 0-3.266 0m1.628 3.116v6.277"></svg:path><svg:path stroke-width="2" d="M12.043 17.326h-.009"></svg:path></svg:g>`,
})
export class MageExclamationTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExclamationTriangleFillIcon],svg[mage-exclamation-triangle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.86 17.249l-7.61-13.19a2.65 2.65 0 0 0-4.57 0l-7.61 13.19a2.6 2.6 0 0 0 0 2.64a2.6 2.6 0 0 0 1 1a2.67 2.67 0 0 0 1.32.36h15.23a2.67 2.67 0 0 0 1.32-.35a2.6 2.6 0 0 0 1-1c.23-.402.35-.857.35-1.32s-.12-.814-.35-1.216zm-10.9-9.7a1 1 0 1 1 2 0v6.28a1 1 0 0 1-2 0zm1.05 11a1.25 1.25 0 1 1 .471-.092a1.3 1.3 0 0 1-.481.092z"></svg:path>`,
})
export class MageExclamationTriangleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageExternalLinkIcon],svg[mage-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.607 11.035v7.929a2.27 2.27 0 0 1-2.3 2.286H5.05a2.27 2.27 0 0 1-2.299-2.3V7.693a2.273 2.273 0 0 1 2.3-2.3h7.928M21.25 2.75L10.679 13.321M15.964 2.75h5.286v5.286"></svg:path>`,
})
export class MageExternalLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEyeIcon],svg[mage-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.899 12.735a1.87 1.87 0 0 1 0-1.47c.808-1.92 2.1-3.535 3.716-4.647S10.103 4.945 12 5.004c1.897-.059 3.768.502 5.385 1.614s2.908 2.727 3.716 4.647a1.87 1.87 0 0 1 0 1.47c-.808 1.92-2.1 3.535-3.716 4.647S13.897 19.055 12 18.996c-1.897.059-3.768-.502-5.385-1.614S3.707 14.655 2.9 12.735"></svg:path><svg:path d="M12 15.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path></svg:g>`,
})
export class MageEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEyeClosedIcon],svg[mage-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.645 7c-.731 2.05-1.958 3.813-3.534 5.082c-1.493 1.212-3.286 1.835-5.111 1.774c-1.825.06-3.618-.562-5.111-1.774C5.313 10.813 4.086 9.05 3.355 7M12 13.857V17m5.7-1.095l-1.919-2.947m-7.562 0L6.3 15.905m15.2-4.381L19.315 9.64m-14.63 0L2.5 11.523"></svg:path>`,
})
export class MageEyeClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEyeFillIcon],svg[mage-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.79 10.993a11.36 11.36 0 0 0-3.992-5.002a10.53 10.53 0 0 0-11.596 0a11.3 11.3 0 0 0-3.992 5.002a2.6 2.6 0 0 0-.21 1c.004.343.072.683.2 1a11.3 11.3 0 0 0 3.992 5.003a9.57 9.57 0 0 0 5.768 1.75h.3a9.67 9.67 0 0 0 5.538-1.73a11.3 11.3 0 0 0 3.992-5.002a2.55 2.55 0 0 0 .21-1a2.7 2.7 0 0 0-.21-1.021m-9.77 4.782a3.75 3.75 0 0 1-3.474-2.315a3.77 3.77 0 0 1 .807-4.103a3.75 3.75 0 0 1 6.41 2.656a3.76 3.76 0 0 1-1.107 2.674a3.74 3.74 0 0 1-2.676 1.088z"></svg:path>`,
})
export class MageEyeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEyeOffIcon],svg[mage-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5.45 16.92a10.8 10.8 0 0 1-2.55-3.71a1.85 1.85 0 0 1 0-1.46A10.6 10.6 0 0 1 6.62 7.1A9 9 0 0 1 12 5.48a8.8 8.8 0 0 1 4 .85m2.56 1.72a10.85 10.85 0 0 1 2.54 3.7a1.85 1.85 0 0 1 0 1.46a10.6 10.6 0 0 1-3.72 4.65A9 9 0 0 1 12 19.48a8.8 8.8 0 0 1-4-.85"></svg:path><svg:path d="M8.71 13.65a3.3 3.3 0 0 1-.21-1.17a3.5 3.5 0 0 1 3.5-3.5c.4-.002.796.07 1.17.21m2.12 2.12c.14.374.212.77.21 1.17a3.5 3.5 0 0 1-3.5 3.5a3.3 3.3 0 0 1-1.17-.21M3 20L19 4"></svg:path></svg:g>`,
})
export class MageEyeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageEyeOffFillIcon],svg[mage-eye-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.01 4.256a9.64 9.64 0 0 0-5.813 1.74a11.3 11.3 0 0 0-3.988 5a2.6 2.6 0 0 0-.209 1c.004.343.072.682.2 1a11.6 11.6 0 0 0 2.641 3.84l3.59-3.69a3.76 3.76 0 0 1 1.36-4.22a3.73 3.73 0 0 1 3.365-.52l3.23-3.24a9.3 9.3 0 0 0-4.376-.91m9.78 6.72a11.3 11.3 0 0 0-3.639-4.73l-3.34 3.31a3.66 3.66 0 0 1 .918 2.44c0 .996-.394 1.95-1.095 2.656a3.74 3.74 0 0 1-2.644 1.105c-.9.005-1.77-.322-2.443-.92l-3.23 3.24a9.5 9.5 0 0 0 5.643 1.67h.3a9.67 9.67 0 0 0 5.543-1.75a11.27 11.27 0 0 0 3.988-5c.136-.316.207-.656.209-1a2.7 2.7 0 0 0-.21-1.02"></svg:path>`,
})
export class MageEyeOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFacebookIcon],svg[mage-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.602 21.026v-7.274H6.818a.545.545 0 0 1-.545-.545V10.33a.545.545 0 0 1 .545-.545h2.773V7a4.547 4.547 0 0 1 4.86-4.989h2.32a.556.556 0 0 1 .557.546v2.436a.557.557 0 0 1-.557.545h-1.45c-1.566 0-1.867.742-1.867 1.833v2.413h3.723a.533.533 0 0 1 .546.603l-.337 2.888a.545.545 0 0 1-.545.476h-3.364v7.274a.96.96 0 0 1-.975.974h-1.937a.96.96 0 0 1-.963-.974"></svg:path>`,
})
export class MageFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFacebookCircleIcon],svg[mage-facebook-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.08a10 10 0 0 1-8.91 9.893V14.8h2.35a.423.423 0 0 0 .422-.37l.254-2.202a.402.402 0 0 0-.402-.465H13.09v-1.8c0-.836.233-1.407 1.428-1.407h1.112a.423.423 0 0 0 .412-.424V6.238a.423.423 0 0 0-.423-.413H13.82a3.482 3.482 0 0 0-3.714 3.81v2.116H8.339a.413.413 0 0 0-.413.424v2.2a.413.413 0 0 0 .413.413h1.767v7.037A10 10 0 0 1 2 12.08a10 10 0 1 1 20 0"></svg:path>`,
})
export class MageFacebookCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFacebookSquareIcon],svg[mage-facebook-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.234 2.25H6.744a4.5 4.5 0 0 0-3.198 1.33A4.47 4.47 0 0 0 2.25 6.778v10.444a4.46 4.46 0 0 0 1.296 3.198a4.5 4.5 0 0 0 3.197 1.33h4.763v-6.966h-1.82a.43.43 0 0 1-.427-.425v-2.236a.435.435 0 0 1 .438-.436h1.809v-2.18a3.54 3.54 0 0 1 .996-2.826a3.57 3.57 0 0 1 2.811-1.065h1.854a.43.43 0 0 1 .427.436v1.89a.424.424 0 0 1-.427.424h-1.123c-1.236 0-1.472.582-1.472 1.431v1.879h2.696a.428.428 0 0 1 .427.48l-.27 2.237a.424.424 0 0 1-.427.38h-2.415v6.966h2.674a4.5 4.5 0 0 0 3.197-1.33a4.47 4.47 0 0 0 1.296-3.199V6.778a4.45 4.45 0 0 0-1.304-3.206a4.5 4.5 0 0 0-3.212-1.322"></svg:path>`,
})
export class MageFacebookSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFastForwardIcon],svg[mage-fast-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 6.506v10.988a1.43 1.43 0 0 0 2.346 1.073l6.41-5.48a1.43 1.43 0 0 0 0-2.174l-6.41-5.48A1.43 1.43 0 0 0 2.75 6.506"></svg:path><svg:path d="M12.007 6.506v10.988a1.43 1.43 0 0 0 2.347 1.073l6.395-5.48a1.43 1.43 0 0 0 0-2.174l-6.395-5.48a1.43 1.43 0 0 0-2.347 1.073"></svg:path></svg:g>`,
})
export class MageFastForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFastForwardBackIcon],svg[mage-fast-forward-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 17.494V6.506a1.43 1.43 0 0 0-2.346-1.073l-6.41 5.48a1.43 1.43 0 0 0 0 2.174l6.41 5.48a1.43 1.43 0 0 0 2.346-1.073"></svg:path><svg:path d="M11.993 17.494V6.506a1.43 1.43 0 0 0-2.347-1.073l-6.395 5.48a1.43 1.43 0 0 0 0 2.174l6.395 5.48a1.43 1.43 0 0 0 2.347-1.073"></svg:path></svg:g>`,
})
export class MageFastForwardBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFastForwardBackFillIcon],svg[mage-fast-forward-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6.477v11a2.2 2.2 0 0 1-.36 1.16a2.15 2.15 0 0 1-.91.78a2.1 2.1 0 0 1-.91.2a1.4 1.4 0 0 1-.29 0a2.2 2.2 0 0 1-1.11-.48l-5.68-4.86v3.22a2.3 2.3 0 0 1-.35 1.16a2.24 2.24 0 0 1-.92.78a2.1 2.1 0 0 1-.91.2q-.146.015-.29 0a2.1 2.1 0 0 1-1.1-.48l-6.41-5.49a2.19 2.19 0 0 1-.56-2.57a2 2 0 0 1 .56-.74l6.4-5.48a2.17 2.17 0 0 1 3.58 1.63v3.23l5.68-4.86c.315-.267.7-.44 1.11-.5a2.25 2.25 0 0 1 1.2.18c.371.172.686.446.91.79c.223.335.348.727.36 1.13"></svg:path>`,
})
export class MageFastForwardBackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFastForwardFillIcon],svg[mage-fast-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12.02a2.17 2.17 0 0 1-.76 1.66l-6.4 5.48a2.14 2.14 0 0 1-1.11.49q-.145.015-.29 0a2.1 2.1 0 0 1-.91-.2a2.24 2.24 0 0 1-.92-.78a2.3 2.3 0 0 1-.35-1.16v-3.22l-5.68 4.85a2.1 2.1 0 0 1-1.11.49q-.145.015-.29 0a2.1 2.1 0 0 1-.91-.2a2.15 2.15 0 0 1-.91-.78A2.2 2.2 0 0 1 2 17.49v-11a2.21 2.21 0 0 1 1.27-1.95a2.18 2.18 0 0 1 2.31.31l5.68 4.86V6.5a2.18 2.18 0 0 1 2.47-2.13a2.2 2.2 0 0 1 1.1.49l6.41 5.49c.239.204.43.456.56.74c.133.293.201.61.2.93"></svg:path>`,
})
export class MageFastForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFemaleIcon],svg[mage-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14.313A5.781 5.781 0 1 0 12 2.75a5.781 5.781 0 0 0 0 11.563m0 0v6.937m-3.469-3.469h6.938"></svg:path>`,
})
export class MageFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFigmaIcon],svg[mage-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#mageFigma0)"><svg:path fill="currentColor" d="M17.393 8.937A3.87 3.87 0 0 0 15.04 2H8.948a3.88 3.88 0 0 0-2.373 6.937a3.88 3.88 0 0 0 0 6.136a3.87 3.87 0 1 0 6.221 3.068v-2.929a3.8 3.8 0 0 0 2.224.716a3.87 3.87 0 0 0 2.351-6.937zm-6.179 9.204a2.266 2.266 0 1 1-2.266-2.266h2.266zm0-3.87H8.948a2.266 2.266 0 1 1 0-4.532h2.266zm0-6.135H8.948a2.266 2.266 0 0 1 0-4.533h2.266zm3.827 6.136a2.245 2.245 0 0 1-2.223-1.882a1.75 1.75 0 0 1 0-.77a2.267 2.267 0 1 1 2.223 2.652m0-6.136h-2.223V3.603h2.223a2.266 2.266 0 1 1 0 4.533"></svg:path></svg:g><svg:defs><svg:clippath id="mageFigma0"><svg:path fill="#fff" d="M5.079 2h13.843v20H5.079z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class MageFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileIcon],svg[mage-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"></svg:path></svg:g>`,
})
export class MageFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFile2Icon],svg[mage-file-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.186 2.753v3.596c0 .487.195.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189M7.647 7.647h3.265M7.647 12h8.706m-8.706 4.353h8.706"></svg:path></svg:g>`,
})
export class MageFile2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFile2FillIcon],svg[mage-file-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.68 7.014a3.85 3.85 0 0 0-.92-1.22l-3-2.72a4.15 4.15 0 0 0-2.39-1.07H8.21A5 5 0 0 0 3 6.864v10.3a5 5 0 0 0 3.31 4.53a4.7 4.7 0 0 0 1.92.3h7.56a5 5 0 0 0 5.21-4.86v-8.57a3.75 3.75 0 0 0-.32-1.55m-13-.4h3.26a1 1 0 0 1 0 2H7.68a1 1 0 1 1 0-2m8.7 10.71h-8.7a1 1 0 1 1 0-2h8.7a1 1 0 0 1 0 1.98zm0-4.35h-8.7a1 1 0 1 1 0-2h8.7a1 1 0 1 1 0 2m-.32-5.57a1.08 1.08 0 0 1-1.09-1.08v-2.65c.66.16 3.23 2.8 3.79 3.24a2 2 0 0 1 .42.49z"></svg:path>`,
})
export class MageFile2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFile3Icon],svg[mage-file-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189M7.647 7.647h3.265M7.647 12h8.706m-8.706 4.353h8.706"></svg:path></svg:g>`,
})
export class MageFile3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileCheckIcon],svg[mage-file-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"></svg:path><svg:path d="m8.36 13.682l1.879 1.88a.71.71 0 0 0 1.01 0l3.787-3.787"></svg:path></svg:g>`,
})
export class MageFileCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileCheckFillIcon],svg[mage-file-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.83 7.424a3 3 0 0 0-.15-.38a3.85 3.85 0 0 0-.92-1.22l-3-2.72a4.22 4.22 0 0 0-2.85-1.1h-5.7A5 5 0 0 0 3 6.864v10.3a5 5 0 0 0 3.31 4.53a4.7 4.7 0 0 0 1.92.3h7.56a5 5 0 0 0 5.21-4.86v-8.57a3.6 3.6 0 0 0-.17-1.14m-5.06 5.06l-3.78 3.79a2 2 0 0 1-.56.37a1.73 1.73 0 0 1-1.88-.38l-1.87-1.87a1.004 1.004 0 0 1 1.42-1.42l1.67 1.68l3.59-3.59a1 1 0 0 1 1.41 1.42m.29-5.3a.82.82 0 0 1-.84-.83v-2.53A46 46 0 0 1 19 7.184z"></svg:path>`,
})
export class MageFileCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileCrossIcon],svg[mage-file-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path stroke-linejoin="round" d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"></svg:path><svg:path stroke-miterlimit="10" d="m14.51 11.513l-5.03 5.032m-.001-5.021l5.032 5.032"></svg:path></svg:g>`,
})
export class MageFileCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileCrossFillIcon],svg[mage-file-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.65 7.048c-.4-.998-3.13-3.133-3.89-3.932a4.15 4.15 0 0 0-2.39-1.067c.09-.11-6 0-6.16 0a5 5 0 0 0-3.622 1.336A5 5 0 0 0 3 6.898v10.277a4.98 4.98 0 0 0 1.605 3.501a5 5 0 0 0 3.625 1.319h7.56a5 5 0 0 0 3.623-1.337A5 5 0 0 0 21 17.145v-8.55a3.8 3.8 0 0 0-.35-1.547m-5.43 8.79c.93.908-.51 2.325-1.42 1.407l-1.81-1.806c-.82.619-2.11 2.874-3.22 1.796s1.22-2.424 1.8-3.213c-.62-.818-2.89-2.115-1.8-3.213s2.4 1.178 3.22 1.796c.83-.628 2.13-2.893 3.23-1.806c1.1 1.088-1.19 2.395-1.81 3.223zm.81-8.401c-1.67 0-.94-2.624-1.09-3.702c.3.106.577.272.81.489c.31.33 3.26 2.864 3.4 3.213z"></svg:path>`,
})
export class MageFileCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileDownloadIcon],svg[mage-file-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path stroke-linejoin="round" d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"></svg:path><svg:path stroke-miterlimit="10" d="M12 17.273v-6.774"></svg:path><svg:path stroke-linejoin="round" d="m8.894 14.42l2.665 2.666a.62.62 0 0 0 .882 0l2.665-2.665"></svg:path></svg:g>`,
})
export class MageFileDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileDownloadFillIcon],svg[mage-file-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.68 7.014a3.85 3.85 0 0 0-.92-1.22l-3-2.72a4.15 4.15 0 0 0-2.39-1.07H8.21A5 5 0 0 0 3 6.864v10.3a5 5 0 0 0 3.31 4.53a4.7 4.7 0 0 0 1.92.3h7.56a5 5 0 0 0 5.21-4.86v-8.57a3.75 3.75 0 0 0-.32-1.55m-4.84 8.08l-2.66 2.67a1.7 1.7 0 0 1-.53.35q-.201.09-.42.11a.9.9 0 0 1-.4 0a1.3 1.3 0 0 1-.42-.11a1.7 1.7 0 0 1-.53-.35l-2.66-2.67a1 1 0 0 1 1.41-1.41l1.4 1.4v-4.61a1 1 0 1 1 2 0v4.61l1.4-1.4a1 1 0 0 1 1.41 1.41m.22-7.69a1.08 1.08 0 0 1-1.09-1.08v-2.65q.42.228.81.51l3 2.73q.25.211.42.49z"></svg:path>`,
})
export class MageFileDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileFillIcon],svg[mage-file-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.68 7.03a3.85 3.85 0 0 0-.92-1.22l-3-2.72a4.13 4.13 0 0 0-2.42-1.079a.4.4 0 0 0-.19 0H8.21A5 5 0 0 0 3 6.87v10.297a5 5 0 0 0 3.31 4.528a4.7 4.7 0 0 0 1.92.3h7.56A5 5 0 0 0 21 17.136V8.569a3.75 3.75 0 0 0-.32-1.54m-4.62.39a1.08 1.08 0 0 1-1.09-1.08V3.69c.66.16 3.23 2.8 3.79 3.24q.25.21.42.49z"></svg:path>`,
})
export class MageFileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileMinusIcon],svg[mage-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path stroke-linejoin="round" d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"></svg:path><svg:path stroke-miterlimit="10" d="M8.442 14.103h7.116"></svg:path></svg:g>`,
})
export class MageFileMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileMinusFillIcon],svg[mage-file-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.68 7.014a3.85 3.85 0 0 0-.92-1.22l-3-2.72a4.15 4.15 0 0 0-2.39-1.07H8.21A5 5 0 0 0 3 6.864v10.3a5 5 0 0 0 3.31 4.53a4.7 4.7 0 0 0 1.92.3h7.56a5 5 0 0 0 5.21-4.86v-8.57a3.75 3.75 0 0 0-.32-1.55m-5.09 8.06H8.47a1 1 0 0 1 0-2h7.12a1 1 0 0 1 0 2m.47-7.67a1.08 1.08 0 0 1-1.09-1.08v-2.65c.66.16 3.23 2.8 3.79 3.24q.25.211.42.49z"></svg:path>`,
})
export class MageFileMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFilePlusIcon],svg[mage-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path stroke-linejoin="round" d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"></svg:path><svg:path stroke-miterlimit="10" d="M11.57 10.424v7.116m-3.55-3.55h7.117"></svg:path></svg:g>`,
})
export class MageFilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFilePlusFillIcon],svg[mage-file-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.65 7.03a3.85 3.85 0 0 0-.92-1.22c-1.66-1.36-3.41-3.738-5.39-3.798a.4.4 0 0 0-.19 0H8.21A5 5 0 0 0 3 6.87v10.296a5 5 0 0 0 3.31 4.528a4.7 4.7 0 0 0 1.92.3h7.56A5 5 0 0 0 21 17.136V8.569a3.75 3.75 0 0 0-.35-1.54m-5.51 7.997h-2.57v2.549a1 1 0 1 1-2 0v-2.55H8a1 1 0 1 1 0-1.999h2.55v-2.569a1 1 0 0 1 2 0v2.57h2.57a1 1 0 0 1 .02 1.948zm.89-7.557a1.08 1.08 0 0 1-1.09-1.08V3.761c.67.13 3.24 2.789 3.79 3.219q.25.211.42.49z"></svg:path>`,
})
export class MageFilePlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileQuestionMarkIcon],svg[mage-file-question-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path stroke-linejoin="round" d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"></svg:path><svg:path stroke-miterlimit="10" d="M9.862 11.48a1.834 1.834 0 0 1 2-1.04a1.78 1.78 0 0 1 1.304.93a1.544 1.544 0 0 1-.9 2.124a1.14 1.14 0 0 0-.734 1.03v.425"></svg:path><svg:path stroke-linejoin="round" d="M11.499 17.295h.004"></svg:path></svg:g>`,
})
export class MageFileQuestionMarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileQuestionMarkFillIcon],svg[mage-file-question-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.65 7.041c-.4-.999-3.12-3.136-3.89-3.936a4.13 4.13 0 0 0-2.42-1.078c0-.06-5.95 0-6.13 0a5.005 5.005 0 0 0-4.77 2.937A5 5 0 0 0 3 6.88v10.29a4.99 4.99 0 0 0 3.285 4.528a5 5 0 0 0 1.945.297h7.56a5.005 5.005 0 0 0 4.77-2.937A5 5 0 0 0 21 17.14V8.58a3.8 3.8 0 0 0-.35-1.539M11.5 18.32a1 1 0 0 1-1-1a.999.999 0 0 1 1.707-.706a.999.999 0 0 1-.707 1.706m2.61-5.264a2.54 2.54 0 0 1-1.52 1.418c0 .68-.22 1.518-1.06 1.508c-1.81-.18-1-3.046.38-3.386a.55.55 0 0 0 .35-.77a.87.87 0 0 0-1.49.11a1.002 1.002 0 0 1-1.82-.838c1.38-3.157 6.48-1.379 5.16 1.918zm1.92-5.584c-1.67 0-.94-2.627-1.09-3.726a25 25 0 0 1 4.21 3.726z"></svg:path>`,
})
export class MageFileQuestionMarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileRecordsIcon],svg[mage-file-records-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.593 3.217H4.698A1.95 1.95 0 0 0 2.75 5.164v13.633c0 1.075.872 1.947 1.948 1.947h3.895a1.95 1.95 0 0 0 1.947-1.947V5.164a1.95 1.95 0 0 0-1.947-1.947"></svg:path><svg:path d="M6.645 17.379a1.503 1.503 0 1 0 0-3.007a1.503 1.503 0 0 0 0 3.007M10.54 7.93l3.116 11.685a1.95 1.95 0 0 0 2.386 1.373l3.768-.974a1.947 1.947 0 0 0 1.373-2.386L17.658 4.385a1.947 1.947 0 0 0-2.386-1.373l-3.758 1.003c-.406.111-.764.35-1.023.682"></svg:path><svg:path d="M16.665 17.241a1.502 1.502 0 1 0 0-3.004a1.502 1.502 0 0 0 0 3.004"></svg:path></svg:g>`,
})
export class MageFileRecordsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileRecordsFillIcon],svg[mage-file-records-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.861 17.43l-3.52-13.24a2.73 2.73 0 0 0-1.26-1.64a2.65 2.65 0 0 0-2-.26l-3.77 1a2 2 0 0 0-.57.25a2.66 2.66 0 0 0-2.15-1.07h-3.9a2.69 2.69 0 0 0-2.69 2.69v13.63a2.69 2.69 0 0 0 2.69 2.7h3.9a2.7 2.7 0 0 0 2.7-2.7v-5.12l1.64 6.14a2.63 2.63 0 0 0 1.26 1.63c.407.236.87.36 1.34.36q.355.004.7-.08l3.77-1a2.67 2.67 0 0 0 1.9-3.3zm-15.26.26a1.81 1.81 0 1 1 1.8-1.81a1.81 1.81 0 0 1-1.8 1.78zm10-.11a1.84 1.84 0 1 1 1.84-1.84a1.84 1.84 0 0 1-1.82 1.81z"></svg:path>`,
})
export class MageFileRecordsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileUploadIcon],svg[mage-file-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M14.186 2.753v3.596c0 .487.194.955.54 1.3a1.85 1.85 0 0 0 1.306.539h4.125"></svg:path><svg:path stroke-linejoin="round" d="M20.25 8.568v8.568a4.25 4.25 0 0 1-1.362 2.97a4.28 4.28 0 0 1-3.072 1.14h-7.59a4.3 4.3 0 0 1-3.1-1.124a4.26 4.26 0 0 1-1.376-2.986V6.862a4.25 4.25 0 0 1 1.362-2.97a4.28 4.28 0 0 1 3.072-1.14h5.714a3.5 3.5 0 0 1 2.361.905l2.96 2.722a2.97 2.97 0 0 1 1.031 2.189"></svg:path><svg:path stroke-miterlimit="10" d="M12 10.499v6.774"></svg:path><svg:path stroke-linejoin="round" d="m15.106 13.35l-2.665-2.665a.62.62 0 0 0-.882 0l-2.665 2.666"></svg:path></svg:g>`,
})
export class MageFileUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFileUploadFillIcon],svg[mage-file-upload-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.65 7.048c-.4-.998-3.12-3.133-3.89-3.932a4.15 4.15 0 0 0-2.39-1.067c.11-.11-6 0-6.16 0a5 5 0 0 0-3.622 1.336A5 5 0 0 0 3 6.898v10.277a4.98 4.98 0 0 0 1.605 3.501a5 5 0 0 0 3.625 1.319h7.56a5 5 0 0 0 3.623-1.337A5 5 0 0 0 21 17.145v-8.55a3.8 3.8 0 0 0-.35-1.547m-4.84 6.984c-1 1.058-2.15-.878-2.81-1.397v4.61a.997.997 0 0 1-1 .998a1 1 0 0 1-1-.998v-4.61l-1.4 1.397c-.9.928-2.34-.509-1.41-1.407l2.66-2.654a1.64 1.64 0 0 1 2.3 0l2.66 2.654a1 1 0 0 1 0 1.417zm.22-6.605c-1.67 0-.94-2.744-1.09-3.702a23.8 23.8 0 0 1 4.21 3.702z"></svg:path>`,
})
export class MageFileUploadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFilterIcon],svg[mage-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M21.25 12H8.895m-4.361 0H2.75m18.5 6.607h-5.748m-4.361 0H2.75m18.5-13.214h-3.105m-4.361 0H2.75m13.214 2.18a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm-9.25 6.607a2.18 2.18 0 1 0 0-4.36a2.18 2.18 0 0 0 0 4.36Zm6.607 6.608a2.18 2.18 0 1 0 0-4.361a2.18 2.18 0 0 0 0 4.36Z"></svg:path>`,
})
export class MageFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFilter2Icon],svg[mage-filter-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="m19.795 4.413l-5.074 7.852a1.8 1.8 0 0 0-.287.987v4.788a1.23 1.23 0 0 1-.678 1.09l-3.662 1.826a.356.356 0 0 1-.528-.322v-7.382a1.8 1.8 0 0 0-.287-.987L4.205 4.413A.976.976 0 0 1 5.112 3h13.776a.975.975 0 0 1 .907 1.412Z"></svg:path>`,
})
export class MageFilter2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFilter2FillIcon],svg[mage-filter-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.62 3.89a1.74 1.74 0 0 1-.19.86v.07l-5.07 7.86a1.06 1.06 0 0 0-.17.57v4.79a2 2 0 0 1-1.09 1.76l-3.66 1.83a1 1 0 0 1-.51.12a1.1 1.1 0 0 1-.55-.16a1.05 1.05 0 0 1-.4-.41a1.1 1.1 0 0 1-.13-.57v-7.35c0-.209-.06-.413-.17-.59L3.6 4.82a1.84 1.84 0 0 1-.22-.93c.016-.3.113-.59.28-.84a1.75 1.75 0 0 1 .64-.6a1.85 1.85 0 0 1 .87-.2h13.75c.29-.006.575.062.83.2c.268.136.493.344.65.6c.146.256.221.545.22.84"></svg:path>`,
})
export class MageFilter2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFilterFillIcon],svg[mage-filter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 18.605a.75.75 0 0 1-.75.75h-5.1a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h7.74a2.93 2.93 0 0 1 5.66 0h5.1a.75.75 0 0 1 .75.75m0-13.21a.75.75 0 0 1-.75.75H18.8a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h10.39a2.93 2.93 0 0 1 5.66 0h2.45a.74.74 0 0 1 .75.75m0 6.6a.74.74 0 0 1-.75.75H9.55a2.93 2.93 0 0 1-5.66 0H2.75a.75.75 0 1 1 0-1.5h1.14a2.93 2.93 0 0 1 5.66 0h11.7a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class MageFilterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFilterSquareIcon],svg[mage-filter-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.75 8.805h-1.437m-3.594 0H6.25m11.5 6.39h-6.469m-3.593 0H6.25m3.234 1.797a1.797 1.797 0 1 0 0-3.594a1.797 1.797 0 0 0 0 3.594m5.032-6.39a1.797 1.797 0 1 0 0-3.594a1.797 1.797 0 0 0 0 3.594"></svg:path></svg:g>`,
})
export class MageFilterSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFilterSquareFillIcon],svg[mage-filter-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.75 6.75 0 0 0 8.75 22h6.5A6.75 6.75 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.5 13.95h-5.84a2.54 2.54 0 0 1-4.86 0h-.8a.75.75 0 1 1 0-1.5h.8a2.54 2.54 0 0 1 4.86 0h5.84a.75.75 0 1 1 0 1.5m0-6.39h-.8a2.54 2.54 0 0 1-4.86 0H6.25a.75.75 0 0 1 0-1.5h5.84a2.54 2.54 0 0 1 4.86 0h.8a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill="currentColor" d="M10.53 15.2a1 1 0 1 1-1.997-.1a1 1 0 0 1 1.997.1m5.03-6.39a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class MageFilterSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFingerprintIcon],svg[mage-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.278 14.611a2.86 2.86 0 0 0-.308-1.476c-1.231-2.482 1.712-5.187 4.213-4.132c3.51 1.439 2.931 8.016 1.391 10.82m.666-16.268C8.587.354.631 7.278 3.267 14.165"></svg:path><svg:path d="M7.061 7.662A6.85 6.85 0 0 1 10.13 5.94a6.8 6.8 0 0 1 3.513.033a6.85 6.85 0 0 1 3.036 1.78a6.9 6.9 0 0 1 1.763 3.062m-6.639.893c.615 1.659.802 3.448.542 5.199a10.9 10.9 0 0 1-2.192 4.343M5.916 10.305A5.8 5.8 0 0 0 6.1 13.88a3.82 3.82 0 0 1-.1 2.565a3.8 3.8 0 0 1-1.698 1.915M17.95 5.119c1.723.893 2.857 3.35 3.3 4.963m-2.39 3.4a14.6 14.6 0 0 1-.27 5.162m-9.521-1.352a5.4 5.4 0 0 1-1.983 2.394"></svg:path></svg:g>`,
})
export class MageFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFingerprintMinimalIcon],svg[mage-fingerprint-minimal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.036 12.158s-.986 4.736 4.492 6.993"></svg:path><svg:path d="M13.752 20.952c-2.871-1.621-5.086-4.726-4.725-8.127a4.05 4.05 0 0 1 1.737-3.306a2.935 2.935 0 0 1 3.9 1.261c.942 1.388.275 3.179.964 4.641c1.06 1.801 3.75 1.346 4.767-.297c1.526-2.352.715-5.943-.843-8.105c-2.447-3.337-6.043-5.107-11.14-3.338c-4.789 1.632-7.162 8.381-4.64 12.863"></svg:path><svg:path d="M7.982 19.002a9 9 0 0 1-1.864-3.484a8.9 8.9 0 0 1-.183-3.933a6.4 6.4 0 0 1 .91-2.45A6.6 6.6 0 0 1 8.662 7.23a6.3 6.3 0 0 1 3.578-.869c.811.025 1.61.208 2.349.537s1.406.798 1.96 1.38a8.28 8.28 0 0 1 1.692 5.51"></svg:path></svg:g>`,
})
export class MageFingerprintMinimalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFireAIcon],svg[mage-fire-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.21 14.434c0 6.328 5.843 6.816 7.79 6.816s7.79-.488 7.79-6.816c0-2.869-2.819-3.772-3.895-7.79c-6.816 7.79-5.842-3.894-5.842-3.894S4.21 8.592 4.21 14.434"></svg:path><svg:path d="M8.02 13.694c-.422 2.17 1.345 3.862 3.024 4.189"></svg:path></svg:g>`,
})
export class MageFireAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFireAFillIcon],svg[mage-fire-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.78 10.451a10.6 10.6 0 0 1-2.176-4.009a.74.74 0 0 0-1.258-.293c-2.293 2.624-3.248 2.498-3.492 2.39c-.976-.439-1.249-3.687-1.083-5.745a.71.71 0 0 0-.42-.722a.7.7 0 0 0-.819.147c-.253.243-6.067 6.135-6.067 12.221C3.465 21.455 9.991 22 12 22s8.535-.546 8.535-7.56a6.23 6.23 0 0 0-1.756-3.989m-7.736 8.418h-.195a4.71 4.71 0 0 1-3.794-5.345a.993.993 0 1 1 1.95.38a2.75 2.75 0 0 0 2.263 3.053a.98.98 0 1 1-.185 1.95z"></svg:path>`,
})
export class MageFireAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFireBIcon],svg[mage-fire-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.17 13.344c0-4.368-3.953-4.23-3.953-10.594C9.763 4.341 9.23 7.365 9.23 12.988c-1.463.149-2.797-2.273-3.637-3.597c-3.874 5.07-1.235 11.859 6.67 11.859a7.906 7.906 0 0 0 7.907-7.906"></svg:path><svg:path d="M16.938 12.988a5.11 5.11 0 0 1-5.93 4.942"></svg:path></svg:g>`,
})
export class MageFireBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFireBFillIcon],svg[mage-fire-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.046 8.744a8.38 8.38 0 0 1-2.096-5.99a.74.74 0 0 0-.28-.589a.72.72 0 0 0-.648-.14c-6.609 1.628-7.457 4.872-7.537 9.983A10.8 10.8 0 0 1 6.49 9.432l-.27-.419a.73.73 0 0 0-.599-.35a.69.69 0 0 0-.629.29a8.2 8.2 0 0 0-1.168 8.585C5.231 20.373 8.295 22 12.248 22a8.7 8.7 0 0 0 6.11-2.535a8.57 8.57 0 0 0 2.535-6.11a6.9 6.9 0 0 0-1.847-4.611m-1.727 6.818a6.07 6.07 0 0 1-3.883 3.244a6.3 6.3 0 0 1-1.607.21a5.5 5.5 0 0 1-.998-.08a1.012 1.012 0 0 1 .33-1.997c.578.09 1.17.06 1.736-.09a4.2 4.2 0 0 0 1.547-.808a4 4 0 0 0 1.068-1.378c.257-.53.393-1.109.4-1.697a.998.998 0 0 1 1.996 0a6 6 0 0 1-.609 2.596z"></svg:path>`,
})
export class MageFireBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFirstAidKitIcon],svg[mage-first-aid-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.765 11.48a1 1 0 0 1-1-1V8.9a2.56 2.56 0 0 1 2.54-2.57h13.36a2.56 2.56 0 0 1 2.57 2.57v1.55a1 1 0 0 1-1 1m-16.47.03l.36 7.28a2.2 2.2 0 0 0 2.18 2h11.36a2.2 2.2 0 0 0 2.18-2l.36-7.28"></svg:path><svg:path d="M15.065 6.33V4.27a1 1 0 0 0-.3-.73a1 1 0 0 0-.72-.3h-4.12a1 1 0 0 0-.72.3a1 1 0 0 0-.3.73v2.06m7.52 6.016v1.967a.49.49 0 0 1-.492.492h-2.458v2.458a.49.49 0 0 1-.492.491h-1.966a.49.49 0 0 1-.492-.491v-2.458H8.067a.49.49 0 0 1-.492-.492v-1.967a.49.49 0 0 1 .492-.491h2.458V9.397a.49.49 0 0 1 .492-.492h1.966a.49.49 0 0 1 .492.492v2.458h2.458a.49.49 0 0 1 .492.491"></svg:path></svg:g>`,
})
export class MageFirstAidKitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFirstAidKitFillIcon],svg[mage-first-aid-kit-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.73 7.636a3.3 3.3 0 0 0-3.051-2.048h-2.872V4.29a1.7 1.7 0 0 0-.13-.69a1.6 1.6 0 0 0-.38-.569a1.7 1.7 0 0 0-.58-.39a1.7 1.7 0 0 0-.67-.14H9.923a1.4 1.4 0 0 0-.69.14c-.21.09-.4.22-.56.38a1.7 1.7 0 0 0-.39.58a1.7 1.7 0 0 0-.14.679v1.308H5.291c-.875.01-1.71.364-2.327.985A3.32 3.32 0 0 0 2 8.904v1.579a1.75 1.75 0 0 0 .52 1.238c.146.149.32.268.51.35l.34 6.752c.063.732.398 1.413.941 1.908a3 3 0 0 0 2.001.769h11.376a2.934 2.934 0 0 0 2.921-2.707l.33-6.732a1.72 1.72 0 0 0 .93-.938c.088-.213.132-.44.131-.67V8.914a3.3 3.3 0 0 0-.27-1.278M9.644 4.27a.4.4 0 0 1 0-.1l.07-.09l.08-.06h4.352l.09.07a.2.2 0 0 1 0 .08a.2.2 0 0 1 0 .11v1.308H9.574zm7.524 10.048a1.24 1.24 0 0 1-.36.87a1.22 1.22 0 0 1-.881.369h-1.71v1.708a1.24 1.24 0 0 1-.361.869a1.22 1.22 0 0 1-.88.37h-2.001a1.25 1.25 0 0 1-1.251-1.24v-1.707H8.033a1.25 1.25 0 0 1-1.154-.762a1.2 1.2 0 0 1-.097-.477V12.32a1.23 1.23 0 0 1 .37-.879c.236-.229.552-.358.881-.36h1.7V9.425a1.227 1.227 0 0 1 1.252-1.239h2c.33 0 .646.129.88.36c.23.236.358.55.361.879v1.708h1.711c.33 0 .646.129.88.36c.23.235.36.55.36.878z"></svg:path><svg:path fill="currentColor" d="M15.667 12.61v1.449h-2.201a.75.75 0 0 0-.75.749v2.197h-1.451v-2.197a.737.737 0 0 0-.75-.75H8.312V12.61h2.201a.75.75 0 0 0 .75-.749V9.664h1.451v2.197a.76.76 0 0 0 .75.75z"></svg:path>`,
})
export class MageFirstAidKitFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFlagIcon],svg[mage-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.382 14.72s1.089-1.088 4.353-1.088c3.265 0 3.265 2.177 6.53 2.177a11.3 11.3 0 0 0 4.353-1.088V3.838a11.3 11.3 0 0 1-4.353 1.088C12 4.926 12 2.75 8.735 2.75c-3.264 0-4.353 1.088-4.353 1.088m0 17.412V3.838"></svg:path>`,
})
export class MageFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFlagFillIcon],svg[mage-flag-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.372 3.86v10.88a.75.75 0 0 1-.43.68a11.85 11.85 0 0 1-4.64 1.16a5.9 5.9 0 0 1-3.71-1.21a4.45 4.45 0 0 0-2.85-1a7.16 7.16 0 0 0-3.61.73v6.13a.75.75 0 1 1-1.5 0V3.86a1 1 0 0 1 0-.15a.76.76 0 0 1 .31-.47c.38-.32 1.73-1.22 4.78-1.22a5.87 5.87 0 0 1 3.68 1.22a4.46 4.46 0 0 0 2.85 1a10.3 10.3 0 0 0 4-1a.74.74 0 0 1 .72.05a.73.73 0 0 1 .4.57"></svg:path>`,
})
export class MageFlagFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFocusIcon],svg[mage-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.325 8.3V6.45a2.775 2.775 0 0 0-2.775-2.775h-2.775m0 16.65h2.775a2.775 2.775 0 0 0 2.775-2.775V15.7m-16.65 0v1.85a2.775 2.775 0 0 0 2.775 2.775h2.775m0-16.65H6.45A2.775 2.775 0 0 0 3.675 6.45V8.3"></svg:path><svg:path d="M12 8a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z"></svg:path></svg:g>`,
})
export class MageFocusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFocusFillIcon],svg[mage-focus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.228 9.06a.743.743 0 0 1-.743-.742V6.489a1.976 1.976 0 0 0-1.98-1.977h-2.752a.743.743 0 0 1-.743-.741a.74.74 0 0 1 .742-.741h2.753a3.52 3.52 0 0 1 2.466 1.027A3.5 3.5 0 0 1 21 6.52v1.829a.75.75 0 0 1-.772.711m-2.723 11.89h-2.752a.743.743 0 0 1-.526-1.265a.74.74 0 0 1 .525-.217h2.753a1.98 1.98 0 0 0 1.98-1.977v-1.809a.741.741 0 0 1 1.268-.524a.74.74 0 0 1 .217.524v1.829a3.5 3.5 0 0 1-1.03 2.461A3.52 3.52 0 0 1 17.476 21zm-8.267 0H6.485a3.5 3.5 0 0 1-2.465-1.025A3.5 3.5 0 0 1 3 17.461v-1.779a.74.74 0 0 1 1.268-.524a.74.74 0 0 1 .217.524v1.829a1.975 1.975 0 0 0 1.98 1.977h2.753a.743.743 0 0 1 .742.741a.74.74 0 0 1-.742.741zM3.743 9.06A.743.743 0 0 1 3 8.317V6.489c0-.923.367-1.81 1.02-2.464A3.5 3.5 0 0 1 6.485 3h2.753a.743.743 0 0 1 .742.741a.74.74 0 0 1-.742.742H6.485a1.98 1.98 0 0 0-1.98 1.977v1.828a.75.75 0 0 1-.762.771m12.94 2.916a4.7 4.7 0 0 1-1.069 2.978a4.704 4.704 0 0 1-5.853 1.16a4.688 4.688 0 0 1-.392-8.045a4.71 4.71 0 0 1 6.96 2.109c.236.57.357 1.181.354 1.798"></svg:path>`,
})
export class MageFocusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderIcon],svg[mage-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 9.883v7.698a3.083 3.083 0 0 1-3.083 3.083H5.833a3.083 3.083 0 0 1-3.083-3.083V6.419a3.083 3.083 0 0 1 3.083-3.083h3.084a3.08 3.08 0 0 1 2.57 1.377l.873 1.326a1.75 1.75 0 0 0 1.449.77h4.358a3.084 3.084 0 0 1 3.083 3.074"></svg:path>`,
})
export class MageFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolder2Icon],svg[mage-folder-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.375 16.047h9.25m4.625-6.164v7.698a3.083 3.083 0 0 1-3.083 3.083H5.833a3.083 3.083 0 0 1-3.083-3.083V6.419a3.083 3.083 0 0 1 3.083-3.083h3.084a3.08 3.08 0 0 1 2.57 1.377l.873 1.326a1.75 1.75 0 0 0 1.449.77h4.358a3.084 3.084 0 0 1 3.083 3.074"></svg:path>`,
})
export class MageFolder2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolder2FillIcon],svg[mage-folder-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.88 7.175a3.84 3.84 0 0 0-2.71-1.12h-4.36a1 1 0 0 1-.46-.11a1 1 0 0 1-.36-.32l-.87-1.33a3.84 3.84 0 0 0-3.2-1.71H5.84A3.84 3.84 0 0 0 2 6.415v11.16a3.86 3.86 0 0 0 3.84 3.84h12.33a3.84 3.84 0 0 0 3.83-3.84v-7.65a3.8 3.8 0 0 0-1.12-2.75m-4.25 9.87H7.38a1 1 0 0 1 0-2h9.25a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageFolder2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderCheckIcon],svg[mage-folder-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8.447 13.334l2 2a.757.757 0 0 0 1.076 0l4.03-4.03"></svg:path><svg:path d="M21.25 9.883v7.698a3.083 3.083 0 0 1-3.083 3.083H5.833a3.083 3.083 0 0 1-3.083-3.083V6.419a3.083 3.083 0 0 1 3.083-3.083h3.084a3.08 3.08 0 0 1 2.57 1.377l.873 1.326a1.75 1.75 0 0 0 1.449.77h4.358a3.084 3.084 0 0 1 3.083 3.074"></svg:path></svg:g>`,
})
export class MageFolderCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderCheckFillIcon],svg[mage-folder-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.87 7.175a3.82 3.82 0 0 0-2.71-1.12h-4.35a1 1 0 0 1-.47-.11a1 1 0 0 1-.36-.32l-.87-1.33a3.8 3.8 0 0 0-3.2-1.71H5.83A3.82 3.82 0 0 0 2 6.415v11.16a3.84 3.84 0 0 0 3.83 3.84h12.33a3.86 3.86 0 0 0 3.84-3.84v-7.65a3.85 3.85 0 0 0-1.13-2.75m-4.61 4.83l-4 4a1.7 1.7 0 0 1-1.25.52a1.7 1.7 0 0 1-.67-.13a1.65 1.65 0 0 1-.58-.39l-2-2a1 1 0 0 1 1.41-1.41l1.83 1.83l3.86-3.86a1 1 0 0 1 1.42 0a1 1 0 0 1-.02 1.44"></svg:path>`,
})
export class MageFolderCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderCrossIcon],svg[mage-folder-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="m14.678 11.067l-5.356 5.355m0-5.355l5.356 5.355"></svg:path><svg:path stroke-linejoin="round" d="M21.25 9.883v7.698a3.083 3.083 0 0 1-3.083 3.083H5.833a3.083 3.083 0 0 1-3.083-3.083V6.419a3.083 3.083 0 0 1 3.083-3.083h3.084a3.08 3.08 0 0 1 2.57 1.377l.873 1.326a1.75 1.75 0 0 0 1.449.77h4.358a3.084 3.084 0 0 1 3.083 3.074"></svg:path></svg:g>`,
})
export class MageFolderCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderCrossFillIcon],svg[mage-folder-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.87 7.175a3.8 3.8 0 0 0-2.71-1.11h-4.35a.94.94 0 0 1-.47-.12a1 1 0 0 1-.36-.32l-.87-1.33a3.87 3.87 0 0 0-3.2-1.71H5.83A3.82 3.82 0 0 0 2 6.425v11.16a3.82 3.82 0 0 0 3.83 3.83h12.33a3.84 3.84 0 0 0 3.84-3.83v-7.7a3.9 3.9 0 0 0-1.13-2.71m-5.49 8.54a1 1 0 0 1-1.41 1.42l-2-2l-2 2a1 1 0 0 1-1.41-1.42l2-2l-2-2a1 1 0 0 1 0-1.41a1 1 0 0 1 1.41 0l2 2l2-2a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.41l-2 2z"></svg:path>`,
})
export class MageFolderCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderFillIcon],svg[mage-folder-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.885v7.7a3.85 3.85 0 0 1-2.373 3.542a3.8 3.8 0 0 1-1.467.288H5.83A3.82 3.82 0 0 1 2 17.585V6.425a3.82 3.82 0 0 1 3.83-3.84h3.08a3.87 3.87 0 0 1 3.2 1.71l.87 1.33a1 1 0 0 0 .36.32a.94.94 0 0 0 .47.12h4.35a3.8 3.8 0 0 1 2.71 1.11A3.85 3.85 0 0 1 22 9.885"></svg:path>`,
})
export class MageFolderFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderMinusIcon],svg[mage-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M8.213 13.447h7.574"></svg:path><svg:path stroke-linejoin="round" d="M21.25 9.883v7.698a3.083 3.083 0 0 1-3.083 3.083H5.833a3.083 3.083 0 0 1-3.083-3.083V6.419a3.083 3.083 0 0 1 3.083-3.083h3.084a3.08 3.08 0 0 1 2.57 1.377l.873 1.326a1.75 1.75 0 0 0 1.449.77h4.358a3.084 3.084 0 0 1 3.083 3.074"></svg:path></svg:g>`,
})
export class MageFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderMinusFillIcon],svg[mage-folder-minus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.87 7.175a3.8 3.8 0 0 0-2.7-1.11h-4.36a.94.94 0 0 1-.47-.12a1.1 1.1 0 0 1-.36-.32l-.87-1.33a3.87 3.87 0 0 0-3.19-1.71H5.83A3.82 3.82 0 0 0 2 6.425v11.16a3.88 3.88 0 0 0 1.12 2.71a3.84 3.84 0 0 0 2.71 1.12h12.34a3.88 3.88 0 0 0 2.71-1.12a3.84 3.84 0 0 0 1.12-2.71v-7.7a3.8 3.8 0 0 0-1.13-2.71m-5.08 7.27H8.21a1 1 0 0 1 0-2h7.58a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageFolderMinusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderOpenIcon],svg[mage-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.375 16.047h9.25m4.625-6.164v7.698a3.083 3.083 0 0 1-3.083 3.083H5.833a3.083 3.083 0 0 1-3.083-3.083V6.419a3.083 3.083 0 0 1 3.083-3.083h3.084a3.08 3.08 0 0 1 2.57 1.377l.873 1.326a1.75 1.75 0 0 0 1.449.77h4.358a3.084 3.084 0 0 1 3.083 3.074"></svg:path><svg:path d="m11.517 4.723l6.927-1.11a1.53 1.53 0 0 1 1.778 1.521v2.457"></svg:path></svg:g>`,
})
export class MageFolderOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderOpenFillIcon],svg[mage-folder-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.99 7.325v-2.15a2.29 2.29 0 0 0-1.66-2.21a2.3 2.3 0 0 0-1-.05l-6.51 1a3.7 3.7 0 0 0-1.09-.87a3.8 3.8 0 0 0-1.81-.46H5.84A3.82 3.82 0 0 0 2 6.425v11.16a3.82 3.82 0 0 0 3.84 3.83h12.33a3.82 3.82 0 0 0 2.71-1.12a3.88 3.88 0 0 0 1.12-2.71v-7.7a3.73 3.73 0 0 0-1.01-2.56m-4.34 9.76H7.4a1 1 0 0 1 0-2h9.25a1 1 0 0 1 0 2m2.88-10.71a3.8 3.8 0 0 0-1.3-.23h-4.4a1 1 0 0 1-.47-.12a1 1 0 0 1-.35-.32l-.23-.34l5.8-.93a.8.8 0 0 1 .34 0a.7.7 0 0 1 .3.16a.6.6 0 0 1 .2.27a.7.7 0 0 1 .07.33z"></svg:path>`,
})
export class MageFolderOpenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderPlusIcon],svg[mage-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-miterlimit="10" d="M11.993 10.307v6.874m-3.43-3.437h6.874"></svg:path><svg:path stroke-linejoin="round" d="M21.25 9.883v7.698a3.083 3.083 0 0 1-3.083 3.083H5.833a3.083 3.083 0 0 1-3.083-3.083V6.419a3.083 3.083 0 0 1 3.083-3.083h3.084a3.08 3.08 0 0 1 2.57 1.377l.873 1.326a1.75 1.75 0 0 0 1.449.77h4.358a3.084 3.084 0 0 1 3.083 3.074"></svg:path></svg:g>`,
})
export class MageFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageFolderPlusFillIcon],svg[mage-folder-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.88 7.175a3.83 3.83 0 0 0-2.71-1.11h-4.36a1 1 0 0 1-.47-.12a1.1 1.1 0 0 1-.35-.32l-.87-1.33a3.9 3.9 0 0 0-3.2-1.71H5.84a3.86 3.86 0 0 0-3.548 2.366A3.8 3.8 0 0 0 2 6.425v11.16a3.8 3.8 0 0 0 1.13 2.71a3.86 3.86 0 0 0 2.71 1.12h12.33a3.82 3.82 0 0 0 3.83-3.83v-7.7a3.8 3.8 0 0 0-1.12-2.71m-5.44 7.57H13v2.44a1 1 0 0 1-2 0v-2.44H8.57a1 1 0 0 1 0-2H11v-2.44a1 1 0 1 1 2 0v2.44h2.44a1 1 0 0 1 0 2"></svg:path>`,
})
export class MageFolderPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGameboyIcon],svg[mage-gameboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17 2.75H7a3 3 0 0 0-3 3v12.5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5.75a3 3 0 0 0-3-3"></svg:path><svg:path d="M16.5 5.56h-9c-.552 0-1 .383-1 .857v4.286c0 .473.448.857 1 .857h9c.552 0 1-.384 1-.857V6.417c0-.474-.448-.857-1-.857m-7.967 8.552v3.473m-1.737-1.737h3.46M12 19h2m1.136-2.904v.4m1.764-2.384v.4"></svg:path></svg:g>`,
})
export class MageGameboyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGameboyFillIcon],svg[mage-gameboy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7a3.75 3.75 0 0 0-3.75 3.75v12.5A3.75 3.75 0 0 0 7 22h10a3.76 3.76 0 0 0 3.75-3.75V5.75A3.76 3.76 0 0 0 17 2m-6.75 14.6h-1v1a.75.75 0 1 1-1.5 0v-1h-1a.75.75 0 1 1 0-1.5h1v-1a.75.75 0 1 1 1.5 0v1h1a.75.75 0 1 1 0 1.5M14 19.75h-2a.75.75 0 1 1 0-1.5h2a.75.75 0 1 1 0 1.5m1.88-3.25a.75.75 0 1 1-1.5 0v-.4a.75.75 0 1 1 1.5 0zm1.77-2a.75.75 0 1 1-1.5 0v-.4a.75.75 0 1 1 1.5 0zm.6-4.47a1.69 1.69 0 0 1-1.75 1.6h-9a1.68 1.68 0 0 1-1.75-1.6V5.74A1.68 1.68 0 0 1 7.5 4.13h9a1.69 1.69 0 0 1 1.75 1.61z"></svg:path>`,
})
export class MageGameboyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGemAIcon],svg[mage-gem-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m18.612 10.82l-5.737-7.879a1.06 1.06 0 0 0-.382-.322a1.1 1.1 0 0 0-.986 0a1.06 1.06 0 0 0-.381.322l-5.738 7.88A2 2 0 0 0 5 12c0 .422.135.834.388 1.18l5.738 7.879c.098.135.229.246.38.322a1.1 1.1 0 0 0 .987 0c.152-.076.283-.187.381-.322l5.738-7.88a1.99 1.99 0 0 0 0-2.359"></svg:path><svg:path d="M5.015 12.195L12 15.078l6.985-2.883M12 2.5v19"></svg:path></svg:g>`,
})
export class MageGemAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGemAFillIcon],svg[mage-gem-a-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.294 10.377l-5.74-7.896a1.9 1.9 0 0 0-.652-.55a1.6 1.6 0 0 0-.681-.181h-.301c-.238.01-.47.072-.681.18c-.26.13-.487.319-.662.551l-5.74 7.896A2.74 2.74 0 0 0 4.304 12q-.007.09 0 .18a.4.4 0 0 0 0 .15a.3.3 0 0 0 0 .14c.057.414.216.806.461 1.143l5.751 7.896c.17.235.394.427.652.56c.214.1.445.162.68.181h.301a1.83 1.83 0 0 0 1.333-.741l5.741-7.886c.249-.347.41-.75.471-1.172a.14.14 0 0 0 0-.07q.015-.09 0-.18a.7.7 0 0 0 0-.201a2.75 2.75 0 0 0-.4-1.623m-1.212 2.364l-.701 1.002l-4.56 1.884v4.379l-.49.67a.2.2 0 0 1-.11.091a.34.34 0 0 1-.311 0a.24.24 0 0 1-.11-.09l-.481-.661v-4.389l-4.57-1.884l-.7-1.002A1.23 1.23 0 0 1 5.807 12a1 1 0 0 1 0-.3l5.47 2.264v-9.94l.472-.65a.3.3 0 0 1 .12-.101a.4.4 0 0 1 .16 0a.4.4 0 0 1 .15 0a.22.22 0 0 1 .11.1l.492.671v9.92l5.46-2.265a.8.8 0 0 1 .05.301c.01.263-.063.523-.21.741"></svg:path>`,
})
export class MageGemAFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGemBIcon],svg[mage-gem-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m18.612 10.819l-5.737-7.88a1.06 1.06 0 0 0-.382-.323a1.1 1.1 0 0 0-.986 0a1.06 1.06 0 0 0-.381.323l-5.738 7.88A2 2 0 0 0 5 11.999c0 .422.135.834.388 1.18l5.738 7.88c.098.135.229.246.38.322a1.1 1.1 0 0 0 .987 0c.152-.076.283-.187.381-.322l5.738-7.88c.253-.346.388-.758.388-1.18a2 2 0 0 0-.388-1.18"></svg:path><svg:path d="M5.015 12.194L12 15.077l6.985-2.883M12 21.5v-6.423"></svg:path></svg:g>`,
})
export class MageGemBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGemBFillIcon],svg[mage-gem-b-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.276 10.394l-5.728-7.877a1.85 1.85 0 0 0-3 0l-5.727 7.877a2.7 2.7 0 0 0-.53 1.62a1 1 0 0 0 0 .18q0 .154.06.3c.057.411.215.803.46 1.139l5.728 7.877a2 2 0 0 0 .66.56a2 2 0 0 0 .68.18h.3a1.83 1.83 0 0 0 1.329-.74l5.728-7.877a2.6 2.6 0 0 0 .47-1.16a.14.14 0 0 0 0-.07q.014-.09 0-.18a.7.7 0 0 0 0-.2a2.72 2.72 0 0 0-.43-1.629M6.76 13.713l4.558 1.88v4.378zm6.058 6.248v-4.369l4.548-1.879z"></svg:path>`,
})
export class MageGemBFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGemCIcon],svg[mage-gem-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m18.612 10.82l-5.737-7.881a1.06 1.06 0 0 0-.382-.323a1.1 1.1 0 0 0-.986 0a1.06 1.06 0 0 0-.381.323l-5.738 7.88A2 2 0 0 0 5 12a2 2 0 0 0 .388 1.18l5.738 7.881c.098.136.229.246.38.323a1.1 1.1 0 0 0 .987 0c.152-.077.283-.187.381-.323l5.738-7.88A2 2 0 0 0 19 12a2 2 0 0 0-.388-1.18"></svg:path><svg:path d="M5.015 12.195L12 15.078l6.985-2.883"></svg:path></svg:g>`,
})
export class MageGemCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGemCFillIcon],svg[mage-gem-c-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.25 10.377l-5.732-7.882a1.8 1.8 0 0 0-.66-.55a1.85 1.85 0 0 0-2.31.55l-5.732 7.882a2.73 2.73 0 0 0-.53 1.62q-.007.09 0 .18c0 .103.02.206.06.3c.058.413.216.804.46 1.14l5.732 7.883a1.81 1.81 0 0 0 1.49.75a1.9 1.9 0 0 0 .83-.19a1.9 1.9 0 0 0 .65-.55l5.732-7.882c.248-.347.41-.748.47-1.17a.14.14 0 0 0 0-.07q.015-.09 0-.18a.7.7 0 0 0 0-.2a2.74 2.74 0 0 0-.46-1.631m-7.002 10.242a.27.27 0 0 1-.11.1a.42.42 0 0 1-.31 0a.4.4 0 0 1-.11-.1l-5.001-6.921l5.001 2.07a.72.72 0 0 0 .57 0l5.001-2.07z"></svg:path>`,
})
export class MageGemCFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGemStoneIcon],svg[mage-gem-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.238 9.153a1.1 1.1 0 0 1-.231.54l-8.14 10.476c-.151.19-.36.326-.596.386a1 1 0 0 1-.473 0a1.1 1.1 0 0 1-.672-.397L2.986 9.693a1.1 1.1 0 0 1-.067-1.267l2.886-4.494l.088-.11a1.1 1.1 0 0 1 .838-.397h10.53a1 1 0 0 1 .254 0a1.1 1.1 0 0 1 .672.474l2.886 4.494a1.1 1.1 0 0 1 .165.76"></svg:path><svg:path d="m14.2 3.458l1.574 5.695l-3.503 11.39m-.473.012L7.777 9.153l2.016-5.695M2.754 9.153h18.484"></svg:path></svg:g>`,
})
export class MageGemStoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGemStoneFillIcon],svg[mage-gem-stone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.367 19.08l-7.025-9.04h3.836zm5.987-9.04l-3.36 10.946L8.12 10.039zm6.28 0l-7.209 9.272l2.859-9.273zM22 8.206h-4.704l-1.43-5.192h2.652a.4.4 0 0 1 .257.183zm-6.597 0h-7.27l1.833-5.18h3.995zM8.011 3.039l-1.82 5.167H2L5.128 3.32l.097-.11a.5.5 0 0 1 .16-.123a.4.4 0 0 1 .17 0z"></svg:path>`,
})
export class MageGemStoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGifIcon],svg[mage-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M10.988 11.798v.781a2.8 2.8 0 0 1-.351 1.45a2.4 2.4 0 0 1-.984.931c-.44.224-.93.336-1.423.325a3.1 3.1 0 0 1-1.581-.395a2.7 2.7 0 0 1-1.054-1.133A3.75 3.75 0 0 1 5.208 12c-.006-.473.07-.943.228-1.388a2.9 2.9 0 0 1 .633-1.028c.269-.283.595-.504.957-.65c.374-.15.775-.225 1.178-.22c.343-.002.684.051 1.01.159c.297.1.576.248.825.439c.24.19.443.422.598.685c.155.27.256.57.298.878H9.557a1.4 1.4 0 0 0-.175-.404a1.1 1.1 0 0 0-.29-.298a1.2 1.2 0 0 0-.387-.194a1.7 1.7 0 0 0-.483-.035c-.31-.01-.615.073-.878.237a1.6 1.6 0 0 0-.571.712c-.15.358-.223.745-.211 1.133c-.008.388.06.773.202 1.133c.123.287.324.533.58.712c.26.17.567.256.878.246c.27.008.539-.05.782-.167a1.15 1.15 0 0 0 .518-.492c.108-.206.165-.435.167-.668H8.283v-.992zm2.462-2.882v6.211a.09.09 0 0 1-.087.088h-1.177a.08.08 0 0 1-.065-.023a.08.08 0 0 1-.023-.065v-6.21a.08.08 0 0 1 .053-.085a.1.1 0 0 1 .035-.003h1.177a.09.09 0 0 1 .088.087m1.108 6.211v-6.21a.09.09 0 0 1 .088-.088h4.146v1.115h-2.758a.09.09 0 0 0-.088.088v1.344a.1.1 0 0 0 .088.088h2.512v1.115h-2.512a.09.09 0 0 0-.088.088v2.46a.08.08 0 0 1-.088.088h-1.177a.09.09 0 0 1-.087-.009a.09.09 0 0 1-.036-.079"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.625 3.75h-9.25c-2.554 0-4.625 2.052-4.625 4.583v7.334c0 2.531 2.07 4.583 4.625 4.583h9.25c2.554 0 4.625-2.052 4.625-4.583V8.333c0-2.531-2.07-4.583-4.625-4.583"></svg:path></svg:g>`,
})
export class MageGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGifFillIcon],svg[mage-gif-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.62 3H7.37A5.36 5.36 0 0 0 2 8.33v7.33A5.36 5.36 0 0 0 7.37 21h9.25A5.37 5.37 0 0 0 22 15.66V8.33A5.36 5.36 0 0 0 16.62 3m-5.64 9.58a2.76 2.76 0 0 1-.35 1.45a2.44 2.44 0 0 1-1 .93a3 3 0 0 1-1.42.32a3.1 3.1 0 0 1-1.58-.39a2.65 2.65 0 0 1-1.06-1.14A3.8 3.8 0 0 1 5.18 12c0-.473.078-.942.23-1.39a2.9 2.9 0 0 1 .64-1a2.7 2.7 0 0 1 1-.65a3.27 3.27 0 0 1 2.19-.06c.299.1.58.249.83.44a2.4 2.4 0 0 1 .89 1.56H9.58a1.2 1.2 0 0 0-.85-.89a1.6 1.6 0 0 0-.48 0a1.48 1.48 0 0 0-1.45.95a2.7 2.7 0 0 0-.21 1.13a3 3 0 0 0 .2 1.14c.123.287.324.532.58.71c.262.168.569.252.88.24c.269.008.536-.047.78-.16a1.2 1.2 0 0 0 .52-.5a1.4 1.4 0 0 0 .16-.66h-1.4v-1h2.7zm2.47 2.54a.1.1 0 0 1 0 .07h-1.27V8.98h1.27a.1.1 0 0 1 0 .06zm5.34-5.18h-2.77a.07.07 0 0 0 0 .06v1.34a.2.2 0 0 0 0 .06h2.57v1.12h-2.57a.1.1 0 0 0 0 .06v2.5h-1.26V8.82a.07.07 0 0 1 .08-.08h3.95z"></svg:path>`,
})
export class MageGifFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGiftIcon],svg[mage-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.806 12v7.194A2.056 2.056 0 0 0 6.86 21.25h10.28a2.056 2.056 0 0 0 2.055-2.056V12m.513-5.139H4.292c-.852 0-1.542.69-1.542 1.542v2.055c0 .852.69 1.542 1.542 1.542h15.416c.852 0 1.542-.69 1.542-1.542V8.403c0-.852-.69-1.542-1.542-1.542m-12.785 0C6.018 5.71 5.833 2.75 8.917 2.75c3.494 0 3.032 4.111 3.083 4.111s-.36-4.111 3.083-4.111c3.084 0 2.878 2.96 1.974 4.111M12 21.25V6.861"></svg:path>`,
})
export class MageGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGiftFillIcon],svg[mage-gift-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.69 6.094h-1.47a3.56 3.56 0 0 0-.16-2.5a3 3 0 0 0-3-1.61A3.38 3.38 0 0 0 12 3.574a3.5 3.5 0 0 0-.47-.59a3.54 3.54 0 0 0-2.63-1a3.07 3.07 0 0 0-3 1.62a3.58 3.58 0 0 0-.16 2.49H4.29A2.3 2.3 0 0 0 2 8.384v2a2.31 2.31 0 0 0 2.06 2.29v6.55a2.82 2.82 0 0 0 2.8 2.81h10.28a2.82 2.82 0 0 0 2.8-2.81v-6.5a2.31 2.31 0 0 0 2.06-2.29v-2a2.3 2.3 0 0 0-2.31-2.34m-4.63-2.61a1.67 1.67 0 0 1 1.63.74a2.27 2.27 0 0 1-.1 1.84h-3.86c.22-2.58 1.78-2.58 2.31-2.58zm-7.83.78a1.67 1.67 0 0 1 1.67-.78a2.1 2.1 0 0 1 1.56.55a3.22 3.22 0 0 1 .75 2.06H7.32a2.3 2.3 0 0 1-.11-1.87zm-3.75 6.17v-2a.79.79 0 0 1 .79-.79h7v3.58h-7a.79.79 0 0 1-.81-.79zm17 0a.79.79 0 0 1-.79.8h-7v-3.64h7a.79.79 0 0 1 .79.79z"></svg:path>`,
})
export class MageGiftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGithubIcon],svg[mage-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.963 2.382C.554 2.621-1.82 17.93 8.852 21.602c.498.093.684-.219.684-.478v-1.68c-2.79.601-3.38-1.317-3.38-1.317a2.6 2.6 0 0 0-1.121-1.442c-.902-.612.072-.602.072-.602a2.07 2.07 0 0 1 1.536 1.038a2.167 2.167 0 0 0 2.924.819c.052-.5.275-.965.633-1.317c-2.23-.25-4.564-1.1-4.564-4.875a3.76 3.76 0 0 1 1.038-2.645a3.46 3.46 0 0 1 .103-2.634s.84-.26 2.76 1.037a9.6 9.6 0 0 1 5.02 0c1.908-1.276 2.748-1.038 2.748-1.038c.365.828.398 1.763.093 2.614a3.75 3.75 0 0 1 1.037 2.645c0 3.786-2.344 4.626-4.574 4.865c1.038.55.602 4.086.664 4.522c0 .259.176.57.695.477c10.642-3.64 8.152-18.97-3.257-19.209"></svg:path>`,
})
export class MageGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGlobeIcon],svg[mage-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M12 21.5c2.332 0 4.222-4.253 4.222-9.5S14.332 2.5 12 2.5S7.778 6.753 7.778 12s1.89 9.5 4.222 9.5M2.5 12h19"></svg:path></svg:g>`,
})
export class MageGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGlobeFillIcon],svg[mage-globe-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.478 21.439a10.1 10.1 0 0 1-6.504-8.573h4.32a17.54 17.54 0 0 0 2.184 8.573m7.505-8.573c-.182 5.465-2.174 9.208-3.973 9.208c-1.8 0-3.791-3.743-3.974-9.208zm6.043 0a10.06 10.06 0 0 1-6.514 8.573a17.43 17.43 0 0 0 2.194-8.573zm0-1.732h-4.32c.02-3-.735-5.952-2.194-8.573a10.05 10.05 0 0 1 6.514 8.573m-6.043 0H8.036c.183-5.475 2.174-9.208 3.974-9.208c1.799 0 3.781 3.733 3.973 9.208M8.478 2.61a17.5 17.5 0 0 0-2.184 8.572h-4.32A10.07 10.07 0 0 1 8.478 2.61"></svg:path>`,
})
export class MageGlobeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGoalsIcon],svg[mage-goals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.66 10.66A1.9 1.9 0 0 0 10.1 12a1.9 1.9 0 0 0 1.9 1.9a1.9 1.9 0 0 0 1.34-.56"></svg:path><svg:path d="M12 6.3a5.7 5.7 0 1 0 5.7 5.7"></svg:path><svg:path d="M12 2.5a9.5 9.5 0 1 0 9.5 9.5m-5.975-3.524L12.95 11.05"></svg:path><svg:path d="M20.94 5.844L17.7 6.3l.456-3.24a.19.19 0 0 0-.313-.161l-2.148 2.137a1.9 1.9 0 0 0-.513 1.72l.342 1.72l1.72.341a1.9 1.9 0 0 0 1.72-.513L21.1 6.157a.19.19 0 0 0-.162-.313"></svg:path></svg:g>`,
})
export class MageGoalsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGoalsFillIcon],svg[mage-goals-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.992 14.65a2.65 2.65 0 0 1-1.87-4.53a.753.753 0 1 1 1.06 1.07a1.13 1.13 0 0 0-.34.81a1.14 1.14 0 0 0 2 .81a.76.76 0 0 1 1.07 0a.77.77 0 0 1 0 1.07a2.67 2.67 0 0 1-1.92.77"></svg:path><svg:path fill="currentColor" d="M22.242 12a10.25 10.25 0 0 1-10.25 10.25a10.25 10.25 0 0 1 0-20.5a.75.75 0 0 1 .75.75v3.8a.76.76 0 0 1-.75.75a4.86 4.86 0 0 0-2.75.83a4.93 4.93 0 0 0-2.11 5.08a5 5 0 0 0 9.81-1a.74.74 0 0 1 .75-.75h3.8a.75.75 0 0 1 .75.79"></svg:path><svg:path fill="currentColor" d="M21.882 6.13a1.06 1.06 0 0 1-.23.53l-2.17 2.17a2.6 2.6 0 0 1-1.11.66a2.5 2.5 0 0 1-.76.11a3 3 0 0 1-.53 0l-1.33-.26l-2.28 2.29a.8.8 0 0 1-.53.22a.75.75 0 0 1-.53-.22a.74.74 0 0 1 0-1.06l2.29-2.3l-.27-1.32a2.76 2.76 0 0 1 .06-1.28a2.6 2.6 0 0 1 .66-1.11l2.15-2.15a1 1 0 0 1 .53-.25a.9.9 0 0 1 .54.09a1 1 0 0 1 .4.37a1 1 0 0 1 .12.58l-.32 2.26l2.25-.31a.94.94 0 0 1 .93.51a1 1 0 0 1 .13.47"></svg:path>`,
})
export class MageGoalsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageGoogleIcon],svg[mage-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.999 12.044a9.8 9.8 0 0 1-1.323 5.002a9.8 9.8 0 0 1-3.682 3.628a9.97 9.97 0 0 1-4.951 1.348a10 10 0 0 1-4.972-1.36a10.03 10.03 0 0 1-3.64-3.656A10 10 0 0 1 2 12.044c0-1.758.465-3.485 1.345-5.006a10.03 10.03 0 0 1 3.64-3.656a10 10 0 0 1 4.971-1.36c2.407.01 4.73.886 6.545 2.47a.657.657 0 0 1 0 .96l-1.852 1.856a.656.656 0 0 1-.872 0a6.04 6.04 0 0 0-3.734-1.413a6.04 6.04 0 0 0-5.264 3.053a6.14 6.14 0 0 0-.872 3.096a6.1 6.1 0 0 0 .829 3.042a6.04 6.04 0 0 0 5.306 3.01a6.06 6.06 0 0 0 3.036-.82a6.25 6.25 0 0 0 2.605-3.075h-4.564a.645.645 0 0 1-.646-.658v-2.578a.636.636 0 0 1 .646-.647h8.148a.645.645 0 0 1 .646.539q.096.59.086 1.187"></svg:path>`,
})
export class MageGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHandicappedIcon],svg[mage-handicapped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.572 12.51h2.125a2.36 2.36 0 0 1 1.527.5c.432.345.731.829.848 1.37l.898 4.89c.04.174.04.355 0 .53a1.1 1.1 0 0 1-.24.47a1.1 1.1 0 0 1-.418.32c-.163.076-.34.114-.52.11a1.18 1.18 0 0 1-.758-.25a1.12 1.12 0 0 1-.429-.67l-.698-4.08H15.13"></svg:path><svg:path d="M8.135 10.5c-6.127 1.55-5.269 10.88 1.407 11c4.62.06 6.986-5.41 4.6-8.81"></svg:path><svg:path d="M14.332 8.71V13a5.54 5.54 0 0 0-3.183-2.49v4.56a1.194 1.194 0 0 1-1.188 1.2a1.196 1.196 0 0 1-1.197-1.2l-.599-4.38a2 2 0 0 1 .828-1.88l1.597-1.13c1.247-.96 3.742-.82 3.742 1.03"></svg:path><svg:path d="M13.195 7.06a2.27 2.27 0 0 0 2.102-1.408a2.28 2.28 0 0 0-.494-2.484A2.274 2.274 0 0 0 10.92 4.78c0 .604.24 1.184.667 1.612a2.27 2.27 0 0 0 1.608.668"></svg:path></svg:g>`,
})
export class MageHandicappedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHandicappedFillIcon],svg[mage-handicapped-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.726 19.115l-.909-4.912a3.2 3.2 0 0 0-1.118-1.797a3.13 3.13 0 0 0-1.997-.66h-1.637V8.703a2.3 2.3 0 0 0-.39-1.308a.8.8 0 0 0 .18-.1a3 3 0 0 0 1.288-3.105a3.1 3.1 0 0 0-.829-1.548a3.05 3.05 0 0 0-1.547-.828a2.995 2.995 0 0 0-3.605 2.995c-.005.69.228 1.36.66 1.897q-.365.15-.68.39L8.555 8.221A2.72 2.72 0 0 0 7.447 9.95a6.34 6.34 0 0 0 2.076 12.3h.08a6.06 6.06 0 0 0 5.422-3.325a6.5 6.5 0 0 0 .748-2.466h.48l.599 3.485c.092.438.34.829.699 1.098c.326.26.73.404 1.148.41c.29.014.577-.044.838-.17c.269-.115.505-.293.69-.52a1.86 1.86 0 0 0 .399-.788c.092-.277.126-.569.1-.859m-6.99-.918a4.54 4.54 0 0 1-4.093 2.525h-.07a4.852 4.852 0 0 1-1.996-9.235l.489 3.624c.02.495.222.965.569 1.318a1.94 1.94 0 0 0 1.388.57a1.9 1.9 0 0 0 1.358-.57c.36-.368.564-.862.569-1.377v-3.425a4.8 4.8 0 0 1 1.777 1.737a4.99 4.99 0 0 1 .02 4.833z"></svg:path>`,
})
export class MageHandicappedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHashIcon],svg[mage-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.886 21L9.443 3m5.114 18l2.557-18M3 8.855h18M3 15.247h18"></svg:path>`,
})
export class MageHashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeadphoneMuteIcon],svg[mage-headphone-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.518 20.537a2.63 2.63 0 0 1-.768-1.866v-2.604a2.644 2.644 0 0 1 5.239 0m7.982 2.604a2.645 2.645 0 0 0 5.279 0v-2.604a2.644 2.644 0 0 0-5.279 0z"></svg:path><svg:path d="M2.75 18.671v-6.595A9.23 9.23 0 0 1 18.506 5.55m1.746 2.305a9.34 9.34 0 0 1 .998 4.22v6.596M3 21.056L20.96 3.095"></svg:path></svg:g>`,
})
export class MageHeadphoneMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeadphoneMuteFillIcon],svg[mage-headphone-mute-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.488 2.556a.75.75 0 0 0-1.06 0l-1.95 1.95a10 10 0 0 0-10.32-1.66a10 10 0 0 0-6.16 9.22v6.6a3.5 3.5 0 0 0 .51 1.81a.74.74 0 0 0 0 1.06a.7.7 0 0 0 .53.22a.74.74 0 0 0 .53-.22l.52-.52l4.41-4.41l.09-.09l10.49-10.44l2.46-2.46a.75.75 0 0 0-.05-1.06m-13.2 12.14a3.4 3.4 0 0 0-.69-.83a3.47 3.47 0 0 0-4.1-.26v-1.53a8.48 8.48 0 0 1 13.92-6.5zm13.71-2.62v6.6q.008.075 0 .15a3.38 3.38 0 0 1-3.37 3.08a3.39 3.39 0 0 1-3.39-3.19v-2.64a3.4 3.4 0 0 1 1.06-2.31a3.49 3.49 0 0 1 4.22-.33v-1.36a8.7 8.7 0 0 0-.92-3.88a.75.75 0 0 1 .33-1a.77.77 0 0 1 1 .33a10.2 10.2 0 0 1 1.07 4.55"></svg:path>`,
})
export class MageHeadphoneMuteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHealthCircleIcon],svg[mage-health-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.5 12.89H7l3-5l4 9l3-5h4.43"></svg:path><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path></svg:g>`,
})
export class MageHealthCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHealthCircleFillIcon],svg[mage-health-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.24 11.33a10.2 10.2 0 0 0-3.343-6.93a10.28 10.28 0 0 0-7.247-2.644a10.27 10.27 0 0 0-7.047 3.138a10.2 10.2 0 0 0-2.853 7.143v.23q.017.727.14 1.444a10.2 10.2 0 0 0 3.72 6.308a10.283 10.283 0 0 0 13.691-.804a10.2 10.2 0 0 0 2.949-6.7v-.468c0-.16 0-.488-.01-.717m-1.53 1.594h-3.142l-2.702 4.504a1 1 0 0 1-.86.478h-.06a1 1 0 0 1-.86-.588l-3.212-7.214l-2 3.338a1 1 0 0 1-.861.479H3.47a8.4 8.4 0 0 1-.21-1.884v-.11h3.182l2.71-4.493a1 1 0 0 1 .921-.478a1 1 0 0 1 .85.588l3.222 7.214l2.001-3.338a1 1 0 0 1 .86-.489h3.682q.075.552.07 1.106a7 7 0 0 1-.05.887"></svg:path>`,
})
export class MageHealthCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHealthSquareIcon],svg[mage-health-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 12.5H7l3-5l4 9l3-5h4.25"></svg:path></svg:g>`,
})
export class MageHealthSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHealthSquareFillIcon],svg[mage-health-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.75 6.75 0 0 0 8.75 22h6.5A6.75 6.75 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m5.25 10.5h-2.94l-2.7 4.52a1 1 0 0 1-.86.48h-.06a1 1 0 0 1-.86-.59L9.87 9.67l-2 3.35a1 1 0 0 1-.86.48h-3.5v-2h2.93l2.71-4.51a1 1 0 0 1 1.77.11l3.22 7.24l2-3.35a1 1 0 0 1 .86-.49h3.5z"></svg:path>`,
})
export class MageHealthSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeaphoneIcon],svg[mage-heaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.036 15.964a2.643 2.643 0 1 0-5.286 0v2.643a2.643 2.643 0 0 0 5.286 0zm7.928 2.643a2.643 2.643 0 1 0 5.286 0v-2.643a2.643 2.643 0 0 0-5.286 0z"></svg:path><svg:path d="M21.25 18.607V12a9.25 9.25 0 1 0-18.5 0v6.607"></svg:path></svg:g>`,
})
export class MageHeaphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeaphoneFillIcon],svg[mage-heaphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.998 11.908v6.6a3.4 3.4 0 1 1-6.79 0v-2.64a3.39 3.39 0 0 1 5.29-2.81v-1.15a8.5 8.5 0 1 0-17 0v1.15a3.33 3.33 0 0 1 1.89-.58a3.39 3.39 0 0 1 3.39 3.39v2.64a3.39 3.39 0 1 1-6.78 0v-6.6a10 10 0 0 1 20 0"></svg:path>`,
})
export class MageHeaphoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeartIcon],svg[mage-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 7.23c-1.733-3.924-5.764-4.273-7.641-2.562c-1.529 1.373-2.263 4.665-.867 7.695C5.9 17.573 12 20.309 12 20.309s6.101-2.736 8.508-7.946c1.396-3.03.662-6.322-.867-7.695C17.764 2.957 13.733 3.306 12 7.229"></svg:path>`,
})
export class MageHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeartFillIcon],svg[mage-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.19 12.683c-2.5 5.41-8.62 8.2-8.88 8.32a.85.85 0 0 1-.62 0c-.25-.12-6.38-2.91-8.88-8.32c-1.55-3.37-.69-7 1-8.56a4.93 4.93 0 0 1 4.36-1.05a6.16 6.16 0 0 1 3.78 2.62a6.15 6.15 0 0 1 3.79-2.62a4.93 4.93 0 0 1 4.36 1.05c1.78 1.56 2.65 5.19 1.09 8.56"></svg:path>`,
})
export class MageHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeartHealthIcon],svg[mage-heart-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 7.194c-1.73-3.92-5.76-4.23-7.64-2.56c-1.53 1.33-2.26 4.66-.87 7.69c2.41 5.21 8.51 8 8.51 8s6.1-2.74 8.51-7.95c1.39-3 .66-6.32-.87-7.69c-1.88-1.72-5.91-1.41-7.64 2.51"></svg:path><svg:path d="M3.34 11.964H8l3 3l3-6l2 3h4.66"></svg:path></svg:g>`,
})
export class MageHeartHealthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeartHealthFillIcon],svg[mage-heart-health-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.13 4.155a5 5 0 0 0-4.39-1.07A6 6 0 0 0 12 5.665a6 6 0 0 0-3.72-2.58a5.09 5.09 0 0 0-4.4 1c-1.58 1.38-2.45 4.44-1.46 7.54q.168.514.4 1q.06.113.11.23c2.57 5.24 8.51 8 8.77 8.13a.7.7 0 0 0 .31.07a.7.7 0 0 0 .31-.07c.25-.11 6.25-2.85 8.8-8.15l.08-.17q.237-.51.41-1.05c.94-3 .08-6.06-1.48-7.46m-.31 7.93q-.21.471-.48.91h-3.31a1 1 0 0 1-.83-.45l-1.05-1.56l-2.23 4.46a1 1 0 0 1-.73.54h-.16a1 1 0 0 1-.71-.3l-2.71-2.7H4.7q-.276-.486-.5-1a6.3 6.3 0 0 1-.38-1h4.21a1 1 0 0 1 .71.29l2 2l2.38-4.76a1 1 0 0 1 .84-.55a1 1 0 0 1 .89.44l1.7 2.56h3.7q-.164.58-.43 1.12"></svg:path>`,
})
export class MageHeartHealthFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeartSquareIcon],svg[mage-heart-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9.402c-1.11-2.513-3.69-2.736-4.893-1.64c-.978.879-1.448 2.987-.555 4.927C8.094 16.025 12 17.777 12 17.777s3.907-1.752 5.448-5.088c.894-1.94.424-4.048-.555-4.928C15.691 6.666 13.11 6.89 12 9.401"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageHeartSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHeartSquareFillIcon],svg[mage-heart-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m1.65 11a10.12 10.12 0 0 1-4.58 4.29a.77.77 0 0 1-.64 0A10.12 10.12 0 0 1 7.1 13a4.16 4.16 0 0 1 .62-4.69a2.8 2.8 0 0 1 2.49-.61a3.25 3.25 0 0 1 1.79 1a3.28 3.28 0 0 1 1.79-1a2.83 2.83 0 0 1 2.5.61a4.18 4.18 0 0 1 .61 4.65z"></svg:path>`,
})
export class MageHeartSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeIcon],svg[mage-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251"></svg:path>`,
})
export class MageHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHome2Icon],svg[mage-home-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251M8.636 16.459h6.685"></svg:path>`,
})
export class MageHome2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHome2FillIcon],svg[mage-home-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.205 7.765a2.93 2.93 0 0 0-1.16-1.28l-6.47-4a3 3 0 0 0-3.16 0l-6.47 4a3 3 0 0 0-1.12 1.29a2.9 2.9 0 0 0-.24 1.7l1.68 10a2.94 2.94 0 0 0 1 1.79a3 3 0 0 0 1.9.7h9.62a3 3 0 0 0 1.94-.7a2.9 2.9 0 0 0 1-1.79l1.68-10a3 3 0 0 0-.2-1.71m-5.86 9.7h-6.69a1 1 0 0 1 0-2h6.69a1 1 0 1 1 0 2"></svg:path>`,
})
export class MageHome2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHome3Icon],svg[mage-home-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.643 7.116L13.162 3.09a2.23 2.23 0 0 0-2.365 0L4.316 7.116a2.23 2.23 0 0 0-1.015 2.231l1.673 10.04a2.23 2.23 0 0 0 2.231 1.863H16.8a2.23 2.23 0 0 0 2.23-1.863l1.674-10.04a2.23 2.23 0 0 0-1.06-2.23"></svg:path><svg:path d="M13.653 10.14h-3.347c-.924 0-1.673.748-1.673 1.672v3.347c0 .924.75 1.673 1.673 1.673h3.347c.924 0 1.673-.749 1.673-1.673v-3.347c0-.924-.749-1.673-1.673-1.673"></svg:path></svg:g>`,
})
export class MageHome3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHome3FillIcon],svg[mage-home-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.176 7.755a2.94 2.94 0 0 0-1.15-1.27l-6.47-4a3 3 0 0 0-3.16 0l-6.49 4a2.93 2.93 0 0 0-1.12 1.29a3 3 0 0 0-.23 1.7l1.67 10a3 3 0 0 0 2.93 2.49h9.63a3.2 3.2 0 0 0 2-.7a3 3 0 0 0 1-1.79l1.67-10.06a2.9 2.9 0 0 0-.28-1.66m-6 7.08a1.92 1.92 0 0 1-1.92 1.92h-2.67a1.92 1.92 0 0 1-1.92-1.92v-2.67a1.92 1.92 0 0 1 1.92-1.92h2.67a1.92 1.92 0 0 1 1.92 1.92z"></svg:path>`,
})
export class MageHome3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHome4Icon],svg[mage-home-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.632 7.106l-6.466-4.018a2.23 2.23 0 0 0-2.359 0L4.341 7.106A2.23 2.23 0 0 0 3.33 9.33l1.669 10.016a2.225 2.225 0 0 0 2.226 1.858H9.76v-3.65a1.56 1.56 0 0 1 1.558-1.558h1.335a1.56 1.56 0 0 1 1.558 1.558v3.695h2.56a2.226 2.226 0 0 0 2.226-1.859l1.669-10.015a2.23 2.23 0 0 0-1.035-2.27M7.535 10.878h8.903"></svg:path>`,
})
export class MageHome4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHome4FillIcon],svg[mage-home-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.188 7.768a3 3 0 0 0-1.15-1.31l-6.47-4a3 3 0 0 0-3.15 0l-6.47 4a3 3 0 0 0-1.12 1.28a3 3 0 0 0-.23 1.7l1.67 10a3 3 0 0 0 1 1.79a2.92 2.92 0 0 0 1.93.69h2.54a.74.74 0 0 0 .75-.75v-3.65a.82.82 0 0 1 .81-.81h1.33a.84.84 0 0 1 .58.24a.8.8 0 0 1 .23.57v3.72a.76.76 0 0 0 .75.75h2.59a3 3 0 0 0 2.94-2.49l1.67-10a2.94 2.94 0 0 0-.2-1.73m-4.74 4.1h-8.86a1 1 0 1 1 0-2h8.9a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageHome4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeCheckIcon],svg[mage-home-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251"></svg:path><svg:path d="m8.175 12.908l2.153 2.153a.814.814 0 0 0 1.158 0l4.34-4.339"></svg:path></svg:g>`,
})
export class MageHomeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeCheckFillIcon],svg[mage-home-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.179 7.76a3.06 3.06 0 0 0-1.16-1.28l-6.47-4a3 3 0 0 0-3.16 0l-6.47 4a3 3 0 0 0-1.36 3l1.67 10a3 3 0 0 0 2.93 2.49h9.61a3.24 3.24 0 0 0 2-.7a2.94 2.94 0 0 0 1-1.79l1.68-10a3 3 0 0 0-.27-1.72m-4.65 3.68l-4.34 4.33a1.81 1.81 0 0 1-2 .4a1.8 1.8 0 0 1-.59-.4l-2.15-2.15a1.001 1.001 0 1 1 1.41-1.41l2 2l4.21-4.21a1.004 1.004 0 0 1 1.42 1.42z"></svg:path>`,
})
export class MageHomeCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeCrossIcon],svg[mage-home-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251"></svg:path><svg:path stroke-miterlimit="10" d="m15.238 10.186l-6.475 6.475m0-6.461l6.475 6.475"></svg:path></svg:g>`,
})
export class MageHomeCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeCrossFillIcon],svg[mage-home-cross-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.187 7.763a2.93 2.93 0 0 0-1.16-1.28l-6.47-4a3 3 0 0 0-3.15 0l-6.48 4a3 3 0 0 0-1.12 1.29a2.9 2.9 0 0 0-.23 1.7l1.67 10a2.9 2.9 0 0 0 1 1.79a3 3 0 0 0 1.9.7h9.61a3.2 3.2 0 0 0 2-.7a3 3 0 0 0 1-1.79l1.67-10a3 3 0 0 0-.24-1.71m-5.24 8.21a1.002 1.002 0 0 1-.701 1.71a1 1 0 0 1-.709-.29l-2.54-2.54l-2.52 2.52a1.001 1.001 0 1 1-1.42-1.41l2.53-2.52l-2.53-2.53a1 1 0 1 1 1.42-1.41l2.52 2.52l2.54-2.54a1 1 0 1 1 1.41 1.42l-2.55 2.54z"></svg:path>`,
})
export class MageHomeCrossFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeFillIcon],svg[mage-home-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.444 9.473l-1.67 10a3 3 0 0 1-1 1.79a3.2 3.2 0 0 1-2 .7h-9.61a3 3 0 0 1-2.93-2.49l-1.67-10a3 3 0 0 1 .23-1.7a3 3 0 0 1 1.12-1.29l6.48-4a3 3 0 0 1 3.15 0l6.47 4c.507.3.911.747 1.16 1.28a3 3 0 0 1 .27 1.71"></svg:path>`,
})
export class MageHomeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeHeartIcon],svg[mage-home-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251"></svg:path><svg:path d="M12 10.818c-.894-2.024-2.973-2.203-3.94-1.32c-.789.707-1.168 2.405-.448 3.968C8.854 16.153 12 17.564 12 17.564s3.146-1.411 4.388-4.098c.72-1.563.341-3.26-.447-3.969c-.968-.882-3.047-.703-3.941 1.321"></svg:path></svg:g>`,
})
export class MageHomeHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeHeartFillIcon],svg[mage-home-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.184 7.765a2.93 2.93 0 0 0-1.16-1.28l-6.46-4a3 3 0 0 0-3.16 0l-6.48 4a3 3 0 0 0-1.12 1.29a3 3 0 0 0-.23 1.7l1.67 10a3 3 0 0 0 2.93 2.49h9.63a3.17 3.17 0 0 0 1.95-.7a3 3 0 0 0 1-1.79l1.67-10a2.9 2.9 0 0 0-.24-1.71m-4.73 6a9.18 9.18 0 0 1-4.18 3.91a.54.54 0 0 1-.27.07a.5.5 0 0 1-.27-.07a9.13 9.13 0 0 1-4.18-3.91a3.79 3.79 0 0 1 .55-4.25a2.52 2.52 0 0 1 2.25-.55a3 3 0 0 1 1.65 1a3 3 0 0 1 1.65-1a2.52 2.52 0 0 1 2.25.55a3.82 3.82 0 0 1 .55 4.22z"></svg:path>`,
})
export class MageHomeHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomePlusIcon],svg[mage-home-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251"></svg:path><svg:path stroke-miterlimit="10" d="M11.992 9.14v7.666m-3.825-3.825h7.667"></svg:path></svg:g>`,
})
export class MageHomePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomePlusFillIcon],svg[mage-home-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.201 7.76a3 3 0 0 0-1.17-1.28l-6.46-4a3 3 0 0 0-3.16 0l-6.47 4a3 3 0 0 0-1.36 3l1.67 10a3 3 0 0 0 2.93 2.49h9.61a3.1 3.1 0 0 0 1.95-.7a3 3 0 0 0 1-1.79l1.67-10a3 3 0 0 0-.21-1.72m-5.36 6.23h-2.84v2.82a1 1 0 0 1-2 0v-2.82h-2.8a1 1 0 0 1 0-2h2.82V9.15a1 1 0 0 1 2 0v2.84h2.84a1 1 0 0 1 0 2z"></svg:path>`,
})
export class MageHomePlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeSecurityLockIcon],svg[mage-home-security-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m19.633 7.11l-6.474-4.02a2.23 2.23 0 0 0-2.362 0L4.324 7.133A2.23 2.23 0 0 0 3.31 9.362l1.67 10.027a2.23 2.23 0 0 0 2.228 1.86h9.582a2.23 2.23 0 0 0 2.229-1.86l1.67-10.027a2.23 2.23 0 0 0-1.058-2.251"></svg:path><svg:path d="M14.611 11.538H9.39c-.721 0-1.306.54-1.306 1.208v3.623c0 .667.585 1.208 1.306 1.208h5.222c.721 0 1.306-.541 1.306-1.208v-3.623c0-.667-.585-1.208-1.306-1.208"></svg:path><svg:path d="M9.585 11.538v-1.207a2.415 2.415 0 1 1 4.83 0v1.207"></svg:path></svg:g>`,
})
export class MageHomeSecurityLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHomeSecurityLockFillIcon],svg[mage-home-security-lock-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.183 7.765a2.93 2.93 0 0 0-1.16-1.28l-6.47-4a3 3 0 0 0-3.16 0l-6.47 4a3 3 0 0 0-1.12 1.29a2.9 2.9 0 0 0-.24 1.7l1.68 10a2.94 2.94 0 0 0 1 1.79a3 3 0 0 0 1.9.7h9.62a3.12 3.12 0 0 0 2-.7a2.94 2.94 0 0 0 1-1.79l1.68-10a3 3 0 0 0-.26-1.71m-4.73 8.49a1.92 1.92 0 0 1-2 1.87h-5a1.92 1.92 0 0 1-2-1.87v-3.5a1.89 1.89 0 0 1 1.43-1.8v-.5a3 3 0 0 1 .89-2.14a3.07 3.07 0 0 1 4.27 0a3 3 0 0 1 .89 2.14v.5a1.89 1.89 0 0 1 1.43 1.8z"></svg:path><svg:path fill="currentColor" d="M13.613 10.455v.43h-3.19v-.43a1.6 1.6 0 0 1 .47-1.13a1.63 1.63 0 0 1 2.25 0a1.6 1.6 0 0 1 .47 1.13"></svg:path>`,
})
export class MageHomeSecurityLockFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHospitalCircleIcon],svg[mage-hospital-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 21.5a9.5 9.5 0 1 0 0-19a9.5 9.5 0 0 0 0 19"></svg:path><svg:path d="M16.763 10.942v2.116a.53.53 0 0 1-.53.53h-2.645v2.645a.53.53 0 0 1-.53.53h-2.116a.53.53 0 0 1-.53-.53v-2.645H7.768a.53.53 0 0 1-.53-.53v-2.116a.53.53 0 0 1 .53-.53h2.645V7.768a.53.53 0 0 1 .53-.53h2.116a.53.53 0 0 1 .53.53v2.645h2.645a.53.53 0 0 1 .53.53"></svg:path></svg:g>`,
})
export class MageHospitalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHospitalCircleFillIcon],svg[mage-hospital-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.75A10.25 10.25 0 1 0 22.25 12A10.26 10.26 0 0 0 12 1.75m5.51 11.31a1.28 1.28 0 0 1-1.28 1.28h-1.89v1.9a1.3 1.3 0 0 1-1.28 1.28h-2.12a1.27 1.27 0 0 1-.9-.38a1.3 1.3 0 0 1-.38-.9v-1.9H7.77a1.27 1.27 0 0 1-.91-.37a1.3 1.3 0 0 1-.37-.91v-2.11a1.3 1.3 0 0 1 .37-.91a1.27 1.27 0 0 1 .91-.37h1.89v-1.9a1.32 1.32 0 0 1 .37-.9a1.27 1.27 0 0 1 .91-.38H13a1.26 1.26 0 0 1 .9.37c.24.242.377.569.38.91v1.9h1.89c.34 0 .667.132.91.37c.239.243.372.57.37.91z"></svg:path><svg:path fill="currentColor" d="M16 11.165v1.67h-2.42a.75.75 0 0 0-.75.75v2.43h-1.68v-2.43a.76.76 0 0 0-.75-.75H8v-1.67h2.42a.76.76 0 0 0 .75-.75v-2.43h1.68v2.43a.75.75 0 0 0 .75.75z"></svg:path>`,
})
export class MageHospitalCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHospitalPlusIcon],svg[mage-hospital-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 9.944v4.112a1.03 1.03 0 0 1-1.028 1.027h-5.139v5.14a1.03 1.03 0 0 1-1.027 1.027H9.944a1.03 1.03 0 0 1-1.027-1.028v-5.139h-5.14a1.03 1.03 0 0 1-1.027-1.027V9.944a1.03 1.03 0 0 1 1.028-1.027h5.139v-5.14A1.03 1.03 0 0 1 9.944 2.75h4.112a1.03 1.03 0 0 1 1.027 1.028v5.139h5.14a1.03 1.03 0 0 1 1.027 1.027"></svg:path>`,
})
export class MageHospitalPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHospitalPlusFillIcon],svg[mage-hospital-plus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9.95v4.11a1.78 1.78 0 0 1-1.78 1.78h-4.39v4.39a1.73 1.73 0 0 1-.52 1.25a1.8 1.8 0 0 1-1.26.52H9.94a1.8 1.8 0 0 1-1.26-.52a1.8 1.8 0 0 1-.52-1.25v-4.39H3.78A1.78 1.78 0 0 1 2 14.06V9.95a1.78 1.78 0 0 1 1.78-1.78h4.38V3.78a1.8 1.8 0 0 1 1.103-1.646A1.8 1.8 0 0 1 9.94 2H14a1.8 1.8 0 0 1 1.26.52a1.77 1.77 0 0 1 .52 1.26v4.39h4.39c.472.003.924.19 1.26.52A1.78 1.78 0 0 1 22 9.95"></svg:path>`,
})
export class MageHospitalPlusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mageHospitalShieldIcon],svg[mage-hospital-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.045 10.45v1.797a.45.45 0 0 1-.45.45h-2.247v2.247a.45.45 0 0 1-.45.45h-1.797a.45.45 0 0 1-.45-.45v-2.247H8.406a.45.45 0 0 1-.45-.45V10.45a.45.45 0 0 1 .45-.45h2.247V7.753a.45.45 0 0 1 .45-.449H12.9a.45.45 0 0 1 .45.45V10h2.246a.45.45 0 0 1 .45.45"></svg:path><svg:path d="M20.672 11.89V6.61a1.93 1.93 0 0 0-1.32-1.831L14.438 3.14a7.8 7.8 0 0 0-4.876 0L4.648 4.778a1.93 1.93 0 0 0-1.32 1.83v5.28a7.71 7.71 0 0 0 3.603 6.524l4.048 2.544a1.93 1.93 0 0 0 2.042 0l4.047-2.544a7.71 7.71 0 0 0 3.604-6.523"></svg:path></svg:g>`,
})
export class MageHospitalShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
