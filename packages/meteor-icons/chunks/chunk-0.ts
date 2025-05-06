import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAirplayIcon],svg[meteor-icons-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 14l5 6H7Zm-7 3H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></svg:path>`,
})
export class MeteorIconsAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlarmExclamationIcon],svg[meteor-icons-alarm-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m1 4l3-3m16 0l3 3M12 8v4m0 4"></svg:path></svg:g>`,
})
export class MeteorIconsAlarmExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlarmMinusIcon],svg[meteor-icons-alarm-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m1 4l3-3m16 0l3 3M9 12h6"></svg:path></svg:g>`,
})
export class MeteorIconsAlarmMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlarmSnoozeIcon],svg[meteor-icons-alarm-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m1 4l3-3m16 0l3 3M9 9h6l-6 6h6"></svg:path></svg:g>`,
})
export class MeteorIconsAlarmSnoozeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlarmPlusIcon],svg[meteor-icons-alarm-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m1 4l3-3m16 0l3 3M9 12h6m-3-3v6"></svg:path></svg:g>`,
})
export class MeteorIconsAlarmPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlgoliaIcon],svg[meteor-icons-algolia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.1 11A4.25 4.25 0 0 0 9 9a4 4 0 0 0 6 6l6 6V2h-9a1 1 0 0 0 0 20q2 0 3-.5"></svg:path>`,
})
export class MeteorIconsAlgoliaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlbumIcon],svg[meteor-icons-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="3"></svg:rect><svg:circle cx="12" cy="12" r="6"></svg:circle></svg:g>`,
})
export class MeteorIconsAlbumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAdobeIcon],svg[meteor-icons-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 18a2 2 0 0 0 1.7 3h9.7l-2.7-4.5h-2L12 11l6 10h2.3a2 2 0 0 0 1.7-3L13.8 4a2 2 0 0 0-3.6 0Z"></svg:path>`,
})
export class MeteorIconsAdobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlienIcon],svg[meteor-icons-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 14C24-2 0-2 4 14q2 6 8 8q6-2 8-8M8 11l2 2m6-2l-2 2"></svg:path>`,
})
export class MeteorIconsAlienIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlignCenterIcon],svg[meteor-icons-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h8M3 12h18M8 18h8"></svg:path>`,
})
export class MeteorIconsAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlignLeftIcon],svg[meteor-icons-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h9m-9 6h18M3 18h9"></svg:path>`,
})
export class MeteorIconsAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlignRightIcon],svg[meteor-icons-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6h9M3 12h18m-9 6h9"></svg:path>`,
})
export class MeteorIconsAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAmazonIcon],svg[meteor-icons-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9q8-2 3 7M2 11q8 5 16 1.5"></svg:path>`,
})
export class MeteorIconsAmazonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAnchorIcon],svg[meteor-icons-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="5" r="3"></svg:circle><svg:path d="M12 22V8m-9 5v4a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-4M1 15l2-2l2 2m14 0l2-2l2 2"></svg:path></svg:g>`,
})
export class MeteorIconsAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAndroidIcon],svg[meteor-icons-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 19a1 1 0 0 0-22 0ZM6.5 9.5L4 5m13.5 4.5L20 5m-3 9.5"></svg:path>`,
})
export class MeteorIconsAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAngleDownIcon],svg[meteor-icons-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"></svg:path>`,
})
export class MeteorIconsAngleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAngleLeftIcon],svg[meteor-icons-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"></svg:path>`,
})
export class MeteorIconsAngleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAngleRightIcon],svg[meteor-icons-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l6-6l-6-6"></svg:path>`,
})
export class MeteorIconsAngleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAngleUpIcon],svg[meteor-icons-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 15l6-6l6 6"></svg:path>`,
})
export class MeteorIconsAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAnglesDownIcon],svg[meteor-icons-angles-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 13l6 6l6-6M6 5l6 6l6-6"></svg:path>`,
})
export class MeteorIconsAnglesDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAnglesLeftIcon],svg[meteor-icons-angles-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m11 18l-6-6l6-6m8 12l-6-6l6-6"></svg:path>`,
})
export class MeteorIconsAnglesLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAnglesRightIcon],svg[meteor-icons-angles-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 18l6-6l-6-6m8 12l6-6l-6-6"></svg:path>`,
})
export class MeteorIconsAnglesRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAnglesUpIcon],svg[meteor-icons-angles-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 19l6-6l6 6M6 11l6-6l6 6"></svg:path>`,
})
export class MeteorIconsAnglesUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAppGalleryIcon],svg[meteor-icons-app-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="6"></svg:rect><svg:path d="M8 7a1 1 0 0 0 8 0"></svg:path></svg:g>`,
})
export class MeteorIconsAppGalleryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAppStoreIcon],svg[meteor-icons-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="11"></svg:circle><svg:path d="M5.5 14h7m.8-8.5L8.6 14M7 17l.3-.5m6.2-5.9L17 17m-1.6-3h3.1m-7.8-8.5L12 7.8"></svg:path></svg:g>`,
})
export class MeteorIconsAppStoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAppleIcon],svg[meteor-icons-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3q2 0 2-2q-2 0-2 2M8 6C0 6 3 22 8 22q2 0 3-.5t2 0t3 .5q3 0 4.5-6a1 1 0 0 1-.5-7.5Q19 6 16 6q-1 0-2.5.5t-3 0T8 6"></svg:path>`,
})
export class MeteorIconsAppleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowDownIcon],svg[meteor-icons-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7l-7 7l-7-7"></svg:path>`,
})
export class MeteorIconsArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowDownLeftIcon],svg[meteor-icons-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7L7 17m10 0H7V7"></svg:path>`,
})
export class MeteorIconsArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowDownLongIcon],svg[meteor-icons-arrow-down-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 18l3 3l3-3M12 3v18"></svg:path>`,
})
export class MeteorIconsArrowDownLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowDownRightIcon],svg[meteor-icons-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 7l10 10m0-10v10H7"></svg:path>`,
})
export class MeteorIconsArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowLeftIcon],svg[meteor-icons-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l-7 7l7 7"></svg:path>`,
})
export class MeteorIconsArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowLeftLongIcon],svg[meteor-icons-arrow-left-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l-3 3l3 3m15-3H3"></svg:path>`,
})
export class MeteorIconsArrowLeftLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowRightIcon],svg[meteor-icons-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"></svg:path>`,
})
export class MeteorIconsArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowRightLongIcon],svg[meteor-icons-arrow-right-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 9l3 3l-3 3M3 12h18"></svg:path>`,
})
export class MeteorIconsArrowRightLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowRotateIcon],svg[meteor-icons-arrow-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 18a10 10 0 1 1 1.17-10M22 4v4h-4"></svg:path>`,
})
export class MeteorIconsArrowRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowTrendDownIcon],svg[meteor-icons-arrow-trend-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 18L13 8l-5 5l-7-7m15 12h7v-7"></svg:path>`,
})
export class MeteorIconsArrowTrendDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowTrendUpIcon],svg[meteor-icons-arrow-trend-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23 6L13 16l-5-5l-7 7M16 6h7v7"></svg:path>`,
})
export class MeteorIconsArrowTrendUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowUpIcon],svg[meteor-icons-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m7-7l-7-7l-7 7"></svg:path>`,
})
export class MeteorIconsArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowUpLeftIcon],svg[meteor-icons-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17L7 7m0 10V7h10"></svg:path>`,
})
export class MeteorIconsArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowUpLongIcon],svg[meteor-icons-arrow-up-long-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l3-3l3 3m-3 15V3"></svg:path>`,
})
export class MeteorIconsArrowUpLongIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowUpRightIcon],svg[meteor-icons-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M7 7h10v10"></svg:path>`,
})
export class MeteorIconsArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsArrowsRotateIcon],svg[meteor-icons-arrows-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.5 9a10 10 0 0 0-19 0M2 5v4h4m12 6h4v4M2.5 15a10 10 0 0 0 19 0"></svg:path>`,
})
export class MeteorIconsArrowsRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAtIcon],svg[meteor-icons-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="M16 12v1a1 1 0 0 0 6 0v-1a10 10 0 1 0-4 8"></svg:path></svg:g>`,
})
export class MeteorIconsAtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAtomIcon],svg[meteor-icons-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M8 16C-4 4 4-4 16 8s4 20-8 8m8 0C4 28-4 20 8 8s20-4 8 8"></svg:path></svg:g>`,
})
export class MeteorIconsAtomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBackwardIcon],svg[meteor-icons-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 5v14l-9-7ZM11 5v14l-9-7Z"></svg:path>`,
})
export class MeteorIconsBackwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBackwardStepIcon],svg[meteor-icons-backward-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 5v14M18 4v16L8 12Z"></svg:path>`,
})
export class MeteorIconsBackwardStepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBadgeCheckIcon],svg[meteor-icons-badge-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8.5 12.5l2 2l5-5m4.3 5.7a1 1 0 0 0 0-6.4a1 1 0 0 0-4.6-4.6a1 1 0 0 0-6.4 0a1 1 0 0 0-4.6 4.6a1 1 0 0 0 0 6.4a1 1 0 0 0 4.6 4.6a1 1 0 0 0 6.4 0a1 1 0 0 0 4.6-4.6"></svg:path>`,
})
export class MeteorIconsBadgeCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBagShoppingIcon],svg[meteor-icons-bag-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v11a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7Zm13 3V6a4 4 0 0 0-8 0v4"></svg:path>`,
})
export class MeteorIconsBagShoppingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBarsIcon],svg[meteor-icons-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 12h18M3 18h18"></svg:path>`,
})
export class MeteorIconsBarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBarsFilterIcon],svg[meteor-icons-bars-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M6 12h12m-9 6h6"></svg:path>`,
})
export class MeteorIconsBarsFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBarsSortIcon],svg[meteor-icons-bars-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18M3 12h12M3 18h6"></svg:path>`,
})
export class MeteorIconsBarsSortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBilibiliIcon],svg[meteor-icons-bilibili-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="16" x="2" y="5" rx="4"></svg:rect><svg:path d="m7 2l3 3m7-3l-3 3m-5 9v-2m6 0v2"></svg:path></svg:g>`,
})
export class MeteorIconsBilibiliIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBinanceIcon],svg[meteor-icons-binance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 7l5 5l-5 5l-5-5Zm-9 3l-2 2l2 2m18-4l2 2l-2 2M6 7l6-6l6 6m0 10l-6 6l-6-6"></svg:path>`,
})
export class MeteorIconsBinanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBloggerIcon],svg[meteor-icons-blogger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 15h8M8 9h4m7 0q-1 0-1-1a6 6 0 0 0-6-6H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6v-5a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class MeteorIconsBloggerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBlueskyIcon],svg[meteor-icons-bluesky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10Q2-2 2 6t5 8q-5 3-1 6t6-3q2 6 6 3t-1-6q5 0 5-8t-10 4"></svg:path>`,
})
export class MeteorIconsBlueskyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBoltIcon],svg[meteor-icons-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 2v8h7l-9 12v-8H4Z"></svg:path>`,
})
export class MeteorIconsBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBookIcon],svg[meteor-icons-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h13zM4 19a3 3 0 0 1 3-3h13"></svg:path>`,
})
export class MeteorIconsBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBookOpenIcon],svg[meteor-icons-book-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5q5-3 10 0v15q-5-3-10 0Zm0 15q-5-3-10 0V5q5-3 10 0Z"></svg:path>`,
})
export class MeteorIconsBookOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBookmarkIcon],svg[meteor-icons-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 17l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"></svg:path>`,
})
export class MeteorIconsBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBookmarkAltIcon],svg[meteor-icons-bookmark-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 22H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h13zM4 19a3 3 0 0 1 3-3h13M10 2v10l3-2l3 2V2z"></svg:path>`,
})
export class MeteorIconsBookmarkAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBooleanIcon],svg[meteor-icons-boolean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1m5 17a2 2 0 0 0 2-2m0-3.5v-2m0-3.5a2 2 0 0 0-2-2m-3.5 0h-2M11 9a2 2 0 0 0-2 2m0 3.5v2M9 20a2 2 0 0 0 2 2m3.5 0h2"></svg:path>`,
})
export class MeteorIconsBooleanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBoxArchiveIcon],svg[meteor-icons-box-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8M1 8V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v3Zm9 4h4"></svg:path>`,
})
export class MeteorIconsBoxArchiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBracketsIcon],svg[meteor-icons-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20H4V4h5m6 16h5V4h-5"></svg:path>`,
})
export class MeteorIconsBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBracketsAngledIcon],svg[meteor-icons-brackets-angled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 20l-5-8l5-8m8 16l5-8l-5-8"></svg:path>`,
})
export class MeteorIconsBracketsAngledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBracketsCurlyIcon],svg[meteor-icons-brackets-curly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20H7a3 3 0 0 1-3-3a4 5 0 0 0-3-5a4 5 0 0 0 3-5a3 3 0 0 1 3-3h2m6 16h2a3 3 0 0 0 3-3a4 5 0 0 1 3-5a4 5 0 0 1-3-5a3 3 0 0 0-3-3h-2"></svg:path>`,
})
export class MeteorIconsBracketsCurlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBracketsRoundIcon],svg[meteor-icons-brackets-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4a9 9 0 0 0 0 16m8 0a9 9 0 0 0 0-16"></svg:path>`,
})
export class MeteorIconsBracketsRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBroomIcon],svg[meteor-icons-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m23 1l-6 6M9 6q4-3 8 1t1 8l-6 8l-6-6l1-3l-3 1l-3-3Zm0 0l9 9"></svg:path>`,
})
export class MeteorIconsBroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsBullhornIcon],svg[meteor-icons-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12a2 2 0 0 0 2 2h5q6 0 11 4V3q-5 4-11 4H5a2 2 0 0 0-2 2Zm7-5v12a2 2 0 0 1-4 0v-5"></svg:path>`,
})
export class MeteorIconsBullhornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCalendarIcon],svg[meteor-icons-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="17" x="3" y="5" rx="2"></svg:rect><svg:path d="M7 2v3m10-3v3M3 10h18"></svg:path></svg:g>`,
})
export class MeteorIconsCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCarrotIcon],svg[meteor-icons-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 23q10-2 14-6a1 1 0 0 0-8-8q-4 4-6 14m3-9l2 2m9 1l-3-3m3-13a1 1 0 0 0 8 8q-4-4-8 0q4-4 0-8"></svg:path>`,
})
export class MeteorIconsCarrotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCartShoppingIcon],svg[meteor-icons-cart-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M1 2h4l3 12.4a2 2 0 0 0 2 1.6h9a2 2 0 0 0 2-1.6L23 6H6"></svg:path><svg:circle cx="9" cy="21" r="1"></svg:circle><svg:circle cx="20" cy="21" r="1"></svg:circle></svg:g>`,
})
export class MeteorIconsCartShoppingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCassetteTapeIcon],svg[meteor-icons-cassette-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="16" x="1" y="4" rx="3"></svg:rect><svg:circle cx="7" cy="10" r="1"></svg:circle><svg:circle cx="17" cy="10" r="1"></svg:circle><svg:path d="m5 20l3-4h8l3 4"></svg:path></svg:g>`,
})
export class MeteorIconsCassetteTapeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChainIcon],svg[meteor-icons-chain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 7h3a1 1 0 0 1 0 10h-3m-4 0H7A1 1 0 0 1 7 7h3m-2 5h8"></svg:path>`,
})
export class MeteorIconsChainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCheckIcon],svg[meteor-icons-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7L10 17l-5-5"></svg:path>`,
})
export class MeteorIconsCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCheckDoubleIcon],svg[meteor-icons-check-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 17l-5-5m5 0l5 5L22 7m-10 5l5-5"></svg:path>`,
})
export class MeteorIconsCheckDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChevronDownIcon],svg[meteor-icons-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 8l8 8l8-8"></svg:path>`,
})
export class MeteorIconsChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChevronLeftIcon],svg[meteor-icons-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 20l-8-8l8-8"></svg:path>`,
})
export class MeteorIconsChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChevronRightIcon],svg[meteor-icons-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 20l8-8l-8-8"></svg:path>`,
})
export class MeteorIconsChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChevronUpIcon],svg[meteor-icons-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 16l8-8l8 8"></svg:path>`,
})
export class MeteorIconsChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChevronsDownIcon],svg[meteor-icons-chevrons-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 3l8 8l8-8M4 13l8 8l8-8"></svg:path>`,
})
export class MeteorIconsChevronsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChevronsLeftIcon],svg[meteor-icons-chevrons-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 20l-8-8l8-8M11 20l-8-8l8-8"></svg:path>`,
})
export class MeteorIconsChevronsLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChevronsRightIcon],svg[meteor-icons-chevrons-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 20l8-8l-8-8m10 16l8-8l-8-8"></svg:path>`,
})
export class MeteorIconsChevronsRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChevronsUpIcon],svg[meteor-icons-chevrons-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 11l8-8l8 8M4 21l8-8l8 8"></svg:path>`,
})
export class MeteorIconsChevronsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsChromeIcon],svg[meteor-icons-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="11"></svg:circle><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="m15.5 14l-5.2 8.8M8.5 14L3.4 5.2M12 8h10.2"></svg:path></svg:g>`,
})
export class MeteorIconsChromeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCircleIcon],svg[meteor-icons-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle>`,
})
export class MeteorIconsCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCircleCheckIcon],svg[meteor-icons-circle-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m8.5 12.5l2 2l5-5"></svg:path></svg:g>`,
})
export class MeteorIconsCircleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCircleExclamationIcon],svg[meteor-icons-circle-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M12 8v4m0 4"></svg:path></svg:g>`,
})
export class MeteorIconsCircleExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCircleXmarkIcon],svg[meteor-icons-circle-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="m9.5 9.5l5 5m0-5l-5 5"></svg:path></svg:g>`,
})
export class MeteorIconsCircleXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsClockIcon],svg[meteor-icons-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M12 7v5l3 3"></svg:path></svg:g>`,
})
export class MeteorIconsClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsClockRotateIcon],svg[meteor-icons-clock-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 18A10 10 0 1 0 2.9 7.9M2 4v4h4m6-1v5l3 3"></svg:path>`,
})
export class MeteorIconsClockRotateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCloudIcon],svg[meteor-icons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 20a1 1 0 1 0 0-10a1 1 0 1 0-13 2a1 1 0 0 0 0 8z"></svg:path>`,
})
export class MeteorIconsCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCloverIcon],svg[meteor-icons-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 7a1 1 0 0 0-5-5a1 1 0 0 0-5 5l10 10a1 1 0 0 1-5 5a1 1 0 0 1-5-5ZM7 17a1 1 0 0 1-5-5a1 1 0 0 1 5-5l10 10a1 1 0 0 0 5-5a1 1 0 0 0-5-5Z"></svg:path>`,
})
export class MeteorIconsCloverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCodeIcon],svg[meteor-icons-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 19l7-7l-7-7M8 5l-7 7l7 7"></svg:path>`,
})
export class MeteorIconsCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCodepenIcon],svg[meteor-icons-codepen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m12 2l10 6.5v7L12 22L2 15.5v-7Zm0 20v-6.5M12 2v6.5"></svg:path><svg:path d="m22 8.5l-10 7l-10-7"></svg:path><svg:path d="m2 15.5l10-7l10 7"></svg:path></svg:g>`,
})
export class MeteorIconsCodepenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCodesandboxIcon],svg[meteor-icons-codesandbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 2l9 5v10l-9 5l-9-5V7zM3 7l9 5l9-5m-9 5v10M3 11.7l5 2.8v5.3m13-8.1l-5 2.8v5.3m-9-15l5 2.7l5-2.7"></svg:path>`,
})
export class MeteorIconsCodesandboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCoffeeIcon],svg[meteor-icons-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2v3m4-3v3m4-3v3m4 4v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9h17a1 1 0 0 1 0 8h-1"></svg:path>`,
})
export class MeteorIconsCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCoinbaseIcon],svg[meteor-icons-coinbase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 10a10 10 0 1 0 0 4h-6a4 4 0 1 1 0-4Z"></svg:path>`,
})
export class MeteorIconsCoinbaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsColumnsIcon],svg[meteor-icons-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M12 3v18"></svg:path></svg:g>`,
})
export class MeteorIconsColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsColumns3Icon],svg[meteor-icons-columns-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="18" x="1" y="3" rx="2"></svg:rect><svg:path d="M8 3v18m8-18v18"></svg:path></svg:g>`,
})
export class MeteorIconsColumns3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCommandIcon],svg[meteor-icons-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3Z"></svg:path>`,
})
export class MeteorIconsCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCommentIcon],svg[meteor-icons-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.3 16.7a9 9 0 1 1 3 3L3 21z"></svg:path>`,
})
export class MeteorIconsCommentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCommentDotsIcon],svg[meteor-icons-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.3 16.7a9 9 0 1 1 3 3L3 21zM16 12"></svg:path>`,
})
export class MeteorIconsCommentDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCompactDiscIcon],svg[meteor-icons-compact-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 12a6 6 0 0 1 6-6"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class MeteorIconsCompactDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCompressIcon],svg[meteor-icons-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8h5V3m8 0v5h5m-5 13v-5h5M3 16h5v5"></svg:path>`,
})
export class MeteorIconsCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCookieIcon],svg[meteor-icons-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 4a10 10 0 1 0 4 8a4 4 0 0 1-4-8m-8 3"></svg:path>`,
})
export class MeteorIconsCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCopyIcon],svg[meteor-icons-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></svg:path><svg:rect width="13" height="13" x="9" y="9" rx="2"></svg:rect></svg:g>`,
})
export class MeteorIconsCopyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCopyrightIcon],svg[meteor-icons-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="9"></svg:circle><svg:path d="M14.6 9a4 4 0 1 0 0 6"></svg:path></svg:g>`,
})
export class MeteorIconsCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCreditCardIcon],svg[meteor-icons-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="16" x="1" y="4" rx="2"></svg:rect><svg:path d="M1 9h22M5 16h2m3 0h5"></svg:path></svg:g>`,
})
export class MeteorIconsCreditCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCrossIcon],svg[meteor-icons-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 2H9v7H2v6h7v7h6v-7h7V9h-7Z"></svg:path>`,
})
export class MeteorIconsCrossIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsCubeIcon],svg[meteor-icons-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 2l9 5v10l-9 5l-9-5V7zM3 7l9 5l9-5m-9 5v10"></svg:path>`,
})
export class MeteorIconsCubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDesktopIcon],svg[meteor-icons-desktop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="15" x="1" y="3" rx="3"></svg:rect><svg:path d="M8 21h8M1 13h22"></svg:path></svg:g>`,
})
export class MeteorIconsDesktopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDeviantartIcon],svg[meteor-icons-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.4 11H5V6h7.5L15 2h4v4l-4.4 7H19v5h-7.5L9 22H5v-4Z"></svg:path>`,
})
export class MeteorIconsDeviantartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDevicesIcon],svg[meteor-icons-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M1 19h12m0-3H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"></svg:path><svg:rect width="6" height="10" x="17" y="12" rx="2"></svg:rect></svg:g>`,
})
export class MeteorIconsDevicesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDiceIcon],svg[meteor-icons-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:circle cx="15.5" cy="8.5" r=".5"></svg:circle><svg:circle cx="12" cy="12" r=".5"></svg:circle><svg:circle cx="8.5" cy="15.5" r=".5"></svg:circle></svg:g>`,
})
export class MeteorIconsDiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDiscIcon],svg[meteor-icons-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="2"></svg:circle></svg:g>`,
})
export class MeteorIconsDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDiscordIcon],svg[meteor-icons-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 3q-2.5.5-5 2q-3 5-3 12q2 2.5 6 4q1-1.5 1.5-3.5M7 17q5 2 10 0m-1.5.5q.5 2 1.5 3.5q4-1.5 6-4q0-7-3-12q-2.5-1.5-5-2l-1 2q-2-.5-4 0L9 3"></svg:path><svg:circle cx="8" cy="12" r="1"></svg:circle><svg:circle cx="16" cy="12" r="1"></svg:circle></svg:g>`,
})
export class MeteorIconsDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDisqusIcon],svg[meteor-icons-disqus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8v8h3a1 1 0 0 0 0-8ZM7 21a10.5 10.5 0 1 0-4-4l-1 5Z"></svg:path>`,
})
export class MeteorIconsDisqusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDollarIcon],svg[meteor-icons-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v20m4-17h-6a3.5 3.5 0 0 0 0 7h4.5a3.5 3.5 0 0 1 0 7H6"></svg:path>`,
})
export class MeteorIconsDollarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDownloadIcon],svg[meteor-icons-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5m-5 5V3m10 12v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4"></svg:path>`,
})
export class MeteorIconsDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDownloadCloudIcon],svg[meteor-icons-download-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17a5 5 0 1 0 0-10A1 1 0 1 0 5 9a1 1 0 0 0 0 8h1m3 3l3 3l3-3m-3 3V11"></svg:path>`,
})
export class MeteorIconsDownloadCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDribbbleIcon],svg[meteor-icons-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M8.5 2.7a38 38 0 0 1 8.1 18.1m2.6-15.7a18 10 0 0 1-17.1 5.8m3.2 8.5A14 15 0 0 1 21.9 13"></svg:path></svg:g>`,
})
export class MeteorIconsDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsDropletIcon],svg[meteor-icons-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 1l6 6A9 9 0 1 1 6 7Z"></svg:path>`,
})
export class MeteorIconsDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsEllipsisIcon],svg[meteor-icons-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="5" cy="12" r="1"></svg:circle><svg:circle cx="12" cy="12" r="1"></svg:circle><svg:circle cx="19" cy="12" r="1"></svg:circle></svg:g>`,
})
export class MeteorIconsEllipsisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsEllipsisVerticalIcon],svg[meteor-icons-ellipsis-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="5" r="1"></svg:circle><svg:circle cx="12" cy="12" r="1"></svg:circle><svg:circle cx="12" cy="19" r="1"></svg:circle></svg:g>`,
})
export class MeteorIconsEllipsisVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsEnvelopeIcon],svg[meteor-icons-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="16" x="2" y="4" rx="2"></svg:rect><svg:path d="m22 8l-10 5L2 8"></svg:path></svg:g>`,
})
export class MeteorIconsEnvelopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsEqualsIcon],svg[meteor-icons-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15h14M5 9h14"></svg:path>`,
})
export class MeteorIconsEqualsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsEraserIcon],svg[meteor-icons-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 21H7l-4-4a3 3 0 0 1 0-4l9-9a3 3 0 0 1 4 0l5 5a3 3 0 0 1 0 4l-8 8M7.5 8.5l9 9"></svg:path>`,
})
export class MeteorIconsEraserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsEuroIcon],svg[meteor-icons-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 14h10M4 10h10m4-5a8 8 0 1 0 0 14"></svg:path>`,
})
export class MeteorIconsEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsExpandIcon],svg[meteor-icons-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8V3h5m8 0h5v5m0 8v5h-5m-8 0H3v-5"></svg:path>`,
})
export class MeteorIconsExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsEyeIcon],svg[meteor-icons-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M1 12q11 16 22 0Q12-4 1 12"></svg:path></svg:g>`,
})
export class MeteorIconsEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFaceAngryIcon],svg[meteor-icons-face-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m14 9l2.5-1M10 9L7.5 8m.5 8q4-4 8 0"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class MeteorIconsFaceAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFaceFrownIcon],svg[meteor-icons-face-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 9h.01M15 9h.01M8 16q4-4 8 0"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class MeteorIconsFaceFrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFaceLaughIcon],svg[meteor-icons-face-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 9h.01M15 9h.01M6 13a6.1 6.1 0 0 0 12 0Z"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class MeteorIconsFaceLaughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFaceMehIcon],svg[meteor-icons-face-meh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 15h8M9 9h.01M15 9h.01"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class MeteorIconsFaceMehIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFaceMehBlankIcon],svg[meteor-icons-face-meh-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 9h.01M15 9h.01"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class MeteorIconsFaceMehBlankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFaceSmileIcon],svg[meteor-icons-face-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 9h.01M15 9h.01M8 14q4 4 8 0"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class MeteorIconsFaceSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFacebookIcon],svg[meteor-icons-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14h-3v8h-4v-8H7v-4h3V7a5 5 0 0 1 5-5h3v4h-3q-1 0-1 1v3h4Z"></svg:path>`,
})
export class MeteorIconsFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFacebookAltIcon],svg[meteor-icons-facebook-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="11"></svg:circle><svg:path d="M12 23V9.5A2.5 2.5 0 0 1 15 7m-5 6h4.5"></svg:path></svg:g>`,
})
export class MeteorIconsFacebookAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFeatherIcon],svg[meteor-icons-feather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.25 12.24a1 1 0 0 0-8.51-8.49L5 10.5V19h8.5ZM2 22L16 8m-7 7h8.5"></svg:path>`,
})
export class MeteorIconsFeatherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFigmaIcon],svg[meteor-icons-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8.5 9a1 1 0 0 1 0-7h7a1 1 0 0 1 0 7za1 1 0 0 0 0 7H12H8.5a1 1 0 0 0 0 7a3.5 3.5 0 0 0 3.5-3.5V2"></svg:path><svg:circle cx="15.5" cy="12.5" r="3.5"></svg:circle></svg:g>`,
})
export class MeteorIconsFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFileIcon],svg[meteor-icons-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"></svg:path>`,
})
export class MeteorIconsFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFileLinesIcon],svg[meteor-icons-file-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm2 11H8m8 4H8m4-8H8"></svg:path>`,
})
export class MeteorIconsFileLinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFileMinusIcon],svg[meteor-icons-file-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8ZM9 15h6"></svg:path>`,
})
export class MeteorIconsFileMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFilePlusIcon],svg[meteor-icons-file-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm-2 16v-6m-3 3h6"></svg:path>`,
})
export class MeteorIconsFilePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFileSearchIcon],svg[meteor-icons-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="11.5" cy="14.5" r="3.5"></svg:circle><svg:path d="m4 22l5-5m-5-2V4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2h-7"></svg:path></svg:g>`,
})
export class MeteorIconsFileSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFilmIcon],svg[meteor-icons-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="20" x="2" y="2" rx="3" ry="3"></svg:rect><svg:path d="M7 2v20M17 2v20M2 12h20M2 7h5m15 0h-5M2 17h5m15 0h-5"></svg:path></svg:g>`,
})
export class MeteorIconsFilmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFilterIcon],svg[meteor-icons-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 3H2l8 10v4l4 4v-8z"></svg:path>`,
})
export class MeteorIconsFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFingerprintIcon],svg[meteor-icons-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18a10 10 0 0 0 2-6a4 4 0 0 1 8 0a16 16 0 0 1-1 6m-3-5a14 14 0 0 1-3 8m-6-6a9 9 0 0 0 1-4a8 8 0 0 1 13-6.2M19.5 8a8 8 0 0 1 .5 5"></svg:path>`,
})
export class MeteorIconsFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFireIcon],svg[meteor-icons-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9.7a8 8 0 1 0 10.4-1.4Q16 12 12 13q3-6-2-12q0 5-4 8.7"></svg:path>`,
})
export class MeteorIconsFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFlipboardIcon],svg[meteor-icons-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21h6v-6h6V9h6V3H3Z"></svg:path>`,
})
export class MeteorIconsFlipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFloppyDiskIcon],svg[meteor-icons-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7Zm0 18v-8H7v8M7 3v5h8"></svg:path>`,
})
export class MeteorIconsFloppyDiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFolderIcon],svg[meteor-icons-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9Z"></svg:path>`,
})
export class MeteorIconsFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFolderMinusIcon],svg[meteor-icons-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14h6M9 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9Z"></svg:path>`,
})
export class MeteorIconsFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFolderPlusIcon],svg[meteor-icons-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17v-6m-3 3h6M9 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-9Z"></svg:path>`,
})
export class MeteorIconsFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFolderSearchIcon],svg[meteor-icons-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="15.5" cy="14.5" r="3.5"></svg:circle><svg:path d="m18 17l5 5m-1-8V8a2 2 0 0 0-2-2h-9L9 3H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11"></svg:path></svg:g>`,
})
export class MeteorIconsFolderSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsForwardIcon],svg[meteor-icons-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5v14l9-7Zm11 0v14l9-7Z"></svg:path>`,
})
export class MeteorIconsForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsForwardStepIcon],svg[meteor-icons-forward-step-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 5v14M6 4v16l10-8Z"></svg:path>`,
})
export class MeteorIconsForwardStepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGamepadIcon],svg[meteor-icons-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="14" x="1" y="5" rx="3"></svg:rect><svg:path d="M7 10v4m-2-2h4m9-1"></svg:path></svg:g>`,
})
export class MeteorIconsGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGamepadModernIcon],svg[meteor-icons-gamepad-modern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 16h6a1 1 0 0 0 0-12H9a6 6 0 0 0-5.9 5l-1.9 6.9A3 3 0 0 0 6 19.2Zm6 0l3 3.3a3 3 0 0 0 4.8-3.4L20.9 9M8 8v4m-2-2h4m5 0h2"></svg:path>`,
})
export class MeteorIconsGamepadModernIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGearIcon],svg[meteor-icons-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="3"></svg:circle><svg:path d="M10 21a1 1 0 0 0 4 0a1.8 1.8 0 0 1 3-1.3a1 1 0 0 0 2.8-2.7a1.8 1.8 0 0 1 1.2-3a1 1 0 0 0 0-4a1.8 1.8 0 0 1-1.2-3A1 1 0 0 0 17 4.4A1.8 1.8 0 0 1 14 3a1 1 0 0 0-4 0a1.8 1.8 0 0 1-3 1.4A1 1 0 0 0 4.2 7A1.8 1.8 0 0 1 3 10a1 1 0 0 0 0 4a1.8 1.8 0 0 1 1.2 3A1 1 0 0 0 7 19.7a1.8 1.8 0 0 1 3 1.3"></svg:path></svg:g>`,
})
export class MeteorIconsGearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGetPocketIcon],svg[meteor-icons-get-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3a2 2 0 0 1 2 2v6a9 9 0 0 1-22 0V5a2 2 0 0 1 2-2ZM7 10l5 4l5-4"></svg:path>`,
})
export class MeteorIconsGetPocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGhostIcon],svg[meteor-icons-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 9v1m6 0a1 1 0 0 0-18 0v13c5-6 6 0 9 0s4-6 9 0ZM9 9v1"></svg:path>`,
})
export class MeteorIconsGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGiftIcon],svg[meteor-icons-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22V7q-2-5-5-5a1 1 0 0 0 0 5m5 0q2-5 5-5a1 1 0 0 1 0 5m5 0v5H2V7ZM4 12v10h16V12"></svg:path>`,
})
export class MeteorIconsGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGitBranchIcon],svg[meteor-icons-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="5" r="3"></svg:circle><svg:circle cx="18" cy="12" r="3"></svg:circle><svg:circle cx="6" cy="19" r="3"></svg:circle><svg:path d="M6 8v8m11-1s-2 4-8 4"></svg:path></svg:g>`,
})
export class MeteorIconsGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGitCommitIcon],svg[meteor-icons-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path d="M1.1 12H7m10 0h6"></svg:path></svg:g>`,
})
export class MeteorIconsGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGitForkIcon],svg[meteor-icons-git-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="5" r="3"></svg:circle><svg:circle cx="18" cy="5" r="3"></svg:circle><svg:circle cx="12" cy="19" r="3"></svg:circle><svg:path d="M6 8v1a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V8m-6 4v4"></svg:path></svg:g>`,
})
export class MeteorIconsGitForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGitMergeIcon],svg[meteor-icons-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="5" r="3"></svg:circle><svg:circle cx="18" cy="12" r="3"></svg:circle><svg:circle cx="6" cy="19" r="3"></svg:circle><svg:path d="M15 12s-6 1-9-4v8"></svg:path></svg:g>`,
})
export class MeteorIconsGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGitPullIcon],svg[meteor-icons-git-pull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="6" cy="5" r="3"></svg:circle><svg:circle cx="18" cy="19" r="3"></svg:circle><svg:circle cx="6" cy="19" r="3"></svg:circle><svg:path d="M6 8v8m7-10h3a2 2 0 0 1 2 2v7"></svg:path></svg:g>`,
})
export class MeteorIconsGitPullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGithubIcon],svg[meteor-icons-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 22v-3q0-2 1-3A7 6.5 0 0 1 5 5Q4 3 5 1q3 0 4 2q3.5-1 7 0q1-2 4-2q1 2 0 4a7 6.5 0 0 1-5 11q1 1 1 3v3m-7-3c-4 1-4-2-7-3"></svg:path>`,
})
export class MeteorIconsGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGitlabIcon],svg[meteor-icons-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 14L5 2l3 8h8l3-8l4 12l-11 8Z"></svg:path>`,
})
export class MeteorIconsGitlabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGlobeIcon],svg[meteor-icons-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 12h20M12 2a15 15 0 0 0 0 20a15 15 0 0 0 0-20"></svg:path><svg:circle cx="12" cy="12" r="10"></svg:circle></svg:g>`,
})
export class MeteorIconsGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGohugoIcon],svg[meteor-icons-gohugo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11ZM9 8v8m0-4h6m0-4v8"></svg:path>`,
})
export class MeteorIconsGohugoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGoogleIcon],svg[meteor-icons-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16.5 6.6a7 7 0 1 0 2.2 7.4H12v-4h10.8a11 11 0 1 1-3.3-6Z"></svg:path>`,
})
export class MeteorIconsGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGoogleDriveIcon],svg[meteor-icons-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1.5 15l7-12h7l7 12l-3.5 6H5ZM5 21l7-12m-3.5 6h14m-6.9 0L8.5 3"></svg:path>`,
})
export class MeteorIconsGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGooglePlayIcon],svg[meteor-icons-google-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.8 2.2a2.5 2.5 0 0 0-3.8 2v15.6a2.5 2.5 0 0 0 3.8 2L21 13.7a2 2 0 0 0 0-3.4ZM3.2 3.5l12.8 13m-12.8 4L16 7.5"></svg:path>`,
})
export class MeteorIconsGooglePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGridIcon],svg[meteor-icons-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="7" height="7" x="3" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="3" y="14" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="14" rx="1"></svg:rect></svg:g>`,
})
export class MeteorIconsGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGridPlusIcon],svg[meteor-icons-grid-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="7" height="7" x="3" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="14" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="3" y="14" rx="1"></svg:rect><svg:path d="M14 17.5h7M17.5 14v7"></svg:path></svg:g>`,
})
export class MeteorIconsGridPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGripDotsIcon],svg[meteor-icons-grip-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="5" cy="9" r="1"></svg:circle><svg:circle cx="12" cy="9" r="1"></svg:circle><svg:circle cx="19" cy="9" r="1"></svg:circle><svg:circle cx="5" cy="15" r="1"></svg:circle><svg:circle cx="12" cy="15" r="1"></svg:circle><svg:circle cx="19" cy="15" r="1"></svg:circle></svg:g>`,
})
export class MeteorIconsGripDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGripDotsVerticalIcon],svg[meteor-icons-grip-dots-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9" cy="5" r="1"></svg:circle><svg:circle cx="9" cy="12" r="1"></svg:circle><svg:circle cx="9" cy="19" r="1"></svg:circle><svg:circle cx="15" cy="5" r="1"></svg:circle><svg:circle cx="15" cy="12" r="1"></svg:circle><svg:circle cx="15" cy="19" r="1"></svg:circle></svg:g>`,
})
export class MeteorIconsGripDotsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsGumroadIcon],svg[meteor-icons-gumroad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="20" cy="4" r="2"></svg:circle><svg:circle cx="15" cy="16" r="2"></svg:circle><svg:path d="M18 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2"></svg:path></svg:g>`,
})
export class MeteorIconsGumroadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsHeadphonesIcon],svg[meteor-icons-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 14h4q2 0 2 2v4q0 2-2 2H4q-2 0-2-2v-8a1 1 0 0 1 20 0v8q0 2-2 2h-2q-2 0-2-2v-4q0-2 2-2h4"></svg:path>`,
})
export class MeteorIconsHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsHeartIcon],svg[meteor-icons-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 21l-8.8-8.3A5.6 5.6 0 1 1 12 6a5.6 5.6 0 1 1 8.9 6.6z"></svg:path>`,
})
export class MeteorIconsHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsHexagonIcon],svg[meteor-icons-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11Z"></svg:path>`,
})
export class MeteorIconsHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsHomeIcon],svg[meteor-icons-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 12L12 1l11 11m-2-2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10m6 12v-8h6v8"></svg:path>`,
})
export class MeteorIconsHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsImageIcon],svg[meteor-icons-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:circle cx="15" cy="9" r="2"></svg:circle><svg:path d="m3 18l6-6l9 9"></svg:path></svg:g>`,
})
export class MeteorIconsImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsImagesIcon],svg[meteor-icons-images-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="5" y="1" rx="2"></svg:rect><svg:circle cx="17" cy="7" r="2"></svg:circle><svg:path d="m5 16l6-6l9 9M1 5v13a5 5 0 0 0 5 5h13"></svg:path></svg:g>`,
})
export class MeteorIconsImagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsIndentIcon],svg[meteor-icons-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 6h12m-8 6h8M9 18h12M3 8l4 4l-4 4"></svg:path>`,
})
export class MeteorIconsIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsInstagramIcon],svg[meteor-icons-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:rect width="20" height="20" x="2" y="2" rx="5"></svg:rect></svg:g>`,
})
export class MeteorIconsInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsKeyIcon],svg[meteor-icons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="8" cy="16" r=".5"></svg:circle><svg:path d="M18 2h4v5h-3v3h-3v2l-2.3 2.3a6 6 0 1 1-4-4Z"></svg:path></svg:g>`,
})
export class MeteorIconsKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsKeySkeletonIcon],svg[meteor-icons-key-skeleton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m11 12l9-9l3 3m-6 0l3 3"></svg:path><svg:circle cx="7" cy="16" r="5.5"></svg:circle></svg:g>`,
})
export class MeteorIconsKeySkeletonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLanguageIcon],svg[meteor-icons-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5h14M9 2v3m4 0q-2 8-9 11m2-7q2 4 6 6m1 7l5-11l5 11m-1.4-3h-7.2"></svg:path>`,
})
export class MeteorIconsLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLaptopIcon],svg[meteor-icons-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="13" x="3" y="4" rx="2"></svg:rect><svg:path d="M1 20h22"></svg:path></svg:g>`,
})
export class MeteorIconsLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLaravelIcon],svg[meteor-icons-laravel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 10.8l4.5 2.5M5.5 1L1 3.5V18l9 5l8.5-4.7v-10L23 5.8v5L10 18l-4.5-2.5V6L10 3.5ZM1 3.5L5.5 6m0 9.5l8.5-4.7v-5l4.5-2.5L23 5.8M10 3.5V13m4-7.2l4.5 2.5M10 18v5"></svg:path>`,
})
export class MeteorIconsLaravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLayoutIcon],svg[meteor-icons-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M3 9h18M9 21V9"></svg:path></svg:g>`,
})
export class MeteorIconsLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLeafIcon],svg[meteor-icons-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 21q1-6 6-7t6-3m5-9q-2 4-8 4a1 1 0 0 0 0 14a10 11 0 0 0 8-18"></svg:path>`,
})
export class MeteorIconsLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLinkIcon],svg[meteor-icons-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13a5 5 0 0 0 8 1l4-4a1 1 0 0 0-7-7l-2 2m3 6a5 5 0 0 0-8-1l-4 4a1 1 0 0 0 7 7l2-2"></svg:path>`,
})
export class MeteorIconsLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLinkedinIcon],svg[meteor-icons-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="4" cy="4" r="2"></svg:circle><svg:path d="M2 9h4v12H2Zm20 12h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 12 0Z"></svg:path></svg:g>`,
})
export class MeteorIconsLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsListIcon],svg[meteor-icons-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6h14M7 12h14M7 18h14M3 18"></svg:path>`,
})
export class MeteorIconsListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsListMusicIcon],svg[meteor-icons-list-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 8h6V3h-6v15M2 3h9M2 8h9m-9 5h3"></svg:path><svg:circle cx="12" cy="18" r="4"></svg:circle></svg:g>`,
})
export class MeteorIconsListMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLocationIcon],svg[meteor-icons-location-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 23l-6-6a9 9 0 1 1 12 0z"></svg:path>`,
})
export class MeteorIconsLocationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLocationCrosshairsIcon],svg[meteor-icons-location-crosshairs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M23 12h-3M4 12H1m11-8V1m0 22v-3"></svg:path><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:circle cx="12" cy="12" r="3"></svg:circle></svg:g>`,
})
export class MeteorIconsLocationCrosshairsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLocationDotIcon],svg[meteor-icons-location-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="10" r="3"></svg:circle><svg:path d="m12 23l-6-6a9 9 0 1 1 12 0z"></svg:path></svg:g>`,
})
export class MeteorIconsLocationDotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsLockIcon],svg[meteor-icons-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M16 10V6a4 4 0 0 0-8 0v4"></svg:path><svg:rect width="18" height="12" x="3" y="10" rx="2"></svg:rect></svg:g>`,
})
export class MeteorIconsLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMapIcon],svg[meteor-icons-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 6v16l7-4l8 4l7-4V2l-7 4l-8-4zm7-4v16m8-12v16"></svg:path>`,
})
export class MeteorIconsMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMapPinIcon],svg[meteor-icons-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="7" r="6"></svg:circle><svg:path d="M12 13v10"></svg:path></svg:g>`,
})
export class MeteorIconsMapPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMegaIcon],svg[meteor-icons-mega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="11"></svg:circle><svg:path d="M7 15V9l5 5l5-5v6"></svg:path></svg:g>`,
})
export class MeteorIconsMegaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMessageIcon],svg[meteor-icons-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></svg:path>`,
})
export class MeteorIconsMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMessageDotsIcon],svg[meteor-icons-message-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zm-5-5"></svg:path>`,
})
export class MeteorIconsMessageDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMetaIcon],svg[meteor-icons-meta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9c2-5 7-6 10 0s5 10 8 10s4-5 2-10s-7-6-10 0s-5 10-8 10s-4-5-2-10"></svg:path>`,
})
export class MeteorIconsMetaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMeteorIcon],svg[meteor-icons-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9.5" cy="14.5" r="3.5"></svg:circle><svg:path d="M8 5L4 9a1 1 0 0 0 11 11l7-7m-6-2l6-6m-6-1l2-2m-5 5"></svg:path></svg:g>`,
})
export class MeteorIconsMeteorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMicrochipIcon],svg[meteor-icons-microchip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="16" x="4" y="4" rx="2"></svg:rect><svg:path d="M9 9h6v6H9zm0-8v3m6-3v3M9 20v3m6-3v3m5-14h3m-3 5h3M1 9h3m-3 5h3"></svg:path></svg:g>`,
})
export class MeteorIconsMicrochipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMicrophoneIcon],svg[meteor-icons-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a1 1 0 0 0 14 0m-7 7v4m-4 0h8M9 12a1 1 0 0 0 6 0V4a1 1 0 0 0-6 0Z"></svg:path>`,
})
export class MeteorIconsMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMinusIcon],svg[meteor-icons-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"></svg:path>`,
})
export class MeteorIconsMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMobileIcon],svg[meteor-icons-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="22" x="4" y="1" rx="3"></svg:rect><svg:path d="M10 19h4"></svg:path></svg:g>`,
})
export class MeteorIconsMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMoonIcon],svg[meteor-icons-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 14a9 9 0 1 1-9-11a7 7 0 0 0 9 11"></svg:path>`,
})
export class MeteorIconsMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMusicIcon],svg[meteor-icons-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 16V2L9 5v13"></svg:path><svg:circle cx="5" cy="18" r="4"></svg:circle><svg:circle cx="18" cy="16" r="4"></svg:circle></svg:g>`,
})
export class MeteorIconsMusicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsMusicNoteIcon],svg[meteor-icons-music-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 8h6V3h-6v15"></svg:path><svg:circle cx="8" cy="18" r="4"></svg:circle></svg:g>`,
})
export class MeteorIconsMusicNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsNewspaperIcon],svg[meteor-icons-newspaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 6v13a2 2 0 0 0 4 0V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13a3 3 0 0 1-3 3H4m7-13h6m-6 4h6m-6 4h6"></svg:path>`,
})
export class MeteorIconsNewspaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsObjectsColumnIcon],svg[meteor-icons-objects-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="7" height="9" x="3" y="3" rx="1"></svg:rect><svg:rect width="7" height="5" x="14" y="3" rx="1"></svg:rect><svg:rect width="7" height="5" x="3" y="16" rx="1"></svg:rect><svg:rect width="7" height="9" x="14" y="12" rx="1"></svg:rect></svg:g>`,
})
export class MeteorIconsObjectsColumnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsOpenSourceIcon],svg[meteor-icons-open-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 21.2a10 10 0 1 0-8 0l2.4-6.1a3.5 3.5 0 1 1 3.2 0Z"></svg:path>`,
})
export class MeteorIconsOpenSourceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsOpenaiIcon],svg[meteor-icons-openai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.1 13.3L8 16.8l-4.2-2.6A4 4 0 0 1 6 6.7m6 7.8L6 11V6a4 4 0 0 1 7.6-2m-3.7 9.3V6.2l4.4-2.6a4 4 0 0 1 5.3 5.8m-9.7 1.3L16 7.2l4.2 2.6a4 4 0 0 1-2.2 7.5m-6-7.8l6 3.5v5a4 4 0 0 1-7.6 2m3.7-9.3v7.1l-4.4 2.6a4 4 0 0 1-5.3-5.8"></svg:path>`,
})
export class MeteorIconsOpenaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsOutdentIcon],svg[meteor-icons-outdent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6h6m-10 6h10m-6 6h6M7 8l-4 4l4 4"></svg:path>`,
})
export class MeteorIconsOutdentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPaintRollerIcon],svg[meteor-icons-paint-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="4" height="6" x="10" y="16" rx="2"></svg:rect><svg:rect width="16" height="6" x="3" y="2" rx="2"></svg:rect><svg:path d="M19 5h1q2 0 2 2q0 6-7 6q-3 0-3 3"></svg:path></svg:g>`,
})
export class MeteorIconsPaintRollerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPaletteIcon],svg[meteor-icons-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="14" cy="7" r=".5"></svg:circle><svg:circle cx="9" cy="8" r=".5"></svg:circle><svg:circle cx="7" cy="13" r=".5"></svg:circle><svg:path d="M12 22a10 10 0 1 1 10-10q0 4-5 4t-4 3t-1 3"></svg:path></svg:g>`,
})
export class MeteorIconsPaletteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPaperPlaneIcon],svg[meteor-icons-paper-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 2l-7 20l-4-9l-9-4zm0 0L11 13"></svg:path>`,
})
export class MeteorIconsPaperPlaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPaperclipIcon],svg[meteor-icons-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 7l-7 7a1 1 0 0 0 3 3l7.5-7.5a1 1 0 0 0-6-6L5 11a1 1 0 0 0 9 9l7-7"></svg:path>`,
})
export class MeteorIconsPaperclipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPatreonIcon],svg[meteor-icons-patreon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 2h3v20H2Z"></svg:path><svg:circle cx="15" cy="9" r="7"></svg:circle></svg:g>`,
})
export class MeteorIconsPatreonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPauseIcon],svg[meteor-icons-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h4v16H5Zm10 0h4v16h-4Z"></svg:path>`,
})
export class MeteorIconsPauseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPawIcon],svg[meteor-icons-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="4" cy="8" r="3"></svg:circle><svg:circle cx="12" cy="4" r="3"></svg:circle><svg:circle cx="20" cy="8" r="3"></svg:circle><svg:path d="M5 16a1 1 0 0 0 5 6q2-1 4 0a1 1 0 0 0 5-6l-3-3q-4-4-8 0Z"></svg:path></svg:g>`,
})
export class MeteorIconsPawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPaypalIcon],svg[meteor-icons-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 22l4-16h7a1 1 0 0 1 0 11h-4.7L11 22Zm1-4H2L6 2h7a1 1 0 0 1 0 11H8.3"></svg:path>`,
})
export class MeteorIconsPaypalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPencilIcon],svg[meteor-icons-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4a1 1 0 0 1 3 3L7 19l-4 1l1-4zm-4 16h9"></svg:path>`,
})
export class MeteorIconsPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPexelsIcon],svg[meteor-icons-pexels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 2v20h8v-6h1a1 1 0 0 0 0-14Z"></svg:path>`,
})
export class MeteorIconsPexelsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPinIcon],svg[meteor-icons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 17v5M9 2l-1 9q-4 2-4 6h16q0-4-4-6l-1-9m2 0H7"></svg:path>`,
})
export class MeteorIconsPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPinterestIcon],svg[meteor-icons-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="11"></svg:circle><svg:path d="m8 22l3-11a1 1 0 0 0 5 5.5A6 6 0 1 0 6 12"></svg:path></svg:g>`,
})
export class MeteorIconsPinterestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPlayIcon],svg[meteor-icons-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 3l14 9l-14 9z"></svg:path>`,
})
export class MeteorIconsPlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPlugIcon],svg[meteor-icons-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 2v5m8-5v5M5 7v3a1 1 0 0 0 14 0V7zm7 10v5"></svg:path>`,
})
export class MeteorIconsPlugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPlusIcon],svg[meteor-icons-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14m-7-7h14"></svg:path>`,
})
export class MeteorIconsPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsPowerIcon],svg[meteor-icons-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v10M6 4a10 10 0 1 0 12 0"></svg:path>`,
})
export class MeteorIconsPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsQuoteLeftIcon],svg[meteor-icons-quote-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13h5v5H5v-7a4 5 0 0 1 4-5m5 7h5v5h-5v-7a4 5 0 0 1 4-5"></svg:path>`,
})
export class MeteorIconsQuoteLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsQuoteRightIcon],svg[meteor-icons-quote-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11H5V6h5v7a4 5 0 0 1-4 5m13-7h-5V6h5v7a4 5 0 0 1-4 5"></svg:path>`,
})
export class MeteorIconsQuoteRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRadioIcon],svg[meteor-icons-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="2"></svg:circle><svg:path d="M5 4.9a10 10 0 0 0 0 14.2M7.8 7.7a6 6 0 0 0 0 8.6m8.4 0a6 6 0 0 0 0-8.6M19 19.1a10 10 0 0 0 0-14.2"></svg:path></svg:g>`,
})
export class MeteorIconsRadioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRedditIcon],svg[meteor-icons-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="20" cy="5" r="2"></svg:circle><svg:path d="M5 10.5a14 14 0 0 1 14 0a2.4 2.4 0 1 1 2.5 4a9.6 6.6 0 1 1-19 0a2.4 2.4 0 1 1 2.5-4m7-1.9l1.5-6.1l4.6 1.7M10 18q2 1 4 0m1-4"></svg:path></svg:g>`,
})
export class MeteorIconsRedditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRhombusIcon],svg[meteor-icons-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.4 2.4a2 2 0 0 1 3.2 0l7 8.2a2 2 0 0 1 0 2.8l-7 8.2a2 2 0 0 1-3.2 0l-7-8.2a2 2 0 0 1 0-2.8Z"></svg:path>`,
})
export class MeteorIconsRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRobotIcon],svg[meteor-icons-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="14" x="2" y="9" rx="4"></svg:rect><svg:circle cx="12" cy="3" r="2"></svg:circle><svg:path d="M12 5v4m-3 8v-2m6 0v2"></svg:path></svg:g>`,
})
export class MeteorIconsRobotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRowsIcon],svg[meteor-icons-rows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M3 12h18"></svg:path></svg:g>`,
})
export class MeteorIconsRowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRows3Icon],svg[meteor-icons-rows-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="22" x="3" y="1" rx="2"></svg:rect><svg:path d="M3 8h18M3 16h18"></svg:path></svg:g>`,
})
export class MeteorIconsRows3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsRssIcon],svg[meteor-icons-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"></svg:path><svg:circle cx="5" cy="19" r="1"></svg:circle></svg:g>`,
})
export class MeteorIconsRssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSearchIcon],svg[meteor-icons-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="10" cy="10" r="7"></svg:circle><svg:path d="m15 15l6 6"></svg:path></svg:g>`,
})
export class MeteorIconsSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsShareIcon],svg[meteor-icons-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="18" cy="5" r="3"></svg:circle><svg:circle cx="6" cy="12" r="3"></svg:circle><svg:circle cx="18" cy="19" r="3"></svg:circle><svg:path d="m8.5 13.5l7 4m0-11l-7 4"></svg:path></svg:g>`,
})
export class MeteorIconsShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsShieldIcon],svg[meteor-icons-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L4 5v7q0 6 8 10q8-4 8-10V5Z"></svg:path>`,
})
export class MeteorIconsShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsShuffleIcon],svg[meteor-icons-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 3l3 3l-3 3m0 12l3-3l-3-3M2 6h4l10 12h6M2 18h4l2-2.4m6-7.2L16 6h6"></svg:path>`,
})
export class MeteorIconsShuffleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSidebarIcon],svg[meteor-icons-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M9 3v18"></svg:path></svg:g>`,
})
export class MeteorIconsSidebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSkullIcon],svg[meteor-icons-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="8" cy="11" r="1"></svg:circle><svg:circle cx="16" cy="11" r="1"></svg:circle><svg:path d="M18 18a10 8.9 0 1 0-12 0v4h12Zm-8 1v3m4-3v3"></svg:path></svg:g>`,
})
export class MeteorIconsSkullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSoundcloudIcon],svg[meteor-icons-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 7v11m-3 0v-7m-6 6v-3m3-4v8m9 0h6a1 1 0 0 0 0-6a6 6 0 0 0-6-6Z"></svg:path>`,
})
export class MeteorIconsSoundcloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSparkleIcon],svg[meteor-icons-sparkle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12q9 1 10 10q1-9 10-10q-9-1-10-10q-1 9-10 10"></svg:path>`,
})
export class MeteorIconsSparkleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSparklesIcon],svg[meteor-icons-sparkles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12q7 1 8 8q1-7 8-8q-7-1-8-8q-1 7-8 8M4 2v6M1 5h6M4 16v6m-3-3h6"></svg:path>`,
})
export class MeteorIconsSparklesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSpotifyIcon],svg[meteor-icons-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="11"></svg:circle><svg:path d="M6 8q7-2 12 1M7 12q5.5-1.5 10 1m-9 3q4.5-1.5 8 1"></svg:path></svg:g>`,
})
export class MeteorIconsSpotifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSquareIcon],svg[meteor-icons-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18" height="18" x="3" y="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" rx="2"></svg:rect>`,
})
export class MeteorIconsSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSquareExclamationIcon],svg[meteor-icons-square-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M12 8v4m0 4"></svg:path></svg:g>`,
})
export class MeteorIconsSquareExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsStarIcon],svg[meteor-icons-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 1.5l3.1 6.3l6.9 1l-5 4.8l1.2 6.9l-6.2-3.2l-6.2 3.2L7 13.6L2 8.8l6.9-1z"></svg:path>`,
})
export class MeteorIconsStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSterlingIcon],svg[meteor-icons-sterling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a1 1 90 1 0-6 0v9a4 4 90 0 1-4 4h12M8 13h7"></svg:path>`,
})
export class MeteorIconsSterlingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsSunIcon],svg[meteor-icons-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="5"></svg:circle><svg:path d="M12 1v2m0 18v2M4.2 4.2l1.4 1.4m12.8 12.8l1.4 1.4M1 12h2m18 0h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"></svg:path></svg:g>`,
})
export class MeteorIconsSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTableCellsIcon],svg[meteor-icons-table-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M3 12h18m-9 9V3"></svg:path></svg:g>`,
})
export class MeteorIconsTableCellsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTableLayoutIcon],svg[meteor-icons-table-layout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M9 3v18M3 9h18"></svg:path></svg:g>`,
})
export class MeteorIconsTableLayoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTableListIcon],svg[meteor-icons-table-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="M9 3v18M3 9h18M3 15h18"></svg:path></svg:g>`,
})
export class MeteorIconsTableListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTagIcon],svg[meteor-icons-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2H2v10l8.5 8.5q1.5 1.4 3 0l7-7q1.4-1.5 0-3ZM7 7"></svg:path>`,
})
export class MeteorIconsTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTelegramIcon],svg[meteor-icons-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.5 16L9 19.5L7 13l-5.5-2l21-8l-4 18l-7.5-7l4-3"></svg:path>`,
})
export class MeteorIconsTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTerminalIcon],svg[meteor-icons-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="18" height="18" x="3" y="3" rx="2"></svg:rect><svg:path d="m8 9l3 3l-3 3m5 1h3"></svg:path></svg:g>`,
})
export class MeteorIconsTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTextIcon],svg[meteor-icons-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7V4h16v3m-8-3v16m-3 0h6"></svg:path>`,
})
export class MeteorIconsTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsThreadsIcon],svg[meteor-icons-threads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 8C18 0 6 0 4 8s1.5 14 8 14s10-7.6 4-10s-9 2-7 4s7 1 7-4s-5-6-7-4"></svg:path>`,
})
export class MeteorIconsThreadsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsThumbsDownIcon],svg[meteor-icons-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 15v4a3 3 0 0 0 3 3l4-9V3l-4-1H7a3 3 0 0 0-3 2l-2 8a2 2.3 0 0 0 2 3zm7-12h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4"></svg:path>`,
})
export class MeteorIconsThumbsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsThumbsUpIcon],svg[meteor-icons-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21H3a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4l4-9a3 3 0 0 1 3 3v4h6a2 2.3 0 0 1 2 3l-2 8a3 3 0 0 1-3 2h-6zV11"></svg:path>`,
})
export class MeteorIconsThumbsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTiktokIcon],svg[meteor-icons-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 6v5q-4 0-6-2v7a7 7 0 1 1-5-6.7m0 6.7a2 2 0 1 0-2 2a2 2 0 0 0 2-2V1h5q2 5 6 5"></svg:path>`,
})
export class MeteorIconsTiktokIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTrashIcon],svg[meteor-icons-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m2 0l2-4h6l2 4"></svg:path>`,
})
export class MeteorIconsTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTrashCanIcon],svg[meteor-icons-trash-can-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m2 0l2-4h6l2 4m-7 5v6m4-6v6"></svg:path>`,
})
export class MeteorIconsTrashCanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTreeIcon],svg[meteor-icons-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 20H2l5-6H4l5-6H7l5-6l5 6h-2l5 6h-3Zm-10-6v9"></svg:path>`,
})
export class MeteorIconsTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTreeDeciduousIcon],svg[meteor-icons-tree-deciduous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v9m6-3a4 4 0 0 0 1.34-7.77a4 4 0 0 0-3.88-6.19a3.5 3.5 0 1 0-6.92 0a4 4 0 0 0-3.84 6.18A4 4 0 0 0 6 20Z"></svg:path>`,
})
export class MeteorIconsTreeDeciduousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTrelloIcon],svg[meteor-icons-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="22" x="1" y="1" rx="3"></svg:rect><svg:path d="M6 6h4v10H6zm8 0h4v6h-4z"></svg:path></svg:g>`,
})
export class MeteorIconsTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTriangleIcon],svg[meteor-icons-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.8 4a2 2 0 0 0-3.6 0Z"></svg:path>`,
})
export class MeteorIconsTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTriangleExclamationIcon],svg[meteor-icons-triangle-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.8 4a2 2 0 0 0-3.6 0Zm10-9v4m0 4"></svg:path>`,
})
export class MeteorIconsTriangleExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTumblrIcon],svg[meteor-icons-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17.5V22h-4a5 5 0 0 1-5-5v-7H7V6.5q3.3-.9 3.5-4.5H14v4h4v4h-4v6.5q0 1 1 1Z"></svg:path>`,
})
export class MeteorIconsTumblrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTurnDownLeftIcon],svg[meteor-icons-turn-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 10l-5 5l5 5M20 4v7a4 4 0 0 1-4 4H4"></svg:path>`,
})
export class MeteorIconsTurnDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTurnDownRightIcon],svg[meteor-icons-turn-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 10l5 5l-5 5M4 4v7a4 4 0 0 0 4 4h12"></svg:path>`,
})
export class MeteorIconsTurnDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTurnLeftDownIcon],svg[meteor-icons-turn-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14 15l-5 5l-5-5M20 4h-7a4 4 0 0 0-4 4v12"></svg:path>`,
})
export class MeteorIconsTurnLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTurnLeftUpIcon],svg[meteor-icons-turn-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9L9 4L4 9m16 11h-7a4 4 0 0 1-4-4V4"></svg:path>`,
})
export class MeteorIconsTurnLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTurnRightDownIcon],svg[meteor-icons-turn-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 15l5 5l5-5M4 4h7a4 4 0 0 1 4 4v12"></svg:path>`,
})
export class MeteorIconsTurnRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTurnRightUpIcon],svg[meteor-icons-turn-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 9l5-5l5 5M4 20h7a4 4 0 0 0 4-4V4"></svg:path>`,
})
export class MeteorIconsTurnRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTurnUpLeftIcon],svg[meteor-icons-turn-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14L4 9l5-5m11 16v-7a4 4 0 0 0-4-4H4"></svg:path>`,
})
export class MeteorIconsTurnUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTurnUpRightIcon],svg[meteor-icons-turn-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 14l5-5l-5-5M4 20v-7a4 4 0 0 1 4-4h12"></svg:path>`,
})
export class MeteorIconsTurnUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTvIcon],svg[meteor-icons-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="15" x="1" y="3" rx="3"></svg:rect><svg:path d="M7 21h10"></svg:path></svg:g>`,
})
export class MeteorIconsTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTvRetroIcon],svg[meteor-icons-tv-retro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="20" height="15" x="2" y="7" rx="3"></svg:rect><svg:path d="m7 2l5 5l5-5"></svg:path></svg:g>`,
})
export class MeteorIconsTvRetroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTwitchIcon],svg[meteor-icons-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 22v-4H3V6l4-4h14v12l-4 4h-5Zm3-15v4m5-4v4"></svg:path>`,
})
export class MeteorIconsTwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsTwitterIcon],svg[meteor-icons-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.5a4.5 4.5 0 0 1 8-3Q22 4 23 3q0 2-2 4A13 13 0 0 1 1 19q5 0 7-2q-8-4-5-13q4 5 9 5Z"></svg:path>`,
})
export class MeteorIconsTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsUnlinkIcon],svg[meteor-icons-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 13l3-3a1 1 0 0 0-7-7l-3 3m-5 5l-3 3a1 1 0 0 0 7 7l3-3M5 5l14 14"></svg:path>`,
})
export class MeteorIconsUnlinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsUploadIcon],svg[meteor-icons-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 8l5-5l5 5m-5 7V3m10 12v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4"></svg:path>`,
})
export class MeteorIconsUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsUploadCloudIcon],svg[meteor-icons-upload-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 17a5 5 0 1 0 0-10A1 1 0 1 0 5 9a1 1 0 0 0 0 8h1m3-3l3-3l3 3m-3 9V11"></svg:path>`,
})
export class MeteorIconsUploadCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsUsdtIcon],svg[meteor-icons-usdt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h14m-7 0v6m0 10v-6M8 9a8 2.7 0 1 0 8 0"></svg:path>`,
})
export class MeteorIconsUsdtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsUserIcon],svg[meteor-icons-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="6" r="4"></svg:circle><svg:path d="M21 22a1 1 0 0 0-18 0Z"></svg:path></svg:g>`,
})
export class MeteorIconsUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVimeoIcon],svg[meteor-icons-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 7.5q9-10 10 1t5 2q1.8-4.1-2.5-3q1.5-5 6.5-5t2 7t-8 10.6t-6.8-3.6t-2.6-8t-2.6.6Z"></svg:path>`,
})
export class MeteorIconsVimeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVinylDiscIcon],svg[meteor-icons-vinyl-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:circle cx="12" cy="12" r="4"></svg:circle></svg:g>`,
})
export class MeteorIconsVinylDiscIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVisualStudioCodeIcon],svg[meteor-icons-visual-studio-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12l5 3.5v-7Zm-8 6l-3-3l3.4-3L1 9l3-3l4 2.9L17 1l6 3v16l-6 3l-9-7.9Z"></svg:path>`,
})
export class MeteorIconsVisualStudioCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVkIcon],svg[meteor-icons-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="22" height="22" x="1" y="1" rx="5"></svg:rect><svg:path d="M7 8.5a7 8 0 0 0 5 7v-7m5 0Q16 11 13 12q3 1 4 3.5M12 12h1"></svg:path></svg:g>`,
})
export class MeteorIconsVkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVolumeHighIcon],svg[meteor-icons-volume-high-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9H2v6h4l5 4V5Zm9 7a5 5 0 0 0 0-8m3 12a10 10 0 0 0 0-16"></svg:path>`,
})
export class MeteorIconsVolumeHighIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVolumeLowIcon],svg[meteor-icons-volume-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9H2v6h4l5 4V5Zm9 7a5 5 0 0 0 0-8"></svg:path>`,
})
export class MeteorIconsVolumeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVolumeOffIcon],svg[meteor-icons-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 9H2v6h4l5 4V5Z"></svg:path>`,
})
export class MeteorIconsVolumeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsVolumeXmarkIcon],svg[meteor-icons-volume-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m16 9l6 6M6 9H2v6h4l5 4V5Zm10 6l6-6"></svg:path>`,
})
export class MeteorIconsVolumeXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWaveIcon],svg[meteor-icons-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12c2 9 8 9 10 0s8-9 10 0"></svg:path>`,
})
export class MeteorIconsWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWaveLinesIcon],svg[meteor-icons-wave-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10v4m3-7v10m3-14v18m3-11v4m3-7v10m3-5"></svg:path>`,
})
export class MeteorIconsWaveLinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWavePulseIcon],svg[meteor-icons-wave-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h4l3 9l6-18l3 9h4"></svg:path>`,
})
export class MeteorIconsWavePulseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWaveSquareIcon],svg[meteor-icons-wave-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h4v8h6V4h6v8h4"></svg:path>`,
})
export class MeteorIconsWaveSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWaveTriangleIcon],svg[meteor-icons-wave-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m2 12l5 7L17 5l5 7"></svg:path>`,
})
export class MeteorIconsWaveTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWhatsappIcon],svg[meteor-icons-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="9" cy="9" r="1"></svg:circle><svg:circle cx="15" cy="15" r="1"></svg:circle><svg:path d="M8 9a7 7 0 0 0 7 7m-9 5.2A11 11 0 1 0 2.8 18L2 22Z"></svg:path></svg:g>`,
})
export class MeteorIconsWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWikipediaIcon],svg[meteor-icons-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h3m3.5 0h3m3 0h3M20 5h3M2.5 5l6 15l6-15m-5 0l6 15l6-15"></svg:path>`,
})
export class MeteorIconsWikipediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWindIcon],svg[meteor-icons-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4a3 3 0 1 1 3 4H2m3 12a3 3 0 1 0 3-4H2m15 0a3 3 0 1 0 3-4H2"></svg:path>`,
})
export class MeteorIconsWindIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWindowsIcon],svg[meteor-icons-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h20m-11.3 8.3V3.7M2 5l20-3v20L2 19Z"></svg:path>`,
})
export class MeteorIconsWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWordpressIcon],svg[meteor-icons-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h5M2.8 8L8 21l4-10M9 8h5m-3.2 0L16 21l3.2-7.5C25 0 14 2 17 7s2.2 6.5 2.2 6.5M8 21l4-10"></svg:path>`,
})
export class MeteorIconsWordpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsXIcon],svg[meteor-icons-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 21l7.5-7.5m3-3L21 3M8 3H3l13 18h5Z"></svg:path>`,
})
export class MeteorIconsXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsXAltIcon],svg[meteor-icons-x-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.5 2a7 7 0 0 0 0 10L7 14.5L1.5 20a7 7 0 0 0 10 0L22 9.5L19.5 7a3.5 3.5 0 0 0-5 0L12 9.5ZM12 19.5l.5.5a7 7 0 0 0 10 0L17 14.5"></svg:path>`,
})
export class MeteorIconsXAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsXmarkIcon],svg[meteor-icons-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"></svg:path>`,
})
export class MeteorIconsXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsYoutubeIcon],svg[meteor-icons-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.5 17q-1-5.5 0-10Q1.9 4.8 4 4.5q8-1 16 0q2.1.3 2.5 2.5q1 4.5 0 10q-.4 2.2-2.5 2.5q-8 1-16 0q-2.1-.3-2.5-2.5m8-8.5v7l6-3.5Z"></svg:path>`,
})
export class MeteorIconsYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[meteorIconsAlarmClockIcon],svg[meteor-icons-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M12 7v5l3 3M1 4l3-3m16 0l3 3"></svg:path></svg:g>`,
})
export class MeteorIconsAlarmClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
