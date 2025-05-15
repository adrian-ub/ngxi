import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMagnetIcon],svg[icon-park-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10V26C6 35.9411 14.0589 44 24 44C33.9411 44 42 35.9411 42 26V10M14 10V26C14 31.5228 18.4772 36 24 36C29.5228 36 34 31.5228 34 26V10"></svg:path><svg:path fill="#2F88FF" d="M14 4H6V10H14V4Z"></svg:path><svg:path fill="#2F88FF" d="M34 4H42V10H34V4Z"></svg:path></svg:g>`,
})
export class IconParkMagnetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMailIcon],svg[icon-park-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 39H44V24V9H24H4V24V39Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 9L24 24L44 9"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 9H4V24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 24V9H24"></svg:path></svg:g>`,
})
export class IconParkMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMailDownloadIcon],svg[icon-park-mail-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 18H4V42H44V18H38"></svg:path><svg:path fill="#2F88FF" d="M38 6H10V22.5L24 33L38 22.5V6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 22.5L24 33L38 22.5M10 22.5V6H38V22.5M10 22.5L4 18M38 22.5L44 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 19L24 24M24 24L29 19M24 24V13"></svg:path></svg:g>`,
})
export class IconParkMailDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMailEditIcon],svg[icon-park-mail-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path fill="#2F88FF" d="M35 39L43 32L39 28L31 35V39H35Z"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path></svg:g>`,
})
export class IconParkMailEditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMailOpenIcon],svg[icon-park-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 18V39.8182C44 41.0232 43.1046 42 42 42H6C4.89543 42 4 41.0232 4 39.8182V18L24 31L44 18Z"></svg:path><svg:path stroke-linecap="round" d="M4 17.7839L24 4L44 17.7839"></svg:path></svg:g>`,
})
export class IconParkMailOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMailPackageIcon],svg[icon-park-mail-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 42H44V30V18H24H4V30V42Z"></svg:path><svg:path stroke-linecap="round" d="M4 18L24 33L44 18"></svg:path><svg:path stroke-linecap="round" d="M24 18H4V33"></svg:path><svg:path stroke-linecap="round" d="M44 33V18H24"></svg:path><svg:path stroke-linecap="round" d="M12 12H36"></svg:path><svg:path stroke-linecap="round" d="M16 6H32"></svg:path></svg:g>`,
})
export class IconParkMailPackageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMailReviewIcon],svg[icon-park-mail-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M44 24V40.8182C44 42.0232 43.1046 43 42 43H6C4.89543 43 4 42.0232 4 40.8182V24L24 37L44 24Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 23.784L14 16.8921M44 23.784L34 16.8921"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 5H14V29.4146C14 30.0916 14.3424 30.7226 14.91 31.0915L22.91 36.2915C23.5728 36.7223 24.4272 36.7223 25.09 36.2915L33.09 31.0915C33.6576 30.7226 34 30.0916 34 29.4146V5Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 13H24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 19H28"></svg:path></svg:g>`,
})
export class IconParkMailReviewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMailUnpackingIcon],svg[icon-park-mail-unpacking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 18V39.8182C44 41.0232 43.1046 42 42 42H6C4.89543 42 4 41.0232 4 39.8182V18L24 34L44 18Z"></svg:path><svg:path stroke-linecap="round" d="M4 17.7839L24 4L44 17.7839"></svg:path><svg:path fill="#2F88FF" d="M34 18H14V26L24 34L34 26V18Z"></svg:path></svg:g>`,
})
export class IconParkMailUnpackingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaillOneIcon],svg[icon-park-maill-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M36 16H12V32H36V16Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M36 16L24 24L12 16"></svg:path></svg:g>`,
})
export class IconParkMaillOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMakeupsIcon],svg[icon-park-makeups-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"></svg:path><svg:path d="M37.6098 9.47214L37.8652 10.2582H38.6917L38.023 10.744L38.2784 11.5301L37.6098 11.0443L36.9411 11.5301L37.1965 10.744L36.5278 10.2582H37.3543L37.6098 9.47214Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 31C16 31 18 35 24 35C30 35 32 31 32 31"></svg:path><svg:circle cx="17" cy="22" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="31" cy="22" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkMakeupsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaleIcon],svg[icon-park-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M41.9517 15.0483V6.04834H32.9517"></svg:path><svg:path fill="#2F88FF" d="M10.4135 38.0007C15.8808 43.4681 24.7451 43.4681 30.2125 38.0007C32.9462 35.2671 34.313 31.6841 34.313 28.1012C34.313 24.5183 32.9462 20.9354 30.2125 18.2017C24.7451 12.7344 15.8808 12.7344 10.4135 18.2017C4.94615 23.6691 4.94615 32.5334 10.4135 38.0007Z"></svg:path><svg:path stroke-linecap="round" d="M30.0002 17.9999L39.9517 8.04838"></svg:path></svg:g>`,
})
export class IconParkMaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMallBagIcon],svg[icon-park-mall-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 12.6001V41.0001C6 42.1047 6.89543 43.0001 8 43.0001H40C41.1046 43.0001 42 42.1047 42 41.0001V12.6001H6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 12.6L36.3333 5H11.6667L6 12.6V12.6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31.5554 19.2002C31.5554 23.3976 28.1727 26.8002 23.9999 26.8002C19.8271 26.8002 16.4443 23.3976 16.4443 19.2002"></svg:path></svg:g>`,
})
export class IconParkMallBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkManualGearIcon],svg[icon-park-manual-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 12V24H8"></svg:path><svg:path d="M24 12V24V36"></svg:path><svg:path d="M8 12V24V36"></svg:path><svg:path fill="#2F88FF" d="M44 8C44 10.2091 42.2091 12 40 12C37.7909 12 36 10.2091 36 8C36 5.79086 37.7909 4 40 4C42.2091 4 44 5.79086 44 8Z"></svg:path><svg:path fill="#2F88FF" d="M28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4C26.2091 4 28 5.79086 28 8Z"></svg:path><svg:path fill="#2F88FF" d="M12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z"></svg:path><svg:path fill="#2F88FF" d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"></svg:path><svg:path fill="#2F88FF" d="M12 40C12 42.2091 10.2091 44 8 44C5.79086 44 4 42.2091 4 40C4 37.7909 5.79086 36 8 36C10.2091 36 12 37.7909 12 40Z"></svg:path><svg:path fill="#2F88FF" d="M40 44C42.2091 44 44 42.2091 44 40C44 37.7909 42.2091 36 40 36C37.7909 36 36 37.7909 36 40C36 42.2091 37.7909 44 40 44Z"></svg:path></svg:g>`,
})
export class IconParkManualGearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkManyToManyIcon],svg[icon-park-many-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 7H6C4.89543 7 4 7.89543 4 9V39C4 40.1046 4.89543 41 6 41H42C43.1046 41 44 40.1046 44 39V9C44 7.89543 43.1046 7 42 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 30V18L38 30V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M10 30V18L18 30V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 20V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 27V28"></svg:path></svg:g>`,
})
export class IconParkManyToManyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMapDistanceIcon],svg[icon-park-map-distance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 27L29 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 33L14 36"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M16 29C18 26.1046 19 24.1046 19 23C19 21.3431 17.6569 20 16 20C14.3431 20 13 21.3431 13 23C13 24.1046 14 26.1046 16 29Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M32 22C34 19.1046 35 17.1046 35 16C35 14.3431 33.6569 13 32 13C30.3431 13 29 14.3431 29 16C29 17.1046 30 19.1046 32 22Z"></svg:path></svg:g>`,
})
export class IconParkMapDistanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMapDrawIcon],svg[icon-park-map-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M17 12L4 6V36L17 42L31 36L44 42V12L31 6L17 12Z"></svg:path><svg:path stroke="#fff" d="M31 6V36"></svg:path><svg:path stroke="#fff" d="M17 12V42"></svg:path><svg:path stroke="#000" d="M10.5 9L17 12L31 6L37.5 9"></svg:path><svg:path stroke="#000" d="M10.5 39L17 42L31 36L37.5 39"></svg:path></svg:g>`,
})
export class IconParkMapDrawIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMapRoadIcon],svg[icon-park-map-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 12L37 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 12L12 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 12V16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 22V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 32V36"></svg:path></svg:g>`,
})
export class IconParkMapRoadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMapRoadTwoIcon],svg[icon-park-map-road-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 4H6C4.89543 4 4 4.89543 4 6V42C4 43.1046 4.89543 44 6 44H42C43.1046 44 44 43.1046 44 42V6C44 4.89543 43.1046 4 42 4Z"></svg:path><svg:path stroke="#fff" d="M10 22L38 12"></svg:path><svg:path stroke="#fff" stroke-dasharray="2 6" d="M10 29L38 19"></svg:path><svg:path stroke="#fff" d="M10 36L38 26"></svg:path><svg:path stroke="#fff" d="M16 19L13 11"></svg:path><svg:path stroke="#fff" d="M37 36L34 28"></svg:path></svg:g>`,
})
export class IconParkMapRoadTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMapTwoIcon],svg[icon-park-map-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 10H4V40H44V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10 16L38 34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 16L24 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 16L10 34"></svg:path></svg:g>`,
})
export class IconParkMapTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMarginIcon],svg[icon-park-margin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M34 6V42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 6V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 42H37"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 42H17"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 6H17"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M30 6H36"></svg:path></svg:g>`,
})
export class IconParkMarginIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMarginOneIcon],svg[icon-park-margin-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 34H42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 14H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 11V17"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 31V37"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 31V37"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 11V17"></svg:path></svg:g>`,
})
export class IconParkMarginOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMarkIcon],svg[icon-park-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M11 6V42"></svg:path><svg:path fill="#2F88FF" d="M11 9H25L32 12H39C40.1046 12 41 12.8954 41 14V31C41 32.1046 40.1046 33 39 33H32L25 30H11V9Z"></svg:path><svg:path stroke-linecap="round" d="M7 42H15"></svg:path></svg:g>`,
})
export class IconParkMarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMarketIcon],svg[icon-park-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M24 3.00018L24.3489 3.00304C35.7257 3.1893 45 12.4679 45 24.074L44.9971 24.424C44.8086 35.8367 35.4189 45.0002 24 45.0002L23.6511 44.9973C12.2743 44.811 3 35.5318 3 24.074C3 12.3495 12.4645 3.00018 24 3.00018ZM38.3795 25.3873L21.0667 29.7236C20.9031 29.7647 20.7389 29.7839 20.5776 29.7839L20.3895 29.775C19.9542 29.7338 19.5478 29.551 19.2294 29.2627L17.5405 35.1412L17.5176 35.2718C17.3081 36.7882 19.0777 38.028 20.9166 37.0902L36.8999 27.9968L37.0914 27.8822C38.2023 27.1817 38.6291 26.2589 38.3795 25.3873ZM17.9799 12.7781C16.7704 11.8506 14.8215 12.7632 14.7143 14.82L14.5981 33.2086C14.5891 34.6499 15.1893 35.5632 16.1184 35.7939L21.0193 18.6333L21.0736 18.4695C21.2962 17.883 21.7718 17.4537 22.337 17.2727L18.091 12.8704L17.9799 12.7781ZM21.0617 11.2795C19.8993 10.6677 18.887 10.7597 18.2574 11.4122L30.6688 24.2365C31.1534 24.7369 31.3249 25.4251 31.1884 26.0586L37.1238 24.5818L37.2594 24.5317C38.667 23.9481 38.8508 21.8041 37.1238 20.6833L21.2568 11.388L21.0617 11.2795Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkMarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMarketAnalysisIcon],svg[icon-park-market-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 11C44 9.34315 42.6569 8 41 8H7C5.34315 8 4 9.34315 4 11V20H44V11Z"></svg:path><svg:path stroke="#000" d="M4.1123 39.0301L16.2879 26.7293L22.8672 33.0301L30.9105 26L35.391 30.368"></svg:path><svg:path stroke="#000" d="M44 18V37C44 38.6569 42.6569 40 41 40H12"></svg:path><svg:path stroke="#fff" d="M19.1118 14H37.1118"></svg:path><svg:path stroke="#fff" d="M11.1108 14H13.1108"></svg:path><svg:path stroke="#000" d="M4 18V27"></svg:path></svg:g>`,
})
export class IconParkMarketAnalysisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMascaraIcon],svg[icon-park-mascara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="12" height="28" x="28" y="16" stroke="#000" stroke-linejoin="round"></svg:rect><svg:rect width="12" height="16" x="8" y="28" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:rect><svg:path stroke="#000" stroke-linejoin="round" d="M14 4V28"></svg:path><svg:path stroke="#fff" d="M20 36H8"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M20 32V40"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M8 32V40"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M18 9H10"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M20 15L8 15"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M18 21H10"></svg:path></svg:g>`,
})
export class IconParkMascaraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaskIcon],svg[icon-park-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M14 14H34C39.5228 14 44 18.4772 44 24V27C44 34.1797 38.1797 40 31 40H24H17C9.8203 40 4 34.1797 4 27V24C4 18.4772 8.47715 14 14 14Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 27H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 21V33"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 25.0421V12.0145C4.00003 9.7124 5.86624 7.84619 8.16833 7.84619C9.24067 7.84619 10.2718 8.25946 11.0472 9.00009C12.6463 10.5273 13.7875 12.194 14.4707 14.0002"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M44 25.0421V12.7656C44 10.2925 41.9952 8.2876 39.522 8.2876C38.1474 8.2876 36.8489 8.91898 36 10.0002C34.9552 11.3308 33.9552 12.6641 33 14.0002"></svg:path></svg:g>`,
})
export class IconParkMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaskOneIcon],svg[icon-park-mask-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M7.36573 16.3443C6.48571 18.7024 6 21.2881 6 23.9998C6 26.7115 6.48571 29.2971 7.36573 31.6552M11.2721 38.1419C12.9301 39.9841 14.91 41.4686 17.1101 42.4823C19.2324 43.4601 21.5595 43.9998 24 43.9998C26.4405 43.9998 28.7676 43.4601 30.8899 42.4823C33.09 41.4686 35.0699 39.9841 36.7279 38.1419M40.6343 31.6552C41.5143 29.2971 42 26.7115 42 23.9998C42 21.2881 41.5143 18.7024 40.6343 16.3443M36.7279 9.85762C35.0699 8.01539 33.09 6.53089 30.8899 5.51723C28.7676 4.53943 26.4405 3.99976 24 3.99976C19.0294 3.99976 14.5294 6.23833 11.2721 9.85762"></svg:path><svg:path fill="#2F88FF" d="M18 22.9998C19.6569 22.9998 21 21.6566 21 19.9998C21 18.3429 19.6569 16.9998 18 16.9998C16.3431 16.9998 15 18.3429 15 19.9998C15 21.6566 16.3431 22.9998 18 22.9998Z"></svg:path><svg:path fill="#2F88FF" d="M30 22.9998C31.6569 22.9998 33 21.6566 33 19.9998C33 18.3429 31.6569 16.9998 30 16.9998C28.3431 16.9998 27 18.3429 27 19.9998C27 21.6566 28.3431 22.9998 30 22.9998Z"></svg:path><svg:path fill="#2F88FF" d="M24 34.9998C26.7614 34.9998 29 33.6566 29 31.9998C29 30.3429 26.7614 28.9998 24 28.9998C21.2386 28.9998 19 30.3429 19 31.9998C19 33.6566 21.2386 34.9998 24 34.9998Z"></svg:path></svg:g>`,
})
export class IconParkMaskOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaskTwoIcon],svg[icon-park-mask-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 5.25928C23.4067 8.09675 18 15.417 18 24.0001C18 32.5831 23.4067 39.9034 31 42.7408"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 9L18 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41 14L19 29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 20L22 35"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 28L26 40"></svg:path></svg:g>`,
})
export class IconParkMaskTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaslowPyramidsIcon],svg[icon-park-maslow-pyramids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linejoin="round" d="M24 4L15 19.9803H33L24 4Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 19.9805L24.0083 44.0001"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.3466 25.9746L1.99998 42.0001H17.0045"></svg:path><svg:path stroke-linecap="round" d="M9.10008 30.9951H17.0044"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36.7477 25.9746L46.0943 42.0001H31"></svg:path><svg:path stroke-linecap="round" d="M39.0943 30.9951H31.1002"></svg:path></svg:g>`,
})
export class IconParkMaslowPyramidsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMassageChairIcon],svg[icon-park-massage-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M18 24V15.6522C18 14.4348 19.2 12 24 12C28.8 12 30 14.4348 30 15.6522V24"></svg:path><svg:path stroke="#fff" d="M16 24V30H32V24"></svg:path><svg:path stroke="#fff" d="M12 20V24H36V20"></svg:path><svg:path stroke="#fff" d="M18 36L30 36"></svg:path><svg:path stroke="#fff" d="M24 30V36"></svg:path></svg:g>`,
})
export class IconParkMassageChairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMassageChairOneIcon],svg[icon-park-massage-chair-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15 28V15.6522C15 13 18 10 24 10C30 10 33 13 33 15.6522V28"></svg:path><svg:path fill="#2F88FF" d="M12 34V28H36V34H12Z"></svg:path><svg:path d="M20 4H28"></svg:path><svg:path d="M8 16V28H40V16"></svg:path><svg:path d="M17 43L31 43"></svg:path><svg:path d="M24 34V43"></svg:path><svg:path d="M24 4V10"></svg:path></svg:g>`,
})
export class IconParkMassageChairOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMassageTableIcon],svg[icon-park-massage-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M14 17C14 15.8954 14.8954 15 16 15H42C43.1046 15 44 15.8954 44 17V23H14V17Z"></svg:path><svg:path stroke-linecap="round" d="M26 23L14 37"></svg:path><svg:path stroke-linecap="round" d="M32 23L44 37"></svg:path><svg:path stroke-linecap="round" d="M14 23L6 23"></svg:path><svg:path stroke-linecap="round" d="M39 31L19 31"></svg:path><svg:path stroke-linecap="round" d="M6 13V23"></svg:path><svg:path stroke-linecap="round" d="M14 23V40"></svg:path><svg:path stroke-linecap="round" d="M44 23V40"></svg:path><svg:path stroke-linecap="round" d="M9 14L3 12"></svg:path></svg:g>`,
})
export class IconParkMassageTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMasterIcon],svg[icon-park-master-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 38V6C38 4.89543 37.1046 4 36 4H12C10.8954 4 10 4.89543 10 6V38"></svg:path><svg:rect width="28" height="12" x="10" y="32" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="6"></svg:rect><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M20 16L24 12L28 16L32 12L29 23H19L16 12L20 16Z"></svg:path><svg:circle cx="32" cy="38" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkMasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaterialIcon],svg[icon-park-material-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 36C30.6274 36 36 30.6274 36 24"></svg:path></svg:g>`,
})
export class IconParkMaterialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaterialThreeIcon],svg[icon-park-material-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 15V9.56389C9 8.67237 9.08702 8.34908 9.25044 8.02315C9.41385 7.69723 9.65365 7.44144 9.95921 7.26713C10.2648 7.09283 10.5678 7 11.4036 7H36.5964C37.4322 7 37.7352 7.09283 38.0408 7.26713C38.3463 7.44144 38.5862 7.69723 38.7496 8.02315C38.913 8.34908 39 8.67237 39 9.56389V15"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5 15H43V41H5V15Z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 26C14.6569 26 16 24.6569 16 23C16 21.3431 14.6569 20 13 20C11.3431 20 10 21.3431 10 23C10 24.6569 11.3431 26 13 26Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5.56934 40.39L15.0004 30L20.0004 34L26.0004 27L42.3941 40.39"></svg:path></svg:g>`,
})
export class IconParkMaterialThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaterialTwoIcon],svg[icon-park-material-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 36C30.6274 36 36 30.6274 36 24"></svg:path></svg:g>`,
})
export class IconParkMaterialTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMaximumIcon],svg[icon-park-maximum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 4V44H44"></svg:path><svg:path d="M10 38C10 38 15.3125 4 27 4C38.6875 4 44 38 44 38"></svg:path><svg:path stroke-dasharray="2 6" d="M10 4L44 4"></svg:path></svg:g>`,
})
export class IconParkMaximumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMayaIcon],svg[icon-park-maya-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="8" x="4" y="34" stroke-linejoin="round"></svg:rect><svg:rect width="34" height="7" x="7" y="27" stroke-linejoin="round"></svg:rect><svg:rect width="28" height="6" x="10" y="21" stroke-linejoin="round"></svg:rect><svg:rect width="22" height="6" x="13" y="15" stroke-linejoin="round"></svg:rect><svg:rect width="8" height="8" x="20" y="7" stroke-linejoin="round"></svg:rect><svg:path d="M20 15L14 42"></svg:path><svg:path d="M28 15L34 42"></svg:path></svg:g>`,
})
export class IconParkMayaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMayuraGestureIcon],svg[icon-park-mayura-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20.9951 36L19.0937 31.9908L24.2032 31.5728C26.2913 31.5728 27.984 29.8795 27.984 27.7906C27.984 25.7017 26.2913 24.0083 24.2032 24.0083C20.4565 24.0083 17.7211 24.0083 15.9972 24.0083C12.6087 24.0083 9 27.584 9 31.0421C9 34.5003 9.78742 36.4809 10.6467 38.3387C11.506 40.1966 13.7968 44 20.0016 44C23.986 44 23.4272 44 28.9545 44C34.2029 44 38 39.1454 37.987 33C37.9789 29.1696 37.9814 23.5029 37.9944 16C37.9973 14.3482 36.6606 13.0068 35.0088 13.0039L35.0036 13.0039C33.3521 13.0039 32.0134 14.3427 32.0134 15.9942C32.0134 15.9962 32.0134 15.9982 32.0134 16.0002C32.0238 21.141 32.029 24.1579 32.029 25.051C32.029 27.9448 30.6885 28.9421 28.0074 28.0431M25.9546 24L25.9945 6.99998C25.9984 5.34703 24.6616 4.00389 23.0086 4.00001C23.0063 4 23.0039 4 23.0016 4C21.3447 4 20.0016 5.34314 20.0016 6.99999V23.0401"></svg:path><svg:path d="M14.0059 24.0002V10.0002C14.0059 8.34567 15.3471 7.00439 17.0017 7.00439C17.0031 7.00439 17.0045 7.0044 17.0059 7.0044C18.6634 7.0067 20.0059 8.35105 20.0059 10.0086V24.0002"></svg:path><svg:path d="M26.0073 20.0195V19.0195C26.0073 17.3627 27.3505 16.0195 29.0073 16.0195C30.6642 16.0195 32.0073 17.3627 32.0073 19.0195V20.0195"></svg:path></svg:g>`,
})
export class IconParkMayuraGestureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMeIcon],svg[icon-park-me-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M24 23C26.7614 23 29 20.7614 29 18C29 15.2386 26.7614 13 24 13C21.2386 13 19 15.2386 19 18C19 20.7614 21.2386 23 24 23Z"></svg:path><svg:path stroke-linecap="round" d="M10.022 38.332C10.3657 33.1206 14.7016 29 20 29H28C33.2914 29 37.6229 33.1097 37.9767 38.3113"></svg:path></svg:g>`,
})
export class IconParkMeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMeasuringCupIcon],svg[icon-park-measuring-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M36 6H43.9996L42.0641 20H36"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M8.99939 6H35.9996V40C35.9996 41.1046 35.1042 42 33.9996 42H10.9993C9.89478 42 8.99936 41.1046 8.99932 40.0001L8.9986 16.4999C8.99857 15.5557 8.55544 14.672 7.8388 14.0572C5.14776 11.7488 -0.590926 6 8.99939 6Z"></svg:path><svg:path stroke="#fff" d="M26 15H30"></svg:path><svg:path stroke="#fff" d="M26 23H30"></svg:path><svg:path stroke="#fff" d="M26 31H30"></svg:path></svg:g>`,
})
export class IconParkMeasuringCupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMedalOneIcon],svg[icon-park-medal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6 6L16 18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M42 6L32 18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M31 4L26 16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M17 4L22 16"></svg:path><svg:circle cx="24" cy="30" r="14" fill="#2F88FF" stroke="#000"></svg:circle><svg:circle cx="24" cy="30" r="7" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkMedalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMediaeditorIcon],svg[icon-park-mediaeditor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M35 32.1333V34C35 35.6569 33.6569 37 32 37H7C5.34315 37 4 35.6569 4 34V31.1333L44 12"></svg:path><svg:path d="M35 15.8667V14C35 12.3431 33.6569 11 32 11H7C5.34315 11 4 12.3431 4 14V16.8667L44 36"></svg:path></svg:g>`,
})
export class IconParkMediaeditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicalBoxIcon],svg[icon-park-medical-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 17H7C5.89543 17 5 17.8954 5 19L5.00003 39C5.00003 40.1046 5.89546 41 7.00002 41H41C42.1046 41 43 40.1046 43 39V19C43 17.8954 42.1046 17 41 17Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M34 7H14L14 17H34V7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 29H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V34"></svg:path></svg:g>`,
})
export class IconParkMedicalBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicalFilesIcon],svg[icon-park-medical-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 42H19H15H9C7.89543 42 7 41.1046 7 40V8C7 6.89543 7.89543 6 9 6H37C38.1046 6 39 6.89543 39 8V15V19.5"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M36.6364 27C39.0463 27 41 28.8804 41 31.2C41 34.2196 38.0909 36.8 36.6364 38.2C35.6667 39.1333 34.4545 40.0667 33 41C31.5455 40.0667 30.3333 39.1333 29.3636 38.2C27.9091 36.8 25 34.2196 25 31.2C25 28.8804 26.9537 27 29.3636 27C30.8814 27 32.2182 27.7459 33 28.8775C33.7818 27.7459 35.1186 27 36.6364 27Z"></svg:path><svg:path stroke-linecap="round" d="M15 14H31"></svg:path></svg:g>`,
})
export class IconParkMedicalFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicalMarkIcon],svg[icon-park-medical-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16 15C16 13.3431 17.3431 12 19 12H37C38.6569 12 40 13.3431 40 15V33C40 34.6569 38.6569 36 37 36H19C17.3431 36 16 34.6569 16 33V15Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 4L8 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 19L16 19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 29L16 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 24L34 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 18V30"></svg:path></svg:g>`,
})
export class IconParkMedicalMarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicationTimeIcon],svg[icon-park-medication-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="24" height="10" x="9" y="5" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="4"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 5V13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M15 5V13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 5V13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M27 40H8C6.89543 40 6 39.1046 6 38V17C6 15.8954 6.89543 15 8 15H34C35.1046 15 36 15.8954 36 17V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M34 32V36H38"></svg:path><svg:circle cx="35" cy="35" r="9" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 5L29 5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 15L29 15"></svg:path></svg:g>`,
})
export class IconParkMedicationTimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicineBottleIcon],svg[icon-park-medicine-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M34 10H14C12.8954 10 12 10.8954 12 12L12 42C12 43.1046 12.8954 44 14 44H34C35.1046 44 36 43.1046 36 42V12C36 10.8954 35.1046 10 34 10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 18H36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 15V21"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36 15V21"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M32 4H16L16 10H32V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 31H28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 27V35"></svg:path></svg:g>`,
})
export class IconParkMedicineBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicineBottleOneIcon],svg[icon-park-medicine-bottle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M13 7C13 5.34315 14.3431 4 16 4H32C33.6569 4 35 5.34315 35 7C35 8.65685 33.6569 10 32 10H16C14.3431 10 13 8.65685 13 7Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M13.0993 17.1208C13.6688 16.4122 14.5288 16 15.4379 16H32.5621C33.4712 16 34.3312 16.4122 34.9007 17.1208L39.3385 22.6435C39.7666 23.1763 40 23.8392 40 24.5227V41C40 42.6569 38.6569 44 37 44H11C9.34315 44 8 42.6569 8 41V24.5227C8 23.8392 8.23337 23.1763 8.66147 22.6435L13.0993 17.1208Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 30L30 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V36"></svg:path></svg:g>`,
})
export class IconParkMedicineBottleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMedicineChestIcon],svg[icon-park-medicine-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="26" x="5" y="16" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path fill="#000" d="M19 8H29V4H19V8ZM30 9V16H34V9H30ZM18 16V9H14V16H18ZM29 8C29.5523 8 30 8.44772 30 9H34C34 6.23858 31.7614 4 29 4V8ZM19 4C16.2386 4 14 6.23858 14 9H18C18 8.44772 18.4477 8 19 8V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 29L30 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 23V35"></svg:path></svg:g>`,
})
export class IconParkMedicineChestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMemoryIcon],svg[icon-park-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V13.6095C40 13.07 39.782 12.5533 39.3954 12.1768L31.5824 4.56725C31.209 4.20354 30.7083 4 30.187 4H10C8.89543 4 8 4.89543 8 6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 21L8 21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 29H30"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 36H30"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 44L30 21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 44L18 21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 33L8 33"></svg:path></svg:g>`,
})
export class IconParkMemoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMemoryCardIcon],svg[icon-park-memory-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 40H8C6.89543 40 6 39.1046 6 38V19.1056C6 18.7107 6.11688 18.3247 6.3359 17.9962L12.4063 8.8906C12.7772 8.3342 13.4017 8 14.0704 8H40C41.1046 8 42 8.89543 42 10V38C42 39.1046 41.1046 40 40 40Z"></svg:path><svg:path d="M18 16L18 8"></svg:path><svg:path d="M24 16L24 8"></svg:path><svg:path d="M30 16L30 8"></svg:path><svg:path d="M36 16L36 8"></svg:path><svg:path fill="#2F88FF" d="M15 28H33V40H15V28Z"></svg:path></svg:g>`,
})
export class IconParkMemoryCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMemoryCardOneIcon],svg[icon-park-memory-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9C6 7.34315 7.34315 6 9 6H30.3363C31.132 6 31.895 6.31607 32.4576 6.87868L36.3158 10.7368L41.1213 15.5424C41.6839 16.105 42 16.868 42 17.6637V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z"></svg:path><svg:path fill="#2F88FF" d="M31 26H17C15.3431 26 14 27.3431 14 29V42H34V29C34 27.3431 32.6569 26 31 26Z"></svg:path><svg:path stroke-linecap="round" d="M29 16H17C15.3431 16 14 14.6569 14 13V6"></svg:path></svg:g>`,
})
export class IconParkMemoryCardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMemoryOneIcon],svg[icon-park-memory-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="14" x="5" y="28" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="38" height="14" x="5" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="4" height="4" x="11" y="11" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="11" y="33" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="19" y="11" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="19" y="33" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 13H35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 35H35"></svg:path></svg:g>`,
})
export class IconParkMemoryOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMenJacketIcon],svg[icon-park-men-jacket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10L18 4H30L42 10L40 35H34V44H24H14V35H8L6 10Z"></svg:path><svg:path d="M14 35L14 20"></svg:path><svg:path d="M34 35V20"></svg:path><svg:path d="M24 10C27.3137 10 30 7.31371 30 4H18C18 7.31371 20.6863 10 24 10Z"></svg:path></svg:g>`,
})
export class IconParkMenJacketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMenuFoldIcon],svg[icon-park-menu-fold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 11H40"></svg:path><svg:path d="M8 24H40"></svg:path><svg:path d="M8 37H40"></svg:path><svg:path d="M13.6568 29.6568L8 23.9999L13.6568 18.343"></svg:path></svg:g>`,
})
export class IconParkMenuFoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMenuFoldOneIcon],svg[icon-park-menu-fold-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 10.5H40"></svg:path><svg:path stroke-linecap="round" d="M24 19.5H40"></svg:path><svg:path stroke-linecap="round" d="M24 28.5H40"></svg:path><svg:path stroke-linecap="round" d="M8 37.5H40"></svg:path><svg:path fill="#2F88FF" d="M8 19L16 24L8 29V19Z"></svg:path></svg:g>`,
})
export class IconParkMenuFoldOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMenuUnfoldIcon],svg[icon-park-menu-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 11H40"></svg:path><svg:path d="M8 24H42"></svg:path><svg:path d="M8 37H40"></svg:path><svg:path d="M36.3433 29.6568L42.0001 23.9999L36.3433 18.343"></svg:path></svg:g>`,
})
export class IconParkMenuUnfoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMenuUnfoldOneIcon],svg[icon-park-menu-unfold-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 10.5H40"></svg:path><svg:path stroke-linecap="round" d="M24 19.5H40"></svg:path><svg:path stroke-linecap="round" d="M24 28.5H40"></svg:path><svg:path stroke-linecap="round" d="M8 37.5H40"></svg:path><svg:path fill="#2F88FF" d="M16 19L8 24L16 29V19Z"></svg:path></svg:g>`,
})
export class IconParkMenuUnfoldOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMergeIcon],svg[icon-park-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="22" x="4" y="24" rx="2" transform="rotate(-45 4 24)"></svg:rect><svg:rect width="20" height="20" x="16" y="24" rx="2" transform="rotate(-45 16 24)"></svg:rect></svg:g>`,
})
export class IconParkMergeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMergeCellsIcon],svg[icon-park-merge-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M20 14V5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5V43C4 43.5523 4.44772 44 5 44H19C19.5523 44 20 43.5523 20 43V34"></svg:path><svg:path d="M28 34V43C28 43.5523 28.4477 44 29 44H43C43.5523 44 44 43.5523 44 43V5C44 4.44772 43.5523 4 43 4H29C28.4477 4 28 4.44772 28 5V14"></svg:path><svg:path d="M28 24H44"></svg:path><svg:path d="M5 24H20"></svg:path><svg:path stroke-linejoin="round" d="M32.7485 28.8184L31.1575 27.2274L27.9756 24.0454L31.1575 20.8634L32.7485 19.2724"></svg:path><svg:path stroke-linejoin="round" d="M15.375 28.8184L16.966 27.2274L20.148 24.0454L16.966 20.8634L15.375 19.2724"></svg:path></svg:g>`,
})
export class IconParkMergeCellsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageIcon],svg[icon-park-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"></svg:path><svg:path stroke="#fff" d="M14 18L32 18"></svg:path><svg:path stroke="#fff" d="M14 26H32"></svg:path><svg:path stroke="#fff" d="M14 34H24"></svg:path></svg:g>`,
})
export class IconParkMessageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageEmojiIcon],svg[icon-park-message-emoji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 7H4V37H11V42L21 37H44V7Z"></svg:path><svg:path stroke="#fff" d="M31 16V17"></svg:path><svg:path stroke="#fff" d="M17 16V17"></svg:path><svg:path stroke="#fff" d="M31 25C31 25 29 29 24 29C19 29 17 25 17 25"></svg:path></svg:g>`,
})
export class IconParkMessageEmojiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageFailedIcon],svg[icon-park-message-failed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 37H21L11 42V37H4V7H44V18"></svg:path><svg:path d="M12 15H15L18 15"></svg:path><svg:path d="M12 21H18L24 21"></svg:path><svg:path d="M32 25L44 37"></svg:path><svg:path d="M44 25L32 37"></svg:path></svg:g>`,
})
export class IconParkMessageFailedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageOneIcon],svg[icon-park-message-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 6H44V36H29L24 41L19 36H4V6Z"></svg:path><svg:path stroke="#fff" d="M23 21H25.0025"></svg:path><svg:path stroke="#fff" d="M33.001 21H34.9999"></svg:path><svg:path stroke="#fff" d="M13.001 21H14.9999"></svg:path></svg:g>`,
})
export class IconParkMessageOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessagePrivacyIcon],svg[icon-park-message-privacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 37H21L11 42V37H4V7H44V18"></svg:path><svg:rect width="14" height="8" x="30" y="27" fill="#2F88FF"></svg:rect><svg:path d="M40 27V24C40 22.3431 38.6569 21 37 21C35.3431 21 34 22.3431 34 24V27"></svg:path><svg:path d="M12 15H15L18 15"></svg:path><svg:path d="M12 21H18L24 21"></svg:path></svg:g>`,
})
export class IconParkMessagePrivacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageSearchIcon],svg[icon-park-message-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25.5 37H21L11 42V37H4V7H44V18"></svg:path><svg:circle cx="34" cy="28" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 32L44 36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15H15L18 15"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 21H18L24 21"></svg:path></svg:g>`,
})
export class IconParkMessageSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageSecurityIcon],svg[icon-park-message-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 37H21L11 42V37H4V7H44V18"></svg:path><svg:path fill="#2F88FF" d="M29 25.2C29 24.1333 36 22 36 22C36 22 43 24.1333 43 25.2C43 33.7333 36 38 36 38C36 38 29 33.7333 29 25.2Z"></svg:path><svg:path d="M12 15H15L18 15"></svg:path><svg:path d="M12 21H18L24 21"></svg:path></svg:g>`,
})
export class IconParkMessageSecurityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageSentIcon],svg[icon-park-message-sent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 24C44 35.0457 35.0457 44 24 44C18.0265 44 4 44 4 44C4 44 4 29.0722 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"></svg:path><svg:path stroke="#fff" d="M13.9999 26L20 32L33 19"></svg:path></svg:g>`,
})
export class IconParkMessageSentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageSuccessIcon],svg[icon-park-message-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.5 36H21L11 41V36H4V6H44V17"></svg:path><svg:path d="M12 14H15L18 14"></svg:path><svg:path d="M12 20H18L24 20"></svg:path><svg:path d="M29 30L35 35L44 24"></svg:path></svg:g>`,
})
export class IconParkMessageSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessageUnreadIcon],svg[icon-park-message-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 16V36H29L24 41L19 36H4V6H34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M23 20H25.0025"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M33.001 20H34.9999"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M13.001 20H14.9999"></svg:path><svg:circle cx="43" cy="7" r="3" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkMessageUnreadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessagesIcon],svg[icon-park-messages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M35 23C35 28.5229 30.5229 33 25 33C22.0133 33 15 33 15 33C15 33 15 25.5361 15 23C15 17.4771 19.4771 13 25 13C30.5229 13 35 17.4771 35 23Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 21H28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 27H24"></svg:path></svg:g>`,
})
export class IconParkMessagesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMessagesOneIcon],svg[icon-park-messages-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M34 23C34 26.8624 31.2967 30.1565 27.5 31.4334C26.4107 31.7997 25.2313 32 24 32C20 32 15 34 15 34L16.1323 31.5543C16.6952 30.3384 16.336 28.9248 15.5616 27.8314C14.5729 26.4356 14 24.778 14 23C14 18.0294 18.4772 14 24 14C29.5228 14 34 18.0294 34 23Z"></svg:path></svg:g>`,
})
export class IconParkMessagesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMicroSdIcon],svg[icon-park-micro-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M13 7C13 5.89543 13.8954 5 15 5H37C38.1046 5 39 5.89543 39 7V41C39 42.1046 38.1046 43 37 43H10C8.89543 43 8 42.1046 8 41V36L13 32V28H8V25L13 19V7Z"></svg:path><svg:path stroke="#fff" d="M32 11V15"></svg:path><svg:path stroke="#fff" d="M20 11V15"></svg:path><svg:path stroke="#fff" d="M26 11V15"></svg:path></svg:g>`,
})
export class IconParkMicroSdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMicroSlrCameraIcon],svg[icon-park-micro-slr-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M44 26C44 28.6393 43.2696 31.1081 42 33.2152C40.8198 35.1737 39.1737 36.8198 37.2152 38C35.1081 39.2696 32.6393 40 30 40C27.3607 40 24.8919 39.2696 22.7848 38C18.7192 35.5502 16 31.0927 16 26C16 20.9073 18.7192 16.4498 22.7848 14C24.8919 12.7304 27.3607 12 30 12C32.6393 12 35.1081 12.7304 37.2152 14C39.1737 15.1802 40.8198 16.8263 42 18.7848C43.2696 20.8919 44 23.3607 44 26Z"></svg:path><svg:path fill="#2F88FF" d="M4 14V38H22.7848C18.7192 35.5502 16 31.0927 16 26C16 20.9073 18.7192 16.4498 22.7848 14H4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37.2152 14C35.1081 12.7304 32.6393 12 30 12C27.3607 12 24.8919 12.7304 22.7848 14M37.2152 14H42V18.7848M37.2152 14C39.1737 15.1802 40.8198 16.8263 42 18.7848M22.7848 14H4V38H22.7848M22.7848 14C18.7192 16.4498 16 20.9073 16 26C16 31.0927 18.7192 35.5502 22.7848 38M37.2152 38C35.1081 39.2696 32.6393 40 30 40C27.3607 40 24.8919 39.2696 22.7848 38M37.2152 38H42V33.2152M37.2152 38C39.1737 36.8198 40.8198 35.1737 42 33.2152M42 18.7848C43.2696 20.8919 44 23.3607 44 26C44 28.6393 43.2696 31.1081 42 33.2152"></svg:path><svg:rect width="9" height="5" x="8" y="9" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 22V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 26C36 29.3137 33.3137 32 30 32M24 26C24 22.6863 26.6863 20 30 20"></svg:path></svg:g>`,
})
export class IconParkMicroSlrCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMicrophoneIcon],svg[icon-park-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="16" height="28" x="16" y="4" stroke-linecap="round" stroke-linejoin="round" rx="8"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 21V24C10 31.732 16.268 38 24 38V38C31.732 38 38 31.732 38 24V21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 5V11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 16H21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 16H32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 22H21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 22H32"></svg:path><svg:path d="M24 38V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 44H32"></svg:path></svg:g>`,
})
export class IconParkMicrophoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMicrophoneOneIcon],svg[icon-park-microphone-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M15 26.3137C15 26.3137 19.5962 25.9602 22.7782 22.7782C25.9601 19.5962 26.3137 15 26.3137 15L34.0657 27.1817C35.3205 29.1535 35.0374 31.7322 33.3848 33.3848C31.7322 35.0374 29.1535 35.3205 27.1817 34.0657L15 26.3137Z"></svg:path><svg:circle cx="15" cy="15" r="11"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5.65674 25.4561L25.4557 5.65707"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 33L42 41L33 41"></svg:path></svg:g>`,
})
export class IconParkMicrophoneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMicroscopeIcon],svg[icon-park-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M26 44C30.3462 40.9919 32.6627 37.9513 32.9493 34.8782C33.2359 31.805 32.308 29.5123 30.1657 28"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M27.6553 28.2227C30.1406 28.2227 32.1553 26.2079 32.1553 23.7227C32.1553 21.2374 30.1406 19.2227 27.6553 19.2227C25.17 19.2227 23.1553 21.2374 23.1553 23.7227C23.1553 26.2079 25.17 28.2227 27.6553 28.2227Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24.2882 27L18.7783 32.5772L9.58594 23.3848L27.9707 4.99999L37.1631 14.1924L30.9764 20.3791"></svg:path><svg:path stroke-linecap="round" d="M6.55762 28.1357L14.4195 35.8141"></svg:path><svg:path stroke-linecap="round" d="M6 44H42"></svg:path></svg:g>`,
})
export class IconParkMicroscopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMicroscopeOneIcon],svg[icon-park-microscope-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M29.0026 18.3733L30.1075 17.2685L30.6378 16.7381C32.7857 14.5902 32.7857 11.1078 30.6378 8.95995V8.95995C28.4899 6.81207 25.0075 6.81207 22.8596 8.95995L9.17206 22.6475C9.11627 22.7033 9.11627 22.7938 9.17206 22.8496L16.1421 29.8196C16.5326 30.2101 17.1658 30.2101 17.5563 29.8196L21.2686 26.1073L22.3735 25.0024"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M28.1628 6.48535L29.9306 4.71758C31.2974 3.35075 33.5135 3.35075 34.8804 4.71758C36.2472 6.08442 36.2472 8.3005 34.8804 9.66733L33.1126 11.4351L28.1628 6.48535Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.4854 24.1631L6.24271 28.4057L11.1925 33.3555L15.4351 29.1128L10.4854 24.1631Z"></svg:path><svg:circle cx="26.041" cy="22.042" r="4.5" fill="#2F88FF" transform="rotate(45 26.041 22.042)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 20L18.7279 32.7279"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 44H42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 22C35 22 39 26 39 32C39 38.4 33.8333 41.8333 31 44"></svg:path></svg:g>`,
})
export class IconParkMicroscopeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMicrowaveOvenIcon],svg[icon-park-microwave-oven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="30" x="4" y="6" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38.0002 15H34.0002"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 21H34"></svg:path><svg:rect width="17" height="12" x="10" y="15" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:circle cx="36" cy="27" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 36V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 36V42"></svg:path></svg:g>`,
})
export class IconParkMicrowaveOvenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMicrowavesIcon],svg[icon-park-microwaves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="24" height="38" x="5" y="34" stroke="#000" stroke-width="4" rx="2" transform="rotate(-90 5 34)"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 19H24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 25L35 25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 34L12 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 34L20 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 34L28 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 34L36 38"></svg:path><svg:path fill="#000" d="M15 19C15 20.1046 14.1046 21 13 21C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17C14.1046 17 15 17.8954 15 19Z"></svg:path></svg:g>`,
})
export class IconParkMicrowavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMiddleFingerIcon],svg[icon-park-middle-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M14.9718 26.9745C11.6511 27.5662 9.99072 29.5748 9.99072 33.0002C9.99072 38.1383 15.1438 44.0002 19.7905 44.0002C24.4372 44.0002 27.1321 44.0002 31.6802 44.0002C36.2283 44.0002 38.9907 40.1496 38.9907 37.0603C38.9907 32.7099 38.9907 28.3596 38.9907 24.0093C38.9907 22.3524 37.6476 21.0093 35.9907 21.0093H35.9816C34.3298 21.0093 32.9907 22.3484 32.9907 24.0002"></svg:path><svg:path d="M14.9717 30.0401V21.013C14.9717 19.3546 16.3161 18.0103 17.9744 18.0103C17.9755 18.0103 17.9765 18.0103 17.9775 18.0103C19.6381 18.012 20.9834 19.3586 20.9834 21.0192V25.0229"></svg:path><svg:path stroke-linejoin="round" d="M20.9834 24.0083V7.01549C20.9834 5.35008 22.3335 4 23.9989 4C25.6643 4 27.0144 5.35008 27.0144 7.01549V24.0083"></svg:path><svg:path stroke-linejoin="round" d="M26.9907 23.7158V21.0034C26.9907 19.3466 28.3339 18.0034 29.9907 18.0034C31.6476 18.0034 32.9907 19.3466 32.9907 21.0034V24.0034"></svg:path></svg:g>`,
})
export class IconParkMiddleFingerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMilkIcon],svg[icon-park-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 19.5736C12 19.1988 12.1053 18.8315 12.304 18.5136L17 11H31L35.696 18.5136C35.8947 18.8315 36 19.1988 36 19.5736V42C36 43.1046 35.1046 44 34 44H14C12.8954 44 12 43.1046 12 42V19.5736Z"></svg:path><svg:path stroke="#fff" d="M19 33V24L24 30L29 24V33"></svg:path><svg:path stroke="#000" d="M17 4H31V11H17V4Z"></svg:path></svg:g>`,
})
export class IconParkMilkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMilkOneIcon],svg[icon-park-milk-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="26" height="22" x="6" y="22" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M14 38V28L19 34L24 28V38"></svg:path><svg:path stroke="#000" d="M42 20L30 10"></svg:path><svg:path stroke="#000" d="M20 6V12L30 10V4L20 6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M32 22L42 20V41L32 44V22Z"></svg:path><svg:path stroke="#000" d="M19.4815 12L6 22H32L19.4815 12Z"></svg:path></svg:g>`,
})
export class IconParkMilkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMinIcon],svg[icon-park-min-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 4V44H44"></svg:path><svg:path d="M10 4C10 4 15.3125 38 27 38C38.6875 38 44 4 44 4"></svg:path><svg:path stroke-dasharray="2 6" d="M10 38L44 38"></svg:path></svg:g>`,
})
export class IconParkMinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMindMappingIcon],svg[icon-park-mind-mapping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M8 28C10.2091 28 12 26.2091 12 24C12 21.7909 10.2091 20 8 20C5.79086 20 4 21.7909 4 24C4 26.2091 5.79086 28 8 28Z"></svg:path><svg:path d="M42 8C43.1046 8 44 7.10457 44 6C44 4.89543 43.1046 4 42 4C40.8954 4 40 4.89543 40 6C40 7.10457 40.8954 8 42 8Z"></svg:path><svg:path d="M42 26C43.1046 26 44 25.1046 44 24C44 22.8954 43.1046 22 42 22C40.8954 22 40 22.8954 40 24C40 25.1046 40.8954 26 42 26Z"></svg:path><svg:path d="M42 44C43.1046 44 44 43.1046 44 42C44 40.8954 43.1046 40 42 40C40.8954 40 40 40.8954 40 42C40 43.1046 40.8954 44 42 44Z"></svg:path><svg:path stroke-linecap="round" d="M32 6H20V42H32"></svg:path><svg:path stroke-linecap="round" d="M12 24H32"></svg:path></svg:g>`,
})
export class IconParkMindMappingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMindmapListIcon],svg[icon-park-mindmap-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26 24L44 24"></svg:path><svg:path d="M14 24L18 24"></svg:path><svg:path d="M18 38H44"></svg:path><svg:path d="M6 38H10"></svg:path><svg:path d="M18 10H44"></svg:path><svg:path d="M6 10H10"></svg:path></svg:g>`,
})
export class IconParkMindmapListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMindmapMapIcon],svg[icon-park-mindmap-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26 24L42 24"></svg:path><svg:path d="M26 38H42"></svg:path><svg:path d="M26 10H42"></svg:path><svg:path d="M18 24L6 24C6 24 7.65685 24 10 24M18 38C12 36 16 24 10 24M18 10C12 12 16 24 10 24"></svg:path></svg:g>`,
})
export class IconParkMindmapMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMiniSdCardIcon],svg[icon-park-mini-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M13.9979 18.7386L8 21.9228V44H40V4H13.9979V18.7386Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 12V18"></svg:path></svg:g>`,
})
export class IconParkMiniSdCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMinusIcon],svg[icon-park-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10.5 24L38.5 24"></svg:path>`,
})
export class IconParkMinusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMinusTheBottomIcon],svg[icon-park-minus-the-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M5 41V21C5 19.8954 5.89543 19 7 19H17C18.1046 19 19 19.8954 19 21V27C19 28.1046 19.8954 29 21 29H27C28.1046 29 29 29.8954 29 31V41C29 42.1046 28.1046 43 27 43H7C5.89543 43 5 42.1046 5 41Z"></svg:path><svg:path d="M19 27V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7V27C43 28.1046 42.1046 29 41 29H21C19.8954 29 19 28.1046 19 27Z"></svg:path></svg:g>`,
})
export class IconParkMinusTheBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMinusTheTopIcon],svg[icon-park-minus-the-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M5 41V21C5 19.8954 5.89543 19 7 19H19H27C28.1046 19 29 19.8954 29 21V29V41C29 42.1046 28.1046 43 27 43H7C5.89543 43 5 42.1046 5 41Z"></svg:path><svg:path d="M43 7V27C43 28.1046 42.1046 29 41 29H31C29.8954 29 29 28.1046 29 27V21C29 19.8954 28.1046 19 27 19H21C19.8954 19 19 18.1046 19 17V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7Z"></svg:path></svg:g>`,
})
export class IconParkMinusTheTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMirrorIcon],svg[icon-park-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M34 44H14C9 44 7.0003 43 7.0003 40L7 34L17.9999 34L19 38H30L31 34L41.0003 34V40C41.0003 43 39 44 34 44Z"></svg:path><svg:path d="M12 34C9.95549 30.882 7 27 7 21.8544C7 11.4224 14.6112 4 24 4C33.3888 4 41 11.4224 41 21.8544C41 27 38.0445 30.882 36 34"></svg:path></svg:g>`,
})
export class IconParkMirrorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMirrorOneIcon],svg[icon-park-mirror-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="20" r="16" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 36V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 44H34"></svg:path></svg:g>`,
})
export class IconParkMirrorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMirrorTwoIcon],svg[icon-park-mirror-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="17" r="13" fill="#2F88FF"></svg:circle><svg:path d="M42 17C42 26.9411 33.9411 35 24 35C14.0589 35 6 26.9411 6 17"></svg:path><svg:path d="M42 17H38"></svg:path><svg:path d="M10 17H6"></svg:path><svg:path d="M30 44H18"></svg:path><svg:path d="M24 44V36"></svg:path></svg:g>`,
})
export class IconParkMirrorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMisalignedSemicircleIcon],svg[icon-park-misaligned-semicircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 30C13.3726 30 8 24.6274 8 18C8 11.3726 13.3726 6 20 6"></svg:path><svg:path d="M20 22C17.7909 22 16 20.2091 16 18C16 15.7909 17.7909 14 20 14"></svg:path><svg:path d="M28 34C30.2091 34 32 32.2091 32 30C32 27.7909 30.2091 26 28 26"></svg:path><svg:path d="M28 42C34.6274 42 40 36.6274 40 30C40 23.3726 34.6274 18 28 18"></svg:path></svg:g>`,
})
export class IconParkMisalignedSemicircleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMitsubishiIcon],svg[icon-park-mitsubishi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 19L24 30L31 19L24 8L17 19Z"></svg:path><svg:path d="M30.6667 40L24 30H37.3333L44 40H30.6667Z"></svg:path><svg:path d="M17.3333 40L24 30H10.6667L4 40H17.3333Z"></svg:path></svg:g>`,
})
export class IconParkMitsubishiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkModifyIcon],svg[icon-park-modify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.0708 9.58588L15.8282 5.34324C15.0472 4.56219 13.7808 4.56219 12.9998 5.34324L7.34292 11.0001C6.56188 11.7811 6.56188 13.0475 7.34292 13.8285L11.5856 18.0712"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28.9287 37.4143L33.1714 41.6569C33.9524 42.438 35.2187 42.438 35.9998 41.6569L41.6566 36.0001C42.4377 35.219 42.4377 33.9527 41.6566 33.1717L37.414 28.929"></svg:path><svg:rect width="12" height="42" x="34.606" y="4.908" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2" transform="rotate(45 34.606 4.908)"></svg:rect><svg:circle cx="24" cy="24" r="2" fill="#fff"></svg:circle><svg:circle cx="20" cy="28" r="2" fill="#fff"></svg:circle><svg:circle cx="28" cy="20" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkModifyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkModifyTwoIcon],svg[icon-park-modify-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="40" height="30" x="4" y="9" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 9V39"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 9H12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 39H12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M23 31L37 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M25 19L23 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M37 31L35 29"></svg:path></svg:g>`,
})
export class IconParkModifyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMonitorIcon],svg[icon-park-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="28" x="4" y="10" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M44 14L36 20.75V27.25L44 34V14Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 19L23 24L17 29"></svg:path></svg:g>`,
})
export class IconParkMonitorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMonitorCameraIcon],svg[icon-park-monitor-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 34C32.2843 34 39 27.2843 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 27.2843 15.7157 34 24 34Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M19.3686 34L16 44H32L28.6037 34H19.3686Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 44H36"></svg:path></svg:g>`,
})
export class IconParkMonitorCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMonitorOffIcon],svg[icon-park-monitor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 12V38H20H28H30M18 10H20H36V24V27"></svg:path><svg:path d="M44 14L36 20.75V27.25L44 34V14Z" clip-rule="evenodd"></svg:path><svg:path d="M44 44L4 4"></svg:path></svg:g>`,
})
export class IconParkMonitorOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMonitorOneIcon],svg[icon-park-monitor-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 8C5 6.89543 5.89543 6 7 6H41C42.1046 6 43 6.89543 43 8V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V8Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 26C5 24.8954 5.89543 24 7 24H41C42.1046 24 43 24.8954 43 26V32C43 33.1046 42.1046 34 41 34H7C5.89543 34 5 33.1046 5 32V26Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 12L18 17"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 14L25 18"></svg:path><svg:circle cx="24" cy="29" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 34L14 42H34L31 34"></svg:path></svg:g>`,
})
export class IconParkMonitorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMonitorTwoIcon],svg[icon-park-monitor-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.5 16.3869C41.5521 14.0859 40.1874 12.0006 38.5 10.225C34.8561 6.39055 29.7072 4 24 4C12.9543 4 4 12.9543 4 24H14L19 32L28 14L35 24H44C44 35.0457 35.0457 44 24 44C18.5491 44 13.6075 41.8194 10 38.2829C8.17976 36.4985 6.69917 34.3688 5.66417 32"></svg:path>`,
})
export class IconParkMonitorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMonkeyIcon],svg[icon-park-monkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M13.2 21C12.4312 19.531 12 17.8817 12 16.1389C12 9.98704 17.3726 5 24 5C30.6274 5 36 9.98704 36 16.1389C36 17.8817 35.5688 19.531 34.8 21"></svg:path><svg:ellipse cx="24" cy="31" fill="#2F88FF" stroke="#000" stroke-width="4" rx="15" ry="12"></svg:ellipse><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M30.5177 33.8742C26.8486 37.5433 20.7965 37.44 17 33.6435"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M12 23C8.68629 23 6 20.7614 6 18C6 15.2386 8.68629 13 12 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M36 23C39.3137 23 42 20.7614 42 18C42 15.2386 39.3137 13 36 13"></svg:path><svg:circle cx="20" cy="14" r="2" fill="#000"></svg:circle><svg:circle cx="28" cy="14" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkMonkeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMonkeyZodiacIcon],svg[icon-park-monkey-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.5925 18.1345C22.9329 16.6704 24.5079 13.1567 20.0846 10.8141C19.0793 10.1634 18.5 8.50002 17.5714 5.44585C13.7178 3.33107 5 3.00018 4 14.0004V44"></svg:path><svg:path d="M17 25C21.5818 26.673 28.0333 30.2543 32 41C33.5333 44.7543 40.5067 45.8705 43.5 40C44.4978 38.0432 44 34.5035 39.5818 32.4503C36.4615 31.0002 34 26 38.5 24.0003C40.3478 23.397 42.4291 24.08 44 27.0002"></svg:path><svg:path d="M29 35.0004C24.6552 33.8942 15.7724 34.5187 15 44"></svg:path></svg:g>`,
})
export class IconParkMonkeyZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMonumentOneIcon],svg[icon-park-monument-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="6" x="14" y="38"></svg:rect><svg:path fill="#2F88FF" d="M18 38L20 9L24 4L28 9L30 38H18Z"></svg:path><svg:path stroke-linecap="round" d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkMonumentOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMonumentTwoIcon],svg[icon-park-monument-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44H44"></svg:path><svg:path fill="#2F88FF" d="M18 44L20 7.15789L28 4L30 44H18Z"></svg:path></svg:g>`,
})
export class IconParkMonumentTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoonIcon],svg[icon-park-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M28.0527 4.41085C22.5828 5.83695 18.5455 10.8106 18.5455 16.7273C18.5455 23.7564 24.2436 29.4545 31.2727 29.4545C37.1894 29.4545 42.1631 25.4172 43.5891 19.9473C43.8585 21.256 44 22.6115 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C25.3885 4 26.744 4.14149 28.0527 4.41085Z"></svg:path>`,
})
export class IconParkMoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoreIcon],svg[icon-park-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="24" r="3"></svg:circle><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:circle cx="36" cy="24" r="3"></svg:circle>`,
})
export class IconParkMoreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoreAppIcon],svg[icon-park-more-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4Z"></svg:path><svg:path fill="#2F88FF" d="M18 28H6C4.89543 28 4 28.8954 4 30V42C4 43.1046 4.89543 44 6 44H18C19.1046 44 20 43.1046 20 42V30C20 28.8954 19.1046 28 18 28Z"></svg:path><svg:path fill="#2F88FF" d="M42 4H30C28.8954 4 28 4.89543 28 6V18C28 19.1046 28.8954 20 30 20H42C43.1046 20 44 19.1046 44 18V6C44 4.89543 43.1046 4 42 4Z"></svg:path><svg:path stroke-linecap="round" d="M28 28H44"></svg:path><svg:path stroke-linecap="round" d="M36 36H44"></svg:path><svg:path stroke-linecap="round" d="M28 44H44"></svg:path></svg:g>`,
})
export class IconParkMoreAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoreFourIcon],svg[icon-park-more-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="10" height="10" x="17" y="11" transform="rotate(-45 17 11)"></svg:rect><svg:rect width="10" height="10" x="30" y="24" transform="rotate(-45 30 24)"></svg:rect><svg:rect width="10" height="10" x="4" y="24" transform="rotate(-45 4 24)"></svg:rect><svg:rect width="10" height="10" x="17" y="37" transform="rotate(-45 17 37)"></svg:rect></svg:g>`,
})
export class IconParkMoreFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoreOneIcon],svg[icon-park-more-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="12" r="3"></svg:circle><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:circle cx="24" cy="35" r="3"></svg:circle>`,
})
export class IconParkMoreOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoreThreeIcon],svg[icon-park-more-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M21.5 14C21.5 15.3807 22.6193 16.5 24 16.5C25.3807 16.5 26.5 15.3807 26.5 14C26.5 12.6193 25.3807 11.5 24 11.5C22.6193 11.5 21.5 12.6193 21.5 14ZM21.5 24C21.5 25.3807 22.6193 26.5 24 26.5C25.3807 26.5 26.5 25.3807 26.5 24C26.5 22.6193 25.3807 21.5 24 21.5C22.6193 21.5 21.5 22.6193 21.5 24ZM24 36.5C22.6193 36.5 21.5 35.3807 21.5 34C21.5 32.6193 22.6193 31.5 24 31.5C25.3807 31.5 26.5 32.6193 26.5 34C26.5 35.3807 25.3807 36.5 24 36.5Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkMoreThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoreTwoIcon],svg[icon-park-more-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:circle cx="14" cy="24" r="3" fill="#fff"></svg:circle><svg:circle cx="24" cy="24" r="3" fill="#fff"></svg:circle><svg:circle cx="34" cy="24" r="3" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkMoreTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMosaicIcon],svg[icon-park-mosaic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M44 36H36V44H44V36Z"></svg:path><svg:path d="M28 36H20V44H28V36Z"></svg:path><svg:path d="M12 36H4V44H12V36Z"></svg:path><svg:path d="M44 20H36V28H44V20Z"></svg:path><svg:path d="M28 20H20V28H28V20Z"></svg:path><svg:path d="M12 20H4V28H12V20Z"></svg:path><svg:path d="M44 4H36V12H44V4Z"></svg:path><svg:path d="M28 4H20V12H28V4Z"></svg:path><svg:path d="M12 4H4V12H12V4Z"></svg:path><svg:path d="M20 12H12V20H20V12Z"></svg:path><svg:path d="M20 28H12V36H20V28Z"></svg:path><svg:path d="M36 12H28V20H36V12Z"></svg:path><svg:path d="M36 28H28V36H36V28Z"></svg:path>`,
})
export class IconParkMosaicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMountainIcon],svg[icon-park-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M18 10L32 38H4L18 10Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M28 29L33.6471 22L44 38H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 22L24 22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14 18L10 26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M22 18L26 26"></svg:path></svg:g>`,
})
export class IconParkMountainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMountedIcon],svg[icon-park-mounted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 7L21 7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 7H39"></svg:path><svg:path stroke-linejoin="round" d="M19 36H16C14.3431 36 13 34.6569 13 33L13 24C13 19.5817 16.5817 16 21 16L27 16C31.4183 16 35 19.5817 35 24V33C35 34.6569 33.6569 36 32 36H29"></svg:path><svg:circle cx="24" cy="7" r="3" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M29 35V36.4C29 37.2837 28.2837 38 27.4 38H20.6C19.7163 38 19 37.2837 19 36.4V35C19 32.2386 21.2386 30 24 30C26.7614 30 29 32.2386 29 35Z"></svg:path><svg:path stroke-linejoin="round" d="M21 38V41C21 42.6569 22.3431 44 24 44C25.6569 44 27 42.6569 27 41V38"></svg:path></svg:g>`,
})
export class IconParkMountedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMouseIcon],svg[icon-park-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z" clip-rule="evenodd"></svg:path><svg:path d="M36 16C36 9.37258 30.6274 4 24 4V16H36Z"></svg:path><svg:path d="M24 4C17.3726 4 12 9.37258 12 16H24V4Z"></svg:path></svg:g>`,
})
export class IconParkMouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMouseOneIcon],svg[icon-park-mouse-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="24" height="32" x="12" y="12" rx="12"></svg:rect><svg:path fill="#2F88FF" d="M12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24V25H12V24Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 25C24 25 24 16 24 12C24 8 25.5 4 31 4C37 4 39 9 39 13"></svg:path></svg:g>`,
})
export class IconParkMouseOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMouseZodiacIcon],svg[icon-park-mouse-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 35H4C4 27 9 17 14 17L16 26"></svg:path><svg:path d="M28 35.0001C28 30 30 26.9893 37 27"></svg:path><svg:path d="M44 28.5374C45 33.511 42 34.9999 40 33.9999C38 32.9999 38.5 28.0004 37 24C33.8599 15.6254 22 13.9997 15 21.0003"></svg:path></svg:g>`,
})
export class IconParkMouseZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMouthIcon],svg[icon-park-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24C4 24 10 15 14 15C18 15 22 17 24 17C26 17 30 15 34 15C38 15 44 24 44 24C44 24 34 34 24 34C14 34 4 24 4 24Z"></svg:path><svg:path d="M4 24H44"></svg:path></svg:g>`,
})
export class IconParkMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoveIcon],svg[icon-park-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M22 43C17.2742 41.2327 13.3325 35.1851 11.3597 31.6428C10.5079 30.1134 10.9566 28.2347 12.3236 27.1411C13.8473 25.9222 16.0438 26.0438 17.4236 27.4236L19 29V17.5C19 16.1193 20.1193 15 21.5 15C22.8807 15 24 16.1193 24 17.5V23.5C24 22.1193 25.1193 21 26.5 21C27.8807 21 29 22.1193 29 23.5V25.5C29 24.1193 30.1193 23 31.5 23C32.8807 23 34 24.1193 34 25.5V27.5C34 26.1193 35.1193 25 36.5 25C37.8807 25 39 26.1193 39 27.5V35.368C39 36.4383 38.7354 37.496 38.1185 38.3707C37.0949 39.8219 35.255 42.0336 33 43C29.5 44.5 26.3701 44.6343 22 43Z"></svg:path><svg:path d="M10 8L32 8"></svg:path><svg:path d="M14.0003 12L10 8L14 4"></svg:path><svg:path d="M28 4L32 8L28 12"></svg:path></svg:g>`,
})
export class IconParkMoveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoveInIcon],svg[icon-park-move-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 12L24 16L28 12"></svg:path><svg:path d="M24 16V4"></svg:path><svg:path d="M20 36L24 32L28 36"></svg:path><svg:path d="M24 32V44"></svg:path><svg:path d="M36 20L32 24L36 28"></svg:path><svg:path d="M32 24H44"></svg:path><svg:path d="M12 20L16 24L12 28"></svg:path><svg:path d="M16 24H4"></svg:path><svg:path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z"></svg:path></svg:g>`,
})
export class IconParkMoveInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoveInOneIcon],svg[icon-park-move-in-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M28 28L42 30.8L37.8 33.6L42 37.8L37.8 42L33.6 37.8L30.8 42L28 28Z" clip-rule="evenodd"></svg:path><svg:path d="M42 22V8C42 6.89543 41.1046 6 40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H21"></svg:path></svg:g>`,
})
export class IconParkMoveInOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMoveOneIcon],svg[icon-park-move-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M8 6L43 25L24 27L13.9948 44L8 6Z"></svg:path>`,
})
export class IconParkMoveOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMovieIcon],svg[icon-park-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M24 36C25.6569 36 27 34.6569 27 33C27 31.3431 25.6569 30 24 30C22.3431 30 21 31.3431 21 33C21 34.6569 22.3431 36 24 36Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M15 27C16.6569 27 18 25.6569 18 24C18 22.3431 16.6569 21 15 21C13.3431 21 12 22.3431 12 24C12 25.6569 13.3431 27 15 27Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M33 27C34.6569 27 36 25.6569 36 24C36 22.3431 34.6569 21 33 21C31.3431 21 30 22.3431 30 24C30 25.6569 31.3431 27 33 27Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 44H44"></svg:path></svg:g>`,
})
export class IconParkMovieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMovieBoardIcon],svg[icon-park-movie-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 16H4V42H44V16Z"></svg:path><svg:path stroke="#000" d="M44 16V6H4V16H44Z"></svg:path><svg:path stroke="#000" d="M26 6L30 16"></svg:path><svg:path stroke="#000" d="M18 6L22 16"></svg:path><svg:path stroke="#000" d="M10 6L14 16"></svg:path><svg:path stroke="#000" d="M34 6L38 16"></svg:path><svg:path stroke="#fff" d="M12 24H36"></svg:path><svg:path stroke="#fff" d="M12 32H24"></svg:path></svg:g>`,
})
export class IconParkMovieBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMovingPictureIcon],svg[icon-park-moving-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000"><svg:rect width="20" height="20" x="6" y="22" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 6L42 6L42 18"></svg:path><svg:circle cx="34" cy="42" r="1.5" fill="#000"></svg:circle><svg:circle r="1.5" fill="#000" transform="matrix(1 0 0 -1 6 14)"></svg:circle><svg:circle cx="42" cy="42" r="1.5" fill="#000"></svg:circle><svg:circle r="1.5" fill="#000" transform="matrix(1 0 0 -1 6 6)"></svg:circle><svg:circle cx="42" cy="34" r="1.5" fill="#000"></svg:circle><svg:circle r="1.5" fill="#000" transform="matrix(1 0 0 -1 14 6)"></svg:circle><svg:circle cx="42" cy="26" r="1.5" fill="#000"></svg:circle><svg:circle r="1.5" fill="#000" transform="matrix(1 0 0 -1 22 6)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 34L12.1195 29.4103C13.2239 28.5821 14.7509 28.6143 15.8192 29.4885L25 37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 6L30 18"></svg:path></svg:g>`,
})
export class IconParkMovingPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiCircularIcon],svg[icon-park-multi-circular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M24 44C31.732 44 38 37.732 38 30C38 22.268 31.732 16 24 16C16.268 16 10 22.268 10 30C10 37.732 16.268 44 24 44Z"></svg:path><svg:path fill="#2F88FF" d="M24 44C28.4183 44 32 40.4183 32 36C32 31.5817 28.4183 28 24 28C19.5817 28 16 31.5817 16 36C16 40.4183 19.5817 44 24 44Z"></svg:path></svg:g>`,
})
export class IconParkMultiCircularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiFunctionKnifeIcon],svg[icon-park-multi-function-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M30 10C30 6.68629 27.3137 4 24 4C20.6863 4 18 6.68629 18 10V38C18 41.3137 20.6863 44 24 44C27.3137 44 30 41.3137 30 38V10Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M30 20.3137L37.2426 27.5563C38.8047 29.1184 41.3374 29.1184 42.8995 27.5563C44.4616 25.9943 44.4616 23.4616 42.8995 21.8995L30 9V20.3137Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M18.0711 27.4142L10.8284 20.1716C9.26633 18.6095 6.73367 18.6095 5.17157 20.1716C3.60948 21.7337 3.60948 24.2663 5.17157 25.8284L18.0711 38.7279V27.4142Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 10V11"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 37V38"></svg:path></svg:g>`,
})
export class IconParkMultiFunctionKnifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiPictureCarouselIcon],svg[icon-park-multi-picture-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path d="M20 42H28"></svg:path><svg:path d="M34 42H36"></svg:path><svg:path d="M4 42H6"></svg:path><svg:path d="M42 42H44"></svg:path><svg:path d="M12 42H14"></svg:path></svg:g>`,
})
export class IconParkMultiPictureCarouselIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiRectangleIcon],svg[icon-park-multi-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 39H44V7H12V15"></svg:path><svg:path d="M8 39H32V15H8V23"></svg:path><svg:path fill="#2F88FF" d="M20 23H4V39H20V23Z"></svg:path></svg:g>`,
})
export class IconParkMultiRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiRingIcon],svg[icon-park-multi-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 10C30 6.68629 27.3137 4 24 4C20.6863 4 18 6.68629 18 10V24C18 27.3137 20.6863 30 24 30C27.3137 30 30 27.3137 30 24V10Z"></svg:path><svg:path d="M38.1422 18.3432C40.4853 16.0001 40.4853 12.2011 38.1422 9.85795C35.799 7.5148 32 7.5148 29.6569 9.85795L19.7574 19.7575C17.4142 22.1006 17.4142 25.8996 19.7574 28.2427C22.1005 30.5859 25.8995 30.5859 28.2427 28.2427L38.1422 18.3432Z"></svg:path><svg:path d="M38 30C41.3137 30 44 27.3137 44 24C44 20.6863 41.3137 18 38 18H24C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30H38Z"></svg:path><svg:path d="M29.6568 38.1421C32 40.4853 35.799 40.4853 38.1421 38.1421C40.4853 35.799 40.4853 32 38.1421 29.6568L28.2426 19.7574C25.8995 17.4142 22.1005 17.4142 19.7573 19.7574C17.4142 22.1005 17.4142 25.8995 19.7573 28.2426L29.6568 38.1421Z"></svg:path><svg:path d="M18 38C18 41.3137 20.6863 44 24 44C27.3137 44 30 41.3137 30 38V24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24V38Z"></svg:path><svg:path d="M9.85795 29.6569C7.5148 32 7.5148 35.799 9.85795 38.1421C12.2011 40.4853 16.0001 40.4853 18.3432 38.1421L28.2427 28.2426C30.5859 25.8995 30.5859 22.1005 28.2427 19.7574C25.8996 17.4142 22.1006 17.4142 19.7574 19.7574L9.85795 29.6569Z"></svg:path><svg:path d="M10 18C6.68629 18 4 20.6863 4 24C4 27.3137 6.68629 30 10 30H24C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18H10Z"></svg:path><svg:path d="M18.3433 9.85795C16.0001 7.5148 12.2011 7.5148 9.85794 9.85795C7.5148 12.2011 7.5148 16.0001 9.85795 18.3433L19.7575 28.2427C22.1006 30.5859 25.8996 30.5859 28.2427 28.2427C30.5859 25.8996 30.5859 22.1006 28.2428 19.7575L18.3433 9.85795Z"></svg:path></svg:g>`,
})
export class IconParkMultiRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiTriangularIcon],svg[icon-park-multi-triangular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 6L4 41H44L24 6Z"></svg:path><svg:path d="M39 32.25L34 41"></svg:path><svg:path d="M29 14.75L14 41"></svg:path><svg:path d="M34 23.5L24 41"></svg:path></svg:g>`,
})
export class IconParkMultiTriangularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiTriangularFourIcon],svg[icon-park-multi-triangular-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 41H44L24 6L4 41Z"></svg:path><svg:path d="M24 6L24 41"></svg:path><svg:path d="M14 24L44 41"></svg:path><svg:path d="M34 24L4 41"></svg:path></svg:g>`,
})
export class IconParkMultiTriangularFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiTriangularThreeIcon],svg[icon-park-multi-triangular-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 41H44L24 6L4 41Z"></svg:path><svg:path d="M24 30L24 6"></svg:path><svg:path d="M24 30L4 41"></svg:path><svg:path d="M24 30L44 41"></svg:path></svg:g>`,
})
export class IconParkMultiTriangularThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultiTriangularTwoIcon],svg[icon-park-multi-triangular-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 41H44L24 6L4 41Z"></svg:path><svg:path fill="#2F88FF" d="M34 23.5L24 41L14 23.5H34Z"></svg:path></svg:g>`,
})
export class IconParkMultiTriangularTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMulticastIcon],svg[icon-park-multicast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000"><svg:path fill="#2F88FF" stroke-width="4" d="M24 15C26.7614 15 29 12.7614 29 10C29 7.23858 26.7614 5 24 5C21.2386 5 19 7.23858 19 10C19 12.7614 21.2386 15 24 15Z"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M24 15V23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 33V23L41 23.0128V33"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M41 41V42"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M7 41V42"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M18 41V42"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M30 41V42"></svg:path></svg:g>`,
})
export class IconParkMulticastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMultilayerSphereIcon],svg[icon-park-multilayer-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path stroke-linecap="round" d="M4.3999 20C6.25298 29.129 14.324 36 23.9998 36C33.6756 36 41.7466 29.129 43.5997 20"></svg:path><svg:path stroke-linecap="round" d="M5.66406 16C8.75028 23.0636 15.7986 28 23.9999 28C32.2012 28 39.2495 23.0636 42.3357 16"></svg:path><svg:path stroke-linecap="round" d="M7.99854 12C11.6474 16.8578 17.4567 20 24 20C30.5433 20 36.3526 16.8578 40.015 12"></svg:path><svg:path stroke-linecap="round" d="M11.998 8C15.341 10.5116 19.4967 12 24 12C28.5033 12 32.659 10.5116 36.0019 8"></svg:path></svg:g>`,
})
export class IconParkMultilayerSphereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMuscleIcon],svg[icon-park-muscle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M21.37 36C22.82 30.75 27.89 27 33.73 27.62C39.29 28.21 43.71 32.9 43.99 38.48C44.06 39.95 43.86 41.36 43.43 42.67C43.17 43.47 42.39 44 41.54 44H11.7584C6.71004 44 2.92371 39.3814 3.91377 34.4311L9.99994 4H21.9999L25.9999 11L17.43 17.13L14.9999 14"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M21.37 36C22.82 30.75 27.89 27 33.73 27.62C39.29 28.21 43.71 32.9 43.99 38.48C44.06 39.95 43.86 41.36 43.43 42.67C43.17 43.47 42.39 44 41.54 44H11.7584C6.71004 44 2.92371 39.3814 3.91377 34.4311L9.99994 4H21.9999L25.9999 11L17.43 17.13L14.9999 14"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M17.4395 17.1299L21.9995 33.9999"></svg:path></svg:g>`,
})
export class IconParkMuscleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMuseumOneIcon],svg[icon-park-museum-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M8 8.36364L24 4L40 8.36364V14H8V8.36364Z"></svg:path><svg:path stroke-linecap="round" d="M10 14V38"></svg:path><svg:path stroke-linecap="round" d="M17 14V38"></svg:path><svg:path stroke-linecap="round" d="M24 14V38"></svg:path><svg:path stroke-linecap="round" d="M31 14V38"></svg:path><svg:path stroke-linecap="round" d="M38 14V38"></svg:path><svg:rect width="34" height="6" x="7" y="38" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkMuseumOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMuseumTwoIcon],svg[icon-park-museum-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44H44"></svg:path><svg:path fill="#2F88FF" d="M8 7.27273C8 7.27273 15 4 24 4C33 4 40 7.27273 40 7.27273V13H8V7.27273Z"></svg:path><svg:path stroke-linecap="round" d="M10 13V38"></svg:path><svg:path stroke-linecap="round" d="M17 13V38"></svg:path><svg:path stroke-linecap="round" d="M24 13V38"></svg:path><svg:path stroke-linecap="round" d="M31 13V38"></svg:path><svg:path stroke-linecap="round" d="M38 13V38"></svg:path><svg:rect width="34" height="6" x="7" y="38"></svg:rect></svg:g>`,
})
export class IconParkMuseumTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicIcon],svg[icon-park-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M30 34.5C30 32.567 31.567 31 33.5 31H41V34.4C41 36.3882 39.3882 38 37.4 38H33.5C31.567 38 30 36.433 30 34.5Z"></svg:path><svg:path fill="#2F88FF" d="M6 38.5C6 36.567 7.567 35 9.5 35H16V38.4C16 40.3882 14.3882 42 12.4 42H9.5C7.567 42 6 40.433 6 38.5Z"></svg:path><svg:path stroke-linecap="round" d="M16 18.044V18.044L41 12.125"></svg:path><svg:path stroke-linecap="round" d="M16 38V10L41 4V33.6924"></svg:path></svg:g>`,
})
export class IconParkMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicCdIcon],svg[icon-park-music-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26 14V28"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M14 28.6655C14 26.6411 15.9341 25 18.32 25H26V29.3345C26 31.3589 24.0659 33 21.68 33H18.32C15.9341 33 14 31.3589 14 29.3345V28.6655Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 15L26 14"></svg:path></svg:g>`,
})
export class IconParkMusicCdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicListIcon],svg[icon-park-music-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 19H40"></svg:path><svg:path stroke-linecap="round" d="M24 10H40"></svg:path><svg:path stroke-linecap="round" d="M8 38H40"></svg:path><svg:path stroke-linecap="round" d="M8 28H40"></svg:path><svg:path fill="#2F88FF" d="M8 10L16 15L8 20V10Z"></svg:path></svg:g>`,
})
export class IconParkMusicListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicMenuIcon],svg[icon-park-music-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M29 6V35"></svg:path><svg:path d="M15 36.04C15 33.2565 17.2565 31 20.04 31H29V36.96C29 39.7435 26.7435 42 23.96 42H20.04C17.2565 42 15 39.7435 15 36.96V36.04Z"></svg:path><svg:path stroke-linecap="round" d="M29 14.0664L41.8834 17.1215V9.01339L29 6V14.0664Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M6 8H20"></svg:path><svg:path stroke-linecap="round" d="M6 16H20"></svg:path><svg:path stroke-linecap="round" d="M6 24H16"></svg:path></svg:g>`,
})
export class IconParkMusicMenuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicOneIcon],svg[icon-park-music-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6V35"></svg:path><svg:path fill="#2F88FF" d="M10 36.04C10 33.2565 12.2565 31 15.04 31H24V36.96C24 39.7435 21.7435 42 18.96 42H15.04C12.2565 42 10 39.7435 10 36.96V36.04Z"></svg:path><svg:path stroke-linecap="round" d="M24 14.0664L36.8834 17.1215V9.01341L24 6.00002V14.0664Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkMusicOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicRhythmIcon],svg[icon-park-music-rhythm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 42H10"></svg:path><svg:path d="M5 36H10"></svg:path><svg:path d="M5 30H10"></svg:path><svg:path d="M5 24H10"></svg:path><svg:path d="M16 42H21"></svg:path><svg:path d="M16 36H21"></svg:path><svg:path d="M16 30H21"></svg:path><svg:path d="M16 24H21"></svg:path><svg:path d="M16 18H21"></svg:path><svg:path d="M16 12H21"></svg:path><svg:path d="M16 6H21"></svg:path><svg:path d="M27 42H32"></svg:path><svg:path d="M38 42H43"></svg:path><svg:path d="M27 36H32"></svg:path><svg:path d="M38 36H43"></svg:path><svg:path d="M27 30H32"></svg:path><svg:path d="M38 30H43"></svg:path><svg:path d="M38 24H43"></svg:path><svg:path d="M38 18H43"></svg:path></svg:g>`,
})
export class IconParkMusicRhythmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMuteIcon],svg[icon-park-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M29 14V34C25.15 34 22.2892 28.9106 22.2892 28.9106H18.1C17.4925 28.9106 17 28.4132 17 27.7995V20.1171C17 19.5034 17.4925 19.006 18.1 19.006H22.2892C22.2892 19.006 25.15 14 29 14Z"></svg:path></svg:g>`,
})
export class IconParkMuteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNailPolishIcon],svg[icon-park-nail-polish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M18.8951 5.88906C18.9539 4.82923 19.8305 4 20.892 4H27.108C28.1695 4 29.0461 4.82923 29.1049 5.88906L29.8827 19.8891C29.9464 21.0355 29.034 22 27.8858 22H20.1142C18.966 22 18.0536 21.0355 18.1173 19.8891L18.8951 5.88906Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M11 28C11 24.6863 13.6863 22 17 22H31C34.3137 22 37 24.6863 37 28V41C37 42.6569 35.6569 44 34 44H14C12.3431 44 11 42.6569 11 41V28Z"></svg:path><svg:circle cx="24" cy="33" r="3" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkNailPolishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNailPolishOneIcon],svg[icon-park-nail-polish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="24" x="8" y="20" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:rect width="14" height="16" x="17" y="4" fill="#2F88FF" stroke="#000"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M22 32H26L27 37H21L22 32Z"></svg:path><svg:path stroke="#fff" d="M24 20V32"></svg:path><svg:path stroke="#000" d="M31 20H17"></svg:path></svg:g>`,
})
export class IconParkNailPolishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNasalIcon],svg[icon-park-nasal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M16.9875 4C17.108 10.25 16.7846 14.5864 16.0172 17.0092C14.8662 20.6433 6.08203 30.7628 6.08203 36.102C6.08203 41.4412 12.3865 44.3892 15.7908 42.3787"></svg:path><svg:path d="M32.002 4C31.7773 10.25 32.0486 14.5864 32.8159 17.0092C33.9669 20.6433 42.959 29.4496 42.959 35.2924C42.959 41.1352 36.4466 44.3892 33.0423 42.3787"></svg:path><svg:path d="M13.0059 34.8337C14.7153 33.8614 16.2019 33.8614 17.4657 34.8337C19.3614 36.292 19.9562 40 24.0084 40C28.0607 40 30.0472 35.8426 32.0001 34.8337C33.3021 34.161 34.6354 34.161 36.0001 34.8337"></svg:path><svg:path d="M20.2852 22.1455C19.4914 23.0001 18.6514 23.9531 18.0381 25.6138C17.5732 26.8726 17.4803 27.6026 17.416 28.4239"></svg:path></svg:g>`,
})
export class IconParkNasalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNaturalModeIcon],svg[icon-park-natural-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path d="M24.0005 27C18.3431 27 14.065 22.6575 14.065 17L14 7L19.0005 11L24.0005 5L29.0005 11L34.0005 7V17C34.0005 22.6575 29.658 27 24.0005 27Z"></svg:path><svg:path d="M23.4862 43.3137C25.0483 41.7516 23.1488 37.3195 19.2436 33.4142C15.3383 29.509 10.9062 27.6095 9.34408 29.1715C7.78199 30.7336 9.68146 35.1658 13.5867 39.0711C17.492 42.9763 21.9241 44.8758 23.4862 43.3137Z"></svg:path><svg:path d="M24.8289 42.9706C26.391 44.5327 30.8231 42.6332 34.7283 38.7279C38.6336 34.8227 40.5331 30.3905 38.971 28.8285C37.4089 27.2664 32.9767 29.1658 29.0715 33.0711C25.1662 36.9763 23.2668 41.4085 24.8289 42.9706Z"></svg:path></svg:g>`,
})
export class IconParkNaturalModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNavigationIcon],svg[icon-park-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24.5 4L9 44L24.5 34.9091L40 44L24.5 4Z"></svg:path>`,
})
export class IconParkNavigationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNecktieIcon],svg[icon-park-necktie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15 36L21 13H27L33 36L24 44L15 36Z"></svg:path><svg:path d="M21 4H27L30 6L27 13H21L18 6L21 4Z"></svg:path></svg:g>`,
})
export class IconParkNecktieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNeedleIcon],svg[icon-park-needle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M39 23L25 9"></svg:path><svg:path stroke-linecap="round" d="M43.9995 17L30.9995 4"></svg:path><svg:path stroke-linecap="round" d="M34.999 18.999L39.999 13.999"></svg:path><svg:path stroke-linecap="round" d="M28.999 12.999L33.999 7.99902"></svg:path><svg:path stroke-linecap="round" d="M11 37L6 42"></svg:path><svg:path fill="#2F88FF" d="M27.9999 12.0001L11.9999 27.9998L10.9999 37L19.9999 35.9998L35.9999 20.0001L27.9999 12.0001Z"></svg:path></svg:g>`,
})
export class IconParkNeedleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNegativeDynamicsIcon],svg[icon-park-negative-dynamics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M17 33.9502V42.1102"></svg:path><svg:path d="M9 40V42.0556"></svg:path><svg:path d="M25 27V42.0714"></svg:path><svg:path d="M33 18.9614V42.0878"></svg:path><svg:path d="M41 10.9707V42.0833"></svg:path><svg:path d="M7 33L34 6"></svg:path><svg:path d="M7 22L7 33"></svg:path></svg:g>`,
})
export class IconParkNegativeDynamicsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNestedArrowsIcon],svg[icon-park-nested-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 17V4H4V30H17"></svg:path><svg:path fill="#2F88FF" d="M43 43V17H17V43H43Z"></svg:path><svg:path d="M33 30H17M33 30L28 25L33 30ZM33 30L28 35L33 30Z"></svg:path><svg:path d="M17 17V43"></svg:path></svg:g>`,
})
export class IconParkNestedArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNestsIcon],svg[icon-park-nests-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4.99902 32.3137L20.0339 5.94293C20.958 3.98114 22.6267 3.00024 25.0402 3.00024C28.6603 3.00024 31.0172 7.9865 31.0172 7.9865C31.0172 7.9865 32.3445 8.18426 34.999 8.57977C30.9888 8.64538 28.6699 9.45221 28.0424 11.0002C27.1012 13.3223 30.4983 15.7311 31.0172 19.0041C31.5361 22.2771 29.4663 27.8053 24.4882 30.5672C21.1694 32.4085 17.0262 32.8862 12.0583 32.0002L5.95844 43.0002"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M14.9424 26.9782C17.5213 22.3287 19.2169 19.3432 20.0293 18.0218C21.2478 16.0397 26.2745 16.6373 24.4685 21.5845C23.2645 24.8827 20.0891 26.6806 14.9424 26.9782Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M32.9678 32.9838C34.1099 30.2473 35.7775 28.589 37.9706 28.009C40.1637 27.4289 42.1638 27.782 43.971 29.0684C42.8455 31.6643 41.1772 33.3286 38.9661 34.0611C36.7549 34.7936 34.7555 34.4345 32.9678 32.9838Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M26.9854 35.1143C27.7422 37.8361 29.7468 39.6565 32.9993 40.5753C36.2518 41.4942 38.9296 40.9692 41.0325 39.0005C38.4317 35.97 36.088 34.3065 34.0015 34.0101C31.915 33.7136 29.5763 34.0817 26.9854 35.1143Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkNestsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNetworkDriveIcon],svg[icon-park-network-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40.5178 36.3161C43.8044 34.005 45.2136 29.8302 44.0001 26C42.7866 22.1698 39.0705 20.0714 35.0527 20.0745H32.7317C31.2144 14.1613 26.2082 9.79572 20.1435 9.0972C14.0787 8.39868 8.21121 11.5118 5.38931 16.9253C2.56741 22.3388 3.37545 28.9317 7.42115 33.5035"></svg:path><svg:rect width="20" height="6" x="14" y="35" fill="#2F88FF"></svg:rect><svg:path d="M34 28L22 28"></svg:path><svg:path d="M16 28H14"></svg:path></svg:g>`,
})
export class IconParkNetworkDriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNetworkTreeIcon],svg[icon-park-network-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="8" height="8" x="4" y="34" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="32" height="12" x="8" y="6" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" d="M24 34V18"></svg:path><svg:path stroke="#000" d="M8 34V26H40V34"></svg:path><svg:rect width="8" height="8" x="36" y="34" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="8" height="8" x="20" y="34" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M14 12H16"></svg:path></svg:g>`,
})
export class IconParkNetworkTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNeuralIcon],svg[icon-park-neural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M20.5 33.0002C22.466 33.0002 23.2904 29.4622 25 28.7533C26.7723 28.0184 29.4174 30.0889 30.753 28.7533C32.0887 27.4177 30.4474 24.4514 31.1823 22.6791C31.8912 20.9695 35 20.4662 35 18.5002C35 16.5343 31.462 16.0593 30.753 14.3498C30.0181 12.5775 32.0887 9.58281 30.753 8.2472C29.4174 6.91158 26.2656 8.9821 24.4933 8.2472C22.7837 7.53829 22.466 4.00024 20.5 4.00024C18.534 4.00024 18.0041 7.96486 16.2945 8.67377C14.5222 9.40867 11.5826 6.91158 10.247 8.2472C8.91134 9.58281 10.9819 12.228 10.247 14.0002C9.53805 15.7098 6 16.5343 6 18.5002C6 20.4662 9.53805 20.9695 10.247 22.6791C10.9819 24.4514 8.91134 27.4177 10.247 28.7533C11.5826 30.0889 14.5222 28.0184 16.2945 28.7533C18.0041 29.4622 18.534 33.0002 20.5 33.0002Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M20 22.0002C22.2091 22.0002 24 20.2094 24 18.0002C24 15.7911 22.2091 14.0002 20 14.0002C17.7909 14.0002 16 15.7911 16 18.0002C16 20.2094 17.7909 22.0002 20 22.0002Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16.5692 30.0002C15.3611 36.7992 16.0762 41.0545 18.7144 42.7663C22.6719 45.3339 25.4482 43.3271 26.8968 41.8554C28.3454 40.3838 33.0495 33.9441 37.0763 33.9441C41.1031 33.9441 42.315 37.8244 41.9334 39.9441C41.679 41.3572 41.022 42.4025 39.9624 43.0799"></svg:path></svg:g>`,
})
export class IconParkNeuralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNeutralFaceIcon],svg[icon-park-neutral-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 31H31"></svg:path></svg:g>`,
})
export class IconParkNeutralFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNewAfferentIcon],svg[icon-park-new-afferent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 19V13.3125V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H19"></svg:path><svg:path d="M32 24L24 32L32 40"></svg:path><svg:path d="M24 32H42"></svg:path></svg:g>`,
})
export class IconParkNewAfferentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNewComputerIcon],svg[icon-park-new-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="28" x="6" y="6" fill="#2F88FF" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M14 42L34 42"></svg:path><svg:path stroke-linecap="round" d="M24 34V42"></svg:path></svg:g>`,
})
export class IconParkNewComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNewDianziqianIcon],svg[icon-park-new-dianziqian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M31 20V27L10 39L4 35V13L10 9L24 17L17.5 20.5L10 16V32L31 20Z"></svg:path><svg:path fill="#000" d="M31 27L31.9923 28.7365C32.6154 28.3804 33 27.7177 33 27H31ZM31 20H33V16.5536L30.0077 18.2635L31 20ZM10 32H8C8 32.7129 8.37952 33.372 8.99615 33.7298C9.61278 34.0877 10.3733 34.0902 10.9923 33.7365L10 32ZM10 16L11.029 14.285C10.4111 13.9143 9.64162 13.9046 9.0146 14.2596C8.38759 14.6146 8 15.2795 8 16H10ZM17.5 20.5L16.471 22.215C17.0759 22.5779 17.8271 22.5954 18.4482 22.2609L17.5 20.5ZM24 17L24.9482 18.7609C25.5881 18.4164 25.9907 17.7519 25.9998 17.0252C26.009 16.2985 25.6233 15.6241 24.9923 15.2635L24 17ZM10 9L10.9923 7.26351C10.3345 6.88767 9.52091 6.91569 8.8906 7.3359L10 9ZM4 13L2.8906 11.3359C2.3342 11.7068 2 12.3313 2 13H4ZM4 35H2C2 35.6687 2.3342 36.2932 2.8906 36.6641L4 35ZM10 39L8.8906 40.6641C9.52091 41.0843 10.3345 41.1123 10.9923 40.7365L10 39ZM33 27V20H29V27H33ZM30.0077 18.2635L9.00772 30.2635L10.9923 33.7365L31.9923 21.7365L30.0077 18.2635ZM12 32V16H8V32H12ZM8.97101 17.715L16.471 22.215L18.529 18.785L11.029 14.285L8.97101 17.715ZM18.4482 22.2609L24.9482 18.7609L23.0518 15.2391L16.5518 18.7391L18.4482 22.2609ZM24.9923 15.2635L10.9923 7.26351L9.00772 10.7365L23.0077 18.7365L24.9923 15.2635ZM8.8906 7.3359L2.8906 11.3359L5.1094 14.6641L11.1094 10.6641L8.8906 7.3359ZM2 13V35H6V13H2ZM2.8906 36.6641L8.8906 40.6641L11.1094 37.3359L5.1094 33.3359L2.8906 36.6641ZM10.9923 40.7365L31.9923 28.7365L30.0077 25.2635L9.00772 37.2635L10.9923 40.7365Z"></svg:path><svg:path fill="#2F88FF" d="M17 28V21L38 9L44 13V35L38 39L24 31L30.5 27.5L38 32V16L17 28Z"></svg:path><svg:path fill="#000" d="M17 21L16.0077 19.2635C15.3846 19.6196 15 20.2823 15 21H17ZM17 28H15V31.4464L17.9923 29.7365L17 28ZM38 16H40C40 15.2871 39.6205 14.628 39.0039 14.2702C38.3872 13.9123 37.6267 13.9098 37.0077 14.2635L38 16ZM38 32L36.971 33.715C37.5889 34.0857 38.3584 34.0954 38.9854 33.7404C39.6124 33.3854 40 32.7205 40 32H38ZM30.5 27.5L31.529 25.785C30.9241 25.4221 30.1729 25.4046 29.5518 25.7391L30.5 27.5ZM24 31L23.0518 29.2391C22.4119 29.5836 22.0093 30.2481 22.0002 30.9748C21.991 31.7015 22.3767 32.3759 23.0077 32.7365L24 31ZM38 39L37.0077 40.7365C37.6655 41.1123 38.4791 41.0843 39.1094 40.6641L38 39ZM44 35L45.1094 36.6641C45.6658 36.2932 46 35.6687 46 35H44ZM44 13H46C46 12.3313 45.6658 11.7068 45.1094 11.3359L44 13ZM38 9L39.1094 7.3359C38.4791 6.91569 37.6655 6.88766 37.0077 7.26351L38 9ZM15 21V28H19V21H15ZM17.9923 29.7365L38.9923 17.7365L37.0077 14.2635L16.0077 26.2635L17.9923 29.7365ZM36 16V32H40V16H36ZM39.029 30.285L31.529 25.785L29.471 29.215L36.971 33.715L39.029 30.285ZM29.5518 25.7391L23.0518 29.2391L24.9482 32.7609L31.4482 29.2609L29.5518 25.7391ZM23.0077 32.7365L37.0077 40.7365L38.9923 37.2635L24.9923 29.2635L23.0077 32.7365ZM39.1094 40.6641L45.1094 36.6641L42.8906 33.3359L36.8906 37.3359L39.1094 40.6641ZM46 35V13H42V35H46ZM45.1094 11.3359L39.1094 7.3359L36.8906 10.6641L42.8906 14.6641L45.1094 11.3359ZM37.0077 7.26351L16.0077 19.2635L17.9923 22.7365L38.9923 10.7365L37.0077 7.26351Z"></svg:path></svg:g>`,
})
export class IconParkNewDianziqianIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNewEfferentIcon],svg[icon-park-new-efferent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 19V13.3125V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H19"></svg:path><svg:path d="M34 24L42 32L34 40"></svg:path><svg:path d="M24 32H42"></svg:path></svg:g>`,
})
export class IconParkNewEfferentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNewLarkIcon],svg[icon-park-new-lark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 29C21 29 25 26.9339 28 23.4065C36 14 41.4242 16.8166 44 17.9998C38.5 20.9998 40.5 29.6233 33 35.9998C28.382 39.9259 23.4945 41.014 19 41C12.5231 40.9799 6.86226 37.7637 4 35.4063V16.9998"></svg:path><svg:path fill="#000" d="M5.64808 15.8669C5.02231 14.9567 3.77715 14.7261 2.86694 15.3519C1.95673 15.9777 1.72615 17.2228 2.35192 18.1331L5.64808 15.8669ZM36.0021 35.7309C36.958 35.1774 37.2843 33.9539 36.7309 32.9979C36.1774 32.042 34.9539 31.7157 33.9979 32.2691L36.0021 35.7309ZM2.35192 18.1331C5.2435 22.339 10.7992 28.144 16.8865 32.2239C19.9345 34.2667 23.217 35.946 26.449 36.7324C29.6946 37.522 33.0451 37.4428 36.0021 35.7309L33.9979 32.2691C32.2049 33.3072 29.9929 33.478 27.3947 32.8458C24.783 32.2103 21.9405 30.7958 19.1135 28.9011C13.4508 25.106 8.2565 19.661 5.64808 15.8669L2.35192 18.1331Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.5947 17C32.84 14.7027 30.8551 9.94054 27.5947 7H11.5947C15.2174 10.6757 23.0002 16 27.0002 24"></svg:path></svg:g>`,
})
export class IconParkNewLarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNewPictureIcon],svg[icon-park-new-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 28L16.6931 18.198C17.4389 17.5143 18.5779 17.4953 19.3461 18.1538L32 29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 24L32.7735 19.2265C33.4772 18.5228 34.5914 18.4436 35.3877 19.0408L42 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 20L6 30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 20V30"></svg:path></svg:g>`,
})
export class IconParkNewPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNewlybuildIcon],svg[icon-park-newlybuild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M19 10V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7V29C43 30.1046 42.1046 31 41 31H37"></svg:path><svg:rect width="24" height="24" x="5" y="18" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M17 25V35"></svg:path><svg:path stroke="#fff" d="M12 30H22"></svg:path></svg:g>`,
})
export class IconParkNewlybuildIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNewspaperFoldingIcon],svg[icon-park-newspaper-folding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M22 44L21 36"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M42 44V12H26L27 20L28 28L29 36L22 44H42Z"></svg:path><svg:path stroke="#fff" d="M28 28H33"></svg:path><svg:path stroke="#fff" d="M27 20H33"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M6 4H25L26 12L27 20L28 28L29 36H21H6V4Z"></svg:path><svg:path stroke="#fff" d="M12 12H19"></svg:path><svg:path stroke="#fff" d="M12 20H20"></svg:path><svg:path stroke="#fff" d="M12 28H21"></svg:path></svg:g>`,
})
export class IconParkNewspaperFoldingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNextIcon],svg[icon-park-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M4 40.8361C8.89307 34.8632 13.2383 31.4739 17.0356 30.6682C20.8329 29.8625 24.4483 29.7408 27.8818 30.303V41L44 23.5453L27.8818 7V17.167C21.5333 17.2172 16.1362 19.4948 11.6905 24C7.24474 28.5052 4.68126 34.1172 4 40.8361Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkNextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNineKeyIcon],svg[icon-park-nine-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M24.5 14C21.4624 14 19 16.4624 19 19.5C19 22.5376 21.4624 25 24.5 25C27.5376 25 30 22.5376 30 19.5C30 16.4624 27.5376 14 24.5 14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 29C19.8184 31.1932 21.5476 33 24.5 33C27.5376 33 30 30.3137 30 27V20"></svg:path></svg:g>`,
})
export class IconParkNineKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNinePointsConnectedIcon],svg[icon-park-nine-points-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26.8286 37.1718L37.1718 26.8286"></svg:path><svg:path d="M21.1718 26.8286L10.8286 37.1718"></svg:path><svg:path d="M26.8286 21.1718L37.1718 10.8286"></svg:path><svg:path d="M10.8286 21.1718L21.1718 10.8286"></svg:path><svg:path fill="#2F88FF" d="M12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z"></svg:path><svg:path fill="#2F88FF" d="M28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4C26.2091 4 28 5.79086 28 8Z"></svg:path><svg:path fill="#2F88FF" d="M44 8C44 10.2091 42.2091 12 40 12C37.7909 12 36 10.2091 36 8C36 5.79086 37.7909 4 40 4C42.2091 4 44 5.79086 44 8Z"></svg:path><svg:path fill="#2F88FF" d="M44 24C44 26.2091 42.2091 28 40 28C37.7909 28 36 26.2091 36 24C36 21.7909 37.7909 20 40 20C42.2091 20 44 21.7909 44 24Z"></svg:path><svg:path fill="#2F88FF" d="M44 40C44 42.2091 42.2091 44 40 44C37.7909 44 36 42.2091 36 40C36 37.7909 37.7909 36 40 36C42.2091 36 44 37.7909 44 40Z"></svg:path><svg:path fill="#2F88FF" d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"></svg:path><svg:path fill="#2F88FF" d="M12 40C12 42.2091 10.2091 44 8 44C5.79086 44 4 42.2091 4 40C4 37.7909 5.79086 36 8 36C10.2091 36 12 37.7909 12 40Z"></svg:path><svg:path fill="#2F88FF" d="M12 24C12 26.2091 10.2091 28 8 28C5.79086 28 4 26.2091 4 24C4 21.7909 5.79086 20 8 20C10.2091 20 12 21.7909 12 24Z"></svg:path><svg:path fill="#2F88FF" d="M28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24Z"></svg:path></svg:g>`,
})
export class IconParkNinePointsConnectedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNintendoSwitchIcon],svg[icon-park-nintendo-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 18C6 12.3431 6 9.51472 7.75736 7.75736C9.51472 6 12.3431 6 18 6H20V42H18C12.3431 42 9.51472 42 7.75736 40.2426C6 38.4853 6 35.6569 6 30V18Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M42 18C42 12.3431 42 9.51472 40.2426 7.75736C38.4853 6 35.6569 6 30 6H28V42H30C35.6569 42 38.4853 42 40.2426 40.2426C42 38.4853 42 35.6569 42 30V18Z"></svg:path><svg:path stroke="#fff" d="M35 13V15"></svg:path><svg:path stroke="#fff" d="M13 33V35"></svg:path></svg:g>`,
})
export class IconParkNintendoSwitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNmrIcon],svg[icon-park-nmr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke-linecap="round" d="M32.4852 15.5147C30.3136 13.3431 27.3136 12 23.9999 12C20.6862 12 17.6862 13.3431 15.5146 15.5147"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M34 24H14V32H34V24Z"></svg:path><svg:path stroke-linecap="round" d="M17.0454 32L17 42.7147"></svg:path><svg:path stroke-linecap="round" d="M31.0455 32L31 42.7147"></svg:path></svg:g>`,
})
export class IconParkNmrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNoShootingIcon],svg[icon-park-no-shooting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M15 12L18 6H30L33 12H15Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 20L20 34"></svg:path><svg:circle cx="24" cy="27" r="8" stroke="#fff" stroke-linecap="round"></svg:circle></svg:g>`,
})
export class IconParkNoShootingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNodeFlatIcon],svg[icon-park-node-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42V27M42 24H27"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:path d="M42 6H24H6V24V42"></svg:path></svg:g>`,
})
export class IconParkNodeFlatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNodeRoundIcon],svg[icon-park-node-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42V27M42 24H27"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:path d="M42 6H24C14.0589 6 6 14.0589 6 24V42"></svg:path></svg:g>`,
})
export class IconParkNodeRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNodeSquareIcon],svg[icon-park-node-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42V27M42 24H27"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:path d="M42 6H24L6 24V42"></svg:path></svg:g>`,
})
export class IconParkNodeSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNoodlesIcon],svg[icon-park-noodles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 24C4 35.0457 10.6667 44 24 44C37.3333 44 44 35.0457 44 24H4Z" clip-rule="evenodd"></svg:path><svg:path d="M16 24V8"></svg:path><svg:path d="M24 24V6"></svg:path><svg:path d="M32 24V4"></svg:path><svg:path d="M8 24V10"></svg:path><svg:path d="M4 13L44 4"></svg:path></svg:g>`,
})
export class IconParkNoodlesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNotebookIcon],svg[icon-park-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 6C10 4.89543 10.8954 4 12 4H40C41.1046 4 42 4.89543 42 6V42C42 43.1046 41.1046 44 40 44H12C10.8954 44 10 43.1046 10 42V6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 6V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 14H14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 24H14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 34H14"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M27 4H39"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M27 44H39"></svg:path></svg:g>`,
})
export class IconParkNotebookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNotebookAndPenIcon],svg[icon-park-notebook-and-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 6V42H30V6H4Z"></svg:path><svg:path stroke="#fff" d="M12 42V6"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 6H36V38L40 42L44 38V6Z"></svg:path><svg:path stroke="#fff" d="M36 12H44"></svg:path><svg:path stroke="#000" d="M30 6H4"></svg:path><svg:path stroke="#000" d="M30 42H4"></svg:path><svg:path stroke="#000" d="M36 6V22"></svg:path><svg:path stroke="#000" d="M44 6V22"></svg:path></svg:g>`,
})
export class IconParkNotebookAndPenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNotebookOneIcon],svg[icon-park-notebook-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 4V44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 12H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 20H32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10 4H22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10 44H22"></svg:path></svg:g>`,
})
export class IconParkNotebookOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNotepadIcon],svg[icon-park-notepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M18 8H11C10.4477 8 10 8.44772 10 9V43C10 43.5523 10.4477 44 11 44H39C39.5523 44 40 43.5523 40 43V9C40 8.44772 39.5523 8 39 8H32"></svg:path><svg:path fill="#2F88FF" d="M18 13V8H21.9505C21.9778 8 22 7.97784 22 7.9505V6C22 4.34315 23.3431 3 25 3C26.6569 3 28 4.34315 28 6V7.9505C28 7.97784 28.0222 8 28.0495 8H32V13C32 13.5523 31.5523 14 31 14H19C18.4477 14 18 13.5523 18 13Z"></svg:path></svg:g>`,
})
export class IconParkNotepadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNotesIcon],svg[icon-park-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 6C8 4.89543 8.89543 4 10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 20H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 28H32"></svg:path></svg:g>`,
})
export class IconParkNotesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNuclearPlantIcon],svg[icon-park-nuclear-plant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 44H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 14H36"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M14 14H24H34L34.8772 21.0175C34.9589 21.6709 35.1049 22.3147 35.3131 22.9394L38.6474 32.9422C38.8817 33.6452 39.0372 34.3721 39.1109 35.1095L40 44H8L8.88905 35.1095C8.96279 34.3721 9.11826 33.6452 9.35259 32.9422L12.6869 22.9394C12.8951 22.3147 13.0411 21.6709 13.1228 21.0175L14 14Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 8L24.8284 7.17157C25.5786 6.42143 26.596 6 27.6569 6H28.3431C29.404 6 30.4214 5.57857 31.1716 4.82843L32 4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M17 31C17 32.8728 17.7354 34.5738 18.9333 35.83C19.5891 36.5178 20.3836 37.0722 21.2718 37.4484"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M31.0004 31C31.0004 32.8728 30.2649 34.5738 29.0671 35.83C28.4112 36.5178 27.6168 37.0722 26.7285 37.4484"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M18.9336 26.17C20.2085 24.8331 22.0071 24 24.0003 24C25.9935 24 27.7922 24.8331 29.067 26.17"></svg:path><svg:circle cx="24" cy="31" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkNuclearPlantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNurseCapIcon],svg[icon-park-nurse-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 10C12.7433 10 5.98524 16.7481 4.37521 18.5579C4.1348 18.8281 4.0869 19.2064 4.22726 19.5397L11.5526 36.9373C11.7887 37.4982 12.4705 37.7313 13.0196 37.4691C14.8237 36.6075 18.876 35 24 35C29.124 35 33.1763 36.6075 34.9804 37.4691C35.5295 37.7313 36.2113 37.4982 36.4474 36.9373L43.7727 19.5397C43.9131 19.2064 43.8652 18.8281 43.6248 18.5579C42.0148 16.7481 35.2568 10 24 10Z"></svg:path><svg:path stroke="#fff" d="M20 24.001L28 24.001"></svg:path><svg:path stroke="#fff" d="M24 20V28"></svg:path></svg:g>`,
})
export class IconParkNurseCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNutIcon],svg[icon-park-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37.6988 6C37.172 6.53445 35.2393 8.67227 34.0096 9.74118C33.8339 10.2756 36.1178 12.4134 36.6448 12.9479C37.1718 13.4824 43.4958 9.74118 42.9688 9.20672C42.5472 8.77916 39.2798 6.89076 37.6988 6Z"></svg:path><svg:path fill="#2F88FF" d="M11.3719 16.7217C11.36 16.634 11.3502 16.5462 11.3424 16.4585C9.4559 18.2893 8.01647 20.3906 7.0427 22.6001C8.63583 22.934 9.83221 24.3469 9.83221 26.0393C9.83221 27.9799 8.259 29.5531 6.31834 29.5531C6.04958 29.5531 5.78787 29.523 5.5364 29.4658C5.51575 33.0119 6.68525 36.4207 9.11654 39.0671C12.6211 42.8817 17.9257 44.218 23.1469 43.1314C26.3597 42.4628 29.541 40.8768 32.2518 38.3863C33.5954 37.152 34.7273 35.7837 35.6415 34.3347C33.4171 35.0047 30.9668 33.9228 30.0408 31.7373C29.5786 30.6464 28.6198 29.8445 27.4644 29.5823L25.7817 29.2005C23.8508 28.7623 22.2625 27.3956 21.5413 25.5516L21.4507 25.32C20.6588 23.2954 18.7636 21.9145 16.5937 21.7812C13.9334 21.6177 11.7597 19.5965 11.4034 16.9551L11.3719 16.7217Z"></svg:path><svg:path d="M13.1544 11.6583L12.9027 11.9274C11.6986 13.2147 11.1367 14.975 11.3724 16.7218L11.4039 16.9553C11.7602 19.5967 13.9339 21.6178 16.5942 21.7813C18.7641 21.9147 20.6592 23.2955 21.4511 25.3201L21.5417 25.5517C22.263 27.3957 23.8513 28.7624 25.7822 29.2006L27.4649 29.5824C28.6203 29.8446 29.579 30.6465 30.0413 31.7374C31.0372 34.0878 33.7959 35.1617 36.1408 34.153C38.5094 33.134 40.2249 30.9542 40.6235 28.4068L40.8314 27.0776C40.9435 26.3613 40.9768 25.635 40.9308 24.9115L40.8234 23.2211C40.607 19.8167 39.3876 16.5526 37.3188 13.8402L37.0669 13.51C35.3158 11.214 32.9685 9.4422 30.2806 8.38727C27.9571 7.47542 25.4507 7.12735 22.9667 7.37161L21.5614 7.50979C18.3483 7.82575 15.36 9.30035 13.1544 11.6583Z"></svg:path></svg:g>`,
})
export class IconParkNutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkNutritionIcon],svg[icon-park-nutrition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M24 42C24.8653 42 26.8503 42 29.9551 42C30.0381 39.2631 30.4393 37.7582 31.1586 37.4852C38.6685 34.6357 44 27.434 44 19H4C4 27.2514 9.10319 34.3234 16.3568 37.2941C17.1151 37.6047 17.6815 39.1733 18.056 42C21.0857 42 23.067 42 24 42Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.4434 26.0225C14.803 27.2103 15.2786 28.191 15.8702 28.9646C16.4484 29.7209 17.1619 30.4223 18.0104 31.0688"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32.2009 8.01759C30.9409 7.31418 29.5829 6.76784 28.1528 6.40474M22.0507 6C14.9273 6.8226 9.1442 12.0978 7.5 19M40.5 18.9965C39.8296 16.1847 38.4722 13.643 36.6172 11.5626"></svg:path></svg:g>`,
})
export class IconParkNutritionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOceanengineIcon],svg[icon-park-oceanengine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.4826 8.47412L23.8804 16.6267H4.75781L7.21558 8.47412H21.4826Z"></svg:path><svg:path d="M9.1335 18.1254L17.3461 20.1036L7.81473 36.6485L2 30.4741L9.1335 18.1254Z"></svg:path><svg:path d="M11.292 33.6512L17.1067 27.4768L26.698 44.0218L18.4255 46L11.292 33.6512Z"></svg:path><svg:path d="M40.0652 39.4659H25.7982L23.4004 31.3733H42.523"></svg:path><svg:path d="M45.2806 17.466L38.1471 29.8747L29.9346 27.8965L39.4659 11.3515"></svg:path><svg:path d="M35.989 14.3488L30.1743 20.5232L20.583 3.91825L28.8555 2L35.989 14.3488Z"></svg:path>`,
})
export class IconParkOceanengineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOctagonIcon],svg[icon-park-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M15.4102 42.3887L5.56076 32.1812C5.20103 31.8083 5 31.3105 5 30.7924V17.2076C5 16.6895 5.20103 16.1917 5.56076 15.8188L15.4102 5.61126C15.7871 5.22064 16.3066 5 16.8494 5H31.1506C31.6934 5 32.2129 5.22064 32.5898 5.61126L42.4392 15.8188C42.799 16.1917 43 16.6895 43 17.2076V30.7924C43 31.3105 42.799 31.8083 42.4392 32.1812L32.5898 42.3887C32.2129 42.7794 31.6934 43 31.1506 43H16.8494C16.3066 43 15.7871 42.7794 15.4102 42.3887Z"></svg:path>`,
})
export class IconParkOctagonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOffScreenIcon],svg[icon-park-off-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 6V15H42"></svg:path><svg:path d="M15 6V15H6"></svg:path><svg:path d="M15 42V33H6"></svg:path><svg:path d="M33 42V33H41.8995"></svg:path></svg:g>`,
})
export class IconParkOffScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOffScreenOneIcon],svg[icon-park-off-screen-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6L16 15.8995"></svg:path><svg:path d="M6 41.8995L16 32"></svg:path><svg:path d="M42.0001 41.8995L32.1006 32"></svg:path><svg:path d="M41.8995 6L32 15.8995"></svg:path><svg:path d="M32 7V16H41"></svg:path><svg:path d="M16 7V16H7"></svg:path><svg:path d="M16 41V32H7"></svg:path><svg:path d="M32 41V32H40.8995"></svg:path></svg:g>`,
})
export class IconParkOffScreenOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOffScreenTwoIcon],svg[icon-park-off-screen-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M41 19H29V7"></svg:path><svg:path d="M18 6H6V18"></svg:path><svg:path d="M30 42H42V30"></svg:path><svg:path d="M7 29H19V41"></svg:path><svg:path d="M42 6L29 19"></svg:path><svg:path d="M19 29L6 42"></svg:path></svg:g>`,
})
export class IconParkOffScreenTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOilIndustryIcon],svg[icon-park-oil-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="36" x="10" y="6" fill="#2F88FF" stroke="#000"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M20.643 23.8886C22.0743 22.0081 23.1776 19.4103 23.774 18C24.8177 19.4103 27.084 22.9484 27.7997 24.8288C28.6942 27.1793 26.4578 30 23.774 30C21.0903 30 18.8538 26.2391 20.643 23.8886Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 6H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 42H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 24H10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 24H42"></svg:path></svg:g>`,
})
export class IconParkOilIndustryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOkayIcon],svg[icon-park-okay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.1138 24.9462C12.7115 27.6918 12.2869 31.0328 12.4644 33.3562C12.5487 34.4607 13.6689 35.0695 14.6977 34.6589C15.4421 34.3618 16.2574 33.9911 16.8445 33.5997C18.5752 32.4459 17.9983 31.2921 18.5752 29.5614C19.1521 27.8307 21.6924 26.4229 24 26.9998C26.3076 27.5767 27.2286 29.5614 27.2286 31.2921C27.2286 33.0228 26.5 34.9998 24.3442 35.9073C21.9663 36.9083 20.8828 35.9073 17.9983 35.3304C16.4951 35.0298 14.992 36.3447 14.1267 37.298C13.6367 37.8378 13.5842 38.6234 14.0092 39.2156C14.2979 39.6178 14.6703 40.0791 15.1138 40.5225C16.2676 41.6763 20.8828 45.1377 25.498 44.5608C30.1131 43.9839 34.1514 40.5225 35.8821 36.4842C37.6128 32.4459 36.459 27.8307 33.5745 24.3693C30.69 20.908 25.498 20.3311 24.3442 20.3311C23.1904 20.3311 19.1521 20.3311 15.1138 24.9462Z"></svg:path><svg:path d="M31.5623 22.6385L12.6433 8.171C12.2451 7.86654 11.6761 7.89998 11.3792 8.30379C10.6663 9.27349 9.9929 10.8109 11.0755 12.2544C12.46 14.1004 17.8059 18.7925 20.3057 20.9078"></svg:path><svg:path d="M35.0005 25.9998L23.1413 4.19811C22.902 3.75806 22.3691 3.5566 21.9334 3.8039C20.8867 4.39808 19.644 5.52689 20.0432 7.28675C20.5537 9.53717 22.5817 13.5483 24.0005 16.4998"></svg:path><svg:path d="M36 28L35.0503 7.69221C35.0269 7.19215 34.6358 6.77854 34.1362 6.81046C32.935 6.88721 31.3232 7.35913 30.913 9.11686C30.3885 11.3641 30.0139 14.7253 30 18"></svg:path></svg:g>`,
})
export class IconParkOkayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOneIcon],svg[icon-park-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M11 40L6.9395 31.2023C5.84497 28.8308 6.76016 26.0164 9.04019 24.7422L20.2971 18.4516C21.3325 17.873 22.6117 17.9588 23.5606 18.6704L24.587 19.4403C25.2089 19.9067 26.1018 19.5164 26.1817 18.7432L27.3708 7.24931C27.4534 6.45005 27.8533 5.71736 28.4808 5.2154L28.6963 5.04293C29.4385 4.44919 30.5084 4.50844 31.1805 5.18051C31.7052 5.70522 32 6.41688 32 7.15893V29.4194C32 30.2579 32.9695 30.7244 33.6243 30.2006L37 27.5C38.6529 26.1777 40.8749 27.041 42.255 27.945C42.6936 28.2323 42.7587 28.8265 42.447 29.2482L34.5 40C34.5 40 31 44 23 44C15 44 11.6667 41.3333 11 40Z"></svg:path>`,
})
export class IconParkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOneKeyIcon],svg[icon-park-one-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M21.2261 18L26.0001 13.0166V34"></svg:path></svg:g>`,
})
export class IconParkOneKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOneOneIcon],svg[icon-park-one-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25.7446 44H24.8495C19.6392 44 14.7797 41.3742 11.9243 37.016L9.72884 33.6651C8.17072 31.2869 8.63077 28.1201 10.8012 26.2836L13.0887 24.3481C13.3496 24.1273 13.5 23.8029 13.5 23.4611V7.25C13.5 5.45507 14.9551 4 16.75 4C18.5449 4 20 5.45507 20 7.25V16.25C20 14.4551 21.4551 13 23.25 13C25.0449 13 26.5 14.4551 26.5 16.25V17.75C26.5 15.9551 27.9551 14.5 29.75 14.5C31.5449 14.5 33 15.9551 33 17.75V21.75C33 19.9551 34.4551 18.5 36.25 18.5C38.0449 18.5 39.5 19.9551 39.5 21.75V31.9688C39.5 33.6177 39.0018 35.2282 38.0707 36.589L37.097 38.012C34.5331 41.7593 30.2851 44 25.7446 44Z"></svg:path>`,
})
export class IconParkOneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOneThirdRotationIcon],svg[icon-park-one-third-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36.0001 40.015C32.6575 42.5122 28.5025 44 24.0001 44C16.5973 44 10.1338 39.978 6.67578 34H15.0001"></svg:path><svg:path d="M32 5.66406C39.0636 8.75029 44 15.7986 44 23.9999C44 27.6428 43.0261 31.0582 41.3244 33.9999L37.282 26.9999"></svg:path><svg:path d="M4.09875 26C4.03344 25.3422 4 24.675 4 24C4 12.9543 12.9543 4 24 4L19.9577 11"></svg:path><svg:path fill="#2F88FF" d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"></svg:path></svg:g>`,
})
export class IconParkOneThirdRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOneToManyIcon],svg[icon-park-one-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 7H6C4.89543 7 4 7.89543 4 9V39C4 40.1046 4.89543 41 6 41H42C43.1046 41 44 40.1046 44 39V9C44 7.89543 43.1046 7 42 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M11 20.5799L15 18V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29 30V18L37 30V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 20V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 27V28"></svg:path></svg:g>`,
})
export class IconParkOneToManyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOneToOneIcon],svg[icon-park-one-to-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 7H6C4.89543 7 4 7.89543 4 9V39C4 40.1046 4.89543 41 6 41H42C43.1046 41 44 40.1046 44 39V9C44 7.89543 43.1046 7 42 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M12 20.5799L16 18V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M31 20.5799L35 18V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 20V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 27V28"></svg:path></svg:g>`,
})
export class IconParkOneToOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOnesiesIcon],svg[icon-park-onesies-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 21L4 11C5.83333 9.66667 13 5 24 5C35 5 42 9.66667 44 11L41 21H34V37C34 41 31 44 27 44H21C17 44 14 41 14 37V21H7Z"></svg:path><svg:path stroke="#fff" d="M34 34C34 34 25 34 25 44"></svg:path><svg:path stroke="#fff" d="M14 34C14 34 23 34 23 44"></svg:path><svg:path stroke="#fff" d="M29.811 5.5C29.9344 5.97943 30 6.48205 30 7C30 10.3137 27.3137 13 24 13C20.6863 13 18 10.3137 18 7C18 6.48205 18.0656 5.97943 18.189 5.5"></svg:path><svg:path stroke="#000" d="M35.9997 6.98996C32.8112 5.88268 28.7837 5 23.9997 5C19.2157 5 15.1568 5.88268 11.9463 6.98996"></svg:path><svg:path stroke="#000" d="M14 31C14 31 14 35.875 14 37"></svg:path><svg:path stroke="#000" d="M34 31C34 31 34 35.875 34 37"></svg:path><svg:path stroke="#000" d="M21 44C25 44 24 44 27 44"></svg:path></svg:g>`,
})
export class IconParkOnesiesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOnlineMeetingIcon],svg[icon-park-online-meeting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 8H4V38H19L24 43L29 38H44V8Z"></svg:path><svg:path stroke="#fff" d="M12 19V27"></svg:path><svg:path stroke="#fff" d="M20 16V30"></svg:path><svg:path stroke="#fff" d="M28 21V25"></svg:path><svg:path stroke="#fff" d="M36 19V27"></svg:path></svg:g>`,
})
export class IconParkOnlineMeetingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOpenIcon],svg[icon-park-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M27.9467 16.8281L40.7568 7.73711C41.6731 7.08684 42.9535 7.40693 43.4559 8.4119C43.7856 9.07125 43.688 9.86396 43.2083 10.4237L41 13L35.7241 20.0345C35.2788 20.6283 35.1989 21.4199 35.5166 22.0907L42.6471 37.1438C43.2756 38.4707 42.3078 40 40.8396 40H32.6363C31.6844 40 30.8645 39.3291 30.676 38.3961L27.5197 22.7739L27.1139 18.6553C27.0435 17.9409 27.3613 17.2436 27.9467 16.8281Z"></svg:path><svg:path d="M28 23L35 21"></svg:path><svg:path d="M19.9359 17.1028L7.20861 8.19574C6.30625 7.56424 5.05387 7.87714 4.55456 8.85884C4.21946 9.51768 4.31813 10.314 4.8039 10.8711L7 13.3898L12.2323 20.0262C12.7026 20.6227 12.7943 21.4342 12.4692 22.1207L5.35292 37.1438C4.7244 38.4707 5.69217 40 7.1604 40H15.322C16.2925 40 17.1229 39.3033 17.2916 38.3476L20 23L20.7526 19.1224C20.903 18.347 20.5831 17.5557 19.9359 17.1028Z"></svg:path><svg:path d="M13 21L20 23"></svg:path></svg:g>`,
})
export class IconParkOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOpenAnAccountIcon],svg[icon-park-open-an-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 24V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H24"></svg:path><svg:path d="M39.0508 33L39.0508 43"></svg:path><svg:path d="M44 37.9497L34 37.9497"></svg:path><svg:circle cx="24" cy="18" r="5" fill="#2F88FF"></svg:circle><svg:path d="M33 31C33 26.5817 28.9706 23 24 23C19.0294 23 15 26.5817 15 31"></svg:path></svg:g>`,
})
export class IconParkOpenAnAccountIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOpenDoorIcon],svg[icon-park-open-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M20 4V44L42 38V10L20 4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 10H20V38H6V10Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 22V26"></svg:path></svg:g>`,
})
export class IconParkOpenDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOpenOneIcon],svg[icon-park-open-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 18V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V18"></svg:path><svg:path d="M21 26L33 13"></svg:path><svg:path d="M26 21L30 25"></svg:path><svg:path d="M31 16L35 20"></svg:path><svg:path d="M6 30V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V30"></svg:path><svg:circle cx="18" cy="30" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkOpenOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOptimizeIcon],svg[icon-park-optimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M19 7.99991L28 15.9999L38.0323 10.1097L33 20.9999L42 28.9999L30 27.9999L25.5 37.9999L23 26.9999L11.0004 25.9999L21.5082 19.6499L19 7.99991Z"></svg:path><svg:path d="M8 42.0205L23 27"></svg:path></svg:g>`,
})
export class IconParkOptimizeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOptionalIcon],svg[icon-park-optional-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" d="M14 28L22 20L26 27L34 19"></svg:path></svg:g>`,
})
export class IconParkOptionalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOrangeIcon],svg[icon-park-orange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 25.9999C41 35.9411 35 43.9999 24 43.9999C13 43.9999 7 35.9411 7 25.9999C7 22.3197 8.10446 18.8975 10 16.0465C13.2248 11.1965 17.7391 12.9999 24 12.9999C30.2609 12.9999 34.7752 11.1965 38 16.0465C39.8955 18.8975 41 22.3197 41 25.9999Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 13L29 9H26L24 7L22 9H19L22 13"></svg:path><svg:circle cx="18" cy="20" r="2" fill="#fff"></svg:circle><svg:circle cx="15" cy="27" r="2" fill="#fff"></svg:circle><svg:circle cx="21" cy="25" r="2" fill="#fff"></svg:circle><svg:circle cx="18" cy="32" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkOrangeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOrangeOneIcon],svg[icon-park-orange-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M34.1508 34.8492C42.3518 26.6482 42.3518 13.3518 34.1508 5.15076L4.45227 34.8492C12.6533 43.0503 25.9497 43.0503 34.1508 34.8492Z"></svg:path><svg:path stroke="#fff" d="M19.3011 19.9999L34.1504 34.8491"></svg:path><svg:path stroke="#fff" d="M19.3018 19.9997V41.2129"></svg:path><svg:path stroke="#fff" d="M19.3015 19.9999L39.8076 20.707"></svg:path><svg:path stroke="#000" d="M39.7545 14.9967C41.4194 21.8766 39.5661 29.4339 34.1947 34.8053C28.8232 40.1768 21.2659 42.0301 14.3861 40.3652"></svg:path><svg:path stroke="#000" d="M14.3516 24.9496L22.8369 16.4644"></svg:path></svg:g>`,
})
export class IconParkOrangeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOrangeStationIcon],svg[icon-park-orange-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M17.0602 9.61532C23.109 10.884 24.2741 13.0392 24.2759 13.0419C22.039 0.115231 15.1907 3.27969 13.7328 4.029C13.5511 4.12245 13.4266 4.29623 13.4009 4.49897C13.2722 5.51308 13.1248 8.79011 17.0602 9.61532Z"></svg:path><svg:path d="M14.6533 22.6922C14.079 24.2866 13.9067 26.0745 14.2162 27.9191C14.9923 32.5434 18.8163 35.8948 23.2856 36.2602L24.8155 36.8046C25.4163 36.9988 26.203 37.1906 27.1263 37.325C28.4925 37.524 29.8938 37.5536 31.2806 37.3569C34.6469 36.8793 37.484 35.1461 39.4589 31.8555L39.9035 31.0789C38.6918 37.7554 33.9368 43.8959 26.3379 45.3186C21.0483 46.309 16.0475 44.9445 12.3111 41.9714L12.3546 42.0566C9.88584 37.2646 9.44407 32.944 10.5746 29.0915C11.1158 27.2472 12.0531 25.5984 13.2809 24.136C13.7121 23.6225 14.1626 23.1513 14.6266 22.7174L14.6533 22.6922ZM17.3886 14.3357C19.8981 13.9397 23.9939 13.9624 26.2919 16.5287C26.3246 16.5651 26.2924 16.6229 26.2444 16.6131C25.0173 16.3627 23.3527 16.3577 22.0748 16.5723C19.3808 17.0242 17.2103 18.4602 15.8117 20.4549L15.3199 20.8271C15.0945 21.0009 14.8544 21.1896 14.6906 21.3265C13.9337 21.9594 13.202 22.6748 12.515 23.493C11.2031 25.0556 10.1978 26.824 9.61506 28.81C8.59888 32.2728 8.7749 36.0805 10.4104 40.2026C8.98209 38.6478 7.83206 36.8075 7.04463 34.7454C5.2083 29.936 5.76786 23.6769 8.92262 19.6371C11.1728 16.7557 14.4873 14.7937 17.3886 14.3357ZM31.6804 7.03921C36.2828 0.877215 41.8021 5.38108 42.5278 6.01854C42.5812 6.06562 42.6143 6.12925 42.6216 6.19987C42.72 7.15435 42.978 14.044 29.7209 13.8113C33.3295 14.6958 37.1554 17.7034 38.7565 21.0051C39.2929 22.1118 39.7066 23.2639 39.9258 24.4739C40.1388 25.6496 40.2313 26.8522 40.2071 28.0576C40.1543 28.3361 39.9724 28.7928 39.6895 29.3632L39.5747 29.5903L39.335 30.0434L38.7827 31.0295C36.9618 34.2541 34.3235 35.9152 31.1402 36.3668C29.8549 36.5491 28.5477 36.5215 27.2704 36.3355C26.8224 36.2702 26.4096 36.1908 26.0392 36.1046C28.8332 35.5585 31.1379 33.8937 32.5666 31.6575C32.8966 31.2174 33.1774 30.7326 33.3971 30.1923C34.403 27.7165 34.5362 25.2497 33.7565 22.4833C32.5084 18.0553 29.1651 14.8147 24.9468 13.3616C24.9101 13.3489 24.9094 13.2982 24.9467 13.2874C25.5008 13.1267 27.8401 12.1805 31.6804 7.03921Z"></svg:path></svg:g>`,
})
export class IconParkOrangeStationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOrderIcon],svg[icon-park-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M33.0499 7H38C39.1046 7 40 7.89543 40 9V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42L8 9C8 7.89543 8.89543 7 10 7H16H17V10H31V7H33.0499Z"></svg:path><svg:rect width="14" height="6" x="17" y="4" stroke="#000" stroke-linecap="round"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M26.9996 19L19 27.0012H29.004L21.0003 35.0018"></svg:path></svg:g>`,
})
export class IconParkOrderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOrderedListIcon],svg[icon-park-ordered-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 4V13"></svg:path><svg:path d="M12 13H6"></svg:path><svg:path d="M12 27H6"></svg:path><svg:path d="M6 19.9998C6 19.9998 9 16.9998 11 19.9998C13 22.9999 6 26.9998 6 26.9998"></svg:path><svg:path d="M6.00016 34.5001C6.00016 34.5001 8.00016 31.5 11.0002 33.5C14.0002 35.5 11.0002 38 11.0002 38C11.0002 38 14.0002 40.5 11.0002 42.5C8.00015 44.5 6.00015 41.5 6.00015 41.5"></svg:path><svg:path d="M11 38H9"></svg:path><svg:path d="M9 4L6 6"></svg:path><svg:path d="M21 24H43"></svg:path><svg:path d="M21 38H43"></svg:path><svg:path d="M21 10H43"></svg:path></svg:g>`,
})
export class IconParkOrderedListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOrthopedicIcon],svg[icon-park-orthopedic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M23.0283 36L34.0026 42.9987V24C41.6769 18.7896 44.496 13.9783 42.4597 9.56594C39.4054 2.94746 34.4604 3.38382 31.0068 5.00174C28.7044 6.08035 27.0354 9.09334 25.9998 14.0407C22.9616 7.57467 18.6951 4.34165 13.2002 4.34165C4.95788 4.34165 4.29401 14.0648 5.47501 16.446C6.656 18.8273 7.77278 20.1122 13.0007 24C12.9255 35.5632 13.4061 41.7818 14.4426 42.6557C16.3435 44.1284 19.2054 41.9098 23.0283 36Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 25V31"></svg:path></svg:g>`,
})
export class IconParkOrthopedicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOscillatorIcon],svg[icon-park-oscillator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 9V24C7 27.3137 9.68629 30 13 30H35C38.3137 30 41 27.3137 41 24V9"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 10C7 6.68629 9.68629 4 13 4H35C38.3137 4 41 6.68629 41 10C41 13.3137 38.3137 16 35 16H13C9.68629 16 7 13.3137 7 10Z"></svg:path><svg:circle cx="15" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="21" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="27" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="33" cy="10" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 30V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 30V44"></svg:path></svg:g>`,
})
export class IconParkOscillatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOtherIcon],svg[icon-park-other-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M22.799 4.20101L4.41421 22.5858C3.63317 23.3668 3.63316 24.6332 4.41421 25.4142L22.799 43.799C23.58 44.58 24.8464 44.58 25.6274 43.799L44.0122 25.4142C44.7932 24.6332 44.7932 23.3668 44.0122 22.5858L25.6274 4.20101C24.8464 3.41996 23.58 3.41996 22.799 4.20101Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 24H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 18V30"></svg:path></svg:g>`,
})
export class IconParkOtherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOutboundIcon],svg[icon-park-outbound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 24L24 24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 18L40 24L34 30"></svg:path><svg:circle cx="20" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M40.706 13C39.9214 11.8109 39.0133 10.7105 38 9.71713C34.3925 6.18064 29.4509 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C29.4509 44 34.3925 41.8194 38 38.2829C39.0133 37.2895 39.9214 36.1891 40.706 35"></svg:path></svg:g>`,
})
export class IconParkOutboundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOutdoorIcon],svg[icon-park-outdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 42L18 10L28 34L32 22L44 42H4Z"></svg:path><svg:path d="M37 14C39.7614 14 42 11.7614 42 9C42 6.23858 39.7614 4 37 4C34.2386 4 32 6.23858 32 9C32 11.7614 34.2386 14 37 14Z"></svg:path></svg:g>`,
})
export class IconParkOutdoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOutgoingIcon],svg[icon-park-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M18 35C18 32.7909 16.2091 31 14 31C11.7909 31 10 32.7909 10 35C10 37.2091 11.7909 39 14 39C16.2091 39 18 37.2091 18 35Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M37 35C37 32.7909 35.2091 31 33 31C30.7909 31 29 32.7909 29 35C29 37.2091 30.7909 39 33 39C35.2091 39 37 37.2091 37 35Z"></svg:path><svg:path stroke-linecap="round" d="M4 35H10"></svg:path><svg:path stroke-linecap="round" d="M18 35H29"></svg:path><svg:path stroke-linecap="round" d="M37 35H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 19L44 13L38 7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 13H44"></svg:path></svg:g>`,
})
export class IconParkOutgoingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOvalLoveIcon],svg[icon-park-oval-love-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M29.5164 17.5001C35.0393 27.0659 34.4759 37.7307 28.2581 41.3206C22.0403 44.9104 12.5226 40.0659 6.99976 30.5001C1.47691 20.9342 2.04029 10.2694 8.25809 6.67962C14.4759 3.08977 23.9936 7.93428 29.5164 17.5001Z"></svg:path><svg:path d="M18.2581 17.5001C12.7353 27.0659 13.2986 37.7307 19.5164 41.3206C25.7342 44.9104 35.2519 40.0659 40.7748 30.5001C46.2976 20.9342 45.7342 10.2694 39.5164 6.67962C33.2986 3.08977 23.7809 7.93428 18.2581 17.5001Z"></svg:path><svg:path d="M23.7529 10.3442C25.8979 12.2519 27.8821 14.6692 29.5165 17.5C35.0394 27.0658 34.476 37.7306 28.2582 41.3205C26.96 42.07 25.518 42.4518 23.9986 42.4998"></svg:path></svg:g>`,
})
export class IconParkOvalLoveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOvalLoveTwoIcon],svg[icon-park-oval-love-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.7839 10.372C18.6739 5.81238 12.6448 4.14698 8.25809 6.67962C2.04029 10.2694 1.47691 20.9342 6.99976 30.5001C10.6308 36.7892 15.9885 41.0375 21 42.1899"></svg:path><svg:path d="M18.2581 17.5001C12.7353 27.0659 13.2986 37.7307 19.5164 41.3206C25.7342 44.9104 35.2519 40.0659 40.7748 30.5001C46.2976 20.9342 45.7342 10.2694 39.5164 6.67962C33.2986 3.08977 23.7809 7.93428 18.2581 17.5001Z"></svg:path></svg:g>`,
})
export class IconParkOvalLoveTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOvalOneIcon],svg[icon-park-oval-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="#2F88FF" stroke="#000" stroke-width="4" rx="14" ry="20"></svg:ellipse>`,
})
export class IconParkOvalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOvenIcon],svg[icon-park-oven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="28" x="4" y="8" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="16" height="12" x="12" y="16" fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="1"></svg:rect><svg:circle cx="37" cy="15" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 22H38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 29H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 36L12 42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 36L36 42"></svg:path></svg:g>`,
})
export class IconParkOvenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOvenTrayIcon],svg[icon-park-oven-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" rx="2"></svg:rect><svg:path d="M4 16H44"></svg:path><svg:path d="M4 24H44"></svg:path><svg:path d="M4 32H44"></svg:path></svg:g>`,
})
export class IconParkOvenTrayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOverallReductionIcon],svg[icon-park-overall-reduction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M15 15H33V33H15V15Z"></svg:path><svg:path d="M11 43V37H5"></svg:path><svg:path d="M37 43V37H43"></svg:path><svg:path d="M11 5V11H5"></svg:path><svg:path d="M37 5V11H43"></svg:path></svg:g>`,
})
export class IconParkOverallReductionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkOwlIcon],svg[icon-park-owl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.35826 7.30954C9.01959 11.1582 12.544 12.4023 14.2182 12.5245C17.0733 11.1273 20.4207 10.3232 24 10.3232C27.5793 10.3232 30.9267 11.1272 33.7818 12.5245C35.456 12.4023 38.9804 11.1582 41.6417 7.30954C42.3988 6.4886 44.6721 6.8713 43.8063 13.8831C43.5173 15.6385 42.7186 19.4684 42.1897 21.3732C42.6781 22.7341 42.9399 24.1731 42.9399 25.6616C42.9399 34.1328 34.4602 41 24 41C13.5398 41 5.06009 34.1328 5.06009 25.6616C5.06009 24.1731 5.3219 22.7341 5.81026 21.3732C5.28138 19.4684 4.48265 15.6385 4.19369 13.8831C3.32787 6.8713 5.60125 6.4886 6.35826 7.30954Z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M25 31.25C25 31.9404 24 35 24 35C24 35 23 31.9404 23 31.25C23 30.5596 23.4477 30 24 30C24.5523 30 25 30.5596 25 31.25Z"></svg:path><svg:circle cx="17" cy="22" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:circle cx="31" cy="22" r="4" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkOwlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPacifierIcon],svg[icon-park-pacifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30.6561 21.5855L34.7593 17.4823C36.761 18.0169 38.9853 17.499 40.5556 15.9286C42.8988 13.5855 42.8988 9.78647 40.5556 7.44332C38.2125 5.10018 34.4135 5.10018 32.0703 7.44332C30.5 9.0137 29.9821 11.238 30.5166 13.2397L26.4135 17.3428"></svg:path><svg:path fill="#2F88FF" d="M41.263 32.1922L15.8071 6.73633L11.918 10.6254L19.6962 21.9391L16.8678 26.1818L21.464 30.778L25.7066 27.9495L37.3739 36.0813L41.263 32.1922Z"></svg:path><svg:path d="M19.3197 21.8847C15.9285 20.8969 12.117 21.74 9.44302 24.4139C5.53778 28.3192 5.53778 34.6508 9.44302 38.556C13.3483 42.4613 19.6799 42.4613 23.5852 38.556C26.2591 35.8821 27.1022 32.0706 26.1144 28.6793"></svg:path></svg:g>`,
})
export class IconParkPacifierIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPadIcon],svg[icon-park-pad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M42 4H6V31H42V4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 31V44H6V31"></svg:path><svg:path fill="#fff" d="M16 9H13C12.4477 9 12 9.44772 12 10V13C12 13.5523 12.4477 14 13 14H16C16.5523 14 17 13.5523 17 13V10C17 9.44772 16.5523 9 16 9Z"></svg:path><svg:path fill="#fff" d="M16 16H13C12.4477 16 12 16.4477 12 17V20C12 20.5523 12.4477 21 13 21H16C16.5523 21 17 20.5523 17 20V17C17 16.4477 16.5523 16 16 16Z"></svg:path><svg:path fill="#fff" d="M25.5 9H22.5C21.9477 9 21.5 9.44772 21.5 10V13C21.5 13.5523 21.9477 14 22.5 14H25.5C26.0523 14 26.5 13.5523 26.5 13V10C26.5 9.44772 26.0523 9 25.5 9Z"></svg:path><svg:path fill="#fff" d="M25.5 16H22.5C21.9477 16 21.5 16.4477 21.5 17V20C21.5 20.5523 21.9477 21 22.5 21H25.5C26.0523 21 26.5 20.5523 26.5 20V17C26.5 16.4477 26.0523 16 25.5 16Z"></svg:path><svg:path fill="#000" d="M26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40C25.3807 40 26.5 38.8807 26.5 37.5Z"></svg:path><svg:path fill="#fff" d="M35 9H32C31.4477 9 31 9.44772 31 10V13C31 13.5523 31.4477 14 32 14H35C35.5523 14 36 13.5523 36 13V10C36 9.44772 35.5523 9 35 9Z"></svg:path></svg:g>`,
})
export class IconParkPadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPageIcon],svg[icon-park-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M6 17H42"></svg:path><svg:path stroke-linecap="round" d="M17 42V17"></svg:path></svg:g>`,
})
export class IconParkPageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPageTemplateIcon],svg[icon-park-page-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 4H4V26H23V4Z"></svg:path><svg:path d="M44 34H4V43H44V34Z"></svg:path><svg:path d="M44 4H31V12H44V4Z"></svg:path><svg:path d="M44 18H31V26H44V18Z"></svg:path></svg:g>`,
})
export class IconParkPageTemplateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPagodaIcon],svg[icon-park-pagoda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M18 16H30C30 16 32.4241 18.6725 34.5 19.4286C35.8013 19.9025 38 20 38 20C38 20 36.758 20.7747 35.9 21.1429C34.8147 21.6085 33 22 33 22H24H15C15 22 13.1853 21.6085 12.1 21.1429C11.242 20.7747 10 20 10 20C10 20 12.1987 19.9025 13.5 19.4286C15.5759 18.6725 18 16 18 16Z"></svg:path><svg:path fill="#2F88FF" d="M17 28H31C31 28 33.6275 30.6725 36 31.4286C37.4872 31.9025 40 32 40 32C40 32 38.5806 32.7747 37.6 33.1429C36.3597 33.6085 34 34 34 34H24H14C14 34 11.6403 33.6085 10.4 33.1429C9.41937 32.7747 8 32 8 32C8 32 10.5128 31.9025 12 31.4286C14.3725 30.6725 17 28 17 28Z"></svg:path><svg:path fill="#2F88FF" d="M18 7.42857C20.4505 6.29809 24 4 24 4C24 4 27.5495 6.29809 30 7.42857C30.7716 7.78453 32 8.28571 32 8.28571C32 8.28571 31.2736 8.84176 30.8 9.14286C30.1825 9.53544 29 10 29 10H24H19C19 10 17.8175 9.53544 17.2 9.14286C16.7264 8.84176 16 8.28571 16 8.28571C16 8.28571 17.2284 7.78453 18 7.42857Z"></svg:path><svg:path stroke-linecap="round" d="M21 10V16"></svg:path><svg:path stroke-linecap="round" d="M27 10V16"></svg:path><svg:path stroke-linecap="round" d="M19 22V28"></svg:path><svg:path stroke-linecap="round" d="M29 22V28"></svg:path><svg:path stroke-linecap="round" d="M16 34V44H32V34"></svg:path></svg:g>`,
})
export class IconParkPagodaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPaintIcon],svg[icon-park-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.5355 22.8977L25.435 32.7972"></svg:path><svg:path d="M15.5356 22.8977L7.05025 31.383C4.31658 34.1167 4.31658 38.5488 7.05025 41.2825C9.78387 44.0162 14.2161 44.0162 16.9498 41.2825L25.4351 32.7972"></svg:path><svg:path d="M15.5355 32.7973L11.2928 37.0399"></svg:path><svg:path fill="#2F88FF" d="M25.435 32.7973L40.3424 26.365C43.0296 25.2055 44.1508 21.986 42.4279 19.6202C38.2642 13.9031 32.6507 8.89045 28.5095 5.82296C26.2199 4.12709 23.1795 5.18222 22.0507 7.79827L15.5355 22.8978L25.435 32.7973Z"></svg:path></svg:g>`,
})
export class IconParkPaintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPaintedEggshellIcon],svg[icon-park-painted-eggshell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-width="4" d="M24 44C34.2524 44 40 37.0457 40 26C40 14.9543 31.1316 4 24 4C16.8684 4 8 14.9543 8 26C8 37.0457 13.7476 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="M21 38C22.6569 38 24 36.6569 24 35C24 33.3431 22.6569 32 21 32C19.3431 32 18 33.3431 18 35C18 36.6569 19.3431 38 21 38Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M16 29.6675C17.1046 29.6675 18 28.772 18 27.6675C18 26.5629 17.1046 25.6675 16 25.6675C14.8954 25.6675 14 26.5629 14 27.6675C14 28.772 14.8954 29.6675 16 29.6675Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkPaintedEggshellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPaintedScreenIcon],svg[icon-park-painted-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="28" x="5" y="10" fill="#2F88FF" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 24L13 17"></svg:path><svg:rect width="4" height="4" x="15" y="29" fill="#fff" rx="2" transform="rotate(90 15 29)"></svg:rect></svg:g>`,
})
export class IconParkPaintedScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPalaceIcon],svg[icon-park-palace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M4 18H44L24 6L4 18Z"></svg:path><svg:path d="M44 42L4 42"></svg:path><svg:path d="M9 18V42"></svg:path><svg:path d="M19 18V42"></svg:path><svg:path d="M29 18V42"></svg:path><svg:path d="M39 18V42"></svg:path></svg:g>`,
})
export class IconParkPalaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPalmIcon],svg[icon-park-palm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18.3332 35.8132L8.61924 24.9336C7.18736 23.3298 7.36957 20.8587 9.02119 19.4823C10.6566 18.1195 13.0924 18.3655 14.4223 20.0279L16 22V8.99391C16 7.33944 17.3394 5.99728 18.9939 5.99391C20.6531 5.99054 22 7.33467 22 8.99391V7C22 5.34315 23.3431 4 25 4C26.6569 4 28 5.34315 28 7V8.82927C28 7.17241 29.3431 5.82927 31 5.82927C32.6569 5.82927 34 7.17241 34 8.82927V12.1463C34 10.4895 35.3431 9.14634 37 9.14634C38.6569 9.14634 40 10.4895 40 12.1463V25.8278C40 27.9688 39.3219 30.0547 38.0631 31.7864L35.23 35.6836C35.0855 35.8824 34.8546 36 34.6089 36H18.7504C18.5911 36 18.4393 35.9321 18.3332 35.8132Z"></svg:path><svg:rect width="16" height="8" x="19" y="36" rx="1"></svg:rect></svg:g>`,
})
export class IconParkPalmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPandaIcon],svg[icon-park-panda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:ellipse cx="24" cy="27" fill="#2F88FF" stroke="#000" rx="18" ry="17"></svg:ellipse><svg:ellipse cx="16.933" cy="24.64" fill="#43CCF8" stroke="#fff" rx="3" ry="4" transform="rotate(15 16.933 24.64)"></svg:ellipse><svg:ellipse fill="#43CCF8" stroke="#fff" rx="3" ry="4" transform="scale(-1 1)rotate(15 -109.047 -105.16)"></svg:ellipse><svg:path stroke="#000" stroke-linecap="round" d="M40.9995 20.999C44.1237 17.8748 44.4376 12.7804 41.3134 9.65616C38.1892 6.53196 32.124 6.87507 28.9998 9.99927"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 20.9995C3.87581 17.8753 3.53224 12.7807 6.65644 9.65655C9.78063 6.53236 15.8758 6.87532 19 9.99951"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 35C20.5 36.2935 22.2 38.2769 25 35.8623C27.8 38.2769 29.5 36.2935 30 35"></svg:path></svg:g>`,
})
export class IconParkPandaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPangleIcon],svg[icon-park-pangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M38.4507 23.017L33.1941 20.0096C33.0804 19.9464 32.9414 20.0222 32.9414 20.1612V27.6418C32.9414 27.7808 33.0172 27.8945 33.1309 27.9703L38.3875 30.9777C38.5013 31.0409 38.6403 30.9651 38.6403 30.8261V23.3455C38.6403 23.2065 38.5644 23.0928 38.4507 23.017Z"></svg:path><svg:path d="M31.1109 18.8749L25.8543 15.8675C25.7406 15.8043 25.6016 15.8801 25.6016 16.0191V27.6569C25.6016 27.758 25.6774 27.8338 25.7785 27.8338H31.1362C31.2372 27.8338 31.3131 27.758 31.3131 27.6569V19.2034C31.3004 19.0644 31.2246 18.9381 31.1109 18.8749Z"></svg:path><svg:path d="M18.6775 30.9424L23.9341 27.935C24.0479 27.8718 24.1237 27.7454 24.1237 27.6064V15.1725C24.1237 15.0462 23.9847 14.9577 23.871 15.0209L18.6143 18.0283C18.5006 18.0915 18.4248 18.2178 18.4248 18.3568V30.7907C18.4248 30.9297 18.5638 31.0055 18.6775 30.9424Z"></svg:path><svg:path d="M40.1064 24.2676V27.6794C40.1064 27.7805 40.1823 27.8563 40.2834 27.8563H46.2475C46.4245 27.8563 46.4876 27.6162 46.336 27.5404L40.3718 24.1286C40.2454 24.0528 40.1064 24.1413 40.1064 24.2676Z"></svg:path><svg:path d="M16.6927 19.1274L2.08539 27.5052C1.93376 27.5936 1.99694 27.8211 2.17384 27.8211H16.7811C16.8822 27.8211 16.9581 27.7452 16.9581 27.6442V19.2791C16.9454 19.1401 16.8064 19.0643 16.6927 19.1274Z"></svg:path>`,
})
export class IconParkPangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPanoramaHorizontalIcon],svg[icon-park-panorama-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 11C4 11 13 15 24 15C35 15 44 11 44 11V37C44 37 35 33 24 33C13 33 4 37 4 37V11Z"></svg:path>`,
})
export class IconParkPanoramaHorizontalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPantiesIcon],svg[icon-park-panties-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M44 15C40.9999 12 39 6 39 6C39 6 34 9.5 24 9.5C14 9.5 9 6 9 6C9 6 8 11 4 15C4.00015 27 21 42 21 42H27C27 42 44 27 44 15Z"></svg:path><svg:path d="M44 15C44 15 35.0004 16 31.0002 23C26.9999 30 27 42 27 42"></svg:path><svg:path d="M4 15C4 15 12.9996 16 16.9998 23C21.0001 30 21 42 21 42"></svg:path></svg:g>`,
})
export class IconParkPantiesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPaperMoneyIcon],svg[icon-park-paper-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 7H9C6.23858 7 4 9.23858 4 12V36C4 38.7614 6.23858 41 9 41H39C41.7614 41 44 38.7614 44 36V12C44 9.23858 41.7614 7 39 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 15L24 21L30 15"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 23H31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 29H31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 23V34"></svg:path></svg:g>`,
})
export class IconParkPaperMoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPaperMoneyTwoIcon],svg[icon-park-paper-money-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 13H44V37H4V13Z"></svg:path><svg:path stroke-linecap="round" d="M4 21C8.41828 21 12 17.4183 12 13H4V21Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M4 29C8.41828 29 12 32.5817 12 37H4V29Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M44 29V37H36C36 32.5817 39.5817 29 44 29Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M44 21C39.5817 21 36 17.4183 36 13H44V21Z" clip-rule="evenodd"></svg:path><svg:path d="M24 31C26.7614 31 29 28.3137 29 25C29 21.6863 26.7614 19 24 19C21.2386 19 19 21.6863 19 25C19 28.3137 21.2386 31 24 31Z"></svg:path></svg:g>`,
})
export class IconParkPaperMoneyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPaperShipIcon],svg[icon-park-paper-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" d="M4 24L12.5714 42L24 29L4 24Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M44 24L35.4286 42L24 29L44 24Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M13 42L35 42L24 29L13 42Z"></svg:path><svg:path d="M12 26L24 4L36 26"></svg:path></svg:g>`,
})
export class IconParkPaperShipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPaperclipIcon],svg[icon-park-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26.1219 37.4352C26.1219 37.4352 37.4356 26.1215 40.264 23.293C43.0924 20.4646 44.5066 13.3935 39.5569 8.4438C34.6071 3.49405 27.5361 4.90826 24.7076 7.73669C21.8792 10.5651 7.02998 25.4144 5.61576 26.8286C4.20155 28.2428 2.08023 33.1925 6.32287 37.4352C10.5655 41.6778 15.5153 39.5565 16.9295 38.1423C18.3437 36.7281 33.9 21.1717 35.3142 19.7575C36.7285 18.3433 37.4356 14.8078 35.3142 12.6864C33.1929 10.5651 29.6574 11.2722 28.2432 12.6864C26.829 14.1007 14.8082 26.1215 14.8082 26.1215"></svg:path>`,
})
export class IconParkPaperclipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParabolaIcon],svg[icon-park-parabola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 25H6C12 25 16 9 24 9C32 9 36 25 42 25H44"></svg:path><svg:path d="M4 33V39"></svg:path><svg:path d="M24 33V39"></svg:path><svg:path d="M44 33V39"></svg:path><svg:path d="M4 36H44"></svg:path></svg:g>`,
})
export class IconParkParabolaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParachuteIcon],svg[icon-park-parachute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M16.7273 24C19.1515 21.5758 21.5758 20.3636 24 20.3636C26.4242 20.3636 28.8485 21.5758 31.2727 24C34.101 21.5758 36.2222 20.3636 37.6364 20.3636C39.0505 20.3636 41.1717 21.5758 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C6.82828 21.5758 8.9495 20.3636 10.3636 20.3636C11.7778 20.3636 13.899 21.5758 16.7273 24Z"></svg:path><svg:path stroke-linecap="round" d="M4 24L24 44L16.7273 24"></svg:path><svg:path stroke-linecap="round" d="M31.2727 24L24 44L44 24"></svg:path></svg:g>`,
})
export class IconParkParachuteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphAlphabetIcon],svg[icon-park-paragraph-alphabet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 9H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 19H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 29H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 39H42"></svg:path><svg:path fill="#2F88FF" d="M11 9L7 17H15L11 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 19L7 17M16 19L15 17M7 17L11 9L15 17M7 17H15"></svg:path></svg:g>`,
})
export class IconParkParagraphAlphabetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphBreakIcon],svg[icon-park-paragraph-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 4V44"></svg:path><svg:path d="M42 4V44"></svg:path><svg:path d="M18 26L14 30L18 34"></svg:path><svg:path d="M15 30C15 30 25.7909 30 28 30C31.3137 30 34 27.3137 34 24C34 20.6863 31.3137 18 28 18C26.6852 18 14 18 14 18"></svg:path></svg:g>`,
})
export class IconParkParagraphBreakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphBreakTwoIcon],svg[icon-park-paragraph-break-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9H42"></svg:path><svg:path d="M6 19H42"></svg:path><svg:path d="M6 29H24"></svg:path><svg:path d="M6 39H16"></svg:path><svg:path d="M24 39C24 39 34.2386 39 37 39C39.7614 39 42 36.7614 42 34C42 31.2386 39.7614 29 37 29C35.7115 29 32 29 32 29M24 39L28 35M24 39L28 43"></svg:path></svg:g>`,
})
export class IconParkParagraphBreakTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphCutIcon],svg[icon-park-paragraph-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 4V44"></svg:path><svg:path d="M42 4V44"></svg:path><svg:path d="M14 15H34"></svg:path><svg:path d="M14 33H42"></svg:path></svg:g>`,
})
export class IconParkParagraphCutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphRectangleIcon],svg[icon-park-paragraph-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 9H42"></svg:path><svg:path d="M24 19H42"></svg:path><svg:path d="M6 29H42"></svg:path><svg:path d="M6 39H42"></svg:path><svg:rect width="10" height="10" x="6" y="9" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkParagraphRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphRoundIcon],svg[icon-park-paragraph-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 9H42"></svg:path><svg:path d="M24 19H42"></svg:path><svg:path d="M6 29H42"></svg:path><svg:path d="M6 39H42"></svg:path><svg:circle cx="12" cy="14" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkParagraphRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphTriangleIcon],svg[icon-park-paragraph-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 9H42"></svg:path><svg:path d="M24 19H42"></svg:path><svg:path d="M6 29H42"></svg:path><svg:path d="M6 39H42"></svg:path><svg:path fill="#2F88FF" d="M6 9.76619C6 8.9889 6.84797 8.50878 7.5145 8.9087L14.5708 13.1425C15.2182 13.5309 15.2182 14.4691 14.5708 14.8575L7.5145 19.0913C6.84797 19.4912 6 19.0111 6 18.2338V9.76619Z"></svg:path></svg:g>`,
})
export class IconParkParagraphTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParagraphUnfoldIcon],svg[icon-park-paragraph-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 4V44"></svg:path><svg:path d="M38 4V8"></svg:path><svg:path d="M38 22V26"></svg:path><svg:path d="M38 40V44"></svg:path><svg:path d="M14 15H42"></svg:path><svg:path d="M14 33H42"></svg:path></svg:g>`,
})
export class IconParkParagraphUnfoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParallelGatewayIcon],svg[icon-park-parallel-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M22.7992 4.20102L4.4144 22.5858C3.63336 23.3668 3.63335 24.6332 4.4144 25.4142L22.7992 43.799C23.5802 44.58 24.8466 44.58 25.6276 43.799L44.0124 25.4142C44.7934 24.6332 44.7934 23.3668 44.0124 22.5858L25.6276 4.20102C24.8466 3.41997 23.5802 3.41997 22.7992 4.20102Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.043 15.5342V32.4778"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15.5713 24.0059H32.5149"></svg:path></svg:g>`,
})
export class IconParkParallelGatewayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParallelogramIcon],svg[icon-park-parallelogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M41.2796 8H15.4704C14.5956 8 13.8223 8.5685 13.5614 9.40345L4.81142 37.4035C4.40897 38.6913 5.3711 40 6.72038 40H32.5296C33.4044 40 34.1777 39.4315 34.4386 38.5965L43.1886 10.5965C43.591 9.30869 42.6289 8 41.2796 8Z"></svg:path>`,
})
export class IconParkParallelogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParentingBookIcon],svg[icon-park-parenting-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 31V44C38 44 17.375 44 13.625 44C9.875 44 8 42 8 37C8 32 8 4 8 4H20"></svg:path><svg:circle cx="33" cy="17" r="9" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 18V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 18V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 8C32.8333 7 31.8 4.8 29 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 8C33.0833 7 33.6 4.8 35 4"></svg:path><svg:circle cx="36" cy="16" r="2" fill="#fff"></svg:circle><svg:circle cx="30" cy="16" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 36H38"></svg:path></svg:g>`,
})
export class IconParkParentingBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkParkingIcon],svg[icon-park-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C24 44 40 32 40 19C40 10.7157 32.8366 4 24 4C15.1634 4 8 10.7157 8 19C8 32 24 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 14V30"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M21 14H27C29.2091 14 31 15.7909 31 18C31 20.2091 29.2091 22 27 22H21V14Z"></svg:path></svg:g>`,
})
export class IconParkParkingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPartyBalloonIcon],svg[icon-park-party-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M34 16C35 8 31.1274 4 24.1274 4C17.1274 4 13 9 14 16C15 23 21.2548 28 24.1274 28C27 28 33 24 34 16Z"></svg:path><svg:path d="M25 28C23 28.9697 20 31.8889 20 35C20 38.1111 30 36.4444 30 39.5556C30 42.6667 19 44 19 44"></svg:path></svg:g>`,
})
export class IconParkPartyBalloonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPassportIcon],svg[icon-park-passport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 10H32H38V44H10V10Z"></svg:path><svg:path stroke="#000" d="M10 10L32 4V10"></svg:path><svg:circle cx="24" cy="24" r="4" fill="#2F88FF" stroke="#fff"></svg:circle><svg:path stroke="#fff" d="M20 34H28"></svg:path></svg:g>`,
})
export class IconParkPassportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPassportOneIcon],svg[icon-park-passport-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M13 40L9 40C7.89543 40 7 39.1046 7 38L7 6C7 4.89543 7.89543 4 9 4L29 4C30.1046 4 31 4.89543 31 6L31 10"></svg:path><svg:rect width="34" height="28" x="13" y="44" fill="#2F88FF" stroke="#000" rx="2" transform="rotate(-90 13 44)"></svg:rect><svg:circle cx="27" cy="27" r="8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M34.9998 28C34.9998 28 32 27.5 29.9995 29C27.999 30.5 27.401 34.1025 27.9999 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 27C24 29 22 31 20 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 20C31 20 31 24 28 24"></svg:path></svg:g>`,
})
export class IconParkPassportOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPauseIcon],svg[icon-park-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 12V36"></svg:path><svg:path d="M32 12V36"></svg:path></svg:g>`,
})
export class IconParkPauseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPauseOneIcon],svg[icon-park-pause-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 18V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 18V30"></svg:path></svg:g>`,
})
export class IconParkPauseOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPayCodeIcon],svg[icon-park-pay-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 4H4V44H44V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 16V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 16V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 16V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 16V32"></svg:path></svg:g>`,
})
export class IconParkPayCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPayCodeOneIcon],svg[icon-park-pay-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="10" height="10" x="32" y="6" fill="#2F88FF"></svg:rect><svg:rect width="10" height="10" x="32" y="32" fill="#2F88FF"></svg:rect><svg:rect width="10" height="10" x="6" y="32" fill="#2F88FF"></svg:rect><svg:rect width="10" height="10" x="6" y="6" fill="#2F88FF"></svg:rect><svg:path d="M8 24L30 24"></svg:path><svg:path d="M38 24L40 24"></svg:path><svg:path d="M24 37V39"></svg:path><svg:path d="M24 17V31"></svg:path><svg:path d="M24 8V10"></svg:path></svg:g>`,
})
export class IconParkPayCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPayCodeTwoIcon],svg[icon-park-pay-code-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:path d="M24 16V32"></svg:path><svg:path d="M32 16V32"></svg:path><svg:path d="M16 16V32"></svg:path></svg:g>`,
})
export class IconParkPayCodeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPaymentMethodIcon],svg[icon-park-payment-method-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 10L10 38"></svg:path><svg:path d="M6 6L12 14L18 6"></svg:path><svg:path d="M5 14H19"></svg:path><svg:path d="M5 20H19"></svg:path><svg:path d="M12 14V26"></svg:path><svg:path d="M32.8462 26H42V42H22V36.15"></svg:path></svg:g>`,
})
export class IconParkPaymentMethodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPaypalIcon],svg[icon-park-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33.0312 28C39 28 43 25.5 43 20C43 14.5 39 12 33.0312 12H22L17 43H26L28 28H33.0312Z" clip-rule="evenodd"></svg:path><svg:path d="M18 36H10L15 5H26.0312C32 5 36 7.5 36 13C36 18.5 32 21 26.0312 21H21"></svg:path></svg:g>`,
})
export class IconParkPaypalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeachIcon],svg[icon-park-peach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M10.0772 13.4315C15.0471 7.87006 23.6868 10.3148 27 12.0001C28.6566 11.3681 33.1972 10.6427 36.1791 12.6651C39.9065 15.193 44.6027 21.9042 40.2542 31.3839C36.7753 38.9676 27.689 42.1575 24.3758 43.0001C21.8909 41.9468 16.4303 39.832 10.6066 34.5519C5.32574 29.764 3.86498 20.3833 10.0772 13.4315Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 12C25.0761 12.75 21.2283 14.25 19.1295 18.75C16.8741 23.586 18.6048 27.75 19.1295 30"></svg:path><svg:path stroke-linecap="round" d="M21 4C21.3333 4.16667 23.5 4.5 24 6.5C24.4372 8.24895 23.6667 9.33333 23.5 10.5"></svg:path><svg:path d="M28.479 11.3285C27.5253 11.2955 26.8667 10.455 27.0628 9.52106C27.3331 8.23362 27.9454 6.47675 29.3295 5.39228C30.7135 4.3078 32.5658 4.13344 33.8806 4.17892C34.8343 4.21191 35.4929 5.05244 35.2968 5.98635C35.0265 7.2738 34.4141 9.03066 33.0301 10.1151C31.646 11.1996 29.7937 11.374 28.479 11.3285Z"></svg:path></svg:g>`,
})
export class IconParkPeachIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPearIcon],svg[icon-park-pear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M16.6391 12.7461C17.9484 9.85633 20.8275 8 24 8C27.1725 8 30.0516 9.85633 31.3609 12.7461L34.4211 19.5L38.1067 25.8219C40.3938 29.7449 39.7121 34.7218 36.4545 37.8853L35.2649 39.0405C32.352 41.8693 27.7836 42.0721 24.6314 39.5127C24.2635 39.2139 23.7365 39.2139 23.3686 39.5127C20.2164 42.0721 15.648 41.8693 12.7351 39.0405L11.5455 37.8853C8.28785 34.7218 7.60621 29.7449 9.8933 25.8219L13.5789 19.5L16.6391 12.7461Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M21.5 4C22.1667 4.5 23.6 5.9 24 7.5C24.4 9.1 24.1667 10.8333 24 11.5"></svg:path><svg:circle cx="16" cy="28" r="2" fill="#fff"></svg:circle><svg:circle cx="18" cy="34" r="2" fill="#fff"></svg:circle><svg:circle cx="23" cy="30" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkPearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPearlOfTheOrientIcon],svg[icon-park-pearl-of-the-orient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="33" r="6" fill="#2F88FF"></svg:circle><svg:circle cx="24" cy="13" r="3" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M24 40V44"></svg:path><svg:path stroke-linecap="round" d="M22 16L20 28"></svg:path><svg:path stroke-linecap="round" d="M26 16L28 28"></svg:path><svg:path stroke-linecap="round" d="M19 37L16 44"></svg:path><svg:path stroke-linecap="round" d="M29 37L32 44"></svg:path><svg:path stroke-linecap="round" d="M24 4V10"></svg:path></svg:g>`,
})
export class IconParkPearlOfTheOrientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeasIcon],svg[icon-park-peas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 12.0002C27 12.0002 33.9994 19.0002 33.9995 28.0002C33.9996 37.0002 29.5554 44.2229 25.9995 44.0001C22.4437 43.7774 18.9999 37.0001 20 28.0002C21 19.0002 27 12.0002 27 12.0002Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26.9998 12.0003C26.9998 12.0003 28.0011 7.87556 31.0002 5.93792C33.9994 4.00028 39.8901 9.00031 39 12.0003C38.1099 15.0003 34.9996 15.0003 33.9997 12.0003C32.9998 9.00031 38 5.50031 41 5.93792C44 6.37553 44.2569 11.1801 44 14.0003C43.499 19.5003 42 24.0003 42 24.0003"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26.9999 11.9999C26.9999 11.9999 26.9999 19.9999 20 27.9999C13.0001 35.9999 6.32546 37.6995 4.00039 34.9999C1.67532 32.3003 4.00039 24.9999 11.0001 17.9999C17.9997 10.9999 26.9999 11.9999 26.9999 11.9999Z"></svg:path><svg:circle cx="27.243" cy="27.408" r="2.5" fill="#000"></svg:circle><svg:circle cx="26.243" cy="34.408" r="2.5" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkPeasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPencilIcon],svg[icon-park-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30.9995 8.99902L38.9995 16.999"></svg:path><svg:path d="M7.99953 31.999L35.9994 4L43.9995 11.999L15.9995 39.999L5.99951 41.999L7.99953 31.999Z"></svg:path><svg:path d="M30.9995 8.99902L38.9995 16.999"></svg:path><svg:path d="M8.99951 31.999L15.9995 38.999"></svg:path><svg:path d="M12.9995 34.999L34.9995 12.999"></svg:path></svg:g>`,
})
export class IconParkPencilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPennantIcon],svg[icon-park-pennant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 44H16M12 6V4V6ZM12 22V44V22ZM12 44H8H12Z"></svg:path><svg:path d="M8 44H12H16"></svg:path><svg:path fill="#2F88FF" d="M12 6V22L40 14L12 6Z"></svg:path></svg:g>`,
})
export class IconParkPennantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPentagonOneIcon],svg[icon-park-pentagon-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M25.2296 4.95843L42.8601 18.7012C43.5405 19.2316 43.8041 20.1385 43.5141 20.951L36.4739 40.6724C36.1897 41.4685 35.4357 42 34.5903 42H13.4097C12.5643 42 11.8103 41.4685 11.5261 40.6724L4.48593 20.951C4.19588 20.1385 4.45953 19.2315 5.13995 18.7012L22.7704 4.95843C23.4933 4.39496 24.5067 4.39496 25.2296 4.95843Z"></svg:path>`,
})
export class IconParkPentagonOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleIcon],svg[icon-park-people-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z"></svg:path><svg:path d="M6 40.8V42H42V40.8C42 36.3196 42 34.0794 41.1281 32.3681C40.3611 30.8628 39.1372 29.6389 37.6319 28.8719C35.9206 28 33.6804 28 29.2 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8Z"></svg:path></svg:g>`,
})
export class IconParkPeopleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleBottomIcon],svg[icon-park-people-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path d="M32 16L38 22L44 16"></svg:path><svg:path fill="#2F88FF" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path></svg:g>`,
})
export class IconParkPeopleBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleBottomCardIcon],svg[icon-park-people-bottom-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 39H4V9H19L24 4L29 9H44V39Z"></svg:path><svg:circle cx="24" cy="20" r="5" fill="#2F88FF"></svg:circle><svg:path d="M33 33C33 28.5817 28.9706 25 24 25C19.0294 25 15 28.5817 15 33"></svg:path></svg:g>`,
})
export class IconParkPeopleBottomCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleDeleteIcon],svg[icon-park-people-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path stroke-linecap="round" d="M33 31L41 39"></svg:path><svg:path stroke-linecap="round" d="M33 39L41 31"></svg:path><svg:path stroke-linecap="round" d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"></svg:path></svg:g>`,
})
export class IconParkPeopleDeleteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleDeleteOneIcon],svg[icon-park-people-delete-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path d="M42 15L34 23"></svg:path><svg:path d="M34 15L42 23"></svg:path><svg:path fill="#2F88FF" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path></svg:g>`,
})
export class IconParkPeopleDeleteOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleDownloadIcon],svg[icon-park-people-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path stroke-linecap="round" d="M37 40V30"></svg:path><svg:path stroke-linecap="round" d="M33 36L37 40L41 36"></svg:path><svg:path stroke-linecap="round" d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"></svg:path></svg:g>`,
})
export class IconParkPeopleDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleLeftIcon],svg[icon-park-people-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path d="M44 11L38 17L44 23"></svg:path><svg:path fill="#2F88FF" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path></svg:g>`,
})
export class IconParkPeopleLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleMinusIcon],svg[icon-park-people-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M30 35H42H30Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 35H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"></svg:path></svg:g>`,
})
export class IconParkPeopleMinusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleMinusOneIcon],svg[icon-park-people-minus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M32 19H44H32Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 19H44"></svg:path></svg:g>`,
})
export class IconParkPeopleMinusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeoplePlusIcon],svg[icon-park-people-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M36 29V41V29Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M30 35H42H30Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 29V41M30 35H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"></svg:path></svg:g>`,
})
export class IconParkPeoplePlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeoplePlusOneIcon],svg[icon-park-people-plus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38 13V25V13Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M32 19H44H32Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 13V25M32 19H44"></svg:path></svg:g>`,
})
export class IconParkPeoplePlusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleRightIcon],svg[icon-park-people-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path d="M38 11L44 17L38 23"></svg:path><svg:path fill="#2F88FF" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path></svg:g>`,
})
export class IconParkPeopleRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleSafeIcon],svg[icon-park-people-safe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 31.36 6 20.0287V9.25564Z"></svg:path><svg:circle cx="24" cy="18" r="5" fill="#2F88FF" stroke-linecap="round"></svg:circle><svg:path stroke-linecap="round" d="M32 31C32 26.5817 28.4183 23 24 23C19.5817 23 16 26.5817 16 31"></svg:path></svg:g>`,
})
export class IconParkPeopleSafeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleSafeOneIcon],svg[icon-park-people-safe-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#2F88FF"></svg:circle><svg:path d="M4 41C4 32.1634 12.0589 25 22 25"></svg:path><svg:path fill="#2F88FF" d="M28 29.2C28 28.1333 35 26 35 26C35 26 42 28.1333 42 29.2C42 37.7333 35 42 35 42C35 42 28 37.7333 28 29.2Z"></svg:path></svg:g>`,
})
export class IconParkPeopleSafeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleSearchIcon],svg[icon-park-people-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path stroke-linecap="round" d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"></svg:path><svg:path stroke-linecap="round" d="M39.9997 41.0002L36.8281 37.8286"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M38 35C38 36.1046 37.5523 37.1046 36.8284 37.8284C36.1046 38.5523 35.1046 39 34 39C31.7909 39 30 37.2091 30 35C30 32.7909 31.7909 31 34 31C36.2091 31 38 32.7909 38 35Z"></svg:path></svg:g>`,
})
export class IconParkPeopleSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleSearchOneIcon],svg[icon-park-people-search-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 41C4 32.1634 12.0589 25 22 25"></svg:path><svg:circle cx="35" cy="34" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 38L44 41"></svg:path></svg:g>`,
})
export class IconParkPeopleSearchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleSpeakIcon],svg[icon-park-people-speak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path d="M33 8C33 8 35.25 12.5 33 18"></svg:path><svg:path d="M40 4C40 4 44.5 12.1 40 22"></svg:path><svg:path fill="#2F88FF" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path></svg:g>`,
})
export class IconParkPeopleSpeakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleTopIcon],svg[icon-park-people-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path d="M32 20L38 14L44 20"></svg:path><svg:path fill="#2F88FF" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path></svg:g>`,
})
export class IconParkPeopleTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleTopCardIcon],svg[icon-park-people-top-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 8H4V38H19L24 43L29 38H44V8Z"></svg:path><svg:circle cx="24" cy="19" r="5" fill="#2F88FF"></svg:circle><svg:path d="M33 32C33 27.5817 28.9706 24 24 24C19.0294 24 15 27.5817 15 32"></svg:path></svg:g>`,
})
export class IconParkPeopleTopCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleUnknownIcon],svg[icon-park-people-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M32 22H44H32Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 22H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M32 16H44H32Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 16H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M35 13V25V13Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 13V25"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M41 13V25V13Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 13V25"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path></svg:g>`,
})
export class IconParkPeopleUnknownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleUploadIcon],svg[icon-park-people-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path stroke-linecap="round" d="M37 30V40"></svg:path><svg:path stroke-linecap="round" d="M41 34L37 30L33 34"></svg:path><svg:path stroke-linecap="round" d="M27 28H18.8C14.3196 28 12.0794 28 10.3681 28.8719C8.86278 29.6389 7.63893 30.8628 6.87195 32.3681C6 34.0794 6 36.3196 6 40.8V42H27"></svg:path></svg:g>`,
})
export class IconParkPeopleUploadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeoplesIcon],svg[icon-park-peoples-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 20C22.866 20 26 16.866 26 13C26 9.13401 22.866 6 19 6C15.134 6 12 9.13401 12 13C12 16.866 15.134 20 19 20Z"></svg:path><svg:path d="M32.6077 7C34.6405 8.2249 36.0001 10.4537 36.0001 13C36.0001 15.5463 34.6405 17.7751 32.6077 19"></svg:path><svg:path fill="#2F88FF" d="M4 40.8V42H34V40.8C34 36.3196 34 34.0794 33.1281 32.3681C32.3611 30.8628 31.1372 29.6389 29.6319 28.8719C27.9206 28 25.6804 28 21.2 28H16.8C12.3196 28 10.0794 28 8.36808 28.8719C6.86278 29.6389 5.63893 30.8628 4.87195 32.3681C4 34.0794 4 36.3196 4 40.8Z"></svg:path><svg:path d="M43.9999 42.0001V40.8001C43.9999 36.3197 43.9999 34.0795 43.128 32.3682C42.361 30.8629 41.1371 29.6391 39.6318 28.8721"></svg:path></svg:g>`,
})
export class IconParkPeoplesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeoplesTwoIcon],svg[icon-park-peoples-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 20C27.866 20 31 16.866 31 13C31 9.13401 27.866 6 24 6C20.134 6 17 9.13401 17 13C17 16.866 20.134 20 24 20Z"></svg:path><svg:path d="M12 7.25488C10.1865 8.51983 9 10.6214 9 13.0002C9 15.5465 10.3596 17.7753 12.3924 19.0002"></svg:path><svg:path d="M36 7.25488C37.8135 8.51983 39 10.6214 39 13.0002C39 15.3789 37.8135 17.4806 36 18.7455"></svg:path><svg:path fill="#2F88FF" d="M12 40V42H36V40C36 36.2725 36 34.4087 35.391 32.9385C34.5791 30.9783 33.0217 29.4209 31.0615 28.609C29.5913 28 27.7275 28 24 28C20.2725 28 18.4087 28 16.9385 28.609C14.9783 29.4209 13.4209 30.9783 12.609 32.9385C12 34.4087 12 36.2725 12 40Z"></svg:path><svg:path d="M43.9999 42.0001V40.8001C43.9999 36.3197 43.9999 34.0795 43.128 32.3682C42.361 30.8629 41.1371 29.6391 39.6318 28.8721"></svg:path><svg:path d="M4.00009 42.0001V40.8001C4.00009 36.3197 4.00009 34.0795 4.87204 32.3682C5.63902 30.8629 6.86287 29.6391 8.36816 28.8721"></svg:path></svg:g>`,
})
export class IconParkPeoplesTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPercentageIcon],svg[icon-park-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="11" cy="11" r="5" fill="#2F88FF"></svg:circle><svg:circle cx="37" cy="37" r="5" fill="#2F88FF"></svg:circle><svg:path d="M42 6L6 42"></svg:path></svg:g>`,
})
export class IconParkPercentageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPerformanceIcon],svg[icon-park-performance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 21.2883 43.4603 18.7026 42.4825 16.3446C42.2308 15.7376 41.9501 15.1457 41.6421 14.5707"></svg:path><svg:path fill="#2F88FF" d="M35 10C37.2091 10 39 8.65685 39 7C39 5.34315 37.2091 4 35 4C32.7909 4 31 5.34315 31 7C31 8.65685 32.7909 10 35 10Z"></svg:path><svg:path fill="#2F88FF" d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"></svg:path><svg:path stroke-linecap="round" d="M31 6.5V24"></svg:path></svg:g>`,
})
export class IconParkPerformanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPerfumeIcon],svg[icon-park-perfume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="16" height="10" x="16" y="4" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:rect width="36" height="24" x="6" y="20" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="12"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 32.9999C9.04225 29.1325 18 29.9999 24 31.9999C30 33.9999 38 36.9999 42 31.9999"></svg:path><svg:path fill="#fff" d="M25 8.99999C25 9.55228 24.5523 9.99999 24 9.99999C23.4477 9.99999 23 9.55228 23 8.99999C23 8.44771 23.4477 7.99999 24 7.99999C24.5523 7.99999 25 8.44771 25 8.99999Z"></svg:path></svg:g>`,
})
export class IconParkPerfumeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPerfumerBottleIcon],svg[icon-park-perfumer-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="24" x="5" y="17" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:rect width="20" height="10" x="14" y="7" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="12" height="8" x="18" y="25" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" d="M30 29H43"></svg:path><svg:path stroke="#fff" d="M5 29H18"></svg:path><svg:path stroke="#000" d="M5 24V34"></svg:path><svg:path stroke="#000" d="M43 24V34"></svg:path></svg:g>`,
})
export class IconParkPerfumerBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPeriodIcon],svg[icon-park-period-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="square" stroke-width="4"><svg:path d="M7.99956 4C12.0022 7.33659 14.0034 10.6715 14.0034 14.0046C14.0034 19.0043 9.99956 21.2436 7.99956 24C5.99956 26.7564 5.00488 29.9311 5.00488 34.0033C5.00488 36.718 6.00311 40.0503 7.99956 44"></svg:path><svg:path d="M40.0034 4C36.0008 7.33659 33.9995 10.6715 33.9995 14.0046C33.9995 19.0043 38.0034 21.2436 40.0034 24C42.0034 26.7564 42.998 29.9311 42.998 34.0033C42.998 36.718 41.9998 40.0503 40.0034 44"></svg:path><svg:path d="M14.0039 29.1826C16.5255 28.941 18.6192 29.3014 20.2853 30.2639C22.7843 31.7076 23.9917 33.3597 24 34.9573C24.0056 36.0224 24.0056 39.0367 24 44.0001"></svg:path><svg:path d="M34.0039 29.1826C31.4824 28.941 29.3886 29.3014 27.7226 30.2639C25.2235 31.7076 24.0161 33.3597 24.0078 34.9573"></svg:path></svg:g>`,
})
export class IconParkPeriodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPermissionsIcon],svg[icon-park-permissions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M20 10H6C4.89543 10 4 10.8954 4 12V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V35.5"></svg:path><svg:path d="M10 23H18"></svg:path><svg:path d="M10 31H34"></svg:path><svg:circle cx="34" cy="16" r="6" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:path stroke-linejoin="round" d="M44 28.4187C42.0468 24.6023 37.9999 22 33.9999 22C29.9999 22 28.0071 23.1329 25.9502 25"></svg:path></svg:g>`,
})
export class IconParkPermissionsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPersonalCollectionIcon],svg[icon-park-personal-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#2F88FF"></svg:circle><svg:path d="M4 41C4 32.1634 12.0589 25 22 25"></svg:path><svg:path fill="#2F88FF" d="M31.85 28C29.7237 28 28 30.0086 28 32.4864C28 36.9727 32.55 41.0513 35 42C37.45 41.0513 42 36.9727 42 32.4864C42 30.0086 40.2763 28 38.15 28C36.8479 28 35.6967 28.7533 35 29.9062C34.3033 28.7533 33.1521 28 31.85 28Z"></svg:path></svg:g>`,
})
export class IconParkPersonalCollectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPersonalPrivacyIcon],svg[icon-park-personal-privacy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#2F88FF"></svg:circle><svg:path d="M4 41C4 32.1634 12.0589 25 22 25"></svg:path><svg:rect width="14" height="10" x="27" y="31" fill="#2F88FF"></svg:rect><svg:path d="M37 31V28C37 26.3431 35.6569 25 34 25C32.3431 25 31 26.3431 31 28V31"></svg:path></svg:g>`,
})
export class IconParkPersonalPrivacyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPerspectiveIcon],svg[icon-park-perspective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 28V36L31 38.6M44 28L4 32M44 28V20M4 32V44L17 41.4M4 32V16M44 20V12L31 9.4M44 20L4 16M4 16V4L17 6.6M31 9.4V38.6M31 9.4L17 6.6M31 38.6L17 41.4M17 6.6V41.4"></svg:path>`,
})
export class IconParkPerspectiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPesticideIcon],svg[icon-park-pesticide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M15 11.3684V4H24H33V11.3684L39 17.4868V19.5263V27.6842V42C39 43.1046 38.1046 44 37 44H11C9.89543 44 9 43.1046 9 42V27.6842V19.5263V17.4868L15 11.3684Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M9 23H17V35H9"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 11.5H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 23V29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 34V35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9 38V20"></svg:path></svg:g>`,
})
export class IconParkPesticideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPetrolIcon],svg[icon-park-petrol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 42V6H39L30 16H12L6 22V42H42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 16L22 6H40"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M20.643 28.8886C22.0743 27.0081 23.1776 24.4103 23.774 23C24.8177 24.4103 27.084 27.9484 27.7997 29.8288C28.6942 32.1793 26.4578 35 23.774 35C21.0903 35 18.8538 31.2391 20.643 28.8886Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 8L4 15"></svg:path></svg:g>`,
})
export class IconParkPetrolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneIcon],svg[icon-park-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M8 30H40V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V30Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M40 30V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 37H26"></svg:path></svg:g>`,
})
export class IconParkPhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneBoothIcon],svg[icon-park-phone-booth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="9" x="14" y="34" fill="#2F88FF"></svg:rect><svg:rect width="20" height="6" x="14" y="4" fill="#2F88FF"></svg:rect><svg:path d="M14 10V34"></svg:path><svg:path d="M20 10V34"></svg:path><svg:path d="M22 16V20"></svg:path><svg:path d="M32 26L14 26"></svg:path><svg:path d="M34 10V34"></svg:path><svg:path d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkPhoneBoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneCallIcon],svg[icon-park-phone-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M41.7796 20.6066C42.0324 18.9108 41.9495 17.1747 41.5309 15.5054C40.978 13.3002 39.8392 11.2118 38.1147 9.4873C36.3902 7.76281 34.3018 6.62409 32.0967 6.07115C30.4274 5.65257 28.6912 5.56967 26.9954 5.82245"></svg:path><svg:path stroke-linecap="round" d="M34.1897 19.8035C34.4605 17.9869 33.8967 16.0699 32.4983 14.6715C31.0998 13.2731 29.1829 12.7092 27.3663 12.98"></svg:path><svg:path fill="#2F88FF" d="M14.3757 8.79424C15.1022 8.79424 15.7716 9.1883 16.1243 9.8235L18.5707 14.2303C18.891 14.8073 18.9061 15.5052 18.6109 16.0955L16.2541 20.8091C16.2541 20.8091 16.9371 24.3206 19.7955 27.179C22.654 30.0374 26.1536 30.7086 26.1536 30.7086L30.8665 28.3522C31.4572 28.0568 32.1556 28.0721 32.7328 28.393L37.1521 30.85C37.7868 31.2028 38.1803 31.8719 38.1803 32.598V37.6715C38.1803 40.2552 35.7804 42.1213 33.3323 41.2952C28.3044 39.5987 20.4997 36.3685 15.5529 31.4216C10.606 26.4748 7.37579 18.6701 5.67928 13.6422C4.85325 11.1941 6.71934 8.79424 9.30299 8.79424H14.3757Z"></svg:path></svg:g>`,
})
export class IconParkPhoneCallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneIncomingIcon],svg[icon-park-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M15.3758 9.79422C16.1023 9.79422 16.7717 10.1883 17.1244 10.8235L19.5708 15.2303C19.8911 15.8073 19.9062 16.5052 19.611 17.0955L17.2542 21.8092C17.2542 21.8092 17.9372 25.3206 20.7956 28.179C23.6541 31.0374 27.1537 31.7086 27.1537 31.7086L31.8666 29.3522C32.4573 29.0568 33.1557 29.0721 33.7329 29.393L38.1522 31.85C38.7869 32.2028 39.1804 32.8719 39.1804 33.598V38.6715C39.1804 41.2552 36.7805 43.1213 34.3325 42.2952C29.3045 40.5987 21.4998 37.3685 16.553 32.4216C11.6061 27.4748 8.37586 19.6701 6.67934 14.6422C5.85332 12.1941 7.71941 9.79422 10.3031 9.79422H15.3758Z"></svg:path><svg:path stroke-linecap="round" d="M29 20L42 7.5"></svg:path><svg:path stroke-linecap="round" d="M42 20H29V7"></svg:path></svg:g>`,
})
export class IconParkPhoneIncomingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneIncomingOneIcon],svg[icon-park-phone-incoming-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M13.3756 9.79424C14.1022 9.79424 14.7716 10.1883 15.1242 10.8235L17.5707 15.2303C17.891 15.8073 17.906 16.5052 17.6109 17.0955L15.2541 21.8092C15.2541 21.8092 15.937 25.3206 18.7955 28.179C21.6539 31.0374 25.1536 31.7086 25.1536 31.7086L29.8665 29.3522C30.4572 29.0568 31.1556 29.0721 31.7328 29.393L36.1521 31.85C36.7867 32.2028 37.1803 32.8719 37.1803 33.598V38.6715C37.1803 41.2552 34.7804 43.1213 32.3323 42.2952C27.3044 40.5987 19.4997 37.3685 14.5528 32.4216C9.60603 27.4748 6.37583 19.6701 4.67928 14.6422C3.85326 12.1941 5.71935 9.79424 8.30303 9.79424H13.3756Z"></svg:path><svg:path stroke-linecap="round" d="M34.2404 6L26.2404 14L34.2404 22"></svg:path><svg:path stroke-linecap="round" d="M42.2404 14.0083H26.2404"></svg:path></svg:g>`,
})
export class IconParkPhoneIncomingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneMissedIcon],svg[icon-park-phone-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M15.9963 8.68584C16.7228 8.68584 17.3922 9.07986 17.7449 9.7151L20.1913 14.1219C20.5116 14.6989 20.5267 15.3968 20.2315 15.9871L17.8747 20.7008C17.8747 20.7008 18.5577 24.2122 21.4161 27.0706C24.2746 29.929 27.7742 30.6002 27.7742 30.6002L32.4871 28.2438C33.0778 27.9484 33.7762 27.9637 34.3534 28.2846L38.7727 30.7416C39.4074 31.0945 39.8009 31.7635 39.8009 32.4896V37.5631C39.8009 40.1468 37.401 42.0129 34.953 41.1868C29.925 39.4903 22.1203 36.2601 17.1735 31.3132C12.2267 26.3664 8.99643 18.5617 7.29989 13.5338C6.47387 11.0857 8.33996 8.68584 10.9236 8.68584H15.9963Z"></svg:path><svg:path stroke-linecap="round" d="M38.7351 9.28589L30.2498 17.7712"></svg:path><svg:path stroke-linecap="round" d="M30.2498 9.28596L38.735 17.7712"></svg:path></svg:g>`,
})
export class IconParkPhoneMissedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneOffIcon],svg[icon-park-phone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19.4438 21.5002C19.017 20.4327 18.8747 19.7008 18.8747 19.7008L21.2315 14.9871C21.5266 14.3968 21.5116 13.6989 21.1913 13.1219L18.7448 8.71511C18.3922 8.07987 17.7228 7.68585 16.9962 7.68585L11.9236 7.68585C9.33993 7.68585 7.47453 10.0881 8.30063 12.5361C9.5121 16.1261 11.5052 21.1308 14.3465 25.5002M26.6772 28.9117C27.9041 29.4334 28.7742 29.6003 28.7742 29.6003L33.4871 27.2438C34.0778 26.9485 34.7762 26.9637 35.3534 27.2846L39.7727 29.7416C40.4073 30.0945 40.8009 30.7635 40.8009 31.4896L40.8009 36.5632C40.8009 39.1468 38.3973 41.0118 35.9493 40.1856C32.2021 38.921 26.9142 36.805 22.4161 33.7619"></svg:path><svg:path d="M40 8L8 40"></svg:path></svg:g>`,
})
export class IconParkPhoneOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneOneIcon],svg[icon-park-phone-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="38" x="5" y="5" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:rect width="8" height="24" x="11" y="12" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="12" height="6" x="25" y="12" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:circle cx="25" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="25" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="25" cy="36" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="36" r="2" fill="#000"></svg:circle><svg:circle cx="37" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="37" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="37" cy="36" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkPhoneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneOutgoingIcon],svg[icon-park-phone-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M28 20L41 7.5"></svg:path><svg:path stroke-linecap="round" d="M28 7H41V20"></svg:path><svg:path fill="#2F88FF" d="M14.3758 9.79424C15.1023 9.79424 15.7717 10.1883 16.1244 10.8235L18.5708 15.2303C18.8911 15.8073 18.9062 16.5052 18.611 17.0955L16.2542 21.8092C16.2542 21.8092 16.9372 25.3206 19.7956 28.179C22.6541 31.0374 26.1537 31.7086 26.1537 31.7086L30.8666 29.3522C31.4573 29.0568 32.1557 29.0721 32.7329 29.393L37.1522 31.85C37.7869 32.2028 38.1804 32.8719 38.1804 33.598V38.6715C38.1804 41.2552 35.7805 43.1213 33.3325 42.2952C28.3045 40.5987 20.4998 37.3685 15.553 32.4216C10.6061 27.4748 7.37586 19.6701 5.67934 14.6422C4.85332 12.1941 6.71941 9.79424 9.30306 9.79424H14.3758Z"></svg:path></svg:g>`,
})
export class IconParkPhoneOutgoingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneOutgoingOneIcon],svg[icon-park-phone-outgoing-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M14.3756 9.79424C15.1022 9.79424 15.7716 10.1883 16.1242 10.8235L18.5707 15.2303C18.891 15.8073 18.906 16.5052 18.6109 17.0955L16.2541 21.8092C16.2541 21.8092 16.937 25.3206 19.7955 28.179C22.6539 31.0374 26.1536 31.7086 26.1536 31.7086L30.8665 29.3522C31.4572 29.0568 32.1556 29.0721 32.7328 29.393L37.1521 31.85C37.7867 32.2028 38.1803 32.8719 38.1803 33.598V38.6715C38.1803 41.2552 35.7804 43.1213 33.3323 42.2952C28.3044 40.5987 20.4997 37.3685 15.5528 32.4216C10.606 27.4748 7.37577 19.6701 5.67922 14.6422C4.8532 12.1941 6.71929 9.79424 9.30297 9.79424H14.3756Z"></svg:path><svg:path stroke-linecap="round" d="M35 6L43 14L35 22"></svg:path><svg:path stroke-linecap="round" d="M27 14.0083H43"></svg:path></svg:g>`,
})
export class IconParkPhoneOutgoingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneTelephoneIcon],svg[icon-park-phone-telephone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M16.9964 7.68584C17.7229 7.68584 18.3923 8.07986 18.745 8.7151L21.1914 13.1219C21.5117 13.6989 21.5268 14.3968 21.2316 14.9871L18.8748 19.7008C18.8748 19.7008 19.5578 23.2122 22.4162 26.0706C25.2747 28.929 28.7743 29.6002 28.7743 29.6002L33.4872 27.2438C34.0779 26.9484 34.7763 26.9637 35.3535 27.2846L39.7728 29.7416C40.4075 30.0945 40.801 30.7635 40.801 31.4896V36.5631C40.801 39.1468 38.4011 41.0129 35.9531 40.1868C30.9251 38.4903 23.1204 35.2601 18.1736 30.3132C13.2268 25.3664 9.99649 17.5617 8.29995 12.5338C7.47393 10.0857 9.34002 7.68584 11.9237 7.68584H16.9964Z"></svg:path>`,
})
export class IconParkPhoneTelephoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneTwoIcon],svg[icon-park-phone-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="3.918" d="M19.4401 14C19.8845 14 20.2939 14.241 20.5096 14.6295L22.006 17.3249C22.2019 17.6778 22.2111 18.1047 22.0305 18.4658L21 21C21 21 21.2517 23.2517 23 25C24.7484 26.7483 27 27 27 27L29.5266 25.9625C29.8879 25.7818 30.315 25.7911 30.6681 25.9874L33.3711 27.4902C33.7593 27.7061 34 28.1153 34 28.5594V31.6625C34 33.2428 32.5321 34.3842 31.0348 33.8789C27.9595 32.8413 23.1858 30.8656 20.1601 27.8398C17.1345 24.8142 15.1587 20.0405 14.121 16.9652C13.6158 15.4679 14.7572 14 16.3375 14H19.4401Z"></svg:path></svg:g>`,
})
export class IconParkPhoneTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhoneVideoCallIcon],svg[icon-park-phone-video-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M14.3756 9.7941C15.1022 9.7941 15.7716 10.1881 16.1242 10.8234L18.5706 15.2302C18.891 15.8072 18.906 16.5051 18.6109 17.0954L16.254 21.809C16.254 21.809 16.937 25.3204 19.7955 28.1789C22.6539 31.0373 26.1535 31.7085 26.1535 31.7085L30.8665 29.3521C31.4572 29.0567 32.1555 29.072 32.7327 29.3929L37.1521 31.8499C37.7867 32.2027 38.1802 32.8718 38.1802 33.5979V38.6714C38.1802 41.2551 35.7803 43.1211 33.3323 42.2951C28.3043 40.5986 20.4997 37.3684 15.5528 32.4215C10.606 27.4747 7.3758 19.67 5.67922 14.6421C4.8532 12.194 6.71929 9.7941 9.3029 9.7941H14.3756Z"></svg:path><svg:path stroke-linecap="round" d="M39 15H27V5H39V8L44 6V14L39 12V15Z"></svg:path></svg:g>`,
})
export class IconParkPhoneVideoCallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhonographIcon],svg[icon-park-phonograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:circle cx="24" cy="25" r="11" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:rect width="4" height="4" x="22" y="23" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="34" y="34" fill="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 20L36 12"></svg:path></svg:g>`,
})
export class IconParkPhonographIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPhotographIcon],svg[icon-park-photograph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="bevel" d="M34 13L34 6C34 4.89543 33.1046 4 32 4L8 4C6.89543 4 6 4.89543 6 6L6 34C6 35.1046 6.89543 36 8 36L23 36"></svg:path><svg:path stroke-linejoin="round" d="M28.0005 42C21 38 24.3318 32.2257 22.9772 31C21.3247 29.5046 20.3874 28.1121 19.9996 26C19.6118 23.8878 21.0701 21.4737 22.9774 23C24.8847 24.5263 28 31 28 31L30 29L31 18C31 18 30 14 30 12C30 9.99999 34 13 36 16C36 26.4418 37.4995 36 41.9992 44"></svg:path><svg:path stroke-linejoin="round" d="M25 17.4L21 11L13 27H20"></svg:path><svg:path stroke-linejoin="round" d="M6 22L12 11L17 18"></svg:path></svg:g>`,
})
export class IconParkPhotographIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPianoIcon],svg[icon-park-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="16" x="4" y="8" fill="#2F88FF"></svg:rect><svg:rect width="40" height="16" x="4" y="24"></svg:rect><svg:path d="M10 24V32"></svg:path><svg:path d="M16 24V32"></svg:path><svg:path d="M26 24V32"></svg:path><svg:path d="M32 24V32"></svg:path><svg:path d="M38 24V32"></svg:path></svg:g>`,
})
export class IconParkPianoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPicIcon],svg[icon-park-pic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M5 10C5 8.89543 5.89543 8 7 8L41 8C42.1046 8 43 8.89543 43 10V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V10Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M15 24L20 28L26 21L43 34V38C43 39.1046 42.1046 40 41 40H7C5.89543 40 5 39.1046 5 38V34L15 24Z"></svg:path></svg:g>`,
})
export class IconParkPicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPicOneIcon],svg[icon-park-pic-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="24" r="20" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 37L17 28L33 41"></svg:path><svg:circle cx="18" cy="17" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 33L32 23L42 31"></svg:path></svg:g>`,
})
export class IconParkPicOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPictureIcon],svg[icon-park-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#2F88FF" d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z"></svg:path><svg:path d="M27.7901 26.2194C28.6064 25.1269 30.2528 25.1538 31.0329 26.2725L39.8077 38.8561C40.7322 40.182 39.7835 42.0001 38.1671 42.0001H16L27.7901 26.2194Z"></svg:path></svg:g>`,
})
export class IconParkPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPictureAlbumIcon],svg[icon-park-picture-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="30" height="30" x="6" y="6" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M42 12V39C42 40.6569 40.6569 42 39 42H12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 25L13.6562 18.1944C14.4204 17.5152 15.5738 17.5216 16.3303 18.2094L26 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 23L26.7849 19.0125C27.4971 18.4191 28.5237 18.3928 29.2653 18.949L36 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 19L6 27"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M36 19V27"></svg:path></svg:g>`,
})
export class IconParkPictureAlbumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPictureOneIcon],svg[icon-park-picture-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#2F88FF" d="M18 23C20.7614 23 23 20.7614 23 18C23 15.2386 20.7614 13 18 13C15.2386 13 13 15.2386 13 18C13 20.7614 15.2386 23 18 23Z"></svg:path><svg:path d="M42 36L31 26L21 35L14 29L6 35"></svg:path></svg:g>`,
})
export class IconParkPictureOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPieIcon],svg[icon-park-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C26.5207 4 29.0188 4.47652 31.3625 5.40447L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPieFiveIcon],svg[icon-park-pie-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C27.2624 4 30.4754 4.79809 33.3586 6.32469C36.2418 7.85128 38.7078 10.06 40.5416 12.7583C42.3754 15.4566 43.5212 18.5626 43.8792 21.8053C44.2372 25.0481 43.7965 28.3291 42.5955 31.3625C41.3945 34.3958 39.4697 37.0893 36.989 39.2081C34.5082 41.3269 31.5467 42.8067 28.3629 43.5183C25.179 44.23 21.8694 44.152 18.7225 43.2911C15.5757 42.4303 12.6873 40.8127 10.3091 38.5794L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPieFourIcon],svg[icon-park-pie-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C26.6264 4 29.2272 4.51732 31.6537 5.52241C34.0802 6.5275 36.285 8.00069 38.1421 9.85787C39.9993 11.715 41.4725 13.9198 42.4776 16.3463C43.4827 18.7728 44 21.3736 44 24C44 26.6264 43.4827 29.2272 42.4776 31.6537C41.4725 34.0802 39.9993 36.285 38.1421 38.1421C36.285 39.9993 34.0802 41.4725 31.6537 42.4776C29.2271 43.4827 26.6264 44 24 44L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPieOneIcon],svg[icon-park-pie-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C26.7322 4 29.4355 4.55981 31.943 5.64491C34.4505 6.73 36.709 8.31736 38.5794 10.3091L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPieSevenIcon],svg[icon-park-pie-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C28.6001 4 33.0597 5.58577 36.6271 8.49009C40.1944 11.3944 42.6516 15.4397 43.5845 19.9443C44.5173 24.4488 43.8688 29.1373 41.7483 33.2195C39.6277 37.3017 36.1648 40.5282 31.943 42.3551C27.7212 44.182 22.9986 44.4978 18.5712 43.2491C14.1438 42.0004 10.2821 39.2637 7.637 35.5001C4.9919 31.7365 3.72505 27.1761 4.04994 22.5875C4.37484 17.9988 6.27162 13.6624 9.42063 10.3091L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieSevenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPieSixIcon],svg[icon-park-pie-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C27.9556 4 31.8224 5.17298 35.1114 7.37061C38.4004 9.56824 40.9638 12.6918 42.4776 16.3463C43.9913 20.0009 44.3874 24.0222 43.6157 27.9018C42.844 31.7814 40.9392 35.3451 38.1421 38.1421C35.3451 40.9392 31.7814 42.844 27.9018 43.6157C24.0222 44.3874 20.0009 43.9913 16.3463 42.4776C12.6918 40.9638 9.56824 38.4004 7.37061 35.1114C5.17298 31.8224 4 27.9556 4 24H24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieSixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPieThreeIcon],svg[icon-park-pie-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C27.9021 4 31.719 5.14149 34.9805 7.28385C38.2419 9.42621 40.8054 12.4758 42.3551 16.057C43.9048 19.6382 44.3731 23.5946 43.7022 27.4386C43.0313 31.2826 41.2506 34.8464 38.5794 37.6909L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPieTwoIcon],svg[icon-park-pie-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C26.6264 4 29.2272 4.51732 31.6537 5.52241C34.0802 6.5275 36.285 8.00069 38.1421 9.85787C39.9993 11.715 41.4725 13.9198 42.4776 16.3463C43.4827 18.7728 44 21.3736 44 24L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPigIcon],svg[icon-park-pig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M14.0538 9.64415C14.5962 10.1855 15.0733 10.8148 15.4678 11.4894C17.927 9.95189 20.8351 9.06302 23.9511 9.06302C27.0975 9.06302 30.0317 9.96926 32.5061 11.5345C32.9055 10.8428 33.3917 10.1975 33.9462 9.64418C36.4673 7.12825 40.8924 6.02041 42.937 8.06083C44.9816 10.1012 43.8715 14.5172 41.3504 17.0332C40.6016 17.7805 39.6848 18.4035 38.7122 18.8568C39.511 20.7563 39.9524 22.8424 39.9524 25.0315C39.9524 33.8507 32.7884 41 23.9511 41C15.1138 41 7.94978 33.8507 7.94978 25.0315C7.94978 22.8277 8.39715 20.7281 9.20621 18.8183C8.26404 18.3685 7.37746 17.7595 6.64959 17.0331C4.12849 14.5172 3.01837 10.1012 5.06298 8.06079C7.10758 6.02038 11.5327 7.12822 14.0538 9.64415Z"></svg:path><svg:ellipse cx="24" cy="29" fill="#2F88FF" stroke="#000" stroke-width="4" rx="8" ry="7"></svg:ellipse><svg:circle cx="17" cy="18" r="2" fill="#000"></svg:circle><svg:circle cx="21" cy="29" r="2" fill="#fff"></svg:circle><svg:circle cx="31" cy="18" r="2" fill="#000"></svg:circle><svg:circle cx="27" cy="29" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkPigIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPigZodiacIcon],svg[icon-park-pig-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13.0001 27C15.0727 26.4583 19.0142 23.8333 20.0001 23V16L14.0001 14C13.5893 12.3796 12.3146 9.11111 11.0001 8L9.55188 12.5139C6.9502 13.6713 2.69965 18.8889 5.00008 25C6.00008 27 8.077 34 11.0001 39"></svg:path><svg:path stroke-linejoin="round" d="M24 13.2055C28.3911 12.479 37.5246 13.2781 38.9297 22.2864C39.2225 23.6184 38.7541 30.0088 34.5386 32.9147C33.6895 33.5 33 36 33 39"></svg:path><svg:path d="M26 40C26 37.7909 24.2091 36 22 36C19.7909 36 18 37.7909 18 40"></svg:path><svg:path stroke-linejoin="round" d="M39 24C39.5 25 41.6985 25.6695 43.2277 24.1017C44.1179 23.189 44.8467 20.3339 42.598 19"></svg:path></svg:g>`,
})
export class IconParkPigZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPigeonIcon],svg[icon-park-pigeon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13.9995 26C12.9602 24.2074 11.8506 20.4489 16.008 15.7556C17.2206 14.6148 18.8143 13.1156 21.7244 12.3333C24.8424 10.8667 26.4014 8.52 24.3227 5C25.8817 5.97778 28.9997 9.69333 28.9997 16.7333"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16.2527 27.9296C8 23.5714 4.51053 30.1954 4 33.7547C8 33.7547 12.679 36.6663 14.7211 39.5785C18.3969 44.238 24.0807 43.1379 26.4632 42.0053C33.8148 38.1223 36.3334 38.4459 36.6737 39.0931C37.0822 42.1995 38.2053 42.9761 38.7159 42.9761C42.3917 43.3644 43.651 38.9313 43.8211 36.6662C44.638 27.3471 42.4597 26.9588 41.2685 27.9296C36.3674 33.7541 33.4404 34.8866 32.5895 34.7247C28.9137 33.9481 29.3562 32.4597 30.0369 31.8125C36.5716 26.3763 36.5036 14.3391 35.6527 9C33.2022 14.8245 29.186 17.2513 27.4843 17.7367C17.2737 20.4548 15.7421 25.6645 16.2527 27.9296Z"></svg:path><svg:circle cx="12" cy="31.412" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkPigeonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPillIcon],svg[icon-park-pill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5.61497 22.5852C4.4434 21.4136 4.4434 19.5141 5.61497 18.3425L18.3429 5.61463C19.5145 4.44305 21.414 4.44305 22.5855 5.61462L42.3845 25.4136C43.5561 26.5852 43.5561 28.4847 42.3845 29.6563L29.6566 42.3842C28.485 43.5557 26.5855 43.5557 25.414 42.3842L5.61497 22.5852Z"></svg:path><svg:circle cx="14.808" cy="20.465" r="2" fill="#fff" transform="rotate(-45 14.808 20.465)"></svg:circle><svg:circle cx="23.293" cy="28.949" r="2" fill="#fff" transform="rotate(-45 23.293 28.95)"></svg:circle><svg:circle cx="19.05" cy="24.707" r="2" fill="#fff" transform="rotate(-45 19.05 24.707)"></svg:circle><svg:circle cx="27.536" cy="33.193" r="2" fill="#fff" transform="rotate(-45 27.536 33.193)"></svg:circle><svg:circle cx="20.464" cy="14.807" r="2" fill="#fff" transform="rotate(-45 20.464 14.807)"></svg:circle><svg:circle cx="28.95" cy="23.293" r="2" fill="#fff" transform="rotate(-45 28.95 23.293)"></svg:circle><svg:circle cx="24.707" cy="19.051" r="2" fill="#fff" transform="rotate(-45 24.707 19.05)"></svg:circle><svg:circle cx="33.193" cy="27.535" r="2" fill="#fff" transform="rotate(-45 33.193 27.535)"></svg:circle></svg:g>`,
})
export class IconParkPillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPillsIcon],svg[icon-park-pills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M9.97315 22.0623L17.2506 15.9558L24.528 9.84929C28.9703 6.12177 35.5932 6.7012 39.3207 11.1435C43.0483 15.5858 42.4688 22.2087 38.0265 25.9362L30.7491 32.0427L23.4717 38.1492C19.0294 41.8767 12.4065 41.2973 8.67896 36.855C4.95144 32.4127 5.53087 25.7898 9.97315 22.0623Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19.6885 21.8613L25.4261 28.6992"></svg:path></svg:g>`,
})
export class IconParkPillsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPinIcon],svg[icon-park-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M10.6963 17.5042C13.3347 14.8657 16.4701 14.9387 19.8781 16.8076L32.62 9.74509L31.8989 4.78683L43.2126 16.1005L38.2656 15.3907L31.1918 28.1214C32.9752 31.7589 33.1337 34.6647 30.4953 37.3032C30.4953 37.3032 26.235 33.0429 22.7171 29.525L6.44305 41.5564L18.4382 25.2461C14.9202 21.7281 10.6963 17.5042 10.6963 17.5042Z"></svg:path>`,
})
export class IconParkPinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPineappleIcon],svg[icon-park-pineapple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20.5 14.5C20 14 20 13.1492 20 11C20 7.13401 24 4 24 4C24 4 27 7.13401 27 11C27 12.9224 27 14 26.5 14.5"></svg:path><svg:path d="M17 17.0002C15.7891 14.082 12.8623 10.4327 11 9.00018C16.411 7.98561 20.7736 11.3008 23 14.0002"></svg:path><svg:path d="M30 16C31.4519 13.303 34.3038 10.3047 36 8.99997C30.3567 7.94185 26.1286 11.2611 24 14"></svg:path><svg:path d="M16.7254 17.3742C16.1755 17.8607 15.5999 18.4006 15.0005 19C10.8099 23.1905 10.1023 30.864 10.0028 34.2804C9.96939 35.4298 9.97739 36.6023 10.4118 37.6669C10.8787 38.811 11.8749 40.4055 14.0008 42C18.0006 45 30.0006 45 34.0003 42C36.1167 40.4127 37.1132 38.8254 37.5824 37.6824C38.0234 36.6083 38.0311 35.4238 37.9969 34.2632C37.8958 30.8382 37.184 23.1834 33.0006 19C32.4011 18.4006 31.8254 17.8605 31.2754 17.374C27.0168 13.6072 20.984 13.6074 16.7254 17.3742Z"></svg:path><svg:path d="M32 18L11 29"></svg:path><svg:path d="M16 18L37 29"></svg:path><svg:path d="M35 41L11 27"></svg:path><svg:path d="M37 27L13 41"></svg:path></svg:g>`,
})
export class IconParkPineappleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPinwheelIcon],svg[icon-park-pinwheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 4V21H11L21 4Z"></svg:path><svg:path d="M27 44V27H37L27 44Z"></svg:path><svg:path d="M27 11L44 21H27V11Z"></svg:path><svg:path d="M21 37L4 27H21V37Z"></svg:path></svg:g>`,
})
export class IconParkPinwheelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPiscesIcon],svg[icon-park-pisces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24L44 24"></svg:path><svg:path d="M10 7C10 7 16 16.8203 16 24C16 31.1797 10 41 10 41"></svg:path><svg:path d="M38 7C38 7 32 16.9597 32 24C32 31.0403 38 41 38 41"></svg:path></svg:g>`,
})
export class IconParkPiscesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPivotTableIcon],svg[icon-park-pivot-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42.0004 4H6.00005C4.89546 4 4.00002 4.89546 4.00005 6.00005L4.00104 42.0001C4.00107 43.1046 4.8965 44 6.00104 44H42.0004C43.105 44 44.0004 43.1046 44.0004 42V6C44.0004 4.89543 43.105 4 42.0004 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20.0088 34.0083H33.5005V20.0083"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24.5 38.5L23 37L20 34L23 31L24.5 29.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29 24.5L30.5 23L33.5 20L36.5 23L38 24.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 4L14 44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 14.0378L44 14"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8 4H28"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8 44H28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 8V18"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 8L4 18"></svg:path></svg:g>`,
})
export class IconParkPivotTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlanIcon],svg[icon-park-plan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M5 19H43V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V19Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 31L22 37L34 25"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 5V13"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 5V13"></svg:path></svg:g>`,
})
export class IconParkPlanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlanetIcon],svg[icon-park-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"></svg:path><svg:path stroke-linecap="round" d="M37.5641 15.5098C41.7833 15.878 44.6787 17.1724 45.2504 19.306C46.3939 23.5737 37.8068 29.5827 26.0705 32.7274C14.3343 35.8721 3.89316 34.9617 2.74963 30.694C2.1505 28.458 4.22245 25.744 8.01894 23.2145"></svg:path></svg:g>`,
})
export class IconParkPlanetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlasticSurgeryIcon],svg[icon-park-plastic-surgery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round"><svg:path stroke-linejoin="round" stroke-width="4.667" d="M19.036 44C18.0561 40.8044 16.5778 38.422 14.6011 36.8531C11.636 34.4996 6.92483 35.9623 5.18458 33.5347C3.44433 31.1072 6.40382 26.6429 7.44234 24.0089C8.48086 21.3748 3.46179 20.4434 4.04776 19.6957C4.43842 19.1971 6.97471 17.7586 11.6567 15.38C12.987 7.79332 17.9008 4 26.3982 4C39.1441 4 44 14.8059 44 21.6789C44 28.5518 38.1201 35.9562 29.7441 37.5527C28.9951 38.6434 30.0754 40.7926 32.9848 44"></svg:path><svg:path stroke-width="4" d="M21.0218 4.58984C19.8339 9.81843 19.8339 13.8867 21.0218 16.7948C22.8038 21.1568 30.6808 20.4866 30.6808 24.5563C30.6808 28.626 26.0911 29.4084 26.7035 32.2319C27.1118 34.1142 28.02 36.5555 29.4279 39.5558"></svg:path><svg:path stroke-width="4" d="M17 30.5508C17.2354 30.5508 19.4004 30.4124 20.9589 28.7992C21.9979 27.7237 22.5173 26.4573 22.5173 25"></svg:path></svg:g>`,
})
export class IconParkPlasticSurgeryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlatteIcon],svg[icon-park-platte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C29.9601 44 26.3359 35.136 30 31C33.1264 27.4709 44 29.0856 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M28 17C29.6569 17 31 15.6569 31 14C31 12.3431 29.6569 11 28 11C26.3431 11 25 12.3431 25 14C25 15.6569 26.3431 17 28 17Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M16 21C17.6569 21 19 19.6569 19 18C19 16.3431 17.6569 15 16 15C14.3431 15 13 16.3431 13 18C13 19.6569 14.3431 21 16 21Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M17 34C18.6569 34 20 32.6569 20 31C20 29.3431 18.6569 28 17 28C15.3431 28 14 29.3431 14 31C14 32.6569 15.3431 34 17 34Z"></svg:path></svg:g>`,
})
export class IconParkPlatteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayIcon],svg[icon-park-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z"></svg:path></svg:g>`,
})
export class IconParkPlayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayBasketballIcon],svg[icon-park-play-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-miterlimit="2" stroke-width="4" d="M32 16C34.7614 16 37 13.7614 37 11C37 8.23858 34.7614 6 32 6C29.2386 6 27 8.23858 27 11C27 13.7614 29.2386 16 32 16Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23 40L31.11 37.94C31.89 37.75 32.13 36.75 31.53 36.22L23 29L27 21L16.59 17.26C16.09 17.08 15.69 16.72 15.46 16.24L11 8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23 29L16.0301 37.79C15.8201 38.04 15.5601 38.24 15.2601 38.36L5 42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M27 21L36.9 23.79C37.37 23.93 37.78 24.23 38.04 24.64L42 31"></svg:path><svg:path fill="#000" d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"></svg:path></svg:g>`,
})
export class IconParkPlayBasketballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayCycleIcon],svg[icon-park-play-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 25C4 18.3502 9.39624 13 16 13H44"></svg:path><svg:path d="M38 7L44 13L38 19"></svg:path><svg:path d="M44 23C44 29.6498 38.6038 35 32 35H4"></svg:path><svg:path d="M10 41L4 35L10 29"></svg:path></svg:g>`,
})
export class IconParkPlayCycleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayOnceIcon],svg[icon-park-play-once-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44"></svg:path><svg:path d="M38 7L44 13L38 19"></svg:path><svg:path d="M24 19V31"></svg:path><svg:path d="M24 19L21 22L19.5 23.5"></svg:path></svg:g>`,
})
export class IconParkPlayOnceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayOneIcon],svg[icon-park-play-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M15 24V11.8756L25.5 17.9378L36 24L25.5 30.0622L15 36.1244V24Z"></svg:path>`,
})
export class IconParkPlayOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayTwoIcon],svg[icon-park-play-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M18.5 24V16.2058L25.25 20.1029L32 24L25.25 27.8971L18.5 31.7942V24Z"></svg:path></svg:g>`,
})
export class IconParkPlayTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayVolleyballIcon],svg[icon-park-play-volleyball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-miterlimit="2" stroke-width="4" d="M29 14C31.7614 14 34 11.7614 34 9C34 6.23858 31.7614 4 29 4C26.2386 4 24 6.23858 24 9C24 11.7614 26.2386 14 29 14Z"></svg:path><svg:path fill="#000" d="M41 24C42.6569 24 44 22.6569 44 21C44 19.3431 42.6569 18 41 18C39.3431 18 38 19.3431 38 21C38 22.6569 39.3431 24 41 24Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M16 24L13.73 35.26C13.52 36.57 12.12 37.31 10.92 36.76L4 34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M37.9996 30.0002L23.7596 19.0703C22.9896 18.5003 21.9296 18.5603 21.2196 19.2003L16.3796 23.6303C15.9096 24.0603 15.9496 24.8003 16.4696 25.1803L25.9996 32.1503C26.7196 32.6803 27.0096 33.6303 26.6896 34.4703L23.1196 44.0003"></svg:path></svg:g>`,
})
export class IconParkPlayVolleyballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlayWrongIcon],svg[icon-park-play-wrong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24"></svg:path><svg:path stroke-linecap="round" d="M33 33L41 41"></svg:path><svg:path stroke-linecap="round" d="M41 33L33 41"></svg:path><svg:path fill="#2F88FF" d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z"></svg:path></svg:g>`,
})
export class IconParkPlayWrongIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlaybackProgressIcon],svg[icon-park-playback-progress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="26" x="4" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M22 14L28 18L22 22V14Z"></svg:path><svg:path stroke="#000" d="M11 40H6"></svg:path><svg:path stroke="#000" d="M17 40H42"></svg:path><svg:path stroke="#000" d="M17 40C17 41.6569 15.6569 43 14 43C12.3431 43 11 41.6569 11 40C11 38.3431 12.3431 37 14 37C15.6569 37 17 38.3431 17 40Z"></svg:path></svg:g>`,
})
export class IconParkPlaybackProgressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlugIcon],svg[icon-park-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 14H42V24C38 32 32 36 24 36C16 36 10 32 6 24V14Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 34L32 44H16L15 34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 24H26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 4L16 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 4V12"></svg:path></svg:g>`,
})
export class IconParkPlugIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlugOneIcon],svg[icon-park-plug-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="24" height="24" x="12" y="12" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 36V41C24 42.6569 22.6569 44 21 44H8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 12V4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 12V4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 24H26"></svg:path></svg:g>`,
})
export class IconParkPlugOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlusIcon],svg[icon-park-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.0605 10L24.0239 38"></svg:path><svg:path d="M10 24L38 24"></svg:path></svg:g>`,
})
export class IconParkPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPlusCrossIcon],svg[icon-park-plus-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M30 4H18V18H4V30H18V44H30V30H44V18H30V4Z"></svg:path>`,
})
export class IconParkPlusCrossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPointIcon],svg[icon-park-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8.00129 30 5.00063 25C1.99996 20 8.3132 15.3125 12.0004 19C15.6876 22.6875 16.0004 23 16.0004 23V7.50001C16.0004 5.56701 17.5674 4 19.5004 4C21.4334 4 23.0004 5.56701 23.0004 7.50001V16C23.0004 14.067 24.5674 12.5 26.5004 12.5C28.4334 12.5 30.0004 14.067 30.0004 16V17.5C30.0004 15.567 31.5674 14 33.5004 14C35.4334 14 37.0004 15.5655 37.0004 17.4985V22.5002C37.0004 20.5672 38.5674 19 40.5004 19C42.4334 19 44.0004 20.567 44.0004 22.5V31.2439C44.0004 32.3988 43.7376 33.5441 43.0869 34.4982C41.9179 36.2122 39.6023 39.0351 36 41C30.4999 44 24.5 43.75 19 41Z"></svg:path>`,
})
export class IconParkPointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPointOutIcon],svg[icon-park-point-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 44H17.476C17.3873 44 17.3049 43.9541 17.2581 43.8788L7.86011 28.7273C6.79115 27.0039 7.14475 24.7577 8.69148 23.446C10.6306 21.8016 13.584 22.3036 14.871 24.4963L17.3333 28.6914V7.94203C17.3333 5.76491 19.0982 4 21.2754 4C23.4525 4 25.2174 5.76491 25.2174 7.94203V17.2709C25.2174 17.8564 25.6817 18.3365 26.2669 18.356L37.8882 18.7443C39.0658 18.7836 40 19.7496 40 20.9278V41C40 42.6569 38.6569 44 37 44Z"></svg:path>`,
})
export class IconParkPointOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPokeballOneIcon],svg[icon-park-pokeball-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:circle cx="24" cy="24" r="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 24H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24H18"></svg:path><svg:circle cx="24" cy="24" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkPokeballOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPokerIcon],svg[icon-park-poker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 4H12V44H42V4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 11.7895L12 10V44L4 11.7895Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M27 18L22 24L27 30L32 24L27 18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 10V14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 34V38"></svg:path></svg:g>`,
})
export class IconParkPokerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPopcornIcon],svg[icon-park-popcorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M33.6961 40.8677L39 17H7L12.3039 40.8677C12.6376 42.3694 12.8045 43.1202 13.3529 43.5601C13.9013 44 14.6704 44 16.2087 44H29.7913C31.3296 44 32.0987 44 32.6471 43.5601C33.1955 43.1202 33.3624 42.3694 33.6961 40.8677Z"></svg:path><svg:path stroke="#fff" d="M27 44L28 17"></svg:path><svg:path stroke="#fff" d="M19 44L18 17"></svg:path><svg:path stroke="#000" d="M31 44H15"></svg:path><svg:path stroke="#000" d="M31 17H15"></svg:path><svg:path stroke="#000" d="M11.0004 16.9999C11.0004 16.9999 10.0004 13.9999 11.5004 12.4999C13.0004 10.9999 16.0004 11.4999 16.0004 11.4999C16.0004 11.4999 16.0004 8.4999 18.0004 7.4999C20.0004 6.4999 23.0004 7.99988 23.0004 7.99988C23.0004 7.99988 25.0004 4.64271 28.0004 5.49992C31.0004 6.35713 31.0004 9.99994 31.0004 9.99994C31.0004 9.99994 33.5004 9.99998 35.0004 11.9999C36.5004 13.9999 35.0004 16.9999 35.0004 16.9999"></svg:path></svg:g>`,
})
export class IconParkPopcornIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPopcornOneIcon],svg[icon-park-popcorn-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 16H41L34 44H14L7 16Z"></svg:path><svg:path stroke="#fff" d="M20 16V44"></svg:path><svg:path stroke="#fff" d="M28 16V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M33 9C30.7909 9 29 10.7909 29 13C29 14.1947 29.5238 15.2671 30.3542 16H35.6458C36.4762 15.2671 37 14.1947 37 13C37 10.7909 35.2091 9 33 9Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 9C21.7909 9 20 10.7909 20 13C20 14.1947 20.5238 15.2671 21.3542 16H26.6458C27.4762 15.2671 28 14.1947 28 13C28 10.7909 26.2091 9 24 9Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M15 9C12.7909 9 11 10.7909 11 13C11 14.1947 11.5238 15.2671 12.3542 16H17.6458C18.4762 15.2671 19 14.1947 19 13C19 10.7909 17.2091 9 15 9Z"></svg:path><svg:path stroke="#000" d="M22.874 9C22.9562 8.68038 23 8.3453 23 8C23 5.79086 21.2091 4 19 4C16.7909 4 15 5.79086 15 8C15 8.3453 15.0438 8.68038 15.126 9"></svg:path><svg:path stroke="#000" d="M32.874 9C32.9562 8.68038 33 8.3453 33 8C33 5.79086 31.2091 4 29 4C26.7909 4 25 5.79086 25 8C25 8.3453 25.0438 8.68038 25.126 9"></svg:path><svg:path stroke="#000" d="M16 16L32 16"></svg:path><svg:path stroke="#000" d="M16 44L32 44"></svg:path></svg:g>`,
})
export class IconParkPopcornOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPositiveDynamicsIcon],svg[icon-park-positive-dynamics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M17 33.9502V42.1102"></svg:path><svg:path d="M9 40V42.0556"></svg:path><svg:path d="M25 27V42.0714"></svg:path><svg:path d="M33 18.9614V42.0878"></svg:path><svg:path d="M41 10.9707V42.0833"></svg:path><svg:path d="M7 33L34 6"></svg:path><svg:path d="M23.5 6H34"></svg:path></svg:g>`,
})
export class IconParkPositiveDynamicsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPotIcon],svg[icon-park-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 28L44 24"></svg:path><svg:path fill="#2F88FF" d="M4 28H34L33.5613 31.8024C33.1537 35.3345 30.163 38 26.6074 38H11.3926C7.83703 38 4.84629 35.3345 4.43873 31.8024L4 28Z"></svg:path><svg:path d="M19 10V20"></svg:path><svg:path d="M11 12V18"></svg:path><svg:path d="M27 12V18"></svg:path></svg:g>`,
})
export class IconParkPotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPotentiometerIcon],svg[icon-park-potentiometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="24" cy="20" fill="#2F88FF" rx="20" ry="8"></svg:ellipse><svg:path d="M24 4V19"></svg:path><svg:path d="M16 34V42"></svg:path><svg:path d="M24 34V44"></svg:path><svg:path d="M32 34V42"></svg:path><svg:path d="M4 20V32.3636C4 32.3636 5.11012 34.7605 8.5 37.0288"></svg:path><svg:path d="M44 20V32.3636C44 32.3636 42.8899 34.7605 39.5 37.0288"></svg:path></svg:g>`,
})
export class IconParkPotentiometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPoundIcon],svg[icon-park-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 16H42"></svg:path><svg:path d="M16 6L16 42"></svg:path><svg:path d="M32 6V42"></svg:path><svg:path d="M6 32H42"></svg:path></svg:g>`,
})
export class IconParkPoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPoundSignIcon],svg[icon-park-pound-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M36 17L12 17"></svg:path><svg:path d="M36 31L12 31"></svg:path><svg:path d="M17 36L17 12"></svg:path><svg:path d="M31 36L31 12"></svg:path></svg:g>`,
})
export class IconParkPoundSignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPoutingFaceIcon],svg[icon-park-pouting-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 29C29 29 31 33 31 33H17C17 33 19 29 24 29Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 18L29 20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 18L19 20"></svg:path></svg:g>`,
})
export class IconParkPoutingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPowderIcon],svg[icon-park-powder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M44 40V20C44 18.3431 42.6569 17 41 17H35.715C34.1737 17 32.8226 18.2428 31.7911 19.388C30.6326 20.6742 28.3769 22 24 22C19.6231 22 17.3674 20.6742 16.2089 19.388C15.1774 18.2428 13.8263 17 12.285 17H7C5.34315 17 4 18.3431 4 20V40C4 41.6569 5.34315 43 7 43H41C42.6569 43 44 41.6569 44 40Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 17C33 19.7614 28.9706 22 24 22C19.0294 22 15 19.7614 15 17"></svg:path><svg:ellipse cx="24" cy="10" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="9" ry="5"></svg:ellipse><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 17V10"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 17V10"></svg:path><svg:ellipse cx="27" cy="10" fill="#000" rx="2" ry="1"></svg:ellipse><svg:ellipse cx="21" cy="10" fill="#000" rx="2" ry="1"></svg:ellipse></svg:g>`,
})
export class IconParkPowderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPowerIcon],svg[icon-park-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14.5 8C13.8406 8.37652 13.2062 8.79103 12.6 9.24051C11.5625 10.0097 10.6074 10.8814 9.75 11.8402C6.79377 15.1463 5 19.4891 5 24.2455C5 34.6033 13.5066 43 24 43C34.4934 43 43 34.6033 43 24.2455C43 19.4891 41.2062 15.1463 38.25 11.8402C37.3926 10.8814 36.4375 10.0097 35.4 9.24051C34.7938 8.79103 34.1594 8.37652 33.5 8"></svg:path><svg:path d="M24 4V24"></svg:path></svg:g>`,
})
export class IconParkPowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPowerSupplyIcon],svg[icon-park-power-supply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M32.2965 6H15.7035C15.2815 6 14.9049 6.26493 14.7623 6.66214L8.09221 25.2431C8.03184 25.4113 8.01763 25.5926 8.05107 25.7681L9.84516 35.1871C9.935 35.6588 10.3474 36 10.8275 36H37.1725C37.6526 36 38.065 35.6588 38.1548 35.1871L39.9489 25.7681C39.9824 25.5926 39.9682 25.4113 39.9078 25.2431L33.2377 6.66214C33.0951 6.26493 32.7185 6 32.2965 6Z"></svg:path><svg:path stroke="#000" d="M24 36V44"></svg:path><svg:path stroke="#fff" d="M24 12V18"></svg:path><svg:path stroke="#fff" d="M16.5 23.4019L19.5 28.598"></svg:path><svg:path stroke="#fff" d="M31.5 23.4019L28.5 28.598"></svg:path></svg:g>`,
})
export class IconParkPowerSupplyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPowerSupplyOneIcon],svg[icon-park-power-supply-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M33 34H15L8 17.75L10 9H38L40 17.75L33 34Z"></svg:path><svg:path stroke="#000" d="M18 4V9"></svg:path><svg:path stroke="#000" d="M30 4V9"></svg:path><svg:path stroke="#000" d="M24 34V44H40V36.6316"></svg:path><svg:path stroke="#fff" d="M18 21H30"></svg:path></svg:g>`,
})
export class IconParkPowerSupplyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPowerpointIcon],svg[icon-park-powerpoint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="10" height="10" x="19" y="15" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M19 33L19 15"></svg:path></svg:g>`,
})
export class IconParkPowerpointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPptIcon],svg[icon-park-ppt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M4 8H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M8 8H40V34H8V8Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M22 16L27 21L22 26"></svg:path><svg:path stroke="#000" d="M16 42L24 34L32 42"></svg:path></svg:g>`,
})
export class IconParkPptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPregnantWomenIcon],svg[icon-park-pregnant-women-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M33 4V11.5186C40.3124 15.7131 43.6144 21.2939 42.9062 28.261C42.1979 35.2281 38.8959 40.4745 33 44"></svg:path><svg:path stroke-linejoin="round" d="M13.7722 4C11.6342 4.36936 10.0954 5.62186 9.15593 7.7575C7.74671 10.961 5 21.9637 5 23.7258C5 25.488 8.56767 30.2348 17.0518 37.4356C20.9831 40.7722 23.3065 40.602 24.5648 38.3638C25.8231 36.1256 24.1585 34.6902 22.0496 33.0368C18.1867 30.0083 13.102 25.215 13.102 23.111C13.102 21.7083 14.4186 17.4336 17.0518 10.287"></svg:path><svg:path d="M8.20117 28.9409C8.71547 33.9209 9.64845 38.9209 11.0001 43.9409"></svg:path><svg:path d="M33 19.9443C34.5469 20.972 35.5469 22.3094 36 23.9564C36.4531 25.6035 36.5852 27.1055 36.3963 28.4624"></svg:path></svg:g>`,
})
export class IconParkPregnantWomenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPreschoolIcon],svg[icon-park-preschool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 35H41C42.1046 35 43 34.1046 43 33V9C43 7.89543 42.1046 7 41 7H7C5.89543 7 5 7.89543 5 9V33C5 34.1046 5.89543 35 7 35Z"></svg:path><svg:path stroke="#fff" d="M14 14V28"></svg:path><svg:path stroke="#fff" d="M34 14V28"></svg:path><svg:path stroke="#fff" d="M24 17V25"></svg:path><svg:path stroke="#fff" d="M20 21H28"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 41L44 41"></svg:path></svg:g>`,
})
export class IconParkPreschoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPrescriptionIcon],svg[icon-park-prescription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M8 8C8 6.89543 8.89543 6 10 6H27V18H40V40C40 41.1046 39.1046 42 38 42H10C8.89543 42 8 41.1046 8 40V8Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M27 6L40 18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M27.0244 6V18.0818H39.9996"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 30H26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 24V36"></svg:path></svg:g>`,
})
export class IconParkPrescriptionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPressIcon],svg[icon-park-press-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M22 43C17.2742 41.2327 13.3325 35.1851 11.3597 31.6428C10.5079 30.1134 10.9566 28.2347 12.3236 27.1411C13.8473 25.9222 16.0438 26.0438 17.4236 27.4236L19 29V17.5C19 16.1193 20.1193 15 21.5 15C22.8807 15 24 16.1193 24 17.5V23.5C24 22.1193 25.1193 21 26.5 21C27.8807 21 29 22.1193 29 23.5V25.5C29 24.1193 30.1193 23 31.5 23C32.8807 23 34 24.1193 34 25.5V27.5C34 26.1193 35.1193 25 36.5 25C37.8807 25 39 26.1193 39 27.5V35.368C39 36.4383 38.7354 37.496 38.1185 38.3707C37.0949 39.8219 35.255 42.0336 33 43C29.5 44.5 26.3701 44.6343 22 43Z"></svg:path><svg:path d="M29 12C29 7.58172 25.4183 4 21 4C16.5817 4 13 7.58172 13 12C13 12.6906 13.0875 13.3608 13.252 14M13.252 14C13.3403 14.3428 13.4506 14.6766 13.5815 15L13.252 14Z"></svg:path></svg:g>`,
})
export class IconParkPressIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPreviewCloseIcon],svg[icon-park-preview-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 16C6.63472 17.2193 7.59646 18.3504 8.82276 19.3554C12.261 22.1733 17.779 24 24 24C30.221 24 35.739 22.1733 39.1772 19.3554C40.4035 18.3504 41.3653 17.2193 42 16"></svg:path><svg:path d="M28.9775 24L31.048 31.7274"></svg:path><svg:path d="M37.3535 21.3536L43.0103 27.0104"></svg:path><svg:path d="M5.00004 27.0103L10.6569 21.3534"></svg:path><svg:path d="M16.9278 31.7276L18.9983 24.0001"></svg:path></svg:g>`,
})
export class IconParkPreviewCloseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPreviewCloseOneIcon],svg[icon-park-preview-close-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.85786 18C6.23858 21 4 24 4 24C4 24 12.9543 36 24 36C25.3699 36 26.7076 35.8154 28 35.4921M20.0318 12.5C21.3144 12.1816 22.6414 12 24 12C35.0457 12 44 24 44 24C44 24 41.7614 27 38.1421 30"></svg:path><svg:path d="M20.3142 20.6211C19.4981 21.5109 19 22.6972 19 23.9998C19 26.7612 21.2386 28.9998 24 28.9998C25.3627 28.9998 26.5981 28.4546 27.5 27.5705"></svg:path><svg:path d="M42 42L6 6"></svg:path></svg:g>`,
})
export class IconParkPreviewCloseOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPreviewOpenIcon],svg[icon-park-preview-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 36C35.0457 36 44 24 44 24C44 24 35.0457 12 24 12C12.9543 12 4 24 4 24C4 24 12.9543 36 24 36Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"></svg:path></svg:g>`,
})
export class IconParkPreviewOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPrinterIcon],svg[icon-park-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37 32H11V44H37V32Z"></svg:path><svg:path stroke-linecap="round" d="M4 20H44V38H37.0173V32H10.9805V38H4V20Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M38 4H10V20H38V4Z"></svg:path></svg:g>`,
})
export class IconParkPrinterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPrinterOneIcon],svg[icon-park-printer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 33H42C43.1046 33 44 32.1046 44 31V15C44 13.8954 43.1046 13 42 13H32"></svg:path><svg:path d="M16 33H6C4.89543 33 4 32.1046 4 31V15C4 13.8954 4.89543 13 6 13H16"></svg:path><svg:path d="M12 13V19H36V13"></svg:path><svg:path d="M16 13V5H32V13"></svg:path><svg:path d="M16 29V43H32V29"></svg:path><svg:path d="M22 35H26"></svg:path><svg:line x1="13" x2="35" y1="27" y2="27"></svg:line></svg:g>`,
})
export class IconParkPrinterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPrinterTwoIcon],svg[icon-park-printer-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M38 20V8C38 6.89543 37.1046 6 36 6H12C10.8954 6 10 6.89543 10 8V20"></svg:path><svg:rect width="36" height="22" x="6" y="20" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M20 34H35V42H20V34Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 26H15"></svg:path></svg:g>`,
})
export class IconParkPrinterTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPrisonIcon],svg[icon-park-prison-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M6 4V12C6 12.5523 6.44772 13 7 13H19C19.5523 13 20 12.5523 20 12V4"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M6 7H20"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M28 22H6V44H28"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M16 44V13"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M10 22V13"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M13 4V7"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M27 13V16"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M35 13V16"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M43 13V16"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M43 44V16H27V44H43Z"></svg:path><svg:path stroke="#fff" d="M35 34V44"></svg:path><svg:path stroke="#000" d="M31 44L39 44"></svg:path></svg:g>`,
})
export class IconParkPrisonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkProcessLineIcon],svg[icon-park-process-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 40H14"></svg:path><svg:path d="M4 32H24"></svg:path><svg:path d="M22 40H27"></svg:path><svg:path d="M37 40H44"></svg:path><svg:path d="M35 32H44"></svg:path><svg:path d="M32 24H44"></svg:path><svg:path d="M16 24H22"></svg:path><svg:path d="M4 24H6"></svg:path><svg:path d="M4 16H8"></svg:path><svg:path d="M4 8H11L19 16H44"></svg:path><svg:path d="M22 8H44"></svg:path></svg:g>`,
})
export class IconParkProcessLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkProjectorIcon],svg[icon-park-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 16H44V32H4V16H24"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 38V32H12V38H6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 38V32H36V38H42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 24H18"></svg:path><svg:circle cx="31" cy="16" r="7" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="31" cy="16" r="3" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkProjectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkProjectorOneIcon],svg[icon-park-projector-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 21V10H10V21"></svg:path><svg:rect width="40" height="16" x="4" y="21" fill="#2F88FF" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:rect width="4" height="4" x="14" y="27" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 29H36"></svg:path></svg:g>`,
})
export class IconParkProjectorOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkProjectorThreeIcon],svg[icon-park-projector-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M6 38V32H12H36H42V38H36V32H12V38H6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 38V32H36V38H42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 38V32H12V38H6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 16H4V32H6H12H36H42H44V16H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 24H18"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 23C34.866 23 38 19.866 38 16C38 12.134 34.866 9 31 9C27.134 9 24 12.134 24 16C24 19.866 27.134 23 31 23Z"></svg:path><svg:path fill="#fff" d="M31 19C32.6569 19 34 17.6569 34 16C34 14.3431 32.6569 13 31 13C29.3431 13 28 14.3431 28 16C28 17.6569 29.3431 19 31 19Z"></svg:path></svg:g>`,
})
export class IconParkProjectorThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkProjectorTwoIcon],svg[icon-park-projector-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 12C4 10.8954 4.89543 10 6 10H42C43.1046 10 44 10.8954 44 12V32C44 33.1046 43.1046 34 42 34H6C4.89543 34 4 33.1046 4 32V12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M12 19H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M12 25H16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 40L14 34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M34 40V34"></svg:path><svg:circle cx="31" cy="22" r="5" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkProjectorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkProportionalScalingIcon],svg[icon-park-proportional-scaling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M22.2679 7C23.0377 5.66667 24.9623 5.66667 25.7321 7L43.0526 37C43.8224 38.3333 42.8601 40 41.3205 40H6.67949C5.13989 40 4.17764 38.3333 4.94744 37L22.2679 7Z"></svg:path><svg:path stroke-linecap="round" d="M19 40L32 18"></svg:path><svg:path stroke-linecap="round" d="M32 40L38 29"></svg:path></svg:g>`,
})
export class IconParkProportionalScalingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkProtectIcon],svg[icon-park-protect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 23L22 30L34 18"></svg:path></svg:g>`,
})
export class IconParkProtectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkProtectionIcon],svg[icon-park-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 24C42 14.6112 33.9411 7 24 7C14.0589 7 6 14.6112 6 24H42Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 24.0083V38.5454C24 41.5579 21.5142 44 18.5 44C15.4858 44 13 41.5579 13 38.5454"></svg:path><svg:path stroke-linecap="round" d="M24 4V7"></svg:path></svg:g>`,
})
export class IconParkProtectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPublicToiletIcon],svg[icon-park-public-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="15" cy="10" r="4"></svg:circle><svg:circle cx="33" cy="10" r="4"></svg:circle><svg:path d="M10 20H20L18 42H12L10 20Z"></svg:path><svg:path d="M28 20H38L40 31H37L36 42H30L29 31H26L28 20Z"></svg:path></svg:g>`,
})
export class IconParkPublicToiletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPullDoorIcon],svg[icon-park-pull-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 8V40L24.2 44V4L6 8Z"></svg:path><svg:path stroke="#000" d="M24.2002 8H42.0002V40H24.2002"></svg:path><svg:path stroke="#fff" d="M18 22V26"></svg:path></svg:g>`,
})
export class IconParkPullDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPullRequestsIcon],svg[icon-park-pull-requests-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37 44C39.2091 44 41 42.2091 41 40C41 37.7909 39.2091 36 37 36C34.7909 36 33 37.7909 33 40C33 42.2091 34.7909 44 37 44Z"></svg:path><svg:path fill="#2F88FF" d="M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z"></svg:path><svg:path fill="#2F88FF" d="M11 44C13.2091 44 15 42.2091 15 40C15 37.7909 13.2091 36 11 36C8.79086 36 7 37.7909 7 40C7 42.2091 8.79086 44 11 44Z"></svg:path><svg:path stroke-linecap="round" d="M11 12V36"></svg:path><svg:path stroke-linecap="round" d="M24 10H33C35.2091 10 37 11.7909 37 14V36"></svg:path><svg:path stroke-linecap="round" d="M30 16L24 10L30 4"></svg:path></svg:g>`,
})
export class IconParkPullRequestsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPumpkinIcon],svg[icon-park-pumpkin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="40" height="26" x="4" y="14" fill="#2F88FF" rx="13"></svg:rect><svg:ellipse cx="24" cy="27" rx="8" ry="13"></svg:ellipse><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 6H27C25.3431 6 24 7.34315 24 9V14"></svg:path></svg:g>`,
})
export class IconParkPumpkinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPureNaturalIcon],svg[icon-park-pure-natural-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M11 41.0001C15.1674 39.2093 19.0922 38.2431 22.7746 38.1015C26.457 37.9598 31.1988 38.5927 37 40.0001"></svg:path><svg:path stroke-linecap="round" d="M23.0452 44C22.2783 34.5599 22.5964 27.2266 23.9997 22"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linejoin="round" d="M24 23.176C25.59 17.1581 28.3898 13.5692 32.3992 12.4095C36.4086 11.2497 40.2755 11.7812 43.9998 14.004C44.0186 18.8959 41.8952 22.4796 37.6296 24.755C33.364 27.0305 28.8208 26.5041 24 23.176Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linejoin="round" d="M23.7919 22.1141C24.6253 14.9273 22.9554 9.86554 18.7822 6.92866C14.6089 3.99178 9.77638 3.336 4.28447 4.96133C3.32535 11.5907 4.79153 16.6036 8.68299 20C12.5745 23.3964 17.6108 24.1011 23.7919 22.1141Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkPureNaturalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPushDoorIcon],svg[icon-park-push-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M6 6H42V42H6"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M6 6V42L24 36V12L6 6Z"></svg:path><svg:path stroke="#fff" d="M18 22V26"></svg:path></svg:g>`,
})
export class IconParkPushDoorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPushpinIcon],svg[icon-park-pushpin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 4H16L20 7L16 20C16 20 10 24 10 28H20L24 44L28 28H38C38 24 34 21.1667 32 20L28 7L32 4Z"></svg:path>`,
})
export class IconParkPushpinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPuzzleIcon],svg[icon-park-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M4 24V12H13V10C13 6.68629 15.6863 4 19 4C22.3137 4 25 6.68629 25 10V12H34V24H38C41.3137 24 44 26.6863 44 30C44 33.3137 41.3137 36 38 36H34V44H4V36H8C11.3137 36 14 33.3137 14 30C14 26.6863 11.3137 24 8 24H4Z"></svg:path>`,
})
export class IconParkPuzzleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPyramidIcon],svg[icon-park-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 12L38 42H4L21 12Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M36.5 42H44L36 28L33 33"></svg:path><svg:path stroke-linecap="round" d="M21 12L13 42"></svg:path></svg:g>`,
})
export class IconParkPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkPyramidOneIcon],svg[icon-park-pyramid-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M19 14L33 42H5L19 14Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 25L15 42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M33 42H43.5L35 28L30.5 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M25.9836 26.3959C32.2118 24.8136 35.9781 18.482 34.3959 12.2538C32.8136 6.02557 26.482 2.25926 20.2538 3.84151C14.0255 5.42376 10.2592 11.7554 11.8415 17.9836C12.2277 19.5037 12.8968 20.8772 13.7782 22.0621"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 42H10"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22.5 21L27.5 31"></svg:path></svg:g>`,
})
export class IconParkPyramidOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkQingniaoClueIcon],svg[icon-park-qingniao-clue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M1.3868 27.2805C3.34912 36.6795 12.5111 42.7522 21.946 40.9791L21.9401 40.9844C32.9323 39.189 38.0795 32.5472 42.2634 29.223C44.4878 27.4558 45.6531 26.4229 46.7932 25.8274C46.7932 25.827 46.7932 25.827 46.7932 25.827C46.0465 25.9532 45.5667 25.7259 44.9223 25.4991C44.2111 25.2482 43.2991 24.9973 41.6082 25.2213C38.3851 25.6489 35.5648 28.8707 35.5648 28.8707L33.8457 30.3991C31.7855 31.9941 29.3381 33.1577 26.6108 33.7223C23.4776 34.3705 20.3656 34.1488 17.5286 33.2226C16.379 32.8472 15.2753 32.3552 14.2326 31.7593C10.0059 29.3443 6.79633 25.2102 5.72648 20.0864C5.09572 17.0668 5.2853 14.067 6.14222 11.3161C2.11374 15.3648 0.134343 21.2831 1.3868 27.2805Z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M21.946 40.9791L21.9401 40.9844C32.9323 39.189 38.0795 32.5472 42.2634 29.223C44.4878 27.4558 45.6531 26.4229 46.7932 25.8274C46.0465 25.9532 45.5667 25.7259 44.9223 25.4991C44.2111 25.2482 43.2991 24.9973 41.6082 25.2213C38.3851 25.6489 35.5648 28.8707 35.5648 28.8707L33.8457 30.3991C31.7855 31.9941 29.3381 33.1577 26.6108 33.7223C23.4776 34.3705 20.3656 34.1488 17.5286 33.2226C16.379 32.8472 15.2753 32.3552 14.2326 31.7593C10.0059 29.3443 6.79633 25.2102 5.72648 20.0864C5.09572 17.0668 5.2853 14.067 6.14222 11.3161C2.11374 15.3648 0.134343 21.2831 1.3868 27.2805C3.34912 36.6795 12.5111 42.7522 21.946 40.9791Z" clip-rule="evenodd"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M35.7492 28.5858C33.0746 37.9318 23.2968 43.3504 13.909 40.6876C5.72378 38.3667 0.537976 30.6679 1.11611 22.5385C1.79601 28.982 6.31272 34.6759 12.9545 36.5594C21.6771 39.034 30.7624 33.9991 33.2475 25.3145C33.9657 22.804 34.0536 20.2633 33.605 17.8599C33.0559 14.9188 31.7032 12.1833 29.7184 9.96063C32.2862 11.984 34.2232 14.6734 35.3407 17.6914C36.5914 21.0691 36.8157 24.8582 35.7492 28.5858Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="M27.459 32.4682L27.9865 33.3868L28.8426 33.0344L29.6327 32.6819C31.2256 31.8874 31.1506 32.0076 33.067 30.7387C34.9835 29.4698 35.995 28.6987 37.4679 26.9245L36.6486 26.2751C35.6802 27.497 34.6114 28.4134 32.7796 29.6262C31.6248 30.3908 29.8493 31.3398 27.459 32.4682Z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M18.6964 6.11786C21.0455 6.11786 23.3256 6.58727 25.4235 7.45256C16.7525 9.89997 11.2736 18.5288 12.8714 27.4427C12.8725 27.4469 12.8732 27.4518 12.8735 27.4559C12.8979 27.5905 12.9237 27.725 12.9512 27.8591C12.953 27.8682 12.9547 27.8776 12.9568 27.8863C12.9607 27.9048 12.9638 27.9233 12.9676 27.9417C12.9917 28.0567 13.0175 28.1707 13.0436 28.2843C13.0488 28.3062 13.054 28.3278 13.0593 28.3501C13.0701 28.3972 13.0809 28.4442 13.0945 28.4944C13.2718 29.2221 13.4946 29.9319 13.7601 30.6208C10.8096 28.5198 8.88151 25.9539 7.64028 23.2814C5.98995 19.7281 5.75035 15.6338 7.03271 10.4819C9.25047 8.54114 11.9865 7.12893 15.0822 6.4883C15.3262 6.43742 15.5701 6.39351 15.814 6.35378C16.7811 6.19487 17.7443 6.11786 18.6964 6.11786ZM5.38555 17.417L5.40021 17.7679C5.32054 16.681 5.34377 15.6045 5.46259 14.5493C5.3808 15.5333 5.3542 16.49 5.38555 17.417Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkQingniaoClueIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkQiyehaoIcon],svg[icon-park-qiyehao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 19L14.863 12.0858C12.1994 10.6839 9 12.6154 9 15.6255V30"></svg:path><svg:path d="M9 30L18 23V14"></svg:path><svg:path d="M11 12L20 5L36 13L28 19"></svg:path><svg:path d="M20 29L33.137 35.9142C35.8006 37.3161 39 35.3846 39 32.3745V18"></svg:path><svg:path d="M39 18L30 25V34"></svg:path><svg:path d="M37 36L28 43L12 35L20 29"></svg:path></svg:g>`,
})
export class IconParkQiyehaoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkQuadrangularPyramidIcon],svg[icon-park-quadrangular-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24L24 4L4 24L24 44L44 24Z"></svg:path><svg:path d="M4 24H44"></svg:path><svg:path d="M24 44L18 24L24 4"></svg:path><svg:path d="M24 44L30 24L24 4"></svg:path></svg:g>`,
})
export class IconParkQuadrangularPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkQuadrilateralIcon],svg[icon-park-quadrilateral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M28.038 8H7C5.34315 8 4 9.34315 4 11V37C4 38.6569 5.34315 40 7 40H39.413C41.5764 40 43.0286 37.7796 42.1614 35.7975L30.7864 9.79754C30.3087 8.70558 29.2298 8 28.038 8Z"></svg:path>`,
})
export class IconParkQuadrilateralIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkQuoteIcon],svg[icon-park-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.8533 9.11587C11.3227 13.9521 7.13913 19.5811 6.30256 26.0028C5.00021 35.9999 13.9404 40.8932 18.4703 36.4966C23.0002 32.1 20.2848 26.5195 17.0047 24.9941C13.7246 23.4686 11.7187 23.9999 12.0686 21.9614C12.4185 19.923 17.0851 14.2712 21.1849 11.6391C21.4569 11.4078 21.5604 10.959 21.2985 10.6185C21.1262 10.3946 20.7883 9.95545 20.2848 9.30102C19.8445 8.72875 19.4227 8.75017 18.8533 9.11587Z"></svg:path><svg:path d="M38.6789 9.11587C31.1484 13.9521 26.9648 19.5811 26.1282 26.0028C24.8259 35.9999 33.7661 40.8932 38.296 36.4966C42.8259 32.1 40.1105 26.5195 36.8304 24.9941C33.5503 23.4686 31.5443 23.9999 31.8943 21.9614C32.2442 19.923 36.9108 14.2712 41.0106 11.6391C41.2826 11.4078 41.3861 10.959 41.1241 10.6185C40.9519 10.3946 40.614 9.95545 40.1105 9.30102C39.6702 8.72875 39.2484 8.75017 38.6789 9.11587Z"></svg:path></svg:g>`,
})
export class IconParkQuoteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRabbitIcon],svg[icon-park-rabbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:ellipse cx="24" cy="32" fill="#2F88FF" stroke="#000" stroke-width="4" rx="17" ry="12"></svg:ellipse><svg:circle cx="18" cy="29.412" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="35.412" r="2" fill="#fff"></svg:circle><svg:circle cx="30" cy="29.412" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12.6672 22C11.3521 18.8333 9.06034 11.1127 10.413 5.91273C10.7887 4.91273 12.2164 3.21273 14.9217 4.41273C15.2974 4.57935 16.1616 5.2126 16.6125 6.4126C17.7397 8.4126 16.0489 21 16.0489 21"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35.3871 22C36.7025 18.8333 38.9324 11.1127 37.5793 5.91273C37.2035 4.91273 35.7754 3.21273 33.0693 4.41273C32.6935 4.57935 31.8291 5.2126 31.378 6.4126C30.2505 8.4126 32.0044 20 32.0044 20"></svg:path></svg:g>`,
})
export class IconParkRabbitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRabbitZodiacIcon],svg[icon-park-rabbit-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 44V24C6.16667 22.3334 7.2 17.1998 12 13.9998L8 9.99974C6 7.54786 7.5 2.00024 13 3.99998C15 5.00024 16 6.50024 17.5 8.00024L24 15.0002C24.6667 16.0002 26.5 17.809 26 22.4522"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 25.0005C21 25.0005 31 28.0005 34 36.0005C34.6667 38.2624 35.5 41.9995 36 43.9995"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 43.9996C18 40.1092 20.8 31.9578 32 33.4517"></svg:path><svg:circle cx="40.5" cy="41.452" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkRabbitZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadarIcon],svg[icon-park-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke-linejoin="round" d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" clip-rule="evenodd"></svg:path><svg:path stroke-linejoin="round" d="M24 4V44"></svg:path><svg:path d="M4 24.0002L18 24.0086"></svg:path><svg:path stroke-linejoin="round" d="M4 24.0083L44 24.0083"></svg:path></svg:g>`,
})
export class IconParkRadarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadarChartIcon],svg[icon-park-radar-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23.9998 3L45.8741 18.8926L38 45H10L2.12549 18.8926L23.9998 3Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 45L31 37"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10 45L17 37"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M2 19L12 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M46 19L36 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 3V13"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 13L30.0073 17.5706L36 22L31 37H17L12 22L17.9927 17.5706L24 13Z"></svg:path><svg:path stroke="#000" d="M7.59406 14.9194L2.12549 18.8926L4.09412 25.4194"></svg:path><svg:path stroke="#000" d="M8.03125 38.4731L9.99988 45H16.9999"></svg:path><svg:path stroke="#000" d="M31 45H38L39.9685 38.4731"></svg:path><svg:path stroke="#000" d="M40.4053 14.9194L45.8738 18.8926L43.9053 25.4194"></svg:path><svg:path stroke="#000" d="M29.4684 6.97315L23.9998 3L18.5312 6.97315"></svg:path></svg:g>`,
})
export class IconParkRadarChartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadarThreeIcon],svg[icon-park-radar-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 4L24 21"></svg:path><svg:path stroke-linecap="round" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 19.3743 42.4296 15.1154 39.7929 11.7273"></svg:path><svg:path stroke-linecap="round" d="M24 13C17.9249 13 13 17.9249 13 24C13 30.0751 17.9249 35 24 35C30.0751 35 35 30.0751 35 24C35 21.4559 34.1363 19.1135 32.6861 17.25"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle></svg:g>`,
})
export class IconParkRadarThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadarTwoIcon],svg[icon-park-radar-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 20V4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkRadarTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadiationIcon],svg[icon-park-radiation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M24.0039 27C25.6608 27 27.0039 25.6569 27.0039 24C27.0039 22.3431 25.6608 21 24.0039 21C22.3471 21 21.0039 22.3431 21.0039 24C21.0039 25.6569 22.3471 27 24.0039 27Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M19.0405 31.476C20.4626 32.4194 22.1673 32.9688 24 32.9688C25.8327 32.9688 27.5374 32.4194 28.9595 31.476L35.021 40.6827C31.861 42.7792 28.0727 44 24 44C19.9273 44 16.139 42.7792 12.979 40.6827L19.0405 31.476ZM15.0159 24.484L4.03531 25.145C4.01188 24.7474 4 24.3467 4 23.9432C4 16.0911 8.49944 9.29287 15.0538 6L19.9742 15.8688C17.0247 17.3506 15 20.4098 15 23.9432C15 24.1248 15.0053 24.3051 15.0159 24.484ZM28.0258 15.8688L32.9462 6C39.5006 9.29287 44 16.0911 44 23.9432C44 24.3467 43.9881 24.7474 43.9647 25.145L32.9841 24.484C32.9947 24.3051 33 24.1248 33 23.9432C33 20.4098 30.9753 17.3506 28.0258 15.8688Z"></svg:path></svg:g>`,
})
export class IconParkRadiationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadioIcon],svg[icon-park-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="38" height="28" x="5" y="13" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:circle cx="18" cy="28" r="6" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 24L36 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 32L36 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7 13L25 4"></svg:path></svg:g>`,
})
export class IconParkRadioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadioNannyIcon],svg[icon-park-radio-nanny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M36 42.0012V21.6875C36 15.3125 31.0909 10 24 10C16.9091 10 12 15.3125 12 21.6875V42.0012C12 43.1058 12.8954 44 14 44H34C35.1046 44 36 43.1058 36 42.0012Z"></svg:path><svg:circle cx="24" cy="23" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" d="M18 34H20"></svg:path><svg:path stroke="#fff" d="M26 38H30"></svg:path><svg:path stroke="#000" d="M12 20V4"></svg:path></svg:g>`,
})
export class IconParkRadioNannyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadioOneIcon],svg[icon-park-radio-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="38" height="28" x="5" y="14" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 22H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 28H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 34H36"></svg:path><svg:circle cx="18" cy="28" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 14V6H38V14"></svg:path></svg:g>`,
})
export class IconParkRadioOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadioTwoIcon],svg[icon-park-radio-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:circle cx="24" cy="24" r="8" fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class IconParkRadioTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadishIcon],svg[icon-park-radish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M37 23.2C37 32 24 44 24 44C24 44 11 32 11 23.2C11 15.9098 16.8203 10 24 10C31.1797 10 37 15.9098 37 23.2Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" d="M24 4V10"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" d="M18 5L22 10"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" d="M30 5L26 10"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" d="M12 20H20"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" d="M29 27H36"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" d="M16 34H22"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M13.812 15C12.0515 17.2521 11 20.1014 11 23.2C11 28.7547 16.1797 35.5844 20 39.8663"></svg:path><svg:path stroke="#000" d="M37.0005 23.2C37.0005 25.974 35.7087 29.066 33.9395 31.9999"></svg:path></svg:g>`,
})
export class IconParkRadishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRadishOneIcon],svg[icon-park-radish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M39 15C41.1831 15.5549 43 16.5 43 19C43 21.5 40 22 38 22"></svg:path><svg:path stroke="#000" d="M26 10C26 7 27.7487 5 30 5C32 5 33.048 5.61995 34 8"></svg:path><svg:path stroke="#000" d="M31 11.9999C31 11.9999 31.9511 9.86821 33.1227 9.08969C34.9926 7.84723 37.5 7.71826 38.8715 9.08969C40.4633 10.6815 40.4633 13.2466 38.8715 14.8384C37.2796 16.4302 35.9971 16.9999 35.9971 16.9999"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M10.0009 13.9999C4.91623 19.0846 3.58302 26.9134 6.58928 33.1033C6.58928 33.1033 5.00095 40.9999 6.00095 41.9999C7.00095 42.9999 14.8622 41.4081 14.8622 41.4081C17.0725 42.4677 19.4148 42.9999 21.8025 42.9999C26.1362 42.9999 30.7718 41.1471 34.0009 37.9999C37.1846 34.8162 38.6075 30.702 38.6075 26.2358C38.6075 21.7287 37.0005 17.9999 33.6547 14.5246C30.3089 11.0492 26.4006 9.3125 21.8889 9.3125C17.3818 9.3125 13.1846 10.8162 10.0009 13.9999Z"></svg:path><svg:path stroke="#fff" d="M5 27.9998C5 27.9998 10 26.9998 12 30.9998"></svg:path><svg:path stroke="#fff" d="M18 42C18 42 19 38 17 36"></svg:path><svg:path stroke="#000" d="M21.8026 43C19.4149 43 17.0727 42.4679 14.8623 41.4082"></svg:path><svg:path stroke="#000" d="M6.58928 33.1034C3.58302 26.9136 4.91623 19.0847 10.0009 14"></svg:path></svg:g>`,
})
export class IconParkRadishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRailwayIcon],svg[icon-park-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M12 6C12 4.89543 12.8954 4 14 4H34C35.1046 4 36 4.89543 36 6V30C36 31.1046 35.1046 32 34 32H14C12.8954 32 12 31.1046 12 30V6Z"></svg:path><svg:circle cx="18" cy="26" r="2" fill="#fff"></svg:circle><svg:circle cx="30" cy="26" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 20L36 20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 38H27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 44H30"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M17 32L11 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M31 32L37 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 15V25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 15V25"></svg:path></svg:g>`,
})
export class IconParkRailwayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRankingIcon],svg[icon-park-ranking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M17 18H4V42H17V18Z"></svg:path><svg:path d="M30 6H17V42H30V6Z"></svg:path><svg:path stroke-linecap="round" d="M43 26H30V42H43V26Z"></svg:path></svg:g>`,
})
export class IconParkRankingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRankingListIcon],svg[icon-park-ranking-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 17V31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 24V31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 22V31"></svg:path></svg:g>`,
})
export class IconParkRankingListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRattleIcon],svg[icon-park-rattle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="30.075" cy="15.562" r="11" fill="#2F88FF" transform="rotate(40 30.075 15.562)"></svg:circle><svg:path d="M21.6485 8.49117C17.0389 8.53954 15.322 5.1407 13.0722 7.82186C11.0395 10.2443 13.5652 13.4572 11.6369 15.7553"></svg:path><svg:path d="M25.3022 25.9167C25.3022 25.9167 21.1241 30.8959 19.5171 32.8111C17.9101 34.7262 17.8352 37.9269 15.9069 40.225C13.9785 42.5231 11.1609 42.7696 8.86272 40.8413C6.56459 38.9129 6.31808 36.0952 8.24644 33.7971C10.1748 31.499 13.3139 30.8694 14.9208 28.9543C16.5278 27.0392 20.0837 23.0608 20.7059 22.0599"></svg:path><svg:circle cx="11.24" cy="19.339" r="3" fill="#2F88FF" transform="rotate(40 11.24 19.34)"></svg:circle><svg:circle cx="28.462" cy="37.707" r="3" fill="#2F88FF" transform="rotate(40 28.462 37.707)"></svg:circle><svg:path d="M37.2158 24.165C37.8454 27.304 40.0686 32.4331 38.0786 34.0268C36.0886 35.6205 31.554 32.4682 30.3917 35.4091"></svg:path></svg:g>`,
})
export class IconParkRattleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRattleOneIcon],svg[icon-park-rattle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="29.463" cy="16.989" r="11" fill="#2F88FF" transform="rotate(40 29.463 16.989)"></svg:circle><svg:path d="M38.5327 23.2932C38.5327 23.2932 32.8973 23.7862 27.535 19.2867C22.1727 14.7872 21.6797 9.15186 21.6797 9.15186"></svg:path><svg:path d="M26.8655 27.8629C23.4051 28.8755 21.7981 30.7906 20.1911 32.7057C18.5842 34.6208 18.5093 37.8215 16.5809 40.1196C14.6526 42.4178 11.8349 42.6643 9.53676 40.7359C7.23863 38.8076 6.99211 35.9899 8.92048 33.6918C10.8488 31.3936 13.9879 30.7641 15.5949 28.849C17.2018 26.9339 18.8088 25.0188 19.2051 21.4351"></svg:path><svg:path d="M38.832 10.4903C39.897 9.22108 39.7314 7.32882 38.4622 6.26381C37.193 5.19881 35.3007 5.36436 34.2357 6.63358"></svg:path></svg:g>`,
})
export class IconParkRattleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRazorIcon],svg[icon-park-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="20" x="5" y="5" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M14 5V25"></svg:path><svg:path stroke="#fff" d="M34 5V25"></svg:path><svg:path stroke="#000" d="M30 5H38"></svg:path><svg:path stroke="#fff" d="M5 11L43 11"></svg:path><svg:path stroke="#fff" d="M5 19L43 19"></svg:path><svg:path stroke="#000" d="M5 21V9"></svg:path><svg:path stroke="#000" d="M43 21V9"></svg:path><svg:path stroke="#000" d="M10 5H18"></svg:path><svg:path stroke="#000" d="M30 25H38"></svg:path><svg:path stroke="#000" d="M10 25H18"></svg:path><svg:path stroke="#000" d="M32 25C32 29.4183 28.4183 33 24 33C19.5817 33 16 29.4183 16 25"></svg:path><svg:path stroke="#000" d="M28 32L27 37V44"></svg:path><svg:path stroke="#000" d="M20 32L21 37V44"></svg:path></svg:g>`,
})
export class IconParkRazorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReadBookIcon],svg[icon-park-read-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M24 21V44C20.7086 40 10.6286 40 6 40V18C15.8743 18 22.1143 20 24 21Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M24 21V44C27.2914 40 37.3714 40 42 40V18C32.1257 18 25.8857 20 24 21Z"></svg:path><svg:circle cx="24" cy="12" r="8"></svg:circle></svg:g>`,
})
export class IconParkReadBookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReceiveIcon],svg[icon-park-receive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4.59202 19.4667C4.29018 18.2091 5.24343 17 6.53679 17H41.4632C42.7566 17 43.7098 18.2091 43.408 19.4667L38.368 40.4667C38.1522 41.366 37.348 42 36.4232 42H11.5768C10.652 42 9.84784 41.366 9.63202 40.4667L4.59202 19.4667Z"></svg:path><svg:rect width="8" height="10" x="11" y="7" stroke="#000" stroke-linejoin="round"></svg:rect><svg:path stroke="#000" stroke-linejoin="round" d="M19 17L25.5 8L38 17"></svg:path><svg:path stroke="#fff" d="M15 25H23"></svg:path></svg:g>`,
})
export class IconParkReceiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReceiverIcon],svg[icon-park-receiver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M9.85786 38.1422C17.6684 45.9527 30.3316 45.9527 38.1421 38.1422L9.85786 9.85791C2.04738 17.6684 2.04738 30.3317 9.85786 38.1422Z"></svg:path><svg:path d="M33.8994 33.8995L39.1698 11.9138"></svg:path><svg:path d="M24 23.9999L37.1716 10.8284"></svg:path><svg:path d="M14.1006 14.1005L36.0863 8.83008"></svg:path><svg:path fill="#2F88FF" d="M44 8C44 10.2091 42.2091 12 40 12C39.7154 12 39.4377 11.9703 39.1699 11.9137C38.3984 11.7509 37.7089 11.3658 37.1716 10.8284C36.6342 10.2911 36.2491 9.60161 36.0863 8.83013C36.0297 8.56232 36 8.28463 36 8C36 5.79086 37.7909 4 40 4C42.2091 4 44 5.79086 44 8Z"></svg:path></svg:g>`,
})
export class IconParkReceiverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRecentViewsSortIcon],svg[icon-park-recent-views-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 5V30H42V5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 37L24 43L18 37"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30V43"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 21C28.0501 21 31.7168 19 35 15C31.7168 11 28.0501 9 24 9C19.9499 9 16.2832 11 13 15C16.2832 19 19.9499 21 24 21Z"></svg:path><svg:path fill="#fff" d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"></svg:path></svg:g>`,
})
export class IconParkRecentViewsSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRecordIcon],svg[icon-park-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="24" x="5" y="18" fill="#2F88FF" stroke="#000" stroke-linecap="round" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M8 12H40"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 6L33 6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26 24V30"></svg:path><svg:path stroke="#fff" d="M18 32.7491C18 31.2308 19.2894 30 20.88 30H26V33.2509C26 34.7692 24.7106 36 23.12 36H20.88C19.2894 36 18 34.7692 18 33.2509V32.7491Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 25L26 24"></svg:path></svg:g>`,
})
export class IconParkRecordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRecordDiscIcon],svg[icon-park-record-disc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 12C17.3726 12 12 17.3726 12 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 36C30.6274 36 36 30.6274 36 24"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"></svg:path></svg:g>`,
})
export class IconParkRecordDiscIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRecordPlayerIcon],svg[icon-park-record-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="32" x="5" y="8" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 8V40"></svg:path><svg:circle cx="28" cy="24" r="9" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="28" cy="24" r="3" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 16H13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 24H13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 32H13"></svg:path></svg:g>`,
})
export class IconParkRecordPlayerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangleIcon],svg[icon-park-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V6C40 4.89543 39.1046 4 38 4Z"></svg:path>`,
})
export class IconParkRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangleOneIcon],svg[icon-park-rectangle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"></svg:path>`,
})
export class IconParkRectangleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangleSmallIcon],svg[icon-park-rectangle-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M36 14H12C10.8954 14 10 14.8954 10 16V32C10 33.1046 10.8954 34 12 34H36C37.1046 34 38 33.1046 38 32V16C38 14.8954 37.1046 14 36 14Z"></svg:path>`,
})
export class IconParkRectangleSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangleTearIcon],svg[icon-park-rectangle-tear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6H8C6.89543 6 6 6.89543 6 8Z"></svg:path><svg:path stroke="#fff" d="M27 6L21 12L27 18L21 24L27 30L21 36L27 42"></svg:path><svg:path stroke="#000" d="M18 6H34"></svg:path><svg:path stroke="#000" d="M18 42H34"></svg:path></svg:g>`,
})
export class IconParkRectangleTearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangleXIcon],svg[icon-park-rectangle-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 4L4 24L24 44L44 24L24 4Z"></svg:path><svg:path stroke-linecap="round" d="M44 4L4 44"></svg:path><svg:path stroke-linecap="round" d="M4 4L44 44"></svg:path></svg:g>`,
})
export class IconParkRectangleXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangularCircularConnectionIcon],svg[icon-park-rectangular-circular-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 19C15.3137 19 18 16.3137 18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19Z"></svg:path><svg:path fill="#2F88FF" d="M17 31H7V41H17V31Z"></svg:path><svg:path stroke-linecap="round" d="M25.68 13H42V36H25"></svg:path></svg:g>`,
})
export class IconParkRectangularCircularConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangularCircularSeparationIcon],svg[icon-park-rectangular-circular-separation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 19C15.3137 19 18 16.3137 18 13C18 9.68629 15.3137 7 12 7C8.68629 7 6 9.68629 6 13C6 16.3137 8.68629 19 12 19Z"></svg:path><svg:path fill="#2F88FF" d="M42 31H32V41H42V31Z"></svg:path><svg:path stroke-linecap="round" d="M4 25H44"></svg:path></svg:g>`,
})
export class IconParkRectangularCircularSeparationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRectangularVertebraIcon],svg[icon-park-rectangular-vertebra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 9L24 4L36 9L44 38L24 44L4 38L12 9Z"></svg:path><svg:path d="M24 44L24 14"></svg:path><svg:path d="M36 9L24 14"></svg:path><svg:path d="M12 9L24 14"></svg:path><svg:path d="M5 38L24 32"></svg:path><svg:path d="M44 38L24 32"></svg:path></svg:g>`,
})
export class IconParkRectangularVertebraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRecycleBinIcon],svg[icon-park-recycle-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 18L24 4.5L32 18"></svg:path><svg:path stroke-linejoin="round" d="M38 28.5L46 42H30"></svg:path><svg:path stroke-linejoin="round" d="M17.6914 41.6782L2.00006 41.8564L10.0001 28"></svg:path><svg:path d="M17 29H30.8217"></svg:path></svg:g>`,
})
export class IconParkRecycleBinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRecyclingIcon],svg[icon-park-recycling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33.5264 19.5L25.793 6.10548C25.01 4.74922 23.0425 4.77839 22.3 6.15727L17 16"></svg:path><svg:path d="M25 40H41.4209C42.9855 40 43.9442 38.2843 43.1242 36.9518L37 27"></svg:path><svg:path d="M12.9999 23L4.77282 36.986C3.98854 38.3192 4.94986 40 6.49669 40H16.9999"></svg:path><svg:path d="M29 36L25 40L29 44"></svg:path><svg:path d="M28 18.2004L33.4641 19.6646L34.9282 14.2004"></svg:path><svg:path d="M7.5 24.4641L12.9641 23L14.4282 28.4641"></svg:path></svg:g>`,
})
export class IconParkRecyclingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRecyclingPoolIcon],svg[icon-park-recycling-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 16L24 20L28 16"></svg:path><svg:path d="M32 29L36 33L40 29"></svg:path><svg:path d="M8 29L12 33L16 29"></svg:path><svg:path d="M24 20V4"></svg:path><svg:path d="M36 32.8669V19.637C36 17.4278 37.7909 15.637 40 15.637H44"></svg:path><svg:path d="M12 32.8669V19.637C12 17.4278 10.2091 15.637 8 15.637H4"></svg:path><svg:path d="M4 36V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V36"></svg:path></svg:g>`,
})
export class IconParkRecyclingPoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRedCrossIcon],svg[icon-park-red-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path fill="#43CCF8" stroke="#fff" d="M27 12H21V21L12 21V27H21V36H27V27L36 27V21H27V12Z"></svg:path></svg:g>`,
})
export class IconParkRedCrossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRedEnvelopeIcon],svg[icon-park-red-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M39 4H9V10L24 14L39 10V4Z"></svg:path><svg:path d="M39 17V44H9V17"></svg:path><svg:path d="M19 19L24 25L29 19"></svg:path><svg:path d="M18 31H30"></svg:path><svg:path d="M18 25H30"></svg:path><svg:path d="M24 25V37"></svg:path></svg:g>`,
})
export class IconParkRedEnvelopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRedEnvelopesIcon],svg[icon-park-red-envelopes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M40 4H8V44H40V4Z"></svg:path><svg:path stroke-linecap="round" d="M40 10C36 15.7625 32.3191 19.3207 28.3191 20.8915M19.7369 20.7775C15.7369 19.2067 12 15.7625 8 10L19.7369 20.7775Z"></svg:path><svg:path fill="#2F88FF" d="M24 27C26.4853 27 28.5 24.9853 28.5 22.5C28.5 20.0147 26.4853 18 24 18C21.5147 18 19.5 20.0147 19.5 22.5C19.5 24.9853 21.5147 27 24 27Z"></svg:path></svg:g>`,
})
export class IconParkRedEnvelopesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRedoIcon],svg[icon-park-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36.7279 36.7279C33.4706 39.9853 28.9706 42 24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6C28.9706 6 33.4706 8.01472 36.7279 11.2721C38.3859 12.9301 42 17 42 17"></svg:path><svg:path d="M42 8V17H33"></svg:path></svg:g>`,
})
export class IconParkRedoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReduceIcon],svg[icon-park-reduce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M16 24L32 24"></svg:path></svg:g>`,
})
export class IconParkReduceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReduceDecimalPlacesIcon],svg[icon-park-reduce-decimal-places-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M27 9C27 6.23858 24.7614 4 22 4C19.2386 4 17 6.23858 17 9V19C17 21.7614 19.2386 24 22 24C24.7614 24 27 21.7614 27 19V9Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25 32L19 38L25 44"></svg:path><svg:path stroke-linecap="round" d="M8 24H9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 38H19"></svg:path></svg:g>`,
})
export class IconParkReduceDecimalPlacesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReduceOneIcon],svg[icon-park-reduce-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 24L32 24"></svg:path></svg:g>`,
})
export class IconParkReduceOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReduceTwoIcon],svg[icon-park-reduce-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:path fill="#fff" d="M17 30H12.4142C11.5233 30 11.0771 31.0771 11.7071 31.7071L16.2929 36.2929C16.9229 36.9229 18 36.4767 18 35.5858V31C18 30.4477 17.5523 30 17 30Z"></svg:path><svg:path fill="#fff" d="M30 31V35.5858C30 36.4767 31.0771 36.9229 31.7071 36.2929L36.2929 31.7071C36.9229 31.0771 36.4767 30 35.5858 30H31C30.4477 30 30 30.4477 30 31Z"></svg:path><svg:path fill="#fff" d="M31 18H35.5858C36.4767 18 36.9229 16.9229 36.2929 16.2929L31.7071 11.7071C31.0771 11.0771 30 11.5233 30 12.4142V17C30 17.5523 30.4477 18 31 18Z"></svg:path><svg:path fill="#fff" d="M18 17V12.4142C18 11.5233 16.9229 11.0771 16.2929 11.7071L11.7071 16.2929C11.0771 16.9229 11.5233 18 12.4142 18H17C17.5523 18 18 17.5523 18 17Z"></svg:path></svg:g>`,
})
export class IconParkReduceTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReduceUserIcon],svg[icon-park-reduce-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="#2F88FF"></svg:circle><svg:path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"></svg:path><svg:path d="M19 39H29"></svg:path></svg:g>`,
})
export class IconParkReduceUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReelIcon],svg[icon-park-reel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 10L14 20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 17L14 29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 26L15 38"></svg:path><svg:rect width="30" height="6" x="9" y="4" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:rect width="30" height="6" x="9" y="38" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 10V38"></svg:path><svg:path d="M34 10V38"></svg:path></svg:g>`,
})
export class IconParkReelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRefractionIcon],svg[icon-park-refraction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M23.9999 9L40.4544 37.5H7.54541L23.9999 9Z"></svg:path><svg:path fill="#2F88FF" d="M23.9999 9L40.4544 37.5H7.54541L23.9999 9Z"></svg:path><svg:path d="M4 22L19.5 17"></svg:path><svg:path d="M28 16L44 13"></svg:path><svg:path d="M30 19.5L44 21"></svg:path><svg:path d="M32.7002 24L44.0002 29"></svg:path></svg:g>`,
})
export class IconParkRefractionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRefreshIcon],svg[icon-park-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 8V24"></svg:path><svg:path d="M6 24L6 40"></svg:path><svg:path d="M42 24C42 14.0589 33.9411 6 24 6C18.9145 6 14.3216 8.10896 11.0481 11.5M6 24C6 33.9411 14.0589 42 24 42C28.8556 42 33.2622 40.0774 36.5 36.9519"></svg:path></svg:g>`,
})
export class IconParkRefreshIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRefreshOneIcon],svg[icon-park-refresh-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="10" height="10" x="17" y="24.071" fill="#2F88FF" stroke-linejoin="round" rx="2" transform="rotate(-45 17 24.071)"></svg:rect><svg:path d="M40.1201 16C37.1747 10.0731 31.0586 6 23.9912 6C16.9237 6 10.9454 10.0731 8 16"></svg:path><svg:path d="M8 8V16"></svg:path><svg:path d="M14.7803 16L8.00013 16"></svg:path><svg:path d="M8 32C10.9454 37.9269 17.0615 42 24.129 42C31.1964 42 37.1747 37.9269 40.1201 32"></svg:path><svg:path d="M40.1201 40V32"></svg:path><svg:path d="M33.3398 32L40.12 32"></svg:path></svg:g>`,
})
export class IconParkRefreshOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRefrigeratorIcon],svg[icon-park-refrigerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="36" x="9" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M9 22H37"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M9 20L9 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M37 20L37 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 29L15 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 11L15 15"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 40V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13 40V44"></svg:path></svg:g>`,
})
export class IconParkRefrigeratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRejectIcon],svg[icon-park-reject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19.0099 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V19.0304"></svg:path><svg:path d="M42 29.0347V41.0001C42 41.5524 41.5523 42.0001 41 42.0001H29.037"></svg:path><svg:path d="M42 29.0347H18"></svg:path><svg:path d="M23 23L17 29L23 35"></svg:path></svg:g>`,
})
export class IconParkRejectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRelationalGraphIcon],svg[icon-park-relational-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 35H44"></svg:path><svg:path d="M24 32C24 27.5817 20.1944 24 15.5 24C10.8056 24 7 27.5817 7 32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41 32C41 20.9543 33.3888 12 24 12C14.6112 12 7 20.9543 7 32"></svg:path><svg:circle cx="41" cy="35" r="3" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="35" r="3" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="7" cy="35" r="3" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class IconParkRelationalGraphIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRelievedFaceIcon],svg[icon-park-relieved-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 19C20 19 19 21 17 21C15 21 14 19 14 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 19C34 19 33 21 31 21C29 21 28 19 28 19"></svg:path></svg:g>`,
})
export class IconParkRelievedFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReloadIcon],svg[icon-park-reload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M22 43C17.2742 41.2327 13.3325 35.1851 11.3597 31.6428C10.5079 30.1134 10.9566 28.2347 12.3236 27.1411C13.8473 25.9222 16.0438 26.0438 17.4236 27.4236L19 29V17.5C19 16.1193 20.1193 15 21.5 15C22.8807 15 24 16.1193 24 17.5V23.5C24 22.1193 25.1193 21 26.5 21C27.8807 21 29 22.1193 29 23.5V25.5C29 24.1193 30.1193 23 31.5 23C32.8807 23 34 24.1193 34 25.5V27.5C34 26.1193 35.1193 25 36.5 25C37.8807 25 39 26.1193 39 27.5V35.368C39 36.4383 38.7354 37.496 38.1185 38.3707C37.0949 39.8219 35.255 42.0336 33 43C29.5 44.5 26.3701 44.6343 22 43Z"></svg:path><svg:path stroke-linejoin="round" d="M36 12L32 16L28 12"></svg:path><svg:path d="M14 13C14 8.02944 18.0294 4 23 4C27.9706 4 32 8.02944 32 13C32 13.5641 31.9481 14.1161 31.8488 14.6514"></svg:path></svg:g>`,
})
export class IconParkReloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRemindIcon],svg[icon-park-remind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M24 4C16.268 4 10 10.268 10 18V38H38V18C38 10.268 31.732 4 24 4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 38V18C10 10.268 16.268 4 24 4C31.732 4 38 10.268 38 18V38M4 38H44"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44C26.7614 44 29 41.7614 29 39V38H19V39C19 41.7614 21.2386 44 24 44Z"></svg:path></svg:g>`,
})
export class IconParkRemindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRemindDisableIcon],svg[icon-park-remind-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M24 4C16.268 4 10 10.268 10 18V38H38V18C38 10.268 31.732 4 24 4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 38V18C10 10.268 16.268 4 24 4C31.732 4 38 10.268 38 18V38M4 38H44"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44C26.7614 44 29 41.7614 29 39V38H19V39C19 41.7614 21.2386 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 17L29 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 17L19 27"></svg:path></svg:g>`,
})
export class IconParkRemindDisableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRemoteControlIcon],svg[icon-park-remote-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="26" height="40" x="11" y="4" rx="2"></svg:rect><svg:circle cx="24" cy="34" r="4"></svg:circle><svg:rect width="12" height="8" x="18" y="10" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 24H25"></svg:path></svg:g>`,
})
export class IconParkRemoteControlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRemoteControlOneIcon],svg[icon-park-remote-control-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M11 5.44578C11 4.6473 11.6473 4 12.4458 4H35.5542C36.3527 4 37 4.6473 37 5.44578V31C37 38.1797 31.1797 44 24 44V44C16.8203 44 11 38.1797 11 31V5.44578Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 16H20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 16H31"></svg:path><svg:circle cx="17" cy="10" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="31" r="7" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkRemoteControlOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRenalIcon],svg[icon-park-renal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16.0004 43.9999C14.5383 39.6511 14.0665 35.9844 14.5849 32.9999C15.1033 30.0153 16.7154 28.0646 19.4211 27.1477C17.4078 33.2545 18.2328 37.7162 21.8962 40.5328C27.3912 44.7577 40.6336 42.8147 41.3511 28.5231C42.0686 14.2314 35.1948 3.9126 25.0302 3.9126C14.8656 3.9126 13.3462 14.9138 20.505 18.6471C14.1711 20.0276 10.1518 22.8611 8.44706 27.1477C6.74229 31.4342 6.60958 37.0516 8.04891 43.9999"></svg:path><svg:path d="M30.5997 15C27.7023 16.7273 26.6522 18.3093 27.4494 19.746C28.2466 21.1828 30.0547 21.1828 32.8737 19.746"></svg:path><svg:path d="M33.2467 26.2404C29.5062 25.4784 27.257 25.7543 26.4991 27.0681C25.3622 29.0389 30.3696 31.8942 32.1848 32.251"></svg:path></svg:g>`,
})
export class IconParkRenalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRenaultIcon],svg[icon-park-renault-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 4H18L8 24H17L22 14H26L31 24H40L30 4Z"></svg:path><svg:path d="M30 44H18L8 24H17L22 34H26L31 24H40L30 44Z"></svg:path></svg:g>`,
})
export class IconParkRenaultIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRepairIcon],svg[icon-park-repair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 14L29 14"></svg:path><svg:path d="M23 28L23 15"></svg:path><svg:path d="M20.1429 42H8C6.89543 42 6 41.1046 6 40V7C6 5.89543 6.89543 5 8 5H40C41.1046 5 42 5.89543 42 7V16.7167"></svg:path><svg:path fill="#2F88FF" d="M27 38L37.5 23.5L42 27L31 42H27V38Z"></svg:path></svg:g>`,
})
export class IconParkRepairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReplayFiveIcon],svg[icon-park-replay-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.6141 12.9301 6 17 6 17"></svg:path><svg:path d="M6 9V17H14"></svg:path><svg:path d="M28 18H21V23.7098C21.9845 23.0633 22.4689 23 24 23C27 23 28 24.9886 28 28C28 31.0114 26 32 24 32C22.5 32 21 31 21 30"></svg:path></svg:g>`,
})
export class IconParkReplayFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReplayMusicIcon],svg[icon-park-replay-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M21 24V18L26 21L31 24L26 27L21 30V24Z"></svg:path><svg:path stroke-linecap="round" d="M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.6141 12.9301 6 17 6 17"></svg:path><svg:path stroke-linecap="round" d="M6 9V17H14"></svg:path></svg:g>`,
})
export class IconParkReplayMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReportIcon],svg[icon-park-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M36 35H12V21C12 14.3726 17.3726 9 24 9C30.6274 9 36 14.3726 36 21V35Z"></svg:path><svg:path stroke-linecap="round" d="M8 42H40"></svg:path><svg:path stroke-linecap="round" d="M4 13L7 14"></svg:path><svg:path stroke-linecap="round" d="M13 3.9999L14 6.9999"></svg:path><svg:path stroke-linecap="round" d="M10.0001 9.99989L7.00009 6.99989"></svg:path></svg:g>`,
})
export class IconParkReportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRepositioningIcon],svg[icon-park-repositioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M33 22C33 29 24 35 24 35C24 35 15 29 15 22C15 19.6131 15.9482 17.3239 17.636 15.636C19.3239 13.9482 21.6131 13 24 13C26.3869 13 28.6761 13.9482 30.364 15.636C32.0518 17.3239 33 19.6131 33 22Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 25C25.6569 25 27 23.6569 27 22C27 20.3431 25.6569 19 24 19C22.3431 19 21 20.3431 21 22C21 23.6569 22.3431 25 24 25Z"></svg:path><svg:path stroke="#000" d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"></svg:path><svg:path stroke="#000" d="M42 8V24"></svg:path><svg:path stroke="#000" d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"></svg:path><svg:path stroke="#000" d="M6 24L6 40"></svg:path></svg:g>`,
})
export class IconParkRepositioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkResistorIcon],svg[icon-park-resistor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M9.85757 31.071C9.07652 30.2899 9.07652 29.0236 9.85757 28.2425L12.8073 25.2928C13.1824 24.9177 13.6911 24.707 14.2215 24.707L16.8073 24.707C17.3378 24.707 17.8465 24.4963 18.2216 24.1212L24.121 18.2217C24.4961 17.8467 24.7068 17.3379 24.7068 16.8075L24.7068 14.2217C24.7068 13.6913 24.9175 13.1826 25.2926 12.8075L28.2423 9.85775C29.0234 9.0767 30.2897 9.0767 31.0708 9.85775L38.1418 16.9288C38.9229 17.7099 38.9229 18.9762 38.1418 19.7572L35.1921 22.707C34.817 23.0821 34.3083 23.2928 33.7779 23.2928L31.1921 23.2928C30.6617 23.2928 30.153 23.5035 29.7779 23.8786L23.8784 29.7781C23.5033 30.1532 23.2926 30.6619 23.2926 31.1923L23.2926 33.7781C23.2926 34.3085 23.0819 34.8172 22.7068 35.1923L19.7571 38.142C18.976 38.9231 17.7097 38.9231 16.9286 38.142L9.85757 31.071Z"></svg:path><svg:path stroke-linecap="round" d="M7.0293 40.9702L13.3933 34.6063"></svg:path><svg:path stroke-linecap="round" d="M34.6074 13.3931L40.9714 7.02911"></svg:path></svg:g>`,
})
export class IconParkResistorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRespectIcon],svg[icon-park-respect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 42H31L28.0444 28.2072C28.0149 28.0694 28 27.929 28 27.7881V15L20.5696 9.03598C19.7093 8.34543 19.5872 7.08156 20.2994 6.23908C20.9073 5.52003 21.9403 5.33418 22.7607 5.79624L32 11L35.9475 25.8031C35.9824 25.934 36.0305 26.0611 36.0911 26.1822L44 42Z"></svg:path><svg:path d="M36 26L28 28"></svg:path><svg:path d="M19.379 25.5209L19.4429 25.5743C20.3862 26.3631 21.8112 26.1218 22.4423 25.0665L24 22.4616V17.7692L20.32 15L13.96 15.8461L9.81453 23.9417C9.76493 24.0385 9.72331 24.1393 9.6901 24.2429L4 42H15.96V29L17 24.0872L17.5 22H19L18.6963 23.6175C18.5627 24.3288 18.8238 25.0567 19.379 25.5209Z"></svg:path><svg:path d="M10 25L16 28"></svg:path></svg:g>`,
})
export class IconParkRespectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRestingIcon],svg[icon-park-resting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M24 26V38"></svg:path><svg:path stroke="#fff" d="M24 6V26"></svg:path><svg:path stroke="#000" d="M24 4V6"></svg:path><svg:path stroke="#000" d="M8 40H34L40 34"></svg:path><svg:path stroke="#000" d="M15 40V44"></svg:path><svg:path stroke="#000" d="M32 40V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 6C14.0589 6 6 14.034 6 23.9444V26C6 23.5224 8.01472 21 10.5 21C12.9853 21 15 23.5224 15 26C15 23.5224 17.0147 21 19.5 21C21.9853 21 24 23.5224 24 26C24 23.5224 26.0147 21 28.5 21C30.9853 21 33 23.5224 33 26C33 23.5224 35.0147 21 37.5 21C39.9853 21 42 23.5224 42 26V23.9444C42 14.034 33.9411 6 24 6Z"></svg:path><svg:path stroke="#fff" d="M15.0003 26C15.0003 26 13.4999 20.5 16.0005 15C18.5011 9.49998 24.0002 5.99999 24.0002 5.99999"></svg:path><svg:path stroke="#fff" d="M33.0002 26C33.0002 26 33.5006 21.5 31.0003 15C28.5 8.5 24.0002 5.99999 24.0002 5.99999"></svg:path><svg:path stroke="#fff" d="M24 25V6"></svg:path><svg:path stroke="#000" d="M28.5 21C30.9853 21 33 23.5224 33 26C33 23.5224 35.0147 21 37.5 21"></svg:path><svg:path stroke="#000" d="M28.5 21C26.0147 21 24 23.5224 24 26C24 23.5224 21.9853 21 19.5 21"></svg:path><svg:path stroke="#000" d="M10.5 21C12.9853 21 15 23.5224 15 26C15 23.5224 17.0147 21 19.5 21"></svg:path><svg:path stroke="#000" d="M15.7334 8C18.2088 6.72196 21.0197 6 23.9998 6C26.9798 6 29.7908 6.72196 32.2661 8"></svg:path></svg:g>`,
})
export class IconParkRestingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRetroBagIcon],svg[icon-park-retro-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M35 14C35 8.47715 30.0751 4 24 4C17.9249 4 13 8.47715 13 14"></svg:path><svg:path fill="#2F88FF" d="M7 16C7 14.8954 7.89543 14 9 14H39C40.1046 14 41 14.8954 41 16V28C41 29.1046 40.1046 30 39 30H30C28.8954 30 28 29.1046 28 28V28C28 26.8954 27.1046 26 26 26H22C20.8954 26 20 26.8954 20 28V28C20 29.1046 19.1046 30 18 30H9C7.89543 30 7 29.1046 7 28V16Z"></svg:path><svg:path d="M10 30V44H38V30"></svg:path><svg:rect width="8" height="6" x="20" y="26"></svg:rect></svg:g>`,
})
export class IconParkRetroBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReturnIcon],svg[icon-park-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12.9998 8L6 14L12.9998 21"></svg:path><svg:path d="M6 14H28.9938C35.8768 14 41.7221 19.6204 41.9904 26.5C42.2739 33.7696 36.2671 40 28.9938 40H11.9984"></svg:path></svg:g>`,
})
export class IconParkReturnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReverseLensIcon],svg[icon-park-reverse-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 25V10H19L21 7H27L29 10H35V25H13Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 35L24 39L20 43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M32 38.1679C39.0636 36.6248 45 33.1006 45 29C45 26.7483 43.5116 24.6705 41 22.999M24 39C12.9543 39 3 34.5228 3 29C3 26.7483 4.48836 24.6705 7 22.999"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-miterlimit="10" d="M24 20C25.6569 20 27 18.6569 27 17C27 15.3431 25.6569 14 24 14C22.3431 14 21 15.3431 21 17C21 18.6569 22.3431 20 24 20Z"></svg:path></svg:g>`,
})
export class IconParkReverseLensIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReverseLensOneIcon],svg[icon-park-reverse-lens-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M15 12L18 6H30L33 12H15Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 19V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 27V35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 27C16 31.4183 19.5817 35 24 35C25.0609 35 26.0736 34.7935 27 34.4185"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 27C32 22.5817 28.4183 19 24 19C22.9391 19 21.9264 19.2065 21 19.5815"></svg:path></svg:g>`,
})
export class IconParkReverseLensOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReverseOperationInIcon],svg[icon-park-reverse-operation-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="18" height="32" x="6" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="18" height="32" x="24" y="11" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M13 17L17 20.7895L13.3333 25"></svg:path><svg:path stroke="#fff" d="M35 23L31 26.7895L34.6667 31"></svg:path></svg:g>`,
})
export class IconParkReverseOperationInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReverseOperationOutIcon],svg[icon-park-reverse-operation-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="18" height="32" x="6" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="18" height="32" x="24" y="11" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M17 17L13 20.7895L16.6667 25"></svg:path><svg:path stroke="#fff" d="M31 23L35 26.7895L31.3333 31"></svg:path></svg:g>`,
})
export class IconParkReverseOperationOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkReverseRotationIcon],svg[icon-park-reverse-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 6.67564C39.978 10.1337 44 16.5972 44 24M34 6.67564V14M34 6.67564H41.3244M41.3244 34C37.8663 39.978 31.4028 44 24 44M41.3244 34H34M41.3244 34V41.3244M14 41.3244C8.02199 37.8663 4 31.4028 4 24M14 41.3244V34M14 41.3244H6.67564M6.67564 14C10.1337 8.02199 16.5972 4 24 4M6.67564 14H14M6.67564 14V6.67564"></svg:path><svg:path d="M41.3244 34C37.8663 39.978 31.4028 44 24 44M41.3244 34H34M41.3244 34V41.3244"></svg:path><svg:path d="M14 41.3244C8.02199 37.8663 4 31.4028 4 24M14 41.3244V34M14 41.3244H6.67564"></svg:path><svg:path d="M6.67578 14C10.1339 8.02199 16.5973 4 24.0001 4M6.67578 14H14.0001M6.67578 14V6.67564"></svg:path><svg:path d="M34 6.67578C39.978 10.1339 44 16.5973 44 24.0001M34 6.67578V14.0001M34 6.67578H41.3244"></svg:path></svg:g>`,
})
export class IconParkReverseRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRiceIcon],svg[icon-park-rice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M24 38C33.3888 38 41 30.9411 41 21H7C7 30.9411 14.6112 38 24 38Z"></svg:path><svg:path d="M30 21C30 15.4772 25.7467 11 20.5 11C15.2533 11 11 15.4772 11 21"></svg:path><svg:path d="M39 21C39 17.6863 36.234 15 32.822 15C31.379 15 30.0515 15.4805 29 16.2857"></svg:path><svg:path stroke-linecap="round" d="M33 15L36 5"></svg:path><svg:path stroke-linecap="round" d="M38.0002 18.0001L42.0002 11.0001"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 37L16 43H32L30 37"></svg:path></svg:g>`,
})
export class IconParkRiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRidingIcon],svg[icon-park-riding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-miterlimit="2" d="M33 14C35.7614 14 38 11.7614 38 9C38 6.23858 35.7614 4 33 4C30.2386 4 28 6.23858 28 9C28 11.7614 30.2386 14 33 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M40.0002 22.9998H32.3702C31.8102 22.9998 31.2702 22.7598 30.8902 22.3498L25.5502 16.5698C24.9002 15.8598 23.8402 15.7098 23.0202 16.2098L15.5702 20.7898C14.9402 21.1798 14.9402 22.0998 15.5702 22.4898L23.0302 27.0598C23.6202 27.4198 23.9902 28.0698 23.9902 28.7698L24.0002 37.9998"></svg:path><svg:circle cx="36.5" cy="36.5" r="7.5" fill="#2F88FF"></svg:circle><svg:circle cx="11.5" cy="36.5" r="7.5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkRidingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRidingOneIcon],svg[icon-park-riding-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12.5804 27.5139L4 28.3194V22.6806L16.2578 17.4444V10C16.2578 10 21.9781 11.4028 22.7953 12.6111C23.6124 13.8194 22.7953 16.6389 22.7953 16.6389C26.8812 18.1157 30.7843 22.6806 30.7843 26.3056C30.7843 29.9306 29 34.5 29 34.5C27.0194 34.5 26.2898 38.7917 27.5156 40"></svg:path><svg:path stroke-linecap="round" d="M22 26C22 28.7614 20.2091 30 18 30C15.7909 30 14 28.7614 14 26"></svg:path><svg:path stroke-linecap="round" d="M17.3805 30C17.8186 30 18.2566 33.2 17.8186 34.8C17.3805 36.4 16.9425 37.2 13 40"></svg:path><svg:path stroke-miterlimit="2" d="M37 16C38.1046 16 39 15.1046 39 14C39 12.8954 38.1046 12 37 12C35.8954 12 35 12.8954 35 14C35 15.1046 35.8954 16 37 16Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M26.9997 30C29.4347 30.0837 33.11 28.2269 34.9997 26.9336C37.272 25.3732 35.1346 22.923 37.7243 22.3785L39.549 21C39.549 21 40.9996 23.0664 41.9996 25C42.9997 26.9336 43.5997 32.9 41.9997 36.5H33.9997L36.9997 39.5"></svg:path></svg:g>`,
})
export class IconParkRidingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
