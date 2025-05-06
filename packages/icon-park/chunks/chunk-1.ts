import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCollectionFilesIcon],svg[icon-park-collection-files-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44V4H31L40 14.5V44H8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 15L27.0841 21.7551L34.4616 22.6008L28.9902 27.6214L30.4656 34.8992L24 31.247L17.5344 34.8992L19.0098 27.6214L13.5384 22.6008L20.9159 21.7551L24 15Z"></svg:path></svg:g>`,
})
export class IconParkCollectionFilesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCollectionRecordsIcon],svg[icon-park-collection-records-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 22C40 12.0589 31.9411 4 22 4C12.0589 4 4 12.0589 4 22C4 31.9411 12.0589 40 22 40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33.3 30C31.4775 30 30 31.7217 30 33.8455C30 37.6909 33.9 41.1868 36 42C38.1 41.1868 42 37.6909 42 33.8455C42 31.7217 40.5225 30 38.7 30C37.5839 30 36.5972 30.6457 36 31.6339C35.4028 30.6457 34.4161 30 33.3 30Z"></svg:path><svg:path fill="#2F88FF" d="M22 27C24.7614 27 27 24.7614 27 22C27 19.2386 24.7614 17 22 17C19.2386 17 17 19.2386 17 22C17 24.7614 19.2386 27 22 27Z"></svg:path></svg:g>`,
})
export class IconParkCollectionRecordsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkColorCardIcon],svg[icon-park-color-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M10 44C13.3137 44 16 41.3137 16 38V23.5147V4H4V38C4 41.3137 6.68629 44 10 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44C13.3137 44 16 41.3137 16 38V23.5147M10 44C6.68629 44 4 41.3137 4 38V4H16V23.5147M10 44H44V32H24.4853M5.75736 42.2426C8.10051 44.5858 11.8995 44.5858 14.2426 42.2426L24.4853 32M16 23.5147L35.0147 4.5L35.4853 4L43.9853 12.5L24.4853 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.2427 42.2426L43.9853 12.5L35.4853 4L16 23.5147"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.4853 32H44V44H12.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.4853 32H44V44H12.5"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44C13.3137 44 16 41.3137 16 38V23.5147V4H4V38C4 41.3137 6.68629 44 10 44Z"></svg:path></svg:g>`,
})
export class IconParkColorCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkColorFilterIcon],svg[icon-park-color-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40.9444C26.123 42.8446 28.9266 44 32 44C38.6274 44 44 38.6274 44 32C44 26.4085 40.1757 21.7102 35 20.3781"></svg:path><svg:path d="M13 20.3781C7.82432 21.7102 4 26.4085 4 32C4 38.6274 9.37258 44 16 44C22.6274 44 28 38.6274 28 32C28 30.4506 27.7063 28.9697 27.1716 27.6101"></svg:path><svg:path fill="#2F88FF" d="M24 28C30.6274 28 36 22.6274 36 16C36 9.37258 30.6274 4 24 4C17.3726 4 12 9.37258 12 16C12 22.6274 17.3726 28 24 28Z"></svg:path></svg:g>`,
})
export class IconParkColorFilterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkColumnIcon],svg[icon-park-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"></svg:path><svg:path stroke-linecap="round" d="M24 6L24 42"></svg:path></svg:g>`,
})
export class IconParkColumnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCombIcon],svg[icon-park-comb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4.20117 31.0713L16.9291 43.7992L43.7992 16.9292L31.0712 4.20123"></svg:path><svg:path d="M9.15137 26.1221L16.2224 33.1931"></svg:path><svg:path d="M14.8076 20.4653L21.8787 27.5364"></svg:path><svg:path d="M20.4648 14.8081L27.5359 21.8792"></svg:path><svg:path d="M26.1211 9.15137L33.1922 16.2224"></svg:path><svg:path d="M12.6865 39.5566L39.5566 12.6866"></svg:path></svg:g>`,
})
export class IconParkCombIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkComeIcon],svg[icon-park-come-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.0004 40C10.1277 35.5636 7.00049 26 4.00007 19.5C2.6504 16.5761 7.52621 15.8109 10.4998 17C13.0004 18 16.0001 20 16.0001 20V11.5C16.0001 9.567 17.5671 8 19.5001 8C21.4331 8 23.0001 9.567 23.0001 11.5V9.5C23.0001 7.567 24.5671 6 26.5001 6C28.4331 6 30.0001 7.567 30.0001 9.5V13.5C30.0001 11.567 31.5671 10 33.5001 10C35.4331 10 37.0001 11.567 37.0001 13.5V16.5C37.0001 14.567 38.5671 13 40.5001 13C42.4331 13 44.0001 14.5655 44.0001 16.4985V29C44.0001 32.5 42.0004 37 37.0001 40C32.2067 42.8758 25.0004 43 19.0004 40Z"></svg:path>`,
})
export class IconParkComeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCommandIcon],svg[icon-park-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M9.45455 14.9091C10.5023 14.9091 12.3205 14.9091 14.9091 14.9091C14.9091 12.2333 14.9091 10.4151 14.9091 9.45455C14.9091 6.44208 12.467 4 9.45455 4C6.44208 4 4 6.44208 4 9.45455C4 12.467 6.44208 14.9091 9.45455 14.9091Z"></svg:path><svg:path fill="#2F88FF" d="M9.45455 33.0909H14.9091V38.5454C14.9091 41.5579 12.467 44 9.45455 44C6.44208 44 4 41.5579 4 38.5454C4 35.533 6.44208 33.0909 9.45455 33.0909Z"></svg:path><svg:rect width="18.182" height="18.182" x="14.909" y="14.909" stroke-linecap="round"></svg:rect><svg:path fill="#2F88FF" d="M38.5454 14.9091H33.0908V9.45455C33.0908 6.44208 35.5329 4 38.5454 4C41.5578 4 43.9999 6.44208 43.9999 9.45455C43.9999 12.467 41.5578 14.9091 38.5454 14.9091Z"></svg:path><svg:path fill="#2F88FF" d="M38.5454 33.0909C41.5578 33.0909 43.9999 35.533 43.9999 38.5454C43.9999 41.5579 41.5578 44 38.5454 44C35.5329 44 33.0908 41.5579 33.0908 38.5454V33.0909H38.5454Z"></svg:path></svg:g>`,
})
export class IconParkCommandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCommentIcon],svg[icon-park-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 6H4V36H13V41L23 36H44V6Z"></svg:path><svg:path stroke="#fff" d="M14 19.5V22.5"></svg:path><svg:path stroke="#fff" d="M24 19.5V22.5"></svg:path><svg:path stroke="#fff" d="M34 19.5V22.5"></svg:path></svg:g>`,
})
export class IconParkCommentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCommentOneIcon],svg[icon-park-comment-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 6H4V36H13V41L23 36H44V6Z"></svg:path><svg:path stroke="#fff" d="M14 21H34"></svg:path></svg:g>`,
})
export class IconParkCommentOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCommentsIcon],svg[icon-park-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M33 38H22V30H36V22H44V38H39L36 41L33 38Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 6H36V30H17L13 34L9 30H4V6Z"></svg:path><svg:path stroke="#fff" d="M12 22H18"></svg:path><svg:path stroke="#fff" d="M12 14H24"></svg:path></svg:g>`,
})
export class IconParkCommentsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCommodityIcon],svg[icon-park-commodity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9.78101 9.75193C9.90612 8.75107 10.7569 8 11.7656 8H36.2344C37.2431 8 38.0939 8.75107 38.219 9.75193L41.719 37.7519C41.8682 38.9456 40.9374 40 39.7344 40H8.26556C7.06257 40 6.1318 38.9456 6.28101 37.7519L9.78101 9.75193Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 18C15 18 17 22 24 22C31 22 33 18 33 18"></svg:path></svg:g>`,
})
export class IconParkCommodityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCommunicationIcon],svg[icon-park-communication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M33 38H22V30H36V22H44V38H39L36 41L33 38Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 6H36V30H17L13 34L9 30H4V6Z"></svg:path><svg:path stroke="#fff" d="M19 18H20"></svg:path><svg:path stroke="#fff" d="M26 18H27"></svg:path><svg:path stroke="#fff" d="M12 18H13"></svg:path></svg:g>`,
})
export class IconParkCommunicationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCommuterBagIcon],svg[icon-park-commuter-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31.9923 22C31.9974 21.6925 32 21.3833 32 21.0725C32 9.51451 28.4183 4 24 4C19.5817 4 16 9.51451 16 21.0725C16 21.3833 16.0026 21.6925 16.0077 22"></svg:path><svg:rect width="22" height="22" x="13" y="22" fill="#2F88FF" rx="2"></svg:rect></svg:g>`,
})
export class IconParkCommuterBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCompassIcon],svg[icon-park-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 44L22.6875 15.5"></svg:path><svg:path d="M36 44L25.3125 15.5"></svg:path><svg:circle cx="24" cy="12" r="4" fill="#2F88FF"></svg:circle><svg:path d="M37.57 33C33.6618 35.5307 29.0024 37 23.9998 37C18.9973 37 14.3379 35.5307 10.4297 33"></svg:path><svg:path d="M24 8V4"></svg:path></svg:g>`,
})
export class IconParkCompassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCompassOneIcon],svg[icon-park-compass-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C33.3888 44 41 36.3888 41 27C41 17.6112 33.3888 10 24 10C14.6112 10 7 17.6112 7 27C7 36.3888 14.6112 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M19 4H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 27L24 20L28 27L24 34L20 27Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M7 27H11"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M37 27H41"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 10L24 14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 40L24 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M17.5 42.7131C19.5024 43.5424 21.6978 44 24 44C26.3022 44 28.4976 43.5424 30.5 42.7131"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8.28691 20.5C7.45764 22.5024 7 24.6978 7 27C7 29.3022 7.45764 31.4976 8.28691 33.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M39.7129 20.5C40.5422 22.5024 40.9998 24.6978 40.9998 27C40.9998 29.3022 40.5422 31.4976 39.7129 33.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M17.0078 11.5C19.1405 10.5364 21.5077 10 24.0001 10C26.4925 10 28.8597 10.5364 30.9924 11.5"></svg:path></svg:g>`,
})
export class IconParkCompassOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkComponentsIcon],svg[icon-park-components-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 11L24 4L31 11L24 18L17 11Z"></svg:path><svg:path d="M30 25L37 18L44 25L37 32L30 25Z"></svg:path><svg:path d="M17 37L24 30L31 37L24 44L17 37Z"></svg:path><svg:path d="M4 24L11 17L18 24L11 31L4 24Z"></svg:path></svg:g>`,
})
export class IconParkComponentsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCompositionIcon],svg[icon-park-composition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M39.8281 21.7859L21.9686 39.6454C18.5544 43.0597 12.9373 42.9783 9.42255 39.4636C5.90784 35.9489 5.82643 30.3318 9.24073 26.9175L27.1002 9.05798" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M39.8281 21.7859L21.9686 39.6454C18.5544 43.0597 12.9373 42.9783 9.42255 39.4636C5.90784 35.9489 5.82643 30.3318 9.24073 26.9175L27.1002 9.05798"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M8.73438 27.4238L34.8784 26.7356"></svg:path><svg:path fill="#fff" d="M29.393 20.9069C30.1741 20.1258 30.1741 18.8595 29.393 18.0785C28.612 17.2974 27.3457 17.2974 26.5646 18.0785C25.7836 18.8595 25.7836 20.1258 26.5646 20.9069C27.3457 21.6879 28.612 21.6879 29.393 20.9069Z"></svg:path><svg:path fill="#fff" d="M23.7358 23.7355C24.5169 22.9545 24.5169 21.6881 23.7358 20.9071C22.9548 20.126 21.6884 20.126 20.9074 20.9071C20.1263 21.6881 20.1263 22.9545 20.9074 23.7355C21.6884 24.5166 22.9548 24.5166 23.7358 23.7355Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M23.5645 5.52246L43.3634 25.3215"></svg:path></svg:g>`,
})
export class IconParkCompositionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCompressionIcon],svg[icon-park-compression-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M8.91962 8.7141C8.49508 7.38938 9.47567 6 10.8668 6H37.1332C38.5243 6 39.5049 7.38938 39.0804 8.7141C37.8993 12.3995 36 19.0894 36 24C36 28.9106 37.8993 35.6005 39.0804 39.2859C39.5049 40.6106 38.5243 42 37.1332 42H10.8668C9.47567 42 8.49508 40.6106 8.91962 39.2859C10.1007 35.6005 12 28.9106 12 24C12 19.0894 10.1007 12.3995 8.91962 8.7141Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 15C5.5 17 5.99988 21 5.99988 24C5.99988 27 5.5 31 4 33"></svg:path><svg:path stroke="#fff" d="M18 15.5H30"></svg:path><svg:path stroke="#fff" d="M18 24H30"></svg:path><svg:path stroke="#fff" d="M18 32H22"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M44 15C42.5 17 42.0001 21 42.0001 24C42.0001 27 42.5 30 44 33"></svg:path></svg:g>`,
})
export class IconParkCompressionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkComputerIcon],svg[icon-park-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="10" height="9" x="19" y="32" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:rect width="38" height="24" x="5" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 27H26"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 41L34 41"></svg:path></svg:g>`,
})
export class IconParkComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkComputerOneIcon],svg[icon-park-computer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M10 6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V42C38 43.1046 37.1046 44 36 44H12C10.8954 44 10 43.1046 10 42L10 6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 12L31 12"></svg:path><svg:circle cx="17" cy="21" r="2" fill="#000"></svg:circle><svg:circle cx="17" cy="27" r="2" fill="#000"></svg:circle><svg:circle cx="17" cy="33" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="21" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="27" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="33" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="21" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="27" r="2" fill="#000"></svg:circle><svg:circle cx="31" cy="33" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkComputerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConceptSharingIcon],svg[icon-park-concept-sharing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28.3669 36H24L15 31.0396L4.00879 35.0818L7.01068 41.0257L14.0833 38.0729C20.7 42.0243 24.7272 44 26.1651 44C27.603 44 33.5479 41.3334 44 36"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linejoin="round" d="M28.9923 26.9878C28.9923 24.097 28.9923 22.5402 28.9923 22.3171C30.0923 21.861 31.535 21.193 32.364 20.364C33.9926 18.7353 35 16.4853 35 14C35 9.02944 30.9706 5 26 5C21.0294 5 17 9.02944 17 14C17 16.4853 18.0074 18.7353 19.636 20.364C20.465 21.193 21.9 21.861 23 22.3171C23.0056 22.6525 23.0056 24.2094 23 26.9878H28.9923Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M12 21L13 20"></svg:path><svg:path stroke-linecap="round" d="M40 21L39 20"></svg:path><svg:path stroke-linecap="round" d="M15 5L14 4"></svg:path><svg:path stroke-linecap="round" d="M37 5L38 4"></svg:path><svg:path stroke-linecap="round" d="M41 12H40"></svg:path><svg:path stroke-linecap="round" d="M12 12H11"></svg:path></svg:g>`,
})
export class IconParkConceptSharingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConcernIcon],svg[icon-park-concern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000"><svg:path stroke-linecap="round" stroke-width="4" d="M10.8579 9.85803C7.23858 13.4773 5 18.4773 5 24.0002C5 29.523 7.23858 34.523 10.8579 38.1423"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M39.1421 38.1423C42.7614 34.523 45 29.523 45 24.0002C45 18.4773 42.7614 13.4773 39.1421 9.85803"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M34.8994 33.8997C37.4329 31.3662 38.9999 27.8662 38.9999 24.0002C38.9999 20.1342 37.4329 16.6342 34.8994 14.1007"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M15.1005 14.1007C12.567 16.6342 11 20.1342 11 24.0002C11 27.8662 12.567 31.3662 15.1005 33.8997"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" stroke-width="3.5" d="M28.1818 20C30.2905 20 32 21.6118 32 23.6C32 26.1882 29.4545 28.4 28.1818 29.6C27.3333 30.4 26.2727 31.2 25 32C23.7273 31.2 22.6667 30.4 21.8182 29.6C20.5455 28.4 18 26.1882 18 23.6C18 21.6118 19.7095 20 21.8182 20C23.1463 20 24.316 20.6393 25 21.6093C25.684 20.6393 26.8537 20 28.1818 20Z"></svg:path></svg:g>`,
})
export class IconParkConcernIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConditionerIcon],svg[icon-park-conditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="20" x="8" y="24" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#000" d="M37 24V17H11V24"></svg:path><svg:path stroke="#000" d="M17 17C19 14.8333 20 10.5 20 4C23 4 30 9.41667 30 16.7327"></svg:path><svg:rect width="16" height="6" x="16" y="31" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkConditionerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConeIcon],svg[icon-park-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:ellipse cx="24" cy="39" stroke-linejoin="round" rx="18" ry="6"></svg:ellipse><svg:path stroke-linecap="round" d="M6 39H42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 39L23.9999 4L42 39"></svg:path></svg:g>`,
})
export class IconParkConeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConesIcon],svg[icon-park-cones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 8L4 40H44L24 8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 32L24 28L18 32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28V22"></svg:path></svg:g>`,
})
export class IconParkConesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConfigIcon],svg[icon-park-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 4L18 10H10V18L4 24L10 30V38H18L24 44L30 38H38V30L44 24L38 18V10H30L24 4Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"></svg:path></svg:g>`,
})
export class IconParkConfigIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConfoundedFaceIcon],svg[icon-park-confounded-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 17L29 20L32 23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 17L19 20L16 23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 31L18 34L21 31L24 34L27 31L30 34L33 31"></svg:path></svg:g>`,
})
export class IconParkConfoundedFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConfusedFaceIcon],svg[icon-park-confused-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 32L31 30"></svg:path></svg:g>`,
})
export class IconParkConfusedFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectIcon],svg[icon-park-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M10 42C13.3137 42 16 39.3137 16 36C16 32.6863 13.3137 30 10 30C6.68629 30 4 32.6863 4 36C4 39.3137 6.68629 42 10 42Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38 44C41.3137 44 44 41.3137 44 38C44 34.6863 41.3137 32 38 32C34.6863 32 32 34.6863 32 38C32 41.3137 34.6863 44 38 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M22 28C26.4183 28 30 24.4183 30 20C30 15.5817 26.4183 12 22 12C17.5817 12 14 15.5817 14 20C14 24.4183 17.5817 28 22 28Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M34 12C36.2091 12 38 10.2091 38 8C38 5.79086 36.2091 4 34 4C31.7909 4 30 5.79086 30 8C30 10.2091 31.7909 12 34 12Z" clip-rule="evenodd"></svg:path><svg:path d="M11 11L15 15"></svg:path><svg:path d="M30 12L28 14"></svg:path><svg:path d="M34 33.5L28 26"></svg:path><svg:path d="M14 31L18 27"></svg:path></svg:g>`,
})
export class IconParkConnectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectAddressOneIcon],svg[icon-park-connect-address-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24"></svg:path><svg:path d="M24 14L24 42"></svg:path><svg:circle cx="24" cy="10" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkConnectAddressOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectAddressTwoIcon],svg[icon-park-connect-address-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24"></svg:path><svg:path d="M24 14L24 42"></svg:path><svg:path d="M6 24H12"></svg:path><svg:path d="M36 24H42"></svg:path><svg:circle cx="24" cy="10" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkConnectAddressTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectionIcon],svg[icon-park-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M39 34L44 39L39 44"></svg:path><svg:path fill="#2F88FF" d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"></svg:path><svg:path stroke-linecap="round" d="M12 8L20 8C22.2091 8 24 9.79086 24 12V35C24 37.2091 25.7909 39 28 39H44"></svg:path></svg:g>`,
})
export class IconParkConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectionArrowIcon],svg[icon-park-connection-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40.9898 8.02661H12.1818C9.45455 8.02661 4 9.55073 4 15.9674C4 22.3841 9.45455 24.0001 12.1818 24.0001H35.9939C38.7211 24.0001 44 25.5681 44 31.9848C44 38.4014 38.7211 40.0031 35.9939 40.0031H6.06499"></svg:path><svg:path d="M8.04567 35.9927L4.06738 40.0592L8.04567 44.0001"></svg:path><svg:path d="M38.0427 3.95386L42.021 8.02038L38.0427 11.9612"></svg:path></svg:g>`,
})
export class IconParkConnectionArrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectionBoxIcon],svg[icon-park-connection-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M43 4H5C4.44772 4 4 4.48842 4 5.09091V14.9091C4 15.5116 4.44772 16 5 16H43C43.5523 16 44 15.5116 44 14.9091V5.09091C44 4.48842 43.5523 4 43 4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M43 32H5C4.44772 32 4 32.4884 4 33.0909V42.9091C4 43.5116 4.44772 44 5 44H43C43.5523 44 44 43.5116 44 42.9091V33.0909C44 32.4884 43.5523 32 43 32Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14 16V24.0083L34 24.0172V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 38H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 10H30"></svg:path></svg:g>`,
})
export class IconParkConnectionBoxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectionPointIcon],svg[icon-park-connection-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M5 24L43 24"></svg:path><svg:path fill="#2F88FF" d="M28 4H20C18.8954 4 18 4.89543 18 6V14C18 15.1046 18.8954 16 20 16H28C29.1046 16 30 15.1046 30 14V6C30 4.89543 29.1046 4 28 4Z"></svg:path><svg:path fill="#2F88FF" d="M16 32H8C6.89543 32 6 32.8954 6 34V42C6 43.1046 6.89543 44 8 44H16C17.1046 44 18 43.1046 18 42V34C18 32.8954 17.1046 32 16 32Z"></svg:path><svg:path fill="#2F88FF" d="M40 32H32C30.8954 32 30 32.8954 30 34V42C30 43.1046 30.8954 44 32 44H40C41.1046 44 42 43.1046 42 42V34C42 32.8954 41.1046 32 40 32Z"></svg:path><svg:path stroke-linecap="round" d="M24 24V16"></svg:path><svg:path stroke-linecap="round" d="M36 32V24"></svg:path><svg:path stroke-linecap="round" d="M12 32V24"></svg:path></svg:g>`,
})
export class IconParkConnectionPointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConnectionPointTwoIcon],svg[icon-park-connection-point-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M36 8L13 8C10 8 4 10 4 16C4 22 10 24 13 24H35C38 24 44 26 44 32C44 38 38 40 35 40H12"></svg:path><svg:path fill="#2F88FF" d="M40 12C42.2091 12 44 10.2091 44 8C44 5.79086 42.2091 4 40 4C37.7909 4 36 5.79086 36 8C36 10.2091 37.7909 12 40 12Z"></svg:path><svg:path fill="#2F88FF" d="M8 44C10.2091 44 12 42.2091 12 40C12 37.7909 10.2091 36 8 36C5.79086 36 4 37.7909 4 40C4 42.2091 5.79086 44 8 44Z"></svg:path></svg:g>`,
})
export class IconParkConnectionPointTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConsignmentIcon],svg[icon-park-consignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M8 14C8 12.8954 8.89543 12 10 12H38C39.1046 12 40 12.8954 40 14V30C40 31.1046 39.1046 32 38 32H10C8.89543 32 8 31.1046 8 30V14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 12V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M32 12V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 12L36 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 12L20 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 32L20 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 32L36 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 38L44 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 38V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 38V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 38V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 38V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M30 38V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M36 38V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 38V40"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 12V6H18V12"></svg:path></svg:g>`,
})
export class IconParkConsignmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConsumeIcon],svg[icon-park-consume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V14Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 19L24 24L29 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 25H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 31H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 25V35"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 6H40"></svg:path></svg:g>`,
})
export class IconParkConsumeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkContrastIcon],svg[icon-park-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 36V12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"></svg:path></svg:g>`,
})
export class IconParkContrastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkContrastViewIcon],svg[icon-park-contrast-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="17" height="34" x="7" y="7" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 7H28"></svg:path><svg:path stroke-linecap="round" d="M33 7H35"></svg:path><svg:path stroke-linecap="round" d="M33 41H35"></svg:path><svg:path stroke-linecap="round" d="M41 7V9"></svg:path><svg:path stroke-linecap="round" d="M41 15V17"></svg:path><svg:path stroke-linecap="round" d="M41 23V25"></svg:path><svg:path stroke-linecap="round" d="M41 31V33"></svg:path><svg:path stroke-linecap="round" d="M41 39V41"></svg:path><svg:path stroke-linecap="round" d="M27 41H24"></svg:path><svg:path stroke-linecap="round" d="M24 4V44"></svg:path></svg:g>`,
})
export class IconParkContrastViewIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkContrastViewCircleIcon],svg[icon-park-contrast-view-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44V4Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44V4Z"></svg:path><svg:path stroke-linecap="round" d="M24 36H9"></svg:path><svg:path stroke-linecap="round" d="M24 28H5"></svg:path><svg:path stroke-linecap="round" d="M24 20H5"></svg:path><svg:path stroke-linecap="round" d="M24 12H9"></svg:path></svg:g>`,
})
export class IconParkContrastViewCircleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkControlIcon],svg[icon-park-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="30" height="40" x="9" y="4" rx="2"></svg:rect><svg:circle cx="24" cy="31" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 12H21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 18H21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 18H30"></svg:path></svg:g>`,
})
export class IconParkControlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkConvergingGatewayIcon],svg[icon-park-converging-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M22.7992 4.20102L4.4144 22.5858C3.63336 23.3668 3.63335 24.6332 4.4144 25.4142L22.7992 43.799C23.5802 44.58 24.8466 44.58 25.6276 43.799L44.0124 25.4142C44.7934 24.6332 44.7934 23.3668 44.0124 22.5858L25.6276 4.20102C24.8466 3.41997 23.5802 3.41997 22.7992 4.20102Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.0428 15.5342V32.4778"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15.5713 24.0059H32.5149"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30.0336 18.0151L18.0527 29.9961"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.0527 18.0151L30.0337 29.996"></svg:path></svg:g>`,
})
export class IconParkConvergingGatewayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCookIcon],svg[icon-park-cook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M42 36V20H14V36C14 39.3137 16.6863 42 20 42H36C39.3137 42 42 39.3137 42 36Z"></svg:path><svg:path d="M4 20L44 20"></svg:path><svg:path d="M18 8V12"></svg:path><svg:path d="M28 6V12"></svg:path><svg:path d="M38 8V12"></svg:path></svg:g>`,
})
export class IconParkCookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCookingIcon],svg[icon-park-cooking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M6 42L42 42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 36L42 36"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M9 25C9 16.7157 15.7157 10 24 10C32.2843 10 39 16.7157 39 25V36H9L9 25Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 25V29"></svg:path><svg:path stroke="#000" d="M28 10V8C28 5.79086 26.2091 4 24 4V4C21.7909 4 20 5.79086 20 8V10"></svg:path></svg:g>`,
})
export class IconParkCookingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCookingPotIcon],svg[icon-park-cooking-pot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M10 44H38V20.9474C38 14.9013 31.732 10 24 10C16.268 10 10 14.9013 10 20.9474V44Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M38 22.0437C38 21.8001 38 21.4346 38 20.9474C38 14.9013 31.732 10 24 10C16.268 10 10 14.9013 10 20.9474C10 21.4332 10 21.7975 10 22.0404L38 22.0437Z"></svg:path><svg:path stroke-linecap="round" d="M4 22H44"></svg:path><svg:path stroke-linecap="round" d="M21 4H27"></svg:path></svg:g>`,
})
export class IconParkCookingPotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCoolIcon],svg[icon-park-cool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8.00129 31 5.00063 26C1.99996 21 8.3132 16.3125 12.0004 20C15.6876 23.6875 16.0004 24 16.0004 24V7.50001C16.0004 5.56701 17.5674 4 19.5004 4C21.4334 4 23.0004 5.56701 23.0004 7.50001V17C23.0004 15.067 24.5674 13.5 26.5004 13.5C28.4334 13.5 30.0004 15.067 30.0004 17V18.5C30.0004 16.567 31.5674 15 33.5004 15C35.4334 15 37.0004 16.567 37.0004 18.5V13.5C37.0004 11.567 38.5674 10 40.5004 10C42.4334 10 44.0004 11.567 44.0004 13.5V30.115C44.0004 32.0123 43.5785 33.9039 42.4268 35.4116C41.1327 37.1056 39.0179 39.3539 36 41C30.4999 44 24.5 43.75 19 41Z"></svg:path>`,
})
export class IconParkCoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCooperativeHandshakeIcon],svg[icon-park-cooperative-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40L36 28L32 32L28 36L24 40ZM24 40L4 20L16 8L24 16"></svg:path><svg:path d="M17 23L32 8L44 20L36 28L28 20L22 26L17 23ZM17 23L24 16"></svg:path><svg:path d="M28 36L25 33"></svg:path><svg:path d="M32 32L29 29"></svg:path></svg:g>`,
})
export class IconParkCooperativeHandshakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCoordinateSystemIcon],svg[icon-park-coordinate-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 12L38 20V36L24 44L10 36V20L24 12Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 6V12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10 20L24 28L38 20"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 36L44 39"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 39L10 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28V44"></svg:path><svg:path stroke="#000" d="M31 16L38 20V28M17 16L10 20V28M17 40L24 44L31 40"></svg:path></svg:g>`,
})
export class IconParkCoordinateSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCopyIcon],svg[icon-park-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163"></svg:path><svg:path fill="#2F88FF" d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z"></svg:path></svg:g>`,
})
export class IconParkCopyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCopyLinkIcon],svg[icon-park-copy-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" d="M12 9.92704V7C12 5.34315 13.3431 4 15 4H41C42.6569 4 44 5.34315 44 7V33C44 34.6569 42.6569 36 41 36H38.0174"></svg:path><svg:rect width="34" height="34" x="4" y="10" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M18.4394 23.1101L23.7319 17.6006C25.1835 16.1489 27.5691 16.1809 29.0602 17.672C30.5513 19.1631 30.5833 21.5487 29.1316 23.0003L27.2215 25.0231"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M13.4661 28.7472C12.9558 29.2575 11.9006 30.2765 11.9006 30.2765C10.4489 31.7281 10.4095 34.3155 11.9006 35.8066C13.3917 37.2977 15.7772 37.3296 17.2289 35.878L22.3931 31.1896"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M18.6626 28.3284C17.97 27.6358 17.5922 26.7502 17.5317 25.8548C17.4619 24.8226 17.8138 23.7774 18.5912 23.0001"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22.3213 25.8613C23.8124 27.3524 23.8444 29.738 22.3927 31.1896"></svg:path></svg:g>`,
})
export class IconParkCopyLinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCopyOneIcon],svg[icon-park-copy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M13 38H41V16H30V4H13V38Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M30 4L41 16"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M7 20V44H28"></svg:path><svg:path stroke="#fff" d="M19 20H23"></svg:path><svg:path stroke="#fff" d="M19 28H31"></svg:path></svg:g>`,
})
export class IconParkCopyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCopyrightIcon],svg[icon-park-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" d="M24 17H20V24H23H24C27 24 28 22 28 20.5C28 19 27 17 24 17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 31V24M20 24L20 17H24C27 17 28 19 28 20.5C28 22 27 24 24 24H23M20 24H23M28 31L23 24"></svg:path></svg:g>`,
})
export class IconParkCopyrightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerDownLeftIcon],svg[icon-park-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 18L8 26L16 34"></svg:path><svg:path d="M40 10V23C40 24.6569 38.6569 26 37 26H8"></svg:path></svg:g>`,
})
export class IconParkCornerDownLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerDownRightIcon],svg[icon-park-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 18L40 26L32 34"></svg:path><svg:path d="M8 10V23C8 24.6569 9.34315 26 11 26H40"></svg:path></svg:g>`,
})
export class IconParkCornerDownRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerLeftDownIcon],svg[icon-park-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 34L20 42L28 34"></svg:path><svg:path d="M36 10H23C21.3431 10 20 11.3431 20 13V42"></svg:path></svg:g>`,
})
export class IconParkCornerLeftDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerLeftUpIcon],svg[icon-park-corner-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 16L20 8L28 16"></svg:path><svg:path d="M36 40H23C21.3431 40 20 38.6569 20 37V8"></svg:path></svg:g>`,
})
export class IconParkCornerLeftUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerRightDownIcon],svg[icon-park-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 34L28 42L36 34"></svg:path><svg:path d="M12 10H25C26.6569 10 28 11.3431 28 13V42"></svg:path></svg:g>`,
})
export class IconParkCornerRightDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerRightUpIcon],svg[icon-park-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 16L28 8L36 16"></svg:path><svg:path d="M12 40H25C26.6569 40 28 38.6569 28 37V8"></svg:path></svg:g>`,
})
export class IconParkCornerRightUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerUpLeftIcon],svg[icon-park-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 14L8 22L16 30"></svg:path><svg:path d="M40 38V25C40 23.3431 38.6569 22 37 22H8"></svg:path></svg:g>`,
})
export class IconParkCornerUpLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerUpRightIcon],svg[icon-park-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 14L40 22L32 30"></svg:path><svg:path d="M8 38V25C8 23.3431 9.34315 22 11 22H40"></svg:path></svg:g>`,
})
export class IconParkCornerUpRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCoronavirusIcon],svg[icon-park-coronavirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M7.63477 35.5C8.33788 36.4987 9.13011 37.4302 9.99989 38.2829C10.918 39.1829 11.9225 39.9951 12.9999 40.706"></svg:path><svg:path d="M27.8683 43.6262C26.6167 43.8714 25.3233 44 23.9998 44C22.6764 44 21.3829 43.8714 20.1313 43.6262"></svg:path><svg:path d="M43.5491 28.2428C43.8445 26.8754 44 25.4558 44 24C44 22.5745 43.8509 21.1838 43.5674 19.8427"></svg:path><svg:path d="M40.3651 12.5001C39.662 11.5014 38.8698 10.5699 38 9.71728C37.0819 8.81723 36.0773 8.005 35 7.29419"></svg:path><svg:path d="M20.1553 4.36923C21.3995 4.12694 22.685 4 24.0001 4C25.3153 4 26.6008 4.12694 27.845 4.36923"></svg:path><svg:path d="M7.63477 12.5001C8.33788 11.5014 9.13011 10.5699 9.99989 9.71728C10.918 8.81723 11.9225 8.005 12.9999 7.29419"></svg:path><svg:path d="M40.5001 35.2939C39.797 36.2927 39.0048 37.2242 38.135 38.0768C37.2169 38.9769 36.2123 39.7891 35.135 40.4999"></svg:path><svg:path d="M16 24H4"></svg:path><svg:path d="M10 38L18.3431 29.6569"></svg:path><svg:path d="M24 32V44"></svg:path><svg:path d="M37.9999 38L29.6567 29.6569"></svg:path><svg:path d="M32 24H44"></svg:path><svg:path d="M37.9999 10L29.6567 18.3431"></svg:path><svg:path d="M24 16V4"></svg:path><svg:path d="M10 10L18.3431 18.3431"></svg:path><svg:path d="M4.43266 19.8427C4.14914 21.1838 4 22.5745 4 24C4 25.4255 4.14914 26.8162 4.43266 28.1573"></svg:path><svg:path fill="#2F88FF" d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"></svg:path></svg:g>`,
})
export class IconParkCoronavirusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCorrectIcon],svg[icon-park-correct-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24L9 19L19 29L39 9L44 14L19 39L4 24Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkCorrectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCosmeticBrushIcon],svg[icon-park-cosmetic-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16.0991 25.8287L38.7265 6.02967C38.7265 6.02967 40.8478 3.90835 42.9691 6.02967C45.0904 8.15099 42.9691 10.2723 42.9691 10.2723L23.1701 32.8997L16.0991 25.8287Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22.4639 20.8789L28.1207 26.5358"></svg:path><svg:path stroke="#000" d="M5.49331 30.7782L16.0999 25.8284L23.171 32.8995L18.2212 43.5061C18.2212 43.5061 13.2715 44.2132 9.02884 39.9706C4.7862 35.7279 5.49331 30.7782 5.49331 30.7782Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6.90783 36.4349L11.8576 34.3136"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12.5653 42.0921L13.9795 39.2637"></svg:path><svg:path stroke="#000" d="M18.9291 23.3536L21.7575 20.8787L24.586 18.4038"></svg:path><svg:path stroke="#000" d="M30.5957 24.4141L28.1208 27.2425L25.646 30.0709"></svg:path></svg:g>`,
})
export class IconParkCosmeticBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCouponIcon],svg[icon-park-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 19.313V9H44V19.313C41.8815 20.068 40.3636 22.1053 40.3636 24.5C40.3636 26.8947 41.8815 28.932 44 29.687V40H4V29.687C6.11853 28.932 7.63636 26.8947 7.63636 24.5C7.63636 22.1053 6.11853 20.068 4 19.313Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 16L24 21L29 16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 22H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 28.1667H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 22V34"></svg:path></svg:g>`,
})
export class IconParkCouponIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCourtIcon],svg[icon-park-court-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 36H44V12H4V36H24ZM24 36V28M24 12V20"></svg:path><svg:circle cx="24" cy="24" r="4"></svg:circle><svg:path d="M11 24C11 26.2091 9.20914 28 7 28H4V20H7C9.20914 20 11 21.7909 11 24Z"></svg:path><svg:path d="M37 24C37 26.2091 38.7909 28 41 28H44V20H41C38.7909 20 37 21.7909 37 24Z"></svg:path></svg:g>`,
})
export class IconParkCourtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCpuIcon],svg[icon-park-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M38 8H10C8.89543 8 8 8.89543 8 10V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V10C40 8.89543 39.1046 8 38 8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M30 18H18V30H30V18Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M14.9092 2V8V2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.9092 2V8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M14.9092 40V46V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.9092 40V46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 2V8V2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 2V8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 40V46V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40V46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M33.0908 2V8V2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.0908 2V8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M33.0908 40V46V40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.0908 40V46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M2 14.9092H8H2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 14.9092H8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M40 14.9092H46H40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 14.9092H46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M2 24H8H2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 24H8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M40 24H46H40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 24H46"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M2 33.0908H8H2Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M2 33.0908H8"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M40 33.0908H46H40Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 33.0908H46"></svg:path></svg:g>`,
})
export class IconParkCpuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCrabIcon],svg[icon-park-crab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 16.9998C5 11.9998 6 1.99979 17.0008 5.99977C17.9464 9.78224 15 16.9998 5 16.9998Z"></svg:path><svg:path d="M43 16.9998C43.0006 11.9998 42 1.99979 31 5.99978C30.0544 9.78224 32.9994 16.9998 43 16.9998Z"></svg:path><svg:rect width="32" height="20" x="8" y="22" fill="#2F88FF" rx="10"></svg:rect><svg:path d="M27 22V18"></svg:path><svg:path d="M21 22V18"></svg:path><svg:path d="M43 17C44 20 44 26 40 29"></svg:path><svg:path d="M5 17C4 20 5 25 8 29"></svg:path><svg:path d="M30 42H44L40 33"></svg:path><svg:path d="M18 42H4L8 33"></svg:path></svg:g>`,
})
export class IconParkCrabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCreationDateSortIcon],svg[icon-park-creation-date-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5V30.0036H42V5"></svg:path><svg:path stroke-linejoin="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linejoin="round" d="M24 30V43"></svg:path><svg:path d="M16.0009 15.001L32.0009 15.001"></svg:path><svg:path d="M24.0005 7V23"></svg:path></svg:g>`,
})
export class IconParkCreationDateSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCreativeIcon],svg[icon-park-creative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 39V9.00003C42 7.34317 40.6569 6.00003 39 6.00003L9 6C7.34314 6 5.99999 7.34315 6 9.00001L6.00006 39C6.00006 40.6569 7.3432 42 9.00005 42H39C40.6569 42 42 40.6569 42 39Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M23.9994 18.3159L21.1038 24.2264L14.5264 25.1801L19.2911 29.8383L18.1521 36.3159L23.9994 33.1987L29.8479 36.3159L28.7173 29.8383L33.4737 25.1801L26.9328 24.2264L23.9994 18.3159Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.3159 12.6316H29.6843"></svg:path></svg:g>`,
})
export class IconParkCreativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCreditIcon],svg[icon-park-credit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 15V7H10V15"></svg:path><svg:path d="M43 27V15H5V41H43"></svg:path><svg:path d="M29 27L24 34L43 34"></svg:path><svg:path d="M26 21H22"></svg:path><svg:path d="M16 21H12"></svg:path></svg:g>`,
})
export class IconParkCreditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCribIcon],svg[icon-park-crib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 6V44"></svg:path><svg:path d="M10 40H38"></svg:path><svg:path d="M10 34H38"></svg:path><svg:path d="M6 12H42"></svg:path><svg:path d="M35 6L41 6"></svg:path><svg:path d="M7 6L13 6"></svg:path><svg:path d="M10 6V44"></svg:path><svg:path d="M17 12V28"></svg:path><svg:path d="M24 12V28"></svg:path><svg:path d="M31 12V28"></svg:path></svg:g>`,
})
export class IconParkCribIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCroissantIcon],svg[icon-park-croissant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 28.9999C7 28.9999 6.95638 32.7475 8.45638 37.2475C9.32863 39.8642 10.37 41.4665 11.6787 42.2511C13.3558 43.2564 15.0757 41.2715 16.0579 39.5807C17.0202 37.9244 18.4335 36.2276 19.5478 34.9999"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33.0002 7.91139C35.623 8.35039 38.5315 8.91654 39.6259 9.41858C41.0517 10.0727 42.4858 11.4055 43.0573 12.8301C43.5883 14.1541 42.2101 15.1701 40.9641 15.8645C39.5594 16.6472 38.0953 17.8742 36.8988 18.9996"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24.2021 29.7758L21.7002 31.5134C21.2426 31.8312 20.8837 32.2712 20.6643 32.7832V32.7832C20.0203 34.2857 18.2834 34.9857 16.7776 34.3494L8.80304 30.9801C7.33068 30.358 6.61794 28.6796 7.19282 27.1881L7.64341 26.0192C8.52318 23.7368 10.1315 21.8085 12.2188 20.5333V20.5333"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30.7198 24.5076L32.1099 23.0036L33.022 22.0167C33.3371 21.6758 33.7205 21.4051 34.1472 21.2222V21.2222C35.7509 20.5349 36.5441 18.7194 35.9588 17.0757L33.1066 9.06573C32.6309 7.72983 31.2308 6.96127 29.8484 7.27722L28.6297 7.55576C25.975 8.16247 23.6476 9.74971 22.1136 11.9996V11.9996"></svg:path><svg:path d="M13.4109 23.0785C11.7746 21.9096 11.331 19.6654 12.3934 17.9581V17.9581C13.9429 15.468 16.0518 13.364 18.5473 11.8232V11.8232C20.2199 10.7906 22.4039 11.204 23.5833 12.7765L29.5153 20.6858C30.8737 22.497 30.4595 25.0736 28.6019 26.3678L28.3619 26.535C28.061 26.7447 27.7903 26.9947 27.5575 27.2781L26.874 28.1103C25.5382 29.7366 23.1706 30.0497 21.4581 28.8264L13.4109 23.0785Z"></svg:path></svg:g>`,
})
export class IconParkCroissantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCrossRingIcon],svg[icon-park-cross-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"></svg:path><svg:path fill="#2F88FF" d="M24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44Z"></svg:path><svg:path fill="#2F88FF" d="M8 28C10.2091 28 12 26.2091 12 24C12 21.7909 10.2091 20 8 20C5.79086 20 4 21.7909 4 24C4 26.2091 5.79086 28 8 28Z"></svg:path><svg:path fill="#2F88FF" d="M40 28C42.2091 28 44 26.2091 44 24C44 21.7909 42.2091 20 40 20C37.7909 20 36 21.7909 36 24C36 26.2091 37.7909 28 40 28Z"></svg:path><svg:path stroke-linecap="round" d="M12 24H36"></svg:path><svg:path stroke-linecap="round" d="M24 12V36"></svg:path><svg:path stroke-linecap="round" d="M37.3053 15.1105C36.7212 14.238 36.0536 13.4261 35.3138 12.6864C34.574 11.9466 33.7621 11.2789 32.8896 10.6948M15.1105 10.6948C14.238 11.2789 13.4261 11.9466 12.6864 12.6864C11.9466 13.4261 11.2789 14.238 10.6948 15.1105L15.1105 10.6948ZM10.6948 32.8896C11.2789 33.7621 11.9466 34.574 12.6864 35.3138C13.4261 36.0536 14.238 36.7212 15.1105 37.3053L10.6948 32.8896ZM32.8896 37.3053C33.7621 36.7212 34.574 36.0536 35.3138 35.3138C36.0536 34.574 36.7212 33.7621 37.3053 32.8896L32.8896 37.3053Z"></svg:path></svg:g>`,
})
export class IconParkCrossRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCrossRingTwoIcon],svg[icon-park-cross-ring-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19.4545 26.4444C17.6364 28.2222 15.8182 30 12.1818 30C8.54545 30 4 27.3333 4 22C4 16.6667 8.54545 14 12.1818 14C17.6364 14 20.3636 17.5556 24 22C27.6364 26.4444 30.3636 30 35.8182 30C39.4545 30 44 27.3333 44 22C44 16.6667 39.4545 14 35.8182 14C32.1818 14 29.4545 16.6667 28.5455 17.5556"></svg:path>`,
})
export class IconParkCrossRingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCrossSocietyIcon],svg[icon-park-cross-society-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 18H18V7C18 5.89543 18.8954 5 20 5H28C29.1046 5 30 5.89543 30 7V18H41C42.1046 18 43 18.8954 43 20V28C43 29.1046 42.1046 30 41 30H30V41C30 42.1046 29.1046 43 28 43H20C18.8954 43 18 42.1046 18 41V30H7C5.89543 30 5 29.1046 5 28V20C5 18.8954 5.89543 18 7 18Z"></svg:path>`,
})
export class IconParkCrossSocietyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCrownIcon],svg[icon-park-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9 40L4 17L14 22L24 8L34 22L44 17L39 40H9Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 33C26.2091 33 28 31.2091 28 29C28 26.7909 26.2091 25 24 25C21.7909 25 20 26.7909 20 29C20 31.2091 21.7909 33 24 33Z"></svg:path></svg:g>`,
})
export class IconParkCrownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCrownThreeIcon],svg[icon-park-crown-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 42H35L41 21L31 26L24 12L17 26L7 21L13 42Z"></svg:path><svg:circle cx="7" cy="18" r="3"></svg:circle><svg:circle cx="24" cy="9" r="3"></svg:circle><svg:circle cx="41" cy="18" r="3"></svg:circle></svg:g>`,
})
export class IconParkCrownThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCrownTwoIcon],svg[icon-park-crown-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M13 29V19L19 22L24 15L29 22L35 19V29H13Z"></svg:path></svg:g>`,
})
export class IconParkCrownTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCruiseIcon],svg[icon-park-cruise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M38 42L41.3908 32.6752C41.738 31.7205 41.3143 30.6572 40.4057 30.2028L24.8944 22.4472C24.3314 22.1657 23.6686 22.1657 23.1056 22.4472L7.59432 30.2028C6.68569 30.6572 6.26199 31.7205 6.60916 32.6752L10 42"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M35 14H13C11.8954 14 11 14.8954 11 16V28L23.1619 22.3868C23.6937 22.1414 24.3063 22.1414 24.8381 22.3868L37 28V16C37 14.8954 36.1046 14 35 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 14V6C29 4.89543 28.1046 4 27 4H21C19.8954 4 19 4.89543 19 6V14"></svg:path><svg:path stroke-linecap="round" d="M24 32V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44C8 44 8 42 11 42C14 42 14 44 17 44C20 44 20.5 42 24 42C27.5 42 28 44 31 44C34 44 34 42 37 42C40 42 40 44 44 44"></svg:path></svg:g>`,
})
export class IconParkCruiseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCryingBabyIcon],svg[icon-park-crying-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C33.9411 44 42 35.9411 42 26C42 16.0589 33.9411 8 24 8C14.0589 8 6 16.0589 6 26C6 35.9411 14.0589 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 8C23.75 7 22 4 18 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 8C24.0833 7 24.6 4.8 26 4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 35C31 35 29 31 24 31C19 31 17 35 17 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 20L28 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 19L14 20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 20V25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 20V25"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 24V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 24V28"></svg:path></svg:g>`,
})
export class IconParkCryingBabyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCubeIcon],svg[icon-park-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z"></svg:path><svg:path d="M41 14L24 24"></svg:path><svg:path d="M7 14L24 24"></svg:path><svg:path d="M24 44V24"></svg:path><svg:path d="M32 19L32 39"></svg:path><svg:path d="M41 24L24 34"></svg:path><svg:path d="M24 34L7 24"></svg:path><svg:path d="M16 39L16 19"></svg:path><svg:path d="M32 9L16 19"></svg:path><svg:path d="M32 19L16 9"></svg:path></svg:g>`,
})
export class IconParkCubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCubeFiveIcon],svg[icon-park-cube-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 27L24 44"></svg:path><svg:path d="M18 27L24 44"></svg:path><svg:path d="M18 27L30 27"></svg:path><svg:path d="M41 34L30 27"></svg:path><svg:path d="M41 14L30 27"></svg:path><svg:path d="M41 14L24 17"></svg:path><svg:path d="M30 27L24 17"></svg:path><svg:path d="M24 4V17"></svg:path><svg:path d="M7 14L24 17"></svg:path><svg:path d="M18 27L24 17"></svg:path><svg:path d="M18 27L7 14"></svg:path><svg:path d="M18 27L7 34"></svg:path><svg:path d="M41.3207 14L24.0002 4L6.67969 14V34L24.0002 44L41.3207 34V14Z"></svg:path></svg:g>`,
})
export class IconParkCubeFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCubeFourIcon],svg[icon-park-cube-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15.3399 9L6.67969 14V24V34L15.3399 39L24.0002 44L32.6605 39L41.3207 34V24V14L32.6605 9L24.0002 4L15.3399 9Z"></svg:path><svg:path stroke="#fff" d="M24.0002 24L13.6079 30M24.0002 24V11V24ZM24.0002 24L34.3925 30L24.0002 24Z"></svg:path><svg:path stroke="#fff" d="M26.8147 35.375L24.0001 37L21.1855 35.375"></svg:path><svg:path stroke="#fff" d="M32.4438 15.875L35.2584 17.5V20.75"></svg:path><svg:path stroke="#fff" d="M12.7417 20.75V17.5L15.5563 15.875"></svg:path></svg:g>`,
})
export class IconParkCubeFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCubeThreeIcon],svg[icon-park-cube-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z"></svg:path><svg:path d="M24 4L24 24"></svg:path><svg:path d="M41 34L24 24"></svg:path><svg:path d="M7 34L24 24"></svg:path><svg:path d="M24 44V34"></svg:path><svg:path d="M41 14L33 19"></svg:path><svg:path d="M7 14L15 19"></svg:path></svg:g>`,
})
export class IconParkCubeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCubeTwoIcon],svg[icon-park-cube-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15.5 9L7 14V24V34L15.5 39L24 44L32.5001 39L41 34V24V14L32.5001 9L24 4L15.5 9Z"></svg:path><svg:path d="M41 14L7 34"></svg:path><svg:path d="M24 4L24 44"></svg:path><svg:path d="M7 14L41 34"></svg:path></svg:g>`,
})
export class IconParkCubeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCupIcon],svg[icon-park-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M8.77783 17.012C8.77783 16.4531 9.23094 16 9.78988 16H33.7658C34.3247 16 34.7778 16.4531 34.7778 17.012V31C34.7778 38.1797 28.9575 44 21.7778 44V44C14.5981 44 8.77783 38.1797 8.77783 31V17.012Z"></svg:path><svg:rect width="26" height="8" x="8.778" y="23" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21.7778 4V10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.7778 6V8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29.7778 6V8"></svg:path><svg:path stroke-linecap="round" d="M34.7778 34C38.6438 34 41.7778 30.866 41.7778 27C41.7778 23.134 38.6438 20 34.7778 20"></svg:path></svg:g>`,
})
export class IconParkCupIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCupFourIcon],svg[icon-park-cup-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 25C14 27 15.0714 32 29 32C42.9286 32 44 27 44 25C44 23 44 10 44 10H29H14C14 10 14 23 14 25Z"></svg:path><svg:path stroke-linecap="round" d="M29 16H23V21L26 24L29 21V16Z"></svg:path><svg:path stroke-linecap="round" d="M26 16V10"></svg:path><svg:path stroke-linecap="round" d="M15 40L43 40"></svg:path><svg:path d="M14 14H4C4 14 5 19 5.9991 22C6.99821 25 14 24 14 24"></svg:path></svg:g>`,
})
export class IconParkCupFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCupOneIcon],svg[icon-park-cup-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 17C10 17 36 17 38 17C40 17 44 17 44 20C44 23 40 23 38 23V41C38 42.1046 37.1046 43 36 43H12C10.8954 43 10 42.1046 10 41V23C8 23 4 23 4 20C4 17 8 17 10 17Z"></svg:path><svg:path d="M41 17C41 11.1271 35.4587 9.31869 28 8V6C28 4.89543 27.1046 4 26 4H22C20.8954 4 20 4.89543 20 6V8C12.5413 9.31869 7 11.1271 7 17"></svg:path></svg:g>`,
})
export class IconParkCupOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCurlingIcon],svg[icon-park-curling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M38 42H10C6.69 42 4 39.32 4 36V28C4 24.69 6.68 22 10 22H38C41.31 22 44 24.68 44 28V36C44 39.32 41.32 42 38 42Z"></svg:path><svg:path stroke-linecap="round" d="M4 32H44"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M10 22L16.48 7.2C16.79 6.47 17.51 6 18.31 6H35.5C37.43 6 39 7.57 39 9.5C39 11.43 37.43 13 35.5 13H22V22H10Z"></svg:path></svg:g>`,
})
export class IconParkCurlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCurrencyIcon],svg[icon-park-currency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 16L24 22L29 16"></svg:path><svg:path d="M9 13.9999C9 13.9999 16.5 2.49984 29.5 6.99986C42.5 11.4999 42 24.4999 42 24.4999"></svg:path><svg:path d="M39 34C39 34 33 45 19.5 41.5C6 38 6 24 6 24"></svg:path><svg:path d="M42 8V24"></svg:path><svg:path d="M6 24L6 40"></svg:path><svg:path d="M18 28H30"></svg:path><svg:path d="M18 22H30"></svg:path><svg:path d="M24 22V34"></svg:path></svg:g>`,
})
export class IconParkCurrencyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCurveAdjustmentIcon],svg[icon-park-curve-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 4H4V44H44V4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 10C32 10 27 14 24 24C21 34 16 38 10 38"></svg:path></svg:g>`,
})
export class IconParkCurveAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCustomerIcon],svg[icon-park-customer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.60868 36.9866C5.32131 33.3783 3.32142 28.6145 3.32142 23.3913C3.32142 12.1271 12.6179 2.99561 24.0856 2.99561C35.5534 2.99561 44.8499 12.1271 44.8499 23.3913C44.8499 31.356 40.2004 38.2515 33.4234 41.6092C29.277 43.7709 24.5467 44.9956 19.5253 44.9956C13.3726 44.9956 7.6569 43.157 2.91699 40.0087C2.91699 40.0087 6.09557 39.662 8.60786 36.9874L8.60868 36.9866ZM33.8397 33.4854C39.2117 28.1136 39.2117 19.4041 33.8397 14.0322C31.3487 11.5413 28.1401 10.2062 24.8794 10.0255V10.0247C24.781 7.57827 26.0979 5.92609 26.1043 5.91803L26.103 5.91829L26.104 5.91699C22.3564 6.64093 18.7778 8.45398 15.8759 11.3559C13.6504 13.5813 12.0658 16.2048 11.1211 18.997C11.2594 18.6308 11.4136 18.2692 11.5837 17.9134C11.3879 18.4127 11.211 18.9229 11.051 19.4449C9.47775 24.2208 10.5882 29.6872 14.3864 33.4854C19.7584 38.8574 28.4679 38.8574 33.8397 33.4854Z"></svg:path><svg:path d="M17.1299 22.3449V24.0538V25.1921C17.1299 26.3283 18.0509 27.2493 19.1872 27.2493C20.3234 27.2493 21.2443 26.3283 21.2443 25.1921V24.0521V22.3449C21.2443 21.2089 20.3234 20.2876 19.1872 20.2876C18.0509 20.2876 17.1299 21.2089 17.1299 22.3449Z"></svg:path><svg:path d="M27.3125 22.3449V24.0538V25.1921C27.3125 26.3283 28.2336 27.2493 29.3697 27.2493C30.5059 27.2493 31.427 26.3283 31.427 25.1921V24.0521V22.3449C31.427 21.2089 30.5059 20.2876 29.3697 20.2876C28.2336 20.2876 27.3125 21.2089 27.3125 22.3449Z"></svg:path></svg:g>`,
})
export class IconParkCustomerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCuttingIcon],svg[icon-park-cutting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10H38V42"></svg:path><svg:path d="M10.5483 37.4519L42.385 5.61519"></svg:path><svg:path d="M42 38H10V6"></svg:path></svg:g>`,
})
export class IconParkCuttingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCuttingOneIcon],svg[icon-park-cutting-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M11 42C13.7614 42 16 39.7614 16 37C16 34.2386 13.7614 32 11 32C8.23858 32 6 34.2386 6 37C6 39.7614 8.23858 42 11 42Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M37 42C39.7614 42 42 39.7614 42 37C42 34.2386 39.7614 32 37 32C34.2386 32 32 34.2386 32 37C32 39.7614 34.2386 42 37 42Z"></svg:path><svg:path stroke-linecap="round" d="M15.3774 39.4131L17.5 35.8162L34.5 6.37138"></svg:path><svg:path stroke-linecap="round" d="M13.4957 6.17518L30.4957 35.62L32.6265 39.4131"></svg:path></svg:g>`,
})
export class IconParkCuttingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCuvetteIcon],svg[icon-park-cuvette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M18 10H30V27L44 41V44H4V41L18 27V10Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M40.5 37.5L37 34L33.5 30.5"></svg:path><svg:path stroke="#000" d="M40.5 37.5L37 34L33.5 30.5"></svg:path><svg:path stroke="#000" d="M14.5 30.5L11 34L7.5 37.5"></svg:path><svg:path stroke="#000" d="M14.5 30.5L11 34L7.5 37.5"></svg:path><svg:path stroke="#000" d="M18 4H30"></svg:path><svg:path stroke="#fff" d="M24 27V28"></svg:path><svg:path stroke="#fff" d="M24 18V21"></svg:path><svg:path stroke="#000" d="M10 35H38"></svg:path></svg:g>`,
})
export class IconParkCuvetteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCycleIcon],svg[icon-park-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 35H7V41"></svg:path><svg:path d="M41 41H35V35"></svg:path><svg:path d="M35 13H41V7"></svg:path><svg:path d="M7 7H13V13"></svg:path><svg:path d="M13 7.29395C7.57778 10.8714 4 17.0178 4 23.9999C4 25.0195 4.0763 26.0213 4.2235 26.9999"></svg:path><svg:path d="M26.9999 43.7765C26.0213 43.9237 25.0195 44 23.9999 44C17.0178 44 10.8714 40.4222 7.29395 35"></svg:path><svg:path d="M43.7765 21C43.9237 21.9786 44 22.9804 44 24C44 30.9821 40.4222 37.1285 35 40.706"></svg:path><svg:path d="M21 4.2235C21.9786 4.0763 22.9804 4 24 4C30.9821 4 37.1285 7.57778 40.706 13"></svg:path></svg:g>`,
})
export class IconParkCycleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCycleArrowIcon],svg[icon-park-cycle-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 16H13C8.02944 16 4 20.0294 4 25C4 29.9706 8.02944 34 13 34C15.4758 34 17.7181 33.0003 19.3453 31.3826C20.9849 29.7525 24 25 24 25C24 25 27.0057 20.2685 28.632 18.6401C30.261 17.009 32.5127 16 35 16C39.9706 16 44 20.0294 44 25C44 29.9706 39.9706 34 35 34H31"></svg:path><svg:path d="M35 30L31 34L35 38"></svg:path><svg:path d="M13 12L17 16L13 20"></svg:path></svg:g>`,
})
export class IconParkCycleArrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCycleMovementIcon],svg[icon-park-cycle-movement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 15L24 19L28 15"></svg:path><svg:path d="M24 19V8C24 5.79086 25.7909 4 28 4H40C42.2091 4 44 5.79086 44 8V19"></svg:path><svg:path d="M28 33L24 29L20 33"></svg:path><svg:path d="M24 29V40C24 42.2091 22.2091 44 20 44H8C5.79086 44 4 42.2091 4 40V29"></svg:path><svg:path d="M33 20L29 24L33 28"></svg:path><svg:path d="M29 24H40C42.2091 24 44 25.7909 44 28V40C44 42.2091 42.2091 44 40 44H29"></svg:path><svg:path d="M15 28L19 24L15 20"></svg:path><svg:path d="M19 24H8C5.79086 24 4 22.2091 4 20V8C4 5.79086 5.79086 4 8 4H19"></svg:path></svg:g>`,
})
export class IconParkCycleMovementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCycleOneIcon],svg[icon-park-cycle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 20C6 12 10 8 18 8"></svg:path><svg:path d="M40 30C40 38 36 42 28 42"></svg:path><svg:path fill="#2F88FF" d="M28 18C28 12.4772 32.4772 8 38 8H42V22H28V18Z"></svg:path><svg:path fill="#2F88FF" d="M6 28H20V32C20 37.5228 15.5228 42 10 42H6V28Z"></svg:path></svg:g>`,
})
export class IconParkCycleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkCylinderIcon],svg[icon-park-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 10C44 13.3137 35.0457 16 24 16C12.9543 16 4 13.3137 4 10C4 6.68629 12.9543 4 24 4C35.0457 4 44 6.68629 44 10Z"></svg:path><svg:path fill="#2F88FF" d="M44 38C44 41.3137 35.0457 44 24 44C12.9543 44 4 41.3137 4 38C4 34.6863 12.9543 32 24 32C35.0457 32 44 34.6863 44 38Z"></svg:path><svg:path d="M44 10V38"></svg:path><svg:path d="M4 10V38"></svg:path></svg:g>`,
})
export class IconParkCylinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDamageMapIcon],svg[icon-park-damage-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 10V38C5 39.1046 5.89543 40 7 40H14H18L15 29L22 27L21 20L29 16L27 13L30 8H7C5.89543 8 5 8.89543 5 10Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M43 38V10C43 8.89543 42.1046 8 41 8H38L34 14L37 19L28 23L29 31L22 33L24 40H41C42.1046 40 43 39.1046 43 38Z"></svg:path><svg:path fill="#43CCF8" fill-rule="evenodd" stroke="#fff" d="M14.5 18C15.3284 18 16 17.3284 16 16.5C16 15.6716 15.3284 15 14.5 15C13.6716 15 13 15.6716 13 16.5C13 17.3284 13.6716 18 14.5 18Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkDamageMapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDarkModeIcon],svg[icon-park-dark-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24.0033 4L29.2737 9.27038H38.7296V18.7263L44 23.9967L38.7296 29.2737V38.7296H29.2737L24.0033 44L18.7264 38.7296H9.27036V29.2737L4 23.9967L9.27036 18.7263V9.27038H18.7264L24.0033 4Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M27 17C27 25 22 26 17 26C17 30 23.5 34 29 30C34.5 26 31 17 27 17Z"></svg:path></svg:g>`,
})
export class IconParkDarkModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDashboardIcon],svg[icon-park-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M8.44365 41.5564C4.46243 37.5751 2 32.0751 2 26C2 13.8497 11.8497 4 24 4C36.1503 4 46 13.8497 46 26C46 32.0751 43.5376 37.5751 39.5564 41.5564"></svg:path><svg:path d="M14.1005 35.8995C11.567 33.366 10 29.866 10 26C10 18.268 16.268 12 24 12"></svg:path><svg:path stroke-linejoin="round" d="M24 26V18"></svg:path></svg:g>`,
})
export class IconParkDashboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDashboardCarIcon],svg[icon-park-dashboard-car-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6.57198 37.428C3.70527 33.7128 2 29.0556 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24C46 29.0556 44.2947 33.7128 41.428 37.428"></svg:path><svg:path d="M12.3035 31.6965C10.8474 29.4881 10 26.843 10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 26.843 37.1526 29.4881 35.6965 31.6965"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 30L40 46H8L24 30Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkDashboardCarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDashboardOneIcon],svg[icon-park-dashboard-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.7778 7C13.7321 7 4.77783 15.9543 4.77783 27C4.77783 32.2301 6.49127 37.4362 9.77783 41H39.7778C43.0644 37.4362 44.7778 32.2301 44.7778 27C44.7778 15.9543 35.8235 7 24.7778 7Z"></svg:path><svg:circle cx="24.778" cy="30" r="4" fill="#2F88FF"></svg:circle><svg:path d="M24.7778 20V26"></svg:path><svg:path d="M24.7778 12V14"></svg:path><svg:path d="M9.77783 28H11.7778"></svg:path><svg:path d="M13.7778 18L15.192 19.4142"></svg:path><svg:path d="M37.7778 28H39.7778"></svg:path><svg:path d="M34.7778 19.4141L36.192 17.9998"></svg:path></svg:g>`,
})
export class IconParkDashboardOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDashboardTwoIcon],svg[icon-park-dashboard-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 18.4836 41.7666 13.4887 38.1547 9.87045C34.5344 6.24377 29.5292 4 24 4C18.4708 4 13.4656 6.24377 9.84529 9.87045C6.23339 13.4887 4 18.4835 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M4 24H8"></svg:path><svg:path d="M9.84521 9.87036L12.9747 12.9999"></svg:path><svg:path d="M24 4V8"></svg:path><svg:path d="M44 24H40"></svg:path><svg:path d="M38.1549 9.87036L35.0254 12.9999"></svg:path><svg:path d="M24 20V32"></svg:path><svg:path d="M39.8523 36.1961C36.1954 40.9422 30.4548 44 24 44C17.5452 44 11.8046 40.9422 8.14771 36.1961C12.8209 33.5259 18.2323 32 24 32C29.7677 32 35.179 33.5259 39.8523 36.1961Z"></svg:path></svg:g>`,
})
export class IconParkDashboardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataIcon],svg[icon-park-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44.0001 11C44.0001 11 44 36.0623 44 38C44 41.3137 35.0457 44 24 44C12.9543 44 4.00003 41.3137 4.00003 38C4.00003 36.1423 4 11 4 11"></svg:path><svg:path d="M44 29C44 32.3137 35.0457 35 24 35C12.9543 35 4 32.3137 4 29"></svg:path><svg:path d="M44 20C44 23.3137 35.0457 26 24 26C12.9543 26 4 23.3137 4 20"></svg:path><svg:ellipse cx="24" cy="10" fill="#2F88FF" rx="20" ry="6"></svg:ellipse></svg:g>`,
})
export class IconParkDataIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataAllIcon],svg[icon-park-data-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="24" cy="11" rx="20" ry="6"></svg:ellipse><svg:path d="M10.7709 15.5C6.61878 16.5994 4 18.208 4 20C4 23.3137 12.9543 26 24 26C35.0457 26 44 23.3137 44 20C44 18.208 41.3812 16.5994 37.2291 15.5C33.7035 16.4335 29.0722 17 24 17C18.9278 17 14.2965 16.4335 10.7709 15.5Z"></svg:path><svg:path d="M10.7709 24.5C6.61878 25.5994 4 27.208 4 29C4 32.3137 12.9543 35 24 35C35.0457 35 44 32.3137 44 29C44 27.208 41.3812 25.5994 37.2291 24.5C33.7035 25.4335 29.0722 26 24 26C18.9278 26 14.2965 25.4335 10.7709 24.5Z"></svg:path><svg:path d="M10.7709 33.5C6.61878 34.5994 4 36.208 4 38C4 41.3137 12.9543 44 24 44C35.0457 44 44 41.3137 44 38C44 36.208 41.3812 34.5994 37.2291 33.5C33.7035 34.4335 29.0722 35 24 35C18.9278 35 14.2965 34.4335 10.7709 33.5Z"></svg:path></svg:g>`,
})
export class IconParkDataAllIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataArrivalIcon],svg[icon-park-data-arrival-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M6 42H42V6H32H30C28.6758 9.15854 26.6758 10.7378 24 10.7378C21.3242 10.7378 19.3242 9.15854 18 6H16H6V42Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 24L21 30L33 18"></svg:path></svg:g>`,
})
export class IconParkDataArrivalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataDisplayIcon],svg[icon-park-data-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 8V20C22 22.2091 17.9706 24 13 24C8.02944 24 4 22.2091 4 20V8"></svg:path><svg:path d="M22 14C22 16.2091 17.9706 18 13 18C8.02944 18 4 16.2091 4 14"></svg:path><svg:path fill="#2F88FF" d="M22 8C22 10.2091 17.9706 12 13 12C8.02944 12 4 10.2091 4 8C4 5.79086 8.02944 4 13 4C17.9706 4 22 5.79086 22 8Z"></svg:path><svg:path d="M32 6H38C40.2091 6 42 7.79086 42 10V16"></svg:path><svg:path d="M16 42H10C7.79086 42 6 40.2091 6 38V32"></svg:path><svg:path d="M35 38V44"></svg:path><svg:path d="M41 44H35H29"></svg:path><svg:path fill="#2F88FF" d="M44 38V26H26V38H44Z"></svg:path></svg:g>`,
})
export class IconParkDataDisplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataFileIcon],svg[icon-park-data-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44V4H31L40 14.5V44H8Z"></svg:path><svg:rect width="6" height="7" x="15" y="28" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" d="M14 35H34"></svg:path><svg:rect width="6" height="12" x="21" y="23" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="6" height="17" x="27" y="18" fill="#43CCF8" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkDataFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataFourIcon],svg[icon-park-data-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="24" cy="11" rx="20" ry="6"></svg:ellipse><svg:path d="M10.7709 15.5C6.61878 16.5994 4 18.208 4 20C4 23.3137 12.9543 26 24 26C35.0457 26 44 23.3137 44 20C44 18.208 41.3812 16.5994 37.2291 15.5"></svg:path><svg:path d="M10.7709 24.5C6.61878 25.5994 4 27.208 4 29C4 32.3137 12.9543 35 24 35C35.0457 35 44 32.3137 44 29C44 27.208 41.3812 25.5994 37.2291 24.5"></svg:path><svg:path fill="#2F88FF" d="M10.7709 33.5C6.61878 34.5994 4 36.208 4 38C4 41.3137 12.9543 44 24 44C35.0457 44 44 41.3137 44 38C44 36.208 41.3812 34.5994 37.2291 33.5C33.7035 34.4335 29.0722 35 24 35C18.9278 35 14.2965 34.4335 10.7709 33.5Z"></svg:path></svg:g>`,
})
export class IconParkDataFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataLockIcon],svg[icon-park-data-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M39 28C39 28.9564 39 32 39 32H31C31 32 31 30.2091 31 28C31 25.7909 32.7909 24 35 24C37.2091 24 39 25.7909 39 28Z"></svg:path><svg:path fill="#2F88FF" d="M26 32H44V44H26V32Z"></svg:path><svg:path d="M32 6H38C40.2091 6 42 7.79086 42 10V16"></svg:path><svg:path d="M16 42H10C7.79086 42 6 40.2091 6 38V32"></svg:path><svg:path d="M22 8V20C22 22.2091 17.9706 24 13 24C8.02944 24 4 22.2091 4 20V8"></svg:path><svg:path d="M22 14C22 16.2091 17.9706 18 13 18C8.02944 18 4 16.2091 4 14"></svg:path><svg:path fill="#2F88FF" d="M22 8C22 10.2091 17.9706 12 13 12C8.02944 12 4 10.2091 4 8C4 5.79086 8.02944 4 13 4C17.9706 4 22 5.79086 22 8Z"></svg:path></svg:g>`,
})
export class IconParkDataLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataNullIcon],svg[icon-park-data-null-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="24" cy="11" rx="20" ry="6"></svg:ellipse><svg:path d="M10.7709 15.5C6.61878 16.5994 4 18.208 4 20C4 23.3137 12.9543 26 24 26C35.0457 26 44 23.3137 44 20C44 18.208 41.3812 16.5994 37.2291 15.5"></svg:path><svg:path d="M10.7709 24.5C6.61878 25.5994 4 27.208 4 29C4 32.3137 12.9543 35 24 35C35.0457 35 44 32.3137 44 29C44 27.208 41.3812 25.5994 37.2291 24.5"></svg:path><svg:path d="M10.7709 33.5C6.61878 34.5994 4 36.208 4 38C4 41.3137 12.9543 44 24 44C35.0457 44 44 41.3137 44 38C44 36.208 41.3812 34.5994 37.2291 33.5"></svg:path></svg:g>`,
})
export class IconParkDataNullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataOneIcon],svg[icon-park-data-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="24" cy="11" fill="#2F88FF" rx="20" ry="6"></svg:ellipse><svg:path d="M10.7709 15.5C6.61878 16.5994 4 18.208 4 20C4 23.3137 12.9543 26 24 26C35.0457 26 44 23.3137 44 20C44 18.208 41.3812 16.5994 37.2291 15.5"></svg:path><svg:path d="M10.7709 24.5C6.61878 25.5994 4 27.208 4 29C4 32.3137 12.9543 35 24 35C35.0457 35 44 32.3137 44 29C44 27.208 41.3812 25.5994 37.2291 24.5"></svg:path><svg:path d="M10.7709 33.5C6.61878 34.5994 4 36.208 4 38C4 41.3137 12.9543 44 24 44C35.0457 44 44 41.3137 44 38C44 36.208 41.3812 34.5994 37.2291 33.5"></svg:path></svg:g>`,
})
export class IconParkDataOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataScreenIcon],svg[icon-park-data-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#000" d="M24 36V43"></svg:path><svg:path stroke="#fff" d="M32 14L16 28"></svg:path><svg:path stroke="#000" d="M10 43H38"></svg:path><svg:circle cx="15" cy="17" r="3" fill="#43CCF8" stroke="#fff"></svg:circle><svg:circle cx="33" cy="25" r="3" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkDataScreenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataServerIcon],svg[icon-park-data-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"></svg:path><svg:path stroke="#fff" d="M4 32H44"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M10 38H11"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M26 38H38"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M44 37V27"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 37V27"></svg:path></svg:g>`,
})
export class IconParkDataServerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataSheetIcon],svg[icon-park-data-sheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M32 25V32"></svg:path><svg:path stroke="#fff" d="M24 16V32"></svg:path><svg:path stroke="#fff" d="M16 20V32"></svg:path></svg:g>`,
})
export class IconParkDataSheetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataSwitchingIcon],svg[icon-park-data-switching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 8V20C22 22.2091 17.9706 24 13 24C8.02944 24 4 22.2091 4 20V8"></svg:path><svg:path d="M22 14C22 16.2091 17.9706 18 13 18C8.02944 18 4 16.2091 4 14"></svg:path><svg:path fill="#2F88FF" d="M22 8C22 10.2091 17.9706 12 13 12C8.02944 12 4 10.2091 4 8C4 5.79086 8.02944 4 13 4C17.9706 4 22 5.79086 22 8Z"></svg:path><svg:path d="M44 28V40C44 42.2091 39.9706 44 35 44C30.0294 44 26 42.2091 26 40V28"></svg:path><svg:path d="M44 34C44 36.2091 39.9706 38 35 38C30.0294 38 26 36.2091 26 34"></svg:path><svg:path fill="#2F88FF" d="M44 28C44 30.2091 39.9706 32 35 32C30.0294 32 26 30.2091 26 28C26 25.7909 30.0294 24 35 24C39.9706 24 44 25.7909 44 28Z"></svg:path><svg:path d="M32 6H38C40.2091 6 42 7.79086 42 10V16"></svg:path><svg:path d="M16 42H10C7.79086 42 6 40.2091 6 38V32"></svg:path></svg:g>`,
})
export class IconParkDataSwitchingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataThreeIcon],svg[icon-park-data-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.7709 33.5C6.61878 34.5994 4 36.208 4 38C4 41.3137 12.9543 44 24 44C35.0457 44 44 41.3137 44 38C44 36.208 41.3812 34.5994 37.2291 33.5"></svg:path><svg:ellipse cx="24" cy="11" rx="20" ry="6"></svg:ellipse><svg:path d="M10.7709 24.5C6.61878 25.5994 4 27.208 4 29C4 32.3137 12.9543 35 24 35C35.0457 35 44 32.3137 44 29C44 27.208 41.3812 25.5994 37.2291 24.5"></svg:path><svg:path d="M10.7709 15.5C6.61878 16.5994 4 18.208 4 20C4 23.3137 12.9543 26 24 26C35.0457 26 44 23.3137 44 20C44 18.208 41.3812 16.5994 37.2291 15.5"></svg:path><svg:path fill="#2F88FF" d="M10.7709 24.5C6.61878 25.5994 4 27.208 4 29C4 32.3137 12.9543 35 24 35C35.0457 35 44 32.3137 44 29C44 27.208 41.3812 25.5994 37.2291 24.5C33.7035 25.4335 29.0722 26 24 26C18.9278 26 14.2965 25.4335 10.7709 24.5Z"></svg:path></svg:g>`,
})
export class IconParkDataThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataTwoIcon],svg[icon-park-data-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:ellipse cx="24" cy="11" rx="20" ry="6"></svg:ellipse><svg:path fill="#2F88FF" d="M10.7709 15.5C6.61878 16.5994 4 18.208 4 20C4 23.3137 12.9543 26 24 26C35.0457 26 44 23.3137 44 20C44 18.208 41.3812 16.5994 37.2291 15.5C33.7035 16.4335 29.0722 17 24 17C18.9278 17 14.2965 16.4335 10.7709 15.5Z"></svg:path><svg:path d="M10.7709 24.5C6.61878 25.5994 4 27.208 4 29C4 32.3137 12.9543 35 24 35C35.0457 35 44 32.3137 44 29C44 27.208 41.3812 25.5994 37.2291 24.5"></svg:path><svg:path d="M10.7709 33.5C6.61878 34.5994 4 36.208 4 38C4 41.3137 12.9543 44 24 44C35.0457 44 44 41.3137 44 38C44 36.208 41.3812 34.5994 37.2291 33.5"></svg:path></svg:g>`,
})
export class IconParkDataTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDataUserIcon],svg[icon-park-data-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 8V20C22 22.2091 17.9706 24 13 24C8.02944 24 4 22.2091 4 20V8"></svg:path><svg:path d="M22 14C22 16.2091 17.9706 18 13 18C8.02944 18 4 16.2091 4 14"></svg:path><svg:path fill="#2F88FF" d="M22 8C22 10.2091 17.9706 12 13 12C8.02944 12 4 10.2091 4 8C4 5.79086 8.02944 4 13 4C17.9706 4 22 5.79086 22 8Z"></svg:path><svg:path d="M32 6H38C40.2091 6 42 7.79086 42 10V16"></svg:path><svg:path d="M16 42H10C7.79086 42 6 40.2091 6 38V32"></svg:path><svg:circle cx="35" cy="29" r="5" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M44 44H26C26 39.0294 30.0294 35 35 35C39.9706 35 44 39.0294 44 44Z"></svg:path></svg:g>`,
})
export class IconParkDataUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseAlertIcon],svg[icon-park-database-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M34 26V30"></svg:path><svg:path stroke="#fff" d="M34 35V36"></svg:path></svg:g>`,
})
export class IconParkDatabaseAlertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseCodeIcon],svg[icon-park-database-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#fff" d="M37 29L39 31L37 33"></svg:path><svg:path stroke="#fff" d="M31 33L29 31L31 29"></svg:path></svg:g>`,
})
export class IconParkDatabaseCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseConfigIcon],svg[icon-park-database-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#fff" d="M34.0002 27V31M37.4643 29L34.0002 31M37.4643 33L34.0002 31M34.0002 35V31M30.5361 33L34.0002 31M30.5361 29L34.0002 31"></svg:path></svg:g>`,
})
export class IconParkDatabaseConfigIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseDownloadIcon],svg[icon-park-database-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M34 26V36M34 36L38 32M34 36L30 32"></svg:path></svg:g>`,
})
export class IconParkDatabaseDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseEnterIcon],svg[icon-park-database-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M39 31L35 27M39 31L35 35M39 31L29 31"></svg:path></svg:g>`,
})
export class IconParkDatabaseEnterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseFailIcon],svg[icon-park-database-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M37 34L34 31M34 31L37 28M34 31L31 28M34 31L31 34"></svg:path></svg:g>`,
})
export class IconParkDatabaseFailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseFirstIcon],svg[icon-park-database-first-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#fff" d="M34 35V27L32 29M34 35H36M34 35H32"></svg:path></svg:g>`,
})
export class IconParkDatabaseFirstIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseForbidIcon],svg[icon-park-database-forbid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M37 28L31 34"></svg:path></svg:g>`,
})
export class IconParkDatabaseForbidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseLockIcon],svg[icon-park-database-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path fill="#2F88FF" stroke="#fff" d="M39 31C39 33.7614 36.7614 36 34 36C31.2386 36 29 33.7614 29 31H39Z"></svg:path><svg:path fill="#2F88FF" stroke="#fff" d="M34 26C35.6569 26 37 27.3431 37 29V31H31V29C31 27.3431 32.3431 26 34 26Z"></svg:path></svg:g>`,
})
export class IconParkDatabaseLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseNetworkIcon],svg[icon-park-database-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path d="M34 41C34 41 30.5 35.1375 30.5 31C30.5 26.8625 34 21 34 21"></svg:path><svg:path d="M34 41C34 41 37.5 35.1375 37.5 31C37.5 26.8625 34 21 34 21"></svg:path><svg:path d="M44 31H24"></svg:path></svg:g>`,
})
export class IconParkDatabaseNetworkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseNetworkPointIcon],svg[icon-park-database-network-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 36V30"></svg:path><svg:path d="M20 40H6"></svg:path><svg:path d="M28 40H42"></svg:path><svg:path fill="#2F88FF" d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"></svg:path><svg:path d="M37 17C37 24.1797 31.1797 30 24 30C16.8203 30 11 24.1797 11 17M37 17C37 9.8203 31.1797 4 24 4C16.8203 4 11 9.8203 11 17M37 17H11"></svg:path><svg:path fill="#2F88FF" d="M29 17C29 24.1797 26.7614 30 24 30C21.2386 30 19 24.1797 19 17C19 9.8203 21.2386 4 24 4C26.7614 4 29 9.8203 29 17Z"></svg:path><svg:path d="M37 17H11"></svg:path></svg:g>`,
})
export class IconParkDatabaseNetworkPointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabasePointIcon],svg[icon-park-database-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 36V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 40H6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 40H42"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 9V25C39 27.7614 32.2843 30 24 30C15.7157 30 9 27.7614 9 25V9"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 17C39 19.7614 32.2843 22 24 22C15.7157 22 9 19.7614 9 17"></svg:path><svg:path fill="#2F88FF" d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"></svg:path><svg:path fill="#2F88FF" d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 9C39 11.7614 32.2843 14 24 14C15.7157 14 9 11.7614 9 9C9 6.23858 15.7157 4 24 4C32.2843 4 39 6.23858 39 9Z"></svg:path></svg:g>`,
})
export class IconParkDatabasePointIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabasePositionIcon],svg[icon-park-database-position-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path fill="#2F88FF" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path></svg:g>`,
})
export class IconParkDatabasePositionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabasePowerIcon],svg[icon-park-database-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M34 26L31 30L37 32L34 36"></svg:path></svg:g>`,
})
export class IconParkDatabasePowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseProportionIcon],svg[icon-park-database-proportion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M37 28C35 30 33 32 31 34M31 28L32 27M37 35L38 34"></svg:path></svg:g>`,
})
export class IconParkDatabaseProportionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseSearchIcon],svg[icon-park-database-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M36.8281 33.8281L40.9997 37.9997"></svg:path><svg:path fill="#2F88FF" stroke="#fff" d="M38 31C38 32.1046 37.5523 33.1046 36.8284 33.8284C36.1046 34.5523 35.1046 35 34 35C31.7909 35 30 33.2091 30 31C30 28.7909 31.7909 27 34 27C36.2091 27 38 28.7909 38 31Z"></svg:path><svg:path stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41"></svg:path></svg:g>`,
})
export class IconParkDatabaseSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseSettingIcon],svg[icon-park-database-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path fill="#2F88FF" stroke="#fff" d="M34 27L37.4641 29V33L34 35L30.5359 33V29L34 27Z"></svg:path></svg:g>`,
})
export class IconParkDatabaseSettingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseSuccessIcon],svg[icon-park-database-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M38.5 29L33 34.5L30 31.5"></svg:path></svg:g>`,
})
export class IconParkDatabaseSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseSyncIcon],svg[icon-park-database-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M38 31C38 33.2091 36.2091 35 34 35"></svg:path><svg:path stroke="#fff" d="M30 31C30 28.7909 31.7909 27 34 27"></svg:path></svg:g>`,
})
export class IconParkDatabaseSyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDatabaseTimeIcon],svg[icon-park-database-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"></svg:path><svg:path stroke="#000" d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"></svg:path><svg:path stroke="#000" d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983"></svg:path><svg:path stroke="#000" d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198"></svg:path><svg:path stroke="#fff" d="M38 31H34V27"></svg:path></svg:g>`,
})
export class IconParkDatabaseTimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDateComesBackIcon],svg[icon-park-date-comes-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 8H9C7.34315 8 6 9.34315 6 11V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V25V18"></svg:path><svg:path d="M32.2427 12.4854L36.4853 8.24271L32.2427 4.00007"></svg:path><svg:path d="M24 17V34"></svg:path><svg:path d="M32 24V34"></svg:path><svg:path d="M16 24V34"></svg:path></svg:g>`,
})
export class IconParkDateComesBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeadlineSortIcon],svg[icon-park-deadline-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5V30.0036H42V5"></svg:path><svg:path stroke-linejoin="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linejoin="round" d="M24 30V43"></svg:path><svg:path d="M18.3442 20.6577L29.6579 9.34401"></svg:path><svg:path d="M18.3438 9.34326L29.6575 20.657"></svg:path></svg:g>`,
})
export class IconParkDeadlineSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeathStarIcon],svg[icon-park-death-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M5 25H44"></svg:path><svg:circle cx="19" cy="15" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M31 31H43"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 17L42 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M25 37H39"></svg:path><svg:path stroke="#000" d="M40 11.998C42.5116 15.341 44 19.4967 44 24C44 31.8085 39.5252 38.5718 33 41.8654"></svg:path><svg:path stroke="#000" d="M4.40007 20C4.13772 21.2924 4 22.6301 4 24C4 25.7265 4.21876 27.4019 4.63009 29"></svg:path></svg:g>`,
})
export class IconParkDeathStarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeeplinkIcon],svg[icon-park-deeplink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M21 34.9929C21 35.8067 21 36.471 21 36.9857C21 37.8714 21 39.2 21 40.9714C21 41.5395 20.5772 42 20.0556 42H4.94444C4.42284 42 4 41.5395 4 40.9714V7.02857C4 6.46051 4.42284 6 4.94444 6H20.0556C20.5772 6 21 6.46051 21 7.02857C21 8.8 21 10.1286 21 11.0143C21 11.529 21 12.1933 21 13.0071"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M27 13.0071C27 12.1933 27 11.529 27 11.0143C27 10.1286 27 8.8 27 7.02857C27 6.46051 27.4228 6 27.9444 6H43.0556C43.5772 6 44 6.46051 44 7.02857V40.9714C44 41.5395 43.5772 42 43.0556 42H27.9444C27.4228 42 27 41.5395 27 40.9714C27 39.2 27 37.8714 27 36.9857C27 36.471 27 35.8067 27 34.9929"></svg:path><svg:path fill="#000" d="M12.5 38C13.6046 38 14.5 37.1046 14.5 36C14.5 34.8954 13.6046 34 12.5 34C11.3954 34 10.5 34.8954 10.5 36C10.5 37.1046 11.3954 38 12.5 38Z"></svg:path><svg:path fill="#000" d="M35.5 38C36.6046 38 37.5 37.1046 37.5 36C37.5 34.8954 36.6046 34 35.5 34C34.3954 34 33.5 34.8954 33.5 36C33.5 37.1046 34.3954 38 35.5 38Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M16 23.5H32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27.2231 28.2729L28.8141 26.682L31.9961 23.5L28.8141 20.318L27.2231 18.727"></svg:path></svg:g>`,
})
export class IconParkDeeplinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeerIcon],svg[icon-park-deer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M36 27C36 34.2165 30.6274 44 24 44C17.3726 44 12 34.2165 12 27C12 19.7835 13.5 16 24 16C34.5 16 36 19.7835 36 27Z"></svg:path><svg:ellipse fill="#2F88FF" stroke="#000" stroke-width="4" rx="5" ry="3.5" transform="scale(1 -1)rotate(45 40.625 38.327)"></svg:ellipse><svg:ellipse cx="9" cy="17.5" fill="#2F88FF" stroke="#000" stroke-width="4" rx="5" ry="3.5" transform="rotate(45 9 17.5)"></svg:ellipse><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M12 4C12 10.6274 17.3726 16 24 16C30.6274 16 36 10.6274 36 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M18 7C18 11.9706 20.6863 16 24 16C27.3137 16 30 11.9706 30 7"></svg:path><svg:circle cx="20" cy="26" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="34" r="2" fill="#fff"></svg:circle><svg:circle cx="28" cy="26" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkDeerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDegreeHatIcon],svg[icon-park-degree-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M2 17.4L23.0222 9L44.0444 17.4L23.0222 25.8L2 17.4Z"></svg:path><svg:path stroke-linecap="round" d="M44.0444 17.51V26.7332"></svg:path><svg:path stroke-linecap="round" d="M11.5557 21.8252V34.2666C11.5557 34.2666 16.3658 38.9999 23.0224 38.9999C29.679 38.9999 34.4891 34.2666 34.4891 34.2666V21.8252"></svg:path></svg:g>`,
})
export class IconParkDegreeHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteIcon],svg[icon-park-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9 10V44H39V10H9Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 20V33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 20V33"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 10H44"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M16 10L19.289 4H28.7771L32 10H16Z"></svg:path></svg:g>`,
})
export class IconParkDeleteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteFiveIcon],svg[icon-park-delete-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M8 11L40 11"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 5L30 5"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 25L28 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 25L20 33"></svg:path></svg:g>`,
})
export class IconParkDeleteFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteFourIcon],svg[icon-park-delete-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 11L40 11"></svg:path><svg:path stroke-linecap="round" d="M18 5L30 5"></svg:path><svg:path fill="#2F88FF" d="M12 17H36V40C36 41.6569 34.6569 43 33 43H15C13.3431 43 12 41.6569 12 40V17Z"></svg:path></svg:g>`,
})
export class IconParkDeleteFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteKeyIcon],svg[icon-park-delete-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M18.4237 10.5379C18.794 10.1922 19.2817 10 19.7883 10H42C43.1046 10 44 10.8954 44 12V36C44 37.1046 43.1046 38 42 38H19.7883C19.2817 38 18.794 37.8078 18.4237 37.4621L4 24L18.4237 10.5379Z"></svg:path><svg:path stroke="#fff" d="M36 19L26 29"></svg:path><svg:path stroke="#fff" d="M26 19L36 29"></svg:path></svg:g>`,
})
export class IconParkDeleteKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteModeIcon],svg[icon-park-delete-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24.0033 4L29.2737 9.27038H38.7296V18.7263L44 23.9967L38.7296 29.2737V38.7296H29.2737L24.0033 44L18.7264 38.7296H9.27036V29.2737L4 23.9967L9.27036 18.7263V9.27038H18.7264L24.0033 4Z"></svg:path><svg:path stroke="#fff" d="M17 24H31"></svg:path></svg:g>`,
})
export class IconParkDeleteModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteOneIcon],svg[icon-park-delete-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M15 12L16.2 5H31.8L33 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 12H42"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M37 12L35 43H13L11 12H37Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 35H29"></svg:path></svg:g>`,
})
export class IconParkDeleteOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteThemesIcon],svg[icon-park-delete-themes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M8 15H40L37 44H11L8 15Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20.002 25.0024V35.0026"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28.0024 24.9995V34.9972"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 14.9999L28.3242 3L36 15"></svg:path></svg:g>`,
})
export class IconParkDeleteThemesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteThreeIcon],svg[icon-park-delete-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M17 31L31 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 19L17 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M31 31L29 29"></svg:path></svg:g>`,
})
export class IconParkDeleteThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeleteTwoIcon],svg[icon-park-delete-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M14 11L4 24L14 37H44V11H14Z"></svg:path><svg:path stroke="#fff" d="M21 19L31 29"></svg:path><svg:path stroke="#fff" d="M31 19L21 29"></svg:path></svg:g>`,
})
export class IconParkDeleteTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeliveryIcon],svg[icon-park-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 33L26 35C26 35 41 32 43 32C45 32 45 34 43 36C41 38 34 44 28 44C22 44 18 41 14 41C10 41 4 41 4 41"></svg:path><svg:path d="M4 29C6 27 10 24 14 24C18 24 27.5 28 29 30C30.5 32 26 35 26 35"></svg:path><svg:path d="M16 18V10C16 8.89543 16.8954 8 18 8H42C43.1046 8 44 8.89543 44 10V26"></svg:path><svg:rect width="10" height="9" x="25" y="8" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkDeliveryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDepositIcon],svg[icon-park-deposit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 16V44H36V16"></svg:path><svg:path d="M19 20L24 26L29 20"></svg:path><svg:path d="M18 32H30"></svg:path><svg:path d="M18 26H30"></svg:path><svg:path d="M24 26V38"></svg:path><svg:path d="M14 10L23.6154 10L34 10"></svg:path><svg:path d="M36 18H42V4H6V18H12"></svg:path></svg:g>`,
})
export class IconParkDepositIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDescendIcon],svg[icon-park-descend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M11.549 16.6253L13.0129 11.161C13.0129 11.161 8.21885 12.3128 5.91213 14.0184C3.6054 15.7239 3.25986 19.4167 5.98653 20.9909C8.7132 22.5651 44.1733 39.9362 44.1733 39.9362L41.4054 31.142L11.549 16.6253Z"></svg:path><svg:path d="M20 35L26 38"></svg:path><svg:path d="M29 25L26 9L22 7L19 20"></svg:path></svg:g>`,
})
export class IconParkDescendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeskLampIcon],svg[icon-park-desk-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M8 24.5957C8 25.3713 8.62871 26 9.40426 26H38.5957C39.3713 26 40 25.3713 40 24.5957V20C40 11.1634 32.8366 4 24 4C15.1634 4 8 11.1634 8 20V24.5957Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 42L24 26"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 32L15 26"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 42H15"></svg:path></svg:g>`,
})
export class IconParkDeskLampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDeskLampOneIcon],svg[icon-park-desk-lamp-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 40.9989H42"></svg:path><svg:path stroke-linecap="round" d="M39 18.999L39 40.999"></svg:path><svg:path stroke-linecap="round" d="M27 13.999L39 23.999"></svg:path><svg:path fill="#2F88FF" d="M26.3399 14.5773C26.5526 14.3398 26.7433 14.0744 26.9065 13.7825C28.0894 11.6675 27.3562 8.8005 25.3075 7.57941C23.2587 6.35832 20.4884 7.13826 19.3038 9.25217C19.1168 9.58576 19.0131 9.84723 18.9203 10.1561C15.3443 9.88004 11.913 11.6307 10 15.0512L26.6935 25C28.6065 21.5794 28.3595 17.6363 26.3399 14.5773Z"></svg:path></svg:g>`,
})
export class IconParkDeskLampOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDetectionIcon],svg[icon-park-detection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M6.45012 34.8494L10.4398 31.5017L10.9532 25.6319L18.9331 18.936L27.7107 11.5707L30.9026 8.8924C33.9875 6.30384 38.5867 6.70623 41.1753 9.79115C43.7638 12.8761 43.3615 17.4753 40.2765 20.0639L37.0847 22.7422L28.3071 30.1074L20.3272 36.8033L14.4598 36.2925L10.473 39.6379C9.14922 40.7487 7.17567 40.576 6.06492 39.2522C4.95548 37.9301 5.12794 35.9588 6.45012 34.8494Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M23.4365 9.71777L38.2075 27.3211"></svg:path><svg:path stroke-linecap="round" d="M18.5755 29.0002L24.3018 24.0002"></svg:path></svg:g>`,
})
export class IconParkDetectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDevicesIcon],svg[icon-park-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M23 43H43V5H14V15"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M5 15H23V43H5L5 15Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13 37H15"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M28 37H30"></svg:path></svg:g>`,
})
export class IconParkDevicesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondIcon],svg[icon-park-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.6364 5H37.3636L45 18.3L24 43L3 18.3L10.6364 5Z" clip-rule="evenodd"></svg:path><svg:path d="M10.6362 5L23.9999 43L37.3635 5"></svg:path><svg:path d="M3 18.3H45"></svg:path><svg:path d="M15.4092 18.3L24.0001 5L32.591 18.3"></svg:path></svg:g>`,
})
export class IconParkDiamondIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondNecklaceIcon],svg[icon-park-diamond-necklace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M17 32.4091L24 29L31 32.4091V39.9091L24 44L17 39.9091V32.4091Z"></svg:path><svg:path d="M8 4C8.45455 12.3333 14 29 24 29C34 29 40 12.7838 40 4"></svg:path></svg:g>`,
})
export class IconParkDiamondNecklaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondOneIcon],svg[icon-park-diamond-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M5.93882 13.9336L23.0362 4.53011C23.6363 4.20002 24.3637 4.20002 24.9638 4.53011L42.0612 13.9336C43.0988 14.5043 43.4161 15.8467 42.7438 16.8215L25.6464 41.6127C24.8515 42.7654 23.1485 42.7654 22.3536 41.6127L5.25624 16.8215C4.58391 15.8467 4.90118 14.5044 5.93882 13.9336Z"></svg:path>`,
})
export class IconParkDiamondOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondRingIcon],svg[icon-park-diamond-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="25" cy="29" r="15"></svg:circle><svg:path fill="#2F88FF" d="M18 8L21 4H25.1339H29.0536L32 8L25 14L18 8Z"></svg:path></svg:g>`,
})
export class IconParkDiamondRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondThreeIcon],svg[icon-park-diamond-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M5.41421 22.5858L22.5858 5.41421C23.3668 4.63317 24.6332 4.63316 25.4142 5.41421L42.5858 22.5858C43.3668 23.3668 43.3668 24.6332 42.5858 25.4142L25.4142 42.5858C24.6332 43.3668 23.3668 43.3668 22.5858 42.5858L5.41421 25.4142C4.63317 24.6332 4.63316 23.3668 5.41421 22.5858Z"></svg:path>`,
})
export class IconParkDiamondThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondTwoIcon],svg[icon-park-diamond-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M8.92349 22.7879L22.4091 5.08801C23.2096 4.03746 24.7904 4.03746 25.5909 5.08801L39.0765 22.7879C39.622 23.5039 39.622 24.4961 39.0765 25.2121L25.5909 42.912C24.7904 43.9625 23.2096 43.9625 22.4091 42.912L8.92349 25.2121C8.37798 24.4961 8.37798 23.5039 8.92349 22.7879Z"></svg:path>`,
})
export class IconParkDiamondTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondsIcon],svg[icon-park-diamonds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 8H36L44 18L24 42L4 18L12 8Z"></svg:path><svg:path stroke="#fff" d="M4 18L44 18"></svg:path><svg:path stroke="#fff" d="M24 42L16 18"></svg:path><svg:path stroke="#fff" d="M24 42L32 18"></svg:path><svg:path stroke="#000" d="M8 13L4 18L24 42L44 18L40 13"></svg:path></svg:g>`,
})
export class IconParkDiamondsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDianziqianIcon],svg[icon-park-dianziqian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 8L24 13L34 19V29.2143L14 18V29L34 41L43 35.1071V13.8929L33 8Z"></svg:path><svg:path d="M24 35L15 41L5 35L5.00069 14L15 8L24 13"></svg:path></svg:g>`,
})
export class IconParkDianziqianIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiapersOneIcon],svg[icon-park-diapers-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 6H6V24C6 28.5 8.5 42.5 24 42.5C39.5 42.5 42 28 42 24V6Z"></svg:path><svg:path d="M6 14H16"></svg:path><svg:path d="M32 14H42"></svg:path><svg:path d="M42 24C32 24 25 28.8 25 42"></svg:path><svg:path d="M6 24C16 24 23 28.8 23 42"></svg:path></svg:g>`,
})
export class IconParkDiapersOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDifferenceSetIcon],svg[icon-park-difference-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 40V19C6 17.8954 6.89543 17 8 17H15C16.1046 17 17 17.8954 17 19V29C17 30.1046 17.8954 31 19 31H29C30.1046 31 31 31.8954 31 33V40C31 41.1046 30.1046 42 29 42H8C6.89543 42 6 41.1046 6 40Z"></svg:path><svg:path d="M42 8V29C42 30.1046 41.1046 31 40 31H33C31.8954 31 31 30.1046 31 29V19C31 17.8954 30.1046 17 29 17H19C17.8954 17 17 16.1046 17 15V8C17 6.89543 17.8954 6 19 6H40C41.1046 6 42 6.89543 42 8Z"></svg:path></svg:g>`,
})
export class IconParkDifferenceSetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDigitalWatchesIcon],svg[icon-park-digital-watches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="22" height="22" x="13" y="13" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M29 35V42C29 43.1046 28.1046 44 27 44H21C19.8954 44 19 43.1046 19 42V35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M19 13V6C19 4.89543 19.8954 4 21 4H27C28.1046 4 29 4.89543 29 6V13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 21H37"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 24H21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 24H29"></svg:path></svg:g>`,
})
export class IconParkDigitalWatchesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDirectionIcon],svg[icon-park-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:path fill="#fff" d="M23.293 10.5649L20.0504 13.8075C19.4204 14.4375 19.8666 15.5146 20.7575 15.5146H27.2428C28.1337 15.5146 28.5798 14.4375 27.9499 13.8075L24.7072 10.5649C24.3167 10.1744 23.6835 10.1744 23.293 10.5649Z"></svg:path><svg:path fill="#fff" d="M10.5649 24.707L13.8075 27.9496C14.4375 28.5796 15.5146 28.1334 15.5146 27.2425V20.7572C15.5146 19.8663 14.4375 19.4202 13.8075 20.0501L10.5649 23.2928C10.1744 23.6833 10.1744 24.3165 10.5649 24.707Z"></svg:path><svg:path fill="#fff" d="M24.707 37.4351L27.9496 34.1925C28.5796 33.5625 28.1334 32.4854 27.2425 32.4854H20.7572C19.8663 32.4854 19.4202 33.5625 20.0501 34.1925L23.2928 37.4351C23.6833 37.8256 24.3165 37.8256 24.707 37.4351Z"></svg:path><svg:path fill="#fff" d="M37.4351 23.293L34.1925 20.0504C33.5625 19.4204 32.4854 19.8666 32.4854 20.7575V27.2428C32.4854 28.1337 33.5625 28.5798 34.1925 27.9499L37.4351 24.7072C37.8256 24.3167 37.8256 23.6835 37.4351 23.293Z"></svg:path></svg:g>`,
})
export class IconParkDirectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDirectionAdjustmentIcon],svg[icon-park-direction-adjustment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 8L24 4M24 4L28 8M24 4V16"></svg:path><svg:path d="M20 40L24 44M24 44L28 40M24 44V32"></svg:path><svg:path d="M40 20L44 24M44 24L40 28M44 24H32"></svg:path><svg:path d="M8 20L4 24M4 24L8 28M4 24H16"></svg:path><svg:circle cx="24" cy="24" r="2"></svg:circle></svg:g>`,
})
export class IconParkDirectionAdjustmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDirectionAdjustmentThreeIcon],svg[icon-park-direction-adjustment-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 10L24 4M24 4L30 10M24 4V24M24 24V44M24 24H44M24 24H4M18 38L24 44M24 44L30 38M38 18L44 24M44 24L38 30M10 18L4 24M4 24L10 30"></svg:path>`,
})
export class IconParkDirectionAdjustmentThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDirectionAdjustmentTwoIcon],svg[icon-park-direction-adjustment-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 10L24 4M24 4L30 10M24 4V14"></svg:path><svg:path d="M18 38L24 44M24 44L30 38M24 44V34"></svg:path><svg:path d="M38 18L44 24M44 24L38 30M44 24H34"></svg:path><svg:path d="M10 18L4 24M4 24L10 30M4 24H14"></svg:path><svg:circle cx="24" cy="24" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkDirectionAdjustmentTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDisabaledWebIcon],svg[icon-park-disabaled-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V23.0588"></svg:path><svg:circle cx="38" cy="35" r="6" stroke="#000" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 31L42 39"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g>`,
})
export class IconParkDisabaledWebIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDisabledComputerIcon],svg[icon-park-disabled-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 5.99805H9C7.34315 5.99805 6 7.34119 6 8.99805V30.998C6 32.6549 7.34315 33.998 9 33.998H39C40.6569 33.998 42 32.6549 42 30.998V23.998"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 34V42"></svg:path><svg:circle cx="36" cy="12" r="6"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 8L40 16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 41.998L34 41.998"></svg:path></svg:g>`,
})
export class IconParkDisabledComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDisabledLaptopIcon],svg[icon-park-disabled-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 8.99902H11C9.34315 8.99902 8 10.3422 8 11.999V32.999H40V25.999"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 32.999H44V34.999C44 38.3127 41.3137 40.999 38 40.999H10C6.68629 40.999 4 38.3127 4 34.999V32.999Z"></svg:path><svg:circle cx="36" cy="13" r="6"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 9L40 17"></svg:path></svg:g>`,
})
export class IconParkDisabledLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDisabledPictureIcon],svg[icon-park-disabled-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M44 23.999C44 22.8945 43.1046 21.999 42 21.999C40.8954 21.999 40 22.8945 40 23.999H44ZM24 7.99902C25.1046 7.99902 26 7.10359 26 5.99902C26 4.89445 25.1046 3.99902 24 3.99902V7.99902ZM39 39.999H9V43.999H39V39.999ZM8 38.999V8.99902H4V38.999H8ZM40 23.999V38.999H44V23.999H40ZM9 7.99902H24V3.99902H9V7.99902ZM9 39.999C8.44772 39.999 8 39.5513 8 38.999H4C4 41.7604 6.23857 43.999 9 43.999V39.999ZM39 43.999C41.7614 43.999 44 41.7604 44 38.999H40C40 39.5513 39.5523 39.999 39 39.999V43.999ZM8 8.99902C8 8.44674 8.44771 7.99902 9 7.99902V3.99902C6.23858 3.99902 4 6.2376 4 8.99902H8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"></svg:path><svg:circle cx="36" cy="12" r="6" stroke="#000" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 8L40 16"></svg:path></svg:g>`,
})
export class IconParkDisabledPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDisappointedFaceIcon],svg[icon-park-disappointed-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 25L29 23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 23L14 25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 35C31 35 29 31 24 31C19 31 17 35 17 35"></svg:path></svg:g>`,
})
export class IconParkDisappointedFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiscoveryIndexIcon],svg[icon-park-discovery-index-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path stroke-linecap="round" d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path stroke-linecap="round" d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path stroke-linecap="round" d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:rect width="10" height="12" x="19" y="18" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 18V12"></svg:path><svg:path stroke-linecap="round" d="M24 36V30"></svg:path></svg:g>`,
})
export class IconParkDiscoveryIndexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiskIcon],svg[icon-park-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M34 4V22H15V4H34Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 11V15"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11.9968 4H36.9984"></svg:path></svg:g>`,
})
export class IconParkDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiskOneIcon],svg[icon-park-disk-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M12.7778 17.012C12.7778 16.4531 13.2309 16 13.7899 16H35.7658C36.3247 16 36.7778 16.4531 36.7778 17.012V32C36.7778 38.6274 31.4052 44 24.7778 44V44C18.1504 44 12.7778 38.6274 12.7778 32V17.012Z"></svg:path><svg:rect width="18" height="12" x="15.778" y="4" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M21.7778 9V11"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27.7778 9V11"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12.7778 32H36.7778"></svg:path></svg:g>`,
})
export class IconParkDiskOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDiskTwoIcon],svg[icon-park-disk-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="22" x="4" y="13" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 13H14V35H4V13Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 19H44V29H36"></svg:path><svg:circle cx="30" cy="21" r="2" fill="#000"></svg:circle><svg:circle cx="30" cy="27" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkDiskTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDislikeIcon],svg[icon-park-dislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31L21 26L28 20L19 15L20 9.19942C18.4999 8.43256 16.8004 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C31.1996 8 29.5001 8.43256 28 9.19942"></svg:path>`,
})
export class IconParkDislikeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDislikeTwoIcon],svg[icon-park-dislike-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M28 20L20 28L28 20Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 20L20 28"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M20 20.0001L28 28L20 20.0001Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 20.0001L28 28"></svg:path></svg:g>`,
})
export class IconParkDislikeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDisplayIcon],svg[icon-park-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="20" x="6" y="6" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M14 13L22 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14 19L34 19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M8 44L12.8889 38H34.6667L40 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 26L24 44"></svg:path></svg:g>`,
})
export class IconParkDisplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDistortionIcon],svg[icon-park-distortion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 19V40H17M4 19V8H17M4 19C4 19 13 13 24 19C35 25 44 19 44 19M44 19V8H17M44 19V40H17M4 29C4 29 13 23 24 29C35 35 44 29 44 29M17 8C17 8 23 16 17 24C11 32 17 40 17 40M31 8C31 8 37 16 31 24C25 32 31 40 31 40"></svg:path>`,
})
export class IconParkDistortionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDistraughtFaceIcon],svg[icon-park-distraught-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 29C29 29 31 33 31 33H17C17 33 19 29 24 29Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 17L29 20L32 23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 17L19 20L16 23"></svg:path></svg:g>`,
})
export class IconParkDistraughtFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDistributeHorizontalSpacingIcon],svg[icon-park-distribute-horizontal-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M8 43L8 5"></svg:path><svg:path d="M40 43L40 5"></svg:path><svg:rect width="8" height="20" x="20" y="14" fill="#2F88FF" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkDistributeHorizontalSpacingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDistributeHorizontallyIcon],svg[icon-park-distribute-horizontally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="12" x="30" y="10" fill="#2F88FF" transform="rotate(90 30 10)"></svg:rect><svg:path stroke-linecap="round" d="M40 6V42"></svg:path><svg:path stroke-linecap="round" d="M8 6V42"></svg:path></svg:g>`,
})
export class IconParkDistributeHorizontallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDistributeVerticalSpacingIcon],svg[icon-park-distribute-vertical-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M5 8H43"></svg:path><svg:path d="M5 40H43"></svg:path><svg:rect width="20" height="8" x="14" y="20" fill="#2F88FF" stroke-linejoin="round"></svg:rect></svg:g>`,
})
export class IconParkDistributeVerticalSpacingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDistributeVerticallyIcon],svg[icon-park-distribute-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="12" x="38" y="30" fill="#2F88FF" transform="rotate(180 38 30)"></svg:rect><svg:path stroke-linecap="round" d="M42 40H6"></svg:path><svg:path stroke-linecap="round" d="M42 8L6 8"></svg:path></svg:g>`,
})
export class IconParkDistributeVerticallyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDividingLineIcon],svg[icon-park-dividing-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 24H43"></svg:path><svg:path d="M21 38H27"></svg:path><svg:path d="M37 38H43"></svg:path><svg:path d="M21 10H27"></svg:path><svg:path d="M5 38H11"></svg:path><svg:path d="M5 10H11"></svg:path><svg:path d="M37 10H43"></svg:path></svg:g>`,
})
export class IconParkDividingLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDividingLineOneIcon],svg[icon-park-dividing-line-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24H44"></svg:path><svg:path d="M8 10H12"></svg:path><svg:path d="M20 10H28"></svg:path><svg:path d="M36 10H40"></svg:path><svg:path d="M8 38H12"></svg:path><svg:path d="M20 38H28"></svg:path><svg:path d="M36 38H40"></svg:path></svg:g>`,
})
export class IconParkDividingLineOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDivingIcon],svg[icon-park-diving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M31.8 6H10.2C7.8804 6 6 7.79086 6 10V18H17C17 16 18.5 14 21 14C23.5 14 25 16 25 18H36V10C36 7.79086 34.1196 6 31.8 6Z"></svg:path><svg:path d="M16 24C16 25.4912 17.25 30 21 30C24.75 30 26 25.4912 26 24"></svg:path><svg:path d="M42 6V38C42 42 39 44 36 44C33 44 30 42 30 38V36"></svg:path></svg:g>`,
})
export class IconParkDivingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDivingBottleIcon],svg[icon-park-diving-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke-miterlimit="2" d="M4 40L6.5 41.3514C8.1 42.2162 9.9 42.2162 11.5 41.3514C13.1 40.4865 14.9 40.4865 16.5 41.3514C18.1 42.2162 19.9 42.2162 21.5 41.3514C23.1 40.4865 24.9 40.4865 26.5 41.3514C28.1 42.2162 29.9 42.2162 31.5 41.3514C33.1 40.4865 34.9 40.4865 36.5 41.3514C38.1 42.2162 39.9 42.2162 41.5 41.3514L44 40"></svg:path><svg:path stroke-miterlimit="2" d="M14 11V4"></svg:path><svg:path stroke-miterlimit="2" d="M31 11V4"></svg:path><svg:path stroke-miterlimit="2" d="M21 8V4"></svg:path><svg:path stroke-miterlimit="2" d="M38 8V4"></svg:path><svg:line x1="12" x2="20" y1="6" y2="6"></svg:line><svg:line x1="29" x2="37" y1="6" y2="6"></svg:line><svg:rect width="8" height="24" x="10" y="11" rx="4"></svg:rect><svg:rect width="8" height="24" x="27" y="11" rx="4"></svg:rect><svg:path fill="#2F88FF" d="M27 15C27 12.7909 28.7909 11 31 11C33.2091 11 35 12.7909 35 15V19H27V15Z"></svg:path><svg:path fill="#2F88FF" d="M10 15C10 12.7909 11.7909 11 14 11C16.2091 11 18 12.7909 18 15V19H10V15Z"></svg:path></svg:g>`,
})
export class IconParkDivingBottleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDivingSuitIcon],svg[icon-park-diving-suit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M17 24H14.09C8.52 24 4 19.5203 4 14C4 8.47968 8.52 4 14.09 4L20 9L25.91 4C31.48 4 36 8.47968 36 14C36 19.5203 31.48 24 25.91 24H23"></svg:path><svg:path fill="#2F88FF" d="M26 36H14V44H26V36Z"></svg:path><svg:path d="M26 40H36C40.42 40 44 36.42 44 32V14H36"></svg:path><svg:path fill="#2F88FF" d="M21.2198 30H19.9998H18.7798C17.3198 30 16.2098 28.69 16.4498 27.26L17.6698 19.97C17.8598 18.83 18.8398 18 19.9998 18C21.1498 18 22.1398 18.83 22.3298 19.97L23.5498 27.26C23.7798 28.69 22.6698 30 21.2198 30Z"></svg:path></svg:g>`,
})
export class IconParkDivingSuitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDivisionIcon],svg[icon-park-division-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="5" fill="#2F88FF"></svg:circle><svg:circle cx="24" cy="37" r="5" fill="#2F88FF"></svg:circle><svg:path d="M44 24L4 24"></svg:path></svg:g>`,
})
export class IconParkDivisionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDizzyFaceIcon],svg[icon-park-dizzy-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 18L15 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 18L19 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 18L29 22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 18L33 22"></svg:path><svg:rect width="8" height="8" x="20" y="28" fill="#43CCF8" stroke="#fff" stroke-linecap="round" rx="4"></svg:rect></svg:g>`,
})
export class IconParkDizzyFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDocAddIcon],svg[icon-park-doc-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V6C40 4.89543 39.1046 4 38 4Z"></svg:path><svg:path stroke="#fff" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" d="M17 36H24"></svg:path><svg:path stroke="#fff" d="M19 17L29 17"></svg:path><svg:path stroke="#fff" d="M24 22V12"></svg:path></svg:g>`,
})
export class IconParkDocAddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDocDetailIcon],svg[icon-park-doc-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 4H11C9.89543 4 9 4.89543 9 6V42C9 43.1046 9.89543 44 11 44H39C40.1046 44 41 43.1046 41 42V6C41 4.89543 40.1046 4 39 4Z"></svg:path><svg:path stroke="#fff" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" d="M17 36H24"></svg:path><svg:rect width="14" height="10" x="17" y="12" fill="#2F88FF" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkDocDetailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDocFailIcon],svg[icon-park-doc-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V6C40 4.89543 39.1046 4 38 4Z"></svg:path><svg:path stroke="#fff" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" d="M17 36H24"></svg:path><svg:path stroke="#fff" d="M20 21L28 13"></svg:path><svg:path stroke="#fff" d="M28 21L20 13"></svg:path></svg:g>`,
})
export class IconParkDocFailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDocSearchIcon],svg[icon-park-doc-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V6C40 4.89543 39.1046 4 38 4Z"></svg:path><svg:path fill="#2F88FF" d="M28 16C28 17.3807 27.4404 18.6307 26.5355 19.5355C25.6307 20.4404 24.3807 21 23 21C20.2386 21 18 18.7614 18 16C18 13.2386 20.2386 11 23 11C25.7614 11 28 13.2386 28 16Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 23L26.5355 19.5355M26.5355 19.5355C27.4404 18.6307 28 17.3807 28 16C28 13.2386 25.7614 11 23 11C20.2386 11 18 13.2386 18 16C18 18.7614 20.2386 21 23 21C24.3807 21 25.6307 20.4404 26.5355 19.5355Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 36H24"></svg:path></svg:g>`,
})
export class IconParkDocSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDocSearchTwoIcon],svg[icon-park-doc-search-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 27V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H21"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 12L31 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 20L31 20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 28H23"></svg:path><svg:path fill="#2F88FF" d="M37 37C37 38.3807 36.4404 39.6307 35.5355 40.5355C34.6307 41.4404 33.3807 42 32 42C29.2386 42 27 39.7614 27 37C27 34.2386 29.2386 32 32 32C34.7614 32 37 34.2386 37 37Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 44L35.5355 40.5355M35.5355 40.5355C36.4404 39.6307 37 38.3807 37 37C37 34.2386 34.7614 32 32 32C29.2386 32 27 34.2386 27 37C27 39.7614 29.2386 42 32 42C33.3807 42 34.6307 41.4404 35.5355 40.5355Z"></svg:path></svg:g>`,
})
export class IconParkDocSearchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDocSuccessIcon],svg[icon-park-doc-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V6C40 4.89543 39.1046 4 38 4Z"></svg:path><svg:path stroke="#fff" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" d="M17 36H24"></svg:path><svg:path stroke="#fff" d="M30 13L22 21L18 17"></svg:path></svg:g>`,
})
export class IconParkDocSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDocumentFolderIcon],svg[icon-park-document-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M32 6H22V42H32V6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M42 6H32V42H42V6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M10 6L18 7L14.5 42L6 41L10 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M37 18V15"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 18V15"></svg:path></svg:g>`,
})
export class IconParkDocumentFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDogIcon],svg[icon-park-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17.0001 10L14.9999 5C12.8332 5.83333 8.2 10.8 9 18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30.9999 10L33.0001 5C35.1668 5.83333 39.8 10.8 39 18"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M42 28.5C42 38.165 33.9411 43 24 43C14.0589 43 6 38.165 6 28.5C6 18.835 14.0589 9 24 9C33.9411 9 42 18.835 42 28.5Z"></svg:path><svg:circle cx="20" cy="17" r="2" fill="#fff"></svg:circle><svg:circle cx="28" cy="17" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 26C24 27.6569 24.5 31.5 21 31.5C19.3431 31.5 18 30.1569 18 28.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.0249 26C24.0249 27.6569 23.5249 31.5 27.0249 31.5C28.6818 31.5 30.0249 30.1569 30.0249 28.5"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M26 25.75C26 26.4404 24 27.5 24 27.5C24 27.5 22 26.4404 22 25.75C22 25.0596 22.5 24.5 24 24.5C25.5 24.5 26 25.0596 26 25.75Z"></svg:path></svg:g>`,
})
export class IconParkDogIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDogZodiacIcon],svg[icon-park-dog-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 44V19C6 14 9.6 9.6 20 4V13H27V19"></svg:path><svg:path d="M16 25C20.0133 26.7807 27.354 30.1237 29 40C29.5 43 35 47 41 40C42.9943 37.8639 43.321 34.3488 37.7642 32.5681"></svg:path><svg:path d="M28 36.0005C24.6667 35.6227 17 37.0003 17 44"></svg:path></svg:g>`,
})
export class IconParkDogZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDollarIcon],svg[icon-park-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 2V46"></svg:path><svg:path d="M35 6C35 6 24.9706 6 20 6C15.0294 6 11 10.0294 11 15C11 19.9706 15.0294 24 20 24"></svg:path><svg:path d="M13 42C13 42 23.0294 42 28 42C32.9706 42 37 37.9706 37 33C37 28.0294 32.9706 24 28 24H20"></svg:path></svg:g>`,
})
export class IconParkDollarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDolphinIcon],svg[icon-park-dolphin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.0002 7.00002C14.2305 1.61313 9.68601 8.63202 8.00016 11.0004C2.33569 12.2184 5.14579 14.3237 7.00023 15.0004C8.21404 15.4064 11.1458 16.3233 13.0002 16.9999C13.4048 20.248 14.6631 23.1541 15.0002 23.9999C15.0002 23.1879 16.3259 20.3533 17.0002 18.9999C25.0923 22.248 30.7971 30.6015 34.0002 34.9999C32.7864 37.436 31.506 41.3082 31.0002 42.9999L37.0002 40L44.0002 42C44.0002 38.7519 39.8547 35.3534 38.0002 34C38.8095 21.0076 32.7091 13.1993 29.0002 11C29.4048 9.37598 30.1573 6.67671 31.0002 6.00002C27.7634 4.37598 25.1803 6.15418 24.0002 7.00002Z"></svg:path><svg:circle cx="16" cy="11" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkDolphinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDomeIcon],svg[icon-park-dome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 43H44"></svg:path><svg:path d="M5 24C5 24 14 23 24 23C34 23 43 24 43 24"></svg:path><svg:path d="M6 18C6 18 15.0526 14 24 14C32.9474 14 42 18 42 18"></svg:path><svg:path d="M5 30C5 30 14 32 24 32C34 32 43 30 43 30"></svg:path><svg:path d="M24 6C12.9543 6 4 14.9543 4 26C4 33.8085 7.47484 39.7064 14 43H34C40.5252 39.7064 44 33.8085 44 26C44 14.9543 35.0457 6 24 6Z"></svg:path><svg:path d="M24 6C20.134 6 17 14.9543 17 26C17 33.1773 18.0125 39.4716 20 43H28C29.9875 39.4716 31 33.1773 31 26C31 14.9543 27.866 6 24 6Z"></svg:path></svg:g>`,
})
export class IconParkDomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDomeLightIcon],svg[icon-park-dome-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24.7778 8C13.7321 8 4.77783 16.9543 4.77783 28H44.7778C44.7778 16.9543 35.8235 8 24.7778 8Z"></svg:path><svg:path d="M24.7778 4V8"></svg:path><svg:path d="M24.7778 38C19.255 38 14.7778 33.5228 14.7778 28H34.7778C34.7778 33.5228 30.3007 38 24.7778 38Z"></svg:path><svg:path d="M40.8118 38.9766L38.7437 36.0231"></svg:path><svg:path d="M11.0525 36.2251L8.50298 38.7746"></svg:path><svg:path d="M34.7778 42L33.6307 40.3617"></svg:path><svg:path d="M15.9114 40.4736L14.4972 41.8878"></svg:path></svg:g>`,
})
export class IconParkDomeLightIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDoneAllIcon],svg[icon-park-done-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 24L15.25 25.25M44 14L24 34L22.75 32.75"></svg:path><svg:path d="M4 24L14 34L34 14"></svg:path></svg:g>`,
})
export class IconParkDoneAllIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDongchediIcon],svg[icon-park-dongchedi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M38.1606 33.56C33.8437 32.0395 29.2094 31.2447 24.4417 31.2447C19.3825 31.2447 14.4746 32.1398 9.93952 33.8452C10.3385 34.9475 10.8603 36.0005 11.4967 36.9867L6.45533 40.2401C4.2134 36.766 3 32.6952 3 28.4489C3 16.6193 12.3853 7 24 7C35.6147 7 45 16.6193 45 28.4489C45 32.8826 43.6768 37.123 41.2468 40.6893L36.2884 37.3107C37.0796 36.1496 37.7085 34.8892 38.1606 33.56ZM38.5991 24.8845C37.0353 18.0613 31.0806 13 24 13C16.8282 13 10.8115 18.1925 9.34267 25.1491C9.10649 26.4791 9.46633 27.6361 10.4538 27.3315C14.9074 25.9582 19.6194 25.2447 24.4417 25.2447C29.0985 25.2447 33.6535 25.9099 37.9738 27.1936C38.828 27.4474 38.9554 26.3771 38.6153 24.9682C38.6078 24.9372 38.6024 24.9093 38.5991 24.8845Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkDongchediIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDoorHandleIcon],svg[icon-park-door-handle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="26" height="40" x="6" y="4" rx="2"></svg:rect><svg:path d="M14 34H24"></svg:path><svg:path fill="#2F88FF" d="M42 20V14H23.0004C22.0882 12.7856 20.6358 12 19 12C16.2386 12 14 14.2386 14 17C14 19.7614 16.2386 22 19 22C20.6358 22 22.0882 21.2144 23.0004 20H42Z"></svg:path></svg:g>`,
})
export class IconParkDoorHandleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDotIcon],svg[icon-park-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path stroke="#000" stroke-width="4" d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"></svg:path>`,
})
export class IconParkDotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDoubleBedIcon],svg[icon-park-double-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 12C8 10.3431 9.34315 9 11 9H37C38.6569 9 40 10.3431 40 12V23H8V12Z"></svg:path><svg:path d="M6 35V39"></svg:path><svg:path d="M42 35V39"></svg:path><svg:path fill="#2F88FF" d="M20 18H14C12.3431 18 11 19.3431 11 21V23H23V21C23 19.3431 21.6569 18 20 18Z"></svg:path><svg:path fill="#2F88FF" d="M34 18H28C26.3431 18 25 19.3431 25 21V23H37V21C37 19.3431 35.6569 18 34 18Z"></svg:path><svg:path d="M4 26C4 24.3431 5.34315 23 7 23H41C42.6569 23 44 24.3431 44 26V35H4V26Z"></svg:path></svg:g>`,
})
export class IconParkDoubleBedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDoubleDownIcon],svg[icon-park-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 12L24 24L12 12"></svg:path><svg:path d="M36 24L24 36L12 24"></svg:path></svg:g>`,
})
export class IconParkDoubleDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDoubleLeftIcon],svg[icon-park-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 36L12 24L24 12"></svg:path><svg:path d="M36 36L24 24L36 12"></svg:path></svg:g>`,
})
export class IconParkDoubleLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDoubleRightIcon],svg[icon-park-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 12L24 24L12 36"></svg:path><svg:path d="M24 12L36 24L24 36"></svg:path></svg:g>`,
})
export class IconParkDoubleRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDoubleUpIcon],svg[icon-park-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 24L24 12L36 24"></svg:path><svg:path d="M12 36L24 24L36 36"></svg:path></svg:g>`,
})
export class IconParkDoubleUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDoughnutIcon],svg[icon-park-doughnut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="24" r="19"></svg:circle><svg:circle cx="24" cy="24" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 28C6 28 9.38888 25.0417 12 27C16 30 18 28 18 28"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 29C29.6667 28 33 24.7143 36 26C40 27.7143 43 26 43 25"></svg:path></svg:g>`,
})
export class IconParkDoughnutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownIcon],svg[icon-park-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 18L24 30L12 18"></svg:path>`,
})
export class IconParkDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownCIcon],svg[icon-park-down-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 21L24 30L15 21"></svg:path></svg:g>`,
})
export class IconParkDownCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownOneIcon],svg[icon-park-down-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M36 19L24 31L12 19H36Z"></svg:path>`,
})
export class IconParkDownOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownPictureIcon],svg[icon-park-down-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M44 24C44 22.8954 43.1046 22 42 22C40.8954 22 40 22.8954 40 24H44ZM24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 24V39H44V24H40ZM9 8H24V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 13L37 18L42 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 6L37 18"></svg:path></svg:g>`,
})
export class IconParkDownPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownSmallIcon],svg[icon-park-down-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.0083 35.8995V12"></svg:path><svg:path d="M36 24L24 36L12 24"></svg:path></svg:g>`,
})
export class IconParkDownSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownSquareIcon],svg[icon-park-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M34 19L24 29L14 19"></svg:path></svg:g>`,
})
export class IconParkDownSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownTwoIcon],svg[icon-park-down-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 24L24 42L43 24H31V6H17V24H5Z"></svg:path>`,
})
export class IconParkDownTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadIcon],svg[icon-park-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 24.0083V42H42V24"></svg:path><svg:path d="M33 23L24 32L15 23"></svg:path><svg:path d="M23.9917 6V32"></svg:path></svg:g>`,
})
export class IconParkDownloadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadComputerIcon],svg[icon-park-download-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V25"></svg:path><svg:path d="M24 34V42"></svg:path><svg:path d="M14 42L34 42"></svg:path><svg:path d="M32 13L37 18L42 13"></svg:path><svg:path d="M37 6L37 18"></svg:path></svg:g>`,
})
export class IconParkDownloadComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadFourIcon],svg[icon-park-download-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linejoin="round" d="M23.9999 29.0001L12 17.0001L19.9999 17.0001L19.9999 6.00011L27.9999 6.00011L27.9999 17.0001L35.9999 17.0001L23.9999 29.0001Z" clip-rule="evenodd"></svg:path><svg:path d="M42 37L6 37"></svg:path><svg:path d="M34 44H14"></svg:path></svg:g>`,
})
export class IconParkDownloadFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadLaptopIcon],svg[icon-park-download-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M25 9H11C9.34315 9 8 10.3431 8 12V33H40V25"></svg:path><svg:path fill="#2F88FF" d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"></svg:path><svg:path stroke-linecap="round" d="M31 14L36 19L41 14"></svg:path><svg:path stroke-linecap="round" d="M36 7L36 19"></svg:path></svg:g>`,
})
export class IconParkDownloadLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadOneIcon],svg[icon-park-download-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.6777 20.271C7.27476 21.3181 4 25.2766 4 30C4 35.5228 8.47715 40 14 40C14.9474 40 15.864 39.8683 16.7325 39.6221"></svg:path><svg:path d="M36.0547 20.271C40.4577 21.3181 43.7324 25.2766 43.7324 30C43.7324 35.5228 39.2553 40 33.7324 40C32.785 40 31.8684 39.8683 30.9999 39.6221"></svg:path><svg:path d="M36 20C36 13.3726 30.6274 8 24 8C17.3726 8 12 13.3726 12 20"></svg:path><svg:path d="M17.0654 30.119L23.9999 37.0764L31.1318 30"></svg:path><svg:path d="M24 20V33.5382"></svg:path></svg:g>`,
})
export class IconParkDownloadOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadThreeIcon],svg[icon-park-download-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 28L24 36L16 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 20V35.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 14H32"></svg:path></svg:g>`,
})
export class IconParkDownloadThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadTwoIcon],svg[icon-park-download-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40.5178 34.3161C43.8044 32.005 45.2136 27.8302 44.0001 24C42.7866 20.1698 39.0705 18.0714 35.0527 18.0745H32.7317C31.2144 12.1613 26.2082 7.79572 20.1435 7.0972C14.0787 6.39868 8.21121 9.5118 5.38931 14.9253C2.56741 20.3388 3.37545 26.9317 7.42115 31.5035"></svg:path><svg:path d="M24.0084 41L24 23"></svg:path><svg:path d="M30.3638 34.6362L23.9998 41.0002L17.6358 34.6362"></svg:path></svg:g>`,
})
export class IconParkDownloadTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadWebIcon],svg[icon-park-download-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 36L39 41L44 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39 29L39 41"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g>`,
})
export class IconParkDownloadWebIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDragIcon],svg[icon-park-drag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M19 10C19 12.2091 17.2091 14 15 14C12.7909 14 11 12.2091 11 10C11 7.79086 12.7909 6 15 6C17.2091 6 19 7.79086 19 10ZM15 28C17.2091 28 19 26.2091 19 24C19 21.7909 17.2091 20 15 20C12.7909 20 11 21.7909 11 24C11 26.2091 12.7909 28 15 28ZM15 42C17.2091 42 19 40.2091 19 38C19 35.7909 17.2091 34 15 34C12.7909 34 11 35.7909 11 38C11 40.2091 12.7909 42 15 42Z"></svg:path><svg:path d="M37 10C37 12.2091 35.2091 14 33 14C30.7909 14 29 12.2091 29 10C29 7.79086 30.7909 6 33 6C35.2091 6 37 7.79086 37 10ZM33 28C35.2091 28 37 26.2091 37 24C37 21.7909 35.2091 20 33 20C30.7909 20 29 21.7909 29 24C29 26.2091 30.7909 28 33 28ZM33 42C35.2091 42 37 40.2091 37 38C37 35.7909 35.2091 34 33 34C30.7909 34 29 35.7909 29 38C29 40.2091 30.7909 42 33 42Z"></svg:path></svg:g>`,
})
export class IconParkDragIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDragonZodiacIcon],svg[icon-park-dragon-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M34.0214 42.4943L37.7612 38.7545C40.1043 36.4113 40.1043 32.6123 37.7612 30.2692V30.2692C35.418 27.926 31.6191 27.926 29.2759 30.2692L27.0449 32.5002"></svg:path><svg:path d="M17.0746 25.5002L23.6191 18.9556C25.9623 16.6125 25.9623 12.8135 23.6191 10.4704V10.4704C21.276 8.12722 17.477 8.12722 15.1338 10.4704L8.06276 17.5414"></svg:path><svg:path d="M17.0748 25.5002L8.76957 33.8055C6.42642 36.1486 6.42642 39.9476 8.76957 42.2907V42.2907C11.1127 44.6339 14.9117 44.6339 17.2548 42.2907L27.0211 32.5245"></svg:path><svg:path stroke-linejoin="round" d="M13 11.9999V3.99988"></svg:path><svg:path stroke-linejoin="round" d="M38 30L43 25"></svg:path></svg:g>`,
})
export class IconParkDragonZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDribbleIcon],svg[icon-park-dribble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 24C44 29.5386 41.7486 34.5513 38.1112 38.173C34.4943 41.7742 29.5071 44 24 44C12.9543 44 4 35.0457 4 24C4 18.6615 6.09159 13.8116 9.5 10.225C13.1439 6.39055 18.2928 4 24 4C29.5071 4 34.4943 6.22583 38.1112 9.82695C41.7486 13.4487 44 18.4614 44 24Z"></svg:path><svg:path stroke="#fff" d="M44.0003 24C41.0819 24 33.0315 22.8993 25.8268 26.0632C18.0003 29.5002 12.3327 34.8315 9.86328 38.1472"></svg:path><svg:path stroke="#fff" d="M16.5 5.4538C19.6304 8.34269 26.4603 15.6985 29 23C31.5397 30.3015 32.4809 39.2791 33.0606 41.8347"></svg:path><svg:path stroke="#fff" d="M4.1543 21.5C7.93207 21.7277 17.9329 21.9332 24.3329 19.1999C30.7329 16.4666 36.2402 11.4396 38.1291 9.84521"></svg:path><svg:path stroke="#000" d="M5.5 31.613C7.26166 35.8893 10.4628 39.4207 14.5 41.604"></svg:path><svg:path stroke="#000" d="M4 24.0001C4 18.6617 6.09159 13.8117 9.5 10.2251"></svg:path><svg:path stroke="#000" d="M24 4C18.2928 4 13.1439 6.39055 9.5 10.225"></svg:path><svg:path stroke="#000" d="M32 5.66406C34.2933 6.66606 36.3624 8.0857 38.1112 9.82684C41.7486 13.4485 44 18.4613 44 23.9999C44 26.4625 43.5549 28.8212 42.7408 30.9999"></svg:path><svg:path stroke="#000" d="M24 44C29.5071 44 34.4943 41.7742 38.1112 38.1731"></svg:path></svg:g>`,
})
export class IconParkDribbleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDrinkIcon],svg[icon-park-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:line x1="10" x2="38" y1="16" y2="16" stroke-linecap="round"></svg:line><svg:path d="M14.153 18.1425C14.0703 16.9848 14.9873 16 16.148 16H31.852C33.0127 16 33.9297 16.9848 33.847 18.1425L32.1327 42.1425C32.0579 43.1891 31.187 44 30.1378 44H17.8622C16.813 44 15.9421 43.1891 15.8673 42.1425L14.153 18.1425Z"></svg:path><svg:path stroke-linecap="round" d="M24 10V6C24 4.89543 24.8954 4 26 4H29"></svg:path><svg:path fill="#2F88FF" d="M14.7215 11.6712C14.8822 10.7068 15.7166 10 16.6943 10H31.3057C32.2834 10 33.1178 10.7068 33.2785 11.6712L34 16H14L14.7215 11.6712Z"></svg:path></svg:g>`,
})
export class IconParkDrinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDroneIcon],svg[icon-park-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 12L19 19M36 36L29 29"></svg:path><svg:path d="M36 12L29 19M12 36L19 29"></svg:path><svg:rect width="10" height="10" x="19" y="19" fill="#2F88FF"></svg:rect><svg:path d="M36 19C37.3845 19 38.7378 18.5895 39.889 17.8203C41.0401 17.0511 41.9373 15.9579 42.4672 14.6788C42.997 13.3997 43.1356 11.9922 42.8655 10.6344C42.5954 9.2765 41.9287 8.02922 40.9497 7.05026C39.9708 6.07129 38.7235 5.4046 37.3656 5.13451C36.0078 4.86441 34.6003 5.00303 33.3212 5.53285C32.0421 6.06266 30.9489 6.95987 30.1797 8.11101C29.4105 9.26215 29 10.6155 29 12"></svg:path><svg:path d="M36 29C37.3845 29 38.7378 29.4105 39.889 30.1797C41.0401 30.9489 41.9373 32.0421 42.4672 33.3212C42.997 34.6003 43.1356 36.0078 42.8655 37.3656C42.5954 38.7235 41.9287 39.9708 40.9497 40.9497C39.9708 41.9287 38.7235 42.5954 37.3656 42.8655C36.0078 43.1356 34.6003 42.997 33.3212 42.4672C32.0421 41.9373 30.9489 41.0401 30.1797 39.889C29.4105 38.7378 29 37.3845 29 36"></svg:path><svg:path d="M12 29C10.6155 29 9.26216 29.4105 8.11101 30.1797C6.95987 30.9489 6.06266 32.0421 5.53285 33.3212C5.00303 34.6003 4.86441 36.0078 5.13451 37.3656C5.4046 38.7235 6.07129 39.9708 7.05026 40.9497C8.02922 41.9287 9.2765 42.5954 10.6344 42.8655C11.9922 43.1356 13.3997 42.997 14.6788 42.4672C15.9579 41.9373 17.0511 41.0401 17.8203 39.889C18.5895 38.7378 19 37.3845 19 36"></svg:path><svg:path d="M12 19C10.6155 19 9.26216 18.5895 8.11101 17.8203C6.95987 17.0511 6.06266 15.9579 5.53285 14.6788C5.00303 13.3997 4.86441 11.9922 5.13451 10.6344C5.4046 9.2765 6.07129 8.02922 7.05026 7.05026C8.02922 6.07129 9.2765 5.4046 10.6344 5.13451C11.9922 4.86441 13.3997 5.00303 14.6788 5.53285C15.9579 6.06266 17.0511 6.95987 17.8203 8.11101C18.5895 9.26215 19 10.6155 19 12"></svg:path></svg:g>`,
})
export class IconParkDroneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDroneOneIcon],svg[icon-park-drone-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M29 18V16C29 13.2386 26.7614 11 24 11V11C21.2386 11 19 13.2386 19 16V18"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M17 18H31L28.8462 25H19.1538L17 18Z"></svg:path><svg:rect width="7" height="7" x="5" y="22" fill="#2F88FF"></svg:rect><svg:rect width="7" height="7" x="36" y="22" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M16 8L4 8"></svg:path><svg:path stroke-linecap="round" d="M30 33L34 40"></svg:path><svg:path stroke-linecap="round" d="M18 33L14 40"></svg:path><svg:path stroke-linecap="round" d="M44 8L32 8"></svg:path></svg:g>`,
})
export class IconParkDroneOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDropDownListIcon],svg[icon-park-drop-down-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 28L24 40L8 28"></svg:path><svg:path d="M8 10H40"></svg:path><svg:path d="M8 18H40"></svg:path></svg:g>`,
})
export class IconParkDropDownListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDropShadowDownIcon],svg[icon-park-drop-shadow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 37C28.4183 37 32.4183 35.2091 35.3138 32.3138C38.2091 29.4183 40 25.4183 40 21C40 16.5817 38.2091 12.5817 35.3138 9.68629C32.4183 6.79086 28.4183 5 24 5C19.5817 5 15.5817 6.79086 12.6863 9.68629C9.79086 12.5817 8 16.5817 8 21C8 25.4183 9.79086 29.4183 12.6863 32.3138C15.5817 35.2091 19.5817 37 24 37Z" clip-rule="evenodd"></svg:path><svg:path d="M39.5562 36.5564C35.5749 40.5374 30.0749 43 23.9997 43C17.9246 43 12.4246 40.5374 8.44336 36.5564"></svg:path></svg:g>`,
})
export class IconParkDropShadowDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDropShadowLeftIcon],svg[icon-park-drop-shadow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M27 40C31.4183 40 35.4183 38.2091 38.3138 35.3138C41.2091 32.4183 43 28.4183 43 24C43 19.5817 41.2091 15.5817 38.3138 12.6863C35.4183 9.79086 31.4183 8 27 8C22.5817 8 18.5817 9.79086 15.6863 12.6863C12.7909 15.5817 11 19.5817 11 24C11 28.4183 12.7909 32.4183 15.6863 35.3138C18.5817 38.2091 22.5817 40 27 40Z" clip-rule="evenodd"></svg:path><svg:path d="M11.4437 8.4436C7.46244 12.4248 5 17.9248 5 24C5 30.0751 7.46244 35.5751 11.4437 39.5564"></svg:path></svg:g>`,
})
export class IconParkDropShadowLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDropShadowRightIcon],svg[icon-park-drop-shadow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M21 40C25.4183 40 29.4183 38.2091 32.3138 35.3138C35.2091 32.4183 37 28.4183 37 24C37 19.5817 35.2091 15.5817 32.3138 12.6863C29.4183 9.79086 25.4183 8 21 8C16.5817 8 12.5817 9.79086 9.68629 12.6863C6.79086 15.5817 5 19.5817 5 24C5 28.4183 6.79086 32.4183 9.68629 35.3138C12.5817 38.2091 16.5817 40 21 40Z" clip-rule="evenodd"></svg:path><svg:path d="M36.5566 39.5564C40.5377 35.5751 43.0002 30.0751 43.0002 24C43.0002 17.9248 40.5377 12.4248 36.5566 8.4436"></svg:path></svg:g>`,
})
export class IconParkDropShadowRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDropShadowUpIcon],svg[icon-park-drop-shadow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 43C28.4183 43 32.4183 41.2091 35.3138 38.3138C38.2091 35.4183 40 31.4183 40 27C40 22.5817 38.2091 18.5817 35.3138 15.6863C32.4183 12.7909 28.4183 11 24 11C19.5817 11 15.5817 12.7909 12.6863 15.6863C9.79086 18.5817 8 22.5817 8 27C8 31.4183 9.79086 35.4183 12.6863 38.3138C15.5817 41.2091 19.5817 43 24 43Z" clip-rule="evenodd"></svg:path><svg:path d="M39.5566 11.4437C35.5754 7.46244 30.0754 5 24.0002 5C17.9251 5 12.4251 7.46244 8.44385 11.4437"></svg:path></svg:g>`,
})
export class IconParkDropShadowUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDropboxIcon],svg[icon-park-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 10L12 18L24 26L36 18L24 10Z"></svg:path><svg:path d="M24 10L36 18L41 11L30 4L24 10Z"></svg:path><svg:path d="M24 10L12 18L7 11L18 4L24 10Z"></svg:path><svg:path d="M43 22L36 18L24 26L31 31L43 22Z"></svg:path><svg:path d="M5 22L12 18L24 26L17 31L5 22Z"></svg:path><svg:path stroke-linecap="round" d="M36 28V37L24 44L12 37V28"></svg:path></svg:g>`,
})
export class IconParkDropboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDrumstickIcon],svg[icon-park-drumstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.1508 33.8198L12.7366 43.7193L4.25135 35.234L14.1508 33.8198Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.0498 6.9502L14.1503 16.8497C9.46402 21.536 9.46402 29.134 14.1503 33.8203V33.8203C18.8366 38.5065 26.4346 38.5065 31.1209 33.8203L41.0204 23.9208"></svg:path><svg:ellipse cx="32.535" cy="15.435" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="12" ry="7" transform="rotate(45 32.535 15.435)"></svg:ellipse><svg:circle cx="30.061" cy="11.398" r="2" fill="#fff" transform="rotate(45 30.06 11.398)"></svg:circle><svg:circle cx="37.132" cy="18.469" r="2" fill="#fff" transform="rotate(45 37.132 18.47)"></svg:circle><svg:circle cx="31.475" cy="17.055" r="2" fill="#fff" transform="rotate(45 31.475 17.055)"></svg:circle></svg:g>`,
})
export class IconParkDrumstickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDubaiIcon],svg[icon-park-dubai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M14 4L14 44"></svg:path><svg:path d="M14.5 6C14.5 6 28 13 32 22C36 31 33 44 33 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path stroke-linecap="round" d="M10 15H32"></svg:path><svg:path stroke-linecap="round" d="M14 22H22"></svg:path><svg:path stroke-linecap="round" d="M14 29H26"></svg:path><svg:path stroke-linecap="round" d="M14 36H27"></svg:path></svg:g>`,
})
export class IconParkDubaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDuckIcon],svg[icon-park-duck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 7.99964C8.94774 12.5171 6.01307 13.8091 4 12.9992C4.54274 14.8333 8.44257 17.3755 10.9274 18.838C11.9978 19.4679 12.3095 20.9029 11.5649 21.897C10.2021 23.7164 8.31564 26.289 8 27.0001C0.954271 39.7887 16.482 44.6479 24 44.0001C46.1437 42.0918 45.3551 24.8027 42 18.0001C33.9477 31.9941 21.5186 23.9154 22 21C22.4814 18.0846 25.7922 18.6647 27 14C29.0131 4.76782 16.3737 0.398938 12 7.99964Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 31C21.5 34.5 29 38 35 33"></svg:path><svg:circle cx="17" cy="12" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkDuckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDumbbelLineIcon],svg[icon-park-dumbbel-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 10V38"></svg:path><svg:path d="M44 24L4 24"></svg:path><svg:path d="M35 10V38"></svg:path><svg:path d="M7 14L7 34"></svg:path><svg:path d="M41 14L41 34"></svg:path></svg:g>`,
})
export class IconParkDumbbelLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDumbbellIcon],svg[icon-park-dumbbell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 13.6C14 12.1641 12.6569 11 11 11C9.34315 11 8 12.1641 8 13.6V34.4C8 35.8359 9.34315 37 11 37C12.6569 37 14 35.8359 14 34.4V13.6Z"></svg:path><svg:path d="M40 13.6C40 12.1641 38.6569 11 37 11C35.3431 11 34 12.1641 34 13.6V34.4C34 35.8359 35.3431 37 37 37C38.6569 37 40 35.8359 40 34.4V13.6Z"></svg:path><svg:path d="M8 18.6667C8 17.1939 6.65685 16 5 16C3.34315 16 2 17.1939 2 18.6667V29.3333C2 30.8061 3.34315 32 5 32C6.65685 32 8 30.8061 8 29.3333V18.6667Z"></svg:path><svg:path d="M46 18.6667C46 17.1939 44.6569 16 43 16C41.3431 16 40 17.1939 40 18.6667V29.3333C40 30.8061 41.3431 32 43 32C44.6569 32 46 30.8061 46 29.3333V18.6667Z"></svg:path><svg:rect width="20" height="6" transform="matrix(1 0 0 -1 14 27)"></svg:rect></svg:g>`,
})
export class IconParkDumbbellIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkDviIcon],svg[icon-park-dvi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 16C4 14.8954 4.89543 14 6 14H42C43.1046 14 44 14.8954 44 16V23.802C44 23.9337 43.987 24.065 43.9612 24.1942L42.3216 32.3922C42.1346 33.3271 41.3138 34 40.3604 34H7.63961C6.68624 34 5.86542 33.3271 5.67845 32.3922L4.03884 24.1942C4.01301 24.065 4 23.9337 4 23.802V16Z"></svg:path><svg:path stroke="#fff" d="M10 24H16"></svg:path><svg:path stroke="#fff" d="M21 21H23"></svg:path><svg:path stroke="#fff" d="M21 27H23"></svg:path><svg:path stroke="#fff" d="M28 21H30"></svg:path><svg:path stroke="#fff" d="M28 27H30"></svg:path><svg:path stroke="#fff" d="M35 21H37"></svg:path><svg:path stroke="#fff" d="M35 27H37"></svg:path></svg:g>`,
})
export class IconParkDviIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEagleIcon],svg[icon-park-eagle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5.99968 23.0008C1.96038 15.9568 9.62382 11.8637 13.9997 11.0004C28.541 -1.84434 40.485 10.7132 41.9998 19C43.5145 27.2868 43.1582 33.8931 43.9997 37.0008C37.5368 28.2995 33.1225 29.8415 31.9997 32.0008C29.98 36.1442 26.6863 36.2519 24.9997 35.0008C20.9604 31.686 14.5242 38.2023 11.9997 42.0005C16.847 33.2992 17.5047 27.7272 16.9997 26.0008C14.98 17.7138 8.69261 20.5837 5.99968 23.0008Z"></svg:path><svg:circle cx="23" cy="16" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkEagleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEarthIcon],svg[icon-park-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path d="M4 24H44"></svg:path><svg:path d="M24 44C28.4183 44 32 35.0457 32 24C32 12.9543 28.4183 4 24 4C19.5817 4 16 12.9543 16 24C16 35.0457 19.5817 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path d="M9.85791 10.1421C13.4772 13.7614 18.4772 16 24 16C29.5229 16 34.5229 13.7614 38.1422 10.1421"></svg:path><svg:path d="M38.1422 37.8579C34.5229 34.2386 29.5229 32 24 32C18.4772 32 13.4772 34.2386 9.85791 37.8579"></svg:path></svg:g>`,
})
export class IconParkEarthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEasyIcon],svg[icon-park-easy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 41C27.5203 44.0026 23 44 17 42C10.9236 39.9745 7 33 7 28C7 25.2562 11.1135 23.6282 12.5286 23.1494C12.8074 23.055 13 22.7966 13 22.5023V15C13 13.067 14.567 11.5 16.5 11.5C18.433 11.5 20 13.067 20 15V12.5C20 10.567 21.567 9 23.5 9C25.433 9 27 10.567 27 12.5V15C27 13.067 28.567 11.5 30.5 11.5C32.433 11.5 34 13.067 34 15V7.49999C34 5.567 35.567 4 37.5 4C39.433 4 41 5.567 41 7.49999V28.2319C41 30.7041 40.4077 33.1603 38.962 35.1657C37.4919 37.2049 35.3574 39.7083 33 41Z"></svg:path>`,
})
export class IconParkEasyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEcgIcon],svg[icon-park-ecg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 22H8L12 11L17 37L23 20L27 28L34 15L38 29L40 22H44"></svg:path>`,
})
export class IconParkEcgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEditIcon],svg[icon-park-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M7 42H43"></svg:path><svg:path fill="#2F88FF" d="M11 26.7199V34H18.3172L39 13.3081L31.6951 6L11 26.7199Z"></svg:path></svg:g>`,
})
export class IconParkEditIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEditMovieIcon],svg[icon-park-edit-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M43 9V17V31V39H34V31H43V17H34V9H43Z"></svg:path><svg:path fill="#2F88FF" d="M5 17V9H14V17H5V31H14V39H5V31V17Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 17V9H34M43 17V31M43 17H34M5 17V9H14M5 17V31M5 17H14M5 31V39H14M5 31H14M43 31V39H34M43 31H34M34 9V17M34 9H30M34 39V31M34 39H30M14 9V17M14 9H18M14 39V31M14 39H18M14 17H18M34 17H30M34 31H30M14 31H18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 7V11"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 17V21"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 27V31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M24 37V41"></svg:path></svg:g>`,
})
export class IconParkEditMovieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEditNameIcon],svg[icon-park-edit-name-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#2F88FF"></svg:circle><svg:path d="M4 41C4 32.1634 12.0589 25 22 25"></svg:path><svg:path fill="#2F88FF" d="M31 42L41 32L37 28L27 38V42H31Z"></svg:path></svg:g>`,
})
export class IconParkEditNameIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEditOneIcon],svg[icon-park-edit-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M29 4H9C7.89543 4 7 4.89543 7 6V42C7 43.1046 7.89543 44 9 44H37C38.1046 44 39 43.1046 39 42V20.0046"></svg:path><svg:path d="M13 18H21"></svg:path><svg:path d="M13 28H25"></svg:path><svg:path stroke-linejoin="round" d="M40.9991 6.00098L29.0044 17.9958"></svg:path></svg:g>`,
})
export class IconParkEditOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEditTwoIcon],svg[icon-park-edit-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6"></svg:path><svg:path fill="#2F88FF" d="M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z"></svg:path></svg:g>`,
})
export class IconParkEditTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEditingIcon],svg[icon-park-editing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="13" cy="35" r="7" fill="#2F88FF"></svg:circle><svg:circle cx="35" cy="35" r="7" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 6L32 28"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 6L16 28"></svg:path></svg:g>`,
})
export class IconParkEditingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEditorIcon],svg[icon-park-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 33V42C40 43.1046 39.1046 44 38 44H31.5"></svg:path><svg:path stroke-linejoin="round" d="M40 16V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H16"></svg:path><svg:path d="M16 16H30"></svg:path><svg:path d="M23 44L40 23"></svg:path><svg:path d="M16 24H24"></svg:path></svg:g>`,
})
export class IconParkEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEegIcon],svg[icon-park-eeg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 16V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V16"></svg:path><svg:path d="M6 32V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V32"></svg:path><svg:path d="M5 24H13.075L20 16L27 32L33.975 24H43"></svg:path></svg:g>`,
})
export class IconParkEegIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEffectsIcon],svg[icon-park-effects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24.9507 42.3603L30.4164 30.3695L43.1046 26.6501L33.3383 17.7699L33.7059 4.60732L22.2044 11.1099L9.74329 6.69439L12.4013 19.5934L4.33228 30.027L17.4766 31.4965L24.9507 42.3603Z"></svg:path><svg:path d="M36.1777 36.0537L44.1777 44.0179"></svg:path></svg:g>`,
})
export class IconParkEffectsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEfferentFourIcon],svg[icon-park-efferent-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 5L10 5C8.89543 5 8 5.89543 8 7L8 41C8 42.1046 8.89543 43 10 43L38 43C39.1046 43 40 42.1046 40 41L40 24.75"></svg:path><svg:path d="M28 5H40V17"></svg:path><svg:path d="M21.0001 23.9998L39 6"></svg:path></svg:g>`,
})
export class IconParkEfferentFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEfferentThreeIcon],svg[icon-park-efferent-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V29"></svg:path><svg:path d="M42 19L38 7L26 11"></svg:path><svg:path d="M38 7C33 22 30 25 20 29"></svg:path></svg:g>`,
})
export class IconParkEfferentThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEggIcon],svg[icon-park-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="10" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke="#000" d="M44.0001 24C44.0001 26.6325 43.4915 29.1463 42.5672 31.4483C41.6312 33.7794 38.4382 31.5194 35.2215 34.9695C32.0049 38.4196 34.5105 41.2363 32.017 42.3284C29.5627 43.4035 26.8511 44 24.0001 44C12.9544 44 4.00012 35.0457 4.00012 24C4.00012 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 25C20 25 20.2109 26.2109 21 27C21.7891 27.7891 23 28 23 28"></svg:path></svg:g>`,
})
export class IconParkEggIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEggOneIcon],svg[icon-park-egg-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M29 22.1333C29 30.9699 23.6274 36 17 36C10.3726 36 5 30.9699 5 22.1333C5 11.1634 11.3726 4 17 4C22.6274 4 29 11.1634 29 22.1333Z"></svg:path><svg:path d="M29 24.0684C37.5365 24.7022 43 29.6217 43 33.9999C43 38.6894 36.732 43.9999 27.1333 43.9999C20.3603 43.9999 16.143 40.5644 15.2011 36"></svg:path></svg:g>`,
})
export class IconParkEggOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEggplantIcon],svg[icon-park-eggplant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M35 18L31.1193 30.6124C31.0398 30.8708 30.9648 31.1262 30.8719 31.3801C30.324 32.8784 27.8826 38.4193 21.0006 41C13.0007 44 4.99941 40 5 32.0769C5.00059 24.1538 13 25 17 22C21 19 25 13 25 13"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M39.2545 24.4878C39.2545 24.4878 40.3716 19.1756 40.001 16.0002C39.496 11.6727 37.501 8.50022 35.0002 7.00023C32.4995 5.50025 27.2531 4.50021 23.0004 7.00025C18.7477 9.50028 16.9676 12.8454 16.9676 12.8454L25.1744 12.0776C25.6536 12.0327 26.0968 12.3357 26.2291 12.7985L27.7262 18.0387C27.878 18.5697 28.4315 18.8772 28.9625 18.7255L34.2444 17.2162C34.688 17.0894 35.1607 17.2826 35.3886 17.6837L39.2545 24.4878Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 8L42 6"></svg:path></svg:g>`,
})
export class IconParkEggplantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEiffelTowerIcon],svg[icon-park-eiffel-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M21 8C21 19 17.5 33 11 44"></svg:path><svg:path stroke-linejoin="round" d="M27 8C27 19 30.5 33 37 44"></svg:path><svg:path stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path d="M14 30L34 30"></svg:path><svg:path d="M17 21L31 21"></svg:path><svg:path d="M20 8L28 8"></svg:path><svg:path d="M24 4V8"></svg:path><svg:path stroke-linejoin="round" d="M18 44C18 44 18.8125 41.1875 20 40C21 39 22 38 24 38C26 38 27 39 28 40C29.3438 41.3437 30 44 30 44"></svg:path></svg:g>`,
})
export class IconParkEiffelTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEightKeyIcon],svg[icon-park-eight-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M24 22C26.2091 22 28 20.2091 28 18C28 15.7909 26.2091 14 24 14C21.7909 14 20 15.7909 20 18C20 20.2091 21.7909 22 24 22Z"></svg:path><svg:path stroke="#fff" d="M24 33C26.7614 33 29 30.7614 29 28C29 25.2386 26.7614 23 24 23C21.2386 23 19 25.2386 19 28C19 30.7614 21.2386 33 24 33Z"></svg:path></svg:g>`,
})
export class IconParkEightKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElectricDrillIcon],svg[icon-park-electric-drill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M20 9H39.6977C42.0214 9 43.8561 10.9733 43.6871 13.2909L43.1038 21.2909C42.9513 23.3816 41.2107 25 39.1144 25H20V9Z"></svg:path><svg:path d="M30.0909 25H39L34.9112 36.2443C34.3096 37.8987 32.7372 39 30.9769 39V39C28.0717 39 26.0497 36.1133 27.0425 33.383L30.0909 25Z"></svg:path><svg:rect width="6" height="10" x="14" y="12" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M14 17H4"></svg:path></svg:g>`,
})
export class IconParkElectricDrillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElectricIronIcon],svg[icon-park-electric-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 18.7125C5 18.319 5.319 18 5.7125 18H19.1519C32.3228 18 43 28.6772 43 41.8481V41.8481C43 41.932 42.932 42 42.8481 42H5V18.7125Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 18V8H25"></svg:path><svg:circle cx="15" cy="27" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M5 36H42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 20.0002C30.3333 18.0002 34.4 13.6002 38 16.0002C41.5 18.3335 38.5 24.0002 37 26.0002"></svg:path></svg:g>`,
})
export class IconParkElectricIronIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElectricWaveIcon],svg[icon-park-electric-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M12 25H15L19 14L22 36L27 23L31 29L34 25H37"></svg:path></svg:g>`,
})
export class IconParkElectricWaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElectrocardiogramIcon],svg[icon-park-electrocardiogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M11 28.1321H16.6845L21.2234 13L24.8953 35L29.4483 24.6175L32.9127 28.1321H37"></svg:path></svg:g>`,
})
export class IconParkElectrocardiogramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElectronicDoorLockIcon],svg[icon-park-electronic-door-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="26" height="40" x="6" y="4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:rect width="24" height="8" x="20" y="30" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="4"></svg:rect><svg:circle cx="12" cy="12" r="2" fill="#000"></svg:circle><svg:circle cx="12" cy="18" r="2" fill="#000"></svg:circle><svg:circle cx="12" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="19" cy="12" r="2" fill="#000"></svg:circle><svg:circle cx="19" cy="18" r="2" fill="#000"></svg:circle><svg:circle cx="19" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="26" cy="12" r="2" fill="#000"></svg:circle><svg:circle cx="26" cy="18" r="2" fill="#000"></svg:circle><svg:circle cx="26" cy="24" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkElectronicDoorLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElectronicLocksCloseIcon],svg[icon-park-electronic-locks-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="18" x="12" y="20" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M18 20V14C18 10.3181 20.6863 8 24 8C27.3137 8 30 10.3181 30 14V20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 18V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 18V30"></svg:path></svg:g>`,
})
export class IconParkElectronicLocksCloseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElectronicLocksOpenIcon],svg[icon-park-electronic-locks-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="18" x="12" y="20" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M18 20V14C18 10.3181 20.6863 8 24 8C25.8493 8 27.5032 8.72195 28.6038 10C29.0889 10.5634 29.4666 11.2348 29.7061 12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 18V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 18V30"></svg:path></svg:g>`,
})
export class IconParkElectronicLocksOpenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElectronicPenIcon],svg[icon-park-electronic-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="12" height="38" x="35.193" y="5.322" fill="#2F88FF" stroke="#000" stroke-width="4" rx="6" transform="rotate(45 35.193 5.322)"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 23L26 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 43L12 37"></svg:path><svg:rect width="4" height="4" x="33.268" y="12.34" fill="#fff" rx="2" transform="rotate(30 33.268 12.34)"></svg:rect></svg:g>`,
})
export class IconParkElectronicPenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElephantIcon],svg[icon-park-elephant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16.7942 12C12.7417 11.1116 4 12.1925 4 21.7874V40H9.86912V33.7811H26.638V40H32.5071V28.8949C33.2058 28.3026 34.4075 33.0231 36.6994 34.2253C38.0521 34.9349 39.2147 35.3968 40.4724 35.1137C43.1948 34.5009 44.4969 32.715 43.8261 28.4507C42.5685 29.9313 38.7955 31.5429 38.3763 28.4507C38.3763 24.8798 38.3763 15.5687 38.3763 15.5687C37.957 12.9035 35.5255 7.66183 29.1534 8.01719H22.2842C19.3497 8 14.9898 12.0148 15.9959 17.3452C16.3082 19 17.5 22.3045 21.7035 22.6757C23.3804 22.8238 26.1534 22.1427 27.8302 18.2336"></svg:path><svg:circle cx="33" cy="19" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkElephantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkElevatorIcon],svg[icon-park-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M42 41V7H6V41H42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 7V41M42 7H4H6V41M42 7H44M42 41H44M42 41H6M6 41H4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 7V41"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 20V28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 23L33 20L36 23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 28V20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 25L15 28L18 25"></svg:path></svg:g>`,
})
export class IconParkElevatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailBlockIcon],svg[icon-park-email-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M44 35V9H24H4V23V37H26"></svg:path><svg:circle cx="35" cy="35" r="9" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M37 33L33 37"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 9L24 22L44 9"></svg:path></svg:g>`,
})
export class IconParkEmailBlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailDelectIcon],svg[icon-park-email-delect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path><svg:path fill="#2F88FF" d="M32 31H42L40 41H34L32 31Z"></svg:path><svg:path d="M36 31L38 27"></svg:path></svg:g>`,
})
export class IconParkEmailDelectIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailDownIcon],svg[icon-park-email-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 15H44V28V41H4V28V15H12"></svg:path><svg:path d="M24 19V5"></svg:path><svg:path d="M30 13L24 19L18 13"></svg:path><svg:path d="M4 15L24 30L44 15"></svg:path></svg:g>`,
})
export class IconParkEmailDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailFailIcon],svg[icon-park-email-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path d="M40 31L32 39"></svg:path><svg:path d="M32 31L40 39"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path></svg:g>`,
})
export class IconParkEmailFailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailLockIcon],svg[icon-park-email-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path><svg:rect width="12" height="8" x="31" y="33" fill="#2F88FF"></svg:rect><svg:path d="M40 33V30C40 28.3431 38.6569 27 37 27C35.3431 27 34 28.3431 34 30V33"></svg:path></svg:g>`,
})
export class IconParkEmailLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailPushIcon],svg[icon-park-email-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 15H44V28V41H4V28V15H12"></svg:path><svg:path d="M24 19V5"></svg:path><svg:path d="M30 11L24 5L18 11"></svg:path><svg:path d="M4 15L24 30L44 15"></svg:path></svg:g>`,
})
export class IconParkEmailPushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailSearchIcon],svg[icon-park-email-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24V9H24H4V24V39H24"></svg:path><svg:circle cx="36" cy="34" r="5" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 37L44 40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 9L24 24L44 9"></svg:path></svg:g>`,
})
export class IconParkEmailSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailSecurityIcon],svg[icon-park-email-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path fill="#2F88FF" d="M30 30C30 29 35 27 35 27C35 27 40 29 40 30C40 38 35 40 35 40C35 40 30 38 30 30Z"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path></svg:g>`,
})
export class IconParkEmailSecurityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmailSuccessfullyIcon],svg[icon-park-email-successfully-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path d="M31 36L36 40L44 30"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path></svg:g>`,
})
export class IconParkEmailSuccessfullyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmotionHappyIcon],svg[icon-park-emotion-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path></svg:g>`,
})
export class IconParkEmotionHappyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmotionUnhappyIcon],svg[icon-park-emotion-unhappy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 27 24 27C19 27 17 31 17 31"></svg:path></svg:g>`,
})
export class IconParkEmotionUnhappyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEmptyIcon],svg[icon-park-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.4385 42.0001L12.6231 42.0001C13.452 42.0001 14.1951 41.4887 14.4911 40.7144L16.6914 34.9607L16.716 29.4352C16.7166 29.3185 16.7273 29.2022 16.7481 29.0875L20.1524 10.3C20.3748 9.07262 19.4318 7.94336 18.1845 7.94336L10.8629 7.94335C9.73662 7.94335 8.83247 8.87286 8.86363 9.99868L9.38589 28.8701L7.61514 32.1998C7.22293 32.9373 7.33036 33.8409 7.88455 34.4658L8.44639 35.0994L7.48318 39.5797C7.21544 40.8251 8.16466 42.0001 9.4385 42.0001Z"></svg:path><svg:path d="M16.7168 29.2598L9.38587 28.87"></svg:path><svg:path d="M38.5784 41.9998L35.3983 41.9998C34.5585 41.9998 33.8082 41.4752 33.5199 40.6865L31.4266 34.9606L31.402 29.435C31.4015 29.3184 31.3908 29.202 31.37 29.0873L27.9654 10.2997C27.743 9.07239 28.686 7.94311 29.9334 7.94312L37.2553 7.94317C38.3815 7.94317 39.2856 8.87268 39.2545 9.99849L38.7323 28.87L40.5032 32.1997C40.8954 32.9372 40.788 33.8408 40.2337 34.4658L39.6719 35.0993L40.5423 39.6218C40.7797 40.8554 39.8345 41.9998 38.5784 41.9998Z"></svg:path><svg:path d="M31.4004 29.2598L38.7315 28.8701"></svg:path></svg:g>`,
})
export class IconParkEmptyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEndTimeSortIcon],svg[icon-park-end-time-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5V30.0036H42V5"></svg:path><svg:path stroke-linejoin="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linejoin="round" d="M24 30V43"></svg:path><svg:path stroke-linejoin="round" d="M18.9604 10.9786L23.9972 15.9928L18.9604 21.0903"></svg:path><svg:path d="M29 10.002V22.0001"></svg:path></svg:g>`,
})
export class IconParkEndTimeSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEndlessIcon],svg[icon-park-endless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 21L35 18L44 24V34L34 40L24 34V13L13 7L4 13V24L13 30L17 27"></svg:path>`,
})
export class IconParkEndlessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEndocrineIcon],svg[icon-park-endocrine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M23.1466 44C31.2933 44 40 43.0106 40 30.1802C40 23.9643 38.5085 18.9042 35.5256 15C32.7392 19.6667 30.674 22 29.3299 22C27.3139 22 29.3299 15.9107 26.9987 11.2914C25.4445 8.21194 22.6879 5.78146 18.7289 4C19.2794 8.43691 19.1603 11.6554 18.3715 13.6554C17.1882 16.6554 7.15114 21.91 8.05783 30.9349C8.96453 39.9599 15 44 23.1466 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M21.7076 24.0083C17.9028 27.4666 16.2811 30.6674 16.8427 33.6109C17.3261 36.1448 19.2487 37.3764 20.6969 37.7735C21.8196 38.0814 23.7635 38.2536 25.5004 36.7067C27.3402 35.0682 26.6071 32.7388 23.9392 29.8571C22.8138 28.6415 22.0699 26.6919 21.7076 24.0083Z"></svg:path></svg:g>`,
})
export class IconParkEndocrineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEndpointDisplacementIcon],svg[icon-park-endpoint-displacement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M16 10C16 12.7614 13.7614 15 11 15C8.23858 15 6 12.7614 6 10C6 7.23858 8.23858 5 11 5C13.7614 5 16 7.23858 16 10Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 10C16 12.7614 13.7614 15 11 15C8.23858 15 6 12.7614 6 10C6 7.23858 8.23858 5 11 5C13.7614 5 16 7.23858 16 10ZM16 10H27M27 10L23 6M27 10L23 14"></svg:path><svg:path fill="#2F88FF" d="M32 38C32 40.7614 34.2386 43 37 43C39.7614 43 42 40.7614 42 38C42 35.2386 39.7614 33 37 33C34.2386 33 32 35.2386 32 38Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 38C32 40.7614 34.2386 43 37 43C39.7614 43 42 40.7614 42 38C42 35.2386 39.7614 33 37 33C34.2386 33 32 35.2386 32 38ZM32 38H21M21 38L25 34M21 38L25 42"></svg:path><svg:path fill="#2F88FF" d="M33 11C33 13.7614 35.2386 16 38 16C40.7614 16 43 13.7614 43 11C43 8.23858 40.7614 6 38 6C35.2386 6 33 8.23858 33 11Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 16C35.2386 16 33 13.7614 33 11C33 8.23858 35.2386 6 38 6C40.7614 6 43 8.23858 43 11C43 13.7614 40.7614 16 38 16ZM38 16V27M38 27L42 23M38 27L34 23"></svg:path><svg:path fill="#2F88FF" d="M5 37C5 34.2386 7.23858 32 10 32C12.7614 32 15 34.2386 15 37C15 39.7614 12.7614 42 10 42C7.23858 42 5 39.7614 5 37Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 32C7.23858 32 5 34.2386 5 37C5 39.7614 7.23858 42 10 42C12.7614 42 15 39.7614 15 37C15 34.2386 12.7614 32 10 32ZM10 32V21M10 21L14 25M10 21L6 25"></svg:path></svg:g>`,
})
export class IconParkEndpointDisplacementIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEndpointFlatIcon],svg[icon-park-endpoint-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 40H23.2857C20.0414 40 7 40 7 40L7 27M43 8H23.2857C14.2914 8 7 8 7 8L7 21M43 24H10"></svg:path><svg:circle cx="7" cy="24" r="3"></svg:circle></svg:g>`,
})
export class IconParkEndpointFlatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEndpointRoundIcon],svg[icon-park-endpoint-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 24L26 24"></svg:path><svg:circle cx="22" cy="24" r="3"></svg:circle><svg:path d="M42 40H22C13.1634 40 6 32.8366 6 24C6 15.1634 13.1634 8 22 8H42"></svg:path></svg:g>`,
})
export class IconParkEndpointRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEndpointSquareIcon],svg[icon-park-endpoint-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 40H21.4286C18.355 40 6 40 6 40V8C6 8 12.9076 8 21.4286 8H42"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle><svg:path d="M42 24L27 24"></svg:path></svg:g>`,
})
export class IconParkEndpointSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEnergySocketIcon],svg[icon-park-energy-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M28 21V16"></svg:path><svg:path d="M20 21V16"></svg:path><svg:path fill="#2F88FF" d="M24 32C28.4183 32 32 28.4183 32 24V21H16V24C16 28.4183 19.5817 32 24 32Z"></svg:path><svg:path d="M24 44V32"></svg:path></svg:g>`,
})
export class IconParkEnergySocketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEngineeringBrandIcon],svg[icon-park-engineering-brand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="20" x="5" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M12 26V42"></svg:path><svg:path stroke-linecap="round" d="M36 33H12"></svg:path><svg:path stroke-linecap="round" d="M16 42L8 42"></svg:path><svg:path stroke-linecap="round" d="M40 42L32 42"></svg:path><svg:path stroke-linecap="round" d="M36 26V42"></svg:path></svg:g>`,
})
export class IconParkEngineeringBrandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEngineeringVehicleIcon],svg[icon-park-engineering-vehicle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 6H38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 36H6V28H32V36H18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 36V12H38.5L44 24V36H41"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 8L26 8L26 22L7 22L4 8Z"></svg:path><svg:circle cx="37" cy="38" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="14" cy="38" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkEngineeringVehicleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEnglishIcon],svg[icon-park-english-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M13 31V17H21"></svg:path><svg:path stroke="#fff" d="M13 24H20.5"></svg:path><svg:path stroke="#fff" d="M13 31H20.5"></svg:path><svg:path stroke="#fff" d="M26 31L26 19"></svg:path><svg:path stroke="#fff" d="M26 31L26 24.5C26 22.0147 28.0147 20 30.5 20V20C32.9853 20 35 22.0147 35 24.5L35 31"></svg:path></svg:g>`,
})
export class IconParkEnglishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEnglishMustacheIcon],svg[icon-park-english-mustache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.0642 24.0585C13.3515 22.9849 13.5293 18.9658 17.8609 18.1171C21.3261 17.4381 23.4076 19.8255 23.9251 22.361C24.3583 24.4829 23.0588 30 16.1283 30C7.46523 30 4.57754 24.4829 4 22.361C4.8663 23.2098 7.46523 24.9073 10.0642 24.0585Z"></svg:path><svg:path d="M37.9358 24.0585C34.6485 22.9849 34.4707 18.9658 30.1391 18.1171C26.6739 17.4381 24.5924 19.8255 24.0749 22.361C23.6417 24.4829 24.9412 30 31.8717 30C40.5348 30 43.4225 24.4829 44 22.361C43.1337 23.2098 40.5348 24.9073 37.9358 24.0585Z"></svg:path></svg:g>`,
})
export class IconParkEnglishMustacheIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEnquireIcon],svg[icon-park-enquire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-miterlimit="2" d="M37 16C34.2386 16 32 13.7614 32 11C32 8.23858 34.2386 6 37 6C39.7614 6 42 8.23858 42 11C42 13.7614 39.7614 16 37 16Z"></svg:path><svg:path fill="#2F88FF" stroke-miterlimit="2" d="M12 12C9.79086 12 8 10.2091 8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8C16 10.2091 14.2091 12 12 12Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26 39L32 34V28C32 24.5339 34 22 37 22C40 22 42 24.5339 42 28V32.8372V42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 33L18 28V24C18 20.5339 16 18 13 18C10 18 8 20.5339 8 24V26.8372V42"></svg:path></svg:g>`,
})
export class IconParkEnquireIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEnterKeyIcon],svg[icon-park-enter-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 44V4H24V20H4V44H44Z"></svg:path><svg:path stroke="#fff" d="M21 28L17 32L21 36"></svg:path><svg:path stroke="#fff" d="M34 23V32H17"></svg:path></svg:g>`,
})
export class IconParkEnterKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEnterKeyOneIcon],svg[icon-park-enter-key-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M23 23V5H43V43H5V23H23Z"></svg:path><svg:path stroke="#fff" d="M33 13V33H13"></svg:path><svg:path stroke="#fff" d="M17 29L13 33L17 37"></svg:path></svg:g>`,
})
export class IconParkEnterKeyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEnterTheKeyboardIcon],svg[icon-park-enter-the-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 7H6C4.89543 7 4 7.89543 4 9V37C4 38.1046 4.89543 39 6 39H42C43.1046 39 44 38.1046 44 37V9C44 7.89543 43.1046 7 42 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 19H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 19H23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 19H36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 28H36"></svg:path></svg:g>`,
})
export class IconParkEnterTheKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEntertainmentIcon],svg[icon-park-entertainment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M16 24C21.5228 24 26 19.5228 26 14C26 8.47715 21.5228 4 16 4C10.4772 4 6 8.47715 6 14C6 19.5228 10.4772 24 16 24Z"></svg:path><svg:path stroke-linecap="round" d="M26 15.202C26.0144 15.2163 30.7229 21.1376 40.1256 32.9656C40.4562 33.363 40.4295 33.9468 40.064 34.3124L35.9805 38.3959C35.615 38.7614 35.0311 38.7881 34.6338 38.4575L17.8222 24"></svg:path><svg:path stroke-linecap="round" d="M26.4702 24.47L29.2986 27.2985"></svg:path><svg:path stroke-linecap="round" d="M17 44.0864C18.9166 41.5881 21.2468 40.3389 23.9906 40.3389C28.1063 40.3389 32.9629 45.5097 37.1063 44.798C41.2496 44.0864 42.4355 40 39.8851 37.7375"></svg:path></svg:g>`,
})
export class IconParkEntertainmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEnvelopeIcon],svg[icon-park-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 4H8V44H40V4Z"></svg:path><svg:path d="M24 12V36"></svg:path><svg:path d="M40 36H24H8"></svg:path><svg:path d="M8 4L14 12H34L40 4"></svg:path></svg:g>`,
})
export class IconParkEnvelopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEnvelopeOneIcon],svg[icon-park-envelope-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M36 16V8H20H4V20V32H12"></svg:path><svg:path d="M12 40H44V28V16H28H12V28V40Z"></svg:path><svg:path stroke-linecap="round" d="M12 16L28 28L44 16"></svg:path><svg:path stroke-linecap="round" d="M32 16H12V31"></svg:path><svg:path stroke-linecap="round" d="M44 31V16H24"></svg:path></svg:g>`,
})
export class IconParkEnvelopeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEqualRatioIcon],svg[icon-park-equal-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path fill="#fff" fill-rule="evenodd" d="M24 22.5C25.3807 22.5 26.5 21.3807 26.5 20C26.5 18.6193 25.3807 17.5 24 17.5C22.6193 17.5 21.5 18.6193 21.5 20C21.5 21.3807 22.6193 22.5 24 22.5Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 30.5C25.3807 30.5 26.5 29.3807 26.5 28C26.5 26.6193 25.3807 25.5 24 25.5C22.6193 25.5 21.5 26.6193 21.5 28C21.5 29.3807 22.6193 30.5 24 30.5Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.5 17V31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32.5 17V31"></svg:path></svg:g>`,
})
export class IconParkEqualRatioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEqualizerIcon],svg[icon-park-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M11 16V42"></svg:path><svg:path stroke-linecap="round" d="M24 29V42"></svg:path><svg:path stroke-linecap="round" d="M24 19V6"></svg:path><svg:path stroke-linecap="round" d="M37 6V32"></svg:path><svg:path fill="#2F88FF" d="M11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16Z"></svg:path><svg:path fill="#2F88FF" d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"></svg:path><svg:path fill="#2F88FF" d="M37 42C39.7614 42 42 39.7614 42 37C42 34.2386 39.7614 32 37 32C34.2386 32 32 34.2386 32 37C32 39.7614 34.2386 42 37 42Z"></svg:path></svg:g>`,
})
export class IconParkEqualizerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEraseIcon],svg[icon-park-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 42H44"></svg:path><svg:path fill="#2F88FF" d="M31 4L7 28L13 34H21L41 14L31 4Z"></svg:path></svg:g>`,
})
export class IconParkEraseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkErrorIcon],svg[icon-park-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 11L11 6L24 19L37 6L42 11L29 24L42 37L37 42L24 29L11 42L6 37L19 24L6 11Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkErrorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkErrorComputerIcon],svg[icon-park-error-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M26 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V23"></svg:path><svg:path d="M24 34V42"></svg:path><svg:path d="M34 7L42 15"></svg:path><svg:path d="M42 7L34 15"></svg:path><svg:path d="M14 42L34 42"></svg:path></svg:g>`,
})
export class IconParkErrorComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkErrorPictureIcon],svg[icon-park-error-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M44 23.9941C44 22.8896 43.1046 21.9941 42 21.9941C40.8954 21.9941 40 22.8896 40 23.9941H44ZM24 7.99414C25.1046 7.99414 26 7.09871 26 5.99414C26 4.88957 25.1046 3.99414 24 3.99414V7.99414ZM39 39.9941H9V43.9941H39V39.9941ZM8 38.9941V8.99414H4V38.9941H8ZM40 23.9941V38.9941H44V23.9941H40ZM9 7.99414H24V3.99414H9V7.99414ZM9 39.9941C8.44772 39.9941 8 39.5464 8 38.9941H4C4 41.7556 6.23857 43.9941 9 43.9941V39.9941ZM39 43.9941C41.7614 43.9941 44 41.7556 44 38.9941H40C40 39.5464 39.5523 39.9941 39 39.9941V43.9941ZM8 8.99414C8 8.44186 8.44771 7.99414 9 7.99414V3.99414C6.23858 3.99414 4 6.23272 4 8.99414H8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 7L41 15"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 7L33 15"></svg:path></svg:g>`,
})
export class IconParkErrorPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkErrorPromptIcon],svg[icon-park-error-prompt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 18L20 30"></svg:path><svg:path d="M20 18L8 30"></svg:path><svg:path d="M34 8C39.0007 12.3609 42 17.9311 42 24C42 30.0689 39.0007 35.6391 34 40"></svg:path><svg:path d="M27 14C30.7505 16.7256 33 20.2069 33 24C33 27.7931 30.7505 31.2744 27 34"></svg:path></svg:g>`,
})
export class IconParkErrorPromptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEscalatorsIcon],svg[icon-park-escalators-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M35 13L13 35H4V44H13L35 22H44V13H35Z"></svg:path><svg:path d="M19 13L28 4"></svg:path><svg:path d="M22 4H28V10"></svg:path><svg:path d="M14 18L5 27"></svg:path><svg:path d="M11 27H5V21"></svg:path></svg:g>`,
})
export class IconParkEscalatorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEthernetOffIcon],svg[icon-park-ethernet-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:rect width="10" height="6" x="19" y="27" fill="#43CCF8" stroke="#fff" stroke-linejoin="round"></svg:rect><svg:rect width="20" height="8" x="14" y="19" fill="#43CCF8" stroke="#fff" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" d="M33 19V15"></svg:path><svg:path stroke="#fff" d="M27 19V15"></svg:path><svg:path stroke="#fff" d="M21 19V15"></svg:path><svg:path stroke="#fff" d="M15 19V15"></svg:path></svg:g>`,
})
export class IconParkEthernetOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEthernetOnIcon],svg[icon-park-ethernet-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:rect width="10" height="6" x="19" y="27" fill="#43CCF8" stroke="#fff" stroke-linejoin="round"></svg:rect><svg:rect width="20" height="12" x="14" y="15" fill="#43CCF8" stroke="#fff" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" d="M21 19V15"></svg:path><svg:path stroke="#fff" d="M27 19V15"></svg:path></svg:g>`,
})
export class IconParkEthernetOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEveryUserIcon],svg[icon-park-every-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="14" cy="29" r="5" fill="#2F88FF"></svg:circle><svg:circle cx="34" cy="29" r="5" fill="#2F88FF"></svg:circle><svg:circle cx="24" cy="9" r="5" fill="#2F88FF"></svg:circle><svg:path d="M24 44C24 38.4772 19.5228 34 14 34C8.47715 34 4 38.4772 4 44"></svg:path><svg:path d="M44 44C44 38.4772 39.5228 34 34 34C28.4772 34 24 38.4772 24 44"></svg:path><svg:path d="M34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24"></svg:path></svg:g>`,
})
export class IconParkEveryUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExcelIcon],svg[icon-park-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M8 15V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V33"></svg:path><svg:path stroke="#000" d="M31 15H34"></svg:path><svg:path stroke="#000" d="M28 23H34"></svg:path><svg:path stroke="#000" d="M28 31H34"></svg:path><svg:rect width="18" height="18" x="4" y="15" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" stroke-linejoin="round" d="M10 21L16 27"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M16 21L10 27"></svg:path></svg:g>`,
})
export class IconParkExcelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExcelOneIcon],svg[icon-park-excel-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M30 16H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 32L18 16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 24H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 32H18"></svg:path></svg:g>`,
})
export class IconParkExcelOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExchangeIcon],svg[icon-park-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 16H29V4L44 19L29 34V24H18V13L4 28L18 44V32H23"></svg:path>`,
})
export class IconParkExchangeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExchangeFourIcon],svg[icon-park-exchange-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" d="M15 21L33 21"></svg:path><svg:path stroke="#fff" d="M15 27L33 27"></svg:path><svg:path stroke="#fff" d="M33 21L26 14"></svg:path><svg:path stroke="#fff" d="M22 34L15 27"></svg:path></svg:g>`,
})
export class IconParkExchangeFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExchangeOneIcon],svg[icon-park-exchange-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9 18V42H39V18L24 6L9 18Z"></svg:path><svg:path stroke="#fff" d="M17 24L31 24"></svg:path><svg:path stroke="#fff" d="M17 30L31 30"></svg:path><svg:path stroke="#fff" d="M31 24L26 19"></svg:path><svg:path stroke="#fff" d="M22 35L17 30"></svg:path></svg:g>`,
})
export class IconParkExchangeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExchangeThreeIcon],svg[icon-park-exchange-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 8.25564L24.0086 3L42 8.25564V19.0337C42 30.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 30.36 6 19.0287V8.25564Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 19L31 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 25L31 25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 19L26 14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 30L17 25"></svg:path></svg:g>`,
})
export class IconParkExchangeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExchangeTwoIcon],svg[icon-park-exchange-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M9 18V42H39V18L24 6L9 18Z"></svg:path><svg:path stroke="#fff" d="M24 30V36"></svg:path><svg:path stroke="#fff" d="M31 26V36"></svg:path><svg:path stroke="#fff" d="M17 32V36"></svg:path><svg:path stroke="#fff" d="M17 25L22 21L25 24L31 19"></svg:path></svg:g>`,
})
export class IconParkExchangeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExcludeSelectionIcon],svg[icon-park-exclude-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="27" height="27" x="16" y="16" rx="2"></svg:rect><svg:rect width="27" height="27" x="5" y="5" rx="2"></svg:rect><svg:path d="M25.0005 32L16.0005 41"></svg:path><svg:path d="M41.0005 16L32.0005 25"></svg:path><svg:path d="M16.0005 23L7.00049 32"></svg:path><svg:path d="M32.0005 7L23.0005 16"></svg:path><svg:path d="M43.0005 24L24.0005 43"></svg:path><svg:path d="M24.0005 5L5.00049 24"></svg:path><svg:path d="M43.0005 34L34.0005 43"></svg:path><svg:path d="M14 5L5 14"></svg:path></svg:g>`,
})
export class IconParkExcludeSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExclusiveGatewayIcon],svg[icon-park-exclusive-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M22.7992 4.20102L4.4144 22.5858C3.63336 23.3668 3.63335 24.6332 4.4144 25.4142L22.7992 43.799C23.5802 44.58 24.8466 44.58 25.6276 43.799L44.0124 25.4142C44.7934 24.6332 44.7934 23.3668 44.0124 22.5858L25.6276 4.20102C24.8466 3.41997 23.5802 3.41997 22.7992 4.20102Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.043 29.9871L30.0427 18.0249"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18.0527 18.0156L30.0337 29.9965"></svg:path></svg:g>`,
})
export class IconParkExclusiveGatewayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandDownIcon],svg[icon-park-expand-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 10C6 7.79086 7.79086 6 10 6H38C40.2091 6 42 7.79086 42 10V38C42 40.2091 40.2091 42 38 42H10C7.79086 42 6 40.2091 6 38V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 32H42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 16L24 20L28 16"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 26V38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 26V38"></svg:path></svg:g>`,
})
export class IconParkExpandDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandDownOneIcon],svg[icon-park-expand-down-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 9L42 9"></svg:path><svg:path d="M6 19L42 19"></svg:path><svg:path d="M6 26L24 40L42 26"></svg:path></svg:g>`,
})
export class IconParkExpandDownOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandLeftIcon],svg[icon-park-expand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 9C6 7.34315 7.34315 6 9 6H39C40.6569 6 42 7.34315 42 9V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 6V42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 20L20 24L16 28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M26 6H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M26 42H38"></svg:path></svg:g>`,
})
export class IconParkExpandLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandLeftAndRightIcon],svg[icon-park-expand-left-and-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42 6V42M16 20L12 24L16 28M32 20L36 24L32 28M24 6L24 42M6 6L6 42"></svg:path>`,
})
export class IconParkExpandLeftAndRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandRightIcon],svg[icon-park-expand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M18 6V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 6H36"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 42H36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 20L28 24L32 28"></svg:path></svg:g>`,
})
export class IconParkExpandRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandTextInputIcon],svg[icon-park-expand-text-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 42H6V26"></svg:path><svg:path d="M26 6H42V22"></svg:path></svg:g>`,
})
export class IconParkExpandTextInputIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpandUpIcon],svg[icon-park-expand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 16H42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 32L24 28L28 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 10V22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 10V22"></svg:path></svg:g>`,
})
export class IconParkExpandUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpensesIcon],svg[icon-park-expenses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 34L43 34"></svg:path><svg:path d="M38 39L43 34L38.0004 29"></svg:path><svg:path d="M43 26V10C43 8.34315 41.6569 7 40 7H8C6.34315 7 5 8.34315 5 10V38C5 39.6569 6.34315 41 8 41H28.4706"></svg:path><svg:path d="M15 15L20 21L25 15"></svg:path><svg:path d="M14 27H26"></svg:path><svg:path d="M14 21H26"></svg:path><svg:path d="M20 21V33"></svg:path></svg:g>`,
})
export class IconParkExpensesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpensesOneIcon],svg[icon-park-expenses-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 36L35 31L30.0004 26"></svg:path><svg:path d="M38 36L43 31L38.0004 26"></svg:path><svg:path d="M43 22V9C43 7.89543 42.1046 7 41 7H7C5.89543 7 5 7.89543 5 9V39C5 40.1046 5.89543 41 7 41H28.4706"></svg:path><svg:path d="M13 15L18 21L23 15"></svg:path><svg:path d="M12 27H24"></svg:path><svg:path d="M12 21H24"></svg:path><svg:path d="M18 21V33"></svg:path></svg:g>`,
})
export class IconParkExpensesOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExperimentIcon],svg[icon-park-experiment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M12 4H36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.7769 30L18.019 15.0386V4H30.0283V15.0386L37.246 30"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M7.79433 43.673C6.16744 42.8855 5.48698 40.9282 6.27449 39.3013L10.7769 30C10.7769 30 18.0001 35 24.0001 30C30.0001 25 37.2461 30 37.2461 30L41.7352 39.3052C41.9492 39.7488 42.0603 40.2348 42.0603 40.7273C42.0603 42.5347 40.595 44 38.7876 44H9.22025C8.72636 44 8.23888 43.8882 7.79433 43.673Z"></svg:path></svg:g>`,
})
export class IconParkExperimentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExperimentOneIcon],svg[icon-park-experiment-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.7769 30L18.019 15.0386V4H30.0283V15.0386L37.246 30"></svg:path><svg:path fill="#2F88FF" d="M7.79433 43.673C6.16744 42.8855 5.48698 40.9282 6.27449 39.3013L10.7769 30C10.7769 30 18.0001 35 24.0001 30C30.0001 25 37.2461 30 37.2461 30L41.7352 39.3052C41.9492 39.7488 42.0603 40.2348 42.0603 40.7273C42.0603 42.5347 40.595 44 38.7876 44H9.22025C8.72636 44 8.23888 43.8882 7.79433 43.673Z"></svg:path></svg:g>`,
})
export class IconParkExperimentOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExportIcon],svg[icon-park-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 27C42 33 38 43 24 43C10 43 6 33 6 27"></svg:path><svg:path d="M24.0078 5.10059V33.0001"></svg:path><svg:path d="M12 17L24 5L36 17"></svg:path></svg:g>`,
})
export class IconParkExportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpressDeliveryIcon],svg[icon-park-express-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 31L8.00002 42C8.00002 43.1046 8.89545 44 10 44H38C39.1046 44 40 43.1046 40 42V31"></svg:path><svg:path fill="#2F88FF" d="M38 14H10C8.89543 14 8 14.8954 8 16L8.00002 22C8.00002 23.1046 8.89545 24 10 24H38C39.1046 24 40 23.1046 40 22V16C40 14.8954 39.1046 14 38 14Z"></svg:path><svg:path stroke-linecap="round" d="M16 4V8"></svg:path><svg:path stroke-linecap="round" d="M24 4V8"></svg:path><svg:path stroke-linecap="round" d="M32 4V8"></svg:path><svg:path stroke-linecap="round" d="M16 34H32"></svg:path></svg:g>`,
})
export class IconParkExpressDeliveryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExpressionlessFaceIcon],svg[icon-park-expressionless-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 19H20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 19H32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 31L32 31"></svg:path></svg:g>`,
})
export class IconParkExpressionlessFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExtendIcon],svg[icon-park-extend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-width="4" rx="3"></svg:rect><svg:path fill="#fff" d="M35 12H30.4142C29.5233 12 29.0771 13.0771 29.7071 13.7071L34.2929 18.2929C34.9229 18.9229 36 18.4767 36 17.5858V13C36 12.4477 35.5523 12 35 12Z"></svg:path><svg:path fill="#fff" d="M12 13V17.5858C12 18.4767 13.0771 18.9229 13.7071 18.2929L18.2929 13.7071C18.9229 13.0771 18.4767 12 17.5858 12H13C12.4477 12 12 12.4477 12 13Z"></svg:path><svg:path fill="#fff" d="M13 36H17.5858C18.4767 36 18.9229 34.9229 18.2929 34.2929L13.7071 29.7071C13.0771 29.0771 12 29.5233 12 30.4142V35C12 35.5523 12.4477 36 13 36Z"></svg:path><svg:path fill="#fff" d="M36 35V30.4142C36 29.5233 34.9229 29.0771 34.2929 29.7071L29.7071 34.2929C29.0771 34.9229 29.5233 36 30.4142 36H35C35.5523 36 36 35.5523 36 35Z"></svg:path></svg:g>`,
})
export class IconParkExtendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkExternalTransmissionIcon],svg[icon-park-external-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 25L42 25"></svg:path><svg:path d="M36 19L42 25L36 31"></svg:path><svg:path d="M21 6V26C21 32.7391 14.8348 39.5668 9 42"></svg:path><svg:path d="M42 14V9C42 7.34315 40.6569 6 39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V35.5"></svg:path></svg:g>`,
})
export class IconParkExternalTransmissionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEyebrowIcon],svg[icon-park-eyebrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 40C33.9411 40 42 30 42 30C42 30 33.9411 20 24 20C14.0589 20 6 30 6 30C6 30 14.0589 40 24 40Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 34C26.2091 34 28 32.2091 28 30C28 27.7909 26.2091 26 24 26C21.7909 26 20 27.7909 20 30C20 32.2091 21.7909 34 24 34Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M28.0001 6C21 6 10.0001 9.5 7.00005 12C4.00005 14.5 5.99999 19 8.00005 18C10.0001 17 23.2001 12.2 28.0001 11C32.8001 9.8 39.6667 11.8333 42 13C39.6667 11 35.0001 6 28.0001 6Z"></svg:path></svg:g>`,
})
export class IconParkEyebrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkEyesIcon],svg[icon-park-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M24 41C33.9411 41 42 32.678 42 27C42 21.322 33.9411 13 24 13C14.0589 13 6 21.3278 6 27C6 32.6722 14.0589 41 24 41Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M24 33C27.3137 33 30 30.3137 30 27C30 23.6863 27.3137 21 24 21C20.6863 21 18 23.6863 18 27C18 30.3137 20.6863 33 24 33Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M13.2637 11.2661L15.8582 14.8863"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M35.625 11.7104L33.0304 15.3307"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24.0088 7V13"></svg:path></svg:g>`,
})
export class IconParkEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFEightKeyIcon],svg[icon-park-f-eight-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M30 24C32.2091 24 34 22.2091 34 20C34 17.7909 32.2091 16 30 16C27.7909 16 26 17.7909 26 20C26 22.2091 27.7909 24 30 24Z"></svg:path><svg:path stroke="#fff" d="M30 33C32.2091 33 34 31.2091 34 29C34 26.7909 32.2091 25 30 25C27.7909 25 26 26.7909 26 29C26 31.2091 27.7909 33 30 33Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFEightKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFFiveKeyIcon],svg[icon-park-f-five-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M34 16H26V22.9185C26 22.9185 27.8333 21.5 30.5 21.5C33.1667 21.5 34 23.6585 34 27C34 30.3415 32.5 32 29.5556 32C26.8889 32 26 30.315 26 28.6365"></svg:path><svg:path stroke="#fff" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFFiveKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFFourKeyIcon],svg[icon-park-f-four-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M32.7325 32V16L26 26.3974V28.0159H35"></svg:path><svg:path stroke="#fff" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFFourKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFNKeyIcon],svg[icon-park-f-n-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M26 17V32"></svg:path><svg:path stroke="#fff" d="M26 23C26 20.6214 27.6 19 30 19C32.4 19 34 20.5273 34 23C34 24.6484 34 28.707 34 32"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFNKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFNineKeyIcon],svg[icon-park-f-nine-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M30 24C32.2091 24 34 22.2091 34 20C34 17.7909 32.2091 16 30 16C27.7909 16 26 17.7909 26 20C26 22.2091 27.7909 24 30 24Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M26 29.1237C26.6179 30.8107 28.1078 32 29.8476 32C32.1409 32 34 30.549 34 28V20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFNineKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFOneKeyIcon],svg[icon-park-f-one-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M27 21L32.0001 16L32 32"></svg:path><svg:path stroke="#fff" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFOneKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFSevenKeyIcon],svg[icon-park-f-seven-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M26 16H34L28 32"></svg:path><svg:path stroke="#fff" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFSevenKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFSixKeyIcon],svg[icon-park-f-six-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M30 32C32.2091 32 34 30.2091 34 28C34 25.7909 32.2091 24 30 24C27.7909 24 26 25.7909 26 28C26 30.2091 27.7909 32 30 32Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34 18.8763C33.3821 17.1893 31.8922 16 30.1524 16C27.8591 16 26 17.451 26 20V28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFSixKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFThreeKeyIcon],svg[icon-park-f-three-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M27 16H34L29.1 23.2C31.9 23.2 34 25 34 28C34 31 32 32 30.5 32C28.8333 32 27.5 31 27 30"></svg:path><svg:path stroke="#fff" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFThreeKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFTwoKeyIcon],svg[icon-park-f-two-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M26 20C26 17.4667 28.1334 16 30 16C31.8667 16 34 17.4667 34 20C34 24.56 26 27.9466 26 32H34"></svg:path><svg:path stroke="#fff" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFTwoKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFZeroKeyIcon],svg[icon-park-f-zero-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="8" height="16" x="26" y="16" fill="#2F88FF" stroke="#fff" rx="4"></svg:rect><svg:path stroke="#fff" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFZeroKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFacePowderIcon],svg[icon-park-face-powder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:ellipse cx="24" cy="30" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="16" ry="6"></svg:ellipse><svg:ellipse cx="24" cy="14" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" rx="16" ry="10"></svg:ellipse><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 10L18 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 14L25 17"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 38C40 41.3137 32.8366 44 24 44C15.1634 44 8 41.3137 8 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 38V30"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 38V30"></svg:path><svg:ellipse cx="24" cy="30" fill="#fff" rx="7" ry="2"></svg:ellipse></svg:g>`,
})
export class IconParkFacePowderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFaceRecognitionIcon],svg[icon-park-face-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 4.99976H41C42.1046 4.99976 43 5.89519 43 6.99976V14.9998M43 32.9998V40.9998C43 42.1043 42.1046 42.9998 41 42.9998H33M15 42.9998H7C5.89543 42.9998 5 42.1043 5 40.9998V32.9998M5 14.9998V6.99976C5 5.89519 5.89543 4.99976 7 4.99976H15"></svg:path><svg:path d="M24 38C30.6274 38 36 31.732 36 24C36 16.268 30.6274 10 24 10C17.3726 10 12 16.268 12 24C12 31.732 17.3726 38 24 38Z"></svg:path><svg:path stroke-linecap="round" d="M6 24H42"></svg:path><svg:path stroke-linecap="round" d="M20.0693 30.1057C21.3372 31.0429 22.6473 31.5115 23.9996 31.5115C25.3519 31.5115 26.698 31.0429 28.0378 30.1057"></svg:path></svg:g>`,
})
export class IconParkFaceRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFaceWithSmilingOpenEyesIcon],svg[icon-park-face-with-smiling-open-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path><svg:circle cx="17" cy="20" r="4" fill="#43CCF8" stroke="#fff" stroke-linecap="round"></svg:circle><svg:circle cx="31" cy="20" r="4" fill="#43CCF8" stroke="#fff" stroke-linecap="round"></svg:circle></svg:g>`,
})
export class IconParkFaceWithSmilingOpenEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFaceWithoutMouthIcon],svg[icon-park-face-without-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path></svg:g>`,
})
export class IconParkFaceWithoutMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFacebookIcon],svg[icon-park-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="3.8" d="M36 12.5997H31.2489H29.9871C28.9009 12.5997 28.0203 13.4803 28.0203 14.5666V21.4674H36L34.8313 29.0643H28.0203V43H19.2451V29.0643H12V21.4674H19.1515L19.2451 14.2563L19.2318 12.9471C19.1879 8.60218 22.6745 5.04434 27.0194 5.0004C27.0459 5.00013 27.0724 5 27.0989 5H36V12.5997Z"></svg:path>`,
})
export class IconParkFacebookIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFacebookOneIcon],svg[icon-park-facebook-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4.11111 46C2.94518 46 2 45.0496 2 43.8773V4.12274C2 2.95038 2.94518 2 4.11111 2H43.8889C45.0548 2 46 2.95038 46 4.12274V43.8773C46 45.0496 45.0548 46 43.8889 46C42.4815 46 29.2222 46 4.11111 46Z"></svg:path><svg:path fill="#000" d="M38.6617 17.8869H34.3076H33.7932C32.4431 17.8869 31.3487 18.9814 31.3487 20.3314V25.2217H38.6617L37.5907 32.5525H31.3487V46H23.3067V32.5525H16.667V25.2217H23.2209L23.3067 18.2633L23.2828 15.7694C23.249 12.2477 26.0764 9.36542 29.5981 9.33159C29.6185 9.3314 29.6389 9.3313 29.6593 9.3313H38.6617V17.8869Z"></svg:path></svg:g>`,
})
export class IconParkFacebookOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFacetimeIcon],svg[icon-park-facetime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M24 19H12V29H24V19Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M35 18L30 22V26L35 30V18Z"></svg:path></svg:g>`,
})
export class IconParkFacetimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFaceuIcon],svg[icon-park-faceu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 12V16C29.6667 16.8333 36 19 36 26C36 33 30 36 24 36C18 36 12 33 12 26C12 18 21.6667 13.1667 27 12Z"></svg:path><svg:ellipse cx="29" cy="26" fill="#fff" rx="3" ry="4"></svg:ellipse><svg:ellipse cx="19" cy="26" fill="#fff" rx="3" ry="4"></svg:ellipse></svg:g>`,
})
export class IconParkFaceuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFacialCleanserIcon],svg[icon-park-facial-cleanser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15 34V44H33V34"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M31.935 4.00006L15.9855 4.00006C9.04201 4.00006 8.51255 8.60541 9.24893 11.0399L14.9891 34H32.9312C32.9312 34 37.5745 16.1827 38.8188 11.0399C39.4079 8.60542 38.9097 3.98264 31.935 4.00006Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20.4876 19.0909C22.1273 17.1458 23.3912 14.4588 24.0744 13C25.27 14.4588 27.8662 18.1184 28.686 20.0634C29.7109 22.4947 27.1488 25.4122 24.0744 25.4122C21 25.4122 18.4379 21.5222 20.4876 19.0909Z"></svg:path></svg:g>`,
})
export class IconParkFacialCleanserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFacialMaskIcon],svg[icon-park-facial-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M10 15.1142C10 13.8463 10.797 12.7154 11.991 12.2889L22.991 8.36036C23.6435 8.12733 24.3565 8.12733 25.009 8.36036L36.009 12.2889C37.203 12.7154 38 13.8463 38 15.1142V31.6041C38 32.4892 37.6101 33.3292 36.9082 33.8682C34.4672 35.7425 28.4345 40 24 40C19.5655 40 13.5328 35.7425 11.0918 33.8682C10.3899 33.3292 10 32.4892 10 31.6041V15.1142Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10 28C6.68629 28 4 24.8896 4 21.0526C4 17.2157 6.68629 16 10 16"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 28C41.3137 28 44 24.8896 44 21.0526C44 17.2157 41.3137 16 38 16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 25L24 21L32 25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 31L24 29L29 31"></svg:path></svg:g>`,
})
export class IconParkFacialMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFactoryBuildingIcon],svg[icon-park-factory-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 44V4H12V20L28 12V20L44 12V44H4Z"></svg:path><svg:rect width="8" height="8" x="12" y="28" fill="#43CCF8" stroke="#fff"></svg:rect><svg:rect width="8" height="8" x="28" y="28" fill="#43CCF8" stroke="#fff"></svg:rect></svg:g>`,
})
export class IconParkFactoryBuildingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFailPictureIcon],svg[icon-park-fail-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="34" height="34" x="7" y="7" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M41 26L34.3877 21.0408C33.5914 20.4436 32.4772 20.5228 31.7735 21.2265L27 26"></svg:path><svg:path stroke-linecap="round" d="M7 28L18 18"></svg:path><svg:path stroke-linecap="round" d="M6 6L42 42"></svg:path></svg:g>`,
})
export class IconParkFailPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFamilyIcon],svg[icon-park-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M10 19C10 19 4.85714 21 4 28"></svg:path><svg:path d="M38 19C38 19 43.1429 21 44 28"></svg:path><svg:path d="M18 19C18 19 22.8 20.1667 24 26"></svg:path><svg:path d="M30 19C30 19 25.2 20.1667 24 26"></svg:path><svg:path d="M20 34C20 34 15.8 34.75 14 40"></svg:path><svg:path d="M28 34C28 34 32.2 34.75 34 40"></svg:path><svg:circle cx="24" cy="31" r="5" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="14" r="6" fill="#2F88FF" stroke-linejoin="round"></svg:circle><svg:circle cx="14" cy="14" r="6" fill="#2F88FF" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class IconParkFamilyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFanIcon],svg[icon-park-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23.9995 31V36M14.0134 27.7553L4.02734 24.5106C5.39776 20.2929 8.06824 16.6173 11.656 14.0106C15.2438 11.404 19.5648 10 23.9995 10C28.4343 10 32.7552 11.404 36.343 14.0106C39.9308 16.6173 42.6013 20.2929 43.9717 24.5106L33.9856 27.7553H14.0134ZM14.0134 27.7553C14.6986 25.6465 16.0339 23.8087 17.8278 22.5053L14.0134 27.7553ZM14.0134 27.7553L23.9995 31L14.0134 27.7553ZM17.8278 22.5053C19.6217 21.202 21.7821 20.5 23.9995 20.5L17.8278 22.5053ZM17.8278 22.5053L23.9995 31L17.8278 22.5053ZM23.9995 20.5C26.2169 20.5 28.3774 21.202 30.1713 22.5053L23.9995 20.5ZM23.9995 20.5V31V20.5ZM30.1713 22.5053C31.9652 23.8087 33.3004 25.6465 33.9856 27.7553L30.1713 22.5053ZM30.1713 22.5053L23.9995 31L30.1713 22.5053ZM33.9856 27.7553L23.9995 31L33.9856 27.7553Z"></svg:path>`,
})
export class IconParkFanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFanqiexiaoshuoIcon],svg[icon-park-fanqiexiaoshuo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M35.4286 4.88435C39.6463 4.88435 43.0816 8.31973 43.0816 12.5374V35.4286C43.0816 39.6463 39.6463 43.0816 35.4286 43.0816H12.5374C8.31973 43.0816 4.88435 39.6463 4.88435 35.4286V12.5374C4.88435 8.31973 8.31973 4.88435 12.5374 4.88435H35.4286ZM35.4286 4H12.5374C7.80952 4 4 7.80952 4 12.5374V35.4286C4 40.1565 7.80952 43.966 12.5374 43.966H35.4286C40.1565 43.966 43.966 40.1565 43.966 35.4286V12.5374C44 7.80952 40.1565 4 35.4286 4Z"></svg:path><svg:path d="M29.1016 4V12.4014L32.3329 10.5646L35.5641 12.4014V4H29.1016Z"></svg:path><svg:path d="M24.034 18.2858C15.8367 18.2858 8.55782 21.8572 4 27.3674V35.4286C4 40.1565 7.80952 43.966 12.5374 43.966H35.4286C40.1565 43.966 43.966 40.1565 43.966 35.4286V27.2654C39.4082 21.7892 32.1973 18.2858 24.034 18.2858ZM14.6122 37.6735C13.1156 37.6735 12.4014 37.1293 12.4014 36.415C12.4014 35.7007 13.0816 35.1225 14.5782 35.1225C16.0748 35.1225 17.8776 36.381 17.8776 36.381C17.8776 36.381 16.1088 37.6735 14.6122 37.6735ZM15.8367 31.2109C14.7483 30.1565 14.6463 29.2722 15.1565 28.762C15.6667 28.2518 16.551 28.3198 17.6395 29.4082C18.7279 30.4626 19.068 32.6055 19.068 32.6055C19.068 32.6055 16.8912 32.2654 15.8367 31.2109ZM24.034 30.4626C24.034 30.4626 22.7415 28.7279 22.7075 27.1973C22.7075 25.7007 23.2517 24.9864 23.966 24.9864C24.6803 24.9864 25.2585 25.6667 25.2585 27.1633C25.2925 28.6939 24.034 30.4626 24.034 30.4626ZM30.3605 29.3742C31.449 28.3198 32.3333 28.2518 32.8435 28.7279C33.3537 29.2381 33.2517 30.1225 32.1633 31.1769C31.0748 32.2313 28.932 32.5375 28.932 32.5375C28.932 32.5375 29.2721 30.4286 30.3605 29.3742ZM33.3537 37.6735C31.8571 37.6735 30.0884 36.347 30.0884 36.347C30.0884 36.347 31.8571 35.0885 33.3878 35.0885C34.8844 35.0885 35.5986 35.7007 35.5646 36.381C35.5646 37.1293 34.8503 37.6735 33.3537 37.6735Z"></svg:path>`,
})
export class IconParkFanqiexiaoshuoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFeelgoodIcon],svg[icon-park-feelgood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M23.1421 15.8579L11.8284 27.1716C10.2663 28.7337 10.2663 31.2663 11.8284 32.8284L21.7279 42.7279C23.29 44.29 25.8227 44.29 27.3848 42.7279L37.2843 32.8284C38.8464 31.2663 38.8464 28.7337 37.2843 27.1716L25.9706 15.8579C25.1895 15.0768 23.9232 15.0768 23.1421 15.8579Z"></svg:path><svg:path d="M25 13.8394C25 13.8394 29.5543 8.73027 31.3728 6.57393C33.1913 4.41758 35.1405 4.69583 36.7652 6.09795C38.3899 7.50007 38.4332 9.71417 36.7652 11.775C35.0972 13.8358 30.5565 19.0005 30.5565 19.0005"></svg:path><svg:path d="M25 13.8389C25 13.8389 20.4457 8.72979 18.6272 6.57344C16.8087 4.4171 14.8595 4.69534 13.2348 6.09746C11.6101 7.49958 11.5668 9.71368 13.2348 11.7745C14.9028 13.8353 19.4435 19 19.4435 19"></svg:path></svg:g>`,
})
export class IconParkFeelgoodIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFeelgoodOneIcon],svg[icon-park-feelgood-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 6H4V36H25L35 41V36H44V6Z"></svg:path><svg:path stroke="#fff" d="M13 23C13 23 17 27 24 27C31 27 35 23 35 23"></svg:path></svg:g>`,
})
export class IconParkFeelgoodOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFeiyuIcon],svg[icon-park-feiyu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M7.85351 24.1205C5.1939 20.9018 3.17643 17.1239 2 12.9881C4.36896 16.1997 7.24581 19.0065 10.5116 21.2881C15.9334 16.1977 23.2025 13.0832 31.1931 13.0804C36.4326 13.0812 41.0896 15.5486 44.0949 19.392C44.2644 19.5941 44.4213 19.8051 44.5661 20.0249C45.2379 21.0356 45.6676 22.2224 45.773 23.5033C44.5317 22.9554 43.2592 22.4769 41.956 22.0709C38.8614 21.1052 35.5909 20.5459 32.2034 20.4539C31.8466 20.4438 31.5265 20.4395 31.2054 20.4395C27.4561 20.4395 23.8449 21.0101 20.4456 22.0702C18.8497 22.5677 17.3004 23.173 15.8067 23.8782C15.6385 23.9571 15.4715 24.0378 15.3043 24.1195C15.4723 24.2012 15.6418 24.2829 15.8117 24.3628C17.3032 25.0657 18.8505 25.671 20.4445 26.1675C23.8449 27.2276 27.4584 27.7992 31.2034 27.7992C31.5255 27.7992 31.8466 27.7952 32.1669 27.7861C35.5916 27.693 38.8624 27.1338 41.957 26.1701C43.2599 25.7631 44.5307 25.2855 45.7669 24.7397C45.6676 26.0145 45.2379 27.2003 44.5691 28.208C44.419 28.4351 44.2561 28.6527 44.0829 28.8611C41.0795 32.6984 36.4266 35.1605 31.2034 35.1618C23.2015 35.1588 15.9304 32.0433 10.5083 26.9516C7.24455 29.2321 4.36896 32.039 2.00126 35.2496C3.17845 31.115 5.1949 27.3379 7.85351 24.1205Z"></svg:path><svg:path d="M32.5975 27.3822C34.1271 26.9177 35.2552 26.1393 35.2552 24.2439C35.2552 22.3474 34.1271 21.2815 32.5966 20.8161C32.5857 20.813 32.5746 20.8096 32.5647 20.806C32.2804 20.723 31.983 20.6785 31.6768 20.6785C31.9919 20.6785 32.3061 20.6833 32.6195 20.6935C32.6205 20.6935 32.6444 20.6935 32.6563 20.6946C35.9813 20.797 39.1412 21.4318 42.229 22.4235C43.5081 22.875 44.5609 23.204 45.7733 23.8094C45.7733 24.0471 45.7733 23.9754 45.7733 24.206C45.7733 24.4382 45.7733 24.3131 45.7456 24.547C44.4223 25.1005 43.5088 25.4218 42.2299 25.8744C39.156 26.7389 35.982 27.4019 32.6583 27.504C32.6454 27.5055 32.6323 27.5055 32.6205 27.5055C32.3061 27.5156 31.9909 27.5201 31.6748 27.5201C31.9821 27.5201 32.2804 27.4753 32.5657 27.3926C32.5758 27.3893 32.5867 27.3859 32.5975 27.3822Z"></svg:path></svg:g>`,
})
export class IconParkFeiyuIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFemaleIcon],svg[icon-park-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M38.3785 9.85132C32.9112 4.38398 24.0468 4.38398 18.5795 9.85132C15.8458 12.585 14.479 16.1679 14.479 19.7508C14.479 23.3337 15.8458 26.9166 18.5795 29.6503C24.0468 35.1176 32.9112 35.1176 38.3785 29.6503C43.8458 24.183 43.8458 15.3187 38.3785 9.85132Z"></svg:path><svg:path stroke-linecap="round" d="M18.4642 29.5353L5.73633 42.2632"></svg:path><svg:path stroke-linecap="round" d="M19.1714 41.5562L6.44346 28.8282"></svg:path></svg:g>`,
})
export class IconParkFemaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFenceOneIcon],svg[icon-park-fence-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 4V44"></svg:path><svg:path d="M44 12L4 12"></svg:path><svg:path d="M40 44L8 12"></svg:path><svg:path d="M8 44L40 12"></svg:path><svg:path d="M27 44L8 25"></svg:path><svg:path d="M40 31L21 12"></svg:path><svg:path d="M8 31L26 12"></svg:path><svg:path d="M21 44L40 25"></svg:path><svg:path d="M44 44L4 44"></svg:path><svg:path d="M40 4V44"></svg:path></svg:g>`,
})
export class IconParkFenceOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFenceTwoIcon],svg[icon-park-fence-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 4V44"></svg:path><svg:path d="M16 9L16 37"></svg:path><svg:path d="M24 9L24 37"></svg:path><svg:path d="M32 9L32 37"></svg:path><svg:path d="M42 44L6 44"></svg:path><svg:path d="M42 37L6 37"></svg:path><svg:path d="M39 4V44"></svg:path><svg:path d="M42 9L6 9"></svg:path></svg:g>`,
})
export class IconParkFenceTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFerrisWheelIcon],svg[icon-park-ferris-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M9 44L24 22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M39 44L24 22"></svg:path><svg:path stroke="#000" stroke-width="4" d="M9.13217 23.9998C9.045 23.3455 9 22.6779 9 21.9998C9 19.8665 9.44534 17.8372 10.2481 15.9998C10.3285 15.8158 10.4125 15.6337 10.5 15.4536"></svg:path><svg:path stroke="#000" stroke-width="4" d="M11.1562 29.7529C13.2883 33.2772 16.83 35.8533 20.9998 36.6997"></svg:path><svg:path stroke="#000" stroke-width="4" d="M27 36.7001C31.2141 35.8446 34.7866 33.2226 36.911 29.6406"></svg:path><svg:path stroke="#000" stroke-width="4" d="M38.8678 23.9998C38.955 23.3455 39 22.6779 39 21.9998C39 19.6528 38.461 17.4318 37.5 15.4536"></svg:path><svg:path stroke="#000" stroke-width="4" d="M27 7.30029C29.6553 7.83929 32.0559 9.0797 34 10.8197"></svg:path><svg:path stroke="#000" stroke-width="4" d="M21.0001 7.30029C18.3448 7.83929 15.9442 9.0797 14.0001 10.8197C13.7899 11.0079 13.585 11.2019 13.3857 11.4014"></svg:path><svg:circle cx="10" cy="27" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="24" cy="37" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="24" cy="7" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="12" cy="13" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="36" cy="13" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="38" cy="27" r="3" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="24" cy="22" r="4" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 44L14 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 44L42 44"></svg:path></svg:g>`,
})
export class IconParkFerrisWheelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFigmaIcon],svg[icon-park-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" d="M18 18C18 16.3431 19.3431 15 21 15H24V21H21C19.3431 21 18 19.6569 18 18Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M18 24C18 22.3431 19.3431 21 21 21H24V27H21C19.3431 27 18 25.6569 18 24Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M18 30C18 28.3431 19.3431 27 21 27H24V30C24 31.6569 22.6569 33 21 33C19.3431 33 18 31.6569 18 30Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 15H27C28.6569 15 30 16.3431 30 18C30 19.6569 28.6569 21 27 21H24V15Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 24C24 22.3431 25.3431 21 27 21C28.6569 21 30 22.3431 30 24C30 25.6569 28.6569 27 27 27C25.3431 27 24 25.6569 24 24Z"></svg:path></svg:g>`,
})
export class IconParkFigmaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFigmaComponentIcon],svg[icon-park-figma-component-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 12L24 5L31 12L24 19L17 12Z"></svg:path><svg:path d="M17 36L24 29L31 36L24 43L17 36Z"></svg:path><svg:path d="M29 24L36 17L43 24L36 31L29 24Z"></svg:path><svg:path d="M5 24L12 17L19 24L12 31L5 24Z"></svg:path></svg:g>`,
})
export class IconParkFigmaComponentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFigmaFlattenSelectionIcon],svg[icon-park-figma-flatten-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 18L24 26L16 18"></svg:path><svg:path d="M36 42H12"></svg:path><svg:path d="M42 34H6"></svg:path><svg:path d="M24 6V26"></svg:path></svg:g>`,
})
export class IconParkFigmaFlattenSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFigmaMaskIcon],svg[icon-park-figma-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M14 41.3244C19.978 37.8663 24 31.4028 24 24C24 16.5972 19.978 10.1338 14 6.67566C8.02199 10.1338 4 16.5972 4 24C4 31.4028 8.02199 37.8663 14 41.3244Z"></svg:path></svg:g>`,
})
export class IconParkFigmaMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFigmaResetInstanceIcon],svg[icon-park-figma-reset-instance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24L24 4L4 24L24 44L35 33"></svg:path><svg:path d="M22 24.0002C22 24.0002 34.5 23.5002 39.5 28.5002C44.5 33.5002 39 44.0002 39 44.0002"></svg:path><svg:path d="M26 20L22 24L26 28"></svg:path></svg:g>`,
})
export class IconParkFigmaResetInstanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileAdditionIcon],svg[icon-park-file-addition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M24 21V35"></svg:path><svg:path stroke="#fff" d="M17 28H24L31 28"></svg:path></svg:g>`,
})
export class IconParkFileAdditionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileAdditionOneIcon],svg[icon-park-file-addition-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M33 29V43"></svg:path><svg:path d="M26 36H33H40"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileAdditionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileCabinetIcon],svg[icon-park-file-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M42 4H6V14H42V4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M42 19H6V29H42V19Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M42 34H6V44H42V34Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 9H27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 24H27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 39H27"></svg:path></svg:g>`,
})
export class IconParkFileCabinetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileCodeIcon],svg[icon-park-file-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M27 24L32 29L27 34"></svg:path><svg:path stroke="#fff" d="M21 24L16 29L21 34"></svg:path></svg:g>`,
})
export class IconParkFileCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileCodeOneIcon],svg[icon-park-file-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M37 31L42 36L37 41"></svg:path><svg:path d="M31 31L26 36L31 41"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileCollectionIcon],svg[icon-park-file-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M20.85 21C18.7237 21 17 23.0086 17 25.4864C17 29.9727 21.55 34.0513 24 35C26.45 34.0513 31 29.9727 31 25.4864C31 23.0086 29.2763 21 27.15 21C25.8479 21 24.6967 21.7533 24 22.9062C23.3033 21.7533 22.1521 21 20.85 21Z"></svg:path></svg:g>`,
})
export class IconParkFileCollectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileCollectionOneIcon],svg[icon-park-file-collection-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path fill="#2F88FF" d="M30.85 30C28.7237 30 27 32.0086 27 34.4864C27 38.9727 31.55 43.0513 34 44C36.45 43.0513 41 38.9727 41 34.4864C41 32.0086 39.2763 30 37.15 30C35.8479 30 34.6967 30.7533 34 31.9062C33.3033 30.7533 32.1521 30 30.85 30Z"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileCollectionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileConversionIcon],svg[icon-park-file-conversion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M17 25L31 25"></svg:path><svg:path stroke="#fff" d="M17 31L31 31"></svg:path><svg:path stroke="#fff" d="M31 25L26 20"></svg:path><svg:path stroke="#fff" d="M22 36L17 31"></svg:path></svg:g>`,
})
export class IconParkFileConversionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileConversionOneIcon],svg[icon-park-file-conversion-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M27 33H41"></svg:path><svg:path d="M27 39H41"></svg:path><svg:path d="M41 33L36 28"></svg:path><svg:path d="M32 44L27 39"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileConversionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileDateIcon],svg[icon-park-file-date-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 4L40 14"></svg:path><svg:circle cx="24" cy="28" r="8" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M23 25V29H27"></svg:path></svg:g>`,
})
export class IconParkFileDateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileDateOneIcon],svg[icon-park-file-date-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:circle cx="34" cy="36" r="8" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M33 33V37H37"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileDateOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileDisplayIcon],svg[icon-park-file-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 4L40 14"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 34C28.9706 34 33 28 33 28C33 28 28.9706 22 24 22C19.0294 22 15 28 15 28C15 28 19.0294 34 24 34Z"></svg:path><svg:path fill="#fff" d="M24 30C25.1046 30 26 29.1046 26 28C26 26.8954 25.1046 26 24 26C22.8954 26 22 26.8954 22 28C22 29.1046 22.8954 30 24 30Z"></svg:path></svg:g>`,
})
export class IconParkFileDisplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileDisplayOneIcon],svg[icon-park-file-display-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M33 41C37.9706 41 42 35 42 35C42 35 37.9706 29 33 29C28.0294 29 24 35 24 35C24 35 28.0294 41 33 41Z"></svg:path><svg:path fill="#fff" d="M33 37C34.1046 37 35 36.1046 35 35C35 33.8954 34.1046 33 33 33C31.8954 33 31 33.8954 31 35C31 36.1046 31.8954 37 33 37Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileDisplayOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileDocIcon],svg[icon-park-file-doc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 38V44H38V38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20V14L30 4H10V20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 4V14H38"></svg:path><svg:path stroke-linecap="round" d="M16 12H20"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M10 25V33"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 25H12C14.2091 25 16 26.7909 16 29V29C16 31.2091 14.2091 33 12 33H10"></svg:path><svg:ellipse cx="24" cy="29" stroke-linecap="round" stroke-linejoin="round" rx="3" ry="4"></svg:ellipse><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 25H36C33.7909 25 32 26.7909 32 29V29C32 31.2091 33.7909 33 36 33H38"></svg:path></svg:g>`,
})
export class IconParkFileDocIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileEditingIcon],svg[icon-park-file-editing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M21 35L31 25L27 21L17 31V35H21Z"></svg:path></svg:g>`,
})
export class IconParkFileEditingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileEditingOneIcon],svg[icon-park-file-editing-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path fill="#2F88FF" d="M32 44L42 34L38 30L28 40V44H32Z"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileEditingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileExcelIcon],svg[icon-park-file-excel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 18H19V34H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 26H19"></svg:path></svg:g>`,
})
export class IconParkFileExcelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileFailedIcon],svg[icon-park-file-failed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M18 22L30 34"></svg:path><svg:path stroke="#fff" d="M30 22L18 34"></svg:path></svg:g>`,
})
export class IconParkFileFailedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileFailedOneIcon],svg[icon-park-file-failed-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M29 30L41 42"></svg:path><svg:path d="M41 30L29 42"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileFailedOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileFocusIcon],svg[icon-park-file-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 19L26.5234 24.5269L32.5595 25.2188L28.0829 29.3266L29.2901 35.2812L24 32.293L18.7099 35.2812L19.9171 29.3266L15.4405 25.2188L21.4766 24.5269L24 19Z"></svg:path></svg:g>`,
})
export class IconParkFileFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileFocusOneIcon],svg[icon-park-file-focus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path fill="#2F88FF" d="M34 27L36.5234 32.5269L42.5595 33.2188L38.0829 37.3266L39.2901 43.2812L34 40.293L28.7099 43.2812L29.9171 37.3266L25.4405 33.2188L31.4766 32.5269L34 27Z"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileFocusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileGifIcon],svg[icon-park-file-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31.0083 18H17V34H31.0083V27.0083H26"></svg:path></svg:g>`,
})
export class IconParkFileGifIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileHashIcon],svg[icon-park-file-hash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M17 25H24L31 25"></svg:path><svg:path stroke="#fff" d="M17 31H24L31 31"></svg:path><svg:path stroke="#fff" d="M21 21V35"></svg:path><svg:path stroke="#fff" d="M27 21V35"></svg:path></svg:g>`,
})
export class IconParkFileHashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileHashOneIcon],svg[icon-park-file-hash-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M26 32H33L40 32"></svg:path><svg:path d="M26 38H33H40"></svg:path><svg:path d="M30 28V42"></svg:path><svg:path d="M36 28V42"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileHashOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileHidingIcon],svg[icon-park-file-hiding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M16 23C16.2821 23.9145 16.7095 24.7628 17.2546 25.5166C18.7827 27.63 21.2351 29 24 29C26.7649 29 29.2173 27.63 30.7454 25.5166C31.2905 24.7628 31.7179 23.9145 32 23"></svg:path><svg:path stroke="#fff" d="M21.5215 29.0684L20.4862 32.9321"></svg:path><svg:path stroke="#fff" d="M26.4863 29.0684L27.5216 32.9321"></svg:path><svg:path stroke="#fff" d="M30.3535 27.3536L33.1819 30.182"></svg:path><svg:path stroke="#fff" d="M15 30.0103L17.8285 27.1819"></svg:path></svg:g>`,
})
export class IconParkFileHidingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileHidingOneIcon],svg[icon-park-file-hiding-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M25 30C25.2821 30.9145 25.7095 31.7628 26.2546 32.5166C27.7827 34.63 30.2351 36 33 36C35.7649 36 38.2173 34.63 39.7454 32.5166C40.2905 31.7628 40.7179 30.9145 41 30"></svg:path><svg:path d="M30.5215 36.0684L29.4862 39.9321"></svg:path><svg:path d="M35.4863 36.0684L36.5216 39.9321"></svg:path><svg:path d="M39.3535 34.3536L42.1819 37.182"></svg:path><svg:path d="M24 37.0103L26.8285 34.1819"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileHidingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileJpgIcon],svg[icon-park-file-jpg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M31 18H21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M26 18V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 30C18 32.2091 19.7909 34 22 34C24.2091 34 26 32.2091 26 30"></svg:path></svg:g>`,
})
export class IconParkFileJpgIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileLockIcon],svg[icon-park-file-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:rect width="14" height="8" x="17" y="27" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" d="M28 27V23C28 21.3431 27 19 24 19C21 19 20 21.3431 20 23V27"></svg:path></svg:g>`,
})
export class IconParkFileLockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileLockOneIcon],svg[icon-park-file-lock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:rect width="14" height="8" x="28" y="34" fill="#2F88FF"></svg:rect><svg:path d="M38 34V31C38 29.3431 36.6569 28 35 28C33.3431 28 32 29.3431 32 31V34"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileLockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileMusicIcon],svg[icon-park-file-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M31 20L25 22.9688V33.5"></svg:path><svg:circle cx="21" cy="33" r="4" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkFileMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileMusicOneIcon],svg[icon-park-file-music-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M40 29L36 29.9688V40.5"></svg:path><svg:circle cx="32" cy="40" r="4" fill="#2F88FF"></svg:circle><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileMusicOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFilePdfIcon],svg[icon-park-file-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M18 18H30V25.9917L18.0083 26L18 18Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18V34"></svg:path></svg:g>`,
})
export class IconParkFilePdfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFilePdfOneIcon],svg[icon-park-file-pdf-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 38V44H38V38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20V14L30 4H10V20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 4V14H38"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M21 25V33"></svg:path><svg:path stroke-linecap="round" d="M10 25V33"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 33V25H37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 30H37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 25H13.5C14.8807 25 16 26.1193 16 27.5V27.5C16 28.8807 14.8807 30 13.5 30H10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 25H23C25.2091 25 27 26.7909 27 29V29C27 31.2091 25.2091 33 23 33H21"></svg:path><svg:path stroke-linecap="round" d="M16 12H20"></svg:path></svg:g>`,
})
export class IconParkFilePdfOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFilePptIcon],svg[icon-park-file-ppt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M25 41H38V34"></svg:path><svg:path stroke-linejoin="round" d="M25 7H38V14"></svg:path><svg:path stroke-linejoin="round" d="M25 34.2432V44L10 38.6187V34"></svg:path><svg:path stroke-linejoin="round" d="M25 13.973V4L10 9.38125V13.973"></svg:path><svg:rect width="40" height="20" x="4" y="14" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M10 19V29"></svg:path><svg:path d="M21 19V29"></svg:path><svg:path stroke-linejoin="round" d="M35 20V28"></svg:path><svg:path stroke-linejoin="round" d="M32 20H35H38"></svg:path><svg:path stroke-linejoin="round" d="M10 19H13C14.6569 19 16 20.3431 16 22V22C16 23.6569 14.6569 25 13 25H10"></svg:path><svg:path stroke-linejoin="round" d="M21 19H24C25.6569 19 27 20.3431 27 22V22C27 23.6569 25.6569 25 24 25H21"></svg:path></svg:g>`,
})
export class IconParkFilePptIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileProtectionIcon],svg[icon-park-file-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M17 23.2C17 22.1333 24 20 24 20C24 20 31 22.1333 31 23.2C31 31.7333 24 36 24 36C24 36 17 31.7333 17 23.2Z"></svg:path></svg:g>`,
})
export class IconParkFileProtectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileProtectionOneIcon],svg[icon-park-file-protection-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path fill="#2F88FF" d="M27 31.2C27 30.1333 34 28 34 28C34 28 41 30.1333 41 31.2C41 39.7333 34 44 34 44C34 44 27 39.7333 27 31.2Z"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileProtectionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileQualityIcon],svg[icon-park-file-quality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M19.2 21H28.8L32 25.1176L24 35L16 25.1176L19.2 21Z"></svg:path></svg:g>`,
})
export class IconParkFileQualityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileQualityOneIcon],svg[icon-park-file-quality-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path fill="#2F88FF" d="M28.2 30H37.8L41 34.1176L33 44L25 34.1176L28.2 30Z"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileQualityOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileQuestionIcon],svg[icon-park-file-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 31V28C26.2091 28 28 25.9853 28 23.5C28 21.0147 26.2091 19 24 19C21.7909 19 20 21.0147 20 23.5"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 39C25.3807 39 26.5 37.8807 26.5 36.5C26.5 35.1193 25.3807 34 24 34C22.6193 34 21.5 35.1193 21.5 36.5C21.5 37.8807 22.6193 39 24 39Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkFileQuestionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileRemovalIcon],svg[icon-park-file-removal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M17 28H24L31 28"></svg:path></svg:g>`,
})
export class IconParkFileRemovalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileRemovalOneIcon],svg[icon-park-file-removal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M26 35H33H40"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileRemovalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSearchIcon],svg[icon-park-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 20.8421V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H26"></svg:path><svg:path d="M14 17H20"></svg:path><svg:path d="M28 17H34"></svg:path><svg:path d="M14 28H20"></svg:path><svg:path d="M14 34H20"></svg:path><svg:path d="M17 20L17 14"></svg:path><svg:path d="M37.728 37.728L41.9707 41.9707"></svg:path><svg:circle cx="33.485" cy="33.485" r="6" fill="#2F88FF" stroke-linejoin="round" transform="rotate(45 33.485 33.485)"></svg:circle></svg:g>`,
})
export class IconParkFileSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSearchOneIcon],svg[icon-park-file-search-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:circle cx="31" cy="34" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 38L41 42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileSearchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSearchTwoIcon],svg[icon-park-file-search-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 4L40 14"></svg:path><svg:circle cx="22" cy="26" r="6" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M27 30L32 34"></svg:path></svg:g>`,
})
export class IconParkFileSearchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSettingsIcon],svg[icon-park-file-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 4L40 14"></svg:path><svg:circle cx="24" cy="27" r="5" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 19V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 32V35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29.8281 21L27.7068 23.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19.8281 31L17.7068 33.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M18 21L20.1213 23.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 31L30.1213 33.1213"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 27H17.5H19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29 27H30.5H32"></svg:path></svg:g>`,
})
export class IconParkFileSettingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSettingsOneIcon],svg[icon-park-file-settings-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:circle cx="34" cy="36" r="5" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 28V31"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 41V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39.8281 30L37.7068 32.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29.8281 40L27.7068 42.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 30L30.1213 32.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 40L40.1213 42.1213"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26 36H27.5H29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 36H40.5H42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileSettingsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileStaffIcon],svg[icon-park-file-staff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:circle cx="24" cy="24" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" d="M32 36C32 31.5817 28.4183 28 24 28C19.5817 28 16 31.5817 16 36"></svg:path></svg:g>`,
})
export class IconParkFileStaffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileStaffOneIcon],svg[icon-park-file-staff-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20"></svg:path><svg:circle cx="34" cy="32" r="4" fill="#2F88FF"></svg:circle><svg:path d="M42 44C42 39.5817 38.4183 36 34 36C29.5817 36 26 39.5817 26 44"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileStaffOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSuccessIcon],svg[icon-park-file-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M17 29L23 34L32 23"></svg:path></svg:g>`,
})
export class IconParkFileSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSuccessOneIcon],svg[icon-park-file-success-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M26 38L32 43L41 32"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileSuccessOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileTextIcon],svg[icon-park-file-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M24 22V36"></svg:path><svg:path stroke="#fff" d="M18 22H24L30 22"></svg:path></svg:g>`,
})
export class IconParkFileTextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileTextOneIcon],svg[icon-park-file-text-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M34 30V44"></svg:path><svg:path d="M28 30H34L40 30"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileTextOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileTipsIcon],svg[icon-park-file-tips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 19V29"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M24 39C25.3807 39 26.5 37.8807 26.5 36.5C26.5 35.1193 25.3807 34 24 34C22.6193 34 21.5 35.1193 21.5 36.5C21.5 37.8807 22.6193 39 24 39Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkFileTipsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileTipsOneIcon],svg[icon-park-file-tips-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 26V36"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M33 46C34.3807 46 35.5 44.8807 35.5 43.5C35.5 42.1193 34.3807 41 33 41C31.6193 41 30.5 42.1193 30.5 43.5C30.5 44.8807 31.6193 46 33 46Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileTipsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileTxtIcon],svg[icon-park-file-txt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18.0083H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.0083 18.0083V34"></svg:path></svg:g>`,
})
export class IconParkFileTxtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileTxtOneIcon],svg[icon-park-file-txt-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M10 38V44H38V38"></svg:path><svg:path stroke-linejoin="round" d="M38 20V14L30 4H10V20"></svg:path><svg:path stroke-linejoin="round" d="M28 4V14H38"></svg:path><svg:path d="M16 12H20"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linejoin="round" d="M21 25L27 33"></svg:path><svg:path stroke-linejoin="round" d="M27 25L21 33"></svg:path><svg:path stroke-linejoin="round" d="M13 25V33"></svg:path><svg:path stroke-linejoin="round" d="M10 25H13H16"></svg:path><svg:path stroke-linejoin="round" d="M35 25V33"></svg:path><svg:path stroke-linejoin="round" d="M32 25H35H38"></svg:path></svg:g>`,
})
export class IconParkFileTxtOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileWithdrawalIcon],svg[icon-park-file-withdrawal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44H38C39.1046 44 40 43.1046 40 42V14H30V4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:path stroke="#000" d="M30 4L40 14"></svg:path><svg:path stroke="#fff" d="M21 25L16 30L21 35"></svg:path><svg:path stroke="#fff" d="M16 30H32V22"></svg:path></svg:g>`,
})
export class IconParkFileWithdrawalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileWithdrawalOneIcon],svg[icon-park-file-withdrawal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path d="M31 33L26 38L31 43"></svg:path><svg:path d="M26 38H42V30"></svg:path><svg:path d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileWithdrawalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileWordIcon],svg[icon-park-file-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 4H30L40 14V42C40 43.1046 39.1046 44 38 44H10C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16.0083 20L19.0083 34L24.0083 24L29.0083 34L32.0083 20"></svg:path></svg:g>`,
})
export class IconParkFileWordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFileZipIcon],svg[icon-park-file-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 38V44H38V38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20V14L30 4H10V20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28 4V14H38"></svg:path><svg:path stroke-linecap="round" d="M16 12H20"></svg:path><svg:rect width="40" height="18" x="4" y="20" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 25H17L11 33H17"></svg:path><svg:path stroke-linecap="round" d="M24 25V33"></svg:path><svg:path stroke-linecap="round" d="M31 25V33"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 25H34.5C35.8807 25 37 26.1193 37 27.5V27.5C37 28.8807 35.8807 30 34.5 30H31"></svg:path></svg:g>`,
})
export class IconParkFileZipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFillIcon],svg[icon-park-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:rect width="20" height="20" x="14" y="14" fill="#43CCF8" stroke="#fff"></svg:rect><svg:path stroke="#fff" d="M34 23L23 34"></svg:path><svg:path stroke="#fff" d="M25 14L14 25"></svg:path><svg:path stroke="#fff" d="M34 14L14 34"></svg:path><svg:path stroke="#fff" d="M14 22V34H26"></svg:path><svg:path stroke="#fff" d="M22 14H34V26"></svg:path></svg:g>`,
})
export class IconParkFillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFilmIcon],svg[icon-park-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M16 6V42"></svg:path><svg:path stroke-linecap="round" d="M32 6V42"></svg:path><svg:path stroke-linecap="round" d="M6 15H16"></svg:path><svg:path stroke-linecap="round" d="M32 15H42"></svg:path><svg:path stroke-linecap="round" d="M6 33H16"></svg:path><svg:path stroke-linecap="round" d="M6 24H42"></svg:path><svg:path stroke-linecap="round" d="M32 33H42"></svg:path></svg:g>`,
})
export class IconParkFilmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFilterIcon],svg[icon-park-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M6 9L20.4 25.8178V38.4444L27.6 42V25.8178L42 9H6Z"></svg:path>`,
})
export class IconParkFilterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFilterOneIcon],svg[icon-park-filter-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M24.489 8.3975C24.2457 8.35865 24.2742 8 24.5205 8H39.5C39.7761 8 40 8.22386 40 8.5V23.4795C40 23.7258 39.6414 23.7543 39.6025 23.511L37.6355 11.1943C37.5673 10.7674 37.2326 10.4327 36.8057 10.3645L24.489 8.3975Z"></svg:path><svg:path d="M6.489 26.3975C6.24574 26.3586 6.2742 26 6.52054 26H21.5C21.7761 26 22 26.2239 22 26.5V41.4795C22 41.7258 21.6414 41.7543 21.6025 41.511L19.6355 29.1943C19.5673 28.7674 19.2326 28.4327 18.8057 28.3645L6.489 26.3975Z"></svg:path><svg:path d="M15.489 17.3975C15.2457 17.3586 15.2742 17 15.5205 17H30.5C30.7761 17 31 17.2239 31 17.5V32.4795C31 32.7258 30.6414 32.7543 30.6025 32.511L28.7498 20.9098C28.6134 20.0561 27.9439 19.3866 27.0902 19.2502L15.489 17.3975Z"></svg:path></svg:g>`,
})
export class IconParkFilterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFinanceIcon],svg[icon-park-finance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 22H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 28H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.0083 22V34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 15L24 21L18 15"></svg:path></svg:g>`,
})
export class IconParkFinanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFinancingIcon],svg[icon-park-financing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:rect width="10" height="10" x="24" y="16.929" fill="#43CCF8" stroke="#fff" rx="2" transform="rotate(45 24 16.929)"></svg:rect></svg:g>`,
})
export class IconParkFinancingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFinancingOneIcon],svg[icon-park-financing-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15.0002 14.3848C19.1256 16.0002 24.0085 16.0002 24.0085 16.0002C24.0085 16.0002 28.8802 16.0002 33.0002 14.3848C37.502 19.6386 40.6566 26.5646 42.7299 32.3977C44.8289 38.3029 40.2008 44.0002 33.9336 44.0002H14.0199C7.76837 44.0002 3.14607 38.329 5.23448 32.4366C7.29812 26.614 10.455 19.6856 15.0002 14.3848Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 28H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 34H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.0088 28V38"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30 22L24 28L18 22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 16C31.1797 16 37 13.3137 37 10C37 6.68629 31.1797 4 24 4C16.8203 4 11 6.68629 11 10C11 13.3137 16.8203 16 24 16Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkFinancingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFinancingTwoIcon],svg[icon-park-financing-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" d="M12 9.92704V7C12 5.34315 13.3431 4 15 4H41C42.6569 4 44 5.34315 44 7V33C44 34.6569 42.6569 36 41 36H38.0174"></svg:path><svg:rect width="34" height="34" x="4" y="10" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M15 17L21 23L27 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 25H28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 31H28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 25V36"></svg:path></svg:g>`,
})
export class IconParkFinancingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFindIcon],svg[icon-park-find-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M4 7H44"></svg:path><svg:path stroke-linecap="round" d="M4 23H15"></svg:path><svg:path stroke-linecap="round" d="M4 39H15"></svg:path><svg:path fill="#2F88FF" d="M31.5 34C36.1944 34 40 30.1944 40 25.5C40 20.8056 36.1944 17 31.5 17C26.8056 17 23 20.8056 23 25.5C23 30.1944 26.8056 34 31.5 34Z"></svg:path><svg:path stroke-linecap="round" d="M37 32L44 39.0505"></svg:path></svg:g>`,
})
export class IconParkFindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFindOneIcon],svg[icon-park-find-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.8 14C29.4333 14 34 18.4772 34 24C34 29.5228 29.4333 34 23.8 34C21.1876 34 18.8046 33.0372 17 31.4537"></svg:path><svg:path d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C18.5856 44 13.6737 41.8485 10.0726 38.3537C6.32733 34.719 4 29.6313 4 24C4 18.6326 6.11433 13.759 9.55556 10.1667"></svg:path><svg:path d="M9.55566 10.167L24.0001 24.0003L10.0727 38.3539"></svg:path></svg:g>`,
})
export class IconParkFindOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFingernailIcon],svg[icon-park-fingernail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"></svg:path><svg:path d="M38 9.47214L38.343 10.5279H39.4531L38.555 11.1803L38.8981 12.2361L38 11.5836L37.1019 12.2361L37.445 11.1803L36.5469 10.5279H37.657L38 9.47214Z"></svg:path><svg:rect width="12" height="24" x="18" y="13" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 25C16 25 13 27.1176 13 31C13 34.8824 13 38.8072 13 40.7842"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 25C32 25 35 27.1176 35 31C35 34.8824 35 38.5229 35 40.5"></svg:path></svg:g>`,
})
export class IconParkFingernailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFingerprintIcon],svg[icon-park-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 43V22C18 18.6863 20.6863 16 24 16C27.3137 16 30 18.6863 30 22V43"></svg:path><svg:path d="M12 40V22C12 15.3726 17.3726 10 24 10C30.6274 10 36 15.3726 36 22V40"></svg:path><svg:path d="M6 35V22C6 12.0589 14.0589 4 24 4C33.9411 4 42 12.0589 42 22V35"></svg:path><svg:path d="M24 44V31"></svg:path><svg:path d="M24 24.625V21.875"></svg:path></svg:g>`,
})
export class IconParkFingerprintIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFingerprintThreeIcon],svg[icon-park-fingerprint-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42.4307 12.0391C37.702 7.38257 31.1539 4.5 23.9184 4.5C16.7254 4.5 10.2118 7.34876 5.48975 11.9571"></svg:path><svg:path d="M6.6665 29.4745V29.4168C6.6665 19.8439 14.4269 12.0835 23.9998 12.0835"></svg:path><svg:path d="M31.1694 13.6309C37.1649 16.3582 41.3333 22.4006 41.3333 29.4166V29.4296"></svg:path><svg:path d="M14.25 36.9998V29.4165C14.25 24.0317 18.6152 19.6665 24 19.6665C29.3848 19.6665 33.75 24.0317 33.75 29.4165V36.9998"></svg:path><svg:path d="M17.5259 43.5C19.4888 43.0154 20.7498 40.9456 20.7498 39.196C20.7498 37.3354 20.7498 34.4367 20.7498 30.5C20.7498 28.7051 22.2049 27.25 23.9998 27.25C25.7947 27.25 27.2498 28.7051 27.2498 30.5V39.196"></svg:path></svg:g>`,
})
export class IconParkFingerprintThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFingerprintTwoIcon],svg[icon-park-fingerprint-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 44V22C19 18.6863 21.6863 16 25 16C28.3137 16 31 18.6863 31 22V44"></svg:path><svg:path d="M13 44V22C13 15.3726 18.3726 10 25 10C31.6274 10 37 15.3726 37 22V44"></svg:path><svg:path d="M7 44V22C7 12.0589 15.0589 4 25 4C34.9411 4 43 12.0589 43 22V44"></svg:path><svg:path d="M25 44V22"></svg:path></svg:g>`,
})
export class IconParkFingerprintTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFireIcon],svg[icon-park-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C32.2347 44 38.9998 37.4742 38.9998 29.0981C38.9998 27.0418 38.8953 24.8375 37.7555 21.4116C36.6157 17.9858 36.3861 17.5436 35.1809 15.4279C34.666 19.7454 31.911 21.5448 31.2111 22.0826C31.2111 21.5231 29.5445 15.3359 27.0176 11.6339C24.537 8 21.1634 5.61592 19.1853 4C19.1853 7.06977 18.3219 11.6339 17.0854 13.9594C15.8489 16.2849 15.6167 16.3696 14.0722 18.1002C12.5278 19.8308 11.8189 20.3653 10.5274 22.4651C9.23596 24.565 9 27.3618 9 29.4181C9 37.7942 15.7653 44 24 44Z"></svg:path>`,
})
export class IconParkFireIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFireExtinguisherIcon],svg[icon-park-fire-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 20C6 15.5817 9.58172 12 14 12C18.4183 12 22 15.5817 22 20V44H6V20Z"></svg:path><svg:path fill="#2F88FF" d="M30 44H42L36 26L30 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 26L30 44H42L36 26ZM36 26V24C36 16.4575 36 12.6863 33.6569 10.3431C31.3137 8 27.5425 8 20 8H18M10 8H6"></svg:path><svg:circle cx="14" cy="8" r="4" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkFireExtinguisherIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFireExtinguisherOneIcon],svg[icon-park-fire-extinguisher-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16 18C16 13.5817 19.5817 10 24 10C28.4183 10 32 13.5817 32 18V42C32 43.1046 31.1046 44 30 44H18C16.8954 44 16 43.1046 16 42V18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 24V34"></svg:path><svg:rect width="9" height="4" x="20" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:path fill="#2F88FF" stroke="#000" d="M29 5L38 4V10L29 9V5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 6.99981C17 6.99981 12.5 6.49981 10 8.99981C7.58343 11.4164 8.00004 13.9998 8.00004 17.9998"></svg:path></svg:g>`,
})
export class IconParkFireExtinguisherOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFireTwoIcon],svg[icon-park-fire-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 21C36 28.1797 30.1797 34 23 34C15.8203 34 10 28.1797 10 21C10 13.8203 15 11 17 4C25 7.49989 25 18 25 18C25 18 27 12 33 10.5C33.5 16 36 17.9342 36 21Z"></svg:path><svg:path d="M7 36L39 44"></svg:path><svg:path d="M7 44L39 36"></svg:path></svg:g>`,
})
export class IconParkFireTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFireworksIcon],svg[icon-park-fireworks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M6 41.9999L14.6741 17.2639L31 34.0384L6 41.9999Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 19L28 14C30.6667 11.3333 31 9 29 7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 25L34 20C37.3333 16.6667 40.6667 16.6667 44 20"></svg:path><svg:path fill="#000" d="M20 7C21.1046 7 22 6.10457 22 5C22 3.89543 21.1046 3 20 3C18.8954 3 18 3.89543 18 5C18 6.10457 18.8954 7 20 7Z"></svg:path><svg:path fill="#000" d="M42 6C43.1046 6 44 5.10457 44 4C44 2.89543 43.1046 2 42 2C40.8954 2 40 2.89543 40 4C40 5.10457 40.8954 6 42 6Z"></svg:path><svg:path fill="#000" d="M42 29C43.1046 29 44 28.1046 44 27C44 25.8954 43.1046 25 42 25C40.8954 25 40 25.8954 40 27C40 28.1046 40.8954 29 42 29Z"></svg:path><svg:path fill="#000" d="M39 38C40.1046 38 41 37.1046 41 36C41 34.8954 40.1046 34 39 34C37.8954 34 37 34.8954 37 36C37 37.1046 37.8954 38 39 38Z"></svg:path></svg:g>`,
})
export class IconParkFireworksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFirstIcon],svg[icon-park-first-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.6795 20.0369C23.5651 19.7383 20.2653 18.6795 15.1701 22.0923C12.139 24.1225 10.8642 27.2398 10.4343 29.5299C10.2299 30.6186 11.1544 31.4966 12.2543 31.3663C13.0503 31.2719 13.9337 31.1249 14.6021 30.8988C16.5725 30.2323 16.3138 28.9685 17.319 27.4461C18.3242 25.9236 20.8518 25.4064 22.9314 26.5609C25.0111 27.7154 25.6776 29.6857 25.2297 31.3575C24.7818 33.0292 23.7766 34.5516 21.249 35.0688C18.7214 35.5861 17.9055 34.173 15.2687 32.8692C13.8946 32.1897 12.1023 33.0708 11.0197 33.7677C10.4067 34.1622 10.1527 34.9075 10.41 35.5895C10.5847 36.0527 10.8251 36.5946 11.1386 37.1378C11.9545 38.5509 15.5165 43.0888 20.1238 43.7261C24.731 44.3633 29.5276 42.0651 32.2445 38.6123C34.9614 35.1596 35.0414 30.403 33.1511 26.313"></svg:path><svg:path d="M33.0455 26.4197L28.2769 4.15576C28.1699 3.65645 27.701 3.31051 27.2073 3.44095C26.0457 3.74787 24.5712 4.51818 24.5018 6.31019C24.4124 8.61605 24.8663 26.3489 25.4729 29.567"></svg:path></svg:g>`,
})
export class IconParkFirstIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFirstAidKitIcon],svg[icon-park-first-aid-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 20V38C8 39.1046 8.89543 40 10 40H38C39.1046 40 40 39.1046 40 38V20"></svg:path><svg:path fill="#2F88FF" d="M5 14H43V20H5V14Z"></svg:path><svg:path fill="#2F88FF" d="M31 8H17V14H31V8Z"></svg:path><svg:path stroke-linecap="round" d="M20 30L28 30"></svg:path><svg:path stroke-linecap="round" d="M24 26V34"></svg:path></svg:g>`,
})
export class IconParkFirstAidKitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFishIcon],svg[icon-park-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15.3808 32.844C9.72351 31.4294 0.531437 34.9652 9.72365 38.5006C13.2595 47.6933 16.7947 38.5006 15.3808 32.844Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.4823 10.2475C17.5789 10.2344 11.2504 11.7843 10.4533 13.9754C9.87553 15.5637 12.878 17.6767 16.7036 18.7932"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37.9776 25.7423C37.9907 30.6457 36.4407 36.9742 34.2497 37.7713C32.6614 38.3491 30.5484 35.3466 29.4319 31.521"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37.9993 25.7646C44.6625 19.6999 40.1249 8.0912 40.1249 8.0912C40.1249 8.0912 28.1079 4.55954 22.4511 10.2164C16.7942 15.8732 15.38 32.8438 15.38 32.8438C15.38 32.8438 31.3362 31.8294 37.9993 25.7646Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38.0075 25.7731C38.0075 25.7731 31.29 24.7125 27.4009 20.8234C23.5118 16.9343 22.4512 10.2168 22.4512 10.2168"></svg:path><svg:circle cx="33.766" cy="14.459" r="2" fill="#fff" transform="rotate(45 33.766 14.46)"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40.9998 20.9447C40.4591 22.7043 39.5215 24.3792 37.9993 25.7647C36.3518 27.2642 34.1363 28.4549 31.7344 29.3979"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27.0002 7.65642C25.3026 8.14453 23.7176 8.9504 22.4513 10.2167C21.2665 11.4015 20.2678 13.0826 19.4293 15"></svg:path></svg:g>`,
})
export class IconParkFishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFishOneIcon],svg[icon-park-fish-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 24C42.7848 28.6903 36.038 32.4667 33 32.9997C30.5696 38.9691 24.038 39.5327 21 38.9997L25 32.9997C20.5443 32.5733 15.0253 27.9544 13 26.0001C10.3861 28.8504 6.19409 31.0805 4 31.9688C7.64557 24.2939 5.51899 17.3097 4 15.0001C6.83544 15.0001 11.1435 18.2235 13 20.0001C15.0253 17.8681 21.962 14.8879 25 13.9997L21 8.99979C28.6962 8.147 32.1561 11.868 33 14C40.6962 15.7056 43.6624 21.6904 44 24Z"></svg:path><svg:circle cx="36" cy="24" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkFishOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFishingIcon],svg[icon-park-fishing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.9871 34.5522L12 29L39 29C40.6569 29 42 30.3431 42 32C42 33.6569 40.6569 35 39 35L22.5639 35C22.0069 35 21.461 34.845 20.9871 34.5522Z"></svg:path><svg:path stroke-miterlimit="2" d="M30 11C31.1046 11 32 10.1046 32 9C32 7.89543 31.1046 7 30 7C28.8954 7 28 7.89543 28 9C28 10.1046 28.8954 11 30 11Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M34.0001 32C38 29 36.5001 22.4336 35.5001 20.5C34.5001 18.5664 32.5494 16 32.5494 16C32.5494 16 31.5001 16 30.5001 17C27.8215 19.6786 26.0001 23 23.5001 23C21.0001 23 17.5001 21 17.5001 21"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.0005 15C16.4037 10.5042 13.6152 8.43381 8.0005 8.06204C6.89835 7.98906 6.0001 8.89545 6.0001 10L6.0001 28"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 43C11 43 9.9375 41 13 41C16.0625 41 15 43 18.5 43C22 43 21 41 24.5 41C28 41 27.4375 43 30.5 43C33.5625 43 32 41 35.5 41C39 41 38.0625 43 42 43"></svg:path></svg:g>`,
})
export class IconParkFishingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFistIcon],svg[icon-park-fist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 41C28.1693 44.1747 21.5 43.5 18 42C14.5 40.5 6 35.5 6 27C6 22.7533 11.7711 20.6707 13.51 20.1396C13.7979 20.0517 14 19.7888 14 19.4878V12C14 10.067 15.567 8.5 17.5 8.5C19.433 8.5 21 10.067 21 12V9.49999C21 7.567 22.567 6 24.5 6C26.433 6 28 7.567 28 9.49999V12C28 10.067 29.567 8.5 31.5 8.5C33.433 8.5 35 10.067 35 12L35 16.4931C35.0037 14.5633 36.5693 13 38.5 13C40.433 13 42 14.5631 42 16.4961V30C42 34 38.13 38.7513 34 41Z"></svg:path>`,
})
export class IconParkFistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFitnessIcon],svg[icon-park-fitness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 25.9999C40.5466 24.992 36 21 28 26.9997C25.8971 25.8237 22 23 16 27.9997C15.299 25.1441 15.1588 18.6438 16 12.9997C16.3505 12.1598 17.7943 11.5652 22 15.9998L27 10.9999C26.6495 8.81612 24 6 16 6C13 6 10.2617 8.56527 9 12.9998C7.42284 17.5353 5 27.9998 5 33.9998C4.99999 35.8476 7.5 39.9999 17 39.9999C19 39.9999 24.8502 40.225 32 36.9998L38 41.9997"></svg:path>`,
})
export class IconParkFitnessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFiveIcon],svg[icon-park-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 40L6 25.5L4.04155 15.7078C4.01392 15.5696 4 15.429 4 15.2881V15.1272C4 13.757 5.78238 13.226 6.53225 14.3729C6.5876 14.4575 6.63666 14.5461 6.67904 14.6379L10.6107 23.1566C10.8302 23.6321 11.3794 23.8577 11.8698 23.6738L12 23.625L10.1291 9.94424C10.0464 9.33927 10.2055 8.72606 10.5718 8.23757C11.0844 7.55408 12.0541 7.41556 12.7376 7.92818L12.8707 8.02802C13.2808 8.33563 13.5896 8.75888 13.7573 9.24336L17.869 21.1217C17.9474 21.3481 18.1607 21.5 18.4003 21.5C18.7251 21.5 18.9823 21.2257 18.9614 20.9016L18.0785 7.21729C18.0286 6.44352 18.3143 5.68573 18.8625 5.13746C19.5101 4.4899 20.541 4.43281 21.2561 5.00489L21.5966 5.27727C22.178 5.74239 22.5657 6.40711 22.6842 7.14218L24.9229 21.0222C24.9673 21.2976 25.2051 21.5 25.484 21.5C25.7767 21.5 26.0215 21.2777 26.0497 20.9864L27.3779 7.26175C27.456 6.45511 27.857 5.71437 28.4899 5.20811L28.6963 5.04293C29.4385 4.44919 30.5084 4.50844 31.1805 5.18051C31.7052 5.70522 32 6.41688 32 7.15893V26.6683C32 27.4595 32.8752 27.9373 33.5408 27.5095L38.0118 24.6353C38.657 24.2205 39.4078 24 40.1748 24H42.2433C43.0185 24 43.4989 24.8439 43.1031 25.5105L34.5 40C34.5 40 31 44 23 44C15 44 11.6667 41.3333 11 40Z"></svg:path>`,
})
export class IconParkFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFiveEllipsesIcon],svg[icon-park-five-ellipses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M41 33C42.6569 33 44 29.4183 44 25C44 20.5817 42.6569 17 41 17C39.3431 17 38 20.5817 38 25C38 29.4183 39.3431 33 41 33Z"></svg:path><svg:path d="M7 33C8.65685 33 10 29.4183 10 25C10 20.5817 8.65685 17 7 17C5.34315 17 4 20.5817 4 25C4 29.4183 5.34315 33 7 33Z"></svg:path><svg:path d="M24 44C27.3137 44 30 35.0457 30 24C30 12.9543 27.3137 4 24 4C20.6863 4 18 12.9543 18 24C18 35.0457 20.6863 44 24 44Z"></svg:path><svg:path d="M34 40C36.2091 40 38 32.8366 38 24C38 15.1634 36.2091 8 34 8C31.7909 8 30 15.1634 30 24C30 32.8366 31.7909 40 34 40Z"></svg:path><svg:path d="M14 40C16.2091 40 18 32.8366 18 24C18 15.1634 16.2091 8 14 8C11.7909 8 10 15.1634 10 24C10 32.8366 11.7909 40 14 40Z"></svg:path></svg:g>`,
})
export class IconParkFiveEllipsesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFiveFiveIcon],svg[icon-park-five-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14.2227 37.471L6.54955 26.9844C5.13168 25.0466 5.51902 22.3315 7.42219 20.8675C9.18287 19.5132 11.675 19.675 13.2457 21.2457L16 24V7.25C16 5.45507 17.4551 4 19.25 4C21.0449 4 22.5 5.45508 22.5 7.25V6.25C22.5 4.45507 23.9551 3 25.75 3C27.5449 3 29 4.45508 29 6.25V7.25C29 5.45507 30.4551 4 32.25 4C34.0449 4 35.5 5.45508 35.5 7.25V11.25C35.5 9.45507 36.9551 8 38.75 8C40.5449 8 42 9.45507 42 11.25V30.3077C42 33.0387 41.1618 35.7251 39.6196 37.979C37.0557 41.7263 32.7851 44 28.2446 44H27.0901C22.0053 44 17.2254 41.5747 14.2227 37.471Z"></svg:path>`,
})
export class IconParkFiveFiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFiveKeyIcon],svg[icon-park-five-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M29 14.0093H20V21.0341C20 21 22 20 25 20C28 20 29 22.0339 29 26C29 29.9661 28 33 24 33C21 33 20 31 20 29.0078"></svg:path></svg:g>`,
})
export class IconParkFiveKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFiveStarBadgeIcon],svg[icon-park-five-star-badge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.1033 20.817C23.4701 20.0737 24.5299 20.0737 24.8967 20.817L27.8818 26.8654C28.0275 27.1606 28.3091 27.3652 28.6348 27.4125L35.3096 28.3824C36.1298 28.5016 36.4574 29.5096 35.8638 30.0881L31.0339 34.7962C30.7982 35.0259 30.6906 35.3569 30.7463 35.6813L31.8865 42.3292C32.0266 43.1461 31.1691 43.769 30.4355 43.3834L24.4653 40.2446C24.174 40.0915 23.826 40.0915 23.5347 40.2446L17.5645 43.3834C16.8309 43.769 15.9734 43.1461 16.1135 42.3292L17.2537 35.6813C17.3094 35.3569 17.2018 35.0259 16.9661 34.7962L12.1362 30.0881C11.5426 29.5096 11.8702 28.5016 12.6904 28.3824L19.3652 27.4125C19.6909 27.3652 19.9725 27.1606 20.1182 26.8654L23.1033 20.817Z"></svg:path><svg:path d="M36 4H12V14L24 19L36 14V4Z"></svg:path></svg:g>`,
})
export class IconParkFiveStarBadgeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlagIcon],svg[icon-park-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 44H12H16"></svg:path><svg:path d="M12 44V4"></svg:path><svg:path fill="#2F88FF" d="M40 6H12V22H40L36 14L40 6Z"></svg:path></svg:g>`,
})
export class IconParkFlagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlashPaymentIcon],svg[icon-park-flash-payment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M31 4H16L10 27H18L14 44L40 16H28L31 4Z"></svg:path><svg:path stroke="#fff" d="M21 11L19 19"></svg:path></svg:g>`,
})
export class IconParkFlashPaymentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlashlampIcon],svg[icon-park-flashlamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M23 14L18 24H30L25 34"></svg:path></svg:g>`,
})
export class IconParkFlashlampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlashlightIcon],svg[icon-park-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M17 22.1961C17 22.0726 16.9419 21.9564 16.8431 21.8824C11.9058 18.1793 9 12.3678 9 6.19608L9 4H39V6.19608C39 12.3678 36.0942 18.1793 31.1569 21.8824C31.0581 21.9564 31 22.0726 31 22.1961V44H17V22.1961Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 11H10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 28.0083V32.0083"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M17 22V22C11.9639 18.2229 9 12.2951 9 6L9 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M39 4V6C39 12.2951 36.0361 18.2229 31 22V22"></svg:path></svg:g>`,
})
export class IconParkFlashlightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlaskIcon],svg[icon-park-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M37.845 35.0219L44 41.3158V44H4V41.3158L10.1184 35.0594L37.845 35.0219Z"></svg:path><svg:path stroke-linecap="round" d="M10.104 35.0743L18.0002 27V6H30.0002V27L37.8727 35.0502"></svg:path><svg:path stroke-linecap="round" d="M11 35H37"></svg:path><svg:path stroke-linecap="round" d="M30 14H24"></svg:path><svg:path stroke-linecap="round" d="M30 20H24"></svg:path></svg:g>`,
})
export class IconParkFlaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlightAirflowIcon],svg[icon-park-flight-airflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M6 25C6 15.0589 14.2827 7 24.5 7C34.7173 7 43 15.0589 43 25"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M10.0002 35L8.93573 30C8.93573 30 5.501 33.1087 4.35611 35.7391C3.21121 38.3696 4.85151 41 8 41H44.0002L36.0002 35.0217L10.0002 35Z"></svg:path><svg:path stroke-linejoin="round" d="M29 35L18 25L15 25L17 35"></svg:path></svg:g>`,
})
export class IconParkFlightAirflowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkFlightSafetyIcon],svg[icon-park-flight-safety-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M38.986 23C38.6727 33.709 33.1203 39.5222 25.002 43C20.6093 41.1187 16.9675 38.5534 14.5 34.899"></svg:path><svg:path d="M39 19V10.2556L25.0067 5L11 10.2556V22.0285C11 24.6162 11.2942 26.9289 11.8477 29"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M9.26785 30.632C7.89464 29.3755 6.27838 26.7552 5.68058 26.6051C5.68058 26.6051 3.88327 31.0394 4.00049 34C4.11771 36.9606 6.89668 38.6351 9.82462 37.2204C12.7526 35.8057 44 20 44 20L35 18L9.26785 30.632Z"></svg:path><svg:path stroke-linecap="round" d="M27.9998 21L18.9991 18L16.9992 19L19.9992 25"></svg:path></svg:g>`,
})
export class IconParkFlightSafetyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
