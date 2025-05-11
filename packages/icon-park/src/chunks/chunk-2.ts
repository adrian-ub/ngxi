import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFlipCameraIcon],svg[icon-park-flip-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 11H17L19 7H29L31 11H36V27H12V11Z"></svg:path><svg:circle cx="24" cy="18" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#000" d="M24 38C12.9543 38 4 33.5228 4 28C4 26.5778 4.59379 25.2249 5.66417 24M24 38L20 34M24 38L20 42"></svg:path><svg:path stroke="#000" d="M32 37.1679C39.0636 35.6248 44 32.1006 44 28C44 26.5778 43.4062 25.2249 42.3358 24"></svg:path></svg:g>`,
})
export class IconParkFlipCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlipHorizontallyIcon],svg[icon-park-flip-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6V42"></svg:path><svg:path fill="#2F88FF" d="M4 34L16 12V34H4Z"></svg:path><svg:path fill="#2F88FF" d="M44 34H32V12L44 34Z"></svg:path></svg:g>`,
})
export class IconParkFlipHorizontallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlipVerticallyIcon],svg[icon-park-flip-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M42 24L6 24"></svg:path><svg:path fill="#2F88FF" d="M14 4L36 16H14V4Z"></svg:path><svg:path fill="#2F88FF" d="M14 44V32H36L14 44Z"></svg:path></svg:g>`,
})
export class IconParkFlipVerticallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlirtIcon],svg[icon-park-flirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26 21.0001C23.9999 20.5001 21.2465 19.3622 17.1704 22.0924C14.1394 24.1226 12.8646 27.2399 12.4346 29.5301C12.2303 30.6188 13.1547 31.4968 14.2547 31.3664C15.0506 31.2721 15.9341 31.1251 16.6025 30.899C18.5728 30.2324 18.3142 28.9686 19.3194 27.4462C20.3245 25.9238 22.8521 25.4066 24.9318 26.561C27.0114 27.7155 27.678 29.6859 27.23 31.3576C26.7821 33.0293 25.7769 34.5518 23.2493 35.069C20.7218 35.5862 19.9059 34.1731 17.269 32.8693C15.8949 32.1899 14.1027 33.0709 13.0201 33.7678C12.4071 34.1624 12.1531 34.9076 12.4103 35.5897C12.585 36.0529 12.8254 36.5948 13.139 37.1379C13.9548 38.551 17.5169 43.089 22.1241 43.7262C26.7314 44.3635 31.5279 42.0652 34.2449 38.6125C36.9618 35.1597 37.0418 30.4032 35.1515 26.3131"></svg:path><svg:path d="M35.046 26.4199L32.0005 14L22.7078 4.70721C22.3173 4.31665 21.6881 4.3232 21.3732 4.77699C20.6205 5.86185 19.6217 7.93093 21.0008 10C21.488 10.7311 25.0015 15 25.0015 15C25.0015 15 27.0977 27.5743 27.4734 29.5672"></svg:path></svg:g>`,
})
export class IconParkFlirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFloatIcon],svg[icon-park-float-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40C35.0457 40 44 32.8366 44 24C44 15.1634 35.0457 8 24 8C12.9543 8 4 15.1634 4 24C4 32.8366 12.9543 40 24 40Z"></svg:path><svg:path fill="#2F88FF" d="M24 28C29.5228 28 34 25.3137 34 22C34 18.6863 29.5228 16 24 16C18.4772 16 14 18.6863 14 22C14 25.3137 18.4772 28 24 28Z"></svg:path><svg:path stroke-linecap="round" d="M24 16V8"></svg:path><svg:path stroke-linecap="round" d="M32 18C32 18 34.625 14 39 14"></svg:path><svg:path stroke-linecap="round" d="M16 18C16 18 14 14 9 14"></svg:path><svg:path stroke-linecap="round" d="M18 27C18 27 12 29 11 36"></svg:path><svg:path stroke-linecap="round" d="M30 27C30 27 36.5 29 37 36"></svg:path></svg:g>`,
})
export class IconParkFloatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFloorTileIcon],svg[icon-park-floor-tile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M28 6L6 28"></svg:path><svg:path stroke-linecap="round" d="M42 20L20 42"></svg:path><svg:path stroke-linecap="round" d="M40 8L8 40"></svg:path><svg:path stroke-linecap="round" d="M12 22L19 29"></svg:path><svg:path stroke-linecap="round" d="M29 19L36 26"></svg:path></svg:g>`,
})
export class IconParkFloorTileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFmIcon],svg[icon-park-fm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="22" r="4" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M21.5238 33.0539C22.7619 31.6487 25.2381 31.6486 26.4762 33.0539C27.7143 34.4592 26.4763 43.3608 25.6508 44.2975C24.8254 45.2342 23.1746 45.2342 22.3492 44.2975C21.5238 43.3608 20.2857 34.4591 21.5238 33.0539Z"></svg:path><svg:path d="M30.9668 30.513C33.4289 28.4957 35 25.4313 35 22C35 15.9249 30.0751 11 24 11C17.9249 11 13 15.9249 13 22C13 25.4313 14.5711 28.4957 17.0332 30.513"></svg:path><svg:path d="M31.9258 38.1656C37.8928 35.2345 42 29.0969 42 22C42 12.0589 33.9411 4 24 4C14.0589 4 6 12.0589 6 22C6 29.0969 10.1072 35.2345 16.0742 38.1656"></svg:path></svg:g>`,
})
export class IconParkFmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFocusIcon],svg[icon-park-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:rect width="20" height="20" x="14" y="14" fill="#2F88FF" stroke="#000" stroke-width="4" rx="10"></svg:rect><svg:circle r="3" fill="#fff" transform="matrix(-1 0 0 1 24 24)"></svg:circle></svg:g>`,
})
export class IconParkFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFocusOneIcon],svg[icon-park-focus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="M24 17L24 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="M24 35L24 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="M35 24H31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4" d="M17 24H13"></svg:path><svg:path fill="#fff" d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z"></svg:path></svg:g>`,
})
export class IconParkFocusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFogIcon],svg[icon-park-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33"></svg:path><svg:path d="M22.2426 15.7574C21.1569 14.6716 19.6569 14 18 14C14.6863 14 12 16.6863 12 20C12 21.6569 12.6716 23.1569 13.7574 24.2426"></svg:path><svg:path d="M20 34H28"></svg:path><svg:path d="M10 42H20"></svg:path><svg:path d="M28 42H38"></svg:path><svg:path d="M26 26H34"></svg:path></svg:g>`,
})
export class IconParkFogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFoldUpOneIcon],svg[icon-park-fold-up-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10L42 10"></svg:path><svg:path d="M6 20L42 20"></svg:path><svg:path d="M6 40L24 26L42 40"></svg:path></svg:g>`,
})
export class IconParkFoldUpOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderIcon],svg[icon-park-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 6C7 4.89543 7.89543 4 9 4H39C40.1046 4 41 4.89543 41 6V42C41 43.1046 40.1046 44 39 44H9C7.89543 44 7 43.1046 7 42V6Z"></svg:path><svg:path stroke="#fff" d="M16 29H20"></svg:path><svg:path stroke="#fff" d="M16 35H26"></svg:path><svg:path stroke="#fff" d="M8 5C8 5 11.7647 18 24 18C36.2353 18 40 5 40 5"></svg:path><svg:circle cx="24" cy="18" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#000" d="M15 4H9C7.89543 4 7 4.89543 7 6V12"></svg:path><svg:path stroke="#000" d="M33 4H39C40.1046 4 41 4.89543 41 6V12"></svg:path></svg:g>`,
})
export class IconParkFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderBlockIcon],svg[icon-park-folder-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:circle cx="25" cy="27" r="7" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 25L23 29"></svg:path></svg:g>`,
})
export class IconParkFolderBlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderBlockOneIcon],svg[icon-park-folder-block-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:circle cx="35" cy="35" r="8" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M37 33L33 37"></svg:path></svg:g>`,
})
export class IconParkFolderBlockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderCloseIcon],svg[icon-park-folder-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" d="M43 22H5"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M5 16V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M43 16V28"></svg:path></svg:g>`,
})
export class IconParkFolderCloseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderCodeIcon],svg[icon-park-folder-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 22L33 27L28 32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 22L15 27L20 32"></svg:path></svg:g>`,
})
export class IconParkFolderCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderCodeOneIcon],svg[icon-park-folder-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path d="M38 29L43 34L38 39"></svg:path><svg:path d="M30 29L25 34L30 39"></svg:path></svg:g>`,
})
export class IconParkFolderCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderConversionIcon],svg[icon-park-folder-conversion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 24L31 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 24L26 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 35L17 30"></svg:path></svg:g>`,
})
export class IconParkFolderConversionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderConversionOneIcon],svg[icon-park-folder-conversion-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path d="M27 31L41 31"></svg:path><svg:path d="M27 37H41"></svg:path><svg:path d="M41 31L36 26"></svg:path><svg:path d="M32 42L27 37"></svg:path></svg:g>`,
})
export class IconParkFolderConversionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderDownloadIcon],svg[icon-park-folder-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 28L23.9933 34L18 28.0134"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 20V34"></svg:path></svg:g>`,
})
export class IconParkFolderDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderFailedIcon],svg[icon-park-folder-failed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 22L29 32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 22L19 32"></svg:path></svg:g>`,
})
export class IconParkFolderFailedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderFailedOneIcon],svg[icon-park-folder-failed-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path d="M30 30L40 40"></svg:path><svg:path d="M40 30L30 40"></svg:path></svg:g>`,
})
export class IconParkFolderFailedOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderFocusIcon],svg[icon-park-folder-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M24 20L26.243 24.9128L31.6085 25.5279L27.6292 29.1792L28.7023 34.4721L24 31.816L19.2977 34.4721L20.3708 29.1792L16.3915 25.5279L21.757 24.9128L24 20Z"></svg:path></svg:g>`,
})
export class IconParkFolderFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderFocusOneIcon],svg[icon-park-folder-focus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path fill="#2F88FF" d="M35 27L37.243 31.9128L42.6085 32.5279L38.6292 36.1792L39.7023 41.4721L35 38.816L30.2977 41.4721L31.3708 36.1792L27.3915 32.5279L32.757 31.9128L35 27Z"></svg:path></svg:g>`,
})
export class IconParkFolderFocusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderLockIcon],svg[icon-park-folder-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:rect width="14" height="8" x="17" y="26" fill="#43CCF8" stroke="#fff" stroke-linecap="round"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M27 26V23C27 21.3431 25.6569 20 24 20C22.3431 20 21 21.3431 21 23V26"></svg:path></svg:g>`,
})
export class IconParkFolderLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderLockOneIcon],svg[icon-park-folder-lock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:rect width="14" height="8" x="29" y="34" fill="#2F88FF"></svg:rect><svg:path d="M39 34V31C39 29.3431 37.6569 28 36 28C34.3431 28 33 29.3431 33 31V34"></svg:path></svg:g>`,
})
export class IconParkFolderLockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderMinusIcon],svg[icon-park-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 9C5 7.89543 5.89543 7 7 7H19L24 13H41C42.1046 13 43 13.8954 43 15V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V9Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17.9497 28L29.9497 28"></svg:path></svg:g>`,
})
export class IconParkFolderMinusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderMusicIcon],svg[icon-park-folder-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 20L26 20.9688V30.5"></svg:path><svg:circle cx="22" cy="30" r="4" fill="#43CCF8" stroke="#fff" stroke-linecap="round"></svg:circle></svg:g>`,
})
export class IconParkFolderMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderMusicOneIcon],svg[icon-park-folder-music-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path d="M40 28L36 28.9688V38.5"></svg:path><svg:circle cx="32" cy="38" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkFolderMusicOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderOneIcon],svg[icon-park-folder-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5 6C5 5.44772 5.44772 5 6 5L16 5C16.5523 5 17 5.44772 17 6L17 42C17 42.5523 16.5523 43 16 43H6C5.44772 43 5 42.5523 5 42L5 6Z"></svg:path><svg:circle cx="11" cy="35" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 10.9999V24.9999"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23.9775 9.75562L34.0372 7.24071C34.5701 7.10747 35.1107 7.42907 35.248 7.96097L42.7482 37.0244C42.887 37.562 42.5611 38.1097 42.0225 38.2444L31.9628 40.7593C31.4299 40.8925 30.8893 40.5709 30.752 40.039L23.2518 10.9756C23.113 10.438 23.4389 9.89029 23.9775 9.75562Z"></svg:path><svg:circle cx="35" cy="32" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 16L33.5 26"></svg:path></svg:g>`,
})
export class IconParkFolderOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderOpenIcon],svg[icon-park-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 9V41L9 21H39.5V15C39.5 13.8954 38.6046 13 37.5 13H24L19 7H6C4.89543 7 4 7.89543 4 9Z"></svg:path><svg:path fill="#2F88FF" d="M40 41L44 21H8.8125L4 41H40Z"></svg:path></svg:g>`,
})
export class IconParkFolderOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderPlusIcon],svg[icon-park-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 27H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 21L24 33"></svg:path></svg:g>`,
})
export class IconParkFolderPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderProtectionIcon],svg[icon-park-folder-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M18 22.8C18 21.8667 24 20 24 20C24 20 30 21.8667 30 22.8C30 30.2667 24 34 24 34C24 34 18 30.2667 18 22.8Z"></svg:path></svg:g>`,
})
export class IconParkFolderProtectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderProtectionOneIcon],svg[icon-park-folder-protection-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path fill="#2F88FF" d="M28 30.8C28 29.8667 34 28 34 28C34 28 40 29.8667 40 30.8C40 38.2667 34 42 34 42C34 42 28 38.2667 28 30.8Z"></svg:path></svg:g>`,
})
export class IconParkFolderProtectionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderQualityIcon],svg[icon-park-folder-quality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M19.8 21H28.2L31 24.5294L24 33L17 24.5294L19.8 21Z"></svg:path></svg:g>`,
})
export class IconParkFolderQualityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderQualityOneIcon],svg[icon-park-folder-quality-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path fill="#2F88FF" d="M29.8 29H38.2L41 32.5294L34 41L27 32.5294L29.8 29Z"></svg:path></svg:g>`,
})
export class IconParkFolderQualityOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderSearchIcon],svg[icon-park-folder-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:circle cx="22" cy="26" r="6" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 30L32 34"></svg:path></svg:g>`,
})
export class IconParkFolderSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderSearchOneIcon],svg[icon-park-folder-search-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:circle cx="32" cy="32" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 36L42 40"></svg:path></svg:g>`,
})
export class IconParkFolderSearchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderSettingsIcon],svg[icon-park-folder-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:circle cx="24" cy="28" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 21V24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 32V35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28.8281 23L26.7068 25.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20.8281 31L18.7068 33.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 23L21.1213 25.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 31L29.1213 33.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M17 28H18.5H20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 28H29.5H31"></svg:path></svg:g>`,
})
export class IconParkFolderSettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderSettingsOneIcon],svg[icon-park-folder-settings-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:circle cx="35" cy="35" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 28V31"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 39V42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39.8281 30L37.7068 32.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31.8281 38L29.7068 40.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 30L32.1213 32.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 38L40.1213 40.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 35H29.5H31"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 35H40.5H42"></svg:path></svg:g>`,
})
export class IconParkFolderSettingsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderSuccessIcon],svg[icon-park-folder-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 29L23 33L32 22"></svg:path></svg:g>`,
})
export class IconParkFolderSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderSuccessOneIcon],svg[icon-park-folder-success-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path d="M29 38L34 42L43 31"></svg:path></svg:g>`,
})
export class IconParkFolderSuccessOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderUploadIcon],svg[icon-park-folder-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 25.9867L24 20L18 26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 20V34"></svg:path></svg:g>`,
})
export class IconParkFolderUploadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderWithdrawalIcon],svg[icon-park-folder-withdrawal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 23L16 28L21 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 28H32V22"></svg:path></svg:g>`,
})
export class IconParkFolderWithdrawalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderWithdrawalOneIcon],svg[icon-park-folder-withdrawal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path d="M32 33L27 38L32 43"></svg:path><svg:path d="M27 38H43V30"></svg:path></svg:g>`,
})
export class IconParkFolderWithdrawalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFollowUpDateSortIcon],svg[icon-park-follow-up-date-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5V30.0036H42V5"></svg:path><svg:path stroke-linejoin="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linejoin="round" d="M24 30V43"></svg:path><svg:path stroke-linejoin="round" d="M27.9887 10.9785L33 16L27.9887 21.0902"></svg:path><svg:path d="M15.0009 16.001H33"></svg:path></svg:g>`,
})
export class IconParkFollowUpDateSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFontSearchIcon],svg[icon-park-font-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:circle cx="22.834" cy="22.834" r="17" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:circle><svg:path stroke="#000" d="M35 35L41 41"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M23 17V31"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M18 17H23H28"></svg:path></svg:g>`,
})
export class IconParkFontSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFontSizeIcon],svg[icon-park-font-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 10.9333L8 6H40V10.9333"></svg:path><svg:path d="M24 6V42"></svg:path><svg:path d="M16 42H32"></svg:path></svg:g>`,
})
export class IconParkFontSizeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFontSizeTwoIcon],svg[icon-park-font-size-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 44L24 4L44 44"></svg:path><svg:path d="M12 28H36"></svg:path></svg:g>`,
})
export class IconParkFontSizeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFootIcon],svg[icon-park-foot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 8C20.7657 15.8788 21.7826 32.8365 13.3074 36.6184C12.8258 36.9335 11.1564 37.4693 7.68928 37.0911C5.68266 36.8722 3.40467 39.3542 6.56568 42.7639C7.34236 43.6016 9.06974 44.4657 13.3074 43.7093H21.0122C22.9384 43.7093 26.1166 41.3457 29.1985 35.6729C30.3221 34.0971 33.5324 30.8511 37.3848 30.4729C39.7926 30.3153 44.2228 28.3929 42.6819 21.9637C39.9259 15.5052 33.541 9.29458 32 4"></svg:path>`,
})
export class IconParkFootIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFootballIcon],svg[icon-park-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M30.0926 6.5L24.0693 10.859V15.2179L31.8135 21.3205L36.1158 19.5769L38.6972 12.6026"></svg:path><svg:path d="M18.0461 6.5L24.0693 10.859V15.2179L16.3251 21.3205L12.0228 19.5769L9.44141 12.6026"></svg:path><svg:path d="M6 22.1923L12.0233 19.5769L16.3256 21.3205L18.907 30.9102L16.3256 34.3974H8.5814"></svg:path><svg:path d="M16.3252 40.4999V34.3973L18.9066 30.9102H29.2322L31.8136 34.3973V40.4999"></svg:path><svg:path d="M39.558 34.3974H31.8138L29.2324 30.9102L31.8138 21.3205L36.1161 19.5769L42.9999 23.0641"></svg:path></svg:g>`,
})
export class IconParkFootballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkForbidIcon],svg[icon-park-forbid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M15 15L33 33"></svg:path></svg:g>`,
})
export class IconParkForbidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkForkIcon],svg[icon-park-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37 12C39.2091 12 41 10.2091 41 8C41 5.79086 39.2091 4 37 4C34.7909 4 33 5.79086 33 8C33 10.2091 34.7909 12 37 12Z"></svg:path><svg:path fill="#2F88FF" d="M11 12C13.2091 12 15 10.2091 15 8C15 5.79086 13.2091 4 11 4C8.79086 4 7 5.79086 7 8C7 10.2091 8.79086 12 11 12Z"></svg:path><svg:path fill="#2F88FF" d="M24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44Z"></svg:path><svg:path stroke-linecap="round" d="M11 12V15C11 22 24 25 24 32V36V32C24 25 37 22 37 15V12"></svg:path></svg:g>`,
})
export class IconParkForkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkForkSpoonIcon],svg[icon-park-fork-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 4V44"></svg:path><svg:path d="M8 5V15C8 20 14 20 14 20C14 20 20 20 20 15V5"></svg:path><svg:path d="M34 20V44"></svg:path><svg:path fill="#2F88FF" d="M40 12C40 16.4183 37.3137 20 34 20C30.6863 20 28 16.4183 28 12C28 7.58172 30.6863 4 34 4C37.3137 4 40 7.58172 40 12Z"></svg:path></svg:g>`,
})
export class IconParkForkSpoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFormIcon],svg[icon-park-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="32" x="4" y="8" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 29H44H4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 29H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 19H44H4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 19H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M17 40V19V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 40V19"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M4 38V17V38Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 38V17"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M44 38V17V38Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 38V17"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M31 40V19V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 40V19"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 40H39"></svg:path></svg:g>`,
})
export class IconParkFormIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFormOneIcon],svg[icon-park-form-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path d="M6 14H40"></svg:path><svg:path d="M30 22H42"></svg:path><svg:path d="M30 30H42"></svg:path><svg:path d="M23 22H24"></svg:path><svg:path d="M23 30H24"></svg:path><svg:path d="M14 6L14 42"></svg:path></svg:g>`,
})
export class IconParkFormOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFormatIcon],svg[icon-park-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="32" height="18" x="8" y="24" stroke-linejoin="round"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 13H18V6H30V13H44V24H4V13Z"></svg:path><svg:path d="M16 32L16 42"></svg:path></svg:g>`,
})
export class IconParkFormatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFormatBrushIcon],svg[icon-park-format-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M34 5H6V20H34V5Z"></svg:path><svg:path stroke-linecap="round" d="M34.0251 12H43V28.1014L19 31.2004V43"></svg:path></svg:g>`,
})
export class IconParkFormatBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFormulaIcon],svg[icon-park-formula-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 9L37 6H8L26 24L8 42H37L40 39"></svg:path>`,
})
export class IconParkFormulaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFoundationMakeupIcon],svg[icon-park-foundation-makeup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M13 19C13 17.8954 13.8954 17 15 17H31C32.1046 17 33 17.8954 33 19V38C33 38 33 44 27 44C21 44 25 44 19 44C13 44 13 38 13 38V19Z"></svg:path><svg:rect width="10" height="5" x="18" y="12"></svg:rect><svg:path d="M18 12C18 10 18.0001 12 18 9C17.9999 6 21 4 24 4C27 4 35 4 35 4C35 4 28.0001 6 28 10C27.9999 14 28 12 28 12"></svg:path></svg:g>`,
})
export class IconParkFoundationMakeupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFourIcon],svg[icon-park-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 40L8 25.5L6.04155 15.7078C6.01392 15.5696 6 15.429 6 15.2881V15.1272C6 13.757 7.78238 13.226 8.53225 14.3729C8.5876 14.4575 8.63666 14.5461 8.67904 14.6379L12.6107 23.1566C12.8302 23.6321 13.3794 23.8577 13.8698 23.6738L14 23.625L12.1291 9.94424C12.0464 9.33927 12.2055 8.72606 12.5718 8.23757C13.0844 7.55408 14.0541 7.41556 14.7376 7.92818L14.8707 8.02802C15.2808 8.33563 15.5896 8.75888 15.7573 9.24336L19.869 21.1217C19.9474 21.3481 20.1607 21.5 20.4003 21.5C20.7251 21.5 20.9823 21.2257 20.9614 20.9016L20.0785 7.21729C20.0286 6.44352 20.3143 5.68573 20.8625 5.13746C21.5101 4.4899 22.541 4.43281 23.2561 5.00489L23.5966 5.27727C24.178 5.74239 24.5657 6.40711 24.6842 7.14218L26.9229 21.0222C26.9673 21.2976 27.2051 21.5 27.484 21.5C27.7767 21.5 28.0215 21.2777 28.0497 20.9864L29.3779 7.26175C29.456 6.45511 29.857 5.71437 30.4899 5.20811L30.6963 5.04293C31.4385 4.44919 32.5084 4.50844 33.1805 5.18051C33.7052 5.70522 34 6.41688 34 7.15893V19.9113C34 19.9703 34.005 20.0284 34.0175 20.086C34.1291 20.6002 34.8074 23.2691 37 24C37.9074 24.3025 39.3638 26.8008 40.3729 28.7274C41.113 30.1406 41.042 31.8243 40.2673 33.2189L36.5 40C36.5 40 33 44 25 44C17 44 13.6667 41.3333 13 40Z"></svg:path>`,
})
export class IconParkFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFourArrowsIcon],svg[icon-park-four-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 24L19 19M24 8V24V8ZM24 24L29 19L24 24Z"></svg:path><svg:path d="M24 24L19 29M24 40V24V40ZM24 24L29 29L24 24Z"></svg:path><svg:path fill="#2F88FF" d="M20 12C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4C17.7909 4 16 5.79086 16 8C16 10.2091 17.7909 12 20 12Z"></svg:path><svg:path fill="#2F88FF" d="M8 32C10.2091 32 12 30.2091 12 28C12 25.7909 10.2091 24 8 24C5.79086 24 4 25.7909 4 28C4 30.2091 5.79086 32 8 32Z"></svg:path><svg:path d="M8 24H40"></svg:path><svg:path fill="#2F88FF" d="M40 24C42.2091 24 44 22.2091 44 20C44 17.7909 42.2091 16 40 16C37.7909 16 36 17.7909 36 20C36 22.2091 37.7909 24 40 24Z"></svg:path><svg:path fill="#2F88FF" d="M28 44C30.2091 44 32 42.2091 32 40C32 37.7909 30.2091 36 28 36C25.7909 36 24 37.7909 24 40C24 42.2091 25.7909 44 28 44Z"></svg:path></svg:g>`,
})
export class IconParkFourArrowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFourFourIcon],svg[icon-park-four-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25.7446 44H24.8495C19.6392 44 14.7797 41.3742 11.9243 37.016L9.72884 33.6651C8.17072 31.2869 8.63077 28.1201 10.8012 26.2836L13.0887 24.3481C13.3496 24.1273 13.5 23.8029 13.5 23.4611V7.25C13.5 5.45507 14.9551 4 16.75 4C18.5449 4 20 5.45508 20 7.25V6.25C20 4.45507 21.4551 3 23.25 3C25.0449 3 26.5 4.45508 26.5 6.25V7.25C26.5 5.45507 27.9551 4 29.75 4C31.5449 4 33 5.45508 33 7.25V11.25C33 9.45507 34.4551 8 36.25 8C38.0449 8 39.5 9.45507 39.5 11.25V30.3077C39.5 33.0387 38.6618 35.7251 37.1196 37.979C34.5557 41.7263 30.2851 44 25.7446 44Z"></svg:path>`,
})
export class IconParkFourFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFourKeyIcon],svg[icon-park-four-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M26.9767 34V14L18 26.9967V29.0199H30"></svg:path></svg:g>`,
})
export class IconParkFourKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFourLeavesIcon],svg[icon-park-four-leaves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 4.00006C44 4.00006 33.5899 2.20108 30 8.00006C27.3278 12.3167 31 17.0001 31 17.0001M44 4.00006L31 17.0001M44 4.00006C44 4.00006 45.799 14.4102 40 18.0001C35.6834 20.6723 31 17.0001 31 17.0001M31 17.0001L28 20.0001"></svg:path><svg:path d="M31 31L28 28M44 44C44 44 33.5899 45.799 30 40C27.3278 35.6834 31 31 31 31L44 44ZM44 44C44 44 45.799 33.5899 40 30C35.6834 27.3278 31 31 31 31L44 44ZM44 44L31 31L44 44Z"></svg:path><svg:path d="M17.2638 17.0001L20.2638 20.0001M4.26374 4.00006C4.26374 4.00006 14.6739 2.20108 18.2638 8.00006C20.936 12.3167 17.2638 17.0001 17.2638 17.0001L4.26374 4.00006ZM4.26374 4.00006C4.26374 4.00006 2.46475 14.4102 8.26374 18.0001C12.5804 20.6723 17.2638 17.0001 17.2638 17.0001L4.26374 4.00006ZM4.26374 4.00006L17.2638 17.0001L4.26374 4.00006Z"></svg:path><svg:path d="M17.2638 31L20.2638 28M4.26374 44C4.26374 44 14.6739 45.799 18.2638 40C20.936 35.6834 17.2638 31 17.2638 31L4.26374 44ZM4.26374 44C4.26374 44 2.46475 33.5899 8.26374 30C12.5804 27.3278 17.2638 31 17.2638 31L4.26374 44ZM4.26374 44L17.2638 31L4.26374 44Z"></svg:path></svg:g>`,
})
export class IconParkFourLeavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFourPointConnectionIcon],svg[icon-park-four-point-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 28V40H20"></svg:path><svg:path d="M28 40H40V28"></svg:path><svg:path d="M40 20V8H28"></svg:path><svg:path d="M20 8H8V20"></svg:path><svg:path fill="#2F88FF" d="M44 20H36V28H44V20Z"></svg:path><svg:path fill="#2F88FF" d="M12 20H4V28H12V20Z"></svg:path><svg:path fill="#2F88FF" d="M28 36H20V44H28V36Z"></svg:path><svg:path fill="#2F88FF" d="M28 4H20V12H28V4Z"></svg:path><svg:path d="M24 18V30"></svg:path><svg:path d="M18 24H30"></svg:path><svg:path d="M28 8L40 20"></svg:path><svg:path d="M20 8L8 20"></svg:path><svg:path d="M20 40L8 28"></svg:path><svg:path d="M40 28L29 40"></svg:path></svg:g>`,
})
export class IconParkFourPointConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFourRoundPointConnectionIcon],svg[icon-park-four-round-point-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z"></svg:path><svg:path d="M6.28339 14.7109C5.42081 16.3526 4.77973 18.1289 4.3999 20.0001"></svg:path><svg:path d="M14.7109 6.28339C16.3527 5.4208 18.129 4.77973 20.0002 4.3999"></svg:path><svg:path fill="#2F88FF" d="M38 16C41.3137 16 44 13.3137 44 10C44 6.68629 41.3137 4 38 4C34.6863 4 32 6.68629 32 10C32 13.3137 34.6863 16 38 16Z"></svg:path><svg:path d="M33.2893 6.28339C31.6475 5.4208 29.8712 4.77973 28 4.3999"></svg:path><svg:path d="M41.7163 14.7109C42.5789 16.3526 43.22 18.1289 43.5998 20.0001"></svg:path><svg:path fill="#2F88FF" d="M38 44C41.3137 44 44 41.3137 44 38C44 34.6863 41.3137 32 38 32C34.6863 32 32 34.6863 32 38C32 41.3137 34.6863 44 38 44Z"></svg:path><svg:path d="M41.7163 33.2893C42.5789 31.6475 43.22 29.8712 43.5998 28"></svg:path><svg:path d="M33.2893 41.7163C31.6475 42.5789 29.8712 43.22 28 43.5998"></svg:path><svg:path fill="#2F88FF" d="M10 44C13.3137 44 16 41.3137 16 38C16 34.6863 13.3137 32 10 32C6.68629 32 4 34.6863 4 38C4 41.3137 6.68629 44 10 44Z"></svg:path><svg:path d="M14.7109 41.7163C16.3527 42.5789 18.129 43.22 20.0002 43.5998"></svg:path><svg:path d="M6.28339 33.2893C5.42081 31.6475 4.77973 29.8712 4.3999 28"></svg:path><svg:path d="M24 30V18M18 24H30H18Z"></svg:path></svg:g>`,
})
export class IconParkFourRoundPointConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFoursquareIcon],svg[icon-park-foursquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 4H14V44L24 26H32L38 4Z"></svg:path><svg:path stroke="#fff" d="M35 15H25"></svg:path><svg:path stroke="#000" d="M36.636 9L33.3633 21"></svg:path></svg:g>`,
})
export class IconParkFoursquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFreezeColumnIcon],svg[icon-park-freeze-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6Z"></svg:path><svg:path stroke-linecap="round" d="M16.1231 6L6 15"></svg:path><svg:path stroke-linecap="round" d="M19 12L6 24"></svg:path><svg:path stroke-linecap="round" d="M19 21L6 33"></svg:path><svg:path stroke-linecap="round" d="M19 30L6 42"></svg:path><svg:path stroke-linecap="round" d="M19 6V42"></svg:path></svg:g>`,
})
export class IconParkFreezeColumnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFreezeLineIcon],svg[icon-park-freeze-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6Z"></svg:path><svg:path stroke-linecap="round" d="M6 19.0586H42"></svg:path><svg:path stroke-linecap="round" d="M16.1231 6L6 15"></svg:path><svg:path stroke-linecap="round" d="M42 10.0068L32 19"></svg:path><svg:path stroke-linecap="round" d="M26.123 6L11.9233 18.6242"></svg:path><svg:path stroke-linecap="round" d="M36.123 6L21.9233 18.6242"></svg:path></svg:g>`,
})
export class IconParkFreezeLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFreezingLineColumnIcon],svg[icon-park-freezing-line-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6Z"></svg:path><svg:path stroke-linecap="round" d="M16.1231 6L6 15"></svg:path><svg:path stroke-linecap="round" d="M26.0027 6L6 24"></svg:path><svg:path stroke-linecap="round" d="M35 6L6 33"></svg:path><svg:path stroke-linecap="round" d="M19 30L6 42"></svg:path><svg:path stroke-linecap="round" d="M41 10L29.2432 20.8525"></svg:path><svg:path stroke-linecap="round" d="M19 21V42"></svg:path><svg:path stroke-linecap="round" d="M19 21H42"></svg:path></svg:g>`,
})
export class IconParkFreezingLineColumnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFrenchFriesIcon],svg[icon-park-french-fries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 22V12C21 10.8954 20.1046 10 19 10H16C14.8954 10 14 10.8954 14 12V21"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 21V14C35 12.8954 34.1046 12 33 12H30C28.8954 12 28 12.8954 28 14V22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 22V6C28 4.89543 27.1046 4 26 4H23C21.8954 4 21 4.89543 21 6V22"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7 18C7 18 14 23 24 23C34 23 41 18 41 18L36.1819 44H11.8182L7 18Z"></svg:path><svg:ellipse cx="24" cy="33" fill="#43CCF8" stroke="#fff" rx="6" ry="3"></svg:ellipse></svg:g>`,
})
export class IconParkFrenchFriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFriendsCircleIcon],svg[icon-park-friends-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M31 7V24V7Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 7V24"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M16.6357 6.63599L30.7779 20.7781L16.6357 6.63599Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16.6357 6.63599L30.7779 20.7781"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M7 17H24H7Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 17H24"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20.3643 17.636L6.22212 31.7781L20.3643 17.636Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.3643 17.636L6.22212 31.7781"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M17 25V42V25Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 25V42"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M17.6357 27.636L31.7779 41.7781L17.6357 27.636Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17.6357 27.636L31.7779 41.7781"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 31L42 31L24 31Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31L42 31"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M42.3643 16.636L28.2221 30.7781L42.3643 16.636Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.3643 16.636L28.2221 30.7781"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"></svg:path></svg:g>`,
})
export class IconParkFriendsCircleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFrigateIcon],svg[icon-park-frigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M11 12V24L24 19L37 24V12H11Z"></svg:path><svg:path d="M19 7V12H29V7C29 5.34315 27.6569 4 26 4H22C20.3431 4 19 5.34315 19 7Z"></svg:path><svg:path d="M12 44L6 26L24 19L42 26L36 44"></svg:path><svg:path d="M4 42C4 42 8.66336 44 12 44C17 44 19 42 24 42C29 42 31 44 36 44C39.3366 44 44 42 44 42"></svg:path><svg:path d="M24 19V42"></svg:path></svg:g>`,
})
export class IconParkFrigateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFrogIcon],svg[icon-park-frog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M19.1015 10.8942C19.5261 11.6689 19.7431 12.5226 19.772 13.4061C20.9787 13.2453 22.2252 13.1611 23.5003 13.1611C25.1295 13.1611 26.7122 13.2986 28.2249 13.5577C28.2328 12.6203 28.4497 11.7131 28.8985 10.8942C30.6575 7.68502 35.3132 7.04762 39.2973 9.47057C43.2814 11.8935 45.0852 16.4593 43.3262 19.6685C42.8986 20.4486 42.2999 21.0768 41.5812 21.5459C42.4961 23.1006 43 24.8001 43 26.5806C43 33.9919 34.2697 40 23.5003 40C12.7308 40 4.00052 33.9919 4.00052 26.5806C4.00052 24.5994 4.62433 22.7186 5.74416 21.026C5.32121 20.6426 4.95932 20.1894 4.67378 19.6685C2.91478 16.4593 4.71859 11.8935 8.7027 9.47057C12.6868 7.04762 17.3425 7.68502 19.1015 10.8942Z"></svg:path><svg:circle cx="12" cy="17" r="2" fill="#fff"></svg:circle><svg:circle cx="20.156" cy="28.576" r="2" fill="#fff"></svg:circle><svg:circle cx="28.156" cy="28.576" r="2" fill="#fff"></svg:circle><svg:circle cx="36" cy="17" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkFrogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFrowningFaceWhitOpenMouthIcon],svg[icon-park-frowning-face-whit-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 29C29 29 31 33 31 33H17C17 33 19 29 24 29Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 20V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 20V21"></svg:path></svg:g>`,
})
export class IconParkFrowningFaceWhitOpenMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFruiterIcon],svg[icon-park-fruiter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 32.0003C15 32 6 32.1309 6 22.941C6 21.192 6.59395 17.6967 9.8653 15.6125C10.5277 15.1905 10.9894 14.4933 11.1004 13.7159C11.5991 10.2257 14.1089 4 22 4C24.2925 4 27.9884 4.29995 30.3835 7.93C30.8001 8.56136 31.4798 8.98871 32.2221 9.13376C35.7901 9.83088 42.0582 13.2757 42 20C42.0591 22.1704 41.5574 25.3457 37.494 27.3697C36.6482 27.791 36.1153 28.6832 35.9478 29.6132C35.497 32.117 33.2767 35.3748 27 36"></svg:path><svg:path fill="#2F88FF" d="M16 44C23.0933 31.0694 18.9556 25.3469 16 24L30 22C23.28 31.3388 26.5778 40.5578 29.0667 44H16Z"></svg:path></svg:g>`,
})
export class IconParkFruiterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFullDressLonguetteIcon],svg[icon-park-full-dress-longuette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M18 18L14 10H34L30 18V24L40.5 44H7L18 24V18Z"></svg:path><svg:path stroke="#000" d="M20 4V10"></svg:path><svg:path stroke="#000" d="M28 4V10"></svg:path><svg:path stroke="#fff" d="M18 21L30 21"></svg:path><svg:path stroke="#000" d="M18 19V23"></svg:path><svg:path stroke="#000" d="M30 19V23"></svg:path></svg:g>`,
})
export class IconParkFullDressLonguetteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFullScreenIcon],svg[icon-park-full-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 6H42V15"></svg:path><svg:path d="M42 33V42H33"></svg:path><svg:path d="M15 42H6V33"></svg:path><svg:path d="M6 15V6H15"></svg:path></svg:g>`,
})
export class IconParkFullScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFullScreenOneIcon],svg[icon-park-full-screen-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6L16 15.8995"></svg:path><svg:path d="M6 41.8995L16 32"></svg:path><svg:path d="M42.0001 41.8995L32.1006 32"></svg:path><svg:path d="M41.8995 6L32 15.8995"></svg:path><svg:path d="M33 6H42V15"></svg:path><svg:path d="M42 33V42H33"></svg:path><svg:path d="M15 42H6V33"></svg:path><svg:path d="M6 15V6H15"></svg:path></svg:g>`,
})
export class IconParkFullScreenOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFullScreenPlayIcon],svg[icon-park-full-screen-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M16 40H6C4.89543 40 4 39.1046 4 38V10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16"></svg:path><svg:path fill="#2F88FF" d="M42 24H26C24.8954 24 24 24.8954 24 26V38C24 39.1046 24.8954 40 26 40H42C43.1046 40 44 39.1046 44 38V26C44 24.8954 43.1046 24 42 24Z"></svg:path></svg:g>`,
})
export class IconParkFullScreenPlayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFullScreenTwoIcon],svg[icon-park-full-screen-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 6H42V18"></svg:path><svg:path d="M18 6H6V18"></svg:path><svg:path d="M30 42H42V30"></svg:path><svg:path d="M18 42H6V30"></svg:path><svg:path d="M42 6L29 19"></svg:path><svg:path d="M19 29L6 42"></svg:path></svg:g>`,
})
export class IconParkFullScreenTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFullSelectionIcon],svg[icon-park-full-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M34 5H8C6.34315 5 5 6.34315 5 8V34C5 35.6569 6.34315 37 8 37H34C35.6569 37 37 35.6569 37 34V8C37 6.34315 35.6569 5 34 5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M43.9998 13.002V42.0001C43.9998 43.1046 43.1044 44.0001 41.9998 44.0001H13.0034"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 20.4858L18.9997 26.0109L29 15.7192"></svg:path></svg:g>`,
})
export class IconParkFullSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFullwidthIcon],svg[icon-park-fullwidth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 6V42M17 19L12 24M12 24L17 29M12 24H36M31 19L36 24M36 24L31 29M6 6L6 42"></svg:path>`,
})
export class IconParkFullwidthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFundsIcon],svg[icon-park-funds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="14" cy="10" rx="10" ry="5"></svg:ellipse><svg:path d="M4 10C4 10 4 14.2386 4 17C4 19.7614 8.47715 22 14 22C19.5228 22 24 19.7614 24 17C24 15.3644 24 10 24 10"></svg:path><svg:path d="M4 17C4 17 4 21.2386 4 24C4 26.7614 8.47715 29 14 29C19.5228 29 24 26.7614 24 24C24 22.3644 24 17 24 17"></svg:path><svg:path d="M4 24C4 24 4 28.2386 4 31C4 33.7614 8.47715 36 14 36C19.5228 36 24 33.7614 24 31C24 29.3644 24 24 24 24"></svg:path><svg:path d="M4 31C4 31 4 35.2386 4 38C4 40.7614 8.47715 43 14 43C19.5228 43 24 40.7614 24 38C24 36.3644 24 31 24 31"></svg:path><svg:ellipse cx="34" cy="24" rx="10" ry="5"></svg:ellipse><svg:path d="M24 24C24 24 24 28.2386 24 31C24 33.7614 28.4772 36 34 36C39.5228 36 44 33.7614 44 31C44 29.3644 44 24 44 24"></svg:path><svg:path d="M24 31C24 31 24 35.2386 24 38C24 40.7614 28.4772 43 34 43C39.5228 43 44 40.7614 44 38C44 36.3644 44 31 44 31"></svg:path></svg:g>`,
})
export class IconParkFundsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFutureBuildOneIcon],svg[icon-park-future-build-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13.9994 24C15.2168 15.7039 23.9994 5 23.9994 5C23.9994 5 32.7819 15.7039 33.9994 24C35.09 31.4323 30.9994 44 30.9994 44H16.9994C16.9994 44 12.9087 31.4323 13.9994 24Z"></svg:path><svg:path d="M18 14H30"></svg:path><svg:path d="M15 20H33"></svg:path><svg:path d="M14 26L34 26"></svg:path><svg:path d="M15 32H33"></svg:path><svg:path d="M16 38H32"></svg:path><svg:path stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path d="M24 4V6"></svg:path></svg:g>`,
})
export class IconParkFutureBuildOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFutureBuildThreeIcon],svg[icon-park-future-build-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 8L24 4L28 8V44H20V8Z"></svg:path><svg:path stroke-linecap="round" d="M12 20L20 12V44H12V20Z"></svg:path><svg:path stroke-linecap="round" d="M4 35L12 28V44H4V35Z"></svg:path><svg:path stroke-linecap="round" d="M28 12L36 20V44H28V12Z"></svg:path><svg:path stroke-linecap="round" d="M36 28L44 34.5V44H36V28Z"></svg:path></svg:g>`,
})
export class IconParkFutureBuildThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFutureBuildTwoIcon],svg[icon-park-future-build-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:ellipse cx="24.5" cy="7" rx="13.5" ry="3"></svg:ellipse><svg:path d="M16 9C16 9 20.1593 17.8828 21 24C22.0687 31.7763 20 44 20 44"></svg:path><svg:path d="M32.2266 9C32.2266 9 28.0673 17.8828 27.2266 24C26.1578 31.7763 28.0006 44 28.0006 44"></svg:path></svg:g>`,
})
export class IconParkFutureBuildTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGameIcon],svg[icon-park-game-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38.5121 9.5362C34.8466 6.10249 29.9188 4 24.5 4C13.1782 4 4 13.1782 4 24.5C4 35.8218 13.1782 45 24.5 45C30.1148 45 35.2024 42.7427 38.9048 39.0861L24 24L38.5121 9.5362Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 13V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 17H21"></svg:path></svg:g>`,
})
export class IconParkGameIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGameConsoleIcon],svg[icon-park-game-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="28" height="40" x="10" y="4" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 34H24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 30V38"></svg:path><svg:rect width="16" height="9" x="16" y="10" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:circle cx="31" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="38" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkGameConsoleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGameConsoleOneIcon],svg[icon-park-game-console-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="28" height="40" x="10" y="4" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:rect width="16" height="10" x="16" y="12" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32L24 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 36V28"></svg:path><svg:rect width="4" height="4" x="27" y="33" fill="#000" rx="2"></svg:rect><svg:rect width="4" height="4" x="30" y="26" fill="#000" rx="2"></svg:rect></svg:g>`,
})
export class IconParkGameConsoleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGameEmojiIcon],svg[icon-park-game-emoji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 30H10C6.68629 30 4 32.6863 4 36C4 39.3137 6.68629 42 10 42H38C41.3137 42 44 39.3137 44 36C44 32.6863 41.3137 30 38 30Z"></svg:path><svg:path d="M36 22C40.4183 22 44 18.4183 44 14C44 9.58172 40.4183 6 36 6C31.5817 6 28 9.58172 28 14C28 18.4183 31.5817 22 36 22Z"></svg:path><svg:path d="M4 14L13 5L22 14L13 23L4 14Z"></svg:path></svg:g>`,
})
export class IconParkGameEmojiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGameHandleIcon],svg[icon-park-game-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M32 18H16C9.37258 18 4 23.3726 4 30C4 36.6274 9.37258 42 16 42H32C38.6274 42 44 36.6274 44 30C44 23.3726 38.6274 18 32 18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 26V34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 30H20"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 16V9.71429H32V4"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M32 34C34.2091 34 36 32.2091 36 30C36 27.7909 34.2091 26 32 26C29.7909 26 28 27.7909 28 30C28 32.2091 29.7909 34 32 34Z"></svg:path></svg:g>`,
})
export class IconParkGameHandleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGamePsIcon],svg[icon-park-game-ps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 28H28V44H44V28Z"></svg:path><svg:path fill="#2F88FF" d="M13 4L22 20H4L13 4Z"></svg:path><svg:path fill="#2F88FF" d="M36 20C40.4183 20 44 16.4183 44 12C44 7.58172 40.4183 4 36 4C31.5817 4 28 7.58172 28 12C28 16.4183 31.5817 20 36 20Z"></svg:path><svg:path stroke-linecap="round" d="M4 28L20 44"></svg:path><svg:path stroke-linecap="round" d="M20 28L4 44"></svg:path></svg:g>`,
})
export class IconParkGamePsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGameThreeIcon],svg[icon-park-game-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 30L19 33C19 36.866 15.866 40 12 40V40C8.13401 40 5 36.866 5 33L5 19"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 30L29 33C29 36.866 32.134 40 36 40V40C39.866 40 43 36.866 43 33L43 19"></svg:path><svg:rect width="38" height="22" x="5" y="8" fill="#2F88FF" stroke="#000" stroke-width="4" rx="11"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 19H13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 15V23"></svg:path><svg:rect width="4" height="4" x="32" y="15" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="28" y="20" fill="#fff" rx="2"></svg:rect></svg:g>`,
})
export class IconParkGameThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGameTwoIcon],svg[icon-park-game-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 15L24 19L28 15V4H20V15Z"></svg:path><svg:path d="M20 33L24 29L28 33V44H20V33Z"></svg:path><svg:path d="M33 28L29 24L33 20L44 20L44 28L33 28Z"></svg:path><svg:path d="M15 20L19 24L15 28L4 28L4 20L15 20Z"></svg:path></svg:g>`,
})
export class IconParkGameTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGamepadIcon],svg[icon-park-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="28" x="4" y="13" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="14"></svg:rect><svg:circle cx="31" cy="22" r="2" fill="#fff"></svg:circle><svg:circle cx="35" cy="27" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 27H22M12 27H22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 7V13M24 7V13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 22V32"></svg:path></svg:g>`,
})
export class IconParkGamepadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGarageIcon],svg[icon-park-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="38" x="6" y="5" stroke-linejoin="round"></svg:rect><svg:rect width="24" height="6" x="12" y="12" stroke-linejoin="round"></svg:rect><svg:path d="M16 18V43"></svg:path><svg:path d="M32 18V43"></svg:path><svg:path d="M16 24H32"></svg:path><svg:path d="M16 30H32"></svg:path><svg:path d="M16 36H32"></svg:path></svg:g>`,
})
export class IconParkGarageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGarlicIcon],svg[icon-park-garlic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M26.9999 21C26.9999 29 30 27 30.9999 32C32.0244 37.1233 27.7379 42 22.4996 42C17.2613 42 12.9993 37.2248 12.9999 32C12.9999 27.3906 15.4998 24.5 17.9999 23C20.5 21.5 23 20 23 16"></svg:path><svg:path d="M33 23C34 23 38.5 25 39 30C39.4523 34.5231 36.5 41.5 24 42"></svg:path><svg:path d="M16.001 40C8.15387 40 4.00231 35.2968 4.00098 30C4.00098 24.2947 12.001 19 14.001 18C16.001 17 17.001 15.0477 17.001 13V9C17.001 7.61973 17.6207 7 19.001 7H28.001C29.1415 7 30.001 8 30.001 9V12C30.001 14.051 31.2702 15.6727 33.0883 16.5785C33.8478 16.9576 34.6494 17.32 35.4684 17.655C38.7789 19.0093 44.001 21.1459 44.001 27C44.001 31.881 40.598 36 38.001 36"></svg:path></svg:g>`,
})
export class IconParkGarlicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGasIcon],svg[icon-park-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M23.0488 9.78854C24.6746 9.35291 26.3402 10.2971 26.769 11.8975C27.1978 13.4979 26.2275 15.1485 24.6017 15.5841C22.9759 16.0197 6.70807 17 6.70807 17C6.70807 17 21.423 10.2242 23.0488 9.78854Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M23.1066 38.4467C24.7324 38.8823 26.398 37.9381 26.8268 36.3377C27.2556 34.7373 26.2853 33.0868 24.6595 32.6511C23.0337 32.2155 6.7659 31.0039 6.7659 31.0039C6.7659 31.0039 21.4808 38.011 23.1066 38.4467Z"></svg:path><svg:path stroke-linecap="round" d="M33.9996 16.0039C34.9118 14.7895 36.3642 14.0039 38 14.0039C40.7614 14.0039 43 16.2425 43 19.0039C43 21.7653 40.7614 24.0039 38 24.0039H16"></svg:path></svg:g>`,
})
export class IconParkGasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGastrointestinalIcon],svg[icon-park-gastrointestinal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M22.9999 5C21.8537 9.46023 21.8537 12.7727 22.9999 14.9375C24.719 18.1847 28.7 19.9804 23.5741 24.3115C18.4482 28.6427 13.2512 25.0083 10.0425 25.0083C6.83388 25.0083 4.02246 28.6213 4.02246 34C4.02246 37.5858 4.68159 40.5858 5.99986 43"></svg:path><svg:path stroke-linejoin="round" d="M29.9842 5C28.5428 10.329 28.8711 13.7087 30.9694 15.1393C34.1168 17.2851 34.358 12.8036 40.141 15.4699C45.924 18.1363 44.4204 27.4311 41.0941 32.2156C37.7677 37 30.6675 41.8347 24.0084 41C17.3493 40.1653 14.8733 32.0201 14.0161 32.0201C13.159 32.0201 11.3479 32.0455 10.9943 35.4172C10.7585 37.6649 11.4287 40.1926 13.0048 43"></svg:path><svg:path d="M35.6447 28.29C35.0666 30.0018 34.09 31.3384 32.7148 32.3C31.3397 33.2615 29.5942 33.8283 27.4785 34.0002"></svg:path></svg:g>`,
})
export class IconParkGastrointestinalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGateIcon],svg[icon-park-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M13 10V35"></svg:path><svg:path stroke-linejoin="round" d="M35 10V35"></svg:path><svg:path d="M8 18L40 18"></svg:path><svg:path stroke-linejoin="round" d="M24 10V18"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M39 10H9.00001L5 4C5 4 16.0708 5 24 5C31.9292 5 43 4 43 4L39 10Z"></svg:path><svg:rect width="6" height="9" x="10" y="35" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:rect width="6" height="9" x="32" y="35" fill="#2F88FF" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkGateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGateMachineIcon],svg[icon-park-gate-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="8" height="6" x="6" y="42" fill="#2F88FF" stroke-linejoin="round" transform="rotate(-90 6 42)"></svg:rect><svg:rect width="8" height="6" x="36" y="42" fill="#2F88FF" stroke-linejoin="round" transform="rotate(-90 36 42)"></svg:rect><svg:path stroke-linejoin="round" d="M24 14V17"></svg:path><svg:path stroke-linejoin="round" d="M24 6V8"></svg:path><svg:path stroke-linejoin="round" d="M24 26V30"></svg:path><svg:path stroke-linejoin="round" d="M9 6V34"></svg:path><svg:path stroke-linejoin="round" d="M39 6V34"></svg:path><svg:path stroke-linejoin="round" d="M24 38V42"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M20 21H9V30L20 21Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M28 21H39V30L28 21Z"></svg:path><svg:path d="M18 15L9 15"></svg:path><svg:path d="M30 15L39 15"></svg:path></svg:g>`,
})
export class IconParkGateMachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGauzeIcon],svg[icon-park-gauze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="26" cy="24" r="17" fill="#2F88FF" stroke="#000"></svg:circle><svg:circle cx="26" cy="24" r="7" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5 41L26 41"></svg:path></svg:g>`,
})
export class IconParkGauzeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGavelIcon],svg[icon-park-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11.0745 37.0792C7.68854 38.5409 6.03602 40.5241 5.36485 41.9094C5.09915 42.4578 5.54601 43 6.15537 43H27.3865C28.1288 43 28.5986 42.2236 28.1659 41.6205C26.4167 39.182 23.7818 37.6426 22.3887 37.0682C22.2756 37.0216 22.1547 37 22.0323 37H11.4615C11.3291 37 11.1962 37.0267 11.0745 37.0792Z"></svg:path><svg:rect width="10" height="10" x="14.732" y="18.856" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" transform="rotate(-60 14.732 18.856)"></svg:rect><svg:path fill="#000" d="M27.3921 16.9277L28.3921 15.1957C27.4355 14.6434 26.2123 14.9711 25.66 15.9277L27.3921 16.9277ZM24.3921 22.1239L22.66 21.1239C22.1078 22.0805 22.4355 23.3037 23.3921 23.8559L24.3921 22.1239ZM26.3921 18.6598L39.3825 26.1598L41.3825 22.6957L28.3921 15.1957L26.3921 18.6598ZM38.3825 27.8918L25.3921 20.3918L23.3921 23.8559L36.3825 31.3559L38.3825 27.8918ZM26.1241 23.1239L29.1241 17.9277L25.66 15.9277L22.66 21.1239L26.1241 23.1239ZM39.7485 27.5258C39.4724 28.0041 38.8608 28.168 38.3825 27.8918L36.3825 31.3559C38.7739 32.7366 41.8319 31.9173 43.2126 29.5258L39.7485 27.5258ZM39.3825 26.1598C39.8608 26.4359 40.0246 27.0475 39.7485 27.5258L43.2126 29.5258C44.5933 27.1343 43.7739 24.0764 41.3825 22.6957L39.3825 26.1598Z"></svg:path><svg:rect width="14" height="6" x="21" y="4" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3" transform="rotate(30 21 4)"></svg:rect><svg:rect width="14" height="6" x="13" y="17.856" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3" transform="rotate(30 13 17.856)"></svg:rect></svg:g>`,
})
export class IconParkGavelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGeminiIcon],svg[icon-park-gemini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 6C4 6 15.5878 14 24 14C32.4122 14 44 6 44 6"></svg:path><svg:path d="M4 42C4 42 15.5878 34 24 34C32.4122 34 44 42 44 42"></svg:path><svg:path d="M15 12V36"></svg:path><svg:path d="M33 12V36"></svg:path></svg:g>`,
})
export class IconParkGeminiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGeneralBranchIcon],svg[icon-park-general-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M40.0001 9H8C6.89543 9 6 9.89543 6 11L6.00003 41C6.00003 42.1046 6.89546 43 8.00003 43H40.0001C41.1047 43 42.0001 42.1046 42.0001 41V11C42.0001 9.89543 41.1047 9 40.0001 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 5V9"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 5V9"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 17H42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 30H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V36"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 11L6 23"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 11V23"></svg:path></svg:g>`,
})
export class IconParkGeneralBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGeometricFlowersIcon],svg[icon-park-geometric-flowers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28.9914 27.9914C32.5062 24.4767 30.2901 16.5621 24.0417 10.3137C17.7933 4.06535 9.87874 1.84927 6.36402 5.36399C2.8493 8.87871 5.06538 16.7933 11.3138 23.0417C17.5622 29.29 25.4767 31.5061 28.9914 27.9914Z"></svg:path><svg:path d="M28.9914 19.0646C32.5061 22.5793 30.29 30.4939 24.0416 36.7423C17.7932 42.9907 9.87868 45.2067 6.36396 41.692C2.84924 38.1773 5.06532 30.2627 11.3137 24.0144C17.5621 17.766 25.4767 15.5499 28.9914 19.0646Z"></svg:path><svg:path d="M20.0086 27.9914C16.4939 24.4767 18.71 16.5621 24.9584 10.3137C31.2068 4.06535 39.1213 1.84927 42.636 5.36399C46.1508 8.87871 43.9347 16.7933 37.6863 23.0417C31.4379 29.2901 23.5233 31.5061 20.0086 27.9914Z"></svg:path><svg:path d="M20.0086 19.0646C16.4939 22.5793 18.71 30.4939 24.9584 36.7423C31.2068 42.9907 39.1213 45.2067 42.636 41.692C46.1508 38.1773 43.9347 30.2627 37.6863 24.0144C31.4379 17.766 23.5233 15.5499 20.0086 19.0646Z"></svg:path></svg:g>`,
})
export class IconParkGeometricFlowersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGermsIcon],svg[icon-park-germs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44.0002C25.3357 44.0002 26.3638 40.25 27.6262 40.0002C28.9267 39.743 30.4588 42.979 31.6554 42.4828C32.8729 41.9779 32.4053 38.8668 33.4874 38.1424C34.5781 37.4122 37.2174 39.0671 38.1421 38.1424C39.0668 37.2177 36.6639 34.0909 37.3941 33.0002C38.1186 31.9181 41.9777 32.8732 42.4825 31.6557C42.9787 30.4591 39.179 28.1133 39.4362 26.8128C39.686 25.5504 44 25.3359 44 24.0002C44 22.6646 40.2497 21.3595 40 20.0971C39.7427 18.7966 42.9787 17.5414 42.4825 16.3448C41.9777 15.1273 38.1186 16.0824 37.3941 15.0002C36.6639 13.9096 39.0668 10.7828 38.1421 9.85811C37.2174 8.9334 34.0907 10.9491 33 10.219C31.9178 9.49451 32.8729 6.02257 31.6554 5.51772C30.4588 5.02154 28.3005 7.90462 27 7.64735C25.7376 7.39762 25.3357 4.00024 24 4.00024C22.6643 4.00024 22.12 7.39762 20.8577 7.64735C19.5571 7.90462 17.5412 5.02154 16.3446 5.51772C15.1271 6.02257 16.0822 9.13365 15 9.85811C13.9093 10.5883 10.7826 8.9334 9.85786 9.85811C8.93315 10.7828 11.5248 13.9096 10.7947 15.0002C10.0702 16.0824 6.02232 15.1273 5.51747 16.3448C5.02129 17.5414 8.25728 19.2395 8 20.54C7.75028 21.8024 4 22.6646 4 24.0002C4 25.3359 8.09721 25.9273 8.34694 27.1897C8.60421 28.4902 5.02129 30.4591 5.51747 31.6557C6.02232 32.8732 9.80669 31.9181 10.5312 33.0002C11.2613 34.0909 8.93315 37.2177 9.85786 38.1424C10.7826 39.0671 13.9093 36.855 15 37.5851C16.0822 38.3096 15.1271 41.9779 16.3446 42.4828C17.5412 42.979 19.5571 39.743 20.8577 40.0002C22.12 40.25 22.6643 44.0002 24 44.0002Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M29 29.0002C31.2091 29.0002 33 27.2094 33 25.0002C33 22.7911 31.2091 21.0002 29 21.0002C26.7909 21.0002 25 22.7911 25 25.0002C25 27.2094 26.7909 29.0002 29 29.0002Z"></svg:path><svg:path fill="#fff" d="M16.5 26.0002C17.8807 26.0002 19 24.881 19 23.5002C19 22.1195 17.8807 21.0002 16.5 21.0002C15.1193 21.0002 14 22.1195 14 23.5002C14 24.881 15.1193 26.0002 16.5 26.0002Z"></svg:path></svg:g>`,
})
export class IconParkGermsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGhostIcon],svg[icon-park-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44L12 40L16 44L20 38L24 44L28 38L32 44L36 40L40 44V20C40 11.1634 32.8366 4 24 4C15.1634 4 8 11.1634 8 20V44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 20H21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 20H33"></svg:path></svg:g>`,
})
export class IconParkGhostIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGiftIcon],svg[icon-park-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" d="M41 44V20H7V44H41Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 44V20"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M41 44H7"></svg:path><svg:rect width="40" height="8" x="4" y="12" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M16 4L24 12L32 4"></svg:path></svg:g>`,
})
export class IconParkGiftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGiftBagIcon],svg[icon-park-gift-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="36" height="28" x="6" y="14" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M6 32H42V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V32Z"></svg:path><svg:circle cx="19" cy="9" r="5" fill="#2F88FF"></svg:circle><svg:circle cx="28" cy="10" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 20L24 14L31 20"></svg:path></svg:g>`,
})
export class IconParkGiftBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGiftBoxIcon],svg[icon-park-gift-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 9C6 7.34315 7.34315 6 9 6H24H39C40.6569 6 42 7.34315 42 9V24V39C42 40.6569 40.6569 42 39 42H24H9C7.34315 42 6 40.6569 6 39V24V9Z"></svg:path><svg:path stroke="#fff" d="M4 24H44"></svg:path><svg:path stroke="#fff" d="M24 44V4"></svg:path><svg:path stroke="#000" d="M6 30V18"></svg:path><svg:path stroke="#000" d="M42 30V18"></svg:path><svg:path stroke="#000" d="M30 42H18"></svg:path><svg:path stroke="#000" d="M30 6H18"></svg:path><svg:path stroke="#fff" d="M24.0001 23.9999C24.0001 23.9999 31.8972 20.4542 33.0988 19.2526C34.3004 18.051 34.3004 16.1028 33.0988 14.9012C31.8972 13.6996 29.9489 13.6996 28.7473 14.9012C27.5457 16.1028 24.0001 23.9999 24.0001 23.9999ZM24.0001 23.9999C24.0001 23.9999 16.1027 20.4542 14.901 19.2526M24.0001 23.9999C24.0001 23.9999 20.4541 16.1028 19.2525 14.9012M24.0001 23.9999C24.0001 23.9999 31.897 27.5458 33.0986 28.7474M24.0001 23.9999C24.0001 23.9999 27.5455 31.8972 28.7472 33.0988M24.0001 23.9999C24.0001 23.9999 16.1028 27.5458 14.9012 28.7474C13.6996 29.949 13.6996 31.8972 14.9012 33.0988C16.1028 34.3004 18.0511 34.3004 19.2527 33.0988C20.4543 31.8972 24.0001 23.9999 24.0001 23.9999Z"></svg:path></svg:g>`,
})
export class IconParkGiftBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGirlIcon],svg[icon-park-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M27.2308 16H20.7692L10 36H38L27.2308 16Z"></svg:path><svg:path d="M27 36V44"></svg:path><svg:path d="M21 36V44"></svg:path></svg:g>`,
})
export class IconParkGirlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGirlOneIcon],svg[icon-park-girl-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7"></svg:circle><svg:path d="M27 24H21L8 44H40L27 24Z"></svg:path></svg:g>`,
})
export class IconParkGirlOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGirlTwoIcon],svg[icon-park-girl-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="10" r="6" fill="#2F88FF"></svg:circle><svg:path d="M28 44V36H38L27.2308 16H20.7692L10 36H20V44"></svg:path></svg:g>`,
})
export class IconParkGirlTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGithubIcon],svg[icon-park-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"></svg:path><svg:path d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z"></svg:path></svg:g>`,
})
export class IconParkGithubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGithubOneIcon],svg[icon-park-github-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M29.3444 30.4765C31.7481 29.977 33.9292 29.1108 35.6247 27.8391C38.5202 25.6676 40 22.3136 40 18.9999C40 16.6752 39.1187 14.505 37.5929 12.6668C36.7427 11.6425 39.2295 3.99989 37.02 5.02919C34.8105 6.05848 31.5708 8.33679 29.8726 7.83398C28.0545 7.29565 26.0733 6.99989 24 6.99989C22.1992 6.99989 20.4679 7.22301 18.8526 7.6344C16.5046 8.23237 14.2591 5.99989 12 5.02919C9.74086 4.05848 10.9736 11.9632 10.3026 12.7944C8.84119 14.6051 8 16.7288 8 18.9999C8 22.3136 9.79086 25.6676 12.6863 27.8391C14.6151 29.2857 17.034 30.2076 19.7401 30.6619"></svg:path><svg:path d="M19.7397 30.6619C18.5812 31.937 18.002 33.1478 18.002 34.2944C18.002 35.441 18.002 38.3464 18.002 43.0106"></svg:path><svg:path d="M29.3446 30.4766C30.4423 31.9174 30.9912 33.211 30.9912 34.3576C30.9912 35.5042 30.9912 38.3885 30.9912 43.0107"></svg:path><svg:path d="M6 31.2155C6.89887 31.3254 7.56554 31.7387 8 32.4554C8.65169 33.5303 11.0742 37.518 13.8251 37.518C15.6591 37.518 17.0515 37.518 18.0024 37.518"></svg:path></svg:g>`,
})
export class IconParkGithubOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGitlabIcon],svg[icon-park-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M23.9627 42L42 27.4152L36.9957 6L30.9661 18.9935H17.9932L11.0151 6L6 27.4152L23.9627 42Z"></svg:path>`,
})
export class IconParkGitlabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGlassesIcon],svg[icon-park-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="12" cy="35" r="7" fill="#2F88FF"></svg:circle><svg:circle cx="36" cy="35" r="7" fill="#2F88FF"></svg:circle><svg:path d="M5 34V10.883C5 9.49159 5 8.79587 5.37752 8.2721C5.75503 7.74832 6.41505 7.52832 7.73509 7.0883L11 6"></svg:path><svg:path d="M43 34V10.883C43 9.49159 43 8.79587 42.6225 8.2721C42.245 7.74832 41.5849 7.52832 40.2649 7.0883L37 6"></svg:path><svg:path d="M29 34C29 31.2386 26.7614 29 24 29C21.2386 29 19 31.2386 19 34"></svg:path></svg:g>`,
})
export class IconParkGlassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGlassesOneIcon],svg[icon-park-glasses-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="14.5" cy="24.5" r="6.5" fill="#2F88FF"></svg:circle><svg:circle r="6.5" fill="#2F88FF" transform="matrix(-1 0 0 1 33.5 24.5)"></svg:circle><svg:path d="M4 24H8"></svg:path><svg:path d="M44 24H40"></svg:path><svg:path d="M20 21C20.5 19 22 17 24 17C26 17 27.5 19 28 21"></svg:path></svg:g>`,
})
export class IconParkGlassesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGlassesThreeIcon],svg[icon-park-glasses-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="12" cy="33" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M29 33C29 29.6863 27.5 27 24 27C20.5 27 19 29.6863 19 33"></svg:path><svg:circle cx="36" cy="33" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M14 8H12C8.68629 8 6 10.6863 6 14V22"></svg:path><svg:path stroke-linecap="round" d="M34 8H36C39.3137 8 42 10.6863 42 14V22"></svg:path></svg:g>`,
})
export class IconParkGlassesThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGlobeIcon],svg[icon-park-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37.8261 4C41.6276 7.58886 44 12.6753 44 18.3158C44 29.1871 35.1871 38 24.3158 38C18.6753 38 13.5889 35.6276 10 31.8261"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 32C31.732 32 38 25.732 38 18C38 10.268 31.732 4 24 4C16.268 4 10 10.268 10 18C10 25.732 16.268 32 24 32Z" clip-rule="evenodd"></svg:path><svg:path d="M24 38V44"></svg:path><svg:path d="M18 44H30"></svg:path></svg:g>`,
})
export class IconParkGlobeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGloveIcon],svg[icon-park-glove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M8 42H35.8333V34C35.8333 34 41 20.5823 42 18C43 15.4177 41.5 12.6651 38 13C34.5 13.3349 31.1111 21.3291 31.1111 21.3291C31.1111 21.3291 30.5 13 30 10.5C29.5 8 29 4 19.3056 4C9.61111 4 8 11.1203 8 15V42Z"></svg:path>`,
})
export class IconParkGloveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoAheadIcon],svg[icon-park-go-ahead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 33C38 25.7011 33.897 19.4168 28 16.5919C25.8653 15.5693 23.4954 15 21 15C11.6112 15 4 23.0589 4 33"></svg:path><svg:path d="M30 28L38 33L44 25"></svg:path></svg:g>`,
})
export class IconParkGoAheadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoEndIcon],svg[icon-park-go-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 12L26 24L14 36"></svg:path><svg:path d="M34 12V36"></svg:path></svg:g>`,
})
export class IconParkGoEndIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoOnIcon],svg[icon-park-go-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 7L43 13.4615L36 21"></svg:path><svg:path d="M40 14H17.0062C10.1232 14 4.27787 19.6204 4.00964 26.5C3.72612 33.7696 9.73291 40 17.0062 40H34.0016"></svg:path></svg:g>`,
})
export class IconParkGoOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoStartIcon],svg[icon-park-go-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 36L22 24L34 12"></svg:path><svg:path d="M14 12V36"></svg:path></svg:g>`,
})
export class IconParkGoStartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGobletIcon],svg[icon-park-goblet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 44H23H13"></svg:path><svg:path d="M23 28V44"></svg:path><svg:path fill="#2F88FF" d="M35 16C35 22.5 29.6274 28 23 28C16.3726 28 11 22.6274 11 16C11 9.5 15 4 15 4H31C31 4 35 9.5 35 16Z"></svg:path></svg:g>`,
})
export class IconParkGobletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGobletCrackingIcon],svg[icon-park-goblet-cracking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M33 44H23H13"></svg:path><svg:path stroke="#000" d="M23 28V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M35 16C35 22.5 29.6274 28 23 28C16.3726 28 11 22.6274 11 16C11 9.5 15 4 15 4H31C31 4 35 9.5 35 16Z"></svg:path><svg:path stroke="#fff" d="M23 4L21 10L25 11L23 17"></svg:path><svg:path stroke="#000" d="M15 4H31"></svg:path></svg:g>`,
})
export class IconParkGobletCrackingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGobletFullIcon],svg[icon-park-goblet-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M33 44H23H13"></svg:path><svg:path stroke="#000" d="M23 28V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M35 16C35 17.6751 34.6432 19.2839 34 20.7491C32.1475 24.9696 27.9194 28 23 28C18.2583 28 14.159 25.2498 12.21 21.2576C11.435 19.6699 11 17.8857 11 16C11 13.6271 11.5331 11.3874 12.21 9.5C13.3874 6.21729 15 4 15 4H31C31 4 32.8152 6.49591 34 10.1121C34.574 11.8639 35 13.8787 35 16Z"></svg:path><svg:path stroke="#fff" d="M35 15.9998C35 15.9998 28 18.9998 23 15.9998C18 12.9998 11 15.9998 11 15.9998"></svg:path><svg:path stroke="#000" d="M34 10.1123C34.574 11.8642 35 13.8789 35 16.0002C35 17.6754 34.6432 19.2841 34 20.7494"></svg:path><svg:path stroke="#000" d="M12.21 9.5C11.5331 11.3874 11 13.6271 11 16C11 17.8857 11.435 19.6699 12.21 21.2576"></svg:path></svg:g>`,
})
export class IconParkGobletFullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGobletOneIcon],svg[icon-park-goblet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5.73633 24.1211L10.6861 29.0709C15.7629 34.1477 23.9941 34.1477 29.0709 29.0709V29.0709C34.1477 23.994 34.1477 15.7629 29.0709 10.6861L24.1211 5.73632"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M30 29.9998L35.9998 35.9998"></svg:path><svg:ellipse cx="14" cy="14" rx="13" ry="7" transform="rotate(-45 14 14)"></svg:ellipse><svg:ellipse cx="38" cy="38" rx="6" ry="3" transform="rotate(-45 38 38)"></svg:ellipse></svg:g>`,
})
export class IconParkGobletOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoldMedalIcon],svg[icon-park-gold-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 4H31L27 14.3001C31.4614 15.2057 35.2038 18.0914 37.2699 22L44 4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M17 4H4L10.7301 22C12.7962 18.0914 16.5386 15.2057 21 14.3001L17 4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M39 29C39 37.2843 32.2843 44 24 44C15.7157 44 9 37.2843 9 29C9 26.4718 9.62546 24.0897 10.7301 22C12.7962 18.0914 16.5386 15.2057 21 14.3001C21.9693 14.1033 22.9726 14 24 14C25.0274 14 26.0307 14.1033 27 14.3001C31.4614 15.2057 35.2038 18.0914 37.2699 22C38.3745 24.0897 39 26.4718 39 29Z"></svg:path><svg:path stroke="#fff" d="M24 35V22L21 23M24 35H28M24 35H20"></svg:path></svg:g>`,
})
export class IconParkGoldMedalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoldMedalTwoIcon],svg[icon-park-gold-medal-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M36 32C36 28.446 34.455 25.2529 32 23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32Z"></svg:path><svg:path fill="#2F88FF" d="M16 4H32V20V23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556V20V4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 4H32M16 4H8V14L16 20M16 4V20M32 4H40V14L32 20M32 4V20M16 23.0556C18.123 21.1554 20.9266 20 24 20C27.0734 20 29.877 21.1554 32 23.0556M16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32C36 28.446 34.455 25.2529 32 23.0556M16 23.0556V20M32 23.0556V20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 4H40V14L32 20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 4H8V14L16 20"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 32C36 28.446 34.455 25.2529 32 23.0556C29.877 21.1554 27.0734 20 24 20C20.9266 20 18.123 21.1554 16 23.0556C13.545 25.2529 12 28.446 12 32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 4.00009H32V20.0001V23.0557C29.877 21.1555 27.0734 20.0001 24 20.0001C20.9266 20.0001 18.123 21.1555 16 23.0557V20.0001V4.00009Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 37V27L22 28M24 37H26M24 37H22"></svg:path></svg:g>`,
})
export class IconParkGoldMedalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGolfCourseIcon],svg[icon-park-golf-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:ellipse cx="24" cy="34" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="20" ry="10"></svg:ellipse><svg:circle cx="32" cy="34" r="2" fill="#2F88FF" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" d="M24 9L13 4V14L24 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 34V14M13 14V4L24 9L13 14Z"></svg:path></svg:g>`,
})
export class IconParkGolfCourseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGongfuIcon],svg[icon-park-gongfu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="22" cy="8" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 18H18V29H11V43"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36.1818 18H26V28.8596L40 43"></svg:path></svg:g>`,
})
export class IconParkGongfuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoodIcon],svg[icon-park-good-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8.00635 19.1973C12.4427 10.3246 21.9995 7.00009 28.5063 4.19696C31.4639 2.92285 32.1955 7.7231 31.0063 10.6967C30.0063 13.1973 28.0063 16.0001 28.0063 16.0001H36.5063C38.4393 16.0001 40.0063 17.5671 40.0063 19.5001C40.0063 21.4331 38.4393 23.0001 36.5063 23.0001H38.5063C40.4393 23.0001 42.0063 24.5671 42.0063 26.5001C42.0063 28.4331 40.4393 30.0001 38.5063 30.0001H34.5063C36.4393 30.0001 38.0063 31.5671 38.0063 33.5001C38.0063 35.4331 36.4393 37.0001 34.5063 37.0001H31.5063C33.4393 37.0001 35.0063 38.5671 35.0063 40.5001C35.0063 42.4331 33.4408 44.0001 31.5078 44.0001H19.0063C15.5063 44.0001 11.0063 42.1973 8.00635 37.197C5.13054 32.4036 5.00635 25.1973 8.00635 19.1973Z"></svg:path>`,
})
export class IconParkGoodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoodOneIcon],svg[icon-park-good-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35.9115 41.5439L41.2811 22.5439C41.6418 21.2675 40.6828 20 39.3564 20H27.8747C27.1714 20 26.651 19.3458 26.8091 18.6605L27.3086 16.4961C27.7668 14.5107 27.9139 12.4663 27.7446 10.4358L27.6527 9.3327C27.5541 8.14935 27.0393 7.03925 26.1996 6.1996C25.4315 5.43151 24.3898 5 23.3035 5H23.0644C22.4074 5 21.8021 5.35616 21.4831 5.93043L18.825 10.7149C17.6329 12.8608 15.8559 14.624 13.7009 15.7995L7.0423 19.4315C6.39977 19.7819 6 20.4554 6 21.1873V41C6 42.1046 6.89543 43 8 43H33.9869C34.882 43 35.6681 42.4053 35.9115 41.5439Z"></svg:path>`,
})
export class IconParkGoodOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoodTwoIcon],svg[icon-park-good-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4.18898 22.1733C4.08737 21.0047 5.00852 20 6.18146 20H10C11.1046 20 12 20.8954 12 22V41C12 42.1046 11.1046 43 10 43H7.83363C6.79622 43 5.93102 42.2068 5.84115 41.1733L4.18898 22.1733Z"></svg:path><svg:path d="M18 21.3745C18 20.5388 18.5194 19.7908 19.2753 19.4345C20.9238 18.6574 23.7329 17.0938 25 14.9805C26.6331 12.2569 26.9411 7.33595 26.9912 6.20878C26.9982 6.05099 26.9937 5.89301 27.0154 5.73656C27.2861 3.78446 31.0543 6.06492 32.5 8.47612C33.2846 9.78471 33.3852 11.504 33.3027 12.8463C33.2144 14.2825 32.7933 15.6699 32.3802 17.0483L31.5 19.9845H42.3569C43.6832 19.9845 44.6421 21.2518 44.2816 22.5281L38.9113 41.5436C38.668 42.4051 37.8818 43 36.9866 43H20C18.8954 43 18 42.1046 18 41V21.3745Z"></svg:path></svg:g>`,
})
export class IconParkGoodTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoogleIcon],svg[icon-park-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M34.5 7L29.5 14.5C28.5 13.9684 26.5 12.9999 24 12.9999C18 12.9999 13 17.9999 13 23.4999C13 28.9999 17 35.0006 24 35.0006C29.6 35.0006 33.5 31.0005 33.5 28.0005H24V21.0002C31 21.0003 44 20.9999 44 20.9999C44.5 28.5002 42.2896 32.9004 39.5 36.5C35.3242 41.8881 29.1712 44.0002 24 44.0002C14 44.0002 4 36.0006 4 23.4999C4 11.5 14.7237 4 23 4C31.2763 4 34.5 7 34.5 7Z"></svg:path><svg:path fill="#000" d="M29.5 14.5L28.5612 16.266C29.4687 16.7484 30.594 16.4645 31.1641 15.6094L29.5 14.5ZM34.5 7L36.1641 8.1094C36.708 7.2936 36.5802 6.20383 35.8625 5.53589L34.5 7ZM44 20.9999L45.9956 20.8669C45.9255 19.8163 45.0529 18.9999 43.9999 18.9999L44 20.9999ZM24 21.0002L24 19.0002C23.4696 19.0002 22.9609 19.2109 22.5858 19.586C22.2107 19.961 22 20.4698 22 21.0002H24ZM24 28.0005H22C22 29.105 22.8954 30.0005 24 30.0005V28.0005ZM33.5 28.0005H35.5C35.5 26.8959 34.6046 26.0005 33.5 26.0005V28.0005ZM39.5 36.5L37.9192 35.2749V35.2749L39.5 36.5ZM31.1641 15.6094L36.1641 8.1094L32.8359 5.8906L27.8359 13.3906L31.1641 15.6094ZM34.5 7C35.8625 5.53589 35.8616 5.53503 35.8606 5.53416C35.8603 5.53385 35.8593 5.53296 35.8587 5.53235C35.8574 5.53112 35.856 5.52985 35.8545 5.52853C35.8517 5.5259 35.8486 5.52309 35.8453 5.5201C35.8388 5.51412 35.8314 5.50743 35.8231 5.50007C35.8067 5.48533 35.7868 5.46787 35.7634 5.44787C35.7168 5.40786 35.6563 5.35772 35.5816 5.29897C35.4322 5.18145 35.2258 5.02961 34.959 4.85569C34.4248 4.50754 33.6506 4.0726 32.6083 3.64788C30.5184 2.79622 27.3861 2 23 2V6C26.8902 6 29.5079 6.70378 31.0989 7.35212C31.8971 7.6774 32.4461 7.99246 32.775 8.20681C32.9396 8.31414 33.0498 8.39667 33.109 8.44321C33.1386 8.4665 33.1555 8.48081 33.1601 8.48475C33.1624 8.48672 33.1616 8.4861 33.1579 8.48272C33.156 8.48103 33.1533 8.47865 33.1499 8.47555C33.1482 8.47401 33.1463 8.47228 33.1443 8.47037C33.1432 8.46942 33.1422 8.46842 33.141 8.46738C33.1405 8.46685 33.1396 8.46604 33.1393 8.46578C33.1384 8.46495 33.1375 8.46411 34.5 7ZM23 2C18.3065 2 13.0898 4.10146 9.05165 7.76958C4.97769 11.4702 2 16.8614 2 23.4999H6C6 18.1386 8.38418 13.7798 11.7412 10.7304C15.1339 7.64854 19.4172 6 23 6V2ZM2 23.4999C2 37.2006 12.9933 46.0002 24 46.0002V42.0002C15.0067 42.0002 6 34.8006 6 23.4999H2ZM44 20.9999C43.9999 18.9999 43.9999 18.9999 43.9998 18.9999C43.9997 18.9999 43.9995 18.9999 43.9993 18.9999C43.999 18.9999 43.9984 18.9999 43.9976 18.9999C43.996 18.9999 43.9936 18.9999 43.9905 18.9999C43.9842 18.9999 43.9748 18.9999 43.9624 18.9999C43.9376 18.9999 43.9007 18.9999 43.8522 18.9999C43.7553 18.9999 43.6122 18.9999 43.4277 18.9999C43.0585 19 42.5234 19 41.8593 19C40.5312 19 38.6875 19.0001 36.625 19.0001C32.5 19.0002 27.5 19.0003 24 19.0002L24 23.0002C27.5 23.0003 32.5 23.0002 36.625 23.0001C38.6875 23.0001 40.5313 23 41.8594 23C42.5235 23 43.0587 23 43.4278 22.9999C43.6124 22.9999 43.7554 22.9999 43.8524 22.9999C43.9008 22.9999 43.9377 22.9999 43.9626 22.9999C43.975 22.9999 43.9843 22.9999 43.9906 22.9999C43.9937 22.9999 43.9961 22.9999 43.9977 22.9999C43.9985 22.9999 43.9991 22.9999 43.9995 22.9999C43.9997 22.9999 43.9998 22.9999 43.9999 22.9999C44 22.9999 44.0001 22.9999 44 20.9999ZM22 21.0002V28.0005H26V21.0002H22ZM24 30.0005H33.5V26.0005H24V30.0005ZM31.5 28.0005C31.5 28.6975 30.9784 29.9325 29.581 31.0797C28.2481 32.1739 26.3174 33.0006 24 33.0006V37.0006C27.2826 37.0006 30.1019 35.8273 32.119 34.1714C34.0716 32.5685 35.5 30.3034 35.5 28.0005H31.5ZM24 33.0006C18.3828 33.0006 15 28.1959 15 23.4999H11C11 29.804 15.6172 37.0006 24 37.0006V33.0006ZM15 23.4999C15 19.1639 19.0442 14.9999 24 14.9999V10.9999C16.9558 10.9999 11 16.836 11 23.4999H15ZM24 14.9999C26.0003 14.9999 27.6453 15.779 28.5612 16.266L30.4388 12.734C29.3547 12.1577 26.9997 10.9999 24 10.9999V14.9999ZM24 46.0002C29.6725 46.0002 36.4599 43.6877 41.0808 37.7251L37.9192 35.2749C34.1886 40.0886 28.6698 42.0002 24 42.0002V46.0002ZM41.0808 37.7251C44.1179 33.8063 46.5334 28.9344 45.9956 20.8669L42.0044 21.133C42.4666 28.066 40.4614 31.9945 37.9192 35.2749L41.0808 37.7251Z"></svg:path></svg:g>`,
})
export class IconParkGoogleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoogleAdsIcon],svg[icon-park-google-ads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M41.3551 34.1527L29.5218 8.7761C28.1213 5.77286 24.5514 4.47352 21.5482 5.87396C18.545 7.27439 17.2456 10.8443 18.6461 13.8475L30.4794 39.2241C31.8798 42.2274 35.4497 43.5267 38.4529 42.1263C41.4562 40.7258 42.7555 37.156 41.3551 34.1527Z"></svg:path><svg:path stroke-linecap="round" d="M23.4375 26.5357L17.5209 39.224C16.1204 42.2273 12.5506 43.5266 9.54731 42.1262V42.1262C6.54407 40.7257 5.24474 37.1558 6.64517 34.1526L18.374 9"></svg:path><svg:circle cx="12.083" cy="36.688" r="6" fill="#2F88FF" transform="rotate(25 12.083 36.688)"></svg:circle></svg:g>`,
})
export class IconParkGoogleAdsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGoproIcon],svg[icon-park-gopro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="13" height="34" x="5" y="7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="19" height="22" x="24" y="13" fill="#2F88FF" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:circle cx="33.5" cy="24.5" r="3.5" fill="#43CCF8" stroke="#fff" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 24H24"></svg:path><svg:rect width="5" height="5" x="9" y="15" fill="#000" rx="2.5"></svg:rect></svg:g>`,
})
export class IconParkGoproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGpsIcon],svg[icon-park-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 13L17 34L24 29L31 34L24 13Z"></svg:path></svg:g>`,
})
export class IconParkGpsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicDesignIcon],svg[icon-park-graphic-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 32C11.268 32 5 25.732 5 18C5 10.268 11.268 4 19 4C26.732 4 33 10.268 33 18"></svg:path><svg:path fill="#2F88FF" d="M44 18H18V44H44V18Z"></svg:path></svg:g>`,
})
export class IconParkGraphicDesignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicDesignTwoIcon],svg[icon-park-graphic-design-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.6496 28.2381C12.221 25.6863 10 21.6025 10 17C10 9.26801 16.268 3 24 3C31.732 3 38 9.26801 38 17C38 21.5352 35.8435 25.5668 32.5 28.1252"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 17L44 44H4L24 17Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkGraphicDesignTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicStitchingIcon],svg[icon-park-graphic-stitching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M24 24L34 14C34 8.47715 29.5228 4 24 4C18.4772 4 14 8.47715 14 14L24 24Z"></svg:path><svg:path d="M14 34L24 24L14 14C8.47715 14 4 18.4772 4 24C4 29.5228 8.47715 34 14 34Z"></svg:path><svg:path d="M34 34C39.5228 34 44 29.5228 44 24C44 18.4772 39.5228 14 34 14L24 24L34 34Z"></svg:path><svg:path d="M24 44C29.5228 44 34 39.5228 34 34L24 24L14 34C14 39.5228 18.4772 44 24 44Z"></svg:path></svg:g>`,
})
export class IconParkGraphicStitchingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicStitchingFourIcon],svg[icon-park-graphic-stitching-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M39 14C41.7614 14 44 11.7614 44 9C44 6.23858 41.7614 4 39 4C36.2386 4 34 6.23858 34 9C34 11.7614 36.2386 14 39 14Z"></svg:path><svg:path fill="#2F88FF" d="M9 44C11.7614 44 14 41.7614 14 39C14 36.2386 11.7614 34 9 34C6.23858 34 4 36.2386 4 39C4 41.7614 6.23858 44 9 44Z"></svg:path><svg:path fill="#2F88FF" d="M14 4H4V14H14V4Z"></svg:path><svg:path fill="#2F88FF" d="M44 34H34V44H44V34Z"></svg:path><svg:path d="M34 9H14"></svg:path><svg:path d="M34 39H14"></svg:path><svg:path d="M9 34V14"></svg:path><svg:path d="M39 34V14"></svg:path></svg:g>`,
})
export class IconParkGraphicStitchingFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGraphicStitchingThreeIcon],svg[icon-park-graphic-stitching-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"></svg:path><svg:path fill="#2F88FF" d="M24 44C26.7614 44 29 41.7614 29 39C29 36.2386 26.7614 34 24 34C21.2386 34 19 36.2386 19 39C19 41.7614 21.2386 44 24 44Z"></svg:path><svg:path fill="#2F88FF" d="M14 19H4V29H14V19Z"></svg:path><svg:path fill="#2F88FF" d="M44 19H34V29H44V19Z"></svg:path><svg:path d="M19 9H9V19"></svg:path><svg:path d="M19 39H9V29"></svg:path><svg:path d="M29 9H40V19"></svg:path><svg:path d="M29 39H39V29"></svg:path></svg:g>`,
})
export class IconParkGraphicStitchingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGreatWallIcon],svg[icon-park-great-wall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 9V40H44V9H36V16H28V9H20V16H12V9H4Z"></svg:path><svg:path d="M4 24H44"></svg:path><svg:path d="M4 32H44"></svg:path><svg:path d="M24 24V32"></svg:path><svg:path d="M16 32V40"></svg:path><svg:path d="M16 16V24"></svg:path><svg:path d="M32 32V40"></svg:path><svg:path d="M32 16V24"></svg:path></svg:g>`,
})
export class IconParkGreatWallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGreenHouseIcon],svg[icon-park-green-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 20V44H24H6V20L24 4L42 20Z"></svg:path><svg:path stroke-linecap="round" d="M6 24L42 24"></svg:path><svg:path stroke-linecap="round" d="M13 14L13 44"></svg:path><svg:path stroke-linecap="round" d="M35 14L35 44"></svg:path><svg:rect width="8" height="12" x="20" y="32" fill="#2F88FF" stroke-linecap="round"></svg:rect></svg:g>`,
})
export class IconParkGreenHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGreenNewEnergyIcon],svg[icon-park-green-new-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42.3357 16C39.2495 8.93638 32.2012 4 23.9999 4C15.7986 4 8.75029 8.93638 5.66406 16"></svg:path><svg:path fill="#2F88FF" d="M24 14C20.2973 17.6298 18 22.6881 18 28.2829C18 28.7833 18.0184 29.2795 18.0545 29.7708C21.7253 33.3967 24 38.4327 24 44C24 38.4327 26.2747 33.3967 29.9455 29.7708C29.9816 29.2795 30 28.7833 30 28.2829C30 22.6881 27.7027 17.6298 24 14Z"></svg:path><svg:path fill="#2F88FF" d="M4 24C4 35.0457 12.9543 44 24 44C24 38.4327 21.7253 33.3967 18.0545 29.7708C14.4424 26.2027 9.47841 24 4 24Z"></svg:path><svg:path fill="#2F88FF" d="M44 24C44 35.0457 35.0457 44 24 44C24 38.4327 26.2747 33.3967 29.9455 29.7708C33.5576 26.2027 38.5216 24 44 24Z"></svg:path></svg:g>`,
})
export class IconParkGreenNewEnergyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGridFourIcon],svg[icon-park-grid-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" rx="2"></svg:rect><svg:path d="M24 5V43"></svg:path><svg:path d="M5 24H43"></svg:path></svg:g>`,
})
export class IconParkGridFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGridNineIcon],svg[icon-park-grid-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M5 18H43"></svg:path><svg:path d="M5 30H43"></svg:path><svg:path d="M17 5V43"></svg:path><svg:path d="M30 5V43"></svg:path></svg:g>`,
})
export class IconParkGridNineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGridSixteenIcon],svg[icon-park-grid-sixteen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M14 4V44"></svg:path><svg:path d="M24 4V44"></svg:path><svg:path d="M34 4V44"></svg:path><svg:path stroke-linejoin="round" d="M4 14H44"></svg:path><svg:path stroke-linejoin="round" d="M4 34H44"></svg:path><svg:path stroke-linejoin="round" d="M4 24H44"></svg:path></svg:g>`,
})
export class IconParkGridSixteenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGridThreeIcon],svg[icon-park-grid-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"></svg:path><svg:path stroke-linecap="round" d="M15 6L15 42"></svg:path><svg:path stroke-linecap="round" d="M42 17H6"></svg:path></svg:g>`,
})
export class IconParkGridThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGridTwoIcon],svg[icon-park-grid-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"></svg:path><svg:path stroke-linecap="round" d="M24 6L24 42"></svg:path><svg:path stroke-linecap="round" d="M6 24H42"></svg:path></svg:g>`,
})
export class IconParkGridTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGrimacingFaceIcon],svg[icon-park-grimacing-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:rect width="18" height="8" x="15" y="28" fill="#43CCF8" stroke="#fff" stroke-linecap="round" rx="4"></svg:rect></svg:g>`,
})
export class IconParkGrimacingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGrinningFaceIcon],svg[icon-park-grinning-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 35C29 35 31 31 31 31H17C17 31 19 35 24 35Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 20V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 20V21"></svg:path></svg:g>`,
})
export class IconParkGrinningFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGrinningFaceWithOpenMouthIcon],svg[icon-park-grinning-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 35C29 35 31 31 31 31H17C17 31 19 35 24 35Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V22"></svg:path></svg:g>`,
})
export class IconParkGrinningFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGrinningFaceWithSquintingEyesIcon],svg[icon-park-grinning-face-with-squinting-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 35C29 35 31 31 31 31H17C17 31 19 35 24 35Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 21C21 21 20 17 17 17C14 17 13 21 13 21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M35 21C35 21 34 17 31 17C28 17 27 21 27 21"></svg:path></svg:g>`,
})
export class IconParkGrinningFaceWithSquintingEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGrinningFaceWithTightlyClosedEyesIcon],svg[icon-park-grinning-face-with-tightly-closed-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 31C17 31 19 35 24 35C29 35 31 31 31 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 16L19 19L16 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 16L29 19L32 22"></svg:path></svg:g>`,
})
export class IconParkGrinningFaceWithTightlyClosedEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGrinningFaceWithTightlyClosedEyesOpenMouthIcon],svg[icon-park-grinning-face-with-tightly-closed-eyes-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 35C29 35 31 31 31 31H17C17 31 19 35 24 35Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 17L29 20L32 23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 17L19 20L16 23"></svg:path></svg:g>`,
})
export class IconParkGrinningFaceWithTightlyClosedEyesOpenMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGroupIcon],svg[icon-park-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 4H4V12H12V4Z"></svg:path><svg:path fill="#2F88FF" d="M44 36H36V44H44V36Z"></svg:path><svg:path fill="#2F88FF" d="M12 36H4V44H12V36Z"></svg:path><svg:path fill="#2F88FF" d="M44 4H36V12H44V4Z"></svg:path><svg:path stroke-linecap="round" d="M8 36V12"></svg:path><svg:path stroke-linecap="round" d="M40 36V12"></svg:path><svg:path stroke-linecap="round" d="M12 8H36"></svg:path><svg:path stroke-linecap="round" d="M12 40H36"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linecap="round" d="M16 16H25.6V22.4H32V32H22.4V25.6H16V16Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkGroupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGuideBoardIcon],svg[icon-park-guide-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4V41"></svg:path><svg:path fill="#2F88FF" d="M24 8H39.5455L42 12L39.5455 16H24V8Z"></svg:path><svg:path fill="#2F88FF" d="M24 22H8.45455L6 26L8.45455 30H24V22Z"></svg:path><svg:path stroke-linecap="round" d="M16 42H32"></svg:path></svg:g>`,
})
export class IconParkGuideBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGymnasticsIcon],svg[icon-park-gymnastics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 29L21 36L12 34L7 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 36L23 44H34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 22.9998L23 28.9998L35 26.9998L41.04 22.0298"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 3.99985C26 1.99985 36 5.99985 44 14.9998"></svg:path></svg:g>`,
})
export class IconParkGymnasticsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkGymnasticsOneIcon],svg[icon-park-gymnastics-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M27 24C29.7614 24 32 21.7614 32 19C32 16.2386 29.7614 14 27 14C24.2386 14 22 16.2386 22 19C22 21.7614 24.2386 24 27 24Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 29L21 36L12 33L8 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 36L22.49 42.48C22.71 43.37 23.51 44 24.43 44H35.01"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 23L23 29L14 20L13 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 4C14 4 14.69 4 17 4C29 4 44 5.45 44 32"></svg:path></svg:g>`,
})
export class IconParkGymnasticsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHIcon],svg[icon-park-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 5V43"></svg:path><svg:path d="M36 5V43"></svg:path><svg:path d="M12 24L36 24"></svg:path></svg:g>`,
})
export class IconParkHIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkH1Icon],svg[icon-park-h1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M25 8V40"></svg:path><svg:path d="M6 24H25"></svg:path><svg:path d="M34.2261 24L39.0001 19.0166V40"></svg:path></svg:g>`,
})
export class IconParkH1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkH2Icon],svg[icon-park-h2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M24 8V40"></svg:path><svg:path d="M7 24H23"></svg:path><svg:path d="M32 25C32 21.8334 34.6667 20 37 20C39.3334 20 42 21.8334 42 25C42 30.7 32 34.9333 32 40H42"></svg:path></svg:g>`,
})
export class IconParkH2Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkH3Icon],svg[icon-park-h3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M24 8V40"></svg:path><svg:path d="M7 24H23"></svg:path><svg:path d="M32 20H42L35 29C39 29 42 31 42 35C42 39 39 40 37 40C34.619 40 33 39 32 37.9"></svg:path></svg:g>`,
})
export class IconParkH3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHairBrushIcon],svg[icon-park-hair-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18.1968 31.4243C21.321 34.5485 28.919 32.0158 35.1674 25.7674C41.4158 19.519 43.9484 11.9211 40.8242 8.79688"></svg:path><svg:path d="M27.3887 6.67529L28.8029 8.08951"></svg:path><svg:path d="M22.4395 11.625L23.8537 13.0392"></svg:path><svg:path d="M18.1963 17.2822L19.6105 18.6964"></svg:path><svg:path d="M16.7822 24.353L18.1964 25.7672"></svg:path><svg:path d="M35.167 4.5542L36.5812 5.96841"></svg:path><svg:path d="M33.7529 13.0396L36.5814 15.868"></svg:path><svg:path d="M28.8037 17.9893L31.6321 20.8177"></svg:path><svg:path d="M23.1465 22.2319L25.9749 25.0604"></svg:path><svg:rect width="6" height="14" x="16.075" y="29.303" rx="3" transform="rotate(45 16.075 29.303)"></svg:rect></svg:g>`,
})
export class IconParkHairBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHairClipIcon],svg[icon-park-hair-clip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38.8476 5.33887C31.884 6.56675 24.2643 12.2184 21.3141 19.9188C18.0892 28.336 17.2166 29.2574 13.284 31.3869C9.50172 33.435 4.59961 35.0723 4.59961 35.0723"></svg:path><svg:path d="M9.6377 33.1069C13.8571 30.5679 19.3456 33.1902 21.803 34.9109C24.2605 36.6317 26.7592 36.5501 28.1931 34.5022C29.627 32.4543 28.8491 30.0785 26.3917 28.3577C24.7533 27.2106 19.2649 24.5883 21.3136 19.9189"></svg:path><svg:path d="M43.189 9.59952C32.8663 12.1377 28.7696 15.3731 24.7537 27.2104"></svg:path><svg:path d="M20.9841 34.3374C20.2056 36.0304 18.6895 40.0553 18.853 42.6114"></svg:path></svg:g>`,
})
export class IconParkHairClipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHairDryerIcon],svg[icon-park-hair-dryer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M19.193 21.5439L21.512 40.0964C21.7711 42.1692 20.1548 44.0001 18.0659 44.0001C16.3144 44.0001 14.837 42.6959 14.6197 40.9579L12.2461 21.969"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M13 4C8.02944 4 4 8.02944 4 13C4 17.7167 7.62831 21.5859 12.2461 21.9689C12.4947 21.9895 12.7461 22 13 22C14.578 22 16.7395 21.8249 19.193 21.5438L31.5965 19.5219L44 17.5V8.5L28.5 6.25L13 4Z"></svg:path><svg:path stroke="#fff" d="M37 8.20068V17.7996"></svg:path><svg:path stroke="#000" d="M44.0002 17.5L31.5967 19.5219"></svg:path><svg:path stroke="#000" d="M44 8.5L28.5 6.25"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M16 13C16 14.6569 14.6569 16 13 16C11.3431 16 10 14.6569 10 13C10 11.3431 11.3431 10 13 10C14.6569 10 16 11.3431 16 13Z"></svg:path></svg:g>`,
})
export class IconParkHairDryerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHairDryerOneIcon],svg[icon-park-hair-dryer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M11 12.1383C11 12.0592 11.0587 11.9924 11.1371 11.9823L32.0822 9.27971C37.3414 8.60112 42 12.6973 42 18V18C42 23.3027 37.3413 27.3989 32.0822 26.7203L11.1371 24.0177C11.0587 24.0076 11 23.9408 11 23.8617V12.1383Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 12L4 8V28L11 24"></svg:path><svg:path d="M38 25L31.3061 40.8981C30.5146 42.7777 28.6738 44 26.6343 44V44C23.0091 44 20.5557 40.3051 21.9625 36.9639L27 25"></svg:path><svg:circle cx="35" cy="18" r="9" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkHairDryerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHaloIcon],svg[icon-park-halo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"></svg:path><svg:path d="M17.3644 14C16.6922 14.4469 16.0676 14.9598 15.5 15.5295C14.9041 16.1274 14.3709 16.7878 13.9111 17.5"></svg:path><svg:path d="M12.1975 26.1802C12.0678 25.4732 12 24.7447 12 24.0002C12 23.2558 12.0678 22.5272 12.1975 21.8203"></svg:path><svg:path d="M17.3644 34C16.6922 33.5531 16.0676 33.0402 15.5 32.4705C14.9041 31.8726 14.3709 31.2122 13.9111 30.5"></svg:path><svg:path d="M26.3598 35.7681C25.5968 35.9202 24.8077 36 24 36C23.1922 36 22.4031 35.9202 21.6401 35.7681"></svg:path><svg:path d="M30.6357 34C31.3079 33.5531 31.9325 33.0402 32.5002 32.4705C33.096 31.8726 33.6292 31.2122 34.089 30.5"></svg:path><svg:path d="M35.8027 26.1802C35.9325 25.4732 36.0003 24.7447 36.0003 24.0002C36.0003 23.2558 35.9325 22.5272 35.8027 21.8203"></svg:path><svg:path d="M30.6357 14C31.3079 14.4469 31.9325 14.9598 32.5002 15.5295C33.096 16.1274 33.6292 16.7878 34.089 17.5"></svg:path><svg:path d="M21.6401 12.232C22.4031 12.0798 23.1922 12 23.9999 12C24.8077 12 25.5968 12.0798 26.3598 12.232"></svg:path><svg:path d="M44 24C44 23.325 43.9666 22.6578 43.9012 22C43.834 21.3228 43.733 20.6556 43.5999 20M4 24C4 23.325 4.03344 22.6578 4.09875 22C4.16598 21.3228 4.26699 20.6556 4.40007 20M38.646 37.6198C38.1967 38.1027 37.7238 38.5634 37.2291 39C36.7864 39.3908 36.3262 39.7623 35.8498 40.1132M9.35403 37.6198C9.80332 38.1027 10.2762 38.5634 10.7709 39C11.2136 39.3908 11.6739 39.7623 12.1502 40.1132M15.7124 5.79255C15.0569 6.09142 14.4203 6.42465 13.805 6.78994C13.2345 7.12862 12.6823 7.49486 12.1502 7.88683M32.2876 5.79255C32.9431 6.09142 33.5797 6.42465 34.195 6.78994C34.7655 7.12862 35.3177 7.49486 35.8498 7.88683M26.2465 4.12477C25.5091 4.04233 24.7595 4 24 4C23.2405 4 22.4909 4.04233 21.7535 4.12477M26.2465 43.8752C26.999 43.7911 27.7389 43.6653 28.4638 43.5C29.1569 43.342 29.8364 43.148 30.5 42.92M21.7535 43.8752C21.001 43.7911 20.2611 43.6653 19.5362 43.5C18.8431 43.342 18.1636 43.148 17.5 42.92M8.15495 11.7945C7.77626 12.2854 7.41988 12.7944 7.08732 13.3199C6.78763 13.7935 6.50729 14.2805 6.2474 14.7799M39.8451 11.7945C40.2237 12.2854 40.5801 12.7944 40.9127 13.3199C41.2124 13.7935 41.4927 14.2805 41.7526 14.7799M6.2474 33.2201C5.95677 32.6617 5.69172 32.0878 5.45379 31.5C5.2355 30.9607 5.04005 30.4098 4.86863 29.8483M41.7526 33.2201C42.0432 32.6617 42.3083 32.0878 42.5462 31.5C42.7645 30.9607 42.96 30.4098 43.1314 29.8483"></svg:path></svg:g>`,
})
export class IconParkHaloIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHamburgerIcon],svg[icon-park-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M44 22C44 12.0589 35.0457 4 24 4C12.9543 4 4 12.0589 4 22H44Z" clip-rule="evenodd"></svg:path><svg:rect width="40" height="6" x="4" y="38" fill="#2F88FF"></svg:rect><svg:path d="M4 28L9.45455 32L16.7273 28L24 32L31.2727 28L38.5455 32L44 28"></svg:path></svg:g>`,
})
export class IconParkHamburgerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHamburgerButtonIcon],svg[icon-park-hamburger-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M7.94971 11.9497H39.9497"></svg:path><svg:path d="M7.94971 23.9497H39.9497"></svg:path><svg:path d="M7.94971 35.9497H39.9497"></svg:path></svg:g>`,
})
export class IconParkHamburgerButtonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHamburgerOneIcon],svg[icon-park-hamburger-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 22V21C40 12.1634 32.8366 5 24 5C15.1634 5 8 12.1634 8 21V22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 34C8 34 6 39 10 41C14 43 34 43 38 41C42 39 40 34 40 34"></svg:path><svg:rect width="38" height="14" x="5" y="21" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="7"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 29L12.5917 28.2042C14.1235 27.4382 15.9098 27.3639 17.5 28L17.9239 28.1695C19.2444 28.6978 20.7279 28.6361 22 28V28C23.2721 27.3639 24.7556 27.3022 26.0761 27.8305L27.0353 28.2141C28.285 28.714 29.6888 28.6556 30.8927 28.0537V28.0537C32.2193 27.3904 33.7807 27.3904 35.1073 28.0537L37 29"></svg:path><svg:circle cx="17" cy="15.05" r="2.5" fill="#000"></svg:circle><svg:circle cx="23.75" cy="12.3" r="2.5" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkHamburgerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHammerAndAnvilIcon],svg[icon-park-hammer-and-anvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 14C6 4 14 4 14 4V24H6C6 24 6 24 6 14Z"></svg:path><svg:rect width="28" height="6" x="14" y="10"></svg:rect><svg:path d="M6 30H42C42 30 42 38 36 38C30 38 29 38 29 38L31 44H13L15 38H6V30Z"></svg:path></svg:g>`,
})
export class IconParkHammerAndAnvilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandCreamIcon],svg[icon-park-hand-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M19 17C16.2688 18.1375 16.5121 21.5781 16.9998 23H30.9998C34.9016 17.3126 26.7838 11.1512 26.7838 13.521C26.7838 15.8907 22.414 15.5781 19 17Z"></svg:path><svg:rect width="22" height="8" x="13" y="23"></svg:rect></svg:g>`,
})
export class IconParkHandCreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandDownIcon],svg[icon-park-hand-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M7.05322 10.0005L29.0532 10.0005V4.00049L7.05322 4.00049V10.0005Z"></svg:path><svg:path d="M29.0531 10.0005C35.5721 17.1234 39.3127 21.2513 40.2749 22.3843C41.7183 24.0837 41.1122 26.0045 37.5001 26.0045C33.8879 26.0045 31.8047 20.7191 29.0531 20.7191C29.0367 20.7157 29.0356 27.4748 29.0498 40.9964C29.0515 42.6538 27.7094 43.9987 26.0521 44.0005L26.0489 44.0005C24.3898 44.0005 23.0447 42.6555 23.0447 40.9963V32.9869C15.072 31.7781 10.7374 31.1111 10.0411 30.9861C8.99656 30.7986 7.05308 29.8015 7.05308 26.9325C7.05308 25.0198 7.05308 20.0424 7.05308 10.0005L29.0531 10.0005Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkHandDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandDragIcon],svg[icon-park-hand-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M9.58303 27.1824C7.86719 28.3542 7.00928 30.2934 7.00928 33.0002C7.00928 37.0602 12.0001 44.0002 16.5006 44.0002C21.001 44.0002 23.6111 44.0002 28.016 44.0002C32.421 44.0002 35.0965 40.1495 35.0965 37.0602C35.0965 32.9069 35.0965 28.7536 35.0965 24.6002C35.0965 22.8072 33.6456 21.3522 31.8525 21.3472C30.0659 21.3422 28.6135 22.7865 28.6085 24.5731C28.6085 24.5761 28.6085 24.5791 28.6085 24.5821V24.6836"></svg:path><svg:path d="M10.9814 29.4453V7.66246C10.9814 5.88568 12.4218 4.44531 14.1986 4.44531C15.9754 4.44531 17.4157 5.88568 17.4157 7.66246V23.6479"></svg:path><svg:path stroke-linejoin="round" d="M17.4155 24.0001V19.8076C17.4155 18.2589 18.671 17.0034 20.2197 17.0034C21.7684 17.0034 23.0239 18.2589 23.0239 19.8076V24.4272"></svg:path><svg:path stroke-linejoin="round" d="M23 24.6583V21.8076C23 20.2589 24.2555 19.0034 25.8042 19.0034C27.3529 19.0034 28.6084 20.2589 28.6084 21.8076V25.0034"></svg:path><svg:path d="M11 8H41"></svg:path><svg:path stroke-linejoin="round" d="M36 12.5L37.6667 11L41 8L37.6667 5L36 3.5"></svg:path></svg:g>`,
})
export class IconParkHandDragIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandLeftIcon],svg[icon-park-hand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 41V19H38V41H44Z"></svg:path><svg:path d="M38 19.0002C30.8948 12.4304 26.7757 8.66359 25.6428 7.69983C23.9433 6.25419 22.0226 6.86123 22.0226 10.479C22.0226 14.0968 27.2864 16.2443 27.2864 19.0002C27.2898 19.0166 20.529 19.0177 7.00404 19.0035C5.3467 19.0017 4.00175 20.3438 4 22.0012C4 22.0022 4 22.0033 4 22.0043C4 23.6635 5.34501 25.0085 7.00417 25.0085H14.0165C15.2234 32.9771 15.8893 37.3101 16.0144 38.0075C16.2019 39.0536 17.199 41.0002 20.068 41.0002C21.9807 41.0002 27.9581 41.0002 38 41.0002V19.0002Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkHandLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandPaintedPlateIcon],svg[icon-park-hand-painted-plate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M18 10H42C43.1046 10 44 10.8954 44 12V38C44 39.1046 43.1046 40 42 40H18"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 12C4 10.8954 4.89543 10 6 10H18V40H6C4.89543 40 4 39.1046 4 38V12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 17V21"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 16L25 33"></svg:path><svg:rect width="4" height="4" x="9" y="25" fill="#fff" rx="2"></svg:rect><svg:rect width="4" height="4" x="9" y="31" fill="#fff" rx="2"></svg:rect></svg:g>`,
})
export class IconParkHandPaintedPlateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandRightIcon],svg[icon-park-hand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10.0264 40.9736L10.0264 18.9736H4.02637L4.02637 40.9736H10.0264Z"></svg:path><svg:path d="M10.0264 18.9738C17.1493 12.4548 21.2772 8.71418 22.4102 7.75192C24.1096 6.30854 26.0304 6.91463 26.0304 10.5268C26.0304 14.139 20.7449 16.2222 20.7449 18.9738C20.7415 18.9902 27.5007 18.9913 41.0223 18.9771C42.6797 18.9753 44.0246 20.3174 44.0264 21.9748L44.0264 21.9779C44.0264 23.6371 42.6814 24.9821 41.0222 24.9821H33.0128C31.8039 32.9549 31.137 37.2894 31.012 37.9858C30.8244 39.0303 29.8274 40.9738 26.9583 40.9738C25.0456 40.9738 20.0683 40.9738 10.0264 40.9738V18.9738Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkHandRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandUpIcon],svg[icon-park-hand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M41 38H19V44H41V38Z"></svg:path><svg:path d="M19.0001 38C12.4812 30.8771 8.74054 26.7492 7.77829 25.6162C6.33491 23.9168 6.941 21.996 10.5532 21.996C14.1653 21.996 16.2485 27.2814 19.0001 27.2814C19.0165 27.2848 19.0176 20.5257 19.0034 7.00404C19.0017 5.3467 20.3438 4.00174 22.0012 4L22.0043 4C23.6635 4 25.0085 5.34501 25.0085 7.00417V15.0136C32.9813 16.2224 37.3158 16.8893 38.0122 17.0144C39.0567 17.2019 41.0001 18.199 41.0001 21.068C41.0001 22.9807 41.0001 27.9581 41.0001 38H19.0001Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkHandUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandbagIcon],svg[icon-park-handbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 14C14 10.6863 16.6863 8 20 8H29C32.3137 8 35 10.6863 35 14V16H14V14Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 25L23.5149 29.8787C23.8334 29.9584 24.1666 29.9584 24.4851 29.8787L44 25V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V25Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 27V18C44 16.8954 43.1046 16 42 16H6C4.89543 16 4 16.8954 4 18V27"></svg:path><svg:path fill="#000" d="M26.5 23C26.5 24.3807 25.3807 25.5 24 25.5C22.6193 25.5 21.5 24.3807 21.5 23C21.5 21.6193 22.6193 20.5 24 20.5C25.3807 20.5 26.5 21.6193 26.5 23Z"></svg:path></svg:g>`,
})
export class IconParkHandbagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandheldIcon],svg[icon-park-handheld-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M42 18V44H6V18"></svg:path><svg:path fill="#2F88FF" d="M42 4H6V18H42V4Z"></svg:path><svg:path stroke-linecap="round" d="M16 27V35"></svg:path><svg:path stroke-linecap="round" d="M12 31H20"></svg:path><svg:path fill="#2F88FF" d="M32 35C34.2091 35 36 33.2091 36 31C36 28.7909 34.2091 27 32 27C29.7909 27 28 28.7909 28 31C28 33.2091 29.7909 35 32 35Z"></svg:path></svg:g>`,
})
export class IconParkHandheldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleAIcon],svg[icon-park-handle-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M24 11L14 33"></svg:path><svg:path stroke="#fff" d="M18 26L30 26"></svg:path><svg:path stroke="#fff" d="M24 11L34 33"></svg:path></svg:g>`,
})
export class IconParkHandleAIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleBIcon],svg[icon-park-handle-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M24.7918 23C27.6682 23 30 20.7614 30 18C30 15.2386 27.6682 13 24.7918 13H18V23H24.7918Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M26.831 35C29.6857 35 32 32.3137 32 29C32 25.6863 29.6857 23 26.831 23H18V35H26.831Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkHandleBIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleCIcon],svg[icon-park-handle-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M32 17.6183C31.1017 15.7887 28.4068 12.5867 23.0171 13.0442C17.6273 13.5017 13.5842 18.5332 14.0342 24.937C14.4842 31.3407 19.4239 35 23.9154 35C29.3051 35 32 30.6089 32 30.6089"></svg:path></svg:g>`,
})
export class IconParkHandleCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleDownIcon],svg[icon-park-handle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M34 20L24 30L14 20H34Z"></svg:path></svg:g>`,
})
export class IconParkHandleDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleLeftIcon],svg[icon-park-handle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M28 34L18 24L28 14V34Z"></svg:path></svg:g>`,
})
export class IconParkHandleLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleRightIcon],svg[icon-park-handle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M20 14L30 24L20 34V14Z"></svg:path></svg:g>`,
})
export class IconParkHandleRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleRoundIcon],svg[icon-park-handle-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:circle cx="24" cy="24" r="12" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkHandleRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleSquareIcon],svg[icon-park-handle-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:rect width="20" height="20" x="14" y="14" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkHandleSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleTriangleIcon],svg[icon-park-handle-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M12 31L24 11L36 31H12Z"></svg:path></svg:g>`,
})
export class IconParkHandleTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleUpIcon],svg[icon-park-handle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M14 28L24 18L34 28H14Z"></svg:path></svg:g>`,
})
export class IconParkHandleUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleXIcon],svg[icon-park-handle-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M33 15L15 33"></svg:path><svg:path stroke="#fff" d="M15 15L33 33"></svg:path></svg:g>`,
})
export class IconParkHandleXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleYIcon],svg[icon-park-handle-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M15 15L24 29L33 15"></svg:path><svg:path stroke="#fff" d="M24 28V37"></svg:path></svg:g>`,
})
export class IconParkHandleYIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandleZIcon],svg[icon-park-handle-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M14 16H34L14 32H34"></svg:path></svg:g>`,
})
export class IconParkHandleZIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandsIcon],svg[icon-park-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="13" r="9" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:path d="M4.5 43.9994C4.5 38 11.5 27.9994 24 27.9994C24 27.9994 24 27.9994 24 27.9994C24 27.9994 26.7588 27.9994 29.7821 29.0906C32.7438 30.1596 36.5 31.1481 36.5 27.9994V27.9994V7.74952C36.5 5.67845 38.1789 3.99951 40.25 3.99951V3.99951C42.3211 3.99951 44 5.67844 44 7.74951V43.9994"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 44L46 44"></svg:path></svg:g>`,
})
export class IconParkHandsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandwashingIcon],svg[icon-park-handwashing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="7" height="20" x="4" y="24"></svg:rect><svg:path fill="#2F88FF" d="M32.0003 16C30.5006 12.5 36.0003 6 36.0003 6C36.0003 6 41.5001 12.5 40.0003 16C38.5005 19.5 33.5 19.5 32.0003 16Z"></svg:path><svg:path fill="#2F88FF" d="M31 42.5001C22 42.5001 15 40.0001 11 40.0001V30.0001C18 30.0001 17.5 27.5001 22 26.0001C26.5 24.5001 30 26.0001 29.5 29.0001C29 32.0001 24 35.0001 24 35.0001C32 35.0001 32 33.0001 36 30.0001C40 27.0001 44 28.0001 44 31.0001C44 34.0001 40 42.5001 31 42.5001Z"></svg:path></svg:g>`,
})
export class IconParkHandwashingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHandwashingFluidIcon],svg[icon-park-handwashing-fluid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 4V11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 17V11H19V17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 4H19.8C17.1419 4 15 5.2 15 8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 26.9775V26C38 21.0294 33.9706 17 29 17H19C14.0294 17 10 21.0294 10 26V35C10 39.9706 14.0294 44 19 44H24"></svg:path><svg:path fill="#2F88FF" d="M40 39.7692C40 42.1058 37.9853 44 35.5 44C33.0147 44 31 42.1058 31 39.7692C31 37.4326 33.9397 33 35.5 33C37.0603 33 40 37.4326 40 39.7692Z"></svg:path></svg:g>`,
})
export class IconParkHandwashingFluidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHanfuChineseStyleIcon],svg[icon-park-hanfu-chinese-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 9L18 4H30L39 9L43 25L35 29V44H13V29L5 25L9 9Z"></svg:path><svg:path d="M18 4L24 14.5"></svg:path><svg:path d="M30 4L24 14.5L13 29"></svg:path></svg:g>`,
})
export class IconParkHanfuChineseStyleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHangerIcon],svg[icon-park-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20.7301 27.1255C22.7185 25.833 25.2815 25.833 27.2699 27.1255L42.8202 37.2331C43.556 37.7114 44 38.5295 44 39.4071C44 40.8391 42.8391 42 41.4071 42H6.59288C5.16087 42 4 40.8391 4 39.4071C4 38.5295 4.44395 37.7114 5.17979 37.2331L20.7301 27.1255Z" clip-rule="evenodd"></svg:path><svg:path d="M24 25C24 25 30 16.3137 30 13C30 9.68629 27.3137 7 24 7C20.6863 7 18 9.68629 18 13"></svg:path></svg:g>`,
})
export class IconParkHangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHangerOneIcon],svg[icon-park-hanger-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4L24 44"></svg:path><svg:path d="M32 4L24 10"></svg:path><svg:path d="M16 9L24 15"></svg:path><svg:path d="M16 20L24 26"></svg:path><svg:path d="M32 15L24 21"></svg:path><svg:path d="M30 44H18"></svg:path></svg:g>`,
})
export class IconParkHangerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHangerTwoIcon],svg[icon-park-hanger-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 32H40.9098C42.6165 32 44 30.6165 44 28.9098C44 27.7394 43.3387 26.6693 42.2918 26.1459L24 17L5.7082 26.1459C4.6613 26.6693 4 27.7394 4 28.9098C4 30.6165 5.38352 32 7.09017 32H11"></svg:path><svg:path fill="#2F88FF" d="M11 30H37V32V44H11V32V30Z"></svg:path><svg:path d="M24 17C24 17 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8"></svg:path></svg:g>`,
})
export class IconParkHangerTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHardDiskIcon],svg[icon-park-hard-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M44 29H4V42H44V29Z"></svg:path><svg:path fill="#fff" d="M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"></svg:path></svg:g>`,
})
export class IconParkHardDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHardDiskOneIcon],svg[icon-park-hard-disk-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M32 6H16V16H32V6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 36H31"></svg:path></svg:g>`,
})
export class IconParkHardDiskOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHarmIcon],svg[icon-park-harm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 9.25564L24.0086 4L42 9.25564V20.0337C42 31.3622 34.7502 41.4194 24.0026 45.0005C13.2521 41.4195 6 31.36 6 20.0287V9.25564Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29.5 18.4081L18.1863 29.7218"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.1863 18.4081L29.5 29.7218"></svg:path></svg:g>`,
})
export class IconParkHarmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHashtagKeyIcon],svg[icon-park-hashtag-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M19 16V32"></svg:path><svg:path stroke="#fff" d="M29 16V32"></svg:path><svg:path stroke="#fff" d="M16 19H32"></svg:path><svg:path stroke="#fff" d="M16 29H32"></svg:path></svg:g>`,
})
export class IconParkHashtagKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHatIcon],svg[icon-park-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 16C9 11.5817 12.5817 8 17 8H31C35.4183 8 39 11.5817 39 16V32H9V16Z"></svg:path><svg:rect width="40" height="8" x="4" y="32" fill="#2F88FF" rx="2"></svg:rect><svg:path d="M9 22L17 22"></svg:path><svg:path d="M31 22L39 22"></svg:path></svg:g>`,
})
export class IconParkHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHddIcon],svg[icon-park-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="30" height="40" x="9" y="4" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="32" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="16" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="32" cy="38" r="2" fill="#fff"></svg:circle><svg:circle cx="16" cy="38" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30C28.4183 30 32 26.4183 32 22C32 17.5817 28.4183 14 24 14C19.5817 14 16 17.5817 16 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 22L18 28"></svg:path></svg:g>`,
})
export class IconParkHddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHdmiCableIcon],svg[icon-park-hdmi-cable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 16C4 14.8954 4.89543 14 6 14H42C43.1046 14 44 14.8954 44 16V24.6459C44 25.4637 43.4982 26.2019 42.8208 26.6601C41.6014 27.4852 39.7937 29.1491 39.1982 32.0119C38.9732 33.0933 38.1046 34 37 34H11C9.89543 34 9.02678 33.0933 8.80182 32.0119C8.20628 29.1491 6.39864 27.4852 5.17918 26.6601C4.50184 26.2019 4 25.4637 4 24.6459V16Z"></svg:path><svg:path stroke="#fff" d="M14 28H34"></svg:path><svg:path stroke="#fff" d="M14 28V25"></svg:path><svg:path stroke="#fff" d="M21 28V25"></svg:path><svg:path stroke="#fff" d="M27 28V25"></svg:path><svg:path stroke="#fff" d="M34 28V25"></svg:path><svg:path stroke="#fff" d="M11 20H13"></svg:path><svg:path stroke="#fff" d="M19 20H21"></svg:path><svg:path stroke="#fff" d="M27 20H29"></svg:path><svg:path stroke="#fff" d="M35 20H37"></svg:path></svg:g>`,
})
export class IconParkHdmiCableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHdmiConnectorIcon],svg[icon-park-hdmi-connector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 43C29 40.2386 26.7614 38 24 38C21.2386 38 19 40.2386 19 43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.5 42.1091C18.0797 43.3221 20.9607 44 24 44C27.0393 44 29.9203 43.3221 32.5 42.1091"></svg:path><svg:circle cx="15" cy="15" r="3" fill="#fff"></svg:circle><svg:circle cx="11" cy="23" r="3" fill="#fff"></svg:circle><svg:circle cx="24" cy="11" r="3" fill="#fff"></svg:circle><svg:circle cx="33" cy="15" r="3" fill="#fff"></svg:circle><svg:circle cx="37" cy="23" r="3" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkHdmiConnectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeadphoneSoundIcon],svg[icon-park-headphone-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M4 28C4 26.8954 4.89543 26 6 26H10V38H6C4.89543 38 4 37.1046 4 36V28Z"></svg:path><svg:path fill="#2F88FF" d="M38 26H42C43.1046 26 44 26.8954 44 28V36C44 37.1046 43.1046 38 42 38H38V26Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 36V24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24V36M10 26H6C4.89543 26 4 26.8954 4 28V36C4 37.1046 4.89543 38 6 38H10V26ZM38 26H42C43.1046 26 44 26.8954 44 28V36C44 37.1046 43.1046 38 42 38H38V26Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32H20L22 26L26 38L28 32H32"></svg:path></svg:g>`,
})
export class IconParkHeadphoneSoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeadsetIcon],svg[icon-park-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 30V24.4615C42 14.2655 33.9411 6 24 6C14.0589 6 6 14.2655 6 24.4615V30"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M34 32C34 29.7909 35.7909 28 38 28H42V42H38C35.7909 42 34 40.2091 34 38V32Z"></svg:path><svg:path fill="#000" d="M42 32H44C45.1046 32 46 32.8954 46 34V36C46 37.1046 45.1046 38 44 38H42V32Z"></svg:path><svg:path fill="#000" d="M6 32H4C2.89543 32 2 32.8954 2 34V36C2 37.1046 2.89543 38 4 38H6V32Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M6 28H10C12.2091 28 14 29.7909 14 32V38C14 40.2091 12.2091 42 10 42H6V28Z"></svg:path></svg:g>`,
})
export class IconParkHeadsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeadsetOneIcon],svg[icon-park-headset-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M36 32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M36 32V32C40.4183 32 44 28.4183 44 24C44 19.5817 40.4183 16 36 16"></svg:path><svg:path fill="#2F88FF" d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M12 16C7.58172 16 4 19.5817 4 24C4 28.4183 7.58172 32 12 32V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 32V31.5V29V24V16C12 9.37258 17.3726 4 24 4C30.6274 4 36 9.37258 36 16V32C36 38.6274 30.6274 44 24 44"></svg:path></svg:g>`,
})
export class IconParkHeadsetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeadsetTwoIcon],svg[icon-park-headset-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M21 16H15V25C15 26.6569 16.3431 28 18 28C19.6569 28 21 26.6569 21 25V16Z"></svg:path><svg:path d="M18 28V38L12 38"></svg:path><svg:path d="M21 16V4H10.5C8 4 5 6 5 10C5 14 8.5 16 11 16H21Z"></svg:path><svg:path d="M27 22V10H37.5C40 10 43 12 43 16C43 20 39.5 22 37 22H27Z"></svg:path><svg:path fill="#2F88FF" d="M33 22H27V31C27 32.6569 28.3431 34 30 34C31.6569 34 33 32.6569 33 31V22Z"></svg:path><svg:path d="M30 34L30 44L36 44"></svg:path></svg:g>`,
})
export class IconParkHeadsetTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeadwearIcon],svg[icon-park-headwear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12.4167 43C10.095 40.0682 8 35.7788 8 31C8 22.1634 15.1634 15 24 15C32.8366 15 40 22.1634 40 31C40 35.7788 37.905 40.0682 35.5833 43"></svg:path><svg:path fill="#2F88FF" d="M34 13.5L43 5L40 17L35 18L34 13.5Z"></svg:path><svg:path fill="#2F88FF" d="M14 13.5L5 5L8 17L13 18L14 13.5Z"></svg:path></svg:g>`,
})
export class IconParkHeadwearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHealthIcon],svg[icon-park-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27.3 12C25.4775 12 24 13.4347 24 15.2045C24 18.4091 27.9 21.3223 30 22C32.1 21.3223 36 18.4091 36 15.2045C36 13.4347 34.5225 12 32.7 12C31.5839 12 30.5972 12.538 30 13.3616C29.4028 12.538 28.4161 12 27.3 12Z"></svg:path></svg:g>`,
})
export class IconParkHealthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHealthProductsIcon],svg[icon-park-health-products-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M33 12H15L10 17.8428V38.0919L15 44H33L38 38.0919V17.8428L33 12Z"></svg:path><svg:path stroke="#fff" d="M19 20H23.5455H29"></svg:path><svg:path stroke="#000" d="M33 12V7C33 5.34315 31.6569 4 30 4H18C16.3431 4 15 5.34315 15 7V12"></svg:path><svg:circle cx="24" cy="32" r="5" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkHealthProductsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHealthyRecognitionIcon],svg[icon-park-healthy-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 33V39C6 40.6569 7.34315 42 9 42H15"></svg:path><svg:path d="M33 42H39C40.6569 42 42 40.6569 42 39V33"></svg:path><svg:path d="M42 15V9C42 7.34315 40.6569 6 39 6H33"></svg:path><svg:path d="M6 15V9C6 7.34315 7.34315 6 9 6H15"></svg:path><svg:path fill="#2F88FF" d="M34 24.0001L24 34.0001C24 34.0001 15.0002 25.0001 14 24.0001C12.9998 23.0001 12.5 21.0001 14 19.0001C15.5 17.0001 18.5 17.0001 20 18.0001C21.5001 19.0001 22.0001 20.0001 24 20.0001C26 20.0001 26.5001 19.0001 28 18.0001C29.5 17.0001 32.5003 17.0001 34.0003 19.0001C35.5003 21.0001 35 23.0001 34 24.0001Z"></svg:path></svg:g>`,
})
export class IconParkHealthyRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeartIcon],svg[icon-park-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14.5397 20.0187C12.8522 17.9435 11.2675 17.498 9.78564 18.6822C7.5629 20.4584 6.92453 26.6497 8.71324 32.1087C10.502 37.5678 13.9801 45.0018 21.0016 45.0018C28.0231 45.0018 29.684 37.5223 32.5485 33.0002C35.413 28.4781 36.9285 24.1153 34.1208 18.6822"></svg:path><svg:path stroke-linecap="round" d="M11 18.037C9.29707 15.4429 7.96374 13.4307 6.99996 12.0003C5.5543 9.85474 9.25107 7.08175 11 8.96818C12.1659 10.2258 13.7148 12.0781 15.6466 14.5251"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.0236 25.6397C14.5391 19.576 14.9333 15.6277 16.2062 13.7948C18.1155 11.0456 21.6631 10.0032 25.0035 10.0032C26.9924 10.0032 28.8087 10.8503 30.4525 12.5445"></svg:path><svg:path d="M41.0003 12.6129C41.5858 14.6493 40.6294 16.5098 37.6844 16.9311C34.7393 17.3525 32.5313 18.8334 30.9388 20.0792C29.3463 21.3249 26.4983 25.1047 25.9361 27.0024C25.3738 28.9001 22.1602 27.1548 21.2971 26.3972C20.434 25.6395 19.5855 23.9807 21.2971 22.2458C23.0086 20.5109 22.6383 20.1647 22.6383 18.4053C22.6383 16.646 32.0003 10.8264 37.2729 10.2942C38.4449 10.2258 40.4147 10.5765 41.0003 12.6129Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M23.0078 4.00024V9.26294"></svg:path><svg:path stroke-linecap="round" d="M20.3066 10.7179C17.2888 6.92544 14.8555 4.80879 13.0068 4.36792"></svg:path><svg:path stroke-linecap="round" d="M17.0039 7.02904L17.9944 2.96167"></svg:path><svg:path stroke-linecap="round" d="M35.6128 10.7175C35.2905 11.822 35.2905 12.8576 35.6128 13.8242C35.935 14.7909 36.6255 15.8265 37.6842 16.931"></svg:path></svg:g>`,
})
export class IconParkHeartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeartBallonIcon],svg[icon-park-heart-ballon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M17.3333 4C13.3333 4 12 7.15642 12 11.05C12 18.1 19.8 24.5091 24 26C28.2 24.5091 36 18.1 36 11.05C36 7.15642 34.3117 4 30.6667 4C28.4345 4 25.1944 7.0771 24 8.88889C22.8056 7.0771 19.5655 4 17.3333 4Z"></svg:path><svg:path d="M24 26C22 27.0909 19 29.5 19 33C19 36.5 29 35.5 29 39C29 42.5 18 44 18 44"></svg:path></svg:g>`,
})
export class IconParkHeartBallonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeartRateIcon],svg[icon-park-heart-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31.8785 37C29.0529 39.0738 26.2237 40.5872 24 41.3262C17 39 4 29 4 18C4 11.9249 8.92487 7 15 7C18.7203 7 22.0093 8.8469 24 11.6738C25.9907 8.8469 29.2797 7 33 7C39.0751 7 44 11.9249 44 18C44 19.7465 43.6723 21.4677 43.0929 23.1371"></svg:path><svg:path d="M27 29H31L34 25L37 33L39.9625 29H44"></svg:path></svg:g>`,
})
export class IconParkHeartRateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeartbeatIcon],svg[icon-park-heartbeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke-miterlimit="2" d="M11 32L18 23L24 32L30 23L35 31H44"></svg:path><svg:path d="M44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C25.1936 41.9295 26.5616 41.3098 28.0099 40.5"></svg:path></svg:g>`,
})
export class IconParkHeartbeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeaterResistorIcon],svg[icon-park-heater-resistor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="12" x="9.858" y="29.657" fill="#2F88FF" stroke="#000" rx="2" transform="rotate(-45 9.858 29.657)"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M7.0293 40.9707L14.1004 33.8996"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33.9014 14.1006L40.9724 7.02952"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.8076 24.707L23.2929 33.1923"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19.7578 19.7573L28.2431 28.2426"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.707 14.8076L33.1923 23.2929"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12.6865 26.8286L26.8287 12.6865"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21.1719 35.314L35.314 21.1718"></svg:path></svg:g>`,
})
export class IconParkHeaterResistorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeavyMetalIcon],svg[icon-park-heavy-metal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M22.2187 7.37842L33.8868 16.6216L36.1778 23.9998L25.2625 26.0852L12.5889 14.5312L15.281 9.00148L22.2187 7.37842Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M15.2808 9.00146L26.4862 18.6016"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25.2627 26.0852L26.4866 18.1324L33.887 16.6216"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24.993 31.0228L27.2792 38.1032L15.601 40.3785L4 29.014L6.57052 22.6253L12.0285 21.3535"></svg:path><svg:path stroke-linecap="round" d="M6.57031 22.625L17.2837 32.7577"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.6011 39.8648L17.4865 32.1324L24.9908 31.0435"></svg:path><svg:path stroke-linejoin="round" d="M34.8868 29.6077L34 36.7999L43.236 34.9985L41.2813 28.1875L34.8868 29.6077Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkHeavyMetalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeavyRainIcon],svg[icon-park-heavy-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33"></svg:path><svg:path d="M16 28V38"></svg:path><svg:path d="M24 32V42"></svg:path><svg:path d="M32 28V38"></svg:path></svg:g>`,
})
export class IconParkHeavyRainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHeavyWindIcon],svg[icon-park-heavy-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.1561 41.9337 31.3074 38.9294 32.8182C38.6792 32.944 38.4007 33 38.1206 33H15"></svg:path><svg:path d="M15 33H12C9.79086 33 8 34.7909 8 37V37C8 39.2091 9.79086 41 12 41H15"></svg:path><svg:path d="M22 18H19C16.7909 18 15 19.7909 15 22V22C15 24.2091 16.7909 26 19 26H22"></svg:path><svg:path d="M19 26H32"></svg:path></svg:g>`,
})
export class IconParkHeavyWindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHelmetIcon],svg[icon-park-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M42.34 32C43.41 29.55 44 26.84 44 24C44 12.95 35.05 4 24 4C12.95 4 4 12.95 4 24H24L24.01 32C24.01 35.87 27.14 39 31.01 39C34.88 39 38.01 35.87 38.01 32H42.34Z"></svg:path><svg:path fill="#000" d="M31 34C32.1 34 33 33.1 33 32C33 30.9 32.1 30 31 30C29.9 30 29 30.9 29 32C29 33.1 29.9 34 31 34Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M24 32L6 36C8.23 39.17 10.45 42.37 14 44L26 37"></svg:path></svg:g>`,
})
export class IconParkHelmetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHelmetOneIcon],svg[icon-park-helmet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 11C14.6112 11 7 18.8147 7 28.4545V35H41V28.4545C41 18.8147 33.3888 11 24 11Z"></svg:path><svg:rect width="40" height="6" x="4" y="35"></svg:rect><svg:rect width="6" height="18" x="21" y="6"></svg:rect></svg:g>`,
})
export class IconParkHelmetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHelpIcon],svg[icon-park-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 28.6248V24.6248C27.3137 24.6248 30 21.9385 30 18.6248C30 15.3111 27.3137 12.6248 24 12.6248C20.6863 12.6248 18 15.3111 18 18.6248"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 37.6248C25.3807 37.6248 26.5 36.5055 26.5 35.1248C26.5 33.7441 25.3807 32.6248 24 32.6248C22.6193 32.6248 21.5 33.7441 21.5 35.1248C21.5 36.5055 22.6193 37.6248 24 37.6248Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkHelpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHelpcenterIcon],svg[icon-park-helpcenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 28.625V24.625C27.3137 24.625 30 21.9387 30 18.625C30 15.3113 27.3137 12.625 24 12.625C20.6863 12.625 18 15.3113 18 18.625"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 37.625C25.3807 37.625 26.5 36.5057 26.5 35.125C26.5 33.7443 25.3807 32.625 24 32.625C22.6193 32.625 21.5 33.7443 21.5 35.125C21.5 36.5057 22.6193 37.625 24 37.625Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkHelpcenterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHexagonOneIcon],svg[icon-park-hexagon-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M23.0287 43.4604L7.02871 34.5715C6.39378 34.2188 6 33.5495 6 32.8232V15.1768C6 14.4505 6.39378 13.7812 7.02872 13.4285L23.0287 4.5396C23.6328 4.20402 24.3672 4.20402 24.9713 4.5396L40.9713 13.4285C41.6062 13.7812 42 14.4505 42 15.1768V32.8232C42 33.5495 41.6062 34.2188 40.9713 34.5715L24.9713 43.4604C24.3672 43.796 23.6328 43.796 23.0287 43.4604Z"></svg:path>`,
})
export class IconParkHexagonOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHexagonStripIcon],svg[icon-park-hexagon-strip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.0002 4H29.0002V15.3397L38.8207 9.66982L43.8207 18.3301L34.0002 24L43.8207 29.6698L38.8207 38.3301L29.0002 32.6602V44H19.0002V32.6602L9.17969 38.3301L4.17969 29.6698L14.0002 24L4.17969 18.3301L9.17969 9.66982L19.0002 15.3397V4Z"></svg:path>`,
})
export class IconParkHexagonStripIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHexagonalIcon],svg[icon-park-hexagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M7 14L41 14"></svg:path><svg:path d="M7 34L24 4"></svg:path><svg:path d="M41 34L24 4"></svg:path><svg:path d="M41 34L7 34"></svg:path><svg:path d="M41 14L24 44"></svg:path><svg:path d="M7 14L24 44"></svg:path><svg:path d="M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z"></svg:path></svg:g>`,
})
export class IconParkHexagonalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHiIcon],svg[icon-park-hi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 43H17.476C17.3873 43 17.3049 42.9541 17.2581 42.8788L7.86011 27.7273C6.79115 26.0039 7.14475 23.7577 8.69148 22.446C10.6306 20.8016 13.584 21.3036 14.871 23.4963L17.3333 27.6914V8.57577C17.3333 6.71037 19.0177 5.29724 20.8547 5.62142L37.5214 8.56259C38.9549 8.81558 40 10.0612 40 11.5169V17.8148V40C40 41.6569 38.6569 43 37 43Z"></svg:path>`,
})
export class IconParkHiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHighHeeledShoesIcon],svg[icon-park-high-heeled-shoes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M29.1829 20C31.264 15.0536 36.3505 10.6667 39 8C40.1039 8.66667 44 10.6037 44 15C44 19 42.5455 22.1111 41 23L35.0127 27.1911C32.3672 29.0429 30.1414 31.4311 28.48 34.2001L25 40H4V36C6.42869 34.6667 13.8206 30.1333 17 28C24 32 27.5 24 29.1829 20Z"></svg:path><svg:path d="M43 21V40"></svg:path></svg:g>`,
})
export class IconParkHighHeeledShoesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHighLightIcon],svg[icon-park-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 44L6 25H12V17H36V25H42V44H6Z"></svg:path><svg:path stroke-linecap="round" d="M17 17V8L31 4V17"></svg:path></svg:g>`,
})
export class IconParkHighLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHighSpeedRailIcon],svg[icon-park-high-speed-rail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 20V30C9 34.4183 12.5817 38 17 38H31C35.4183 38 39 34.4183 39 30V20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 38V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 38V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 44L28 44"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M9 16.3609C9 13 15 4 24 4C33 4 39 13 39 16.3609C39 19.7218 39 20 39 20H9C9 20 9 19.7218 9 16.3609Z"></svg:path><svg:path fill="#000" stroke="#000" d="M20.5 32C20.5 32.8284 19.8284 33.5 19 33.5C18.1716 33.5 17.5 32.8284 17.5 32C17.5 31.1716 18.1716 30.5 19 30.5C19.8284 30.5 20.5 31.1716 20.5 32Z"></svg:path><svg:path fill="#000" stroke="#000" d="M30.5 32C30.5 32.8284 29.8284 33.5 29 33.5C28.1716 33.5 27.5 32.8284 27.5 32C27.5 31.1716 28.1716 30.5 29 30.5C29.8284 30.5 30.5 31.1716 30.5 32Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 11L26 11"></svg:path></svg:g>`,
})
export class IconParkHighSpeedRailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHippoIcon],svg[icon-park-hippo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="34" height="18" x="7" y="25" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="6"></svg:rect><svg:circle cx="17" cy="34" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="31" cy="34" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M11 19C11 15.6863 13.6863 13 17 13H31C34.3137 13 37 15.6863 37 19V25H11V19Z"></svg:path><svg:circle cx="20" cy="19" r="2" fill="#fff"></svg:circle><svg:circle cx="28" cy="19" r="2" fill="#fff"></svg:circle><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M18 5C19.6569 5 21 6.34315 21 8L21 13L15 13L15 8C15 6.34315 16.3431 5 18 5Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M30 5C31.6569 5 33 6.34315 33 8L33 13L27 13L27 8C27 6.34315 28.3431 5 30 5Z"></svg:path></svg:g>`,
})
export class IconParkHippoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHistogramIcon],svg[icon-park-histogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M4 44H44"></svg:path><svg:path stroke-linejoin="round" d="M7 44C7 44 12.3125 10 24 10C35.6875 10 41 44 41 44"></svg:path><svg:path stroke-linejoin="round" d="M4 4V44"></svg:path></svg:g>`,
})
export class IconParkHistogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHistoryIcon],svg[icon-park-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5.81836 6.72729V14H13.0911"></svg:path><svg:path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C16.598 4 10.1351 8.02111 6.67677 13.9981"></svg:path><svg:path d="M24.005 12L24.0038 24.0088L32.4832 32.4882"></svg:path></svg:g>`,
})
export class IconParkHistoryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHistoryQueryIcon],svg[icon-park-history-query-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 24V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H24"></svg:path><svg:circle cx="32" cy="32" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 36L42 40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 16H34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 24L22 24"></svg:path></svg:g>`,
})
export class IconParkHistoryQueryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHockeyIcon],svg[icon-park-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M36 4L30.23 31.41C30.03 32.34 29.22 33 28.27 33H9C7.34 33 6 34.34 6 36V37.55C6 41.03 8.95 43.78 12.43 43.53L29.49 42.31C32.16 42.12 34.38 40.18 34.93 37.56L42 4H36Z"></svg:path><svg:path d="M15 16C19.4183 16 23 14.6569 23 13C23 11.3431 19.4183 10 15 10C10.5817 10 7 11.3431 7 13C7 14.6569 10.5817 16 15 16Z"></svg:path><svg:path d="M23 13V19C23 20.66 19.42 22 15 22C10.58 22 7 20.66 7 19V13"></svg:path></svg:g>`,
})
export class IconParkHockeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHoldIcon],svg[icon-park-hold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 24L26 26C26 26 41 23 43 23C45 23 45 25 43 27C41 29 34 35 28 35C22 35 18 32 14 32C10 32 4 32 4 32"></svg:path><svg:path d="M4 20C6 18 10 15 14 15C18 15 27.5 19 29 21C30.5 23 26 26 26 26"></svg:path></svg:g>`,
})
export class IconParkHoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHoldInterfaceIcon],svg[icon-park-hold-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 33L26 35C26 35 41 32 43 32C45 32 45 34 43 36C41 38 34 44 28 44C22 44 18 41 14 41C10 41 4 41 4 41"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 29C6 27 10 24 14 24C18 24 27.5 28 29 30C30.5 32 26 35 26 35"></svg:path><svg:rect width="16" height="6" x="26" y="15" fill="#2F88FF" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M26 9L42 9"></svg:path></svg:g>`,
})
export class IconParkHoldInterfaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHoldSeedsIcon],svg[icon-park-hold-seeds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 33L26 35C26 35 41 32 43 32C45 32 45 34 43 36C41 38 34 44 28 44C22 44 18 41 14 41C10 41 4 41 4 41"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 29C6 27 10 24 14 24C18 24 27.5 28 29 30C30.5 32 26 35 26 35"></svg:path><svg:circle cx="34" cy="22" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="22" cy="15" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="34" cy="7" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkHoldSeedsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHoldingHandsIcon],svg[icon-park-holding-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M4.46094 12.8403L22.2354 9.06225C22.7543 8.95197 23.2957 9.05231 23.7405 9.3412L31.8394 14.6007C32.2843 14.8896 32.8257 14.9899 33.3445 14.8797L37.425 14.0123C38.5054 13.7827 39.5674 14.4724 39.7971 15.5528L40.4208 18.4873C40.6505 19.5677 39.9608 20.6297 38.8803 20.8594L31.8655 22.3504C31.3466 22.4607 30.8052 22.3604 30.3604 22.0715L22.2615 16.812C21.8166 16.5231 21.2752 16.4227 20.7564 16.533L17.654 17.1924"></svg:path><svg:path d="M43.5391 33.1592L25.7646 36.9373C25.2457 37.0475 24.7043 36.9472 24.2595 36.6583L16.1606 31.3988C15.7157 31.1099 15.1743 31.0096 14.6555 31.1199L10.575 31.9872C9.49461 32.2168 8.43258 31.5271 8.20292 30.4467L7.57919 27.5123C7.34954 26.4318 8.03923 25.3698 9.11966 25.1401L16.1345 23.6491C16.6534 23.5388 17.1948 23.6391 17.6396 23.928L25.7385 29.1875C26.1834 29.4764 26.7248 29.5768 27.2436 29.4665L30.346 28.8071"></svg:path></svg:g>`,
})
export class IconParkHoldingHandsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHolySwordIcon],svg[icon-park-holy-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M17 13L24 4L31 13L26 39H22L17 13Z"></svg:path><svg:path d="M17 39H31"></svg:path><svg:path d="M24 39V45"></svg:path></svg:g>`,
})
export class IconParkHolySwordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHomeIcon],svg[icon-park-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9 18V42H39V18L24 6L9 18Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M19 29V42H29V29H19Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M9 42H39"></svg:path></svg:g>`,
})
export class IconParkHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHomeTwoIcon],svg[icon-park-home-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 44V20L24 4L4 20L4 44H16V26H32V44H44Z"></svg:path><svg:path stroke-linecap="round" d="M24 44V34"></svg:path></svg:g>`,
})
export class IconParkHomeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHomestayIcon],svg[icon-park-homestay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8.00042 25.9999C10.3186 26.1968 18.0008 27.9999 18.0004 30.9999C18 34 13.8646 32.9889 12.0004 32.9999C10.3989 32.864 5.9996 33 5.99994 36C6.00027 39 13 41 20 42C27 43 38.0001 42.9999 38.0001 42.9999"></svg:path><svg:path d="M8 20L14 14"></svg:path><svg:path d="M28 6L38 6L42 10"></svg:path><svg:path fill="#2F88FF" d="M30 14L36 20H20L14 14H30Z"></svg:path><svg:path d="M42 22V16"></svg:path><svg:path d="M26 30V26"></svg:path><svg:path d="M32 34V26"></svg:path></svg:g>`,
})
export class IconParkHomestayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHoneyIcon],svg[icon-park-honey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M14.6126 4.84251L9.92332 9.53175C8.62842 10.8266 8.62842 12.9261 9.92332 14.221C11.2182 15.5159 13.3177 15.5159 14.6126 14.221L19.3018 9.53175C20.5967 8.23685 20.5967 6.13741 19.3018 4.84251C18.0069 3.54761 15.9074 3.54762 14.6126 4.84251Z"></svg:path><svg:path fill="#2F88FF" d="M24.7734 13.4397L18.521 19.692C17.2261 20.9869 17.2261 23.0863 18.521 24.3812C19.8159 25.6761 21.9154 25.6761 23.2103 24.3812L29.4626 18.1289C30.7575 16.834 30.7575 14.7346 29.4626 13.4397C28.1677 12.1448 26.0683 12.1448 24.7734 13.4397Z"></svg:path><svg:path d="M28.6804 18.9104L42.4504 32.6803C43.4781 33.708 43.2615 35.5909 41.9666 36.8857C40.6717 38.1806 38.7888 38.3973 37.7611 37.3696L23.9912 23.5996"></svg:path><svg:path fill="#2F88FF" d="M22.4284 6.40575L11.4868 17.3473C10.1919 18.6422 10.1919 20.7416 11.4868 22.0365C12.7817 23.3314 14.8812 23.3314 16.1761 22.0365L27.1176 11.0949C28.4125 9.80009 28.4125 7.70065 27.1176 6.40575C25.8227 5.11085 23.7233 5.11085 22.4284 6.40575Z"></svg:path><svg:path stroke-linecap="round" d="M13.8542 23.1421C15.2778 27.5788 15.0407 30.8568 13.1431 32.976C10.2966 36.1547 10.7393 44.1421 17.1702 44.1421C23.6011 44.1421 25.4901 36.1547 20.0423 33.3527"></svg:path></svg:g>`,
})
export class IconParkHoneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHoneyOneIcon],svg[icon-park-honey-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="11" height="5" x="4.929" y="13.224" rx="2" transform="rotate(-46.025 4.929 13.224)"></svg:rect><svg:rect width="11" height="5" x="19.321" y="27.111" rx="2" transform="rotate(-46.025 19.321 27.11)"></svg:rect><svg:rect width="17" height="5" x="6.443" y="18.855" rx="2" transform="rotate(-46.025 6.443 18.855)"></svg:rect><svg:rect width="17" height="5" x="13.641" y="25.798" rx="2" transform="rotate(-46.025 13.64 25.798)"></svg:rect><svg:rect width="25" height="5" x="7.265" y="25.205" rx="2" transform="rotate(-46.025 7.265 25.205)"></svg:rect><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M25.0029 28.4238L29.169 24.106L43.5756 38.0062L39.4095 42.3241L25.0029 28.4238Z"></svg:path><svg:path stroke-linejoin="round" d="M21 40.25C21 42.3211 19.2091 44 17 44C14.7909 44 13 42.3211 13 40.25C13 38.1789 17 34 17 34C17 34 21 38.1789 21 40.25Z"></svg:path></svg:g>`,
})
export class IconParkHoneyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHorizontalSpacingBetweenItemsIcon],svg[icon-park-horizontal-spacing-between-items-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 40H12L12 8H6"></svg:path><svg:path d="M24 34V14"></svg:path><svg:path stroke-linejoin="round" d="M42 40H36V8H42"></svg:path></svg:g>`,
})
export class IconParkHorizontalSpacingBetweenItemsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHorizontalTidyUpIcon],svg[icon-park-horizontal-tidy-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="6" height="32" x="7" y="8"></svg:rect><svg:rect width="6" height="32" x="21" y="8"></svg:rect><svg:rect width="6" height="32" x="35" y="8"></svg:rect></svg:g>`,
})
export class IconParkHorizontalTidyUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHorizontallyCenteredIcon],svg[icon-park-horizontally-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="16" height="16" x="16" y="16" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:path d="M5 40L5 8"></svg:path><svg:path d="M43 40L43 8"></svg:path></svg:g>`,
})
export class IconParkHorizontallyCenteredIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHorseZodiacIcon],svg[icon-park-horse-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M18 4C13 4 4 8 4 18.2979V25"></svg:path><svg:path stroke-linejoin="round" d="M35 30V44"></svg:path><svg:path stroke-linejoin="round" d="M18.0137 22C18.5001 23.5 20.0001 26.5 24.3963 25.7384C26.9798 25.4269 33.0823 26.14 36.0001 31C37.5001 33.5 41.4471 33.4957 44.0001 27.1403"></svg:path><svg:path stroke-linejoin="round" d="M26 16.0003L24 13.5004C24 13.5004 22.3833 11.7447 21 11.0005C19.6167 10.2562 17 9.50025 14 11.0004C12.7027 11.8147 10 13.0003 10 17.9427V44"></svg:path><svg:path d="M27 44V41C27 38.2386 24.7614 36 22 36V36C19.2386 36 17 38.2386 17 41V44"></svg:path></svg:g>`,
})
export class IconParkHorseZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHospitalIcon],svg[icon-park-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M33 5H5V43H33V5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M33 21H43V43H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 21H25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 15V27"></svg:path></svg:g>`,
})
export class IconParkHospitalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHospitalBedIcon],svg[icon-park-hospital-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 17V39"></svg:path><svg:path d="M42 25L42 39"></svg:path><svg:path d="M26 15H38"></svg:path><svg:path d="M11 22H17"></svg:path><svg:path d="M6 28L42 28"></svg:path><svg:path d="M6 34L42 34"></svg:path><svg:path d="M32 9V21"></svg:path></svg:g>`,
})
export class IconParkHospitalBedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHospitalFourIcon],svg[icon-park-hospital-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 8C4 6.89543 4.89543 6 6 6H26C27.1046 6 28 6.89543 28 8V42H6C4.89543 42 4 41.1046 4 40V8Z"></svg:path><svg:path stroke="#fff" d="M21 42V33C21 31.3431 19.6569 30 18 30H14C12.3431 30 11 31.3431 11 33V42"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M28 24H42C43.1046 24 44 24.8954 44 26V40C44 41.1046 43.1046 42 42 42H28V24Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 18H20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 30H38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 36H38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 14V22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 42H25"></svg:path></svg:g>`,
})
export class IconParkHospitalFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHospitalThreeIcon],svg[icon-park-hospital-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M11 26L11 44L37 44L37 26L24 13L11 26Z"></svg:path><svg:path fill="#000" d="M3.58579 21.5858C2.80474 22.3668 2.80474 23.6332 3.58579 24.4142C4.36683 25.1953 5.63316 25.1953 6.41421 24.4142L3.58579 21.5858ZM24 4L25.4142 2.58579C25.0391 2.21071 24.5304 2 24 2C23.4696 2 22.9609 2.21071 22.5858 2.58579L24 4ZM41.5858 24.4142C42.3668 25.1953 43.6332 25.1953 44.4142 24.4142C45.1953 23.6332 45.1953 22.3668 44.4142 21.5858L41.5858 24.4142ZM6.41421 24.4142L25.4142 5.41421L22.5858 2.58579L3.58579 21.5858L6.41421 24.4142ZM22.5858 5.41421L41.5858 24.4142L44.4142 21.5858L25.4142 2.58579L22.5858 5.41421Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 31L29 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 26V36"></svg:path></svg:g>`,
})
export class IconParkHospitalThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHospitalTwoIcon],svg[icon-park-hospital-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M32 11H40L44 21H4L8 11H16"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M8 21H40V43H8V21Z"></svg:path><svg:rect width="16" height="16" x="16" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="8" height="14" x="16" y="29" fill="#2F88FF" stroke="#fff"></svg:rect><svg:rect width="8" height="14" x="24" y="29" fill="#2F88FF" stroke="#fff"></svg:rect><svg:path stroke="#fff" d="M21 13H27"></svg:path><svg:path stroke="#000" d="M36 43H12"></svg:path><svg:path stroke="#fff" d="M24 16L24 10"></svg:path></svg:g>`,
})
export class IconParkHospitalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHotAirBalloonIcon],svg[icon-park-hot-air-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 18.3515C39 27.8545 31 36 24 36C17 36 9 27.8545 9 18.3515C9 10.6537 14.8929 4 24 4C33.1071 4 39 10.6537 39 18.3515Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M25 4C28.7 7.81854 32 14.1197 32 20C32 25.8067 28.62 32.192 25 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23 4C18.6833 8.08726 16 13.7058 16 20C16 26.2153 18.7767 31.924 23 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21.9994 16.0177C21.9994 16.0177 27.0654 17.0354 31 16.0177C34.9346 15 37.9995 13 37.9995 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9.00047 20C9.00047 20 14.0004 22.5 18 23.5C21.9996 24.5 25.9996 24 25.9996 24"></svg:path><svg:path fill="#2F88FF" d="M18 35L19.4 42.0952C19.4 42.0952 22.125 44 24 44C25.875 44 28.6 42.0952 28.6 42.0952L29.9941 35.0297L24 36L18 35Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 35L29.9941 35.0297M29.9941 35.0297L28.6 42.0952C28.6 42.0952 25.875 44 24 44C22.125 44 19.4 42.0952 19.4 42.0952L18 35L24 36L29.9941 35.0297Z"></svg:path></svg:g>`,
})
export class IconParkHotAirBalloonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHotPotIcon],svg[icon-park-hot-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M24 11V4"></svg:path><svg:path stroke="#000" d="M32 11L32 7"></svg:path><svg:path stroke="#000" d="M16 11L16 7"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 17H4C4 22.5856 7.57778 27.5028 13 30.3648C16.1558 32.0305 19.9364 33 24 33C28.0636 33 31.8442 32.0305 35 30.3648C40.4222 27.5028 44 22.5856 44 17Z"></svg:path><svg:path stroke="#000" d="M10.4668 39H37.5332"></svg:path><svg:path stroke="#000" d="M13 30.3647L9 44"></svg:path><svg:path stroke="#000" d="M35 30.3647L39 44"></svg:path><svg:path stroke="#fff" d="M20 25H28"></svg:path></svg:g>`,
})
export class IconParkHotPotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHotPotOneIcon],svg[icon-park-hot-pot-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M24 36C36 36 41 27.9411 41 18H7C7 27.9411 12 36 24 36Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M17 35L14 44H34L31 35"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M29 18L27.8889 4L20.1111 4L19 18"></svg:path><svg:path stroke="#fff" d="M15 25C15 25 15.0703 26.0703 16 27C16.9297 27.9297 18 28 18 28"></svg:path></svg:g>`,
})
export class IconParkHotPotOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHotelIcon],svg[icon-park-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 4H44"></svg:path><svg:rect width="32" height="40" x="8" y="4" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 32H28V44H20V32Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 12L17 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 18L17 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23 12L25 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23 18L25 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 12L33 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18L33 18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 32H30C30.5523 32 31.0098 31.548 30.9044 31.0058C30.3517 28.1653 27.4709 26 24 26C20.5291 26 17.6483 28.1653 17.0956 31.0058C16.9902 31.548 17.4477 32 18 32H20"></svg:path></svg:g>`,
})
export class IconParkHotelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHotelDoNotCleanIcon],svg[icon-park-hotel-do-not-clean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M13 27C13 27 33 27 33 15V44H13V27Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 15V14C33 8.47715 28.5228 4 23 4C17.4772 4 13 8.47715 13 14M33 15C33 27 13 27 13 27V44H33V15Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 32L26 38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 32L20 38"></svg:path></svg:g>`,
})
export class IconParkHotelDoNotCleanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHotelPleaseCleanIcon],svg[icon-park-hotel-please-clean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M13 27C13 27 33 27 33 15V44H13V27Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 15V14C33 8.47715 28.5228 4 23 4C17.4772 4 13 8.47715 13 14M33 15C33 27 13 27 13 27V44H33V15Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 34L22 37L27 32"></svg:path></svg:g>`,
})
export class IconParkHotelPleaseCleanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHourglassIcon],svg[icon-park-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 4H40"></svg:path><svg:path d="M8 44H40"></svg:path><svg:path d="M12 4V16L21 26"></svg:path><svg:path d="M36 44V29.5L27 21"></svg:path><svg:path d="M12 44V30L18.5 23.5"></svg:path><svg:path d="M36 4V16L29.5 23.5"></svg:path><svg:path d="M18 33H19"></svg:path><svg:path d="M29.1465 32.6465L29.8536 33.3536"></svg:path><svg:path d="M24 38H25"></svg:path></svg:g>`,
})
export class IconParkHourglassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHourglassFullIcon],svg[icon-park-hourglass-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M7 4H41"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 44H41"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 15H27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 38H29"></svg:path></svg:g>`,
})
export class IconParkHourglassFullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHourglassNullIcon],svg[icon-park-hourglass-null-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M7 4H41"></svg:path><svg:path stroke-linecap="round" d="M7 44H41"></svg:path><svg:path fill="#2F88FF" d="M11 44C13.6667 30.6611 18 23.9944 24 24C30 24.0056 34.3333 30.6722 37 44H11Z"></svg:path><svg:path fill="#2F88FF" d="M37 4C34.3333 17.3389 30 24.0056 24 24C18 23.9944 13.6667 17.3278 11 4H37Z"></svg:path></svg:g>`,
})
export class IconParkHourglassNullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHtmlFiveIcon],svg[icon-park-html-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M37.8037 5H10.1963C9.01796 5 8.09502 6.01352 8.205 7.18668L10.8925 35.8534C10.959 36.5632 11.3984 37.1839 12.0457 37.4826L23.1619 42.6132C23.6937 42.8586 24.3063 42.8586 24.8381 42.6132L35.9543 37.4826C36.6016 37.1839 37.041 36.5632 37.1075 35.8534L39.795 7.18668C39.905 6.01352 38.982 5 37.8037 5Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 12H16L17 21H31L30 32L24 35L18 32L17.5 27"></svg:path></svg:g>`,
})
export class IconParkHtmlFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHuntingGearIcon],svg[icon-park-hunting-gear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M44 29H4V42H44V29Z"></svg:path><svg:path stroke-linejoin="round" d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"></svg:path><svg:path stroke-linecap="round" d="M19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22"></svg:path><svg:path stroke-linecap="round" d="M29 22C31.7614 22 34 19.7614 34 17C34 14.2386 31.7614 12 29 12"></svg:path><svg:path stroke-linecap="round" d="M20 17H28"></svg:path></svg:g>`,
})
export class IconParkHuntingGearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkHuoshanzhiboIcon],svg[icon-park-huoshanzhibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M35.3926 16.0397C32.1091 15.3432 29.8205 12.4576 29.7707 9.12427H24.6961V29.572C24.5966 31.9103 22.6563 33.7511 20.318 33.7014C17.9797 33.6516 16.1389 31.7113 16.1389 29.373C16.1887 27.0347 18.0792 25.1442 20.4175 25.1442C20.8653 25.1442 21.2633 25.1939 21.6613 25.3432V20.1193C21.2633 20.0695 20.8155 20.0695 20.4175 20.0695H20.2185C15.0444 20.2188 10.9648 24.4477 11.0643 29.6218C11.1638 34.7959 15.3926 38.8755 20.5668 38.8258C25.7409 38.776 29.8703 34.5472 29.8703 29.4228V19.0248C31.9598 20.5173 34.3976 21.3133 36.9847 21.3133V16.1889C36.3877 16.1889 35.8902 16.1392 35.3926 16.0397Z"></svg:path><svg:path d="M33.9502 44H14.0498C8.47761 44 4 39.4726 4 33.9502V14.0498C4 8.47761 8.47761 4 14.0498 4H33.9502C39.4726 4 44 8.47761 44 14.0498V33.9502C44 39.4726 39.4726 44 33.9502 44ZM14.0995 4.44776C8.77612 4.44776 4.44776 8.77612 4.44776 14.0995V33.8507C4.44776 39.1741 8.77612 43.5025 14.0995 43.5025H33.8507C39.1741 43.5025 43.5025 39.1741 43.5025 33.8507V14.0995C43.5025 8.77612 39.1741 4.44776 33.8507 4.44776H14.0995Z"></svg:path><svg:path d="M36.1387 35.7412C36.1387 35.6417 36.1387 35.4427 36.1387 35.2934C36.1387 35.2437 36.1884 35.2437 36.1884 35.2437C36.2382 35.2437 36.7854 35.7412 36.7854 35.7412"></svg:path><svg:path d="M20.4197 33.204C22.4595 33.204 24.1013 31.6119 24.2008 29.5721V27.9801C23.2555 27.5821 22.3103 27.2338 21.3152 26.9851C21.2157 26.9353 21.1162 26.9353 21.0167 26.9353C21.0167 27.0348 21.0167 27.1343 21.0167 27.2338C21.0167 29.4726 20.37 31.3134 19.3252 33.005C19.6237 33.1045 19.972 33.1542 20.3202 33.1542C20.3202 33.204 20.37 33.204 20.4197 33.204Z"></svg:path><svg:path d="M36.5384 35.5421C36.4886 35.4924 36.3393 35.4426 36.2896 35.4924C36.1901 35.5421 36.1403 35.5919 36.1403 35.6914C36.0906 37.2834 35.6926 38.8257 35.0956 40.2188C35.1453 40.0695 34.8468 39.4725 34.7971 39.3232C34.6976 39.0247 34.5981 38.7262 34.4488 38.4277C34.2 37.8307 33.9513 37.2834 33.6528 36.6864C33.0558 35.5919 32.3592 34.4974 31.613 33.5521C31.1155 32.9053 30.5682 32.3581 29.9712 31.8108C28.8767 36.0396 25.0956 39.2237 20.5185 39.2735H20.4189C18.4289 39.2735 16.5881 38.6765 15.0458 37.6814C14.6976 37.9799 14.2995 38.2785 13.9513 38.577C13.1055 37.6814 12.409 36.6864 11.812 35.5919C11.7622 35.4924 11.7125 35.3929 11.7125 35.2934C11.613 35.3929 11.5135 35.4426 11.414 35.5421C9.62293 37.1342 8.08064 38.9252 6.78711 40.8158C6.88661 40.9153 7.03587 41.0645 7.13537 41.164C7.18512 41.1143 7.23487 41.0148 7.28462 40.965L8.5284 42.0595L9.32442 42.4078C9.22492 42.4576 9.17517 42.5571 9.07567 42.6068C9.22492 42.7063 9.37417 42.7561 9.52343 42.8556C9.62293 42.7561 9.72243 42.7063 9.82193 42.6068L11.6627 43.4526L16.1901 43.7511H31.1652C31.1652 43.8008 31.1652 43.8506 31.1155 43.9003H33.1553C33.205 43.8506 33.2548 43.8008 33.3045 43.7511C33.3045 43.7013 33.3543 43.7013 33.3543 43.6516L36.0906 43.4028L38.8269 42.2586L40.6677 40.8655C40.7175 40.965 40.7672 41.0148 40.817 41.1143C40.9165 41.0148 41.0657 40.8655 41.1652 40.766C39.8717 38.9252 38.3294 37.1342 36.5384 35.5421Z"></svg:path><svg:path d="M20.518 38.7762C24.9458 38.7265 28.6772 35.5921 29.5727 31.413C28.4284 30.418 27.1847 29.5225 25.8414 28.7762C25.4434 28.5772 25.0453 28.3782 24.6473 28.1792V29.5225C24.5478 31.811 22.6573 33.6518 20.3687 33.6518C20.319 33.6518 20.319 33.6518 20.2692 33.6518C19.8215 33.6518 19.4235 33.5523 19.0254 33.4031C18.0802 34.7961 16.8364 36.0896 15.4434 37.2837C16.8861 38.1792 18.5777 38.7265 20.4185 38.7265C20.4185 38.7762 20.4682 38.7762 20.518 38.7762ZM18.3289 35.1941C18.2792 35.1941 18.3289 35.1941 18.3289 35.1941V35.1941Z"></svg:path>`,
})
export class IconParkHuoshanzhiboIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIMacIcon],svg[icon-park-i-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M4 6H44V28H4V6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 28V36H4V28"></svg:path><svg:path fill="#fff" d="M13.0909 18H10.9091C10.407 18 10 18.407 10 18.9091V21.0909C10 21.593 10.407 22 10.9091 22H13.0909C13.593 22 14 21.593 14 21.0909V18.9091C14 18.407 13.593 18 13.0909 18Z"></svg:path><svg:path fill="#fff" d="M13.0909 12H10.9091C10.407 12 10 12.407 10 12.9091V15.0909C10 15.593 10.407 16 10.9091 16H13.0909C13.593 16 14 15.593 14 15.0909V12.9091C14 12.407 13.593 12 13.0909 12Z"></svg:path><svg:path fill="#fff" d="M21.0909 18H18.9091C18.407 18 18 18.407 18 18.9091V21.0909C18 21.593 18.407 22 18.9091 22H21.0909C21.593 22 22 21.593 22 21.0909V18.9091C22 18.407 21.593 18 21.0909 18Z"></svg:path><svg:path fill="#fff" d="M21.0909 12H18.9091C18.407 12 18 12.407 18 12.9091V15.0909C18 15.593 18.407 16 18.9091 16H21.0909C21.593 16 22 15.593 22 15.0909V12.9091C22 12.407 21.593 12 21.0909 12Z"></svg:path><svg:path fill="#fff" d="M29.0909 18H26.9091C26.407 18 26 18.407 26 18.9091V21.0909C26 21.593 26.407 22 26.9091 22H29.0909C29.593 22 30 21.593 30 21.0909V18.9091C30 18.407 29.593 18 29.0909 18Z"></svg:path><svg:path fill="#fff" d="M29.0909 12H26.9091C26.407 12 26 12.407 26 12.9091V15.0909C26 15.593 26.407 16 26.9091 16H29.0909C29.593 16 30 15.593 30 15.0909V12.9091C30 12.407 29.593 12 29.0909 12Z"></svg:path><svg:path fill="#fff" d="M37.0909 12H34.9091C34.407 12 34 12.407 34 12.9091V15.0909C34 15.593 34.407 16 34.9091 16H37.0909C37.593 16 38 15.593 38 15.0909V12.9091C38 12.407 37.593 12 37.0909 12Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.8462 36L16 42H32L27.1538 36"></svg:path></svg:g>`,
})
export class IconParkIMacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamIcon],svg[icon-park-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M33 18H15L21 40C21 40 22 43 24 43C26 43 27 40 27 40L33 18Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M36 18H12C12 10 17 4 24 4C31 4 36 10 36 18Z"></svg:path></svg:g>`,
})
export class IconParkIcecreamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamFiveIcon],svg[icon-park-icecream-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M14 14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V31.7308C34 31.8795 33.8795 32 33.7308 32H14.2692C14.1205 32 14 31.8795 14 31.7308V14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 16V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 16V22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 32V41C21 42.6569 22.3431 44 24 44C25.6569 44 27 42.6569 27 41V32"></svg:path></svg:g>`,
})
export class IconParkIcecreamFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamFourIcon],svg[icon-park-icecream-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18.8429 13.7227L32.2779 27.1577L11.6794 40.5003L5.63367 34.4546L18.8429 13.7227Z"></svg:path><svg:path fill="#2F88FF" d="M38.7729 19.5104C37.7123 20.5711 37.0133 20.5793 35.9608 20.941C35.9282 23.7368 35.967 26.5502 32.4192 27.245L18.6033 13.429C18.6033 13.429 18.594 12.0595 19.9994 11.3435C20.4943 11.1116 21.4978 11.2213 22.0958 11.3186C23.5021 8.2937 25.6314 7.78309 27.9988 8.76105C29.1343 7.04337 31.9383 6.31187 34.027 6.98636C36.1157 7.66085 36.0994 9.05869 37.4891 9.74134C38.8789 10.424 40.2931 9.00977 40.3012 8.31082C40.3094 7.61186 40.1868 6.27484 41.129 6.51729C41.7042 6.67252 42.167 7.23228 42.7246 9.56132C43.0359 10.8687 42.8549 12.8027 41.7378 13.99C41.0522 14.7186 39.5211 15.0994 38.8219 15.3167C38.8885 15.5072 39.8336 18.4498 38.7729 19.5104Z"></svg:path><svg:path d="M38.8216 15.3162C36.0094 16.7467 33.9207 16.0722 31.8483 13.9998"></svg:path></svg:g>`,
})
export class IconParkIcecreamFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamOneIcon],svg[icon-park-icecream-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 4H31L34 32H14L17 4Z"></svg:path><svg:path d="M21 32V41C21 42.6569 22.3431 44 24 44V44C25.6569 44 27 42.6569 27 41V32"></svg:path><svg:path d="M16 14V14C18.2091 16.2091 21.7909 16.2091 24 14V14V14C26.2091 11.7909 29.7909 11.7909 32 14V14"></svg:path><svg:path d="M15 22V22C17.1706 24.7132 21.1768 25.0409 23.7594 22.7165L24 22.5L24.2406 22.2835C26.8232 19.9591 30.8294 20.2868 33 23V23"></svg:path></svg:g>`,
})
export class IconParkIcecreamOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamThreeIcon],svg[icon-park-icecream-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M14 14C14 8.47715 18.4772 4 24 4V4C29.5228 4 34 8.47715 34 14V31.7308C34 31.8795 33.8795 32 33.7308 32H14.2692C14.1205 32 14 31.8795 14 31.7308V14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 32V41C21 42.6569 22.3431 44 24 44V44C25.6569 44 27 42.6569 27 41V32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 16V16C16.7614 18.7614 21.2386 18.7614 24 16V16V16C26.7614 13.2386 31.2386 13.2386 34 16V16"></svg:path></svg:g>`,
})
export class IconParkIcecreamThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIcecreamTwoIcon],svg[icon-park-icecream-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M15.3396 22.5L21 37L24 43L27 37L32.6602 22.5"></svg:path><svg:path d="M19 32H29"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M24 3C18 3 16 9 16 9C16 9 10 11 10 16C10 21 15 23 15 23C15 23 18.5 21 24 21C29.5 21 33 23 33 23C33 23 38 21 38 16C38 11 32 9 32 9C32 9 30 3 24 3Z"></svg:path></svg:g>`,
})
export class IconParkIcecreamTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIdCardIcon],svg[icon-park-id-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38V10C44 8.89543 43.1046 8 42 8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M36 16H28V24H36V16Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 32H36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 16H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 24H18"></svg:path></svg:g>`,
})
export class IconParkIdCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIdCardHIcon],svg[icon-park-id-card-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" rx="2"></svg:rect><svg:path fill="#2F88FF" d="M17 25C19.2091 25 21 23.2091 21 21C21 18.7909 19.2091 17 17 17C14.7909 17 13 18.7909 13 21C13 23.2091 14.7909 25 17 25Z"></svg:path><svg:path stroke-linecap="round" d="M23 31C23 27.6863 20.3137 25 17 25C13.6863 25 11 27.6863 11 31"></svg:path><svg:path stroke-linecap="round" d="M28 20H36"></svg:path><svg:path stroke-linecap="round" d="M30 28H36"></svg:path></svg:g>`,
})
export class IconParkIdCardHIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIdCardVIcon],svg[icon-park-id-card-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" rx="2"></svg:rect><svg:path fill="#2F88FF" d="M24 19C26.2091 19 28 17.2091 28 15C28 12.7909 26.2091 11 24 11C21.7909 11 20 12.7909 20 15C20 17.2091 21.7909 19 24 19Z"></svg:path><svg:path stroke-linecap="round" d="M30 25C30 21.6863 27.3137 19 24 19C20.6863 19 18 21.6863 18 25"></svg:path><svg:path stroke-linecap="round" d="M18 31H30"></svg:path><svg:path stroke-linecap="round" d="M18 37H25"></svg:path></svg:g>`,
})
export class IconParkIdCardVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkImageFilesIcon],svg[icon-park-image-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:circle cx="18" cy="17" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path fill="#43CCF8" stroke="#fff" d="M15 28V37H33V21L23.4894 31.5L15 28Z"></svg:path></svg:g>`,
})
export class IconParkImageFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkImbalanceIcon],svg[icon-park-imbalance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 19V4"></svg:path><svg:path d="M12 22L24 19L36 16"></svg:path><svg:path d="M28 30L36 16"></svg:path><svg:path d="M44 30L36 16"></svg:path><svg:path d="M20 36L12 22"></svg:path><svg:path d="M4 36L12 22"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M12 44C16.4183 44 20 40.4183 20 36H4C4 40.4183 7.58172 44 12 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M36 38C40.4183 38 44 34.4183 44 30H28C28 34.4183 31.5817 38 36 38Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkImbalanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkImportAndExportIcon],svg[icon-park-import-and-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.99"><svg:path d="M14 25.9999L5 34.9999L14 43.9999"></svg:path><svg:path d="M5 35.0083H22.5"></svg:path><svg:path d="M34.0005 18L43.0005 27L34.0005 36"></svg:path><svg:path d="M43 27.0084H25.5"></svg:path><svg:path d="M4.5 24V7.5L43.5 7.5V15"></svg:path></svg:g>`,
})
export class IconParkImportAndExportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInFlightIcon],svg[icon-park-in-flight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M12 40C12 32.8203 17.3726 27 24 27C30.6274 27 36 32.8203 36 40"></svg:path><svg:path d="M13 37C13 38 15.5 39 17 38C18.5 37 18.9597 34.495 20.4997 34.9262C22.0396 35.3574 22 38.5 24 40C26 41.5 29.5 41 31 38.5C32.5 36 30.9207 35.325 32.0612 33.7031C32.8215 32.6219 33.7919 32.8871 34 33"></svg:path><svg:path stroke-linejoin="round" d="M23 21H25"></svg:path><svg:path stroke-linejoin="round" d="M32.1514 22.4702L33.8475 23.53"></svg:path><svg:path stroke-linejoin="round" d="M14.1514 23.53L15.8475 22.4701"></svg:path><svg:path stroke-linejoin="round" d="M39.0586 28.134L40.0586 29.8661"></svg:path><svg:path stroke-linejoin="round" d="M8.05859 29.8661L9.05859 28.134"></svg:path><svg:path stroke-linejoin="round" d="M41.8945 37.0056L42.1036 38.9946"></svg:path><svg:path stroke-linejoin="round" d="M4.89453 38.9946L5.10359 37.0056"></svg:path><svg:path d="M42.0003 10L9 18"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M16 7L29 13L17 16L12 9L16 7Z"></svg:path><svg:path stroke-linejoin="round" d="M9 18L6 14"></svg:path></svg:g>`,
})
export class IconParkInFlightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxIcon],svg[icon-park-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 30L9 6H39L44 30"></svg:path><svg:path fill="#2F88FF" d="M4 30H14.9091L16.7273 36H31.2727L33.0909 30H44V43H4V30Z"></svg:path><svg:path stroke-linecap="round" d="M19 14H29"></svg:path><svg:path stroke-linecap="round" d="M16 22H32"></svg:path></svg:g>`,
})
export class IconParkInboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxDownloadRIcon],svg[icon-park-inbox-download-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M4 31H15L17 35H31L33 31H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 36V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 22L24 28L30 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 36V26"></svg:path></svg:g>`,
})
export class IconParkInboxDownloadRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxInIcon],svg[icon-park-inbox-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M5 30L10 6H38L43 30"></svg:path><svg:path fill="#2F88FF" d="M5 30H14.9091L16.7273 36H31.2727L33.0909 30H43V43H5V30Z"></svg:path><svg:path stroke-linecap="round" d="M18 20L24 26L30 20"></svg:path><svg:path stroke-linecap="round" d="M24 26V14"></svg:path></svg:g>`,
})
export class IconParkInboxInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxOutIcon],svg[icon-park-inbox-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 30L9 6H39L44 30"></svg:path><svg:path fill="#2F88FF" d="M4 30H14.9091L16.7273 36H31.2727L33.0909 30H44V43H4V30Z"></svg:path><svg:path stroke-linecap="round" d="M18 20L24 14L30 20"></svg:path><svg:path stroke-linecap="round" d="M24 26V14"></svg:path></svg:g>`,
})
export class IconParkInboxOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxRIcon],svg[icon-park-inbox-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M4 31H15L17 35H31L33 31H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 36V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 36V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 15H31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 23H31"></svg:path></svg:g>`,
})
export class IconParkInboxRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxSuccessIcon],svg[icon-park-inbox-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 30L9 6H39L44 30"></svg:path><svg:path fill="#2F88FF" d="M4 30H14.9091L16.7273 36H31.2727L33.0909 30H44V43H4V30Z"></svg:path><svg:path stroke-linecap="round" d="M19 19.2143L23 24L31 16"></svg:path></svg:g>`,
})
export class IconParkInboxSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxSuccessRIcon],svg[icon-park-inbox-success-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M4 31H15L17 35H31L33 31H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 36V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 36V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18.6154L22.6 24L33 14"></svg:path></svg:g>`,
})
export class IconParkInboxSuccessRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInboxUploadRIcon],svg[icon-park-inbox-upload-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M4 31H15L17 35H31L33 31H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 36V26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18L24 12L30 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 12V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 36V26"></svg:path></svg:g>`,
})
export class IconParkInboxUploadRIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInclusiveGatewayIcon],svg[icon-park-inclusive-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M22.7992 4.20102L4.4144 22.5858C3.63336 23.3668 3.63335 24.6332 4.4144 25.4142L22.7992 43.799C23.5802 44.58 24.8466 44.58 25.6276 43.799L44.0124 25.4142C44.7934 24.6332 44.7934 23.3668 44.0124 22.5858L25.6276 4.20102C24.8466 3.41997 23.5802 3.41997 22.7992 4.20102Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"></svg:path></svg:g>`,
})
export class IconParkInclusiveGatewayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIncomeIcon],svg[icon-park-income-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 34L43 34"></svg:path><svg:path d="M43 26V10C43 8.34315 41.6569 7 40 7H8C6.34315 7 5 8.34315 5 10V38C5 39.6569 6.34315 41 8 41H28.4706"></svg:path><svg:path d="M36 39L31 34L35.9996 29"></svg:path><svg:path d="M15 15L20 21L25 15"></svg:path><svg:path d="M14 27H26"></svg:path><svg:path d="M14 21H26"></svg:path><svg:path d="M20 21V33"></svg:path></svg:g>`,
})
export class IconParkIncomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIncomeOneIcon],svg[icon-park-income-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M35 38L30 33L34.9996 28"></svg:path><svg:path d="M43 38L38 33L42.9996 28"></svg:path><svg:path d="M43 22V9C43 7.89543 42.1046 7 41 7H7C5.89543 7 5 7.89543 5 9V39C5 40.1046 5.89543 41 7 41H28.4706"></svg:path><svg:path d="M13 15L18 21L23 15"></svg:path><svg:path d="M12 27H24"></svg:path><svg:path d="M12 21H24"></svg:path><svg:path d="M18 21V33"></svg:path></svg:g>`,
})
export class IconParkIncomeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIncomingIcon],svg[icon-park-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M18 13C18 10.7909 16.2091 9 14 9C11.7909 9 10 10.7909 10 13C10 15.2091 11.7909 17 14 17C16.2091 17 18 15.2091 18 13Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M37 13C37 10.7909 35.2091 9 33 9C30.7909 9 29 10.7909 29 13C29 15.2091 30.7909 17 33 17C35.2091 17 37 15.2091 37 13Z"></svg:path><svg:path stroke-linecap="round" d="M4 13H10"></svg:path><svg:path stroke-linecap="round" d="M18 13H29"></svg:path><svg:path stroke-linecap="round" d="M37 13H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 29L4 35L10 41"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 35H44"></svg:path></svg:g>`,
})
export class IconParkIncomingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIncreaseIcon],svg[icon-park-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M41 25C41 34.9411 32.9411 43 23 43C13.0589 43 5 34.9411 5 25C5 15.0589 13.0589 7 23 7"></svg:path><svg:path d="M12 28.5C20.5 28.5 24 28 31 19"></svg:path><svg:path d="M23 19H31V27"></svg:path><svg:path d="M31 5V9.5"></svg:path><svg:path d="M43.5 17L39 17"></svg:path><svg:path d="M40.8892 7L37.0001 10.8891"></svg:path></svg:g>`,
})
export class IconParkIncreaseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIncreaseTheScaleIcon],svg[icon-park-increase-the-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 9C24 6.23858 21.7614 4 19 4C16.2386 4 14 6.23858 14 9V19C14 21.7614 16.2386 24 19 24C21.7614 24 24 21.7614 24 19V9Z"></svg:path><svg:path d="M42 9C42 6.23858 39.7614 4 37 4C34.2386 4 32 6.23858 32 9V19C32 21.7614 34.2386 24 37 24C39.7614 24 42 21.7614 42 19V9Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 32L42 38L36 44"></svg:path><svg:path stroke-linecap="round" d="M6 24H7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 38H19"></svg:path></svg:g>`,
})
export class IconParkIncreaseTheScaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIndentLeftIcon],svg[icon-park-indent-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9H42"></svg:path><svg:path d="M19 19H42"></svg:path><svg:path d="M19 29H42"></svg:path><svg:path d="M11 19L6 24L11 29"></svg:path><svg:path d="M6 39H42"></svg:path></svg:g>`,
})
export class IconParkIndentLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIndentRightIcon],svg[icon-park-indent-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 9H6"></svg:path><svg:path d="M29 19H6"></svg:path><svg:path d="M29 29H6"></svg:path><svg:path d="M37 19L42 24L37 29"></svg:path><svg:path d="M42 39H6"></svg:path></svg:g>`,
})
export class IconParkIndentRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIndexFingerIcon],svg[icon-park-index-finger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M12.5658 26.1824C10.8553 27.3542 10 29.2935 10 32.0002C10 36.0603 14.9753 43.0002 19.4618 43.0002C23.9483 43.0002 26.5502 43.0002 30.9415 43.0002C35.3328 43.0002 38 39.1496 38 36.0603C38 31.7099 38 27.3596 38 23.0093C38 21.3524 36.6569 20.0093 35 20.0093H34.9909C33.3391 20.0093 32 21.3484 32 23.0002"></svg:path><svg:path d="M13.981 28.4452V8.00587C13.981 6.35036 15.323 5.0083 16.9785 5.0083C16.9813 5.0083 16.9841 5.0083 16.9868 5.00831C18.6482 5.01291 19.9927 6.36106 19.9927 8.0225V23.592"></svg:path><svg:path stroke-linejoin="round" d="M19.9927 23.0083V19.0155C19.9927 17.3501 21.3428 16 23.0082 16C24.6736 16 26.0236 17.3501 26.0236 19.0155V23.0083"></svg:path><svg:path stroke-linejoin="round" d="M26 22.7158V20.0034C26 18.3466 27.3431 17.0034 29 17.0034C30.6569 17.0034 32 18.3466 32 20.0034V23.0034"></svg:path></svg:g>`,
})
export class IconParkIndexFingerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInductionLockIcon],svg[icon-park-induction-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9 18V42H39V18L24 6L9 18Z"></svg:path><svg:path stroke="#fff" d="M24 22V34"></svg:path><svg:path stroke="#fff" d="M31 26V30"></svg:path><svg:path stroke="#fff" d="M17 26V30"></svg:path></svg:g>`,
})
export class IconParkInductionLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIndustrialScalesIcon],svg[icon-park-industrial-scales-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 32H38L42 40H6L10 32Z"></svg:path><svg:path stroke-linecap="round" d="M16 40V44"></svg:path><svg:path stroke-linecap="round" d="M24 12V32"></svg:path><svg:rect width="14" height="8" x="17" y="4" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M32 40V44"></svg:path></svg:g>`,
})
export class IconParkIndustrialScalesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInfoIcon],svg[icon-park-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.5 34V20H23.5H22.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 34H28"></svg:path></svg:g>`,
})
export class IconParkInfoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInfusionIcon],svg[icon-park-infusion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 30C38 37.732 31.732 44 24 44C16.268 44 10 37.732 10 30C10 22.268 24 4 24 4C24 4 38 22.268 38 30Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 30H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V36"></svg:path></svg:g>`,
})
export class IconParkInfusionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInjectionIcon],svg[icon-park-injection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38.1684 22.262L19.0766 41.3539L6.34863 28.626L25.4405 9.53409" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M38.1684 22.262L19.0766 41.3539L6.34863 28.626L25.4405 9.53409"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M21.9053 5.99854L41.7043 25.7975"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M14.834 28.626L19.0766 32.8686"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M6.34961 41.353L12.7128 34.9898"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M31.8047 15.8979L35.3394 12.3632"></svg:path></svg:g>`,
})
export class IconParkInjectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInlineIcon],svg[icon-park-inline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 9L34 6H8L25 24L8 42H34L37 39"></svg:path><svg:path d="M5 24H15"></svg:path><svg:path d="M33 24H43"></svg:path></svg:g>`,
})
export class IconParkInlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInnerShadowBottomLeftIcon],svg[icon-park-inner-shadow-bottom-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M24 38C20.134 38 16.634 36.4329 14.1005 33.8996C11.567 31.366 10 27.866 10 24"></svg:path></svg:g>`,
})
export class IconParkInnerShadowBottomLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInnerShadowBottomRightIcon],svg[icon-park-inner-shadow-bottom-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M24 38C27.866 38 31.366 36.4329 33.8996 33.8996C36.4329 31.366 38 27.866 38 24"></svg:path></svg:g>`,
})
export class IconParkInnerShadowBottomRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInnerShadowDownIcon],svg[icon-park-inner-shadow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M33.8996 33.8995C31.3661 36.4329 27.8661 38 24.0001 38C20.1341 38 16.6341 36.4329 14.1006 33.8995"></svg:path></svg:g>`,
})
export class IconParkInnerShadowDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInnerShadowLeftIcon],svg[icon-park-inner-shadow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M14.1005 14.1005C11.567 16.634 10 20.134 10 24C10 27.866 11.567 31.366 14.1005 33.8995"></svg:path></svg:g>`,
})
export class IconParkInnerShadowLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInnerShadowRightIcon],svg[icon-park-inner-shadow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M33.8994 33.8995C36.4328 31.366 37.9999 27.866 37.9999 24C37.9999 20.134 36.4328 16.634 33.8994 14.1005"></svg:path></svg:g>`,
})
export class IconParkInnerShadowRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInnerShadowTopLeftIcon],svg[icon-park-inner-shadow-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M24 10C20.134 10 16.634 11.567 14.1005 14.1005C11.567 16.634 10 20.134 10 24"></svg:path></svg:g>`,
})
export class IconParkInnerShadowTopLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInnerShadowTopRightIcon],svg[icon-park-inner-shadow-top-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M38 24C38 20.134 36.4329 16.634 33.8996 14.1005C31.366 11.567 27.866 10 24 10"></svg:path></svg:g>`,
})
export class IconParkInnerShadowTopRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInnerShadowUpIcon],svg[icon-park-inner-shadow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C29.5229 44 34.5229 41.7613 38.1422 38.1422C41.7613 34.5229 44 29.5229 44 24C44 18.4772 41.7613 13.4772 38.1422 9.85787C34.5229 6.23858 29.5229 4 24 4C18.4772 4 13.4772 6.23858 9.85787 9.85787C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85787 38.1422C13.4772 41.7613 18.4772 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M33.8996 14.1005C31.3661 11.567 27.8661 10 24.0001 10C20.1341 10 16.6341 11.567 14.1006 14.1005"></svg:path></svg:g>`,
})
export class IconParkInnerShadowUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInsertCardIcon],svg[icon-park-insert-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M10 18H4L4 6H44V18H38"></svg:path><svg:path fill="#2F88FF" d="M12 12L4 41H44L36 12H12Z"></svg:path></svg:g>`,
})
export class IconParkInsertCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInsertTableIcon],svg[icon-park-insert-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"></svg:path><svg:path stroke-linecap="round" d="M18 6V42"></svg:path><svg:path stroke-linecap="round" d="M30 6V42"></svg:path><svg:path stroke-linecap="round" d="M6 18H42"></svg:path><svg:path stroke-linecap="round" d="M6 30H42"></svg:path></svg:g>`,
})
export class IconParkInsertTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInspectionIcon],svg[icon-park-inspection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M43 33V19H5V41C5 42.1046 5.89543 43 7 43H24"></svg:path><svg:path stroke-linejoin="round" d="M5 10C5 8.89543 5.89543 8 7 8H41C42.1046 8 43 8.89543 43 10V19H5V10Z"></svg:path><svg:path stroke-linecap="round" d="M16 5V13"></svg:path><svg:path stroke-linecap="round" d="M32 5V13"></svg:path><svg:circle cx="30" cy="32" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 37L42 42"></svg:path></svg:g>`,
})
export class IconParkInspectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInstagramIcon],svg[icon-park-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M34 6H14C9.58172 6 6 9.58172 6 14V34C6 38.4183 9.58172 42 14 42H34C38.4183 42 42 38.4183 42 34V14C42 9.58172 38.4183 6 34 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"></svg:path><svg:path fill="#fff" d="M35 15C36.1046 15 37 14.1046 37 13C37 11.8954 36.1046 11 35 11C33.8954 11 33 11.8954 33 13C33 14.1046 33.8954 15 35 15Z"></svg:path></svg:g>`,
})
export class IconParkInstagramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInstagramOneIcon],svg[icon-park-instagram-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:circle cx="9" cy="8" r="4"></svg:circle><svg:rect width="8" height="25" x="5" y="18" stroke-linejoin="round"></svg:rect><svg:path stroke-linejoin="round" d="M21 27.5V43H28V29C28 26.5 29.5 24.5 32 24.5C34.5 24.5 36 27 36 29V43H43V27.5C43 24.5 39.5 18 32 18C24.5 18 21 24.5 21 27.5Z"></svg:path></svg:g>`,
})
export class IconParkInstagramOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInstallIcon],svg[icon-park-install-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M41.4004 11.551L36.3332 5H11.6666L6.58398 11.551"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M6 13C6 11.8954 6.89543 11 8 11H40C41.1046 11 42 11.8954 42 13V40C42 41.6569 40.6569 43 39 43H9C7.34315 43 6 41.6569 6 40V13Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 27L24 35L16 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23.9917 19V35"></svg:path></svg:g>`,
})
export class IconParkInstallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInstructionIcon],svg[icon-park-instruction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" stroke-linejoin="round" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V16H4V10Z"></svg:path><svg:path d="M25 23L23 34"></svg:path><svg:path stroke-linejoin="round" d="M31 23L37 28L31 34"></svg:path><svg:path stroke-linejoin="round" d="M17 22.9999L11 27.9999L17 33.9999"></svg:path></svg:g>`,
})
export class IconParkInstructionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIntercomIcon],svg[icon-park-intercom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M13 14C13 12.3431 14.3431 11 16 11H32C33.6569 11 35 12.3431 35 14V25L33 31V41C33 42.6569 31.6569 44 30 44H18C16.3431 44 15 42.6569 15 41V31L13 25V14Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M19 11L19 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 11L28 7"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 19L20 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M26 26L22 26"></svg:path></svg:g>`,
})
export class IconParkIntercomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIntermediateModeIcon],svg[icon-park-intermediate-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24.0033 4L29.2737 9.27038H38.7296V18.7263L44 23.9967L38.7296 29.2737V38.7296H29.2737L24.0033 44L18.7264 38.7296H9.27036V29.2737L4 23.9967L9.27036 18.7263V9.27038H18.7264L24.0033 4Z"></svg:path><svg:path stroke="#fff" d="M24 16C27.9932 16.5 31 20 31 24C31 28 28 31.5 24 31.9549"></svg:path></svg:g>`,
})
export class IconParkIntermediateModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInternalDataIcon],svg[icon-park-internal-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 18V9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V18"></svg:path><svg:path d="M32 24V31"></svg:path><svg:path d="M24 15V31"></svg:path><svg:path d="M16 19V31"></svg:path><svg:path d="M6 30V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V30"></svg:path></svg:g>`,
})
export class IconParkInternalDataIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInternalExpansionIcon],svg[icon-park-internal-expansion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M42 8C42 6.89543 41.1046 6 40 6H28V20H42V8Z" clip-rule="evenodd"></svg:path><svg:path d="M13 35L23 25M23 25V32M23 25H16"></svg:path></svg:g>`,
})
export class IconParkInternalExpansionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInternalReductionIcon],svg[icon-park-internal-reduction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 42H40C41.1046 42 42 41.1046 42 40V8C42 6.89543 41.1046 6 40 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M42 8C42 6.89543 41.1046 6 40 6H28V20H42V8Z" clip-rule="evenodd"></svg:path><svg:path d="M23 25L13 35M13 35V28M13 35H20"></svg:path></svg:g>`,
})
export class IconParkInternalReductionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInternalTransmissionIcon],svg[icon-park-internal-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 25L30 25"></svg:path><svg:path d="M36 19L30 25L36 31"></svg:path><svg:path d="M21 6V26C21 32.7391 14.8348 39.5668 9 42"></svg:path><svg:path d="M42 14V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V35.5"></svg:path></svg:g>`,
})
export class IconParkInternalTransmissionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInternationalIcon],svg[icon-park-international-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 44.0002C35.0457 44.0002 44 35.0459 44 24.0002C44 12.9545 35.0457 4.00024 24 4.00024C12.9543 4.00024 4 12.9545 4 24.0002C4 35.0459 12.9543 44.0002 24 44.0002Z"></svg:path><svg:path stroke-linecap="round" d="M6 30.9856C8.63192 32.041 10.5266 32.041 11.6839 30.9856C13.4199 29.4025 11.9219 24.5978 14.3532 23.2727C16.7844 21.9476 20.4886 27.8214 23.9508 25.8887C27.4129 23.9559 23.6246 18.8023 26.0272 16.713C28.4298 14.6237 31.554 16.98 32.1001 13.4865C32.6462 9.99304 29.5521 11.5082 28.9584 8.20693C28.5625 6.00611 28.5625 4.84884 28.9584 4.73511"></svg:path><svg:path stroke-linecap="round" d="M29.0209 43.3505C27.1468 41.4325 26.4721 39.6497 26.9969 38.0019C27.7841 35.5303 29.0826 35.6764 29.6488 34.1482C30.2149 32.6199 28.6156 30.4433 32.1643 28.5826C34.5301 27.3421 37.783 28.7794 41.9228 32.8944"></svg:path></svg:g>`,
})
export class IconParkInternationalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIntersectSelectionIcon],svg[icon-park-intersect-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="27" height="27" x="16" y="16" rx="2"></svg:rect><svg:rect width="27" height="27" x="5" y="5" rx="2"></svg:rect><svg:path d="M27 16L16 27"></svg:path><svg:path d="M32 21L21 32"></svg:path></svg:g>`,
})
export class IconParkIntersectSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIntersectionIcon],svg[icon-park-intersection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 31H40C41.1046 31 42 30.1046 42 29V8C42 6.89543 41.1046 6 40 6H19C17.8954 6 17 6.89543 17 8V17"></svg:path><svg:path d="M17 17H8C6.89543 17 6 17.8954 6 19V40C6 41.1046 6.89543 42 8 42H29C30.1046 42 31 41.1046 31 40V31"></svg:path><svg:rect width="14" height="14" x="17" y="17" fill="#2F88FF" rx="2"></svg:rect></svg:g>`,
})
export class IconParkIntersectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInvalidFilesIcon],svg[icon-park-invalid-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44V4H31L40 14.5V44H8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M34 25C34 30.5228 29.5228 35 24 35C18.4772 35 14 30.5228 14 25C14 19.4772 18.4772 15 24 15C26.6582 15 29.0742 16.0372 30.8653 17.729C32.7955 19.5521 34 22.1354 34 25Z"></svg:path><svg:path stroke="#fff" d="M17 18L31 32"></svg:path><svg:path stroke="#fff" d="M34 25C34 30.5228 29.5228 35 24 35M14 25C14 19.4772 18.4772 15 24 15"></svg:path></svg:g>`,
})
export class IconParkInvalidFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInvertCameraIcon],svg[icon-park-invert-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"></svg:path><svg:path stroke-linecap="round" d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"></svg:path><svg:path stroke-linecap="round" d="M42 8V24"></svg:path><svg:path stroke-linecap="round" d="M6 24L6 40"></svg:path><svg:rect width="12" height="8" x="14" y="20" fill="#2F88FF" stroke-linecap="round"></svg:rect><svg:path d="M34 28L32 26.6667V21.3333L34 20V28Z"></svg:path></svg:g>`,
})
export class IconParkInvertCameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInvertLeftIcon],svg[icon-park-invert-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 15C10 22.2989 14.103 28.5832 20 31.4081C22.1347 32.4307 24.5046 33 27 33C36.3888 33 44 24.9411 44 15"></svg:path><svg:path d="M18 20L10 15L4 23"></svg:path></svg:g>`,
})
export class IconParkInvertLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkInvertRightIcon],svg[icon-park-invert-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 15C38 22.2989 33.897 28.5832 28 31.4081C25.8653 32.4307 23.4954 33 21 33C11.6112 33 4 24.9411 4 15"></svg:path><svg:path d="M30 20L38 15L44 23"></svg:path></svg:g>`,
})
export class IconParkInvertRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIosFaceRecognitionIcon],svg[icon-park-ios-face-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 34V44H14"></svg:path><svg:path d="M34 44H44V34"></svg:path><svg:path d="M34 4H44V14"></svg:path><svg:path d="M14 4H4V14"></svg:path><svg:path d="M16 34C16 34 19 37 24 37C29 37 32 34 32 34"></svg:path><svg:path d="M24 14V23C24 25 22 27 20 27H19"></svg:path><svg:path d="M34 14V16"></svg:path><svg:path d="M14 14V16"></svg:path></svg:g>`,
})
export class IconParkIosFaceRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIpadIcon],svg[icon-park-ipad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="30" height="38" x="9" y="5" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 36L26 36"></svg:path></svg:g>`,
})
export class IconParkIpadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIpadOneIcon],svg[icon-park-ipad-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="38" height="30" x="5" y="10" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M11 27V23"></svg:path></svg:g>`,
})
export class IconParkIpadOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIphoneIcon],svg[icon-park-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="26" height="40" x="11" y="4" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 10L26 10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 38H28"></svg:path></svg:g>`,
})
export class IconParkIphoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIpoIcon],svg[icon-park-ipo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 18.313V7H44V18.313C41.8815 19.068 40.3636 21.1053 40.3636 23.5C40.3636 25.8947 41.8815 27.932 44 28.687V40H4V28.687C6.11853 27.932 7.63636 25.8947 7.63636 23.5C7.63636 21.1053 6.11853 19.068 4 18.313V18.313Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 18V29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18V29"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M18 18H21C22.6569 18 24 19.3431 24 21C24 22.6569 22.6569 24 21 24H18V18Z"></svg:path><svg:ellipse cx="32" cy="24" fill="#43CCF8" stroke="#fff" rx="3" ry="5"></svg:ellipse></svg:g>`,
})
export class IconParkIpoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIronIcon],svg[icon-park-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 40H44L42 24H20C11.1634 24 4 31.1634 4 40Z"></svg:path><svg:path stroke="#000" d="M16 8H40L42 24"></svg:path><svg:path stroke="#fff" d="M17 32H19"></svg:path><svg:path stroke="#fff" d="M25 32H27"></svg:path><svg:path stroke="#fff" d="M33 32H35"></svg:path></svg:g>`,
})
export class IconParkIronIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIronDisableIcon],svg[icon-park-iron-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 40H44L42 24H20C11.1634 24 4 31.1634 4 40Z"></svg:path><svg:path stroke="#000" d="M16 8H40L42 24"></svg:path><svg:circle cx="24" cy="24" r="9" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M26 26L24 24L22 22"></svg:path><svg:path stroke="#fff" d="M26 22L24 24L22 26"></svg:path></svg:g>`,
})
export class IconParkIronDisableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIronThreeIcon],svg[icon-park-iron-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 40H44L42 24H20C11.1634 24 4 31.1634 4 40Z"></svg:path><svg:path stroke="#000" d="M16 8H40L42 24"></svg:path><svg:path stroke="#fff" d="M17 32H19"></svg:path><svg:path stroke="#fff" d="M25 32H27"></svg:path></svg:g>`,
})
export class IconParkIronThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIronTwoIcon],svg[icon-park-iron-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 40H44L42 24H20C11.1634 24 4 31.1634 4 40Z"></svg:path><svg:path stroke="#000" d="M16 8H40L42 24"></svg:path><svg:path stroke="#fff" d="M17 32H19"></svg:path></svg:g>`,
})
export class IconParkIronTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIwatchIcon],svg[icon-park-iwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M36 12.0002H10V36.0002H36V12.0002Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M27 24.0002C27 21.7911 25.2091 20.0002 23 20.0002C20.7909 20.0002 19 21.7911 19 24.0002C19 26.2094 20.7909 28.0002 23 28.0002C25.2091 28.0002 27 26.2094 27 24.0002Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 12.0002C15 11.9273 15.0083 11.8545 15.0246 11.7833L16.6321 4.78331C16.7372 4.32578 17.1565 4.00024 17.6409 4.00024H28.3837C28.8681 4.00024 29.2874 4.32578 29.3925 4.78331L31 11.7833"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 36.0002C15 36.0732 15.0083 36.1459 15.0246 36.2172L16.6321 43.2172C16.7372 43.6747 17.1565 44.0002 17.6409 44.0002H28.3837C28.8681 44.0002 29.2874 43.6747 29.3925 43.2172L31 36.2172"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M39 16.0002V20.0002"></svg:path></svg:g>`,
})
export class IconParkIwatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIwatchOneIcon],svg[icon-park-iwatch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="22" height="24" x="13" y="12" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 12V18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 12L27 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 30V36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 36L27 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34.9998 23.9341L29 23.9999"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 21L35 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 24L13.0003 24.0659"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 21L13 27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M31 12V4H17V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M31 36V43C31 43.5523 30.5523 44 30 44H18C17.4477 44 17 43.5523 17 43V36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7 20V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M41 20V28"></svg:path></svg:g>`,
})
export class IconParkIwatchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkIwatchTwoIcon],svg[icon-park-iwatch-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M15.4167 10.5C18.2373 7.69936 21.9423 6 26 6C34.8366 6 42 14.0589 42 24C42 33.9411 34.8366 42 26 42C21.9423 42 18.2373 40.3006 15.4167 37.5"></svg:path><svg:rect width="10" height="28" x="6" y="10" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="4" height="4" x="13" y="18" fill="#fff" rx="2" transform="rotate(90 13 18)"></svg:rect><svg:rect width="4" height="4" x="13" y="25" fill="#fff" rx="2" transform="rotate(90 13 25)"></svg:rect></svg:g>`,
})
export class IconParkIwatchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkJewelryIcon],svg[icon-park-jewelry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path fill="#43CCF8" stroke="#fff" d="M20 24C20 17.6364 22.6275 15.3535 24 15C25.22 15.1768 28 17.2121 28 24C28 30.7879 25.22 33 24 33C22.6275 32.8232 20 30.3636 20 24Z"></svg:path><svg:path stroke="#fff" d="M19.9995 22.9999C18.4464 21.4623 13.6179 21.8398 12.0002 21.9999C11.5149 23.7617 12.3521 27.4922 14.2934 29.4142C16.72 31.8166 18.6609 32.9999 23.9995 32.9999"></svg:path><svg:path stroke="#fff" d="M28 22.9999C29.4358 21.4668 33.5044 21.8402 35 21.9999C35.2991 23.5969 35.1402 27.1878 32.6276 29.8707C30.115 32.5536 25.5 32.9999 24 32.9999"></svg:path></svg:g>`,
})
export class IconParkJewelryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkJinritoutiaoIcon],svg[icon-park-jinritoutiao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M36.883 44H11.1127C7.19199 44 4 40.808 4 36.883V11.1127C4 7.19199 7.19199 4 11.1127 4H36.883C40.8037 4 43.9957 7.19199 43.9957 11.1127V36.883C44 40.808 40.808 44 36.883 44ZM11.1127 4.30258C7.35819 4.30258 4.30258 7.35819 4.30258 11.1127V36.883C4.30258 40.6418 7.35819 43.6974 11.117 43.6974H36.8873C40.6461 43.6974 43.7017 40.6418 43.7017 36.883V11.1127C43.7017 7.35393 40.6461 4.29832 36.8873 4.29832H11.1127V4.30258Z"></svg:path><svg:path fill-rule="evenodd" d="M4 36.8874L44 34.7949V11.1128L4 13.2053V36.8874ZM24.9629 18.5535L24.9629 18.5535L24.9629 18.5535C24.9629 18.5535 25.8962 19.2311 25.9985 19.2993C26.6647 19.7579 27.5459 20.364 28.9153 20.9932C27.6556 21.3788 26.2061 21.761 24.5332 22.1291V24.4432C27.7245 23.7574 30.2253 22.9796 32.2 22.192C34.1509 22.7558 36.6718 23.2709 39.981 23.6377V21.3236C38.2667 21.1249 36.788 20.8858 35.5072 20.6222C37.3562 19.5714 38.4182 18.606 39.1209 17.9399V17.5864L39.1251 17.5862V15.417L39.1209 15.4172V15.417L38.596 15.4447L29.6218 15.9141L27.2983 14.9524L24.9629 18.5535ZM28.5105 18.1415L35.9854 17.7504C35.1654 18.3491 34.0068 19.0546 32.2705 19.7895C30.5399 19.2368 29.3679 18.6532 28.5105 18.1415ZM16.7119 16.0478L19.1709 15.9199C19.1087 20.541 19.0227 23.3079 18.3506 25.4774L23.4462 25.2102V27.3794L17.3389 27.6979C16.3633 29.2668 14.8464 30.7444 12.4715 32.8387L8.59766 33.0433C8.74154 32.921 8.87935 32.8017 9.01365 32.6855L9.01378 32.6854L9.08775 32.6214C11.476 30.5514 13.1174 29.1275 14.23 27.8601L8.00195 28.1849V26.0199L15.7202 25.6153C16.5809 23.6457 16.6485 20.8981 16.7119 16.0478ZM14.9017 17.4668V19.8874L9.42969 19.3888V16.9724L14.9017 17.4668ZM9.42969 21.0637V23.4843L14.9017 23.983V21.5623L9.42969 21.0637ZM30.9824 26.9861L24.5332 27.3241V25.1549L30.9824 24.8169V23.5822L33.5011 23.4543V24.6849L39.9817 24.3452V26.5144L33.5011 26.8541V31.7433L30.9824 31.8754V26.9861ZM21.0602 28.5898L18.0898 28.7433L20.4764 32.4253L23.4468 32.2719L21.0602 28.5898ZM34.6465 27.8778L37.6126 27.7244L39.9991 31.4064L37.033 31.5599L34.6465 27.8778ZM29.8979 28.125L26.9275 28.2827L24.541 32.2119L27.5114 32.0585L29.8979 28.125Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkJinritoutiaoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkJourneyIcon],svg[icon-park-journey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M24 40C32.2843 40 39 33.2843 39 25C39 16.7157 32.2843 10 24 10C15.7157 10 9 16.7157 9 25C9 33.2843 15.7157 40 24 40Z"></svg:path><svg:path d="M20.0002 11C21.8049 12.0083 23.5002 13.5 23.3581 15.4454C23.2445 17 21.915 17.3469 21.6369 18.4711C21.359 19.5953 22.9674 20.8217 20.2464 22.636C18.4324 23.8455 12.971 26.1447 9 24"></svg:path><svg:path stroke-linejoin="round" d="M9.50011 24.5C6.50011 26.3883 2.06824 31.521 4.00056 35C6.5 39.5 16.0004 35.6906 27.0001 27C37.9999 18.3094 42.2291 5.60642 42.2291 5.60642L37.0005 7"></svg:path><svg:path d="M26.0006 40C26.0006 40 26.5003 35 30 32C33.4997 29 38.0007 29 38.0007 29"></svg:path></svg:g>`,
})
export class IconParkJourneyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkJoystickIcon],svg[icon-park-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 33H4V43H44V33Z"></svg:path><svg:path stroke-linecap="round" d="M38 26H26V33H38V26Z"></svg:path><svg:path fill="#2F88FF" d="M18 14C20.7614 14 23 11.7614 23 9C23 6.23858 20.7614 4 18 4C15.2386 4 13 6.23858 13 9C13 11.7614 15.2386 14 18 14Z"></svg:path><svg:path stroke-linecap="round" d="M16 14L9 33"></svg:path></svg:g>`,
})
export class IconParkJoystickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkJuiceIcon],svg[icon-park-juice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M15 24H33L31.2 44H16.8L15 24Z"></svg:path><svg:rect width="26" height="6" x="11" y="18" rx="3"></svg:rect><svg:path fill="#2F88FF" d="M24 8C18.4772 8 14 12.4772 14 18H34C34 12.4772 29.5228 8 24 8Z"></svg:path><svg:path stroke-linecap="round" d="M28 4L26 8"></svg:path></svg:g>`,
})
export class IconParkJuiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkJumpIcon],svg[icon-park-jump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 10L20 20.254V29.9683L10.8571 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 10L28 20.254V29.9683L37.1429 44"></svg:path><svg:circle cx="24" cy="8" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkJumpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKagiMapIcon],svg[icon-park-kagi-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 42H8V24H15V42H19.9406V6H27.9792V33.0659H34.0203V16.125H40.0687V42H44"></svg:path>`,
})
export class IconParkKagiMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKettleIcon],svg[icon-park-kettle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="7" x="6.778" y="37" fill="#2F88FF"></svg:rect><svg:path d="M38.7778 36L36.7778 10H4.77783L11.3438 17.5493C11.8727 18.1574 12.1347 18.9527 12.0707 19.7561L10.7778 36"></svg:path><svg:path d="M26.7778 18H21.7778"></svg:path><svg:path d="M26.7778 24H21.7778"></svg:path><svg:path d="M26.7778 30H21.7778"></svg:path><svg:path d="M36.7778 10H44.7778V26H38.7778"></svg:path><svg:path d="M19.7778 9V4H28.7778V9"></svg:path></svg:g>`,
})
export class IconParkKettleIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKettleOneIcon],svg[icon-park-kettle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 14H30C30 14 38 18.1481 38 27.7993C38 37.4504 30 42 30 42H13C13 42 6 35.9785 6 28C6 20.0215 13 14 13 14Z"></svg:path><svg:path d="M38 27.9998C25 24.9998 19 33.9998 6 27.9998"></svg:path><svg:path d="M31 14H40C40 14 44 18 44 30"></svg:path><svg:path fill="#2F88FF" d="M9 6L32 8.66667L31 14H13L9 6Z"></svg:path></svg:g>`,
})
export class IconParkKettleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKeyIcon],svg[icon-park-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M22.8682 24.2982C25.4105 26.7935 26.4138 30.4526 25.4971 33.8863C24.5805 37.32 21.8844 40.0019 18.4325 40.9137C14.9806 41.8256 11.3022 40.8276 8.79375 38.2986C5.02208 34.4141 5.07602 28.2394 8.91499 24.4206C12.754 20.6019 18.9613 20.5482 22.8664 24.3L22.8682 24.2982Z"></svg:path><svg:path stroke-linecap="round" d="M23 24L40 7"></svg:path><svg:path fill="#2F88FF" d="M30.3052 16.9001L35.7337 22.3001L42.0671 16.0001L36.6385 10.6001L30.3052 16.9001Z"></svg:path></svg:g>`,
})
export class IconParkKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKeyOneIcon],svg[icon-park-key-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="15" cy="33" r="8" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 16L35.5 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 26L37 7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 11L42 17.5"></svg:path></svg:g>`,
})
export class IconParkKeyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKeyTwoIcon],svg[icon-park-key-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="15" cy="33" r="8" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 16L36 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 26L36 8L43 14"></svg:path></svg:g>`,
})
export class IconParkKeyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKeyboardIcon],svg[icon-park-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M15 19C16.3807 19 17.5 17.8807 17.5 16.5C17.5 15.1193 16.3807 14 15 14C13.6193 14 12.5 15.1193 12.5 16.5C12.5 17.8807 13.6193 19 15 19Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M15 27C16.3807 27 17.5 25.8807 17.5 24.5C17.5 23.1193 16.3807 22 15 22C13.6193 22 12.5 23.1193 12.5 24.5C12.5 25.8807 13.6193 27 15 27Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 19C25.3807 19 26.5 17.8807 26.5 16.5C26.5 15.1193 25.3807 14 24 14C22.6193 14 21.5 15.1193 21.5 16.5C21.5 17.8807 22.6193 19 24 19Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 27C25.3807 27 26.5 25.8807 26.5 24.5C26.5 23.1193 25.3807 22 24 22C22.6193 22 21.5 23.1193 21.5 24.5C21.5 25.8807 22.6193 27 24 27Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M33 19C34.3807 19 35.5 17.8807 35.5 16.5C35.5 15.1193 34.3807 14 33 14C31.6193 14 30.5 15.1193 30.5 16.5C30.5 17.8807 31.6193 19 33 19Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M33 27C34.3807 27 35.5 25.8807 35.5 24.5C35.5 23.1193 34.3807 22 33 22C31.6193 22 30.5 23.1193 30.5 24.5C30.5 25.8807 31.6193 27 33 27Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 33H31"></svg:path></svg:g>`,
})
export class IconParkKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKeyboardOneIcon],svg[icon-park-keyboard-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="24" x="4" y="18" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="14" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="16" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="10" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="20" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="22" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="26" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="28" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="32" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="34" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="38" cy="24" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 36H31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 18V13.125C33 12.5727 33.4477 12.125 34 12.125H39C39.5523 12.125 40 11.6773 40 11.125V6"></svg:path></svg:g>`,
})
export class IconParkKeyboardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKeyholeIcon],svg[icon-park-keyhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 15C21.2386 15 19 17.2386 19 20C19 21.6358 19.7856 23.0882 21 24.0004L20 32H28L27.0005 24C28.2147 23.0878 29 21.6356 29 20C29 17.2386 26.7614 15 24 15Z"></svg:path></svg:g>`,
})
export class IconParkKeyholeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKeylineIcon],svg[icon-park-keyline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 6H42V42H6V6Z"></svg:path><svg:path fill="#2F88FF" d="M36 24C36 30.6274 30.6274 36 24 36C17.3726 36 12 30.6274 12 24C12 17.3726 17.3726 12 24 12C30.6274 12 36 17.3726 36 24Z"></svg:path><svg:path d="M4 4L44 44"></svg:path><svg:path d="M44 4L4 44"></svg:path></svg:g>`,
})
export class IconParkKeylineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKitchenKnifeIcon],svg[icon-park-kitchen-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 30C14 30 14 34 14 40C14 46 22 46 22 40C22 34 22 30 22 30"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 37H14"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M14 6C14 4.89543 14.8954 4 16 4H32.6349C32.9537 4 33.2672 4.07486 33.5228 4.26546C34.5417 5.0254 37.1977 7.58171 38 14C38.7728 20.1822 36.6313 26.3644 35.6182 28.8547C35.3295 29.5645 34.6334 30 33.8672 30H14V6Z"></svg:path><svg:circle cx="22" cy="10" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkKitchenKnifeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKnifeForkIcon],svg[icon-park-knife-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 4V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 5V15C8 20 14 20 14 20C14 20 20 20 20 15V5"></svg:path><svg:path fill="#2F88FF" d="M30 12C30 4 38 4 38 4V21H30V12Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 21H30V12C30 4 38 4 38 4V21ZM38 21V44"></svg:path></svg:g>`,
})
export class IconParkKnifeForkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKoalaBearIcon],svg[icon-park-koala-bear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="26" r="15" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M21 31.5625C21 29.664 24 24 24 24C24 24 27 29.664 27 31.5625C27 33.461 25.6569 35 24 35C22.3431 35 21 33.461 21 31.5625Z"></svg:path><svg:circle cx="17.039" cy="23.493" r="2" fill="#fff"></svg:circle><svg:circle cx="31.039" cy="23.493" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 11.9269C15.6214 9.52446 8.49451 6.09319 5.34959 9.30595C4.01392 10.4178 2.98594 15.4499 5.72704 23L10 19.9798"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 11.9269C32.3786 9.52446 39.5055 6.0932 42.6504 9.30595C43.9861 10.4178 45.0141 15.4499 42.273 23L38 19.9802"></svg:path></svg:g>`,
})
export class IconParkKoalaBearIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkKungfuIcon],svg[icon-park-kungfu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M11 17C13.7614 17 16 14.7614 16 12C16 9.23858 13.7614 7 11 7C8.23858 7 6 9.23858 6 12C6 14.7614 8.23858 17 11 17Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 18L28 24L25 42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 24L44 11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 16.8L27 8L20 18L16 27L10 30"></svg:path></svg:g>`,
})
export class IconParkKungfuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLabelIcon],svg[icon-park-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 4H39V44L24 33.4286L9 44V4Z"></svg:path><svg:rect width="30" height="12" x="9" y="4" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkLabelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLadderIcon],svg[icon-park-ladder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 42C10 42 10 16 10 10C10 4 16 4 16 4"></svg:path><svg:path d="M10 14H28"></svg:path><svg:path d="M10 22H28"></svg:path><svg:path d="M10 30H28"></svg:path><svg:path d="M10 38H28"></svg:path><svg:path d="M34 43C34 43 34 17 34 11C34 5 40 5 40 5"></svg:path></svg:g>`,
})
export class IconParkLadderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLadderOneIcon],svg[icon-park-ladder-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 17L35 17"></svg:path><svg:path d="M15 26L33 26"></svg:path><svg:path d="M12 35L30 35"></svg:path><svg:path d="M28.5652 43L38.3054 7.52959C38.655 6.25653 37.697 5 36.3768 5H22.2145C21.3374 5 20.5626 5.57158 20.3036 6.40968L9 43"></svg:path><svg:path d="M17 18L21 42"></svg:path><svg:path d="M35 18L39 42"></svg:path></svg:g>`,
})
export class IconParkLadderOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLampIcon],svg[icon-park-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M14 9.5C14 7.567 15.567 6 17.5 6C19.433 6 21 7.567 21 9.5V21H14V9.5Z"></svg:path><svg:path fill="#2F88FF" d="M27 9.5C27 7.567 28.567 6 30.5 6C32.433 6 34 7.567 34 9.5V21H27V9.5Z"></svg:path><svg:rect width="12" height="8" x="18" y="34" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path d="M10 22C10 21.4477 10.4477 21 11 21H37C37.5523 21 38 21.4477 38 22V26C38 30.4183 34.4183 34 30 34H18C13.5817 34 10 30.4183 10 26V22Z"></svg:path></svg:g>`,
})
export class IconParkLampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLandSurveyingIcon],svg[icon-park-land-surveying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 26V44"></svg:path><svg:path stroke-linecap="round" d="M24 26L36 44"></svg:path><svg:path stroke-linecap="round" d="M24 26L12 44"></svg:path><svg:path stroke-linecap="round" d="M24 14V20"></svg:path><svg:path stroke-linecap="round" d="M19 20L29 20"></svg:path><svg:rect width="26" height="8" x="10" y="6" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M40 8V12"></svg:path></svg:g>`,
})
export class IconParkLandSurveyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLandingIcon],svg[icon-park-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 43L43 43"></svg:path><svg:path fill="#2F88FF" d="M4 25V14.9901C5.21558 14.9901 8.81818 19.1686 10 21L21 23V5L25 7L30.8312 25.9783L40 28C44 29 44 31.5004 44 31.9998C44 35 40.5 35 40 35C36 35 4 25 4 25Z"></svg:path></svg:g>`,
})
export class IconParkLandingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLandscapeIcon],svg[icon-park-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 28C17 28 26.5 29.5 26.5 33C26.5 36.5 21.394 35.7386 19 36C16.9274 36 12 36 12 39C12 43 32.5447 44 36.5 44"></svg:path><svg:path d="M31 15C31 10.7333 26.7297 4 20.805 4C14.8804 4 10.333 12 8.54511 19.4667C6.7572 26.9333 7.01261 36 7.01261 36"></svg:path><svg:path d="M26 24C26 21.5 27.4 17 32 17C36 17 38.2 21.0424 39 24.5C39.8 27.9576 40 33 40 33"></svg:path></svg:g>`,
})
export class IconParkLandscapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLaptopIcon],svg[icon-park-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="20" x="8" y="8" fill="#2F88FF"></svg:rect><svg:path d="M8 28L4 41H44L40 28"></svg:path><svg:path fill="#2F88FF" d="M19.9 35H28.1L30 41H18L19.9 35Z"></svg:path></svg:g>`,
})
export class IconParkLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLaptopComputerIcon],svg[icon-park-laptop-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="38" height="24" x="5" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 40L44 40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 14L26 14"></svg:path></svg:g>`,
})
export class IconParkLaptopComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLaptopOneIcon],svg[icon-park-laptop-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 11C8 9.34315 9.34315 8 11 8H37C38.6569 8 40 9.34315 40 11V32H8V11Z"></svg:path><svg:path fill="#2F88FF" d="M4 32H44V34C44 37.3137 41.3137 40 38 40H10C6.68629 40 4 37.3137 4 34V32Z"></svg:path></svg:g>`,
})
export class IconParkLaptopOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLarkIcon],svg[icon-park-lark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M41.0716 5.99409L3.31071 16.5187L12.3856 25.8126L20.7998 25.9594L30.4827 16.5187C30.2266 15.9943 30.0985 15.5552 30.0985 15.2013C30.0985 14.4074 30.4104 13.7786 30.8947 13.333C31.7241 12.57 32.7222 12.4558 33.8889 12.9905L41.0716 5.99409Z"></svg:path><svg:path d="M42.1021 6.72842L31.5775 44.4893L22.2836 35.4144L22.1367 27.0002L31.5115 17.4816C32.0195 17.8454 32.5743 18.0105 33.1759 17.9769C34.0784 17.9264 34.6614 17.3813 34.9349 17.0602C35.2083 16.7392 35.5293 16.2051 35.5025 15.4113C35.4847 14.8821 35.3109 14.3941 34.9812 13.9472L42.1021 6.72842Z"></svg:path></svg:g>`,
})
export class IconParkLarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLarkOneIcon],svg[icon-park-lark-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3.49381 17.7193L41.6776 6.32232L30.3639 44.5893L21.4834 35.7089L21.5251 26.4749L11.9791 26.2045L3.49381 17.7193Z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M27.5352 14.8908C25.9731 16.4529 25.9731 18.9856 27.5352 20.5477C29.0973 22.1098 31.63 22.1098 33.1921 20.5477C34.7542 18.9856 34.7542 16.4529 33.1921 14.8908C31.63 13.3287 29.0973 13.3287 27.5352 14.8908Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41.6777 6.40558L30.364 17.7193"></svg:path></svg:g>`,
})
export class IconParkLarkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLatticePatternIcon],svg[icon-park-lattice-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8H10"></svg:path><svg:path d="M14 16H18"></svg:path><svg:path d="M16 6V10"></svg:path><svg:path d="M8 14V18"></svg:path><svg:path d="M22 8H26"></svg:path><svg:path d="M30 16H34"></svg:path><svg:path d="M32 6V10"></svg:path><svg:path d="M24 14V18"></svg:path><svg:path d="M38 8H42"></svg:path><svg:path d="M40 14V18"></svg:path><svg:path d="M6 24H10"></svg:path><svg:path d="M14 32H18"></svg:path><svg:path d="M16 22V26"></svg:path><svg:path d="M8 30V34"></svg:path><svg:path d="M22 24H26"></svg:path><svg:path d="M30 32H34"></svg:path><svg:path d="M32 22V26"></svg:path><svg:path d="M24 30V34"></svg:path><svg:path d="M38 24H42"></svg:path><svg:path d="M40 30V34"></svg:path><svg:path d="M6 40H10"></svg:path><svg:path d="M16 38V42"></svg:path><svg:path d="M22 40H26"></svg:path><svg:path d="M32 38V42"></svg:path><svg:path d="M38 40H42"></svg:path></svg:g>`,
})
export class IconParkLatticePatternIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLayersIcon],svg[icon-park-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M4 11.9143L24 19L44 11.9143L24 5L4 11.9143Z"></svg:path><svg:path stroke-linecap="round" d="M4 20L24 27L44 20"></svg:path><svg:path stroke-linecap="round" d="M4 28L24 35L44 28"></svg:path><svg:path stroke-linecap="round" d="M4 36L24 43L44 36"></svg:path></svg:g>`,
})
export class IconParkLayersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLayoutFiveIcon],svg[icon-park-layout-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 16H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 13V19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 13V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 30L42 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 16V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14 42H20"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 27V33"></svg:path></svg:g>`,
})
export class IconParkLayoutFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLayoutFourIcon],svg[icon-park-layout-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 28L24 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 20H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 25V31"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 17V23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 42V6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21 6H27"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21 42H27"></svg:path></svg:g>`,
})
export class IconParkLayoutFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLayoutOneIcon],svg[icon-park-layout-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 16H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 13V19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 14V20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 16V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M29 42H35"></svg:path></svg:g>`,
})
export class IconParkLayoutOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLayoutThreeIcon],svg[icon-park-layout-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 22L42 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 22V6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M26 6H32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 19V25"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 19V25"></svg:path></svg:g>`,
})
export class IconParkLayoutThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLayoutTwoIcon],svg[icon-park-layout-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 24H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 21V27"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 21V27"></svg:path></svg:g>`,
})
export class IconParkLayoutTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeafIcon],svg[icon-park-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 24C37 38.0938 24 44 24 44C24 44 11 39.375 11 24C11 8.625 24 4 24 4C24 4 37 9.90625 37 24Z"></svg:path><svg:path d="M24 36L29 31"></svg:path><svg:path d="M24 29L19 24"></svg:path><svg:path d="M24 23L29 18"></svg:path><svg:path d="M24 44V14"></svg:path></svg:g>`,
})
export class IconParkLeafIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeavesIcon],svg[icon-park-leaves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 43C31 43 18 44 11 36C4 28 4 4 4 4C4 4 28 3 36 9C44 15 42 32 42 32"></svg:path><svg:path d="M44 44C44 44 32.8207 35.5515 26 28C19.1793 20.4485 16 13 16 13"></svg:path><svg:path d="M26 28L27 15"></svg:path><svg:path d="M26 28L16 27"></svg:path></svg:g>`,
})
export class IconParkLeavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeavesOneIcon],svg[icon-park-leaves-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M37 23.8788C37 30.5731 31.1797 36 24 36C16.8203 36 11 30.5731 11 23.8788C11 17.1844 24 4 24 4C24 4 37 17.1844 37 23.8788Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 4V36"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 36V44"></svg:path><svg:path stroke="#000" d="M37 23.8789C37 30.5733 31.1797 36.0001 24 36.0001C16.8203 36.0001 11 30.5733 11 23.8789"></svg:path><svg:path stroke="#000" d="M37 23.8788C37 17.1844 24 4 24 4C24 4 11 17.1844 11 23.8788"></svg:path></svg:g>`,
})
export class IconParkLeavesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeavesTwoIcon],svg[icon-park-leaves-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M20.9999 17C29.3846 14.8792 38.6651 8.24004 41.9999 5C41.9999 20 38.1985 28.4716 35.9999 31C25.9999 42.5 15.0652 37.1591 12.9999 33C8.14514 23.2233 15.0699 18.4999 20.9999 17Z"></svg:path><svg:path d="M6 43C6.41176 41 8.38824 36.4 13 34"></svg:path></svg:g>`,
})
export class IconParkLeavesTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLedDiodeIcon],svg[icon-park-led-diode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 24C6 22.8954 6.89543 22 8 22H40C41.1046 22 42 22.8954 42 24V30H6V24Z"></svg:path><svg:path stroke="#000" d="M19 30V44"></svg:path><svg:path stroke="#000" d="M29 30V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 4C16.268 4 10 10.268 10 18V22H38V18C38 10.268 31.732 4 24 4Z"></svg:path><svg:circle cx="24" cy="13" r="3" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkLedDiodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftIcon],svg[icon-park-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 36L19 24L31 12"></svg:path>`,
})
export class IconParkLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftAlignmentIcon],svg[icon-park-left-alignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 14L42 14"></svg:path><svg:path d="M6 24L30 24"></svg:path><svg:path d="M6 34H14"></svg:path></svg:g>`,
})
export class IconParkLeftAlignmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftAndRightBranchIcon],svg[icon-park-left-and-right-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 8C14.5 8.00004 17.05 7.99905 18.0143 13.0614C18.989 18.1786 19.3286 22.8477 21 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 40C33.5 40 30.95 40.001 29.9857 34.9386C29.011 29.8214 28.6714 25.1523 27 24.0001"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 40C14.5 40 17.05 40.001 18.0143 34.9386C18.989 29.8214 19.3286 25.1523 21 24.0001"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 8C33.5 8.00004 30.95 7.99905 29.9857 13.0614C29.011 18.1786 28.6714 22.8477 27 24"></svg:path><svg:circle r="4" fill="#000" transform="matrix(-1 0 0 1 21 24)"></svg:circle><svg:circle r="4" fill="#000" transform="matrix(-1 0 0 1 27 24)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 24H13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 24L35 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 24H5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 24H41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 8H5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 8H41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 40H5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 40H41"></svg:path></svg:g>`,
})
export class IconParkLeftAndRightBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftBarIcon],svg[icon-park-left-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M16 6V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13 42H19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13 6H19"></svg:path></svg:g>`,
})
export class IconParkLeftBarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftBranchIcon],svg[icon-park-left-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 8C27.5 7.98823 31.5 7.99912 32.5714 13.0615C33.6545 18.1787 38.1429 22.8478 40 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 40C27.5 40 31.5 40.0009 32.5714 34.9385C33.6545 29.8213 38.1429 25.1522 40 24"></svg:path><svg:circle r="4" fill="#000" transform="matrix(-1 0 0 1 40 24)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 24L26 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 24H6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 8H6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 40H6"></svg:path></svg:g>`,
})
export class IconParkLeftBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftCIcon],svg[icon-park-left-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 33L18 24L27 15"></svg:path></svg:g>`,
})
export class IconParkLeftCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftExpandIcon],svg[icon-park-left-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="36" x="6" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path d="M42 6V42"></svg:path></svg:g>`,
})
export class IconParkLeftExpandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftOneIcon],svg[icon-park-left-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M30 36L18 24L30 12V36Z"></svg:path>`,
})
export class IconParkLeftOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftSmallIcon],svg[icon-park-left-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 23.9917H36"></svg:path><svg:path d="M24 36L12 24L24 12"></svg:path></svg:g>`,
})
export class IconParkLeftSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftSmallDownIcon],svg[icon-park-left-small-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15 33L32 16"></svg:path><svg:path d="M33 33H15V15"></svg:path></svg:g>`,
})
export class IconParkLeftSmallDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftSmallUpIcon],svg[icon-park-left-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 32L15 15"></svg:path><svg:path d="M15 33V15H33"></svg:path></svg:g>`,
})
export class IconParkLeftSmallUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftSquareIcon],svg[icon-park-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M29 34L19 24L29 14"></svg:path></svg:g>`,
})
export class IconParkLeftSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeftTwoIcon],svg[icon-park-left-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 5L6 24L24 43L24 31L42 31V17H24V5Z"></svg:path>`,
})
export class IconParkLeftTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLemonIcon],svg[icon-park-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M36 26C36 19.5917 31.617 13.189 27 11.527L24 8L21 11.527C16.383 13.189 12 19.5917 12 26C12 32.4083 16.383 38.811 21 40.473C21.9537 40.8163 22.96 44 24 44C25.04 44 26.0463 40.8163 27 40.473C31.617 38.811 36 32.4083 36 26Z"></svg:path><svg:path d="M35.1422 4.23223C36.1534 4.3613 36.7279 5.35639 36.3341 6.29667C35.8 7.57164 34.8288 9.25356 33.1962 10.1962C31.5635 11.1387 29.6213 11.1389 28.2502 10.9639C27.2389 10.8348 26.6644 9.83976 27.0582 8.89948C27.5923 7.62451 28.5635 5.94259 30.1962 5C31.8288 4.05741 33.771 4.05722 35.1422 4.23223Z"></svg:path></svg:g>`,
})
export class IconParkLemonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLensAlignmentIcon],svg[icon-park-lens-alignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 10C14 12.2091 12.2091 14 10 14M14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14M14 10H20M10 14V20"></svg:path><svg:path fill="#2F88FF" d="M14 38C14 35.7909 12.2091 34 10 34C7.79086 34 6 35.7909 6 38C6 40.2091 7.79086 42 10 42C12.2091 42 14 40.2091 14 38Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 38C14 35.7909 12.2091 34 10 34M14 38C14 40.2091 12.2091 42 10 42C7.79086 42 6 40.2091 6 38C6 35.7909 7.79086 34 10 34M14 38H20M10 34V28"></svg:path><svg:path fill="#2F88FF" d="M34 38C34 35.7909 35.7909 34 38 34C40.2091 34 42 35.7909 42 38C42 40.2091 40.2091 42 38 42C35.7909 42 34 40.2091 34 38Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 38C34 35.7909 35.7909 34 38 34M34 38C34 40.2091 35.7909 42 38 42C40.2091 42 42 40.2091 42 38C42 35.7909 40.2091 34 38 34M34 38H28M38 34V28"></svg:path><svg:path fill="#2F88FF" d="M34 10C34 12.2091 35.7909 14 38 14C40.2091 14 42 12.2091 42 10C42 7.79086 40.2091 6 38 6C35.7909 6 34 7.79086 34 10Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 10C34 12.2091 35.7909 14 38 14M34 10C34 7.79086 35.7909 6 38 6C40.2091 6 42 7.79086 42 10C42 12.2091 40.2091 14 38 14M34 10H28M38 14V20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 24H31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31V17"></svg:path></svg:g>`,
})
export class IconParkLensAlignmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLeoIcon],svg[icon-park-leo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="13" cy="27" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 20.9999C13 15.5002 15 5.00024 24 5.00024C28.5 5.00024 36.7205 7.33192 33.5358 20.5613C33.2552 21.7271 32.154 23.9747 32.154 23.9747L30.5501 27.5773C28.8914 30.918 26.748 39.4542 33.5358 42.6106C35.5941 43.5678 40.0171 42.9496 41 38.6017"></svg:path></svg:g>`,
})
export class IconParkLeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelIcon],svg[icon-park-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 42L4 18.5L9.69488 6L38.3051 6L44 18.5L24 42Z"></svg:path><svg:path stroke="#fff" d="M32 18L24 27L16 18"></svg:path></svg:g>`,
})
export class IconParkLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelAdjustmentIcon],svg[icon-park-level-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.1139 18L14.877 3.95581L41.9229 11.2027L40.1016 18M7.89848 30L6.07715 36.7973L33.1231 44.0442L36.8862 30"></svg:path><svg:path stroke-dasharray="2 6" d="M4 24H44"></svg:path></svg:g>`,
})
export class IconParkLevelAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelEightTitleIcon],svg[icon-park-level-eight-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 24H23"></svg:path><svg:path d="M37 29C39.2091 29 41 27.2091 41 25C41 22.7909 39.2091 21 37 21C34.7909 21 33 22.7909 33 25C33 27.2091 34.7909 29 37 29Z"></svg:path><svg:path d="M37 40C39.7614 40 42 37.7614 42 35C42 32.2386 39.7614 30 37 30C34.2386 30 32 32.2386 32 35C32 37.7614 34.2386 40 37 40Z"></svg:path></svg:g>`,
})
export class IconParkLevelEightTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelFiveTitleIcon],svg[icon-park-level-five-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M24 8V40"></svg:path><svg:path d="M7 24H23"></svg:path><svg:path d="M40 21.0093H32V28.0341C32 28 34 27 37 27C40 27 41 29.5339 41 33.5C41 37.4661 40 40 36 40C33 40 32 38 32 36.0078"></svg:path></svg:g>`,
})
export class IconParkLevelFiveTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelFourTitleIcon],svg[icon-park-level-four-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M24 8V40"></svg:path><svg:path d="M7 24H23"></svg:path><svg:path d="M39.9767 40V20L31 32.9967V35.0199H43"></svg:path></svg:g>`,
})
export class IconParkLevelFourTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelNineTitleIcon],svg[icon-park-level-nine-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 24H23"></svg:path><svg:path d="M36.5 21C33.4624 21 31 23.4624 31 26.5C31 29.5376 33.4624 32 36.5 32C39.5376 32 42 29.5376 42 26.5C42 23.4624 39.5376 21 36.5 21Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 36C31.8184 38.1932 33.5476 40 36.5 40C39.5376 40 42 37.3137 42 34V27"></svg:path></svg:g>`,
})
export class IconParkLevelNineTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelSevenTitleIcon],svg[icon-park-level-seven-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M24 8V40"></svg:path><svg:path d="M7 24H23"></svg:path><svg:path d="M31.998 22H41.9997L33.9936 40"></svg:path></svg:g>`,
})
export class IconParkLevelSevenTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelSixTitleIcon],svg[icon-park-level-six-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 24H23"></svg:path><svg:path d="M36.5 40C39.5376 40 42 37.5376 42 34.5C42 31.4624 39.5376 29 36.5 29C33.4624 29 31 31.4624 31 34.5C31 37.5376 33.4624 40 36.5 40Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41.5962 24.7392C40.7778 22.5461 38.8044 21 36.5 21C33.4624 21 31 23.6863 31 27V34"></svg:path></svg:g>`,
})
export class IconParkLevelSixTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLibraIcon],svg[icon-park-libra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M4 39H44"></svg:path><svg:path stroke-linejoin="round" d="M4 27H15.5"></svg:path><svg:path stroke-linejoin="round" d="M32.5 27L44 27"></svg:path><svg:path d="M15.5143 27C15.3799 26.8372 15.25 26.6705 15.125 26.5C15.0052 26.3367 14.8898 26.17 14.7789 26C13.6538 24.2744 13 22.2136 13 20C13 13.9249 17.9249 9 24 9C30.0751 9 35 13.9249 35 20C35 22.2136 34.3462 24.2744 33.2211 26C33.1102 26.17 32.9948 26.3367 32.875 26.5C32.75 26.6705 32.6201 26.8372 32.4857 27"></svg:path></svg:g>`,
})
export class IconParkLibraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLifebuoyIcon],svg[icon-park-lifebuoy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38.1421 38.1421C45.9526 30.3316 45.9526 17.6684 38.1421 9.85786C30.3316 2.04738 17.6684 2.04738 9.85786 9.85786C2.04738 17.6684 2.04738 30.3316 9.85786 38.1421C17.6684 45.9526 30.3316 45.9526 38.1421 38.1421ZM32.4853 15.5147C37.1716 20.201 37.1716 27.799 32.4853 32.4853C27.799 37.1716 20.201 37.1716 15.5147 32.4853C10.8284 27.799 10.8284 20.201 15.5147 15.5147C20.201 10.8284 27.799 10.8284 32.4853 15.5147Z" clip-rule="evenodd"></svg:path><svg:path d="M38.142 38.1421L32.4851 32.4852"></svg:path><svg:path d="M9.85791 38.1421L15.5148 32.4852"></svg:path><svg:path d="M9.85791 9.85791L15.5148 15.5148"></svg:path><svg:path d="M38.142 9.85791L32.4851 15.5148"></svg:path><svg:path d="M32.4853 32.4853C37.1716 27.799 37.1716 20.201 32.4853 15.5147C27.799 10.8284 20.201 10.8284 15.5147 15.5147C10.8284 20.201 10.8284 27.799 15.5147 32.4853C20.201 37.1716 27.799 37.1716 32.4853 32.4853Z"></svg:path></svg:g>`,
})
export class IconParkLifebuoyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLightIcon],svg[icon-park-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 16V22"></svg:path><svg:path d="M38.1421 21.8579L33.8994 26.1005"></svg:path><svg:path d="M44 36H38"></svg:path><svg:path d="M4 36H10"></svg:path><svg:path d="M9.85791 21.8579L14.1006 26.1005"></svg:path><svg:path d="M18 36H30"></svg:path></svg:g>`,
})
export class IconParkLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLightHouseIcon],svg[icon-park-light-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M6 44H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M17 20H31"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M19 20H24H29L32 44H16L19 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M19 9L21 20H27L29 9"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 12L29 9L24 4L19 9L16 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M37 7L40 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 7L8 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M37 19L40 22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 19L8 22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 13H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10 13H6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 28L30 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 36H31"></svg:path><svg:path stroke="#000" d="M29 20L32 44"></svg:path><svg:path stroke="#000" d="M19 20L16 44"></svg:path></svg:g>`,
})
export class IconParkLightHouseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLightMemberIcon],svg[icon-park-light-member-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M35.0563 15.0002L18.4627 7.66508C17.5887 7.27875 16.5635 7.56461 16.0156 8.34745L11.3589 15.0002"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M43 15H5C4.44772 15 4 15.4477 4 16V40C4 40.5523 4.44772 41 5 41H43C43.5523 41 44 40.5523 44 40V16C44 15.4477 43.5523 15 43 15Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 23L24.1026 33L29 23"></svg:path></svg:g>`,
})
export class IconParkLightMemberIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLightRainIcon],svg[icon-park-light-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33"></svg:path><svg:path d="M16 23V27"></svg:path><svg:path d="M24 27V31"></svg:path><svg:path d="M32 23V27"></svg:path><svg:path d="M16 34V38"></svg:path><svg:path d="M24 38V42"></svg:path><svg:path d="M32 34V38"></svg:path></svg:g>`,
})
export class IconParkLightRainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLightningIcon],svg[icon-park-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M19 4H37L26 18H41L17 44L22 25H8L19 4Z"></svg:path>`,
})
export class IconParkLightningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLikeIcon],svg[icon-park-like-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"></svg:path>`,
})
export class IconParkLikeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLincolnIcon],svg[icon-park-lincoln-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M30.19 4H17.81C16.7825 4 15.9221 4.77859 15.8199 5.80099L14.0199 23.801C14.0067 23.9333 14.0067 24.0667 14.0199 24.199L15.8199 42.199C15.9221 43.2214 16.7825 44 17.81 44H30.19C31.2175 44 32.0779 43.2214 32.1801 42.199L33.9801 24.199C33.9933 24.0667 33.9933 23.9333 33.9801 23.801L32.1801 5.80099C32.0779 4.77859 31.2175 4 30.19 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 24L34 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 4V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 4H28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 44H28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 14L14.0199 23.801C14.0067 23.9333 14.0067 24.0667 14.0199 24.199L15 34"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 14L33.9801 23.801C33.9933 23.9333 33.9933 24.0667 33.9801 24.199L33 34"></svg:path></svg:g>`,
})
export class IconParkLincolnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkIcon],svg[icon-park-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.7073 9.56521L9.85801 24.4145C6.34329 27.9292 6.34329 33.6277 9.85801 37.1424V37.1424C13.3727 40.6571 19.0712 40.6571 22.5859 37.1424L40.2636 19.4647C42.6067 17.1216 42.6067 13.3226 40.2636 10.9794V10.9794C37.9205 8.63628 34.1215 8.63628 31.7783 10.9794L14.1007 28.6571C12.9291 29.8287 12.9291 31.7282 14.1007 32.8997V32.8997C15.2722 34.0713 17.1717 34.0713 18.3433 32.8997L33.1925 18.0505"></svg:path>`,
})
export class IconParkLinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkBreakIcon],svg[icon-park-link-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 15H42C43.1046 15 44 15.8954 44 17V31C44 32.1046 43.1046 33 42 33H32"></svg:path><svg:path d="M17 15H6C4.89543 15 4 15.8954 4 17V31C4 32.1046 4.89543 33 6 33H17"></svg:path><svg:path d="M24 6V42"></svg:path><svg:path d="M12 24H16"></svg:path><svg:path d="M32 24H36"></svg:path></svg:g>`,
})
export class IconParkLinkBreakIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkCloudIcon],svg[icon-park-link-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 33C9.66666 33 4 31.5 4 25.5C4 18.5 11 17 13 17C14 13.5 16 8 24 8C31 8 34 12 35 15.5C35 15.5 44 16.5 44 25C44 31 39 33 35 33H22"></svg:path><svg:path d="M27 28L22 33L27 38"></svg:path></svg:g>`,
})
export class IconParkLinkCloudIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkCloudFaildIcon],svg[icon-park-link-cloud-faild-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 33C8.66666 33 4 31.5 4 25.5C4 18.5 11 17 13 17C14 13.5 16 8 24 8C31 8 34 12 35 15.5C35 15.5 44 16.5 44 25C44 31 40 33 36 33"></svg:path><svg:path d="M29 28L19 38"></svg:path><svg:path d="M19 28L29 38"></svg:path></svg:g>`,
})
export class IconParkLinkCloudFaildIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkCloudSucessIcon],svg[icon-park-link-cloud-sucess-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 33C8.66666 33 4 31.5 4 25.5C4 18.5 11 17 13 17C14 13.5 16 8 24 8C31 8 34 12 35 15.5C35 15.5 44 16.5 44 25C44 31 40 33 36 33"></svg:path><svg:path d="M18 33L24 38L32 28"></svg:path></svg:g>`,
})
export class IconParkLinkCloudSucessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkFourIcon],svg[icon-park-link-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 24H31"></svg:path><svg:path d="M4 17C4 15.8954 4.89543 15 6 15H42C43.1046 15 44 15.8954 44 17V31C44 32.1046 43.1046 33 42 33H6C4.89543 33 4 32.1046 4 31V17Z"></svg:path></svg:g>`,
})
export class IconParkLinkFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkInIcon],svg[icon-park-link-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 12V4H32V12"></svg:path><svg:path d="M32 36V44H16V36"></svg:path><svg:path d="M18 24L4 24"></svg:path><svg:path d="M44 24L30 24"></svg:path><svg:path d="M24 34V14"></svg:path><svg:path d="M13 19L18 24L13 29"></svg:path><svg:path d="M35 19L30 24L35 29"></svg:path></svg:g>`,
})
export class IconParkLinkInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkInterruptIcon],svg[icon-park-link-interrupt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M27 14H42C43.1046 14 44 14.8954 44 16V30C44 31.1046 43.1046 32 42 32H38"></svg:path><svg:path d="M11 14H6C4.89543 14 4 14.8954 4 16V30C4 31.1046 4.89543 32 6 32H21"></svg:path><svg:path d="M14 6L34 40"></svg:path><svg:path d="M32 23H36"></svg:path><svg:path d="M12 23H16"></svg:path></svg:g>`,
})
export class IconParkLinkInterruptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkLeftIcon],svg[icon-park-link-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 12V4H40V12"></svg:path><svg:path d="M40 36V44H24V36"></svg:path><svg:path d="M24 24L4 24"></svg:path><svg:path d="M32 34V14"></svg:path><svg:path d="M12 16L4 24L12 32"></svg:path></svg:g>`,
})
export class IconParkLinkLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkOneIcon],svg[icon-park-link-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26.2401 16.373L17.1001 7.23303C14.4388 4.57168 10.0653 4.6303 7.33158 7.36397C4.59791 10.0976 4.53929 14.4712 7.20064 17.1325L15.1359 25.0678"></svg:path><svg:path d="M32.9027 23.0031L40.838 30.9384C43.4994 33.5998 43.4407 37.9733 40.7071 40.707C37.9734 43.4407 33.5999 43.4993 30.9385 40.8379L21.7985 31.6979"></svg:path><svg:path d="M26.1093 26.1416C28.843 23.4079 28.9016 19.0344 26.2403 16.373"></svg:path><svg:path d="M21.7989 21.7984C19.0652 24.5321 19.0066 28.9056 21.6679 31.5669"></svg:path></svg:g>`,
})
export class IconParkLinkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkOutIcon],svg[icon-park-link-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 12V4H32V12"></svg:path><svg:path d="M32 36V44H16V36"></svg:path><svg:path d="M18 24L4 24"></svg:path><svg:path d="M44 24L30 24"></svg:path><svg:path d="M24 34V14"></svg:path><svg:path d="M39 19L44 24L39 29"></svg:path><svg:path d="M9 19L4 24L9 29"></svg:path></svg:g>`,
})
export class IconParkLinkOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkRightIcon],svg[icon-park-link-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 12V4H24V12"></svg:path><svg:path d="M24 36V44H8V36"></svg:path><svg:path d="M44 24L24 24"></svg:path><svg:path d="M16 34V14"></svg:path><svg:path d="M36 16L44 24L36 32"></svg:path></svg:g>`,
})
export class IconParkLinkRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkThreeIcon],svg[icon-park-link-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="18" x="34.607" y="3.494" rx="2" transform="rotate(45 34.607 3.494)"></svg:rect><svg:rect width="14" height="18" x="16.223" y="21.879" rx="2" transform="rotate(45 16.223 21.879)"></svg:rect><svg:path stroke-linecap="round" d="M31.0723 16.929L16.9301 31.0711"></svg:path></svg:g>`,
})
export class IconParkLinkThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLinkTwoIcon],svg[icon-park-link-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 19H20C15.5817 19 12 22.5817 12 27C12 31.4183 15.5817 35 20 35H36C40.4183 35 44 31.4183 44 27C44 24.9711 43.2447 23.1186 42 21.7084"></svg:path><svg:path d="M6 24.2916C4.75527 22.8814 4 21.0289 4 19C4 14.5817 7.58172 11 12 11H28C32.4183 11 36 14.5817 36 19C36 23.4183 32.4183 27 28 27H18"></svg:path></svg:g>`,
})
export class IconParkLinkTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLipGlossIcon],svg[icon-park-lip-gloss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M24 12H8C8 12 8 16 9 26C10 36 12 44 12 44H20C20 44 22 36 23 26C24 16 24 12 24 12Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 34H28C28 34 28 36 29 39C30 42 31.5 44 31.5 44H38.5C38.5 44 40 42 41 39C42 36 42 34 42 34Z"></svg:path><svg:path d="M35 34V13"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M31 7H39L37 13H33L31 7Z"></svg:path><svg:rect width="10" height="6" x="11" y="6" fill="#2F88FF" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkLipGlossIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLipTattooIcon],svg[icon-park-lip-tattoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M25 19.8902C23.5 17.37 19.5 17.3699 18 19.8902C16.8849 21.7639 13 24.5 12 24.9432C13.6667 27.2955 19.5 32 25 32C31.5 32 36.1667 27.2955 38 24.9432C37 24.5 34.8361 22.8196 32.5 19.8902C30.5 17.3823 26.5 17.3823 25 19.8902Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M12 25C15.7899 25.7546 26.2958 26.8111 38 25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"></svg:path><svg:path stroke="#000" d="M39 8.47214L39.343 9.52786H40.4531L39.555 10.1803L39.8981 11.2361L39 10.5836L38.1019 11.2361L38.445 10.1803L37.5469 9.52786H38.657L39 8.47214Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35.0001 22.6562C36.2936 23.9045 37.3745 24.6658 38.0001 24.943C37.1558 26.0262 35.7108 27.6081 33.7627 28.9998"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16.0978 22C14.5549 23.374 12.6562 24.6523 12 24.9432C12.9413 26.2716 15.2114 28.3503 18 29.9081"></svg:path></svg:g>`,
})
export class IconParkLipTattooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLipstickIcon],svg[icon-park-lipstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="12" height="20" x="29" y="24"></svg:rect><svg:rect width="14" height="20" x="7" y="24"></svg:rect><svg:path fill="#2F88FF" d="M10 11.4545V24H18V4C11.5 4 10 9.63636 10 11.4545Z"></svg:path><svg:path d="M7 32L21 32"></svg:path></svg:g>`,
})
export class IconParkLipstickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLipstickOneIcon],svg[icon-park-lipstick-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M39.4346 5.32275L40.8488 6.73697C42.4109 8.29906 42.4109 10.8317 40.8488 12.3938L33.7777 19.4649L29.5351 15.2222L39.4346 5.32275Z"></svg:path><svg:rect width="10" height="16" x="28.121" y="13.808" transform="rotate(45 28.121 13.808)"></svg:rect><svg:rect width="14" height="14" x="15.394" y="23.707" transform="rotate(45 15.394 23.707)"></svg:rect></svg:g>`,
})
export class IconParkLipstickOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLiqueurIcon],svg[icon-park-liqueur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M22.9994 31L7.41097 13L38.5879 13L22.9994 31Z"></svg:path><svg:line x1="23" x2="23" y1="32" y2="42" stroke="#000" stroke-linejoin="round"></svg:line><svg:line x1="17" x2="29" y1="44" y2="44" stroke="#000"></svg:line><svg:line x1="16" x2="30" y1="23" y2="23" stroke="#fff" stroke-linejoin="round"></svg:line><svg:path stroke="#000" stroke-linejoin="round" d="M35 18H38C41.3137 18 44 15.3137 44 12C44 8.68629 41.3137 6 38 6C34.6863 6 32 8.68629 32 12C32 12.3407 32.0284 12.6748 32.083 13"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M10.9993 17.1436L19.5352 27"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M35 17.1435L26.2105 27.2927"></svg:path></svg:g>`,
})
export class IconParkLiqueurIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListIcon],svg[icon-park-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 10L8 13L14 7"></svg:path><svg:path d="M5 24L8 27L14 21"></svg:path><svg:path d="M5 38L8 41L14 35"></svg:path><svg:path d="M21 24H43"></svg:path><svg:path d="M21 38H43"></svg:path><svg:path d="M21 10H43"></svg:path></svg:g>`,
})
export class IconParkListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListAddIcon],svg[icon-park-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 28H24"></svg:path><svg:path d="M8 37H24"></svg:path><svg:path d="M8 19H40"></svg:path><svg:path d="M8 10H40"></svg:path><svg:path d="M30 33H40"></svg:path><svg:path d="M35 28L35 38"></svg:path></svg:g>`,
})
export class IconParkListAddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListAlphabetIcon],svg[icon-park-list-alphabet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 9H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 19H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 29H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 39H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 29H12L6 39H12"></svg:path><svg:path fill="#2F88FF" d="M11 8.9999L7 9L6.3 16H11.7L11 8.9999Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 19L6.3 16M12 19L11.7 16M11.7 16L11 8.9999L7 9L6.3 16M11.7 16H6.3"></svg:path></svg:g>`,
})
export class IconParkListAlphabetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListBottomIcon],svg[icon-park-list-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M8 42C10.2091 42 12 40.2091 12 38C12 35.7909 10.2091 34 8 34C5.79086 34 4 35.7909 4 38C4 40.2091 5.79086 42 8 42Z"></svg:path><svg:path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z"></svg:path><svg:path d="M8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26Z"></svg:path><svg:path stroke-linecap="round" d="M20 24H44"></svg:path><svg:path stroke-linecap="round" d="M20 38H44"></svg:path><svg:path stroke-linecap="round" d="M20 10H44"></svg:path></svg:g>`,
})
export class IconParkListBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListCheckboxIcon],svg[icon-park-list-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20 24H44H20Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 24H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20 38H44H20Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 38H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20 10H44H20Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 10H44"></svg:path><svg:rect width="8" height="8" x="4" y="34" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="8" height="8" x="4" y="20" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:rect width="8" height="8" x="4" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect></svg:g>`,
})
export class IconParkListCheckboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListFailIcon],svg[icon-park-list-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 10H44"></svg:path><svg:path d="M20 24H44"></svg:path><svg:path d="M20 38H44"></svg:path><svg:path d="M5 7L11 13M11 7L5 13"></svg:path><svg:circle cx="8" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="8" cy="38" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkListFailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListMiddleIcon],svg[icon-park-list-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M8 28C10.2091 28 12 26.2091 12 24C12 21.7909 10.2091 20 8 20C5.79086 20 4 21.7909 4 24C4 26.2091 5.79086 28 8 28Z"></svg:path><svg:path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z"></svg:path><svg:path d="M8 40C9.10457 40 10 39.1046 10 38C10 36.8954 9.10457 36 8 36C6.89543 36 6 36.8954 6 38C6 39.1046 6.89543 40 8 40Z"></svg:path><svg:path stroke-linecap="round" d="M20 24H44"></svg:path><svg:path stroke-linecap="round" d="M20 38H44"></svg:path><svg:path stroke-linecap="round" d="M20 10H44"></svg:path></svg:g>`,
})
export class IconParkListMiddleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListNumbersIcon],svg[icon-park-list-numbers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 9H42"></svg:path><svg:path d="M20 19H42"></svg:path><svg:path d="M20 29H42"></svg:path><svg:path d="M20 39H42"></svg:path><svg:path d="M6 29H12V32L6 38V39H12"></svg:path><svg:path d="M7 11L9 9V19M9 19H7M9 19H11"></svg:path></svg:g>`,
})
export class IconParkListNumbersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListOneIcon],svg[icon-park-list-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 6H34V12H18V6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 21H38V27H18V21Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 36H44V42H18V36Z"></svg:path><svg:circle cx="8" cy="9" r="2"></svg:circle><svg:circle cx="8" cy="24" r="2"></svg:circle><svg:circle cx="8" cy="39" r="2"></svg:circle></svg:g>`,
})
export class IconParkListOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListSuccessIcon],svg[icon-park-list-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 10H44"></svg:path><svg:path d="M20 24H44"></svg:path><svg:path d="M20 38H44"></svg:path><svg:circle cx="8" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="8" cy="38" r="4" fill="#2F88FF"></svg:circle><svg:path d="M4 10L7 13L13 7"></svg:path></svg:g>`,
})
export class IconParkListSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListTopIcon],svg[icon-park-list-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M8 14C10.2091 14 12 12.2091 12 10C12 7.79086 10.2091 6 8 6C5.79086 6 4 7.79086 4 10C4 12.2091 5.79086 14 8 14Z"></svg:path><svg:path d="M8 26C9.10457 26 10 25.1046 10 24C10 22.8954 9.10457 22 8 22C6.89543 22 6 22.8954 6 24C6 25.1046 6.89543 26 8 26Z"></svg:path><svg:path d="M8 40C9.10457 40 10 39.1046 10 38C10 36.8954 9.10457 36 8 36C6.89543 36 6 36.8954 6 38C6 39.1046 6.89543 40 8 40Z"></svg:path><svg:path stroke-linecap="round" d="M20 24H44"></svg:path><svg:path stroke-linecap="round" d="M20 38H44"></svg:path><svg:path stroke-linecap="round" d="M20 10H44"></svg:path></svg:g>`,
})
export class IconParkListTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListTwoIcon],svg[icon-park-list-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 42C11.2091 42 13 40.2091 13 38C13 35.7909 11.2091 34 9 34C6.79086 34 5 35.7909 5 38C5 40.2091 6.79086 42 9 42Z"></svg:path><svg:path d="M9 14C11.2091 14 13 12.2092 13 10C13 7.79086 11.2091 6 9 6C6.79086 6 5 7.79086 5 10C5 12.2092 6.79086 14 9 14Z"></svg:path><svg:path d="M9 28C11.2091 28 13 26.2092 13 24C13 21.7908 11.2091 20 9 20C6.79086 20 5 21.7908 5 24C5 26.2092 6.79086 28 9 28Z"></svg:path><svg:path stroke-linecap="round" d="M21 24H43"></svg:path><svg:path stroke-linecap="round" d="M21 38H43"></svg:path><svg:path stroke-linecap="round" d="M21 10H43"></svg:path></svg:g>`,
})
export class IconParkListTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkListViewIcon],svg[icon-park-list-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="36" x="4" y="6" rx="3"></svg:rect><svg:path d="M4 14H44"></svg:path><svg:path d="M20 24H36"></svg:path><svg:path d="M20 32H36"></svg:path><svg:path d="M12 24H14"></svg:path><svg:path d="M12 32H14"></svg:path></svg:g>`,
})
export class IconParkListViewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoadingIcon],svg[icon-park-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24C4 35.0457 12.9543 44 24 44V44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"></svg:path><svg:path d="M36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36V36"></svg:path></svg:g>`,
})
export class IconParkLoadingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoadingFourIcon],svg[icon-park-loading-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"></svg:path>`,
})
export class IconParkLoadingFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoadingOneIcon],svg[icon-park-loading-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4V8"></svg:path><svg:path d="M34 6.6795L32 10.1436"></svg:path><svg:path d="M41.3203 14L37.8562 16"></svg:path><svg:path d="M44 24H40"></svg:path><svg:path d="M41.3203 34L37.8562 32"></svg:path><svg:path d="M34 41.3205L32 37.8564"></svg:path><svg:path d="M24 44V40"></svg:path><svg:path d="M14 41.3205L16 37.8564"></svg:path><svg:path d="M6.67969 34L10.1438 32"></svg:path><svg:path d="M4 24H8"></svg:path><svg:path d="M6.67969 14L10.1438 16"></svg:path><svg:path d="M14 6.6795L16 10.1436"></svg:path></svg:g>`,
})
export class IconParkLoadingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoadingThreeIcon],svg[icon-park-loading-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" d="M24 12V15"></svg:path><svg:path stroke="#fff" d="M32.4852 15.5147L30.3639 17.636"></svg:path><svg:path stroke="#fff" d="M36 24H33"></svg:path><svg:path stroke="#fff" d="M32.4852 32.4853L30.3639 30.364"></svg:path><svg:path stroke="#fff" d="M24 36V33"></svg:path><svg:path stroke="#fff" d="M15.5148 32.4853L17.6361 30.364"></svg:path><svg:path stroke="#fff" d="M12 24H15"></svg:path><svg:path stroke="#fff" d="M15.5148 15.5147L17.6361 17.636"></svg:path></svg:g>`,
})
export class IconParkLoadingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoadingTwoIcon],svg[icon-park-loading-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 3.99994V11.9999"></svg:path><svg:path d="M38.1421 9.85779L32.4852 15.5146"></svg:path><svg:path d="M44 23.9999H36"></svg:path><svg:path d="M38.1421 38.1421L32.4852 32.4852"></svg:path><svg:path d="M24 43.9999V35.9999"></svg:path><svg:path d="M9.85791 38.1421L15.5148 32.4852"></svg:path><svg:path d="M4 23.9999H12"></svg:path><svg:path d="M9.85791 9.85779L15.5148 15.5146"></svg:path><svg:path d="M16.3467 5.5224L17.8774 9.21792"></svg:path><svg:path d="M5.52246 16.3461L9.21798 17.8769"></svg:path><svg:path d="M5.52246 31.6537L9.21798 30.123"></svg:path><svg:path d="M16.3467 42.4777L17.8774 38.7822"></svg:path><svg:path d="M31.6538 42.4777L30.123 38.7822"></svg:path><svg:path d="M42.4777 31.6537L38.7822 30.123"></svg:path><svg:path d="M42.4777 16.3461L38.7822 17.8769"></svg:path><svg:path d="M31.6538 5.5224L30.123 9.21792"></svg:path></svg:g>`,
})
export class IconParkLoadingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLocalIcon],svg[icon-park-local-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M9.85786 32.7574C6.23858 33.8432 4 35.3432 4 37C4 40.3137 12.9543 43 24 43C35.0457 43 44 40.3137 44 37C44 35.3432 41.7614 33.8432 38.1421 32.7574"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 35C24 35 37 26.504 37 16.6818C37 9.67784 31.1797 4 24 4C16.8203 4 11 9.67784 11 16.6818C11 26.504 24 35 24 35Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 22C26.7614 22 29 19.7614 29 17C29 14.2386 26.7614 12 24 12C21.2386 12 19 14.2386 19 17C19 19.7614 21.2386 22 24 22Z"></svg:path></svg:g>`,
})
export class IconParkLocalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLocalPinIcon],svg[icon-park-local-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 20C28.4183 20 32 16.4183 32 12C32 7.58172 28.4183 4 24 4C19.5817 4 16 7.58172 16 12C16 16.4183 19.5817 20 24 20Z"></svg:path><svg:path stroke-linecap="round" d="M24 20V38"></svg:path><svg:path stroke-linecap="round" d="M16 32H12L4 44H44L36 32H32"></svg:path></svg:g>`,
})
export class IconParkLocalPinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLocalTwoIcon],svg[icon-park-local-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C24 44 39 32 39 19C39 10.7157 32.2843 4 24 4C15.7157 4 9 10.7157 9 19C9 32 24 44 24 44Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 25C27.3137 25 30 22.3137 30 19C30 15.6863 27.3137 13 24 13C20.6863 13 18 15.6863 18 19C18 22.3137 20.6863 25 24 25Z"></svg:path></svg:g>`,
})
export class IconParkLocalTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLockIcon],svg[icon-park-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="22" x="6" y="22" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 30V36"></svg:path></svg:g>`,
})
export class IconParkLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLockOneIcon],svg[icon-park-lock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="30" r="14" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linejoin="round" d="M31 18V11C31 7.13401 27.866 4 24 4V4C20.134 4 17 7.13401 17 11V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 26L24 34"></svg:path></svg:g>`,
})
export class IconParkLockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLockingComputerIcon],svg[icon-park-locking-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V27"></svg:path><svg:path stroke-linecap="round" d="M24 34V42"></svg:path><svg:rect width="12" height="8" x="30" y="12" fill="#2F88FF" rx="3"></svg:rect><svg:path fill="#2F88FF" d="M36 6C37.6569 6 39 7.34315 39 9L39 12L33 12L33 9C33 7.34315 34.3431 6 36 6Z"></svg:path><svg:path stroke-linecap="round" d="M14 42L34 42"></svg:path></svg:g>`,
})
export class IconParkLockingComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLockingLaptopIcon],svg[icon-park-locking-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 9H11C9.34315 9 8 10.3431 8 12V33H40V28"></svg:path><svg:path fill="#2F88FF" d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"></svg:path><svg:rect width="12" height="8" x="30" y="13" fill="#2F88FF" rx="3"></svg:rect><svg:path fill="#2F88FF" d="M36 7C37.6569 7 39 8.34315 39 10L39 13L33 13L33 10C33 8.34315 34.3431 7 36 7Z"></svg:path></svg:g>`,
})
export class IconParkLockingLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLockingPictureIcon],svg[icon-park-locking-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M44 26C44 24.8954 43.1046 24 42 24C40.8954 24 40 24.8954 40 26H44ZM24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 26V39H44V26H40ZM9 8H24V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"></svg:path><svg:rect width="12" height="8" x="30" y="12" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path fill="#2F88FF" d="M36 6C37.6569 6 39 7.34315 39 9L39 12L33 12L33 9C33 7.34315 34.3431 6 36 6Z"></svg:path><svg:path fill="#000" d="M39 12L39 14C40.1046 14 41 13.1046 41 12L39 12ZM33 12L31 12C31 13.1046 31.8954 14 33 14L33 12ZM37 9L37 12L41 12L41 9L37 9ZM39 10L33 10L33 14L39 14L39 10ZM35 12L35 9L31 9L31 12L35 12ZM35 9C35 8.44772 35.4477 8 36 8L36 4C33.2386 4 31 6.23858 31 9L35 9ZM41 9C41 6.23858 38.7614 4 36 4L36 8C36.5523 8 37 8.44772 37 9L41 9Z"></svg:path></svg:g>`,
})
export class IconParkLockingPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLockingWebIcon],svg[icon-park-locking-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V23.0588"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"></svg:path><svg:rect width="12" height="8" x="32" y="33" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M38 27C39.6569 27 41 28.3431 41 30L41 33L35 33L35 30C35 28.3431 36.3431 27 38 27V27Z"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g>`,
})
export class IconParkLockingWebIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLogIcon],svg[icon-park-log-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="34" x="13" y="10" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M35 10V4H8C7.44772 4 7 4.44772 7 5V38H13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 22H33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 30H33"></svg:path></svg:g>`,
})
export class IconParkLogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoginIcon],svg[icon-park-login-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.9917 6H6V42H24"></svg:path><svg:path d="M25 33L16 24L25 15"></svg:path><svg:path d="M42 23.9917H16"></svg:path></svg:g>`,
})
export class IconParkLoginIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLogoutIcon],svg[icon-park-logout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.9917 6H6V42H24"></svg:path><svg:path d="M33 33L42 24L33 15"></svg:path><svg:path d="M16 23.9917H42"></svg:path></svg:g>`,
})
export class IconParkLogoutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLollipopIcon],svg[icon-park-lollipop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36.2144 34.3118C33.3387 36.7029 29.7365 38 26.0002 38C25.7667 38 25.5332 37.9957 25.3083 37.9784C21.2996 37.8054 17.5287 36.1494 14.6876 33.3087C13.1611 31.7825 11.9762 30.0011 11.1719 28.0165C10.3935 26.1011 10 24.0732 10 21.9978C10 19.9224 10.3935 17.8946 11.1719 15.9792C11.9762 13.9946 13.1611 12.2132 14.6876 10.6869C16.2141 9.16065 17.9958 7.97595 19.9807 7.17173C21.8964 6.39346 23.9245 6 26.0002 6C28.0759 6 30.104 6.39346 32.0197 7.17173C34.0046 7.97595 35.7863 9.16065 37.3128 10.6869C39.0944 12.464 40.3961 14.5697 41.1831 16.9391C41.9355 19.2004 42.1734 21.6476 41.875 24.017C41.7409 25.059 41.5074 26.0924 41.1745 27.0869C40.1497 30.107 38.8113 32.1526 36.2144 34.3118Z"></svg:path><svg:path d="M22.1049 19.4889C22.2386 17.5847 23.8979 16.1398 25.8079 16.2735C26.9155 16.3486 27.9227 16.8497 28.65 17.6891C29.3772 18.5285 29.7366 19.5933 29.6572 20.6999C29.5653 22.0321 28.9593 23.2431 27.952 24.12C26.9447 24.9928 25.6575 25.4229 24.3242 25.331C20.9932 25.0972 18.4687 22.1991 18.7028 18.8667C18.987 14.8077 22.5228 11.7342 26.5853 12.0182C28.9927 12.1852 31.1953 13.2835 32.7793 15.1042C34.3675 16.9249 35.1449 19.2551 34.9777 21.6646C34.7687 24.6253 33.4188 27.3271 31.1786 29.2731C29.139 31.0479 26.5811 32 23.9021 32C23.6388 32 23.3755 31.9916 23.1038 31.9749C20.3161 31.7829 17.6775 31.2372 15.5 29.5C13.3726 27.8046 11.8275 25.5807 11 23"></svg:path><svg:path d="M14 34L5.99909 42.4853"></svg:path></svg:g>`,
})
export class IconParkLollipopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoopOnceIcon],svg[icon-park-loop-once-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43.8233 25.2305C43.7019 25.9889 43.5195 26.727 43.2814 27.4395C42.763 28.9914 41.9801 30.4222 40.9863 31.6785C38.4222 34.9201 34.454 37 30 37H16C9.39697 37 4 31.6785 4 25C4 18.3502 9.39624 13 16 13H44"></svg:path><svg:path d="M38 7L44 13L38 19"></svg:path></svg:g>`,
})
export class IconParkLoopOnceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLotionIcon],svg[icon-park-lotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="7" x="17" y="37" fill="#2F88FF"></svg:rect><svg:path d="M36 4H12C12 4 12 12 13 21C14 30 17 37 17 37H31C31 37 34 30 35 21C36 12 36 4 36 4Z"></svg:path><svg:path d="M20.643 21.8886C22.0743 20.0081 23.1776 17.4103 23.774 16C24.8177 17.4103 27.084 20.9484 27.7997 22.8288C28.6942 25.1793 26.4578 28 23.774 28C21.0903 28 18.8538 24.2391 20.643 21.8886Z"></svg:path><svg:path d="M13 10L35 10"></svg:path></svg:g>`,
})
export class IconParkLotionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLotusIcon],svg[icon-park-lotus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 16C19.1961 13.8571 20.2353 8.85714 24 6C25.3725 7.66667 28.5294 12 29 16"></svg:path><svg:path fill="#2F88FF" d="M23.7523 42C15.2826 40.5455 -0.301481 31.3091 5.11908 6C12.2712 7.63636 26.0108 17.1273 23.7523 42Z"></svg:path><svg:path fill="#2F88FF" d="M24.2477 42C32.7174 40.5455 48.3015 31.3091 42.8809 6C35.7288 7.63636 21.9892 17.1273 24.2477 42Z"></svg:path></svg:g>`,
})
export class IconParkLotusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoudlyCryingFaceIcon],svg[icon-park-loudly-crying-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 35C31 35 29 31 24 31C19 31 17 35 17 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M35 18L28 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 18V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 17L13 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 18V27"></svg:path></svg:g>`,
})
export class IconParkLoudlyCryingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoudlyCryingFaceWhitOpenMouthIcon],svg[icon-park-loudly-crying-face-whit-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 29C29 29 31 33 31 33H17C17 33 19 29 24 29Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M35 18L28 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 18V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 17L13 18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 18V27"></svg:path></svg:g>`,
})
export class IconParkLoudlyCryingFaceWhitOpenMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLoveAndHelpIcon],svg[icon-park-love-and-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15 7C8.92487 7 4 11.9249 4 18C4 29 17 39 24 41.3262C31 39 44 29 44 18C44 11.9249 39.0751 7 33 7C29.2797 7 25.9907 8.8469 24 11.6738C22.0093 8.8469 18.7203 7 15 7Z"></svg:path><svg:path stroke="#fff" d="M18 24H30"></svg:path><svg:path stroke="#fff" d="M24 18V30"></svg:path></svg:g>`,
})
export class IconParkLoveAndHelpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLowerBranchIcon],svg[icon-park-lower-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 23C6 21.5 7.99903 17.5 13.0614 16.4286C18.1786 15.3455 22.8477 10.8571 24 9"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41.9999 23C42.0118 21.5 40.0009 17.5 34.9385 16.4286C29.8213 15.3455 25.1522 10.8571 24 9"></svg:path><svg:circle r="4" fill="#000" transform="matrix(0 1 1 0 24 9)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 9L24 23"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 33H11"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 41H11"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 33H43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 41H43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 33H27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 41H27"></svg:path></svg:g>`,
})
export class IconParkLowerBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLuggageIcon],svg[icon-park-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="32" height="26" x="8" y="14" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke="#fff" d="M20 23L20 31"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M15 40V44"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M33 40V44"></svg:path><svg:path stroke="#fff" d="M28 23V31"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M19 4H29"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M24 4L24 14"></svg:path></svg:g>`,
})
export class IconParkLuggageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLuminousIcon],svg[icon-park-luminous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 16V26"></svg:path><svg:path d="M38.1421 21.8579L31.1421 28.8579"></svg:path><svg:path d="M44 36H34"></svg:path><svg:path d="M4 36H14"></svg:path><svg:path d="M9.85791 21.8579L16.8579 28.8579"></svg:path><svg:path d="M22 36H26"></svg:path></svg:g>`,
})
export class IconParkLuminousIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkLungIcon],svg[icon-park-lung-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4.571"><svg:path d="M18.2442 22.263C17.9517 17.3076 16.7773 14.7417 14.7208 14.5654C11.4002 14.2807 6.31025 19.7086 4.80125 27.3367C3.29225 34.9648 4.03742 40.4289 6.01197 40.7978C7.98652 41.1667 10.8556 39.0174 12.2168 39.0174C13.578 39.0174 18.2958 40.0579 18.2958 38.1732C18.2958 37.2445 18.2958 34.9908 18.2958 30.0702"></svg:path><svg:path d="M29.6236 22.3707C29.9054 17.3447 31.0819 14.7429 33.1532 14.5654C36.4739 14.2807 41.5638 19.7086 43.0728 27.3367C44.5818 34.9648 43.8366 40.4289 41.8621 40.7978C39.8875 41.1667 37.0184 39.0174 35.6573 39.0174C34.2961 39.0174 29.5782 40.0579 29.5782 38.1732C29.5782 37.2467 29.5782 34.9702 29.5782 30.0702"></svg:path><svg:path d="M20.5557 5V19.9106C20.5121 22.2021 18.6 23.3478 14.8193 23.3478"></svg:path><svg:path d="M27.292 5V19.9106C27.3355 22.2021 29.2476 23.3478 33.0283 23.3478"></svg:path><svg:path stroke-linejoin="round" d="M15 30.0704C18.9553 30.0704 21.9553 29.1311 24 27.2524C26.0594 29.1311 29.069 30.0704 33.0286 30.0704"></svg:path></svg:g>`,
})
export class IconParkLungIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMacFinderIcon],svg[icon-park-mac-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 38V10C44 8.89543 43.1046 8 42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38Z"></svg:path><svg:path stroke="#fff" d="M24.9999 8C24.9999 8 19.9999 18 20.9999 25H26.9999L27.9999 40"></svg:path><svg:path stroke="#000" d="M34 40H22"></svg:path><svg:path stroke="#000" d="M30 8H18"></svg:path><svg:path stroke="#fff" d="M34 16V18"></svg:path><svg:path stroke="#fff" d="M14 16V18"></svg:path><svg:path stroke="#fff" d="M13 29C13 29 17.1905 32 24 32C30.8095 32 35 29 35 29"></svg:path></svg:g>`,
})
export class IconParkMacFinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMacadamiaNutIcon],svg[icon-park-macadamia-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 43C34.4934 43 43 34.9411 43 25H35L32 28L29 25H5C5 34.9411 13.5066 43 24 43Z"></svg:path><svg:path d="M40.9451 25C41.0686 24.1847 40.9451 23.3499 40.9451 22.5C40.9451 13.3873 33.5817 5 24.4985 5C20.6757 5 16.1607 6.30854 13.3678 8.50352C13.7906 9.23816 14.0325 10.0907 14.0325 11C14.0325 13.7614 11.8012 16 9.04873 16C8.69904 16 8.35776 15.9639 8.0284 15.8951C7.39854 17.645 7.0552 20.5323 7.0552 22.5C7.0552 23.3499 6.93127 24.1847 7.05479 25"></svg:path><svg:path d="M6 31H16"></svg:path></svg:g>`,
})
export class IconParkMacadamiaNutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMagicIcon],svg[icon-park-magic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z"></svg:path><svg:path d="M29.5856 18.4143L5.54395 42.4559"></svg:path></svg:g>`,
})
export class IconParkMagicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMagicHatIcon],svg[icon-park-magic-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 10C10.5 13 11 14.5 11.5 18C11.9 20.8 12 25.1667 12 27C9.83333 28 5 30 5 34C5 38 10 43 24 43C38 43 43 38 43 34C43 30 36 27 36 27C36 27 36 21.5 36.5 18C37 14.5 37.5 13 38 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 27C36 31 35 35 23.5 35"></svg:path><svg:ellipse cx="24" cy="10" rx="14" ry="5"></svg:ellipse></svg:g>`,
})
export class IconParkMagicHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkMagicWandIcon],svg[icon-park-magic-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M7.57932 35.4207C5.32303 32.1826 4 28.2458 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C19.7542 44 15.8174 42.677 12.5793 40.4207M7.57932 35.4207C8.93657 37.3685 10.6315 39.0634 12.5793 40.4207M7.57932 35.4207L16 27M12.5793 40.4207L21 32M16 27L20 23L25 28L21 32M16 27L21 32"></svg:path><svg:path d="M17 14H21M19 12V16"></svg:path><svg:path d="M28 17H34M31 14V20"></svg:path><svg:path d="M32 29H36M34 27V31"></svg:path></svg:g>`,
})
export class IconParkMagicWandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
