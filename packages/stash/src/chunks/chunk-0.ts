import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashAngleDownIcon],svg[stash-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.964 10.164a.9.9 0 0 1 1.273 0L12 11.927l1.764-1.763a.9.9 0 0 1 1.273 1.272l-2.4 2.4a.9.9 0 0 1-1.273 0l-2.4-2.4a.9.9 0 0 1 0-1.272"></svg:path>`,
})
export class StashAngleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAirplaneDuotoneIcon],svg[stash-airplane-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.633 2.276c-.726-.117-1.501.127-2.174.371c-.972.354-2.07.93-2.646 1.506l-1.61 1.703l-5.334-2.02a1.8 1.8 0 0 0-1.93.354L5.46 5.587c-.34.321-.3.89.083 1.16l4.696 3.303l-.862.912c-.52.52-.996 1.028-1.355 1.522a4.7 4.7 0 0 0-.432.707l-2.139-.844c-.66-.26-1.393-.07-1.886.397l-1.08 1.02a.757.757 0 0 0 .048 1.131l3.651 2.922l2.922 3.651c.28.35.822.373 1.13.047l1.022-1.08c.465-.492.657-1.226.396-1.885l-.844-2.138c.247-.12.483-.27.707-.433c.494-.359 1.002-.835 1.522-1.354l.912-.863l3.304 4.696a.758.758 0 0 0 1.159.083l1.397-1.48a1.8 1.8 0 0 0 .353-1.93l-2.019-5.334l1.703-1.61c.577-.577 1.152-1.674 1.506-2.646c.244-.672.488-1.448.371-2.174a1.27 1.27 0 0 0-1.09-1.091" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M20.633 2.276c.224.035.51.125.738.353c.229.229.318.514.353.738c.037.23.03.473.005.7c-.052.458-.195.976-.376 1.474c-.354.972-.93 2.07-1.506 2.646l-.015.015l-1.688 1.595l2.02 5.334a1.8 1.8 0 0 1-.354 1.93l-1.397 1.48a.757.757 0 0 1-1.16-.083l-3.303-4.696l-.912.863c-.52.519-1.028.995-1.522 1.354c-.224.163-.46.313-.707.433l.844 2.138c.26.66.07 1.393-.396 1.886l-1.022 1.08a.757.757 0 0 1-1.13-.047l-2.922-3.652l-3.651-2.922a.757.757 0 0 1-.047-1.13l1.08-1.021c.492-.466 1.226-.658 1.885-.397l2.139.845c.12-.248.27-.484.432-.708c.359-.494.835-1.002 1.355-1.522l.862-.912l-4.696-3.304a.757.757 0 0 1-.083-1.159l1.48-1.397a1.8 1.8 0 0 1 1.93-.353l5.334 2.019l1.595-1.688l.015-.015C16.39 3.576 17.487 3 18.46 2.647c.498-.181 1.016-.324 1.474-.376c.227-.025.47-.032.7.005M16.88 5.207l-1.93 2.042a.75.75 0 0 1-.811.187L8.325 5.235l-.03-.012a.3.3 0 0 0-.326.057l-.813.768l4.654 3.274c.368.26.423.801.113 1.129L10.458 12l-.014.014c-.513.513-.922.954-1.21 1.35c-.291.403-.406.688-.425.891a.757.757 0 0 1-1.022.627l-2.888-1.141c-.262-.104-.6.371-.757.52l3.043 2.436a1 1 0 0 1 .118.117l2.435 3.043c.149-.157.624-.495.52-.757l-1.14-2.887a.757.757 0 0 1 .626-1.023c.203-.019.488-.134.89-.426c.397-.287.838-.696 1.35-1.209l.016-.014l1.55-1.465a.758.758 0 0 1 1.128.113l3.274 4.654l.768-.813a.3.3 0 0 0 .058-.325l-.013-.03l-2.2-5.815a.75.75 0 0 1 .186-.81l2.042-1.931c.347-.351.826-1.2 1.15-2.092c.148-.405.292-.842.306-1.277c-.435.014-.872.158-1.277.306c-.891.324-1.74.803-2.092 1.15" clip-rule="evenodd"></svg:path>`,
})
export class StashAirplaneDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleDownDuotoneIcon],svg[stash-angle-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.964 10.164a.9.9 0 0 1 1.273 0L12 11.927l1.764-1.763a.9.9 0 0 1 1.273 1.272l-2.4 2.4a.9.9 0 0 1-1.273 0l-2.4-2.4a.9.9 0 0 1 0-1.272"></svg:path>`,
})
export class StashAngleDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAirplaneSolidIcon],svg[stash-airplane-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.633 2.276c-.726-.117-1.501.127-2.174.371c-.972.354-2.07.93-2.646 1.506l-1.61 1.703l-5.334-2.02a1.8 1.8 0 0 0-1.93.354L5.46 5.587c-.34.321-.3.89.083 1.16l4.696 3.303l-.862.912c-.52.52-.996 1.028-1.355 1.522a4.7 4.7 0 0 0-.432.707l-2.139-.844c-.66-.26-1.393-.07-1.886.397l-1.08 1.02a.757.757 0 0 0 .048 1.131l3.651 2.922l2.922 3.651c.28.35.822.373 1.13.047l1.022-1.08c.465-.492.657-1.226.396-1.885l-.844-2.138c.247-.12.483-.27.707-.433c.494-.359 1.002-.835 1.522-1.354l.912-.863l3.304 4.696a.758.758 0 0 0 1.159.083l1.397-1.48a1.8 1.8 0 0 0 .353-1.93l-2.019-5.334l1.703-1.61c.577-.577 1.152-1.674 1.506-2.646c.244-.672.488-1.448.371-2.174a1.27 1.27 0 0 0-1.09-1.091"></svg:path>`,
})
export class StashAirplaneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleLeftDuotoneIcon],svg[stash-angle-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"></svg:path>`,
})
export class StashAngleLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAirplaneIcon],svg[stash-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.633 2.276c.224.035.51.125.738.353c.229.229.318.514.353.738c.037.23.03.473.005.7c-.052.458-.195.976-.376 1.474c-.354.972-.93 2.07-1.506 2.646l-.015.015l-1.688 1.595l2.02 5.334a1.8 1.8 0 0 1-.354 1.93l-1.397 1.48a.757.757 0 0 1-1.16-.083l-3.303-4.696l-.912.863c-.52.519-1.028.995-1.522 1.354c-.224.163-.46.313-.707.433l.844 2.138c.26.66.07 1.393-.396 1.886l-1.022 1.08a.757.757 0 0 1-1.13-.047l-2.922-3.652l-3.651-2.922a.757.757 0 0 1-.047-1.13l1.08-1.021c.492-.466 1.226-.658 1.885-.397l2.139.845c.12-.248.27-.484.432-.708c.359-.494.835-1.002 1.355-1.522l.862-.912l-4.696-3.304a.757.757 0 0 1-.083-1.159l1.48-1.397a1.8 1.8 0 0 1 1.93-.353l5.334 2.019l1.595-1.688l.015-.015C16.39 3.576 17.487 3 18.46 2.647c.498-.181 1.016-.324 1.474-.376c.227-.025.47-.032.7.005M16.88 5.207l-1.93 2.042a.75.75 0 0 1-.811.187L8.325 5.235l-.03-.012a.3.3 0 0 0-.326.057l-.813.768l4.654 3.274c.368.26.423.801.113 1.129L10.458 12l-.014.014c-.513.513-.922.954-1.21 1.35c-.291.403-.406.688-.425.891a.757.757 0 0 1-1.022.627l-2.888-1.141c-.262-.104-.6.371-.757.52l3.043 2.436a1 1 0 0 1 .118.117l2.435 3.043c.149-.157.624-.495.52-.757l-1.14-2.887a.757.757 0 0 1 .626-1.023c.203-.019.488-.134.89-.426c.397-.287.838-.696 1.35-1.209l.016-.014l1.55-1.465a.758.758 0 0 1 1.128.113l3.274 4.654l.768-.813a.3.3 0 0 0 .058-.325l-.013-.03l-2.2-5.815a.75.75 0 0 1 .186-.81l2.042-1.931c.347-.351.826-1.2 1.15-2.092c.148-.405.292-.842.306-1.277c-.435.014-.872.158-1.277.306c-.891.324-1.74.803-2.092 1.15" clip-rule="evenodd"></svg:path>`,
})
export class StashAirplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAirplaneLightIcon],svg[stash-airplane-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.194 2.806c.319.318.334.814.286 1.233c-.049.431-.185.929-.362 1.417c-.35.96-.91 2.016-1.448 2.554l-.01.01l-1.809 1.71l2.08 5.494a1.55 1.55 0 0 1-.303 1.665l-1.397 1.48a.505.505 0 0 1-.773-.055l-3.47-4.932l-1.125 1.063c-.519.52-1.016.984-1.494 1.332a4 4 0 0 1-.882.503l.933 2.361c.221.56.062 1.193-.345 1.623l-1.022 1.08a.517.517 0 0 1-.753-.032L6.36 17.64L2.688 14.7a.516.516 0 0 1-.03-.753l1.079-1.022c.43-.407 1.063-.567 1.622-.346l2.362.933c.12-.303.297-.597.503-.881c.347-.478.813-.976 1.332-1.495l1.063-1.124l-4.932-3.47a.505.505 0 0 1-.056-.773l1.48-1.398c.447-.421 1.1-.54 1.666-.302l5.494 2.08l1.72-1.82c.538-.538 1.594-1.098 2.554-1.447c.488-.177.986-.313 1.416-.362c.42-.048.915-.033 1.234.286m-4.493 2.226l-1.934 2.046a.5.5 0 0 1-.54.124L8.413 5l-.02-.008a.55.55 0 0 0-.596.106l-1.035.977l4.904 3.45a.517.517 0 0 1 .075.753l-1.474 1.56c-.515.514-.935.967-1.235 1.38c-.303.416-.447.746-.472 1.014a.505.505 0 0 1-.682.417l-2.887-1.14c-.468-.185-.944.497-1.23.768l3.268 2.615q.044.035.078.078l2.615 3.268c.27-.287.953-.763.768-1.23l-1.14-2.887a.505.505 0 0 1 .417-.682c.268-.025.597-.17 1.015-.473c.412-.3.865-.72 1.38-1.234l.01-.01l1.549-1.465a.516.516 0 0 1 .752.076l3.45 4.904l.978-1.035a.55.55 0 0 0 .098-.616l-2.201-5.814a.5.5 0 0 1 .124-.54l2.046-1.935c.384-.387.88-1.279 1.21-2.184c.168-.462.393-1.044.312-1.55c-.006-.039-.016-.048-.055-.054c-.505-.081-1.087.144-1.549.312c-.906.33-1.797.826-2.185 1.21" clip-rule="evenodd"></svg:path>`,
})
export class StashAirplaneLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleDownLightIcon],svg[stash-angle-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.176 10.376a.6.6 0 0 1 .848 0L12 12.352l1.976-1.976a.6.6 0 0 1 .848.848l-2.4 2.4a.6.6 0 0 1-.848 0l-2.4-2.4a.6.6 0 0 1 0-.848"></svg:path>`,
})
export class StashAngleDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleRightDuotoneIcon],svg[stash-angle-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.164 8.964a.9.9 0 0 1 1.272 0l2.4 2.4a.9.9 0 0 1 0 1.272l-2.4 2.4a.9.9 0 1 1-1.272-1.272L11.927 12l-1.763-1.764a.9.9 0 0 1 0-1.272"></svg:path>`,
})
export class StashAngleRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleRightLightIcon],svg[stash-angle-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.376 9.176a.6.6 0 0 1 .849 0l2.4 2.4a.6.6 0 0 1 0 .848l-2.4 2.4a.6.6 0 0 1-.85-.848L12.353 12l-1.976-1.976a.6.6 0 0 1 0-.848"></svg:path>`,
})
export class StashAngleRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleLeftIcon],svg[stash-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.836 8.964a.9.9 0 0 1 0 1.272L12.073 12l1.763 1.764a.9.9 0 1 1-1.273 1.272l-2.4-2.4a.9.9 0 0 1 0-1.272l2.4-2.4a.9.9 0 0 1 1.273 0"></svg:path>`,
})
export class StashAngleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleRightIcon],svg[stash-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.164 8.964a.9.9 0 0 1 1.272 0l2.4 2.4a.9.9 0 0 1 0 1.272l-2.4 2.4a.9.9 0 1 1-1.272-1.272L11.927 12l-1.763-1.764a.9.9 0 0 1 0-1.272"></svg:path>`,
})
export class StashAngleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownLargeIcon],svg[stash-arrow-down-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v18.25l5.733-5.46a.75.75 0 1 1 1.034 1.086l-7 6.667a.75.75 0 0 1-1.034 0l-7-6.667a.75.75 0 1 1 1.034-1.086l5.733 5.46V2a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashArrowDownLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleUpLightIcon],svg[stash-angle-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.576 10.376a.6.6 0 0 1 .848 0l2.4 2.4a.6.6 0 0 1-.848.848L12 11.648l-1.976 1.976a.6.6 0 0 1-.848-.848z"></svg:path>`,
})
export class StashAngleUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleLeftLightIcon],svg[stash-angle-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.625 9.176a.6.6 0 0 1 0 .848L11.648 12l1.976 1.976a.6.6 0 0 1-.85.848l-2.4-2.4a.6.6 0 0 1 0-.848l2.4-2.4a.6.6 0 0 1 .85 0"></svg:path>`,
})
export class StashAngleLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleUpIcon],svg[stash-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.364 10.164a.9.9 0 0 1 1.273 0l2.4 2.4a.9.9 0 1 1-1.273 1.272L12 12.073l-1.763 1.763a.9.9 0 1 1-1.273-1.272z"></svg:path>`,
})
export class StashAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAngleUpDuotoneIcon],svg[stash-angle-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.364 10.164a.9.9 0 0 1 1.273 0l2.4 2.4a.9.9 0 1 1-1.273 1.272L12 12.073l-1.763 1.763a.9.9 0 1 1-1.273-1.272z"></svg:path>`,
})
export class StashAngleUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownIcon],svg[stash-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.25a.75.75 0 0 1 .75.75v10.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V6a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownDuotoneIcon],svg[stash-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.25a.75.75 0 0 1 .75.75v10.19l3.72-3.72a.75.75 0 1 1 1.06 1.06l-5 5a.75.75 0 0 1-1.06 0l-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72V6a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownLargeDuotoneIcon],svg[stash-arrow-down-large-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.25a.75.75 0 0 1 .75.75v18.25l5.733-5.46a.75.75 0 1 1 1.034 1.086l-7 6.667a.75.75 0 0 1-1.034 0l-7-6.667a.75.75 0 1 1 1.034-1.086l5.733 5.46V2a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashArrowDownLargeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownLargeLightIcon],svg[stash-arrow-down-large-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.5a.5.5 0 0 1 .5.5v18.833l6.155-5.862a.5.5 0 1 1 .69.724l-7 6.667a.5.5 0 0 1-.69 0l-7-6.667a.5.5 0 1 1 .69-.724l6.155 5.862V2a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashArrowDownLargeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownLightIcon],svg[stash-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v10.793l4.146-4.147a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-5-5a.5.5 0 0 1 .708-.708l4.146 4.147V6a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashArrowDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownSolidIcon],svg[stash-arrow-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.75c-.69 0-1.25.56-1.25 1.25v8.982l-2.866-2.866a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l5-5a1.25 1.25 0 0 0-1.768-1.768l-2.866 2.866V6c0-.69-.56-1.25-1.25-1.25"></svg:path>`,
})
export class StashArrowDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftIcon],svg[stash-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.53 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72H18a.75.75 0 0 1 0 1.5H7.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class StashArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftDuotoneIcon],svg[stash-arrow-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.53 6.47a.75.75 0 0 1 0 1.06l-3.72 3.72H18a.75.75 0 0 1 0 1.5H7.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class StashArrowLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftLargeIcon],svg[stash-arrow-left-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.184 4.457c.3.286.311.76.026 1.06L3.75 11.25H22a.75.75 0 0 1 0 1.5H3.75l5.46 5.733a.75.75 0 1 1-1.086 1.034l-6.667-7a.75.75 0 0 1 0-1.034l6.667-7a.75.75 0 0 1 1.06-.026"></svg:path>`,
})
export class StashArrowLeftLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftLargeDuotoneIcon],svg[stash-arrow-left-large-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.184 4.457c.3.286.311.76.026 1.06L3.75 11.25H22a.75.75 0 0 1 0 1.5H3.75l5.46 5.733a.75.75 0 1 1-1.086 1.034l-6.667-7a.75.75 0 0 1 0-1.034l6.667-7a.75.75 0 0 1 1.06-.026"></svg:path>`,
})
export class StashArrowLeftLargeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftLargeLightIcon],svg[stash-arrow-left-large-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.011 4.638a.5.5 0 0 1 .018.707L3.167 11.5H22a.5.5 0 0 1 0 1H3.167l5.862 6.155a.5.5 0 1 1-.724.69l-6.667-7a.5.5 0 0 1 0-.69l6.667-7a.5.5 0 0 1 .706-.017"></svg:path>`,
})
export class StashArrowLeftLargeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftLightIcon],svg[stash-arrow-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.354 6.646a.5.5 0 0 1 0 .708L7.207 11.5H18a.5.5 0 0 1 0 1H7.207l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class StashArrowLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftSolidIcon],svg[stash-arrow-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.884 6.116a1.25 1.25 0 0 0-1.768 0l-5 5a1.25 1.25 0 0 0 0 1.768l5 5a1.25 1.25 0 0 0 1.768-1.768L9.018 13.25H18a1.25 1.25 0 1 0 0-2.5H9.018l2.866-2.866a1.25 1.25 0 0 0 0-1.768"></svg:path>`,
})
export class StashArrowLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowReplyIcon],svg[stash-arrow-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.296 6.889L4.833 11.18a.5.5 0 0 0 0 .786l5.463 4.292a.5.5 0 0 0 .801-.482l-.355-1.955c5.016-1.204 7.108 1.494 7.914 3.235c.118.254.614.205.64-.073c.645-7.201-4.082-8.244-8.57-7.567l.371-2.046a.5.5 0 0 0-.8-.482"></svg:path>`,
})
export class StashArrowReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowReplyDuotoneIcon],svg[stash-arrow-reply-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="stashArrowReplyDuotone0" fill="currentColor" d="M10.296 6.889L4.833 11.18a.5.5 0 0 0 0 .786l5.463 4.292a.5.5 0 0 0 .801-.482l-.355-1.955c5.016-1.204 7.108 1.494 7.914 3.235c.118.254.614.205.64-.073c.645-7.201-4.082-8.244-8.57-7.567l.371-2.046a.5.5 0 0 0-.8-.482"></svg:path></svg:defs><svg:use href="#stashArrowReplyDuotone0" opacity=".5"></svg:use><svg:use href="#stashArrowReplyDuotone0" fill-opacity=".5" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path fill="currentColor" d="m4.833 11.18l-.308-.392zm5.463-4.291l.31.393zm-5.463 5.078l-.308.393zm5.463 4.292l-.309.394zm.801-.482l.492-.09zm-.355-1.955l-.492.09a.5.5 0 0 1 .375-.576zm7.914 3.235l-.453.21zm.64-.073l-.498-.045zm-8.57-7.567l.074.494a.5.5 0 0 1-.567-.583zm.371-2.046l.492.09zm-6.572 3.417l5.462-4.293l.618.787l-5.463 4.292zm0 1.572a1 1 0 0 1 0-1.572l.617.786zm5.462 4.293L4.525 12.36l.617-.786l5.463 4.292zm1.602-.966c.165.906-.878 1.534-1.602.966l.618-.787zm-.355-1.954l.355 1.954l-.984.18l-.355-1.955zm-.609-.397c2.614-.627 4.528-.249 5.908.57c1.367.81 2.148 2.016 2.577 2.941l-.907.42c-.378-.815-1.046-1.829-2.18-2.501c-1.122-.665-2.762-1.034-5.164-.457zm8.485 3.511a.23.23 0 0 0-.114-.116c-.024-.01-.037-.008-.04-.008a.1.1 0 0 0-.058.028a.27.27 0 0 0-.1.188l.996.09c-.044.486-.481.661-.73.688c-.252.027-.676-.049-.861-.45zm-.312.092c.312-3.488-.68-5.332-2.134-6.273c-1.506-.975-3.657-1.087-5.864-.755l-.15-.988c2.282-.344 4.739-.274 6.557.903c1.87 1.211 2.92 3.489 2.587 7.202zm-7.209-9.478l-.372 2.046l-.984-.18l.372-2.045zm-1.602-.966c.724-.568 1.767.06 1.602.966l-.984-.18z"></svg:path>`,
})
export class StashArrowReplyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowReplyLightIcon],svg[stash-arrow-reply-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.833 11.18l-.308-.392zm5.463-4.291l.31.393zm-5.463 5.078l-.308.393zm5.463 4.292l-.309.394zm.801-.482l.492-.09zm-.355-1.955l-.492.09a.5.5 0 0 1 .375-.576zm7.914 3.235l-.453.21zm.64-.073l-.498-.045zm-8.57-7.567l.074.494a.5.5 0 0 1-.567-.583zm.371-2.046l.492.09zm-6.572 3.417l5.462-4.293l.618.787l-5.463 4.292zm0 1.572a1 1 0 0 1 0-1.572l.617.786zm5.462 4.293L4.525 12.36l.617-.786l5.463 4.292zm1.602-.966c.165.906-.878 1.534-1.602.966l.618-.787zm-.355-1.954l.355 1.954l-.984.18l-.355-1.955zm-.609-.397c2.614-.627 4.528-.249 5.908.57c1.367.81 2.148 2.016 2.577 2.941l-.907.42c-.378-.815-1.046-1.829-2.18-2.501c-1.122-.665-2.762-1.034-5.164-.457zm8.485 3.511a.23.23 0 0 0-.114-.116c-.024-.01-.037-.008-.04-.008a.1.1 0 0 0-.058.028a.27.27 0 0 0-.1.188l.996.09c-.044.486-.481.661-.73.688c-.252.027-.676-.049-.861-.45zm-.312.092c.312-3.488-.68-5.332-2.134-6.273c-1.506-.975-3.657-1.087-5.864-.755l-.15-.988c2.282-.344 4.739-.274 6.557.903c1.87 1.211 2.92 3.489 2.587 7.202zm-7.209-9.478l-.372 2.046l-.984-.18l.372-2.045zm-1.602-.966c.724-.568 1.767.06 1.602.966l-.984-.18z"></svg:path>`,
})
export class StashArrowReplyLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowReplySolidIcon],svg[stash-arrow-reply-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.296 6.889L4.833 11.18a.5.5 0 0 0 0 .786l5.463 4.292a.5.5 0 0 0 .801-.482l-.355-1.955c5.016-1.204 7.108 1.494 7.914 3.235c.118.254.614.205.64-.073c.645-7.201-4.082-8.244-8.57-7.567l.371-2.046a.5.5 0 0 0-.8-.483"></svg:path>`,
})
export class StashArrowReplySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRetryIcon],svg[stash-arrow-retry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.896 18a.75.75 0 0 1-.75.75c-3.792 0-6.896-3.005-6.896-6.75s3.104-6.75 6.896-6.75c3.105 0 5.749 2.015 6.605 4.801l.603-1.02a.75.75 0 0 1 1.292.763l-1.63 2.755a.75.75 0 0 1-1.014.272L14.18 11.23a.75.75 0 1 1 .737-1.307l1.472.83c-.574-2.288-2.691-4.003-5.242-4.003C8.149 6.75 5.75 9.117 5.75 12s2.399 5.25 5.396 5.25a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class StashArrowRetryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRetryDuotoneIcon],svg[stash-arrow-retry-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.896 18a.75.75 0 0 1-.75.75c-3.792 0-6.896-3.005-6.896-6.75s3.104-6.75 6.896-6.75c3.105 0 5.749 2.015 6.605 4.801l.603-1.02a.75.75 0 0 1 1.292.763l-1.63 2.755a.75.75 0 0 1-1.014.272L14.18 11.23a.75.75 0 1 1 .737-1.307l1.472.83c-.574-2.288-2.691-4.003-5.242-4.003C8.149 6.75 5.75 9.117 5.75 12s2.399 5.25 5.396 5.25a.75.75 0 0 1 .75.75"></svg:path>`,
})
export class StashArrowRetryDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRetryLightIcon],svg[stash-arrow-retry-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.646 18a.5.5 0 0 1-.5.5C7.486 18.5 4.5 15.601 4.5 12s2.987-6.5 6.646-6.5c3.205 0 5.895 2.225 6.513 5.198l.91-1.54a.5.5 0 0 1 .861.508l-1.63 2.756a.5.5 0 0 1-.675.181l-2.823-1.59a.5.5 0 0 1 .491-.872l1.945 1.096c-.38-2.668-2.73-4.737-5.592-4.737C8.016 6.5 5.5 8.974 5.5 12s2.516 5.5 5.646 5.5a.5.5 0 0 1 .5.5"></svg:path>`,
})
export class StashArrowRetryLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightIcon],svg[stash-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H6a.75.75 0 0 1 0-1.5h10.19l-3.72-3.72a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class StashArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightDuotoneIcon],svg[stash-arrow-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.47 6.47a.75.75 0 0 1 1.06 0l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H6a.75.75 0 0 1 0-1.5h10.19l-3.72-3.72a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class StashArrowRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightLargeIcon],svg[stash-arrow-right-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.816 4.457a.75.75 0 0 1 1.06.026l6.667 7a.75.75 0 0 1 0 1.034l-6.667 7a.75.75 0 1 1-1.086-1.034l5.46-5.733H2a.75.75 0 0 1 0-1.5h18.25l-5.46-5.733a.75.75 0 0 1 .026-1.06"></svg:path>`,
})
export class StashArrowRightLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightLargeDuotoneIcon],svg[stash-arrow-right-large-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.816 4.457a.75.75 0 0 1 1.06.026l6.667 7a.75.75 0 0 1 0 1.034l-6.667 7a.75.75 0 1 1-1.086-1.034l5.46-5.733H2a.75.75 0 0 1 0-1.5h18.25l-5.46-5.733a.75.75 0 0 1 .026-1.06" clip-rule="evenodd"></svg:path>`,
})
export class StashArrowRightLargeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightLargeLightIcon],svg[stash-arrow-right-large-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.989 4.638a.5.5 0 0 1 .706.017l6.667 7a.5.5 0 0 1 0 .69l-6.667 7a.5.5 0 1 1-.724-.69l5.862-6.155H2a.5.5 0 0 1 0-1h18.833l-5.862-6.155a.5.5 0 0 1 .018-.707"></svg:path>`,
})
export class StashArrowRightLargeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightLightIcon],svg[stash-arrow-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.646 6.646a.5.5 0 0 1 .708 0l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708l4.147-4.146H6a.5.5 0 0 1 0-1h10.793l-4.147-4.146a.5.5 0 0 1 0-.708"></svg:path>`,
})
export class StashArrowRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowRightSolidIcon],svg[stash-arrow-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.884 6.116a1.25 1.25 0 0 0-1.768 1.768l2.866 2.866H6a1.25 1.25 0 1 0 0 2.5h8.982l-2.866 2.866a1.25 1.25 0 0 0 1.768 1.768l5-5a1.25 1.25 0 0 0 0-1.768z"></svg:path>`,
})
export class StashArrowRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpIcon],svg[stash-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 5.47a.753.753 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72V18a.75.75 0 0 1-1.5 0V7.81l-3.72 3.72a.75.75 0 0 1-1.06-1.06z"></svg:path>`,
})
export class StashArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpDuotoneIcon],svg[stash-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 5.47a.753.753 0 0 1 1.06 0l5 5a.75.75 0 1 1-1.06 1.06l-3.72-3.72V18a.75.75 0 0 1-1.5 0V7.81l-3.72 3.72a.75.75 0 0 1-1.06-1.06z"></svg:path>`,
})
export class StashArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpLargeIcon],svg[stash-arrow-up-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.483 1.457a.75.75 0 0 1 1.034 0l7 6.667a.75.75 0 1 1-1.034 1.086L12.75 3.75V22a.75.75 0 0 1-1.5 0V3.75L5.517 9.21a.75.75 0 1 1-1.034-1.086z"></svg:path>`,
})
export class StashArrowUpLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpLargeDuotoneIcon],svg[stash-arrow-up-large-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.483 1.457a.75.75 0 0 1 1.034 0l7 6.667a.75.75 0 1 1-1.034 1.086L12.75 3.75V22a.75.75 0 0 1-1.5 0V3.75L5.517 9.21a.75.75 0 1 1-1.034-1.086z"></svg:path>`,
})
export class StashArrowUpLargeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpLargeLightIcon],svg[stash-arrow-up-large-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.655 1.638a.5.5 0 0 1 .69 0l7 6.667a.5.5 0 1 1-.69.724L12.5 3.167V22a.5.5 0 0 1-1 0V3.167L5.345 9.029a.5.5 0 0 1-.69-.724z"></svg:path>`,
})
export class StashArrowUpLargeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpLightIcon],svg[stash-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.354 5.646l5 5a.5.5 0 0 1-.708.708L12.5 7.207V18a.5.5 0 0 1-1 0V7.207l-4.146 4.147a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class StashArrowUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpSolidIcon],svg[stash-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.884 5.116a1.253 1.253 0 0 0-1.768 0l-5 5a1.25 1.25 0 0 0 1.768 1.768l2.866-2.866V18a1.25 1.25 0 1 0 2.5 0V9.018l2.866 2.866a1.25 1.25 0 1 0 1.768-1.768z"></svg:path>`,
})
export class StashArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowsSwitchIcon],svg[stash-arrows-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.685 5.25h.03a.75.75 0 0 1 0 1.5c-1.292 0-2.275 0-3.058.063c-.785.063-1.283.183-1.636.371a3.94 3.94 0 0 0-1.677 1.764c-.19.394-.304.88-.363 1.638c-.06.764-.06 1.738-.06 3.094v.11l1.12-1.12a.75.75 0 0 1 1.06 1.06l-2.4 2.4a.75.75 0 0 1-1.086-.027l-2.171-2.4a.75.75 0 0 1 1.112-1.006l.865.956v-.005c0-1.317 0-2.35.065-3.179c.066-.844.202-1.542.509-2.176a5.44 5.44 0 0 1 2.319-2.431c.625-.335 1.37-.476 2.224-.544c.85-.068 1.891-.068 3.147-.068m4.162 2.4a.75.75 0 0 1 .538.247l2.171 2.4a.75.75 0 0 1-1.112 1.006l-.865-.956v.005c0 1.317 0 2.35-.065 3.179c-.066.844-.201 1.542-.509 2.176a5.44 5.44 0 0 1-2.319 2.431c-.625.335-1.37.476-2.224.544c-.85.068-1.891.068-3.146.068h-.03a.75.75 0 0 1 0-1.5c1.291 0 2.274 0 3.057-.063c.785-.063 1.283-.183 1.636-.372a3.94 3.94 0 0 0 1.677-1.763c.19-.394.304-.88.363-1.638c.06-.764.06-1.738.06-3.094v-.11l-1.12 1.12a.75.75 0 0 1-1.06-1.06l2.4-2.4a.75.75 0 0 1 .548-.22"></svg:path>`,
})
export class StashArrowsSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowsSwitchDuotoneIcon],svg[stash-arrows-switch-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.685 5.25h.03a.75.75 0 0 1 0 1.5c-1.292 0-2.275 0-3.058.063c-.785.063-1.283.183-1.636.371a3.94 3.94 0 0 0-1.677 1.764c-.19.394-.304.88-.363 1.638c-.06.764-.06 1.738-.06 3.094v.11l1.12-1.12a.75.75 0 0 1 1.06 1.06l-2.4 2.4a.75.75 0 0 1-1.086-.027l-2.171-2.4a.75.75 0 0 1 1.112-1.006l.865.956v-.005c0-1.317 0-2.35.065-3.179c.066-.844.202-1.542.509-2.176a5.44 5.44 0 0 1 2.319-2.431c.625-.335 1.37-.476 2.224-.544c.85-.068 1.891-.068 3.147-.068"></svg:path><svg:path fill="currentColor" d="M17.847 7.65a.75.75 0 0 1 .538.247l2.171 2.4a.75.75 0 0 1-1.112 1.006l-.866-.956v.005c0 1.317 0 2.35-.064 3.179c-.066.844-.202 1.542-.509 2.176a5.44 5.44 0 0 1-2.319 2.431c-.625.335-1.37.476-2.224.544c-.85.068-1.891.068-3.147.068h-.03a.75.75 0 0 1 0-1.5c1.292 0 2.275 0 3.058-.063c.784-.063 1.283-.183 1.636-.372a3.94 3.94 0 0 0 1.677-1.763c.19-.394.304-.88.363-1.637c.059-.765.06-1.74.06-3.095v-.11l-1.12 1.12a.75.75 0 0 1-1.06-1.06l2.4-2.4a.75.75 0 0 1 .548-.22" opacity=".5"></svg:path>`,
})
export class StashArrowsSwitchDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowsSwitchLightIcon],svg[stash-arrows-switch-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.694 5.5h.02a.5.5 0 0 1 0 1c-1.287 0-2.282 0-3.077.064c-.796.063-1.336.187-1.734.4A4.2 4.2 0 0 0 7.12 8.839c-.21.433-.328.956-.388 1.727c-.06.777-.06 1.762-.06 3.114v.713l1.546-1.547a.5.5 0 0 1 .707.708l-2.4 2.4a.5.5 0 0 1-.724-.019l-2.172-2.4a.5.5 0 0 1 .742-.67l1.3 1.437v-.644c0-1.325 0-2.35.064-3.17c.065-.829.197-1.492.485-2.085a5.2 5.2 0 0 1 2.212-2.32c.58-.311 1.283-.449 2.126-.516c.84-.067 1.873-.067 3.136-.067m4.147 2.4a.5.5 0 0 1 .358.165l2.172 2.4a.5.5 0 0 1-.742.67l-1.3-1.437v.644c0 1.326 0 2.35-.064 3.17c-.065.829-.197 1.492-.485 2.085a5.2 5.2 0 0 1-2.212 2.32c-.58.311-1.283.449-2.126.516c-.839.067-1.873.067-3.136.067h-.02a.5.5 0 0 1 0-1c1.287 0 2.282 0 3.077-.064c.796-.063 1.336-.187 1.734-.4a4.2 4.2 0 0 0 1.784-1.875c.21-.434.327-.956.387-1.727c.06-.777.06-1.762.06-3.114v-.713l-1.546 1.547a.5.5 0 0 1-.707-.708l2.4-2.4a.5.5 0 0 1 .366-.146"></svg:path>`,
})
export class StashArrowsSwitchLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArrowsSwitchSolidIcon],svg[stash-arrows-switch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.676 5h.038a1 1 0 1 1 0 2c-1.295 0-2.266 0-3.037.062c-.773.062-1.23.179-1.538.343a3.7 3.7 0 0 0-1.57 1.652c-.171.354-.28.806-.338 1.548c-.052.658-.058 1.476-.06 2.58l.693-.692a1 1 0 0 1 1.415 1.414l-2.4 2.4a1 1 0 0 1-1.45-.036l-2.17-2.4a1 1 0 1 1 1.483-1.342l.43.476c.001-1.018.01-1.856.065-2.555c.067-.859.206-1.592.533-2.266a5.7 5.7 0 0 1 2.426-2.543c.67-.359 1.456-.503 2.322-.572C11.378 5 12.428 5 13.675 5m4.178 2.4a1 1 0 0 1 .716.33l2.171 2.4a1 1 0 1 1-1.482 1.34l-.43-.475c-.002 1.018-.011 1.856-.066 2.555c-.067.859-.206 1.592-.533 2.266a5.7 5.7 0 0 1-2.426 2.543c-.67.358-1.456.503-2.322.572c-.86.069-1.91.069-3.157.069h-.04a1 1 0 0 1 0-2c1.296 0 2.267 0 3.038-.062c.773-.062 1.23-.179 1.538-.343a3.7 3.7 0 0 0 1.57-1.652c.171-.354.28-.806.338-1.548c.052-.658.059-1.476.06-2.58l-.693.692a1 1 0 0 1-1.414-1.414l2.4-2.4a1 1 0 0 1 .732-.293"></svg:path>`,
})
export class StashArrowsSwitchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleIcon],svg[stash-article-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6.495a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m4.637 2h2.226c.058 0 .139 0 .212.006c.088.007.229.027.379.103a1 1 0 0 1 .437.437c.077.15.096.29.103.379c.006.073.006.154.006.212v1.726c0 .058 0 .139-.006.212a1 1 0 0 1-.103.379a1 1 0 0 1-.437.437a1 1 0 0 1-.379.103a3 3 0 0 1-.212.006h-2.226c-.058 0-.139 0-.212-.006a1 1 0 0 1-.379-.103a1 1 0 0 1-.437-.437a1 1 0 0 1-.103-.379C13 11.497 13 11.416 13 11.358V9.632c0-.058 0-.139.006-.212c.007-.088.027-.229.103-.379a1 1 0 0 1 .437-.437c.15-.076.29-.096.379-.103c.073-.006.154-.006.212-.006m.363 1.5v1H16v-1zm-4.25-1.25a.75.75 0 1 0 0 1.5h1.25a.75.75 0 0 0 0-1.5zm0 2.25a.75.75 0 0 0 0 1.5h1.25a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M16.33 2.745h-5.66c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 7.05 4.247c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v10.08H4.5a.75.75 0 0 0-.75.75c0 1.683.572 2.68 1.3 3.225c.406.304.934.524 1.449.525h10.149c.707 0 1.452.03 2.1-.3a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074c.03-.365.03-.81.03-1.345V6.665c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.201-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03m1.092 16.987a1.2 1.2 0 0 1-.472-.212c-.272-.204-.7-.708-.7-2.025a.75.75 0 0 0-.75-.75H8.25V6.695c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h5.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253v10.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.142.072-.296.107-.645.123m-10.91.013h-.01l-.008-.002a1.2 1.2 0 0 1-.544-.223c-.213-.16-.521-.503-.645-1.275h9.487c.07.604.225 1.098.437 1.5z"></svg:path>`,
})
export class StashArticleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleAltIcon],svg[stash-article-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.83 2.25H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 3.752c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345V21a.75.75 0 0 0 1.5 0V6.2c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h11.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253V21a.75.75 0 0 0 1.5 0V6.17c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03"></svg:path><svg:path fill="currentColor" d="M6.5 7.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.66 10.01c.115-.01.248-.01.37-.01h1.94c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.19c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.546.546c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009h-1.94c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.479c-.01-.114-.009-.247-.009-.369v-1.19c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127M15 11.5h-2v1.25h2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.25 10.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm-.75 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m.75 2a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM7.5 18.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class StashArticleAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleAltDuotoneIcon],svg[stash-article-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.03 10c-.122 0-.255 0-.37.01c-.13.01-.3.036-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.19c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.478.127c.114.01.247.009.369.009h1.94c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.546c.09-.177.116-.349.127-.479c.01-.114.009-.247.009-.369v-1.19c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.546-.546a1.3 1.3 0 0 0-.479-.127A5 5 0 0 0 14.97 10zm-4.78.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm0 2.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 2.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M17.83 2.25H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 3.752c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345V21a.75.75 0 0 0 1.5 0V6.2c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h11.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253V21a.75.75 0 0 0 1.5 0V6.17c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03"></svg:path><svg:path fill="currentColor" d="M7.5 6.5a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashArticleAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleAltLightIcon],svg[stash-article-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.821 2.5H6.18c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.243a2.5 2.5 0 0 0-1.093 1.093c-.15.296-.213.616-.243.98c-.03.355-.03.793-.03 1.335V21a.5.5 0 0 0 1 0V6.2c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.656c.132-.067.306-.113.608-.137C5.236 3.5 5.632 3.5 6.2 3.5h11.6c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273V21a.5.5 0 0 0 1 0V6.179c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243C18.8 2.5 18.362 2.5 17.82 2.5"></svg:path><svg:path fill="currentColor" d="M6.75 7.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.68 10.259c.105-.009.228-.009.354-.009h1.932c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.182c0 .126 0 .25-.009.353a1 1 0 0 1-.1.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a4 4 0 0 1-.353.009h-1.932c-.126 0-.25 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385c-.009-.104-.009-.227-.009-.353v-1.182c0-.126 0-.25.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1m.076.997v.006a4 4 0 0 0-.006.288v1.15c0 .148 0 .23.005.288v.006h.007c.059.006.14.006.288.006h1.9c.148 0 .23 0 .288-.005h.006v-.007a4 4 0 0 0 .006-.288v-1.15c0-.148 0-.23-.005-.288v-.006h-.007a4 4 0 0 0-.288-.006h-1.9c-.148 0-.23 0-.288.005z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.25 10.5a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1zm-.5 2.75a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m.5 2.25a.5.5 0 0 0 0 1h7.5a.5.5 0 0 0 0-1zm-.5 3a.5.5 0 0 1 .5-.5h7.5a.5.5 0 0 1 0 1h-7.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashArticleAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleAltSolidIcon],svg[stash-article-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.839 2H6.16c-.527 0-.981 0-1.356.03c-.395.033-.789.104-1.167.297a3 3 0 0 0-1.311 1.311c-.193.378-.264.772-.296 1.167C2 5.18 2 5.635 2 6.161V21a1 1 0 1 0 2 0V6.2c0-.577 0-.949.024-1.232c.022-.272.06-.373.085-.422a1 1 0 0 1 .437-.437c.05-.025.15-.063.422-.085C5.25 4 5.623 4 6.2 4h11.6c.577 0 .949 0 1.232.024c.272.022.372.06.422.085a1 1 0 0 1 .437.437c.025.05.063.15.085.422C20 5.25 20 5.623 20 6.2V21a1 1 0 1 0 2 0V6.161c0-.527 0-.981-.03-1.356c-.033-.395-.104-.789-.297-1.167a3 3 0 0 0-1.311-1.311c-.378-.193-.772-.264-1.167-.296A18 18 0 0 0 17.838 2"></svg:path><svg:path fill="currentColor" d="M13.03 10h1.94c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.19c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.546.546c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009h-1.94c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.479c-.01-.114-.009-.247-.009-.369v-1.19c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546a1.3 1.3 0 0 1 .478-.127c.114-.01.247-.009.369-.009M7.5 11a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 7.5 11m0 2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m0 2.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7.5 16m0 2.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75m0-12a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashArticleAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleDuotoneIcon],svg[stash-article-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.23 19.75H6.502l-.008-.002a1.2 1.2 0 0 1-.544-.223c-.213-.16-.521-.503-.645-1.275h9.487c.07.604.226 1.099.438 1.5M13.925 8.506c.073-.006.154-.006.212-.006h2.226c.058 0 .139 0 .212.006c.088.007.229.027.38.103a1 1 0 0 1 .436.437c.077.15.096.29.103.379c.006.073.006.154.006.212v1.726c0 .058 0 .139-.006.212a1 1 0 0 1-.103.379a1 1 0 0 1-.437.437c-.15.076-.29.096-.379.103a3 3 0 0 1-.212.006h-2.226c-.058 0-.139 0-.212-.006a1 1 0 0 1-.379-.103a1 1 0 0 1-.437-.437a1 1 0 0 1-.103-.379C13 11.502 13 11.421 13 11.363V9.637c0-.058 0-.139.006-.212c.007-.088.027-.229.103-.379a1 1 0 0 1 .437-.437c.15-.076.29-.096.379-.103M9.5 9.5a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5h-1.25a.75.75 0 0 1-.75-.75m0 2.25a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5h-1.25a.75.75 0 0 1-.75-.75m.75 2a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.5 5.5a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z"></svg:path><svg:path fill="currentColor" d="M10.67 2.75h5.66c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v10.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.324.165-.666.24-1.049.273a.8.8 0 0 1-.2.027h-.853l-3.382.003c-2.257.004-4.513.007-6.77-.003q-.08 0-.16-.01a2.7 2.7 0 0 1-1.284-.515c-.729-.546-1.301-1.542-1.301-3.225a.75.75 0 0 1 .75-.75h2.25V6.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 8.252 3.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03m7.397 16.864a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252V6.7c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-5.6c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v10.05h7.25a.75.75 0 0 1 .75.75c0 1.317.428 1.82.7 2.025a1.2 1.2 0 0 0 .472.212c.35-.016.503-.05.645-.123m-11.555.136h8.717c-.212-.401-.367-.896-.437-1.5H5.304c.124.772.432 1.115.645 1.275a1.2 1.2 0 0 0 .544.223l.008.001z"></svg:path>`,
})
export class StashArticleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleLightIcon],svg[stash-article-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6.5a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m4.638 2.25h2.224c.06 0 .13 0 .193.005a.8.8 0 0 1 .285.077a.75.75 0 0 1 .328.328a.7.7 0 0 1 .077.285c.005.063.005.134.005.193v1.724c0 .06 0 .13-.005.193a.8.8 0 0 1-.077.286a.75.75 0 0 1-.328.327a.8.8 0 0 1-.285.077c-.063.005-.134.005-.193.005h-2.224c-.06 0-.13 0-.193-.005a.8.8 0 0 1-.286-.077a.75.75 0 0 1-.327-.327a.8.8 0 0 1-.077-.286c-.005-.063-.005-.134-.005-.193V9.638c0-.06 0-.13.005-.193a.8.8 0 0 1 .077-.285a.75.75 0 0 1 .327-.328a.8.8 0 0 1 .286-.077c.063-.005.134-.005.193-.005m.112 1v1.5h2v-1.5zm-4.5-.25a.5.5 0 0 1 .5-.5h1.25a.5.5 0 0 1 0 1h-1.25a.5.5 0 0 1-.5-.5m.5 1.75a.5.5 0 0 0 0 1h1.25a.5.5 0 0 0 0-1zm-.5 3.25a.5.5 0 0 1 .5-.5h6.5a.5.5 0 0 1 0 1h-6.5a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="currentColor" d="M16.321 3H10.68c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.243a2.5 2.5 0 0 0-1.093 1.093c-.15.296-.213.616-.243.98C7 5.7 7 6.138 7 6.68V17H4.5a.5.5 0 0 0-.5.5c0 1.622.548 2.536 1.2 3.025c.314.236.629.354.866.413c.14.035.283.06.427.062c1.657.012 7.187 0 10.123 0c.689 0 1.385.05 2.019-.273c.813-.414 1.264-1.185 1.336-2.073c.029-.354.029-.79.029-1.332V6.679c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243C17.3 3 16.862 3 16.32 3m.479 16.725c-.348-.261-.8-.847-.8-2.225a.5.5 0 0 0-.5-.5H8V6.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.656c.132-.067.306-.113.608-.137C9.736 4 10.132 4 10.7 4h5.6c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608C19 5.736 19 6.132 19 6.7v10.6c0 .568 0 .965-.026 1.273c-.044.546-.286 1.005-.793 1.264c-.45.229-.98.189-1.381-.112M15.68 20H6.506a1.3 1.3 0 0 1-.705-.275c-.303-.227-.684-.7-.778-1.725h9.996c.07.896.323 1.542.663 2"></svg:path>`,
})
export class StashArticleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticlePlusIcon],svg[stash-article-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.17 2.25h11.16c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v6.33a.75.75 0 0 1-1.5 0V6.2c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025H5.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253V21a.75.75 0 0 1-1.5 0V6.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 2.752 2.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03m14.33 13a.75.75 0 0 1 .75.75v1.75H22a.75.75 0 0 1 0 1.5h-1.75V21a.75.75 0 0 1-1.5 0v-1.75H17a.75.75 0 0 1 0-1.5h1.75V16a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.66 10.01c.115-.01.248-.01.37-.01h1.94c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.19c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.546.546c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009h-1.94c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.479c-.01-.114-.009-.247-.009-.369v-1.19c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127M14 11.5h-2v1.25h2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M7.25 10.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm-.75 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m.75 2a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM6.5 18.5a.75.75 0 0 1 .75-.75h4.8a.75.75 0 0 1 0 1.5h-4.8a.75.75 0 0 1-.75-.75m0-12a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashArticlePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticlePlusDuotoneIcon],svg[stash-article-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.03 10c-.122 0-.255 0-.37.01c-.13.01-.3.036-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.19c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.478.127c.114.01.247.009.369.009h1.94c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.546c.09-.177.116-.349.127-.479c.01-.114.009-.247.009-.369v-1.19c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.546-.546a1.3 1.3 0 0 0-.479-.127A5 5 0 0 0 13.97 10zm-4.78.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm0 2.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zm0 2.5a.75.75 0 0 0 0 1.5h4.8a.75.75 0 0 0 0-1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.17 2.25h11.16c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v6.33a.75.75 0 0 1-1.5 0V6.2c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025H5.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253V21a.75.75 0 0 1-1.5 0V6.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 2.752 2.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03"></svg:path><svg:path fill="currentColor" d="M5.5 7.5a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1M20.25 16a.75.75 0 0 0-1.5 0v1.75H17a.75.75 0 0 0 0 1.5h1.75V21a.75.75 0 0 0 1.5 0v-1.75H22a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class StashArticlePlusDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticlePlusLightIcon],svg[stash-article-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.179 2.5H16.32c.542 0 .98 0 1.333.029c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.03.355.03.793.03 1.335v6.32a.5.5 0 0 1-1 0V6.2c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137c-.308-.026-.705-.026-1.273-.026H5.2c-.568 0-.964 0-1.273.026c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C2.5 5.236 2.5 5.632 2.5 6.2V21a.5.5 0 0 1-1 0V6.179c0-.542 0-.98.029-1.333c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243C4.2 2.5 4.638 2.5 5.18 2.5m14.32 13a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill="currentColor" d="M5.75 7.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.034 10.25h1.932c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.182c0 .126 0 .25-.008.353a1 1 0 0 1-.101.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a4 4 0 0 1-.353.009h-1.932c-.126 0-.249 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385c-.009-.104-.009-.227-.009-.353v-1.182c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1c.104-.009.227-.009.353-.009m-.278 1.006v.006a4 4 0 0 0-.006.288v1.15c0 .148 0 .23.005.288v.006h.007c.059.006.14.006.288.006h1.9c.148 0 .23 0 .288-.005h.006v-.007a4 4 0 0 0 .006-.288v-1.15c0-.148 0-.23-.005-.288v-.006h-.007a4 4 0 0 0-.288-.006h-1.9c-.148 0-.23 0-.288.005z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.75 11a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m0 2.25a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m0 2.75a.5.5 0 0 1 .5-.5h7.5a.5.5 0 0 1 0 1h-7.5a.5.5 0 0 1-.5-.5m0 2.5a.5.5 0 0 1 .5-.5h4.8a.5.5 0 0 1 0 1h-4.8a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashArticlePlusLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticlePlusSolidIcon],svg[stash-article-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.161 2H16.34c.527 0 .982 0 1.356.03c.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167c.031.375.031.83.031 1.356V12.5a1 1 0 1 1-2 0V6.2c0-.577 0-.949-.024-1.232c-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C17.25 4 16.877 4 16.3 4H5.2c-.577 0-.949 0-1.232.024c-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C3 5.25 3 5.623 3 6.2V21a1 1 0 1 1-2 0V6.161c0-.527 0-.981.03-1.356c.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C4.18 2 4.635 2 5.161 2"></svg:path><svg:path fill="currentColor" d="M6.5 6.5a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2zm5.53 3.5c-.122 0-.255 0-.37.01a1.3 1.3 0 0 0-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.19c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.478.127c.114.01.247.009.369.009h1.94c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.546c.09-.177.116-.349.127-.479c.01-.114.009-.246.009-.369v-1.19c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.546-.546a1.3 1.3 0 0 0-.479-.127C14.225 10 14.093 10 13.97 10zM6.5 11a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 6.5 11m0 2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m0 2.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6.5 16m0 2.5a.75.75 0 0 1 .75-.75h4.8a.75.75 0 0 1 0 1.5h-4.8a.75.75 0 0 1-.75-.75M20.25 16a.75.75 0 0 0-1.5 0v1.75H17a.75.75 0 0 0 0 1.5h1.75V21a.75.75 0 0 0 1.5 0v-1.75H22a.75.75 0 0 0 0-1.5h-1.75z"></svg:path>`,
})
export class StashArticlePlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleShareIcon],svg[stash-article-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.17 2.25h11.16c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v6.33a.75.75 0 0 1-1.5 0V6.2c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025H5.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253V21a.75.75 0 0 1-1.5 0V6.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 2.752 2.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.66 10.01c.115-.01.248-.01.37-.01h1.94c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.246.009.369v1.19c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.546.546c-.177.09-.349.116-.479.127c-.114.01-.246.009-.369.009h-1.94c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.479c-.01-.114-.009-.246-.009-.369v-1.19c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127M14 11.5h-2v1.25h2z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.5 11a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 6.5 11m0 2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m0 2.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6.5 16m0 2.5a.75.75 0 0 1 .75-.75h4.8a.75.75 0 0 1 0 1.5h-4.8a.75.75 0 0 1-.75-.75m-1-11a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.989 17.421L19.61 14.52a.96.96 0 0 0-1.2-.108a1.03 1.03 0 0 0-.439 1.056l.147.796c-1.11.125-2.126.503-2.952 1.262c-1.038.953-1.668 2.407-1.911 4.383a.75.75 0 0 0 1.425.407c.408-.883.912-1.384 1.547-1.687c.492-.235 1.103-.37 1.885-.425l-.147.83c-.074.424.11.836.453 1.055a.96.96 0 0 0 1.2-.128L23 18.953l.05-.048a1.05 1.05 0 0 0-.06-1.483m-3.24-.592l-.047-.254l1.889 1.623l-1.9 1.69l.059-.334a.75.75 0 0 0-.739-.88c-1.27 0-2.393.13-3.345.561q.24-.354.515-.605c.678-.622 1.608-.915 2.83-.915a.75.75 0 0 0 .738-.886" clip-rule="evenodd"></svg:path>`,
})
export class StashArticleShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleShareDuotoneIcon],svg[stash-article-share-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.03 10c-.122 0-.255 0-.37.01c-.13.01-.3.036-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.19c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.478.127c.114.01.247.009.369.009h1.94c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.546c.09-.177.116-.349.127-.479c.01-.114.009-.247.009-.369v-1.19c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.546-.546a1.3 1.3 0 0 0-.479-.127A5 5 0 0 0 13.97 10zm-4.78.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm-.75 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75m.75 2a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5zM6.5 18.5a.75.75 0 0 1 .75-.75h4.8a.75.75 0 0 1 0 1.5h-4.8a.75.75 0 0 1-.75-.75M14 22c.461-3.747 2.332-5.035 5.011-5.035l-.301-1.634c-.048-.26.222-.437.393-.26l3.397 2.92a.3.3 0 0 1 0 .401l-3.398 3.025c-.17.181-.443.007-.397-.254l.306-1.739c-2.54 0-4.072.547-5.011 2.576" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.33 2.25H5.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 1.55 3.752c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345V21a.75.75 0 0 0 1.5 0V6.2c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h11.1c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253v6.3a.75.75 0 0 0 1.5 0V6.17c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03"></svg:path><svg:path fill="currentColor" d="M6.5 6.5a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.989 17.421L19.61 14.52a.96.96 0 0 0-1.2-.108a1.03 1.03 0 0 0-.439 1.056l.147.796c-1.11.125-2.126.503-2.952 1.262c-1.038.953-1.668 2.407-1.911 4.383a.75.75 0 0 0 1.425.407c.408-.883.912-1.384 1.547-1.687c.492-.235 1.103-.37 1.885-.425l-.147.83c-.074.424.11.836.453 1.055a.96.96 0 0 0 1.2-.128L23 18.953l.05-.048a1.05 1.05 0 0 0-.06-1.483m-3.24-.592l-.047-.254l1.889 1.623l-1.9 1.69l.059-.334a.75.75 0 0 0-.739-.88c-1.27 0-2.393.13-3.345.561q.24-.354.515-.605c.678-.622 1.608-.915 2.83-.915a.75.75 0 0 0 .738-.886" clip-rule="evenodd"></svg:path>`,
})
export class StashArticleShareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleShareLightIcon],svg[stash-article-share-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.179 2.5H16.32c.542 0 .98 0 1.333.029c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.03.355.03.793.03 1.335v6.32a.5.5 0 0 1-1 0V6.2c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137c-.308-.026-.705-.026-1.273-.026H5.2c-.568 0-.964 0-1.273.026c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C2.5 5.236 2.5 5.632 2.5 6.2V21a.5.5 0 0 1-1 0V6.179c0-.542 0-.98.029-1.333c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243C4.2 2.5 4.638 2.5 5.18 2.5"></svg:path><svg:path fill="currentColor" d="M5.75 7.5a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.966 10.25h-1.932c-.126 0-.249 0-.353.008a1 1 0 0 0-.385.101a1 1 0 0 0-.437.437a1 1 0 0 0-.1.385c-.009.104-.009.227-.009.353v1.182c0 .126 0 .25.008.353c.01.114.032.25.101.385a1 1 0 0 0 .437.437c.136.07.27.091.385.1a5 5 0 0 0 .353.009h1.932c.126 0 .249 0 .353-.008c.114-.01.25-.032.385-.101a1 1 0 0 0 .437-.437a1 1 0 0 0 .1-.385c.009-.104.009-.227.009-.353v-1.182c0-.126 0-.25-.008-.353a1 1 0 0 0-.101-.385a1 1 0 0 0-.437-.437a1 1 0 0 0-.385-.1c-.104-.009-.227-.009-.353-.009m-2.21 1.012v-.006h.006a4 4 0 0 1 .288-.006h1.9c.148 0 .23 0 .288.005h.006v.007c.006.059.006.14.006.288v1.15c0 .148 0 .23-.005.288v.006h-.007c-.059.006-.14.006-.288.006h-1.9c-.148 0-.23 0-.288-.005h-.006v-.007a4 4 0 0 1-.006-.288v-1.15c0-.148 0-.23.005-.288" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M6.75 11a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1h-1.5a.5.5 0 0 1-.5-.5m.5 1.75a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1zM6.75 16a.5.5 0 0 1 .5-.5h7.5a.5.5 0 0 1 0 1h-7.5a.5.5 0 0 1-.5-.5m.5 2a.5.5 0 0 0 0 1h4.8a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m22.826 17.61l-3.383-2.906a.71.71 0 0 0-.894-.084a.78.78 0 0 0-.331.802l.197 1.065c-1.179.087-2.237.449-3.08 1.222c-.978.9-1.592 2.288-1.831 4.23a.5.5 0 0 0 .95.27c.428-.926.97-1.474 1.667-1.807c.597-.285 1.341-.427 2.293-.466l-.201 1.14a.78.78 0 0 0 .34.801a.71.71 0 0 0 .895-.099l3.384-3.012l.034-.033a.8.8 0 0 0-.04-1.122m-3.323-.735l-.175-.951l2.642 2.27l-2.65 2.36l.184-1.043a.517.517 0 0 0-.493-.587c-1.295 0-2.402.137-3.321.576q-.349.165-.654.388c.262-.62.594-1.09.976-1.442c.739-.678 1.738-.98 3-.98a.5.5 0 0 0 .491-.591" clip-rule="evenodd"></svg:path>`,
})
export class StashArticleShareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleShareSolidIcon],svg[stash-article-share-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.161 2H16.34c.527 0 .982 0 1.356.03c.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167c.031.375.031.83.031 1.356V12.5a1 1 0 1 1-2 0V6.2c0-.577 0-.949-.024-1.232c-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C17.25 4 16.877 4 16.3 4H5.2c-.577 0-.949 0-1.232.024c-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C3 5.25 3 5.623 3 6.2V21a1 1 0 1 1-2 0V6.161c0-.527 0-.981.03-1.356c.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296C4.18 2 4.635 2 5.161 2"></svg:path><svg:path fill="currentColor" d="M6.5 6.5a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2zm5.16 3.51c.115-.01.248-.01.37-.01h1.94c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.19c0 .123 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.546.546c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009h-1.94c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.479c-.01-.114-.009-.247-.009-.369v-1.19c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546a1.3 1.3 0 0 1 .478-.127M6.5 11a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 6.5 11m.75 1.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zM6.5 16a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 6.5 16m.75 1.75a.75.75 0 0 0 0 1.5h4.8a.75.75 0 0 0 0-1.5zm12.36-3.231l3.379 2.902c.442.38.446 1.143.01 1.531l-3.38 3.008c-.7.69-1.814-.01-1.653-.927l.147-.83c-.782.055-1.392.19-1.885.425c-.635.303-1.139.804-1.547 1.687c-.35.755-1.527.42-1.425-.407c.243-1.976.873-3.43 1.91-4.383c.827-.759 1.843-1.137 2.953-1.262l-.147-.796c-.168-.91.93-1.622 1.639-.948"></svg:path>`,
})
export class StashArticleShareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashArticleSolidIcon],svg[stash-article-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 6.5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1m0 3a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5h-1.25a.75.75 0 0 1-.75-.75m0 2.25a.75.75 0 0 1 .75-.75h1.25a.75.75 0 0 1 0 1.5h-1.25a.75.75 0 0 1-.75-.75m0 2.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m4.637-6c-.058 0-.139 0-.212.006a1 1 0 0 0-.379.103a1 1 0 0 0-.437.437c-.076.15-.096.29-.103.379c-.006.073-.006.154-.006.212v1.726c0 .058 0 .139.006.212c.007.088.027.229.103.379a1 1 0 0 0 .437.437c.15.076.29.096.379.103c.073.006.154.006.212.006h2.226c.058 0 .139 0 .212-.006c.088-.007.229-.027.379-.103a1 1 0 0 0 .437-.437a1 1 0 0 0 .103-.379c.006-.073.006-.154.006-.212V9.637c0-.058 0-.139-.006-.212a1 1 0 0 0-.103-.379a1 1 0 0 0-.437-.437a1 1 0 0 0-.379-.103c-.073-.006-.154-.006-.212-.006z"></svg:path><svg:path fill="currentColor" d="M16.33 2.75h-5.66c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 7.05 4.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v10.08H4.5a.75.75 0 0 0-.75.75c0 1.683.572 2.68 1.3 3.225a2.7 2.7 0 0 0 1.284.515a2 2 0 0 0 .156.01c2.447.022 4.895.015 7.342.007q1.834-.006 3.668-.007q.105 0 .2-.027c.383-.034.725-.108 1.049-.273a2.75 2.75 0 0 0 1.201-1.201c.172-.338.24-.694.27-1.074c.03-.365.03-.81.03-1.344V6.67c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03m1.092 16.987l-.053-.011a1.2 1.2 0 0 1-.419-.201c-.272-.204-.7-.708-.7-2.025a.75.75 0 0 0-.75-.75H8.25V6.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h5.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253v10.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.142.072-.296.107-.645.123"></svg:path>`,
})
export class StashArticleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAsteriskIcon],svg[stash-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.25a.75.75 0 0 1 .75.75v2.7l2.339-1.35a.75.75 0 1 1 .75 1.3L13.5 12l2.34 1.35a.75.75 0 0 1-.75 1.3l-2.34-1.351V16a.75.75 0 0 1-1.5 0v-2.701l-2.34 1.35a.75.75 0 0 1-.75-1.298L10.5 12l-2.339-1.35a.75.75 0 1 1 .75-1.3l2.339 1.35V8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAsteriskDuotoneIcon],svg[stash-asterisk-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.25a.75.75 0 0 1 .75.75v2.7l2.339-1.35a.75.75 0 1 1 .75 1.3L13.5 12l2.34 1.35a.75.75 0 0 1-.75 1.3l-2.34-1.351V16a.75.75 0 0 1-1.5 0v-2.701l-2.34 1.35a.75.75 0 0 1-.75-1.298L10.5 12l-2.339-1.35a.75.75 0 1 1 .75-1.3l2.339 1.35V8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashAsteriskDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAsteriskLightIcon],svg[stash-asterisk-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7.5a.5.5 0 0 1 .5.5v3.134l2.714-1.567a.5.5 0 1 1 .5.866L13 12l2.714 1.567a.5.5 0 0 1-.5.866L12.5 12.866V16a.5.5 0 1 1-1 0v-3.134l-2.714 1.567a.5.5 0 0 1-.5-.866L11 12l-2.714-1.567a.5.5 0 1 1 .5-.866l2.714 1.567V8a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashAsteriskLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAsteriskSolidIcon],svg[stash-asterisk-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7a1 1 0 0 1 1 1v2.268l1.964-1.134a1 1 0 1 1 1 1.732L14 12l1.964 1.134a1 1 0 0 1-1 1.732L13 13.732V16a1 1 0 1 1-2 0v-2.268l-1.964 1.134a1 1 0 1 1-1-1.732L10 12l-1.964-1.134a1 1 0 1 1 1-1.732L11 10.268V8a1 1 0 0 1 1-1"></svg:path>`,
})
export class StashAsteriskSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAtSymbolIcon],svg[stash-at-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 11.467a8.217 8.217 0 0 1 8.217-8.217H13.6a7.15 7.15 0 0 1 7.15 7.15v3.267a3.083 3.083 0 0 1-5.783 1.49c-.8.97-1.967 1.593-3.3 1.593c-2.5 0-4.417-2.19-4.417-4.75s1.917-4.75 4.417-4.75c1.133 0 2.147.45 2.916 1.181V8a.75.75 0 0 1 1.5 0v5.667a1.583 1.583 0 0 0 3.167 0V10.4a5.65 5.65 0 0 0-5.65-5.65h-2.133a6.717 6.717 0 0 0-6.717 6.717V12A7.25 7.25 0 0 0 12 19.25h4.667a.75.75 0 0 1 0 1.5H12A8.75 8.75 0 0 1 3.25 12zM14.583 12c0-1.858-1.366-3.25-2.916-3.25c-1.551 0-2.917 1.392-2.917 3.25s1.366 3.25 2.917 3.25s2.916-1.392 2.916-3.25"></svg:path>`,
})
export class StashAtSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAtSymbolDuotoneIcon],svg[stash-at-symbol-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 11.467a8.217 8.217 0 0 1 8.217-8.217H13.6a7.15 7.15 0 0 1 7.15 7.15v3.267a3.083 3.083 0 0 1-5.783 1.49c-.8.97-1.967 1.593-3.3 1.593c-2.5 0-4.417-2.19-4.417-4.75s1.917-4.75 4.417-4.75c1.133 0 2.147.45 2.916 1.181V8a.75.75 0 0 1 1.5 0v5.667a1.583 1.583 0 0 0 3.167 0V10.4a5.65 5.65 0 0 0-5.65-5.65h-2.133a6.717 6.717 0 0 0-6.717 6.717V12A7.25 7.25 0 0 0 12 19.25h4.667a.75.75 0 0 1 0 1.5H12A8.75 8.75 0 0 1 3.25 12zM14.583 12c0-1.858-1.366-3.25-2.916-3.25c-1.551 0-2.917 1.392-2.917 3.25s1.366 3.25 2.917 3.25s2.916-1.392 2.916-3.25"></svg:path>`,
})
export class StashAtSymbolDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAtSymbolLightIcon],svg[stash-at-symbol-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 11.467c0-4.4 3.567-7.967 7.967-7.967H13.6a6.9 6.9 0 0 1 6.9 6.9v3.267a2.833 2.833 0 0 1-5.482 1.007c-.753 1.1-1.961 1.826-3.351 1.826C9.325 16.5 7.5 14.443 7.5 12s1.825-4.5 4.167-4.5c1.281 0 2.409.616 3.166 1.575V8a.5.5 0 0 1 1 0v5.667a1.833 1.833 0 0 0 3.667 0V10.4a5.9 5.9 0 0 0-5.9-5.9h-2.133A6.967 6.967 0 0 0 4.5 11.467V12a7.5 7.5 0 0 0 7.5 7.5h4.667a.5.5 0 0 1 0 1H12A8.5 8.5 0 0 1 3.5 12zM14.833 12c0-1.975-1.457-3.5-3.166-3.5C9.957 8.5 8.5 10.025 8.5 12s1.458 3.5 3.167 3.5s3.166-1.525 3.166-3.5"></svg:path>`,
})
export class StashAtSymbolLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashAtSymbolSolidIcon],svg[stash-at-symbol-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.467A8.467 8.467 0 0 1 11.467 3H13.6a7.4 7.4 0 0 1 7.4 7.4v3.267a3.333 3.333 0 0 1-6.068 1.906c-.83.876-1.97 1.427-3.265 1.427C9.009 17 7 14.678 7 12s2.01-5 4.667-5c1.009 0 1.924.335 2.672.897A1 1 0 0 1 16.333 8v5.667a1.333 1.333 0 0 0 2.667 0V10.4A5.4 5.4 0 0 0 13.6 5h-2.133A6.467 6.467 0 0 0 5 11.467V12a7 7 0 0 0 7 7h4.667a1 1 0 1 1 0 2H12a9 9 0 0 1-9-9zM14.333 12c0-1.74-1.274-3-2.666-3C10.274 9 9 10.26 9 12s1.274 3 2.667 3s2.666-1.26 2.666-3"></svg:path>`,
})
export class StashAtSymbolSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBadgeDollarIcon],svg[stash-badge-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.35 3.797a2.5 2.5 0 0 1 1.3 0c.487.131.908.458 1.42.854l.1.078l.197.152c.243.187.301.23.359.261q.094.051.196.081c.063.019.134.03.438.07l.247.03l.126.017c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.016.126l.032.247c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.152.197l.078.1c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.078.1l-.152.197c-.187.243-.23.301-.261.359a1 1 0 0 0-.081.196c-.019.063-.03.134-.07.438l-.03.247l-.017.126c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.126.016l-.247.032c-.304.039-.375.05-.438.069a1 1 0 0 0-.196.08c-.058.032-.116.075-.359.262l-.197.152l-.1.078c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.1-.078l-.197-.152c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.247-.03l-.126-.017c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.016-.126l-.032-.247c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.152-.197l-.078-.1c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.078-.1l.152-.197c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.03-.247l.017-.126c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.126-.016l.247-.032c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.197-.152l.1-.078c.512-.396.933-.723 1.42-.854m.91 1.449a1 1 0 0 0-.52 0c-.158.042-.326.155-.993.67l-.197.152l-.036.027c-.19.147-.346.269-.523.365a2.5 2.5 0 0 1-.488.202c-.193.057-.39.082-.628.112l-.044.006l-.247.032c-.836.107-1.034.147-1.176.228a1 1 0 0 0-.368.368c-.081.142-.121.34-.228 1.176l-.032.247l-.006.044a4 4 0 0 1-.112.628a2.5 2.5 0 0 1-.202.488a4 4 0 0 1-.365.523l-.027.036l-.152.197c-.515.667-.628.835-.67.993a1 1 0 0 0 0 .52c.042.158.155.326.67.993l.152.197l.027.036c.147.19.269.346.365.523a2.5 2.5 0 0 1 .202.488c.057.193.082.39.112.628l.006.044l.032.247c.107.836.147 1.035.228 1.176a1 1 0 0 0 .368.368c.142.081.34.121 1.176.228l.247.032l.044.006c.238.03.435.055.628.112q.255.075.488.203c.177.095.334.217.523.364l.036.027l.197.152c.667.515.835.628.993.67a1 1 0 0 0 .52 0c.158-.042.326-.155.993-.67l.197-.152l.036-.027c.19-.147.346-.269.523-.364a2.5 2.5 0 0 1 .488-.203c.193-.057.39-.082.628-.112l.044-.006l.247-.032c.836-.107 1.035-.147 1.176-.228a1 1 0 0 0 .368-.368c.081-.141.121-.34.228-1.176l.032-.247l.006-.044c.03-.238.055-.435.112-.628a2.5 2.5 0 0 1 .203-.488c.095-.177.217-.334.364-.523l.027-.036l.152-.197c.515-.667.628-.835.67-.993a1 1 0 0 0 0-.52c-.042-.158-.155-.326-.67-.993l-.152-.197l-.027-.036a4 4 0 0 1-.364-.523a2.5 2.5 0 0 1-.203-.488a4 4 0 0 1-.112-.628l-.006-.044l-.032-.247c-.107-.836-.147-1.034-.228-1.176a1 1 0 0 0-.368-.368c-.141-.081-.34-.121-1.176-.228l-.247-.032l-.044-.006a4 4 0 0 1-.628-.112a2.5 2.5 0 0 1-.488-.202a4 4 0 0 1-.523-.365l-.036-.027l-.197-.152c-.667-.515-.835-.628-.993-.67"></svg:path><svg:path fill="currentColor" d="M12.057 7.4c.351 0 .636.293.636.655v.655h.002c1.057 0 1.908.878 1.908 1.964a.646.646 0 0 1-.637.655a.646.646 0 0 1-.636-.655a.64.64 0 0 0-.635-.655h-1.437a.48.48 0 0 0-.475.486c0 .243.053.31.064.325c.02.026.075.075.258.14l2.31.787c.268.093.59.243.835.548c.253.318.353.713.353 1.156c0 .992-.784 1.796-1.748 1.796h-.162v.655a.646.646 0 0 1-.636.655a.646.646 0 0 1-.637-.655v-.655h-.002c-1.057 0-1.908-.879-1.908-1.964c0-.362.285-.655.637-.655c.351 0 .636.293.636.655c0 .364.283.655.635.655h1.437c.262 0 .475-.22.475-.487c0-.242-.053-.31-.064-.324c-.02-.026-.075-.076-.258-.14l-2.31-.787c-.268-.093-.59-.243-.835-.549c-.253-.317-.353-.713-.353-1.156c0-.992.784-1.796 1.748-1.796h.162v-.654c0-.362.285-.655.636-.655"></svg:path>`,
})
export class StashBadgeDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBadgeDollarDuotoneIcon],svg[stash-badge-dollar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.35 3.797a2.5 2.5 0 0 1 1.3 0c.487.131.908.458 1.42.854l.1.078l.197.152c.243.187.301.23.359.261q.094.051.196.081c.063.019.134.03.438.07l.247.03l.126.017c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.016.126l.032.247c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.152.197l.078.1c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.078.1l-.152.197c-.187.243-.23.301-.261.359a1 1 0 0 0-.081.196c-.019.063-.03.134-.07.438l-.03.247l-.017.126c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.126.016l-.247.032c-.304.039-.375.05-.438.069a1 1 0 0 0-.196.08c-.058.032-.116.075-.359.262l-.197.152l-.1.078c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.1-.078l-.197-.152c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.247-.03l-.126-.017c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.016-.126l-.032-.247c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.152-.197l-.078-.1c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.078-.1l.152-.197c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.03-.247l.017-.126c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.126-.016l.247-.032c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.197-.152l.1-.078c.512-.396.933-.723 1.42-.854m.91 1.449a1 1 0 0 0-.52 0c-.158.042-.326.155-.993.67l-.197.152l-.036.027c-.19.147-.346.269-.523.365a2.5 2.5 0 0 1-.488.202c-.193.057-.39.082-.628.112l-.044.006l-.247.032c-.836.107-1.034.147-1.176.228a1 1 0 0 0-.368.368c-.081.142-.121.34-.228 1.176l-.032.247l-.006.044a4 4 0 0 1-.112.628a2.5 2.5 0 0 1-.202.488a4 4 0 0 1-.365.523l-.027.036l-.152.197c-.515.667-.628.835-.67.993a1 1 0 0 0 0 .52c.042.158.155.326.67.993l.152.197l.027.036c.147.19.269.346.365.523a2.5 2.5 0 0 1 .202.488c.057.193.082.39.112.628l.006.044l.032.247c.107.836.147 1.035.228 1.176a1 1 0 0 0 .368.368c.142.081.34.121 1.176.228l.247.032l.044.006c.238.03.435.055.628.112q.255.075.488.203c.177.095.334.217.523.364l.036.027l.197.152c.667.515.835.628.993.67a1 1 0 0 0 .52 0c.158-.042.326-.155.993-.67l.197-.152l.036-.027c.19-.147.346-.269.523-.364a2.5 2.5 0 0 1 .488-.203c.193-.057.39-.082.628-.112l.044-.006l.247-.032c.836-.107 1.035-.147 1.176-.228a1 1 0 0 0 .368-.368c.081-.141.121-.34.228-1.176l.032-.247l.006-.044c.03-.238.055-.435.112-.628a2.5 2.5 0 0 1 .203-.488c.095-.177.217-.334.364-.523l.027-.036l.152-.197c.515-.667.628-.835.67-.993a1 1 0 0 0 0-.52c-.042-.158-.155-.326-.67-.993l-.152-.197l-.027-.036a4 4 0 0 1-.364-.523a2.5 2.5 0 0 1-.203-.488a4 4 0 0 1-.112-.628l-.006-.044l-.032-.247c-.107-.836-.147-1.034-.228-1.176a1 1 0 0 0-.368-.368c-.141-.081-.34-.121-1.176-.228l-.247-.032l-.044-.006a4 4 0 0 1-.628-.112a2.5 2.5 0 0 1-.488-.202a4 4 0 0 1-.523-.365l-.036-.027l-.197-.152c-.667-.515-.835-.628-.993-.67"></svg:path><svg:path fill="currentColor" d="M12.056 7.4c.352 0 .637.293.637.655v.655h.002c1.056 0 1.907.878 1.907 1.964a.646.646 0 0 1-.636.655a.646.646 0 0 1-.637-.655a.64.64 0 0 0-.635-.655h-1.437a.48.48 0 0 0-.474.486c0 .243.052.31.064.325c.02.026.075.075.258.14l2.309.787c.268.093.591.243.835.548c.254.318.353.714.353 1.156c0 .993-.784 1.796-1.747 1.796h-.162v.655a.646.646 0 0 1-.637.655a.646.646 0 0 1-.636-.655v-.655h-.002c-1.057 0-1.908-.879-1.908-1.964c0-.362.285-.655.636-.655s.637.293.637.655c0 .364.283.655.635.655h1.437c.262 0 .474-.22.474-.487c0-.242-.052-.31-.063-.324c-.021-.026-.076-.076-.258-.14l-2.31-.787c-.268-.093-.591-.243-.835-.549c-.254-.317-.353-.713-.353-1.156c0-.992.784-1.795 1.747-1.795h.162v-.655c0-.362.285-.655.637-.655" opacity=".5"></svg:path>`,
})
export class StashBadgeDollarDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBadgeDollarLightIcon],svg[stash-badge-dollar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.415 4.039a2.25 2.25 0 0 1 1.17 0c.436.117.818.413 1.352.825l.08.063l.198.152c.236.182.312.24.392.283q.117.063.244.101c.087.026.181.04.477.077l.247.032l.101.013c.669.085 1.148.146 1.54.372c.344.198.63.483.827.827c.226.392.287.871.372 1.54l.013.101l.032.247c.038.296.051.39.077.477q.038.128.101.245c.043.079.1.155.283.391l.152.198l.063.08c.412.534.708.916.825 1.352c.103.383.103.787 0 1.17c-.117.436-.413.818-.825 1.352l-.063.08l-.152.198c-.182.236-.24.312-.283.392q-.063.117-.101.244c-.026.087-.04.181-.077.477l-.032.247l-.013.101c-.085.669-.146 1.148-.372 1.54a2.24 2.24 0 0 1-.827.827c-.392.226-.871.287-1.54.372l-.101.013l-.247.032c-.296.038-.39.051-.477.077a1.3 1.3 0 0 0-.245.101c-.079.043-.155.1-.391.283l-.198.152l-.08.063c-.534.412-.916.708-1.352.825a2.25 2.25 0 0 1-1.17 0c-.436-.117-.818-.413-1.352-.825l-.08-.063l-.198-.152c-.236-.182-.312-.24-.391-.283a1.3 1.3 0 0 0-.245-.101c-.087-.026-.181-.04-.477-.077l-.247-.032l-.101-.013c-.669-.085-1.148-.146-1.54-.372a2.25 2.25 0 0 1-.827-.827c-.226-.392-.287-.871-.372-1.54l-.013-.101l-.032-.247c-.038-.296-.051-.39-.077-.477a1.3 1.3 0 0 0-.101-.245c-.043-.079-.1-.155-.283-.391l-.152-.198l-.063-.08c-.412-.534-.708-.916-.825-1.352a2.25 2.25 0 0 1 0-1.17c.117-.436.413-.818.825-1.352l.063-.08l.152-.198c.182-.236.24-.312.283-.391a1.3 1.3 0 0 0 .101-.245c.026-.087.04-.181.077-.477l.032-.247l.013-.101c.085-.669.146-1.148.372-1.54a2.25 2.25 0 0 1 .827-.827c.392-.226.871-.287 1.54-.372l.101-.013l.247-.032c.296-.038.39-.051.477-.077a1.3 1.3 0 0 0 .245-.101c.079-.043.155-.1.391-.283l.198-.152l.08-.063c.534-.412.916-.708 1.352-.825m.91.965a1.25 1.25 0 0 0-.65 0c-.218.06-.432.213-1.081.714l-.197.152l-.028.022c-.197.152-.34.262-.497.348a2.3 2.3 0 0 1-.44.182a4 4 0 0 1-.633.11l-.247.032c-.813.104-1.073.147-1.269.26a1.25 1.25 0 0 0-.46.46c-.112.195-.155.455-.26 1.268l-.031.247l-.004.036a4 4 0 0 1-.106.597a2.3 2.3 0 0 1-.182.44c-.086.158-.196.3-.348.497l-.022.028l-.152.197c-.501.649-.655.863-.714 1.08a1.25 1.25 0 0 0 0 .651c.06.218.213.432.714 1.081l.152.197l.022.028c.152.197.262.34.348.497q.114.21.182.44c.051.173.074.35.106.598l.004.035l.032.247c.104.813.147 1.073.26 1.269c.11.19.268.35.46.46c.195.112.455.155 1.268.26l.247.031l.036.005c.246.031.424.054.597.105q.23.068.44.182c.158.086.3.196.497.348l.028.022l.197.152c.649.501.863.655 1.08.714c.214.057.438.057.651 0c.218-.059.432-.213 1.081-.714l.197-.152l.028-.022c.197-.152.34-.262.497-.348q.21-.114.44-.182a4 4 0 0 1 .633-.11l.247-.032c.813-.104 1.073-.147 1.269-.26c.19-.11.35-.268.46-.46c.112-.195.155-.455.26-1.268l.031-.247l.005-.036c.031-.246.054-.424.105-.597q.068-.23.182-.44c.086-.158.196-.3.348-.497l.022-.028l.152-.197c.501-.649.655-.863.714-1.08a1.25 1.25 0 0 0 0-.651c-.059-.218-.213-.432-.714-1.081l-.152-.197l-.022-.028a4 4 0 0 1-.348-.497a2.3 2.3 0 0 1-.182-.44a4 4 0 0 1-.11-.633l-.032-.247c-.104-.813-.147-1.073-.26-1.269a1.25 1.25 0 0 0-.46-.46c-.195-.112-.455-.155-1.268-.26l-.247-.031l-.036-.004a4 4 0 0 1-.597-.106a2.3 2.3 0 0 1-.44-.182c-.158-.086-.3-.196-.497-.348l-.028-.022l-.197-.152c-.649-.501-.863-.655-1.08-.714"></svg:path><svg:path fill="currentColor" d="M12.057 7.4c.351 0 .636.293.636.655v.655h.002c1.057 0 1.908.878 1.908 1.964a.646.646 0 0 1-.637.655a.646.646 0 0 1-.636-.655a.64.64 0 0 0-.635-.655h-1.437a.48.48 0 0 0-.475.486c0 .243.053.31.064.325c.02.026.075.075.258.14l2.31.787c.268.093.59.243.835.548c.253.318.353.714.353 1.156c0 .993-.784 1.796-1.748 1.796h-.162v.655a.646.646 0 0 1-.636.655a.646.646 0 0 1-.637-.655v-.655h-.002c-1.057 0-1.908-.879-1.908-1.964c0-.362.285-.655.637-.655c.351 0 .636.293.636.655c0 .364.283.655.635.655h1.437c.262 0 .475-.22.475-.487c0-.242-.053-.31-.064-.324c-.02-.026-.075-.076-.258-.14l-2.31-.787c-.268-.093-.59-.243-.835-.549c-.253-.317-.353-.713-.353-1.156c0-.992.784-1.795 1.748-1.795h.162v-.655c0-.362.285-.655.636-.655"></svg:path>`,
})
export class StashBadgeDollarLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBadgeDollarSolidIcon],svg[stash-badge-dollar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.65 3.797a2.5 2.5 0 0 0-1.3 0c-.487.131-.909.458-1.42.854l-.298.23c-.242.187-.3.23-.358.261a1 1 0 0 1-.196.081c-.063.019-.135.03-.438.07l-.373.047c-.642.082-1.171.149-1.608.4a2.5 2.5 0 0 0-.92.92c-.25.436-.318.965-.4 1.607l-.047.373c-.04.304-.05.375-.07.438a1 1 0 0 1-.08.196c-.032.058-.074.116-.261.359l-.23.297c-.397.512-.723.933-.854 1.42a2.5 2.5 0 0 0 0 1.3c.131.487.457.908.854 1.42l.23.297c.187.243.23.301.26.359a1 1 0 0 1 .082.196c.018.063.03.134.069.438l.048.373c.081.642.148 1.17.4 1.607c.22.383.537.7.92.92c.436.251.965.318 1.607.4l.373.048c.303.039.375.05.438.069q.102.03.196.08c.057.032.116.075.358.262l.298.23c.511.396.933.723 1.42.854a2.5 2.5 0 0 0 1.3 0c.486-.131.908-.458 1.42-.854l.297-.23c.242-.187.3-.23.359-.261q.093-.051.195-.081c.063-.019.135-.03.438-.07l.373-.047c.643-.082 1.171-.149 1.608-.4a2.5 2.5 0 0 0 .92-.92c.25-.436.318-.965.4-1.607l.047-.373c.04-.304.05-.375.07-.438a1 1 0 0 1 .08-.196c.032-.058.074-.116.261-.359l.23-.297c.397-.512.723-.933.854-1.42a2.5 2.5 0 0 0 0-1.3c-.13-.487-.457-.908-.854-1.42l-.23-.297c-.187-.243-.23-.301-.26-.359a1 1 0 0 1-.082-.196c-.018-.063-.03-.134-.069-.438l-.047-.373c-.082-.642-.15-1.17-.4-1.607a2.5 2.5 0 0 0-.92-.92c-.437-.251-.965-.318-1.608-.4l-.373-.048c-.303-.039-.375-.05-.438-.069a1 1 0 0 1-.195-.08c-.058-.032-.117-.075-.359-.262l-.298-.23c-.511-.396-.933-.723-1.42-.854m.043 4.258v.655h.002c1.056 0 1.907.878 1.907 1.964a.646.646 0 0 1-.636.655a.646.646 0 0 1-.637-.655a.64.64 0 0 0-.635-.655h-1.437a.48.48 0 0 0-.474.486c0 .243.052.31.064.325c.02.026.075.075.258.14l2.309.787c.268.093.591.243.835.548c.254.318.353.714.353 1.156c0 .993-.784 1.796-1.747 1.796h-.162v.655a.646.646 0 0 1-.637.655a.646.646 0 0 1-.636-.655v-.655h-.002c-1.057 0-1.908-.879-1.908-1.964c0-.362.285-.655.636-.655s.637.293.637.655c0 .364.283.655.635.655h1.437c.262 0 .474-.22.474-.487c0-.242-.052-.31-.063-.324c-.021-.026-.076-.076-.258-.14l-2.31-.787c-.268-.093-.591-.243-.835-.549c-.254-.317-.353-.713-.353-1.156c0-.992.784-1.795 1.747-1.795h.162v-.655c0-.362.285-.655.637-.655s.637.293.637.655"></svg:path>`,
})
export class StashBadgeDollarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBadgeVerifiedIcon],svg[stash-badge-verified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.35 3.797a2.5 2.5 0 0 1 1.3 0c.487.131.908.458 1.42.854l.1.078l.197.152c.243.187.301.23.359.261q.094.051.196.081c.063.019.134.03.438.07l.247.03l.126.017c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.016.126l.032.247c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.152.197l.078.1c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.078.1l-.152.197c-.187.243-.23.301-.261.359a1 1 0 0 0-.081.196c-.019.063-.03.134-.07.438l-.03.247l-.017.126c-.082.642-.149 1.17-.4 1.607c-.22.383-.537.7-.92.92c-.436.251-.965.318-1.607.4l-.126.016l-.247.032c-.304.039-.375.05-.438.069a1 1 0 0 0-.196.08c-.058.032-.116.075-.359.262l-.197.152l-.1.078c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.1-.078l-.197-.152c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.247-.03l-.126-.017c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.016-.126l-.032-.247c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.152-.197l-.078-.1c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.078-.1l.152-.197c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.03-.247l.017-.126c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.126-.016l.247-.032c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.197-.152l.1-.078c.512-.396.933-.723 1.42-.854m.91 1.449a1 1 0 0 0-.52 0c-.158.042-.326.155-.993.67l-.197.152l-.036.027c-.19.147-.346.269-.523.365a2.5 2.5 0 0 1-.488.202a4 4 0 0 1-.628.112l-.044.006l-.247.032c-.836.107-1.034.147-1.176.228a1 1 0 0 0-.368.368c-.081.142-.121.34-.228 1.176l-.032.247l-.006.044c-.03.238-.055.435-.112.628a2.5 2.5 0 0 1-.202.488a4 4 0 0 1-.365.523l-.027.036l-.152.197c-.515.667-.628.835-.67.993a1 1 0 0 0 0 .52c.042.158.155.326.67.993l.152.197l.027.036c.147.19.269.346.365.523a2.5 2.5 0 0 1 .202.488a4 4 0 0 1 .118.672l.032.247c.107.836.147 1.035.228 1.176a1 1 0 0 0 .368.368c.142.081.34.121 1.176.228l.247.032l.044.006c.238.03.435.055.628.112q.255.075.488.203c.177.095.334.217.523.364l.036.027l.197.152c.667.515.835.628.993.67a1 1 0 0 0 .52 0c.158-.042.326-.155.993-.67l.197-.152l.036-.027c.19-.147.346-.269.523-.364a2.5 2.5 0 0 1 .488-.203c.193-.057.39-.082.628-.112l.044-.006l.247-.032c.836-.107 1.035-.147 1.176-.228a1 1 0 0 0 .368-.368c.081-.141.121-.34.228-1.176l.032-.247l.006-.044c.03-.238.055-.435.112-.628a2.5 2.5 0 0 1 .203-.488c.095-.177.217-.334.364-.523l.027-.036l.152-.197c.515-.667.628-.835.67-.993a1 1 0 0 0 0-.52c-.042-.158-.155-.326-.67-.993l-.152-.197l-.027-.036a4 4 0 0 1-.364-.523a2.5 2.5 0 0 1-.203-.488a4 4 0 0 1-.112-.628l-.006-.044l-.032-.247c-.107-.836-.147-1.034-.228-1.176a1 1 0 0 0-.368-.368c-.141-.081-.34-.121-1.176-.228l-.247-.032l-.044-.006a4 4 0 0 1-.628-.112a2.5 2.5 0 0 1-.488-.202a4 4 0 0 1-.523-.365l-.036-.027l-.197-.152c-.667-.515-.835-.628-.993-.67"></svg:path><svg:path fill="currentColor" d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class StashBadgeVerifiedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBadgeVerifiedDuotoneIcon],svg[stash-badge-verified-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.35 3.797a2.5 2.5 0 0 1 1.3 0c.487.131.908.458 1.42.854l.1.078l.197.152c.243.187.301.23.359.261q.094.051.196.081c.063.019.134.03.438.07l.247.03l.126.017c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.016.126l.032.247c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.152.197l.078.1c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.078.1l-.152.197c-.187.243-.23.301-.261.359a1 1 0 0 0-.081.196c-.019.063-.03.134-.07.438l-.03.247l-.017.126c-.082.642-.149 1.17-.4 1.607c-.22.383-.537.7-.92.92c-.436.251-.965.318-1.607.4l-.126.016l-.247.032c-.304.039-.375.05-.438.069a1 1 0 0 0-.196.08c-.058.032-.116.075-.359.262l-.197.152l-.1.078c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.1-.078l-.197-.152c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.247-.03l-.126-.017c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.016-.126l-.032-.247c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.152-.197l-.078-.1c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.078-.1l.152-.197c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.03-.247l.017-.126c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.126-.016l.247-.032c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.197-.152l.1-.078c.512-.396.933-.723 1.42-.854m.91 1.449a1 1 0 0 0-.52 0c-.158.042-.326.155-.993.67l-.197.152l-.036.027c-.19.147-.346.269-.523.365a2.5 2.5 0 0 1-.488.202a4 4 0 0 1-.628.112l-.044.006l-.247.032c-.836.107-1.034.147-1.176.228a1 1 0 0 0-.368.368c-.081.142-.121.34-.228 1.176l-.032.247l-.006.044c-.03.238-.055.435-.112.628a2.5 2.5 0 0 1-.202.488a4 4 0 0 1-.365.523l-.027.036l-.152.197c-.515.667-.628.835-.67.993a1 1 0 0 0 0 .52c.042.158.155.326.67.993l.152.197l.027.036c.147.19.269.346.365.523a2.5 2.5 0 0 1 .202.488a4 4 0 0 1 .118.672l.032.247c.107.836.147 1.035.228 1.176a1 1 0 0 0 .368.368c.142.081.34.121 1.176.228l.247.032l.044.006c.238.03.435.055.628.112q.255.075.488.203c.177.095.334.217.523.364l.036.027l.197.152c.667.515.835.628.993.67a1 1 0 0 0 .52 0c.158-.042.326-.155.993-.67l.197-.152l.036-.027c.19-.147.346-.269.523-.364a2.5 2.5 0 0 1 .488-.203c.193-.057.39-.082.628-.112l.044-.006l.247-.032c.836-.107 1.035-.147 1.176-.228a1 1 0 0 0 .368-.368c.081-.141.121-.34.228-1.176l.032-.247l.006-.044c.03-.238.055-.435.112-.628a2.5 2.5 0 0 1 .203-.488c.095-.177.217-.334.364-.523l.027-.036l.152-.197c.515-.667.628-.835.67-.993a1 1 0 0 0 0-.52c-.042-.158-.155-.326-.67-.993l-.152-.197l-.027-.036a4 4 0 0 1-.364-.523a2.5 2.5 0 0 1-.203-.488a4 4 0 0 1-.112-.628l-.006-.044l-.032-.247c-.107-.836-.147-1.034-.228-1.176a1 1 0 0 0-.368-.368c-.141-.081-.34-.121-1.176-.228l-.247-.032l-.044-.006a4 4 0 0 1-.628-.112a2.5 2.5 0 0 1-.488-.202a4 4 0 0 1-.523-.365l-.036-.027l-.197-.152c-.667-.515-.835-.628-.993-.67"></svg:path><svg:path fill="currentColor" d="M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0" opacity=".5"></svg:path>`,
})
export class StashBadgeVerifiedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBadgeVerifiedLightIcon],svg[stash-badge-verified-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.415 4.039a2.25 2.25 0 0 1 1.17 0c.436.117.818.413 1.352.825l.08.063l.198.152c.236.182.312.24.392.283q.117.063.244.101c.087.026.181.04.477.077l.247.032l.101.013c.669.085 1.148.146 1.54.372c.344.198.63.483.827.827c.226.392.287.871.372 1.54l.013.101l.032.247c.038.296.051.39.077.477q.038.128.101.245c.043.079.1.155.283.391l.152.198l.063.08c.412.534.708.916.825 1.352c.103.383.103.787 0 1.17c-.117.436-.413.818-.825 1.352l-.063.08l-.152.198c-.182.236-.24.312-.283.392q-.063.117-.101.244c-.026.087-.04.181-.077.477l-.032.247l-.013.101c-.085.669-.146 1.148-.372 1.54a2.24 2.24 0 0 1-.827.827c-.392.226-.871.287-1.54.372l-.101.013l-.247.032c-.296.038-.39.051-.477.077a1.3 1.3 0 0 0-.245.101c-.079.043-.155.1-.391.283l-.197.152l-.081.063c-.534.412-.916.708-1.352.825a2.25 2.25 0 0 1-1.17 0c-.436-.117-.818-.413-1.352-.825l-.08-.063l-.198-.152c-.236-.182-.312-.24-.391-.283a1.3 1.3 0 0 0-.245-.101c-.087-.026-.181-.04-.477-.077l-.247-.032l-.101-.013c-.669-.085-1.148-.146-1.54-.372a2.25 2.25 0 0 1-.827-.827c-.226-.392-.287-.871-.372-1.54l-.013-.101l-.032-.247c-.038-.296-.051-.39-.077-.477a1.3 1.3 0 0 0-.101-.245c-.043-.079-.1-.155-.283-.391l-.152-.197l-.063-.081c-.412-.534-.708-.916-.825-1.352a2.25 2.25 0 0 1 0-1.17c.117-.436.413-.818.825-1.352l.063-.08l.152-.198c.182-.236.24-.312.283-.391a1.3 1.3 0 0 0 .101-.245c.026-.087.04-.181.077-.477l.032-.247l.013-.101c.085-.669.146-1.148.372-1.54a2.25 2.25 0 0 1 .827-.827c.392-.226.871-.287 1.54-.372l.101-.013l.247-.032c.296-.038.39-.051.477-.077a1.3 1.3 0 0 0 .245-.101c.079-.043.155-.1.391-.283l.198-.152l.08-.063c.534-.412.916-.708 1.352-.825m.91.965a1.25 1.25 0 0 0-.65 0c-.218.06-.432.213-1.081.714l-.197.152l-.028.022c-.197.152-.34.262-.497.348a2.3 2.3 0 0 1-.44.182a4 4 0 0 1-.597.106l-.036.004l-.247.032c-.813.104-1.073.147-1.269.26a1.25 1.25 0 0 0-.46.46c-.112.195-.155.455-.26 1.268l-.031.247l-.004.036c-.032.246-.055.424-.106.597a2.3 2.3 0 0 1-.182.44c-.086.158-.196.3-.348.497l-.022.028l-.152.197c-.501.649-.655.863-.714 1.08a1.25 1.25 0 0 0 0 .651c.06.218.213.432.714 1.081l.152.197l.022.028c.152.197.262.34.348.497q.114.21.182.44c.051.173.074.35.106.598l.004.035l.032.247c.104.813.147 1.073.26 1.269c.11.19.268.35.46.46c.195.112.455.155 1.268.26l.247.031l.036.005c.246.031.424.054.597.105q.23.068.44.182c.158.086.3.196.497.348l.028.022l.197.152c.649.501.863.655 1.08.714c.214.057.438.057.651 0c.218-.059.432-.213 1.081-.714l.197-.152l.028-.022c.197-.152.34-.262.497-.348q.21-.114.44-.182c.173-.051.35-.074.597-.105l.036-.005l.247-.032c.813-.104 1.073-.147 1.269-.26c.19-.11.35-.268.46-.46c.112-.195.155-.455.26-1.268l.031-.247l.005-.036c.031-.246.054-.424.105-.597q.068-.23.182-.44c.086-.158.196-.3.348-.497l.022-.028l.152-.197c.501-.649.655-.863.714-1.08a1.25 1.25 0 0 0 0-.651c-.059-.218-.213-.432-.714-1.081l-.152-.197l-.022-.028a4 4 0 0 1-.348-.497a2.3 2.3 0 0 1-.182-.44a4 4 0 0 1-.11-.633l-.032-.247c-.104-.813-.147-1.073-.26-1.269a1.25 1.25 0 0 0-.46-.46c-.195-.112-.455-.155-1.268-.26l-.247-.031l-.036-.004a4 4 0 0 1-.597-.106a2.3 2.3 0 0 1-.44-.182c-.158-.086-.3-.196-.497-.348l-.028-.022l-.197-.152c-.649-.501-.863-.655-1.08-.714"></svg:path><svg:path fill="currentColor" d="M15.53 9.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06L11 12.94l3.47-3.47a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class StashBadgeVerifiedLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBadgeVerifiedSolidIcon],svg[stash-badge-verified-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.65 3.797c.487.131.908.458 1.42.854l.297.23c.243.187.301.23.359.261a1 1 0 0 0 .196.081c.063.019.134.03.438.07l.373.047c.642.082 1.17.149 1.607.4c.383.22.7.537.92.92c.251.436.318.965.4 1.607l.048.373c.039.304.05.375.069.438q.03.102.08.196c.032.058.075.116.262.359l.23.297c.396.512.723.933.854 1.42a2.5 2.5 0 0 1 0 1.3c-.131.487-.458.908-.854 1.42l-.23.297c-.187.243-.23.301-.261.359q-.051.094-.081.196c-.019.063-.03.134-.07.438l-.047.373c-.082.642-.149 1.17-.4 1.607a2.5 2.5 0 0 1-.92.92c-.436.251-.965.318-1.607.4l-.373.048c-.304.039-.375.05-.438.069q-.102.03-.196.08c-.058.032-.116.075-.359.262l-.297.23c-.512.396-.933.723-1.42.854a2.5 2.5 0 0 1-1.3 0c-.487-.131-.908-.458-1.42-.854l-.297-.23c-.243-.187-.301-.23-.359-.261a1 1 0 0 0-.196-.081c-.063-.019-.134-.03-.438-.07l-.373-.047c-.642-.082-1.17-.149-1.607-.4a2.5 2.5 0 0 1-.92-.92c-.251-.436-.318-.965-.4-1.607l-.048-.373c-.039-.304-.05-.375-.069-.438a1 1 0 0 0-.08-.196c-.032-.058-.075-.116-.262-.359l-.23-.297c-.396-.512-.723-.933-.854-1.42a2.5 2.5 0 0 1 0-1.3c.131-.487.458-.908.854-1.42l.23-.297c.187-.243.23-.301.261-.359a1 1 0 0 0 .081-.196c.019-.063.03-.134.07-.438l.047-.373c.082-.642.149-1.17.4-1.607a2.5 2.5 0 0 1 .92-.92c.436-.251.965-.318 1.607-.4l.373-.048c.304-.039.375-.05.438-.069a1 1 0 0 0 .196-.08c.058-.032.116-.075.359-.262l.297-.23c.512-.396.933-.723 1.42-.854a2.5 2.5 0 0 1 1.3 0m3.057 5.496a1 1 0 0 0-1.414 0L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class StashBadgeVerifiedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBalanceIcon],svg[stash-balance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25a2.75 2.75 0 0 0-2.703 3.26c-.577.315-.981.683-1.29.964q-.144.134-.264.235a2.1 2.1 0 0 1-.634.382c-.247.09-.589.159-1.109.159a.75.75 0 1 0 0 1.5c.652 0 1.177-.086 1.626-.251c.454-.167.79-.4 1.074-.635c.153-.127.284-.245.407-.357c.272-.246.508-.46.86-.655c.34.373.783.653 1.283.795V16.5c0 1.168-.236 1.987-.606 2.496c-.344.472-.856.754-1.644.754a.75.75 0 0 0 0 1.5c1.212 0 2.2-.468 2.857-1.371q.063-.09.123-.18q.191.283.427.519c.727.726 1.68 1.032 2.593 1.032a.75.75 0 0 0 0-1.5c-.586 0-1.133-.194-1.532-.593c-.393-.393-.718-1.06-.718-2.157V7.646a2.75 2.75 0 0 0 1.283-.795c.352.196.588.41.86.656c.124.112.255.23.407.357c.285.236.62.468 1.074.635c.45.165.974.251 1.626.251a.75.75 0 0 0 0-1.5c-.52 0-.862-.068-1.108-.16a2.1 2.1 0 0 1-.634-.38a8 8 0 0 1-.265-.236c-.309-.28-.713-.649-1.29-.964q.046-.248.047-.51A2.75 2.75 0 0 0 12 2.25M10.75 5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path fill="currentColor" d="M2.5 13.25a.75.75 0 0 0-.75.75a4.25 4.25 0 0 0 8.5 0a.75.75 0 0 0-.75-.75h-.532L7.111 9.457l-.018-.035a1.25 1.25 0 0 0-2.203.035L3.032 13.25zm.983 1.5h5.164a2.751 2.751 0 0 1-5.293 0zm3.815-1.5H4.702L6 10.6zm6.452.75a.75.75 0 0 1 .75-.75h.532l1.858-3.793l.017-.035a1.25 1.25 0 0 1 2.204.035l1.857 3.793h.532a.75.75 0 0 1 .75.75a4.25 4.25 0 0 1-8.5 0m6.735.75h-5.132a2.751 2.751 0 0 0 5.294 0zm-1.187-1.5L18 10.6l-1.297 2.65z"></svg:path>`,
})
export class StashBalanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBalanceDuotoneIcon],svg[stash-balance-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17.5A3.5 3.5 0 0 1 2.5 14h7A3.5 3.5 0 0 1 6 17.5m12 0a3.5 3.5 0 0 1-3.5-3.5h7a3.5 3.5 0 0 1-3.5 3.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 2.25a2.75 2.75 0 0 0-2.703 3.26c-.577.315-.981.683-1.29.964q-.144.134-.264.235a2.1 2.1 0 0 1-.634.382c-.247.09-.589.159-1.109.159a.75.75 0 1 0 0 1.5c.652 0 1.177-.086 1.626-.251c.454-.167.79-.4 1.074-.635c.153-.127.284-.245.407-.357c.272-.246.508-.46.86-.655c.34.373.783.653 1.283.795V16.5c0 1.168-.236 1.987-.606 2.496c-.344.472-.856.754-1.644.754a.75.75 0 0 0 0 1.5c1.212 0 2.2-.468 2.857-1.371q.063-.09.123-.18q.191.283.427.519c.727.726 1.68 1.032 2.593 1.032a.75.75 0 0 0 0-1.5c-.586 0-1.133-.194-1.532-.593c-.393-.393-.718-1.06-.718-2.157V7.646a2.75 2.75 0 0 0 1.283-.795c.352.196.588.41.86.656c.124.112.255.23.407.357c.285.236.62.468 1.074.635c.45.165.974.251 1.626.251a.75.75 0 0 0 0-1.5c-.52 0-.862-.068-1.108-.16a2.1 2.1 0 0 1-.634-.38a8 8 0 0 1-.265-.236c-.309-.28-.713-.649-1.29-.964q.046-.248.047-.51A2.75 2.75 0 0 0 12 2.25M10.75 5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path fill="currentColor" d="M8.968 13.25L7.111 9.457l-.018-.035a1.25 1.25 0 0 0-2.203.035L3.032 13.25H2.5a.75.75 0 0 0-.75.75a4.25 4.25 0 0 0 8.5 0a.75.75 0 0 0-.75-.75zm-1.67 0H4.702L6 10.6zm1.187 1.5h.162a2.751 2.751 0 0 1-5.293 0zm12.483-1.5h.532a.75.75 0 0 1 .75.75a4.25 4.25 0 0 1-8.5 0a.75.75 0 0 1 .75-.75h.532l1.858-3.793l.017-.035a1.25 1.25 0 0 1 2.204.035zm-.483 1.5h-5.132a2.751 2.751 0 0 0 5.294 0zm-1.187-1.5L18 10.6l-1.297 2.65z"></svg:path>`,
})
export class StashBalanceDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBalanceLightIcon],svg[stash-balance-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.5a2.5 2.5 0 0 0-2.417 3.143c-.634.313-1.055.697-1.393 1.004q-.152.141-.288.254c-.216.18-.43.323-.707.425c-.28.103-.653.174-1.195.174a.5.5 0 1 0 0 1c.63 0 1.125-.083 1.54-.236c.418-.154.73-.368 1-.593a10 10 0 0 0 .383-.335c.322-.292.618-.56 1.105-.799a2.5 2.5 0 0 0 1.472.913v9.05c0 1.195-.24 2.075-.654 2.643C10.45 19.687 9.859 20 9 20a.5.5 0 0 0 0 1c1.142 0 2.05-.437 2.655-1.268q.18-.248.319-.534q.25.485.61.843c.672.672 1.557.959 2.416.959a.5.5 0 1 0 0-1c-.64 0-1.256-.213-1.709-.666c-.45-.45-.79-1.187-.79-2.334V7.45a2.5 2.5 0 0 0 1.47-.913c.488.239.784.507 1.107.799c.12.109.243.22.382.335c.27.225.582.44 1 .593c.416.153.91.236 1.54.236a.5.5 0 1 0 0-1c-.542 0-.915-.071-1.195-.174a2.3 2.3 0 0 1-.707-.425q-.134-.113-.288-.254c-.338-.308-.76-.69-1.393-1.005q.082-.308.083-.642A2.5 2.5 0 0 0 12 2.5M10.5 5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path><svg:path fill="currentColor" d="M2.5 13.5a.5.5 0 0 0-.5.5a4 4 0 0 0 8 0a.5.5 0 0 0-.5-.5h-.688L6.886 9.567l-.012-.023a1 1 0 0 0-1.76.023L3.188 13.5zm.99 1h5.469a3 3 0 0 1-5.918 0zm4.209-1H4.302L6 10.031zM14 14a.5.5 0 0 1 .5-.5h.688l1.926-3.933l.012-.023a1 1 0 0 1 1.76.023l1.926 3.933h.688a.5.5 0 0 1 .5.5a4 4 0 0 1-8 0m6.49.5h-5.449a3 3 0 0 0 5.918 0zm-.791-1L18 10.031L16.302 13.5z"></svg:path>`,
})
export class StashBalanceLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBalanceSolidIcon],svg[stash-balance-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.25 5a2.75 2.75 0 1 1 5.453.51c.577.315.981.683 1.29.964q.145.134.265.235c.203.169.391.293.634.382c.246.09.588.159 1.108.159a.75.75 0 0 1 0 1.5c-.652 0-1.177-.086-1.626-.251c-.453-.167-.79-.4-1.074-.635a12 12 0 0 1-.407-.357c-.272-.246-.508-.46-.86-.656a2.75 2.75 0 0 1-1.283.795V17c0 1.096.325 1.764.718 2.157c.399.399.946.593 1.532.593a.75.75 0 0 1 0 1.5c-.913 0-1.866-.306-2.593-1.032q-.236-.235-.427-.52q-.06.093-.123.18C11.2 20.783 10.212 21.25 9 21.25a.75.75 0 0 1 0-1.5c.788 0 1.3-.282 1.644-.754c.37-.509.606-1.328.606-2.496V7.647a2.75 2.75 0 0 1-1.283-.795c-.352.195-.588.41-.86.655c-.123.112-.254.23-.407.357c-.284.236-.62.468-1.074.635c-.449.165-.974.251-1.626.251a.75.75 0 0 1 0-1.5c.52 0 .862-.068 1.109-.16c.242-.088.43-.212.634-.38q.12-.102.265-.236c.308-.28.712-.649 1.29-.964A3 3 0 0 1 9.25 5M12 3.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></svg:path><svg:path fill="currentColor" d="m7.11 9.457l1.858 3.793H9.5a.75.75 0 0 1 .75.75a4.25 4.25 0 0 1-8.5 0a.75.75 0 0 1 .75-.75h.532L4.89 9.457l.017-.035a1.25 1.25 0 0 1 2.204.035M6 10.6l-1.298 2.65h2.596zm14.968 2.65l-1.857-3.793l-.018-.035a1.25 1.25 0 0 0-2.203.035l-1.858 3.793H14.5a.75.75 0 0 0-.75.75a4.25 4.25 0 0 0 8.5 0a.75.75 0 0 0-.75-.75zm-1.67 0h-2.595L18 10.6z"></svg:path>`,
})
export class StashBalanceSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBellIcon],svg[stash-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.161 8.905A6.19 6.19 0 0 0 13.5 3.434V3a1.5 1.5 0 0 0-3 0v.434a6.19 6.19 0 0 0-4.661 5.47l-.253 2.033l-.001.015a4.34 4.34 0 0 1-1.357 2.807l-.014.012c-.244.23-.544.51-.73 1.058c-.17.496-.234 1.17-.234 2.186c0 .372.067.731.254 1.044c.193.324.472.524.76.646c.271.115.564.167.822.2c.174.022.372.039.562.055l.25.022q.345.033.742.065a.75.75 0 0 0-.3.777a3.7 3.7 0 0 0 .865 1.676A3.74 3.74 0 0 0 10 22.75c1.11 0 2.11-.484 2.795-1.25a.75.75 0 1 0-1.118-1c-.413.461-1.01.75-1.677.75a2.24 2.24 0 0 1-2.07-1.366a2 2 0 0 1-.125-.389a.75.75 0 0 0-.217-.38c1.213.077 2.696.135 4.412.135c2.622 0 4.703-.136 6.101-.268l.25-.022c.191-.016.389-.033.563-.055c.258-.033.55-.085.822-.2c.288-.122.567-.322.76-.646c.187-.313.254-.672.254-1.044c0-1.017-.064-1.69-.233-2.186c-.187-.548-.487-.829-.73-1.058l-.015-.012a4.34 4.34 0 0 1-1.357-2.807l-.001-.015zm-10.83.155l.001-.015a4.684 4.684 0 0 1 9.336 0l.001.015l.253 2.032a5.84 5.84 0 0 0 1.825 3.76c.226.213.288.279.35.46c.083.245.153.705.153 1.703c0 .201-.037.267-.041.274l-.003.004l-.002.002a.2.2 0 0 1-.054.03a1.7 1.7 0 0 1-.424.091c-.145.019-.292.031-.463.046l-.302.027c-1.357.127-3.39.261-5.961.261c-2.57 0-4.604-.134-5.96-.261l-.303-.027c-.171-.015-.318-.027-.463-.046a1.7 1.7 0 0 1-.424-.092a.2.2 0 0 1-.054-.029l-.005-.006c-.004-.007-.041-.073-.041-.274c0-.998.07-1.458.153-1.702c.062-.182.124-.248.35-.46a5.84 5.84 0 0 0 1.825-3.76z"></svg:path>`,
})
export class StashBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBellDuotoneIcon],svg[stash-bell-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 3.434a6.19 6.19 0 0 1 4.661 5.47l.253 2.033l.001.015a4.34 4.34 0 0 0 1.357 2.807l.014.012c.244.23.544.51.73 1.058c.17.496.234 1.17.234 2.186c0 .372-.067.731-.253 1.044a1.6 1.6 0 0 1-.76.646a3 3 0 0 1-.823.2c-.174.022-.372.039-.562.055l-.25.022c-1.4.132-3.48.268-6.102.268a66 66 0 0 1-6.101-.268l-.25-.022a14 14 0 0 1-.563-.055a3 3 0 0 1-.822-.2a1.6 1.6 0 0 1-.76-.646c-.187-.313-.254-.672-.254-1.044c0-1.017.064-1.69.233-2.186c.187-.548.487-.829.73-1.058l.015-.012a4.34 4.34 0 0 0 1.357-2.807l.001-.015l.253-2.032A6.19 6.19 0 0 1 10.5 3.434V3a1.5 1.5 0 0 1 3 0zM7.332 9.045l-.001.015l-.253 2.032a5.84 5.84 0 0 1-1.824 3.76c-.227.213-.289.279-.351.46c-.083.245-.153.705-.153 1.703c0 .201.037.267.041.274l.005.006c.005.004.02.015.054.03c.078.033.206.064.424.091c.145.019.292.031.463.046l.302.027c1.357.127 3.39.261 5.961.261c2.57 0 4.604-.134 5.96-.261l.303-.027c.171-.015.318-.027.463-.046c.218-.027.346-.058.424-.092a.2.2 0 0 0 .054-.029l.002-.002l.003-.004c.004-.007.041-.073.041-.274c0-.998-.07-1.458-.153-1.702c-.062-.182-.125-.248-.35-.46a5.84 5.84 0 0 1-1.825-3.76l-.253-2.033l-.001-.015a4.684 4.684 0 0 0-9.336 0"></svg:path><svg:path fill="currentColor" d="M6.908 18.928a.75.75 0 0 1 .896.567a2.2 2.2 0 0 0 .518 1.005c.413.461 1.011.75 1.678.75c.666 0 1.264-.289 1.677-.75a.75.75 0 0 1 1.118 1A3.74 3.74 0 0 1 10 22.75a3.74 3.74 0 0 1-3.45-2.276a3.7 3.7 0 0 1-.21-.65a.75.75 0 0 1 .568-.896" opacity=".5"></svg:path>`,
})
export class StashBellDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBellLightIcon],svg[stash-bell-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.913 8.93a5.935 5.935 0 0 0-5.163-5.383V3a.75.75 0 0 0-1.5 0v.547a5.935 5.935 0 0 0-5.163 5.384l-.252 2.032l-.001.01a4.6 4.6 0 0 1-1.435 2.968l-.01.01c-.241.225-.503.47-.67.959c-.154.453-.219 1.091-.219 2.105c0 .343.062.654.218.915c.161.27.393.439.643.545c.24.101.505.15.757.182c.169.021.357.037.545.053l.259.023C7.314 18.864 9.386 19 12 19a66 66 0 0 0 6.337-.29c.188-.016.377-.032.545-.053c.252-.032.517-.08.757-.182a1.33 1.33 0 0 0 .643-.545c.156-.261.218-.572.218-.915c0-1.014-.065-1.652-.22-2.105c-.166-.489-.428-.734-.668-.96l-.01-.009a4.6 4.6 0 0 1-1.436-2.968v-.01zM12 4.5a4.934 4.934 0 0 1 4.917 4.524v.01l.253 2.032a5.6 5.6 0 0 0 1.747 3.605c.23.215.333.316.417.561c.097.287.166.782.166 1.783c0 .23-.042.345-.076.402c-.03.05-.077.095-.176.137c-.11.047-.266.082-.49.11c-.15.02-.305.033-.48.048l-.294.026A65 65 0 0 1 12 18c-2.58 0-4.62-.134-5.984-.262l-.294-.026a14 14 0 0 1-.48-.047a2 2 0 0 1-.49-.11c-.1-.043-.146-.088-.176-.138c-.034-.057-.076-.172-.076-.402c0-1.001.069-1.497.166-1.783c.084-.245.187-.346.417-.561a5.6 5.6 0 0 0 1.747-3.605l.252-2.032l.001-.01A4.934 4.934 0 0 1 12 4.5M7.56 19.55a.5.5 0 0 0-.975.22a3.5 3.5 0 0 0 .806 1.564A3.5 3.5 0 0 0 10 22.5a3.5 3.5 0 0 0 2.609-1.166a.5.5 0 0 0-.745-.668A2.5 2.5 0 0 1 10 21.5a2.49 2.49 0 0 1-2.3-1.517a2.5 2.5 0 0 1-.14-.433"></svg:path>`,
})
export class StashBellLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBillingInfoIcon],svg[stash-billing-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.17 3.25h5.66c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v3.08a.75.75 0 0 1-1.5 0V7.2c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.546-.547c-.091-.046-.228-.088-.515-.111c-.296-.024-.68-.025-1.253-.025H7.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v9.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.114.223.29.406.508.526q.024.006.106.019q.175.026.476.048c.398.03.91.05 1.454.063c1.085.027 2.26.027 2.82.027a.75.75 0 0 1 0 1.5h-.002c-.56 0-1.75 0-2.855-.027a33 33 0 0 1-1.527-.067a8 8 0 0 1-.585-.06a1.8 1.8 0 0 1-.53-.146a2.75 2.75 0 0 1-1.201-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 4.752 3.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03"></svg:path><svg:path fill="currentColor" d="M14.371 12.25h4.258c.395 0 .736 0 1.017.023c.297.024.592.078.875.222c.424.216.768.56.984.984c.144.283.198.578.222.875c.023.28.023.622.023 1.017v2.258c0 .395 0 .736-.023 1.017a2.3 2.3 0 0 1-.222.875a2.25 2.25 0 0 1-.983.984c-.284.144-.58.198-.876.222c-.28.023-.622.023-1.017.023H14.37c-.395 0-.736 0-1.017-.023a2.3 2.3 0 0 1-.875-.222a2.25 2.25 0 0 1-.984-.983a2.3 2.3 0 0 1-.222-.876c-.023-.28-.023-.622-.023-1.017V15.37c0-.395 0-.736.023-1.017a2.3 2.3 0 0 1 .222-.875a2.25 2.25 0 0 1 .984-.984a2.3 2.3 0 0 1 .875-.222c.28-.023.622-.023 1.017-.023m-.895 1.518c-.204.017-.28.045-.317.064a.75.75 0 0 0-.327.327c-.02.038-.047.113-.064.317l-.002.024h7.468l-.002-.024c-.017-.204-.045-.28-.064-.317a.75.75 0 0 0-.328-.327c-.037-.02-.112-.047-.316-.064a13 13 0 0 0-.924-.018h-4.2c-.432 0-.712 0-.924.018M20.25 16.5h-7.5v1.1c0 .432 0 .712.018.924c.017.204.045.28.064.316a.75.75 0 0 0 .327.328c.038.02.113.047.317.064c.212.017.492.018.924.018h4.2c.432 0 .712 0 .924-.018c.204-.017.28-.045.316-.064a.75.75 0 0 0 .328-.328c.02-.037.047-.112.064-.316c.017-.212.018-.492.018-.924zM6.5 6.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM5.75 10a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5H10a.75.75 0 0 0 0-1.5zM5.75 17a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class StashBillingInfoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBillingInfoDuotoneIcon],svg[stash-billing-info-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 10a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m6.414 3.819c-.115.225-.15.498-.16.931h8.992c-.01-.433-.045-.706-.16-.931a1.5 1.5 0 0 0-.655-.655C19.861 13 19.441 13 18.6 13h-4.2c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.655.655M21 16.25h-9v1.35c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.656c.32.163.74.163 1.581.163h4.2c.84 0 1.26 0 1.581-.163a1.5 1.5 0 0 0 .656-.656c.163-.32.163-.74.163-1.581zm-14.5-4a.75.75 0 0 0 0 1.5H10a.75.75 0 0 0 0-1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.83 3.25H7.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 3.55 4.752c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v9.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.178.091.399.127.53.146c.167.025.368.044.584.06c.434.032.975.053 1.527.067c1.105.027 2.295.027 2.855.027h.002a.75.75 0 0 0 0-1.5c-.56 0-1.735 0-2.82-.027a32 32 0 0 1-1.454-.063q-.301-.023-.476-.048l-.106-.018a1.25 1.25 0 0 1-.508-.527c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.2c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h5.6c.572 0 .957 0 1.252.025c.288.023.425.065.516.111c.235.12.426.311.546.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253v3.05a.75.75 0 0 0 1.5 0V7.17c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03"></svg:path><svg:path fill="currentColor" d="M18.629 12.25H14.37c-.395 0-.736 0-1.017.023a2.3 2.3 0 0 0-.875.222a2.25 2.25 0 0 0-.984.984a2.3 2.3 0 0 0-.222.875c-.023.28-.023.622-.023 1.017v2.258c0 .395 0 .736.023 1.017c.024.297.078.592.222.875c.216.424.56.768.984.984c.283.144.578.198.875.222c.28.023.622.023 1.017.023h4.258c.395 0 .736 0 1.017-.023a2.3 2.3 0 0 0 .875-.222a2.25 2.25 0 0 0 .984-.983c.144-.284.198-.58.222-.876c.023-.28.023-.622.023-1.017V15.37c0-.395 0-.736-.023-1.017a2.3 2.3 0 0 0-.222-.875a2.25 2.25 0 0 0-.983-.984a2.3 2.3 0 0 0-.876-.222c-.28-.023-.622-.023-1.017-.023m-5.47 1.582c.038-.02.113-.047.317-.064c.212-.017.492-.018.924-.018h4.2c.432 0 .712 0 .924.018c.204.017.28.045.316.064a.75.75 0 0 1 .328.327c.02.038.047.113.064.317c.017.212.018.492.018.924v2.2c0 .432 0 .712-.018.924c-.017.204-.045.28-.064.316a.75.75 0 0 1-.328.328c-.037.02-.112.047-.316.064c-.212.017-.492.018-.924.018h-4.2c-.432 0-.712 0-.924-.018c-.204-.017-.28-.045-.317-.064a.75.75 0 0 1-.327-.328c-.02-.037-.047-.112-.064-.316a13 13 0 0 1-.018-.924v-2.2c0-.432 0-.712.018-.924c.017-.204.045-.28.064-.317a.75.75 0 0 1 .327-.327M5.75 7a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 5.75 7m.75 9.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class StashBillingInfoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBillingInfoLightIcon],svg[stash-billing-info-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.179 3.5h5.642c.542 0 .98 0 1.333.029c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.029.355.029.792.029 1.334v3.071a.5.5 0 0 1-1 0V7.2c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.138-.608a1.5 1.5 0 0 0-.655-.656c-.132-.067-.305-.113-.608-.137c-.309-.026-.705-.026-1.273-.026H7.2c-.568 0-.964 0-1.273.026c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C4.5 6.236 4.5 6.632 4.5 7.2v9.6c0 .568 0 .965.026 1.273c.024.302.07.476.137.608a1.5 1.5 0 0 0 .646.65l.01.002c.018.004.062.014.144.026q.189.028.495.05c.404.03.92.05 1.466.064c1.089.027 2.265.027 2.826.027a.5.5 0 0 1 0 1h-.001c-.56 0-1.748 0-2.85-.027a33 33 0 0 1-1.515-.066a8 8 0 0 1-.566-.058a1.5 1.5 0 0 1-.453-.122a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98C3.5 17.8 3.5 17.362 3.5 16.82V7.18c0-.542 0-.98.029-1.333c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243c.355-.03.793-.03 1.335-.03"></svg:path><svg:path fill="currentColor" d="M18.62 12.5c.403 0 .735 0 1.006.022c.281.023.54.072.782.196a2 2 0 0 1 .874.874c.124.243.173.501.196.782c.022.27.022.603.022 1.005v2.242c0 .402 0 .734-.022 1.005c-.023.281-.072.54-.196.782a2 2 0 0 1-.874.874c-.243.124-.501.173-.782.196c-.27.022-.603.022-1.005.022h-4.242c-.402 0-.734 0-1.005-.022c-.281-.023-.54-.072-.782-.196a2 2 0 0 1-.874-.874c-.124-.243-.173-.501-.196-.782c-.022-.27-.022-.603-.022-1.005v-2.242c0-.402 0-.734.022-1.005c.023-.281.072-.54.196-.782a2 2 0 0 1 .874-.874c.243-.124.501-.173.782-.196c.27-.022.603-.022 1.005-.022zm-5.164 1.019c-.22.018-.332.05-.41.09a1 1 0 0 0-.437.437c-.04.078-.072.19-.09.41l-.004.044h7.97l-.004-.044c-.018-.22-.05-.332-.09-.41a1 1 0 0 0-.437-.437c-.078-.04-.19-.072-.41-.09a13 13 0 0 0-.944-.019h-4.2c-.428 0-.72 0-.944.019M20.5 16.5h-8v1.1c0 .428 0 .72.019.944c.018.22.05.332.09.41a1 1 0 0 0 .437.437c.078.04.19.072.41.09c.225.019.516.019.944.019h4.2c.428 0 .72 0 .944-.019c.22-.018.332-.05.41-.09a1 1 0 0 0 .437-.437c.04-.078.072-.19.09-.41c.019-.225.019-.516.019-.944zm-14-10a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM6 10a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 6 10m.5 2.5a.5.5 0 0 0 0 1H10a.5.5 0 0 0 0-1zM6 17a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 6 17"></svg:path>`,
})
export class StashBillingInfoLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBillingInfoSolidIcon],svg[stash-billing-info-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.83 3.25H7.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 3.55 4.752c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v9.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.178.091.399.127.53.146c.167.025.368.044.584.06c.434.032.975.053 1.527.067c.952.023 1.905.027 2.857.027a.75.75 0 0 0 0-1.5c-.56 0-1.735 0-2.82-.027a32 32 0 0 1-1.454-.063q-.301-.023-.476-.048l-.106-.018a1.25 1.25 0 0 1-.508-.527c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.2c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h5.6c.572 0 .957 0 1.252.025c.288.023.425.065.516.111c.235.12.426.311.546.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253v3.05a.75.75 0 0 0 1.5 0V7.17c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03"></svg:path><svg:path fill="currentColor" d="M14.371 12.25h4.258c.395 0 .736 0 1.017.023c.297.024.592.078.875.222c.424.216.768.56.984.984c.144.283.198.578.222.875c.023.28.023.622.023 1.017v2.258c0 .395 0 .736-.023 1.017a2.3 2.3 0 0 1-.222.875a2.25 2.25 0 0 1-.983.984c-.284.144-.58.198-.876.222c-.28.023-.622.023-1.017.023h-4.258c-.395 0-.736 0-1.017-.023a2.3 2.3 0 0 1-.875-.222a2.25 2.25 0 0 1-.984-.983a2.3 2.3 0 0 1-.222-.876c-.023-.28-.023-.622-.023-1.017V15.37c0-.395 0-.736.023-1.017a2.3 2.3 0 0 1 .222-.875a2.25 2.25 0 0 1 .984-.984a2.3 2.3 0 0 1 .875-.222c.28-.023.622-.023 1.017-.023M12.75 15.4v.85h7.5v-.85c0-.269 0-.479-.005-.65h-7.49c-.005.171-.005.381-.005.65m-7-8.4a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 5.75 7m.75 2.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM5.75 13a.75.75 0 0 1 .75-.75H10a.75.75 0 0 1 0 1.5H6.5a.75.75 0 0 1-.75-.75m.75 3.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class StashBillingInfoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBrowserIcon],svg[stash-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.367 3.25h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v3.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655v-3.266c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M7.834 4.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.045.553-.051 1.24-.052 2.166h14.5c0-.926-.007-1.614-.052-2.166c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.132 0-1.937 0-2.566.052M4.75 13.6v-2.1h14.5v2.1c0 1.133 0 1.937-.052 2.566c-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 0 1-1.42 1.42c-.305.155-.69.251-1.31.302c-.63.051-1.434.052-2.566.052h-3.2c-1.132 0-1.937 0-2.566-.052c-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 0 1-1.42-1.42c-.155-.305-.251-.69-.302-1.31c-.051-.63-.052-1.434-.052-2.566" clip-rule="evenodd"></svg:path>`,
})
export class StashBrowserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBrowserDuotoneIcon],svg[stash-browser-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.4 4h3.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C20 7.04 20 8.16 20 10.4v.1H4v-.1c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.04 4 8.16 4 10.4 4M7 7.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1"></svg:path><svg:path d="M10.357 3h3.286c1.084 0 1.958 0 2.666.058c.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C21 8.4 21 9.273 21 10.357v3.286c0 1.084 0 1.958-.058 2.666c-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058c-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666c.06-.728.185-1.369.487-1.96A5 5 0 0 1 5.73 3.544c.592-.302 1.233-.428 1.961-.487C8.4 3 9.273 3 10.357 3M7.854 5.051c-.605.05-.953.142-1.216.276a3 3 0 0 0-1.311 1.311c-.134.263-.226.611-.276 1.216C5.001 8.471 5 9.264 5 10.4v3.2c0 1.137 0 1.929.051 2.546c.05.605.142.953.276 1.216a3 3 0 0 0 1.311 1.311c.263.134.611.226 1.216.276c.617.05 1.41.051 2.546.051h3.2c1.137 0 1.929 0 2.546-.051c.605-.05.953-.142 1.216-.276a3 3 0 0 0 1.311-1.311c.134-.263.226-.611.276-1.216c.05-.617.051-1.41.051-2.546v-3.2c0-1.137 0-1.929-.051-2.546c-.05-.605-.142-.953-.276-1.216a3 3 0 0 0-1.311-1.311c-.263-.134-.611-.226-1.216-.276C15.529 5.001 14.736 5 13.6 5h-3.2c-1.137 0-1.929 0-2.546.051"></svg:path></svg:g>`,
})
export class StashBrowserDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBrowserLightIcon],svg[stash-browser-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10.377 3.5h3.246c1.1 0 1.958 0 2.645.056c.698.057 1.265.175 1.775.434a4.5 4.5 0 0 1 1.967 1.967c.26.51.377 1.077.434 1.775c.056.687.056 1.544.056 2.645v3.246c0 1.1 0 1.958-.056 2.645c-.057.698-.175 1.265-.434 1.775a4.5 4.5 0 0 1-1.967 1.967c-.51.26-1.077.377-1.775.434c-.687.056-1.544.056-2.645.056h-3.246c-1.1 0-1.958 0-2.645-.056c-.698-.057-1.265-.175-1.775-.434a4.5 4.5 0 0 1-1.967-1.967c-.26-.51-.377-1.077-.434-1.775c-.056-.687-.056-1.544-.056-2.645v-3.246c0-1.1 0-1.958.056-2.645c.057-.698.175-1.265.434-1.775A4.5 4.5 0 0 1 5.957 3.99c.51-.26 1.077-.377 1.775-.434C8.42 3.5 9.276 3.5 10.377 3.5M7.814 4.553c-.637.052-1.057.152-1.403.328a3.5 3.5 0 0 0-1.53 1.53c-.176.346-.276.766-.328 1.403c-.06.733-.057 1.473-.054 2.21l.001.476h15l.001-.476c.003-.737.006-1.477-.054-2.21c-.052-.637-.152-1.057-.328-1.403a3.5 3.5 0 0 0-1.53-1.53c-.346-.176-.766-.276-1.402-.328C15.545 4.5 14.728 4.5 13.6 4.5h-3.2c-1.128 0-1.945 0-2.586.053M4.5 13.6v-2.1h15v2.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328c-.642.053-1.459.053-2.587.053h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 15.545 4.5 14.728 4.5 13.6" clip-rule="evenodd"></svg:path>`,
})
export class StashBrowserLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBrowserSolidIcon],svg[stash-browser-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.357 3h3.286c1.084 0 1.958 0 2.666.058c.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C21 8.4 21 9.273 21 10.357v3.286c0 1.084 0 1.958-.058 2.666c-.06.729-.185 1.369-.487 1.961a5 5 0 0 1-2.185 2.185c-.592.302-1.232.428-1.961.487C15.6 21 14.727 21 13.643 21h-3.286c-1.084 0-1.958 0-2.666-.058c-.728-.06-1.369-.185-1.96-.487a5 5 0 0 1-2.186-2.185c-.302-.592-.428-1.232-.487-1.961C3 15.6 3 14.727 3 13.643v-3.286c0-1.084 0-1.958.058-2.666c.06-.728.185-1.369.487-1.96A5 5 0 0 1 5.73 3.544c.592-.302 1.233-.428 1.961-.487C8.4 3 9.273 3 10.357 3M7 7.5a1 1 0 1 1 2 0a1 1 0 0 1-2 0m3 0a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StashBrowserSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBugIcon],svg[stash-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.65 3.25a3 3 0 0 0-3 3a1.5 1.5 0 0 0 1.5 1.5h3.5a1.5 1.5 0 0 0 1.5-1.5a3 3 0 0 0-3-3zm-1.5 3a1.5 1.5 0 0 1 1.5-1.5h.5a1.5 1.5 0 0 1 1.5 1.5z"></svg:path><svg:path d="M5.93 6.37a.75.75 0 0 0-1.06 1.06l2.442 2.442a3.73 3.73 0 0 0-.654 1.878H4.6a.75.75 0 0 0 0 1.5h2.05v.25c0 .894.223 1.735.617 2.472L4.87 18.37a.75.75 0 0 0 1.06 1.06l2.238-2.237A5.23 5.23 0 0 0 11.9 18.75a5.23 5.23 0 0 0 3.746-1.572l2.252 2.252a.75.75 0 0 0 1.06-1.06l-2.415-2.417a5.2 5.2 0 0 0 .607-2.453v-.25h2.15a.75.75 0 0 0 0-1.5h-2.158a3.73 3.73 0 0 0-.642-1.86l2.459-2.46a.75.75 0 1 0-1.06-1.06l-2.474 2.473A3.73 3.73 0 0 0 13.4 8.25h-3c-.738 0-1.427.213-2.007.582zm2.986 9.401a3.75 3.75 0 0 0 2.334 1.423V11.7a.75.75 0 0 1 1.5 0v5.453a3.75 3.75 0 0 0 2.9-3.653V12a2.25 2.25 0 0 0-2.25-2.25h-3A2.25 2.25 0 0 0 8.15 12v1.5c0 .747.219 1.443.595 2.028l.014.013q.102.105.157.23"></svg:path></svg:g>`,
})
export class StashBugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBugDuotoneIcon],svg[stash-bug-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 18.464V11.7a.5.5 0 0 0-1 0v6.784a5 5 0 0 0 1-.02" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M11.65 3.5A2.75 2.75 0 0 0 8.9 6.25c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25a2.75 2.75 0 0 0-2.75-2.75z"></svg:path><svg:path fill="currentColor" d="M5.93 6.37a.75.75 0 0 0-1.06 1.06l2.622 2.622a3.5 3.5 0 0 0-.583 1.698H4.6a.75.75 0 0 0 0 1.5h2.3v.25c0 .824.2 1.602.553 2.287L4.87 18.37a.75.75 0 0 0 1.06 1.06l2.415-2.414a4.98 4.98 0 0 0 3.155 1.468V11.7a.5.5 0 1 1 1 0v6.764a5 5 0 0 0 2.97-1.462l2.428 2.428a.75.75 0 0 0 1.06-1.06l-2.6-2.602c.346-.68.542-1.452.542-2.268v-.25h2.4a.75.75 0 0 0 0-1.5h-2.409a3.5 3.5 0 0 0-.571-1.68l2.639-2.64a.75.75 0 1 0-1.06-1.06l-2.655 2.654A3.5 3.5 0 0 0 13.4 8.5h-3c-.669 0-1.294.188-1.826.513z" opacity=".5"></svg:path>`,
})
export class StashBugDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBugLightIcon],svg[stash-bug-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.65 3.5A2.75 2.75 0 0 0 8.9 6.25c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25a2.75 2.75 0 0 0-2.75-2.75zM9.9 6.25c0-.966.784-1.75 1.75-1.75h.5c.967 0 1.75.784 1.75 1.75a.25.25 0 0 1-.25.25h-3.5a.25.25 0 0 1-.25-.25m-4.146.296a.5.5 0 1 0-.707.708L7.64 9.847A3.5 3.5 0 0 0 6.9 12H4.6a.5.5 0 0 0 0 1h2.3v.5c0 .917.247 1.776.678 2.515l-2.531 2.532a.5.5 0 0 0 .707.707l2.42-2.42A5 5 0 0 0 11.9 18.5a5 5 0 0 0 3.74-1.681l2.435 2.435a.5.5 0 0 0 .707-.707l-2.55-2.55A5 5 0 0 0 16.9 13.5V13h2.4a.5.5 0 0 0 0-1h-2.4a3.48 3.48 0 0 0-.728-2.137l2.61-2.61a.5.5 0 0 0-.707-.707l-2.62 2.62A3.5 3.5 0 0 0 13.4 8.5h-3c-.76 0-1.464.243-2.038.655zm2.943 9.35A4 4 0 0 0 11.5 17.48V11.7a.5.5 0 1 1 1 0v5.755a4 4 0 0 0 3.4-3.955V12a2.5 2.5 0 0 0-2.5-2.5h-3A2.5 2.5 0 0 0 7.9 12v1.5c0 .809.24 1.562.653 2.191l.03.027q.077.08.114.178" clip-rule="evenodd"></svg:path>`,
})
export class StashBugLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBugSolidIcon],svg[stash-bug-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.9 6.25a2.75 2.75 0 0 1 2.75-2.75h.5a2.75 2.75 0 0 1 2.75 2.75c0 .69-.56 1.25-1.25 1.25h-3.5c-.69 0-1.25-.56-1.25-1.25m-4.03.12a.75.75 0 0 1 1.06 0l2.644 2.643A3.5 3.5 0 0 1 10.4 8.5h3c.677 0 1.308.192 1.844.524l2.654-2.654a.75.75 0 0 1 1.06 1.06l-2.638 2.64a3.5 3.5 0 0 1 .571 1.68h2.41a.75.75 0 0 1 0 1.5h-2.4v.25c0 .816-.197 1.587-.544 2.268l2.602 2.602a.75.75 0 0 1-1.06 1.06l-2.43-2.428a5 5 0 0 1-2.969 1.462V11.7a.5.5 0 0 0-1 0v6.784a4.98 4.98 0 0 1-3.155-1.468L5.93 19.43a.75.75 0 0 1-1.06-1.06l2.583-2.583A5 5 0 0 1 6.9 13.5v-.25H4.6a.75.75 0 0 1 0-1.5h2.31a3.5 3.5 0 0 1 .583-1.698L4.87 7.43a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class StashBugSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerIcon],svg[stash-burger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.623 7.75c0 .69-.28 1.25-.625 1.25s-.625-.56-.625-1.25s.28-1.25.625-1.25s.625.56.625 1.25m3.738.69c-.345.597-.867.942-1.166.77c-.299-.173-.261-.798.084-1.395c.345-.598.867-.943 1.166-.77s.261.797-.084 1.395m-7.56.77c-.299.172-.82-.173-1.166-.77c-.345-.598-.383-1.223-.084-1.396c.3-.172.822.173 1.167.77c.345.598.382 1.223.083 1.396"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 10v2.354a2.751 2.751 0 0 0 0 5.293V18A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18v-.354a2.751 2.751 0 0 0 0-5.292V10c0-1.946-1.053-3.65-2.643-4.843C16.517 3.965 14.356 3.25 12 3.25s-4.517.715-6.107 1.907S3.25 8.054 3.25 10m1.5 0c0-1.368.737-2.663 2.043-3.643C8.1 5.378 9.937 4.75 12 4.75s3.901.628 5.207 1.607c1.305.98 2.043 2.275 2.043 3.643v.25H4.75zm0 2.25v-.5h14.5v.5H16a.75.75 0 0 0-.75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 0-.75-.75zM4 13.75a1.25 1.25 0 1 0 0 2.5h16a1.25 1.25 0 1 0 0-2.5h-3.25V14a2.25 2.25 0 0 1-4.5 0v-.25zM4.75 18v-.25h14.5V18c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"></svg:path>`,
})
export class StashBurgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerArrowLeftIcon],svg[stash-burger-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m-1.97 7.97L3.86 12.8H19a.8.8 0 0 0 0-1.6H3.86l1.17-1.17a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06M8 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashBurgerArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerArrowLeftDuotoneIcon],svg[stash-burger-arrow-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2zm0 12a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M5.03 8.97a.75.75 0 0 1 0 1.06l-1.22 1.22H19a.75.75 0 0 1 0 1.5H3.81l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class StashBurgerArrowLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerArrowLeftLightIcon],svg[stash-burger-arrow-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm-4.793 7l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 1 1 .708.708L3.207 11.5H19a.5.5 0 0 1 0 1zM7.5 18a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H8a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashBurgerArrowLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerArrowRightIcon],svg[stash-burger-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m1.25 6a.75.75 0 0 1 .75-.75h15.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H5a.75.75 0 0 1-.75-.75M4 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashBurgerArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerArrowRightDuotoneIcon],svg[stash-burger-arrow-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.97 8.97a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06l1.22-1.22H5a.75.75 0 0 1 0-1.5h15.19l-1.22-1.22a.75.75 0 0 1 0-1.06"></svg:path>`,
})
export class StashBurgerArrowRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerArrowRightLightIcon],svg[stash-burger-arrow-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5.5a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1zm1 6a.5.5 0 0 0 0 1h15.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708l-2.5-2.5a.5.5 0 0 0-.708.708l1.647 1.646zM3.5 18a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashBurgerArrowRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerClassicIcon],svg[stash-burger-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashBurgerClassicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerClassicDuotoneIcon],svg[stash-burger-classic-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashBurgerClassicDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerClassicLightIcon],svg[stash-burger-classic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 6a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0 6a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m.5 5.5a.5.5 0 0 0 0 1h14a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class StashBurgerClassicLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerDuotoneIcon],svg[stash-burger-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13H4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4h-4v1a1.5 1.5 0 0 1-3 0z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.623 7.75c0 .69-.28 1.25-.625 1.25s-.625-.56-.625-1.25s.28-1.25.625-1.25s.625.56.625 1.25m3.738.69c-.345.597-.867.942-1.166.77c-.299-.173-.261-.798.084-1.395c.345-.598.867-.943 1.166-.77s.261.797-.084 1.395m-7.56.77c-.299.172-.82-.173-1.166-.77c-.345-.598-.383-1.223-.084-1.396c.3-.172.822.173 1.167.77c.345.598.382 1.223.083 1.396"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 10v2.354a2.751 2.751 0 0 0 0 5.293V18A2.75 2.75 0 0 0 6 20.75h12A2.75 2.75 0 0 0 20.75 18v-.354a2.751 2.751 0 0 0 0-5.292V10c0-1.946-1.053-3.65-2.643-4.843C16.517 3.965 14.356 3.25 12 3.25s-4.517.715-6.107 1.907S3.25 8.054 3.25 10m1.5 0c0-1.368.737-2.663 2.043-3.643C8.1 5.378 9.937 4.75 12 4.75s3.901.628 5.207 1.607c1.305.98 2.043 2.275 2.043 3.643v.25H4.75zm0 2.25v-.5h14.5v.5H16a.75.75 0 0 0-.75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 0-.75-.75zM4 13.75a1.25 1.25 0 1 0 0 2.5h16a1.25 1.25 0 1 0 0-2.5h-3.25V14a2.25 2.25 0 0 1-4.5 0v-.25zM4.75 18v-.25h14.5V18c0 .69-.56 1.25-1.25 1.25H6c-.69 0-1.25-.56-1.25-1.25" clip-rule="evenodd"></svg:path>`,
})
export class StashBurgerDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerLightIcon],svg[stash-burger-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.623 7.75c0 .69-.28 1.25-.625 1.25s-.625-.56-.625-1.25s.28-1.25.625-1.25s.625.56.625 1.25m3.738.69c-.345.597-.867.942-1.166.77c-.299-.173-.261-.798.084-1.395c.345-.598.867-.943 1.166-.77s.261.797-.084 1.395m-7.56.77c-.299.172-.82-.173-1.166-.77c-.345-.598-.383-1.223-.084-1.396c.3-.172.822.173 1.167.77c.345.598.382 1.223.083 1.396"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.5 10v2.55a2.5 2.5 0 0 0 0 4.9V18A2.5 2.5 0 0 0 6 20.5h12a2.5 2.5 0 0 0 2.5-2.5v-.55a2.5 2.5 0 0 0 0-4.9V10c0-1.85-1-3.486-2.543-4.643C16.415 4.201 14.307 3.5 12 3.5s-4.415.7-5.957 1.857S3.5 8.15 3.5 10m1 0c0-1.464.79-2.828 2.143-3.843S9.89 4.5 12 4.5s4.004.642 5.357 1.657S19.5 8.536 19.5 10v.5h-15zm0 2.5v-1h15v1H16a.5.5 0 0 0-.5.5v1a1 1 0 1 1-2 0v-1a.5.5 0 0 0-.5-.5zm-.5 1a1.5 1.5 0 0 0 0 3h16a1.5 1.5 0 0 0 0-3h-3.5v.5a2 2 0 1 1-4 0v-.5zm.5 4.5v-.5h15v.5a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18" clip-rule="evenodd"></svg:path>`,
})
export class StashBurgerLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashBurgerSolidIcon],svg[stash-burger-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.623 7.75c0 .69-.28 1.25-.625 1.25s-.625-.56-.625-1.25s.28-1.25.625-1.25s.625.56.625 1.25m3.738.69c-.345.597-.867.942-1.166.77c-.299-.173-.261-.798.084-1.395c.345-.598.867-.943 1.166-.77s.261.797-.084 1.395m-7.56.77c-.299.172-.82-.173-1.166-.77c-.345-.598-.383-1.223-.084-1.396c.3-.172.822.173 1.167.77c.345.598.382 1.223.083 1.396"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.25 12.615V10c0-1.946 1.053-3.65 2.643-4.843C7.483 3.965 9.644 3.25 12 3.25s4.517.715 6.107 1.907S20.75 8.054 20.75 10v2.614a2.501 2.501 0 0 1 0 4.772V18A2.75 2.75 0 0 1 18 20.75H6A2.75 2.75 0 0 1 3.25 18v-.614a2.501 2.501 0 0 1 0-4.771M4.75 10c0-1.368.737-2.663 2.043-3.643C8.1 5.378 9.937 4.75 12 4.75s3.901.628 5.207 1.607c1.305.98 2.043 2.275 2.043 3.643v.25H4.75zm0 2.25v-.5h14.5v.5H16a.75.75 0 0 0-.75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 0-.75-.75zm0 5.5V18c0 .69.56 1.25 1.25 1.25h12c.69 0 1.25-.56 1.25-1.25v-.25z" clip-rule="evenodd"></svg:path>`,
})
export class StashBurgerSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarIcon],svg[stash-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5M8 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill="currentColor" d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8.25 6.5A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M6.75 13a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m8 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-4 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-4 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m4 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m2.884-14.25c1.091 0 1.957 0 2.654.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.654v4.268c0 1.091 0 1.957-.057 2.654c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.654.057h-3.268c-1.091 0-1.957 0-2.654-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.654V9.866c0-1.091 0-1.957.057-2.654c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057zm-5.8 1.552c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.032.39-.044.85-.05 1.416h14.495a20 20 0 0 0-.049-1.416c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.133 0-1.937 0-2.566.052M19.497 8.75a20 20 0 0 0-.05-1.436c-.052-.637-.152-1.057-.328-1.403a3.5 3.5 0 0 0-1.53-1.53c-.346-.176-.766-.276-1.402-.328C15.545 4 14.728 4 13.6 4h-3.2c-1.128 0-1.945 0-2.586.053c-.637.052-1.057.152-1.403.328a3.5 3.5 0 0 0-1.53 1.53c-.176.346-.276.766-.328 1.403c-.033.4-.045.867-.05 1.436L4.5 9h15zm-.247 1.5H4.75v3.85c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.433.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566zM10.377 3h3.246c1.1 0 1.958 0 2.645.056c.698.057 1.265.175 1.775.434a4.5 4.5 0 0 1 1.967 1.967c.26.51.377 1.077.434 1.775c.056.687.056 1.544.056 2.645v4.246c0 1.1 0 1.958-.056 2.645c-.057.698-.175 1.265-.434 1.775a4.5 4.5 0 0 1-1.967 1.967c-.51.26-1.077.377-1.775.434c-.687.056-1.544.056-2.645.056h-3.246c-1.1 0-1.958 0-2.645-.056c-.698-.057-1.265-.175-1.775-.434a4.5 4.5 0 0 1-1.967-1.967c-.26-.51-.377-1.077-.434-1.775c-.056-.687-.056-1.544-.056-2.645V9.877c0-1.1 0-1.958.056-2.645c.057-.698.175-1.265.434-1.775A4.5 4.5 0 0 1 5.957 3.49c.51-.26 1.077-.377 1.775-.434C8.42 3 9.276 3 10.377 3M4.5 10v4.1c0 1.128 0 1.945.053 2.586c.052.637.152 1.057.328 1.403a3.5 3.5 0 0 0 1.53 1.53c.346.176.766.276 1.403.328C8.455 20 9.272 20 10.4 20h3.2c1.128 0 1.945 0 2.586-.053c.637-.052 1.057-.152 1.403-.328a3.5 3.5 0 0 0 1.53-1.53c.176-.346.276-.766.328-1.402c.053-.642.053-1.459.053-2.587V10zm4-3.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5M8 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m7 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-4 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-4 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m4 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class StashCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarDuotoneIcon],svg[stash-calendar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.367 2.75h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v4.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.867c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M7.834 4.302c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v4.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.9c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.132 0-1.937 0-2.566.052"></svg:path><svg:path fill="currentColor" d="M6.524 4.604c.305-.155.69-.251 1.31-.302c.55-.045 1.235-.051 2.156-.052h4.049c.906.001 1.582.007 2.127.052c.62.05 1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.045.553.05 1.24.052 2.166H4.75c0-.926.007-1.614.052-2.166c.05-.62.147-1.005.302-1.31a3.25 3.25 0 0 1 1.42-1.42M8.5 6.75a1 1 0 0 0 1 1h5a1 1 0 0 0 0-2h-5a1 1 0 0 0-1 1m-.25 4.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m6.25 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-3.75 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m3.75 0a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0" opacity=".5"></svg:path>`,
})
export class StashCalendarDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarEndIcon],svg[stash-calendar-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5m.136 6.365c.165-.2.522-.365.864-.365a1 1 0 0 1 1 1c0 .315-.093.546-.254.7c-.16.157-.458.3-.996.3a.5.5 0 0 0 0 1c.538 0 .835.143.996.3c.16.154.254.385.254.7a1 1 0 0 1-1 1c-.342 0-.699-.164-.864-.365a.5.5 0 0 0-.772.636c.385.467 1.045.729 1.636.729a2 2 0 0 0 2-2c0-.514-.157-1.032-.559-1.42l-.088-.08q.045-.038.088-.08c.402-.388.559-.906.559-1.42a2 2 0 0 0-2-2c-.59 0-1.25.262-1.636.729a.5.5 0 1 0 .772.636M14.75 18v-5.168l-.765.407a.5.5 0 0 1-.47-.882l1.227-.653c.038-.02.092-.049.142-.07a.63.63 0 0 1 .326-.05a.62.62 0 0 1 .425.257a.63.63 0 0 1 .11.31c.005.055.005.116.005.158V18a.5.5 0 1 1-1 0"></svg:path><svg:path fill="currentColor" d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.635 11.84a.63.63 0 0 1 .11.312c.005.054.005.115.005.157V18a.5.5 0 1 1-1 0v-5.168l-.765.407a.5.5 0 0 1-.47-.882l1.227-.653c.038-.02.092-.049.142-.07a.63.63 0 0 1 .326-.05a.62.62 0 0 1 .425.257m-2.237.296a.75.75 0 0 0 .704 1.324l.398-.211V18a.75.75 0 0 0 1.5 0v-5.694c0-.041 0-.112-.006-.177a.9.9 0 0 0-.155-.433a.87.87 0 0 0-.597-.359a.9.9 0 0 0-.455.066a2 2 0 0 0-.16.079zm.236-9.386c1.091 0 1.957 0 2.654.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.654v4.268c0 1.091 0 1.957-.057 2.654c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.654.057h-3.268c-1.091 0-1.957 0-2.654-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.654V9.866c0-1.091 0-1.957.057-2.654c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057zm-5.8 1.552c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.032.39-.044.85-.05 1.416h14.495a20 20 0 0 0-.049-1.416c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.133 0-1.937 0-2.566.052M19.497 8.75a20 20 0 0 0-.05-1.436c-.052-.637-.152-1.057-.328-1.403a3.5 3.5 0 0 0-1.53-1.53c-.346-.176-.766-.276-1.402-.328C15.545 4 14.728 4 13.6 4h-3.2c-1.128 0-1.945 0-2.586.053c-.637.052-1.057.152-1.403.328a3.5 3.5 0 0 0-1.53 1.53c-.176.346-.276.766-.328 1.403c-.033.4-.045.867-.05 1.436L4.5 9h15zM4.75 10.25v3.85c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.433.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-3.85zm3.5-3.75A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m1.25 6.25c-.28 0-.56.14-.671.274a.75.75 0 1 1-1.158-.954c.44-.534 1.176-.82 1.829-.82a2.25 2.25 0 0 1 2.25 2.25c0 .522-.148 1.068-.538 1.5c.39.432.538.978.538 1.5a2.25 2.25 0 0 1-2.25 2.25c-.653 0-1.389-.286-1.829-.82a.75.75 0 0 1 1.158-.954c.11.134.391.274.671.274a.75.75 0 0 0 .75-.75c0-.264-.077-.424-.177-.521c-.102-.098-.329-.229-.823-.229a.75.75 0 0 1 0-1.5c.494 0 .721-.13.823-.229c.1-.097.177-.257.177-.521a.75.75 0 0 0-.75-.75m1.533 2.075c.334-.375.467-.852.467-1.325a2 2 0 0 0-2-2c-.59 0-1.25.262-1.636.729a.5.5 0 1 0 .772.636c.165-.2.522-.365.864-.365a1 1 0 0 1 1 1c0 .315-.093.546-.254.7c-.16.157-.458.3-.996.3a.5.5 0 0 0 0 1c.538 0 .835.143.996.3c.16.154.254.385.254.7a1 1 0 0 1-1 1c-.342 0-.699-.164-.864-.365a.5.5 0 0 0-.772.636c.385.467 1.045.729 1.636.729a2 2 0 0 0 2-2c0-.473-.133-.95-.467-1.325a2 2 0 0 0-.18-.175a2 2 0 0 0 .18-.175M10.377 3h3.246c1.1 0 1.958 0 2.645.056c.698.057 1.265.175 1.775.434a4.5 4.5 0 0 1 1.967 1.967c.26.51.377 1.077.434 1.775c.056.687.056 1.544.056 2.645v4.246c0 1.1 0 1.958-.056 2.645c-.057.698-.175 1.265-.434 1.775a4.5 4.5 0 0 1-1.967 1.967c-.51.26-1.077.377-1.775.434c-.687.056-1.544.056-2.645.056h-3.246c-1.1 0-1.958 0-2.645-.056c-.698-.057-1.265-.175-1.775-.434a4.5 4.5 0 0 1-1.967-1.967c-.26-.51-.377-1.077-.434-1.775c-.056-.687-.056-1.544-.056-2.645V9.877c0-1.1 0-1.958.056-2.645c.057-.698.175-1.265.434-1.775A4.5 4.5 0 0 1 5.957 3.49c.51-.26 1.077-.377 1.775-.434C8.42 3 9.276 3 10.377 3M4.5 10v4.1c0 1.128 0 1.945.053 2.586c.052.637.152 1.057.328 1.403a3.5 3.5 0 0 0 1.53 1.53c.346.176.766.276 1.403.328C8.455 20 9.272 20 10.4 20h3.2c1.128 0 1.945 0 2.586-.053c.637-.052 1.057-.152 1.403-.328a3.5 3.5 0 0 0 1.53-1.53c.176-.346.276-.766.328-1.402c.053-.642.053-1.459.053-2.587V10zM9 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class StashCalendarEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarEndDuotoneIcon],svg[stash-calendar-end-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.367 2.75h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v4.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.867c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M7.834 4.302c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v4.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.9c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.132 0-1.937 0-2.566.052"></svg:path><svg:g fill="currentColor" opacity=".5"><svg:path fill-rule="evenodd" d="M6.525 4.604c.304-.155.688-.251 1.309-.302c.63-.051 1.434-.052 2.566-.052h3.2c1.133 0 1.937 0 2.566.052c.62.05 1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.045.553.051 1.24.052 2.166H4.75c0-.926.007-1.614.052-2.166c.05-.62.147-1.005.302-1.31a3.25 3.25 0 0 1 1.42-1.42M8.5 6.75a1 1 0 0 0 1 1h5a1 1 0 1 0 0-2h-5a1 1 0 0 0-1 1" clip-rule="evenodd"></svg:path><svg:path d="M8.829 12.524c.11-.134.39-.274.671-.274a.75.75 0 0 1 .75.75c0 .265-.077.425-.177.521c-.102.098-.329.229-.823.229a.75.75 0 0 0 0 1.5c.494 0 .721.131.823.229c.1.097.177.256.177.521a.75.75 0 0 1-.75.75c-.28 0-.56-.14-.671-.274a.75.75 0 1 0-1.158.954c.44.534 1.176.82 1.829.82A2.25 2.25 0 0 0 11.75 16c0-.522-.149-1.068-.538-1.5c.39-.432.538-.978.538-1.5a2.25 2.25 0 0 0-2.25-2.25c-.653 0-1.389.286-1.829.82a.75.75 0 0 0 1.158.954m5.671.225V17.5a.75.75 0 0 0 1.5 0v-5.69c0-.042 0-.115-.006-.181a.9.9 0 0 0-.155-.433a.87.87 0 0 0-.597-.359a.9.9 0 0 0-.455.066c-.062.026-.126.06-.162.08l-.01.005l-1.217.648a.75.75 0 0 0 .704 1.324z"></svg:path></svg:g>`,
})
export class StashCalendarEndDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarEndLightIcon],svg[stash-calendar-end-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5m.136 6.365c.165-.2.522-.365.864-.365a1 1 0 0 1 1 1c0 .315-.093.546-.254.7c-.16.157-.458.3-.996.3a.5.5 0 0 0 0 1c.538 0 .835.143.996.3c.16.154.254.385.254.7a1 1 0 0 1-1 1c-.342 0-.699-.164-.864-.365a.5.5 0 0 0-.772.636c.385.467 1.045.729 1.636.729a2 2 0 0 0 2-2c0-.514-.157-1.032-.559-1.42l-.088-.08q.045-.038.088-.08c.402-.388.559-.906.559-1.42a2 2 0 0 0-2-2c-.59 0-1.25.262-1.636.729a.5.5 0 1 0 .772.636M14.75 18v-5.168l-.765.407a.5.5 0 0 1-.47-.882l1.227-.653c.038-.02.092-.049.142-.07a.63.63 0 0 1 .326-.05a.62.62 0 0 1 .425.257a.63.63 0 0 1 .11.31c.005.055.005.116.005.158V18a.5.5 0 1 1-1 0"></svg:path><svg:path fill="currentColor" d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"></svg:path>`,
})
export class StashCalendarEndLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarEndSolidIcon],svg[stash-calendar-end-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.829 12.524c.11-.134.39-.274.671-.274a.75.75 0 0 1 .75.75c0 .265-.077.425-.177.521c-.102.098-.329.229-.823.229a.75.75 0 0 0 0 1.5c.494 0 .721.131.823.229c.1.097.177.256.177.521a.75.75 0 0 1-.75.75c-.28 0-.56-.14-.671-.274a.75.75 0 1 0-1.158.954c.44.534 1.176.82 1.829.82A2.25 2.25 0 0 0 11.75 16c0-.522-.149-1.068-.538-1.5c.39-.432.538-.978.538-1.5a2.25 2.25 0 0 0-2.25-2.25c-.653 0-1.389.286-1.829.82a.75.75 0 0 0 1.158.954M14.5 17.5v-4.751l-.398.211a.75.75 0 0 1-.704-1.324l1.218-.648l.009-.005c.036-.02.1-.054.162-.08a.9.9 0 0 1 .455-.066a.87.87 0 0 1 .597.359a.87.87 0 0 1 .155.433c.006.066.006.139.006.18V17.5a.75.75 0 0 1-1.5 0"></svg:path><svg:path fill="currentColor" d="M10.367 2.75h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v4.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.867c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M4.75 9.5v4.6c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.5zM9.5 5.75a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashCalendarEndSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarLightIcon],svg[stash-calendar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5M8 12a1 1 0 1 0 0 2a1 1 0 0 0 0-2m8 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-5 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0m-3 3a1 1 0 1 0 0 2a1 1 0 0 0 0-2m3 1a1 1 0 1 1 2 0a1 1 0 0 1-2 0"></svg:path><svg:path fill="currentColor" d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"></svg:path>`,
})
export class StashCalendarLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarNineIcon],svg[stash-calendar-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm2.222 11.213l.858-1.224a2.5 2.5 0 0 1-1.513-.45a2.49 2.49 0 0 1-.614-3.475a2.503 2.503 0 0 1 3.48-.613a2.49 2.49 0 0 1 .614 3.476l-2.007 2.86a.5.5 0 1 1-.818-.574m-.45-4.575a1.49 1.49 0 0 0 .367 2.082c.68.474 1.615.309 2.09-.367a1.49 1.49 0 0 0-.368-2.082a1.503 1.503 0 0 0-2.09.367"></svg:path><svg:path fill="currentColor" d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.634 2.75c1.091 0 1.957 0 2.654.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.654v4.268c0 1.091 0 1.957-.057 2.654c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.654.057h-3.268c-1.091 0-1.957 0-2.654-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.654V9.866c0-1.091 0-1.957.057-2.654c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057zm-5.8 1.552c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.032.39-.044.85-.05 1.416h14.495a20 20 0 0 0-.049-1.416c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.133 0-1.937 0-2.566.052M19.497 8.75a20 20 0 0 0-.05-1.436c-.052-.637-.152-1.057-.328-1.403a3.5 3.5 0 0 0-1.53-1.53c-.346-.176-.766-.276-1.402-.328C15.545 4 14.728 4 13.6 4h-3.2c-1.128 0-1.945 0-2.586.053c-.637.052-1.057.152-1.403.328a3.5 3.5 0 0 0-1.53 1.53c-.176.346-.276.766-.328 1.403c-.033.4-.045.867-.05 1.436L4.5 9h15zM4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1zm14.75.25v3.85c0 1.133 0 1.937-.052 2.566c-.05.62-.147 1.005-.302 1.31a3.25 3.25 0 0 1-1.42 1.42c-.305.155-.69.251-1.31.302c-.63.051-1.434.052-2.566.052h-3.2c-1.133 0-1.937 0-2.566-.052c-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 0 1-1.42-1.42c-.155-.305-.251-.69-.302-1.31c-.051-.63-.052-1.434-.052-2.566v-3.85zm-6.532 2.226a1.253 1.253 0 0 0-1.742.306a1.24 1.24 0 0 0 .306 1.733a1.253 1.253 0 0 0 1.742-.306a1.24 1.24 0 0 0-.306-1.733m.511 1.877a1.49 1.49 0 0 0-.368-2.082a1.503 1.503 0 0 0-2.09.367a1.49 1.49 0 0 0 .368 2.082c.68.474 1.615.309 2.09-.367m-1.149 1.636q-.15.006-.3-.008a2.5 2.5 0 0 1-1.213-.441a2.49 2.49 0 0 1-.614-3.476a2.503 2.503 0 0 1 3.48-.613a2.49 2.49 0 0 1 .614 3.476l-2.007 2.86a.5.5 0 1 1-.818-.574zm-.463.225l-.6.855a.75.75 0 0 0 1.228.862l2.007-2.86a2.74 2.74 0 0 0-.675-3.825a2.753 2.753 0 0 0-3.829.674a2.742 2.742 0 0 0 1.869 4.294M8.25 6.5A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M10.377 3h3.246c1.1 0 1.958 0 2.645.056c.698.057 1.265.175 1.775.434a4.5 4.5 0 0 1 1.967 1.967c.26.51.377 1.077.434 1.775c.056.687.056 1.544.056 2.645v4.246c0 1.1 0 1.958-.056 2.645c-.057.698-.175 1.265-.434 1.775a4.5 4.5 0 0 1-1.967 1.967c-.51.26-1.077.377-1.775.434c-.687.056-1.544.056-2.645.056h-3.246c-1.1 0-1.958 0-2.645-.056c-.698-.057-1.265-.175-1.775-.434a4.5 4.5 0 0 1-1.967-1.967c-.26-.51-.377-1.077-.434-1.775c-.056-.687-.056-1.544-.056-2.645V9.877c0-1.1 0-1.958.056-2.645c.057-.698.175-1.265.434-1.775A4.5 4.5 0 0 1 5.957 3.49c.51-.26 1.077-.377 1.775-.434C8.42 3 9.276 3 10.377 3M9 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class StashCalendarNineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarNineDuotoneIcon],svg[stash-calendar-nine-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.367 2.75h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v4.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.867c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M7.834 4.302c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v4.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.9c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.132 0-1.937 0-2.566.052"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.525 4.604c.304-.155.688-.251 1.309-.302c.63-.051 1.434-.052 2.566-.052h3.2c1.133 0 1.937 0 2.566.052c.62.05 1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.045.553.051 1.24.052 2.166H4.75c0-.926.007-1.614.052-2.166c.05-.62.147-1.005.302-1.31a3.25 3.25 0 0 1 1.42-1.42M14.5 5.75h-5a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2m-2.883 10.464l-.6.855a.75.75 0 1 0 1.228.862l2.007-2.86a2.74 2.74 0 0 0-.675-3.825a2.753 2.753 0 0 0-3.829.674a2.742 2.742 0 0 0 1.869 4.294m-.335-1.699a1.24 1.24 0 0 1-.306-1.733a1.253 1.253 0 0 1 1.742-.306c.565.395.701 1.17.306 1.733a1.253 1.253 0 0 1-1.741.306" clip-rule="evenodd" opacity=".5"></svg:path>`,
})
export class StashCalendarNineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarNineLightIcon],svg[stash-calendar-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zm2.222 11.213l.858-1.224a2.5 2.5 0 0 1-1.513-.45a2.49 2.49 0 0 1-.614-3.475a2.503 2.503 0 0 1 3.48-.613a2.49 2.49 0 0 1 .614 3.476l-2.007 2.86a.5.5 0 1 1-.818-.574m-.45-4.575a1.49 1.49 0 0 0 .367 2.082c.68.474 1.615.309 2.09-.367a1.49 1.49 0 0 0-.368-2.082a1.503 1.503 0 0 0-2.09.367"></svg:path><svg:path fill="currentColor" d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"></svg:path>`,
})
export class StashCalendarNineLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarNineSolidIcon],svg[stash-calendar-nine-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.017 17.07l.6-.856a2.742 2.742 0 0 1-1.869-4.294a2.753 2.753 0 0 1 3.829-.674a2.74 2.74 0 0 1 .675 3.825l-2.007 2.86a.75.75 0 0 1-1.228-.862m-.041-4.288a1.24 1.24 0 0 0 .306 1.733a1.253 1.253 0 0 0 1.742-.306a1.24 1.24 0 0 0-.306-1.733a1.253 1.253 0 0 0-1.742.306"></svg:path><svg:path fill="currentColor" d="M10.367 2.75h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v4.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.867c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M4.75 9.5v4.6c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.5zM9.5 5.75a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashCalendarNineSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarSolidIcon],svg[stash-calendar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 11.5a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m7.5 0a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m-5 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-2.5 2.75a1.25 1.25 0 1 0 0 2.5a1.25 1.25 0 0 0 0-2.5m2.5 1.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0"></svg:path><svg:path fill="currentColor" d="M10.367 2.75h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v4.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.867c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M4.75 9.5v4.6c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.5zM9.5 5.75a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashCalendarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarStarIcon],svg[stash-calendar-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5m3.954 4.66a1 1 0 0 0-.907 0c-.233.119-.364.337-.447.496c-.09.17-.183.396-.291.657l-.207.497l-.07.164l-.002.002h-.003a3 3 0 0 1-.178.017l-.536.043a9 9 0 0 0-.715.075c-.178.03-.425.087-.61.271a1 1 0 0 0-.28.863c.041.257.208.449.334.578c.134.137.32.296.534.48l.409.35c.072.061.109.093.134.118l.002.002v.003a3 3 0 0 1-.04.174l-.124.524a8 8 0 0 0-.15.702c-.027.178-.049.431.07.664a1 1 0 0 0 .733.533c.258.04.491-.059.653-.139c.172-.085.38-.213.621-.36l.46-.28c.08-.05.122-.075.153-.091L12 17.5l.003.002c.03.016.073.041.153.09l.46.281c.24.148.45.275.621.36c.162.08.396.18.653.139a1 1 0 0 0 .734-.534c.118-.232.096-.485.07-.663a9 9 0 0 0-.15-.702l-.125-.524l-.04-.174v-.003l.002-.002c.025-.025.062-.057.134-.118l.409-.35c.214-.184.4-.343.534-.48c.126-.129.293-.32.333-.578a1 1 0 0 0-.28-.863c-.184-.184-.431-.241-.61-.271a9 9 0 0 0-.714-.075l-.536-.043a3 3 0 0 1-.178-.016h-.003l-.001-.003l-.07-.164l-.207-.497a9 9 0 0 0-.292-.657c-.083-.16-.214-.377-.447-.495m-.731 1.558a9 9 0 0 1 .277-.624q.008.012.014.027c.066.125.143.31.263.597l.198.476l.014.034c.052.126.117.285.23.412a1 1 0 0 0 .352.256c.156.068.327.08.463.091l.037.003l.514.041a9 9 0 0 1 .68.07l-.022.023c-.099.101-.25.231-.487.434l-.391.335l-.029.025c-.104.088-.235.2-.32.346a1 1 0 0 0-.135.413c-.016.17.024.336.056.469l.009.036l.12.501a9 9 0 0 1 .142.668l-.027-.013a9 9 0 0 1-.564-.329l-.44-.268l-.031-.02c-.117-.072-.263-.162-.428-.199a1 1 0 0 0-.435 0a1.4 1.4 0 0 0-.429.199l-.032.02l-.44.268a9 9 0 0 1-.59.342q0-.013.004-.03a8 8 0 0 1 .139-.638l.12-.5l.008-.037c.032-.133.072-.3.056-.469a1 1 0 0 0-.134-.413a1.4 1.4 0 0 0-.321-.346l-.029-.025l-.39-.335a9 9 0 0 1-.509-.456l.03-.006c.14-.023.339-.04.65-.065l.513-.04l.037-.004c.136-.01.307-.023.463-.09a1 1 0 0 0 .352-.257c.113-.127.178-.286.23-.412l.014-.034z"></svg:path><svg:path fill="currentColor" d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m9.322 15.843l-.416-.357c-.208-.178-.401-.343-.543-.488c-.13-.134-.348-.374-.401-.714a1.25 1.25 0 0 1 .35-1.078c.243-.244.56-.31.744-.342c.2-.034.453-.054.727-.076l.546-.044l.03-.002l.012-.028l.21-.506c.106-.254.203-.488.297-.668c.087-.165.248-.446.555-.602a1.25 1.25 0 0 1 1.134 0c.307.156.468.437.555.602c.094.18.191.414.297.668l.21.506l.012.028l.03.002l.546.044c.274.022.527.042.727.076c.184.031.5.098.744.342c.283.282.413.683.35 1.078c-.053.34-.27.58-.401.714c-.142.145-.335.31-.543.488l-.416.357l-.023.02l.007.03l.127.532c.064.267.123.514.152.715c.027.184.062.506-.095.813a1.25 1.25 0 0 1-.917.666c-.34.055-.636-.078-.803-.16l.111-.225c.162.08.396.18.653.139a1 1 0 0 0 .734-.534c.118-.232.096-.485.07-.663a9 9 0 0 0-.15-.702l-.125-.524l-.04-.174v-.003l.002-.002c.025-.025.062-.057.134-.118l.409-.35c.214-.184.4-.343.534-.48c.126-.129.293-.32.333-.578a1 1 0 0 0-.28-.863c-.184-.184-.431-.241-.61-.271a9 9 0 0 0-.714-.075l-.536-.043a3 3 0 0 1-.178-.016h-.003l-.001-.003l-.07-.164l-.207-.497a9 9 0 0 0-.292-.657c-.083-.16-.214-.377-.447-.495a1 1 0 0 0-.906 0c-.233.118-.364.336-.447.495c-.09.17-.183.396-.291.657l-.207.497l-.07.164l-.002.002h-.003a3 3 0 0 1-.178.017l-.536.043a9 9 0 0 0-.715.075c-.178.03-.425.087-.61.271a1 1 0 0 0-.28.863c.041.257.208.449.334.578c.134.137.32.296.534.48l.409.35c.072.061.109.093.134.118l.002.002v.003a3 3 0 0 1-.04.174l-.124.524a8 8 0 0 0-.15.702c-.027.178-.049.431.07.664a1 1 0 0 0 .733.533c.258.04.491-.059.653-.139c.172-.085.38-.213.621-.36l.46-.28c.08-.05.122-.075.153-.091L12 17.5l.003.002c.03.016.073.041.153.09l.46.281c.24.148.45.275.621.36l-.11.224a9 9 0 0 1-.633-.365l-.468-.286L12 17.79l-.026.016l-.468.286c-.234.143-.45.275-.632.365c-.167.083-.463.216-.803.162a1.25 1.25 0 0 1-.917-.667c-.157-.307-.122-.629-.095-.813c.03-.2.088-.448.152-.715l.127-.533l.007-.03zm.293-.068l-.204-.036zm2.41-3.634L12 12.094l-.025.047a4 4 0 0 0-.111.243q-.06.137-.141.334l-.198.476l-.014.034a1.4 1.4 0 0 1-.23.412a1 1 0 0 1-.352.256c-.156.068-.327.08-.463.091l-.037.003l-.514.041l-.36.03q-.16.014-.266.032q-.012 0-.023.003l-.03.006l.021.022l.016.016q.077.076.197.181q.112.1.274.237l.391.335l.029.025c.104.088.235.2.321.346a1 1 0 0 1 .134.413c.017.17-.024.336-.056.469l-.009.036l-.12.501l-.082.353a4 4 0 0 0-.06.315l.048-.023q.095-.049.233-.131l.31-.188l.44-.268l.031-.02c.117-.072.263-.162.429-.199a1 1 0 0 1 .435 0c.165.037.312.127.428.199l.032.02l.44.268l.31.188a4 4 0 0 0 .28.154l-.001-.011l-.003-.019q0-.012-.003-.023a4 4 0 0 0-.053-.262l-.082-.353l-.12-.5l-.009-.037a1.4 1.4 0 0 1-.056-.469a1 1 0 0 1 .134-.413a1.4 1.4 0 0 1 .321-.346l.029-.025l.391-.335q.162-.137.274-.237a4 4 0 0 0 .197-.18l.016-.017l.021-.022l-.03-.006l-.023-.003a4 4 0 0 0-.265-.031l-.361-.03l-.514-.042l-.037-.003a1.4 1.4 0 0 1-.463-.09a1 1 0 0 1-.352-.257c-.113-.127-.178-.286-.23-.412l-.014-.034l-.198-.476q-.081-.197-.14-.334a4 4 0 0 0-.112-.243m-.025.562l-.046.111l-.198.475l-.014.034l-.004.01c-.05.122-.129.314-.27.473a1.25 1.25 0 0 1-.44.32c-.194.084-.4.1-.532.11h-.01l-.037.003l-.514.042l-.12.01l.092.077l.39.335l.029.024l.008.007c.1.085.258.22.366.402c.094.158.15.335.168.518c.02.211-.029.412-.06.54l-.002.01l-.009.036l-.12.501l-.027.117l.102-.062l.44-.268l.031-.02l.01-.006c.111-.069.288-.177.495-.224c.18-.04.365-.04.544 0c.207.047.384.155.496.224l.009.006l.031.02l.44.268l.102.062l-.028-.117l-.12-.5l-.008-.036l-.002-.01a1.6 1.6 0 0 1-.06-.541a1.25 1.25 0 0 1 .168-.518c.108-.182.266-.317.366-.402l.008-.007l.028-.024l.391-.335l.091-.078l-.12-.01l-.512-.04l-.037-.003l-.01-.001a1.7 1.7 0 0 1-.534-.11a1.25 1.25 0 0 1-.44-.32a1.6 1.6 0 0 1-.269-.473l-.004-.01l-.014-.033l-.198-.476zm1.634-9.953c1.091 0 1.957 0 2.654.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.654v4.268c0 1.091 0 1.957-.057 2.654c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.654.057h-3.268c-1.091 0-1.957 0-2.654-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.654V9.866c0-1.091 0-1.957.057-2.654c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057zm-5.8 1.552c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.032.39-.044.85-.05 1.416h14.495a20 20 0 0 0-.049-1.416c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.133 0-1.937 0-2.566.052M19.497 8.75a20 20 0 0 0-.05-1.436c-.052-.637-.152-1.057-.328-1.403a3.5 3.5 0 0 0-1.53-1.53c-.346-.176-.766-.276-1.402-.328C15.545 4 14.728 4 13.6 4h-3.2c-1.128 0-1.945 0-2.586.053c-.637.052-1.057.152-1.403.328a3.5 3.5 0 0 0-1.53 1.53c-.176.346-.276.766-.328 1.403c-.033.4-.045.867-.05 1.436L4.5 9h15zM4.75 10.25v3.85c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.433.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-3.85zm3.5-3.75A.75.75 0 0 1 9 5.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75M10.377 3h3.246c1.1 0 1.958 0 2.645.056c.698.057 1.265.175 1.775.434a4.5 4.5 0 0 1 1.967 1.967c.26.51.377 1.077.434 1.775c.056.687.056 1.544.056 2.645v4.246c0 1.1 0 1.958-.056 2.645c-.057.698-.175 1.265-.434 1.775a4.5 4.5 0 0 1-1.967 1.967c-.51.26-1.077.377-1.775.434c-.687.056-1.544.056-2.645.056h-3.246c-1.1 0-1.958 0-2.645-.056c-.698-.057-1.265-.175-1.775-.434a4.5 4.5 0 0 1-1.967-1.967c-.26-.51-.377-1.077-.434-1.775c-.056-.687-.056-1.544-.056-2.645V9.877c0-1.1 0-1.958.056-2.645c.057-.698.175-1.265.434-1.775A4.5 4.5 0 0 1 5.957 3.49c.51-.26 1.077-.377 1.775-.434C8.42 3 9.276 3 10.377 3M4.5 10v4.1c0 1.128 0 1.945.053 2.586c.052.637.152 1.057.328 1.403a3.5 3.5 0 0 0 1.53 1.53c.346.176.766.276 1.403.328C8.455 20 9.272 20 10.4 20h3.2c1.128 0 1.945 0 2.586-.053c.637-.052 1.057-.152 1.403-.328a3.5 3.5 0 0 0 1.53-1.53c.176-.346.276-.766.328-1.402c.053-.642.053-1.459.053-2.587V10zm4-3.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class StashCalendarStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarStarDuotoneIcon],svg[stash-calendar-star-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.367 2.75h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v4.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.867c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M7.834 4.302c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v4.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.9c0-1.132 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-3.2c-1.132 0-1.937 0-2.566.052"></svg:path><svg:g fill="currentColor" opacity=".5"><svg:path fill-rule="evenodd" d="M6.525 4.604c.304-.155.688-.251 1.309-.302c.63-.051 1.434-.052 2.566-.052h3.2c1.133 0 1.937 0 2.566.052c.62.05 1.005.147 1.31.302a3.25 3.25 0 0 1 1.42 1.42c.155.305.251.69.302 1.31c.045.553.051 1.24.052 2.166H4.75c0-.926.007-1.614.052-2.166c.05-.62.147-1.005.302-1.31a3.25 3.25 0 0 1 1.42-1.42M9.5 7.75a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2z" clip-rule="evenodd"></svg:path><svg:path d="M11.261 12.276c.232-.557.348-.836.512-.92a.5.5 0 0 1 .454 0c.164.084.28.363.512.92l.197.476c.069.163.103.245.158.308a.5.5 0 0 0 .176.127c.076.034.164.04.341.055l.514.041c.601.048.902.072 1.033.203a.5.5 0 0 1 .14.43c-.03.183-.258.38-.717.772l-.391.335c-.135.116-.202.173-.244.245a.5.5 0 0 0-.068.207c-.008.082.013.169.054.341l.12.501c.14.588.21.881.126 1.045a.5.5 0 0 1-.367.267c-.182.029-.44-.129-.954-.443l-.44-.269c-.151-.092-.227-.139-.308-.157a.5.5 0 0 0-.218 0c-.08.018-.156.065-.308.157l-.44.269c-.515.314-.772.472-.954.443a.5.5 0 0 1-.367-.267c-.084-.164-.014-.457.126-1.045l.12-.5c.04-.173.062-.26.054-.342a.5.5 0 0 0-.068-.207c-.042-.072-.11-.13-.244-.245l-.391-.335c-.459-.393-.688-.59-.717-.771a.5.5 0 0 1 .14-.431c.13-.13.432-.155 1.033-.203l.514-.041c.177-.014.265-.022.341-.055a.5.5 0 0 0 .176-.127c.055-.063.09-.145.157-.308z"></svg:path></svg:g>`,
})
export class StashCalendarStarDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarStarLightIcon],svg[stash-calendar-star-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6.5A.5.5 0 0 1 9 6h6a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5m3.954 4.66a1 1 0 0 0-.907 0c-.233.119-.364.337-.447.496c-.09.17-.183.396-.291.657l-.207.497l-.07.164l-.002.002h-.003a3 3 0 0 1-.178.017l-.536.043a9 9 0 0 0-.715.075c-.178.03-.425.087-.61.271a1 1 0 0 0-.28.863c.041.257.208.449.334.578c.134.137.32.296.534.48l.409.35c.072.061.109.093.134.118l.002.002v.003a3 3 0 0 1-.04.174l-.124.524a8 8 0 0 0-.15.702c-.027.178-.049.431.07.664a1 1 0 0 0 .733.533c.258.04.491-.059.653-.139c.172-.085.38-.213.621-.36l.46-.28c.08-.05.122-.075.153-.091L12 17.5l.003.002c.03.016.073.041.153.09l.46.281c.24.148.45.275.621.36c.162.08.396.18.653.139a1 1 0 0 0 .734-.534c.118-.232.096-.485.07-.663a9 9 0 0 0-.15-.702l-.125-.524l-.04-.174v-.003l.002-.002c.025-.025.062-.057.134-.118l.409-.35c.214-.184.4-.343.534-.48c.126-.129.293-.32.333-.578a1 1 0 0 0-.28-.863c-.184-.184-.431-.241-.61-.271a9 9 0 0 0-.714-.075l-.536-.043a3 3 0 0 1-.178-.016h-.003l-.001-.003l-.07-.164l-.207-.497a9 9 0 0 0-.292-.657c-.083-.16-.214-.377-.447-.495m-.731 1.558a9 9 0 0 1 .277-.624q.008.012.014.027c.066.125.143.31.263.597l.198.476l.014.034c.052.126.117.285.23.412a1 1 0 0 0 .352.256c.156.068.327.08.463.091l.037.003l.514.041a9 9 0 0 1 .68.07l-.022.023c-.099.101-.25.231-.487.434l-.391.335l-.029.025c-.104.088-.235.2-.32.346a1 1 0 0 0-.135.413c-.016.17.024.336.056.469l.009.036l.12.501a9 9 0 0 1 .142.668l-.027-.013a9 9 0 0 1-.564-.329l-.44-.268l-.031-.02c-.117-.072-.263-.162-.428-.199a1 1 0 0 0-.435 0a1.4 1.4 0 0 0-.429.199l-.032.02l-.44.268a9 9 0 0 1-.59.342q0-.013.004-.03a8 8 0 0 1 .139-.638l.12-.5l.008-.037c.032-.133.072-.3.056-.469a1 1 0 0 0-.134-.413a1.4 1.4 0 0 0-.321-.346l-.029-.025l-.39-.335a9 9 0 0 1-.509-.456l.03-.006c.14-.023.339-.04.65-.065l.513-.04l.037-.004c.136-.01.307-.023.463-.09a1 1 0 0 0 .352-.257c.113-.127.178-.286.23-.412l.014-.034z"></svg:path><svg:path fill="currentColor" d="M13.623 3h-3.246c-1.1 0-1.958 0-2.645.056c-.698.057-1.265.175-1.775.434A4.5 4.5 0 0 0 3.99 5.457c-.26.51-.377 1.077-.434 1.775C3.5 7.92 3.5 8.776 3.5 9.877v4.246c0 1.1 0 1.958.056 2.645c.057.698.175 1.265.434 1.775a4.5 4.5 0 0 0 1.967 1.967c.51.26 1.077.377 1.775.434C8.42 21 9.276 21 10.377 21h3.246c1.1 0 1.958 0 2.645-.056c.698-.057 1.265-.175 1.775-.434a4.5 4.5 0 0 0 1.967-1.967c.26-.51.377-1.077.434-1.775c.056-.687.056-1.544.056-2.645V9.877c0-1.1 0-1.958-.056-2.645c-.057-.698-.175-1.265-.434-1.775a4.5 4.5 0 0 0-1.967-1.967c-.51-.26-1.077-.377-1.775-.434C15.58 3 14.724 3 13.623 3M6.41 4.381c.346-.176.766-.276 1.403-.328C8.455 4 9.272 4 10.4 4h3.2c1.128 0 1.945 0 2.586.053c.637.052 1.057.152 1.403.328a3.5 3.5 0 0 1 1.53 1.53c.176.346.276.766.328 1.403c.038.457.049 1.002.052 1.686H4.5c.004-.684.014-1.23.052-1.686c.052-.637.152-1.057.328-1.403a3.5 3.5 0 0 1 1.53-1.53M4.5 10h15v4.1c0 1.128 0 1.945-.053 2.586c-.052.637-.152 1.057-.328 1.403a3.5 3.5 0 0 1-1.53 1.53c-.346.176-.766.276-1.402.328C15.545 20 14.728 20 13.6 20h-3.2c-1.128 0-1.945 0-2.586-.053c-.637-.052-1.057-.152-1.403-.328a3.5 3.5 0 0 1-1.53-1.53c-.176-.346-.276-.766-.328-1.402C4.5 16.045 4.5 15.228 4.5 14.1z"></svg:path>`,
})
export class StashCalendarStarLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCalendarStarSolidIcon],svg[stash-calendar-star-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.773 11.356c-.164.084-.28.363-.512.92l-.197.476c-.069.163-.103.245-.158.308a.5.5 0 0 1-.176.127c-.076.034-.164.04-.341.055l-.514.041c-.601.048-.902.072-1.032.203a.5.5 0 0 0-.14.43c.028.183.257.38.716.772l.391.335c.135.116.202.173.244.245a.5.5 0 0 1 .068.207c.008.082-.013.169-.054.341l-.12.501c-.14.588-.21.881-.126 1.045a.5.5 0 0 0 .367.267c.182.029.44-.129.954-.443l.44-.269c.152-.092.227-.139.308-.157a.5.5 0 0 1 .218 0c.08.018.157.065.308.157l.44.269c.515.314.772.472.954.443a.5.5 0 0 0 .367-.267c.084-.164.014-.457-.126-1.045l-.12-.5c-.04-.173-.062-.26-.054-.342a.5.5 0 0 1 .068-.207c.042-.072.11-.13.244-.245l.391-.335c.459-.393.688-.59.717-.771a.5.5 0 0 0-.14-.431c-.13-.13-.431-.155-1.033-.203l-.514-.041c-.177-.014-.265-.022-.341-.055a.5.5 0 0 1-.176-.127c-.055-.063-.09-.145-.157-.308l-.198-.476c-.232-.557-.348-.836-.512-.92a.5.5 0 0 0-.454 0"></svg:path><svg:path fill="currentColor" d="M10.367 2.75h3.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v4.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-3.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V9.867c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M4.75 9.5v4.6c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h3.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566V9.5zM9.5 5.75a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2z"></svg:path>`,
})
export class StashCalendarStarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCamVideoIcon],svg[stash-cam-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 6.25A2.25 2.25 0 0 0 3.25 8.5v7a2.25 2.25 0 0 0 2.25 2.25h8a2.25 2.25 0 0 0 2.25-2.25v-.787l3.191 1.596a1.25 1.25 0 0 0 1.809-1.118V8.809a1.25 1.25 0 0 0-1.809-1.118L15.75 9.286V8.5a2.25 2.25 0 0 0-2.25-2.25zm10.25 4.714v2.072l3.5 1.75V9.213zM14.25 8.5a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class StashCamVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCamVideoDuotoneIcon],svg[stash-cam-video-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 13.5l4.276 2.138a.5.5 0 0 0 .724-.447V8.809a.5.5 0 0 0-.724-.447L15 10.5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 6.25A2.25 2.25 0 0 0 3.25 8.5v7a2.25 2.25 0 0 0 2.25 2.25h8a2.25 2.25 0 0 0 2.25-2.25v-.787l3.191 1.596a1.25 1.25 0 0 0 1.809-1.118V8.809a1.25 1.25 0 0 0-1.809-1.118L15.75 9.286V8.5a2.25 2.25 0 0 0-2.25-2.25zm10.25 4.714v2.072l3.5 1.75V9.213zM14.25 8.5a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h8a.75.75 0 0 0 .75-.75z" clip-rule="evenodd"></svg:path>`,
})
export class StashCamVideoDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCamVideoLightIcon],svg[stash-cam-video-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 6.5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.191l3.553 1.776a1 1 0 0 0 1.447-.894V8.809a1 1 0 0 0-1.447-.894L15.5 9.69V8.5a2 2 0 0 0-2-2zm10 4.309v2.382l4 2V8.809zm-1-2.309a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class StashCamVideoLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCamVideoSolidIcon],svg[stash-cam-video-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.25 8.5A2.25 2.25 0 0 1 5.5 6.25h7.25A2.25 2.25 0 0 1 15 8.5v7a2.25 2.25 0 0 1-2.25 2.25H5.5a2.25 2.25 0 0 1-2.25-2.25zm15.691-.81a1.25 1.25 0 0 1 1.809 1.12v6.382a1.25 1.25 0 0 1-1.809 1.118l-2.776-1.388a.75.75 0 0 1-.415-.671v-4.5a.75.75 0 0 1 .415-.67z"></svg:path>`,
})
export class StashCamVideoSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCamWebIcon],svg[stash-cam-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="10" r="6.5" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M16 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill="currentColor" d="M15.25 10A3.25 3.25 0 0 1 12 13.25v1.5A4.75 4.75 0 0 0 16.75 10zM12 13.25A3.25 3.25 0 0 1 8.75 10h-1.5A4.75 4.75 0 0 0 12 14.75zM8.75 10A3.25 3.25 0 0 1 12 6.75v-1.5A4.75 4.75 0 0 0 7.25 10zM12 6.75A3.25 3.25 0 0 1 15.25 10h1.5A4.75 4.75 0 0 0 12 5.25z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.131 16.968c-.579.77-1.346 1.517-1.977 2.077c-.359.319-.134.955.346.955h13c.48 0 .705-.636.346-.955c-.63-.56-1.398-1.306-1.977-2.077"></svg:path></svg:g>`,
})
export class StashCamWebIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCamWebDuotoneIcon],svg[stash-cam-web-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="10" r="6.5" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:circle cx="12" cy="10" r="4" fill="currentColor" opacity=".5"></svg:circle><svg:circle cx="12" cy="10" r="4" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.131 16.968c-.579.77-1.346 1.517-1.977 2.077c-.359.319-.134.955.346.955h13c.48 0 .705-.636.346-.955c-.63-.56-1.398-1.306-1.977-2.077"></svg:path></svg:g>`,
})
export class StashCamWebDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCamWebLightIcon],svg[stash-cam-web-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="10" r="6.5" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="currentColor" d="M16 10a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path fill="currentColor" d="M15.5 10a3.5 3.5 0 0 1-3.5 3.5v1a4.5 4.5 0 0 0 4.5-4.5zM12 13.5A3.5 3.5 0 0 1 8.5 10h-1a4.5 4.5 0 0 0 4.5 4.5zM8.5 10A3.5 3.5 0 0 1 12 6.5v-1A4.5 4.5 0 0 0 7.5 10zM12 6.5a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 12 5.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.131 16.968c-.579.77-1.346 1.517-1.977 2.077c-.359.319-.134.955.346.955h13c.48 0 .705-.636.346-.955c-.63-.56-1.398-1.306-1.977-2.077"></svg:path></svg:g>`,
})
export class StashCamWebLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCamWebSolidIcon],svg[stash-cam-web-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12" cy="10" r="6.5" fill="currentColor"></svg:circle><svg:circle cx="12" cy="10" r="4" fill="currentColor"></svg:circle><svg:path d="M7.131 16.968c-.579.77-1.346 1.517-1.977 2.077c-.359.319-.134.955.346.955h13c.48 0 .705-.636.346-.955c-.63-.56-1.398-1.306-1.977-2.077"></svg:path></svg:g>`,
})
export class StashCamWebSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretDownIcon],svg[stash-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.36 14.227l-3.199-3.636c-.395-.45-.019-1.091.64-1.091H15.2c.659 0 1.035.641.64 1.09l-3.2 3.637c-.32.364-.959.364-1.279 0"></svg:path>`,
})
export class StashCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretDownDuotoneIcon],svg[stash-caret-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.36 14.227l-3.199-3.636c-.395-.45-.019-1.091.64-1.091H15.2c.659 0 1.035.641.64 1.09l-3.2 3.637c-.32.364-.959.364-1.279 0"></svg:path>`,
})
export class StashCaretDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretDownLightIcon],svg[stash-caret-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.36 14.227l-3.199-3.636c-.395-.45-.019-1.091.64-1.091H15.2c.659 0 1.035.641.64 1.09l-3.2 3.637c-.32.364-.959.364-1.279 0"></svg:path>`,
})
export class StashCaretDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretLeftIcon],svg[stash-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.773 12.64l3.636 3.199c.45.395 1.091.019 1.091-.64V8.8c0-.659-.641-1.035-1.09-.64l-3.637 3.2c-.364.32-.364.959 0 1.279"></svg:path>`,
})
export class StashCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretLeftDuotoneIcon],svg[stash-caret-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.773 12.64l3.636 3.199c.45.395 1.091.019 1.091-.64V8.8c0-.659-.641-1.035-1.09-.64l-3.637 3.2c-.364.32-.364.959 0 1.279"></svg:path>`,
})
export class StashCaretLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretLeftLightIcon],svg[stash-caret-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.773 12.64l3.636 3.199c.45.395 1.091.019 1.091-.64V8.8c0-.659-.641-1.035-1.09-.64l-3.637 3.2c-.364.32-.364.959 0 1.279"></svg:path>`,
})
export class StashCaretLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretRightIcon],svg[stash-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.227 12.64l-3.636 3.199c-.45.395-1.091.019-1.091-.64V8.8c0-.659.641-1.035 1.09-.64l3.637 3.2c.364.32.364.959 0 1.279"></svg:path>`,
})
export class StashCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretRightDuotoneIcon],svg[stash-caret-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.227 12.64l-3.636 3.199c-.45.395-1.091.019-1.091-.64V8.8c0-.659.641-1.035 1.09-.64l3.637 3.2c.364.32.364.959 0 1.279"></svg:path>`,
})
export class StashCaretRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretRightLightIcon],svg[stash-caret-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.227 12.64l-3.636 3.199c-.45.395-1.091.019-1.091-.64V8.8c0-.659.641-1.035 1.09-.64l3.637 3.2c.364.32.364.959 0 1.279"></svg:path>`,
})
export class StashCaretRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretUpIcon],svg[stash-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.36 9.773l-3.199 3.636c-.395.45-.019 1.091.64 1.091H15.2c.659 0 1.035-.641.64-1.09l-3.2-3.637c-.32-.364-.959-.364-1.279 0"></svg:path>`,
})
export class StashCaretUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretUpDuotoneIcon],svg[stash-caret-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.36 9.773l-3.199 3.636c-.395.45-.019 1.091.64 1.091H15.2c.659 0 1.035-.641.64-1.09l-3.2-3.637c-.32-.364-.959-.364-1.279 0"></svg:path>`,
})
export class StashCaretUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCaretUpLightIcon],svg[stash-caret-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.36 9.773l-3.199 3.636c-.395.45-.019 1.091.64 1.091H15.2c.659 0 1.035-.641.64-1.09l-3.2-3.637c-.32-.364-.959-.364-1.279 0"></svg:path>`,
})
export class StashCaretUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartPieIcon],svg[stash-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.065 3.761a.75.75 0 0 1 .53-.22a7.01 7.01 0 0 1 7.01 7.01a.75.75 0 0 1-.75.75h-6.26a.75.75 0 0 1-.75-.75v-6.26a.75.75 0 0 1 .22-.53m1.28 6.04h4.71a5.51 5.51 0 0 0-4.71-4.708z"></svg:path><svg:path fill="currentColor" d="M3.84 15.966A7.75 7.75 0 0 1 11 5.25a.75.75 0 0 1 .75.75v6.69l4.73 4.73a.75.75 0 0 1 0 1.06a7.75 7.75 0 0 1-12.64-2.514m.94-3.579a6.25 6.25 0 0 0 10.077 5.53L10.47 13.53a.75.75 0 0 1-.22-.53V6.795a6.25 6.25 0 0 0-5.47 5.592m15.553 2.91a5.7 5.7 0 0 1-1.227 1.836l-4.002-4.002h5.66a5.7 5.7 0 0 1-.431 2.166"></svg:path>`,
})
export class StashChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartPieDuotoneIcon],svg[stash-chart-pie-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.84 15.966A7.75 7.75 0 0 1 11 5.25a.75.75 0 0 1 .75.75v6.69l4.73 4.73a.75.75 0 0 1 0 1.06a7.75 7.75 0 0 1-12.64-2.514m.94-3.579a6.25 6.25 0 0 0 10.077 5.53L10.47 13.53a.75.75 0 0 1-.22-.53V6.795a6.25 6.25 0 0 0-5.47 5.592"></svg:path><svg:path fill="currentColor" d="M13.595 3.541a.75.75 0 0 0-.75.75v6.26c0 .415.336.75.75.75h6.26a.75.75 0 0 0 .75-.75a7.01 7.01 0 0 0-7.01-7.01m5.46 6.26h-4.71V5.094a5.51 5.51 0 0 1 4.71 4.709m1.278 5.494a5.7 5.7 0 0 1-1.227 1.836l-4.002-4.002h5.66a5.7 5.7 0 0 1-.431 2.166" opacity=".5"></svg:path>`,
})
export class StashChartPieDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartPieLightIcon],svg[stash-chart-pie-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.07 15.87A7.5 7.5 0 0 1 11 5.5a.5.5 0 0 1 .5.5v6.793l4.803 4.803a.5.5 0 0 1 0 .707A7.5 7.5 0 0 1 4.071 15.87m.461-3.507a6.5 6.5 0 0 0 10.698 5.573l-4.583-4.582A.5.5 0 0 1 10.5 13V6.52a6.5 6.5 0 0 0-5.969 5.843"></svg:path><svg:path fill="currentColor" d="M13.241 3.938a.5.5 0 0 1 .354-.147a6.76 6.76 0 0 1 6.76 6.76a.5.5 0 0 1-.5.5h-6.26a.5.5 0 0 1-.5-.5v-6.26a.5.5 0 0 1 .146-.353m.854 6.114h5.239a5.76 5.76 0 0 0-5.239-5.239zm5.011 7.081a5.66 5.66 0 0 0 1.658-4.002h-5.66z"></svg:path>`,
})
export class StashChartPieLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendDownIcon],svg[stash-chart-trend-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.47 8.47a.75.75 0 0 1 1.06 0L15 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0L12 10.06l-4.19 4.19H9.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v1.69z"></svg:path>`,
})
export class StashChartTrendDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendDownDuotoneIcon],svg[stash-chart-trend-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.293 8.293a1 1 0 0 1 1.414 0L15 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0L12 10.414L8.414 14H9.5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-3.5a1 1 0 1 1 2 0v1.086z"></svg:path>`,
})
export class StashChartTrendDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendDownLightIcon],svg[stash-chart-trend-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.646 8.646a.5.5 0 0 1 .708 0L15 11.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0L12 9.707L7.207 14.5H9.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0v2.293z"></svg:path>`,
})
export class StashChartTrendDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendDownSolidIcon],svg[stash-chart-trend-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.116 8.116a1.25 1.25 0 0 1 1.768 0L15 10.232l2.116-2.116a1.25 1.25 0 0 1 1.768 1.768l-3 3a1.25 1.25 0 0 1-1.768 0L12 10.768L9.018 13.75H9.5a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25v-3.5a1.25 1.25 0 1 1 2.5 0v.482z"></svg:path>`,
})
export class StashChartTrendDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendUpIcon],svg[stash-chart-trend-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class StashChartTrendUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendUpDuotoneIcon],svg[stash-chart-trend-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 9a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-1.086l-4.293 4.293a1 1 0 0 1-1.414 0L9 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0L12 13.586L15.586 10H14.5a1 1 0 0 1-1-1"></svg:path>`,
})
export class StashChartTrendUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendUpLightIcon],svg[stash-chart-trend-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0v-2.293l-5.146 5.147a.5.5 0 0 1-.708 0L9 12.707l-2.646 2.647a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0L12 14.293L16.793 9.5H14.5A.5.5 0 0 1 14 9"></svg:path>`,
})
export class StashChartTrendUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendUpSolidIcon],svg[stash-chart-trend-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 9c0-.69.56-1.25 1.25-1.25H18c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 1 1-2.5 0v-.482l-3.866 3.866a1.25 1.25 0 0 1-1.768 0L9 13.768l-2.116 2.116a1.25 1.25 0 0 1-1.768-1.768l3-3a1.25 1.25 0 0 1 1.768 0L12 13.232l2.982-2.982H14.5c-.69 0-1.25-.56-1.25-1.25"></svg:path>`,
})
export class StashChartTrendUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCheckIcon],svg[stash-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.517 7.957c.3.286.312.76.026 1.06l-6.667 7a.75.75 0 0 1-1.086 0l-3.333-3.5a.75.75 0 1 1 1.086-1.034l2.79 2.93l6.124-6.43a.75.75 0 0 1 1.06-.026"></svg:path>`,
})
export class StashCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCheckCircleIcon],svg[stash-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.53 10.53a.75.75 0 1 0-1.06-1.06L11 12.94l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"></svg:path><svg:path fill="currentColor" d="M12 20.75a8.75 8.75 0 1 1 0-17.5a8.75 8.75 0 0 1 0 17.5M4.75 12a7.25 7.25 0 1 0 14.5 0a7.25 7.25 0 0 0-14.5 0"></svg:path>`,
})
export class StashCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCheckCircleDuotoneIcon],svg[stash-check-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.53 9.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06L11 12.94l3.47-3.47a.75.75 0 0 1 1.06 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 19.25a7.25 7.25 0 1 1 0-14.5a7.25 7.25 0 0 1 0 14.5M3.25 12a8.75 8.75 0 1 0 17.5 0a8.75 8.75 0 0 0-17.5 0"></svg:path>`,
})
export class StashCheckCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCheckCircleLightIcon],svg[stash-check-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.354 10.354a.5.5 0 0 0-.708-.708L11 13.293l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"></svg:path><svg:path fill="currentColor" d="M12 20.5a8.5 8.5 0 1 1 0-17a8.5 8.5 0 0 1 0 17M4.5 12a7.5 7.5 0 1 0 15 0a7.5 7.5 0 0 0-15 0"></svg:path>`,
})
export class StashCheckCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCheckCircleSolidIcon],svg[stash-check-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a8 8 0 1 1 0 16a8 8 0 0 1 0-16m3.707 6.707a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"></svg:path>`,
})
export class StashCheckCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCheckDuotoneIcon],svg[stash-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.517 7.957c.3.286.312.76.026 1.06l-6.667 7a.75.75 0 0 1-1.086 0l-3.333-3.5a.75.75 0 1 1 1.086-1.034l2.79 2.93l6.124-6.43a.75.75 0 0 1 1.06-.026"></svg:path>`,
})
export class StashCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCheckLightIcon],svg[stash-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.345 8.138a.5.5 0 0 1 .017.707l-6.667 7a.5.5 0 0 1-.724 0l-3.333-3.5a.5.5 0 1 1 .724-.69l2.971 3.12l6.305-6.62a.5.5 0 0 1 .707-.017"></svg:path>`,
})
export class StashCheckLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCheckSolidIcon],svg[stash-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.69 7.776a1 1 0 0 1 .034 1.414l-7.39 7.76l-4.058-4.26a1 1 0 0 1 1.448-1.38l2.61 2.74l5.942-6.24a1 1 0 0 1 1.414-.034"></svg:path>`,
})
export class StashCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleDownIcon],svg[stash-chevron-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.53 6.409a.75.75 0 0 1 0 1.06L12 12L7.47 7.47a.75.75 0 0 1 1.06-1.061L12 9.879l3.47-3.47a.75.75 0 0 1 1.06 0"></svg:path><svg:path d="M16.53 12.22a.75.75 0 0 1 0 1.06L12 17.81l-4.53-4.53a.75.75 0 1 1 1.06-1.06L12 15.69l3.47-3.47a.75.75 0 0 1 1.06 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleDownDuotoneIcon],svg[stash-chevron-double-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.707 5.879a1 1 0 0 1 0 1.414L12 12L7.293 7.293a1 1 0 1 1 1.414-1.414L12 9.172l3.293-3.293a1 1 0 0 1 1.414 0"></svg:path><svg:path d="M16.707 12.293a1 1 0 0 1 0 1.414L12 18.414l-4.707-4.707a1 1 0 1 1 1.414-1.414L12 15.586l3.293-3.293a1 1 0 0 1 1.414 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleDownLightIcon],svg[stash-chevron-double-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.354 6.94a.5.5 0 0 1 0 .706L12 12L7.646 7.646a.5.5 0 1 1 .708-.707L12 10.586l3.646-3.647a.5.5 0 0 1 .708 0"></svg:path><svg:path d="M16.354 12.146a.5.5 0 0 1 0 .708L12 17.207l-4.354-4.353a.5.5 0 0 1 .708-.708L12 15.793l3.646-3.647a.5.5 0 0 1 .708 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleDownSolidIcon],svg[stash-chevron-double-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.884 5.348a1.25 1.25 0 0 1 0 1.768L12 12L7.116 7.116a1.25 1.25 0 0 1 1.768-1.768L12 8.464l3.116-3.116a1.25 1.25 0 0 1 1.768 0"></svg:path><svg:path d="M16.884 12.366a1.25 1.25 0 0 1 0 1.768L12 19.018l-4.884-4.884a1.25 1.25 0 0 1 1.768-1.768L12 15.482l3.116-3.116a1.25 1.25 0 0 1 1.768 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleLeftIcon],svg[stash-chevron-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.591 16.53a.75.75 0 0 1-1.06 0L12 12l4.53-4.53a.75.75 0 0 1 1.06 1.06L14.121 12l3.47 3.47a.75.75 0 0 1 0 1.06"></svg:path><svg:path d="M11.78 16.53a.75.75 0 0 1-1.06 0L6.19 12l4.53-4.53a.75.75 0 1 1 1.06 1.06L8.31 12l3.47 3.47a.75.75 0 0 1 0 1.06"></svg:path></svg:g>`,
})
export class StashChevronDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleLeftDuotoneIcon],svg[stash-chevron-double-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.122 16.707a1 1 0 0 1-1.415 0L12 12l4.707-4.707a1 1 0 1 1 1.415 1.414L14.829 12l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path><svg:path d="M11.707 16.707a1 1 0 0 1-1.414 0L5.586 12l4.707-4.707a1 1 0 0 1 1.414 1.414L8.414 12l3.293 3.293a1 1 0 0 1 0 1.414"></svg:path></svg:g>`,
})
export class StashChevronDoubleLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleLeftLightIcon],svg[stash-chevron-double-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.06 16.354a.5.5 0 0 1-.706 0L12 12l4.354-4.354a.5.5 0 1 1 .707.708L13.414 12l3.647 3.646a.5.5 0 0 1 0 .708"></svg:path><svg:path d="M11.854 16.354a.5.5 0 0 1-.707 0L6.792 12l4.353-4.354a.5.5 0 1 1 .708.708L8.207 12l3.647 3.646a.5.5 0 0 1 0 .708"></svg:path></svg:g>`,
})
export class StashChevronDoubleLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleLeftSolidIcon],svg[stash-chevron-double-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.652 16.884a1.25 1.25 0 0 1-1.768 0L12 12l4.884-4.884a1.25 1.25 0 1 1 1.768 1.768L15.536 12l3.116 3.116a1.25 1.25 0 0 1 0 1.768"></svg:path><svg:path d="M11.634 16.884a1.25 1.25 0 0 1-1.768 0L4.982 12l4.884-4.884a1.25 1.25 0 0 1 1.768 1.768L8.518 12l3.116 3.116a1.25 1.25 0 0 1 0 1.768"></svg:path></svg:g>`,
})
export class StashChevronDoubleLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleRightIcon],svg[stash-chevron-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.41 7.47a.75.75 0 0 1 1.06 0L12 12l-4.53 4.53a.75.75 0 0 1-1.06-1.06L9.878 12l-3.47-3.47a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="M12.22 7.47a.75.75 0 0 1 1.06 0L17.81 12l-4.53 4.53a.75.75 0 1 1-1.06-1.06L15.69 12l-3.47-3.47a.75.75 0 0 1 0-1.06"></svg:path></svg:g>`,
})
export class StashChevronDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleRightDuotoneIcon],svg[stash-chevron-double-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.879 7.293a1 1 0 0 1 1.414 0L12 12l-4.707 4.707a1 1 0 0 1-1.414-1.414L9.17 12L5.88 8.707a1 1 0 0 1 0-1.414"></svg:path><svg:path d="M12.293 7.293a1 1 0 0 1 1.414 0L18.414 12l-4.707 4.707a1 1 0 0 1-1.414-1.414L15.586 12l-3.293-3.293a1 1 0 0 1 0-1.414"></svg:path></svg:g>`,
})
export class StashChevronDoubleRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleRightLightIcon],svg[stash-chevron-double-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M6.94 7.646a.5.5 0 0 1 .707 0L12 12l-4.353 4.354a.5.5 0 0 1-.708-.708L10.586 12L6.939 8.354a.5.5 0 0 1 0-.708"></svg:path><svg:path d="M12.147 7.646a.5.5 0 0 1 .707 0L17.207 12l-4.353 4.354a.5.5 0 0 1-.707-.708L15.793 12l-3.646-3.646a.5.5 0 0 1 0-.708"></svg:path></svg:g>`,
})
export class StashChevronDoubleRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleRightSolidIcon],svg[stash-chevron-double-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M5.348 7.116a1.25 1.25 0 0 1 1.768 0L12 12l-4.884 4.884a1.25 1.25 0 0 1-1.768-1.768L8.464 12L5.348 8.884a1.25 1.25 0 0 1 0-1.768"></svg:path><svg:path d="M12.366 7.116a1.25 1.25 0 0 1 1.768 0L19.018 12l-4.884 4.884a1.25 1.25 0 0 1-1.768-1.768L15.482 12l-3.116-3.116a1.25 1.25 0 0 1 0-1.768"></svg:path></svg:g>`,
})
export class StashChevronDoubleRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleUpIcon],svg[stash-chevron-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.47 17.591a.75.75 0 0 1 0-1.06L12 12l4.53 4.53a.75.75 0 0 1-1.06 1.061L12 14.121l-3.47 3.47a.75.75 0 0 1-1.06 0"></svg:path><svg:path d="M7.47 11.78a.75.75 0 0 1 0-1.06L12 6.19l4.53 4.53a.75.75 0 1 1-1.06 1.06L12 8.31l-3.47 3.47a.75.75 0 0 1-1.06 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleUpDuotoneIcon],svg[stash-chevron-double-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.293 18.121a1 1 0 0 1 0-1.414L12 12l4.707 4.707a1 1 0 0 1-1.414 1.414L12 14.828l-3.293 3.293a1 1 0 0 1-1.414 0"></svg:path><svg:path d="M7.293 11.707a1 1 0 0 1 0-1.414L12 5.586l4.707 4.707a1 1 0 0 1-1.414 1.414L12 8.414l-3.293 3.293a1 1 0 0 1-1.414 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleUpLightIcon],svg[stash-chevron-double-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.646 17.06a.5.5 0 0 1 0-.706L12 12l4.354 4.354a.5.5 0 0 1-.708.707L12 13.414l-3.646 3.647a.5.5 0 0 1-.708 0"></svg:path><svg:path d="M7.646 11.854a.5.5 0 0 1 0-.708L12 6.793l4.354 4.353a.5.5 0 0 1-.708.708L12 8.207l-3.646 3.647a.5.5 0 0 1-.708 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDoubleUpSolidIcon],svg[stash-chevron-double-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.116 18.652a1.25 1.25 0 0 1 0-1.768L12 12l4.884 4.884a1.25 1.25 0 1 1-1.768 1.768L12 15.535l-3.116 3.117a1.25 1.25 0 0 1-1.768 0"></svg:path><svg:path d="M7.116 11.634a1.25 1.25 0 0 1 0-1.768L12 4.982l4.884 4.884a1.25 1.25 0 1 1-1.768 1.768L12 8.518l-3.116 3.116a1.25 1.25 0 0 1-1.768 0"></svg:path></svg:g>`,
})
export class StashChevronDoubleUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDownIcon],svg[stash-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.53 9.47a.75.75 0 0 1 0 1.06L12 15.06l-4.53-4.53a.75.75 0 1 1 1.06-1.06L12 12.94l3.47-3.47a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDownDuotoneIcon],svg[stash-chevron-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.707 9.293a1 1 0 0 1 0 1.414L12 15.414l-4.707-4.707a1 1 0 0 1 1.414-1.414L12 12.586l3.293-3.293a1 1 0 0 1 1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDownLightIcon],svg[stash-chevron-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.354 9.646a.5.5 0 0 1 0 .708L12 14.707l-4.354-4.353a.5.5 0 0 1 .708-.708L12 13.293l3.646-3.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronDownSolidIcon],svg[stash-chevron-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.884 9.116a1.25 1.25 0 0 1 0 1.768L12 15.768l-4.884-4.884a1.25 1.25 0 0 1 1.768-1.768L12 12.232l3.116-3.116a1.25 1.25 0 0 1 1.768 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronLeftIcon],svg[stash-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.53 16.53a.75.75 0 0 1-1.06 0L8.94 12l4.53-4.53a.75.75 0 1 1 1.06 1.06L11.06 12l3.47 3.47a.75.75 0 0 1 0 1.06" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronLeftDuotoneIcon],svg[stash-chevron-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.707 16.707a1 1 0 0 1-1.414 0L8.586 12l4.707-4.707a1 1 0 1 1 1.414 1.414L11.414 12l3.293 3.293a1 1 0 0 1 0 1.414" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronLeftLightIcon],svg[stash-chevron-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.354 16.354a.5.5 0 0 1-.708 0L9.293 12l4.353-4.354a.5.5 0 0 1 .708.708L10.707 12l3.647 3.646a.5.5 0 0 1 0 .708" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronLeftSolidIcon],svg[stash-chevron-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.884 16.884a1.25 1.25 0 0 1-1.768 0L8.232 12l4.884-4.884a1.25 1.25 0 0 1 1.768 1.768L11.768 12l3.116 3.116a1.25 1.25 0 0 1 0 1.768" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronRightIcon],svg[stash-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.47 7.47a.75.75 0 0 1 1.06 0L15.06 12l-4.53 4.53a.75.75 0 1 1-1.06-1.06L12.94 12L9.47 8.53a.75.75 0 0 1 0-1.06" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronRightDuotoneIcon],svg[stash-chevron-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.293 7.293a1 1 0 0 1 1.414 0L15.414 12l-4.707 4.707a1 1 0 0 1-1.414-1.414L12.586 12L9.293 8.707a1 1 0 0 1 0-1.414" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronRightLightIcon],svg[stash-chevron-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.646 7.646a.5.5 0 0 1 .708 0L14.707 12l-4.353 4.354a.5.5 0 0 1-.708-.708L13.293 12L9.646 8.354a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronRightSolidIcon],svg[stash-chevron-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.116 7.116a1.25 1.25 0 0 1 1.768 0L15.768 12l-4.884 4.884a1.25 1.25 0 0 1-1.768-1.768L12.232 12L9.116 8.884a1.25 1.25 0 0 1 0-1.768" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronUpIcon],svg[stash-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.47 14.53a.75.75 0 0 1 0-1.06L12 8.94l4.53 4.53a.75.75 0 1 1-1.06 1.06L12 11.06l-3.47 3.47a.75.75 0 0 1-1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronUpDuotoneIcon],svg[stash-chevron-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.293 14.707a1 1 0 0 1 0-1.414L12 8.586l4.707 4.707a1 1 0 0 1-1.414 1.414L12 11.414l-3.293 3.293a1 1 0 0 1-1.414 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronUpLightIcon],svg[stash-chevron-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.646 14.354a.5.5 0 0 1 0-.708L12 9.293l4.354 4.353a.5.5 0 0 1-.708.708L12 10.707l-3.646 3.647a.5.5 0 0 1-.708 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashChevronUpSolidIcon],svg[stash-chevron-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.116 14.884a1.25 1.25 0 0 1 0-1.768L12 8.232l4.884 4.884a1.25 1.25 0 0 1-1.768 1.768L12 11.768l-3.116 3.116a1.25 1.25 0 0 1-1.768 0" clip-rule="evenodd"></svg:path>`,
})
export class StashChevronUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCircleIcon],svg[stash-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 12a7.75 7.75 0 1 1 15.5 0a7.75 7.75 0 0 1-15.5 0M12 5.75a6.25 6.25 0 1 0 0 12.5a6.25 6.25 0 0 0 0-12.5"></svg:path>`,
})
export class StashCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCircleDotIcon],svg[stash-circle-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.75a3.75 3.75 0 1 1 0-7.5a3.75 3.75 0 0 1 0 7.5"></svg:path><svg:path fill="currentColor" d="M12 4.25a7.75 7.75 0 1 0 0 15.5a7.75 7.75 0 0 0 0-15.5M5.75 12a6.25 6.25 0 1 1 12.5 0a6.25 6.25 0 0 1-12.5 0"></svg:path>`,
})
export class StashCircleDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCircleDotDuotoneIcon],svg[stash-circle-dot-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 12a7.75 7.75 0 1 1 15.5 0a7.75 7.75 0 0 1-15.5 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.25 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 0 0-7.5 0"></svg:path>`,
})
export class StashCircleDotDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCircleDotLightIcon],svg[stash-circle-dot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path><svg:path fill="currentColor" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M5.5 12a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"></svg:path>`,
})
export class StashCircleDotLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCircleDotSolidIcon],svg[stash-circle-dot-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 11.75a3.75 3.75 0 1 1 0-7.5a3.75 3.75 0 0 1 0 7.5"></svg:path>`,
})
export class StashCircleDotSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCircleDuotoneIcon],svg[stash-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 12a7.75 7.75 0 1 1 15.5 0a7.75 7.75 0 0 1-15.5 0" opacity=".5"></svg:path>`,
})
export class StashCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCircleLightIcon],svg[stash-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 12a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0M12 5.5a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13"></svg:path>`,
})
export class StashCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCircleSolidIcon],svg[stash-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0"></svg:path>`,
})
export class StashCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashClockIcon],svg[stash-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0M12 7.25a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashClockDuotoneIcon],svg[stash-clock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"></svg:path><svg:path fill="currentColor" d="M12 7.25a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path>`,
})
export class StashClockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashClockLightIcon],svg[stash-clock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0M12 7.5a.5.5 0 0 1 .5.5v3.793l1.854 1.853a.5.5 0 0 1-.708.708l-2-2A.5.5 0 0 1 11.5 12V8a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashClockLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashClockSolidIcon],svg[stash-clock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.25a8.75 8.75 0 1 0 0 17.5a8.75 8.75 0 0 0 0-17.5M11 8a1 1 0 1 1 2 0v3.586l1.707 1.707a1 1 0 0 1-1.414 1.414l-2-2A1 1 0 0 1 11 12z" clip-rule="evenodd"></svg:path>`,
})
export class StashClockSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudIcon],svg[stash-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25h11a3.75 3.75 0 1 0-.482-7.47l-.72.093l-.115-.717A5.25 5.25 0 0 0 11 5.75M4.376 9.698A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5h-11A5.25 5.25 0 0 1 4.376 9.698"></svg:path>`,
})
export class StashCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudArrowDownIcon],svg[stash-cloud-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25a.75.75 0 0 1 0 1.5a5.23 5.23 0 0 1-3.3-1.167a5.25 5.25 0 0 1 1.176-8.885A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5a.75.75 0 0 1 0-1.5c.894 0 1.713-.312 2.357-.833a3.75 3.75 0 0 0-2.839-6.636l-.72.092l-.115-.717A5.25 5.25 0 0 0 11 5.75"></svg:path><svg:path fill="currentColor" d="m12.53 21.53l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V13a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0"></svg:path>`,
})
export class StashCloudArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudArrowDownDuotoneIcon],svg[stash-cloud-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25a.75.75 0 0 1 0 1.5a5.23 5.23 0 0 1-3.3-1.167a5.25 5.25 0 0 1 1.176-8.885A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5a.75.75 0 0 1 0-1.5c.894 0 1.713-.312 2.357-.833a3.75 3.75 0 0 0-2.839-6.636l-.72.092l-.115-.717A5.25 5.25 0 0 0 11 5.75"></svg:path><svg:path fill="currentColor" d="m12.53 21.53l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22V13a.75.75 0 0 0-1.5 0v6.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0" opacity=".5"></svg:path>`,
})
export class StashCloudArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudArrowDownLightIcon],svg[stash-cloud-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.5a5.5 5.5 0 0 0-5.456 4.802l-.04.31l-.295.1A4.002 4.002 0 0 0 6.5 18.5a.5.5 0 0 1 0 1a4.98 4.98 0 0 1-3.143-1.111a5 5 0 0 1 1.24-8.514a6.502 6.502 0 0 1 12.73-.372q.086-.003.173-.003a5 5 0 0 1 0 10a.5.5 0 0 1 0-1c.953 0 1.827-.333 2.514-.889a4 4 0 0 0-3.028-7.079l-.48.062l-.076-.478A5.5 5.5 0 0 0 11 5.5"></svg:path><svg:path fill="currentColor" d="m12.354 21.354l2.5-2.5a.5.5 0 0 0-.708-.708L12.5 19.793V13a.5.5 0 0 0-1 0v6.793l-1.646-1.647a.5.5 0 0 0-.708.708l2.5 2.5a.5.5 0 0 0 .708 0"></svg:path>`,
})
export class StashCloudArrowDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudArrowUpIcon],svg[stash-cloud-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25a.75.75 0 0 1 0 1.5a5.23 5.23 0 0 1-3.3-1.167a5.25 5.25 0 0 1 1.176-8.885A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5a.75.75 0 0 1 0-1.5c.894 0 1.713-.312 2.357-.833a3.75 3.75 0 0 0-2.839-6.636l-.72.092l-.115-.717A5.25 5.25 0 0 0 11 5.75"></svg:path><svg:path fill="currentColor" d="m12.53 12.47l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V21a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class StashCloudArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudArrowUpDuotoneIcon],svg[stash-cloud-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25a.75.75 0 0 1 0 1.5a5.23 5.23 0 0 1-3.3-1.167a5.25 5.25 0 0 1 1.176-8.885A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5a.75.75 0 0 1 0-1.5c.894 0 1.713-.312 2.357-.833a3.75 3.75 0 0 0-2.839-6.636l-.72.092l-.115-.717A5.25 5.25 0 0 0 11 5.75"></svg:path><svg:path fill="currentColor" d="m12.53 12.47l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V21a.75.75 0 0 1-1.5 0v-6.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0" opacity=".5"></svg:path>`,
})
export class StashCloudArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudArrowUpLightIcon],svg[stash-cloud-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.544 10.302a5.501 5.501 0 0 1 10.886-.186l.077.478l.48-.061q.252-.033.513-.033a4 4 0 0 1 0 8a.5.5 0 0 0 0 1c1.19 0 2.285-.416 3.143-1.111a5 5 0 0 0-3.317-8.886a6.502 6.502 0 0 0-12.729.372A5.001 5.001 0 0 0 6.5 19.5a.5.5 0 0 0 0-1a3.98 3.98 0 0 1-2.514-.889a4.002 4.002 0 0 1 1.223-6.898l.296-.101z"></svg:path><svg:path fill="currentColor" d="m14.854 15.146l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708l1.646-1.647V21a.5.5 0 0 0 1 0v-6.793l1.646 1.647a.5.5 0 0 0 .708-.708"></svg:path>`,
})
export class StashCloudArrowUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudCheckIcon],svg[stash-cloud-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25h11a3.75 3.75 0 1 0-.482-7.47l-.72.093l-.115-.717A5.25 5.25 0 0 0 11 5.75M4.376 9.698A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5h-11A5.25 5.25 0 0 1 4.376 9.698"></svg:path><svg:path fill="currentColor" d="M14.53 10.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06L10 13.94l3.47-3.47a.75.75 0 0 1 1.06 0"></svg:path>`,
})
export class StashCloudCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudCheckDuotoneIcon],svg[stash-cloud-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25h11a3.75 3.75 0 1 0-.482-7.47l-.72.093l-.115-.717A5.25 5.25 0 0 0 11 5.75M4.376 9.698A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5h-11A5.25 5.25 0 0 1 4.376 9.698"></svg:path><svg:path fill="currentColor" d="M14.53 10.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06L10 13.94l3.47-3.47a.75.75 0 0 1 1.06 0" opacity=".5"></svg:path>`,
})
export class StashCloudCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudCheckLightIcon],svg[stash-cloud-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.5a5.5 5.5 0 0 0-5.456 4.802l-.04.31l-.295.1A4.002 4.002 0 0 0 6.5 18.5h11a4 4 0 1 0-.514-7.967l-.48.061l-.076-.478A5.5 5.5 0 0 0 11 5.5M4.597 9.875a6.502 6.502 0 0 1 12.73-.372q.086-.003.173-.003a5 5 0 0 1 0 10h-11a5 5 0 0 1-1.903-9.625"></svg:path><svg:path fill="currentColor" d="M14.354 10.646a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L10 14.293l3.646-3.647a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class StashCloudCheckLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudCheckSolidIcon],svg[stash-cloud-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 4.25a6.75 6.75 0 0 0-6.624 5.448A5.25 5.25 0 0 0 6.5 19.75h11a5.25 5.25 0 0 0 .02-10.5a6.75 6.75 0 0 0-6.52-5m3.53 7.28a.75.75 0 1 0-1.06-1.06L10 13.94l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z" clip-rule="evenodd"></svg:path>`,
})
export class StashCloudCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudDuotoneIcon],svg[stash-cloud-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25h11a3.75 3.75 0 1 0-.482-7.47l-.72.093l-.115-.717A5.25 5.25 0 0 0 11 5.75M4.376 9.698A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5h-11A5.25 5.25 0 0 1 4.376 9.698"></svg:path>`,
})
export class StashCloudDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudLightIcon],svg[stash-cloud-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.5a5.5 5.5 0 0 0-5.456 4.802l-.04.31l-.295.1A4.002 4.002 0 0 0 6.5 18.5h11a4 4 0 1 0-.514-7.967l-.48.061l-.076-.478A5.5 5.5 0 0 0 11 5.5M4.597 9.875a6.502 6.502 0 0 1 12.73-.372q.086-.003.173-.003a5 5 0 0 1 0 10h-11a5 5 0 0 1-1.903-9.625"></svg:path>`,
})
export class StashCloudLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudMinusIcon],svg[stash-cloud-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25h11a3.75 3.75 0 1 0-.482-7.47l-.72.093l-.115-.717A5.25 5.25 0 0 0 11 5.75M4.376 9.698A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5h-11A5.25 5.25 0 0 1 4.376 9.698"></svg:path><svg:path fill="currentColor" d="M8.25 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class StashCloudMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudMinusDuotoneIcon],svg[stash-cloud-minus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25h11a3.75 3.75 0 1 0-.482-7.47l-.72.093l-.115-.717A5.25 5.25 0 0 0 11 5.75M4.376 9.698A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5h-11A5.25 5.25 0 0 1 4.376 9.698"></svg:path><svg:path fill="currentColor" d="M8.25 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path>`,
})
export class StashCloudMinusDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudMinusLightIcon],svg[stash-cloud-minus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 5.5a5.5 5.5 0 0 0-5.456 4.802l-.04.31l-.295.1A4.002 4.002 0 0 0 6.5 18.5h11a4 4 0 1 0-.514-7.967l-.48.061l-.076-.478A5.5 5.5 0 0 0 11 5.5M4.597 9.875a6.502 6.502 0 0 1 12.73-.372q.086-.003.173-.003a5 5 0 0 1 0 10h-11a5 5 0 0 1-1.903-9.625"></svg:path><svg:path fill="currentColor" d="M8.5 13a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H9a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashCloudMinusLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudPlusIcon],svg[stash-cloud-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25h11a3.75 3.75 0 1 0-.482-7.47l-.72.093l-.115-.717A5.25 5.25 0 0 0 11 5.75M4.376 9.698A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5h-11A5.25 5.25 0 0 1 4.376 9.698"></svg:path><svg:path d="M11 9.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H8.5a.75.75 0 0 1 0-1.5h1.75V10.5a.75.75 0 0 1 .75-.75"></svg:path></svg:g>`,
})
export class StashCloudPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudPlusDuotoneIcon],svg[stash-cloud-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 5.75c-2.674 0-4.881 2-5.208 4.584l-.059.464l-.443.151A3.752 3.752 0 0 0 6.5 18.25h11a3.75 3.75 0 1 0-.482-7.47l-.72.093l-.115-.717A5.25 5.25 0 0 0 11 5.75M4.376 9.698A6.752 6.752 0 0 1 17.52 9.25a5.25 5.25 0 0 1-.021 10.5h-11A5.25 5.25 0 0 1 4.376 9.698"></svg:path><svg:path d="M11 9.75a.75.75 0 0 1 .75.75v1.75h1.75a.75.75 0 0 1 0 1.5h-1.75v1.75a.75.75 0 0 1-1.5 0v-1.75H8.5a.75.75 0 0 1 0-1.5h1.75V10.5a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path></svg:g>`,
})
export class StashCloudPlusDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudPlusLightIcon],svg[stash-cloud-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 5.5a5.5 5.5 0 0 0-5.456 4.802l-.04.31l-.295.1A4.002 4.002 0 0 0 6.5 18.5h11a4 4 0 1 0-.514-7.967l-.48.061l-.076-.478A5.5 5.5 0 0 0 11 5.5M4.597 9.875a6.502 6.502 0 0 1 12.73-.372q.086-.003.173-.003a5 5 0 0 1 0 10h-11a5 5 0 0 1-1.903-9.625"></svg:path><svg:path d="M11 10a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 .5-.5"></svg:path></svg:g>`,
})
export class StashCloudPlusLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCloudSolidIcon],svg[stash-cloud-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 4.25a6.75 6.75 0 0 0-6.624 5.448A5.25 5.25 0 0 0 6.5 19.75h11a5.25 5.25 0 0 0 .02-10.5a6.75 6.75 0 0 0-6.52-5" clip-rule="evenodd"></svg:path>`,
})
export class StashCloudSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCogIcon],svg[stash-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.414 3.396A1.25 1.25 0 0 1 10.66 2.25h2.68c.65 0 1.192.498 1.246 1.146l.093 1.117c.91.325 1.743.812 2.464 1.424l1.015-.478a1.25 1.25 0 0 1 1.616.506l1.34 2.32a1.25 1.25 0 0 1-.37 1.652l-.921.64a8 8 0 0 1 0 2.846l.921.64a1.25 1.25 0 0 1 .37 1.652l-1.34 2.32a1.25 1.25 0 0 1-1.616.506l-1.015-.478a8 8 0 0 1-2.464 1.424l-.093 1.117a1.25 1.25 0 0 1-1.246 1.146h-2.68a1.25 1.25 0 0 1-1.246-1.146l-.093-1.117a8 8 0 0 1-2.464-1.424l-1.015.478a1.25 1.25 0 0 1-1.616-.506l-1.34-2.32a1.25 1.25 0 0 1 .37-1.652l.921-.64a8 8 0 0 1 0-2.846l-.92-.64a1.25 1.25 0 0 1-.37-1.652l1.34-2.32a1.25 1.25 0 0 1 1.615-.506l1.015.478a8 8 0 0 1 2.464-1.424zm1.476.354l-.158 1.903l-.5.142a6.44 6.44 0 0 0-2.72 1.573l-.373.36l-1.729-.814L4.3 8.836l1.57 1.089l-.126.503a6.5 6.5 0 0 0 0 3.144l.126.503l-1.57 1.089l1.11 1.922l1.73-.815l.372.361a6.44 6.44 0 0 0 2.72 1.573l.5.142l.158 1.903h2.22l.159-1.903l.499-.142a6.44 6.44 0 0 0 2.72-1.573l.373-.36l1.729.814l1.11-1.922l-1.569-1.089l.126-.503a6.46 6.46 0 0 0 0-3.145l-.126-.502L19.7 8.836l-1.11-1.922l-1.73.815l-.372-.361a6.44 6.44 0 0 0-2.72-1.573l-.5-.142l-.158-1.903zm3.059 7.125a2.25 2.25 0 1 0-3.898 2.25a2.25 2.25 0 0 0 3.898-2.25m-3.824-2.123a3.75 3.75 0 1 1 3.75 6.496a3.75 3.75 0 0 1-3.75-6.496"></svg:path>`,
})
export class StashCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCogDuotoneIcon],svg[stash-cog-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.414 3.396A1.25 1.25 0 0 1 10.66 2.25h2.68c.65 0 1.192.498 1.246 1.146l.093 1.117c.91.325 1.743.812 2.464 1.424l1.015-.478a1.25 1.25 0 0 1 1.616.506l1.34 2.32a1.25 1.25 0 0 1-.37 1.652l-.921.64a8 8 0 0 1 0 2.846l.921.64a1.25 1.25 0 0 1 .37 1.652l-1.34 2.32a1.25 1.25 0 0 1-1.616.506l-1.015-.478a8 8 0 0 1-2.464 1.424l-.093 1.117a1.25 1.25 0 0 1-1.246 1.146h-2.68a1.25 1.25 0 0 1-1.246-1.146l-.093-1.117a8 8 0 0 1-2.464-1.424l-1.015.478a1.25 1.25 0 0 1-1.616-.506l-1.34-2.32a1.25 1.25 0 0 1 .37-1.652l.921-.64a8 8 0 0 1 0-2.846l-.92-.64a1.25 1.25 0 0 1-.37-1.652l1.34-2.32a1.25 1.25 0 0 1 1.615-.506l1.015.478a8 8 0 0 1 2.464-1.424zm1.476.354l-.158 1.903l-.5.142a6.44 6.44 0 0 0-2.72 1.573l-.373.36l-1.729-.814L4.3 8.836l1.57 1.089l-.126.503a6.5 6.5 0 0 0 0 3.144l.126.503l-1.57 1.089l1.11 1.922l1.73-.815l.372.361a6.44 6.44 0 0 0 2.72 1.573l.5.142l.158 1.903h2.22l.159-1.903l.499-.142a6.44 6.44 0 0 0 2.72-1.573l.373-.36l1.729.814l1.11-1.922l-1.569-1.089l.126-.503a6.46 6.46 0 0 0 0-3.145l-.126-.502L19.7 8.836l-1.11-1.922l-1.73.815l-.372-.361a6.44 6.44 0 0 0-2.72-1.573l-.5-.142l-.158-1.903z"></svg:path><svg:path fill="currentColor" d="M10.875 10.051a2.25 2.25 0 1 0 2.25 3.898a2.25 2.25 0 0 0-2.25-3.898m-2.122 3.824a3.75 3.75 0 1 1 6.495-3.75a3.75 3.75 0 0 1-6.495 3.75" opacity=".5"></svg:path>`,
})
export class StashCogDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCogLightIcon],svg[stash-cog-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 8.969a3.5 3.5 0 1 0 3.5 6.062a3.5 3.5 0 0 0-3.5-6.062m-.415 4.281a2.5 2.5 0 1 1 4.33-2.5a2.5 2.5 0 0 1-4.33 2.5"></svg:path><svg:path fill="currentColor" d="M10.66 2.5a1 1 0 0 0-.996.917l-.107 1.279a7.7 7.7 0 0 0-2.66 1.537l-1.162-.548a1 1 0 0 0-1.292.405l-1.34 2.32a1 1 0 0 0 .296 1.322l1.054.732a7.7 7.7 0 0 0 0 3.072l-1.054.732a1 1 0 0 0-.296 1.322l1.34 2.32a1 1 0 0 0 1.292.405l1.163-.548a7.7 7.7 0 0 0 2.659 1.537l.107 1.279a1 1 0 0 0 .996.917h2.68a1 1 0 0 0 .996-.917l.107-1.279a7.7 7.7 0 0 0 2.66-1.537l1.162.548a1 1 0 0 0 1.292-.405l1.34-2.32a1 1 0 0 0-.296-1.322l-1.054-.732a7.7 7.7 0 0 0 0-3.072l1.054-.732a1 1 0 0 0 .296-1.322l-1.34-2.32a1 1 0 0 0-1.292-.405l-1.163.548a7.7 7.7 0 0 0-2.659-1.537l-.107-1.279a1 1 0 0 0-.996-.917zm0 1h2.68l.163 1.96l.333.095a6.7 6.7 0 0 1 2.826 1.633l.249.24l1.78-.838l1.34 2.32l-1.615 1.122l.084.335a6.76 6.76 0 0 1 0 3.266l-.084.335l1.615 1.122l-1.34 2.32l-1.78-.839l-.249.24a6.7 6.7 0 0 1-2.826 1.634l-.333.095l-.163 1.96h-2.68l-.163-1.96l-.333-.095a6.7 6.7 0 0 1-2.826-1.633l-.249-.24l-1.78.838l-1.34-2.32l1.615-1.122l-.084-.335a6.7 6.7 0 0 1 0-3.266l.084-.335L3.97 8.91l1.34-2.32l1.78.839l.249-.24a6.7 6.7 0 0 1 2.826-1.634l.333-.095z"></svg:path>`,
})
export class StashCogLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCommentsIcon],svg[stash-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 3.75c-3.383 0-6.25 2.509-6.25 5.75a5.42 5.42 0 0 0 1.138 3.31l-.612 2.243c-.16.59.448 1.125 1.012.89l2.8-1.167a.75.75 0 0 0-.577-1.385l-1.384.577l.31-1.137a.75.75 0 0 0-.162-.695C5.127 11.405 4.75 10.49 4.75 9.5c0-2.282 2.058-4.25 4.75-4.25c2.08 0 3.791 1.183 4.454 2.772c-3.14.253-5.704 2.663-5.704 5.728c0 3.241 2.867 5.75 6.25 5.75c.766 0 1.503-.127 2.184-.36l2.528 1.052c.564.236 1.172-.3 1.012-.89l-.612-2.242a5.42 5.42 0 0 0 1.138-3.31c0-2.897-2.29-5.208-5.191-5.667c-.694-2.53-3.184-4.333-6.059-4.333m.25 10c0-2.281 2.058-4.25 4.75-4.25s4.75 1.969 4.75 4.25c0 .989-.377 1.905-1.025 2.636a.75.75 0 0 0-.162.695l.31 1.137l-1.384-.577a.75.75 0 0 0-.565-.004A5.2 5.2 0 0 1 14.5 18c-2.692 0-4.75-1.968-4.75-4.25" clip-rule="evenodd"></svg:path>`,
})
export class StashCommentsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCommentsDuotoneIcon],svg[stash-comments-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.786 16.883c.76-.857 1.214-1.947 1.214-3.133c0-2.761-2.462-5-5.5-5s-5.5 2.239-5.5 5s2.462 5 5.5 5a6 6 0 0 0 2.2-.416l2.8 1.166z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 3.75c-3.383 0-6.25 2.509-6.25 5.75a5.42 5.42 0 0 0 1.138 3.31l-.612 2.243c-.16.59.448 1.125 1.012.89l2.8-1.167a.75.75 0 0 0-.577-1.385l-1.384.577l.31-1.137a.75.75 0 0 0-.162-.695C5.127 11.405 4.75 10.49 4.75 9.5c0-2.282 2.058-4.25 4.75-4.25c2.08 0 3.791 1.183 4.454 2.772c-3.14.253-5.704 2.663-5.704 5.728c0 3.241 2.867 5.75 6.25 5.75c.766 0 1.503-.127 2.184-.36l2.528 1.052c.564.236 1.172-.3 1.012-.89l-.612-2.242a5.42 5.42 0 0 0 1.138-3.31c0-2.897-2.29-5.208-5.191-5.667c-.694-2.53-3.184-4.333-6.059-4.333m.25 10c0-2.281 2.058-4.25 4.75-4.25s4.75 1.969 4.75 4.25c0 .989-.377 1.905-1.025 2.636a.75.75 0 0 0-.162.695l.31 1.137l-1.384-.577a.75.75 0 0 0-.565-.004A5.2 5.2 0 0 1 14.5 18c-2.692 0-4.75-1.968-4.75-4.25" clip-rule="evenodd"></svg:path>`,
})
export class StashCommentsDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCommentsLightIcon],svg[stash-comments-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 4c-3.268 0-6 2.419-6 5.5c0 1.222.435 2.347 1.162 3.255l-.644 2.363a.504.504 0 0 0 .674.593l2.8-1.166a.5.5 0 0 0-.385-.923l-1.856.773l.445-1.63a.5.5 0 0 0-.108-.463C4.903 11.528 4.5 10.555 4.5 9.5c0-2.441 2.193-4.5 5-4.5c2.31 0 4.21 1.398 4.805 3.253c-3.18.094-5.805 2.477-5.805 5.497c0 3.081 2.732 5.5 6 5.5a6.5 6.5 0 0 0 2.192-.378l2.616 1.09c.376.156.782-.2.674-.594l-.644-2.363A5.18 5.18 0 0 0 20.5 13.75c0-2.807-2.267-5.064-5.142-5.444C14.758 5.814 12.335 4 9.5 4m0 9.75c0-2.441 2.193-4.5 5-4.5s5 2.059 5 4.5c0 1.055-.403 2.028-1.088 2.802a.5.5 0 0 0-.108.463l.445 1.63l-1.856-.773a.5.5 0 0 0-.377-.003a5.5 5.5 0 0 1-2.016.381c-2.807 0-5-2.058-5-4.5" clip-rule="evenodd"></svg:path>`,
})
export class StashCommentsLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCommentsSolidIcon],svg[stash-comments-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 8.25c-3.268 0-6 2.419-6 5.5s2.732 5.5 6 5.5a6.5 6.5 0 0 0 2.192-.378l2.616 1.09a.5.5 0 0 0 .674-.594l-.644-2.363A5.18 5.18 0 0 0 20.5 13.75c0-3.081-2.732-5.5-6-5.5"></svg:path><svg:path fill="currentColor" d="M4 9.5c0 1.186.454 2.276 1.214 3.133l-.499 1.828c-.069.253-.103.38-.07.46c.03.07.09.122.163.142c.084.024.205-.027.447-.128l2.044-.851q.105.042.215.08a6 6 0 0 1-.014-.414c0-3.692 3.221-6.457 6.913-6.5C13.508 5.62 11.648 4.5 9.5 4.5C6.462 4.5 4 6.739 4 9.5"></svg:path>`,
})
export class StashCommentsSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCompassIcon],svg[stash-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.95 6.011A9.25 9.25 0 0 0 12 21.25a9.2 9.2 0 0 0 5.989-2.2l-.52-.52a.75.75 0 0 1 0-1.06l2.132 2.131l-.001.002A10.72 10.72 0 0 1 12 22.75C6.063 22.75 1.25 17.937 1.25 12c0-2.969 1.203-5.656 3.149-7.601L6.53 6.53a.75.75 0 0 1-1.06 0zM12 3.75a.75.75 0 0 1 .75.75V6a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75M17.25 12a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="m6.53 6.53l2.882 2.882q-.241.241-.446.515c-.308.412-.523.886-.857 1.62l-1.922 4.23c-.125.275-.24.525-.312.73c-.063.179-.17.51-.062.856c.122.394.43.702.824.824c.346.107.677.001.857-.062c.204-.073.454-.187.73-.312l4.116-1.87l.007-.003l.036-.017l.07-.032c.734-.334 1.208-.55 1.62-.857q.273-.205.515-.446l2.882 2.882l2.132 2.13A10.72 10.72 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75a10.72 10.72 0 0 0-7.601 3.149zm2.882 2.882L6.53 6.53a.75.75 0 0 0 0-1.06l-.519-.52A9.25 9.25 0 0 1 21.25 12a9.2 9.2 0 0 1-2.2 5.989l-.52-.52a.75.75 0 0 0-1.06 0l-2.882-2.881q.241-.241.446-.515c.308-.412.523-.886.857-1.62l.032-.07l.017-.036l.002-.007l1.87-4.116c.126-.276.24-.526.313-.73c.063-.18.17-.51.062-.857a1.25 1.25 0 0 0-.824-.824c-.346-.107-.677-.001-.857.063c-.204.072-.454.186-.73.311L11.548 8.11c-.735.334-1.21.55-1.621.857a5 5 0 0 0-.515.446m1.06 1.06l.29.29a1.75 1.75 0 1 0 2.475 2.475l.29.29a3 3 0 0 1-.352.305c-.266.2-.582.347-1.417.727L7.51 16.49l1.93-4.244c.38-.838.529-1.154.728-1.42a3 3 0 0 1 .305-.352m.29.29l-.29-.29q.165-.164.353-.304c.266-.2.582-.347 1.42-.728l4.245-1.93l-.056.122v.003l-1.874 4.12c-.38.838-.529 1.154-.728 1.42a3 3 0 0 1-.305.352l-.29-.29a1.75 1.75 0 1 0-2.475-2.475m1.061 1.061a.25.25 0 1 0 .354.354zm.354.354a.25.25 0 0 0-.354-.354z"></svg:path><svg:path fill="currentColor" d="M3.75 12a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75M12 17.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCompassDuotoneIcon],svg[stash-compass-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.75a.75.75 0 0 0-.75.75V6a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 0-.75-.75M3.75 12a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m13.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75M12 17.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75" opacity=".5"></svg:path><svg:path fill="currentColor" d="m4.95 6.011l.52.52A.75.75 0 0 0 6.53 5.47l-.519-.52A9.25 9.25 0 0 1 21.25 12a9.2 9.2 0 0 1-2.2 5.989l-.52-.52a.75.75 0 1 0-1.06 1.061l.519.52A9.2 9.2 0 0 1 12 21.25A9.25 9.25 0 0 1 4.95 6.011M4.4 4.399A10.72 10.72 0 0 0 1.25 12c0 5.937 4.813 10.75 10.75 10.75a10.72 10.72 0 0 0 7.6-3.147l.001-.002m.001 0A10.72 10.72 0 0 0 22.75 12c0-5.937-4.813-10.75-10.75-10.75a10.72 10.72 0 0 0-7.601 3.149"></svg:path><svg:path fill="currentColor" d="m7.942 17.117l4.123-1.874c.809-.367 1.213-.551 1.56-.81c.306-.23.579-.502.808-.809c.259-.346.443-.75.81-1.559l1.874-4.123c.273-.6.41-.901.354-1.083a.5.5 0 0 0-.33-.33c-.182-.056-.482.08-1.083.354l-4.123 1.874c-.809.367-1.213.551-1.56.81c-.306.23-.579.502-.808.809c-.259.346-.443.75-.81 1.559l-1.874 4.123c-.273.6-.41.901-.354 1.083a.5.5 0 0 0 .33.33c.182.056.482-.08 1.083-.354M12 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class StashCompassDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCompassLightIcon],svg[stash-compass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.938 5.645l.708.709a.5.5 0 0 0 .708-.708l-.709-.708A9.47 9.47 0 0 1 12 2.5a9.5 9.5 0 0 1 9.5 9.5a9.47 9.47 0 0 1-2.438 6.355l-.709-.709a.5.5 0 0 0-.707.707l.709.709A9.47 9.47 0 0 1 12 21.5A9.5 9.5 0 0 1 2.5 12c0-2.443.922-4.671 2.438-6.355m14.487 13.78c1.9-1.9 3.075-4.526 3.075-7.425c0-5.799-4.701-10.5-10.5-10.5S1.5 6.201 1.5 12S6.201 22.5 12 22.5a10.47 10.47 0 0 0 7.425-3.076"></svg:path><svg:path fill="currentColor" d="M12 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 12 4m-8 8a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H4.5A.5.5 0 0 1 4 12m13.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H18a.5.5 0 0 1-.5-.5M12 17.5a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V18a.5.5 0 0 1 .5-.5m4.924-10.446c-.148.052-.35.143-.66.284l-4.122 1.874c-.828.376-1.174.536-1.467.755c-.268.201-.507.44-.708.708c-.219.293-.379.639-.755 1.467l-1.874 4.123a10 10 0 0 0-.296.693l.034-.012c.148-.052.35-.143.66-.284l4.118-1.872l.004-.002c.828-.377 1.174-.536 1.467-.755c.268-.201.507-.44.708-.708c.219-.293.379-.639.755-1.467l1.873-4.12l.001-.003a10 10 0 0 0 .296-.693zm-1.215 5.194l-.002.005l-.01.024l-.024.052c-.343.754-.548 1.205-.84 1.595a4.5 4.5 0 0 1-.91.91c-.39.291-.84.496-1.594.839l-.052.023l-.024.011l-.005.002l-4.12 1.873c-.283.128-.524.238-.718.307c-.177.063-.438.14-.7.06a1 1 0 0 1-.658-.66c-.081-.261-.004-.522.06-.7c.068-.193.178-.434.306-.717l1.884-4.144l.025-.056c.343-.755.548-1.206.84-1.595q.389-.521.91-.91c.39-.292.84-.497 1.594-.84l.057-.025l4.144-1.884c.282-.128.524-.238.718-.307c.177-.063.438-.14.7-.06a1 1 0 0 1 .658.66c.081.261.004.522-.06.7a10 10 0 0 1-.306.717zM12 11.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-1.5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></svg:path>`,
})
export class StashCompassLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashContentShareIcon],svg[stash-content-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.165 7.505c-.206-1.132 1.098-1.917 2.002-1.206l5.463 4.292a1.25 1.25 0 0 1 0 1.966l-5.463 4.292c-.905.711-2.208-.074-2.002-1.206l.225-1.235c-1.971-.343-3.336.01-4.285.573c-1.076.638-1.715 1.603-2.08 2.392l-.669-.31l.668.31c-.249.537-.807.626-1.115.593c-.301-.033-.892-.255-.951-.915c-.338-3.77.724-6.156 2.699-7.434c1.616-1.047 3.696-1.245 5.698-1.066zm1.594.38l.254 1.398a.75.75 0 0 1-.85.876c-2.189-.33-4.263-.208-5.691.717c-1.147.743-2.026 2.108-2.075 4.608A6.5 6.5 0 0 1 7.34 13.69c1.444-.856 3.427-1.237 6.093-.597a.75.75 0 0 1 .563.864l-.237 1.305l4.694-3.688z" clip-rule="evenodd"></svg:path>`,
})
export class StashContentShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashContentShareDuotoneIcon],svg[stash-content-share-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.704 6.889l5.463 4.292a.5.5 0 0 1 0 .786l-5.463 4.292a.5.5 0 0 1-.801-.482l.355-1.955c-5.016-1.204-7.108 1.494-7.914 3.235c-.118.254-.615.205-.64-.073c-.645-7.201 4.082-8.244 8.57-7.567l-.371-2.046a.5.5 0 0 1 .8-.482" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.41 7.46c-.164-.905.879-1.533 1.602-.965l5.464 4.293a1 1 0 0 1 0 1.572l-5.463 4.293c-.724.568-1.767-.06-1.602-.966l.269-1.48c-2.153-.426-3.655-.063-4.703.559c-1.134.672-1.802 1.686-2.18 2.502l-.453-.21l-.003-.002m.003.002l.453.21c-.185.4-.609.476-.861.45c-.249-.028-.686-.203-.73-.69c-.333-3.713.716-5.99 2.587-7.202c1.636-1.06 3.79-1.222 5.867-.993l-.25-1.372m6.448 4.113l-5.463-4.292l.372 2.046a.5.5 0 0 1-.567.583c-2.207-.332-4.358-.22-5.864.755c-1.365.884-2.324 2.564-2.176 5.654c.461-.823 1.188-1.751 2.307-2.415c1.38-.818 3.294-1.196 5.908-.569a.5.5 0 0 1 .375.576l-.355 1.954z" clip-rule="evenodd"></svg:path>`,
})
export class StashContentShareDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashContentShareLightIcon],svg[stash-content-share-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.411 7.46c-.164-.905.878-1.533 1.602-.965l5.463 4.293a1 1 0 0 1 0 1.572l-5.463 4.293c-.724.568-1.766-.06-1.602-.966l.27-1.48c-2.154-.426-3.655-.063-4.704.558c-1.134.673-1.802 1.687-2.18 2.502l-.452-.209l.452.21c-.185.4-.609.476-.861.45c-.249-.028-.686-.203-.73-.69c-.333-3.713.716-5.99 2.587-7.202c1.637-1.06 3.79-1.222 5.868-.993zm6.447 4.114l-5.463-4.292l.372 2.046a.5.5 0 0 1-.566.584c-2.208-.333-4.359-.221-5.865.754c-1.365.884-2.324 2.564-2.176 5.654c.462-.823 1.188-1.751 2.307-2.415c1.38-.818 3.295-1.196 5.908-.569a.5.5 0 0 1 .376.576l-.356 1.954z" clip-rule="evenodd"></svg:path>`,
})
export class StashContentShareLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashContentShareSolidIcon],svg[stash-content-share-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.704 6.889l5.463 4.292a.5.5 0 0 1 0 .786l-5.463 4.292a.5.5 0 0 1-.801-.482l.355-1.955c-5.016-1.204-7.108 1.494-7.914 3.235c-.118.254-.615.205-.64-.073c-.645-7.201 4.082-8.244 8.57-7.567l-.371-2.046a.5.5 0 0 1 .8-.483"></svg:path>`,
})
export class StashContentShareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCopyIcon],svg[stash-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.569 4.25h.225c1.118 0 1.83 0 2.435.162a4.75 4.75 0 0 1 3.36 3.359c.161.605.161 1.317.161 2.435v1.624c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03h-1.662c-.534 0-.98 0-1.344-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.201c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.57c0-.524 0-.929.094-1.28a2.75 2.75 0 0 1 1.944-1.945c.352-.095.757-.094 1.281-.094m.098 1.5c-.669 0-.856.006-.99.043a1.25 1.25 0 0 0-.884.883c-.037.135-.043.322-.043.99V11.8c0 .572 0 .957.025 1.252c.023.288.065.425.111.516c.12.235.311.426.547.546c.09.046.227.088.515.111c.295.024.68.025 1.252.025h1.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.546c.046-.091.088-.228.111-.515c.024-.296.025-.68.025-1.253v-1.467c0-.446 0-.798-.006-1.083H16.5a1.75 1.75 0 0 1-1.75-1.75V5.756a62 62 0 0 0-1.083-.006M16.25 6v1.5c0 .138.112.25.25.25H18A3.26 3.26 0 0 0 16.25 6M8.496 8.25H8.5a.75.75 0 0 1 0 1.5c-.25 0-.727 0-1.19.026a7 7 0 0 0-.622.058a2 2 0 0 0-.255.052a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.515c-.024.295-.025.68-.025 1.252v3.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h1.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.516-.111a1.25 1.25 0 0 0 .546-.547c.06-.119.098-.262.118-.39A2 2 0 0 0 12.25 17v-.004a.75.75 0 0 1 1.5.005H13h.75v.044l-.005.087a4 4 0 0 1-.031.279c-.035.219-.106.53-.264.838a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.345.03H8.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27A2.75 2.75 0 0 1 4.55 18.25c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345v-3.66c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 5.752 8.55c.224-.115.502-.168.716-.2c.239-.035.505-.057.759-.072c.507-.028 1.019-.028 1.27-.028m3.754 8.745V17z"></svg:path>`,
})
export class StashCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCopyDuotoneIcon],svg[stash-copy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.569 4.25h.225c1.118 0 1.83 0 2.436.162a4.75 4.75 0 0 1 3.358 3.359c.162.605.162 1.317.162 2.435v1.624c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.364.03-.81.03-1.344.03H14.17c-.534 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.201c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.57c0-.524 0-.929.094-1.28a2.75 2.75 0 0 1 1.944-1.945c.352-.095.757-.094 1.281-.094m.098 1.5c-.668 0-.855.006-.99.043a1.25 1.25 0 0 0-.884.883c-.036.135-.043.322-.043.99V11.8c0 .572 0 .957.025 1.252c.023.288.065.425.111.516c.12.235.311.426.547.546c.09.046.227.088.515.111c.295.024.68.025 1.252.025h1.6c.572 0 .957 0 1.253-.025c.287-.023.424-.065.515-.111a1.25 1.25 0 0 0 .546-.546c.046-.091.088-.228.111-.515c.024-.296.025-.68.025-1.253v-1.467c0-.446 0-.798-.006-1.083H16.5a1.75 1.75 0 0 1-1.75-1.75V5.756a62 62 0 0 0-1.083-.006M16.25 6v1.5c0 .138.112.25.25.25H18A3.25 3.25 0 0 0 16.25 6"></svg:path><svg:path fill="currentColor" d="M8.496 8.25H8.5a.75.75 0 1 1 0 1.5c-.602 0-1.214-.005-1.812.084c-.587.087-.869.572-.913 1.114c-.024.295-.025.68-.025 1.252v3.6c0 .572 0 .957.025 1.252c.054.664.481 1.117 1.172 1.173c.296.024.68.025 1.253.025h1.6c.525 0 1.275.114 1.768-.136c.424-.216.668-.647.682-1.115a.76.76 0 0 1 .75-.749c.415 0 .754.356.75.767c-.024 1.02-.583 1.965-1.501 2.433c-.729.371-1.627.3-2.419.3H8.17c-.792 0-1.69.071-2.418-.3a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345v-3.66c0-.535 0-.98.03-1.345c.08-.973.582-1.822 1.472-2.275c.44-.225.99-.244 1.475-.272c.507-.028 1.019-.028 1.27-.028" opacity=".5"></svg:path>`,
})
export class StashCopyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCopyLightIcon],svg[stash-copy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.59 4.5h.17c1.151 0 1.832 0 2.405.153a4.5 4.5 0 0 1 3.182 3.182c.153.573.153 1.254.153 2.405v1.581c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244c-.355.029-.792.029-1.334.029H14.18c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.092-1.092c-.151-.296-.214-.616-.244-.98c-.029-.355-.029-.792-.029-1.334V7.59c0-.545 0-.917.085-1.236a2.5 2.5 0 0 1 1.768-1.768c.32-.085.691-.085 1.236-.085m.077 1c-.652 0-.88.004-1.055.051a1.5 1.5 0 0 0-1.06 1.06c-.048.176-.052.404-.052 1.056V11.8c0 .568 0 .964.026 1.273c.024.303.07.476.138.608a1.5 1.5 0 0 0 .655.656c.132.067.305.113.608.137c.309.026.705.026 1.273.026h1.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.138a1.5 1.5 0 0 0 .656-.655c.067-.132.113-.305.137-.608c.026-.309.026-.705.026-1.273v-1.467c0-.575 0-1-.012-1.333H16.5A1.5 1.5 0 0 1 15 7.5V5.512a42 42 0 0 0-1.333-.012M16 5.646V7.5a.5.5 0 0 0 .5.5h1.854A3.5 3.5 0 0 0 16 5.646M8.497 8.5H8.5a.5.5 0 0 1 0 1c-.25 0-.733 0-1.203.026c-.236.014-.46.033-.645.06c-.202.03-.304.063-.333.077a1.5 1.5 0 0 0-.656.656c-.067.132-.113.305-.137.608c-.026.309-.026.705-.026 1.273v3.6c0 .568 0 .965.026 1.273c.024.302.07.476.137.608a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137c.309.026.705.026 1.273.026h1.6c.568 0 .964 0 1.273-.026c.303-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.076-.15.12-.322.142-.465q.015-.107.019-.167l.002-.043v-.008V17a.5.5 0 1 1 1 .001H13h.5v.037l-.005.078a3 3 0 0 1-.028.256a2.6 2.6 0 0 1-.24.764a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244c-.355.029-.792.029-1.334.029H8.18c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98c-.03-.356-.03-.794-.03-1.336v-3.64c0-.542 0-.98.029-1.333c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.185-.094.428-.143.64-.175c.228-.033.486-.055.736-.069c.5-.028 1.006-.028 1.256-.028"></svg:path>`,
})
export class StashCopyLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerDownLeftIcon],svg[stash-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 3.25a.75.75 0 0 1 .75.75v1.434c0 1.651 0 2.937-.084 3.968c-.086 1.047-.262 1.897-.652 2.662a6.75 6.75 0 0 1-2.95 2.95c-.765.39-1.615.566-2.662.652c-1.031.084-2.317.084-3.968.084H5.811l3.72 3.72a.75.75 0 1 1-1.061 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 1.06l-3.72 3.72h4.59c1.692 0 2.917 0 3.88-.08c.954-.077 1.585-.228 2.104-.492a5.25 5.25 0 0 0 2.294-2.295c.264-.518.415-1.15.493-2.103c.078-.963.079-2.187.079-3.88V4a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerDownLeftDuotoneIcon],svg[stash-corner-down-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 3.125c.483 0 .875.392.875.875v1.44c0 1.646 0 2.936-.085 3.972c-.086 1.055-.264 1.923-.664 2.71a6.88 6.88 0 0 1-3.005 3.004c-.785.4-1.654.578-2.709.664c-1.036.085-2.326.085-3.973.085H6.112l3.507 3.506A.875.875 0 1 1 8.38 20.62l-5-5a.875.875 0 0 1 0-1.238l5-5a.875.875 0 0 1 1.24 1.238l-3.507 3.506H10.4c1.695 0 2.913 0 3.87-.079c.946-.077 1.559-.226 2.057-.48a5.13 5.13 0 0 0 2.24-2.24c.253-.497.402-1.11.48-2.056c.077-.957.078-2.175.078-3.87V4c0-.483.392-.875.875-.875" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerDownLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerDownLeftLightIcon],svg[stash-corner-down-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 3.5a.5.5 0 0 1 .5.5v1.423c0 1.66 0 2.938-.083 3.959c-.085 1.03-.257 1.845-.626 2.569a6.5 6.5 0 0 1-2.84 2.84c-.724.37-1.538.541-2.57.626c-1.02.083-2.297.083-3.958.083H5.207l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 1 1 .708.708L5.207 14.5H10.4c1.688 0 2.925 0 3.9-.08c.97-.08 1.637-.234 2.197-.52a5.5 5.5 0 0 0 2.404-2.403c.285-.56.44-1.227.519-2.197c.08-.975.08-2.212.08-3.9V4a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerDownLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerDownLeftSolidIcon],svg[stash-corner-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 3a1 1 0 0 1 1 1v1.444c0 1.643 0 2.937-.085 3.978c-.087 1.063-.267 1.95-.678 2.756a7 7 0 0 1-3.06 3.059c-.805.41-1.692.591-2.755.678c-1.041.085-2.335.085-3.978.085h-4.03l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L6.414 14H10.4c1.697 0 2.909 0 3.86-.078c.938-.077 1.533-.224 2.01-.467a5 5 0 0 0 2.185-2.185c.243-.477.39-1.072.467-2.01c.077-.951.078-2.163.078-3.86V4a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerDownRightIcon],svg[stash-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.25a.75.75 0 0 0-.75.75v1.434c0 1.651 0 2.937.084 3.968c.086 1.047.262 1.897.652 2.662a6.75 6.75 0 0 0 2.95 2.95c.765.39 1.615.566 2.662.652c1.031.084 2.317.084 3.968.084h4.623l-3.72 3.72a.75.75 0 1 0 1.061 1.06l5-5a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06l3.72 3.72H13.6c-1.692 0-2.917 0-3.88-.08c-.954-.077-1.585-.228-2.103-.492a5.25 5.25 0 0 1-2.295-2.295c-.264-.518-.415-1.15-.493-2.103c-.078-.963-.079-2.187-.079-3.88V4A.75.75 0 0 0 4 3.25" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerDownRightDuotoneIcon],svg[stash-corner-down-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.125A.875.875 0 0 0 3.125 4v1.44c0 1.646 0 2.936.085 3.972c.086 1.055.264 1.923.664 2.71a6.88 6.88 0 0 0 3.005 3.004c.785.4 1.654.578 2.709.664c1.036.085 2.326.085 3.973.085h4.327l-3.507 3.506a.875.875 0 1 0 1.238 1.238l5-5a.875.875 0 0 0 0-1.238l-5-5a.875.875 0 1 0-1.238 1.238l3.507 3.506H13.6c-1.695 0-2.913 0-3.87-.079c-.946-.077-1.559-.226-2.057-.48a5.13 5.13 0 0 1-2.24-2.24c-.253-.497-.402-1.11-.48-2.056c-.077-.957-.078-2.175-.078-3.87V4A.875.875 0 0 0 4 3.125" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerDownRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerDownRightLightIcon],svg[stash-corner-down-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3.5a.5.5 0 0 0-.5.5v1.423c0 1.66 0 2.938.083 3.959c.085 1.03.257 1.845.625 2.569a6.5 6.5 0 0 0 2.841 2.84c.724.37 1.538.541 2.57.626c1.02.083 2.297.083 3.958.083h5.216l-4.147 4.146a.5.5 0 0 0 .708.708l5-5a.5.5 0 0 0 0-.708l-5-5a.5.5 0 0 0-.708.708l4.147 4.146H13.6c-1.688 0-2.925 0-3.9-.08c-.97-.08-1.637-.234-2.197-.52A5.5 5.5 0 0 1 5.1 11.497c-.285-.56-.44-1.227-.519-2.197c-.08-.975-.08-2.212-.08-3.9V4a.5.5 0 0 0-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerDownRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerDownRightSolidIcon],svg[stash-corner-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 3a1 1 0 0 0-1 1v1.444c0 1.643 0 2.937.085 3.978c.087 1.063.267 1.95.678 2.756a7 7 0 0 0 3.06 3.059c.805.41 1.692.591 2.755.678c1.041.085 2.335.085 3.978.085h4.03l-3.293 3.293a1 1 0 0 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 1 0-1.414 1.414L17.586 14H13.6c-1.697 0-2.909 0-3.86-.078c-.938-.077-1.533-.224-2.01-.467a5 5 0 0 1-2.185-2.185c-.243-.477-.39-1.072-.467-2.01C5.001 8.308 5 7.096 5 5.4V4a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerUpLeftIcon],svg[stash-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 20.75a.75.75 0 0 0 .75-.75v-1.434c0-1.651 0-2.937-.084-3.968c-.086-1.047-.262-1.897-.652-2.662a6.75 6.75 0 0 0-2.95-2.95c-.765-.39-1.615-.566-2.662-.652c-1.031-.084-2.317-.084-3.968-.084H5.811l3.72-3.72A.75.75 0 0 0 8.47 3.47l-5 5a.75.75 0 0 0 0 1.06l5 5a.75.75 0 0 0 1.06-1.06L5.81 9.75h4.59c1.692 0 2.917 0 3.88.08c.954.077 1.585.228 2.104.492a5.25 5.25 0 0 1 2.294 2.295c.264.518.415 1.15.493 2.103c.078.963.079 2.187.079 3.88V20c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerUpLeftDuotoneIcon],svg[stash-corner-up-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 20.875a.875.875 0 0 0 .875-.875v-1.44c0-1.646 0-2.936-.085-3.972c-.086-1.055-.264-1.923-.664-2.71a6.88 6.88 0 0 0-3.005-3.004c-.785-.4-1.654-.578-2.709-.664c-1.036-.085-2.326-.085-3.973-.085H6.112L9.62 4.619A.875.875 0 1 0 8.38 3.38l-5 5a.875.875 0 0 0 0 1.238l5 5a.875.875 0 0 0 1.24-1.238L6.112 9.875H10.4c1.695 0 2.913 0 3.87.079c.946.077 1.559.226 2.057.48a5.13 5.13 0 0 1 2.24 2.24c.253.497.402 1.11.48 2.057c.077.956.078 2.174.078 3.869V20c0 .483.392.875.875.875" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerUpLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerUpLeftLightIcon],svg[stash-corner-up-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 20.5a.5.5 0 0 0 .5-.5v-1.423c0-1.66 0-2.938-.083-3.959c-.085-1.03-.257-1.845-.626-2.569a6.5 6.5 0 0 0-2.84-2.84c-.724-.37-1.538-.541-2.57-.626c-1.02-.083-2.297-.083-3.958-.083H5.207l4.147-4.146a.5.5 0 1 0-.708-.708l-5 5a.5.5 0 0 0 0 .708l5 5a.5.5 0 0 0 .708-.708L5.207 9.5H10.4c1.688 0 2.925 0 3.9.08c.97.08 1.637.234 2.197.52a5.5 5.5 0 0 1 2.404 2.403c.285.56.44 1.227.519 2.197c.08.975.08 2.212.08 3.9V20a.5.5 0 0 0 .5.5" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerUpLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerUpLeftSolidIcon],svg[stash-corner-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 21a1 1 0 0 0 1-1v-1.444c0-1.643 0-2.937-.085-3.978c-.087-1.063-.267-1.95-.678-2.756a7 7 0 0 0-3.06-3.059c-.805-.41-1.692-.591-2.755-.678C13.381 8 12.087 8 10.444 8h-4.03l3.293-3.293a1 1 0 0 0-1.414-1.414l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L6.414 10H10.4c1.697 0 2.909 0 3.86.078c.938.077 1.533.224 2.01.467a5 5 0 0 1 2.185 2.185c.243.477.39 1.072.467 2.01c.077.951.078 2.163.078 3.86V20a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerUpRightIcon],svg[stash-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 20.75a.75.75 0 0 1-.75-.75v-1.434c0-1.651 0-2.937.084-3.968c.086-1.047.262-1.897.652-2.662a6.75 6.75 0 0 1 2.95-2.95c.765-.39 1.615-.566 2.662-.652c1.031-.084 2.317-.084 3.968-.084h4.623l-3.72-3.72a.75.75 0 0 1 1.061-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H13.6c-1.692 0-2.917 0-3.88.08c-.954.077-1.585.228-2.103.492a5.25 5.25 0 0 0-2.295 2.295c-.264.518-.415 1.15-.493 2.103c-.078.963-.079 2.187-.079 3.88V20a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerUpRightDuotoneIcon],svg[stash-corner-up-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 20.875A.875.875 0 0 1 3.125 20v-1.44c0-1.646 0-2.936.085-3.972c.086-1.055.264-1.923.664-2.71A6.88 6.88 0 0 1 6.88 8.875c.785-.4 1.654-.578 2.709-.664c1.036-.085 2.326-.085 3.973-.085h4.327L14.38 4.619a.875.875 0 0 1 1.24-1.239l5 5a.875.875 0 0 1 0 1.238l-5 5a.875.875 0 1 1-1.238-1.238l3.507-3.506H13.6c-1.695 0-2.913 0-3.87.079c-.946.077-1.559.226-2.057.48a5.13 5.13 0 0 0-2.24 2.24c-.253.497-.402 1.11-.48 2.057c-.077.956-.078 2.174-.078 3.869V20a.875.875 0 0 1-.875.875" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerUpRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerUpRightLightIcon],svg[stash-corner-up-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 20.5a.5.5 0 0 1-.5-.5v-1.423c0-1.66 0-2.938.083-3.959c.085-1.03.257-1.845.625-2.569A6.5 6.5 0 0 1 7.05 9.21c.724-.37 1.538-.541 2.57-.626c1.02-.083 2.297-.083 3.958-.083h5.216l-4.147-4.146a.5.5 0 0 1 .708-.708l5 5a.5.5 0 0 1 0 .708l-5 5a.5.5 0 0 1-.708-.708L18.793 9.5H13.6c-1.688 0-2.925 0-3.9.08c-.97.08-1.637.234-2.197.52A5.5 5.5 0 0 0 5.1 12.503c-.285.56-.44 1.227-.519 2.197c-.08.975-.08 2.212-.08 3.9V20a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerUpRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCornerUpRightSolidIcon],svg[stash-corner-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 21a1 1 0 0 1-1-1v-1.444c0-1.643 0-2.937.085-3.978c.087-1.063.267-1.95.678-2.756a7 7 0 0 1 3.06-3.059c.805-.41 1.692-.591 2.755-.678C10.619 8 11.913 8 13.556 8h4.03l-3.293-3.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414-1.414L17.586 10H13.6c-1.697 0-2.909 0-3.86.078c-.938.077-1.533.224-2.01.467a5 5 0 0 0-2.185 2.185c-.243.477-.39 1.072-.467 2.01C5.001 15.692 5 16.904 5 18.6V20a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path>`,
})
export class StashCornerUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCreatorsClubIcon],svg[stash-creators-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 9.887a3.174 3.174 0 0 1 4.402 0a1 1 0 0 0 1.396-1.431c-1.99-1.941-5.206-1.941-7.195 0a4.93 4.93 0 0 0 0 7.088c1.99 1.941 5.206 1.941 7.195 0a1 1 0 0 0-1.396-1.431a3.174 3.174 0 0 1-4.403 0a2.93 2.93 0 0 1 0-4.226"></svg:path><svg:path fill="currentColor" d="M13.384 2.47a4.48 4.48 0 0 0-2.768 0c-.707.229-1.31.693-2.007 1.343c-.952.034-1.707.132-2.37.47a4.48 4.48 0 0 0-1.957 1.956c-.337.663-.435 1.418-.469 2.37c-.65.697-1.114 1.3-1.344 2.007a4.48 4.48 0 0 0 0 2.768c.23.707.694 1.31 1.344 2.007c.034.952.132 1.707.47 2.37a4.48 4.48 0 0 0 1.956 1.957c.663.337 1.418.435 2.37.469c.697.65 1.3 1.114 2.007 1.344c.9.292 1.868.292 2.768 0c.707-.23 1.31-.694 2.007-1.344c.952-.034 1.707-.132 2.37-.47a4.48 4.48 0 0 0 1.957-1.956c.337-.663.435-1.418.469-2.37c.65-.697 1.114-1.3 1.344-2.007c.292-.9.292-1.868 0-2.768c-.23-.707-.694-1.31-1.344-2.007c-.034-.952-.132-1.707-.47-2.37a4.48 4.48 0 0 0-1.956-1.957c-.663-.337-1.418-.435-2.37-.469c-.697-.65-1.3-1.114-2.007-1.344M11.08 3.895a2.98 2.98 0 0 1 1.84 0c.424.137.861.451 1.646 1.2l.21.202l.29.006c1.086.025 1.617.113 2.014.315a2.97 2.97 0 0 1 1.301 1.301c.202.397.29.928.315 2.013l.006.29l.201.211c.75.785 1.064 1.222 1.201 1.646a2.98 2.98 0 0 1 0 1.84c-.137.424-.451.861-1.2 1.646l-.202.21l-.006.29c-.025 1.086-.113 1.617-.315 2.014a2.98 2.98 0 0 1-1.301 1.301c-.397.203-.928.29-2.013.315l-.29.006l-.211.201c-.785.75-1.222 1.064-1.646 1.201a2.98 2.98 0 0 1-1.84 0c-.424-.137-.861-.451-1.646-1.2l-.21-.202l-.29-.006c-1.086-.025-1.617-.113-2.014-.315a2.98 2.98 0 0 1-1.3-1.3c-.202-.397-.29-.928-.315-2.013l-.006-.29l-.201-.211c-.75-.785-1.064-1.222-1.201-1.646a2.98 2.98 0 0 1 0-1.84c.137-.424.451-.861 1.2-1.646l.202-.21l.006-.29c.025-1.086.113-1.617.315-2.014a2.98 2.98 0 0 1 1.3-1.3c.397-.202.928-.29 2.013-.315l.29-.006l.211-.201c.785-.75 1.222-1.064 1.646-1.201"></svg:path>`,
})
export class StashCreatorsClubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCreatorsClubDuotoneIcon],svg[stash-creators-club-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.92 3.896a2.98 2.98 0 0 0-1.84 0c-.424.137-.861.451-1.646 1.2l-.21.202l-.29.006c-1.086.025-1.617.113-2.014.315a2.98 2.98 0 0 0-1.3 1.301c-.202.397-.29.928-.315 2.013l-.006.29l-.201.211c-.75.785-1.064 1.222-1.201 1.646a2.98 2.98 0 0 0 0 1.84c.137.424.451.861 1.2 1.646l.202.21l.006.29c.025 1.086.113 1.617.315 2.014a2.97 2.97 0 0 0 1.301 1.301c.397.203.928.29 2.013.315l.29.006l.211.201c.785.75 1.222 1.064 1.646 1.201a2.98 2.98 0 0 0 1.84 0c.424-.137.861-.451 1.646-1.2l.21-.202l.29-.006c1.086-.025 1.617-.113 2.014-.315a2.98 2.98 0 0 0 1.301-1.301c.203-.397.29-.928.315-2.013l.006-.29l.201-.211c.75-.785 1.064-1.222 1.201-1.646a2.98 2.98 0 0 0 0-1.84c-.137-.424-.451-.861-1.2-1.646l-.202-.21l-.006-.29c-.025-1.086-.113-1.617-.315-2.014a2.98 2.98 0 0 0-1.302-1.3c-.397-.202-.928-.29-2.013-.315l-.29-.006l-.211-.201c-.785-.75-1.222-1.064-1.646-1.201M10.616 2.47a4.48 4.48 0 0 1 2.768 0c.707.23 1.31.694 2.007 1.344c.952.034 1.707.132 2.37.47a4.48 4.48 0 0 1 1.957 1.956c.337.663.435 1.418.469 2.37c.65.697 1.114 1.3 1.344 2.007c.292.9.292 1.868 0 2.768c-.23.707-.694 1.31-1.344 2.007c-.034.952-.132 1.707-.47 2.37a4.48 4.48 0 0 1-1.956 1.957c-.663.337-1.418.435-2.37.469c-.697.65-1.3 1.114-2.007 1.344c-.9.292-1.868.292-2.768 0c-.707-.23-1.31-.694-2.007-1.344c-.952-.034-1.707-.132-2.37-.47a4.48 4.48 0 0 1-1.957-1.956c-.337-.663-.435-1.418-.469-2.37c-.65-.697-1.114-1.3-1.344-2.007a4.48 4.48 0 0 1 0-2.768c.23-.707.694-1.31 1.344-2.007c.034-.952.132-1.707.47-2.37a4.48 4.48 0 0 1 1.956-1.957c.663-.337 1.418-.435 2.37-.469c.697-.65 1.3-1.114 2.007-1.344"></svg:path><svg:path fill="currentColor" d="M14.302 9.887a3.174 3.174 0 0 0-4.403 0a2.93 2.93 0 0 0 0 4.226a3.174 3.174 0 0 0 4.403 0a1 1 0 0 1 1.396 1.431c-1.99 1.941-5.206 1.941-7.195 0a4.93 4.93 0 0 1 0-7.088c1.99-1.941 5.206-1.941 7.195 0a1 1 0 0 1-1.396 1.431" opacity=".5"></svg:path>`,
})
export class StashCreatorsClubDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCreatorsClubLightIcon],svg[stash-creators-club-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.998 3.658a3.23 3.23 0 0 0-1.995 0c-.452.147-.898.465-1.604 1.128c-.18.168-.415.266-.661.274c-.968.03-1.508.12-1.931.336a3.23 3.23 0 0 0-1.411 1.41c-.216.424-.306.964-.337 1.932a1 1 0 0 1-.273.661c-.663.706-.981 1.152-1.128 1.604a3.23 3.23 0 0 0 0 1.995c.147.451.465.897 1.128 1.603c.168.18.266.415.274.661c.03.968.12 1.508.336 1.931c.31.608.803 1.102 1.41 1.411c.424.216.964.306 1.932.337c.246.007.481.105.661.273c.706.663 1.152.981 1.604 1.128c.648.21 1.346.21 1.995 0c.451-.147.897-.465 1.603-1.128c.18-.168.415-.266.661-.273c.968-.03 1.508-.121 1.931-.337a3.23 3.23 0 0 0 1.411-1.41c.216-.424.306-.964.337-1.932c.007-.246.105-.481.273-.661c.663-.706.981-1.152 1.128-1.604c.21-.648.21-1.346 0-1.995c-.147-.451-.465-.897-1.128-1.603a1 1 0 0 1-.273-.661c-.03-.968-.121-1.508-.337-1.931a3.23 3.23 0 0 0-1.41-1.411c-.424-.216-.964-.306-1.932-.336a1 1 0 0 1-.661-.274c-.706-.663-1.152-.981-1.604-1.128m-2.304-.951a4.23 4.23 0 0 1 2.612 0c.677.22 1.26.674 1.98 1.35l.008.003c.986.03 1.72.122 2.353.445a4.23 4.23 0 0 1 1.848 1.848c.323.634.414 1.367.445 2.353q0 .005.003.008c.676.72 1.13 1.303 1.35 1.98a4.22 4.22 0 0 1 0 2.612c-.22.677-.674 1.26-1.35 1.98l-.003.008c-.03.986-.122 1.72-.445 2.353a4.23 4.23 0 0 1-1.848 1.848c-.634.323-1.367.414-2.353.445l-.008.003c-.72.676-1.303 1.13-1.98 1.35a4.23 4.23 0 0 1-2.612 0c-.677-.22-1.26-.674-1.98-1.35l-.008-.003c-.986-.03-1.72-.122-2.353-.445a4.23 4.23 0 0 1-1.848-1.848c-.323-.634-.414-1.367-.445-2.353l-.003-.008c-.676-.72-1.13-1.303-1.35-1.98a4.23 4.23 0 0 1 0-2.612c.22-.677.674-1.26 1.35-1.98l.003-.008c.03-.986.122-1.72.445-2.353a4.23 4.23 0 0 1 1.848-1.848c.634-.323 1.367-.414 2.353-.445l.008-.003c.72-.676 1.303-1.13 1.98-1.35"></svg:path><svg:path fill="currentColor" d="M14.65 9.53a3.674 3.674 0 0 0-5.1 0a3.43 3.43 0 0 0 0 4.94a3.674 3.674 0 0 0 5.1 0a.5.5 0 1 1 .7.716c-1.796 1.752-4.703 1.752-6.498 0a4.43 4.43 0 0 1 0-6.372c1.795-1.752 4.702-1.752 6.497 0a.5.5 0 0 1-.698.715"></svg:path>`,
})
export class StashCreatorsClubLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCreditCardIcon],svg[stash-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></svg:path><svg:path fill="currentColor" d="M16.83 4.75H7.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 3.55 6.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v6.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.345.03h9.66c.535 0 .98 0 1.345-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074c.03-.365.03-.81.03-1.344V8.67c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03M5.433 6.386c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h9.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.021.26.024.589.025 1.053H4.75c0-.464.004-.793.025-1.053c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547M4.75 10.5h14.5v4.8c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H7.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252z"></svg:path>`,
})
export class StashCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCreditCardDuotoneIcon],svg[stash-credit-card-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 14.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M16.83 4.75H7.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 3.55 6.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v6.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.345.03h9.66c.535 0 .98 0 1.345-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074c.03-.365.03-.81.03-1.344V8.67c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03M5.433 6.386c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h9.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.021.26.024.589.025 1.053H4.75c0-.464.004-.793.025-1.053c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547M4.75 10.5h14.5v4.8c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H7.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252z"></svg:path>`,
})
export class StashCreditCardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCreditCardLightIcon],svg[stash-credit-card-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></svg:path><svg:path fill="currentColor" d="M16.821 5H7.18c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.243a2.5 2.5 0 0 0-1.093 1.093c-.15.296-.213.616-.243.98c-.027.315-.03.695-.03 1.155v6.821c0 .542 0 .98.029 1.333c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244C6.2 19 6.638 19 7.18 19h9.642c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98c.029-.355.029-.792.029-1.334V8.5c0-.46-.003-.84-.029-1.154c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243C17.8 5 17.362 5 16.82 5m2.68 3.5h-15c0-.463.003-.802.026-1.073c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.656c.132-.067.306-.113.608-.137C6.236 6 6.632 6 7.2 6h9.6c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.023.271.026.61.026 1.073m-15 2h15v4.8c0 .568 0 .965-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H7.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.308-.026-.705-.026-1.273z"></svg:path>`,
})
export class StashCreditCardLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCreditCardSolidIcon],svg[stash-credit-card-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.161 4.5h9.678c.527 0 .982 0 1.356.03c.395.033.789.104 1.167.297a3 3 0 0 1 1.311 1.311c.193.378.264.772.296 1.167c.031.375.031.83.031 1.356v6.678c0 .527 0 .981-.03 1.356c-.033.395-.104.789-.297 1.167a3 3 0 0 1-1.311 1.311c-.378.193-.772.264-1.167.296c-.375.031-.83.031-1.357.031H7.162c-.527 0-.981 0-1.356-.03c-.395-.033-.789-.104-1.167-.297a3 3 0 0 1-1.311-1.311c-.193-.378-.264-.772-.296-1.167A18 18 0 0 1 3 15.338V8.662c0-.527 0-.981.03-1.356c.033-.395.104-.789.297-1.167a3 3 0 0 1 1.311-1.311c.378-.193.772-.264 1.167-.296c.375-.031.83-.031 1.356-.031M5 10.5v4.8c0 .577 0 .949.024 1.232c.022.272.06.372.085.422a1 1 0 0 0 .437.437c.05.025.15.063.422.085c.283.023.655.024 1.232.024h9.6c.577 0 .949 0 1.232-.024c.272-.022.372-.06.422-.085a1 1 0 0 0 .437-.437c.025-.05.063-.15.085-.422C19 16.25 19 15.877 19 15.3v-4.8zm14-2c0-.465-.004-.783-.024-1.032c-.022-.272-.06-.373-.085-.422a1 1 0 0 0-.437-.437c-.05-.025-.15-.063-.422-.085C17.75 6.5 17.377 6.5 16.8 6.5H7.2c-.577 0-.949 0-1.232.024c-.272.022-.373.06-.422.085a1 1 0 0 0-.437.437c-.025.05-.063.15-.085.422C5.004 7.717 5 8.035 5 8.5zm-6 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1"></svg:path>`,
})
export class StashCreditCardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCrownIcon],svg[stash-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .696.471c.354.886.793 1.445 1.24 1.798c.444.353.932.53 1.43.594c1.027.133 2.081-.212 2.732-.499l.017-.007c.093-.041.197-.087.286-.12h.005a1 1 0 0 1 .55-.047a.94.94 0 0 1 .625.474c.124.23.11.462.105.538v.002c-.007.094-.023.204-.036.299l-.777 5.437l-.008.061c-.037.263-.077.55-.222.822a1.8 1.8 0 0 1-.522.6c-.25.181-.508.255-.741.322l-.05.014a19.55 19.55 0 0 1-10.661 0l-.049-.014c-.233-.067-.491-.141-.741-.321a1.8 1.8 0 0 1-.523-.601c-.144-.273-.184-.56-.22-.822l-.01-.06l-.774-5.42l-.002-.018a4 4 0 0 1-.036-.299v-.002a1 1 0 0 1 .105-.538a.94.94 0 0 1 .625-.474a1 1 0 0 1 .55.046l.004.002c.09.032.194.078.287.119l.017.007c.65.287 1.704.632 2.73.5a2.85 2.85 0 0 0 1.433-.595c.445-.353.884-.912 1.239-1.798A.75.75 0 0 1 12 6.25m-6.066 3.988l.678 4.74c.024.172.037.262.052.33l.019.064l.009.014a.4.4 0 0 0 .053.06l.012.012a.2.2 0 0 0 .053.025c.054.02.126.042.275.085a18.05 18.05 0 0 0 9.83 0a4 4 0 0 0 .275-.085a.2.2 0 0 0 .052-.025l.013-.011a.4.4 0 0 0 .053-.061l.01-.014l.004-.012l.014-.052c.014-.068.028-.158.052-.33l.677-4.74c-.762.265-1.805.503-2.891.363a4.34 4.34 0 0 1-2.17-.906A5 5 0 0 1 12 8.605q-.452.657-1.004 1.09a4.35 4.35 0 0 1-2.17.906c-1.086.14-2.129-.098-2.892-.363"></svg:path>`,
})
export class StashCrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCrownDuotoneIcon],svg[stash-crown-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .696.471c.354.886.793 1.445 1.24 1.798c.444.353.932.53 1.43.594c1.027.133 2.081-.212 2.732-.499l.017-.007c.093-.041.197-.087.286-.12h.005a1 1 0 0 1 .55-.047a.94.94 0 0 1 .625.474c.124.23.11.462.105.538v.002c-.007.094-.023.204-.036.299l-.777 5.437l-.008.061c-.037.263-.077.55-.222.822a1.8 1.8 0 0 1-.522.6c-.25.181-.508.255-.741.322l-.05.014a19.55 19.55 0 0 1-10.661 0l-.049-.014c-.233-.067-.491-.141-.741-.321a1.8 1.8 0 0 1-.523-.601c-.144-.273-.184-.56-.22-.822l-.01-.06l-.774-5.42l-.002-.018a4 4 0 0 1-.036-.299v-.002a1 1 0 0 1 .105-.538a.94.94 0 0 1 .625-.474a1 1 0 0 1 .55.046l.004.002c.09.032.194.078.287.119l.017.007c.65.287 1.704.632 2.73.5a2.85 2.85 0 0 0 1.433-.595c.445-.353.884-.912 1.239-1.798A.75.75 0 0 1 12 6.25m-6.066 3.988l.678 4.74c.024.172.037.262.052.33l.019.064l.009.014a.4.4 0 0 0 .053.06l.012.012a.2.2 0 0 0 .053.025c.054.02.126.042.275.085a18.05 18.05 0 0 0 9.83 0a4 4 0 0 0 .275-.085a.2.2 0 0 0 .052-.025l.013-.011a.4.4 0 0 0 .053-.061l.01-.014l.004-.012l.014-.052c.014-.068.028-.158.052-.33l.677-4.74c-.762.265-1.805.503-2.891.363a4.34 4.34 0 0 1-2.17-.906A5 5 0 0 1 12 8.605q-.452.657-1.004 1.09a4.35 4.35 0 0 1-2.17.906c-1.086.14-2.129-.098-2.892-.363"></svg:path>`,
})
export class StashCrownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCrownLightIcon],svg[stash-crown-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.5a.5.5 0 0 1 .464.314c.368.919.83 1.516 1.316 1.901a3.1 3.1 0 0 0 1.555.646c1.094.142 2.199-.225 2.864-.518l.014-.006a4 4 0 0 1 .272-.114c.064-.022.23-.081.416-.04a.7.7 0 0 1 .46.35a.74.74 0 0 1 .075.405c-.005.083-.02.184-.034.283l-.776 5.434l-.007.052c-.039.272-.073.517-.196.75a1.6 1.6 0 0 1-.448.514c-.213.154-.431.217-.672.286l-.041.012a19.3 19.3 0 0 1-10.523 0l-.042-.012c-.24-.07-.458-.132-.671-.286a1.6 1.6 0 0 1-.448-.515c-.123-.232-.158-.477-.196-.749l-.008-.052L4.6 9.736l-.002-.015a5 5 0 0 1-.034-.283a.74.74 0 0 1 .075-.405a.7.7 0 0 1 .461-.35a.75.75 0 0 1 .415.04c.08.029.177.071.272.114l.015.006c.665.293 1.77.66 2.863.518a3.1 3.1 0 0 0 1.555-.646c.486-.385.949-.982 1.316-1.9A.5.5 0 0 1 12 6.5M5.627 9.855l.737 5.159c.05.352.066.415.098.475c.03.056.098.134.15.172c.056.04.104.06.404.147a18.3 18.3 0 0 0 9.968 0c.3-.087.348-.106.405-.147a.6.6 0 0 0 .15-.172c.031-.06.047-.123.097-.475l.737-5.159c-.751.305-1.936.657-3.167.498a4.1 4.1 0 0 1-2.047-.854A4.9 4.9 0 0 1 12 8.14a4.9 4.9 0 0 1-1.159 1.36a4.1 4.1 0 0 1-2.047.854c-1.231.16-2.415-.193-3.167-.498"></svg:path>`,
})
export class StashCrownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCrownSolidIcon],svg[stash-crown-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6.25a.75.75 0 0 1 .696.471c.354.886.793 1.445 1.24 1.798c.444.353.932.53 1.43.594c1.027.133 2.081-.212 2.732-.499l.017-.007c.093-.041.197-.087.286-.12h.005a1 1 0 0 1 .55-.047a.94.94 0 0 1 .625.474c.124.23.11.462.105.538v.002c-.007.094-.023.204-.036.299c-.262 1.833-.528 3.665-.785 5.498c-.13.92-.619 1.493-1.534 1.758a19.55 19.55 0 0 1-10.662 0c-.915-.265-1.405-.838-1.534-1.758c-.257-1.833-.523-3.665-.785-5.498a4 4 0 0 1-.036-.299v-.002a1 1 0 0 1 .105-.538a.94.94 0 0 1 .625-.474a1 1 0 0 1 .55.046l.004.002c.09.032.194.078.287.119l.017.007c.65.287 1.704.632 2.73.5a2.85 2.85 0 0 0 1.433-.595c.445-.353.884-.912 1.239-1.798A.75.75 0 0 1 12 6.25"></svg:path>`,
})
export class StashCrownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCursorArrowIcon],svg[stash-cursor-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.843 8.157L9.66 10.63l.748.374l.015.008c.068.034.157.078.232.125a1 1 0 0 1 .346.345a.98.98 0 0 1 .1.737a1 1 0 0 1-.24.426c-.06.065-.134.132-.19.182l-.012.011l-2.677 2.422l.757.757l2.422-2.677l.01-.012c.051-.056.118-.13.183-.19a1 1 0 0 1 .426-.24a.98.98 0 0 1 .737.1c.19.11.294.263.345.346c.047.075.091.165.125.232l.008.015l.374.749zm.622-1.854c.092-.027.34-.1.616-.008a.98.98 0 0 1 .624.624c.091.276.02.524-.008.616c-.032.107-.082.23-.125.338l-.008.02l-3.115 7.787l-.008.02a4 4 0 0 1-.138.32c-.044.087-.16.308-.409.444a.98.98 0 0 1-.87.037a1 1 0 0 1-.444-.41a4 4 0 0 1-.165-.307l-.01-.019l-.503-1.007l-2.317 2.56l-.009.01c-.037.041-.09.1-.144.15a1 1 0 0 1-.337.213a1 1 0 0 1-.626.015a1 1 0 0 1-.347-.195c-.056-.047-.113-.104-.152-.143l-.01-.009l-1.319-1.32l-.01-.01a3 3 0 0 1-.142-.15a1 1 0 0 1-.195-.348a1 1 0 0 1 .015-.626a1 1 0 0 1 .212-.337c.05-.053.11-.107.151-.144l.01-.009l2.56-2.317l-1.007-.504l-.02-.01c-.099-.05-.214-.107-.307-.164a1 1 0 0 1-.408-.444a.98.98 0 0 1 .036-.87c.136-.249.357-.365.444-.409a4 4 0 0 1 .32-.138l.02-.008l7.787-3.115l.02-.008c.108-.043.231-.093.338-.125"></svg:path>`,
})
export class StashCursorArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCursorArrowDuotoneIcon],svg[stash-cursor-arrow-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.077 15.43c.117.234.175.351.251.385c.066.03.142.026.206-.008c.073-.04.122-.162.219-.405l3.115-7.787c.1-.254.152-.38.125-.46a.23.23 0 0 0-.147-.148c-.08-.027-.207.024-.46.125l-7.787 3.115c-.244.098-.365.146-.405.22a.23.23 0 0 0-.009.205c.034.076.151.134.385.252l1.504.751c.163.082.244.122.279.183c.03.052.039.115.024.174c-.018.067-.085.128-.22.25l-2.972 2.69c-.101.09-.151.136-.171.19a.23.23 0 0 0-.004.148c.017.055.065.103.161.199l1.32 1.32c.096.096.144.144.2.16c.048.016.1.014.147-.003c.054-.02.1-.07.19-.17l2.69-2.973c.122-.135.183-.202.25-.22a.23.23 0 0 1 .174.024c.06.035.101.116.183.28z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.843 8.157L9.66 10.63l.748.374l.015.008c.068.034.157.078.232.124a1 1 0 0 1 .346.346a.98.98 0 0 1 .1.737a1 1 0 0 1-.24.426a3 3 0 0 1-.202.193L7.983 15.26l.757.757l2.422-2.677l.01-.012c.051-.056.118-.13.183-.19a1 1 0 0 1 .426-.24a.98.98 0 0 1 .737.1c.19.11.294.263.345.346c.047.075.091.165.125.232l.008.015l.374.748zm.622-1.854c.092-.027.34-.1.616-.008a.98.98 0 0 1 .624.624c.091.276.02.524-.008.616c-.032.107-.082.23-.125.338l-.008.02l-3.115 7.787l-.008.02a4 4 0 0 1-.138.32c-.044.087-.16.308-.409.444a.98.98 0 0 1-.87.036a1 1 0 0 1-.444-.408a4 4 0 0 1-.174-.327l-.504-1.008l-2.326 2.571c-.137.152-.284.29-.481.363a.98.98 0 0 1-.973-.18a14 14 0 0 1-1.633-1.633a.98.98 0 0 1-.18-.973c.074-.202.217-.35.373-.49l2.56-2.317l-1.007-.504l-.02-.01c-.1-.05-.214-.107-.307-.164a1 1 0 0 1-.408-.444a.98.98 0 0 1 .036-.87c.136-.249.357-.365.444-.409a4 4 0 0 1 .32-.138l.02-.008l7.787-3.115l.02-.008c.108-.043.231-.093.338-.125"></svg:path>`,
})
export class StashCursorArrowDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCursorArrowLightIcon],svg[stash-cursor-arrow-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.292 7.708L9.05 10.605l1.246.623l.013.006c.07.035.15.075.214.115c.07.044.183.122.262.258a.73.73 0 0 1 .075.55a.75.75 0 0 1-.183.318a3 3 0 0 1-.175.168l-.01.01l-2.872 2.598l1.128 1.128l2.598-2.871l.01-.01c.052-.059.112-.125.168-.176a.75.75 0 0 1 .318-.183a.73.73 0 0 1 .55.075a.74.74 0 0 1 .258.262c.04.064.08.144.115.214l.006.013l.623 1.246zm.245-1.165a.77.77 0 0 1 .465-.01c.22.072.393.245.466.465a.77.77 0 0 1-.01.465c-.03.096-.075.209-.12.32l-3.127 7.82a4 4 0 0 1-.131.304a.77.77 0 0 1-.306.338a.73.73 0 0 1-.649.027a.77.77 0 0 1-.332-.312c-.051-.082-.104-.188-.156-.291l-.675-1.35l-2.57 2.84c-.039.043-.086.095-.13.137a.7.7 0 0 1-.253.16a.73.73 0 0 1-.466.012a.7.7 0 0 1-.26-.148a2 2 0 0 1-.137-.13l-1.328-1.328l-.008-.008c-.041-.04-.09-.09-.13-.137a.7.7 0 0 1-.147-.26a.73.73 0 0 1 .011-.466c.043-.117.11-.2.16-.252c.042-.045.094-.092.137-.13l.008-.009l2.832-2.562l-1.334-.667l-.016-.008c-.103-.052-.209-.104-.291-.155a.77.77 0 0 1-.312-.333a.73.73 0 0 1 .027-.649a.77.77 0 0 1 .338-.306a4 4 0 0 1 .32-.137l7.803-3.121c.112-.045.225-.09.32-.12"></svg:path>`,
})
export class StashCursorArrowLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashCursorArrowSolidIcon],svg[stash-cursor-arrow-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.08 6.295a1 1 0 0 0-.615.008c-.107.032-.23.082-.338.125L8.3 9.558c-.104.042-.223.09-.32.14c-.087.043-.308.16-.444.408a.98.98 0 0 0-.036.87c.115.259.326.393.408.444c.093.057.208.115.308.165l1.026.513l-2.57 2.326a3 3 0 0 0-.15.144a1 1 0 0 0-.213.337a1 1 0 0 0-.015.626c.05.165.138.28.195.347c.047.056.104.113.143.152l1.338 1.338c.04.04.096.096.152.143a1 1 0 0 0 .347.195a1 1 0 0 0 .626-.015a1 1 0 0 0 .337-.212c.053-.05.107-.11.144-.151l2.326-2.57l.513 1.026c.05.1.108.215.165.308c.05.082.185.293.444.408a.98.98 0 0 0 .87-.036c.249-.136.365-.357.409-.444a4 4 0 0 0 .138-.32l3.131-7.827c.043-.108.093-.231.125-.338c.027-.092.1-.34.008-.616a.98.98 0 0 0-.624-.624"></svg:path>`,
})
export class StashCursorArrowSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDashboardIcon],svg[stash-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.943 10.498l-4.055 4.505A2 2 0 0 0 10 17h4a2 2 0 0 0-.603-1.431l3.66-4.067a.75.75 0 1 0-1.114-1.004M5 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm14.75.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H19a.75.75 0 0 0 .75-.75"></svg:path><svg:path fill="currentColor" d="M18 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2M7 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12.75 6a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M12 3.25C6.063 3.25 1.25 8.063 1.25 14c0 1.498.307 2.927.862 4.224l.005.012c.215.502.363.848.817 1.332c.183.195.439.39.677.548c.238.157.519.315.77.407c.624.227 1.168.227 1.937.227h11.364c.769 0 1.313 0 1.937-.227c.252-.092.532-.25.77-.407s.494-.353.677-.548c.454-.484.603-.83.817-1.332l.005-.012c.555-1.297.862-2.726.862-4.224c0-5.937-4.813-10.75-10.75-10.75M2.75 14a9.25 9.25 0 0 1 18.5 0c0 1.292-.264 2.52-.741 3.634c-.204.477-.267.62-.536.907c-.071.075-.22.197-.41.323c-.19.125-.36.214-.458.25c-.352.128-.632.136-1.502.136H6.397c-.87 0-1.15-.008-1.502-.136a2.6 2.6 0 0 1-.458-.25a2.6 2.6 0 0 1-.41-.323c-.269-.287-.332-.43-.536-.907A9.2 9.2 0 0 1 2.75 14"></svg:path>`,
})
export class StashDashboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDashboardDuotoneIcon],svg[stash-dashboard-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2-3.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2" opacity=".5"></svg:path><svg:path fill="currentColor" d="m15.943 10.498l-4.055 4.505A2 2 0 0 0 10 17h4a2 2 0 0 0-.603-1.431l3.66-4.067a.75.75 0 1 0-1.114-1.004M5 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm14.75.75a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H19a.75.75 0 0 0 .75-.75m-7-10a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0z"></svg:path><svg:path fill="currentColor" d="M12 3.25C6.063 3.25 1.25 8.063 1.25 14c0 1.498.307 2.927.862 4.224l.005.012c.215.502.363.848.817 1.332c.183.195.439.39.677.548c.238.157.519.315.77.407c.624.227 1.168.227 1.937.227h11.364c.769 0 1.313 0 1.937-.227c.252-.092.532-.25.77-.407s.494-.353.677-.548c.454-.484.603-.83.817-1.332l.005-.012c.555-1.297.862-2.726.862-4.224c0-5.937-4.813-10.75-10.75-10.75M2.75 14a9.25 9.25 0 0 1 18.5 0c0 1.292-.264 2.52-.741 3.634c-.204.477-.267.62-.536.907c-.071.075-.22.197-.41.323c-.19.125-.36.214-.458.25c-.352.128-.632.136-1.502.136H6.397c-.87 0-1.15-.008-1.502-.136a2.6 2.6 0 0 1-.458-.25a2.6 2.6 0 0 1-.41-.323c-.269-.287-.332-.43-.536-.907A9.2 9.2 0 0 1 2.75 14"></svg:path>`,
})
export class StashDashboardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDashboardLightIcon],svg[stash-dashboard-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15q.11 0 .217.012l3.911-4.347a.5.5 0 1 1 .744.67l-3.664 4.07A2 2 0 0 1 14 17h-4a2 2 0 0 1 2-2m-7 .5a.5.5 0 0 0 0 1h1.5a.5.5 0 0 0 0-1zm14.5.5a.5.5 0 0 0-.5-.5h-1.5a.5.5 0 0 0 0 1H19a.5.5 0 0 0 .5-.5M18 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2M7 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0M12.5 6a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 1 0z"></svg:path><svg:path fill="currentColor" d="M12 3.5C6.201 3.5 1.5 8.201 1.5 14c0 1.464.3 2.859.842 4.126l.004.009c.212.497.346.81.77 1.261c.165.176.402.36.632.511s.493.298.719.38c.582.213 1.084.213 1.871.213h11.324c.787 0 1.29 0 1.871-.212c.226-.083.488-.229.718-.38c.23-.153.468-.336.633-.512c.424-.45.558-.764.77-1.261l.004-.009c.542-1.267.842-2.662.842-4.126c0-5.799-4.701-10.5-10.5-10.5M2.5 14a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-.761 3.733c-.206.481-.284.66-.584.979c-.09.095-.256.23-.454.36a2.7 2.7 0 0 1-.51.276c-.4.146-.728.152-1.588.152H6.397c-.86 0-1.187-.006-1.587-.152a2.8 2.8 0 0 1-.51-.275a2.8 2.8 0 0 1-.455-.361c-.3-.32-.378-.498-.584-.98A9.5 9.5 0 0 1 2.5 14"></svg:path>`,
})
export class StashDashboardLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataBooleanIcon],svg[stash-data-boolean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 12.25a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 12.25a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path>`,
})
export class StashDataBooleanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataBooleanDuotoneIcon],svg[stash-data-boolean-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 12.25a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 8.25a4 4 0 1 0 4 4a4 4 0 1 0 8 0a4 4 0 0 0-8 0a4 4 0 0 0-4-4m-2.5 4a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m8 0a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashDataBooleanDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataBooleanLightIcon],svg[stash-data-boolean-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 12.25a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M8 9.5A2.75 2.75 0 1 0 8 15a2.75 2.75 0 0 0 0-5.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 8.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"></svg:path>`,
})
export class StashDataBooleanLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataBooleanSolidIcon],svg[stash-data-boolean-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 12.25A4.25 4.25 0 0 1 12 10.81a4.252 4.252 0 0 1 8.25 1.44A4.25 4.25 0 0 1 12 13.69a4.252 4.252 0 0 1-8.25-1.44M8 10a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 0 0 8 10" clip-rule="evenodd"></svg:path>`,
})
export class StashDataBooleanSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataDateIcon],svg[stash-data-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 3.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12 17.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.25a.75.75 0 0 1 .75.75v.75h6.5V4a.75.75 0 0 1 1.5 0v.758q.228.006.425.022c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v7.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H8.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.344V8.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 5.752 5.05c.337-.172.693-.24 1.073-.27q.197-.016.425-.022V4A.75.75 0 0 1 8 3.25M7.25 6.5v-.242a6 6 0 0 0-.303.017c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v.55h12.5V8.7c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111a6 6 0 0 0-.302-.017V6.5a.75.75 0 0 1-1.5 0v-.25h-6.5v.25a.75.75 0 0 1-1.5 0m11 3.75H5.75v6.05c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h7.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 7.75A.75.75 0 0 1 10.5 7h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StashDataDateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataDateDuotoneIcon],svg[stash-data-date-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.25 6.258V6.5a.75.75 0 0 0 1.5 0v-.25h6.5v.25a.75.75 0 0 0 1.5 0v-.242q.166.006.302.017c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253v.55H5.75V8.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111a6 6 0 0 1 .303-.017M10.5 7a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M8.5 14a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 3.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12 17.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.25a.75.75 0 0 1 .75.75v.75h6.5V4a.75.75 0 0 1 1.5 0v.758q.228.006.425.022c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v7.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H8.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.344V8.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 5.752 5.05c.337-.172.693-.24 1.073-.27q.197-.016.425-.022V4A.75.75 0 0 1 8 3.25M7.25 6.5v-.242a6 6 0 0 0-.303.017c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v.55h12.5V8.7c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111a6 6 0 0 0-.302-.017V6.5a.75.75 0 0 1-1.5 0v-.25h-6.5v.25a.75.75 0 0 1-1.5 0m11 3.75H5.75v6.05c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h7.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252z" clip-rule="evenodd"></svg:path>`,
})
export class StashDataDateDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataDateLightIcon],svg[stash-data-date-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7.25a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm-1 5.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.5-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m1 2.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2.5-2.5a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.5a.5.5 0 0 1 .5.5v1h7V4a.5.5 0 0 1 1 0v1.003q.367.003.654.026c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.029.355.029.792.029 1.334v7.642c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244c-.355.029-.792.029-1.333.029H8.179c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98C4.5 17.3 4.5 16.862 4.5 16.32V8.68c0-.475 0-.868.02-1.197l.009-.136c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243q.289-.023.655-.026V4a.5.5 0 0 1 .5-.5m-.5 3v-.497a9 9 0 0 0-.573.023c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C5.5 7.736 5.5 8.132 5.5 8.7v.55h13V8.7c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137a9 9 0 0 0-.573-.023V6.5a.5.5 0 0 1-1 0V6h-7v.5a.5.5 0 0 1-1 0m11 3.75h-13v6.05c0 .568 0 .965.026 1.273c.024.302.07.476.137.608a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137C7.236 19 7.632 19 8.2 19h7.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.067-.132.113-.306.137-.608c.026-.308.026-.705.026-1.273z" clip-rule="evenodd"></svg:path>`,
})
export class StashDataDateLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataDateSolidIcon],svg[stash-data-date-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 14a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 3.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12 17.5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m4.75-4.75a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 3.25a.75.75 0 0 1 .75.75v.75h6.5V4a.75.75 0 0 1 1.5 0v.758q.228.006.425.022c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v7.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H8.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.344V8.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 5.752 5.05c.337-.172.693-.24 1.073-.27q.197-.016.425-.022V4A.75.75 0 0 1 8 3.25m10.25 7H5.75v6.05c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h7.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252zM10.5 7a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StashDataDateSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataNumbersIcon],svg[stash-data-numbers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.68 8.25a.75.75 0 0 1 .75-.75h.952c.93 0 1.702.744 1.702 1.688v6.562a.75.75 0 0 1-1.5 0V9.188A.195.195 0 0 0 4.382 9H3.43a.75.75 0 0 1-.75-.75m5.714 0a.75.75 0 0 1 .75-.75h2.857c.93 0 1.703.744 1.703 1.688v1.874c0 .944-.774 1.688-1.703 1.688h-1.905a.195.195 0 0 0-.202.188v1.874c0 .093.08.188.202.188h2.858a.75.75 0 0 1 0 1.5h-2.858a1.694 1.694 0 0 1-1.702-1.687v-1.876c0-.943.773-1.687 1.702-1.687h1.905a.195.195 0 0 0 .203-.187V9.187A.195.195 0 0 0 12 9H9.144a.75.75 0 0 1-.75-.75m7.619 0a.75.75 0 0 1 .75-.75h2.857c.93 0 1.703.744 1.703 1.688v5.624c0 .944-.774 1.688-1.703 1.688h-2.857a.75.75 0 0 1 0-1.5h2.857a.195.195 0 0 0 .203-.187V12.75h-3.06a.75.75 0 0 1 0-1.5h3.06V9.188A.195.195 0 0 0 19.62 9h-2.857a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StashDataNumbersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataNumbersDuotoneIcon],svg[stash-data-numbers-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.43 8.25a1 1 0 0 1 1-1h.952c1.063 0 1.952.853 1.952 1.938v6.562a1 1 0 1 1-2 0v-6.5H3.43a1 1 0 0 1-1-1m5.714 0a1 1 0 0 1 1-1h2.857c1.064 0 1.953.853 1.953 1.938v1.874A1.945 1.945 0 0 1 12 13h-1.857v1.75h2.81a1 1 0 1 1 0 2h-2.858a1.945 1.945 0 0 1-1.952-1.937v-1.876c0-1.084.889-1.937 1.952-1.937h1.858V9.25h-2.81a1 1 0 0 1-1-1m7.619 0a1 1 0 0 1 1-1h2.857c1.063 0 1.953.853 1.953 1.938v5.624a1.945 1.945 0 0 1-1.953 1.938h-2.857a1 1 0 1 1 0-2h2.81V13h-2.81a1 1 0 1 1 0-2h2.81V9.25h-2.81a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StashDataNumbersDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataNumbersLightIcon],svg[stash-data-numbers-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.93 8.25a.5.5 0 0 1 .5-.5h.952c.795 0 1.452.636 1.452 1.438v6.562a.5.5 0 0 1-1 0V9.188a.445.445 0 0 0-.452-.438H3.43a.5.5 0 0 1-.5-.5m5.714 0a.5.5 0 0 1 .5-.5h2.857c.795 0 1.453.636 1.453 1.438v1.874c0 .802-.658 1.438-1.453 1.438h-1.905a.445.445 0 0 0-.452.438v1.874c0 .235.195.438.452.438h2.858a.5.5 0 0 1 0 1h-2.858a1.445 1.445 0 0 1-1.452-1.437v-1.876c0-.8.658-1.437 1.452-1.437h1.905a.445.445 0 0 0 .453-.437V9.187A.445.445 0 0 0 12 8.75H9.144a.5.5 0 0 1-.5-.5m7.619 0a.5.5 0 0 1 .5-.5h2.857c.795 0 1.453.636 1.453 1.438v5.624c0 .802-.658 1.438-1.453 1.438h-2.857a.5.5 0 0 1 0-1h2.857a.445.445 0 0 0 .453-.437V12.5h-3.31a.5.5 0 0 1 0-1h3.31V9.188a.445.445 0 0 0-.453-.438h-2.857a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class StashDataNumbersLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataNumbersSolidIcon],svg[stash-data-numbers-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.43 8.25a1 1 0 0 1 1-1h.953c1.063 0 1.952.853 1.952 1.938v6.562a1 1 0 1 1-2 0v-6.5H3.43a1 1 0 0 1-1-1m5.714 0a1 1 0 0 1 1-1h2.858c1.063 0 1.952.853 1.952 1.938v1.874A1.945 1.945 0 0 1 12.002 13h-1.857v1.75h2.809a1 1 0 1 1 0 2h-2.857a1.945 1.945 0 0 1-1.953-1.937v-1.876c0-1.084.89-1.937 1.953-1.937h1.857V9.25h-2.81a1 1 0 0 1-1-1m7.62 0a1 1 0 0 1 1-1h2.857c1.063 0 1.952.853 1.952 1.938v5.624a1.945 1.945 0 0 1-1.952 1.938h-2.857a1 1 0 1 1 0-2h2.809V13h-2.81a1 1 0 1 1 0-2h2.81V9.25h-2.81a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path>`,
})
export class StashDataNumbersSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataTextIcon],svg[stash-data-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6.75a.75.75 0 0 0-.711.513l-3 9a.75.75 0 0 0 1.423.474L6.29 15h4.169l.579 1.737a.75.75 0 0 0 1.423-.474l-3-9a.75.75 0 0 0-.712-.513zm1.96 6.75H6.79l1.585-4.753zm6.415-3.75a3.1 3.1 0 0 1 1.884.633a.75.75 0 0 1 1.491.117v6a.75.75 0 0 1-1.49.117a3.1 3.1 0 0 1-1.885.633C14.42 17.25 13 15.474 13 13.5s1.42-3.75 3.375-3.75M14.5 13.5c0-1.34.93-2.25 1.875-2.25s1.875.91 1.875 2.25s-.93 2.25-1.875 2.25c-.944 0-1.875-.91-1.875-2.25" clip-rule="evenodd"></svg:path>`,
})
export class StashDataTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataTextDuotoneIcon],svg[stash-data-text-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 6.5a1 1 0 0 0-.949.684l-3 9a1 1 0 0 0 1.897.632l.523-1.566h3.808l.522 1.566a1 1 0 1 0 1.897-.632l-3-9A1 1 0 0 0 8.75 6.5zm.375 3.037l1.237 3.713H7.137zm8-.037c.654 0 1.25.183 1.76.496A1 1 0 0 1 20 10.5v6a1 1 0 0 1-1.864.504a3.34 3.34 0 0 1-1.761.496c-2.123 0-3.625-1.92-3.625-4s1.502-4 3.625-4m-1.625 4c0-1.234.849-2 1.625-2s1.625.766 1.625 2s-.849 2-1.625 2s-1.625-.766-1.625-2" clip-rule="evenodd"></svg:path>`,
})
export class StashDataTextDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataTextLightIcon],svg[stash-data-text-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.526 7.342A.5.5 0 0 1 8 7h.75a.5.5 0 0 1 .474.342l3 9a.5.5 0 0 1-.948.316l-.636-1.908H6.11l-.636 1.908a.5.5 0 1 1-.948-.316zM6.444 13.75h3.862L8.39 8h-.03zM16.375 11c-1.113 0-2.125 1.055-2.125 2.5s1.012 2.5 2.125 2.5s2.125-1.055 2.125-2.5s-1.012-2.5-2.125-2.5m2.125-.068c-.549-.574-1.288-.932-2.125-.932c-1.786 0-3.125 1.632-3.125 3.5s1.34 3.5 3.125 3.5c.837 0 1.576-.358 2.125-.932v.432a.5.5 0 0 0 1 0v-6a.5.5 0 1 0-1 0z" clip-rule="evenodd"></svg:path>`,
})
export class StashDataTextLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDataTextSolidIcon],svg[stash-data-text-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.814 7.105A1.25 1.25 0 0 1 8 6.25h.75a1.25 1.25 0 0 1 1.186.855l3 9a1.25 1.25 0 0 1-2.372.79l-.465-1.395H6.65l-.465 1.395a1.25 1.25 0 1 1-2.372-.79zM7.484 13h1.782l-.891-2.672zm8.89-1.25c-.607 0-1.374.621-1.374 1.75s.767 1.75 1.375 1.75s1.375-.621 1.375-1.75s-.767-1.75-1.375-1.75m1.693-2.082a3.6 3.6 0 0 0-1.692-.418c-2.292 0-3.875 2.065-3.875 4.25s1.583 4.25 3.875 4.25c.622 0 1.192-.152 1.692-.418a1.25 1.25 0 0 0 2.183-.832v-6a1.25 1.25 0 0 0-2.183-.832" clip-rule="evenodd"></svg:path>`,
})
export class StashDataTextSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDesktopIcon],svg[stash-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.175 2.78c-.365-.03-.81-.03-1.345-.03H7.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 3.55 4.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345V13l.004.077q.005.329.026.598c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.345.03h3.248a1.75 1.75 0 0 0 3.164 0h3.249c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074q.021-.27.026-.598L20.75 13V6.57c0-.49-.002-.903-.03-1.245c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27M13 14.75H7.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.546a1 1 0 0 1-.09-.318h14.407a1 1 0 0 1-.09.318a1.25 1.25 0 0 1-.546.546c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025zm6.25-2.5H4.75V6.595c0-.515.002-.87.025-1.148c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h9.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253z"></svg:path><svg:path fill="currentColor" d="M10 16.75a.75.75 0 0 1 .75.75v.284c0 .818-.43 1.555-1.099 1.966h4.698a2.31 2.31 0 0 1-1.099-1.966V17.5a.75.75 0 0 1 1.5 0v.284c0 .37.252.693.611.783l.396.1a1.311 1.311 0 0 1-.319 2.583H8.562a1.312 1.312 0 0 1-.319-2.584l.396-.099a.81.81 0 0 0 .611-.783V17.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDesktopCheckIcon],svg[stash-desktop-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.4 5.35a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-2.146-1.354a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.707 0l-1-1a.5.5 0 1 1 .707-.708l.646.647l1.647-1.647a.5.5 0 0 1 .707 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.57 4.1h6.96a6 6 0 0 0-.125 1.5H5.6c-.572 0-.957 0-1.252.025c-.288.023-.425.065-.515.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.023.278-.025.633-.025 1.148V13.6h14.5v-2.296a6 6 0 0 0 1.5 0v3.046l-.004.077q-.005.329-.026.598c-.03.38-.098.736-.27 1.074a2.75 2.75 0 0 1-1.202 1.201c-.337.172-.693.24-1.073.27c-.364.03-.81.03-1.344.03h-3.25a1.75 1.75 0 0 1-3.163 0H5.57c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074a10 10 0 0 1-.026-.598l-.004-.077V8.02c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.152 4.4c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03m.03 12c-.572 0-.957 0-1.252-.025c-.288-.023-.425-.065-.515-.111a1.25 1.25 0 0 1-.547-.546a1 1 0 0 1-.09-.318h14.407a1 1 0 0 1-.09.318a1.25 1.25 0 0 1-.546.546c-.09.046-.227.088-.514.111c-.296.024-.68.025-1.253.025z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.4 18.1a.75.75 0 0 1 .75.75v.284c0 .818-.43 1.555-1.099 1.966h4.698a2.31 2.31 0 0 1-1.099-1.966v-.284a.75.75 0 0 1 1.5 0v.284c0 .37.252.693.611.783l.396.1a1.311 1.311 0 0 1-.319 2.583H6.962a1.312 1.312 0 0 1-.319-2.584l.396-.099a.81.81 0 0 0 .611-.783v-.284a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashDesktopCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDesktopCheckDuotoneIcon],svg[stash-desktop-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.25 11.5v3h-16V8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.77 5 4.33 5 5.45 5h6.82q-.02.248-.02.5a6 6 0 0 0 6 6" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22.25 5.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-2.146-1.354a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.42 4.25h6.96a6 6 0 0 0-.125 1.5H5.45c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514A16 16 0 0 0 3 8.095v5.655h14.5v-2.296a6 6 0 0 0 1.5 0V14.5l-.004.077q-.005.329-.026.598c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.2 1.202c-.338.172-.694.24-1.074.27c-.364.03-.81.03-1.344.03h-3.25a1.75 1.75 0 0 1-3.163 0H5.42c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074a10 10 0 0 1-.026-.598L1.5 14.5V8.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.002 4.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03m10.882 11.975c-.295.024-.68.025-1.252.025h-9.6c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.546a1 1 0 0 1-.09-.318h14.407a1 1 0 0 1-.09.318a1.25 1.25 0 0 1-.546.546c-.09.046-.227.088-.515.111" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.25 18.25A.75.75 0 0 1 9 19v.284c0 .818-.43 1.555-1.099 1.966h4.698a2.31 2.31 0 0 1-1.099-1.966V19a.75.75 0 0 1 1.5 0v.284c0 .37.252.693.611.783l.396.1a1.311 1.311 0 0 1-.319 2.583H6.812a1.312 1.312 0 0 1-.319-2.584l.396-.099a.81.81 0 0 0 .611-.783V19a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashDesktopCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDesktopCheckLightIcon],svg[stash-desktop-check-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.25 5.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-2.146-1.354a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.429 4.5h6.904q-.083.489-.083 1h-6.8c-.568 0-.964 0-1.273.026c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.062.123-.107.284-.133.553l-.004.055c-.024.29-.026.656-.026 1.168V14h15v-2.52a6 6 0 0 0 1 0v3.02q0 .03-.004.06a9 9 0 0 1-.025.594c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244c-.355.029-.792.029-1.334.029h-3.406a1.5 1.5 0 0 1-2.83 0H5.43c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98a9 9 0 0 1-.025-.594L1.75 14.5V8.179c0-.542 0-.98.029-1.333c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243C4.45 4.5 4.888 4.5 5.43 4.5m9.621 12h-9.6c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.305-.137-.608L2.77 15h14.96l-.003.033l-.003.04c-.024.303-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M8.25 18.5a.5.5 0 0 1 .5.5v.284c0 .944-.642 1.767-1.558 1.996l-.395.099a.062.062 0 0 0 .015.121h6.876a.062.062 0 0 0 .015-.121l-.395-.1a2.06 2.06 0 0 1-1.558-1.995V19a.5.5 0 0 1 1 0v.284c0 .485.33.908.8 1.026l.396.099a1.061 1.061 0 0 1-.258 2.091H6.812a1.062 1.062 0 0 1-.258-2.091l.395-.1c.47-.117.801-.54.801-1.025V19a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashDesktopCheckLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDesktopCheckSolidIcon],svg[stash-desktop-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M22.25 5.5a4 4 0 1 0-8 0a4 4 0 0 0 8 0m-2.146-1.354a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647l1.646-1.647a.5.5 0 0 1 .708 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.25 11.5q.381 0 .75-.046V14.5l-.004.077q-.005.329-.026.598c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.2 1.202c-.338.172-.694.24-1.074.27c-.364.03-.81.03-1.344.03h-3.25a1.75 1.75 0 0 1-3.163 0H5.42c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074a10 10 0 0 1-.026-.598L1.5 14.5V8.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.002 4.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03h6.96q-.129.606-.13 1.25a6 6 0 0 0 6 6m-3.2 4.75c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.546c.034-.067.065-.16.09-.318H3.046c.024.159.055.25.09.318c.12.235.31.426.546.546c.09.046.227.088.514.111c.296.024.68.025 1.253.025z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 19a.75.75 0 0 0-1.5 0v.284c0 .37-.252.693-.611.783l-.396.1a1.311 1.311 0 0 0 .319 2.583h6.876a1.312 1.312 0 0 0 .319-2.584l-.396-.099a.81.81 0 0 1-.611-.783V19a.75.75 0 0 0-1.5 0v.284c0 .818.43 1.555 1.099 1.966H7.901A2.31 2.31 0 0 0 9 19.284z"></svg:path>`,
})
export class StashDesktopCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDesktopDuotoneIcon],svg[stash-desktop-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 3.5 6.08 3.5 7.2 3.5h9.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 5.02 20 5.58 20 6.7V13H4z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M18.175 2.78c-.365-.03-.81-.03-1.345-.03H7.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 3.55 4.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345V13l.004.077q.005.329.026.598c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.345.03h3.248a1.75 1.75 0 0 0 3.164 0h3.249c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074q.021-.27.026-.598L20.75 13V6.57c0-.49-.002-.903-.03-1.245c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27M13 14.75H7.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.546a1 1 0 0 1-.09-.318h14.407a1 1 0 0 1-.09.318a1.25 1.25 0 0 1-.546.546c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025zm6.25-2.5H4.75V6.595c0-.515.002-.87.025-1.148c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h9.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253z"></svg:path><svg:path fill="currentColor" d="M10 16.75a.75.75 0 0 1 .75.75v.284c0 .818-.43 1.555-1.099 1.966h4.698a2.31 2.31 0 0 1-1.099-1.966V17.5a.75.75 0 0 1 1.5 0v.284c0 .37.252.693.611.783l.396.1a1.311 1.311 0 0 1-.319 2.583H8.562a1.312 1.312 0 0 1-.319-2.584l.396-.099a.81.81 0 0 0 .611-.783V17.5a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashDesktopDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDesktopLightIcon],svg[stash-desktop-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.154 3.029C17.8 3 17.364 3 16.821 3H7.18c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.243a2.5 2.5 0 0 0-1.093 1.093c-.15.296-.213.616-.243.98c-.03.355-.03.793-.03 1.335V13q0 .03.004.06q.003.33.025.594c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244C6.2 16 6.638 16 7.18 16h3.406a1.5 1.5 0 0 0 2.83 0h3.406c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98a9 9 0 0 0 .025-.594L20.5 13V6.578c0-.496-.002-.9-.029-1.232c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243M16.8 15H7.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.138a1.5 1.5 0 0 1-.656-.655c-.067-.132-.113-.305-.137-.608L4.52 13.5h14.96l-.003.033l-.003.04c-.024.303-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026m2.7-2.5h-15V6.595a16 16 0 0 1 .03-1.223c.026-.269.07-.43.133-.553a1.5 1.5 0 0 1 .656-.656c.132-.067.306-.113.608-.137C6.236 4 6.632 4 7.2 4h9.6c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273z"></svg:path><svg:path fill="currentColor" d="M10 17a.5.5 0 0 1 .5.5v.284c0 .944-.642 1.767-1.558 1.996l-.395.099a.062.062 0 0 0 .015.121h6.876a.062.062 0 0 0 .015-.121l-.395-.1a2.06 2.06 0 0 1-1.558-1.995V17.5a.5.5 0 0 1 1 0v.284c0 .485.33.908.8 1.026l.396.099A1.061 1.061 0 0 1 15.438 21H8.562a1.062 1.062 0 0 1-.258-2.091l.395-.1c.47-.117.801-.54.801-1.025V17.5a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashDesktopLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDesktopSolidIcon],svg[stash-desktop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.83 2.75c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.028.342.03.755.03 1.245V13l-.004.077q-.005.329-.026.598c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.364.03-.81.03-1.344.03h-3.25a1.75 1.75 0 0 1-3.163 0H7.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074a10 10 0 0 1-.026-.598L3.25 13V6.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 4.752 3.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03zm-.03 12c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.546c.034-.067.065-.16.09-.318H4.796c.024.159.055.25.09.318c.12.235.31.426.546.546c.09.046.227.088.514.111c.296.024.68.025 1.253.025z"></svg:path><svg:path fill="currentColor" d="M10.75 17.5a.75.75 0 0 0-1.5 0v.284c0 .37-.252.693-.611.783l-.396.1a1.311 1.311 0 0 0 .319 2.583h6.876a1.312 1.312 0 0 0 .319-2.584l-.396-.099a.81.81 0 0 1-.611-.783V17.5a.75.75 0 0 0-1.5 0v.284c0 .818.43 1.555 1.099 1.966H9.651a2.31 2.31 0 0 0 1.099-1.966z"></svg:path>`,
})
export class StashDesktopSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDivideIcon],svg[stash-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m-.75 2.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m-6 4.5a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m4.5 4.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5"></svg:path>`,
})
export class StashDivideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDivideDuotoneIcon],svg[stash-divide-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-.5 2.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M5 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m4.5 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M12 16a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class StashDivideDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDivideLightIcon],svg[stash-divide-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-1 2a1 1 0 1 1 2 0a1 1 0 0 1-2 0M5.5 12a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5m4.5 4.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class StashDivideLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDivideSolidIcon],svg[stash-divide-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m-.5 2.5a.5.5 0 1 1 1 0a.5.5 0 0 1-1 0M4.75 12c0-.69.56-1.25 1.25-1.25h12a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25m4.75 4.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0M12 16a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1"></svg:path>`,
})
export class StashDivideSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDollarSignIcon],svg[stash-dollar-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.994 4a.89.89 0 0 1 .89.889V6.37h.299a3.253 3.253 0 0 1 3.256 3.26a.889.889 0 0 1-1.778 0c0-.823-.66-1.482-1.478-1.482h-2.676c-.651 0-1.18.53-1.18 1.176c0 .485.109.682.186.777c.09.11.255.222.615.344l4.3 1.425c.48.163 1.018.41 1.42.901c.416.506.59 1.148.59 1.905a2.957 2.957 0 0 1-2.956 2.954h-.599v1.481a.889.889 0 1 1-1.778 0V17.63h-.3a3.253 3.253 0 0 1-3.255-3.26a.889.889 0 0 1 1.778 0c0 .823.659 1.482 1.478 1.482h2.676c.65 0 1.179-.53 1.179-1.176c0-.485-.108-.682-.186-.777c-.09-.11-.255-.222-.615-.344L9.561 12.13c-.48-.163-1.019-.41-1.421-.901c-.416-.506-.59-1.148-.59-1.905a2.957 2.957 0 0 1 2.957-2.954h.598V4.89a.89.89 0 0 1 .89-.889"></svg:path>`,
})
export class StashDollarSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDollarSignDuotoneIcon],svg[stash-dollar-sign-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.994 4a.89.89 0 0 1 .89.889V6.37h.299a3.253 3.253 0 0 1 3.256 3.26a.889.889 0 0 1-1.778 0c0-.823-.66-1.482-1.478-1.482h-2.676c-.651 0-1.18.53-1.18 1.176c0 .485.109.682.186.777c.09.11.255.222.615.344l4.3 1.425c.48.163 1.018.41 1.42.901c.416.506.59 1.148.59 1.905a2.957 2.957 0 0 1-2.956 2.954h-.599v1.481a.889.889 0 1 1-1.778 0V17.63h-.3a3.253 3.253 0 0 1-3.255-3.26a.889.889 0 0 1 1.778 0c0 .823.659 1.482 1.478 1.482h2.676c.65 0 1.179-.53 1.179-1.176c0-.485-.108-.682-.186-.777c-.09-.11-.255-.222-.615-.344L9.561 12.13c-.48-.163-1.019-.41-1.421-.901c-.416-.506-.59-1.148-.59-1.905a2.957 2.957 0 0 1 2.957-2.954h.598V4.89a.89.89 0 0 1 .89-.889"></svg:path>`,
})
export class StashDollarSignDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDollarSignLightIcon],svg[stash-dollar-sign-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.011 4c.361 0 .653.276.653.615v1.847h.657c1.807 0 3.262 1.375 3.262 3.076c0 .34-.293.616-.653.616s-.653-.276-.653-.616c0-1.024-.872-1.846-1.956-1.846h-2.949c-.897 0-1.626.687-1.626 1.53c0 .55.131.832.279 1c.157.18.407.321.826.455l4.737 1.48c.508.161 1.033.396 1.419.839c.396.454.576 1.044.576 1.782c0 1.524-1.316 2.76-2.933 2.76h-.986v1.847c0 .34-.292.615-.653.615c-.36 0-.653-.276-.653-.615v-1.847h-.657c-1.807 0-3.261-1.375-3.261-3.077c0-.34.292-.615.653-.615c.36 0 .653.276.653.615c0 1.024.872 1.847 1.955 1.847h2.95c.897 0 1.626-.687 1.626-1.53c0-.55-.132-.832-.28-1c-.156-.18-.406-.321-.826-.455l-4.736-1.48c-.508-.161-1.033-.396-1.42-.839c-.395-.454-.575-1.044-.575-1.782c0-1.525 1.316-2.76 2.932-2.76h.986V4.615c0-.34.293-.615.653-.615"></svg:path>`,
})
export class StashDollarSignLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDollarSignSolidIcon],svg[stash-dollar-sign-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.444 4c.614 0 1.112.512 1.112 1.143v1.143h.003c1.845 0 3.33 1.534 3.33 3.428c0 .631-.498 1.143-1.111 1.143c-.614 0-1.111-.511-1.111-1.143c0-.636-.494-1.143-1.108-1.143H11.05a.84.84 0 0 0-.828.849c0 .424.091.542.111.567c.036.045.132.131.45.243l4.031 1.374c.47.163 1.033.424 1.459.958c.442.554.616 1.245.616 2.018c0 1.732-1.369 3.134-3.05 3.134h-.283v1.143c0 .631-.498 1.143-1.112 1.143c-.613 0-1.11-.512-1.11-1.143v-1.143h-.004c-1.845 0-3.33-1.533-3.33-3.428c0-.631.497-1.143 1.111-1.143s1.111.511 1.111 1.143c0 .636.494 1.143 1.108 1.143h2.509a.84.84 0 0 0 .828-.849c0-.424-.091-.542-.111-.567c-.036-.045-.132-.131-.45-.243l-4.031-1.374c-.47-.163-1.033-.424-1.459-.958C8.174 10.884 8 10.193 8 9.42c0-1.732 1.369-3.134 3.05-3.134h.283V5.143c0-.631.498-1.143 1.111-1.143"></svg:path>`,
})
export class StashDollarSignSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDomainIcon],svg[stash-domain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4.719-3.738a1.73 1.73 0 0 0-2.458 0a1.757 1.757 0 0 0 0 2.476a1.73 1.73 0 0 0 2.458 0a.75.75 0 0 1 1.062 1.059a3.23 3.23 0 0 1-4.583 0a3.257 3.257 0 0 1 0-4.594a3.23 3.23 0 0 1 4.583 0a.75.75 0 0 1-1.062 1.059M8.5 11.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m3.25-1.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M18 8.25c-1.395 0-2.5 1.15-2.5 2.536V14a.75.75 0 0 0 1.5 0v-3.214c0-.587.462-1.036 1-1.036s1 .45 1 1.036V14a.75.75 0 0 0 1.5 0v-3.214c0-.587.462-1.036 1-1.036s1 .45 1 1.036V14a.75.75 0 0 0 1.5 0v-3.214C24 9.4 22.895 8.25 21.5 8.25c-.686 0-1.301.278-1.75.725A2.47 2.47 0 0 0 18 8.25"></svg:path>`,
})
export class StashDomainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDomainDuotoneIcon],svg[stash-domain-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M6.719 10.262a1.73 1.73 0 0 0-2.458 0a1.757 1.757 0 0 0 0 2.476a1.73 1.73 0 0 0 2.458 0a.75.75 0 0 1 1.062 1.059a3.23 3.23 0 0 1-4.583 0a3.257 3.257 0 0 1 0-4.594a3.23 3.23 0 0 1 4.583 0a.75.75 0 0 1-1.062 1.059M8.5 11.5a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0m3.25-1.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5M18 8.25c-1.395 0-2.5 1.15-2.5 2.536V14a.75.75 0 0 0 1.5 0v-3.214c0-.587.462-1.036 1-1.036s1 .45 1 1.036V14a.75.75 0 0 0 1.5 0v-3.214c0-.587.462-1.036 1-1.036s1 .45 1 1.036V14a.75.75 0 0 0 1.5 0v-3.214C24 9.4 22.895 8.25 21.5 8.25c-.686 0-1.301.278-1.75.725A2.47 2.47 0 0 0 18 8.25"></svg:path>`,
})
export class StashDomainDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDomainLightIcon],svg[stash-domain-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 11.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7.667.585a1.98 1.98 0 0 1 2.813 0a.5.5 0 1 0 .708-.706a2.98 2.98 0 0 0-4.23 0a3.007 3.007 0 0 0 0 4.242a2.98 2.98 0 0 0 4.23 0a.5.5 0 1 0-.708-.706c-.777.78-2.036.78-2.813 0a2.01 2.01 0 0 1 0-2.83M1 15a1 1 0 1 0 0-2a1 1 0 0 0 0 2m17-6.5c-1.252 0-2.25 1.033-2.25 2.286V14a.5.5 0 1 0 1 0v-3.214c0-.72.57-1.286 1.25-1.286s1.25.566 1.25 1.286V14a.5.5 0 0 0 1 0v-3.214c0-.72.57-1.286 1.25-1.286s1.25.566 1.25 1.286V14a.5.5 0 0 0 1 0v-3.214c0-1.253-.998-2.286-2.25-2.286c-.71 0-1.34.333-1.75.85A2.23 2.23 0 0 0 18 8.5"></svg:path>`,
})
export class StashDomainLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDragSquaresHorizontalIcon],svg[stash-drag-squares-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.28 6.75h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.547.546c-.176.09-.348.116-.478.127c-.114.01-.247.009-.369.009H5.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.546a1.3 1.3 0 0 1-.127-.479a5 5 0 0 1-.009-.369V8.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009m-.03 1.5v1.5h1.5v-1.5zm6.03-1.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.546.546c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.479a5 5 0 0 1-.009-.369V8.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009m-.03 1.5v1.5h1.5v-1.5zm6.03-1.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.547.546c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.546a1.3 1.3 0 0 1-.127-.479c-.01-.114-.009-.247-.009-.369V8.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.477-.127c.115-.01.248-.009.37-.009m-.03 1.5v1.5h1.5v-1.5zm-11.97 4.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.547.547c-.176.09-.348.116-.478.127c-.114.01-.247.009-.369.009H5.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.547a1.3 1.3 0 0 1-.127-.477a5 5 0 0 1-.009-.37v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009m-.03 1.5v1.5h1.5v-1.5zm6.03-1.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.546.547c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.547a1.3 1.3 0 0 1-.127-.477a5 5 0 0 1-.009-.37v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009m-.03 1.5v1.5h1.5v-1.5zm6.03-1.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.547.547c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.547a1.3 1.3 0 0 1-.127-.477c-.01-.115-.009-.248-.009-.37v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.477-.127c.115-.01.248-.009.37-.009m-.03 1.5v1.5h1.5v-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StashDragSquaresHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDragSquaresHorizontalDuotoneIcon],svg[stash-drag-squares-horizontal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 8.25h1.5v1.5h-1.5zm6 0h1.5v1.5h-1.5zm6 0h1.5v1.5h-1.5zm-12 6h1.5v1.5h-1.5zm6 0h1.5v1.5h-1.5zm6 0h1.5v1.5h-1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M5.28 6.75h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.547.546c-.176.09-.348.116-.478.127c-.114.01-.247.009-.369.009H5.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.546a1.3 1.3 0 0 1-.127-.479a5 5 0 0 1-.009-.369V8.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009m-.03 1.5v1.5h1.5v-1.5zm6.03-1.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.546.546c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.479a5 5 0 0 1-.009-.369V8.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009m-.03 1.5v1.5h1.5v-1.5zm6.03-1.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.547.546c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.546a1.3 1.3 0 0 1-.127-.479c-.01-.114-.009-.247-.009-.369V8.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.477-.127c.115-.01.248-.009.37-.009m-.03 1.5v1.5h1.5v-1.5zm-11.97 4.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.547.547c-.176.09-.348.116-.478.127c-.114.01-.247.009-.369.009H5.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.547a1.3 1.3 0 0 1-.127-.477a5 5 0 0 1-.009-.37v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009m-.03 1.5v1.5h1.5v-1.5zm6.03-1.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.546.547c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.547a1.3 1.3 0 0 1-.127-.477a5 5 0 0 1-.009-.37v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009m-.03 1.5v1.5h1.5v-1.5zm6.03-1.5h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.547.547c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.547a1.3 1.3 0 0 1-.127-.477c-.01-.115-.009-.248-.009-.37v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.477-.127c.115-.01.248-.009.37-.009m-.03 1.5v1.5h1.5v-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StashDragSquaresHorizontalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDragSquaresHorizontalLightIcon],svg[stash-drag-squares-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.284 7h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.008.353a1 1 0 0 1-.101.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1C6.965 11 6.842 11 6.716 11H5.284c-.126 0-.249 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C4 9.965 4 9.842 4 9.716V8.284c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1C5.035 7 5.158 7 5.284 7m-.278 1.006v.006C5 8.071 5 8.152 5 8.3v1.4a4 4 0 0 0 .006.294h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006C7 9.929 7 9.848 7 9.7V8.3a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 6.7 8H5.3a4 4 0 0 0-.294.006M11.284 7h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.008.353a1 1 0 0 1-.101.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a4 4 0 0 1-.353.009h-1.432c-.126 0-.249 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C10 9.965 10 9.842 10 9.716V8.284c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1C11.035 7 11.158 7 11.284 7m-.278 1.006v.006A4 4 0 0 0 11 8.3v1.4a4 4 0 0 0 .006.294h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006C13 9.929 13 9.848 13 9.7V8.3a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 12.7 8h-1.4c-.148 0-.23 0-.288.005zM17.284 7h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.009.353a1 1 0 0 1-.1.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a4 4 0 0 1-.353.009h-1.432c-.126 0-.249 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C16 9.965 16 9.842 16 9.716V8.284c0-.126 0-.249.009-.353a1 1 0 0 1 .1-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1C17.035 7 17.158 7 17.284 7m-.278 1.006v.006A4 4 0 0 0 17 8.3v1.4a4 4 0 0 0 .006.294h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006C19 9.929 19 9.848 19 9.7V8.3a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 18.7 8h-1.4c-.148 0-.23 0-.288.005zM5.284 13h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.008.353a1 1 0 0 1-.101.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1C6.965 17 6.842 17 6.716 17H5.284c-.126 0-.249 0-.353-.009a1 1 0 0 1-.385-.1a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C4 15.965 4 15.842 4 15.716v-1.432c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1C5.035 13 5.158 13 5.284 13m-.278 1.006v.006C5 14.071 5 14.152 5 14.3v1.4c0 .148 0 .23.005.288v.006h.007c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006C7 15.929 7 15.848 7 15.7v-1.4a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 6.7 14H5.3a4 4 0 0 0-.294.006M11.284 13h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.008.353a1 1 0 0 1-.101.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a4 4 0 0 1-.353.009h-1.432c-.126 0-.249 0-.353-.009a1 1 0 0 1-.385-.1a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C10 15.965 10 15.842 10 15.716v-1.432c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1c.104-.009.227-.009.353-.009m-.278 1.006v.006A4 4 0 0 0 11 14.3v1.4a4 4 0 0 0 .006.294h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006c.006-.059.006-.14.006-.288v-1.4a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 12.7 14h-1.4a4 4 0 0 0-.294.006M17.284 13h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.009.353a1 1 0 0 1-.1.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a4 4 0 0 1-.353.009h-1.432c-.126 0-.249 0-.353-.009a1 1 0 0 1-.385-.1a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C16 15.965 16 15.842 16 15.716v-1.432c0-.126 0-.249.009-.353a1 1 0 0 1 .1-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1c.104-.009.227-.009.353-.009m-.278 1.006v.006A4 4 0 0 0 17 14.3v1.4a4 4 0 0 0 .006.294h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006c.006-.059.006-.14.006-.288v-1.4a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 18.7 14h-1.4a4 4 0 0 0-.294.006" clip-rule="evenodd"></svg:path>`,
})
export class StashDragSquaresHorizontalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDragSquaresHorizontalSolidIcon],svg[stash-drag-squares-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.28 6.75c-.122 0-.255 0-.37.01c-.13.01-.3.036-.477.126a1.25 1.25 0 0 0-.547.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.44c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.477-.126a1.25 1.25 0 0 0 .547-.546c.09-.177.116-.349.127-.479c.01-.114.009-.247.009-.369V8.28c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.477a1.25 1.25 0 0 0-.547-.547a1.3 1.3 0 0 0-.478-.127a5 5 0 0 0-.369-.009zm6 0c-.122 0-.255 0-.37.01c-.13.01-.3.036-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.44c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.546c.09-.177.116-.349.127-.479c.01-.114.009-.247.009-.369V8.28c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.477a1.25 1.25 0 0 0-.546-.547a1.3 1.3 0 0 0-.479-.127a5 5 0 0 0-.369-.009zm7.44 0h-1.44c-.122 0-.255 0-.37.01c-.13.01-.3.036-.477.126a1.25 1.25 0 0 0-.547.547a1.3 1.3 0 0 0-.127.478c-.01.114-.009.247-.009.369v1.44c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.477.127c.115.01.248.009.37.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.477-.126a1.25 1.25 0 0 0 .547-.546c.09-.177.116-.349.127-.479c.01-.114.009-.247.009-.369V8.28c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.477a1.25 1.25 0 0 0-.547-.547a1.3 1.3 0 0 0-.477-.127a5 5 0 0 0-.37-.009m-13.44 6c-.122 0-.255 0-.37.01c-.13.01-.3.036-.477.126a1.25 1.25 0 0 0-.547.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.44c0 .122 0 .255.01.37c.01.13.036.3.126.477c.12.236.311.427.547.547c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.477-.126a1.25 1.25 0 0 0 .547-.547c.09-.176.116-.348.127-.477c.01-.115.009-.248.009-.37v-1.44c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.547-.546a1.3 1.3 0 0 0-.478-.127c-.114-.01-.247-.009-.369-.009zm6 0c-.122 0-.255 0-.37.01c-.13.01-.3.036-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.44c0 .122 0 .255.01.37c.01.13.036.3.126.477c.12.236.311.427.547.547c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.547c.09-.176.116-.348.127-.477c.01-.115.009-.248.009-.37v-1.44c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.546-.546a1.3 1.3 0 0 0-.479-.127c-.114-.01-.247-.009-.369-.009zm7.44 0h-1.44c-.122 0-.255 0-.37.01c-.13.01-.3.036-.477.126a1.25 1.25 0 0 0-.547.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369v1.44c0 .122 0 .255.01.37c.01.13.036.3.126.477c.12.236.311.427.547.547c.176.09.348.116.477.127c.115.01.248.009.37.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.477-.126a1.25 1.25 0 0 0 .547-.547c.09-.176.116-.348.127-.477c.01-.115.009-.248.009-.37v-1.44c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.547-.546a1.3 1.3 0 0 0-.477-.127c-.115-.01-.248-.009-.37-.009"></svg:path>`,
})
export class StashDragSquaresHorizontalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDragSquaresVerticalIcon],svg[stash-drag-squares-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 18.72v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.477c.01.115.009.248.009.37v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.546.547c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009H8.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.547a1.3 1.3 0 0 1-.127-.477a5 5 0 0 1-.009-.37m1.5.03h1.5v-1.5h-1.5zm-1.5-6.03v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.546.546c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009H8.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.546a1.3 1.3 0 0 1-.127-.479a5 5 0 0 1-.009-.369m1.5.03h1.5v-1.5h-1.5zm-1.5-6.03V5.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.546.547c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009H8.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.547a1.3 1.3 0 0 1-.127-.478a5 5 0 0 1-.009-.369m1.5.03h1.5v-1.5h-1.5zm4.5 11.97v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.477c.01.115.009.248.009.37v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.547.547c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.547a1.3 1.3 0 0 1-.127-.477c-.01-.115-.009-.248-.009-.37m1.5.03h1.5v-1.5h-1.5zm-1.5-6.03v-1.44c0-.29.002-.583.136-.848a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127c.12-.01.261-.009.389-.009h1.4c.128 0 .269 0 .39.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.547.546c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.479c-.01-.114-.009-.247-.009-.369m1.5.03h1.5v-1.5h-1.5zm-1.5-6.03V5.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.547.547c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.547a1.3 1.3 0 0 1-.127-.478c-.01-.114-.009-.247-.009-.369m1.5.03h1.5v-1.5h-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StashDragSquaresVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDragSquaresVerticalDuotoneIcon],svg[stash-drag-squares-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 18.75v-1.5h1.5v1.5zm0-6v-1.5h1.5v1.5zm0-6v-1.5h1.5v1.5zm6 12v-1.5h1.5v1.5zm0-6v-1.5h1.5v1.5zm0-6v-1.5h1.5v1.5z" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.75 18.72v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.477c.01.115.009.248.009.37v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.546.547c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009H8.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.547a1.3 1.3 0 0 1-.127-.477a5 5 0 0 1-.009-.37m1.5.03h1.5v-1.5h-1.5zm-1.5-6.03v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.546.546c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009H8.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.546a1.3 1.3 0 0 1-.127-.479a5 5 0 0 1-.009-.369m1.5.03h1.5v-1.5h-1.5zm-1.5-6.03V5.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.546.547c-.177.09-.349.116-.479.127c-.114.01-.247.009-.369.009H8.28c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.477-.126a1.25 1.25 0 0 1-.547-.547a1.3 1.3 0 0 1-.127-.478a5 5 0 0 1-.009-.369m1.5.03h1.5v-1.5h-1.5zm4.5 11.97v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.477c.01.115.009.248.009.37v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.547.547c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.547a1.3 1.3 0 0 1-.127-.477c-.01-.115-.009-.248-.009-.37m1.5.03h1.5v-1.5h-1.5zm-1.5-6.03v-1.44c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.478a1.25 1.25 0 0 1 .547-.546c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.478a1.25 1.25 0 0 1-.547.546c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.479c-.01-.114-.009-.247-.009-.369m1.5.03h1.5v-1.5h-1.5zm-1.5-6.03V5.28c0-.122 0-.255.01-.37c.01-.13.036-.3.126-.477a1.25 1.25 0 0 1 .547-.547c.176-.09.348-.116.478-.127c.114-.01.247-.009.369-.009h1.44c.122 0 .255 0 .37.01c.13.01.3.036.477.126c.236.12.427.311.547.547c.09.176.116.348.127.478c.01.114.009.247.009.369v1.44c0 .122 0 .255-.01.37c-.01.13-.036.3-.126.477a1.25 1.25 0 0 1-.547.547c-.176.09-.348.116-.477.127c-.115.01-.248.009-.37.009h-1.44c-.122 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.547a1.3 1.3 0 0 1-.127-.478c-.01-.114-.009-.247-.009-.369m1.5.03h1.5v-1.5h-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StashDragSquaresVerticalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDragSquaresVerticalLightIcon],svg[stash-drag-squares-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 18.716v-1.432c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1C8.035 16 8.158 16 8.284 16h1.432c.126 0 .249 0 .353.009c.114.009.25.03.385.1a1 1 0 0 1 .437.437c.07.136.091.27.1.385a5 5 0 0 1 .009.353v1.432c0 .126 0 .249-.008.353a1 1 0 0 1-.101.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1C9.965 20 9.842 20 9.716 20H8.284c-.126 0-.249 0-.353-.009a1 1 0 0 1-.385-.1a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C7 18.965 7 18.842 7 18.716m1.006.278h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006c.006-.059.006-.14.006-.288v-1.4a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 9.7 17H8.3a4 4 0 0 0-.294.006v.006C8 17.071 8 17.152 8 17.3v1.4c0 .148 0 .23.005.288zM7 12.716v-1.432c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1C8.035 10 8.158 10 8.284 10h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385a5 5 0 0 1 .009.353v1.432c0 .126 0 .249-.008.353a1 1 0 0 1-.101.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1C9.965 14 9.842 14 9.716 14H8.284c-.126 0-.249 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C7 12.965 7 12.842 7 12.716m1.006.278h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006c.006-.059.006-.14.006-.288v-1.4a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 9.7 11H8.3a4 4 0 0 0-.294.006v.006C8 11.071 8 11.152 8 11.3v1.4c0 .148 0 .23.005.288zM7 6.716V5.284c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1C8.035 4 8.158 4 8.284 4h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.008.353a1 1 0 0 1-.101.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1A5 5 0 0 1 9.716 8H8.284c-.126 0-.249 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C7 6.965 7 6.842 7 6.716m1.006.278h.006C8.071 7 8.152 7 8.3 7h1.4a4 4 0 0 0 .294-.006v-.006C10 6.929 10 6.848 10 6.7V5.3a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 9.7 5H8.3a4 4 0 0 0-.294.006v.006C8 5.071 8 5.152 8 5.3v1.4a4 4 0 0 0 .006.294M13 18.716v-1.432c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1c.104-.009.227-.009.353-.009h1.432c.126 0 .249 0 .353.009c.114.009.25.03.385.1a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.009.353a1 1 0 0 1-.1.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a4 4 0 0 1-.353.009h-1.432c-.126 0-.249 0-.353-.009a1 1 0 0 1-.385-.1a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C13 18.965 13 18.842 13 18.716m1.006.278h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006c.006-.059.006-.14.006-.288v-1.4a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 15.7 17h-1.4a4 4 0 0 0-.294.006v.006A4 4 0 0 0 14 17.3v1.4a4 4 0 0 0 .006.294M13 12.716v-1.432c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1c.104-.009.227-.009.353-.009h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.009.353a1 1 0 0 1-.1.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a4 4 0 0 1-.353.009h-1.432c-.126 0-.249 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C13 12.965 13 12.842 13 12.716m1.006.278h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006c.006-.059.006-.14.006-.288v-1.4a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 15.7 11h-1.4a4 4 0 0 0-.294.006v.006A4 4 0 0 0 14 11.3v1.4a4 4 0 0 0 .006.294M13 6.716V5.284c0-.126 0-.249.008-.353c.01-.114.032-.25.101-.385a1 1 0 0 1 .437-.437a1 1 0 0 1 .385-.1C14.035 4 14.158 4 14.284 4h1.432c.126 0 .249 0 .353.008c.114.01.25.032.385.101a1 1 0 0 1 .437.437c.07.136.091.27.1.385c.009.104.009.227.009.353v1.432c0 .126 0 .249-.009.353a1 1 0 0 1-.1.385a1 1 0 0 1-.437.437a1 1 0 0 1-.385.1a5 5 0 0 1-.353.009h-1.432c-.126 0-.249 0-.353-.008a1 1 0 0 1-.385-.101a1 1 0 0 1-.437-.437a1 1 0 0 1-.1-.385C13 6.965 13 6.842 13 6.716m1.006.278h.006c.059.006.14.006.288.006h1.4a4 4 0 0 0 .294-.006v-.006C16 6.929 16 6.848 16 6.7V5.3a4 4 0 0 0-.006-.294h-.006A4 4 0 0 0 15.7 5h-1.4c-.148 0-.23 0-.288.005h-.006v.007A4 4 0 0 0 14 5.3v1.4a4 4 0 0 0 .006.294" clip-rule="evenodd"></svg:path>`,
})
export class StashDragSquaresVerticalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashDragSquaresVerticalSolidIcon],svg[stash-drag-squares-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 18.72c0 .122 0 .255.01.37c.01.13.036.3.126.477c.12.236.311.427.547.547c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.547c.09-.176.116-.348.127-.477c.01-.115.009-.248.009-.37v-1.44c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.477a1.25 1.25 0 0 0-.546-.547a1.3 1.3 0 0 0-.479-.127c-.114-.01-.247-.009-.369-.009H8.28c-.122 0-.255 0-.37.01c-.13.01-.3.036-.477.126a1.25 1.25 0 0 0-.547.547c-.09.176-.116.348-.127.477c-.01.115-.009.248-.009.37zm0-6c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.546c.09-.177.116-.349.127-.479c.01-.114.009-.247.009-.369v-1.44c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.546-.546a1.3 1.3 0 0 0-.479-.127a5 5 0 0 0-.369-.009H8.28c-.122 0-.255 0-.37.01c-.13.01-.3.036-.477.126a1.25 1.25 0 0 0-.547.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369zm0-7.44v1.44c0 .122 0 .255.01.37c.01.13.036.3.126.477c.12.236.311.427.547.547c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.478-.126a1.25 1.25 0 0 0 .546-.547c.09-.176.116-.348.127-.478c.01-.114.009-.247.009-.369V5.28c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.477a1.25 1.25 0 0 0-.546-.547a1.3 1.3 0 0 0-.479-.127a5 5 0 0 0-.369-.009H8.28c-.122 0-.255 0-.37.01c-.13.01-.3.036-.477.126a1.25 1.25 0 0 0-.547.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369m6 13.44c0 .122 0 .255.01.37c.01.13.036.3.126.477c.12.236.311.427.547.547c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.477-.126a1.25 1.25 0 0 0 .547-.547c.09-.176.116-.348.127-.477c.01-.115.009-.248.009-.37v-1.44c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.477a1.25 1.25 0 0 0-.547-.547a1.3 1.3 0 0 0-.477-.127c-.115-.01-.248-.009-.37-.009h-1.44c-.122 0-.255 0-.37.01c-.13.01-.3.036-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.477c-.01.115-.009.248-.009.37zm0-6c0 .122 0 .255.01.37c.01.13.036.3.126.478c.12.235.311.426.547.546c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.477-.126a1.25 1.25 0 0 0 .547-.546c.09-.177.116-.349.127-.479c.01-.114.009-.247.009-.369v-1.44c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.478a1.25 1.25 0 0 0-.547-.546a1.3 1.3 0 0 0-.477-.127a5 5 0 0 0-.37-.009h-1.44c-.122 0-.255 0-.37.01c-.13.01-.3.036-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369zm0-7.44v1.44c0 .122 0 .255.01.37c.01.13.036.3.126.477c.12.236.311.427.547.547c.176.09.348.116.478.127c.114.01.247.009.369.009h1.44c.122 0 .255 0 .37-.01c.13-.01.3-.036.477-.126a1.25 1.25 0 0 0 .547-.547c.09-.176.116-.348.127-.478c.01-.114.009-.247.009-.369V5.28c0-.122 0-.255-.01-.37a1.3 1.3 0 0 0-.126-.477a1.25 1.25 0 0 0-.547-.547a1.3 1.3 0 0 0-.477-.127a5 5 0 0 0-.37-.009h-1.44c-.122 0-.255 0-.37.01c-.13.01-.3.036-.478.126a1.25 1.25 0 0 0-.546.547c-.09.176-.116.348-.127.478c-.01.114-.009.247-.009.369"></svg:path>`,
})
export class StashDragSquaresVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisHIcon],svg[stash-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.75 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0m5.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0m7.25 1.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5"></svg:path>`,
})
export class StashEllipsisHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisHDuotoneIcon],svg[stash-ellipsis-h-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m5.5 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m7 1.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 14.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5M5.75 12a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0M12 14.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5M11.25 12a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m5.5 0a.75.75 0 1 0 1.5 0a.75.75 0 0 0-1.5 0m.75 2.25a2.25 2.25 0 1 1 0-4.5a2.25 2.25 0 0 1 0 4.5" clip-rule="evenodd"></svg:path>`,
})
export class StashEllipsisHDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisHLightIcon],svg[stash-ellipsis-h-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 14a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-1-2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m6.5 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-1-2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5.5 0a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 2a2 2 0 1 1 0-4a2 2 0 0 1 0 4" clip-rule="evenodd"></svg:path>`,
})
export class StashEllipsisHLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisHSolidIcon],svg[stash-ellipsis-h-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.25 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m5.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m5.5 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0"></svg:path>`,
})
export class StashEllipsisHSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisVIcon],svg[stash-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19.25a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m0-5.5a1.75 1.75 0 1 0 0-3.5a1.75 1.75 0 0 0 0 3.5m1.75-7.25a1.75 1.75 0 1 1-3.5 0a1.75 1.75 0 0 1 3.5 0"></svg:path>`,
})
export class StashEllipsisVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisVDuotoneIcon],svg[stash-ellipsis-v-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 6.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M12 19a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.75 6.5a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0M12 5.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M9.75 12a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0m2.25-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0 5.5a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEllipsisVDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisVLightIcon],svg[stash-ellipsis-v-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 6.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2M10 12a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0 5.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEllipsisVLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEllipsisVSolidIcon],svg[stash-ellipsis-v-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m0 5.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m0 5.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class StashEllipsisVSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiJoyIcon],svg[stash-emoji-joy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10.772c0-.36-.212-.657-.412-.858a3 3 0 0 0-.794-.547c-.578-.283-1.358-.477-2.016-.298c-.568.156-.791.69-.876 1.026l-.136.53a.5.5 0 0 0 .854.46c.233-.256.586-.365 1.079-.326c.496.04 1.06.226 1.594.468a.5.5 0 0 0 .707-.455m6.234-.147l-.136-.528v-.002c-.085-.337-.308-.87-.876-1.026c-.659-.18-1.438.015-2.016.298a3 3 0 0 0-.793.547c-.201.201-.413.497-.413.858a.5.5 0 0 0 .707.455c.534-.242 1.098-.429 1.594-.468c.493-.039.846.07 1.079.327a.5.5 0 0 0 .854-.46"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.44 13.955c.582 1.36-.26 2.632-1.285 3.42c-1.066.82-2.602 1.375-4.155 1.375s-3.089-.554-4.155-1.375c-1.025-.788-1.867-2.06-1.284-3.42c.194-.455.653-.657 1.124-.65c.299.003.67.076 1.024.145l.065.013c.773.152 1.826.358 3.226.358c1.113 0 2.202-.157 3.29-.37c.355-.07.726-.143 1.025-.147c.471-.006.93.196 1.124.65m-1.937.982c-.786.155-1.956.384-3.503.384c-1.546 0-2.717-.23-3.503-.384l-.048-.01a14 14 0 0 0-.57-.103c-.013.372.218.853.88 1.363c.802.617 2.016 1.063 3.241 1.063s2.439-.446 3.24-1.063c.663-.51.894-.99.882-1.363c-.144.021-.345.06-.619.113" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M3.75 12a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiJoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiJoyDuotoneIcon],svg[stash-emoji-joy-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.588 9.914c.2.201.412.497.412.858a.505.505 0 0 1-.707.455c-.534-.242-1.098-.429-1.594-.468c-.493-.039-.846.07-1.079.327a.5.5 0 0 1-.854-.46c.159-.618.297-1.361 1.012-1.557c.658-.18 1.438.015 2.016.298a3 3 0 0 1 .793.547m6.646.711a.5.5 0 0 1-.855.46c-.232-.256-.585-.365-1.078-.326c-.496.04-1.06.226-1.594.468a.505.505 0 0 1-.707-.455c0-.36.212-.657.412-.858c.215-.214.496-.401.794-.547c.578-.283 1.358-.477 2.016-.298c.715.196.853.939 1.012 1.556m-1.079 6.75c1.025-.788 1.867-2.06 1.284-3.42c-.194-.455-.652-.657-1.124-.65c-.299.003-.67.076-1.024.145c-1.09.214-2.178.371-3.291.371s-2.202-.157-3.29-.37c-.355-.07-.726-.143-1.025-.147c-.471-.006-.93.196-1.124.65c-.583 1.36.26 2.633 1.284 3.421c1.066.821 2.602 1.375 4.155 1.375s3.09-.554 4.155-1.375" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M11 10.772c0-.36-.212-.657-.412-.858a3 3 0 0 0-.794-.547c-.578-.283-1.358-.477-2.016-.298c-.568.156-.791.69-.876 1.026l-.136.53a.5.5 0 0 0 .854.46c.233-.256.586-.365 1.079-.326c.496.04 1.06.226 1.594.468a.5.5 0 0 0 .707-.455m6.234-.147l-.136-.528v-.002c-.085-.337-.308-.87-.876-1.026c-.659-.18-1.438.015-2.016.298a3 3 0 0 0-.793.547c-.201.201-.413.497-.413.858a.5.5 0 0 0 .707.455c.534-.242 1.098-.429 1.594-.468c.493-.039.846.07 1.079.327a.5.5 0 0 0 .854-.46"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.44 13.955c.582 1.36-.26 2.632-1.285 3.42c-1.066.82-2.602 1.375-4.155 1.375s-3.089-.554-4.155-1.375c-1.025-.788-1.867-2.06-1.284-3.42c.194-.455.653-.657 1.124-.65c.299.003.67.076 1.024.145l.065.013c.773.152 1.826.358 3.226.358c1.113 0 2.202-.157 3.29-.37c.355-.07.726-.143 1.025-.147c.471-.006.93.196 1.124.65m-1.937.982c-.786.155-1.956.384-3.503.384c-1.546 0-2.717-.23-3.503-.384l-.048-.01a14 14 0 0 0-.57-.103c-.013.372.218.853.88 1.363c.802.617 2.016 1.063 3.241 1.063s2.439-.446 3.24-1.063c.663-.51.894-.99.882-1.363c-.144.021-.345.06-.619.113" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M3.75 12a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiJoyDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiJoyLightIcon],svg[stash-emoji-joy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.875 10.772c0-.311-.184-.577-.376-.77a2.9 2.9 0 0 0-.76-.523c-.564-.276-1.311-.458-1.928-.289c-.5.136-.706.61-.788.936l-.136.53a.375.375 0 0 0 .64.346c.269-.296.667-.408 1.181-.367c.518.04 1.097.233 1.637.478a.375.375 0 0 0 .53-.341m6.238-.115l-.136-.53v-.001c-.082-.326-.289-.8-.788-.936c-.617-.169-1.364.013-1.928.29c-.29.14-.558.32-.76.523c-.192.192-.376.458-.376.769a.375.375 0 0 0 .53.341c.54-.245 1.12-.438 1.637-.478c.514-.04.912.071 1.18.367a.375.375 0 0 0 .641-.345"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.798 13.639a.78.78 0 0 1 .412.414c.513 1.198-.213 2.36-1.207 3.124C14.98 17.964 13.498 18.5 12 18.5s-2.98-.536-4.003-1.323c-.994-.765-1.72-1.926-1.207-3.124a.78.78 0 0 1 .412-.415c.164-.072.337-.086.48-.084c.276.004.628.073.995.145l.051.01c.775.152 1.848.362 3.272.362c1.425 0 2.497-.21 3.272-.362l.05-.01c.368-.072.72-.141.996-.145c.143-.002.316.012.48.085m-1.341 1.053c-.784.153-1.935.38-3.457.38s-2.673-.226-3.457-.38l-.045-.01c-.409-.08-.66-.126-.827-.128c-.162.535.118 1.201.936 1.83c.846.652 2.114 1.116 3.393 1.116c1.28 0 2.547-.464 3.393-1.115c.818-.63 1.098-1.296.936-1.83c-.166.001-.418.047-.827.128z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 12a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiJoyLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiJoySolidIcon],svg[stash-emoji-joy-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-1 8.522c0-.36-.212-.657-.412-.858a3 3 0 0 0-.794-.547c-.578-.283-1.358-.477-2.016-.298c-.666.182-.832.84-.98 1.43l-.032.126a.5.5 0 0 0 .854.46c.233-.256.586-.365 1.079-.326c.496.04 1.06.226 1.594.468a.505.505 0 0 0 .707-.455m5.987.418a.5.5 0 0 0 .247-.565l-.032-.127c-.148-.588-.314-1.247-.98-1.429c-.659-.18-1.438.015-2.016.298a3 3 0 0 0-.793.547c-.201.201-.413.497-.413.858c0 .357.381.603.707.455c.534-.242 1.098-.429 1.594-.468c.493-.039.846.07 1.079.327a.5.5 0 0 0 .607.104m.452 2.765c.583 1.36-.26 2.632-1.284 3.42c-1.066.82-2.602 1.375-4.155 1.375s-3.089-.554-4.155-1.375c-1.025-.788-1.867-2.06-1.284-3.42c.194-.455.653-.657 1.124-.65c.299.003.67.076 1.024.145c1.09.214 2.178.371 3.291.371s2.202-.157 3.29-.37c.355-.07.726-.143 1.025-.147c.471-.006.93.196 1.124.65" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiJoySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiLaughIcon],svg[stash-emoji-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.588 9.914c.2.201.412.497.412.858a.5.5 0 0 1-.707.455c-.534-.242-1.098-.429-1.594-.468c-.493-.039-.846.07-1.079.327a.5.5 0 0 1-.854-.46l.136-.531c.085-.337.308-.87.876-1.026c.658-.18 1.438.015 2.016.298a3 3 0 0 1 .793.547m6.511.183l.136.528a.5.5 0 0 1-.855.46c-.232-.256-.585-.365-1.078-.326c-.496.04-1.06.226-1.594.468a.5.5 0 0 1-.707-.455c0-.36.212-.657.412-.858c.215-.214.496-.401.794-.547c.578-.283 1.358-.477 2.016-.298c.568.156.791.69.876 1.026z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.314 13.697a.75.75 0 0 0 .236.903c.364.273.411.466.421.587c.016.194-.047.418-.183.826a.75.75 0 0 0 .146.729c.556.641 1.376 1.137 2.248 1.473c.88.338 1.87.535 2.818.535s1.939-.197 2.818-.535c.872-.336 1.692-.832 2.248-1.473a.75.75 0 0 0 .146-.73c-.136-.407-.2-.63-.183-.825c.01-.121.057-.314.421-.587a.75.75 0 0 0-.59-1.337q-.857.157-1.72.28c-.995.142-2.202.278-3.14.278s-2.145-.136-3.14-.278a43 43 0 0 1-1.689-.274c-.349-.065-.71.095-.857.428m9.226 1.304l-.189.027c-1.008.144-2.302.293-3.351.293c-1.05 0-2.343-.149-3.351-.293l-.189-.027c.042.368-.023.733-.107 1.038c.344.292.813.563 1.367.775c.72.277 1.529.436 2.28.436s1.56-.159 2.28-.435c.554-.213 1.023-.484 1.367-.776c-.084-.305-.149-.67-.107-1.038" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M3.75 12a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiLaughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiLaughDuotoneIcon],svg[stash-emoji-laugh-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18M10.588 9.914c.2.201.412.497.412.858a.5.5 0 0 1-.707.455c-.534-.242-1.098-.429-1.594-.468c-.493-.039-.846.07-1.079.327a.5.5 0 0 1-.854-.46l.032-.128c.148-.588.314-1.247.98-1.429c.658-.18 1.438.015 2.016.298a3 3 0 0 1 .793.547m6.646.711a.5.5 0 0 1-.855.46c-.232-.256-.585-.365-1.078-.326c-.496.04-1.06.226-1.594.468a.5.5 0 0 1-.707-.455c0-.36.212-.657.412-.858c.215-.214.496-.401.794-.547c.578-.283 1.358-.477 2.016-.298c.666.182.832.84.98 1.43zm-10.92 3.072a.75.75 0 0 1 .826-.434l.007.002l.024.004l.096.018l.361.063c.308.053.74.123 1.233.193c.994.142 2.2.278 3.139.278s2.145-.136 3.14-.278a46 46 0 0 0 1.593-.256l.096-.018l.024-.005h.007a.75.75 0 0 1 .59 1.336c-.364.273-.411.466-.421.587c-.017.194.047.418.183.826a.75.75 0 0 1-.146.729c-.556.641-1.376 1.137-2.248 1.473a8 8 0 0 1-2.818.535a8 8 0 0 1-2.818-.535c-.872-.336-1.692-.832-2.248-1.473a.75.75 0 0 1-.146-.73c.136-.407.2-.63.183-.825c-.01-.121-.057-.314-.421-.587a.75.75 0 0 1-.236-.903" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M10.588 9.914c.2.201.412.497.412.858a.5.5 0 0 1-.707.455c-.534-.242-1.098-.429-1.594-.468c-.493-.039-.846.07-1.079.327a.5.5 0 0 1-.854-.46l.136-.531c.085-.337.308-.87.876-1.026c.658-.18 1.438.015 2.016.298a3 3 0 0 1 .793.547m6.511.183l.136.528a.5.5 0 0 1-.855.46c-.232-.256-.585-.365-1.078-.326c-.496.04-1.06.226-1.594.468a.5.5 0 0 1-.707-.455c0-.36.212-.657.412-.858c.215-.214.496-.401.794-.547c.578-.283 1.358-.477 2.016-.298c.568.156.791.69.876 1.026z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M6.314 13.697a.75.75 0 0 0 .236.903c.364.273.411.466.421.587c.016.194-.047.418-.183.826a.75.75 0 0 0 .146.729c.556.641 1.376 1.137 2.248 1.473c.88.338 1.87.535 2.818.535s1.939-.197 2.818-.535c.872-.336 1.692-.832 2.248-1.473a.75.75 0 0 0 .146-.73c-.136-.407-.2-.63-.183-.825c.01-.121.057-.314.421-.587a.75.75 0 0 0-.59-1.337q-.857.157-1.72.28c-.995.142-2.202.278-3.14.278s-2.145-.136-3.14-.278a43 43 0 0 1-1.689-.274c-.349-.065-.71.095-.857.428m9.226 1.304l-.189.027c-1.008.144-2.302.293-3.351.293c-1.05 0-2.343-.149-3.351-.293l-.189-.027c.042.368-.023.733-.107 1.038c.344.292.813.563 1.367.775c.72.277 1.529.436 2.28.436s1.56-.159 2.28-.435c.554-.213 1.023-.484 1.367-.776c-.084-.305-.149-.67-.107-1.038" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M3.75 12a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiLaughDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiLaughLightIcon],svg[stash-emoji-laugh-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.875 10.772c0-.311-.184-.577-.376-.77a2.9 2.9 0 0 0-.76-.523c-.564-.276-1.311-.458-1.928-.289c-.5.136-.706.61-.788.936l-.136.53a.375.375 0 0 0 .64.346c.269-.296.667-.408 1.181-.367c.518.04 1.097.233 1.637.478a.375.375 0 0 0 .53-.341m6.238-.115l-.136-.53v-.001c-.082-.326-.289-.8-.788-.936c-.617-.169-1.364.013-1.928.29c-.29.14-.558.32-.76.523c-.192.192-.376.458-.376.769a.375.375 0 0 0 .53.341c.54-.245 1.12-.438 1.637-.478c.514-.04.912.071 1.18.367a.375.375 0 0 0 .641-.345"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.093 13.509a.5.5 0 0 0-.393.891c.41.307.503.56.52.766c.022.255-.062.53-.194.926a.5.5 0 0 0 .096.486c.522.6 1.301 1.077 2.15 1.403A7.8 7.8 0 0 0 12 18.5c.915 0 1.876-.19 2.729-.519c.848-.326 1.627-.802 2.149-1.403a.5.5 0 0 0 .096-.486c-.132-.397-.216-.671-.195-.925c.018-.207.112-.46.521-.767a.5.5 0 0 0-.393-.891q-.863.16-1.732.282c-.997.142-2.218.28-3.175.28s-2.178-.138-3.175-.28a41 41 0 0 1-1.732-.282m1.05 1.191q.058.188.074.384c.03.37-.054.73-.149 1.036c.383.36.925.683 1.562.928A6.8 6.8 0 0 0 12 17.5c.784 0 1.623-.165 2.37-.452c.637-.245 1.18-.568 1.562-.928c-.095-.306-.18-.666-.149-1.037q.015-.195.074-.383l-.541.08c-1.006.144-2.285.291-3.316.291s-2.31-.147-3.316-.29z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.5a9.5 9.5 0 1 0 0 19a9.5 9.5 0 0 0 0-19M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiLaughLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiLaughSolidIcon],svg[stash-emoji-laugh-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-1 8.522c0-.36-.212-.657-.412-.858a3 3 0 0 0-.794-.547c-.578-.283-1.358-.477-2.016-.298c-.666.182-.832.84-.98 1.43l-.032.126a.5.5 0 0 0 .854.46c.233-.256.586-.365 1.079-.326c.496.04 1.06.226 1.594.468a.5.5 0 0 0 .707-.455m5.987.418a.5.5 0 0 0 .247-.565l-.032-.127c-.148-.588-.314-1.247-.98-1.429c-.659-.18-1.438.015-2.016.298a3 3 0 0 0-.793.547c-.201.201-.413.497-.413.858a.5.5 0 0 0 .707.455c.534-.242 1.098-.429 1.594-.468c.493-.039.846.07 1.079.327a.5.5 0 0 0 .607.104M7.14 13.263a.75.75 0 0 0-.59 1.337c.364.273.411.466.421.587c.016.194-.047.418-.183.826a.75.75 0 0 0 .146.729c.556.641 1.376 1.137 2.248 1.473c.88.338 1.87.535 2.818.535s1.939-.197 2.818-.535c.872-.336 1.692-.832 2.248-1.473a.75.75 0 0 0 .146-.73c-.136-.407-.2-.63-.183-.825c.01-.121.057-.314.421-.587a.75.75 0 0 0-.59-1.337l-.007.002l-.024.004l-.096.018l-.361.063c-.308.053-.74.123-1.233.193c-.994.142-2.2.278-3.139.278s-2.145-.136-3.14-.278a46 46 0 0 1-1.593-.256l-.096-.018l-.024-.005z" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiLaughSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiWinkIcon],svg[stash-emoji-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.098 10.095l.136.53a.5.5 0 0 1-.854.46c-.233-.256-.586-.365-1.079-.326c-.496.04-1.06.226-1.594.468a.5.5 0 0 1-.707-.455c0-.36.212-.657.412-.858c.215-.214.496-.401.794-.547c.578-.283 1.358-.477 2.016-.298c.568.156.791.69.876 1.026M9 12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.92 13.527c.316.273.485.724.33 1.195c-.274.837-.717 1.81-1.634 2.562c-.926.759-2.242 1.219-4.116 1.219c-.87 0-1.5-.012-1.939-.054a3 3 0 0 1-.608-.108a1.23 1.23 0 0 1-.576-.35a1.04 1.04 0 0 1-.258-.659c-.008-.187.029-.369.065-.552c.028-.146.057-.292.064-.44a4 4 0 0 0-.412-.399c-.27-.238-.66-.582-.917-.984a.75.75 0 0 1 .687-1.153q.77.056 1.54.1c2.05.115 3.948.138 5.939-.431c.258-.074.502-.144.737-.202c.39-.095.8 0 1.098.255m-1.342 1.367c-.86.248-2.124.609-3.578.609a52 52 0 0 1-2.566-.082c.139.179.316.464.316.832c0 .275-.036.518-.07.7c.35.036.92.05 1.82.05c1.626 0 2.574-.395 3.165-.879c.415-.34.7-.763.913-1.23" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M3.75 12a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiWinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiWinkDuotoneIcon],svg[stash-emoji-wink-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m5.234-10.375l-.136-.53c-.085-.337-.308-.87-.876-1.026c-.659-.18-1.438.015-2.016.298a3 3 0 0 0-.793.547c-.201.201-.413.497-.413.858a.5.5 0 0 0 .707.455c.534-.242 1.098-.429 1.594-.468c.493-.039.846.07 1.079.327a.5.5 0 0 0 .854-.46M10.5 10.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.75 4.222a1.105 1.105 0 0 0-.33-1.195a1.24 1.24 0 0 0-1.098-.255c-.235.057-.48.127-.737.2c-.855.245-1.854.53-3.085.53c-1.307 0-3.127-.11-3.956-.167c-.414-.028-.89-.085-1.138.333a.75.75 0 0 0 .013.79c.355.553.93.875 1.328 1.38l.001.001c-.015.335-.142.657-.13.993c.008.197.066.443.259.66c.297.334.76.416 1.184.457c.44.042 1.068.054 1.939.054c1.874 0 3.19-.46 4.116-1.22c.917-.751 1.36-1.724 1.635-2.561" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="m17.098 10.095l.136.53a.5.5 0 0 1-.854.46c-.233-.256-.586-.365-1.079-.326c-.496.04-1.06.226-1.594.468a.5.5 0 0 1-.707-.455c0-.36.212-.657.412-.858c.215-.214.496-.401.794-.547c.578-.283 1.358-.477 2.016-.298c.568.156.791.69.876 1.026M9 12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.92 13.527c.316.273.485.724.33 1.195c-.274.837-.717 1.81-1.634 2.562c-.926.759-2.242 1.219-4.116 1.219c-.87 0-1.5-.012-1.939-.054a3 3 0 0 1-.608-.108a1.23 1.23 0 0 1-.576-.35a1.04 1.04 0 0 1-.258-.659c-.008-.187.029-.369.065-.552c.028-.146.057-.292.064-.44a4 4 0 0 0-.412-.399c-.27-.238-.66-.582-.917-.984a.75.75 0 0 1 .687-1.153q.77.056 1.54.1c2.05.115 3.948.138 5.939-.431c.258-.074.502-.144.737-.202c.39-.095.8 0 1.098.255m-1.342 1.367c-.86.248-2.124.609-3.578.609a52 52 0 0 1-2.566-.082c.139.179.316.464.316.832c0 .275-.036.518-.07.7c.35.036.92.05 1.82.05c1.626 0 2.574-.395 3.165-.879c.415-.34.7-.763.913-1.23" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25M3.75 12a8.25 8.25 0 1 1 16.5 0a8.25 8.25 0 0 1-16.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiWinkDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiWinkLightIcon],svg[stash-emoji-wink-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 10.75c-.75-.827-2.134-.485-3.25.022c0-.654 1.605-1.49 2.59-1.22c.293.08.45.371.523.666zM8.951 12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="currentColor" d="M16.423 11.002c.257.283.736.024.641-.345l-.039-.156c-.132-.537-.283-1.146-.885-1.311c-.617-.169-1.364.013-1.928.29c-.29.14-.558.32-.76.523c-.192.192-.376.458-.376.769c0 .268.286.452.53.341c.54-.245 1.12-.438 1.637-.478c.514-.04.912.071 1.18.367"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.708 13.716c.247.213.377.56.256.928c-.268.817-.691 1.738-1.556 2.446c-.87.714-2.124 1.163-3.957 1.163c-.872 0-1.489-.012-1.915-.053c-.542-.052-1.191-.231-1.216-.878c-.008-.186.029-.37.065-.554c.032-.165.065-.33.066-.498c-.075-.168-.229-.294-.376-.414q-.065-.053-.125-.105c-.272-.24-.632-.56-.87-.929c-.234-.364.08-.797.488-.766a81 81 0 0 0 1.516.097c.886.05 1.988.1 2.867.1c1.27 0 2.313-.299 3.172-.545l.175-.052c.474-.143.992-.3 1.41.06m-7.945 1.42c.323.293.688.647.688 1.117c0 .34-.058.627-.096.812l-.02.097c.533.117 1.105.106 1.66.096q.231-.004.456-.005c1.667 0 2.677-.406 3.323-.936c.598-.49.938-1.129 1.177-1.801q-.217.059-.483.135c-.862.249-2.089.602-3.517.602a59 59 0 0 1-3.188-.117" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.5a9.5 9.5 0 1 0 0 19a9.5 9.5 0 0 0 0-19M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiWinkLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiWinkPlusIcon],svg[stash-emoji-wink-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.75a.75.75 0 0 1 .75.75v1.75H21a.75.75 0 0 1 0 1.5h-1.75V7.5a.75.75 0 0 1-1.5 0V5.75H16a.75.75 0 0 1 0-1.5h1.75V2.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" d="M11.5 3.75a8.25 8.25 0 1 0 8.046 6.416a.75.75 0 1 1 1.462-.332A9.75 9.75 0 0 1 11.5 21.75c-5.385 0-9.75-4.365-9.75-9.75s4.365-9.75 9.75-9.75c.938 0 1.847.133 2.708.381a.75.75 0 0 1-.416 1.441A8.3 8.3 0 0 0 11.5 3.75"></svg:path><svg:path fill="currentColor" d="m16.849 9.595l.136.53a.5.5 0 0 1-.854.46c-.233-.256-.586-.364-1.079-.326c-.496.04-1.06.226-1.594.468a.5.5 0 0 1-.707-.455c0-.36.212-.657.413-.858c.214-.214.495-.401.793-.547c.578-.283 1.358-.477 2.016-.297c.568.155.791.689.876 1.025M8.751 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.002 14.222a1.105 1.105 0 0 0-.331-1.195a1.24 1.24 0 0 0-1.098-.255c-.235.057-.48.127-.737.2c-1.991.57-3.89.547-5.939.432a93 93 0 0 1-1.54-.1a.75.75 0 0 0-.687 1.153c.258.402.648.746.917.984c.22.194.345.313.412.398a3 3 0 0 1-.064.441a2.4 2.4 0 0 0-.065.552c.007.197.065.443.258.66c.175.198.397.295.576.35c.181.054.389.086.608.107c.44.042 1.068.054 1.939.054c1.875 0 3.19-.46 4.116-1.22c.917-.751 1.36-1.724 1.635-2.561m-5.251.78c1.454 0 2.718-.36 3.578-.607c-.214.466-.498.888-.914 1.229c-.59.484-1.538.879-3.164.879c-.9 0-1.47-.014-1.82-.05c.034-.182.07-.424.07-.7c0-.368-.177-.653-.316-.832c.82.043 1.773.082 2.566.082" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiWinkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiWinkPlusDuotoneIcon],svg[stash-emoji-wink-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 1.75a.75.75 0 0 1 .75.75v1.75H21a.75.75 0 0 1 0 1.5h-1.75V7.5a.75.75 0 0 1-1.5 0V5.75H16a.75.75 0 0 1 0-1.5h1.75V2.5a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" d="M11.5 3.75a8.25 8.25 0 1 0 8.046 6.416a.75.75 0 1 1 1.462-.332A9.75 9.75 0 0 1 11.5 21.75c-5.385 0-9.75-4.365-9.75-9.75s4.365-9.75 9.75-9.75c.938 0 1.847.133 2.708.381a.75.75 0 0 1-.416 1.441A8.3 8.3 0 0 0 11.5 3.75"></svg:path><svg:path fill="currentColor" d="m16.849 9.595l.136.53a.5.5 0 0 1-.854.46c-.233-.256-.586-.364-1.079-.326c-.496.04-1.06.226-1.594.468a.5.5 0 0 1-.707-.455c0-.36.212-.657.413-.858c.214-.214.495-.401.793-.547c.578-.283 1.358-.477 2.016-.297c.568.155.791.689.876 1.025M8.751 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.002 14.222a1.105 1.105 0 0 0-.331-1.195a1.24 1.24 0 0 0-1.098-.255c-.235.057-.48.127-.737.2c-1.991.57-3.89.547-5.939.432a93 93 0 0 1-1.54-.1a.75.75 0 0 0-.687 1.153c.258.402.648.746.917.984c.22.194.345.313.412.398a3 3 0 0 1-.064.441a2.4 2.4 0 0 0-.065.552c.007.197.065.443.258.66c.175.198.397.295.576.35c.181.054.389.086.608.107c.44.042 1.068.054 1.939.054c1.875 0 3.19-.46 4.116-1.22c.917-.751 1.36-1.724 1.635-2.561m-5.251.78c1.454 0 2.718-.36 3.578-.607c-.214.466-.498.888-.914 1.229c-.59.484-1.538.879-3.164.879c-.9 0-1.47-.014-1.82-.05c.034-.182.07-.424.07-.7c0-.368-.177-.653-.316-.832c.82.043 1.773.082 2.566.082" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiWinkPlusDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiWinkPlusLightIcon],svg[stash-emoji-wink-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 2a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill="currentColor" d="M11.5 3.5a8.5 8.5 0 1 0 8.29 6.61a.5.5 0 1 1 .975-.22q.233 1.02.235 2.11a9.5 9.5 0 1 1-6.861-9.129a.5.5 0 1 1-.278.961A8.5 8.5 0 0 0 11.5 3.5"></svg:path><svg:path fill="currentColor" d="M8.502 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m7.472-.998c.256.283.736.024.641-.345L16.576 10c-.133-.537-.283-1.146-.885-1.311c-.617-.169-1.364.013-1.928.29c-.29.14-.558.32-.76.523c-.192.192-.376.458-.376.769c0 .268.286.452.53.341c.54-.245 1.12-.438 1.637-.478c.514-.04.912.071 1.18.367"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M16.515 14.144a.855.855 0 0 0-.256-.928c-.418-.36-.936-.203-1.41-.06l-.175.052c-.86.246-1.902.545-3.172.545c-.88 0-1.98-.05-2.868-.1a98 98 0 0 1-1.515-.098c-.409-.03-.722.403-.488.767c.237.37.598.688.87.93l.125.104c.147.12.3.246.376.414c-.001.168-.034.333-.066.498a2.3 2.3 0 0 0-.065.554c.025.647.674.826 1.216.878c.426.041 1.043.053 1.915.053c1.833 0 3.087-.45 3.957-1.163c.864-.708 1.288-1.629 1.556-2.446m-7.513 1.609c0-.47-.365-.824-.688-1.117c.926.055 2.187.117 3.188.117c1.428 0 2.654-.353 3.517-.602q.265-.077.483-.135c-.24.672-.58 1.311-1.177 1.801c-.646.53-1.656.936-3.323.936q-.226.001-.457.005c-.554.01-1.127.02-1.659-.096l.02-.097c.037-.185.096-.472.096-.812" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiWinkPlusLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiWinkPlusSolidIcon],svg[stash-emoji-wink-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 2.5a1 1 0 1 0-2 0V4H16a1 1 0 1 0 0 2h1.5v1.5a1 1 0 1 0 2 0V6H21a1 1 0 1 0 0-2h-1.5z"></svg:path><svg:path fill="currentColor" d="M3.5 12a8 8 0 0 1 8-8a1 1 0 1 0 0-2c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10a1 1 0 1 0-2 0a8 8 0 1 1-16 0"></svg:path><svg:path fill="currentColor" d="m16.849 9.595l.136.53a.5.5 0 0 1-.854.46c-.233-.256-.586-.364-1.079-.326c-.496.04-1.06.226-1.594.468a.5.5 0 0 1-.707-.455c0-.36.212-.657.413-.858c.214-.214.495-.401.793-.547c.578-.283 1.358-.477 2.016-.297c.568.155.791.689.876 1.025M8.751 11.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M17.002 14.222a1.105 1.105 0 0 0-.331-1.195a1.24 1.24 0 0 0-1.098-.255c-.235.057-.48.127-.737.2c-1.991.57-3.89.547-5.939.432a93 93 0 0 1-1.54-.1a.75.75 0 0 0-.687 1.153c.258.402.648.746.917.984c.22.194.345.313.412.398a3 3 0 0 1-.064.441a2.4 2.4 0 0 0-.065.552c.007.197.065.443.258.66c.175.198.397.295.576.35c.181.054.389.086.608.107c.44.042 1.068.054 1.939.054c1.875 0 3.19-.46 4.116-1.22c.917-.751 1.36-1.724 1.635-2.561m-5.251.78c1.454 0 2.718-.36 3.578-.607c-.214.466-.498.888-.914 1.229c-.59.484-1.538.879-3.164.879c-.9 0-1.47-.014-1.82-.05c.034-.182.07-.424.07-.7c0-.368-.177-.653-.316-.832c.82.043 1.773.082 2.566.082" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiWinkPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEmojiWinkSolidIcon],svg[stash-emoji-wink-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m5.098 7.845l.136.53a.5.5 0 0 1-.854.46c-.233-.256-.586-.365-1.079-.326c-.496.04-1.06.226-1.594.468a.5.5 0 0 1-.707-.455c0-.36.212-.657.412-.858c.215-.214.496-.401.794-.547c.578-.283 1.358-.477 2.016-.298c.568.156.791.69.876 1.026M9 12a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m7.92 1.527c.316.273.485.724.33 1.195c-.274.837-.717 1.81-1.634 2.562c-.926.759-2.242 1.219-4.116 1.219c-.87 0-1.5-.012-1.939-.054c-.424-.04-.887-.123-1.184-.457a1.04 1.04 0 0 1-.258-.66c-.008-.187.029-.369.065-.552c.028-.146.057-.292.064-.44v-.002a5 5 0 0 0-.601-.601c-.265-.236-.53-.472-.728-.78a.75.75 0 0 1-.013-.789c.236-.397.677-.365 1.076-.337l.062.004c.829.056 2.65.168 3.956.168c1.231 0 2.23-.286 3.085-.53q.386-.113.737-.202c.39-.095.8 0 1.098.255" clip-rule="evenodd"></svg:path>`,
})
export class StashEmojiWinkSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEngagementIcon],svg[stash-engagement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 7.57c0-2.61 2.297-4.82 5.25-4.82c2.182 0 4.024 1.218 4.822 2.91a.75.75 0 0 0 1.357-.64C13.122 2.78 10.737 1.25 8 1.25c-3.674 0-6.75 2.778-6.75 6.32c0 1.31.426 2.524 1.149 3.528l-.712 2.092c-.36 1.059.817 1.975 1.755 1.37l1.854-1.198q.496.203 1.03.331a.75.75 0 0 0 .348-1.459a5.5 5.5 0 0 1-1.117-.398l-.38-.183l-1.772 1.145l.678-1.995l-.267-.322A4.55 4.55 0 0 1 2.75 7.57m9.45 7.05c-.33-.99.06-2.21 1.14-2.55c.56-.17 1.26-.03 1.66.5c.38-.55 1.1-.67 1.66-.5c1.08.33 1.47 1.56 1.14 2.55C17.29 16.19 15.5 17 15 17s-2.27-.8-2.8-2.38"></svg:path><svg:path fill="currentColor" d="M15 7.25c-4.227 0-7.75 3.195-7.75 7.25s3.523 7.25 7.75 7.25a8.2 8.2 0 0 0 3.167-.631l2.218 1.433c.995.643 2.244-.33 1.862-1.452l-.851-2.504A6.9 6.9 0 0 0 22.75 14.5c0-4.055-3.523-7.25-7.75-7.25M8.75 14.5c0-3.124 2.745-5.75 6.25-5.75s6.25 2.626 6.25 5.75a5.43 5.43 0 0 1-1.273 3.477l-.267.323l.885 2.602l-2.31-1.494l-.38.184A6.66 6.66 0 0 1 15 20.25c-3.505 0-6.25-2.626-6.25-5.75m-3.25-9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 10a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 5 10m.5-2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class StashEngagementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEngagementDuotoneIcon],svg[stash-engagement-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 7.57c0-2.61 2.297-4.82 5.25-4.82c2.182 0 4.024 1.218 4.822 2.91a.75.75 0 0 0 1.357-.64C13.122 2.78 10.737 1.25 8 1.25c-3.674 0-6.75 2.778-6.75 6.32c0 1.31.426 2.524 1.149 3.528l-.712 2.092c-.36 1.059.817 1.975 1.755 1.37l1.854-1.198q.496.203 1.03.331a.75.75 0 0 0 .348-1.459a5.5 5.5 0 0 1-1.117-.398l-.38-.183l-1.772 1.145l.678-1.995l-.267-.322A4.55 4.55 0 0 1 2.75 7.57"></svg:path><svg:path fill="currentColor" d="M15 7.25c-4.227 0-7.75 3.195-7.75 7.25s3.523 7.25 7.75 7.25a8.2 8.2 0 0 0 3.167-.631l2.218 1.433c.995.643 2.244-.33 1.862-1.452l-.851-2.504A6.9 6.9 0 0 0 22.75 14.5c0-4.055-3.523-7.25-7.75-7.25M8.75 14.5c0-3.124 2.745-5.75 6.25-5.75s6.25 2.626 6.25 5.75a5.43 5.43 0 0 1-1.273 3.477l-.267.323l.885 2.602l-2.31-1.494l-.38.184A6.66 6.66 0 0 1 15 20.25c-3.505 0-6.25-2.626-6.25-5.75"></svg:path><svg:path fill="currentColor" d="M5.5 5.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm7.84 6.57c-1.08.34-1.47 1.56-1.14 2.55C12.73 16.2 14.5 17 15 17s2.29-.81 2.8-2.38c.33-.99-.06-2.22-1.14-2.55c-.56-.17-1.28-.05-1.66.5c-.4-.53-1.1-.67-1.66-.5M5 10a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 5 10m.5-2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" opacity=".5"></svg:path>`,
})
export class StashEngagementDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEngagementLightIcon],svg[stash-engagement-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7.57C2.5 4.804 4.927 2.5 8 2.5c2.275 0 4.208 1.27 5.048 3.053a.5.5 0 0 0 .904-.426C12.94 2.978 10.645 1.5 8 1.5c-3.554 0-6.5 2.683-6.5 6.07c0 1.3.438 2.501 1.177 3.485l-.754 2.216c-.283.834.645 1.556 1.384 1.079l1.964-1.27q.533.232 1.113.37a.5.5 0 1 0 .232-.972a5.8 5.8 0 0 1-1.168-.416l-.253-.123l-2.259 1.46l.865-2.544l-.178-.215A4.8 4.8 0 0 1 2.5 7.57m12.49 4.3c.545-.403 1.265-.445 1.815-.278c1.428.436 1.859 2.015 1.47 3.184c-.3.923-.966 1.597-1.594 2.033a5 5 0 0 1-.916.503c-.263.108-.542.188-.765.188s-.5-.08-.763-.187a4.8 4.8 0 0 1-.912-.5c-.626-.436-1.29-1.11-1.6-2.034c-.39-1.174.043-2.738 1.465-3.186l.005-.001c.563-.171 1.256-.106 1.795.278m1.524.678c-.42-.127-.882-.013-1.103.306l-.393.57l-.417-.553c-.25-.33-.715-.443-1.114-.323c-.736.233-1.081 1.108-.813 1.913c.22.656.707 1.172 1.223 1.531c.255.178.507.31.718.395q.158.064.267.091l.086.018q.03.005.032.004l.031-.003l.087-.019q.109-.028.27-.092a4 4 0 0 0 .723-.398c.519-.36 1.003-.876 1.213-1.522l.001-.004c.27-.81-.08-1.69-.81-1.914"></svg:path><svg:path fill="currentColor" d="M15 7.5c-4.107 0-7.5 3.1-7.5 7s3.393 7 7.5 7c1.14 0 2.222-.237 3.191-.663l2.33 1.505c.796.515 1.795-.264 1.49-1.162l-.894-2.628A6.66 6.66 0 0 0 22.5 14.5c0-3.9-3.393-7-7.5-7m-6.5 7c0-3.28 2.875-6 6.5-6s6.5 2.72 6.5 6a5.68 5.68 0 0 1-1.33 3.636l-.178.216l1.072 3.15l-2.797-1.807l-.253.122c-.9.436-1.924.683-3.014.683c-3.625 0-6.5-2.72-6.5-6m-3-9a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 10a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1A.5.5 0 0 1 5 10m.5-2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class StashEngagementLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEnvelopeIcon],svg[stash-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.768 4.75h6.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v3.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043H8.768c-.813 0-1.469 0-2-.043c-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 0 1-1.64-1.639c-.226-.444-.32-.924-.365-1.47c-.043-.531-.043-1.187-.043-2v-3.464c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043M6.89 6.288c-.454.037-.715.107-.912.207c-.3.153-.56.37-.763.633l5.18 4.489c.38.33.633.549.843.704c.202.15.318.205.409.232c.23.067.474.067.704 0c.09-.027.207-.082.409-.232c.21-.155.463-.375.844-.704l5.179-4.489a2.25 2.25 0 0 0-.762-.633c-.198-.1-.459-.17-.913-.207c-.462-.037-1.057-.038-1.909-.038H8.8c-.852 0-1.447 0-1.91.038M4.75 10.3v3.4c0 .853 0 1.447.038 1.91c.037.453.107.714.207.912q.07.137.159.264L7.97 13.97a.75.75 0 0 1 1.06 1.06l-2.617 2.618q.195.04.478.064c.462.037 1.057.038 1.909.038h6.4c.852 0 1.447 0 1.91-.038a4 4 0 0 0 .478-.064L14.97 15.03a.75.75 0 1 1 1.06-1.06l2.816 2.816q.088-.127.159-.265c.1-.197.17-.458.207-.912c.037-.462.038-1.056.038-1.909v-3.4c0-.66 0-1.166-.018-1.575l-4.666 4.044c-.354.306-.65.564-.912.757c-.274.203-.552.37-.88.466a2.75 2.75 0 0 1-1.549 0c-.327-.096-.605-.263-.88-.466a17 17 0 0 1-.91-.757L4.767 8.725c-.018.41-.018.915-.018 1.575"></svg:path>`,
})
export class StashEnvelopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEnvelopeAtIcon],svg[stash-envelope-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.733 6.05a4.483 4.483 0 0 0-4.483 4.483a.75.75 0 0 0 1.5 0a2.983 2.983 0 0 1 2.983-2.983H12.8A2.45 2.45 0 0 1 15.25 10v.8a.75.75 0 0 0 1.5 0V10a3.95 3.95 0 0 0-3.95-3.95z"></svg:path><svg:path fill="currentColor" d="M11.833 8.25c.448 0 .86.117 1.218.321A.75.75 0 0 1 14.417 9v2.833c0 .105.037.199.1.272a.75.75 0 0 1-1.071 1.046c-.434.371-.99.599-1.613.599c-1.486 0-2.583-1.294-2.583-2.75s1.097-2.75 2.583-2.75M12.917 11c0-.753-.546-1.25-1.084-1.25s-1.083.497-1.083 1.25s.545 1.25 1.083 1.25s1.084-.497 1.084-1.25"></svg:path><svg:path fill="currentColor" d="M11.17 2.881c-.622.141-1.185.494-2.002 1.004l-3.407 2.13c-.73.455-1.234.77-1.608 1.208a3.75 3.75 0 0 0-.731 1.318c-.173.55-.172 1.145-.172 2.005v5.686c0 .813 0 1.469.043 2c.045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365c.531.043 1.187.043 2 .043h6.464c.813 0 1.469 0 2-.043c.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.64-1.639c.226-.444.32-.924.365-1.47c.043-.531.043-1.187.043-2v-5.686c0-.86 0-1.455-.172-2.005a3.8 3.8 0 0 0-.73-1.318c-.375-.438-.88-.753-1.61-1.208l-3.406-2.13c-.817-.51-1.38-.863-2.001-1.004a3.75 3.75 0 0 0-1.662 0m1.329 1.463c.341.077.678.276 1.648.882l3.2 2c.864.54 1.155.732 1.361.973c.199.231.348.5.44.791c.052.17.078.354.09.662l-5.693 4.626c-.368.3-.613.498-.815.638c-.194.136-.305.186-.393.21a1.25 1.25 0 0 1-.674 0c-.087-.024-.199-.074-.393-.21c-.201-.14-.447-.338-.815-.638L4.761 9.652c.013-.308.039-.492.092-.662c.091-.29.24-.56.439-.791c.206-.241.497-.433 1.362-.973l3.2-2c.97-.606 1.306-.805 1.648-.882a2.25 2.25 0 0 1 .997 0M4.75 16.2v-4.624l4.477 3.637l-4.073 4.073a2 2 0 0 1-.159-.265c-.1-.197-.17-.458-.207-.912c-.037-.462-.038-1.057-.038-1.909m1.663 3.948l4-4c.265.184.534.336.846.423a2.75 2.75 0 0 0 1.483 0a2.8 2.8 0 0 0 .845-.423l4 4a4 4 0 0 1-.478.064c-.462.037-1.057.038-1.909.038H8.8c-.852 0-1.447 0-1.91-.038a4 4 0 0 1-.477-.064m8.361-4.935l4.476-3.637V16.2c0 .852 0 1.447-.038 1.91c-.037.453-.107.714-.207.912q-.07.137-.159.264z"></svg:path>`,
})
export class StashEnvelopeAtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEnvelopeAtDuotoneIcon],svg[stash-envelope-at-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.831 2.881a3.75 3.75 0 0 0-1.662 0c-.62.141-1.184.494-2 1.004L5.76 6.015c-.73.455-1.234.77-1.608 1.208a3.75 3.75 0 0 0-.731 1.318c-.173.55-.172 1.145-.172 2.005v5.686c0 .813 0 1.469.043 2c.045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365c.531.043 1.187.043 2 .043h6.464c.813 0 1.469 0 2-.043c.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.64-1.639c.226-.444.32-.924.365-1.47c.043-.531.043-1.187.043-2v-5.686c0-.86 0-1.455-.172-2.005a3.8 3.8 0 0 0-.73-1.318c-.375-.438-.88-.753-1.61-1.208l-3.406-2.13c-.817-.51-1.38-.863-2.001-1.004M11.5 4.344a2.25 2.25 0 0 1 .998 0c.341.077.678.276 1.648.882l3.2 2c.864.54 1.155.732 1.361.973c.199.231.348.5.44.791c.052.17.078.354.09.662l-5.693 4.626c-.368.3-.613.498-.815.638c-.194.136-.305.186-.393.21a1.25 1.25 0 0 1-.674 0c-.087-.024-.199-.074-.393-.21c-.201-.14-.447-.338-.815-.638L4.761 9.652c.013-.308.039-.492.092-.662c.091-.29.24-.56.439-.791c.206-.241.497-.433 1.362-.973l3.2-2c.97-.606 1.306-.805 1.648-.882m-6.75 7.232l4.78 3.883c.341.278.63.512.882.688c.265.185.534.337.846.424a2.75 2.75 0 0 0 1.483 0c.312-.087.58-.239.846-.424c.252-.176.54-.41.882-.688l4.78-3.883V16.2c0 .852 0 1.447-.038 1.91c-.037.453-.107.714-.207.912a2.25 2.25 0 0 1-.983.983c-.198.1-.459.17-.913.207c-.462.037-1.057.038-1.909.038H8.8c-.852 0-1.447 0-1.91-.038c-.453-.038-.714-.107-.911-.207a2.25 2.25 0 0 1-.984-.983c-.1-.198-.17-.459-.207-.913c-.037-.462-.038-1.057-.038-1.909z"></svg:path><svg:g fill="currentColor" opacity=".5"><svg:path d="M7.25 10.533a4.483 4.483 0 0 1 4.483-4.483H12.8A3.95 3.95 0 0 1 16.75 10v.8a.75.75 0 0 1-1.5 0V10a2.45 2.45 0 0 0-2.45-2.45h-1.067a2.983 2.983 0 0 0-2.983 2.983a.75.75 0 0 1-1.5 0"></svg:path><svg:path d="M13.051 8.571a2.44 2.44 0 0 0-1.218-.321C10.347 8.25 9.25 9.544 9.25 11s1.097 2.75 2.583 2.75c.624 0 1.179-.228 1.613-.6a.75.75 0 0 0 1.072-1.045a.4.4 0 0 1-.101-.272V9a.75.75 0 0 0-1.366-.429M11.833 9.75c.538 0 1.084.497 1.084 1.25s-.546 1.25-1.084 1.25s-1.083-.497-1.083-1.25s.545-1.25 1.083-1.25m-1.42 6.398c-.252-.176-.54-.41-.883-.689l-.303-.246L4.47 19.97l1.06 1.06zm3.174 0l4.883 4.882l1.06-1.06l-4.756-4.757l-.304.246c-.342.278-.63.513-.883.689"></svg:path></svg:g>`,
})
export class StashEnvelopeAtDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEnvelopeAtLightIcon],svg[stash-envelope-at-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.733 6.5A4.233 4.233 0 0 0 7.5 10.733a.5.5 0 1 0 1 0A3.233 3.233 0 0 1 11.733 7.5H12.8a2.7 2.7 0 0 1 2.7 2.7v.8a.5.5 0 0 0 1 0v-.8a3.7 3.7 0 0 0-3.7-3.7z"></svg:path><svg:path fill="currentColor" d="M11.833 8.5c.505 0 .963.167 1.336.448a.5.5 0 0 1 .998.052v2.833c0 .167.06.319.161.436a.5.5 0 1 1-.757.653a2 2 0 0 1-.105-.135a2.23 2.23 0 0 1-1.633.713C10.505 13.5 9.5 12.339 9.5 11s1.005-2.5 2.333-2.5M10.5 11c0 .87.637 1.5 1.333 1.5c.697 0 1.334-.63 1.334-1.5s-.637-1.5-1.334-1.5c-.696 0-1.333.63-1.333 1.5"></svg:path><svg:path fill="currentColor" d="M14.809 4.166c-.98-.612-1.852-.976-2.775-.983c-.925-.007-1.82.343-2.843.983l-3.2 2c-.907.567-1.55 1.146-1.955 1.886c-.403.739-.536 1.58-.536 2.608v5.562c0 .822 0 1.468.043 1.99c.043.53.133.974.338 1.377a3.5 3.5 0 0 0 1.53 1.53c.403.205.847.295 1.378.338c.52.043 1.168.043 1.989.043h6.444c.822 0 1.469 0 1.99-.043c.53-.043.974-.133 1.377-.338a3.5 3.5 0 0 0 1.53-1.53c.205-.403.295-.847.338-1.378c.043-.52.043-1.167.043-1.989V10.66c0-1.028-.133-1.87-.536-2.608c-.404-.74-1.048-1.319-1.955-1.886zm-5.088.848c.95-.594 1.653-.836 2.305-.83c.653.004 1.338.258 2.253.83l3.2 2c.834.521 1.318.988 1.607 1.517c.192.352.312.756.37 1.266l-5.753 4.675c-.722.587-1.227.816-1.68.822c-.45.005-.97-.208-1.726-.822L4.544 9.798c.058-.51.178-.915.37-1.267c.289-.529.773-.996 1.607-1.517zm4.68 10.18L19.5 11.05v5.15c0 .848 0 1.454-.04 1.93c-.038.469-.11.766-.233 1.005a2.5 2.5 0 0 1-.359.526zm-.819.595l4.475 4.475c-.225.1-.508.163-.927.197c-.476.039-1.082.039-1.93.039H8.8c-.848 0-1.455 0-1.93-.04c-.42-.034-.702-.096-.927-.196l4.476-4.476c.54.33 1.066.513 1.617.506c.536-.007 1.04-.194 1.546-.505m-8.45 3.872a2.5 2.5 0 0 1-.36-.526c-.121-.239-.194-.536-.233-1.005c-.039-.476-.039-1.082-.039-1.93v-5.15l5.1 4.144z"></svg:path>`,
})
export class StashEnvelopeAtLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEnvelopeDuotoneIcon],svg[stash-envelope-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.232 4.75H8.768c-.813 0-1.469 0-2 .043c-.546.045-1.026.14-1.47.366a3.75 3.75 0 0 0-1.64 1.639c-.226.444-.32.924-.365 1.47c-.043.531-.043 1.187-.043 2v3.464c0 .813 0 1.469.043 2c.045.546.14 1.026.366 1.47a3.75 3.75 0 0 0 1.639 1.64c.444.226.924.32 1.47.365c.531.043 1.187.043 2 .043h6.464c.813 0 1.469 0 2-.043c.546-.045 1.026-.14 1.47-.366a3.75 3.75 0 0 0 1.64-1.639c.226-.444.32-.924.365-1.47c.043-.531.043-1.187.043-2v-3.464c0-.813 0-1.469-.043-2c-.045-.546-.14-1.026-.366-1.47a3.75 3.75 0 0 0-1.639-1.64c-.444-.226-.924-.32-1.47-.365c-.531-.043-1.187-.043-2-.043M5.98 6.495c.197-.1.458-.17.912-.207c.462-.037 1.057-.038 1.909-.038h6.4c.852 0 1.447 0 1.91.038c.453.037.714.107.912.207c.299.153.559.37.762.633l-5.18 4.489c-.38.33-.633.549-.843.704c-.202.15-.318.205-.409.232a1.25 1.25 0 0 1-.704 0c-.09-.027-.207-.082-.409-.232c-.21-.155-.463-.375-.844-.704l-5.18-4.489a2.25 2.25 0 0 1 .763-.633m-1.21 2.23l4.665 4.044c.354.306.65.564.912.757c.274.203.552.37.88.466a2.75 2.75 0 0 0 1.549 0c.327-.096.605-.263.879-.466c.261-.193.558-.45.912-.757l4.666-4.044c.018.41.018.915.018 1.575v3.4c0 .853 0 1.447-.038 1.91c-.038.453-.107.714-.207.912c-.216.423-.56.767-.983.983c-.198.1-.459.17-.913.207c-.462.037-1.057.038-1.909.038H8.8c-.852 0-1.447 0-1.91-.038c-.453-.038-.714-.107-.911-.207a2.25 2.25 0 0 1-.984-.983c-.1-.198-.17-.459-.207-.913c-.037-.462-.038-1.056-.038-1.909v-3.4c0-.66 0-1.166.018-1.575"></svg:path><svg:path fill="currentColor" d="M9.03 13.97a.75.75 0 0 1 0 1.06l-3.5 3.5l-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0m5.94 0a.75.75 0 0 1 1.06 0l3.5 3.5l-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06" opacity=".5"></svg:path>`,
})
export class StashEnvelopeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEnvelopeFlyingIcon],svg[stash-envelope-flying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.869 7.75c.955 0 1.627 0 2.148.043c.515.04.812.119 1.034.233q.234.121.433.286l-3.622 3.104a17 17 0 0 1-.938.773c-.226.164-.354.221-.45.245a1.25 1.25 0 0 1-.756-.045c-.093-.036-.213-.108-.418-.298a17 17 0 0 1-.839-.88L11.553 9.13a.75.75 0 0 0-1.106 1.013l1.929 2.104c.35.382.643.701.903.943c.272.253.555.466.9.599c.53.204 1.11.239 1.662.1c.358-.09.664-.268.964-.486c.288-.21.617-.491 1.01-.828l3.414-2.927q.02.18.02.423c.004.495-.048 1.13-.122 2.043l-.197 2.4c-.065.792-.111 1.342-.182 1.768q-.02.12-.042.223l-2.136-2.493a.75.75 0 1 0-1.14.976l2.412 2.814q-.18.127-.384.22c-.208.096-.474.16-.92.193c-.456.035-1.037.035-1.866.035h-4.098c-.974 0-1.656 0-2.183-.046c-.402-.035-.666-.093-.862-.172l3.001-3.002a.75.75 0 1 0-1.06-1.06l-3.011 3.01a2 2 0 0 1-.075-.173c-.086-.224-.126-.522-.093-1.042c.033-.528.134-1.203.278-2.166l.449-2.988a.75.75 0 1 0-1.484-.222l-.453 3.021a42 42 0 0 0-.252 1.84H4a.75.75 0 0 0 0 1.5h2.826q.048.306.158.595a3.75 3.75 0 0 0 1.65 1.917c.48.272 1.015.384 1.628.436c.6.052 1.346.052 2.278.052h4.16c.794 0 1.431 0 1.95-.04c.532-.04.997-.124 1.433-.324a3.84 3.84 0 0 0 1.683-1.49c.25-.41.377-.858.461-1.37c.082-.494.132-1.104.194-1.858l.202-2.466c.072-.87.13-1.57.126-2.14c-.004-.586-.07-1.105-.295-1.59a3.8 3.8 0 0 0-1.716-1.779c-.476-.245-.999-.347-1.602-.396c-.588-.047-1.32-.047-2.236-.047H2a.75.75 0 1 0 0 1.5z"></svg:path><svg:path fill="currentColor" d="M3 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm1 3a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class StashEnvelopeFlyingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEnvelopeFlyingDuotoneIcon],svg[stash-envelope-flying-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.869 7.75c.955 0 1.627 0 2.148.043c.515.04.812.119 1.034.233q.234.121.433.286l-3.622 3.104a17 17 0 0 1-.938.773c-.226.164-.354.221-.45.245a1.25 1.25 0 0 1-.756-.045c-.093-.036-.213-.108-.418-.298a17 17 0 0 1-.839-.88L11.553 9.13a.75.75 0 0 0-1.106 1.013l1.929 2.104c.35.382.643.701.903.943c.272.253.555.466.9.599c.53.204 1.11.239 1.662.1c.358-.09.664-.268.964-.486c.288-.21.617-.491 1.01-.828l3.414-2.927q.02.18.02.423c.004.495-.048 1.13-.122 2.043l-.197 2.4c-.065.792-.111 1.342-.182 1.768c-.069.416-.153.654-.263.835a2.34 2.34 0 0 1-1.027.906c-.208.095-.474.158-.92.192c-.456.035-1.037.035-1.866.035h-4.098c-.974 0-1.656 0-2.183-.046c-.52-.045-.808-.128-1.017-.247a2.25 2.25 0 0 1-.99-1.15c-.086-.224-.126-.522-.093-1.042c.033-.528.134-1.203.278-2.166l.449-2.988a.75.75 0 1 0-1.484-.222l-.453 3.021c-.139.921-.25 1.66-.287 2.26c-.04.614-.008 1.16.19 1.675a3.75 3.75 0 0 0 1.65 1.917c.48.272 1.015.384 1.628.436c.6.052 1.346.052 2.278.052h4.16c.794 0 1.431 0 1.95-.04c.532-.04.997-.124 1.433-.324a3.84 3.84 0 0 0 1.683-1.49c.25-.41.377-.858.461-1.37c.082-.494.132-1.104.194-1.858l.202-2.466c.072-.87.13-1.57.126-2.14c-.004-.586-.07-1.105-.295-1.59a3.8 3.8 0 0 0-1.716-1.779c-.476-.245-.999-.347-1.602-.396c-.588-.047-1.32-.047-2.236-.047H2a.75.75 0 1 0 0 1.5z"></svg:path><svg:path fill="currentColor" d="M3 9.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm15.57 4.762a.75.75 0 1 0-1.14.976l3 3.5l1.14-.976zm-6.04 1.018a.75.75 0 1 0-1.06-1.06l-4 4l1.06 1.06zM3.25 16a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75M4 12.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" opacity=".5"></svg:path>`,
})
export class StashEnvelopeFlyingDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEnvelopeFlyingLightIcon],svg[stash-envelope-flying-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.869 7.5c.95 0 1.634 0 2.168.043c.53.043.864.125 1.129.261c.262.135.495.31.692.516l-3.833 3.286c-.42.359-.711.609-.954.785c-.238.173-.396.25-.537.286a1.5 1.5 0 0 1-.906-.055c-.135-.052-.282-.147-.498-.348a17 17 0 0 1-.853-.893L11.37 9.299a.5.5 0 0 0-.738.675l1.923 2.098c.355.387.642.7.895.935c.261.243.517.432.82.549a2.5 2.5 0 0 0 1.51.09c.315-.079.591-.236.88-.446c.28-.203.601-.479 1-.821l3.733-3.199c.07.223.106.5.108.89c.003.508-.05 1.157-.124 2.064l-.197 2.4c-.065.789-.111 1.35-.184 1.789a3.2 3.2 0 0 1-.18.693l-2.435-2.841a.5.5 0 0 0-.76.65l2.582 3.012a2.7 2.7 0 0 1-.64.413c-.245.113-.545.18-1.006.215c-.466.035-1.058.035-1.884.035h-4.098c-.97 0-1.664 0-2.204-.047c-.535-.046-.865-.134-1.12-.278a3 3 0 0 1-.135-.083l3.239-3.238a.5.5 0 1 0-.707-.708l-3.242 3.242a2.5 2.5 0 0 1-.255-.491c-.104-.273-.143-.612-.109-1.148c.034-.541.137-1.229.281-2.187l.448-2.988a.5.5 0 0 0-.988-.148l-.452 3.01c-.126.837-.227 1.511-.273 2.067L7 15.5H4a.5.5 0 0 0 0 1h3q.024 0 .047-.002q.034.4.17.758a3.5 3.5 0 0 0 .47.85l-.04.04l.707.707l.043-.043q.172.128.36.234c.435.247.93.354 1.527.405c.588.051 1.326.051 2.266.051h4.142c.801 0 1.43 0 1.94-.038c.518-.04.95-.12 1.348-.303a3.6 3.6 0 0 0 1.574-1.393c.225-.372.346-.784.428-1.28c.08-.484.13-1.086.192-1.848l.2-2.446c.072-.878.13-1.57.126-2.128c-.003-.57-.069-1.049-.271-1.488a3.56 3.56 0 0 0-1.605-1.66c-.433-.224-.918-.322-1.507-.37c-.578-.046-1.302-.046-2.226-.046H2a.5.5 0 1 0 0 1z"></svg:path><svg:path fill="currentColor" d="M3 9.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm1 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class StashEnvelopeFlyingLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEnvelopeLightIcon],svg[stash-envelope-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.778 5h6.444c.822 0 1.469 0 1.99.043c.53.043.974.133 1.377.338a3.5 3.5 0 0 1 1.53 1.53c.205.403.295.847.338 1.378c.043.52.043 1.168.043 1.989v3.444c0 .822 0 1.469-.043 1.99c-.043.53-.133.974-.338 1.377a3.5 3.5 0 0 1-1.53 1.53c-.403.205-.847.295-1.378.338c-.52.043-1.167.043-1.989.043H8.778c-.821 0-1.468 0-1.99-.043c-.53-.043-.974-.133-1.377-.338a3.5 3.5 0 0 1-1.53-1.53c-.205-.403-.295-.847-.338-1.378c-.043-.52-.043-1.168-.043-1.989v-3.444c0-.821 0-1.468.043-1.99c.043-.53.133-.974.338-1.377a3.5 3.5 0 0 1 1.53-1.53c.403-.205.847-.295 1.378-.338C7.309 5 7.957 5 8.778 5M6.87 6.04c-.469.038-.766.11-1.005.232a2.5 2.5 0 0 0-.982.898l5.349 4.636c.377.327.64.554.859.716c.214.158.357.232.487.27c.276.082.569.082.845 0c.13-.037.273-.112.487-.27c.22-.162.481-.39.859-.716l5.348-4.636a2.5 2.5 0 0 0-.982-.898c-.239-.121-.536-.194-1.005-.233C16.654 6 16.048 6 15.2 6H8.8c-.848 0-1.455 0-1.93.04M4.54 8.37c-.04.475-.04 1.082-.04 1.93v3.4c0 .848 0 1.455.04 1.93c.038.469.11.766.232 1.005a2.5 2.5 0 0 0 .36.526l3.014-3.015a.5.5 0 0 1 .708.708l-2.911 2.91c.225.1.508.163.927.197C7.345 18 7.952 18 8.8 18h6.4c.848 0 1.454 0 1.93-.04c.42-.034.702-.096.927-.196l-2.91-2.91a.5.5 0 0 1 .707-.708l3.014 3.015q.212-.238.36-.526c.121-.239.194-.536.233-1.005c.039-.476.039-1.082.039-1.93v-3.4c0-.848 0-1.455-.04-1.93l-.015-.16l-5.036 4.364c-.36.312-.65.563-.904.751c-.261.194-.513.343-.8.427a2.5 2.5 0 0 1-1.41 0c-.287-.084-.538-.233-.8-.427c-.253-.187-.544-.44-.903-.75L4.555 8.208z"></svg:path>`,
})
export class StashEnvelopeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEqualIcon],svg[stash-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 10A.75.75 0 0 1 7 9.25h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class StashEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEqualDuotoneIcon],svg[stash-equal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"></svg:path>`,
})
export class StashEqualDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEqualLightIcon],svg[stash-equal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 10a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashEqualLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEqualSolidIcon],svg[stash-equal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 10c0-.69.56-1.25 1.25-1.25h10a1.25 1.25 0 1 1 0 2.5H7c-.69 0-1.25-.56-1.25-1.25m0 4c0-.69.56-1.25 1.25-1.25h10a1.25 1.25 0 1 1 0 2.5H7c-.69 0-1.25-.56-1.25-1.25"></svg:path>`,
})
export class StashEqualSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEspiralBookIcon],svg[stash-espiral-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.17 3.25h6.66c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v10.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.345.03H9.17l-.331.003c-.704.008-1.46.017-2.087-.303a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074a10 10 0 0 1-.027-.69A2 2 0 0 1 4.177 15a2 2 0 0 1-.677-1.5c0-.597.262-1.133.677-1.5a2 2 0 0 1-.677-1.5c0-.597.262-1.134.677-1.5a2 2 0 0 1 1.14-3.492c.04-.263.11-.515.233-.756A2.75 2.75 0 0 1 6.752 3.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03M5.25 15.89v-.359a1 1 0 0 0 0 1.937zm1.525 1.162c.023.288.065.425.111.515l.007.014q.087.163.214.294c.219.218.51.323.84.35c.296.024.68.025 1.253.025h6.6c.572 0 .957 0 1.252-.025c.332-.027.622-.132.84-.35q.13-.131.215-.294l.007-.014l.033-.078c.033-.09.06-.221.078-.437l.008-.115c.017-.28.017-.636.017-1.137V7.2c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025H9.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514l-.001.011c.443.367.726.921.726 1.542a.5.5 0 0 1-.75.433V8.94c.457.366.75.93.75 1.561a.5.5 0 0 1-.75.433v1.006c.457.366.75.93.75 1.561a.5.5 0 0 1-.75.433v1.006c.457.366.75.93.75 1.561a.5.5 0 0 1-.733.442zm.082 2.448c.1.265.327.487.576.614c.09.046.227.088.514.111c.296.024.68.025 1.253.025h6.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.2 1.2 0 0 0 .576-.614a2 2 0 0 1-.282.103c-.22.064-.449.098-.686.117c-.342.028-.755.03-1.245.03H9.07a16 16 0 0 1-1.316-.036a2.9 2.9 0 0 1-.897-.214M4.5 7.5a1 1 0 0 0 .75.969v-1.3q0-.342.002-.638A1 1 0 0 0 4.5 7.5m0 3a1 1 0 0 0 .75.969V9.532a1 1 0 0 0-.75.968m0 3a1 1 0 0 0 .75.969v-1.937a1 1 0 0 0-.75.968"></svg:path><svg:path fill="currentColor" d="M10.478 6.25h4.044c.214 0 .41 0 .576.011c.178.012.373.04.572.122c.429.178.77.519.947.947c.082.199.11.394.122.572c.011.165.011.362.011.576v.044c0 .214 0 .41-.011.576c-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122c-.165.011-.362.011-.576.011h-4.044c-.214 0-.41 0-.576-.011a1.8 1.8 0 0 1-.572-.122a1.75 1.75 0 0 1-.947-.947a1.8 1.8 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576v-.044c0-.214 0-.41.011-.576c.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122c.165-.011.362-.011.576-.011m-.577 1.52a.25.25 0 0 0-.13.131a1 1 0 0 0-.013.103a8 8 0 0 0-.008.496c0 .243 0 .388.008.496c.004.067.01.095.012.103a.25.25 0 0 0 .131.13a1 1 0 0 0 .103.013c.108.008.253.008.496.008h4c.243 0 .388 0 .496-.008a1 1 0 0 0 .103-.012a.25.25 0 0 0 .13-.131a1 1 0 0 0 .013-.103c.008-.108.008-.253.008-.496s0-.388-.008-.496a1 1 0 0 0-.012-.103a.25.25 0 0 0-.131-.13a1 1 0 0 0-.103-.013a8 8 0 0 0-.496-.008h-4c-.243 0-.388 0-.496.008a1 1 0 0 0-.103.012"></svg:path>`,
})
export class StashEspiralBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEspiralBookDuotoneIcon],svg[stash-espiral-book-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.901 7.77a.25.25 0 0 0-.13.131a1 1 0 0 0-.013.103a8 8 0 0 0-.008.496c0 .243 0 .388.008.496c.004.067.01.095.012.103a.25.25 0 0 0 .131.13a1 1 0 0 0 .103.013c.108.008.253.008.496.008h4c.243 0 .388 0 .496-.008a1 1 0 0 0 .103-.012a.25.25 0 0 0 .13-.131a1 1 0 0 0 .013-.103c.008-.108.008-.253.008-.496s0-.388-.008-.496a1 1 0 0 0-.012-.103a.25.25 0 0 0-.131-.13a1 1 0 0 0-.103-.013a8 8 0 0 0-.496-.008h-4c-.243 0-.388 0-.496.008a1 1 0 0 0-.103.012M6.856 19.5c.1.265.328.487.576.614c.09.046.228.088.515.111c.296.024.68.025 1.253.025h6.6c.572 0 .956 0 1.252-.025c.287-.023.425-.065.515-.111a1.2 1.2 0 0 0 .576-.614a2 2 0 0 1-.283.103c-.22.064-.448.098-.686.117c-.341.028-.754.03-1.245.03H9.07a16 16 0 0 1-1.316-.036a2.9 2.9 0 0 1-.898-.214" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.17 3.25h6.66c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v10.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.345.03H9.17l-.331.003c-.704.008-1.46.017-2.087-.303a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074a10 10 0 0 1-.027-.69A2 2 0 0 1 4.177 15a2 2 0 0 1-.677-1.5c0-.597.262-1.133.677-1.5a2 2 0 0 1-.677-1.5c0-.597.262-1.134.677-1.5a2 2 0 0 1 1.14-3.492c.04-.263.11-.515.233-.756A2.75 2.75 0 0 1 6.752 3.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03M5.25 15.89v-.359a1 1 0 0 0 0 1.937zm1.525 1.162c.023.288.065.425.111.515l.007.014q.087.163.214.294c.219.218.51.323.84.35c.296.024.68.025 1.253.025h6.6c.572 0 .957 0 1.252-.025c.332-.027.622-.132.84-.35q.13-.131.215-.294l.007-.014l.033-.078c.033-.09.06-.221.078-.437l.008-.115c.017-.28.017-.636.017-1.137V7.2c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025H9.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514l-.001.011c.443.367.726.921.726 1.542a.5.5 0 0 1-.75.433V8.94c.457.366.75.93.75 1.561a.5.5 0 0 1-.75.433v1.006c.457.366.75.93.75 1.561a.5.5 0 0 1-.75.433v1.006c.457.366.75.93.75 1.561a.5.5 0 0 1-.733.442zm.082 2.448c.1.265.327.487.576.614c.09.046.227.088.514.111c.296.024.68.025 1.253.025h6.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.2 1.2 0 0 0 .576-.614a2 2 0 0 1-.282.103c-.22.064-.449.098-.686.117c-.342.028-.755.03-1.245.03H9.07a16 16 0 0 1-1.316-.036a2.9 2.9 0 0 1-.897-.214M4.5 7.5a1 1 0 0 0 .75.969v-1.3q0-.342.002-.638A1 1 0 0 0 4.5 7.5m0 3a1 1 0 0 0 .75.969V9.532a1 1 0 0 0-.75.968m0 3a1 1 0 0 0 .75.969v-1.937a1 1 0 0 0-.75.968"></svg:path><svg:path fill="currentColor" d="M10.478 6.25h4.044c.214 0 .41 0 .576.011c.178.012.373.04.572.122c.429.178.77.519.947.947c.082.199.11.394.122.572c.011.165.011.362.011.576v.044c0 .214 0 .41-.011.576c-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122c-.165.011-.362.011-.576.011h-4.044c-.214 0-.41 0-.576-.011a1.8 1.8 0 0 1-.572-.122a1.75 1.75 0 0 1-.947-.947a1.8 1.8 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576v-.044c0-.214 0-.41.011-.576c.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122c.165-.011.362-.011.576-.011m-.577 1.52a.25.25 0 0 0-.13.131a1 1 0 0 0-.013.103a8 8 0 0 0-.008.496c0 .243 0 .388.008.496c.004.067.01.095.012.103a.25.25 0 0 0 .131.13a1 1 0 0 0 .103.013c.108.008.253.008.496.008h4c.243 0 .388 0 .496-.008a1 1 0 0 0 .103-.012a.25.25 0 0 0 .13-.131a1 1 0 0 0 .013-.103c.008-.108.008-.253.008-.496s0-.388-.008-.496a1 1 0 0 0-.012-.103a.25.25 0 0 0-.131-.13a1 1 0 0 0-.103-.013a8 8 0 0 0-.496-.008h-4c-.243 0-.388 0-.496.008a1 1 0 0 0-.103.012"></svg:path>`,
})
export class StashEspiralBookDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEspiralBookLightIcon],svg[stash-espiral-book-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.484 6.5h4.032c.22 0 .409 0 .565.01c.165.012.33.037.493.104a1.5 1.5 0 0 1 .812.812c.067.163.092.328.103.493c.011.156.011.346.011.565v.032c0 .22 0 .409-.01.565a1.6 1.6 0 0 1-.104.493a1.5 1.5 0 0 1-.812.812a1.5 1.5 0 0 1-.493.103c-.156.011-.346.011-.565.011h-4.032c-.22 0-.409 0-.565-.01a1.5 1.5 0 0 1-.493-.104a1.5 1.5 0 0 1-.812-.812a1.5 1.5 0 0 1-.103-.493a9 9 0 0 1-.011-.565v-.032c0-.22 0-.409.01-.565a1.6 1.6 0 0 1 .104-.493a1.5 1.5 0 0 1 .812-.812c.163-.067.328-.092.493-.103c.156-.011.346-.011.565-.011m-.497 1.008a.6.6 0 0 0-.178.03a.5.5 0 0 0-.27.27a.6.6 0 0 0-.03.179A9 9 0 0 0 9.5 8.5c0 .24 0 .395.008.513a.6.6 0 0 0 .03.178a.5.5 0 0 0 .27.27a.6.6 0 0 0 .179.03c.118.009.273.009.513.009h4c.24 0 .395 0 .513-.008a.6.6 0 0 0 .178-.03a.5.5 0 0 0 .27-.27a.6.6 0 0 0 .03-.179c.009-.118.009-.273.009-.513s0-.395-.008-.513a.6.6 0 0 0-.03-.178a.5.5 0 0 0-.27-.27a.6.6 0 0 0-.179-.03A9 9 0 0 0 14.5 7.5h-4c-.24 0-.395 0-.513.008"></svg:path><svg:path fill="currentColor" d="M9.179 3.5h6.642c.542 0 .98 0 1.333.029c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.029.355.029.792.029 1.334v8.642q0 .173.004.353c.005.346.002.691 0 1.037l-.004.61c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244c-.355.029-.792.029-1.334.029H9.18c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98a10 10 0 0 1-.026-.655H5.5A2 2 0 0 1 4.177 15a2 2 0 0 1-.677-1.5c0-.597.262-1.133.677-1.5a2 2 0 0 1-.677-1.5c0-.597.262-1.134.677-1.5a2 2 0 0 1 1.394-3.499c.038-.227.1-.437.201-.636a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243C8.2 3.5 8.638 3.5 9.18 3.5M6.5 7.498v1.27a2 2 0 0 1 1 1.732a.5.5 0 0 1-1 0v-.002v1.27a2 2 0 0 1 1 1.732a.5.5 0 0 1-1 0v-.002v1.27a2 2 0 0 1 1 1.732a.5.5 0 0 1-.996.062q.004.293.022.51c.024.303.07.477.137.609a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137c.309.026.705.026 1.273.026h6.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.092-.181.14-.39.164-.608c.031-.29.02-.596.01-.882L18.502 16l-.003-.2V7.2c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137c-.308-.026-.705-.026-1.273-.026H9.2c-.568 0-.964 0-1.273.026c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.056.11-.097.25-.124.472c.576.35.961.985.961 1.709a.5.5 0 0 1-1 0zM5.503 6.5H5.5a1 1 0 0 0 0 2V7.179q0-.371.003-.679m-.003 3a1 1 0 0 0 0 2zm0 3a1 1 0 1 0 0 2zm0 3a1 1 0 1 0 0 2v-.578a12 12 0 0 1-.004-.748l.004-.353zm1.365 3.727a2.5 2.5 0 0 1-.344-.211l.005.057c.024.302.07.476.137.608a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137c.309.026.705.026 1.273.026h6.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.067-.132.113-.306.137-.608l.005-.057q-.162.12-.344.212c-.296.15-.616.213-.98.243c-.355.029-.792.029-1.334.029H9.179c-.541 0-.978 0-1.332-.029c-.365-.03-.685-.093-.981-.244"></svg:path>`,
})
export class StashEspiralBookLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEspiralBookSolidIcon],svg[stash-espiral-book-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.77 7.901a.25.25 0 0 1 .131-.13a1 1 0 0 1 .103-.013a8 8 0 0 1 .496-.008h4c.243 0 .388 0 .496.008c.067.004.095.01.103.012a.25.25 0 0 1 .13.131a1 1 0 0 1 .013.103c.008.108.008.253.008.496s0 .388-.008.496a1 1 0 0 1-.012.103a.25.25 0 0 1-.131.13a1 1 0 0 1-.103.013a8 8 0 0 1-.496.008h-4c-.243 0-.388 0-.496-.008A1 1 0 0 1 9.9 9.23a.25.25 0 0 1-.13-.131a1 1 0 0 1-.013-.103A8 8 0 0 1 9.75 8.5c0-.243 0-.388.008-.496A1 1 0 0 1 9.77 7.9"></svg:path><svg:path fill="currentColor" d="M15.83 3.25H9.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 5.55 4.752a2.5 2.5 0 0 0-.234.756A2 2 0 0 0 4.177 9a2 2 0 0 0-.677 1.5c0 .597.262 1.133.677 1.5a2 2 0 0 0-.677 1.5c0 .597.262 1.133.677 1.5a2 2 0 0 0 1.075 3.485q.004.384.028.69c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.628.32 1.383.311 2.087.303l.33-.003h6.661c.535 0 .98 0 1.345-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074c.03-.365.03-.81.03-1.345V7.17c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03M5.25 17.468a1 1 0 0 1 0-1.937zm2.183 2.646a1.2 1.2 0 0 1-.576-.614a2.9 2.9 0 0 0 .968.22c.342.028.755.03 1.245.03h6.86c.49 0 .903-.002 1.245-.03a3.4 3.4 0 0 0 .754-.138a2 2 0 0 0 .214-.082a1.2 1.2 0 0 1-.576.614c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H9.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111M5.253 6.53q-.004.295-.003.639v1.299a1 1 0 0 1 .002-1.938m-.003 3v1.938a1 1 0 0 1 0-1.937m0 3v1.938a1 1 0 0 1 0-1.937m5.228-6.281h4.044c.214 0 .41 0 .576.011c.178.012.373.04.572.122c.429.178.77.519.947.947c.082.199.11.394.122.572c.011.165.011.362.011.576v.044c0 .214 0 .41-.011.576c-.012.178-.04.373-.122.572a1.75 1.75 0 0 1-.947.947c-.199.082-.394.11-.572.122c-.165.011-.362.011-.576.011h-4.044c-.214 0-.41 0-.576-.011a1.8 1.8 0 0 1-.572-.122a1.75 1.75 0 0 1-.947-.947a1.8 1.8 0 0 1-.122-.572c-.011-.165-.011-.362-.011-.576v-.044c0-.214 0-.41.011-.576c.012-.178.04-.373.122-.572a1.75 1.75 0 0 1 .947-.947c.199-.082.394-.11.572-.122c.165-.011.362-.011.576-.011"></svg:path>`,
})
export class StashEspiralBookSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationAlertIcon],svg[stash-exclamation-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.31 20.543a.75.75 0 0 0 1.06-.025c2.092-2.193 3.38-5.203 3.38-8.518s-1.288-6.325-3.38-8.518a.75.75 0 0 0-1.086 1.036c1.832 1.92 2.966 4.56 2.966 7.482c0 2.921-1.134 5.563-2.966 7.482a.75.75 0 0 0 .025 1.06m-14.619.001a.75.75 0 0 0 .026-1.06C2.884 17.562 1.75 14.92 1.75 12s1.134-5.563 2.966-7.482A.75.75 0 0 0 3.63 3.482C1.538 5.675.25 8.685.25 12s1.288 6.325 3.38 8.518a.75.75 0 0 0 1.06.025M10.756 8.4C10.686 7.65 11.264 7 12 7s1.313.649 1.244 1.4l-.494 4.15a.76.76 0 0 1-.75.7a.76.76 0 0 1-.75-.7zm2.494 7.35a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill="currentColor" d="M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5"></svg:path>`,
})
export class StashExclamationAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationAlertDuotoneIcon],svg[stash-exclamation-alert-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"></svg:path><svg:path fill="currentColor" d="M19.31 20.543a.75.75 0 0 0 1.06-.025c2.092-2.193 3.38-5.203 3.38-8.518s-1.288-6.325-3.38-8.518a.75.75 0 0 0-1.086 1.036c1.832 1.92 2.966 4.56 2.966 7.482c0 2.921-1.134 5.563-2.966 7.482a.75.75 0 0 0 .025 1.06m-14.62 0a.75.75 0 0 0 .026-1.06C2.884 17.562 1.75 14.92 1.75 12s1.134-5.563 2.966-7.482A.75.75 0 0 0 3.63 3.482C1.538 5.675.25 8.685.25 12s1.288 6.325 3.38 8.518a.75.75 0 0 0 1.06.025M12 7c-.736 0-1.313.649-1.244 1.4l.494 4.15a.76.76 0 0 0 .75.7a.76.76 0 0 0 .75-.7l.494-4.15C13.314 7.65 12.736 7 12 7m0 10a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" opacity=".5"></svg:path>`,
})
export class StashExclamationAlertDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationAlertLightIcon],svg[stash-exclamation-alert-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.482 20.362a.5.5 0 0 0 .707-.017C22.237 18.198 23.5 15.25 23.5 12s-1.263-6.198-3.311-8.345a.5.5 0 0 0-.724.69C21.34 6.31 22.5 9.013 22.5 12s-1.16 5.69-3.035 7.655a.5.5 0 0 0 .017.707m-14.964 0a.5.5 0 0 0 .017-.707C2.66 17.69 1.5 14.987 1.5 12s1.16-5.69 3.035-7.655a.5.5 0 0 0-.724-.69C1.763 5.802.5 8.75.5 12s1.263 6.198 3.311 8.345a.5.5 0 0 0 .707.017"></svg:path><svg:path fill="currentColor" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"></svg:path><svg:path fill="currentColor" d="M12 7c-.736 0-1.313.649-1.244 1.4l.494 4.15a.76.76 0 0 0 .75.7a.76.76 0 0 0 .75-.7l.494-4.15C13.314 7.65 12.736 7 12 7m0 10a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path>`,
})
export class StashExclamationAlertLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationAlertSolidIcon],svg[stash-exclamation-alert-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.75a8.75 8.75 0 1 0 0-17.5a8.75 8.75 0 0 0 0 17.5M10.639 8.063C10.564 7.24 11.195 6.53 12 6.53s1.436.71 1.361 1.532l-.54 4.538a.83.83 0 0 1-.821.766a.83.83 0 0 1-.82-.766zm2.728 8.039a1.367 1.367 0 1 1-2.734 0a1.367 1.367 0 0 1 2.734 0"></svg:path><svg:path fill="currentColor" d="M19.31 20.543a.75.75 0 0 0 1.06-.025c2.092-2.193 3.38-5.203 3.38-8.518s-1.288-6.325-3.38-8.518a.75.75 0 0 0-1.086 1.036c1.832 1.92 2.966 4.56 2.966 7.482c0 2.921-1.134 5.563-2.966 7.482a.75.75 0 0 0 .025 1.06m-14.62 0a.75.75 0 0 0 .026-1.06C2.884 17.562 1.75 14.92 1.75 12s1.134-5.563 2.966-7.482A.75.75 0 0 0 3.63 3.482C1.538 5.675.25 8.685.25 12s1.288 6.325 3.38 8.518a.75.75 0 0 0 1.06.025"></svg:path>`,
})
export class StashExclamationAlertSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationCircleIcon],svg[stash-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c-.736 0-1.313.649-1.244 1.4l.494 4.15a.76.76 0 0 0 .75.7a.76.76 0 0 0 .75-.7l.494-4.15C13.314 7.65 12.736 7 12 7m0 10a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path><svg:path fill="currentColor" d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"></svg:path>`,
})
export class StashExclamationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationCircleDuotoneIcon],svg[stash-exclamation-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c-.736 0-1.313.649-1.244 1.4l.494 4.15a.76.76 0 0 0 .75.7a.76.76 0 0 0 .75-.7l.494-4.15C13.314 7.65 12.736 7 12 7m0 10a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"></svg:path>`,
})
export class StashExclamationCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationCircleLightIcon],svg[stash-exclamation-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 7c-.736 0-1.313.649-1.244 1.4l.494 4.15a.76.76 0 0 0 .75.7a.76.76 0 0 0 .75-.7l.494-4.15C13.314 7.65 12.736 7 12 7m0 10a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5"></svg:path><svg:path fill="currentColor" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0"></svg:path>`,
})
export class StashExclamationCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationCircleSolidIcon],svg[stash-exclamation-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16M10.756 8.4C10.686 7.65 11.264 7 12 7s1.313.649 1.244 1.4l-.494 4.15a.76.76 0 0 1-.75.7a.76.76 0 0 1-.75-.7zm2.494 7.35a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path>`,
})
export class StashExclamationCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationTriangleIcon],svg[stash-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.756 9.4C10.686 8.65 11.264 8 12 8s1.313.649 1.244 1.4l-.494 4.15a.76.76 0 0 1-.75.7a.76.76 0 0 1-.75-.7zm2.494 7.35a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.164 3.492a2.92 2.92 0 0 0-2.328 0c-.506.22-.881.634-1.222 1.115c-.338.477-.711 1.123-1.173 1.923l-4.815 8.34c-.438.758-.794 1.374-1.026 1.881c-.235.51-.4 1.025-.336 1.558c.095.782.526 1.48 1.175 1.929c.438.303.97.411 1.543.462c.57.05 1.3.05 2.205.05h9.626c.905 0 1.635 0 2.205-.05c.573-.05 1.105-.16 1.543-.462a2.75 2.75 0 0 0 1.175-1.929c.065-.533-.102-1.047-.336-1.558c-.232-.507-.588-1.123-1.026-1.882l-4.815-8.34c-.462-.799-.835-1.445-1.173-1.922c-.34-.48-.716-.894-1.222-1.115m-1.729 1.375a1.42 1.42 0 0 1 1.13 0c.123.054.303.192.597.608c.293.413.632.998 1.117 1.839l4.776 8.272c.463.8.782 1.356.982 1.79c.201.44.223.64.21.752a1.25 1.25 0 0 1-.54.876c-.11.076-.32.157-.82.201c-.497.044-1.16.045-2.11.045H7.223c-.951 0-1.614 0-2.11-.044c-.5-.045-.711-.126-.821-.202a1.25 1.25 0 0 1-.54-.876c-.013-.111.009-.313.21-.751c.2-.435.52-.99.982-1.791L9.72 7.314c.485-.841.824-1.426 1.117-1.84s.474-.553.597-.607" clip-rule="evenodd"></svg:path>`,
})
export class StashExclamationTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationTriangleDuotoneIcon],svg[stash-exclamation-triangle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8c-.736 0-1.313.649-1.244 1.4l.494 4.15a.76.76 0 0 0 .75.7a.76.76 0 0 0 .75-.7l.494-4.15C13.314 8.65 12.736 8 12 8m0 10a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12.565 4.867a1.42 1.42 0 0 0-1.13 0c-.123.054-.303.192-.598.608c-.292.413-.63.998-1.116 1.839l-4.776 8.272c-.463.8-.782 1.356-.982 1.79c-.201.44-.223.64-.21.752c.042.344.233.664.54.876c.11.076.32.157.82.201c.497.044 1.16.045 2.11.045h9.553c.95 0 1.614 0 2.11-.044c.5-.045.711-.126.821-.202c.307-.212.498-.532.54-.876c.013-.111-.009-.313-.21-.751c-.2-.435-.52-.99-.982-1.791L14.28 7.314c-.485-.841-.824-1.426-1.117-1.84s-.474-.553-.597-.607m-1.73-1.375a2.92 2.92 0 0 1 2.33 0c.505.22.88.634 1.221 1.115c.338.477.711 1.123 1.173 1.923l4.815 8.34c.438.759.794 1.374 1.026 1.881c.235.51.4 1.025.336 1.558a2.75 2.75 0 0 1-1.175 1.929c-.438.303-.97.411-1.543.462c-.57.05-1.3.05-2.205.05H7.187c-.905 0-1.635 0-2.205-.05c-.573-.05-1.105-.16-1.543-.462a2.75 2.75 0 0 1-1.175-1.929c-.065-.533.101-1.047.336-1.558c.232-.507.588-1.123 1.026-1.882L8.441 6.53c.462-.8.835-1.446 1.173-1.923c.34-.48.716-.894 1.222-1.115"></svg:path>`,
})
export class StashExclamationTriangleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationTriangleLightIcon],svg[stash-exclamation-triangle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.756 9.4C10.686 8.65 11.264 8 12 8s1.313.649 1.244 1.4l-.494 4.15a.76.76 0 0 1-.75.7a.76.76 0 0 1-.75-.7zm2.494 7.35a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M13.064 3.721a2.67 2.67 0 0 0-2.128 0c-.443.193-.785.56-1.118 1.031c-.332.467-.7 1.105-1.166 1.913l-4.803 8.319c-.444.768-.795 1.375-1.022 1.871c-.229.499-.37.961-.315 1.424a2.5 2.5 0 0 0 1.07 1.753c.383.265.86.37 1.422.419c.559.049 1.28.049 2.194.049h9.604c.915 0 1.635 0 2.194-.05c.561-.049 1.04-.153 1.422-.418a2.5 2.5 0 0 0 1.07-1.753c.056-.463-.086-.925-.315-1.424c-.227-.496-.578-1.103-1.021-1.871l-4.804-8.319c-.466-.808-.834-1.446-1.166-1.913c-.333-.47-.675-.838-1.118-1.03m-1.729.917a1.67 1.67 0 0 1 1.33 0c.187.082.399.266.701.692s.647 1.022 1.13 1.859l4.776 8.272c.46.796.787 1.363.992 1.811c.207.45.253.705.231.887c-.05.416-.282.8-.646 1.05c-.164.115-.428.2-.94.246c-.51.045-1.187.045-2.133.045H7.224c-.946 0-1.623 0-2.132-.045c-.513-.046-.777-.131-.941-.245a1.5 1.5 0 0 1-.646-1.051c-.022-.182.024-.436.23-.887c.206-.448.533-1.015.993-1.811L9.504 7.19c.483-.837.828-1.434 1.13-1.859s.514-.61.701-.692" clip-rule="evenodd"></svg:path>`,
})
export class StashExclamationTriangleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExclamationTriangleSolidIcon],svg[stash-exclamation-triangle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.164 3.492a2.92 2.92 0 0 0-2.328 0c-.506.22-.881.634-1.222 1.115c-.338.477-.711 1.123-1.173 1.923l-4.815 8.34c-.438.758-.794 1.374-1.026 1.881c-.235.51-.4 1.025-.336 1.558c.095.782.526 1.48 1.175 1.929c.438.303.97.411 1.543.462c.57.05 1.3.05 2.205.05h9.626c.905 0 1.635 0 2.205-.05c.573-.05 1.105-.16 1.543-.462a2.75 2.75 0 0 0 1.175-1.929c.065-.533-.102-1.047-.336-1.558c-.232-.507-.588-1.123-1.026-1.882l-4.815-8.34c-.462-.799-.835-1.445-1.173-1.922c-.34-.48-.716-.894-1.222-1.115M10.756 9.4C10.686 8.65 11.264 8 12 8s1.313.649 1.244 1.4l-.494 4.15a.76.76 0 0 1-.75.7a.76.76 0 0 1-.75-.7zm2.494 7.35a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashExclamationTriangleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExpandDiagonalIcon],svg[stash-expand-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.846 8.154h-2.785a.75.75 0 0 1 0-1.5h2.755c.123 0 .255 0 .37.01c.13.01.3.036.478.126c.235.12.426.311.546.546c.09.177.116.349.127.478c.01.115.01.247.01.37v2.755a.75.75 0 0 1-1.5 0V8.154M7.404 12.31a.75.75 0 0 1 .75.75v2.785h2.785a.75.75 0 1 1 0 1.5H8.184c-.123 0-.255 0-.37-.01a1.3 1.3 0 0 1-.478-.126a1.25 1.25 0 0 1-.546-.546a1.3 1.3 0 0 1-.127-.478a5 5 0 0 1-.01-.37V13.06a.75.75 0 0 1 .75-.75"></svg:path>`,
})
export class StashExpandDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExpandDiagonalDuotoneIcon],svg[stash-expand-diagonal-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.596 8.404v2.535a1 1 0 1 0 2 0V8.181c0-.12 0-.262-.01-.387a1.5 1.5 0 0 0-.153-.571a1.5 1.5 0 0 0-.656-.656a1.5 1.5 0 0 0-.571-.153c-.125-.01-.268-.01-.387-.01h-2.758a1 1 0 1 0 0 2zM7.404 12.06a1 1 0 0 1 1 1v2.535h2.535a1 1 0 0 1 0 2H8.181c-.12 0-.262 0-.387-.01a1.5 1.5 0 0 1-.571-.153a1.5 1.5 0 0 1-.656-.656a1.5 1.5 0 0 1-.153-.571c-.01-.125-.01-.268-.01-.387V13.06a1 1 0 0 1 1-1"></svg:path>`,
})
export class StashExpandDiagonalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExpandDiagonalLightIcon],svg[stash-expand-diagonal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.084 7.909a4 4 0 0 0-.288-.005h-2.735a.5.5 0 1 1 0-1h2.751c.126 0 .25 0 .353.008c.115.01.25.032.385.1a1 1 0 0 1 .437.438c.07.136.091.27.1.385a5 5 0 0 1 .01.353v2.751a.5.5 0 1 1-1 0V8.204a4 4 0 0 0-.007-.294zm-8.68 4.652a.5.5 0 0 1 .5.5v2.735a4 4 0 0 0 .006.294l.006.001c.058.005.14.005.288.005h2.735a.5.5 0 1 1 0 1H8.188c-.126 0-.25 0-.353-.008a1 1 0 0 1-.385-.1a1 1 0 0 1-.437-.438a1 1 0 0 1-.1-.385a5 5 0 0 1-.01-.353v-2.751a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashExpandDiagonalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExpandDiagonalSolidIcon],svg[stash-expand-diagonal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.346 8.654v2.285a1.25 1.25 0 0 0 2.5 0V8.18c0-.117 0-.27-.01-.405a1.8 1.8 0 0 0-.18-.665a1.75 1.75 0 0 0-.765-.764a1.8 1.8 0 0 0-.665-.18a5 5 0 0 0-.405-.011h-2.76a1.25 1.25 0 1 0 0 2.5zM7.404 11.81c.69 0 1.25.56 1.25 1.25v2.285h2.285a1.25 1.25 0 0 1 0 2.5H8.18c-.117 0-.27 0-.405-.01a1.8 1.8 0 0 1-.665-.18a1.75 1.75 0 0 1-.764-.765a1.8 1.8 0 0 1-.18-.665c-.011-.136-.011-.288-.011-.405v-2.76c0-.69.56-1.25 1.25-1.25"></svg:path>`,
})
export class StashExpandDiagonalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExpandVerticalIcon],svg[stash-expand-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.97 8.53a.75.75 0 1 0 1.06-1.06l-1.948-1.95a5 5 0 0 0-.268-.254a1.3 1.3 0 0 0-.428-.249a1.25 1.25 0 0 0-.772 0a1.3 1.3 0 0 0-.428.249a5 5 0 0 0-.268.254L8.97 7.47a.75.75 0 0 0 1.06 1.06L12 6.56zm-3.94 6.94a.75.75 0 1 0-1.06 1.06l1.948 1.949c.087.086.18.18.268.255c.1.084.239.186.428.248c.25.081.521.081.772 0a1.3 1.3 0 0 0 .428-.248c.088-.075.181-.169.268-.255l1.948-1.949a.75.75 0 1 0-1.06-1.06L12 17.44z"></svg:path>`,
})
export class StashExpandVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExpandVerticalDuotoneIcon],svg[stash-expand-vertical-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.793 8.707a1 1 0 1 0 1.414-1.414l-1.95-1.95c-.085-.085-.185-.186-.281-.267a1.5 1.5 0 0 0-.513-.295a1.5 1.5 0 0 0-.926 0a1.5 1.5 0 0 0-.513.295c-.096.081-.196.182-.28.266l-1.951 1.95a1 1 0 0 0 1.414 1.415L12 6.914zm-3.586 6.586a1 1 0 0 0-1.414 1.414l1.95 1.95c.085.085.185.186.281.267c.111.094.28.22.513.296a1.5 1.5 0 0 0 .926 0a1.5 1.5 0 0 0 .513-.296c.096-.081.196-.182.28-.266l1.951-1.95a1 1 0 0 0-1.414-1.415L12 17.086z"></svg:path>`,
})
export class StashExpandVerticalDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExpandVerticalLightIcon],svg[stash-expand-vertical-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.146 8.354a.5.5 0 0 0 .708-.708l-1.946-1.945c-.09-.09-.176-.176-.256-.244a1 1 0 0 0-.343-.2a1 1 0 0 0-.618 0a1 1 0 0 0-.343.2c-.08.068-.167.155-.256.244L9.146 7.646a.5.5 0 1 0 .708.708l1.934-1.935c.105-.105.162-.162.207-.2L12 6.215l.005.004c.045.038.102.095.207.2zm-4.292 7.292a.5.5 0 0 0-.708.708l1.946 1.945c.09.09.176.176.256.244c.087.074.198.154.343.201a1 1 0 0 0 .618 0a1 1 0 0 0 .343-.201c.08-.068.167-.155.256-.244l1.946-1.945a.5.5 0 0 0-.708-.708l-1.934 1.935a4 4 0 0 1-.207.2l-.005.004l-.005-.005a4 4 0 0 1-.207-.2z"></svg:path>`,
})
export class StashExpandVerticalLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExpandVerticalSolidIcon],svg[stash-expand-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.616 8.884a1.25 1.25 0 0 0 1.768-1.768l-1.952-1.952c-.083-.083-.19-.19-.294-.279a1.8 1.8 0 0 0-.597-.342a1.75 1.75 0 0 0-1.082 0c-.276.09-.474.238-.597.342a5 5 0 0 0-.294.279L8.616 7.116a1.25 1.25 0 1 0 1.768 1.768L12 7.268zm-3.232 6.232a1.25 1.25 0 1 0-1.768 1.768l1.952 1.952c.083.083.19.19.294.279c.123.104.32.252.597.342c.352.114.73.114 1.082 0c.276-.09.474-.238.597-.342c.104-.089.211-.196.294-.279l1.952-1.952a1.25 1.25 0 0 0-1.768-1.768L12 16.732z"></svg:path>`,
})
export class StashExpandVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExplicitContentIcon],svg[stash-explicit-content-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.367 4.25h1.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v1.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-1.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655v-1.266c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M8.834 5.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v1.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h1.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-1.2c0-1.133 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-1.2c-1.133 0-1.937 0-2.566.052"></svg:path><svg:path fill="currentColor" d="M11.6 7.75h1.9a.75.75 0 0 1 0 1.5c-.826 0-2.496.011-2.496.011c-.152.013-.23.08-.243.243c-.047.577-.011 1.168-.011 1.746h1.75a.75.75 0 0 1 0 1.5h-1.75c0 .578-.036 1.169.011 1.746c.014.163.09.23.243.243c0 0 1.67.011 2.496.011a.75.75 0 0 1 0 1.5h-1.926c-.258 0-.494 0-.692-.016c-.615-.05-1.156-.38-1.441-.94c-.214-.419-.191-.91-.191-1.368V10.1c0-.268 0-.513.016-.718a1.74 1.74 0 0 1 1.616-1.616c.204-.017.45-.016.718-.016"></svg:path>`,
})
export class StashExplicitContentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExplicitContentDuotoneIcon],svg[stash-explicit-content-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.367 4.25h1.266c1.092 0 1.958 0 2.655.057c.714.058 1.317.18 1.869.46a4.75 4.75 0 0 1 2.075 2.077c.281.55.403 1.154.461 1.868c.057.697.057 1.563.057 2.655v1.266c0 1.092 0 1.958-.057 2.655c-.058.714-.18 1.317-.46 1.869a4.75 4.75 0 0 1-2.076 2.075c-.552.281-1.155.403-1.869.461c-.697.057-1.563.057-2.655.057h-1.266c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655v-1.266c0-1.092 0-1.958.057-2.655c.058-.714.18-1.317.46-1.868a4.75 4.75 0 0 1 2.077-2.076c.55-.281 1.154-.403 1.868-.461c.697-.057 1.563-.057 2.655-.057M8.834 5.802c-.62.05-1.005.147-1.31.302a3.25 3.25 0 0 0-1.42 1.42c-.155.305-.251.69-.302 1.31c-.051.63-.052 1.434-.052 2.566v1.2c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h1.2c1.133 0 1.937 0 2.566-.052c.62-.05 1.005-.147 1.31-.302a3.25 3.25 0 0 0 1.42-1.42c.155-.305.251-.69.302-1.31c.051-.63.052-1.434.052-2.566v-1.2c0-1.133 0-1.937-.052-2.566c-.05-.62-.147-1.005-.302-1.31a3.25 3.25 0 0 0-1.42-1.42c-.305-.155-.69-.251-1.31-.302c-.63-.051-1.434-.052-2.566-.052h-1.2c-1.133 0-1.937 0-2.566.052"></svg:path><svg:path fill="currentColor" d="M11.6 7.75h1.9a.75.75 0 0 1 0 1.5c-.826 0-2.496.011-2.496.011c-.153.013-.23.08-.243.243c-.047.577-.011 1.168-.011 1.746h1.75a.75.75 0 0 1 0 1.5h-1.75c0 .578-.036 1.169.01 1.746c.014.163.091.23.244.243c0 0 1.67.011 2.496.011a.75.75 0 0 1 0 1.5h-1.927c-.257 0-.493 0-.691-.016c-.615-.05-1.156-.38-1.441-.94c-.214-.419-.191-.91-.191-1.368V10.1c0-.268 0-.513.016-.718a1.74 1.74 0 0 1 1.616-1.616c.204-.017.45-.016.718-.016" opacity=".5"></svg:path>`,
})
export class StashExplicitContentDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExplicitContentLightIcon],svg[stash-explicit-content-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.377 4.5h1.246c1.1 0 1.958 0 2.645.056c.698.057 1.265.175 1.775.434a4.5 4.5 0 0 1 1.967 1.967c.26.51.377 1.077.434 1.775c.056.687.056 1.544.056 2.645v1.246c0 1.1 0 1.958-.056 2.645c-.057.698-.175 1.265-.434 1.775a4.5 4.5 0 0 1-1.967 1.967c-.51.26-1.077.377-1.775.434c-.687.056-1.544.056-2.645.056h-1.246c-1.1 0-1.958 0-2.645-.056c-.698-.057-1.265-.175-1.775-.434a4.5 4.5 0 0 1-1.967-1.967c-.26-.51-.377-1.077-.434-1.775c-.056-.687-.056-1.544-.056-2.645v-1.246c0-1.1 0-1.958.056-2.645c.057-.698.175-1.265.434-1.775A4.5 4.5 0 0 1 6.957 4.99c.51-.26 1.077-.377 1.775-.434c.687-.056 1.544-.056 2.645-.056M8.814 5.553c-.637.052-1.057.152-1.403.328a3.5 3.5 0 0 0-1.53 1.53c-.176.346-.276.766-.328 1.403C5.5 9.455 5.5 10.272 5.5 11.4v1.2c0 1.128 0 1.945.053 2.587c.052.636.152 1.056.328 1.402a3.5 3.5 0 0 0 1.53 1.53c.346.176.766.276 1.403.328c.641.053 1.458.053 2.586.053h1.2c1.128 0 1.945 0 2.587-.053c.636-.052 1.056-.152 1.402-.328a3.5 3.5 0 0 0 1.53-1.53c.176-.346.276-.766.328-1.402c.053-.642.053-1.459.053-2.587v-1.2c0-1.128 0-1.945-.053-2.586c-.052-.637-.152-1.057-.328-1.403a3.5 3.5 0 0 0-1.53-1.53c-.346-.176-.766-.276-1.402-.328C14.545 5.5 13.728 5.5 12.6 5.5h-1.2c-1.128 0-1.945 0-2.586.053"></svg:path><svg:path d="M11.58 8h1.92a.5.5 0 0 1 0 1h-1.9c-.288 0-.474 0-.616.012a.6.6 0 0 0-.211.043a.5.5 0 0 0-.218.218a.6.6 0 0 0-.043.21a9 9 0 0 0-.012.617v1.4h2a.5.5 0 0 1 0 1h-2v1.4c0 .288 0 .474.012.616a.6.6 0 0 0 .043.211a.5.5 0 0 0 .218.218a.6.6 0 0 0 .21.043c.143.012.329.012.617.012h1.9a.5.5 0 0 1 0 1h-1.92c-.263 0-.49 0-.678-.015a1.5 1.5 0 0 1-.583-.149a1.5 1.5 0 0 1-.656-.655a1.5 1.5 0 0 1-.148-.583c-.015-.188-.015-.415-.015-.679v-3.838c0-.264 0-.491.015-.679c.016-.197.052-.394.148-.583a1.5 1.5 0 0 1 .656-.656c.19-.096.386-.132.583-.148c.188-.015.415-.015.68-.015"></svg:path></svg:g>`,
})
export class StashExplicitContentLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashExplicitContentSolidIcon],svg[stash-explicit-content-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.436 7.184C5 8.04 5 9.16 5 11.4v1.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C8.04 19 9.16 19 11.4 19h1.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C19 15.96 19 14.84 19 12.6v-1.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C15.96 5 14.84 5 12.6 5h-1.2c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748m8.064.566a.75.75 0 0 1 0 1.5c-.826 0-2.496.011-2.496.011c-.152.013-.23.08-.243.243c-.033.403-.025.813-.018 1.22q.006.265.007.526h1.75a.75.75 0 0 1 0 1.5h-1.75q0 .261-.007.526c-.007.407-.015.817.018 1.22c.014.163.09.23.243.243c0 0 1.67.011 2.496.011a.75.75 0 0 1 0 1.5h-1.926c-.258 0-.494 0-.692-.016c-.615-.05-1.156-.38-1.441-.94c-.195-.382-.193-.824-.191-1.246v-3.974c0-.258 0-.494.016-.692a1.74 1.74 0 0 1 1.616-1.616c.198-.016.434-.016.692-.016z"></svg:path>`,
})
export class StashExplicitContentSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEyeClosedIcon],svg[stash-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.222 7.642a6.24 6.24 0 0 0-3.223-.892a6.24 6.24 0 0 0-3.22.892a.75.75 0 0 1-.775-1.284A7.74 7.74 0 0 1 12 5.25a7.74 7.74 0 0 1 3.997 1.108a.75.75 0 0 1-.774 1.284M4.66 12.509l-.324.162a.75.75 0 1 1-.671-1.342l1-.5a.75.75 0 0 1 1.03.391l.002.002l.007.018l.035.078c.032.071.082.178.151.312c.14.268.353.643.647 1.059c.592.837 1.485 1.804 2.718 2.422A6.04 6.04 0 0 0 12 15.75a6.04 6.04 0 0 0 2.745-.64c1.233-.617 2.126-1.584 2.718-2.421a9 9 0 0 0 .799-1.371l.034-.079l.007-.017a.75.75 0 0 1 1.033-.393l1 .5a.75.75 0 1 1-.671 1.342l-.324-.162a11 11 0 0 1-.71 1.125l.348.29a.75.75 0 0 1-.962 1.152l-.349-.292a8.7 8.7 0 0 1-1.572 1.284l.311.565a.75.75 0 0 1-1.314.724l-.337-.612a7.5 7.5 0 0 1-2.006.47V18a.75.75 0 0 1-1.5 0v-.785a7.5 7.5 0 0 1-2.006-.47l-.337.612a.75.75 0 1 1-1.314-.724l.312-.565a8.7 8.7 0 0 1-1.573-1.284l-.349.291a.75.75 0 1 1-.961-1.15l.347-.29a11 11 0 0 1-.71-1.126"></svg:path>`,
})
export class StashEyeClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEyeClosedDuotoneIcon],svg[stash-eye-closed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.222 7.642a6.24 6.24 0 0 0-3.223-.892a6.24 6.24 0 0 0-3.22.892a.75.75 0 0 1-.775-1.284A7.74 7.74 0 0 1 12 5.25a7.74 7.74 0 0 1 3.997 1.108a.75.75 0 0 1-.774 1.284M4.66 12.509l-.324.162a.75.75 0 1 1-.671-1.342l1-.5a.75.75 0 0 1 1.03.391l.002.002l.007.018l.035.078c.032.071.082.178.151.312c.14.268.353.643.647 1.059c.592.837 1.485 1.804 2.718 2.422A6.04 6.04 0 0 0 12 15.75a6.04 6.04 0 0 0 2.745-.64c1.233-.617 2.126-1.584 2.718-2.421a9 9 0 0 0 .799-1.371l.034-.079l.007-.017a.75.75 0 0 1 1.033-.393l1 .5a.75.75 0 1 1-.671 1.342l-.324-.162a11 11 0 0 1-.71 1.125l.348.29a.75.75 0 0 1-.962 1.152l-.349-.292a8.7 8.7 0 0 1-1.572 1.284l.311.565a.75.75 0 0 1-1.314.724l-.337-.612a7.5 7.5 0 0 1-2.006.47V18a.75.75 0 0 1-1.5 0v-.785a7.5 7.5 0 0 1-2.006-.47l-.337.612a.75.75 0 1 1-1.314-.724l.312-.565a8.7 8.7 0 0 1-1.573-1.284l-.349.291a.75.75 0 1 1-.961-1.15l.347-.29a11 11 0 0 1-.71-1.126"></svg:path>`,
})
export class StashEyeClosedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEyeClosedLightIcon],svg[stash-eye-closed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.35 7.428A6.5 6.5 0 0 0 12 6.5a6.5 6.5 0 0 0-3.35.928a.5.5 0 1 1-.517-.856A7.5 7.5 0 0 1 12 5.5a7.5 7.5 0 0 1 3.868 1.072a.5.5 0 1 1-.516.856m-9.886 3.886a.5.5 0 0 0-.687-.261l-1 .5a.5.5 0 1 0 .447.894l.542-.27l.014.027a10.3 10.3 0 0 0 .93 1.471l-.528.441a.5.5 0 0 0 .641.768l.529-.442a8.5 8.5 0 0 0 1.887 1.538l-.427.774a.5.5 0 0 0 .876.482l.444-.806a7.3 7.3 0 0 0 2.368.554V18a.5.5 0 0 0 1 0v-1.016a7.3 7.3 0 0 0 2.368-.554l.444.806a.5.5 0 1 0 .876-.482l-.427-.774a8.5 8.5 0 0 0 1.887-1.538l.53.442a.5.5 0 1 0 .64-.768l-.528-.44a10.5 10.5 0 0 0 .93-1.472l.014-.028l.542.271a.5.5 0 1 0 .448-.894l-1-.5a.5.5 0 0 0-.688.261l-.002.004l-.008.02l-.037.083a7 7 0 0 1-.157.324a9 9 0 0 1-.665 1.088c-.606.857-1.528 1.859-2.81 2.501A6.3 6.3 0 0 1 12 16a6.3 6.3 0 0 1-2.857-.666c-1.282-.642-2.204-1.644-2.81-2.5a9 9 0 0 1-.665-1.09a7 7 0 0 1-.194-.407l-.008-.02z" clip-rule="evenodd"></svg:path>`,
})
export class StashEyeClosedLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEyeClosedSolidIcon],svg[stash-eye-closed-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.125 6.143A8 8 0 0 0 12 5a8 8 0 0 0-4.124 1.143a1 1 0 1 0 1.033 1.714A6 6 0 0 1 11.999 7a6 6 0 0 1 3.094.857a1 1 0 0 0 1.032-1.714M5.356 10.565a1 1 0 0 0-.803.04l-1 .5a1 1 0 1 0 .894 1.79l.11-.056c.13.226.288.48.475.751l-.17.143a1 1 0 0 0 1.282 1.534l.173-.144c.367.358.785.71 1.257 1.028l-.2.362a1 1 0 0 0 1.752.965l.234-.424a7.7 7.7 0 0 0 1.64.386V18a1 1 0 1 0 2 0v-.56a7.7 7.7 0 0 0 1.64-.386l.234.424a1 1 0 0 0 1.752-.965l-.2-.362c.473-.318.89-.67 1.258-1.028l.173.144a1 1 0 1 0 1.282-1.534l-.17-.143c.186-.271.344-.525.473-.75l.111.054a1 1 0 1 0 .894-1.788l-1-.5a1 1 0 0 0-.802-.04a1 1 0 0 0-.514.454a3 3 0 0 0-.133.262l-.023.05q-.043.098-.087.183c-.135.26-.343.625-.629 1.03c-.577.816-1.442 1.749-2.626 2.342A5.8 5.8 0 0 1 12 15.5a5.8 5.8 0 0 1-2.633-.613c-1.184-.593-2.048-1.526-2.626-2.343c-.318-.449-.61-.923-.813-1.418a1 1 0 0 0-.572-.56"></svg:path>`,
})
export class StashEyeClosedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEyeOpenedIcon],svg[stash-eye-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 6a.75.75 0 0 0-1.5 0v.785a7.5 7.5 0 0 0-2.006.47l-.337-.612a.75.75 0 1 0-1.314.724l.312.565a8.7 8.7 0 0 0-1.573 1.284l-.349-.292a.75.75 0 0 0-.961 1.152l.347.29a11 11 0 0 0-.71 1.125l-.323-.162a.75.75 0 1 0-.671 1.342l1 .5a.75.75 0 0 0 1.032-.393l.007-.018l.035-.078a7 7 0 0 1 .151-.312c.14-.268.353-.643.647-1.059c.592-.837 1.485-1.804 2.718-2.422A6.04 6.04 0 0 1 12 8.25a6.04 6.04 0 0 1 2.745.64c1.233.617 2.126 1.584 2.718 2.421a9 9 0 0 1 .799 1.371l.034.079l.007.017l.001.001v.001a.75.75 0 0 0 1.032.39l1-.5a.75.75 0 1 0-.671-1.34l-.324.161a11 11 0 0 0-.71-1.125l.348-.29a.75.75 0 0 0-.962-1.152l-.349.292a8.7 8.7 0 0 0-1.572-1.284l.311-.565a.75.75 0 0 0-1.314-.724l-.337.612a7.5 7.5 0 0 0-2.006-.47z"></svg:path><svg:path fill="currentColor" d="M8.25 15a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M12 12.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class StashEyeOpenedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEyeOpenedDuotoneIcon],svg[stash-eye-opened-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5" opacity=".5"></svg:path><svg:path fill="currentColor" d="M12 5.25a.75.75 0 0 1 .75.75v.785c.73.069 1.398.235 2.006.47l.337-.612a.75.75 0 1 1 1.314.724l-.311.565a8.7 8.7 0 0 1 1.572 1.284l.349-.292a.75.75 0 0 1 .962 1.152l-.348.29l.057.079c.277.392.493.754.653 1.046l.324-.162a.75.75 0 1 1 .67 1.342l-1 .5a.75.75 0 0 1-1.03-.391l-.001-.001v-.002l-.008-.016l-.034-.079a9 9 0 0 0-.798-1.37c-.593-.838-1.486-1.805-2.719-2.423A6.04 6.04 0 0 0 12 8.25a6.04 6.04 0 0 0-2.745.64c-1.233.617-2.126 1.584-2.718 2.421c-.294.416-.508.79-.647 1.06a7 7 0 0 0-.186.39l-.007.017a.75.75 0 0 1-1.032.393l-1-.5a.75.75 0 1 1 .67-1.342l.324.162a11 11 0 0 1 .71-1.125l-.347-.29a.75.75 0 1 1 .961-1.152l.35.292a8.7 8.7 0 0 1 1.572-1.284l-.312-.565a.75.75 0 1 1 1.314-.724l.337.612a7.5 7.5 0 0 1 2.006-.47V6a.75.75 0 0 1 .75-.75"></svg:path><svg:path fill="currentColor" d="M12 11.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5M9.75 15a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"></svg:path>`,
})
export class StashEyeOpenedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEyeOpenedLightIcon],svg[stash-eye-opened-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v1.016a7.3 7.3 0 0 1 2.368.554l.444-.807a.5.5 0 1 1 .876.483l-.427.774c.754.446 1.38.99 1.887 1.538l.53-.442a.5.5 0 0 1 .64.768l-.528.44a10.5 10.5 0 0 1 .93 1.472l.014.028l.542-.271a.5.5 0 1 1 .448.894l-1 .5a.5.5 0 0 1-.688-.261l-.002-.004l-.008-.02l-.037-.083a7 7 0 0 0-.157-.324a9 9 0 0 0-.665-1.088c-.606-.857-1.528-1.859-2.81-2.501A6.3 6.3 0 0 0 12 8a6.3 6.3 0 0 0-2.857.666c-1.282.642-2.204 1.644-2.81 2.5a9 9 0 0 0-.665 1.09a7 7 0 0 0-.194.407l-.008.02l-.002.003a.5.5 0 0 1-.687.261l-1-.5a.5.5 0 1 1 .447-.894l.542.27l.014-.027a10.3 10.3 0 0 1 .93-1.471l-.528-.441a.5.5 0 1 1 .641-.768l.529.442A8.5 8.5 0 0 1 8.239 8.02l-.427-.774a.5.5 0 1 1 .876-.483l.444.807a7.3 7.3 0 0 1 2.368-.554V6a.5.5 0 0 1 .5-.5m0 7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M8.5 15a3.5 3.5 0 1 1 7 0a3.5 3.5 0 0 1-7 0"></svg:path>`,
})
export class StashEyeOpenedLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashEyeOpenedSolidIcon],svg[stash-eye-opened-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v.56a7.7 7.7 0 0 0-1.64.386l-.234-.424a1 1 0 0 0-1.752.965l.2.362c-.472.318-.89.67-1.257 1.028l-.173-.144a1 1 0 0 0-1.283 1.534l.171.143l-.585.696a1 1 0 1 0-.894 1.788l1 .5a1 1 0 0 0 1.376-.523c.74-1.556 1.872-2.973 3.438-3.758A5.8 5.8 0 0 1 12 8.5a5.8 5.8 0 0 1 2.633.613c1.419.71 2.531 1.974 3.255 3.372l.093.189c.152.317.299.622.664.76a1 1 0 0 0 .802-.04l1-.5a1 1 0 1 0-.894-1.788l-.11.055c-.13-.226-.288-.48-.475-.751l.171-.143a1 1 0 0 0-1.282-1.534l-.174.144a9 9 0 0 0-1.256-1.028l.2-.362a1 1 0 1 0-1.753-.965l-.233.424A7.7 7.7 0 0 0 13 6.561z"></svg:path><svg:path fill="currentColor" d="M12 18.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class StashEyeOpenedSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFeedIcon],svg[stash-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.05 12a.75.75 0 0 0 0 1.5h11.364a.75.75 0 0 0 0-1.5zm-.75 3.75a.75.75 0 0 1 .75-.75h7.36a.75.75 0 1 1 0 1.5H6.05a.75.75 0 0 1-.75-.75m.667-10.497A1.5 1.5 0 0 1 6.8 5a1.49 1.49 0 0 1 1.5 1.5a1.5 1.5 0 1 1-2.333-1.247M9.8 6.5a.75.75 0 0 1 .75-.75h6.86a.75.75 0 1 1 0 1.5h-6.86a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M2.74 4.457c-.49.963-.49 2.223-.49 4.743v5.6c0 2.52 0 3.78.49 4.743a4.5 4.5 0 0 0 1.967 1.967C5.67 22 6.93 22 9.45 22h5.1c2.52 0 3.78 0 4.743-.49a4.5 4.5 0 0 0 1.967-1.967c.49-.963.49-2.223.49-4.743V9.2c0-2.52 0-3.78-.49-4.743a4.5 4.5 0 0 0-1.967-1.967C18.33 2 17.07 2 14.55 2h-5.1c-2.52 0-3.78 0-4.743.49A4.5 4.5 0 0 0 2.74 4.457M20.25 10.5v2.8c0 1.82 0 2.73-.354 3.425a3.25 3.25 0 0 1-1.42 1.42c-.696.355-1.606.355-3.426.355h-6.1c-1.82 0-2.73 0-3.425-.354a3.25 3.25 0 0 1-1.42-1.42C3.75 16.03 3.75 15.12 3.75 13.3v-2.8zm-.871 8.965a3.3 3.3 0 0 1-.903.68c-.696.355-1.606.355-3.426.355h-6.1c-1.82 0-2.73 0-3.425-.354a3.3 3.3 0 0 1-.903-.681l.085.044C5.67 20 6.93 20 9.45 20h5.1c2.52 0 3.78 0 4.743-.49zM4.104 5.275a3.25 3.25 0 0 1 1.42-1.42C6.22 3.5 7.13 3.5 8.95 3.5h6.1c1.82 0 2.73 0 3.426.354a3.25 3.25 0 0 1 1.42 1.42c.354.696.354 1.606.354 3.426V9H3.75v-.3c0-1.82 0-2.73.354-3.425"></svg:path>`,
})
export class StashFeedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFeedDuotoneIcon],svg[stash-feed-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.967 5.253A1.5 1.5 0 0 1 6.8 5a1.49 1.49 0 0 1 1.5 1.5a1.5 1.5 0 1 1-2.333-1.247m4.583.497a.75.75 0 0 0 0 1.5h6.86a.75.75 0 1 0 0-1.5zm-5.25 7a.75.75 0 0 1 .75-.75h11.364a.75.75 0 0 1 0 1.5H6.05a.75.75 0 0 1-.75-.75M6.05 15a.75.75 0 0 0 0 1.5h7.36a.75.75 0 1 0 0-1.5z"></svg:path><svg:path fill="currentColor" d="M2.74 4.457c-.49.963-.49 2.223-.49 4.743v3.6c0 2.52 0 3.78.49 4.743a4.5 4.5 0 0 0 1.967 1.967C5.67 20 6.93 20 9.45 20h5.1c2.52 0 3.78 0 4.743-.49a4.5 4.5 0 0 0 1.967-1.967c.49-.963.49-2.223.49-4.743V9.2c0-2.52 0-3.78-.49-4.743a4.5 4.5 0 0 0-1.967-1.967C18.33 2 17.07 2 14.55 2h-5.1c-2.52 0-3.78 0-4.743.49A4.5 4.5 0 0 0 2.74 4.457m1.364.818a3.25 3.25 0 0 1 1.42-1.42C6.22 3.5 7.13 3.5 8.95 3.5h6.1c1.82 0 2.73 0 3.426.354a3.25 3.25 0 0 1 1.42 1.42c.354.696.354 1.606.354 3.426V9H3.75v-.3c0-1.82 0-2.73.354-3.425M3.75 13.3v-2.8h16.5v2.8c0 1.82 0 2.73-.354 3.425a3.25 3.25 0 0 1-1.42 1.42c-.696.355-1.606.355-3.426.355h-6.1c-1.82 0-2.73 0-3.425-.354a3.25 3.25 0 0 1-1.42-1.42C3.75 16.03 3.75 15.12 3.75 13.3"></svg:path><svg:path fill="currentColor" d="M4.622 19.465a4.5 4.5 0 0 1-1.882-1.922c-.49-.963-.49-2.223-.49-4.743v2c0 2.52 0 3.78.49 4.743a4.5 4.5 0 0 0 1.967 1.967C5.67 22 6.93 22 9.45 22h5.1c2.52 0 3.78 0 4.743-.49a4.5 4.5 0 0 0 1.967-1.967c.49-.963.49-2.223.49-4.743v-2c0 2.52 0 3.78-.49 4.743a4.5 4.5 0 0 1-1.881 1.922a3.3 3.3 0 0 1-.903.68c-.696.355-1.606.355-3.426.355h-6.1c-1.82 0-2.73 0-3.425-.354a3.3 3.3 0 0 1-.903-.681" opacity=".5"></svg:path>`,
})
export class StashFeedDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFeedLightIcon],svg[stash-feed-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 12.5a.5.5 0 0 0 0 1h13.5a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h6.25a.5.5 0 0 0 0-1zm.167-9.747A1.5 1.5 0 0 1 6.25 5a1.49 1.49 0 0 1 1.5 1.5a1.5 1.5 0 1 1-2.333-1.247M9.75 6a.5.5 0 0 0 0 1h8.5a.5.5 0 0 0 0-1z"></svg:path><svg:path fill="currentColor" d="M2.25 9.7c0-2.52 0-3.78.49-4.743A4.5 4.5 0 0 1 4.707 2.99C5.67 2.5 6.93 2.5 9.45 2.5h5.1c2.52 0 3.78 0 4.743.49a4.5 4.5 0 0 1 1.967 1.967c.49.963.49 2.223.49 4.743v5.6c0 2.52 0 2.78-.49 3.743a4.5 4.5 0 0 1-1.967 1.967c-.963.49-2.223.49-4.743.49h-5.1c-2.52 0-3.78 0-4.743-.49a4.5 4.5 0 0 1-1.967-1.967c-.49-.963-.49-1.223-.49-3.743zm18.5.8H3.25v3.8c0 1.82 0 1.73.354 2.425a3.25 3.25 0 0 0 1.42 1.42c.696.355 1.606.355 3.426.355h7.1c1.82 0 2.73 0 3.425-.354a3.25 3.25 0 0 0 1.42-1.42c.355-.696.355-.606.355-2.426zm-1.457 8.51c-.963.49-2.223.49-4.743.49h-5.1c-2.52 0-3.78 0-4.743-.49a4.5 4.5 0 0 1-1.347-1.051c.052.294.13.541.244.767a3.25 3.25 0 0 0 1.42 1.42c.696.354 1.606.354 3.426.354h7.1c1.82 0 2.73 0 3.425-.354a3.25 3.25 0 0 0 1.42-1.42c.116-.226.193-.473.245-.767a4.5 4.5 0 0 1-1.347 1.05M3.25 8.7v.8h17.5v-.8c0-1.82 0-2.73-.354-3.425a3.25 3.25 0 0 0-1.42-1.42C18.28 3.5 17.37 3.5 15.55 3.5h-7.1c-1.82 0-2.73 0-3.425.354a3.25 3.25 0 0 0-1.42 1.42C3.25 5.97 3.25 6.88 3.25 8.7"></svg:path>`,
})
export class StashFeedLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFileExportIcon],svg[stash-file-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 10.25l2.25 2.25M3 10.25L5.25 8M3 10.25h4.1c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216V17"></svg:path><svg:path fill="currentColor" d="M19.82 8.5H16.5a1 1 0 0 1-1-1V4.18c.373.17.652.472.937.757l2.626 2.626c.285.285.588.564.757.937"></svg:path><svg:path fill="currentColor" d="m16.437 4.937l-.53.53zm2.626 2.626l.53-.53zM7.25 10a.75.75 0 0 0 1.5 0zm1.5 4a.75.75 0 0 0-1.5 0zm10.955-5.717l.64-.391zm-3.988-3.988l.391-.64zM19.82 8.5v.75a.75.75 0 0 0 .683-1.06zM15.5 4.18l.31-.683a.75.75 0 0 0-1.06.683zm1.3 15.07h-5.6v1.5h5.6zm-5.6-14.5h2.975v-1.5H11.2zm8.05 5.075V16.8h1.5V9.825zm-3.343-4.357l2.625 2.625l1.061-1.06l-2.625-2.626zM8.75 10V7.2h-1.5V10zm0 6.8V14h-1.5v2.8zm9.782-8.707c.372.371.467.474.534.582l1.279-.783c-.181-.296-.431-.539-.752-.86zm-1.564-3.686c-.321-.32-.564-.57-.86-.752l-.783 1.28c.108.066.21.161.582.533zm-2.793.343c.577 0 .877.017 1.15.184l.783-1.279c-.687-.42-1.417-.405-1.934-.405zm6.575 5.075c0-.516.016-1.246-.405-1.933l-1.28.783c.168.273.185.573.185 1.15zm-.93-2.075H16.5v1.5h3.32zm-3.57-.25V4.18h-1.5V7.5zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zm-1.31-2.888c.22.1.391.28.717.606l1.06-1.061c-.245-.246-.63-.67-1.156-.91zm3.342 3.231c.326.326.505.497.606.718l1.365-.622c-.24-.525-.664-.911-.91-1.157zM11.2 19.25c-1.129 0-1.666-.187-1.952-.463c-.28-.27-.498-.8-.498-1.987h-1.5c0 1.284.218 2.354.957 3.066c.732.707 1.795.884 2.993.884zm8.05-2.45c0 1.129-.187 1.666-.463 1.952c-.27.28-.8.498-1.987.498v1.5c1.284 0 2.354-.218 3.066-.957c.707-.732.884-1.795.884-2.993zM8.75 7.2c0-1.129.187-1.666.463-1.952c.27-.28.8-.498 1.987-.498v-1.5c-1.284 0-2.354.218-3.067.957c-.706.732-.883 1.795-.883 2.993z"></svg:path></svg:g>`,
})
export class StashFileExportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFileExportDuotoneIcon],svg[stash-file-export-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="stashFileExportDuotone0" fill="currentColor" d="M19.82 8.5H16.5a1 1 0 0 1-1-1V4.18c.373.17.652.472.937.757l2.626 2.626c.285.285.588.564.757.937"></svg:path></svg:defs><svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 10.25l2.25 2.25M3 10.25L5.25 8M3 10.25h4.1c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216V17" opacity=".5"></svg:path><svg:use href="#stashFileExportDuotone0" opacity=".5"></svg:use><svg:use href="#stashFileExportDuotone0"></svg:use><svg:path fill="currentColor" d="m16.437 4.937l-.53.53zm2.626 2.626l.53-.53zM7.25 10a.75.75 0 0 0 1.5 0zm1.5 4a.75.75 0 0 0-1.5 0zm10.955-5.717l.64-.391zm-3.988-3.988l.391-.64zM19.82 8.5v.75a.75.75 0 0 0 .683-1.06zM15.5 4.18l.31-.683a.75.75 0 0 0-1.06.683zm1.3 15.07h-5.6v1.5h5.6zm-5.6-14.5h2.975v-1.5H11.2zm8.05 5.075V16.8h1.5V9.825zm-3.343-4.357l2.625 2.625l1.061-1.06l-2.625-2.626zM8.75 10V7.2h-1.5V10zm0 6.8V14h-1.5v2.8zm9.782-8.707c.372.371.467.474.534.582l1.279-.783c-.181-.296-.431-.539-.752-.86zm-1.564-3.686c-.321-.32-.564-.57-.86-.752l-.783 1.28c.108.066.21.161.582.533zm-2.793.343c.577 0 .877.017 1.15.184l.783-1.279c-.687-.42-1.417-.405-1.934-.405zm6.575 5.075c0-.516.016-1.246-.405-1.933l-1.28.783c.168.273.185.573.185 1.15zm-.93-2.075H16.5v1.5h3.32zm-3.57-.25V4.18h-1.5V7.5zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zm-1.31-2.888c.22.1.391.28.717.606l1.06-1.061c-.245-.246-.63-.67-1.156-.91zm3.342 3.231c.326.326.505.497.606.718l1.365-.622c-.24-.525-.664-.911-.91-1.157zM11.2 19.25c-1.129 0-1.666-.187-1.952-.463c-.28-.27-.498-.8-.498-1.987h-1.5c0 1.284.218 2.354.957 3.066c.732.707 1.795.884 2.993.884zm8.05-2.45c0 1.129-.187 1.666-.463 1.952c-.27.28-.8.498-1.987.498v1.5c1.284 0 2.354-.218 3.066-.957c.707-.732.884-1.795.884-2.993zM8.75 7.2c0-1.129.187-1.666.463-1.952c.27-.28.8-.498 1.987-.498v-1.5c-1.284 0-2.354.218-3.067.957c-.706.732-.883 1.795-.883 2.993z"></svg:path></svg:g>`,
})
export class StashFileExportDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFileExportLightIcon],svg[stash-file-export-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m3 10.25l2.25 2.25M3 10.25L5.25 8M3 10.25h4.1c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216V17"></svg:path><svg:path fill="currentColor" d="M19.82 8.5H16.5a1 1 0 0 1-1-1V4.18c.373.17.652.472.937.757l2.626 2.626c.285.285.588.564.757.937"></svg:path><svg:path fill="currentColor" d="m16.437 4.937l-.353.354zm2.626 2.626l.353-.354zM7.5 10a.5.5 0 0 0 1 0zm1 4a.5.5 0 0 0-1 0zm11.205-5.717l.427-.26zm-3.988-3.988l.26-.427zM19.82 8.5V9a.5.5 0 0 0 .456-.707zM15.5 4.18l.207-.455A.5.5 0 0 0 15 4.18zm1.3 15.32h-5.6v1h5.6zm-5.6-15h2.975v-1H11.2zm8.3 5.325V16.8h1V9.825zm-3.416-4.534l2.625 2.625l.707-.707l-2.625-2.625zM8.5 10V7.2h-1V10zm0 6.8V14h-1v2.8zm10.21-8.884c.362.363.483.489.569.629l.853-.523c-.162-.264-.387-.484-.716-.813zm-1.92-3.332c-.328-.33-.548-.554-.812-.716l-.523.853c.14.086.266.207.629.57zM14.176 4.5c.567 0 .939.012 1.28.221l.523-.853C15.36 3.49 14.7 3.5 14.175 3.5zM20.5 9.825c0-.526.01-1.185-.368-1.803l-.853.523c.21.341.221.713.221 1.28zM19.82 8H16.5v1h3.32zM16 7.5V4.18h-1V7.5zm.5.5a.5.5 0 0 1-.5-.5h-1A1.5 1.5 0 0 0 16.5 9zm-1.207-3.365c.271.123.478.343.79.656l.708-.707c-.26-.26-.61-.643-1.084-.86zm3.416 3.281c.313.313.533.52.656.791l.91-.414c-.216-.475-.6-.825-.859-1.084zM11.2 19.5c-1.14 0-1.765-.186-2.126-.533c-.356-.344-.574-.964-.574-2.167h-1c0 1.268.218 2.248.88 2.887c.658.634 1.633.813 2.82.813zm8.3-2.7c0 1.14-.186 1.765-.533 2.126c-.344.356-.964.574-2.167.574v1c1.268 0 2.248-.218 2.887-.88c.634-.658.813-1.633.813-2.82zm-11-9.6c0-1.14.186-1.765.533-2.126c.344-.356.964-.574 2.167-.574v-1c-1.268 0-2.248.218-2.887.88C7.68 5.038 7.5 6.013 7.5 7.2z"></svg:path></svg:g>`,
})
export class StashFileExportLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFileExportSolidIcon],svg[stash-file-export-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="stashFileExportSolid0" fill="currentColor" d="M19.82 8.5H16.5a1 1 0 0 1-1-1V4.18c.373.17.652.472.937.757l2.626 2.626c.285.285.588.564.757.937"></svg:path></svg:defs><svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3 10.25l2.25 2.25M3 10.25L5.25 8M3 10.25h4.1c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216V17"></svg:path><svg:use href="#stashFileExportSolid0"></svg:use><svg:path fill="currentColor" d="m16.437 4.937l-.53.53zm2.626 2.626l.53-.53zM7.25 10a.75.75 0 0 0 1.5 0zm1.5 4a.75.75 0 0 0-1.5 0zm10.955-5.717l.64-.391zm-3.988-3.988l.391-.64zM19.82 8.5v.75a.75.75 0 0 0 .683-1.06zM15.5 4.18l.31-.683a.75.75 0 0 0-1.06.683zm1.3 15.07h-5.6v1.5h5.6zm-5.6-14.5h2.975v-1.5H11.2zm8.05 5.075V16.8h1.5V9.825zm-3.343-4.357l2.625 2.625l1.061-1.06l-2.625-2.626zM8.75 10V7.2h-1.5V10zm0 6.8V14h-1.5v2.8zm9.782-8.707c.372.371.467.474.534.582l1.279-.783c-.181-.296-.431-.539-.752-.86zm-1.564-3.686c-.321-.32-.564-.57-.86-.752l-.783 1.28c.108.066.21.161.582.533zm-2.793.343c.577 0 .877.017 1.15.184l.783-1.279c-.687-.42-1.417-.405-1.934-.405zm6.575 5.075c0-.516.016-1.246-.405-1.933l-1.28.783c.168.273.185.573.185 1.15zm-.93-2.075H16.5v1.5h3.32zm-3.57-.25V4.18h-1.5V7.5zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zm-1.31-2.888c.22.1.391.28.717.606l1.06-1.061c-.245-.246-.63-.67-1.156-.91zm3.342 3.231c.326.326.505.497.606.718l1.365-.622c-.24-.525-.664-.911-.91-1.157zM11.2 19.25c-1.129 0-1.666-.187-1.952-.463c-.28-.27-.498-.8-.498-1.987h-1.5c0 1.284.218 2.354.957 3.066c.732.707 1.795.884 2.993.884zm8.05-2.45c0 1.129-.187 1.666-.463 1.952c-.27.28-.8.498-1.987.498v1.5c1.284 0 2.354-.218 3.066-.957c.707-.732.884-1.795.884-2.993zM8.75 7.2c0-1.129.187-1.666.463-1.952c.27-.28.8-.498 1.987-.498v-1.5c-1.284 0-2.354.218-3.067.957c-.706.732-.883 1.795-.883 2.993z"></svg:path><svg:use href="#stashFileExportSolid0"></svg:use></svg:g>`,
})
export class StashFileExportSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFileImportIcon],svg[stash-file-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 17.5L10.5 15m2.5 2.5l2.5-2.5M13 17.5v-1.1c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C9.96 10 8.84 10 6.6 10H4"></svg:path><svg:path fill="currentColor" d="M18.82 8.5H15.5a1 1 0 0 1-1-1V4.18c.373.17.652.472.937.757l2.626 2.626c.285.285.588.564.757.937"></svg:path><svg:path fill="currentColor" d="m15.437 4.937l-.53.53zm2.626 2.626l.53-.53zM6.25 10a.75.75 0 0 0 1.5 0zm1.5 4a.75.75 0 0 0-1.5 0zm10.955-5.717l.64-.391zm-3.988-3.988l.391-.64zM18.82 8.5v.75a.75.75 0 0 0 .683-1.06zM14.5 4.18l.31-.683a.75.75 0 0 0-1.06.683zm1.3 15.07h-5.6v1.5h5.6zm-5.6-14.5h2.975v-1.5H10.2zm8.05 5.075V16.8h1.5V9.825zm-3.343-4.357l2.625 2.625l1.061-1.06l-2.625-2.626zM7.75 10V7.2h-1.5V10zm0 6.8V14h-1.5v2.8zm9.782-8.707c.372.371.467.474.534.582l1.279-.783c-.181-.296-.431-.539-.752-.86zm-1.564-3.686c-.321-.32-.564-.57-.86-.752l-.783 1.28c.108.066.21.161.582.533zm-2.793.343c.577 0 .877.017 1.15.184l.783-1.279c-.687-.42-1.417-.405-1.934-.405zm6.575 5.075c0-.516.016-1.246-.405-1.933l-1.28.783c.168.273.185.573.185 1.15zm-.93-2.075H15.5v1.5h3.32zm-3.57-.25V4.18h-1.5V7.5zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zm-1.31-2.888c.22.1.391.28.717.606l1.06-1.061c-.245-.246-.63-.67-1.156-.91zm3.342 3.231c.326.326.505.497.606.718l1.365-.622c-.24-.525-.664-.911-.91-1.157zM10.2 19.25c-1.129 0-1.666-.187-1.952-.463c-.28-.27-.498-.8-.498-1.987h-1.5c0 1.284.218 2.354.957 3.066c.732.707 1.795.884 2.993.884zm8.05-2.45c0 1.129-.187 1.666-.463 1.952c-.27.28-.8.498-1.987.498v1.5c1.284 0 2.354-.218 3.066-.957c.707-.732.884-1.795.884-2.993zM7.75 7.2c0-1.129.187-1.666.463-1.952c.27-.28.8-.498 1.987-.498v-1.5c-1.284 0-2.354.218-3.067.957c-.706.732-.883 1.795-.883 2.993z"></svg:path></svg:g>`,
})
export class StashFileImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFileImportDuotoneIcon],svg[stash-file-import-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="stashFileImportDuotone0" fill="currentColor" d="M18.82 8.5H15.5a1 1 0 0 1-1-1V4.18c.373.17.652.472.937.757l2.626 2.626c.285.285.588.564.757.937"></svg:path></svg:defs><svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 17.5L10.5 15m2.5 2.5l2.5-2.5M13 17.5v-1.1c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C9.96 10 8.84 10 6.6 10H4" opacity=".5"></svg:path><svg:use href="#stashFileImportDuotone0"></svg:use><svg:path fill="currentColor" d="m15.437 4.937l-.53.53zm2.626 2.626l.53-.53zM6.25 10a.75.75 0 0 0 1.5 0zm1.5 4a.75.75 0 0 0-1.5 0zm10.955-5.717l.64-.391zm-3.988-3.988l.391-.64zM18.82 8.5v.75a.75.75 0 0 0 .683-1.06zM14.5 4.18l.31-.683a.75.75 0 0 0-1.06.683zm1.3 15.07h-5.6v1.5h5.6zm-5.6-14.5h2.975v-1.5H10.2zm8.05 5.075V16.8h1.5V9.825zm-3.343-4.357l2.625 2.625l1.061-1.06l-2.625-2.626zM7.75 10V7.2h-1.5V10zm0 6.8V14h-1.5v2.8zm9.782-8.707c.372.371.467.474.534.582l1.279-.783c-.181-.296-.431-.539-.752-.86zm-1.564-3.686c-.321-.32-.564-.57-.86-.752l-.783 1.28c.108.066.21.161.582.533zm-2.793.343c.577 0 .877.017 1.15.184l.783-1.279c-.687-.42-1.417-.405-1.934-.405zm6.575 5.075c0-.516.016-1.246-.405-1.933l-1.28.783c.168.273.185.573.185 1.15zm-.93-2.075H15.5v1.5h3.32zm-3.57-.25V4.18h-1.5V7.5zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zm-1.31-2.888c.22.1.391.28.717.606l1.06-1.061c-.245-.246-.63-.67-1.156-.91zm3.342 3.231c.326.326.505.497.606.718l1.365-.622c-.24-.525-.664-.911-.91-1.157zM10.2 19.25c-1.129 0-1.666-.187-1.952-.463c-.28-.27-.498-.8-.498-1.987h-1.5c0 1.284.218 2.354.957 3.066c.732.707 1.795.884 2.993.884zm8.05-2.45c0 1.129-.187 1.666-.463 1.952c-.27.28-.8.498-1.987.498v1.5c1.284 0 2.354-.218 3.066-.957c.707-.732.884-1.795.884-2.993zM7.75 7.2c0-1.129.187-1.666.463-1.952c.27-.28.8-.498 1.987-.498v-1.5c-1.284 0-2.354.218-3.067.957c-.706.732-.883 1.795-.883 2.993z"></svg:path><svg:use href="#stashFileImportDuotone0" opacity=".5"></svg:use></svg:g>`,
})
export class StashFileImportDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFileImportLightIcon],svg[stash-file-import-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 17.5L10.5 15m2.5 2.5l2.5-2.5M13 17.5v-1.1c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C9.96 10 8.84 10 6.6 10H4"></svg:path><svg:path fill="currentColor" d="M18.82 8.5H15.5a1 1 0 0 1-1-1V4.18c.373.17.652.472.937.757l2.626 2.626c.285.285.588.564.757.937"></svg:path><svg:path fill="currentColor" d="m15.437 4.937l-.353.354zm2.626 2.626l.353-.354zM6.5 10a.5.5 0 0 0 1 0zm1 4a.5.5 0 0 0-1 0zm11.205-5.717l.427-.26zm-3.988-3.988l.26-.427zM18.82 8.5V9a.5.5 0 0 0 .456-.707zM14.5 4.18l.207-.455A.5.5 0 0 0 14 4.18zm1.3 15.32h-5.6v1h5.6zm-5.6-15h2.975v-1H10.2zm8.3 5.325V16.8h1V9.825zm-3.416-4.534l2.625 2.625l.707-.707l-2.625-2.625zM7.5 10V7.2h-1V10zm0 6.8V14h-1v2.8zm10.21-8.884c.362.363.483.489.569.629l.853-.523c-.162-.264-.387-.484-.716-.813zm-1.92-3.332c-.328-.33-.548-.554-.812-.716l-.523.853c.14.086.266.207.629.57zM13.176 4.5c.567 0 .939.012 1.28.221l.523-.853C14.36 3.49 13.7 3.5 13.175 3.5zM19.5 9.825c0-.526.01-1.185-.368-1.803l-.853.523c.21.341.221.713.221 1.28zM18.82 8H15.5v1h3.32zM15 7.5V4.18h-1V7.5zm.5.5a.5.5 0 0 1-.5-.5h-1A1.5 1.5 0 0 0 15.5 9zm-1.207-3.365c.271.123.478.343.79.656l.708-.707c-.26-.26-.61-.643-1.084-.86zm3.416 3.281c.313.313.533.52.656.791l.91-.414c-.216-.475-.6-.825-.859-1.084zM10.2 19.5c-1.14 0-1.765-.186-2.126-.533c-.356-.344-.574-.964-.574-2.167h-1c0 1.268.218 2.248.88 2.887c.658.634 1.633.813 2.82.813zm8.3-2.7c0 1.14-.186 1.765-.533 2.126c-.344.356-.964.574-2.167.574v1c1.268 0 2.248-.218 2.887-.88c.634-.658.813-1.633.813-2.82zm-11-9.6c0-1.14.186-1.765.533-2.126c.344-.356.964-.574 2.167-.574v-1c-1.268 0-2.248.218-2.887.88C6.68 5.038 6.5 6.013 6.5 7.2z"></svg:path></svg:g>`,
})
export class StashFileImportLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFileImportSolidIcon],svg[stash-file-import-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="stashFileImportSolid0" fill="currentColor" d="M18.82 8.5H15.5a1 1 0 0 1-1-1V4.18c.373.17.652.472.937.757l2.626 2.626c.285.285.588.564.757.937"></svg:path></svg:defs><svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 17.5L10.5 15m2.5 2.5l2.5-2.5M13 17.5v-1.1c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C9.96 10 8.84 10 6.6 10H4"></svg:path><svg:use href="#stashFileImportSolid0"></svg:use><svg:path fill="currentColor" d="m15.437 4.937l-.53.53zm2.626 2.626l.53-.53zM6.25 10a.75.75 0 0 0 1.5 0zm1.5 4a.75.75 0 0 0-1.5 0zm10.955-5.717l.64-.391zm-3.988-3.988l.391-.64zM18.82 8.5v.75a.75.75 0 0 0 .683-1.06zM14.5 4.18l.31-.683a.75.75 0 0 0-1.06.683zm1.3 15.07h-5.6v1.5h5.6zm-5.6-14.5h2.975v-1.5H10.2zm8.05 5.075V16.8h1.5V9.825zm-3.343-4.357l2.625 2.625l1.061-1.06l-2.625-2.626zM7.75 10V7.2h-1.5V10zm0 6.8V14h-1.5v2.8zm9.782-8.707c.372.371.467.474.534.582l1.279-.783c-.181-.296-.431-.539-.752-.86zm-1.564-3.686c-.321-.32-.564-.57-.86-.752l-.783 1.28c.108.066.21.161.582.533zm-2.793.343c.577 0 .877.017 1.15.184l.783-1.279c-.687-.42-1.417-.405-1.934-.405zm6.575 5.075c0-.516.016-1.246-.405-1.933l-1.28.783c.168.273.185.573.185 1.15zm-.93-2.075H15.5v1.5h3.32zm-3.57-.25V4.18h-1.5V7.5zm.25.25a.25.25 0 0 1-.25-.25h-1.5c0 .966.784 1.75 1.75 1.75zm-1.31-2.888c.22.1.391.28.717.606l1.06-1.061c-.245-.246-.63-.67-1.156-.91zm3.342 3.231c.326.326.505.497.606.718l1.365-.622c-.24-.525-.664-.911-.91-1.157zM10.2 19.25c-1.129 0-1.666-.187-1.952-.463c-.28-.27-.498-.8-.498-1.987h-1.5c0 1.284.218 2.354.957 3.066c.732.707 1.795.884 2.993.884zm8.05-2.45c0 1.129-.187 1.666-.463 1.952c-.27.28-.8.498-1.987.498v1.5c1.284 0 2.354-.218 3.066-.957c.707-.732.884-1.795.884-2.993zM7.75 7.2c0-1.129.187-1.666.463-1.952c.27-.28.8-.498 1.987-.498v-1.5c-1.284 0-2.354.218-3.067.957c-.706.732-.883 1.795-.883 2.993z"></svg:path><svg:use href="#stashFileImportSolid0"></svg:use></svg:g>`,
})
export class StashFileImportSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFilterIcon],svg[stash-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.532 4.75h6.936c.457 0 .854 0 1.165.03c.307.028.685.095.993.348c.397.326.621.814.624 1.322c.002.39-.172.726-.34.992c-.168.27-.411.59-.695.964l-.031.04l-.01.013l-2.555 3.369c-.252.332-.315.42-.359.51a1.2 1.2 0 0 0-.099.297c-.02.1-.023.212-.023.634v4.243c0 .208 0 .412-.014.578c-.015.164-.052.427-.224.663c-.21.287-.537.473-.9.495c-.302.019-.547-.103-.69-.183c-.144-.08-.309-.195-.476-.31l-.989-.683l-.048-.033c-.191-.131-.403-.276-.562-.477a1.7 1.7 0 0 1-.303-.585c-.071-.244-.07-.5-.07-.738v-2.97c0-.422-.004-.534-.023-.634a1.2 1.2 0 0 0-.1-.297c-.043-.09-.106-.178-.358-.51L4.825 8.459l-.01-.012l-.03-.04c-.284-.375-.527-.695-.696-.965c-.167-.266-.34-.602-.339-.992a1.72 1.72 0 0 1 .624-1.322c.308-.253.686-.32.993-.349c.311-.029.707-.029 1.165-.029m.397 4l1.647 2.17l.035.047c.201.264.361.475.478.715q.154.317.222.665c.051.261.05.527.05.864v2.968c0 .158.001.247.005.314l.006.062a.2.2 0 0 0 .036.073l.041.034c.05.04.12.088.248.176l.941.65V13.21c0-.337 0-.603.051-.864q.068-.347.222-.665c.117-.24.277-.45.478-.715l.035-.046l1.646-2.17zm7.28-1.5c.195-.26.334-.45.43-.604c.08-.126.104-.188.11-.207a.22.22 0 0 0-.057-.134a1 1 0 0 0-.2-.032c-.232-.022-.556-.023-1.06-.023H6.568c-.504 0-.828 0-1.06.023a1 1 0 0 0-.2.032a.22.22 0 0 0-.057.134c.006.019.03.081.11.207c.096.155.235.344.43.604zm1.541 3.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-1.5 2.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75m-.5 2.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 2.5a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class StashFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFilterDuotoneIcon],svg[stash-filter-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.532 4.75h6.936c.457 0 .854 0 1.165.03c.307.028.685.095.993.348c.397.326.621.814.624 1.322c.002.39-.172.726-.34.992c-.168.27-.411.59-.695.964l-2.596 3.422c-.252.332-.315.42-.359.51a1.2 1.2 0 0 0-.099.297c-.02.1-.023.212-.023.634v4.243c0 .208 0 .412-.014.578c-.015.164-.052.427-.224.663c-.21.287-.537.473-.9.495c-.302.019-.547-.103-.69-.183a7 7 0 0 1-.476-.31l-.989-.683l-.048-.033c-.191-.131-.403-.276-.562-.477a1.7 1.7 0 0 1-.303-.585c-.071-.244-.07-.5-.07-.738v-2.97c0-.422-.004-.534-.023-.634a1.2 1.2 0 0 0-.1-.297c-.043-.09-.106-.178-.358-.51L4.785 8.406c-.284-.374-.527-.694-.696-.964c-.167-.266-.34-.602-.339-.992a1.72 1.72 0 0 1 .624-1.322c.308-.253.686-.32.993-.349c.311-.029.707-.029 1.165-.029M5.308 6.305a.22.22 0 0 0-.057.134c.006.019.03.081.11.207c.128.205.33.472.64.881l2.575 3.394l.035.046c.201.264.361.475.478.715q.154.317.222.665c.051.261.05.527.05.864v2.968c0 .158.001.247.005.314l.006.062a.2.2 0 0 0 .036.073l.041.034c.05.04.12.088.248.176l.941.65V13.21c0-.337 0-.603.051-.864q.068-.347.222-.665c.117-.24.277-.45.478-.715l.035-.046l2.575-3.394c.31-.41.512-.676.64-.881c.08-.126.104-.188.11-.207a.22.22 0 0 0-.057-.134a1 1 0 0 0-.2-.032c-.232-.022-.556-.023-1.06-.023H6.568c-.504 0-.828 0-1.06.023a1 1 0 0 0-.2.032M15.75 10.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-1.5 2.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75m-.5 2.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75m0 2.5a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" d="M13.64 8H6.36l2.251 2.967c.201.264.361.475.478.715q.154.317.222.665c.051.261.05.527.05.864v2.968c0 .158.001.247.005.314l.006.062a.2.2 0 0 0 .036.073l.041.034c.05.04.12.088.248.176l.941.65V13.21c0-.337 0-.603.051-.864q.068-.347.222-.665c.117-.24.277-.45.478-.715z" opacity=".5"></svg:path>`,
})
export class StashFilterDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFilterLightIcon],svg[stash-filter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.542 5h6.916c.466 0 .852 0 1.151.028c.297.028.611.09.858.294c.338.277.53.693.533 1.129c.002.316-.14.6-.301.858c-.163.26-.4.573-.69.954l-2.59 3.414c-.246.324-.327.434-.383.551a1.5 1.5 0 0 0-.12.359c-.026.13-.028.27-.028.682v4.236c0 .215 0 .408-.013.563c-.014.153-.046.359-.177.537a.96.96 0 0 1-.714.394c-.227.014-.419-.077-.552-.152s-.29-.183-.461-.301l-.984-.68l-.042-.029c-.2-.137-.38-.26-.514-.43a1.5 1.5 0 0 1-.26-.5c-.06-.208-.06-.427-.06-.676V13.27c0-.412-.001-.553-.027-.682a1.5 1.5 0 0 0-.12-.359c-.056-.117-.137-.227-.383-.551l-2.558-3.37l-.006-.01l-.027-.034a14 14 0 0 1-.689-.954c-.161-.257-.303-.542-.301-.858c.002-.436.195-.852.533-1.13c.247-.203.56-.265.858-.293C5.69 5 6.076 5 6.542 5m-.117 3.5l1.952 2.572l.028.037c.208.274.354.465.459.682q.14.288.202.604c.046.236.046.479.046.828v2.956c0 .33.004.395.02.446q.026.09.082.16c.03.038.075.075.341.259l.966.666c.167.115.277.19.36.241c.007-.103.007-.246.007-.467v-4.261c0-.35 0-.592.046-.828q.063-.316.202-.604c.105-.217.251-.408.46-.683l.027-.036L13.575 8.5zm7.908-1c.236-.311.403-.538.518-.721c.14-.224.15-.305.149-.323a.47.47 0 0 0-.168-.362c-.005-.004-.062-.046-.316-.07C14.269 6 13.93 6 13.432 6H6.568c-.499 0-.837 0-1.084.024c-.254.024-.311.066-.316.07A.47.47 0 0 0 5 6.456c0 .018.009.1.149.323c.115.183.282.41.518.721zm1.667 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M14.5 13a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1H15a.5.5 0 0 1-.5-.5m-.5 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2.5a.5.5 0 0 1 .5-.5H17a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class StashFilterLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFilterSolidIcon],svg[stash-filter-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.532 4.75c-.458 0-.854 0-1.165.03c-.307.028-.685.095-.993.348A1.72 1.72 0 0 0 3.75 6.45c-.002.39.172.726.34.992c.168.27.411.59.695.964l2.596 3.422c.252.332.315.42.359.51q.068.14.099.297c.02.1.023.212.023.634v2.97c0 .238-.001.494.07.738c.062.212.165.41.303.585c.16.2.37.346.562.477l.048.033l.99.683c.166.115.331.23.475.31s.388.202.69.183c.363-.022.69-.208.9-.495c.172-.236.21-.499.224-.663c.014-.166.014-.37.014-.578v-4.243c0-.422.004-.534.023-.634q.03-.157.1-.297c.043-.09.106-.178.358-.51l2.596-3.422c.284-.374.527-.694.696-.964c.167-.266.34-.602.339-.992a1.72 1.72 0 0 0-.624-1.322c-.308-.253-.686-.32-.993-.349c-.311-.029-.707-.029-1.165-.029zM5.251 6.439a.22.22 0 0 1 .057-.134c.024-.007.083-.021.2-.032c.232-.022.556-.023 1.06-.023h6.864c.504 0 .828 0 1.06.023c.117.01.176.025.2.032c.03.033.053.08.057.134a1 1 0 0 1-.11.207c-.128.205-.33.472-.64.881L13.64 8H6.36L6 7.527c-.31-.41-.512-.676-.64-.881a1 1 0 0 1-.11-.207M16.5 9.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zm-1.5 2.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm-.5 2.5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zm0 2.5a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class StashFilterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFlagIcon],svg[stash-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 4.593v8.903q.162-.053.34-.108c.761-.231 1.788-.488 2.66-.488c1.418 0 2.74.432 3.934.821l.049.016c1.245.406 2.358.763 3.517.763c.936 0 2.256-.36 3-.593V5.073c-.806.232-2.015.527-3 .527c-1.418 0-2.74-.432-3.934-.821l-.049-.016C10.522 4.357 9.41 4 8.25 4c-.652 0-1.51.178-2.248.375c-.287.076-.545.153-.752.218m0 10.488c.21-.075.479-.167.777-.258c.737-.224 1.586-.423 2.223-.423c1.16 0 2.272.357 3.517.763l.049.016c1.193.39 2.516.821 3.934.821c1.289 0 2.977-.507 3.648-.725c.522-.168.852-.653.852-1.177V4.759c0-.87-.85-1.448-1.642-1.208c-.781.237-1.99.549-2.858.549c-1.16 0-2.272-.357-3.517-.763l-.049-.016C10.991 2.931 9.668 2.5 8.25 2.5c-.858 0-1.874.222-2.635.425a21 21 0 0 0-1.337.408l-.021.008l-.006.002h-.002l.251.707l-.252-.706a.75.75 0 0 0-.498.706v16.7a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StashFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFlagDuotoneIcon],svg[stash-flag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25 4.593v8.903q.162-.053.34-.108c.761-.231 1.788-.488 2.66-.488c1.418 0 2.74.432 3.934.821l.049.016c1.245.406 2.358.763 3.517.763c.936 0 2.256-.36 3-.593V5.073c-.806.232-2.015.527-3 .527c-1.418 0-2.74-.432-3.934-.821l-.049-.016C10.522 4.357 9.41 4 8.25 4c-.652 0-1.51.178-2.248.375c-.287.076-.545.153-.752.218m0 10.488c.21-.075.479-.167.777-.258c.737-.224 1.586-.423 2.223-.423c1.16 0 2.272.357 3.517.763l.049.016c1.193.39 2.516.821 3.934.821c1.289 0 2.977-.507 3.648-.725c.522-.168.852-.653.852-1.177V4.759c0-.87-.85-1.448-1.642-1.208c-.781.237-1.99.549-2.858.549c-1.16 0-2.272-.357-3.517-.763l-.049-.016C10.991 2.931 9.668 2.5 8.25 2.5c-.858 0-1.874.222-2.635.425a21 21 0 0 0-1.337.408l-.021.008l-.006.002h-.002l.251.707l-.252-.706a.75.75 0 0 0-.498.706v16.7a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M4.5 4.05s2.24-.8 3.75-.8c2.597 0 4.903 1.6 7.5 1.6c.99 0 2.295-.344 3.075-.581c.331-.1.675.145.675.49v9.339c0 .21-.132.399-.333.464c-.68.22-2.262.688-3.417.688c-2.597 0-4.903-1.6-7.5-1.6c-1.51 0-3.75.912-3.75.912z" opacity=".5"></svg:path>`,
})
export class StashFlagDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFlagLightIcon],svg[stash-flag-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4.41v9.434c.193-.067.418-.142.663-.216c.757-.23 1.754-.478 2.587-.478c1.378 0 2.668.421 3.871.814l.034.01c1.239.405 2.39.776 3.595.776c1.059 0 2.558-.436 3.25-.66V4.758l-.006-.006l-.013-.005h-.01c-.78.237-2.15.603-3.221.603c-1.378 0-2.668-.421-3.871-.814l-.034-.01c-1.239-.405-2.39-.776-3.595-.776c-.686 0-1.57.185-2.312.383A19 19 0 0 0 5 4.41m0 10.496l.045-.017c.228-.083.546-.194.91-.305c.74-.225 1.618-.434 2.295-.434c1.206 0 2.356.371 3.595.775l.034.011c1.203.393 2.493.814 3.871.814c1.244 0 2.897-.494 3.571-.712a.98.98 0 0 0 .679-.94V4.759c0-.695-.681-1.162-1.32-.968c-.78.236-2.022.559-2.93.559c-1.206 0-2.356-.371-3.595-.775l-.034-.011C10.918 3.17 9.628 2.75 8.25 2.75c-.824 0-1.814.215-2.57.417a20 20 0 0 0-1.32.402l-.02.007l-.006.002h-.001s-.001.001.167.472l-.167-.471A.5.5 0 0 0 4 4.05v16.7a.5.5 0 0 0 1 0z" clip-rule="evenodd"></svg:path>`,
})
export class StashFlagLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFlagSolidIcon],svg[stash-flag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.027 14.823c-.298.091-.566.182-.777.258v5.669a.75.75 0 0 1-1.5 0V4.05c0-.317.2-.6.498-.706l.252.706l-.252-.706l.003-.001l.006-.002l.021-.008a11 11 0 0 1 .366-.122c.243-.078.582-.182.971-.286c.76-.203 1.777-.425 2.635-.425c1.418 0 2.74.432 3.934.821l.049.016c1.245.406 2.358.763 3.517.763c.867 0 2.077-.312 2.858-.549c.792-.24 1.642.338 1.642 1.208v9.339c0 .524-.33 1.009-.852 1.177c-.671.218-2.36.725-3.648.725c-1.418 0-2.74-.432-3.934-.821l-.049-.016c-1.245-.406-2.358-.763-3.517-.763c-.637 0-1.486.199-2.223.423" clip-rule="evenodd"></svg:path>`,
})
export class StashFlagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderIcon],svg[stash-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.123c-.394 0-.696.003-.98-.053a2.75 2.75 0 0 1-1.631-1.008c-.498-.64-.641-1.731-1.557-1.915M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.179.23.31.5.487.854c.244.488.479.942 1.07 1.06c.104.022.228.025.686.025h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderAltIcon],svg[stash-folder-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.17 3.75c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27a2.75 2.75 0 0 0-1.202 1.2c-.172.338-.24.694-.27 1.074c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-.7-.872c0-.638.04-1.33-.21-1.931a2.75 2.75 0 0 0-1.488-1.489c-.629-.26-1.36-.209-2.027-.209zm2.653 1.5c.458 0 .582.003.686.024c.294.06.557.222.742.458c.341.44.47 1.014.815 1.457c.405.52.983.878 1.63 1.008c.27.053.553.053.917.053H17.8c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.546c.046.091.088.228.111.515c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H6.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515a1.25 1.25 0 0 1 .547-.546c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025zm2.887 0c.32.598.523 1.324 1.28 1.476c.105.02.23.024.687.024h4.153c.57 0 1.03 0 1.416.036a7 7 0 0 0-.013-.33c-.047-.686-.528-1.144-1.19-1.189A17 17 0 0 0 17 5.25z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderAltDuotoneIcon],svg[stash-folder-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6c-.19-.381-.286-.572-.408-.728a2 2 0 0 0-1.186-.733C9.462 4.5 9.25 4.5 8.823 4.5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.02 3 6.58 3 7.7v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 17.98 21 17.42 21 16.3v-5.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 7.5 18.92 7.5 17.8 7.5h-4.123c-.426 0-.64 0-.833-.039a2 2 0 0 1-1.186-.733c-.122-.156-.217-.347-.408-.728" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.396 3.757c-.154-.007-.32-.007-.509-.007H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-.7-.872c0-.402-.002-.742-.02-1.024a2.8 2.8 0 0 0-.19-.907a2.75 2.75 0 0 0-1.488-1.489c-.29-.12-.59-.167-.907-.188c-.304-.021-.675-.021-1.12-.021H9.5a1 1 0 0 0-.104.007M8.823 5.25c.458 0 .582.003.686.024c.294.06.557.222.742.458c.065.084.123.194.328.603l.029.058c.162.325.29.58.457.796c.406.52.985.878 1.632 1.008c.268.053.552.053.916.053H17.8c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.546c.046.091.088.228.111.515c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H6.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515a1.25 1.25 0 0 1 .547-.546c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025zm2.887 0q.086.164.182.357l.029.058c.205.409.263.519.328.602c.185.237.448.4.742.459c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03l.07.006a7 7 0 0 0-.012-.33c-.017-.24-.046-.357-.078-.434a1.25 1.25 0 0 0-.677-.677c-.077-.032-.194-.061-.435-.078A17 17 0 0 0 17 5.25z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderAltLightIcon],svg[stash-folder-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.41 4.008A.5.5 0 0 1 9.5 4h7.518c.45 0 .814 0 1.11.02a2.6 2.6 0 0 1 .829.17a2.5 2.5 0 0 1 1.353 1.353a2.6 2.6 0 0 1 .17.829c.02.296.02.66.02 1.11V7.5a2.5 2.5 0 0 1 .727.865c.151.296.214.616.244.98c.029.355.029.792.029 1.334v5.642c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244C18.8 20 18.362 20 17.82 20H6.18c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98c-.03-.355-.03-.793-.03-1.335V7.68c0-.542 0-.98.029-1.333c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243C5.2 4 5.638 4 6.18 4h2.695c.209 0 .381 0 .536.008M17 5c.473 0 .802 0 1.06.018c.254.017.401.05.514.096a1.5 1.5 0 0 1 .812.812c.047.113.079.26.096.514c.012.171.016.375.017.63a4 4 0 0 0-.345-.041C18.8 7 18.364 7 17.821 7h-4.144c-.447 0-.601-.002-.735-.03a1.5 1.5 0 0 1-.89-.549c-.084-.108-.155-.245-.355-.645l-.022-.045c-.16-.318-.271-.542-.411-.731zM8.823 5c.447 0 .601.002.735.03a1.5 1.5 0 0 1 .89.549c.084.108.155.245.355.645l.022.045c.17.337.285.57.438.766a2.5 2.5 0 0 0 1.483.916c.243.05.503.05.88.049H17.8c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273v5.6c0 .568 0 .965-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H6.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.308-.026-.705-.026-1.273V7.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.655c.132-.068.306-.114.608-.138C5.236 5 5.632 5 6.2 5z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderAltSolidIcon],svg[stash-folder-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.396 3.757A1 1 0 0 1 9.5 3.75h7.525c.445 0 .816 0 1.12.02c.317.022.617.069.907.19a2.75 2.75 0 0 1 1.489 1.488c.12.29.167.59.188.907c.02.282.02.621.021 1.024c.29.238.528.535.7.872c.172.338.24.694.27 1.074c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.364.03-.81.03-1.344.03H6.169c-.534 0-.98 0-1.344-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.202c-.172-.337-.24-.694-.27-1.073c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03h2.717q.28-.002.509.007m9.85 3.029l-.071-.006c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058q-.096-.194-.182-.357H17c.476 0 .796 0 1.043.017c.241.017.358.046.435.078c.307.127.55.37.677.677c.032.077.061.194.078.435q.009.144.013.329" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowDownIcon],svg[stash-folder-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.823 5.25c.458 0 .582.003.686.024c.294.06.557.222.742.458c.065.084.123.194.328.603l.029.058c.162.325.29.58.457.796c.406.52.985.878 1.632 1.008c.268.053.552.053.916.053H17.8c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.546c.046.091.088.228.111.515c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H6.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515a1.25 1.25 0 0 1 .547-.546c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025zm.98-1.447c-.268-.053-.552-.053-.916-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M12 9.5a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22v-4.19A.75.75 0 0 1 12 9.5" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowDownDuotoneIcon],svg[stash-folder-arrow-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.843 5.272c.121.156.216.347.407.728s.286.572.408.728a2 2 0 0 0 1.186.733c.194.039.407.039.833.039H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.02 21 9.58 21 10.7v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.98 3 17.42 3 16.3V7.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4.5 5.08 4.5 6.2 4.5h2.623c.426 0 .64 0 .833.039a2 2 0 0 1 1.186.733M12 9.5a.75.75 0 0 1 .75.75v4.19l1.22-1.22a.75.75 0 1 1 1.06 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0l-2.5-2.5a.75.75 0 1 1 1.06-1.06l1.22 1.22v-4.19A.75.75 0 0 1 12 9.5" opacity=".5"></svg:path><svg:path d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.409.263.519.328.603c.185.236.448.399.742.458c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z"></svg:path></svg:g>`,
})
export class StashFolderArrowDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowDownLightIcon],svg[stash-folder-arrow-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a.5.5 0 0 1 .5.5v4.793l1.646-1.647a.5.5 0 0 1 .708.708l-2.5 2.5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 0 1 .708-.708l1.646 1.647V10.5a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.754 4.049c-.243-.05-.503-.05-.88-.049H6.179c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.244a2.5 2.5 0 0 0-1.093 1.092c-.15.296-.213.616-.243.98C2.5 6.7 2.5 7.138 2.5 7.68v8.642c0 .542 0 .98.029 1.333c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244C5.2 20 5.638 20 6.179 20h11.643c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98c.029-.355.029-.792.029-1.334V10.68c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243C18.8 7 18.362 7 17.82 7h-4.144c-.447 0-.601-.002-.735-.03a1.5 1.5 0 0 1-.89-.549c-.084-.108-.155-.245-.355-.645l-.022-.045c-.17-.337-.285-.57-.438-.766a2.5 2.5 0 0 0-1.483-.916M8.823 5c.447 0 .601.002.735.03a1.5 1.5 0 0 1 .89.549c.084.108.155.245.355.645l.022.045c.17.337.285.57.438.766a2.5 2.5 0 0 0 1.483.916c.243.05.503.05.88.049H17.8c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273v5.6c0 .568 0 .965-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H6.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.308-.026-.705-.026-1.273V7.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.655c.132-.068.306-.114.608-.138C5.236 5 5.632 5 6.2 5z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowDownSolidIcon],svg[stash-folder-arrow-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008m2.946 6.447a.75.75 0 0 0-1.5 0v4.19l-1.22-1.22a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l2.5-2.5a.75.75 0 1 0-1.06-1.06l-1.22 1.22z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowLeftIcon],svg[stash-folder-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.75 13.25A.75.75 0 0 1 15 14h-4.19l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 1 1 1.06 1.06l-1.22 1.22H15a.75.75 0 0 1 .75.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M8.823 5.25c.458 0 .582.003.686.024c.294.06.557.222.742.458c.065.084.123.194.328.603l.029.058c.162.325.29.58.457.796c.406.52.985.878 1.632 1.008c.268.053.552.053.916.053H17.8c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.546c.046.091.088.228.111.515c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H6.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515a1.25 1.25 0 0 1 .547-.546c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowLeftDuotoneIcon],svg[stash-folder-arrow-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.843 5.272c.121.156.216.347.407.728s.286.572.408.728a2 2 0 0 0 1.186.733c.194.039.407.039.833.039H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.02 21 9.58 21 10.7v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.98 3 17.42 3 16.3V7.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4.5 5.08 4.5 6.2 4.5h2.623c.426 0 .64 0 .833.039a2 2 0 0 1 1.186.733m4.907 7.978A.75.75 0 0 1 15 14h-4.19l1.22 1.22a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 1 1 1.06 1.06l-1.22 1.22H15a.75.75 0 0 1 .75.75" opacity=".5"></svg:path><svg:path d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.409.263.519.328.603c.185.236.448.399.742.458c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z"></svg:path></svg:g>`,
})
export class StashFolderArrowLeftDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowLeftLightIcon],svg[stash-folder-arrow-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 13.5a.5.5 0 0 1-.5.5h-4.793l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .708.708L10.207 13H15a.5.5 0 0 1 .5.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.754 4.049c-.243-.05-.503-.05-.88-.049H6.179c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.244a2.5 2.5 0 0 0-1.093 1.092c-.15.296-.213.616-.243.98C2.5 6.7 2.5 7.138 2.5 7.68v8.642c0 .542 0 .98.029 1.333c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244C5.2 20 5.638 20 6.179 20h11.643c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98c.029-.355.029-.792.029-1.334V10.68c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243C18.8 7 18.362 7 17.82 7h-4.144c-.447 0-.601-.002-.735-.03a1.5 1.5 0 0 1-.89-.549c-.084-.108-.155-.245-.355-.645l-.022-.045c-.17-.337-.285-.57-.438-.766a2.5 2.5 0 0 0-1.483-.916M8.823 5c.447 0 .601.002.735.03a1.5 1.5 0 0 1 .89.549c.084.108.155.245.355.645l.022.045c.17.337.285.57.438.766a2.5 2.5 0 0 0 1.483.916c.243.05.503.05.88.049H17.8c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273v5.6c0 .568 0 .965-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H6.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.308-.026-.705-.026-1.273V7.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.655c.132-.068.306-.114.608-.138C5.236 5 5.632 5 6.2 5z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowLeftSolidIcon],svg[stash-folder-arrow-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M15 14a.75.75 0 0 0 0-1.5h-4.19l1.22-1.22a.75.75 0 1 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 1 0 1.06-1.06L10.81 14z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowRightIcon],svg[stash-folder-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 13.25A.75.75 0 0 1 9 12.5h4.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06L13.19 14H9a.75.75 0 0 1-.75-.75"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M8.823 5.25c.458 0 .582.003.686.024c.294.06.557.222.742.458c.065.084.123.194.328.603l.029.058c.162.325.29.58.457.796c.406.52.985.878 1.632 1.008c.268.053.552.053.916.053H17.8c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.546c.046.091.088.228.111.515c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H6.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515a1.25 1.25 0 0 1 .547-.546c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowRightDuotoneIcon],svg[stash-folder-arrow-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.409.263.519.328.603c.185.236.448.399.742.458c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z"></svg:path><svg:path d="M10.843 5.272c.121.156.216.347.407.728s.286.572.408.728a2 2 0 0 0 1.186.733c.194.039.407.039.833.039H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.02 21 9.58 21 10.7v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.98 3 17.42 3 16.3V7.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4.5 5.08 4.5 6.2 4.5h2.623c.426 0 .64 0 .833.039a2 2 0 0 1 1.186.733M8.25 13.25A.75.75 0 0 1 9 12.5h4.19l-1.22-1.22a.75.75 0 1 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 1 1-1.06-1.06L13.19 14H9a.75.75 0 0 1-.75-.75" opacity=".5"></svg:path></svg:g>`,
})
export class StashFolderArrowRightDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowRightLightIcon],svg[stash-folder-arrow-right-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 13.5A.5.5 0 0 1 9 13h4.793l-1.647-1.646a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L13.793 14H9a.5.5 0 0 1-.5-.5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.754 4.049c-.243-.05-.503-.05-.88-.049H6.179c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.244a2.5 2.5 0 0 0-1.093 1.092c-.15.296-.213.616-.243.98C2.5 6.7 2.5 7.138 2.5 7.68v8.642c0 .542 0 .98.029 1.333c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244C5.2 20 5.638 20 6.179 20h11.643c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98c.029-.355.029-.792.029-1.334V10.68c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243C18.8 7 18.362 7 17.82 7h-4.144c-.447 0-.601-.002-.735-.03a1.5 1.5 0 0 1-.89-.549c-.084-.108-.155-.245-.355-.645l-.022-.045c-.17-.337-.285-.57-.438-.766a2.5 2.5 0 0 0-1.483-.916M8.823 5c.447 0 .601.002.735.03a1.5 1.5 0 0 1 .89.549c.084.108.155.245.355.645l.022.045c.17.337.285.57.438.766a2.5 2.5 0 0 0 1.483.916c.243.05.503.05.88.049H17.8c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273v5.6c0 .568 0 .965-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H6.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.308-.026-.705-.026-1.273V7.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.655c.132-.068.306-.114.608-.138C5.236 5 5.632 5 6.2 5z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowRightLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowRightSolidIcon],svg[stash-folder-arrow-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M9 12.5A.75.75 0 0 0 9 14h4.19l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowUpIcon],svg[stash-folder-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8.823 5.25c.458 0 .582.003.686.024c.294.06.557.222.742.458c.065.084.123.194.328.603l.029.058c.162.325.29.58.457.796c.406.52.985.878 1.632 1.008c.268.053.552.053.916.053H17.8c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.546c.046.091.088.228.111.515c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H6.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515a1.25 1.25 0 0 1 .547-.546c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025zm.98-1.447c-.268-.053-.552-.053-.916-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M12 17a.75.75 0 0 0 .75-.75v-4.19l1.22 1.22a.75.75 0 1 0 1.06-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0l-2.5 2.5a.75.75 0 1 0 1.06 1.06l1.22-1.22v4.19c0 .414.336.75.75.75" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowUpDuotoneIcon],svg[stash-folder-arrow-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.409.263.519.328.603c.185.236.448.399.742.458c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z"></svg:path><svg:path d="M10.843 5.272c.121.156.216.347.407.728s.286.572.408.728a2 2 0 0 0 1.186.733c.194.039.407.039.833.039H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.02 21 9.58 21 10.7v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.98 3 17.42 3 16.3V7.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4.5 5.08 4.5 6.2 4.5h2.623c.426 0 .64 0 .833.039a2 2 0 0 1 1.186.733M12 17a.75.75 0 0 1-.75-.75v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22v4.19A.75.75 0 0 1 12 17" opacity=".5"></svg:path></svg:g>`,
})
export class StashFolderArrowUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowUpLightIcon],svg[stash-folder-arrow-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 11.707V16.5a.5.5 0 0 0 1 0v-4.793l1.646 1.647a.5.5 0 0 0 .708-.708l-2.5-2.5a.5.5 0 0 0-.708 0l-2.5 2.5a.5.5 0 0 0 .708.708z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.754 4.049c-.243-.05-.503-.05-.88-.049H6.179c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.244a2.5 2.5 0 0 0-1.093 1.092c-.15.296-.213.616-.243.98C2.5 6.7 2.5 7.138 2.5 7.68v8.642c0 .542 0 .98.029 1.333c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244C5.2 20 5.638 20 6.179 20h11.643c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98c.029-.355.029-.792.029-1.334V10.68c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243C18.8 7 18.362 7 17.82 7h-4.144c-.447 0-.601-.002-.735-.03a1.5 1.5 0 0 1-.89-.549c-.084-.108-.155-.245-.355-.645l-.022-.045c-.17-.337-.285-.57-.438-.766a2.5 2.5 0 0 0-1.483-.916M8.823 5c.447 0 .601.002.735.03a1.5 1.5 0 0 1 .89.549c.084.108.155.245.355.645l.022.045c.17.337.285.57.438.766a2.5 2.5 0 0 0 1.483.916c.243.05.503.05.88.049H17.8c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273v5.6c0 .568 0 .965-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H6.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.308-.026-.705-.026-1.273V7.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.655c.132-.068.306-.114.608-.138C5.236 5 5.632 5 6.2 5z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderArrowUpSolidIcon],svg[stash-folder-arrow-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M12.75 16.25a.75.75 0 0 1-1.5 0v-4.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderArrowUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderDuotoneIcon],svg[stash-folder-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.25 6c-.19-.381-.286-.572-.408-.728a2 2 0 0 0-1.186-.733C9.462 4.5 9.25 4.5 8.823 4.5H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 6.02 3 6.58 3 7.7v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 17.98 21 17.42 21 16.3v-5.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 7.5 18.92 7.5 17.8 7.5h-4.123c-.426 0-.64 0-.833-.039a2 2 0 0 1-1.186-.733c-.122-.156-.217-.347-.408-.728" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.409.263.519.328.603c.185.236.448.399.742.458c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderLightIcon],svg[stash-folder-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.558 5.03C9.424 5.001 9.27 5 8.823 5H6.2c-.568 0-.964 0-1.273.026c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C3.5 6.736 3.5 7.132 3.5 7.7v8.6c0 .568 0 .964.026 1.273c.024.302.07.476.137.608a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137C5.236 19 5.632 19 6.2 19h11.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.067-.132.113-.306.137-.608c.026-.309.026-.705.026-1.273v-5.6c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137C18.765 8 18.368 8 17.8 8h-4.173c-.378 0-.638 0-.882-.049a2.5 2.5 0 0 1-1.482-.916c-.153-.196-.269-.429-.437-.766l-.023-.045c-.2-.4-.271-.537-.355-.645a1.5 1.5 0 0 0-.89-.55M8.874 4c.377 0 .637 0 .88.049a2.5 2.5 0 0 1 1.483.916c.153.196.269.429.438.766l.022.045c.2.4.271.537.355.645a1.5 1.5 0 0 0 .89.55c.134.027.288.029.735.029h4.144c.542 0 .98 0 1.333.029c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.029.355.029.792.029 1.334v5.642c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244C18.8 20 18.362 20 17.82 20H6.18c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98c-.03-.355-.03-.793-.03-1.335V7.68c0-.542 0-.98.029-1.333c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243C5.2 4 5.638 4 6.18 4z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderLockIcon],svg[stash-folder-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.776 14.592a.671.671 0 1 0-1.342 0v.447a.671.671 0 0 0 1.342 0z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12.105 9C10.865 9 9.9 10.036 9.9 11.262v.655a2 2 0 0 0-.164.074c-.345.183-.62.47-.792.82a1.9 1.9 0 0 0-.176.716c-.018.226-.018.499-.018.812v.606c0 .313 0 .586.018.811c.019.239.06.482.176.718c.171.348.447.636.792.818c.235.125.478.17.713.19c.22.018.487.018.787.018h1.739c.3 0 .566 0 .786-.019c.235-.02.478-.064.714-.189c.344-.182.62-.47.791-.819c.116-.235.158-.478.177-.717c.018-.225.018-.498.018-.811v-.606c0-.313 0-.586-.018-.812a1.9 1.9 0 0 0-.177-.717a1.84 1.84 0 0 0-.791-.819a2 2 0 0 0-.165-.074v-.655c0-1.226-.964-2.262-2.205-2.262m-.863 2.784v-.522c0-.531.41-.92.863-.92c.454 0 .863.389.863.92v.522zm-.88 1.394a.6.6 0 0 1 .2-.038c.158-.014.366-.014.7-.014h1.687c.334 0 .542 0 .699.014c.148.012.19.032.2.038a.5.5 0 0 1 .214.224c.01.02.03.071.043.23c.013.167.013.387.013.732v.556c0 .345 0 .565-.013.731a.7.7 0 0 1-.043.23a.5.5 0 0 1-.214.225a.6.6 0 0 1-.2.038a9 9 0 0 1-.7.014h-1.686c-.334 0-.542 0-.7-.014a.5.5 0 0 1-.2-.038a.5.5 0 0 1-.213-.224a.7.7 0 0 1-.043-.231a11 11 0 0 1-.014-.73v-.557c0-.345 0-.565.014-.731a.7.7 0 0 1 .043-.231a.5.5 0 0 1 .214-.224" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M8.823 5.25c.458 0 .582.003.686.024c.294.06.557.222.742.458c.065.084.123.194.328.603l.029.058c.162.325.29.58.457.796c.406.52.985.878 1.632 1.008c.268.053.552.053.916.053H17.8c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.546c.046.091.088.228.111.515c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H6.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515a1.25 1.25 0 0 1 .547-.546c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderLockDuotoneIcon],svg[stash-folder-lock-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.25 6c.19.381.286.572.408.728a2 2 0 0 0 1.186.733c.194.039.407.039.833.039H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.02 21 9.58 21 10.7v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.98 3 17.42 3 16.3V7.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4.5 5.08 4.5 6.2 4.5h2.623c.426 0 .64 0 .833.039a2 2 0 0 1 1.186.733c.122.156.217.347.408.728m.658 3.25c-1.168 0-2.075.975-2.075 2.129v.617q-.078.029-.155.07a1.74 1.74 0 0 0-.745.77c-.11.222-.149.45-.166.675c-.017.212-.017.47-.017.764v.57c0 .295 0 .552.017.764c.017.225.057.453.166.675c.161.328.42.6.745.77c.221.118.45.16.672.178c.207.018.457.018.74.018h1.636c.283 0 .533 0 .74-.018c.222-.018.45-.06.672-.177a1.74 1.74 0 0 0 .745-.771a1.8 1.8 0 0 0 .166-.675c.017-.212.017-.47.017-.764v-.57c0-.295 0-.552-.017-.764a1.8 1.8 0 0 0-.166-.675c-.161-.328-.42-.6-.745-.77a1.4 1.4 0 0 0-.155-.07v-.617c0-1.154-.908-2.129-2.075-2.129m-.812 2.62v-.491c0-.5.385-.866.812-.866s.812.366.812.866v.49zm.18 2.643a.632.632 0 1 1 1.264 0v.421a.632.632 0 0 1-1.264 0z" opacity=".5"></svg:path><svg:path d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.409.263.519.328.603c.185.236.448.399.742.458c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z"></svg:path></svg:g>`,
})
export class StashFolderLockDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderLockLightIcon],svg[stash-folder-lock-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.429 14.333A.437.437 0 0 0 12 13.89a.437.437 0 0 0-.429.444v.445c0 .245.192.444.429.444a.437.437 0 0 0 .429-.444z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 9c-1.063 0-1.898.922-1.898 2.025v.813q-.14.037-.272.108c-.29.159-.521.41-.666.715c-.094.198-.13.408-.148.632a11 11 0 0 0-.016.796v.588c0 .317 0 .58.016.796c.017.223.054.433.148.631c.145.306.377.557.666.715c.19.104.39.145.602.163c.202.018.449.018.742.018h1.652c.293 0 .54 0 .742-.018c.212-.018.412-.059.602-.163c.29-.158.521-.41.666-.715c.094-.198.13-.407.148-.631c.016-.216.016-.48.016-.796v-.588c0-.317 0-.581-.016-.796a1.8 1.8 0 0 0-.148-.632a1.6 1.6 0 0 0-.666-.715a1.2 1.2 0 0 0-.272-.108v-.813C13.898 9.922 13.063 9 12 9m-.826 2.765h-.215v-.74c0-.643.48-1.136 1.041-1.136s1.04.493 1.04 1.136v.74zm-.944.967a.7.7 0 0 1 .274-.063c.162-.014.372-.015.688-.015h1.616c.316 0 .526 0 .688.015a.7.7 0 0 1 .274.063a.7.7 0 0 1 .297.321c.026.055.05.138.062.31c.014.176.014.404.014.743v.553c0 .34 0 .568-.014.744a.9.9 0 0 1-.062.31a.7.7 0 0 1-.297.32a.7.7 0 0 1-.274.064a9 9 0 0 1-.688.014h-1.616c-.316 0-.526 0-.688-.014a.7.7 0 0 1-.274-.064a.7.7 0 0 1-.297-.32a.9.9 0 0 1-.062-.31a11 11 0 0 1-.014-.744v-.553c0-.339 0-.567.014-.743a.9.9 0 0 1 .062-.31a.7.7 0 0 1 .297-.321" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.754 4.049c-.243-.05-.503-.05-.88-.049H6.179c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.243a2.5 2.5 0 0 0-1.093 1.093c-.15.296-.213.616-.243.98C2.5 6.7 2.5 7.138 2.5 7.68v8.642c0 .542 0 .98.029 1.333c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244C5.2 20 5.638 20 6.18 20h11.64c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98c.029-.355.029-.792.029-1.334V10.68c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243A18 18 0 0 0 17.82 7h-4.144c-.447 0-.601-.002-.735-.03a1.5 1.5 0 0 1-.89-.549c-.084-.108-.155-.245-.355-.645l-.022-.045c-.17-.337-.285-.57-.438-.766a2.5 2.5 0 0 0-1.483-.916M8.823 5c.447 0 .601.002.735.03a1.5 1.5 0 0 1 .89.549c.084.108.155.245.355.645l.022.045c.17.337.285.57.438.766a2.5 2.5 0 0 0 1.483.916c.243.05.503.05.88.049H17.8c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273v5.6c0 .568 0 .964-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H6.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.309-.026-.705-.026-1.273V7.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.656c.132-.067.306-.113.608-.137C5.236 5 5.632 5 6.2 5z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderLockLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderLockSolidIcon],svg[stash-folder-lock-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.096 11.379v.49h1.624v-.49c0-.5-.385-.866-.812-.866s-.812.366-.812.866m.812 2.503a.63.63 0 0 0-.632.631v.421a.632.632 0 0 0 1.264 0v-.42a.63.63 0 0 0-.632-.632"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008m.029 7.576c0-1.154.907-2.129 2.075-2.129c1.167 0 2.075.975 2.075 2.129v.617q.078.029.155.07c.324.17.584.442.745.77c.11.222.148.45.166.675c.017.212.017.47.017.764v.57c0 .295 0 .552-.017.764a1.8 1.8 0 0 1-.166.675c-.161.328-.42.6-.745.77a1.7 1.7 0 0 1-.672.178c-.207.018-.457.018-.74.018H11.09c-.283 0-.533 0-.74-.018a1.7 1.7 0 0 1-.672-.177a1.74 1.74 0 0 1-.745-.771a1.8 1.8 0 0 1-.166-.675c-.017-.212-.017-.47-.017-.764v-.57c0-.295 0-.552.017-.764c.017-.225.057-.453.166-.675c.161-.328.42-.6.745-.77q.077-.041.155-.07z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderLockSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderMultipleIcon],svg[stash-folder-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.095 4.754a4 4 0 0 0-.287-.004H9.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v6.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.516c.12.235.311.426.547.546c.09.046.227.088.514.111c.296.024.68.025 1.253.025h8.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.546c.046-.091.088-.228.111-.515c.024-.296.025-.68.025-1.253v-4c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-2.885c-.151 0-.27 0-.384-.01a2.75 2.75 0 0 1-2.145-1.348a5 5 0 0 1-.175-.343l-.012-.024a4 4 0 0 0-.129-.258a1.25 1.25 0 0 0-.975-.613m-.26-1.504c.151 0 .27 0 .384.01a2.75 2.75 0 0 1 2.145 1.348a5 5 0 0 1 .187.367c.083.173.106.22.129.258c.205.35.57.58.975.613c.044.003.096.004.287.004h2.888c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v4.06c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H9.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 6.752 3.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z"></svg:path><svg:path d="M3.5 6.75a.75.75 0 0 1 .75.75v5.6c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h7.6a.75.75 0 0 1 0 1.5H9.867c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V7.5a.75.75 0 0 1 .75-.75"></svg:path></svg:g>`,
})
export class StashFolderMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderMultipleDuotoneIcon],svg[stash-folder-multiple-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.875 5.3a5 5 0 0 0-.158-.312a2 2 0 0 0-1.56-.981C11.075 4 10.986 4 10.807 4H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 5.52 6 6.08 6 7.2v6.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C7.52 17 8.08 17 9.2 17h8.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 15.48 21 14.92 21 13.8v-4c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 6.6 18.92 6.6 17.8 6.6h-2.858c-.178 0-.267 0-.35-.007a2 2 0 0 1-1.56-.98a5 5 0 0 1-.157-.313" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M11.095 4.754a4 4 0 0 0-.287-.004H9.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v6.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.516c.12.235.311.426.547.546c.09.046.227.088.514.111c.296.024.68.025 1.253.025h8.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.546c.046-.091.088-.228.111-.515c.024-.296.025-.68.025-1.253v-4c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-2.885c-.151 0-.27 0-.384-.01a2.75 2.75 0 0 1-2.145-1.348a5 5 0 0 1-.175-.343l-.012-.024a4 4 0 0 0-.129-.258a1.25 1.25 0 0 0-.975-.613m-.26-1.504c.151 0 .27 0 .384.01a2.75 2.75 0 0 1 2.145 1.348a5 5 0 0 1 .187.367c.083.173.106.22.129.258c.205.35.57.58.975.613c.044.003.096.004.287.004h2.888c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v4.06c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H9.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 6.752 3.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03zM3.5 6.75a.75.75 0 0 1 .75.75v5.6c0 1.133 0 1.937.052 2.566c.05.62.147 1.005.302 1.31a3.25 3.25 0 0 0 1.42 1.42c.305.155.69.251 1.31.302c.63.051 1.434.052 2.566.052h7.6a.75.75 0 0 1 0 1.5H9.867c-1.092 0-1.958 0-2.655-.057c-.714-.058-1.317-.18-1.868-.46a4.75 4.75 0 0 1-2.076-2.076c-.281-.552-.403-1.155-.461-1.869c-.057-.697-.057-1.563-.057-2.655V7.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderMultipleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderMultipleLightIcon],svg[stash-folder-multiple-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.116 4.505a4 4 0 0 0-.308-.005H9.2c-.568 0-.964 0-1.273.026c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C6.5 6.236 6.5 6.632 6.5 7.2v6.6c0 .568 0 .964.026 1.273c.024.303.07.476.137.608a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137c.309.026.705.026 1.273.026h8.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.067-.132.113-.305.137-.608c.026-.309.026-.705.026-1.273v-4c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137c-.308-.026-.705-.026-1.273-.026h-2.879c-.158 0-.266 0-.37-.009a2.5 2.5 0 0 1-1.95-1.226a5 5 0 0 1-.167-.33l-.01-.018a4 4 0 0 0-.138-.276a1.5 1.5 0 0 0-1.17-.736M10.829 3.5c.158 0 .266 0 .37.009a2.5 2.5 0 0 1 1.95 1.226c.052.09.099.187.167.33l.01.018c.08.169.109.227.138.276a1.5 1.5 0 0 0 1.17.736c.057.005.121.005.308.005h2.88c.541 0 .978 0 1.332.029c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.029.355.029.792.029 1.334v4.042c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244c-.355.029-.792.029-1.334.029H9.18c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98a18 18 0 0 1-.03-1.335V7.18c0-.542 0-.98.029-1.333c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243c.355-.03.793-.03 1.335-.03z"></svg:path><svg:path d="M3.5 7a.5.5 0 0 1 .5.5v5.6c0 1.128 0 1.945.053 2.587c.052.636.152 1.056.328 1.402a3.5 3.5 0 0 0 1.53 1.53c.346.176.766.276 1.403.328C7.955 19 8.772 19 9.9 19h7.6a.5.5 0 0 1 0 1H9.877c-1.1 0-1.958 0-2.645-.056c-.698-.057-1.265-.175-1.775-.434a4.5 4.5 0 0 1-1.967-1.967c-.26-.51-.377-1.077-.434-1.775C3 15.08 3 14.224 3 13.123V7.5a.5.5 0 0 1 .5-.5"></svg:path></svg:g>`,
})
export class StashFolderMultipleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderMultipleSolidIcon],svg[stash-folder-multiple-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.835 3.25c.151 0 .27 0 .384.01a2.75 2.75 0 0 1 2.145 1.348c.058.099.11.206.175.343l.012.024c.083.173.106.22.129.258c.205.35.57.58.975.613c.044.003.096.004.287.004h2.888c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v4.06c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H9.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 6.752 3.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z"></svg:path><svg:path fill="currentColor" d="M4.25 7.5a.75.75 0 1 0-1.5 0v5.633c0 1.092 0 1.958.057 2.655c.058.714.18 1.317.46 1.869a4.75 4.75 0 0 0 2.077 2.075c.55.281 1.154.403 1.868.461c.697.057 1.563.057 2.655.057H17.5a.75.75 0 0 0 0-1.5H9.9c-1.132 0-1.937 0-2.566-.052c-.62-.05-1.005-.147-1.31-.302a3.25 3.25 0 0 1-1.42-1.42c-.155-.305-.251-.69-.302-1.31c-.051-.63-.052-1.434-.052-2.566z"></svg:path>`,
})
export class StashFolderMultipleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderPlusIcon],svg[stash-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.003-.686-.024a1.25 1.25 0 0 1-.742-.458c-.065-.084-.123-.194-.328-.603l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M8.823 5.25c.458 0 .582.003.686.024c.294.06.557.222.742.458c.065.084.123.194.328.603l.029.058c.162.325.29.58.457.796c.406.52.985.878 1.632 1.008c.268.053.553.053.916.053H17.8c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.546c.046.091.088.228.111.515c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H6.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515a1.25 1.25 0 0 1 .547-.546c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderPlusDuotoneIcon],svg[stash-folder-plus-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.25 6c.19.381.286.572.408.728a2 2 0 0 0 1.186.733c.194.039.407.039.833.039H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.02 21 9.58 21 10.7v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.98 3 17.42 3 16.3V7.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4.5 5.08 4.5 6.2 4.5h2.623c.426 0 .64 0 .833.039a2 2 0 0 1 1.186.733c.122.156.217.347.408.728m1.5 4.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" opacity=".5"></svg:path><svg:path d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.41.263.519.329.603c.184.236.447.399.74.458c.105.02.23.024.687.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z"></svg:path></svg:g>`,
})
export class StashFolderPlusDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderPlusLightIcon],svg[stash-folder-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 10.5a.5.5 0 0 0-1 0V13H9a.5.5 0 0 0 0 1h2.5v2.5a.5.5 0 0 0 1 0V14H15a.5.5 0 0 0 0-1h-2.5z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.754 4.049c-.243-.05-.503-.05-.88-.049H6.179c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.243a2.5 2.5 0 0 0-1.093 1.093c-.15.296-.213.616-.243.98C2.5 6.7 2.5 7.138 2.5 7.68v8.642c0 .542 0 .98.029 1.333c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244C5.2 20 5.638 20 6.179 20h11.643c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98c.029-.355.029-.792.029-1.334V10.68c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243C18.8 7 18.362 7 17.82 7h-4.144c-.447 0-.601-.002-.735-.03a1.5 1.5 0 0 1-.89-.549c-.084-.108-.155-.245-.355-.645l-.022-.045c-.17-.337-.285-.57-.438-.766a2.5 2.5 0 0 0-1.483-.916M8.823 5c.447 0 .601.002.735.03a1.5 1.5 0 0 1 .89.549c.084.108.155.245.355.645l.022.045c.17.337.285.57.438.766a2.5 2.5 0 0 0 1.483.916c.243.05.503.05.88.049H17.8c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273v5.6c0 .568 0 .965-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H6.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.308-.026-.705-.026-1.273V7.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.656c.132-.067.306-.113.608-.137C5.236 5 5.632 5 6.2 5z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderPlusLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderPlusSolidIcon],svg[stash-folder-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074c.03-.364.03-.81.03-1.344V10.67c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.003-.686-.024a1.25 1.25 0 0 1-.742-.458c-.065-.084-.123-.194-.328-.603l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M12 9.75a.75.75 0 0 1 .75.75v2.25H15a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25H9a.75.75 0 0 1 0-1.5h2.25V10.5a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderPlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderRefreshIcon],svg[stash-folder-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.409.263.519.328.603c.185.236.448.399.742.458c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.81 10h.024c.336 0 .608.27.608.603a.606.606 0 0 1-.608.604c-.632 0-1.099 0-1.468.03c-.37.029-.573.084-.7.151c-.302.16-.553.42-.712.744c-.074.151-.125.353-.153.704c-.02.252-.026.556-.028.944c.271-.268.66-.453.989-.127a.6.6 0 0 1 0 .853l-1.168 1.159a.63.63 0 0 1-.88-.022l-1.057-1.159a.6.6 0 0 1 .043-.852a.61.61 0 0 1 .858.041q.002-.533.03-.93c.034-.422.103-.793.272-1.138a2.88 2.88 0 0 1 1.232-1.281c.348-.185.75-.257 1.177-.29c.423-.034.938-.034 1.542-.034m2.476 1.357l1.057 1.159a.6.6 0 0 1-.043.852a.61.61 0 0 1-.858-.041q-.002.533-.03.93c-.034.422-.103.793-.272 1.138a2.88 2.88 0 0 1-1.232 1.281c-.348.185-.75.257-1.177.29c-.423.034-.938.034-1.542.034h-.023a.606.606 0 0 1-.608-.603c0-.334.272-.604.608-.604c.632 0 1.099 0 1.468-.03c.37-.029.573-.084.7-.151c.302-.16.553-.42.712-.744c.074-.151.125-.353.153-.704c.02-.252.026-.556.028-.944c-.271.268-.66.453-.989.127a.6.6 0 0 1 0-.853l1.168-1.159a.63.63 0 0 1 .88.022"></svg:path>`,
})
export class StashFolderRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderRefreshDuotoneIcon],svg[stash-folder-refresh-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.843 5.272c.121.156.216.347.407.728s.286.572.408.728a2 2 0 0 0 1.186.733c.194.039.407.039.833.039H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.02 21 9.58 21 10.7v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.98 3 17.42 3 16.3V7.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4.5 5.08 4.5 6.2 4.5h2.623c.426 0 .64 0 .833.039a2 2 0 0 1 1.186.733M12.833 10h-.023c-.604 0-1.119 0-1.542.034c-.427.033-.829.105-1.177.29a2.88 2.88 0 0 0-1.232 1.281c-.169.345-.238.716-.271 1.137q-.03.399-.031.931a.61.61 0 0 0-.858-.041a.6.6 0 0 0-.043.852l1.057 1.159a.63.63 0 0 0 .88.022l1.168-1.159a.6.6 0 0 0 0-.853c-.328-.326-.718-.142-.989.127c.002-.388.008-.691.028-.944c.028-.351.079-.553.153-.704c.159-.325.41-.584.712-.744c.127-.067.33-.122.7-.151c.37-.03.836-.03 1.468-.03c.336 0 .608-.27.608-.604a.606.606 0 0 0-.608-.603m3.509 2.516l-1.056-1.159a.63.63 0 0 0-.882-.022l-1.167 1.159a.6.6 0 0 0 0 .853c.328.326.718.142.989-.127c-.002.388-.008.691-.028.944c-.028.351-.079.553-.153.704c-.159.325-.41.584-.712.744c-.127.067-.33.122-.7.151c-.37.03-.836.03-1.468.03a.606.606 0 0 0-.608.604c0 .333.272.603.608.603h.023c.604 0 1.119 0 1.542-.034c.427-.033.829-.105 1.177-.29a2.88 2.88 0 0 0 1.232-1.281c.169-.345.239-.716.271-1.137q.03-.399.031-.931a.61.61 0 0 0 .858.041a.6.6 0 0 0 .043-.852" opacity=".5"></svg:path><svg:path d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.409.263.519.328.603c.185.236.448.399.742.458c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z"></svg:path></svg:g>`,
})
export class StashFolderRefreshDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderRefreshLightIcon],svg[stash-folder-refresh-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.558 5.03C9.424 5.001 9.27 5 8.823 5H6.2c-.568 0-.964 0-1.273.026c-.302.024-.476.07-.608.137a1.5 1.5 0 0 0-.656.656c-.067.132-.113.306-.137.608C3.5 6.736 3.5 7.132 3.5 7.7v8.6c0 .568 0 .964.026 1.273c.024.302.07.476.137.608a1.5 1.5 0 0 0 .656.656c.132.067.306.113.608.137C5.236 19 5.632 19 6.2 19h11.6c.568 0 .965 0 1.273-.026c.302-.024.476-.07.608-.137a1.5 1.5 0 0 0 .656-.656c.067-.132.113-.306.137-.608c.026-.309.026-.705.026-1.273v-5.6c0-.568 0-.964-.026-1.273c-.024-.302-.07-.476-.137-.608a1.5 1.5 0 0 0-.656-.656c-.132-.067-.306-.113-.608-.137C18.765 8 18.368 8 17.8 8h-4.173c-.378 0-.638 0-.882-.049a2.5 2.5 0 0 1-1.482-.916c-.153-.196-.269-.429-.437-.766l-.023-.045c-.2-.4-.271-.537-.355-.645a1.5 1.5 0 0 0-.89-.55M8.874 4c.377 0 .637 0 .88.049a2.5 2.5 0 0 1 1.483.916c.153.196.269.429.438.766l.022.045c.2.4.271.537.355.645a1.5 1.5 0 0 0 .89.55c.134.027.288.029.735.029h4.144c.542 0 .98 0 1.333.029c.365.03.685.093.981.243a2.5 2.5 0 0 1 1.092 1.093c.151.296.214.616.244.98c.029.355.029.792.029 1.334v5.642c0 .542 0 .98-.029 1.333c-.03.365-.093.685-.244.981a2.5 2.5 0 0 1-1.092 1.092c-.296.151-.616.214-.98.244C18.8 20 18.362 20 17.82 20H6.18c-.542 0-.98 0-1.333-.029c-.365-.03-.685-.093-.981-.244a2.5 2.5 0 0 1-1.093-1.092c-.15-.296-.213-.616-.243-.98c-.03-.355-.03-.793-.03-1.335V7.68c0-.542 0-.98.029-1.333c.03-.365.093-.685.243-.981a2.5 2.5 0 0 1 1.093-1.093c.296-.15.616-.213.98-.243C5.2 4 5.638 4 6.18 4z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.866 10h.016c.213 0 .385.174.385.389a.387.387 0 0 1-.385.389c-.665 0-1.17 0-1.573.032c-.403.033-.66.095-.84.193a2.04 2.04 0 0 0-.863.915c-.098.204-.157.456-.187.849c-.03.396-.03.901-.03 1.604v.057l.575-.58a.384.384 0 0 1 .545 0a.39.39 0 0 1 0 .55l-1.234 1.244a.384.384 0 0 1-.559-.014L7.6 14.383a.39.39 0 0 1 .027-.55a.384.384 0 0 1 .545.028l.445.496v-.002c0-.683 0-1.219.033-1.649c.034-.437.104-.8.262-1.128c.26-.54.676-.982 1.192-1.26c.322-.174.705-.248 1.144-.283c.437-.035.973-.035 1.618-.035m2.141 1.245a.38.38 0 0 1 .277.127l1.116 1.245a.39.39 0 0 1-.027.55a.383.383 0 0 1-.545-.028l-.445-.496v.002c0 .683 0 1.219-.033 1.649c-.034.437-.104.8-.262 1.128c-.26.54-.676.982-1.192 1.26c-.322.174-.705.248-1.144.283c-.437.035-.973.035-1.618.035h-.016a.387.387 0 0 1-.385-.389c0-.215.172-.389.385-.389c.665 0 1.17 0 1.573-.033c.403-.032.66-.094.84-.192c.37-.199.672-.518.863-.915c.098-.204.157-.456.187-.849c.03-.396.03-.901.03-1.604v-.057l-.575.58a.384.384 0 0 1-.545 0a.39.39 0 0 1 0-.55l1.234-1.244a.38.38 0 0 1 .282-.113"></svg:path>`,
})
export class StashFolderRefreshLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderRefreshSolidIcon],svg[stash-folder-refresh-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.34-.438-.47-1.013-.815-1.456a2.75 2.75 0 0 0-1.63-1.008M12.81 10h.023c.336 0 .608.27.608.603a.606.606 0 0 1-.608.604c-.632 0-1.099 0-1.468.03c-.37.029-.573.084-.7.151c-.302.16-.553.42-.712.744c-.074.151-.125.353-.153.704c-.02.252-.026.556-.028.944c.271-.268.66-.453.989-.127a.6.6 0 0 1 0 .853l-1.168 1.159a.63.63 0 0 1-.88-.022l-1.057-1.159a.6.6 0 0 1 .043-.852a.61.61 0 0 1 .858.041q.002-.533.03-.93c.034-.422.103-.793.272-1.138a2.88 2.88 0 0 1 1.232-1.281c.348-.185.75-.257 1.177-.29c.423-.034.938-.034 1.542-.034m2.476 1.357l1.056 1.159a.6.6 0 0 1-.043.852a.61.61 0 0 1-.858-.041q-.002.533-.03.93c-.034.422-.103.793-.272 1.138a2.88 2.88 0 0 1-1.232 1.281c-.348.185-.75.257-1.177.29c-.423.034-.938.034-1.542.034h-.023a.606.606 0 0 1-.608-.603c0-.334.272-.604.608-.604c.632 0 1.099 0 1.468-.03c.37-.029.573-.084.7-.151c.302-.16.553-.42.712-.744c.074-.151.125-.353.153-.704c.02-.252.026-.556.028-.944c-.271.268-.66.453-.989.127a.6.6 0 0 1 0-.853l1.168-1.159a.63.63 0 0 1 .88.022" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderRefreshSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderSearchIcon],svg[stash-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.22 9.25a3.22 3.22 0 1 0 1.685 5.966l1.315 1.314a.75.75 0 1 0 1.06-1.06l-1.314-1.315A3.22 3.22 0 0 0 11.22 9.25M9.5 12.47a1.72 1.72 0 1 1 3.441 0a1.72 1.72 0 0 1-3.441 0"></svg:path><svg:path d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M8.823 5.25c.458 0 .582.003.686.024c.294.06.557.222.742.458c.065.084.123.194.328.603l.029.058c.162.325.29.58.457.796c.406.52.985.878 1.632 1.008c.268.053.552.053.916.053H17.8c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.546c.046.091.088.228.111.515c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H6.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V7.7c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.515a1.25 1.25 0 0 1 .547-.546c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025z"></svg:path></svg:g>`,
})
export class StashFolderSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderSearchDuotoneIcon],svg[stash-folder-search-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" opacity=".5"><svg:path d="M9.5 12.47a1.72 1.72 0 1 1 3.441 0a1.72 1.72 0 0 1-3.441 0"></svg:path><svg:path fill-rule="evenodd" d="M11.25 6c.19.381.286.572.408.728a2 2 0 0 0 1.186.733c.194.039.407.039.833.039H17.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.02 21 9.58 21 10.7v5.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.98 3 17.42 3 16.3V7.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 4.5 5.08 4.5 6.2 4.5h2.623c.426 0 .64 0 .833.039a2 2 0 0 1 1.186.733c.122.156.217.347.408.728m-.03 3.25a3.22 3.22 0 1 0 1.685 5.966l1.315 1.314a.75.75 0 1 0 1.06-1.06l-1.314-1.315A3.22 3.22 0 0 0 11.22 9.25" clip-rule="evenodd"></svg:path></svg:g><svg:path fill="currentColor" fill-rule="evenodd" d="M9.51 5.274c-.105-.02-.23-.024-.687-.024H6.2c-.572 0-.957 0-1.253.025c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v8.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h11.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252v-5.6c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025h-4.187c-.364 0-.648 0-.916-.053a2.75 2.75 0 0 1-1.631-1.008c-.169-.217-.296-.471-.458-.796l-.029-.058c-.205-.409-.263-.519-.328-.603a1.25 1.25 0 0 0-.742-.458M8.886 3.75c.364 0 .648 0 .917.053a2.75 2.75 0 0 1 1.63 1.008c.169.217.296.471.458.796l.029.058c.205.409.263.519.328.603c.185.236.448.399.742.458c.104.02.228.024.686.024h4.153c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H6.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V7.67c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 3.752 4.05c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03z" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderSearchDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderSearchLightIcon],svg[stash-folder-search-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.25 12.47a2.97 2.97 0 1 1 5.395 1.718l1.459 1.458a.5.5 0 0 1-.708.708l-1.458-1.46A2.97 2.97 0 0 1 8.25 12.47m1 0a1.97 1.97 0 1 0 3.941 0a1.97 1.97 0 0 0-3.941 0"></svg:path><svg:path d="M9.754 4.049c-.243-.05-.503-.05-.88-.049H6.179c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.244a2.5 2.5 0 0 0-1.093 1.092c-.15.296-.213.616-.243.98C2.5 6.7 2.5 7.138 2.5 7.68v8.642c0 .542 0 .98.029 1.333c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244C5.2 20 5.638 20 6.179 20h11.643c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98c.029-.355.029-.792.029-1.334V10.68c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243C18.8 7 18.362 7 17.82 7h-4.144c-.447 0-.601-.002-.735-.03a1.5 1.5 0 0 1-.89-.549c-.084-.108-.155-.245-.355-.645l-.022-.045c-.17-.337-.285-.57-.438-.766a2.5 2.5 0 0 0-1.483-.916M8.823 5c.447 0 .601.002.735.03a1.5 1.5 0 0 1 .89.549c.084.108.155.245.355.645l.022.045c.17.337.285.57.438.766a2.5 2.5 0 0 0 1.483.916c.243.05.503.05.88.049H17.8c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273v5.6c0 .568 0 .965-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H6.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.308-.026-.705-.026-1.273V7.7c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.655c.132-.068.306-.114.608-.138C5.236 5 5.632 5 6.2 5z"></svg:path></svg:g>`,
})
export class StashFolderSearchLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderSearchSolidIcon],svg[stash-folder-search-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.22 10.75a1.72 1.72 0 1 0 0 3.441a1.72 1.72 0 0 0 0-3.441"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008M8 12.471a3.22 3.22 0 1 1 5.966 1.684l1.314 1.315a.75.75 0 1 1-1.06 1.06l-1.315-1.314A3.22 3.22 0 0 1 8 12.47" clip-rule="evenodd"></svg:path>`,
})
export class StashFolderSearchSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFolderSolidIcon],svg[stash-folder-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.804 3.803c-.27-.053-.553-.053-.917-.053H6.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 2.55 5.252c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v8.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.344.03h11.662c.534 0 .98 0 1.344-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.202c.172-.337.24-.694.27-1.073c.03-.365.03-.81.03-1.345v-5.66c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.074a2.75 2.75 0 0 0-1.2-1.201c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03h-4.153c-.458 0-.582-.004-.686-.024a1.25 1.25 0 0 1-.742-.459c-.065-.083-.123-.193-.328-.602l-.029-.058c-.162-.325-.29-.58-.457-.796a2.75 2.75 0 0 0-1.631-1.008"></svg:path>`,
})
export class StashFolderSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFootballIcon],svg[stash-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.815 14.776a12.4 12.4 0 0 0 .096 3.269a2.47 2.47 0 0 0 2.044 2.044a12.4 12.4 0 0 0 3.27.096zm.322-1.8l6.887 6.887a12.32 12.32 0 0 0 8.839-8.84l-6.886-6.886a12.32 12.32 0 0 0-8.84 8.84m10.639-9.16l5.409 5.408a12.5 12.5 0 0 0-.096-3.269a2.47 2.47 0 0 0-2.044-2.044a12.4 12.4 0 0 0-3.27-.096M2.25 16.05c0-7.622 6.178-13.8 13.8-13.8q1.142.002 2.236.18a3.97 3.97 0 0 1 3.284 3.284q.178 1.093.18 2.236c0 7.622-6.178 13.8-13.8 13.8c-.76 0-1.508-.062-2.236-.18a3.97 3.97 0 0 1-3.284-3.284a14 14 0 0 1-.18-2.236m10.65-8.4a.75.75 0 0 1 .75.75v1.95h1.95a.75.75 0 0 1 0 1.5h-1.95v1.05a.75.75 0 0 1-.75.75h-1.05v1.95a.75.75 0 0 1-1.5 0v-1.95H8.4a.75.75 0 0 1 0-1.5h1.95V11.1a.75.75 0 0 1 .75-.75h1.05V8.4a.75.75 0 0 1 .75-.75m-.75 4.2h-.3v.3h.3z" clip-rule="evenodd"></svg:path>`,
})
export class StashFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFootballDuotoneIcon],svg[stash-football-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.815 14.776a12.4 12.4 0 0 0 .096 3.269a2.47 2.47 0 0 0 2.044 2.044a12.4 12.4 0 0 0 3.27.096zm.322-1.8l6.887 6.887a12.32 12.32 0 0 0 8.839-8.84l-6.886-6.886a12.32 12.32 0 0 0-8.84 8.84m10.639-9.16l5.409 5.408a12.5 12.5 0 0 0-.096-3.269a2.47 2.47 0 0 0-2.044-2.044a12.4 12.4 0 0 0-3.27-.096M2.25 16.05c0-7.622 6.178-13.8 13.8-13.8q1.142.002 2.236.18a3.97 3.97 0 0 1 3.284 3.284q.178 1.093.18 2.236c0 7.622-6.178 13.8-13.8 13.8c-.76 0-1.508-.062-2.236-.18a3.97 3.97 0 0 1-3.284-3.284a14 14 0 0 1-.18-2.236m10.65-8.4a.75.75 0 0 1 .75.75v1.95h1.95a.75.75 0 0 1 0 1.5h-1.95v1.05a.75.75 0 0 1-.75.75h-1.05v1.95a.75.75 0 0 1-1.5 0v-1.95H8.4a.75.75 0 0 1 0-1.5h1.95V11.1a.75.75 0 0 1 .75-.75h1.05V8.4a.75.75 0 0 1 .75-.75m-.75 4.2h-.3v.3h.3z" clip-rule="evenodd"></svg:path><svg:g fill="currentColor" opacity=".4"><svg:path d="M7.95 21C15.157 21 21 15.157 21 7.95q-.001-1.082-.17-2.115a3.22 3.22 0 0 0-2.664-2.664A13 13 0 0 0 16.05 3C8.843 3 3 8.843 3 16.05q.001 1.081.17 2.116a3.22 3.22 0 0 0 2.665 2.663Q6.868 21 7.95 21"></svg:path><svg:path d="M12.9 12.9v-1.8h-1.8v1.8z"></svg:path></svg:g>`,
})
export class StashFootballDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFootballLightIcon],svg[stash-football-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.63 14.237a12.7 12.7 0 0 0 .034 3.848a2.72 2.72 0 0 0 2.25 2.25a12.7 12.7 0 0 0 3.849.035zm.23-1.184l7.087 7.087a12.57 12.57 0 0 0 9.193-9.193L13.053 3.86a12.57 12.57 0 0 0-9.193 9.193M14.237 3.63l6.133 6.133a12.7 12.7 0 0 0-.034-3.848a2.72 2.72 0 0 0-2.25-2.25a12.6 12.6 0 0 0-3.849-.035M2.5 16.05C2.5 8.567 8.567 2.5 16.05 2.5q1.121 0 2.196.177a3.72 3.72 0 0 1 3.077 3.077q.175 1.074.177 2.196c0 7.484-6.066 13.55-13.55 13.55q-1.121 0-2.196-.177a3.72 3.72 0 0 1-3.077-3.077A13.6 13.6 0 0 1 2.5 16.05M12.9 7.9a.5.5 0 0 1 .5.5v2.2h2.2a.5.5 0 0 1 0 1h-2.2v1.3a.5.5 0 0 1-.5.5h-1.3v2.2a.5.5 0 0 1-1 0v-2.2H8.4a.5.5 0 0 1 0-1h2.2v-1.3a.5.5 0 0 1 .5-.5h1.3V8.4a.5.5 0 0 1 .5-.5m-.5 3.7h-.8v.8h.8z" clip-rule="evenodd"></svg:path>`,
})
export class StashFootballLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashFootballSolidIcon],svg[stash-football-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.6 3.46a13.08 13.08 0 0 0-9.14 9.14a.75.75 0 0 1 .52.22l7.2 7.2a.75.75 0 0 1 .22.52a13.08 13.08 0 0 0 9.14-9.14a.75.75 0 0 1-.52-.22l-7.2-7.2a.75.75 0 0 1-.22-.52m8.256 6.435a13.2 13.2 0 0 0-.027-4.06a3.22 3.22 0 0 0-2.663-2.664a13.1 13.1 0 0 0-4.061-.027zM9.896 20.856l-6.752-6.751a13.2 13.2 0 0 0 .027 4.06a3.22 3.22 0 0 0 2.664 2.664a13.2 13.2 0 0 0 4.06.027M13.65 8.4a.75.75 0 0 0-1.5 0v1.95H11.1a.75.75 0 0 0-.75.75v1.05H8.4a.75.75 0 0 0 0 1.5h1.95v1.95a.75.75 0 0 0 1.5 0v-1.95h1.05a.75.75 0 0 0 .75-.75v-1.05h1.95a.75.75 0 0 0 0-1.5h-1.95zm-1.8 3.45h.3v.3h-.3z" clip-rule="evenodd"></svg:path>`,
})
export class StashFootballSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGifIcon],svg[stash-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.72 8.75h-1.495v6.269h1.495zM6 12c0-1.902 1.384-3.25 3.336-3.25c.994 0 1.787.34 2.333.909l-1.066 1.048c-.313-.336-.756-.551-1.339-.551c-1.003 0-1.724.752-1.724 1.845c0 1.204.798 1.88 1.729 1.88c.89 0 1.41-.393 1.585-1.132H9.327v-1.156h3.01c.021.166.03.318.03.47c0 2.007-1.432 3.184-3.044 3.184c-1.868 0-3.323-1.29-3.323-3.246m-2.5 2.284c0-.511.448-.95.963-.95c.51 0 .953.439.953.95c0 .519-.443.967-.953.967a.986.986 0 0 1-.963-.968m13.758-3.013H20v1.352h-2.742v2.396h-1.495V8.75H20.5v1.348h-3.242z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.83 5.25H4.17c-.535 0-.98 0-1.345.03c-.38.03-.736.098-1.073.27A2.75 2.75 0 0 0 .55 6.752c-.172.337-.24.693-.27 1.073c-.03.365-.03.81-.03 1.345v5.66c0 .535 0 .98.03 1.345c.03.38.098.736.27 1.073a2.75 2.75 0 0 0 1.202 1.202c.337.172.693.24 1.073.27c.365.03.81.03 1.345.03h15.66c.535 0 .98 0 1.345-.03c.38-.03.736-.098 1.073-.27a2.75 2.75 0 0 0 1.202-1.201c.172-.338.24-.694.27-1.074c.03-.365.03-.81.03-1.344V9.17c0-.535 0-.98-.03-1.345c-.03-.38-.098-.736-.27-1.073a2.75 2.75 0 0 0-1.2-1.202c-.338-.172-.694-.24-1.074-.27c-.365-.03-.81-.03-1.345-.03M2.433 6.886c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h15.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H4.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V9.2c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547" clip-rule="evenodd"></svg:path>`,
})
export class StashGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGifDuotoneIcon],svg[stash-gif-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2.433 6.886c.09-.046.227-.088.514-.111c.296-.024.68-.025 1.253-.025h15.6c.572 0 .957 0 1.252.025c.288.023.425.065.515.111c.236.12.427.311.547.547c.046.09.088.227.111.514c.024.296.025.68.025 1.253v5.6c0 .572 0 .957-.025 1.252c-.023.288-.065.425-.111.515a1.25 1.25 0 0 1-.547.547c-.09.046-.227.088-.515.111c-.295.024-.68.025-1.252.025H4.2c-.572 0-.957 0-1.253-.025c-.287-.023-.424-.065-.514-.111a1.25 1.25 0 0 1-.547-.547c-.046-.09-.088-.227-.111-.515c-.024-.295-.025-.68-.025-1.252V9.2c0-.572 0-.957.025-1.253c.023-.287.065-.424.111-.514a1.25 1.25 0 0 1 .547-.547M13.225 8.75h1.495v6.269h-1.495zm-3.889 0C7.384 8.75 6 10.098 6 12c0 1.958 1.455 3.247 3.323 3.247c1.612 0 3.044-1.177 3.044-3.183c0-.153-.009-.305-.03-.47h-3.01v1.155h1.527c-.175.739-.694 1.133-1.585 1.133c-.931 0-1.729-.677-1.729-1.881c0-1.093.721-1.845 1.724-1.845c.583 0 1.026.215 1.34.55l1.065-1.047c-.546-.569-1.339-.909-2.333-.909m-4.873 4.585c-.515 0-.963.439-.963.95c0 .519.448.967.963.967c.51 0 .953-.448.953-.968a.97.97 0 0 0-.953-.949M20 11.271h-2.742v-1.173H20.5V8.75h-4.737v6.269h1.495v-2.396H20z" opacity=".5"></svg:path><svg:path d="M4.17 5.25h15.66c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.365.03-.81.03-1.344.03H4.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.345V9.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 1.752 5.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03M2.947 6.775c-.287.023-.424.065-.514.111a1.25 1.25 0 0 0-.547.547c-.046.09-.088.227-.111.514c-.024.296-.025.68-.025 1.253v5.6c0 .572 0 .957.025 1.252c.023.288.065.425.111.515c.12.236.311.427.547.547c.09.046.227.088.514.111c.296.024.68.025 1.253.025h15.6c.572 0 .957 0 1.252-.025c.288-.023.425-.065.515-.111a1.25 1.25 0 0 0 .547-.547c.046-.09.088-.227.111-.515c.024-.295.025-.68.025-1.252V9.2c0-.572 0-.957-.025-1.253c-.023-.287-.065-.424-.111-.514a1.25 1.25 0 0 0-.547-.547c-.09-.046-.227-.088-.515-.111c-.295-.024-.68-.025-1.252-.025H4.2c-.572 0-.957 0-1.253.025"></svg:path></svg:g>`,
})
export class StashGifDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGifLightIcon],svg[stash-gif-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.72 8.75h-1.495v6.269h1.495zM6 12c0-1.902 1.384-3.25 3.336-3.25c.994 0 1.787.34 2.333.909l-1.066 1.048c-.313-.336-.756-.551-1.339-.551c-1.003 0-1.724.752-1.724 1.845c0 1.204.798 1.88 1.729 1.88c.89 0 1.41-.393 1.585-1.132H9.327v-1.156h3.01c.021.166.03.318.03.47c0 2.007-1.432 3.184-3.044 3.184c-1.868 0-3.323-1.29-3.323-3.246m-2.5 2.284c0-.511.448-.95.963-.95c.51 0 .953.439.953.95c0 .519-.443.967-.953.967a.986.986 0 0 1-.963-.968m13.758-3.013H20v1.352h-2.742v2.396h-1.495V8.75H20.5v1.348h-3.242z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M19.821 5.5H4.18c-.542 0-.98 0-1.333.029c-.365.03-.685.093-.981.243A2.5 2.5 0 0 0 .772 6.865c-.15.296-.213.616-.243.98C.5 8.2.5 8.638.5 9.18v5.642c0 .542 0 .98.029 1.333c.03.365.093.685.243.981a2.5 2.5 0 0 0 1.093 1.092c.296.151.616.214.98.244c.355.029.792.029 1.334.029H19.82c.542 0 .98 0 1.333-.029c.365-.03.685-.093.981-.244a2.5 2.5 0 0 0 1.092-1.092c.151-.296.214-.616.244-.98c.029-.355.029-.792.029-1.334V9.18c0-.542 0-.98-.029-1.333c-.03-.365-.093-.685-.244-.981a2.5 2.5 0 0 0-1.092-1.093c-.296-.15-.616-.213-.98-.243c-.354-.03-.792-.03-1.334-.03M2.32 6.663c.132-.067.306-.113.608-.137C3.236 6.5 3.632 6.5 4.2 6.5h15.6c.568 0 .965 0 1.273.026c.302.024.476.07.608.137a1.5 1.5 0 0 1 .656.656c.067.132.113.306.137.608c.026.309.026.705.026 1.273v5.6c0 .568 0 .964-.026 1.273c-.024.302-.07.476-.137.608a1.5 1.5 0 0 1-.656.656c-.132.067-.306.113-.608.137c-.308.026-.705.026-1.273.026H4.2c-.568 0-.964 0-1.273-.026c-.302-.024-.476-.07-.608-.137a1.5 1.5 0 0 1-.656-.656c-.067-.132-.113-.306-.137-.608c-.026-.309-.026-.705-.026-1.273V9.2c0-.568 0-.964.026-1.273c.024-.302.07-.476.137-.608a1.5 1.5 0 0 1 .656-.656" clip-rule="evenodd"></svg:path>`,
})
export class StashGifLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGifSolidIcon],svg[stash-gif-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.17 5.25h15.66c.535 0 .98 0 1.345.03c.38.03.736.098 1.073.27a2.75 2.75 0 0 1 1.202 1.202c.172.337.24.693.27 1.073c.03.365.03.81.03 1.345v5.66c0 .535 0 .98-.03 1.345c-.03.38-.098.736-.27 1.073a2.75 2.75 0 0 1-1.201 1.202c-.338.172-.694.24-1.074.27c-.364.03-.81.03-1.344.03H4.17c-.535 0-.98 0-1.345-.03c-.38-.03-.736-.098-1.073-.27a2.75 2.75 0 0 1-1.202-1.2c-.172-.338-.24-.694-.27-1.074c-.03-.365-.03-.81-.03-1.344V9.17c0-.535 0-.98.03-1.345c.03-.38.098-.736.27-1.073A2.75 2.75 0 0 1 1.752 5.55c.337-.172.693-.24 1.073-.27c.365-.03.81-.03 1.345-.03m10.55 3.5h-1.495v6.269h1.495zM6 12c0-1.902 1.384-3.25 3.336-3.25c.994 0 1.787.34 2.333.909l-1.066 1.048c-.313-.336-.756-.551-1.339-.551c-1.003 0-1.724.752-1.724 1.845c0 1.204.798 1.88 1.729 1.88c.89 0 1.41-.393 1.585-1.132H9.327v-1.156h3.01c.021.166.03.318.03.47c0 2.007-1.432 3.184-3.044 3.184c-1.868 0-3.323-1.29-3.323-3.246m-2.5 2.284c0-.51.448-.949.963-.949c.51 0 .953.439.953.95c0 .519-.443.967-.953.967a.986.986 0 0 1-.963-.968m13.758-3.013H20v1.352h-2.742v2.396h-1.495V8.75H20.5v1.348h-3.242z" clip-rule="evenodd"></svg:path>`,
})
export class StashGifSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGlobeIcon],svg[stash-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21.474A9.474 9.474 0 0 0 21.474 12a9.474 9.474 0 1 0-18.948 0A9.474 9.474 0 0 0 12 21.474m3.796-16.578q.196.283.37.586c.514.893.92 1.95 1.189 3.116q.554.145 1.045.318c.45.16.87.34 1.243.542a8.08 8.08 0 0 0-3.847-4.562m4.013 9.08c-.414.24-.89.451-1.41.634q-.443.157-.938.29c-.263 1.365-.708 2.599-1.295 3.618a8 8 0 0 1-.37.586a8.07 8.07 0 0 0 4.013-5.129M8.204 19.103a8 8 0 0 1-.37-.586c-.587-1.02-1.032-2.253-1.295-3.618q-.495-.133-.939-.29a8.4 8.4 0 0 1-1.408-.635a8.07 8.07 0 0 0 4.012 5.129M4.357 9.458A9 9 0 0 1 5.6 8.916q.492-.173 1.046-.318c.269-1.166.674-2.223 1.188-3.116q.175-.303.37-.586a8.08 8.08 0 0 0-3.847 4.562m10.578-3.266c.345.599.64 1.3.867 2.08c-.958-.159-2-.258-3.091-.289V4.11c.792.259 1.572.95 2.224 2.082m1.202 3.584a21 21 0 0 0-3.426-.37v4.715a21 21 0 0 0 3.495-.385q.104-.838.105-1.736c0-.774-.061-1.52-.174-2.224M11.29 4.11v3.873c-1.091.03-2.133.13-3.091.288c.227-.779.521-1.48.866-2.08c.652-1.131 1.433-1.822 2.225-2.08m0 5.295a21 21 0 0 0-3.427.371a14.3 14.3 0 0 0-.069 3.96c1.034.21 2.22.348 3.496.385zm-5.216.851q.147-.053.302-.102a15.7 15.7 0 0 0-.05 3.202q-.129-.042-.252-.086c-.745-.263-1.297-.56-1.65-.854c-.356-.297-.43-.521-.43-.653c0-.131.074-.355.43-.653c.353-.294.905-.591 1.65-.854m2.991 7.552c-.417-.723-.76-1.596-.999-2.575c.994.17 2.082.278 3.223.31v4.347c-.791-.259-1.572-.95-2.224-2.082m3.646 2.082v-4.347a23 23 0 0 0 3.223-.31c-.24.979-.582 1.852-1 2.575c-.651 1.132-1.431 1.823-2.223 2.082M17.73 12q0 .69-.057 1.356q.129-.042.252-.086c.745-.263 1.297-.56 1.65-.854c.356-.297.43-.521.43-.653c0-.131-.074-.355-.43-.653c-.353-.294-.905-.591-1.65-.854a10 10 0 0 0-.302-.102q.107.9.108 1.846" clip-rule="evenodd"></svg:path>`,
})
export class StashGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGlobeDuotoneIcon],svg[stash-globe-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M12 3.947a8.053 8.053 0 1 0 0 16.106a8.053 8.053 0 0 0 0-16.106M2.526 12a9.474 9.474 0 1 1 18.948 0a9.474 9.474 0 0 1-18.948 0"></svg:path><svg:path d="M8.984 4.531A8 8 0 0 1 12 3.947a8 8 0 0 1 3.016.584c.349.38.666.822.945 1.306c.522.906.93 1.99 1.194 3.191q.624.156 1.166.348c.566.2 1.074.432 1.499.695q.169.684.216 1.408a2 2 0 0 0-.309-.314c-.382-.319-.962-.627-1.722-.895q-.315-.112-.663-.211a15.5 15.5 0 0 1 .062 3.865q.315-.092.601-.194c.76-.268 1.34-.576 1.722-.895q.194-.164.309-.314q-.047.724-.216 1.408a8 8 0 0 1-1.5.695a13 13 0 0 1-1.065.322c-.254 1.4-.701 2.66-1.294 3.69a8 8 0 0 1-.358.568c-.6.3-1.242.528-1.915.671c.528-.39 1.022-.965 1.452-1.712c.479-.83.86-1.848 1.105-2.99c-1.138.218-2.418.35-3.771.375v4.49a8 8 0 0 1-.948 0v-4.49a22.4 22.4 0 0 1-3.771-.376c.244 1.143.626 2.16 1.105 2.991c.43.747.924 1.322 1.452 1.712a8 8 0 0 1-1.915-.671a8 8 0 0 1-.358-.568c-.593-1.03-1.04-2.29-1.294-3.69a13 13 0 0 1-1.066-.322a8 8 0 0 1-1.5-.695a8 8 0 0 1-.215-1.408q.114.15.309.314c.382.319.962.627 1.722.895q.286.102.601.193a15.5 15.5 0 0 1 .062-3.864q-.348.099-.663.21c-.76.269-1.34.577-1.722.896q-.195.164-.31.314q.049-.724.217-1.408a8 8 0 0 1 1.5-.695q.541-.191 1.165-.348c.264-1.2.672-2.285 1.194-3.19a7.4 7.4 0 0 1 .945-1.307m6.156 1.78c.408.708.746 1.553.988 2.495a22.5 22.5 0 0 0-3.654-.354V4.04c.978.191 1.918.972 2.666 2.27m1.204 3.503a21 21 0 0 0-3.87-.415V14.6c1.447-.028 2.792-.183 3.945-.43q.127-.932.128-1.934c0-.845-.071-1.659-.203-2.423M11.526 4.04v4.41a22.5 22.5 0 0 0-3.655.355c.243-.942.58-1.787.989-2.496c.747-1.297 1.688-2.078 2.666-2.27m0 5.358a21 21 0 0 0-3.87.415a14.3 14.3 0 0 0-.203 2.423c0 .667.044 1.314.128 1.933c1.153.248 2.497.403 3.945.43z" opacity=".5"></svg:path></svg:g>`,
})
export class StashGlobeDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGlobeLightIcon],svg[stash-globe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21.237a9.237 9.237 0 1 0 0-18.474a9.237 9.237 0 0 0 0 18.474m2.99-16.971c.36.387.685.838.97 1.335c.523.905.931 1.99 1.195 3.19q.623.156 1.166.348c.668.237 1.255.517 1.72.84a8.31 8.31 0 0 0-5.051-5.713m5.171 9.196c-.483.359-1.113.668-1.84.925q-.498.176-1.066.322c-.254 1.4-.7 2.66-1.294 3.69a7.4 7.4 0 0 1-.971 1.335a8.3 8.3 0 0 0 5.171-6.272m-11.15 6.272a7.4 7.4 0 0 1-.972-1.335c-.593-1.03-1.04-2.29-1.294-3.69a13 13 0 0 1-1.066-.322c-.727-.257-1.357-.566-1.84-.925a8.3 8.3 0 0 0 5.171 6.272M3.958 9.978c.465-.322 1.052-.602 1.72-.839q.543-.191 1.166-.348c.264-1.2.672-2.285 1.194-3.19a7.4 7.4 0 0 1 .971-1.335A8.31 8.31 0 0 0 3.96 9.978m11.18-3.905c.409.71.746 1.554.989 2.496a22.5 22.5 0 0 0-3.655-.354v-4.41c.978.19 1.918.97 2.666 2.268m1.204 3.504a21 21 0 0 0-3.87-.415v5.202c1.447-.028 2.792-.183 3.945-.43q.127-.932.128-1.934c0-.845-.071-1.658-.203-2.423m-4.818-5.773v4.41a22.5 22.5 0 0 0-3.654.355c.242-.942.58-1.787.988-2.496c.748-1.297 1.688-2.078 2.666-2.269m0 5.358a21 21 0 0 0-3.87.415A14.3 14.3 0 0 0 7.453 12c0 .667.044 1.314.128 1.933c1.153.248 2.498.403 3.945.43zm-5.531.87q.315-.11.663-.21a15.5 15.5 0 0 0-.062 3.865q-.315-.093-.601-.193c-.76-.269-1.34-.577-1.722-.896c-.385-.321-.515-.605-.515-.835s.13-.514.515-.835c.382-.319.962-.627 1.722-.895m2.865 7.895c-.479-.832-.86-1.85-1.105-2.992c1.138.219 2.418.351 3.771.376v4.885c-.978-.191-1.918-.972-2.666-2.27m3.614 2.269V15.31a22.4 22.4 0 0 0 3.771-.376c-.244 1.143-.626 2.16-1.105 2.992c-.748 1.297-1.688 2.078-2.666 2.269M17.494 12q0 .864-.09 1.687q.315-.092.601-.193c.76-.269 1.34-.577 1.722-.896c.385-.321.515-.605.515-.835s-.13-.514-.515-.835c-.382-.319-.962-.627-1.722-.895q-.315-.111-.663-.211c.1.7.153 1.429.153 2.178" clip-rule="evenodd"></svg:path>`,
})
export class StashGlobeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGlobeSolidIcon],svg[stash-globe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.022 9.024c.24-1.492.655-2.836 1.205-3.935c.496-.992 1.126-1.828 1.864-2.37a9.485 9.485 0 0 0-7.39 7.466a10.5 10.5 0 0 1 1.806-.652a21 21 0 0 1 2.515-.51m-4.475 3.613a10 10 0 0 1 0-1.272q.051-.036.108-.072c.47-.303 1.18-.594 2.1-.845a20 20 0 0 1 2.137-.446a19.2 19.2 0 0 0 0 3.998a20 20 0 0 1-2.136-.446c-.92-.252-1.632-.542-2.101-.845zm.153 1.18a9.485 9.485 0 0 0 7.391 7.465c-.738-.542-1.368-1.378-1.864-2.37c-.55-1.1-.966-2.443-1.205-3.935a21 21 0 0 1-2.515-.51a10.5 10.5 0 0 1-1.807-.65m11.209 7.465a9.485 9.485 0 0 0 7.391-7.465a10.5 10.5 0 0 1-1.806.65a21 21 0 0 1-2.516.51c-.24 1.492-.655 2.835-1.205 3.935c-.496.992-1.126 1.828-1.864 2.37m7.544-9.917a10 10 0 0 1 0 1.272l-.107.072c-.47.303-1.181.594-2.102.845c-.632.172-1.35.322-2.136.446a19.2 19.2 0 0 0 0-3.998c.786.123 1.504.274 2.136.446c.921.251 1.632.542 2.102.845q.057.036.107.072m-.153-1.179a9.485 9.485 0 0 0-7.391-7.466c.738.542 1.368 1.378 1.864 2.37c.55 1.1.966 2.443 1.205 3.935a21 21 0 0 1 2.515.51c.689.187 1.3.404 1.807.65M8.004 8.898c.231-1.295.602-2.448 1.07-3.385c.705-1.41 1.575-2.235 2.452-2.454v5.628a36 36 0 0 0-3.522.21m4.47-.21V3.059c.877.22 1.747 1.044 2.452 2.454c.468.937.839 2.09 1.07 3.385a36 36 0 0 0-3.522-.211M7.86 9.868a35 35 0 0 1 3.666-.234v4.732a35 35 0 0 1-3.665-.234A18 18 0 0 1 7.737 12c0-.736.043-1.45.124-2.132m8.279 0a35 35 0 0 0-3.666-.234v4.732a35 35 0 0 0 3.666-.234c.08-.682.123-1.396.123-2.132s-.043-1.45-.123-2.132m-8.136 5.234c1.098.123 2.284.196 3.522.21v5.629c-.877-.22-1.747-1.044-2.452-2.454c-.468-.937-.839-2.09-1.07-3.385m4.47.211v5.628c.877-.22 1.747-1.044 2.452-2.454c.468-.937.839-2.09 1.07-3.385a36 36 0 0 1-3.522.21"></svg:path>`,
})
export class StashGlobeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGlobeTimezoneIcon],svg[stash-globe-timezone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.75 2C6.365 2 2 6.365 2 11.75s4.365 9.75 9.75 9.75q.309 0 .611-.019A6.47 6.47 0 0 1 11 17.5c0-1.58.563-3.027 1.5-4.154V9.511c1.215.034 2.35.15 3.358.33c.065.44.108.888.129 1.336q.721-.173 1.493-.177a15 15 0 0 0-.065-.803q.24.07.462.143c.77.257 1.34.546 1.701.831c.13.102.22.192.282.27c.587.23 1.132.54 1.621.92q.02-.303.019-.611A9.75 9.75 0 0 0 11.75 2M11 17.5v2.337c-.73-.311-1.478-1.072-2.124-2.283a11.3 11.3 0 0 1-.904-2.322c.943.14 1.963.23 3.028.258zM6.35 8.578q-.64.152-1.201.34a9 9 0 0 0-1.33.55a8.27 8.27 0 0 1 4.266-5.111q-.288.424-.532.883c-.523.981-.935 2.126-1.202 3.338m1.622-.31a11.3 11.3 0 0 1 .904-2.322C9.522 4.736 10.27 3.974 11 3.663V8.01a25 25 0 0 0-3.028.258M7.5 11.75c0-.639.05-1.28.142-1.909A23 23 0 0 1 11 9.511v4.478a23 23 0 0 1-3.358-.33A13 13 0 0 1 7.5 11.75m.585 7.393a8.27 8.27 0 0 1-4.266-5.112c.398.207.847.39 1.33.552q.56.187 1.202.34c.267 1.211.679 2.356 1.202 3.337q.243.459.532.883m-2-5.84q-.24-.07-.462-.143c-.77-.257-1.34-.546-1.702-.831c-.37-.292-.421-.493-.421-.579s.052-.287.421-.579c.362-.285.932-.574 1.702-.83q.222-.075.462-.144a14.4 14.4 0 0 0 0 3.106m11.064-4.725c-.267-1.212-.679-2.357-1.202-3.338a10 10 0 0 0-.532-.883a8.27 8.27 0 0 1 4.266 5.112a9 9 0 0 0-1.33-.552a14 14 0 0 0-1.202-.34m-1.62-.31c-.944-.14-1.964-.23-3.029-.258V3.663c.73.311 1.478 1.072 2.124 2.283c.366.687.673 1.476.904 2.322"></svg:path><svg:path fill="currentColor" d="M18.25 15.5a.75.75 0 0 0-1.5 0v2c0 .199.079.39.22.53l1 1a.75.75 0 1 0 1.06-1.06l-.78-.78z"></svg:path><svg:path fill="currentColor" d="M17.5 12.75a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5m-3.25 4.75a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0"></svg:path>`,
})
export class StashGlobeTimezoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGlobeTimezoneDuotoneIcon],svg[stash-globe-timezone-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 13a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m.5 2.5v1.793l.854.853a.5.5 0 0 1-.708.708l-1-1A.5.5 0 0 1 17 17.5v-2a.5.5 0 0 1 1 0" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2 11.75a9.75 9.75 0 0 0 9.75 9.75q.309 0 .611-.019A6.47 6.47 0 0 1 11 17.5v2.337c-.73-.311-1.478-1.072-2.124-2.283a11.3 11.3 0 0 1-.904-2.322c.943.14 1.963.23 3.028.258v2.01c0-1.58.563-3.027 1.5-4.154V9.511c1.215.034 2.35.15 3.358.33c.065.44.108.888.129 1.336q.721-.173 1.493-.177a15 15 0 0 0-.065-.803q.24.07.462.143c.77.257 1.34.546 1.701.831c.13.102.22.192.282.27c.587.23 1.132.54 1.621.92q.02-.303.019-.611C21.5 6.365 17.135 2 11.75 2S2 6.365 2 11.75m3.149-2.833a9 9 0 0 0-1.33.552a8.27 8.27 0 0 1 4.266-5.112q-.288.424-.532.883c-.523.981-.935 2.126-1.202 3.338q-.641.152-1.202.34m3.727-2.971C9.522 4.736 10.27 3.974 11 3.663V8.01a25 25 0 0 0-3.028.258a11.3 11.3 0 0 1 .904-2.322M7.642 9.84A23 23 0 0 1 11 9.511v4.478a23 23 0 0 1-3.358-.33A13 13 0 0 1 7.5 11.75c0-.639.05-1.28.142-1.909m-3.823 4.19c.398.207.847.39 1.33.552q.56.187 1.202.34c.267 1.211.679 2.356 1.202 3.337q.243.459.532.883a8.27 8.27 0 0 1-4.266-5.112m1.804-.871c-.77-.257-1.34-.546-1.702-.831c-.37-.292-.421-.493-.421-.579s.052-.287.421-.579c.362-.285.932-.574 1.702-.83q.222-.075.462-.144a14.4 14.4 0 0 0 0 3.106q-.24-.07-.462-.143m10.324-7.92a10 10 0 0 0-.532-.883a8.27 8.27 0 0 1 4.266 5.112a9 9 0 0 0-1.33-.552a14 14 0 0 0-1.202-.34c-.267-1.211-.679-2.356-1.202-3.337M12.5 8.01V3.663c.73.311 1.478 1.072 2.124 2.283c.366.687.673 1.476.904 2.322c-.943-.14-1.963-.23-3.028-.258"></svg:path>`,
})
export class StashGlobeTimezoneDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGlobeTimezoneLightIcon],svg[stash-globe-timezone-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 14a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7M13 17.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m4.5-2.5a.5.5 0 0 1 .5.5v1.793l.854.853a.5.5 0 0 1-.708.708l-1-1A.5.5 0 0 1 17 17.5v-2a.5.5 0 0 1 .5-.5"></svg:path><svg:path fill="currentColor" d="M5.228 9.154q.617-.205 1.334-.369c.261-1.247.678-2.426 1.211-3.427A8.3 8.3 0 0 1 8.87 3.75a8.52 8.52 0 0 0-5.436 6.234c.484-.32 1.096-.597 1.794-.83M2.25 11.75a9.5 9.5 0 1 1 18.99.433a6.5 6.5 0 0 0-1.012-.585c-.05-.173-.192-.384-.495-.623c-.393-.31-.992-.61-1.777-.872q-.392-.131-.834-.244q.076.57.108 1.146q-.51.021-.995.118a14 14 0 0 0-.157-1.496a23 23 0 0 0-3.828-.372v4.412a6.5 6.5 0 0 0-1 2.042v-.463a25 25 0 0 1-3.615-.32a11.8 11.8 0 0 0 1.02 2.746c.748 1.401 1.667 2.28 2.595 2.514v-.895c.202.707.52 1.364.933 1.95q-.215.009-.433.009a9.5 9.5 0 0 1-9.5-9.5m6.406-5.922a11.8 11.8 0 0 0-1.021 2.746a25 25 0 0 1 3.615-.32v-4.94c-.928.235-1.847 1.112-2.594 2.514m-1.234 3.8a13.4 13.4 0 0 0-.172 2.122c0 .71.06 1.425.172 2.123a23 23 0 0 0 3.828.372v-4.99a23.4 23.4 0 0 0-3.828.372m-3.988 3.888A8.52 8.52 0 0 0 8.87 19.75a8.3 8.3 0 0 1-1.097-1.608c-.533-1.001-.95-2.18-1.211-3.427a14 14 0 0 1-1.334-.37c-.698-.232-1.31-.509-1.794-.829m2.11-.119q.392.131.834.244a14 14 0 0 1-.128-1.891c0-.631.044-1.266.128-1.891q-.442.113-.834.244c-.785.262-1.384.562-1.777.872c-.399.314-.517.58-.517.775s.118.461.517.775c.393.31.992.61 1.777.872m10.183-8.039c.534 1.001.95 2.18 1.211 3.427q.717.164 1.334.37c.698.232 1.31.509 1.794.829A8.52 8.52 0 0 0 14.63 3.75a8.3 8.3 0 0 1 1.097 1.608M12.25 8.254c1.289.024 2.512.136 3.616.32a11.8 11.8 0 0 0-1.022-2.746c-.747-1.402-1.666-2.28-2.594-2.514z"></svg:path>`,
})
export class StashGlobeTimezoneLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGlobeTimezoneSolidIcon],svg[stash-globe-timezone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 13a4.5 4.5 0 1 0 0 9a4.5 4.5 0 0 0 0-9m.5 2.5v1.793l.854.853a.5.5 0 0 1-.708.708l-1-1A.5.5 0 0 1 17 17.5v-2a.5.5 0 0 1 1 0"></svg:path><svg:path fill="currentColor" d="M2 11.75a9.75 9.75 0 0 0 9.75 9.75q.309 0 .611-.019A6.47 6.47 0 0 1 11 17.5v2.337c-.73-.311-1.478-1.072-2.124-2.283a11.3 11.3 0 0 1-.904-2.322c.943.14 1.963.23 3.028.258v2.01c0-1.58.563-3.027 1.5-4.154V9.511c1.215.034 2.35.15 3.358.33c.065.44.108.888.129 1.336q.721-.173 1.493-.177a15 15 0 0 0-.065-.803q.24.07.462.143c.77.257 1.34.546 1.701.831c.13.102.22.192.282.27c.587.23 1.132.54 1.621.92q.02-.303.019-.611C21.5 6.365 17.135 2 11.75 2S2 6.365 2 11.75m3.149-2.833a9 9 0 0 0-1.33.552a8.27 8.27 0 0 1 4.266-5.112q-.288.424-.532.883c-.523.981-.935 2.126-1.202 3.338q-.641.152-1.202.34m3.727-2.971C9.522 4.736 10.27 3.974 11 3.663V8.01a25 25 0 0 0-3.028.258a11.3 11.3 0 0 1 .904-2.322M7.642 9.84A23 23 0 0 1 11 9.511v4.478a23 23 0 0 1-3.358-.33A13 13 0 0 1 7.5 11.75c0-.639.05-1.28.142-1.909m-3.823 4.19c.398.207.847.39 1.33.552q.56.187 1.202.34c.267 1.211.679 2.356 1.202 3.337q.243.459.532.883a8.27 8.27 0 0 1-4.266-5.112m1.804-.871c-.77-.257-1.34-.546-1.702-.831c-.37-.292-.421-.493-.421-.579s.052-.287.421-.579c.362-.285.932-.574 1.702-.83q.222-.075.462-.144a14.4 14.4 0 0 0 0 3.106q-.24-.07-.462-.143m10.324-7.92a10 10 0 0 0-.532-.883a8.27 8.27 0 0 1 4.266 5.112a9 9 0 0 0-1.33-.552a14 14 0 0 0-1.202-.34c-.267-1.211-.679-2.356-1.202-3.337M12.5 8.01V3.663c.73.311 1.478 1.072 2.124 2.283c.366.687.673 1.476.904 2.322c-.943-.14-1.963-.23-3.028-.258"></svg:path>`,
})
export class StashGlobeTimezoneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGoogleDriveIcon],svg[stash-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.92 5.202l2.318 3.775l-2.946 4.975H4.114l4.42-8.272c.096-.18.227-.342.385-.478m1.482-.452h3.339l-1.639 2.768zm4.767.533q.18.178.298.397l4.42 8.272h-3.834l-3.064-4.99zm5.067 10.169a2.3 2.3 0 0 1-.259.826l-1.16 2.173l-1.843-3zm-1.015 4.855c.309-.213.57-.496.752-.838l1.328-2.485a3.77 3.77 0 0 0 0-3.569l-4.51-8.441C16.217 3.9 15.064 3.25 13.835 3.25h-3.67c-1.23 0-2.381.65-2.955 1.723L2.7 13.415a3.77 3.77 0 0 0 0 3.57l1.327 2.484c.428.802 1.285 1.281 2.19 1.281h11.565c.436 0 .86-.11 1.231-.315a.8.8 0 0 0 .207-.128m-1.674-1.057H6.897l2.25-3.798h6.067zm-12.15-.41a1 1 0 0 1-.047-.078l-1.327-2.484a2.3 2.3 0 0 1-.259-.826h3.64zm4.638-4.888l2.09-3.53l2.168 3.53z"></svg:path>`,
})
export class StashGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGoogleDriveDuotoneIcon],svg[stash-google-drive-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.876 5.609l2.07 3.37l-2.796 4.723H4.53l4.224-7.904q.053-.1.122-.19M10.85 5h2.453l-1.204 2.034zm4.352.72q.024.038.045.078l4.223 7.904h-3.276L13.28 8.96zm4.735 9.982q-.06.235-.179.458l-.956 1.789l-1.38-2.247zm-.563 4.803c.336-.233.62-.543.82-.918l1.328-2.485a4.02 4.02 0 0 0 0-3.804l-4.51-8.443C16.39 3.695 15.15 3 13.834 3h-3.67C8.85 3 7.61 3.696 6.99 4.855l-4.511 8.443a4.02 4.02 0 0 0 0 3.804l1.327 2.485C4.281 20.476 5.226 21 6.218 21h11.564c.473 0 .934-.119 1.34-.34a1 1 0 0 0 .251-.155M17.1 19H7.336l1.954-3.298h5.784zm-11.694-.664L4.243 16.16a2 2 0 0 1-.18-.458h2.902zm5.068-4.634l1.655-2.796l1.717 2.796z"></svg:path>`,
})
export class StashGoogleDriveDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGoogleDriveLightIcon],svg[stash-google-drive-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.99 4.839l2.54 4.136l-3.095 5.227H3.707a3 3 0 0 1 .095-.197l4.51-8.443c.158-.293.392-.541.678-.723m.971-.33a2 2 0 0 1 .204-.009h3.67q.168 0 .33.024l-2.06 3.478zm5.143.393c.243.175.444.4.583.66l4.511 8.442a3 3 0 0 1 .095.198h-4.38l-3.215-5.237zm5.396 10.3c0 .408-.1.817-.302 1.193l-1.327 2.485l-.042.07l-2.302-3.748zm-1.434 4.907c.283-.191.521-.448.687-.758l1.327-2.484a3.52 3.52 0 0 0 0-3.334l-4.51-8.442c-.528-.986-1.592-1.591-2.735-1.591h-3.67c-1.143 0-2.207.605-2.734 1.591L2.92 13.533a3.52 3.52 0 0 0 0 3.334l1.327 2.484c.383.716 1.15 1.149 1.97 1.149h11.565c.4 0 .788-.103 1.124-.292a.5.5 0 0 0 .16-.099m-1.082-.624q-.099.015-.202.015H6.46l2.546-4.298h6.349zm-12.537-.238a1.1 1.1 0 0 1-.318-.367l-1.327-2.485a2.5 2.5 0 0 1-.302-1.193h4.342zm4.15-5.045l2.524-4.264l2.619 4.264z"></svg:path>`,
})
export class StashGoogleDriveLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGoogleDriveSolidIcon],svg[stash-google-drive-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.296 5.25h1.568l-.77 1.3zm3.896.976l3.86 7.226h-2.72l-2.759-4.494zm4.39 9.726l-.046.09l-.75 1.405l-.918-1.495zm-.057 4.752a2.9 2.9 0 0 0 .89-1l1.326-2.484a4.27 4.27 0 0 0 0-4.04l-4.51-8.442c-.666-1.247-1.995-1.988-3.397-1.988h-3.668c-1.402 0-2.73.741-3.397 1.988L2.26 13.18a4.27 4.27 0 0 0 0 4.04l1.327 2.485c.521.975 1.554 1.545 2.632 1.545h11.564a3.06 3.06 0 0 0 1.449-.364a1.3 1.3 0 0 0 .294-.182m-2.872-1.954H7.775l1.657-2.798h5.502zm-11.236-.924l-.953-1.784l-.046-.09h2.109zm-.47-4.374l3.933-7.36l1.774 2.89l-2.647 4.47zm7.186-2.062l1.266 2.062h-2.486z"></svg:path>`,
})
export class StashGoogleDriveSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGraduationCapIcon],svg[stash-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.927 7.67a3.25 3.25 0 0 1 2.147 0L19.73 10l-6.656 2.33a3.25 3.25 0 0 1-2.147 0l-3.473-1.216a77 77 0 0 1 1.563-.315a141 141 0 0 1 2.85-.516l.19-.032l.066-.011a.75.75 0 1 0-.246-1.48l-.07.012l-.193.033a146 146 0 0 0-2.88.521c-.817.157-1.672.331-2.389.498c-.541.127-1.068.263-1.434.4L4.27 10zm-7.348 3.677l-.748-.262c-1.027-.359-1.027-1.811 0-2.17l7.6-2.66a4.75 4.75 0 0 1 3.138 0l7.6 2.66c1.027.359 1.027 1.811 0 2.17l-3.38 1.183l.402 3.215a1.5 1.5 0 0 1-.564 1.381A9.25 9.25 0 0 1 12 18.75c-2.447 0-4.384-1.035-5.563-1.866a1.52 1.52 0 0 1-.624-1.431l.398-3.185l-1.154-.404a1 1 0 0 0-.283.502a1 1 0 0 1-.192 1.447l.004.018l.875 3.939a.6.6 0 0 1-.585.73H3.125a.6.6 0 0 1-.586-.73l.875-3.94l.005-.017a1 1 0 0 1-.158-1.486q.005-.048.014-.105a2.6 2.6 0 0 1 .304-.875m4.08 1.428l-.358 2.864q-.001.016.002.02c1.044.736 2.678 1.591 4.697 1.591c2.063 0 3.68-.784 4.703-1.568v-.013l-.362-2.894l-2.772.97a4.75 4.75 0 0 1-3.138 0z" clip-rule="evenodd"></svg:path>`,
})
export class StashGraduationCapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGraduationCapDuotoneIcon],svg[stash-graduation-cap-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.074 7.67a3.25 3.25 0 0 0-2.147 0L4.27 10l1.023.358c-.213.066-.39.131-.517.195c-.47.234-.77.561-.958.878l-.988-.346c-1.027-.359-1.027-1.811 0-2.17l7.6-2.66a4.75 4.75 0 0 1 3.138 0l7.6 2.66c1.027.359 1.027 1.811 0 2.17l-3.38 1.183l.402 3.215a1.5 1.5 0 0 1-.564 1.382A9.25 9.25 0 0 1 12 18.75c-2.447 0-4.384-1.035-5.563-1.866a1.52 1.52 0 0 1-.624-1.431l.398-3.185l-1.412-.494c.101-.12.238-.234.425-.327s.687-.238 1.405-.405q.182-.043.374-.085l3.924 1.373a3.25 3.25 0 0 0 2.147 0L19.73 10zm.495 6.075l2.772-.97l.362 2.894v.013A7.75 7.75 0 0 1 12 17.25c-2.019 0-3.653-.855-4.697-1.59a.04.04 0 0 1-.002-.021l.358-2.864l2.772.97a4.75 4.75 0 0 0 3.138 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12.493 9.418a.5.5 0 0 1-.41.575l-.068.011l-.19.033a145 145 0 0 0-2.856.516c-.81.156-1.646.327-2.34.489c-.719.167-1.219.312-1.405.405a1.27 1.27 0 0 0-.655.73a1 1 0 0 1 .013 1.636l.004.018l.875 3.939a.6.6 0 0 1-.586.73h-1.75a.6.6 0 0 1-.586-.73l.875-3.94l.004-.017a1 1 0 0 1 .133-1.707a2.27 2.27 0 0 1 1.226-1.554c.313-.156.938-.324 1.625-.484a65 65 0 0 1 2.379-.496a141 141 0 0 1 2.875-.52l.193-.034l.069-.011a.5.5 0 0 1 .575.41" opacity=".5"></svg:path>`,
})
export class StashGraduationCapDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGraduationCapLightIcon],svg[stash-graduation-cap-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.005 11.581l1.479.518l-.423 3.385c-.057.452.127.92.52 1.196c1.157.815 3.043 1.82 5.42 1.82a9 9 0 0 0 5.473-1.834c.365-.28.522-.727.47-1.152l-.427-3.415l3.57-1.25c.803-.28.803-1.417 0-1.698l-7.6-2.66a4.5 4.5 0 0 0-2.973 0l-7.6 2.66c-.804.28-.804 1.417 0 1.699l1.05.367c-.138.18-.235.365-.303.535a2.4 2.4 0 0 0-.112.355a1 1 0 0 0-.13 1.707l-.005.017l-.875 3.939a.6.6 0 0 0 .586.73h1.75a.6.6 0 0 0 .586-.73l-.875-3.94l-.004-.017a1 1 0 0 0-.013-1.636a1.3 1.3 0 0 1 .436-.596m8.151-4.147a3.5 3.5 0 0 0-2.312 0l-7.06 2.472a.1.1 0 0 0 0 .188l1.131.397c.34-.139.89-.284 1.487-.423a65 65 0 0 1 2.379-.496a141 141 0 0 1 3.137-.565a.5.5 0 0 1 .164.986q-.474.08-.948.163c-.577.102-1.355.242-2.164.397s-1.647.327-2.34.489l-.084.02l4.298 1.504a3.5 3.5 0 0 0 2.312 0l7.061-2.472a.1.1 0 0 0 0-.188zm.33 6.075l3.065-1.072l.4 3.201a.25.25 0 0 1-.087.236A8 8 0 0 1 12 17.5c-2.091 0-3.777-.886-4.844-1.638a.27.27 0 0 1-.103-.254l.396-3.171l3.065 1.072a4.5 4.5 0 0 0 2.973 0M3.625 17.5L4 15.805l.377 1.695z" clip-rule="evenodd"></svg:path>`,
})
export class StashGraduationCapLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashGraduationCapSolidIcon],svg[stash-graduation-cap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.514 6.49a4.5 4.5 0 0 1 2.973 0l7.6 2.66c.803.282.803 1.418 0 1.7l-7.6 2.66a4.5 4.5 0 0 1-2.973 0l-5.509-1.93a1.24 1.24 0 0 0-.436.597a1 1 0 0 1 .013 1.635l.004.018l.875 3.939a.6.6 0 0 1-.585.73H3.125a.6.6 0 0 1-.586-.73l.875-3.94l.005-.017a1 1 0 0 1 .132-1.707a2.35 2.35 0 0 1 .413-.889l-1.05-.367c-.804-.282-.804-1.418 0-1.7z"></svg:path><svg:path fill="currentColor" d="m6.393 12.83l-.332 2.654c-.057.452.127.92.52 1.196c1.157.815 3.043 1.82 5.42 1.82a9 9 0 0 0 5.473-1.834c.365-.28.522-.727.47-1.152l-.336-2.685l-4.121 1.442a4.5 4.5 0 0 1-2.973 0z"></svg:path>`,
})
export class StashGraduationCapSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashHandHoldingDollarIcon],svg[stash-hand-holding-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.248c.415 0 .752.336.752.752v.464h.051c1.014 0 1.824.827 1.824 1.833a.752.752 0 0 1-1.504 0a.324.324 0 0 0-.32-.328h-1.607c-.1 0-.152.031-.189.067a.4.4 0 0 0-.106.225a.44.44 0 0 0 .033.263a.26.26 0 0 0 .157.133l2.361.85c1.827.659 1.365 3.394-.598 3.394h-.077v.599a.752.752 0 1 1-1.504 0v-.599h-.077a1.83 1.83 0 0 1-1.823-1.833a.752.752 0 1 1 1.504 0c0 .187.15.328.32.328h1.657c.093 0 .136-.028.161-.051a.27.27 0 0 0 .077-.152a.3.3 0 0 0-.02-.17c-.017-.03-.048-.07-.13-.1l-2.361-.85c-.966-.349-1.287-1.294-1.166-2.05c.122-.764.732-1.56 1.781-1.56h.052V4c0-.416.336-.752.752-.752M7.37 13.542c.54-.338 1.2-.544 2.063-.544H12.5c.533 0 1.007.167 1.354.489a1.616 1.616 0 0 1 0 2.376c-.347.322-.82.49-1.354.49h-2c-.2 0-.283.061-.313.091a.2.2 0 0 0-.06.152a.2.2 0 0 0 .06.15c.03.03.112.093.313.093h3c.788 0 1.541-.275 2.31-.712c.591-.335 1.142-.735 1.713-1.149q.285-.207.579-.416l.053-.034a1.7 1.7 0 0 1 2.283.453c.23.321.357.735.3 1.171c-.057.429-.284.817-.648 1.117l-.004.004l-.112.114a16 16 0 0 1-1.87 1.58c-1.177.845-2.86 1.785-4.604 1.785H4A.75.75 0 0 1 3.248 20v-3.5c0-.416.336-.752.752-.752c.624 0 1.017-.14 1.309-.32c.314-.192.556-.453.872-.805l.031-.035c.292-.326.658-.734 1.158-1.046m11.663 2.656a1 1 0 0 1 .086-.078c.118-.091.126-.155.128-.165a.14.14 0 0 0-.03-.096a.2.2 0 0 0-.113-.078c-.027-.007-.08-.012-.163.032q-.234.166-.483.348c-.586.425-1.233.894-1.903 1.274c-.89.506-1.906.909-3.054.909H10.5c-.55 0-1.03-.187-1.375-.53a1.72 1.72 0 0 1-.502-1.218c0-.436.164-.881.502-1.218c.345-.344.826-.53 1.375-.53h2c.216 0 .305-.064.332-.09a.11.11 0 0 0 .04-.083a.11.11 0 0 0-.04-.084c-.027-.025-.116-.089-.332-.089H9.433c-.603 0-.982.138-1.266.316c-.307.192-.546.453-.865.81l-.015.015c-.298.333-.672.75-1.192 1.069a3.6 3.6 0 0 1-1.343.485v2.05h8.75c1.254 0 2.611-.703 3.725-1.502a14.4 14.4 0 0 0 1.78-1.518l.021-.023z" clip-rule="evenodd"></svg:path>`,
})
export class StashHandHoldingDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashHandHoldingDollarDuotoneIcon],svg[stash-hand-holding-dollar-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.582 16.713S16.5 20 13.502 20H4v-3.5c3 0 2.5-2.75 5.433-2.75H12.5c1.499 0 1.499 1.85 0 1.85h-2c-1.5 0-1.5 1.991 0 1.991h3.001c1.936 0 3.539-1.355 5.037-2.415c1.03-.607 2.06.745 1.044 1.537" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.248c.415 0 .752.336.752.752v.464h.051c1.014 0 1.824.827 1.824 1.833a.752.752 0 0 1-1.504 0a.324.324 0 0 0-.32-.328h-1.607c-.1 0-.152.031-.189.067a.4.4 0 0 0-.106.225a.44.44 0 0 0 .033.263a.26.26 0 0 0 .157.133l2.361.85c1.827.659 1.365 3.394-.598 3.394h-.077v.599a.752.752 0 1 1-1.504 0v-.599h-.077a1.83 1.83 0 0 1-1.823-1.833a.752.752 0 1 1 1.504 0c0 .188.15.328.32.328h1.657c.093 0 .136-.028.161-.051a.27.27 0 0 0 .077-.152a.3.3 0 0 0-.02-.17c-.017-.03-.048-.07-.13-.1l-2.361-.85c-.966-.349-1.287-1.294-1.166-2.05c.122-.764.732-1.56 1.781-1.56h.052V4c0-.416.336-.752.752-.752M7.37 13.542c.54-.338 1.2-.544 2.063-.544H12.5c.533 0 1.007.167 1.354.489a1.616 1.616 0 0 1 0 2.376c-.347.322-.82.49-1.354.49h-2c-.2 0-.283.061-.313.091a.2.2 0 0 0-.06.152a.2.2 0 0 0 .06.15c.03.03.112.093.313.093h3c.788 0 1.541-.275 2.31-.712c.591-.335 1.142-.735 1.713-1.149q.285-.207.579-.416l.053-.034a1.7 1.7 0 0 1 2.283.453c.23.321.357.735.3 1.171c-.057.429-.284.817-.648 1.117l-.004.004l-.112.114a16 16 0 0 1-1.87 1.58c-1.177.845-2.86 1.785-4.604 1.785H4A.75.75 0 0 1 3.248 20v-3.5c0-.416.336-.752.752-.752c.624 0 1.017-.14 1.309-.32c.314-.192.556-.453.872-.805l.031-.035c.292-.326.658-.734 1.158-1.046m11.663 2.656a1 1 0 0 1 .086-.078c.118-.091.126-.155.128-.165a.14.14 0 0 0-.03-.096a.2.2 0 0 0-.113-.078c-.027-.007-.08-.012-.163.032q-.234.166-.483.348c-.586.425-1.233.894-1.903 1.274c-.89.506-1.906.909-3.054.909H10.5c-.55 0-1.03-.187-1.375-.53a1.72 1.72 0 0 1-.502-1.218c0-.436.164-.881.502-1.218c.345-.344.826-.53 1.375-.53h2c.216 0 .305-.064.332-.09a.11.11 0 0 0 .04-.083a.11.11 0 0 0-.04-.084c-.027-.025-.116-.089-.332-.089H9.433c-.603 0-.982.138-1.266.316c-.307.192-.546.453-.865.81l-.015.015c-.298.333-.672.75-1.192 1.069a3.6 3.6 0 0 1-1.343.485v2.05h8.75c1.254 0 2.611-.703 3.725-1.502a14.4 14.4 0 0 0 1.78-1.518l.021-.023z" clip-rule="evenodd"></svg:path>`,
})
export class StashHandHoldingDollarDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashHandHoldingDollarLightIcon],svg[stash-hand-holding-dollar-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.5a.5.5 0 0 1 .5.5v.716h.304c.872 0 1.571.712 1.571 1.581a.5.5 0 0 1-1 0a.576.576 0 0 0-.571-.58h-1.608c-.295 0-.496.2-.544.504c-.05.31.084.576.354.673l2.36.85c1.563.564 1.167 2.905-.512 2.905h-.329v.851a.5.5 0 0 1-1 0v-.851h-.329a1.576 1.576 0 0 1-1.571-1.581a.5.5 0 0 1 1 0c0 .325.26.58.571.58h1.658c.554 0 .686-.778.174-.962l-2.361-.851c-.826-.298-1.109-1.106-1.003-1.772c.107-.671.635-1.347 1.532-1.347h.304V4a.5.5 0 0 1 .5-.5M7.504 13.756c.498-.312 1.11-.506 1.929-.506H12.5c.48 0 .89.15 1.183.422a1.363 1.363 0 0 1 0 2.006c-.294.272-.703.422-1.183.422h-2c-.26 0-.408.083-.491.165a.46.46 0 0 0-.134.33c0 .125.047.244.134.33c.083.083.232.166.491.166h3.001c.848 0 1.646-.296 2.436-.745c.603-.342 1.17-.753 1.744-1.17q.282-.205.568-.408l.035-.023c.758-.446 1.554-.168 1.95.384c.196.273.303.624.254.99c-.048.362-.241.699-.568.964l-.014.015l-.11.11a15.6 15.6 0 0 1-1.84 1.554c-1.165.837-2.793 1.738-4.455 1.738H4a.5.5 0 0 1-.5-.5v-3.5A.5.5 0 0 1 4 16c.666 0 1.105-.15 1.44-.356c.35-.214.616-.503.93-.853l.025-.028c.295-.33.64-.714 1.109-1.007m11.713 2.615l.058-.052c.163-.127.21-.247.222-.331a.4.4 0 0 0-.075-.276c-.12-.167-.349-.262-.615-.114q-.246.175-.506.364c-.583.424-1.214.881-1.87 1.254c-.87.494-1.842.875-2.93.875H10.5c-.49 0-.904-.166-1.197-.457a1.46 1.46 0 0 1-.428-1.038c0-.374.14-.753.428-1.04c.293-.29.706-.456 1.197-.456h2.001c.27 0 .423-.081.504-.156a.36.36 0 0 0 .12-.269a.36.36 0 0 0-.12-.269c-.081-.075-.234-.156-.504-.156H9.433c-.647 0-1.072.15-1.4.354c-.342.214-.603.503-.92.855l-.007.008c-.301.337-.655.73-1.143 1.03a3.4 3.4 0 0 1-1.463.478V19.5h9.001c1.337 0 2.75-.743 3.874-1.55a14.6 14.6 0 0 0 1.813-1.548l.023-.024l.005-.006z" clip-rule="evenodd"></svg:path>`,
})
export class StashHandHoldingDollarLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashHandHoldingDollarSolidIcon],svg[stash-hand-holding-dollar-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.753 4a.752.752 0 0 0-1.505 0v.464h-.051c-1.05 0-1.66.795-1.781 1.56c-.121.755.2 1.7 1.165 2.048l2.362.851c.082.03.113.07.129.1c.02.04.033.1.02.17a.27.27 0 0 1-.076.152c-.025.023-.069.051-.162.051h-1.657a.324.324 0 0 1-.32-.328a.752.752 0 0 0-1.504 0c0 1.006.81 1.833 1.824 1.833h.076v.599a.752.752 0 0 0 1.505 0v-.599h.076c1.964 0 2.426-2.735.599-3.394l-2.361-.85a.26.26 0 0 1-.157-.133a.44.44 0 0 1-.034-.263a.4.4 0 0 1 .107-.225c.036-.036.089-.067.189-.067h1.607c.17 0 .319.14.319.328a.752.752 0 0 0 1.505 0c0-1.006-.81-1.833-1.824-1.833h-.051zm-3.32 8.998c-.863 0-1.522.206-2.063.544c-.5.312-.865.72-1.157 1.046l-.031.035c-.316.352-.559.614-.873.806c-.292.179-.685.319-1.309.319a.75.75 0 0 0-.752.752V20c0 .416.337.752.752.752h9.502c1.744 0 3.426-.94 4.603-1.784a16 16 0 0 0 1.983-1.695l.004-.004c.364-.3.59-.688.647-1.117c.058-.436-.07-.85-.3-1.17a1.7 1.7 0 0 0-2.335-.42q-.296.21-.579.416c-.571.414-1.122.814-1.713 1.149c-.77.437-1.523.712-2.31.712H10.5c-.2 0-.283-.062-.312-.092a.2.2 0 0 1-.06-.151a.2.2 0 0 1 .06-.152c.03-.03.112-.092.312-.092h2.002c.533 0 1.006-.167 1.354-.489a1.616 1.616 0 0 0 0-2.376c-.348-.322-.821-.49-1.354-.49z"></svg:path>`,
})
export class StashHandHoldingDollarSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[stashHashIcon],svg[stash-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.457 6.26a.75.75 0 0 1 .616.863l-.271 1.627h3.48l.312-1.873a.75.75 0 0 1 1.48.246l-.272 1.627H17a.75.75 0 0 1 0 1.5h-1.448l-.583 3.5h1.198a.75.75 0 0 1 0 1.5h-1.448l-.312 1.873a.75.75 0 0 1-1.48-.246l.271-1.627h-3.48l-.312 1.873a.75.75 0 1 1-1.48-.246l.272-1.627H7a.75.75 0 0 1 0-1.5h1.448l.583-3.5H7.833a.75.75 0 0 1 0-1.5h1.448l.313-1.873a.75.75 0 0 1 .863-.617m.095 3.99l-.583 3.5h3.479l.583-3.5z"></svg:path>`,
})
export class StashHashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
