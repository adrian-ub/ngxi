import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRightIcon],svg[icon-park-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 12L31 24L19 36"></svg:path>`,
})
export class IconParkRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightAngleIcon],svg[icon-park-right-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 9.1153C8 7.29468 10.2347 6.42094 11.4696 7.75874L40.9016 39.6434C42.0842 40.9246 41.1755 43 39.432 43H10C8.89543 43 8 42.1046 8 41V9.1153Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkRightAngleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightBarIcon],svg[icon-park-right-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M32 6V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M29 42H35"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M29 6H35"></svg:path></svg:g>`,
})
export class IconParkRightBarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightBranchIcon],svg[icon-park-right-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 8.01189C20.5 8.01205 16.0714 7.93823 15 13.0006C13.917 18.1178 9.85714 22.8479 8 24.0001"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 40.0002C20.5 40.0005 16.0714 40.0631 15 35.0007C13.917 29.8835 9.85714 25.1524 8 24.0002"></svg:path><svg:circle cx="8" cy="24" r="4" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 24.0001L22 24.0001"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 24.0006H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 8.00098H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 40.001H42"></svg:path></svg:g>`,
})
export class IconParkRightBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightBranchOneIcon],svg[icon-park-right-branch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 24L22 24"></svg:path><svg:path d="M42 8H30C25.5817 8 22 11.5817 22 16V32C22 36.4183 25.5817 40 30 40H42"></svg:path></svg:g>`,
})
export class IconParkRightBranchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightBranchTwoIcon],svg[icon-park-right-branch-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24H14"></svg:path><svg:path d="M44 8C40.7164 8.46377 35.0448 10.7826 29.2239 16.3478C23.9021 21.4358 17.4328 23.7681 14 24"></svg:path><svg:path d="M14 24C17.2836 24.4638 22.9552 26.7826 28.7761 32.3478C34.0979 37.4358 40.5672 39.7681 44 40"></svg:path></svg:g>`,
})
export class IconParkRightBranchTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightCIcon],svg[icon-park-right-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 33L30 24L21 15"></svg:path></svg:g>`,
})
export class IconParkRightCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightExpandIcon],svg[icon-park-right-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="36" x="14" y="6" fill="#2F88FF" rx="2"></svg:rect><svg:path d="M6 6V42"></svg:path></svg:g>`,
})
export class IconParkRightExpandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightOneIcon],svg[icon-park-right-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M20 12L32 24L20 36V12Z"></svg:path>`,
})
export class IconParkRightOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightRunIcon],svg[icon-park-right-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="18" height="32" x="6" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="18" height="32" x="24" y="11" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M13 17L17 20.7895L13.3333 25"></svg:path><svg:path stroke="#fff" d="M31 23L35 26.7895L31.3333 31"></svg:path></svg:g>`,
})
export class IconParkRightRunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightSmallIcon],svg[icon-park-right-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 24.0083H12"></svg:path><svg:path d="M24 12L36 24L24 36"></svg:path></svg:g>`,
})
export class IconParkRightSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightSmallDownIcon],svg[icon-park-right-small-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32.3535 32.3535L15.3535 15.3535"></svg:path><svg:path d="M32.3535 14.3535V32.3535H14.3535"></svg:path></svg:g>`,
})
export class IconParkRightSmallDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightSmallUpIcon],svg[icon-park-right-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 32L33 15"></svg:path><svg:path d="M15 15H33V33"></svg:path></svg:g>`,
})
export class IconParkRightSmallUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightSquareIcon],svg[icon-park-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M19 14L29 24L19 34"></svg:path></svg:g>`,
})
export class IconParkRightSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightTwoIcon],svg[icon-park-right-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 43L42 24L24 5L24 17L6 17V31H24V43Z"></svg:path>`,
})
export class IconParkRightTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRightUserIcon],svg[icon-park-right-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="#2F88FF"></svg:circle><svg:path d="M42 44C42 34.0589 33.9411 26 24 26C14.0589 26 6 34.0589 6 44"></svg:path><svg:path d="M30 36L22 44L18 40"></svg:path></svg:g>`,
})
export class IconParkRightUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRingIcon],svg[icon-park-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24.0004 11.619C26.0933 11.619 27.7899 9.91347 27.7899 7.80952C27.7899 5.70558 26.0933 4 24.0004 4C21.9075 4 20.2109 5.70558 20.2109 7.80952C20.2109 9.91347 21.9075 11.619 24.0004 11.619Z"></svg:path><svg:path fill="#2F88FF" d="M9.78947 40.1906C11.8823 40.1906 13.5789 38.485 13.5789 36.3811C13.5789 34.2771 11.8823 32.5715 9.78947 32.5715C7.69661 32.5715 6 34.2771 6 36.3811C6 38.485 7.69661 40.1906 9.78947 40.1906Z"></svg:path><svg:path fill="#2F88FF" d="M38.2104 40.1906C40.3032 40.1906 41.9998 38.485 41.9998 36.3811C41.9998 34.2771 40.3032 32.5715 38.2104 32.5715C36.1175 32.5715 34.4209 34.2771 34.4209 36.3811C34.4209 38.485 36.1175 40.1906 38.2104 40.1906Z"></svg:path><svg:path stroke-linecap="round" d="M33.1426 10.3142C38.444 13.4629 41.9999 19.2664 41.9999 25.9048C41.9999 26.4816 41.9731 27.0522 41.9206 27.6152V27.6152"></svg:path><svg:path stroke-linecap="round" d="M31.014 42.575C28.8585 43.4926 26.4883 44.0001 24.0001 44.0001C21.512 44.0001 19.1418 43.4926 16.9863 42.575"></svg:path><svg:path stroke-linecap="round" d="M6.07936 27.6152C6.02685 27.0522 6 26.4816 6 25.9048C6 19.2664 9.5559 13.4629 14.8573 10.3142"></svg:path></svg:g>`,
})
export class IconParkRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRingOneIcon],svg[icon-park-ring-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M23.9996 11.2727C26.008 11.2727 27.636 9.64467 27.636 7.63636C27.636 5.62806 26.008 4 23.9996 4C21.9913 4 20.3633 5.62806 20.3633 7.63636C20.3633 9.64467 21.9913 11.2727 23.9996 11.2727Z"></svg:path><svg:path fill="#2F88FF" d="M23.9996 44C26.008 44 27.636 42.372 27.636 40.3637C27.636 38.3554 26.008 36.7273 23.9996 36.7273C21.9913 36.7273 20.3633 38.3554 20.3633 40.3637C20.3633 42.372 21.9913 44 23.9996 44Z"></svg:path><svg:path fill="#2F88FF" d="M7.63636 27.6363C9.64467 27.6363 11.2727 26.0082 11.2727 23.9999C11.2727 21.9916 9.64467 20.3635 7.63636 20.3635C5.62806 20.3635 4 21.9916 4 23.9999C4 26.0082 5.62806 27.6363 7.63636 27.6363Z"></svg:path><svg:path fill="#2F88FF" d="M40.3639 27.6363C42.3722 27.6363 44.0003 26.0082 44.0003 23.9999C44.0003 21.9916 42.3722 20.3635 40.3639 20.3635C38.3556 20.3635 36.7275 21.9916 36.7275 23.9999C36.7275 26.0082 38.3556 27.6363 40.3639 27.6363Z"></svg:path><svg:path stroke-linecap="round" d="M32.7344 10.1597C34.7921 11.4609 36.5395 13.2084 37.8407 15.266"></svg:path><svg:path stroke-linecap="round" d="M37.8407 32.7339C36.5395 34.7916 34.7921 36.539 32.7344 37.8403"></svg:path><svg:path stroke-linecap="round" d="M15.2665 37.8403C13.2088 36.539 11.4614 34.7916 10.1602 32.7339"></svg:path><svg:path stroke-linecap="round" d="M10.1602 15.266C11.4614 13.2084 13.2088 11.4609 15.2665 10.1597"></svg:path></svg:g>`,
})
export class IconParkRingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRingsIcon],svg[icon-park-rings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" d="M13 43C17.42 43 21 39.42 21 35C21 30.58 17.42 27 13 27C8.58 27 5 30.58 5 35C5 39.42 8.58 43 13 43Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M35 43C39.42 43 43 39.42 43 35C43 30.58 39.42 27 35 27C30.58 27 27 30.58 27 35C27 39.42 30.58 43 35 43Z"></svg:path><svg:path stroke-linecap="round" d="M6 5H42"></svg:path><svg:path stroke-linecap="square" d="M13 27V5"></svg:path><svg:path stroke-linecap="square" d="M35 27V5"></svg:path><svg:path stroke-linecap="round" d="M9 19H17"></svg:path><svg:path stroke-linecap="round" d="M31 19H39"></svg:path></svg:g>`,
})
export class IconParkRingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRippleIcon],svg[icon-park-ripple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 36C4 36 9 33 14 33C21.2976 33 26.7024 39 34 39C39 39 44 36 44 36"></svg:path><svg:path d="M4 24C4 24 9 21 14 21C21.2976 21 26.7024 27 34 27C39 27 44 24 44 24"></svg:path><svg:path d="M4 12C4 12 9 9 14 9C21.2976 9 26.7024 15 34 15C39 15 44 12 44 12"></svg:path></svg:g>`,
})
export class IconParkRippleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoadIcon],svg[icon-park-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11 6L6 42"></svg:path><svg:path d="M37 6L41.9644 41.9552"></svg:path><svg:path d="M24 6V12"></svg:path><svg:path d="M24 35V42"></svg:path><svg:path d="M24 20V27"></svg:path></svg:g>`,
})
export class IconParkRoadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoadConeIcon],svg[icon-park-road-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M27 6H21L19.75 10.5L18.5 15L16 24L13.5 33L12.25 37.5L11 42H37L35.5 36.6L32 24L29.5 15L28.25 10.5L27 6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 42L35.5 36.6L32 24L29.5 15L28.25 10.5L27 6H21L19.75 10.5L18.5 15L16 24L13.5 33L12.25 37.5L11 42M37 42H11H37ZM37 42H6H11H37ZM37 42H42H37Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13.5 33H34.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 24H16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29.5 15H18.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28.25 10.5L35.5 36.6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12.25 37.5L19.75 10.5"></svg:path></svg:g>`,
})
export class IconParkRoadConeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoadOneIcon],svg[icon-park-road-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 6L8 42"></svg:path><svg:path d="M24 6V10"></svg:path><svg:path d="M24 20V28"></svg:path><svg:path d="M24 38V42"></svg:path><svg:path d="M40 6L40 42"></svg:path></svg:g>`,
})
export class IconParkRoadOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoadSignIcon],svg[icon-park-road-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 10V22H38L44 16L38 10H6Z"></svg:path><svg:path stroke-linecap="round" d="M23 22V44"></svg:path><svg:path stroke-linecap="round" d="M23 4V10"></svg:path><svg:path stroke-linecap="round" d="M18 44H28"></svg:path></svg:g>`,
})
export class IconParkRoadSignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoadSignBothIcon],svg[icon-park-road-sign-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 8V16H38L42 12L38 8H10Z"></svg:path><svg:path fill="#2F88FF" d="M38 23V31H10L6 27L10 23H38Z"></svg:path><svg:path stroke-linecap="round" d="M24 31V44"></svg:path><svg:path stroke-linecap="round" d="M24 16V23"></svg:path><svg:path stroke-linecap="round" d="M24 4V8"></svg:path><svg:path stroke-linecap="round" d="M19 44H29"></svg:path></svg:g>`,
})
export class IconParkRoadSignBothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRobotIcon],svg[icon-park-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="30" height="26" x="9" y="17" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 9L28 17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 9L20 17"></svg:path><svg:circle cx="34" cy="7" r="2"></svg:circle><svg:circle cx="14" cy="7" r="2"></svg:circle><svg:rect width="16" height="8" x="16" y="24" fill="#2F88FF" rx="4"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 24H4V34H9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 24H44V34H39"></svg:path></svg:g>`,
})
export class IconParkRobotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRobotOneIcon],svg[icon-park-robot-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="30" height="24" x="9" y="18" fill="#2F88FF" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:circle cx="17" cy="26" r="2" fill="#fff"></svg:circle><svg:circle cx="31" cy="26" r="2" fill="#fff"></svg:circle><svg:path fill="#fff" d="M20 32C18.8954 32 18 32.8954 18 34C18 35.1046 18.8954 36 20 36V32ZM28 36C29.1046 36 30 35.1046 30 34C30 32.8954 29.1046 32 28 32V36ZM20 36H28V32H20V36Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 10V18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 26V34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 26V34"></svg:path><svg:circle cx="24" cy="8" r="2" stroke="#000" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkRobotOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRobotTwoIcon],svg[icon-park-robot-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M5 35C5 33.8954 5.89543 33 7 33H41C42.1046 33 43 33.8954 43 35V42H5V35Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 18L34 18L28 12L34 6L42 6"></svg:path><svg:circle cx="8" cy="12" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 12L28 12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 16L18 33"></svg:path></svg:g>`,
})
export class IconParkRobotTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRockIcon],svg[icon-park-rock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.5 20.4998C22.3462 20.4998 19.1521 20.3312 15.1138 24.9463C12.7115 27.6919 12.2869 31.0329 12.4644 33.3563C12.5487 34.4608 13.6689 35.0696 14.6977 34.659C15.4421 34.3619 16.2574 33.9912 16.8445 33.5998C18.5752 32.446 17.9983 31.2922 18.5752 29.5615C19.1521 27.8308 21.4597 26.677 23.7673 27.2539C26.0748 27.8308 26.957 29.583 27.2286 31.2922C27.5 32.9999 26.5 34.9999 24.3442 35.9074C21.9663 36.9084 20.8828 35.9074 17.9983 35.3305C16.4951 35.0299 14.992 36.3448 14.1267 37.2981C13.6367 37.8379 13.5842 38.6235 14.0092 39.2157C14.2979 39.6179 14.6703 40.0792 15.1138 40.5226C16.2676 41.6764 20.8828 45.1378 25.498 44.5609C30.1131 43.984 34.1514 40.5226 35.8821 36.4843C37.6128 32.446 37 26.9999 33 23.9999"></svg:path><svg:path d="M33.0005 23.9998L23.1283 4.24016C22.8984 3.78013 22.3524 3.56306 21.9065 3.81927C20.8655 4.41745 19.6474 5.54195 20.0432 7.28675C20.5537 9.53717 25.5812 27.0483 27 29.9998"></svg:path><svg:path d="M36 27L35.0522 7.69008C35.0277 7.19096 34.637 6.77864 34.1383 6.81033C32.9368 6.88668 31.3235 7.35813 30.913 9.11686C30.3885 11.3641 30.0139 14.7253 30 18"></svg:path></svg:g>`,
})
export class IconParkRockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRockGestureIcon],svg[icon-park-rock-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 25C24 25 24 8.5 24 7.5C24 6.21875 24.5 4 27 4C29.5 4 30 6.21875 30 7.5C30 8 30 30 30 30C30 30 35.7031 24.2969 37 23C38.2969 21.7031 40.0781 21.0781 41.5 22.5C42.9219 23.9219 43.0938 25.4063 41.5 27C39.9063 28.5937 35 33.5 35 33.5C35 33.5 29.0938 44 26 44C22.9063 44 13 44 13 44C13 44 10 44 8.00002 42C6.00002 40 6.00002 37.5 6.00002 37.5C6.00002 37.5 5.99998 13.5 6.00002 12.7812C6.00005 12.0625 6.50002 10 9.00002 10C11.5 10 12 12 12 12.7812C12 13.5 12 25 12 25"></svg:path><svg:rect width="6" height="12" x="12" y="19" fill="#2F88FF" rx="3"></svg:rect><svg:rect width="6" height="12" x="18" y="19" fill="#2F88FF" rx="3"></svg:rect></svg:g>`,
})
export class IconParkRockGestureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRocketIcon],svg[icon-park-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M18.705 7.89449L24 4L29.295 7.89449C32.8819 10.5327 35 14.7198 35 19.1725V37H13V19.1725C13 14.7198 15.1181 10.5327 18.705 7.89449Z"></svg:path><svg:path stroke-linecap="round" d="M13 17L7 23V31L13 28V17Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M35 17L41 23V31L35 28V17Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M18 39V42"></svg:path><svg:path stroke-linecap="round" d="M24 39V44"></svg:path><svg:path stroke-linecap="round" d="M30 39V42"></svg:path></svg:g>`,
})
export class IconParkRocketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRocketOneIcon],svg[icon-park-rocket-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.906 6.06267L22.3359 5.1094C23.3436 4.4376 24.6564 4.4376 25.6641 5.1094L27.094 6.06267C32.658 9.77199 36 16.0166 36 22.7037V33H12V22.7037C12 16.0166 15.342 9.77199 20.906 6.06267Z"></svg:path><svg:circle cx="24" cy="20" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 22L6 28.2174V33H42V28.2174L36 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 38V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 40V42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 40V42"></svg:path></svg:g>`,
})
export class IconParkRocketOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRockingHorseIcon],svg[icon-park-rocking-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M14 29C14 29 11 24 11 18H27C27 18 27 13.5 30 10C33 6.5 36 5 36 5L44 13.5V18.5L36 16C32 21 34 29 34 29H14Z"></svg:path><svg:path d="M30 29L35 41"></svg:path><svg:path d="M18 29L13 41"></svg:path><svg:path d="M4 37C4 37 10 43 24 43C38 43 44 37 44 37"></svg:path><svg:path d="M11 18C11 15 9 12 4 12"></svg:path></svg:g>`,
})
export class IconParkRockingHorseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRollerskatesIcon],svg[icon-park-rollerskates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke="#000" d="M44 4H28V12H44V4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 12V34C44 35.11 43.11 36 42 36H8C5.79 36 4 34.21 4 32V26C4 21.58 7.58 18 12 18H28V12H44Z"></svg:path><svg:path stroke="#fff" d="M14 24V18"></svg:path><svg:path stroke="#fff" d="M21 24V18"></svg:path><svg:path stroke="#000" d="M23 18L12 18"></svg:path><svg:path stroke="#000" d="M9 44C11.2091 44 13 42.2091 13 40C13 37.7909 11.2091 36 9 36C6.79086 36 5 37.7909 5 40C5 42.2091 6.79086 44 9 44Z"></svg:path><svg:path stroke="#000" d="M19.3301 44C21.5392 44 23.3301 42.2091 23.3301 40C23.3301 37.7909 21.5392 36 19.3301 36C17.1209 36 15.3301 37.7909 15.3301 40C15.3301 42.2091 17.1209 44 19.3301 44Z"></svg:path><svg:path stroke="#000" d="M29.6699 44C31.8791 44 33.6699 42.2091 33.6699 40C33.6699 37.7909 31.8791 36 29.6699 36C27.4608 36 25.6699 37.7909 25.6699 40C25.6699 42.2091 27.4608 44 29.6699 44Z"></svg:path><svg:path stroke="#000" d="M40 44C42.2091 44 44 42.2091 44 40C44 37.7909 42.2091 36 40 36C37.7909 36 36 37.7909 36 40C36 42.2091 37.7909 44 40 44Z"></svg:path></svg:g>`,
})
export class IconParkRollerskatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRomperIcon],svg[icon-park-romper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6.57241 19.5747L4.40745 12.3582C4.16338 11.5446 4.4545 10.6619 5.17189 10.2071C8.05736 8.37793 14.6413 5 24 5C33.3427 5 39.7999 8.36639 42.7589 10.1977C43.5067 10.6605 43.8274 11.5754 43.5747 12.4177L41.4276 19.5747C41.1738 20.4207 40.3952 21 39.5119 21H36C34.8954 21 34 21.8911 34 22.9957V33.0019C34 34.1065 33.0949 35.0132 32.0273 35.2966C30.7283 35.6415 29.0752 36.3873 28 38C26 41 26 44 26 44H22C22 44 22 41 20 38C18.9248 36.3873 17.2717 35.6415 15.9727 35.2966C14.9051 35.0132 14 34.1065 14 33.0019V22.9957C14 21.8911 13.1046 21 12 21H8.48806C7.60484 21 6.8262 20.4207 6.57241 19.5747Z"></svg:path><svg:path stroke="#fff" d="M29.811 5.5C29.9344 5.97943 30 6.48205 30 7C30 10.3137 27.3137 13 24 13C20.6863 13 18 10.3137 18 7C18 6.48205 18.0656 5.97943 18.189 5.5"></svg:path><svg:path stroke="#000" d="M13.5 6.49375C16.4326 5.63028 19.9575 5 24 5C28.0425 5 31.5449 5.63028 34.4573 6.49375"></svg:path></svg:g>`,
})
export class IconParkRomperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRopeSkippingIcon],svg[icon-park-rope-skipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 32C10 32 10 14.866 10 11C10 7.13401 13.134 4 17 4C20.866 4 24 7.13401 24 11C24 11 24 33.134 24 37C24 40.866 27.134 44 31 44C34.866 44 38 40.866 38 37V16"></svg:path><svg:path fill="#2F88FF" d="M41 4V16H35V4H41Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 16H35M44 16H41M41 16V4H35V16M41 16H35"></svg:path><svg:path fill="#2F88FF" d="M7 44V32H13V44H7Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32H13M4 32H7M7 32V44H13V32M7 32H13"></svg:path></svg:g>`,
})
export class IconParkRopeSkippingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRopeSkippingOneIcon],svg[icon-park-rope-skipping-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke-miterlimit="2" d="M7 40.0001V22.0001C7 22.0001 8 8.00007 15 5.00008C22 2.00009 30 11.0001 30 20.0001C30 25.0001 28 29.0001 24 29.0001C20 29.0001 18 25.0001 18 20.0001C18 11.0001 26 2.00008 33 5.00008C40 8.00007 41 22.0001 41 22.0001V40.0001"></svg:path><svg:path d="M4 31H10"></svg:path><svg:path d="M38 31H44"></svg:path></svg:g>`,
})
export class IconParkRopeSkippingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRotateIcon],svg[icon-park-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 24H42V42H12V24Z"></svg:path><svg:path stroke-linecap="round" d="M6 8V17H15"></svg:path><svg:path stroke-linecap="round" d="M38.4747 13.2985C35.1956 8.87049 29.933 6 24 6C18.1788 6 13.0029 8.76334 9.71272 13.0498L6 17"></svg:path></svg:g>`,
})
export class IconParkRotateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRotateOneIcon],svg[icon-park-rotate-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C30.9566 44 37.0836 40.4483 40.6667 35.0593"></svg:path><svg:path stroke-linecap="round" d="M44 24H30"></svg:path><svg:circle cx="24" cy="24" r="6" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkRotateOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRotatingAddIcon],svg[icon-park-rotating-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6.67578 14C10.1339 8.02199 16.5973 4 24.0001 4M6.67578 14H14.0001M6.67578 14V6.67564"></svg:path><svg:path d="M14 41.3244C8.02199 37.8663 4 31.4028 4 24M14 41.3244V34M14 41.3244H6.67564"></svg:path><svg:path d="M41.3244 34C37.8663 39.978 31.4028 44 24 44M41.3244 34H34M41.3244 34V41.3244"></svg:path><svg:path d="M34 6.67578C39.978 10.1339 44 16.5973 44 24.0001M34 6.67578V14.0001M34 6.67578H41.3244"></svg:path><svg:path d="M18 24H30"></svg:path><svg:path d="M24 30V18"></svg:path></svg:g>`,
})
export class IconParkRotatingAddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRotatingForwardIcon],svg[icon-park-rotating-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 6.67578C8.02198 10.1339 4 16.5973 4 24.0001M14 6.67578V14.0001M14 6.67578H6.67564"></svg:path><svg:path d="M6.67564 34C10.1337 39.978 16.5972 44 24 44M6.67564 34H14M6.67564 34V41.3244"></svg:path><svg:path d="M34 41.3244C39.978 37.8663 44 31.4028 44 24M34 41.3244V34M34 41.3244H41.3244"></svg:path><svg:path d="M41.3242 14C37.8661 8.02199 31.4027 4 23.9999 4M41.3242 14H33.9999M41.3242 14V6.67564"></svg:path></svg:g>`,
})
export class IconParkRotatingForwardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRotationIcon],svg[icon-park-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4"></svg:path><svg:path stroke-dasharray="2 6" d="M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4"></svg:path></svg:g>`,
})
export class IconParkRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRotationHorizontalIcon],svg[icon-park-rotation-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 31L24 35L20 39"></svg:path><svg:path d="M32 34.1679C39.0636 32.6248 44 29.1006 44 25C44 19.4772 35.0457 15 24 15C12.9543 15 4 19.4772 4 25C4 30.5228 12.9543 35 24 35"></svg:path></svg:g>`,
})
export class IconParkRotationHorizontalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRotationOneIcon],svg[icon-park-rotation-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 4V40H44"></svg:path><svg:path fill="#2F88FF" d="M28 40C28 28.9543 19.0457 20 8 20V40H28Z"></svg:path></svg:g>`,
})
export class IconParkRotationOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRotationVerticalIcon],svg[icon-park-rotation-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M38 28L34 24L30 28"></svg:path><svg:path d="M33.1679 16C31.6248 8.93638 28.1006 4 24 4C18.4772 4 14 12.9543 14 24C14 35.0457 18.4772 44 24 44C29.5228 44 34 35.0457 34 24"></svg:path></svg:g>`,
})
export class IconParkRotationVerticalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoundIcon],svg[icon-park-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle>`,
})
export class IconParkRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoundCaliperIcon],svg[icon-park-round-caliper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#2F88FF" d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"></svg:path><svg:path fill="#2F88FF" d="M43.9998 24C43.9998 27.3688 43.1489 30.683 41.5259 33.6351C39.903 36.5872 37.5607 39.0815 34.7163 40.8866L30.4297 34.1319C32.1363 33.0489 33.5417 31.5523 34.5155 29.781C35.4892 28.0098 35.9998 26.0213 35.9998 24H43.9998Z"></svg:path><svg:path fill="#2F88FF" d="M13.4231 40.9745C10.5639 39.193 8.20111 36.7181 6.55386 33.7795C4.90661 30.8409 4.02832 27.5339 4.00049 24.1652L12.0002 24.0991C12.0169 26.1203 12.5439 28.1046 13.5322 29.8677C14.5206 31.6309 15.9383 33.1158 17.6538 34.1847L13.4231 40.9745Z"></svg:path><svg:path fill="#2F88FF" d="M14.4424 6.43161C17.4016 4.8217 20.7195 3.98536 24.0883 4.00019C27.457 4.01503 30.7674 4.88055 33.7123 6.51646L29.8275 13.5099C28.0605 12.5283 26.0743 12.009 24.053 12.0001C22.0318 11.9912 20.041 12.493 18.2655 13.459L14.4424 6.43161Z"></svg:path></svg:g>`,
})
export class IconParkRoundCaliperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoundDistortionIcon],svg[icon-park-round-distortion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path stroke-linecap="round" d="M24 44C18.4772 44 14 39.5228 14 34C14 28.4772 18.4772 24 24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4"></svg:path><svg:path stroke-linecap="round" d="M44 24C44 29.5228 39.5228 34 34 34C28.4772 34 24 29.5228 24 24C24 18.4772 19.5228 14 14 14C8.47715 14 4 18.4772 4 24"></svg:path></svg:g>`,
})
export class IconParkRoundDistortionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoundMaskIcon],svg[icon-park-round-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9542 35.0457 4 24 4C12.9543 4 4 12.9542 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path fill="#2F88FF" d="M23.9999 44C32.9552 44 40.5358 38.1142 43.0843 30H4.91553C7.46405 38.1142 15.0446 44 23.9999 44Z"></svg:path></svg:g>`,
})
export class IconParkRoundMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoundSocketIcon],svg[icon-park-round-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 26L17 32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 26L31 32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 13V19"></svg:path></svg:g>`,
})
export class IconParkRoundSocketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRoundTripIcon],svg[icon-park-round-trip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M9.00056 24L5.00023 20C5.00023 20 3.60071 24.7277 3.92442 27.5782C4.24812 30.4286 7.27333 32.5742 10 31C12.7267 29.4258 44.0006 9.99999 44.0006 9.99999L35.0006 7.99999L9.00056 24Z"></svg:path><svg:path d="M26 13.0001L10.7979 11.3847L8 13.0001L14.9999 20"></svg:path><svg:path d="M29 44L25 39H42V35"></svg:path><svg:path d="M32 28L36 33H19V37"></svg:path></svg:g>`,
})
export class IconParkRoundTripIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRouterIcon],svg[icon-park-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="14" x="4" y="28" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 35L22 35"></svg:path><svg:rect width="4" height="4" x="30" y="33" fill="#fff" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 28L12 8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 28V8"></svg:path></svg:g>`,
})
export class IconParkRouterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRouterOneIcon],svg[icon-park-router-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M10 24L4 38H44L38 24H10Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M10 4V24V4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 4V24"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38 4V24V4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 4V24"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M24 4V24V4Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4V24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 38V44H44V38"></svg:path></svg:g>`,
})
export class IconParkRouterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRowHeightIcon],svg[icon-park-row-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 35L10 41L4 35"></svg:path><svg:path d="M16 13L10 7L4 13"></svg:path><svg:path d="M10 7V41"></svg:path><svg:path d="M44 9H22"></svg:path><svg:path d="M36 19H22"></svg:path><svg:path d="M44 29H22"></svg:path><svg:path d="M36 39H22"></svg:path></svg:g>`,
})
export class IconParkRowHeightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRowingIcon],svg[icon-park-rowing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M30.0195 16C32.781 16 35.0195 13.7614 35.0195 11C35.0195 8.23858 32.781 6 30.0195 6C27.2581 6 25.0195 8.23858 25.0195 11C25.0195 13.7614 27.2581 16 30.0195 16Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 31L35 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32.01 40L26 29L9 40L21 20L44 25"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 40H44"></svg:path></svg:g>`,
})
export class IconParkRowingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRsMaleIcon],svg[icon-park-rs-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4.30958 16.2702C4.14582 15.0694 5.07926 14 6.29124 14H41.7088C42.9207 14 43.8542 15.0694 43.6904 16.2702L41.2359 34.2702C41.1007 35.2612 40.2544 36 39.2542 36H8.74578C7.74564 36 6.89925 35.2612 6.76412 34.2702L4.30958 16.2702Z"></svg:path><svg:path stroke="#fff" d="M19 22H21"></svg:path><svg:path stroke="#fff" d="M23 28H25"></svg:path><svg:path stroke="#fff" d="M11 22H13"></svg:path><svg:path stroke="#fff" d="M15 28H17"></svg:path><svg:path stroke="#fff" d="M27 22H29"></svg:path><svg:path stroke="#fff" d="M31 28H33"></svg:path><svg:path stroke="#fff" d="M35 22H37"></svg:path></svg:g>`,
})
export class IconParkRsMaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRssIcon],svg[icon-park-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44L8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V44L24 35.7273L8 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23.9497 13.9497L23.9497 25.9497"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17.9497 19.9497L29.9497 19.9497"></svg:path></svg:g>`,
})
export class IconParkRssIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRugbyIcon],svg[icon-park-rugby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33.8994 33.8995C43.272 24.5269 46.4378 12.4968 40.9705 7.02941C35.5032 1.56207 23.473 4.7279 14.1004 14.1005C4.72786 23.4731 1.56204 35.5032 7.02938 40.9705C12.4967 46.4379 24.5269 43.2721 33.8994 33.8995Z"></svg:path><svg:path d="M21.1713 21.1715L26.8281 26.8284"></svg:path><svg:path d="M25.4144 16.9288L31.0713 22.5857"></svg:path><svg:path d="M16.9291 25.4142L22.5859 31.071"></svg:path><svg:path d="M12.6924 35.3196L35.3198 12.6922"></svg:path><svg:path d="M5.6147 28.2426L19.7568 42.3848"></svg:path><svg:path d="M28.2426 5.61519L42.3848 19.7573"></svg:path></svg:g>`,
})
export class IconParkRugbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRugbyOneIcon],svg[icon-park-rugby-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M4 24C6.2922 32.63 14.3769 39 24 39C33.6231 39 41.7078 32.63 44 24C41.7078 15.37 33.6231 9 24 9C14.3769 9 6.2922 15.37 4 24Z"></svg:path><svg:path stroke-linecap="round" d="M40 24H44"></svg:path><svg:path stroke-linecap="round" d="M14 24H34"></svg:path><svg:path stroke-linecap="round" d="M4 24H8"></svg:path><svg:path stroke-linecap="round" d="M17 20V28"></svg:path><svg:path stroke-linecap="round" d="M31 20V28"></svg:path><svg:path stroke-linecap="round" d="M24 20V28"></svg:path></svg:g>`,
})
export class IconParkRugbyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRuleTwoIcon],svg[icon-park-rule-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 13C11 13 4 22.8497 4 35H44C44 22.8497 37 13 24 13Z"></svg:path><svg:path stroke-linecap="round" d="M10 31L10 35"></svg:path><svg:path stroke-linecap="round" d="M17 31L17 35"></svg:path><svg:path stroke-linecap="round" d="M24 31L24 35"></svg:path><svg:path stroke-linecap="round" d="M31 31L31 35"></svg:path><svg:path stroke-linecap="round" d="M38 31L38 35"></svg:path><svg:path d="M24 20C19.4457 20 14 22.134 14 26H34C34 22.134 28.5543 20 24 20Z"></svg:path></svg:g>`,
})
export class IconParkRuleTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRulerIcon],svg[icon-park-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 14L34 4L30.25 7.75L26.5 11.5L19 19L11.5 26.5L7.75 30.25L4 34L14 44L44 14Z"></svg:path><svg:path d="M30.25 7.75L7.75 30.25"></svg:path><svg:path d="M9 29L13 33"></svg:path><svg:path d="M14 24L20 30"></svg:path><svg:path d="M19 19L23 23"></svg:path><svg:path d="M24 14L30 20"></svg:path><svg:path d="M29 9L33 13"></svg:path></svg:g>`,
})
export class IconParkRulerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRulerOneIcon],svg[icon-park-ruler-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M43 41H23"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M38.7183 5H21L5 41H22.662L38.7183 5Z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M9.95898 29.8823H17.9872"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M13.2646 22.4707H21.2928"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M16.7744 14.6H24.8026"></svg:path><svg:path stroke="#000" d="M21 5L5 41"></svg:path></svg:g>`,
})
export class IconParkRulerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkRunLeftIcon],svg[icon-park-run-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="18" height="32" x="6" y="5" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="18" height="32" x="24" y="11" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M17 17L13 20.7895L16.6667 25"></svg:path><svg:path stroke="#fff" d="M35 23L31 26.7895L34.6667 31"></svg:path></svg:g>`,
})
export class IconParkRunLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSTurnDownIcon],svg[icon-park-s-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 17L24 13C24 8.99999 27 5.99999 31 5.99999C35 5.99999 38 8.99999 38 13L38 32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 6L10 35C10 39 13 42 17 42C21 42 24 39 24 35L24 17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 11L10 6L5 11"></svg:path><svg:circle cx="38" cy="37" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkSTurnDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSTurnLeftIcon],svg[icon-park-s-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 38L13 38C8.99999 38 5.99999 35 5.99999 31C5.99999 27 8.99999 24 13 24L19 24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 24L35 24C39 24 42 21 42 17C42 13 39 10 35 10L17 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 43L42 38L37 33"></svg:path><svg:circle cx="12" cy="10" r="5" fill="#2F88FF" transform="rotate(-180 12 10)"></svg:circle></svg:g>`,
})
export class IconParkSTurnLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSTurnRightIcon],svg[icon-park-s-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 24L13 24C9 24 6 21 6 17C6 13 9 10 13 10L32 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 38L35 38C39 38 42 35 42 31C42 27 39 24 35 24L30 24"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 43L8 38L13 33"></svg:path><svg:circle cx="37.176" cy="10" r="5" fill="#2F88FF" transform="rotate(-180 37.176 10)"></svg:circle></svg:g>`,
})
export class IconParkSTurnRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSTurnUpIcon],svg[icon-park-s-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 31L24 35C24 39 21 42 17 42C13 42 10 39 10 35L10 16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 42L38 13C38 8.99999 35 5.99999 31 5.99999C27 5.99999 24 8.99999 24 13L24 31"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 37L38 42L43 37"></svg:path><svg:circle cx="10" cy="11" r="5" fill="#2F88FF" transform="rotate(-180 10 11)"></svg:circle></svg:g>`,
})
export class IconParkSTurnUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSafeRetrievalIcon],svg[icon-park-safe-retrieval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 9.12739L24.0082 4L41 9.12739V19.6424C41 30.6945 34.153 40.5063 24.0025 44C13.8492 40.5064 7 30.6923 7 19.6376V9.12739Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 30C27.866 30 31 26.866 31 23C31 19.134 27.866 16 24 16C20.134 16 17 19.134 17 23C17 26.866 20.134 30 24 30Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 29L35 36"></svg:path><svg:path stroke="#000" d="M41 19.6426C41 30.6946 34.153 40.5065 24.0024 44.0002"></svg:path></svg:g>`,
})
export class IconParkSafeRetrievalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSagittariusIcon],svg[icon-park-sagittarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21 7H41V27"></svg:path><svg:path d="M41 7L7 41"></svg:path><svg:path d="M9 21L27 39"></svg:path></svg:g>`,
})
export class IconParkSagittariusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSailboatIcon],svg[icon-park-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M8 28L6 24H42L40 28"></svg:path><svg:path fill="#2F88FF" d="M28.0001 4L10 24H28.0001V4Z"></svg:path><svg:path d="M28 11L38 24H28V11Z"></svg:path><svg:path d="M4 34L6.5 35.3514C8.1 36.2162 9.9 36.2162 11.5 35.3514C13.1 34.4865 14.9 34.4865 16.5 35.3514C18.1 36.2162 19.9 36.2162 21.5 35.3514C23.1 34.4865 24.9 34.4865 26.5 35.3514C28.1 36.2162 29.9 36.2162 31.5 35.3514C33.1 34.4865 34.9 34.4865 36.5 35.3514C38.1 36.2162 39.9 36.2162 41.5 35.3514L44 34"></svg:path><svg:path d="M4 40L6.5 41.3514C8.1 42.2162 9.9 42.2162 11.5 41.3514C13.1 40.4865 14.9 40.4865 16.5 41.3514C18.1 42.2162 19.9 42.2162 21.5 41.3514C23.1 40.4865 24.9 40.4865 26.5 41.3514C28.1 42.2162 29.9 42.2162 31.5 41.3514C33.1 40.4865 34.9 40.4865 36.5 41.3514C38.1 42.2162 39.9 42.2162 41.5 41.3514L44 40"></svg:path></svg:g>`,
})
export class IconParkSailboatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSailboatOneIcon],svg[icon-park-sailboat-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M21 31V5L7 31H21Z"></svg:path><svg:path fill="#2F88FF" d="M27 31V13L41 31H27Z"></svg:path><svg:path d="M5 37H43L38 43H10L5 37Z"></svg:path></svg:g>`,
})
export class IconParkSailboatOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSailingIcon],svg[icon-park-sailing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M19 30H11L19 21"></svg:path><svg:path stroke-linejoin="round" d="M39 30C39 17.0082 28.9937 4 19 4V30H39Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M32.6512 41.5765L42 36L6 36L8 42L31.1144 42C31.6555 42 32.1865 41.8537 32.6512 41.5765Z"></svg:path><svg:path stroke-linejoin="round" d="M19 30V36"></svg:path><svg:path d="M29 21L41 21"></svg:path></svg:g>`,
})
export class IconParkSailingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSalesReportIcon],svg[icon-park-sales-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M41 13.9997L24 4L7 13.9997V33.9998L24 44L41 33.9998V13.9997Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 22V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 18V30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 26V30"></svg:path></svg:g>`,
})
export class IconParkSalesReportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSandalsIcon],svg[icon-park-sandals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="bevel" d="M11.2007 6.85439L10.4923 7.07872C7.00458 8.18319 4.95601 11.7889 5.59445 15.3912C6.3237 19.5059 6.88545 23.4305 7.68923 27.0522C8.47424 30.5892 8.13598 33.7407 7.93924 37.0835C7.74702 40.3496 10.3475 42.9268 13.6113 43.1537C18.2343 43.475 21.7932 39.0724 20.9079 34.5237C20.2236 31.0082 19.7056 27.2065 19.9391 24.5C20.1897 21.5955 20.2164 17.2108 20.1692 13.2488C20.1142 8.63308 15.6014 5.46084 11.2007 6.85439Z"></svg:path><svg:path stroke-linejoin="bevel" d="M34.8097 5.72316L34.0407 5.86734C30.585 6.5153 28.1475 9.62828 28.114 13.1441C28.0707 17.7014 27.831 22.1492 28 26C28.156 29.553 27.563 32.1525 26.9827 35.0531C26.3565 38.1829 28.4256 41.097 31.5229 41.8679C36.0077 42.9841 40.2353 39.1697 40.1002 34.55C40.0073 31.3747 40.1309 28.038 40.7812 25.5996C41.5705 22.6395 42.3283 17.6968 42.91 13.286C43.5209 8.65442 39.4014 4.8622 34.8097 5.72316Z"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M8 29C9 20 14 15 14 15C15.6364 17 18.0001 23 20.0001 29"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="2" d="M40.0001 30C40.5001 22 35 14 35 14C33.3636 16 28.0006 19.2778 28.0006 25.5"></svg:path></svg:g>`,
})
export class IconParkSandalsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSandstormIcon],svg[icon-park-sandstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 22H36C40.4183 22 44 18.4183 44 14C44 9.58172 40.4183 6 36 6C31.5817 6 28 9.58172 28 14"></svg:path><svg:path d="M10 29H4"></svg:path><svg:path d="M27 29H21"></svg:path><svg:path d="M44 29H38"></svg:path><svg:path d="M10 35H4"></svg:path><svg:path d="M27 35H21"></svg:path><svg:path d="M44 35H38"></svg:path><svg:path d="M16 42H4"></svg:path><svg:path d="M44 42H32"></svg:path></svg:g>`,
})
export class IconParkSandstormIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSandwichIcon],svg[icon-park-sandwich-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 36V22H6V36C6 38.2091 7.79086 40 10 40H38C40.2091 40 42 38.2091 42 36Z"></svg:path><svg:path stroke="#fff" d="M6 30H42"></svg:path><svg:path stroke="#000" d="M6 26V34"></svg:path><svg:path stroke="#000" d="M42 26V34"></svg:path><svg:path stroke="#000" d="M6.06657 22H42C42 19.9844 30.1933 11.4184 24.0333 7.38735C17.8733 3.35628 12.7399 8.89906 8.6332 13.9379C5.34786 17.969 6.06659 19.9845 6.06657 22Z"></svg:path></svg:g>`,
})
export class IconParkSandwichIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSandwichOneIcon],svg[icon-park-sandwich-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M17.7988 40.1421C17.7988 40.1421 21.9583 44.3015 26.4505 43.1369C30.9427 41.9722 42.2564 30.6585 43.4211 26.1663C44.5857 21.6741 40.4262 17.5147 40.4262 17.5147"></svg:path><svg:path stroke="#000" d="M7.89941 30.2427C7.89941 30.2427 3.73996 26.0832 4.90461 21.591C6.06926 17.0988 17.383 5.7851 21.8752 4.62045C26.3674 3.4558 30.5268 7.61526 30.5268 7.61526"></svg:path><svg:rect width="40" height="14" x="5.071" y="33.071" fill="#2F88FF" stroke="#000" rx="7" transform="rotate(-45 5.071 33.071)"></svg:rect><svg:path stroke="#fff" d="M15.6779 33.7785L16.2406 32.0902C16.7822 30.4655 17.9928 29.1498 19.567 28.4752L19.9866 28.2953C21.2939 27.7351 22.2992 26.6425 22.749 25.2932V25.2932C23.1987 23.9439 24.204 22.8513 25.5113 22.291L26.4608 21.8841C27.698 21.3539 28.6493 20.32 29.075 19.0431V19.0431C29.544 17.636 30.6481 16.5319 32.0552 16.0629L34.0627 15.3937"></svg:path></svg:g>`,
})
export class IconParkSandwichOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSaplingIcon],svg[icon-park-sapling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M26.9999 8.00001C22.3136 12.6863 23.0351 21.035 23.0351 21.035C23.0351 21.035 31.3136 21.6863 35.9999 17C40.6862 12.3137 40.0057 4.03509 40.0057 4.03509C40.0057 4.03509 31.6862 3.31372 26.9999 8.00001Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23.0351 21.035L30.9999 13.0702M23.0351 21.035C23.0351 21.035 22.3136 12.6863 26.9999 8.00001C31.6862 3.31372 40.0057 4.03509 40.0057 4.03509C40.0057 4.03509 40.6862 12.3137 35.9999 17C31.3136 21.6863 23.0351 21.035 23.0351 21.035Z"></svg:path><svg:path fill="#2F88FF" d="M20.0001 21C23.8492 24.8434 22.9712 31.9711 22.9712 31.9711C22.9712 31.9711 15.8492 32.8434 12.0001 29C8.15094 25.1566 9.03226 18.0289 9.03226 18.0289C9.03226 18.0289 16.151 17.1566 20.0001 21Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.9712 31.9711L16.0001 25M22.9712 31.9711C22.9712 31.9711 23.8492 24.8434 20.0001 21C16.151 17.1566 9.03226 18.0289 9.03226 18.0289C9.03226 18.0289 8.15094 25.1566 12.0001 29C15.8492 32.8434 22.9712 31.9711 22.9712 31.9711Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 4V44"></svg:path></svg:g>`,
})
export class IconParkSaplingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSaveIcon],svg[icon-park-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M6 9C6 7.34315 7.34315 6 9 6H34.2814L42 13.2065V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9Z"></svg:path><svg:path fill="#43CCF8" fill-rule="evenodd" d="M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24.0083 6L24 13.3846C24 13.7245 23.5523 14 23 14H15C14.4477 14 14 13.7245 14 13.3846L14 6H24.0083Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 6H34.2814"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 26H34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 34H24.0083"></svg:path></svg:g>`,
})
export class IconParkSaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSaveOneIcon],svg[icon-park-save-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M39.3 6H8.7C7.20883 6 6 7.20883 6 8.7V39.3C6 40.7912 7.20883 42 8.7 42H39.3C40.7912 42 42 40.7912 42 39.3V8.7C42 7.20883 40.7912 6 39.3 6Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" d="M32 6V24H15V6H32Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26 13V17"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10.9971 6H35.9986"></svg:path></svg:g>`,
})
export class IconParkSaveOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScaleIcon],svg[icon-park-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 6H42V18"></svg:path><svg:path d="M31 29L19 29L19 17"></svg:path><svg:path d="M42 6L19 29"></svg:path><svg:path d="M22 6H8C6.89543 6 6 6.89543 6 8V40C6 41.1046 6.89543 42 8 42H40C41.1046 42 42 41.1046 42 40V26"></svg:path></svg:g>`,
})
export class IconParkScaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScaleOneIcon],svg[icon-park-scale-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M18 14L5 14L5 9L18 4L30 4L43 9L43 14L30 14"></svg:path><svg:rect width="12" height="40" x="18" y="4" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M18 12H22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 30H23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 18H23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 24H22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 36H22"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 10V38"></svg:path></svg:g>`,
})
export class IconParkScaleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScallionIcon],svg[icon-park-scallion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20.0001 23.9999C20.0001 23.9999 22.4996 19.4999 22.9996 14.9999C23.4996 10.4999 21.9997 6.99993 21.9997 6.99993L27 3.99992C27 3.99992 27.9992 9.99993 27.9992 12.9999"></svg:path><svg:path fill="#2F88FF" d="M5.99994 42.9999C3.9995 41.4999 4.00123 36.0894 8.00047 32.9999C11.9997 29.9104 12.1858 30.7172 17 26.9999C21.8142 23.2826 34 3.99991 34 3.99991L38.5001 7.49992L26.3104 23.7401C23.3258 27.7165 22.5516 33.0528 20.0508 37.3501C18.1011 40.7002 15.9999 41.9999 13.9999 42.9999C11.9999 43.9999 8.00037 44.4999 5.99994 42.9999Z"></svg:path><svg:path d="M23.0001 30C23.0001 30 25.9999 28 29.9998 26C33.9998 24 43 24 43 24L40 17C40 17 31.9996 17 29.0001 20"></svg:path></svg:g>`,
})
export class IconParkScallionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScanIcon],svg[icon-park-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 24L41 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 7L24 41"></svg:path><svg:rect width="4" height="4" x="5" y="5" fill="#000"></svg:rect><svg:rect width="4" height="4" x="14" y="5" fill="#000"></svg:rect><svg:rect width="4" height="4" x="30" y="5" fill="#000"></svg:rect><svg:rect width="4" height="4" x="39" y="5" fill="#000"></svg:rect><svg:rect width="4" height="4" x="39" y="14" fill="#000"></svg:rect><svg:rect width="4" height="4" x="5" y="14" fill="#000"></svg:rect><svg:rect width="4" height="4" x="5" y="39" fill="#000"></svg:rect><svg:rect width="4" height="4" x="14" y="39" fill="#000"></svg:rect><svg:rect width="4" height="4" x="30" y="39" fill="#000"></svg:rect><svg:rect width="4" height="4" x="39" y="39" fill="#000"></svg:rect><svg:rect width="4" height="4" x="39" y="30" fill="#000"></svg:rect><svg:rect width="4" height="4" x="5" y="30" fill="#000"></svg:rect></svg:g>`,
})
export class IconParkScanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScanCodeIcon],svg[icon-park-scan-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 15V6H15"></svg:path><svg:path d="M15 42H6V33"></svg:path><svg:path d="M42 33V42H33"></svg:path><svg:path d="M33 6H42V15"></svg:path><svg:path d="M10 24H38"></svg:path></svg:g>`,
})
export class IconParkScanCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScanSettingIcon],svg[icon-park-scan-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M34 21L37 24L34 27"></svg:path><svg:path stroke="#fff" d="M14 21L11 24L14 27"></svg:path><svg:path stroke="#fff" d="M27 14L24 11L21 14"></svg:path><svg:path stroke="#fff" d="M27 34L24 37L21 34"></svg:path></svg:g>`,
})
export class IconParkScanSettingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScanningIcon],svg[icon-park-scanning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:path d="M34 24L14 24"></svg:path><svg:path d="M27 16H21"></svg:path><svg:path d="M27 32H21"></svg:path></svg:g>`,
})
export class IconParkScanningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScanningTwoIcon],svg[icon-park-scanning-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:path d="M34 24L14 24"></svg:path><svg:path d="M34 16L14 16"></svg:path><svg:path d="M34 32L14 32"></svg:path></svg:g>`,
})
export class IconParkScanningTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScatterAlignmentIcon],svg[icon-park-scatter-alignment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 14L42 14"></svg:path><svg:path d="M10 24L38 24"></svg:path><svg:path d="M6 34L34 34"></svg:path></svg:g>`,
})
export class IconParkScatterAlignmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScheduleIcon],svg[icon-park-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="10" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke="#000" d="M14 6V14"></svg:path><svg:path stroke="#fff" d="M25 23L14 23"></svg:path><svg:path stroke="#fff" d="M34 31L14 31"></svg:path><svg:path stroke="#000" d="M34 6V14"></svg:path></svg:g>`,
})
export class IconParkScheduleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSchoolIcon],svg[icon-park-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 33C4 31.8954 4.89543 31 6 31H12V24L24 16L36 24V31H42C43.1046 31 44 31.8954 44 33V42C44 43.1046 43.1046 44 42 44H4V33Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 6V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36 11.9998V5.99984C36 5.99984 34.5 8.99984 30 5.99984C25.5 2.99984 24 5.99984 24 5.99984V11.9998C24 11.9998 25.5 8.99984 30 11.9998C34.5 14.9998 36 11.9998 36 11.9998Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 44V31H20L20 44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M18 44L30 44"></svg:path></svg:g>`,
})
export class IconParkSchoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScissorsIcon],svg[icon-park-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M19 19C21 22 21 26 19 29"></svg:path><svg:path stroke="#fff" d="M36 14L21 24L36 34"></svg:path><svg:circle cx="16" cy="16" r="4" stroke="#fff"></svg:circle><svg:circle cx="16" cy="32" r="4" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkScissorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScoreboardIcon],svg[icon-park-scoreboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="12" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M14 6V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M34 6V12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10.2266 24L15.0006 19.0166V33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 12V40"></svg:path><svg:ellipse cx="34" cy="26" stroke="#fff" rx="3" ry="7"></svg:ellipse><svg:path stroke="#000" stroke-linecap="round" d="M21 12H27"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21 40H27"></svg:path></svg:g>`,
})
export class IconParkScoreboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScorpioIcon],svg[icon-park-scorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 12C16 8.68629 13.3137 6 10 6C6.68629 6 4 8.68629 4 12"></svg:path><svg:path stroke-linejoin="round" d="M28 12C28 8.68629 25.3137 6 22 6C18.6863 6 16 8.68629 16 12"></svg:path><svg:path stroke-linejoin="round" d="M40 34C40 37.3137 37.3137 40 34 40C30.6863 40 28 37.3137 28 34"></svg:path><svg:path stroke-linejoin="round" d="M4 12V30"></svg:path><svg:path stroke-linejoin="round" d="M16 12V30"></svg:path><svg:path d="M28 12V34"></svg:path><svg:path d="M40 23V34"></svg:path><svg:path stroke-linejoin="round" d="M36 27L40 23L44 27"></svg:path></svg:g>`,
})
export class IconParkScorpioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScreenRotationIcon],svg[icon-park-screen-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24C4 35.0457 12.9543 44 24 44L19 39"></svg:path><svg:path d="M44 24C44 12.9543 35.0457 4 24 4L29 9"></svg:path><svg:path fill="#2F88FF" d="M30 41L7 18L18 7L41 30L30 41Z"></svg:path></svg:g>`,
})
export class IconParkScreenRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScreenshotIcon],svg[icon-park-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 42C13.3137 42 16 39.3137 16 36C16 32.6863 13.3137 30 10 30C6.68629 30 4 32.6863 4 36C4 39.3137 6.68629 42 10 42Z"></svg:path><svg:path stroke-linecap="round" d="M40.0615 8C24 28.4331 15.8047 38.6805 14.2426 40.2426C11.8995 42.5858 8.10047 42.5858 5.75732 40.2426"></svg:path><svg:path fill="#2F88FF" d="M38 42C41.3137 42 44 39.3137 44 36C44 32.6863 41.3137 30 38 30C34.6863 30 32 32.6863 32 36C32 39.3137 34.6863 42 38 42Z"></svg:path><svg:path stroke-linecap="round" d="M42.2424 40.2426C39.8993 42.5858 36.1003 42.5858 33.7571 40.2426C32.195 38.6805 23.9998 28.446 8.00049 8"></svg:path></svg:g>`,
})
export class IconParkScreenshotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScreenshotOneIcon],svg[icon-park-screenshot-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 6H8C6.89543 6 6 6.89543 6 8V16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 42H8C6.89543 42 6 41.1046 6 40V32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 42H40C41.1046 42 42 41.1046 42 40V32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 6H40C41.1046 6 42 6.89543 42 8V16"></svg:path><svg:rect width="20" height="20" x="14" y="14" fill="#2F88FF" rx="2"></svg:rect></svg:g>`,
})
export class IconParkScreenshotOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScreenshotTwoIcon],svg[icon-park-screenshot-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24V4H44V24"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M10 44C13.3137 44 16 41.3137 16 38C16 34.6863 13.3137 32 10 32C6.68629 32 4 34.6863 4 38C4 41.3137 6.68629 44 10 44Z" clip-rule="evenodd"></svg:path><svg:path d="M36 12C20.3905 33.2663 15.8047 40.6805 14.2426 42.2426C11.8995 44.5858 8.10047 44.5858 5.75732 42.2426"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M38 44C41.3137 44 44 41.3137 44 38C44 34.6863 41.3137 32 38 32C34.6863 32 32 34.6863 32 38C32 41.3137 34.6863 44 38 44Z" clip-rule="evenodd"></svg:path><svg:path d="M42.2426 42.2426C39.8995 44.5858 36.1005 44.5858 33.7574 42.2426C32.1953 40.6805 27.6095 33.2663 12 12"></svg:path></svg:g>`,
})
export class IconParkScreenshotTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkScrewdriverIcon],svg[icon-park-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M19 24H29V29C29.9613 29.9763 31.0387 31.5237 32 32.5V44H16V32.5L19 29V24Z"></svg:path><svg:path stroke-linecap="round" d="M21 13V24H27V13L29 10L27 4H21L19 10L21 13Z"></svg:path></svg:g>`,
})
export class IconParkScrewdriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSdIcon],svg[icon-park-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M15.4024 5.68299C15.7822 5.24896 16.3308 5 16.9075 5H37C38.1046 5 39 5.89543 39 7V41C39 42.1046 38.1046 43 37 43H11C9.89543 43 9 42.1046 9 41V24H13V18H9V13L15.4024 5.68299Z"></svg:path><svg:path stroke="#fff" d="M33 11V15"></svg:path><svg:path stroke="#fff" d="M21 11V15"></svg:path><svg:path stroke="#fff" d="M27 11V15"></svg:path></svg:g>`,
})
export class IconParkSdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSdCardIcon],svg[icon-park-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M8 12V44H40V4H14L8 12Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 15V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 12V18"></svg:path></svg:g>`,
})
export class IconParkSdCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSealIcon],svg[icon-park-seal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M5 37C5 35.8954 5.89543 35 7 35H41C42.1046 35 43 35.8954 43 37V42C43 43.1046 42.1046 44 41 44H7C5.89543 44 5 43.1046 5 42V37Z"></svg:path><svg:path d="M5 31C5 29.8954 5.89543 29 7 29H41C42.1046 29 43 29.8954 43 31V42C43 43.1046 42.1046 44 41 44H7C5.89543 44 5 43.1046 5 42V31Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18.763 15.6637C18.9051 15.2657 19.2821 15 19.7047 15H28.2953C28.7179 15 29.0949 15.2657 29.237 15.6637L34 29H14L18.763 15.6637Z"></svg:path><svg:rect width="18" height="10.8" x="15" y="4" fill="#2F88FF" rx="5.4"></svg:rect></svg:g>`,
})
export class IconParkSealIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSearchIcon],svg[icon-park-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M21 38C30.3888 38 38 30.3888 38 21C38 11.6112 30.3888 4 21 4C11.6112 4 4 11.6112 4 21C4 30.3888 11.6112 38 21 38Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26.657 14.3431C25.2093 12.8954 23.2093 12 21.0001 12C18.791 12 16.791 12.8954 15.3433 14.3431"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33.2216 33.2217L41.7069 41.707"></svg:path></svg:g>`,
})
export class IconParkSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSeatIcon],svg[icon-park-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M17 21.458C12.9429 22.7323 10 26.5226 10 31.0002C10 36.5231 14.4772 41.0002 20 41.0002C23.2716 41.0002 26.1763 39.4291 28.0007 37.0002C28.2404 36.6811 28.4615 36.3471 28.6623 36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20C34 20 30.5 19.5 24 17V29H38V43"></svg:path><svg:circle cx="24" cy="8" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkSeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSecurityIcon],svg[icon-park-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 26V22C42 12.0589 33.9411 4 24 4V4C14.0589 4 6 12.0589 6 22V26"></svg:path><svg:path d="M32 27V12C32 7.58172 28.4183 4 24 4V4C19.5817 4 16 7.58172 16 12V27"></svg:path><svg:path d="M24 24V38C24 41.3137 26.6863 44 30 44V44C33.3137 44 36 41.3137 36 38V35.1111"></svg:path><svg:path d="M12 24H42"></svg:path></svg:g>`,
})
export class IconParkSecurityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSecurityStallIcon],svg[icon-park-security-stall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:rect width="16" height="15" x="16" y="29" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:rect width="24" height="6" x="12" y="4" fill="#2F88FF" stroke-linejoin="round"></svg:rect><svg:path d="M16 10V29"></svg:path><svg:path d="M32 10V29"></svg:path><svg:path stroke-linejoin="round" d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkSecurityStallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSeedlingIcon],svg[icon-park-seedling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42V26"></svg:path><svg:path fill="#2F88FF" d="M41.9417 10.0068C41.1662 23.0313 32.8114 27.2431 25.9958 27.9029C24.8963 28.0093 24 27.1041 24 25.9995V17.6276C24 17.3953 24.0408 17.1604 24.1245 16.9438C27.1175 9.19883 34.283 8.15499 40.0013 8.01953C41.1056 7.99337 42.0073 8.90411 41.9417 10.0068Z"></svg:path><svg:path fill="#2F88FF" d="M7.99844 6.07206C17.3266 6.75658 22.1952 12.1631 23.834 15.6298C23.9486 15.8722 24.0001 16.1382 24.0001 16.4063V23.9101C24.0001 25.0491 23.0393 25.9645 21.9059 25.8504C7.33707 24.3838 6.11103 14.7864 6.00913 7.9987C5.99255 6.89426 6.89684 5.99122 7.99844 6.07206Z"></svg:path></svg:g>`,
})
export class IconParkSeedlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSelectedIcon],svg[icon-park-selected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 4H4V12H12V4Z"></svg:path><svg:path fill="#2F88FF" d="M44 36H36V44H44V36Z"></svg:path><svg:path fill="#2F88FF" d="M12 36H4V44H12V36Z"></svg:path><svg:path fill="#2F88FF" d="M44 4H36V12H44V4Z"></svg:path><svg:path stroke-linecap="round" d="M8 36V12"></svg:path><svg:path stroke-linecap="round" d="M40 36V12"></svg:path><svg:path stroke-linecap="round" d="M12 8H36"></svg:path><svg:path stroke-linecap="round" d="M12 40H36"></svg:path></svg:g>`,
})
export class IconParkSelectedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSelectedFocusIcon],svg[icon-park-selected-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 4H4V12H12V4Z"></svg:path><svg:path fill="#2F88FF" d="M44 36H36V44H44V36Z"></svg:path><svg:path fill="#2F88FF" d="M12 36H4V44H12V36Z"></svg:path><svg:path fill="#2F88FF" d="M44 4H36V12H44V4Z"></svg:path><svg:path stroke-dasharray="1 5" stroke-linecap="round" d="M8 36V12"></svg:path><svg:path stroke-dasharray="1 5" stroke-linecap="round" d="M40 36V12"></svg:path><svg:path stroke-dasharray="1 5" stroke-linecap="round" d="M12 8H36"></svg:path><svg:path stroke-dasharray="1 5" stroke-linecap="round" d="M12 40H36"></svg:path></svg:g>`,
})
export class IconParkSelectedFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSelfieIcon],svg[icon-park-selfie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M29.2336 6.97919C32.9477 5.4122 40.5099 4.51028 43.0279 12.8715C45.5458 21.2327 34.7205 27.4827 35.0016 20.9696C35.2827 14.4564 42.9968 19.8176 42.8317 24.5317C42.6666 29.2458 37.7695 29.7638 37.7695 29.7638"></svg:path><svg:rect width="26" height="12" x="4.241" y="15.778" fill="#2F88FF" rx="2" transform="rotate(-30 4.241 15.778)"></svg:rect><svg:path stroke-linecap="round" d="M21.5 19.6699L29 32.6603"></svg:path><svg:rect width="6" height="10" x="26.401" y="34.16" fill="#2F88FF" rx="3" transform="rotate(-30 26.401 34.16)"></svg:rect><svg:path stroke-linecap="round" d="M11.4014 8.1795L16.5975 5.1795"></svg:path><svg:path stroke-linecap="round" d="M21.9014 26.366L27.0975 23.366"></svg:path></svg:g>`,
})
export class IconParkSelfieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSendIcon],svg[icon-park-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 5L29.7 43L22.1 25.9L5 18.3L43 5Z"></svg:path><svg:path stroke-linecap="round" d="M43.0001 5L22.1001 25.9"></svg:path></svg:g>`,
})
export class IconParkSendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSendBackwardIcon],svg[icon-park-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="8" fill="#2F88FF" transform="matrix(1 0 0 -1 6 14)"></svg:rect><svg:rect width="36" height="8" fill="#2F88FF" transform="matrix(1 0 0 -1 6 28)"></svg:rect><svg:path stroke-linecap="round" d="M30 36L24 42L18 36V36"></svg:path><svg:path stroke-linecap="round" d="M24 42V28"></svg:path><svg:path stroke-linecap="round" d="M24 14V20"></svg:path></svg:g>`,
})
export class IconParkSendBackwardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSendEmailIcon],svg[icon-park-send-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24V9H24H4V24V39H24"></svg:path><svg:path d="M44 34L30 34"></svg:path><svg:path d="M39 29L44 34L39 39"></svg:path><svg:path d="M4 9L24 24L44 9"></svg:path></svg:g>`,
})
export class IconParkSendEmailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSendOneIcon],svg[icon-park-send-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 6L4 20.1383L24 24.0083L29.0052 44L42 6Z"></svg:path><svg:path stroke-linecap="round" d="M24.0083 24.0084L29.6651 18.3516"></svg:path></svg:g>`,
})
export class IconParkSendOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSendToBackIcon],svg[icon-park-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 21H5V5H21V14"></svg:path><svg:path stroke-linecap="round" d="M32 27H43V43H27V32"></svg:path><svg:path fill="#2F88FF" d="M14 32V14H32V32H14Z"></svg:path></svg:g>`,
})
export class IconParkSendToBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSentToBackIcon],svg[icon-park-sent-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M30 18H41C41.5523 18 42 18.4477 42 19V41C42 41.5523 41.5523 42 41 42H19C18.4477 42 18 41.5523 18 41V30"></svg:path><svg:path stroke-linejoin="round" d="M9.96906 6H6V10.0336"></svg:path><svg:path stroke-linejoin="round" d="M9.99705 30H6V26.012"></svg:path><svg:path stroke-linejoin="round" d="M26 30H29.9971V26.012"></svg:path><svg:path stroke-linejoin="round" d="M26.0023 6H30V9.99785"></svg:path><svg:path d="M16.0283 6H20.0083"></svg:path><svg:path stroke-linejoin="round" d="M6 16V20.0148"></svg:path><svg:path stroke-linejoin="round" d="M30 16V20.0148"></svg:path><svg:path stroke-linejoin="round" d="M15.9922 30H19.9996"></svg:path></svg:g>`,
})
export class IconParkSentToBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSeoIcon],svg[icon-park-seo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" fill="#2F88FF" stroke="#000" rx="1.633"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 18.9479C14 15.9999 10.4978 17.9375 10.7489 20.9687C11 23.9999 15 23.9999 15.2498 27.0311C15.4997 30.0623 12 31.9999 10 29.0519"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M26 18H22V31H26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M22 25H26"></svg:path><svg:rect width="6" height="13" x="32" y="18" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect></svg:g>`,
})
export class IconParkSeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSeoFolderIcon],svg[icon-park-seo-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 22L19 27L14 32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26 32H34"></svg:path></svg:g>`,
})
export class IconParkSeoFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkServerIcon],svg[icon-park-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M44 4H4V20H44V4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M44 28H4V44H44V28Z"></svg:path><svg:path fill="#fff" d="M13 10H11C10.4477 10 10 10.4477 10 11V13C10 13.5523 10.4477 14 11 14H13C13.5523 14 14 13.5523 14 13V11C14 10.4477 13.5523 10 13 10Z"></svg:path><svg:path fill="#fff" d="M13 34H11C10.4477 34 10 34.4477 10 35V37C10 37.5523 10.4477 38 11 38H13C13.5523 38 14 37.5523 14 37V35C14 34.4477 13.5523 34 13 34Z"></svg:path><svg:path fill="#fff" d="M21 10H19C18.4477 10 18 10.4477 18 11V13C18 13.5523 18.4477 14 19 14H21C21.5523 14 22 13.5523 22 13V11C22 10.4477 21.5523 10 21 10Z"></svg:path><svg:path fill="#fff" d="M21 34H19C18.4477 34 18 34.4477 18 35V37C18 37.5523 18.4477 38 19 38H21C21.5523 38 22 37.5523 22 37V35C22 34.4477 21.5523 34 21 34Z"></svg:path></svg:g>`,
})
export class IconParkServerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSetOffIcon],svg[icon-park-set-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-miterlimit="2" d="M29 14C31.7614 14 34 11.7614 34 9C34 6.23858 31.7614 4 29 4C26.2386 4 24 6.23858 24 9C24 11.7614 26.2386 14 29 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M24 19L19.71 27L27.31 33.02C27.62 33.26 27.84 33.59 27.97 33.96L31.31 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M19.71 27L14.51 34.64C12.9732 36.8883 10.5 39.5 9.5 41"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M42 24L35.06 24.1C34.7 24.1 34.34 24.01 34.02 23.83L30.75 21.92C26.74 19.57 22.35 17.96 17.78 17.14L14.56 16.57L12 21"></svg:path><svg:rect width="7.359" height="9" x="8.652" y="19.103" fill="#2F88FF" stroke-linejoin="round" transform="rotate(30 8.652 19.103)"></svg:rect></svg:g>`,
})
export class IconParkSetOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingIcon],svg[icon-park-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M36.686 15.171C37.9364 16.9643 38.8163 19.0352 39.2147 21.2727H44V26.7273H39.2147C38.8163 28.9648 37.9364 31.0357 36.686 32.829L40.0706 36.2137L36.2137 40.0706L32.829 36.686C31.0357 37.9364 28.9648 38.8163 26.7273 39.2147V44H21.2727V39.2147C19.0352 38.8163 16.9643 37.9364 15.171 36.686L11.7863 40.0706L7.92939 36.2137L11.314 32.829C10.0636 31.0357 9.18372 28.9648 8.78533 26.7273H4V21.2727H8.78533C9.18372 19.0352 10.0636 16.9643 11.314 15.171L7.92939 11.7863L11.7863 7.92939L15.171 11.314C16.9643 10.0636 19.0352 9.18372 21.2727 8.78533V4H26.7273V8.78533C28.9648 9.18372 31.0357 10.0636 32.829 11.314L36.2137 7.92939L40.0706 11.7863L36.686 15.171Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"></svg:path></svg:g>`,
})
export class IconParkSettingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingComputerIcon],svg[icon-park-setting-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V26"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 34V42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 42L34 42"></svg:path><svg:circle cx="37" cy="13" r="3" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 20V16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 10V6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30.9378 16.5L34.4019 14.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39.5982 11.5L43.0623 9.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30.9375 9.5L34.4016 11.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39.5979 14.5L43.062 16.5"></svg:path></svg:g>`,
})
export class IconParkSettingComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingConfigIcon],svg[icon-park-setting-config-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M41.5 10H35.5"></svg:path><svg:path d="M27.5 6V14"></svg:path><svg:path d="M27.5 10L5.5 10"></svg:path><svg:path d="M13.5 24H5.5"></svg:path><svg:path d="M21.5 20V28"></svg:path><svg:path d="M43.5 24H21.5"></svg:path><svg:path d="M41.5 38H35.5"></svg:path><svg:path d="M27.5 34V42"></svg:path><svg:path d="M27.5 38H5.5"></svg:path></svg:g>`,
})
export class IconParkSettingConfigIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingLaptopIcon],svg[icon-park-setting-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 9H11C9.34315 9 8 10.3431 8 12V33H40V26"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M4 33H44V35C44 38.3137 41.3137 41 38 41H10C6.68629 41 4 38.3137 4 35V33Z"></svg:path><svg:circle cx="35" cy="14" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 21V17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 11V7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28.9378 17.5L32.4019 15.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37.5982 12.5L41.0623 10.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M28.9375 10.5L32.4016 12.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37.5982 15.5L41.0623 17.5"></svg:path></svg:g>`,
})
export class IconParkSettingLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingOneIcon],svg[icon-park-setting-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M34.0003 41L44 24L34.0003 7H14.0002L4 24L14.0002 41H34.0003Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z"></svg:path></svg:g>`,
})
export class IconParkSettingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingThreeIcon],svg[icon-park-setting-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="15" fill="#2F88FF"></svg:circle><svg:path d="M24 39V44"></svg:path><svg:path d="M39 23H44"></svg:path><svg:path d="M4 23H9"></svg:path><svg:path d="M24 4V9"></svg:path><svg:path d="M34.6064 34.6064L38.142 38.142"></svg:path><svg:path d="M33.8994 12.6865L37.4349 9.15099"></svg:path><svg:path d="M9.15088 37.4351L12.6864 33.8995"></svg:path><svg:path d="M9.85791 9.85791L13.3934 13.3934"></svg:path></svg:g>`,
})
export class IconParkSettingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingTwoIcon],svg[icon-park-setting-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M18.2838 43.1713C14.9327 42.1736 11.9498 40.3213 9.58787 37.867C10.469 36.8227 11 35.4734 11 34.0001C11 30.6864 8.31371 28.0001 5 28.0001C4.79955 28.0001 4.60139 28.01 4.40599 28.0292C4.13979 26.7277 4 25.3803 4 24.0001C4 21.9095 4.32077 19.8938 4.91579 17.9995C4.94381 17.9999 4.97188 18.0001 5 18.0001C8.31371 18.0001 11 15.3138 11 12.0001C11 11.0488 10.7786 10.1493 10.3846 9.35011C12.6975 7.1995 15.5205 5.59002 18.6521 4.72314C19.6444 6.66819 21.6667 8.00013 24 8.00013C26.3333 8.00013 28.3556 6.66819 29.3479 4.72314C32.4795 5.59002 35.3025 7.1995 37.6154 9.35011C37.2214 10.1493 37 11.0488 37 12.0001C37 15.3138 39.6863 18.0001 43 18.0001C43.0281 18.0001 43.0562 17.9999 43.0842 17.9995C43.6792 19.8938 44 21.9095 44 24.0001C44 25.3803 43.8602 26.7277 43.594 28.0292C43.3986 28.01 43.2005 28.0001 43 28.0001C39.6863 28.0001 37 30.6864 37 34.0001C37 35.4734 37.531 36.8227 38.4121 37.867C36.0502 40.3213 33.0673 42.1736 29.7162 43.1713C28.9428 40.752 26.676 39.0001 24 39.0001C21.324 39.0001 19.0572 40.752 18.2838 43.1713Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"></svg:path></svg:g>`,
})
export class IconParkSettingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSettingWebIcon],svg[icon-park-setting-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V23.0588"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"></svg:circle><svg:circle cx="37" cy="34" r="3" stroke="#000" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 41V37"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 31V27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30.9378 37.5L34.4019 35.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39.5979 32.5L43.062 30.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30.9378 30.5L34.4019 32.5"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M39.5979 35.5L43.062 37.5"></svg:path></svg:g>`,
})
export class IconParkSettingWebIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSevenKeyIcon],svg[icon-park-seven-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M18.9983 15H29L20.9939 33"></svg:path></svg:g>`,
})
export class IconParkSevenKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShadeIcon],svg[icon-park-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 6C14.0589 6 6 14.034 6 23.9444V26C6 23.5224 8.01472 21 10.5 21C12.9853 21 15 23.5224 15 26C15 23.5224 17.0147 21 19.5 21C21.9853 21 24 23.5224 24 26C24 23.5224 26.0147 21 28.5 21C30.9853 21 33 23.5224 33 26C33 23.5224 35.0147 21 37.5 21C39.9853 21 42 23.5224 42 26V23.9444C42 14.034 33.9411 6 24 6Z"></svg:path><svg:path stroke="#fff" d="M15.0003 26C15.0003 26 13.4999 20.5 16.0005 15C18.5011 9.49998 24.0002 5.99999 24.0002 5.99999"></svg:path><svg:path stroke="#fff" d="M33.0002 26C33.0002 26 33.5006 21.5 31.0003 15C28.5 8.5 24.0002 5.99999 24.0002 5.99999"></svg:path><svg:path stroke="#000" d="M24 25V39.5C24 41.9853 21.9853 44 19.5 44V44C17.0147 44 15 41.9853 15 39.5V38.1818"></svg:path><svg:path stroke="#fff" d="M24 25V6"></svg:path><svg:path stroke="#000" d="M24 6V4"></svg:path><svg:path stroke="#000" d="M28.5 21C30.9853 21 33 23.5224 33 26C33 23.5224 35.0147 21 37.5 21"></svg:path><svg:path stroke="#000" d="M28.5 21C26.0147 21 24 23.5224 24 26C24 23.5224 21.9853 21 19.5 21"></svg:path><svg:path stroke="#000" d="M10.5 21C12.9853 21 15 23.5224 15 26C15 23.5224 17.0147 21 19.5 21"></svg:path><svg:path stroke="#000" d="M15.7334 8C18.2088 6.72196 21.0197 6 23.9998 6C26.9798 6 29.7908 6.72196 32.2661 8"></svg:path></svg:g>`,
})
export class IconParkShadeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShakeIcon],svg[icon-park-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" d="M4 10L8 14.6667L4 19.3333L8 24L4 28.6667L8 33.3333L4 38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 10L40 14.6667L44 19.3333L40 24L44 28.6667L40 33.3333L44 38"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M34 6H14V42H34V6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 35H26"></svg:path></svg:g>`,
})
export class IconParkShakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShareIcon],svg[icon-park-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 6H42V20"></svg:path><svg:path d="M42 29.4737V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V9C6 7.34315 7.34315 6 9 6L18 6"></svg:path><svg:path d="M25.7998 22.1999L41.0998 6.8999"></svg:path></svg:g>`,
})
export class IconParkShareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShareOneIcon],svg[icon-park-share-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M35 16C37.7614 16 40 13.7614 40 11C40 8.23858 37.7614 6 35 6C32.2386 6 30 8.23858 30 11C30 13.7614 32.2386 16 35 16Z"></svg:path><svg:path fill="#2F88FF" d="M13 29C15.7614 29 18 26.7614 18 24C18 21.2386 15.7614 19 13 19C10.2386 19 8 21.2386 8 24C8 26.7614 10.2386 29 13 29Z"></svg:path><svg:path stroke-linecap="round" d="M30.0004 13.5745L17.3393 21.2454"></svg:path><svg:path stroke-linecap="round" d="M17.3385 26.5639L30.6789 34.4469"></svg:path><svg:path fill="#2F88FF" d="M35 32C37.7614 32 40 34.2386 40 37C40 39.7614 37.7614 42 35 42C32.2386 42 30 39.7614 30 37C30 34.2386 32.2386 32 35 32Z"></svg:path></svg:g>`,
})
export class IconParkShareOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShareSysIcon],svg[icon-park-share-sys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.3654 41.6322C6.44902 37.9812 4 32.7766 4 27C4 15.9543 12.9543 7 24 7C35.0457 7 44 15.9543 44 27C44 32.7766 41.551 37.9812 37.6346 41.6322"></svg:path><svg:path d="M15.1375 36.5109C12.5919 34.1378 11 30.7548 11 27C11 19.8203 16.8203 14 24 14C31.1797 14 37 19.8203 37 27C37 30.7548 35.4081 34.1378 32.8625 36.5109"></svg:path><svg:path d="M19.9096 31.3897C18.7347 30.2944 18 28.733 18 27C18 23.6863 20.6863 21 24 21C27.3137 21 30 23.6863 30 27C30 28.733 29.2653 30.2944 28.0904 31.3897"></svg:path></svg:g>`,
})
export class IconParkShareSysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShareThreeIcon],svg[icon-park-share-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 38V42L6 42L6 38"></svg:path><svg:path d="M30 6L40 16L30 26"></svg:path><svg:path d="M40 16C20 16 6 19 6 32"></svg:path></svg:g>`,
})
export class IconParkShareThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShareTwoIcon],svg[icon-park-share-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 4L44 22L26 39V28C12 28 6 43 6 43C6 26 11 15 26 15V4Z"></svg:path>`,
})
export class IconParkShareTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShaverIcon],svg[icon-park-shaver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M20.7847 18.7299C21.0654 18.4492 21.5205 18.4492 21.8012 18.7299L29.27 26.1987C29.5507 26.4794 29.5507 26.9345 29.27 27.2152L17.7574 38.7278C15.4143 41.0709 11.6153 41.0709 9.27215 38.7278C6.92901 36.3846 6.92901 32.5856 9.27215 30.2425L20.7847 18.7299Z"></svg:path><svg:path stroke="#000" d="M42.5813 22.389C42.9302 22.04 42.9302 21.4742 42.5813 21.1252L26.8745 5.4184C26.5255 5.06942 25.9597 5.06942 25.6107 5.4184L24.8284 6.20073C20.1421 10.887 20.1421 18.485 24.8284 23.1713V23.1713C29.5146 27.8576 37.1126 27.8576 41.7989 23.1713L42.5813 22.389Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19.8787 28.1211L18.4644 29.5353"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M27.657 17.5146L30.4854 20.3431"></svg:path></svg:g>`,
})
export class IconParkShaverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShaverOneIcon],svg[icon-park-shaver-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M36 14H12V6.02055L16.4737 4L20.7193 6.02055L24.193 4L27.6667 6.02055L31.9123 4L36 6.02055V14Z"></svg:path><svg:path d="M12.0001 14C12.0001 14 12 18 12.0001 33C12.0003 48 36.0001 48 36.0001 33C36.0001 18 36.0001 14 36.0001 14"></svg:path><svg:path d="M20 35L28 35"></svg:path><svg:circle cx="24" cy="25" r="4"></svg:circle></svg:g>`,
})
export class IconParkShaverOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShavingIcon],svg[icon-park-shaving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="27" x="14" y="17" fill="#2F88FF" rx="2"></svg:rect><svg:rect width="10" height="5" x="19" y="12"></svg:rect><svg:path d="M19 12C19 10 19 10 19.0001 9C19.0001 8 19 4 27 4C35 4 36 4 36 4V9H29V12"></svg:path></svg:g>`,
})
export class IconParkShavingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSheepZodiacIcon],svg[icon-park-sheep-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M4.99988 13.9998C3.49985 11.4998 2.99991 6 7.9999 4.99965C9.9999 4.85024 11.4999 5.50009 13.9999 7.99978L24.9999 19.9998L21.9999 23.9998"></svg:path><svg:path stroke-linejoin="round" d="M18.9999 14.0001C14.9286 14.7071 6.99997 18.0001 7.99997 28.0001C8.49997 31.0001 9.85917 33.9455 12.9999 37.0001V42.0001"></svg:path><svg:path stroke-linejoin="round" d="M29 16.9998C33.2213 16.5702 42.3115 17.4388 44 24.9998C44.5628 26.8615 44.0656 32.1575 39 38.0001V42.0001"></svg:path><svg:path d="M33 42.0001C33 38.1341 29.6005 36.0001 26 36.0001C22.3995 36.0001 19 38.1341 19 42.0001"></svg:path></svg:g>`,
})
export class IconParkSheepZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShieldIcon],svg[icon-park-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M6 8.25564L24.0086 3L42 8.25564V19.0337C42 30.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 30.36 6 19.0287V8.25564Z"></svg:path>`,
})
export class IconParkShieldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShieldAddIcon],svg[icon-park-shield-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M6 8.25564L24.0086 3L42 8.25564V19.0337C42 30.3622 34.7502 40.4194 24.0026 44.0005C13.2521 40.4195 6 30.36 6 19.0287V8.25564Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23.9497 14.9497V30.9497"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15.9497 22.9497H31.9497"></svg:path></svg:g>`,
})
export class IconParkShieldAddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShipIcon],svg[icon-park-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 20.3768L24 14L42 20.3768L36.6667 34H11.3333L6 20.3768Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" d="M13 8H35L34.9976 17.8961L24 14L13 17.8958V8Z"></svg:path><svg:path stroke-linecap="round" d="M24 8V4"></svg:path><svg:path stroke-linecap="round" d="M24 24V16"></svg:path><svg:path stroke-linecap="round" d="M10 40L13.5 44L17 40L20.5 44L24 40L27.5 44L31 40L34.5 44L38 40"></svg:path></svg:g>`,
})
export class IconParkShipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShopIcon],svg[icon-park-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M4 12H44V20L42.6015 20.8391C40.3847 22.1692 37.6153 22.1692 35.3985 20.8391L34 20L32.6015 20.8391C30.3847 22.1692 27.6153 22.1692 25.3985 20.8391L24 20L22.6015 20.8391C20.3847 22.1692 17.6153 22.1692 15.3985 20.8391L14 20L12.6015 20.8391C10.3847 22.1692 7.61531 22.1692 5.39853 20.8391L4 20V12Z"></svg:path><svg:path d="M8 22.4889V44H40V22"></svg:path><svg:path d="M8 11.8222V4H40V12"></svg:path><svg:rect width="10" height="12" x="19" y="32" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkShopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingIcon],svg[icon-park-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M39 32H13L8 12H44L39 32Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"></svg:path><svg:circle cx="13" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="39" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkShoppingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingBagIcon],svg[icon-park-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 17H43L38.8 43H9.2L5 17Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 17C35 10.3726 30.0751 5 24 5C17.9249 5 13 10.3726 13 17"></svg:path><svg:circle cx="17" cy="26" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 33C18 33 20 36 24 36C28 36 30 33 30 33"></svg:path><svg:circle cx="31" cy="26" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkShoppingBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingBagOneIcon],svg[icon-park-shopping-bag-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="30" x="10" y="12" fill="#2F88FF" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M30 18V10C30 6.68629 27.3137 4 24 4V4C20.6863 4 18 6.68629 18 10V18"></svg:path></svg:g>`,
})
export class IconParkShoppingBagOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingCartIcon],svg[icon-park-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M39 32H13L8 12H44L39 32Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"></svg:path><svg:circle cx="13" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="39" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 22H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 26V18"></svg:path></svg:g>`,
})
export class IconParkShoppingCartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingCartAddIcon],svg[icon-park-shopping-cart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M39 32H13L8 12H44L39 32Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"></svg:path><svg:circle cx="13" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="39" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 22H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26 26V18"></svg:path></svg:g>`,
})
export class IconParkShoppingCartAddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingCartDelIcon],svg[icon-park-shopping-cart-del-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M39 32H13L8 12H44L39 32Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6H6.5L8 12M8 12L13 32H39L44 12H8Z"></svg:path><svg:circle cx="13" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="39" cy="39" r="3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 22H30"></svg:path></svg:g>`,
})
export class IconParkShoppingCartDelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingCartOneIcon],svg[icon-park-shopping-cart-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="20.5" cy="41.5" r="3.5" fill="#000"></svg:circle><svg:circle cx="37.5" cy="41.5" r="3.5" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 6L14 12L19 34H39L44 17H25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 26L32.2727 26L41 26"></svg:path></svg:g>`,
})
export class IconParkShoppingCartOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingCartTwoIcon],svg[icon-park-shopping-cart-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 7H11L18 24H35.5L43 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 12L33 12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M27 6V18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 24L14 30H40"></svg:path><svg:circle cx="19" cy="39" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="35" cy="39" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkShoppingCartTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoppingMallIcon],svg[icon-park-shopping-mall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 44V6C8 5.44772 8.44772 5 9 5H29C29.5523 5 30 5.44772 30 6V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 15L40 20.9993V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkShoppingMallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShortSkirtIcon],svg[icon-park-short-skirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M12 9L17 4H31L36 9L43 35C43 35 39.9997 44 24 44C8.00031 44 5 35 5 35L12 9Z"></svg:path><svg:path stroke="#fff" d="M13 42L17 26"></svg:path><svg:path stroke="#000" d="M5 35C5 35 8.00031 44 24 44"></svg:path></svg:g>`,
})
export class IconParkShortSkirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShortsIcon],svg[icon-park-shorts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 6H11V16L4 33L19 42L24 36L29 42L44 33L37 16V6Z"></svg:path><svg:path fill="#fff" d="M11 14C9.89543 14 9 14.8954 9 16C9 17.1046 9.89543 18 11 18V14ZM37 18C38.1046 18 39 17.1046 39 16C39 14.8954 38.1046 14 37 14V18ZM11 18L37 18V14L11 14V18Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 14V16L38.75 20.25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 14V16L9.25 20.25"></svg:path></svg:g>`,
})
export class IconParkShortsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShoulderBagIcon],svg[icon-park-shoulder-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4.68209 23.5639C4.32813 21.7145 5.74562 20 7.62861 20H40.3714C42.2544 20 43.6719 21.7145 43.3179 23.5639L40.2557 39.5639C39.9851 40.9777 38.7486 42 37.3092 42H10.6908C9.25141 42 8.01487 40.9777 7.74429 39.5639L4.68209 23.5639Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 6L15 20H33L24 6Z"></svg:path><svg:circle cx="24" cy="31" r="3" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkShoulderBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShovelIcon],svg[icon-park-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M13 4H35L34 13L25.5 19H22.5L14 13L13 4Z"></svg:path><svg:path d="M24 19V30"></svg:path><svg:rect width="6" height="14" x="21" y="30" fill="#2F88FF" rx="3"></svg:rect></svg:g>`,
})
export class IconParkShovelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShovelOneIcon],svg[icon-park-shovel-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M11 4H37L34.1667 24H13.8333L11 4Z"></svg:path><svg:path stroke="#fff" d="M21 11L21 17"></svg:path><svg:path stroke="#fff" d="M27 11L27 17"></svg:path><svg:path stroke="#000" d="M24 24V44"></svg:path></svg:g>`,
})
export class IconParkShovelOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShowerHeadIcon],svg[icon-park-shower-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M27 20V22H9V20C9 16.6863 13.0294 14 18 14C22.9706 14 27 16.6863 27 20Z"></svg:path><svg:path d="M42 44V12.5C42 7.80558 36.6274 4 30 4C23.3726 4 18 7.80558 18 12.5V14"></svg:path><svg:path d="M18 29L18 28"></svg:path><svg:path d="M10.1711 28.0303L9.8291 28.97"></svg:path><svg:path d="M4.17112 43.0303L3.8291 43.97"></svg:path><svg:path d="M18 44L18 43"></svg:path><svg:path d="M18 37L18 35"></svg:path><svg:path d="M7.34224 35.0603L6.6582 36.9397"></svg:path></svg:g>`,
})
export class IconParkShowerHeadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShrimpIcon],svg[icon-park-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.6234 11H38.9996C38.9996 11 38.9996 16 35.9996 19C32.9996 22 30 23 29 23C28 23 18.5 24 16 26C13.5 28 12.0011 31.5 16 35C19.9989 38.5 27 40 32 38C37 36 40.0001 30 40.0001 30L44 40C44 40 36 43 28.9997 44C21.9993 45 15.0001 44 8.99972 38C2.99935 32 1.99903 24.5 6.99932 18C11.1656 12.5842 17.4139 11.3337 19.3823 11.0673C19.7947 11.0114 20.2072 11 20.6234 11Z"></svg:path><svg:path stroke="#000" stroke-width="4" d="M26 23L20 11"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 4H32C35.866 4 39 7.13401 39 11V11"></svg:path><svg:circle cx="30" cy="16" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkShrimpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShuffleIcon],svg[icon-park-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 42H42V30"></svg:path><svg:path d="M42 18V6H30"></svg:path><svg:path d="M42 6L6 42"></svg:path><svg:path d="M31.5 31.5L34 34L39 39L41.5 41.5L42 42M24 24L6 6L24 24Z"></svg:path></svg:g>`,
})
export class IconParkShuffleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShuffleOneIcon],svg[icon-park-shuffle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 33L44 37L40 41"></svg:path><svg:path stroke-linejoin="round" d="M40 7L44 11L40 15"></svg:path><svg:path d="M44 11H37C29.8203 11 24 16.8203 24 24C24 31.1797 29.8203 37 37 37H44"></svg:path><svg:path d="M4 37H11C18.1797 37 24 31.1797 24 24C24 16.8203 18.1797 11 11 11H4"></svg:path></svg:g>`,
})
export class IconParkShuffleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkShutterPriorityIcon],svg[icon-park-shutter-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M15 12L18 6H30L33 12H15Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M41 12H7C5.34315 12 4 13.2536 4 14.8V39.2C4 40.7464 5.34315 42 7 42H41C42.6569 42 44 40.7464 44 39.2V14.8C44 13.2536 42.6569 12 41 12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 20C25 20.1296 19 21.0889 19 23.8889C19 27.3889 29 26.6111 29 30.1111C29 32.9111 22.3333 33.8704 19 34"></svg:path></svg:g>`,
})
export class IconParkShutterPriorityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSickbedIcon],svg[icon-park-sickbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 23L40 35"></svg:path><svg:circle cx="12" cy="16" r="3" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" stroke-linejoin="round" d="M29 36L29.0001 31.5L19 28V36H29Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 27.5L23 14L41.3744 20.9998C42.8515 21.5625 43.6385 23.1747 43.1737 24.6855L40 35"></svg:path></svg:g>`,
})
export class IconParkSickbedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSignalIcon],svg[icon-park-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 6V42"></svg:path><svg:path d="M29 16V42"></svg:path><svg:path d="M19 26V42"></svg:path><svg:path d="M8 36V42"></svg:path></svg:g>`,
})
export class IconParkSignalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSignalOneIcon],svg[icon-park-signal-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M38.1421 38.1422C41.7614 34.5229 44 29.5229 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85791"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M9.85786 9.85791C6.23858 13.4772 4 18.4772 4 24C4 29.5229 6.23858 34.5229 9.85786 38.1422"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M15.1005 14.1006C12.567 16.6341 11 20.1341 11 24.0001C11 27.8661 12.567 31.3661 15.1005 33.8996"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M32.8994 33.8996C35.4329 31.3661 36.9999 27.8661 36.9999 24.0001C36.9999 20.1341 35.4329 16.6341 32.8994 14.1006"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44V34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4V14"></svg:path><svg:path fill="#000" d="M24 27C25.6569 27 27 25.6569 27 24C27 22.3431 25.6569 21 24 21C22.3431 21 21 22.3431 21 24C21 25.6569 22.3431 27 24 27Z"></svg:path></svg:g>`,
})
export class IconParkSignalOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSignalStrengthIcon],svg[icon-park-signal-strength-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38.1421 38.1421C45.9526 30.3316 45.9526 17.6684 38.1421 9.85786C30.3316 2.04738 17.6684 2.04738 9.85786 9.85786C2.04738 17.6684 2.04738 30.3316 9.85786 38.1421M32.4853 32.4853C37.1716 27.799 37.1716 20.201 32.4853 15.5147C27.799 10.8284 20.201 10.8284 15.5147 15.5147C10.8284 20.201 10.8284 27.799 15.5147 32.4853"></svg:path><svg:path fill="#2F88FF" d="M28 24C28 26.2091 26.2091 28 24 28C21.7909 28 20 26.2091 20 24C20 21.7909 21.7909 20 24 20C26.2091 20 28 21.7909 28 24Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28ZM24 28V44M24 44H28M24 44H20"></svg:path></svg:g>`,
})
export class IconParkSignalStrengthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSignalTowerIcon],svg[icon-park-signal-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M17.0812 6.00005C10.9612 10.2853 9.47386 18.7205 13.7591 24.8405C18.0444 30.9605 26.4796 32.4479 32.5996 28.1626L17.0812 6.00005Z"></svg:path><svg:path d="M22 31V42"></svg:path><svg:path d="M13 24.5L6 42H42"></svg:path><svg:path d="M40 6L25 17"></svg:path><svg:path d="M17 6H40L33 27.5"></svg:path></svg:g>`,
})
export class IconParkSignalTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSignalTowerOneIcon],svg[icon-park-signal-tower-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M12 44L20 4H28L36 44"></svg:path><svg:path d="M15 10H24H33"></svg:path><svg:path stroke-linejoin="round" d="M12 26L36 26"></svg:path><svg:path stroke-linejoin="round" d="M15 27L35 39"></svg:path><svg:path stroke-linejoin="round" d="M33 27L14 39"></svg:path><svg:path stroke-linejoin="round" d="M30 11L15 26"></svg:path><svg:path stroke-linejoin="round" d="M18 11L33 26"></svg:path></svg:g>`,
})
export class IconParkSignalTowerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSimIcon],svg[icon-park-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 4H32.8889L40 11.2727V44H8V4Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M33 26H15V36H33V26Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 12V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M27 12V18"></svg:path></svg:g>`,
})
export class IconParkSimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSimCardIcon],svg[icon-park-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M10 44H38C39.1046 44 40 43.1046 40 42V14.8847C40 14.3212 39.7623 13.7839 39.3453 13.4049L29.5721 4.52012C29.204 4.18544 28.7243 4 28.2268 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44Z"></svg:path><svg:circle cx="17" cy="14" r="3" fill="#000"></svg:circle><svg:rect width="16" height="14" x="16" y="23" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect></svg:g>`,
})
export class IconParkSimCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSingleBedIcon],svg[icon-park-single-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 12C8 10.3431 9.34315 9 11 9H37C38.6569 9 40 10.3431 40 12V23H8V12Z"></svg:path><svg:path d="M6 35V39"></svg:path><svg:path d="M42 35V39"></svg:path><svg:path fill="#2F88FF" d="M29 18H19C17.3431 18 16 19.3431 16 21V23H32V21C32 19.3431 30.6569 18 29 18Z"></svg:path><svg:path d="M4 26C4 24.3431 5.34315 23 7 23H41C42.6569 23 44 24.3431 44 26V35H4V26Z"></svg:path></svg:g>`,
})
export class IconParkSingleBedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSinusoidIcon],svg[icon-park-sinusoid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24C4 24 6 4 14 4C22 4 23 19 24 24C25 29 28 44 35 44C42 44 44 24 44 24"></svg:path><svg:path d="M11 24H17"></svg:path><svg:path d="M31 24H37"></svg:path></svg:g>`,
})
export class IconParkSinusoidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSippyCupIcon],svg[icon-park-sippy-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 44L37 16H11L14.5 44H34Z"></svg:path><svg:path d="M24 10L22 4"></svg:path><svg:path d="M6 16H42"></svg:path><svg:path d="M36.9947 25C36.9947 25 42.4654 25 41.968 29.4045C41.4707 33.809 36 32.9281 36 32.9281"></svg:path><svg:path d="M11.0053 25C11.0053 25 5.53463 25 6.03196 29.4045C6.5293 33.809 12 32.9281 12 32.9281"></svg:path><svg:path fill="#2F88FF" d="M37 10H11V16H37V10Z"></svg:path></svg:g>`,
})
export class IconParkSippyCupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSixIcon],svg[icon-park-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18.9995 41C13.4995 38.25 8.0008 30 5.00014 25C1.99947 20 8.31271 15.3125 11.9999 19C15.6871 22.6875 15.9999 23 15.9999 23V17.5C15.9999 15.567 17.5669 14 19.4999 14C21.4329 14 22.9999 15.567 22.9999 17.5V16C22.9999 14.067 24.5669 12.5 26.4999 12.5C28.4329 12.5 29.9999 14.067 29.9999 16V17.5C29.9999 15.567 31.5669 14 33.4999 14C35.4329 14 36.9999 15.567 36.9999 17.5V7.5C36.9999 5.567 38.5669 4 40.4999 4C42.4329 4 43.9999 5.567 43.9999 7.5V28.9663C43.9999 30.9689 43.6297 32.9743 42.5445 34.6573C41.2626 36.6453 39.1111 39.3028 35.9995 41C30.4994 44 24.4995 43.75 18.9995 41Z"></svg:path>`,
})
export class IconParkSixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSixCircularConnectionIcon],svg[icon-park-six-circular-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37.8564 20V24V28"></svg:path><svg:path d="M27.4639 38L30.928 36L34.3921 34"></svg:path><svg:path d="M20.5356 38L17.0715 36L13.6074 34"></svg:path><svg:path d="M10.1436 20V24V28"></svg:path><svg:path d="M13.6074 14L17.0715 12L20.5356 10"></svg:path><svg:path d="M27.4639 10L30.928 12L34.3921 14"></svg:path><svg:path fill="#2F88FF" d="M24 44C26.2091 44 28 42.2091 28 40C28 37.7909 26.2091 36 24 36C21.7909 36 20 37.7909 20 40C20 42.2091 21.7909 44 24 44Z"></svg:path><svg:path fill="#2F88FF" d="M24 12C26.2091 12 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8C20 10.2091 21.7909 12 24 12Z"></svg:path><svg:path fill="#2F88FF" d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z"></svg:path><svg:path fill="#2F88FF" d="M38 20C40.2091 20 42 18.2091 42 16C42 13.7909 40.2091 12 38 12C35.7909 12 34 13.7909 34 16C34 18.2091 35.7909 20 38 20Z"></svg:path><svg:path fill="#2F88FF" d="M38 36C40.2091 36 42 34.2091 42 32C42 29.7909 40.2091 28 38 28C35.7909 28 34 29.7909 34 32C34 34.2091 35.7909 36 38 36Z"></svg:path><svg:path fill="#2F88FF" d="M10 20C12.2091 20 14 18.2091 14 16C14 13.7909 12.2091 12 10 12C7.79086 12 6 13.7909 6 16C6 18.2091 7.79086 20 10 20Z"></svg:path><svg:path fill="#2F88FF" d="M10 36C12.2091 36 14 34.2091 14 32C14 29.7909 12.2091 28 10 28C7.79086 28 6 29.7909 6 32C6 34.2091 7.79086 36 10 36Z"></svg:path></svg:g>`,
})
export class IconParkSixCircularConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSixKeyIcon],svg[icon-park-six-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M24.5 33C27.5376 33 30 30.5376 30 27.5C30 24.4624 27.5376 22 24.5 22C21.4624 22 19 24.4624 19 27.5C19 30.5376 21.4624 33 24.5 33Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M29.5962 17.7392C28.7778 15.5461 26.8044 14 24.5 14C21.4624 14 19 16.6863 19 20V27"></svg:path></svg:g>`,
})
export class IconParkSixKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSixPointsIcon],svg[icon-park-six-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.9999 24V12M23.9999 24L13.5 30.0621L23.9999 24ZM23.9999 24L34.4998 30.0621L23.9999 24Z"></svg:path><svg:path fill="#2F88FF" d="M14 16C14 18.2091 12.2091 20 10 20C7.79086 20 6 18.2091 6 16C6 13.7909 7.79086 12 10 12C12.2091 12 14 13.7909 14 16Z"></svg:path><svg:path fill="#2F88FF" d="M14 32C14 34.2091 12.2091 36 10 36C7.79086 36 6 34.2091 6 32C6 29.7909 7.79086 28 10 28C12.2091 28 14 29.7909 14 32Z"></svg:path><svg:path fill="#2F88FF" d="M28 40C28 42.2091 26.2091 44 24 44C21.7909 44 20 42.2091 20 40C20 37.7909 21.7909 36 24 36C26.2091 36 28 37.7909 28 40Z"></svg:path><svg:path fill="#2F88FF" d="M42 32C42 34.2091 40.2091 36 38 36C35.7909 36 34 34.2091 34 32C34 29.7909 35.7909 28 38 28C40.2091 28 42 29.7909 42 32Z"></svg:path><svg:path fill="#2F88FF" d="M42 16C42 18.2091 40.2091 20 38 20C35.7909 20 34 18.2091 34 16C34 13.7909 35.7909 12 38 12C40.2091 12 42 13.7909 42 16Z"></svg:path><svg:path fill="#2F88FF" d="M28 8C28 10.2091 26.2091 12 24 12C21.7909 12 20 10.2091 20 8C20 5.79086 21.7909 4 24 4C26.2091 4 28 5.79086 28 8Z"></svg:path></svg:g>`,
})
export class IconParkSixPointsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSkateIcon],svg[icon-park-skate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M44 39.8198H4L36.54 21.8198H44V39.8198Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M3.85742 19.2012L7.08947 20.7992L24.41 10.7992L24.642 7.20117"></svg:path><svg:path fill="#000" d="M12.3301 24.8799C13.9869 24.8799 15.3301 23.5367 15.3301 21.8799C15.3301 20.223 13.9869 18.8799 12.3301 18.8799C10.6732 18.8799 9.33008 20.223 9.33008 21.8799C9.33008 23.5367 10.6732 24.8799 12.3301 24.8799Z"></svg:path><svg:path fill="#000" d="M23.4502 18.8799C25.107 18.8799 26.4502 17.5367 26.4502 15.8799C26.4502 14.223 25.107 12.8799 23.4502 12.8799C21.7933 12.8799 20.4502 14.223 20.4502 15.8799C20.4502 17.5367 21.7933 18.8799 23.4502 18.8799Z"></svg:path></svg:g>`,
})
export class IconParkSkateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSkatesIcon],svg[icon-park-skates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 5H31V13H5V5Z"></svg:path><svg:path fill="#2F88FF" d="M9 36V13H27V23C41 23 41 32 41 36H9Z"></svg:path><svg:rect width="36" height="6" x="7" y="36"></svg:rect></svg:g>`,
})
export class IconParkSkatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSkatingIcon],svg[icon-park-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke="#000" d="M44 4H28V12H44V4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 12V34C44 35.11 43.11 36 42 36H8C5.79 36 4 34.21 4 32V26C4 21.58 7.58 18 12 18H28V12H44Z"></svg:path><svg:path stroke="#fff" d="M14 24V18"></svg:path><svg:path stroke="#fff" d="M21 24V18"></svg:path><svg:path stroke="#000" d="M14 44V36"></svg:path><svg:path stroke="#000" d="M36 44V36"></svg:path><svg:path stroke="#000" d="M23 18L12 18"></svg:path><svg:path stroke="#000" d="M44 43.9999H6C4.89 43.9999 4 43.0999 4 41.9999V40.6299"></svg:path></svg:g>`,
})
export class IconParkSkatingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSketchIcon],svg[icon-park-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M18.6 16H29.4L33 20.7059L24 32L15 20.7059L18.6 16Z"></svg:path></svg:g>`,
})
export class IconParkSketchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSkiingNordicIcon],svg[icon-park-skiing-nordic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24H28L22 19L19 29L25 35L27 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 34L15 39L9 44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 44H39L44 37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24V44"></svg:path></svg:g>`,
})
export class IconParkSkiingNordicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSkullIcon],svg[icon-park-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M11.2632 44L14.6271 35.6852C10.031 32.5934 7 27.2927 7 21.2727C7 11.7333 14.6112 4 24 4C33.3888 4 41 11.7333 41 21.2727C41 27.2927 37.969 32.5934 33.3729 35.6852L36.7368 44H11.2632Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 38V44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 38V44"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M17 23C18.6569 23 20 21.6569 20 20C20 18.3431 18.6569 17 17 17C15.3431 17 14 18.3431 14 20C14 21.6569 15.3431 23 17 23Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M31 23C32.6569 23 34 21.6569 34 20C34 18.3431 32.6569 17 31 17C29.3431 17 28 18.3431 28 20C28 21.6569 29.3431 23 31 23Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M32 44H24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 44H16"></svg:path></svg:g>`,
})
export class IconParkSkullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlaveIcon],svg[icon-park-slave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 38V30.5M10 38V6C10 4.89543 10.8954 4 12 4H36C37.1046 4 38 4.89543 38 6V7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 13H24C20.6863 13 18 15.6863 18 19V19C18 22.3137 20.6863 25 24 25H25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 13H34C37.3137 13 40 15.6863 40 19V19C40 22.3137 37.3137 25 34 25H33"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 19H33"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 38C10 34.6863 12.6863 32 16 32H32C35.3137 32 38 34.6863 38 38C38 41.3137 35.3137 44 32 44H16C12.6863 44 10 41.3137 10 38Z"></svg:path><svg:circle cx="32" cy="38" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkSlaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSleavesIcon],svg[icon-park-sleaves-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 43C31 43 18 44 11 36C4 28 4 4.00003 4 4.00003C4 4.00003 28 3.00003 36 9.00003C44 15 42 32 42 32"></svg:path><svg:path d="M44 44C44 44 32.8207 35.5515 26 28C19.1793 20.4485 16 13 16 13"></svg:path><svg:path d="M26 28L27 15"></svg:path><svg:path d="M26 28L16 27"></svg:path></svg:g>`,
})
export class IconParkSleavesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSleepIcon],svg[icon-park-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M16.8657 7.46924C16.3036 9.21181 16 11.0705 16 13C16 22.9411 24.0589 31 34 31C36.5346 31 38.9468 30.4762 41.1343 29.5308C38.8006 36.766 32.0116 42 24 42C14.0589 42 6 33.9411 6 24C6 16.5935 10.4734 10.2317 16.8657 7.46924Z"></svg:path><svg:path stroke-linecap="round" d="M31.6605 10H41L31 18H41"></svg:path></svg:g>`,
})
export class IconParkSleepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSleepOneIcon],svg[icon-park-sleep-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M7 6H24.1429L7 24H25"></svg:path><svg:path d="M29 15H41L29 29H41"></svg:path><svg:path d="M15 32H24.0476L15 42H25"></svg:path></svg:g>`,
})
export class IconParkSleepOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSleepTwoIcon],svg[icon-park-sleep-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 12L4 36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 29L44 36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M44 29L4 29"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M22 16L22 29L44 29L44 19C44 17.3431 42.6569 16 41 16L22 16Z"></svg:path><svg:circle cx="13" cy="20" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkSleepTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlideIcon],svg[icon-park-slide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M41 5.5H7V33.5H41V5.5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 41.5L24 33.5L32 41.5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13.9239 24.6628L19.5664 19.155L24.0083 23.4999L33.9669 13.5208"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 5.5H44"></svg:path></svg:g>`,
})
export class IconParkSlideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlideTwoIcon],svg[icon-park-slide-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M4 8H44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M8 8H40V34H8V8Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M31 18L34 21L31 24"></svg:path><svg:path stroke="#fff" d="M17 24L14 21L17 18"></svg:path><svg:path stroke="#000" d="M16 42L24 34L32 42"></svg:path></svg:g>`,
})
export class IconParkSlideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlidingHorizontalIcon],svg[icon-park-sliding-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 20L32 24L28 28"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 20L16 24L20 28"></svg:path></svg:g>`,
})
export class IconParkSlidingHorizontalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlidingVerticalIcon],svg[icon-park-sliding-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 20L24 16L28 20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 28L24 32L28 28"></svg:path></svg:g>`,
})
export class IconParkSlidingVerticalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlightlyFrowningFaceWhitOpenMouthIcon],svg[icon-park-slightly-frowning-face-whit-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 29C29 29 31 33 31 33H17C17 33 19 29 24 29Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V22"></svg:path></svg:g>`,
})
export class IconParkSlightlyFrowningFaceWhitOpenMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlightlySmilingFaceIcon],svg[icon-park-slightly-smiling-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path></svg:g>`,
})
export class IconParkSlightlySmilingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlippersIcon],svg[icon-park-slippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 29L44 29V35H4L4 29Z"></svg:path><svg:path fill="#2F88FF" d="M23.5293 13C20.0293 17 20.0292 25 20.0293 29H40.0293V20.5C40.0293 20.5 28.0001 15 23.5293 13Z"></svg:path></svg:g>`,
})
export class IconParkSlippersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlippersOneIcon],svg[icon-park-slippers-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 29H44V35H4V29Z"></svg:path><svg:path fill="#2F88FF" d="M7.00044 22C4 26 4 29 4 29H30.0007C30.0007 29 30.0003 23.5 30.0003 21C30.0003 18.5 28.5001 15.5 25.0001 15C21.5001 14.5 11.8762 15.5 7.00044 22Z"></svg:path></svg:g>`,
})
export class IconParkSlippersOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSlyFaceWhitSmileIcon],svg[icon-park-sly-face-whit-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 21L30 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 19L15 21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path></svg:g>`,
})
export class IconParkSlyFaceWhitSmileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSmartOptimizationIcon],svg[icon-park-smart-optimization-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M24.0002 45C27.2208 45 32.7276 40.8 32.7276 24C32.7276 7.2 27.2208 3 24.0002 3C20.7797 3 15.2729 7.48302 15.2729 24C15.2729 40.517 20.7797 45 24.0002 45Z"></svg:path><svg:path d="M5.10515 35.0001C6.71545 37.8124 13.2479 40.4211 28.364 31.6211C43.48 22.8211 44.5057 15.8124 42.8954 13.0001C41.2851 10.1878 34.4981 7.72728 19.6367 16.3791C4.77521 25.0308 3.49489 32.1878 5.10515 35.0001Z"></svg:path><svg:path d="M5.10506 13.0001C3.4948 15.8124 4.52046 22.8211 19.6366 31.6211C34.7527 40.4211 41.285 37.8124 42.8953 35.0001C44.5056 32.1878 43.2253 25.0308 28.3638 16.3791C13.5024 7.72728 6.71537 10.1878 5.10506 13.0001Z"></svg:path></svg:g>`,
})
export class IconParkSmartOptimizationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSmilingFaceIcon],svg[icon-park-smiling-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V22"></svg:path></svg:g>`,
})
export class IconParkSmilingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSmilingFaceWithSquintingEyesIcon],svg[icon-park-smiling-face-with-squinting-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 31C31 31 29 35 24 35C19 35 17 31 17 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 21C21 21 20 17 17 17C14 17 13 21 13 21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M35 21C35 21 34 17 31 17C28 17 27 21 27 21"></svg:path></svg:g>`,
})
export class IconParkSmilingFaceWithSquintingEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSnacksIcon],svg[icon-park-snacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 14H42V8H38L36 4H12L10 8H6V14Z"></svg:path><svg:path stroke-linecap="round" d="M36 44L38 14H10L12 44H36Z"></svg:path></svg:g>`,
})
export class IconParkSnacksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSnakeZodiacIcon],svg[icon-park-snake-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M35.7858 39.083L38.6142 36.2546C40.9574 33.9114 40.9574 30.1125 38.6142 27.7693V27.7693C36.2711 25.4262 32.4721 25.4262 30.1289 27.7693L27.6675 30.2308"></svg:path><svg:path d="M17.4011 23.5263L24.4721 16.4553C26.8153 14.1121 26.8153 10.3131 24.4721 7.97V7.97C22.129 5.62685 18.33 5.62685 15.9869 7.97L8.91578 15.0411"></svg:path><svg:path d="M18.2827 22.6454L9.62259 31.3055C7.27945 33.6487 7.27945 37.4477 9.62259 39.7908V39.7908C11.9657 42.134 15.7647 42.134 18.1079 39.7908L28.0074 29.8913"></svg:path><svg:path stroke-linejoin="round" d="M15 8.99969H7"></svg:path></svg:g>`,
})
export class IconParkSnakeZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSnowIcon],svg[icon-park-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33"></svg:path><svg:path d="M18 23V29"></svg:path><svg:path d="M15 26H21"></svg:path><svg:path d="M31 26V32"></svg:path><svg:path d="M28 29H34"></svg:path><svg:path d="M24 36V42"></svg:path><svg:path d="M21 39H27"></svg:path></svg:g>`,
})
export class IconParkSnowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSnowflakeIcon],svg[icon-park-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 4V44"></svg:path><svg:path d="M6.72461 14L41.3656 34"></svg:path><svg:path d="M6.71923 33.9773L41.2814 14.0228"></svg:path><svg:path d="M12 10L15 19L6 21"></svg:path><svg:path d="M6 27L15 29L12 38"></svg:path><svg:path d="M36 10L33 19L42 21"></svg:path><svg:path d="M42 27L33 29L36 38"></svg:path><svg:path d="M18 7L24 13L30 7"></svg:path><svg:path d="M18 41L24 35L30 41"></svg:path></svg:g>`,
})
export class IconParkSnowflakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSnowmanIcon],svg[icon-park-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 24L4 20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 22V18"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 22L40 18"></svg:path><svg:circle cx="24" cy="10" r="6" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:ellipse cx="24" cy="30" fill="#2F88FF" stroke="#000" stroke-width="4" rx="13" ry="14"></svg:ellipse><svg:circle cx="24" cy="26" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="31" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="36" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 20L36 24"></svg:path></svg:g>`,
})
export class IconParkSnowmanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSoapBubbleIcon],svg[icon-park-soap-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:ellipse cx="22" cy="30" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="16" ry="14"></svg:ellipse><svg:path stroke="#fff" d="M26 24C27.3333 24.1667 30 25 31 29"></svg:path><svg:circle cx="8" cy="8" r="4" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:circle><svg:circle cx="41" cy="13" r="3" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class IconParkSoapBubbleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSoccerIcon],svg[icon-park-soccer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M17.8172 4.97973C7.30905 8.38921 1.57007 19.6775 4.97947 30.1758C8.38886 40.6742 19.6769 46.4233 30.175 43.0139C40.6831 39.6044 46.4221 28.3161 43.0127 17.8178C39.6033 7.30937 28.3153 1.57026 17.8172 4.97973Z"></svg:path><svg:path fill="#2F88FF" d="M34 21L24 13L14 21L18 33H30L34 21Z"></svg:path><svg:path d="M34 21L43 18"></svg:path><svg:path d="M36 40L30 33"></svg:path><svg:path d="M18 33L12 40"></svg:path><svg:path d="M14 21L5 18"></svg:path><svg:path d="M24 13V4"></svg:path></svg:g>`,
})
export class IconParkSoccerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSoccerOneIcon],svg[icon-park-soccer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-miterlimit="2" stroke-width="4" d="M29 14C31.7614 14 34 11.7614 34 9C34 6.23858 31.7614 4 29 4C26.2386 4 24 6.23858 24 9C24 11.7614 26.2386 14 29 14Z"></svg:path><svg:path fill="#000" d="M19 46C20.6569 46 22 44.6569 22 43C22 41.3431 20.6569 40 19 40C17.3431 40 16 41.3431 16 43C16 44.6569 17.3431 46 19 46Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M24.38 18.9102L20 27.0002L27.31 33.0202C27.62 33.2602 27.84 33.5902 27.97 33.9602L31 44.0002"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M20 27L14.51 34.64C13.97 35.43 12.95 35.73 12.07 35.36L4 32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M42 23.9999H35C34.64 23.9999 34.28 23.9099 33.96 23.7299L30.75 21.9199C26.74 19.5699 22.35 17.9599 17.78 17.1399L14.56 16.5699C14.11 16.4899 13.64 16.5699 13.24 16.7899L7 19.9999"></svg:path></svg:g>`,
})
export class IconParkSoccerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSocksIcon],svg[icon-park-socks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40.0001 18C37.0001 18 32.0005 18 30.0003 23C28 28 30.5002 32.5 33.0002 35"></svg:path><svg:path d="M18 10L40 10"></svg:path><svg:path d="M20.0005 4H38.0006C39.1052 4 40.0006 4.89543 40.0006 6V24.2876C40.0006 27.7198 38.4001 30.9554 35.6645 33.0283C32.0224 35.7881 27.0882 39.5088 25.0005 41C21.5005 43.5 15.0005 46 10.0008 41C5.00104 36 6.25114 29.443 10.001 26C13.7508 22.557 18.0005 19.1519 18.0005 19.1519V6C18.0005 4.89543 18.8959 4 20.0005 4Z"></svg:path></svg:g>`,
})
export class IconParkSocksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSofaIcon],svg[icon-park-sofa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 21H4V35H12V21Z"></svg:path><svg:path fill="#2F88FF" d="M44 21H36V35H44V21Z"></svg:path><svg:path stroke-linecap="round" d="M36 27H12V35H36V27Z"></svg:path><svg:path stroke-linecap="round" d="M8 20V8H40V20"></svg:path><svg:path stroke-linecap="round" d="M8 36V40"></svg:path><svg:path stroke-linecap="round" d="M40 36V40"></svg:path></svg:g>`,
})
export class IconParkSofaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSofaTwoIcon],svg[icon-park-sofa-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 38V18H36V31H12V18H4V38H44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 6H12L12 31H36L36 6Z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M10 44C12.2091 44 14 42.2091 14 40C12.9028 40.0044 6.7003 40 6 40C6 42.2091 7.79086 44 10 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M38 44C40.2091 44 42 42.2091 42 40C40.0954 39.9934 34.8627 40 34 40C34 42.2091 35.7909 44 38 44Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkSofaTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSoftballIcon],svg[icon-park-softball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 44C35.05 44 44 35.05 44 24C44 12.95 35.05 4 24 4C12.95 4 4 12.95 4 24C4 35.05 12.95 44 24 44Z"></svg:path><svg:path stroke-linecap="round" d="M10 38C13.7 34.37 16 29.59 16 24C16 18.48 13.62 13.62 10 10"></svg:path><svg:path stroke-linecap="round" d="M38 38C34.3 34.37 32 29.59 32 24C32 18.48 34.38 13.62 38 10"></svg:path><svg:path stroke-linecap="round" d="M28 24H36"></svg:path><svg:path stroke-linecap="round" d="M12 24H20"></svg:path><svg:path stroke-linecap="round" d="M30 34L36 31"></svg:path><svg:path stroke-linecap="round" d="M36 17L30 14"></svg:path><svg:path stroke-linecap="round" d="M18 34L12 31"></svg:path><svg:path stroke-linecap="round" d="M12 17L18 14"></svg:path></svg:g>`,
})
export class IconParkSoftballIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolarEnergyIcon],svg[icon-park-solar-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="40" height="24" x="4" y="8" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 32L30 8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 32L18 8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 20L6 20"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 41V32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 41H17"></svg:path></svg:g>`,
})
export class IconParkSolarEnergyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolarEnergyOneIcon],svg[icon-park-solar-energy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M10 30H16C19.3137 30 22 32.6863 22 36C22 39.3137 19.3137 42 16 42H10V30Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 28V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 32H10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 38H10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 36H30C31.1046 36 32 35.1046 32 34V23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 4V11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22.8789 7.87891L27.1215 12.1215"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22.8789 25.1211L27.1215 20.8785"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41.1211 7.87891L36.8785 12.1215"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41.1211 25.1211L36.8785 20.8785"></svg:path><svg:circle cx="32" cy="17" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 17H26"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 17H44"></svg:path></svg:g>`,
})
export class IconParkSolarEnergyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStateDiskIcon],svg[icon-park-solid-state-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M44 29H4V42H44V29Z"></svg:path><svg:path fill="#fff" d="M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M10 35.5H27"></svg:path></svg:g>`,
})
export class IconParkSolidStateDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSorcererHatIcon],svg[icon-park-sorcerer-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40C35.0457 40 44 38.2091 44 36C44 34.5611 40.7012 33.2997 35 32.5949L27 12L15 8L18 14L13 32.5949C7.2988 33.2997 4 34.5611 4 36C4 38.2091 12.9543 40 24 40Z"></svg:path>`,
})
export class IconParkSorcererHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSortIcon],svg[icon-park-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42L15 29H33L24 42Z"></svg:path><svg:path d="M24 6L15 19H33L24 6Z"></svg:path></svg:g>`,
})
export class IconParkSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSortAmountDownIcon],svg[icon-park-sort-amount-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 8H43"></svg:path><svg:path d="M14 41L6 33"></svg:path><svg:path d="M14 7V41"></svg:path><svg:path d="M23 18H39"></svg:path><svg:path d="M23 28H35"></svg:path><svg:path d="M23 38H31"></svg:path></svg:g>`,
})
export class IconParkSortAmountDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSortAmountUpIcon],svg[icon-park-sort-amount-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23 9H43"></svg:path><svg:path d="M5 16L13 8"></svg:path><svg:path d="M13 8V42"></svg:path><svg:path d="M23 19H39"></svg:path><svg:path d="M23 29H35"></svg:path><svg:path d="M23 39H31"></svg:path></svg:g>`,
})
export class IconParkSortAmountUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSortFourIcon],svg[icon-park-sort-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 11.9876L23.9938 4L32 12"></svg:path><svg:path d="M32 36.0124L24.0061 44L16 36"></svg:path><svg:path d="M24 4V44"></svg:path></svg:g>`,
})
export class IconParkSortFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSortOneIcon],svg[icon-park-sort-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 11.5H29"></svg:path><svg:path d="M6 24.5H29"></svg:path><svg:path d="M36 11.5V37.5L42 30.5"></svg:path><svg:path d="M6 37.5H29"></svg:path></svg:g>`,
})
export class IconParkSortOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSortThreeIcon],svg[icon-park-sort-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25 14L16 5L7 14"></svg:path><svg:path d="M15.9917 31V5"></svg:path><svg:path d="M42 34L33 43L24 34"></svg:path><svg:path d="M32.9917 17V43"></svg:path></svg:g>`,
})
export class IconParkSortThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSortTwoIcon],svg[icon-park-sort-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 6V42"></svg:path><svg:path d="M7 17.8994L19 5.89941"></svg:path><svg:path d="M29 42.1006V6.10059"></svg:path><svg:path d="M29 42.1006L41 30.1006"></svg:path></svg:g>`,
})
export class IconParkSortTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSoundIcon],svg[icon-park-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="24" cy="15" r="5" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle><svg:circle cx="14" cy="10" r="2" fill="#000"></svg:circle><svg:circle cx="14" cy="38" r="2" fill="#000"></svg:circle><svg:circle cx="34" cy="10" r="2" fill="#000"></svg:circle><svg:circle cx="34" cy="38" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="32" r="6" fill="#2F88FF" stroke="#000" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkSoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSoundOneIcon],svg[icon-park-sound-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M9 7C9 5.34315 10.3431 4 12 4H36C37.6569 4 39 5.34315 39 7V41C39 42.6569 37.6569 44 36 44H12C10.3431 44 9 42.6569 9 41L9 7Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 29C27.866 29 31 25.866 31 22C31 18.134 27.866 15 24 15C20.134 15 17 18.134 17 22C17 25.866 20.134 29 24 29Z"></svg:path><svg:rect width="4" height="4" x="30" y="8" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 36H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 36H21"></svg:path></svg:g>`,
})
export class IconParkSoundOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSoundWaveIcon],svg[icon-park-sound-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 14V12C6 8.68629 8.68629 6 12 6H36C39.3137 6 42 8.68629 42 12V14"></svg:path><svg:path d="M32 18V30"></svg:path><svg:path d="M40 20V28"></svg:path><svg:path d="M24 15V33"></svg:path><svg:path d="M16 18V30"></svg:path><svg:path d="M8 20V28"></svg:path><svg:path d="M6 34V36C6 39.3137 8.68629 42 12 42H36C39.3137 42 42 39.3137 42 36V34"></svg:path></svg:g>`,
})
export class IconParkSoundWaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSourceCodeIcon],svg[icon-park-source-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 40H7C5.34315 40 4 38.6569 4 37V11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V25.8824"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M4 11C4 9.34315 5.34315 8 7 8H41C42.6569 8 44 9.34315 44 11V20H4V11Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 33L30 37L34 41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 33L44 37L40 41"></svg:path><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g>`,
})
export class IconParkSourceCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSoybeanMilkMakerIcon],svg[icon-park-soybean-milk-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M35 10H40.0644C40.5909 10 41.0272 10.4082 41.0622 10.9335L41.9289 23.9335C41.9674 24.5107 41.5096 25 40.9311 25H32"></svg:path><svg:path stroke="#000" d="M7 5H35L31 31H15L12 10L7 5Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M15 31H31L35 43H11L15 31Z"></svg:path><svg:path stroke="#fff" d="M21 37H25"></svg:path></svg:g>`,
})
export class IconParkSoybeanMilkMakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpaCandleIcon],svg[icon-park-spa-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6.54086 26.4339C6.2633 25.1848 7.21374 24 8.49323 24H39.5068C40.7863 24 41.7367 25.1848 41.4591 26.4339L38.348 40.4339C38.1447 41.3489 37.3331 42 36.3957 42H11.6043C10.6669 42 9.85532 41.3489 9.65197 40.4339L6.54086 26.4339Z"></svg:path><svg:path d="M20.643 9.88858C22.0743 8.00815 23.1776 5.41033 23.774 4C24.8177 5.41033 27.084 8.94836 27.7997 10.8288C28.6942 13.1793 26.4578 16 23.774 16C21.0903 16 18.8538 12.2391 20.643 9.88858Z"></svg:path><svg:path d="M24 16V24"></svg:path></svg:g>`,
})
export class IconParkSpaCandleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpaceColonyIcon],svg[icon-park-space-colony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linejoin="round" d="M42 43V6C42 4.89543 41.1046 4 40 4H33C31.8954 4 31 4.89543 31 6V24"></svg:path><svg:path d="M24 22C14.0589 22 6 30.0589 6 40V44H42V40C42 30.0589 33.9411 22 24 22Z"></svg:path><svg:path stroke-linecap="round" d="M8 31V8"></svg:path><svg:path stroke-linecap="round" d="M16 24L16 14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M31 14L42 14"></svg:path><svg:path d="M17 42C17 41 17 40.0237 17 39C17 29.6112 20.134 22 24 22C27.866 22 31 29.6112 31 39C31 40.3778 31 41 31 42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path d="M7 35C7 35 17.3496 34 24 34C30.6504 34 41 35 41 35"></svg:path></svg:g>`,
})
export class IconParkSpaceColonyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpannerIcon],svg[icon-park-spanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M30.4417 5C32.406 5 34.265 5.44776 35.9207 6.24607L32.7172 9.42668C30.8706 11.2601 30.8706 14.2327 32.7172 16.0661C34.5638 17.8995 37.5578 17.8995 39.4044 16.0661L42.2571 13.2337C42.7379 14.5558 43 15.9818 43 17.4685C43 24.3547 37.3775 29.937 30.4417 29.937C28.7825 29.937 27.1985 29.6176 25.7486 29.0373L13.07 41.6253C11.2238 43.4582 8.2307 43.4582 6.38459 41.6253C4.53847 39.7924 4.53847 36.8207 6.38459 34.9877L18.9523 22.5099C18.2651 20.9684 17.8834 19.2627 17.8834 17.4685C17.8834 10.5823 23.5059 5 30.4417 5Z"></svg:path>`,
})
export class IconParkSpannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpeakerIcon],svg[icon-park-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 2H10C8.89543 2 8 2.89543 8 4V44C8 45.1046 8.89543 46 10 46H38C39.1046 46 40 45.1046 40 44V4C40 2.89543 39.1046 2 38 2Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 38C27.3137 38 30 35.3137 30 32C30 28.6863 27.3137 26 24 26C20.6863 26 18 28.6863 18 32C18 35.3137 20.6863 38 24 38Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 18C26.2091 18 28 16.2091 28 14C28 11.7909 26.2091 10 24 10C21.7909 10 20 11.7909 20 14C20 16.2091 21.7909 18 24 18Z"></svg:path></svg:g>`,
})
export class IconParkSpeakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpeakerOneIcon],svg[icon-park-speaker-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="11" height="18" x="4" y="15" fill="#2F88FF"></svg:rect><svg:path d="M15 15L33 8V40L15 33"></svg:path><svg:path d="M40 17H42"></svg:path><svg:path d="M39 25H44"></svg:path><svg:path d="M40 33H42"></svg:path></svg:g>`,
})
export class IconParkSpeakerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpeedIcon],svg[icon-park-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M34.0234 6.68921C31.0764 4.97912 27.6525 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 20.3727 43.0344 16.9709 41.3461 14.0377"></svg:path><svg:path fill="#2F88FF" d="M31.9498 16.0502C31.9498 16.0502 28.5621 25.0947 27.0001 26.6568C25.438 28.2189 22.9053 28.2189 21.3432 26.6568C19.7811 25.0947 19.7811 22.562 21.3432 20.9999C22.9053 19.4378 31.9498 16.0502 31.9498 16.0502Z"></svg:path></svg:g>`,
})
export class IconParkSpeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpeedOneIcon],svg[icon-park-speed-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M30.2972 18.7786C30.2972 18.7786 27.0679 27.8809 25.5334 29.47C23.9988 31.0591 21.4665 31.1033 19.8774 29.5687C18.2882 28.0341 18.244 25.5019 19.7786 23.9127C21.3132 22.3236 30.2972 18.7786 30.2972 18.7786Z"></svg:path><svg:path stroke-linecap="round" d="M38.8492 38.8492C42.6495 35.049 45 29.799 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 29.799 5.35051 35.049 9.15076 38.8492"></svg:path><svg:path stroke-linecap="round" d="M24 4V8"></svg:path><svg:path stroke-linecap="round" d="M38.8454 11.1421L35.7368 13.6593"></svg:path><svg:path stroke-linecap="round" d="M42.5223 27.2328L38.6248 26.333"></svg:path><svg:path stroke-linecap="round" d="M5.47737 27.2328L9.37485 26.333"></svg:path><svg:path stroke-linecap="round" d="M9.15463 11.142L12.2632 13.6593"></svg:path></svg:g>`,
})
export class IconParkSpeedOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpermIcon],svg[icon-park-sperm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M18.2374 24.4746C20.0932 25.774 20.5673 27.1488 21.8458 28.0441C23.2456 29.0242 24.7931 29.5446 26.0149 29.0594C28.3219 28.1433 29.9908 25.1508 32.0264 22.2437C35.9861 16.5887 35.9796 7.85888 32.2866 5.273C28.5936 2.68713 20.4434 5.70557 16.4837 11.3606C14.5488 14.124 12.0147 17.8057 12.1672 19.3632C12.2957 20.6745 12.7366 21.405 14.1249 22.6378C15.5132 23.8706 16.2569 23.0878 18.2374 24.4746Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M13.6175 22.3169C10.0769 26.2145 9.60934 29.1762 12.2147 31.2019C14.8201 33.2276 18.0918 32.2293 22.0296 28.2071"></svg:path><svg:path stroke-linecap="round" d="M12.2386 31.2274C9.14181 34.6146 8.57222 37.7734 10.5299 40.7039C13.4663 45.0997 19.2838 44.8594 22.124 41.5828C24.9642 38.3062 30.3082 30.1868 36.183 31.8559C42.0578 33.525 41.0605 39.9438 37.122 40.6182"></svg:path></svg:g>`,
})
export class IconParkSpermIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSphereIcon],svg[icon-park-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 32C35.0457 32 44 28.4183 44 24C44 19.5817 35.0457 16 24 16C12.9543 16 4 19.5817 4 24C4 28.4183 12.9543 32 24 32Z"></svg:path><svg:path stroke-linecap="round" d="M32 24C32 35.0457 28.4183 44 24 44C19.5817 44 16 35.0457 16 24C16 12.9543 19.5817 4 24 4C28.4183 4 32 12.9543 32 24Z"></svg:path><svg:circle cx="24" cy="24" r="20"></svg:circle></svg:g>`,
})
export class IconParkSphereIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpiderManIcon],svg[icon-park-spider-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 23.9995C36.5 26.9995 37.6128 32.4456 35.8821 36.4839C34.1514 40.5222 30.1131 43.9836 25.498 44.5605C20.8828 45.1374 16.2676 41.676 15.1138 40.5222C14.6703 40.0788 14.2979 39.6176 14.0092 39.2154C13.5842 38.6231 13.6367 37.8375 14.1267 37.2978C14.992 36.3444 16.4951 35.0295 17.9983 35.3301C20.8828 35.907 21.9663 36.908 24.3442 35.907C26.5 34.9995 27.2286 33.0225 27.2286 31.2919C27.2286 29.5612 26.0748 27.8305 23.7673 27.2536C21.4597 26.6767 19.1521 27.8305 18.5752 29.5612C17.9983 31.2919 18.5752 32.4457 16.8445 33.5994C16.2574 33.9908 15.4421 34.3615 14.6977 34.6586C13.6689 35.0692 12.5487 34.4604 12.4644 33.3559C12.2869 31.0325 12.7115 27.6915 15.1138 24.946C16.3596 23.5221 17.5251 22.5536 18.5752 21.895"></svg:path><svg:path d="M33 23.9998L23.1278 4.24016C22.898 3.78013 22.3519 3.56306 21.906 3.81927C20.8651 4.41745 19.6469 5.54195 20.0427 7.28675C20.5532 9.53717 23.5802 20.0483 24.999 22.9998"></svg:path><svg:path d="M22.499 16.9995L15.6298 10.4797C15.2688 10.1371 14.7044 10.1073 14.3647 10.4711C13.5429 11.3514 12.6906 12.8039 13.6013 14.3662C14.7635 16.3598 17.7611 20.6098 20 22.9995"></svg:path></svg:g>`,
})
export class IconParkSpiderManIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpikedshoesIcon],svg[icon-park-spikedshoes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke="#000" d="M44 6H28V14H44V6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 14V36C44 37.11 43.11 38 42 38H8C5.79 38 4 36.21 4 34V28C4 23.58 7.58 20 12 20H28V14H44Z"></svg:path><svg:path stroke="#fff" d="M14 26V20"></svg:path><svg:path stroke="#fff" d="M21 26V20"></svg:path><svg:path stroke="#000" d="M15 42V38"></svg:path><svg:path stroke="#000" d="M8 42V38"></svg:path><svg:path stroke="#000" d="M22 42V38"></svg:path><svg:path stroke="#000" d="M34 42V38"></svg:path><svg:path stroke="#000" d="M41 42V38"></svg:path><svg:path stroke="#000" d="M23 20L12 20"></svg:path></svg:g>`,
})
export class IconParkSpikedshoesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpinningTopIcon],svg[icon-park-spinning-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 44V41"></svg:path><svg:path fill="#2F88FF" d="M44 20L24 41L4 20H44Z"></svg:path><svg:path d="M44 12H4V20H44V12Z"></svg:path><svg:path d="M24 12V4"></svg:path></svg:g>`,
})
export class IconParkSpinningTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSplitIcon],svg[icon-park-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 10V7C19 5.89543 19.8954 5 21 5H41C42.1046 5 43 5.89543 43 7V29C43 30.1046 42.1046 31 41 31H37"></svg:path><svg:rect width="24" height="24" x="5" y="18" fill="#2F88FF" rx="2"></svg:rect></svg:g>`,
})
export class IconParkSplitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSplitBranchIcon],svg[icon-park-split-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M44 44V4H24V17L33 26V44H44Z"></svg:path><svg:path fill="#2F88FF" d="M4 4V44H25V30L16 21V4H4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 44V4H24V17L33 26V44H44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 4V44H25V30L16 21V4H4Z"></svg:path></svg:g>`,
})
export class IconParkSplitBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSplitCellsIcon],svg[icon-park-split-cells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M4 14V5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V43C20 43.5523 19.5523 44 19 44H5C4.44772 44 4 43.5523 4 43V34"></svg:path><svg:path d="M44 34V43C44 43.5523 43.5523 44 43 44H29C28.4477 44 28 43.5523 28 43V5C28 4.44772 28.4477 4 29 4H43C43.5523 4 44 4.44772 44 5V14"></svg:path><svg:path d="M28 24L44 24.0132"></svg:path><svg:path d="M4 24.0132L20 24"></svg:path><svg:path stroke-linejoin="round" d="M39.2275 28.7778L40.8185 27.1868L44.0005 24.0049L40.8185 20.8229L39.2275 19.2319"></svg:path><svg:path stroke-linejoin="round" d="M8.75537 28.7861L7.16438 27.1951L3.9824 24.0132L7.16438 20.8312L8.75537 19.2402"></svg:path></svg:g>`,
})
export class IconParkSplitCellsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSplitTurnDownLeftIcon],svg[icon-park-split-turn-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 21.9999H21C16.5817 21.9999 13 25.5817 13 29.9999V43.9999"></svg:path><svg:circle cx="37" cy="8.944" r="5" fill="#2F88FF" transform="rotate(-90 37 8.944)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 13.9999V42.9999"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 38.9999L37 43.9999L32 38.9999"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 38.9999L13 43.9999L8 38.9999"></svg:path></svg:g>`,
})
export class IconParkSplitTurnDownLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSplitTurnDownRightIcon],svg[icon-park-split-turn-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 22H29C33.4183 22 37 25.5817 37 30V44"></svg:path><svg:circle cx="13" cy="8.944" r="5" fill="#2F88FF" transform="rotate(-90 13 8.944)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14V43"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 39L13 44L8 39"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 39L37 44L32 39"></svg:path></svg:g>`,
})
export class IconParkSplitTurnDownRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSpoonIcon],svg[icon-park-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="20" x="14" y="4" fill="#2F88FF" rx="10"></svg:rect><svg:path d="M24 24L24 36"></svg:path><svg:rect width="6" height="8" x="21" y="36" fill="#2F88FF" rx="3"></svg:rect></svg:g>`,
})
export class IconParkSpoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSportIcon],svg[icon-park-sport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M36 15C38.7614 15 41 12.7614 41 10C41 7.23858 38.7614 5 36 5C33.2386 5 31 7.23858 31 10C31 12.7614 33.2386 15 36 15Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 16.7691L20.0031 13.998L31 19.2466L20.0031 27.4442L31 34.6834L24.0083 43.998"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35.3203 21.6434L38.002 23.1018L44.0003 17.4658"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.849 31.5454L13.8793 35.4572L4.00391 40.9964"></svg:path></svg:g>`,
})
export class IconParkSportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSportingIcon],svg[icon-park-sporting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="8" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 18H19V34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41 18H29V44"></svg:path></svg:g>`,
})
export class IconParkSportingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSquareIcon],svg[icon-park-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path>`,
})
export class IconParkSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSquareSmallIcon],svg[icon-park-square-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M34 12H14C12.8954 12 12 12.8954 12 14V34C12 35.1046 12.8954 36 14 36H34C35.1046 36 36 35.1046 36 34V14C36 12.8954 35.1046 12 34 12Z"></svg:path>`,
})
export class IconParkSquareSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSsdIcon],svg[icon-park-ssd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 38V6C38 4.89543 37.1046 4 36 4H12C10.8954 4 10 4.89543 10 6V38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 14H23"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 22H23"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 38C10 34.6863 12.6863 32 16 32H32C35.3137 32 38 34.6863 38 38C38 41.3137 35.3137 44 32 44H16C12.6863 44 10 41.3137 10 38Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 39V44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 39V44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 39V44"></svg:path><svg:circle cx="32" cy="38" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 44H15"></svg:path></svg:g>`,
})
export class IconParkSsdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStackLightIcon],svg[icon-park-stack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="30" x="17" y="4"></svg:rect><svg:path stroke-linecap="round" d="M17 14H31"></svg:path><svg:path stroke-linecap="round" d="M17 24H31"></svg:path><svg:path stroke-linecap="round" d="M6.87891 7.87891L11.1215 12.1215"></svg:path><svg:path stroke-linecap="round" d="M6.87891 33.1211L11.1215 28.8785"></svg:path><svg:path stroke-linecap="round" d="M41.1211 7.87891L36.8785 12.1215"></svg:path><svg:path stroke-linecap="round" d="M41.1211 33.1211L36.8785 28.8785"></svg:path><svg:path stroke-linecap="round" d="M4 21H10"></svg:path><svg:path stroke-linecap="round" d="M38 21H44"></svg:path><svg:rect width="8" height="10" x="20" y="34" fill="#2F88FF"></svg:rect></svg:g>`,
})
export class IconParkStackLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStampIcon],svg[icon-park-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8.8L8.8 5L12.6 7.85L16.4 5L20.2 7.85L24 5L27.8 7.85L31.6 5L35.4 7.85L39.2 5L43 8.8L40.15 12.6L43 16.4L40.15 20.2L43 24L40.15 27.8L43 31.6L40.15 35.4L43 39.2L39.2 43L35.4 40.15L31.6 43L27.8 40.15L24 43L20.2 40.15L16.4 43L12.6 40.15L8.8 43L5 39.2L7.85 35.4L5 31.6L7.85 27.8L5 24L7.85 20.2L5 16.4L7.85 12.6L5 8.8Z"></svg:path><svg:circle cx="24" cy="24" r="9" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkStampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStandUpIcon],svg[icon-park-stand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M17 22.458C12.9429 23.7323 10 27.5226 10 32.0002C10 37.5231 14.4772 42.0002 20 42.0002C23.2716 42.0002 26.1763 40.4291 28.0007 38.0002C28.2404 37.6811 28.4615 37.3471 28.6623 37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 18L18.5 16H30L23 30H37V44"></svg:path><svg:circle cx="34" cy="8" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkStandUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStaplerIcon],svg[icon-park-stapler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 35V43H6V35H31"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38.3839 21.8065L8.31372 10.8618L5.57756 18.3794L29.7533 27.1786"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.36963 10.7783L22.8821 16.1584C22.898 16.1643 22.9157 16.1562 22.9216 16.1403V16.1403C23.9362 13.4035 22.5401 10.3625 19.8033 9.34789L10.3014 5.82532C10.255 5.80811 10.2034 5.83179 10.1862 5.87821L8.36963 10.7783Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.7545 22.72L15.3865 26.4788C15.1976 26.9977 14.6237 27.2653 14.1047 27.0764L7.52689 24.6823C7.00791 24.4934 6.74033 23.9196 6.92922 23.4006L8.2973 19.6418"></svg:path><svg:circle cx="36" cy="30" r="7" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkStaplerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStarIcon],svg[icon-park-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"></svg:path>`,
})
export class IconParkStarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStarOneIcon],svg[icon-park-star-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.8712 33.0437L15.9976 44.7037C15.9362 45.5231 16.6646 46.0874 17.3161 45.7222C21.9289 43.1384 36.3783 33.6481 43.7017 12.7901C44.0376 11.8333 43.1352 10.9699 42.3646 11.5096C38.0387 14.5391 28.5846 20.8008 22.7421 21.9935C22.7421 21.9935 26.4836 19.3948 28.7231 15.4055C28.9426 15.0144 28.9244 14.5138 28.6796 14.1608L20.5127 2.38942C20.0287 1.69163 19.0354 1.98074 18.8606 2.87019L16.3181 15.8074L4.38437 26.2228C3.78602 26.7448 3.90808 27.7998 4.5989 28.0792L16.8712 33.0437Z"></svg:path><svg:path d="M37.9745 28.4481C37.2188 29.5026 35.5908 31.6718 34.0876 32.9975C33.7871 33.2625 33.8276 33.707 34.1724 33.9235L42.1145 38.9092C42.5926 39.2092 43.2384 38.853 43.1576 38.3325C42.7882 35.9498 41.7237 30.982 39.0328 28.3743C38.7322 28.0832 38.2142 28.1138 37.9745 28.4481Z"></svg:path></svg:g>`,
})
export class IconParkStarOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStartTimeSortIcon],svg[icon-park-start-time-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 5V30H42V5"></svg:path><svg:path stroke-linejoin="round" d="M30.0367 10.0001L24.9999 15.0143L30.0367 20.1118"></svg:path><svg:path stroke-linejoin="round" d="M30 37L24 43L18 37"></svg:path><svg:path stroke-linejoin="round" d="M24 30V43"></svg:path><svg:path d="M20 9.00195V21.0001"></svg:path></svg:g>`,
})
export class IconParkStartTimeSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSteeringWheelIcon],svg[icon-park-steering-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24H16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 24H32"></svg:path><svg:path fill="#2F88FF" d="M32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16C28.4183 16 32 19.5817 32 24Z"></svg:path></svg:g>`,
})
export class IconParkSteeringWheelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSteollerIcon],svg[icon-park-steoller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M40 24H12L14.5 34H36L40 24Z"></svg:path><svg:path d="M12 24L8 15H3.5"></svg:path><svg:circle cx="20" cy="41" r="3" fill="#2F88FF"></svg:circle><svg:circle cx="31" cy="41" r="3" fill="#2F88FF"></svg:circle><svg:path fill="#2F88FF" d="M23 8.0002L28 24.0002H40C40 24.0002 43.5 16.0002 37.5 10.0002C31.5 4.00022 25.6667 6.66686 23 8.0002Z"></svg:path></svg:g>`,
})
export class IconParkSteollerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStereoNestingIcon],svg[icon-park-stereo-nesting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 40L4 33V17L17 10L30 17V29"></svg:path><svg:path d="M30 8L43 15V31L30 38L17 31V19"></svg:path></svg:g>`,
})
export class IconParkStereoNestingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStereoOneIcon],svg[icon-park-stereo-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="30" height="38" x="9" y="5" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 18H39"></svg:path><svg:circle cx="24" cy="30" r="6" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkStereoOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStereoPerspectiveIcon],svg[icon-park-stereo-perspective-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 44V14L14 4H44V34L34 44H4Z"></svg:path><svg:path d="M34 14V44"></svg:path><svg:path d="M14 4L14 34"></svg:path><svg:path d="M4 14L34 14"></svg:path><svg:path d="M44 4L34 14"></svg:path><svg:path d="M4 44L14 34"></svg:path><svg:path d="M14 34L44 34"></svg:path></svg:g>`,
})
export class IconParkStereoPerspectiveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStethoscopeIcon],svg[icon-park-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.9474 4V10M10.0526 7H4C4 7 4 16 4 21C4 26 8 32 16 32C24 32 28 26 28 21C28 16 28 7 28 7H21.9474H10.0526ZM10.0526 4V10V4Z"></svg:path><svg:path fill="#2F88FF" d="M40 23C42.2091 23 44 21.2091 44 19C44 16.7909 42.2091 15 40 15C37.7909 15 36 16.7909 36 19C36 21.2091 37.7909 23 40 23Z"></svg:path><svg:path d="M16 32C16 38.6274 21.3726 44 28 44C34.6274 44 40 38.6274 40 32V23"></svg:path></svg:g>`,
})
export class IconParkStethoscopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStickersIcon],svg[icon-park-stickers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 44C35.0457 44 44 35.0457 44 24C44 24 33.5 27 27 20C20.5 13 24 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M44 24L24 4"></svg:path></svg:g>`,
})
export class IconParkStickersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStockMarketIcon],svg[icon-park-stock-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="8" height="14" x="6" y="20" fill="#2F88FF"></svg:rect><svg:rect width="8" height="26" x="20" y="14" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M24 44V40"></svg:path><svg:rect width="8" height="9" x="34" y="12" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M10 20V10"></svg:path><svg:path stroke-linecap="round" d="M38 34V21"></svg:path><svg:path stroke-linecap="round" d="M38 12V4"></svg:path></svg:g>`,
})
export class IconParkStockMarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStopwatchIcon],svg[icon-park-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C33.3888 44 41 36.3888 41 27C41 17.6112 33.3888 10 24 10C14.6112 10 7 17.6112 7 27C7 36.3888 14.6112 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 4H17"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 10L35 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 18V27"></svg:path></svg:g>`,
})
export class IconParkStopwatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStopwatchStartIcon],svg[icon-park-stopwatch-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C33.3888 44 41 36.3888 41 27C41 17.6112 33.3888 10 24 10C14.6112 10 7 17.6112 7 27C7 36.3888 14.6112 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 4H30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 19V27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 27H24"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 4V8"></svg:path></svg:g>`,
})
export class IconParkStopwatchStartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStorageCardOneIcon],svg[icon-park-storage-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M33.7778 4H15.7778V12H33.7778V4Z"></svg:path><svg:path stroke-linecap="round" d="M15.3661 4H10.7778C9.67326 4 8.77783 4.89543 8.77783 6V42C8.77783 43.1046 9.67326 44 10.7778 44H38.7778C39.8824 44 40.7778 43.1046 40.7778 42V6C40.7778 4.89543 39.8824 4 38.7778 4H34.1896"></svg:path><svg:path stroke-linecap="round" d="M27.7775 20L19.7778 28.0012H29.7818L21.7781 36.0018"></svg:path></svg:g>`,
})
export class IconParkStorageCardOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStorageCardTwoIcon],svg[icon-park-storage-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 4V14H34V4"></svg:path><svg:rect width="20" height="20" x="14" y="24" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 32H34"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M34 29L34 35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 29L14 35"></svg:path></svg:g>`,
})
export class IconParkStorageCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStraightRazorIcon],svg[icon-park-straight-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="6" x="3.609" y="36.534" fill="#2F88FF" rx="2" transform="rotate(-10 3.61 36.534)"></svg:rect><svg:path d="M44 40L40 36"></svg:path><svg:path fill="#2F88FF" d="M8 4L26.3848 22.3848L22.1421 26.6274C22.1421 26.6274 12.2426 16.7279 9.41419 13.8995C6.58577 11.071 6.58575 9.65682 6.58577 8.24262C6.58579 6.82843 8 4 8 4Z"></svg:path><svg:path d="M8 4L26 22L35 31"></svg:path></svg:g>`,
})
export class IconParkStraightRazorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStrawHatIcon],svg[icon-park-straw-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M34 22C34 16.4772 29.5228 12 24 12C18.4772 12 14 16.4772 14 22"></svg:path><svg:path d="M14 23C8.02199 24.2044 4 26.4557 4 29.034C4 32.8812 12.9543 36 24 36C35.0457 36 44 32.8812 44 29.034C44 26.4557 39.978 24.2044 34 23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 22C15 22.8333 18 26 24 26C30 26 33 23 34 22"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19 25L21 20"></svg:path></svg:g>`,
})
export class IconParkStrawHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStretchingIcon],svg[icon-park-stretching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23.0005 5.99951H8.00049C6.89592 5.99951 6.00049 6.89494 6.00049 7.99951V39.9999C6.00049 41.1044 6.89592 41.9998 8.00049 41.9998H40.0005C41.1051 41.9998 42.0005 41.1044 42.0005 39.9998V24.9998"></svg:path><svg:path stroke-linecap="round" d="M24.001 15.9998V23.9998"></svg:path><svg:path stroke-linecap="round" d="M42 5.99951V13.9995"></svg:path><svg:path stroke-linecap="round" d="M32.001 23.9998H24.001"></svg:path><svg:path d="M42 5.99951L24 23.9995"></svg:path><svg:path stroke-linecap="round" d="M42.0005 5.99951H34.0005"></svg:path></svg:g>`,
})
export class IconParkStretchingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStretchingOneIcon],svg[icon-park-stretching-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="8" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M41 8L29 17.5909V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.1111 23.25L19 18V28.9167L7 41"></svg:path></svg:g>`,
})
export class IconParkStretchingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStrikethroughIcon],svg[icon-park-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 24H43"></svg:path><svg:path d="M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36"></svg:path><svg:path d="M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18"></svg:path><svg:path d="M12 36C12 36 15.9999 44 24 44C32 44 36.564 36.4005 32.3903 30"></svg:path></svg:g>`,
})
export class IconParkStrikethroughIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkStrongboxIcon],svg[icon-park-strongbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 4H7C5.34315 4 4 5.34315 4 7V41C4 42.6569 5.34315 44 7 44H41C42.6569 44 44 42.6569 44 41V7C44 5.34315 42.6569 4 41 4Z"></svg:path><svg:path fill="#fff" d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"></svg:path><svg:path fill="#fff" d="M12 38C13.1046 38 14 37.1046 14 36C14 34.8954 13.1046 34 12 34C10.8954 34 10 34.8954 10 36C10 37.1046 10.8954 38 12 38Z"></svg:path><svg:path fill="#fff" d="M36 14C37.1046 14 38 13.1046 38 12C38 10.8954 37.1046 10 36 10C34.8954 10 34 10.8954 34 12C34 13.1046 34.8954 14 36 14Z"></svg:path><svg:path fill="#fff" d="M36 38C37.1046 38 38 37.1046 38 36C38 34.8954 37.1046 34 36 34C34.8954 34 34 34.8954 34 36C34 37.1046 34.8954 38 36 38Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 33C28.9706 33 33 28.9706 33 24C33 19.0294 28.9706 15 24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33Z"></svg:path></svg:g>`,
})
export class IconParkStrongboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSubtractSelectionIcon],svg[icon-park-subtract-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="27" height="27" x="16" y="16" rx="2"></svg:rect><svg:path d="M16 32H7C5.89543 32 5 31.1046 5 30V7C5 5.89543 5.89543 5 7 5H30C31.1046 5 32 5.89543 32 7V16"></svg:path><svg:path d="M29 16L16 30"></svg:path><svg:path d="M38 16L16 40"></svg:path><svg:path d="M43 21L23 43"></svg:path><svg:path d="M43 32L33 43"></svg:path></svg:g>`,
})
export class IconParkSubtractSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSubtractSelectionOneIcon],svg[icon-park-subtract-selection-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 16H41C42.1046 16 43 16.8954 43 18V41C43 42.1046 42.1046 43 41 43H18C16.8954 43 16 42.1046 16 41V32"></svg:path><svg:rect width="27" height="27" x="5" y="5" rx="2"></svg:rect><svg:path d="M18 5L5 19"></svg:path><svg:path d="M27 5L5 29"></svg:path><svg:path d="M32 10L12 32"></svg:path><svg:path d="M32 21L22 32"></svg:path></svg:g>`,
})
export class IconParkSubtractSelectionOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSubwayIcon],svg[icon-park-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="26" x="8" y="6" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:circle cx="14" cy="27" r="2" fill="#000"></svg:circle><svg:circle cx="34" cy="27" r="2" fill="#000"></svg:circle><svg:rect width="20" height="10" x="14" y="12" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 32L40 41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 32L8 41"></svg:path></svg:g>`,
})
export class IconParkSubwayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSuccessIcon],svg[icon-park-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 4L29.2533 7.83204L35.7557 7.81966L37.7533 14.0077L43.0211 17.8197L41 24L43.0211 30.1803L37.7533 33.9923L35.7557 40.1803L29.2533 40.168L24 44L18.7467 40.168L12.2443 40.1803L10.2467 33.9923L4.97887 30.1803L7 24L4.97887 17.8197L10.2467 14.0077L12.2443 7.81966L18.7467 7.83204L24 4Z"></svg:path><svg:path stroke="#fff" d="M17 24L22 29L32 19"></svg:path></svg:g>`,
})
export class IconParkSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSuccessPictureIcon],svg[icon-park-success-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M44 22C44 20.8954 43.1046 20 42 20C40.8954 20 40 20.8954 40 22H44ZM24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 22V39H44V22H40ZM9 8H24V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"></svg:path><svg:path fill="#000" d="M31.4142 9.58579C30.6332 8.80474 29.3668 8.80474 28.5858 9.58579C27.8047 10.3668 27.8047 11.6332 28.5858 12.4142L31.4142 9.58579ZM34 15L32.5858 16.4142C33.3668 17.1953 34.6332 17.1953 35.4142 16.4142L34 15ZM43.4142 8.41421C44.1953 7.63317 44.1953 6.36683 43.4142 5.58579C42.6332 4.80474 41.3668 4.80474 40.5858 5.58579L43.4142 8.41421ZM28.5858 12.4142L32.5858 16.4142L35.4142 13.5858L31.4142 9.58579L28.5858 12.4142ZM35.4142 16.4142L43.4142 8.41421L40.5858 5.58579L32.5858 13.5858L35.4142 16.4142Z"></svg:path></svg:g>`,
})
export class IconParkSuccessPictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSumIcon],svg[icon-park-sum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 7V19H7C5.89543 19 5 19.8954 5 21V41C5 42.1046 5.89543 43 7 43H27C28.1046 43 29 42.1046 29 41V29H41C42.1046 29 43 28.1046 43 27V7C43 5.89543 42.1046 5 41 5H21C19.8954 5 19 5.89543 19 7Z"></svg:path>`,
})
export class IconParkSumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSunIcon],svg[icon-park-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M9.15039 9.15088L11.3778 11.3783"></svg:path><svg:path stroke-linecap="round" d="M3 24H6.15"></svg:path><svg:path stroke-linecap="round" d="M9.15039 38.8495L11.3778 36.6221"></svg:path><svg:path stroke-linecap="round" d="M38.8495 38.8495L36.6221 36.6221"></svg:path><svg:path stroke-linecap="round" d="M44.9996 24H41.8496"></svg:path><svg:path stroke-linecap="round" d="M38.8495 9.15088L36.6221 11.3783"></svg:path><svg:path stroke-linecap="round" d="M24 3V6.15"></svg:path><svg:path fill="#fff" d="M24 36C30.6274 36 36 30.6274 36 24C36 17.3726 30.6274 12 24 12C17.3726 12 12 17.3726 12 24C12 30.6274 17.3726 36 24 36Z"></svg:path><svg:path stroke-linecap="round" d="M24 45.0001V41.8501"></svg:path></svg:g>`,
})
export class IconParkSunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSunHatIcon],svg[icon-park-sun-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M12 10C12 8.89543 12.8954 8 14 8H34C35.1046 8 36 8.89543 36 10V20H12V10Z"></svg:path><svg:path d="M44 35C42.8917 36.3333 41.625 40 36.4 40C33.6627 40 29.9439 38.3161 25 37"></svg:path><svg:path d="M4 35C4 35 10 26 12 20H36C38 26 44 35 44 35C38 31 19 40 12 40C6.5 40 5.16667 36.3333 4 35Z"></svg:path></svg:g>`,
})
export class IconParkSunHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSunOneIcon],svg[icon-park-sun-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 37C31.1797 37 37 31.1797 37 24C37 16.8203 31.1797 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37Z"></svg:path><svg:path fill="#000" d="M24 6C25.3807 6 26.5 4.88071 26.5 3.5C26.5 2.11929 25.3807 1 24 1C22.6193 1 21.5 2.11929 21.5 3.5C21.5 4.88071 22.6193 6 24 6Z"></svg:path><svg:path fill="#000" d="M38.5 12C39.8807 12 41 10.8807 41 9.5C41 8.11929 39.8807 7 38.5 7C37.1193 7 36 8.11929 36 9.5C36 10.8807 37.1193 12 38.5 12Z"></svg:path><svg:path fill="#000" d="M44.5 26.5C45.8807 26.5 47 25.3807 47 24C47 22.6193 45.8807 21.5 44.5 21.5C43.1193 21.5 42 22.6193 42 24C42 25.3807 43.1193 26.5 44.5 26.5Z"></svg:path><svg:path fill="#000" d="M38.5 41C39.8807 41 41 39.8807 41 38.5C41 37.1193 39.8807 36 38.5 36C37.1193 36 36 37.1193 36 38.5C36 39.8807 37.1193 41 38.5 41Z"></svg:path><svg:path fill="#000" d="M24 47C25.3807 47 26.5 45.8807 26.5 44.5C26.5 43.1193 25.3807 42 24 42C22.6193 42 21.5 43.1193 21.5 44.5C21.5 45.8807 22.6193 47 24 47Z"></svg:path><svg:path fill="#000" d="M9.5 41C10.8807 41 12 39.8807 12 38.5C12 37.1193 10.8807 36 9.5 36C8.11929 36 7 37.1193 7 38.5C7 39.8807 8.11929 41 9.5 41Z"></svg:path><svg:path fill="#000" d="M3.5 26.5C4.88071 26.5 6 25.3807 6 24C6 22.6193 4.88071 21.5 3.5 21.5C2.11929 21.5 1 22.6193 1 24C1 25.3807 2.11929 26.5 3.5 26.5Z"></svg:path><svg:path fill="#000" d="M9.5 12C10.8807 12 12 10.8807 12 9.5C12 8.11929 10.8807 7 9.5 7C8.11929 7 7 8.11929 7 9.5C7 10.8807 8.11929 12 9.5 12Z"></svg:path></svg:g>`,
})
export class IconParkSunOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSunbathIcon],svg[icon-park-sunbath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M11 36V40"></svg:path><svg:path stroke-linejoin="round" d="M6 36L40 36"></svg:path><svg:path stroke-linejoin="round" d="M8 30H24"></svg:path><svg:path stroke-linejoin="round" d="M37 11L34 16"></svg:path><svg:path d="M35 36V40"></svg:path><svg:path stroke-linejoin="round" d="M44 10L29 36"></svg:path><svg:path stroke-linejoin="round" d="M39 19L44 28"></svg:path></svg:g>`,
})
export class IconParkSunbathIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSunnyIcon],svg[icon-park-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30.7826 24.5652C34.5285 24.5652 37.5652 21.5285 37.5652 17.7826C37.5652 14.0367 34.5285 11 30.7826 11C27.4338 11 24.6518 13.427 24.0996 16.618"></svg:path><svg:path fill="#000" d="M33 7C34.1046 7 35 6.10457 35 5C35 3.89543 34.1046 3 33 3C31.8954 3 31 3.89543 31 5C31 6.10457 31.8954 7 33 7Z"></svg:path><svg:path fill="#000" d="M42 12C43.1046 12 44 11.1046 44 10C44 8.89543 43.1046 8 42 8C40.8954 8 40 8.89543 40 10C40 11.1046 40.8954 12 42 12Z"></svg:path><svg:path fill="#000" d="M44 21C45.1046 21 46 20.1046 46 19C46 17.8954 45.1046 17 44 17C42.8954 17 42 17.8954 42 19C42 20.1046 42.8954 21 44 21Z"></svg:path><svg:path fill="#000" d="M22 10C23.1046 10 24 9.10457 24 8C24 6.89543 23.1046 6 22 6C20.8954 6 20 6.89543 20 8C20 9.10457 20.8954 10 22 10Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9.45455 39.9942C6.14242 37.461 4 33.4278 4 28.8851C4 21.2166 10.1052 15 17.6364 15C23.9334 15 29.2336 19.3462 30.8015 25.2533C32.0353 24.6159 33.431 24.2567 34.9091 24.2567C39.9299 24.2567 44 28.4011 44 33.5135C44 37.3094 41.7562 40.5716 38.5455 42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.2426 24.7574C21.1569 23.6716 19.6569 23 18 23C14.6863 23 12 25.6863 12 29C12 30.6569 12.6716 32.1569 13.7574 33.2426"></svg:path></svg:g>`,
})
export class IconParkSunnyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSunriseIcon],svg[icon-park-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24H7"></svg:path><svg:path d="M10 10L12 12"></svg:path><svg:path d="M24 4V7"></svg:path><svg:path d="M14 24C14 18.4776 18.4776 14 24 14C29.5224 14 34 18.4776 34 24C34 27.3674 32.3357 30.3458 29.785 32.1578"></svg:path><svg:path d="M38 10L36 12"></svg:path><svg:path d="M44 24L41 24"></svg:path><svg:path d="M37.9814 37.982L36.3614 36.362"></svg:path><svg:path d="M23.4999 28C20.4999 28 14 28.2 14 31C14 33.8 18.6058 33.7908 20.9998 34C23 34.1747 26.4624 35.6879 25.9999 38C24.9998 43 8.99982 42 4.99994 42"></svg:path></svg:g>`,
})
export class IconParkSunriseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSunsetIcon],svg[icon-park-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M19 8L33 34H5L19 8Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M29 26L34 20L43 34H32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 41L38 41"></svg:path><svg:circle cx="38" cy="10" r="3" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkSunsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSunshadeIcon],svg[icon-park-sunshade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40.1032 25.8171C39.2068 28.0998 30.4308 28.8255 21.3618 26.3955C12.2929 23.9655 6.5828 19.5523 7.2617 17.0172C8.79543 11.2933 16.9744 2.46226 28.6712 6.68869C40.368 10.9151 41.6369 20.0931 40.1032 25.8171Z"></svg:path><svg:path d="M27.9995 7.00001C27.9995 7.00001 23.9993 13.5 20.9995 24C17.9997 34.5 17.9997 42 17.9997 42"></svg:path><svg:path d="M28.0003 6.99998C28.0003 6.99998 17.7941 8.84351 15 17"></svg:path><svg:path d="M28.0003 7.00001C28.0003 7.00001 34 13 30.9998 22"></svg:path><svg:path d="M10 43C10 43 19 41.5 26 41.5C33 41.5 39 42 39 42"></svg:path><svg:path d="M27.9999 6.99988C29 6.99988 31 5.99988 31.8145 4.41966"></svg:path><svg:path d="M34 41C34 39.3431 33 37 30 37C27 37 26 39.3431 26 41"></svg:path></svg:g>`,
})
export class IconParkSunshadeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSurprisedFaceWithOpenBigMouthIcon],svg[icon-park-surprised-face-with-open-big-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:rect width="12" height="12" x="18" y="24" fill="#43CCF8" stroke="#fff" stroke-linecap="round" rx="6"></svg:rect></svg:g>`,
})
export class IconParkSurprisedFaceWithOpenBigMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSurprisedFaceWithOpenMouthIcon],svg[icon-park-surprised-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 18V19"></svg:path><svg:rect width="8" height="8" x="20" y="28" fill="#43CCF8" stroke="#fff" stroke-linecap="round" rx="4"></svg:rect></svg:g>`,
})
export class IconParkSurprisedFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSurveillanceCamerasIcon],svg[icon-park-surveillance-cameras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 6H23H5"></svg:path><svg:path d="M23 23V6"></svg:path><svg:path fill="#2F88FF" d="M8.42498 19.5798L40.3005 28.1209L38.5581 30.7598L34.5557 37.9696L32.8133 40.6085L4.80151 33.1028L8.42498 19.5798Z"></svg:path><svg:path d="M38.5583 30.7598L42.422 31.7951L40.3515 39.5225L34.5559 37.9696"></svg:path></svg:g>`,
})
export class IconParkSurveillanceCamerasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSurveillanceCamerasOneIcon],svg[icon-park-surveillance-cameras-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 26V42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 33H13L17 27"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 20L33.4735 37.649C33.795 37.8633 34.2113 37.8732 34.5426 37.6744L44 32"></svg:path><svg:path fill="#2F88FF" d="M7.07802 12.7187C6.53287 12.3553 6.47866 11.5745 6.96836 11.1392L14.4279 4.50855C14.7655 4.20844 15.2624 4.17194 15.6403 4.4195L42.7046 22.1513C43.312 22.5493 43.3061 23.4416 42.6935 23.8314L33.5496 29.6503C33.2155 29.8629 32.7875 29.8583 32.458 29.6387L7.07802 12.7187Z"></svg:path></svg:g>`,
})
export class IconParkSurveillanceCamerasOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSurveillanceCamerasTwoIcon],svg[icon-park-surveillance-cameras-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19.0059 26.2759V37.0001H5"></svg:path><svg:path d="M42.6205 21.2152L38.7568 20.1799L34.7544 27.3897L40.55 28.9426L42.6205 21.2152Z"></svg:path><svg:path fill="#2F88FF" d="M38.7566 20.18L34.7542 27.3898L33.0118 30.0287L5 22.523L8.62347 9L40.499 17.541L38.7566 20.18Z"></svg:path></svg:g>`,
})
export class IconParkSurveillanceCamerasTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwallowIcon],svg[icon-park-swallow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8.99902 33.3135L24.0339 6.94269C24.958 4.9809 26.6267 4 29.0402 4C32.6603 4 35.0172 8.98626 35.0172 8.98626C35.0172 8.98626 36.3445 9.18401 38.999 9.57953C34.9888 9.64514 32.6699 10.452 32.0424 12C31.1012 14.3221 34.4983 16.7308 35.0172 20.0039C35.5361 23.2769 33.4663 28.8051 28.4882 31.567C25.1694 33.4083 21.0262 33.8859 16.0583 33L9.95844 44"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M18.9424 27.978C21.5213 23.3284 23.2169 20.3429 24.0293 19.0215C25.2478 17.0394 30.2745 17.637 28.4685 22.5843C27.2645 25.8824 24.0891 27.6803 18.9424 27.978Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkSwallowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSweaterIcon],svg[icon-park-sweater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M14 37H6V24L11 9L19 4H24H29L38 9L42 24V37H34V44H24H14V37Z"></svg:path><svg:path d="M34 28V37"></svg:path><svg:path d="M14 28V37"></svg:path></svg:g>`,
})
export class IconParkSweaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwimmingPoolIcon],svg[icon-park-swimming-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M36 27V8C36 5.79 37.79 4 40 4H44"></svg:path><svg:path d="M10 27V8C10 5.79 11.79 4 14 4H18"></svg:path><svg:path d="M10 12H36"></svg:path><svg:path d="M10 20H36"></svg:path><svg:path d="M4 34L6.5 35.3514C8.1 36.2162 9.9 36.2162 11.5 35.3514C13.1 34.4865 14.9 34.4865 16.5 35.3514C18.1 36.2162 19.9 36.2162 21.5 35.3514C23.1 34.4865 24.9 34.4865 26.5 35.3514C28.1 36.2162 29.9 36.2162 31.5 35.3514C33.1 34.4865 34.9 34.4865 36.5 35.3514C38.1 36.2162 39.9 36.2162 41.5 35.3514L44 34"></svg:path><svg:path d="M4 40L6.5 41.3514C8.1 42.2162 9.9 42.2162 11.5 41.3514C13.1 40.4865 14.9 40.4865 16.5 41.3514C18.1 42.2162 19.9 42.2162 21.5 41.3514C23.1 40.4865 24.9 40.4865 26.5 41.3514C28.1 42.2162 29.9 42.2162 31.5 41.3514C33.1 40.4865 34.9 40.4865 36.5 41.3514C38.1 42.2162 39.9 42.2162 41.5 41.3514L44 40"></svg:path></svg:g>`,
})
export class IconParkSwimmingPoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwimmingRingIcon],svg[icon-park-swimming-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M28 33.1679C30.3069 32.16 32.16 30.3069 33.1679 28"></svg:path><svg:path stroke-linecap="round" d="M14.832 28C15.84 30.3069 17.6931 32.16 19.9999 33.1679"></svg:path><svg:path stroke-linecap="round" d="M19.9999 14.832C17.6931 15.84 15.84 17.6931 14.832 19.9999"></svg:path><svg:path stroke-linecap="round" d="M28 14.832C30.3069 15.84 32.16 17.6931 33.1679 19.9999"></svg:path><svg:path stroke-linecap="round" d="M30 40.9758C35.1145 39.1681 39.1681 35.1145 40.9758 30"></svg:path><svg:path stroke-linecap="round" d="M7.02441 30C8.83212 35.1145 12.8857 39.1681 18.0002 40.9758"></svg:path><svg:path stroke-linecap="round" d="M18.0002 7.02441C12.8857 8.83212 8.83212 12.8857 7.02441 18.0002"></svg:path><svg:path stroke-linecap="round" d="M30 7.02441C35.1145 8.83212 39.1681 12.8857 40.9758 18.0002"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" stroke-miterlimit="2" d="M27 17H21L18 7L20 4H28L30 7L27 17Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" stroke-miterlimit="2" d="M17 21V27L7 30L4 28L4 20L7 18L17 21Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" stroke-miterlimit="2" d="M21 31H27L30 41L28 44H20L18 41L21 31Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" stroke-miterlimit="2" d="M31 27V21L41 18C42.08 18.8 42.92 19.2 44 20V28C42.92 28.8 42.08 29.2 41 30L31 27Z"></svg:path></svg:g>`,
})
export class IconParkSwimmingRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwimsuitIcon],svg[icon-park-swimsuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 4V11"></svg:path><svg:path d="M34 4V11"></svg:path><svg:path d="M12 31H36V36C33 36 26 39 26 44H21C21 39 15 36 12 36V31Z"></svg:path><svg:circle cx="14" cy="18" r="7" fill="#2F88FF"></svg:circle><svg:circle cx="34" cy="18" r="7" fill="#2F88FF"></svg:circle><svg:path d="M21 18H27"></svg:path></svg:g>`,
})
export class IconParkSwimsuitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwingIcon],svg[icon-park-swing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M9.99985 35.9998C8.00079 32.4998 7.99899 25.9998 7.99975 16.9998C8.00001 13.9998 11.9995 12.9998 13.9993 15.9998C15.1072 17.6617 15.8159 22.264 15.8159 22.264L22.3109 11.0145C23.0068 9.80903 24.5483 9.396 25.7538 10.092C26.9593 10.788 27.3723 12.3294 26.6763 13.5349L27.0641 12.8633C27.7601 11.6578 29.3015 11.2448 30.507 11.9408C31.7125 12.6368 32.1256 14.1783 31.4296 15.3838L31.0418 16.0554C31.7378 14.8499 33.2793 14.4368 34.4848 15.1328C35.6903 15.8288 36.1033 17.3703 35.4073 18.5758L33.8549 21.2646C34.5517 20.0578 36.0948 19.6443 37.3016 20.3411C38.5066 21.0367 38.921 22.5765 38.2279 23.783L29.0588 39.745C28.9612 39.9148 28.8614 40.0815 28.7382 40.2337C28.1666 40.9395 26.1434 42.9998 21.9999 42.9998C17.3408 42.9998 12.4782 40.339 9.99985 35.9998Z"></svg:path><svg:path d="M37 5C38.3788 5.73333 40.5055 6.75828 42 9C43 10.5 43.5 12.5 43.7908 15"></svg:path></svg:g>`,
})
export class IconParkSwingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwipeIcon],svg[icon-park-swipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 15L19.3714 25.5377C20.5 26.5 22.8282 28 25 26C27.2893 23.8918 25.5 21.5 25 21L17 15"></svg:path><svg:path d="M4 8H27L38 18"></svg:path><svg:path d="M9 33L44 33.0193"></svg:path><svg:path d="M9 18V40H44V18H22.0002"></svg:path></svg:g>`,
})
export class IconParkSwipeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchIcon],svg[icon-park-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 19H5.99998"></svg:path><svg:path d="M30 7L42 19"></svg:path><svg:path d="M6.79897 29H42.799"></svg:path><svg:path d="M6.79895 29L18.799 41"></svg:path></svg:g>`,
})
export class IconParkSwitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchButtonIcon],svg[icon-park-switch-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M36 4H12C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20H36C40.4183 20 44 16.4183 44 12C44 7.58172 40.4183 4 36 4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M36 28H12C7.58172 28 4 31.5817 4 36C4 40.4183 7.58172 44 12 44H36C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M36 14C37.1046 14 38 13.1046 38 12C38 10.8954 37.1046 10 36 10C34.8954 10 34 10.8954 34 12C34 13.1046 34.8954 14 36 14Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M12 38C13.1046 38 14 37.1046 14 36C14 34.8954 13.1046 34 12 34C10.8954 34 10 34.8954 10 36C10 37.1046 10.8954 38 12 38Z"></svg:path></svg:g>`,
})
export class IconParkSwitchButtonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchContrastIcon],svg[icon-park-switch-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 10H40C41.8856 10 42.8284 10 43.4142 10.5858C44 11.1716 44 12.1144 44 14V34C44 35.8856 44 36.8284 43.4142 37.4142C42.8284 38 41.8856 38 40 38H30"></svg:path><svg:path d="M18 10H8C6.11438 10 5.17157 10 4.58579 10.5858C4 11.1716 4 12.1144 4 14V34C4 35.8856 4 36.8284 4.58579 37.4142C5.17157 38 6.11438 38 8 38H18"></svg:path><svg:path d="M24 6V42"></svg:path></svg:g>`,
})
export class IconParkSwitchContrastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchNintendoIcon],svg[icon-park-switch-nintendo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M6 12C6 7.58172 9.58172 4 14 4H19C20.1046 4 21 4.89543 21 6V40C21 41.1046 20.1046 42 19 42H14C9.58172 42 6 38.4183 6 34V12Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M42 14C42 9.58172 38.4183 6 34 6H28C26.8954 6 26 6.89543 26 8V42C26 43.1046 26.8954 44 28 44H34C38.4183 44 42 40.4183 42 36V14Z"></svg:path><svg:rect width="5" height="5" x="11" y="30" fill="#fff" rx="2.5"></svg:rect><svg:rect width="5" height="5" x="31.5" y="14" fill="#fff" rx="2.5"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 17H12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 28V34"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M31 31L37 31"></svg:path></svg:g>`,
})
export class IconParkSwitchNintendoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchOneIcon],svg[icon-park-switch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="19" fill="#2F88FF" stroke="#000"></svg:circle><svg:rect width="10.519" height="24.012" x="36.006" y="19.334" fill="#43CCF8" stroke="#fff" rx="5.259" transform="rotate(90 36.006 19.334)"></svg:rect><svg:rect width="10" height="10" x="36.006" y="29.852" stroke="#fff" rx="5" transform="rotate(-180 36.006 29.852)"></svg:rect></svg:g>`,
})
export class IconParkSwitchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchThemesIcon],svg[icon-park-switch-themes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M23 4V27H43.9933L44 4H23Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M31.0049 43.9998C24.6752 43.9998 20.5595 43.9998 18.6579 43.9998C16.9557 43.9998 14.9159 43.4318 13.5475 41.6126C12.6229 40.3832 12.0049 38.5826 12.0049 35.9998C12.0049 31.7298 12.0049 28.063 12.0049 24.9995"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M4 32.9998L12.0046 24.9995L20.0138 32.9998"></svg:path><svg:path stroke="#fff" d="M30 19H37"></svg:path><svg:path stroke="#fff" d="M30 12H37"></svg:path></svg:g>`,
})
export class IconParkSwitchThemesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchTrackIcon],svg[icon-park-switch-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40 4V18L8 30L8 44"></svg:path><svg:path d="M8 22V17"></svg:path><svg:path d="M8 9V4"></svg:path><svg:path d="M40 44V39"></svg:path><svg:path d="M40 31V26"></svg:path></svg:g>`,
})
export class IconParkSwitchTrackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchingDoneIcon],svg[icon-park-switching-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M29.6325 4H21.9932V27H43.9932V20.9631"></svg:path><svg:path stroke-linejoin="round" d="M29.0015 13.003L33.5649 17.4445L45.0001 6"></svg:path><svg:path d="M30.0049 43.9998C23.6752 43.9998 19.5595 43.9998 17.6579 43.9998C15.9557 43.9998 13.9159 43.4318 12.5475 41.6126C11.6229 40.3832 11.0049 38.5826 11.0049 35.9998C11.0049 31.7298 11.0049 28.063 11.0049 24.9995"></svg:path><svg:path stroke-linejoin="round" d="M3 32.9998L11.0046 24.9995L19.0138 32.9998"></svg:path></svg:g>`,
})
export class IconParkSwitchingDoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSymbolIcon],svg[icon-park-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 40.0032H18.0039C11.3346 35.6355 8 30.3009 8 23.9995C8 14.5473 15.0167 7.99976 24.0083 7.99976C33 7.99976 40 14.9998 40 23.9995C40 29.9993 36.6689 35.3338 30.0066 40.0032H44"></svg:path>`,
})
export class IconParkSymbolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSymbolDoubleXIcon],svg[icon-park-symbol-double-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 4L24 18L38 4"></svg:path><svg:path d="M10 44L24 30L38 44"></svg:path><svg:path d="M43 10L29 24L43 38"></svg:path><svg:path d="M4 10L18 24L4 38"></svg:path></svg:g>`,
})
export class IconParkSymbolDoubleXIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSymmetryIcon],svg[icon-park-symmetry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 15L24 9V39L4 33V15Z"></svg:path><svg:path d="M24 9L44 15V33L24 39V9Z"></svg:path><svg:path stroke-linecap="round" d="M24 4V44"></svg:path></svg:g>`,
})
export class IconParkSymmetryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSyncIcon],svg[icon-park-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M30 7.979L19 8.00006V18.0001H4V32H20.9995"></svg:path><svg:path d="M20 42L31 41.9789V31.5789H44V18H30.3448"></svg:path></svg:g>`,
})
export class IconParkSyncIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSystemIcon],svg[icon-park-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z"></svg:path><svg:path d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z"></svg:path><svg:path d="M35 20C38.866 20 42 16.866 42 13C42 9.13401 38.866 6 35 6C31.134 6 28 9.13401 28 13C28 16.866 31.134 20 35 20Z"></svg:path><svg:path d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z"></svg:path></svg:g>`,
})
export class IconParkSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTShirtIcon],svg[icon-park-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M9 9L18 4H30L39 9L43 24L35 30V44H13V30L5 24L9 9Z"></svg:path><svg:path d="M13 31L13 24"></svg:path><svg:path d="M35 31L35 24"></svg:path></svg:g>`,
})
export class IconParkTShirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTableIcon],svg[icon-park-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M14 16H34"></svg:path><svg:path stroke="#fff" d="M14 24H34"></svg:path><svg:path stroke="#fff" d="M14 32H34"></svg:path><svg:path stroke="#fff" d="M18 12V36"></svg:path></svg:g>`,
})
export class IconParkTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTableFileIcon],svg[icon-park-table-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 6H6C4.89543 6 4 6.89543 4 8V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V8C44 6.89543 43.1046 6 42 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 18H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17.5 18V42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M30.5 18V42"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 30H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 8V40C44 41.1046 43.1046 42 42 42H6C4.89543 42 4 41.1046 4 40V8"></svg:path></svg:g>`,
})
export class IconParkTableFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTableLampIcon],svg[icon-park-table-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 44L42 28L22 12"></svg:path><svg:path fill="#2F88FF" d="M6 12L16 22L24 8L20 4L6 12Z"></svg:path><svg:path d="M38 44H12"></svg:path><svg:path d="M17 44V40"></svg:path></svg:g>`,
})
export class IconParkTableLampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTableReportIcon],svg[icon-park-table-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 7C5 5.34315 6.34315 4 8 4H32C33.6569 4 35 5.34315 35 7V44H8C6.34315 44 5 42.6569 5 41V7Z"></svg:path><svg:path stroke="#000" d="M35 24C35 22.8954 35.8954 22 37 22H41C42.1046 22 43 22.8954 43 24V41C43 42.6569 41.6569 44 40 44H35V24Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M11 12H19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M11 19H23"></svg:path></svg:g>`,
})
export class IconParkTableReportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTabletennisIcon],svg[icon-park-tabletennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-miterlimit="2" stroke-width="4" d="M31.4502 16.96C34.2116 16.96 36.4502 14.7214 36.4502 11.96C36.4502 9.19854 34.2116 6.95996 31.4502 6.95996C28.6888 6.95996 26.4502 9.19854 26.4502 11.96C26.4502 14.7214 28.6888 16.96 31.4502 16.96Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M36 34L34 23L23 28L10 25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M4 41.0298H44"></svg:path><svg:circle cx="9" cy="25" r="5" fill="#000"></svg:circle><svg:circle cx="6" cy="17" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M34 23L44 29L29 34"></svg:path></svg:g>`,
})
export class IconParkTabletennisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTagIcon],svg[icon-park-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44L8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V44L24 35.7273L8 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 18H32"></svg:path></svg:g>`,
})
export class IconParkTagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTagOneIcon],svg[icon-park-tag-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M42.1691 29.2451L29.2631 42.1511C28.5879 42.8271 27.6716 43.2069 26.7161 43.2069C25.7606 43.2069 24.8444 42.8271 24.1691 42.1511L8 26V8H26L42.1691 24.1691C43.5649 25.5732 43.5649 27.841 42.1691 29.2451Z"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkTagOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTailoringIcon],svg[icon-park-tailoring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M12 4V36H44"></svg:path><svg:path stroke-linejoin="round" d="M20 12H36V28"></svg:path><svg:path d="M12 12H4"></svg:path><svg:path d="M36 44V36"></svg:path></svg:g>`,
})
export class IconParkTailoringIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTailoringTwoIcon],svg[icon-park-tailoring-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M42 5H37.4142C36.5233 5 36.0771 6.07714 36.7071 6.70711L41.2929 11.2929C41.9229 11.9229 43 11.4767 43 10.5858V6C43 5.44772 42.5523 5 42 5Z"></svg:path><svg:path fill="#000" d="M8 43H12.5858C13.4767 43 13.9229 41.9229 13.2929 41.2929L8.70711 36.7071C8.07714 36.0771 7 36.5233 7 37.4142L7 42C7 42.5523 7.44772 43 8 43Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 4V32C14 33.1046 14.8954 34 16 34H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 13H35V27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M14 13H6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M36 42V34"></svg:path></svg:g>`,
})
export class IconParkTailoringTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTajMahalIcon],svg[icon-park-taj-mahal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M16 28H8C6.89543 28 6 28.8954 6 30V44"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M32 28H40C41.1046 28 42 28.8954 42 30V44"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M19.9994 24H27.9994C27.9994 24 33.1652 18.3215 31.9994 15C31.2446 12.8494 29.5615 11.6597 27.9994 10C26.4373 8.34027 23.9994 6 23.9994 6C23.9994 6 21.5615 8.34027 19.9994 10C18.4373 11.6597 16.7542 12.8494 15.9994 15C14.8337 18.3215 19.9994 24 19.9994 24Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 24H24H32V44H16V24Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 34V44"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 4V7"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10 24V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 24V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 44L28 44"></svg:path></svg:g>`,
})
export class IconParkTajMahalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTakeOffIcon],svg[icon-park-take-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M22 29L13.7763 33.1118C12.6994 33.6503 11.4049 33.4927 10.4886 32.7117L4 27.1808L7.56226 25.8157C8.19869 25.5718 8.8992 25.5519 9.54846 25.7592L12.8273 26.8063C13.5787 27.0463 14.3944 26.9807 15.0977 26.6237L37.36 15.3248C37.7807 15.1113 38.2459 15 38.7177 15H44L42.4472 18.1056C42.1569 18.6862 41.6862 19.1569 41.1056 19.4472L32 24"></svg:path><svg:path d="M22.0007 29L18.0003 31L23.0003 41L32.0003 24"></svg:path><svg:path d="M17 25L12 16L28 20"></svg:path></svg:g>`,
})
export class IconParkTakeOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTakeOffOneIcon],svg[icon-park-take-off-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4.99707 40.9883L42.9971 40.9883"></svg:path><svg:path fill="#2F88FF" d="M8.52068 31.2641L3.90765 23.2741C4.87794 22.7139 9.67924 24.3889 11.4666 25.3061L21.1686 21.8332L12.8733 7.46538L16.9879 7.21842L30.3885 19.6798L38.6389 17.0682C42.2926 16.023 43.4449 18.0188 43.675 18.4175C45.0577 20.8123 42.2639 22.4252 41.8648 22.6556C38.672 24.499 8.52068 31.2641 8.52068 31.2641Z"></svg:path></svg:g>`,
})
export class IconParkTakeOffOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTaobaoIcon],svg[icon-park-taobao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24 4.36364C13.1551 4.36364 4.36364 13.1551 4.36364 24C4.36364 34.8449 13.1551 43.6364 24 43.6364C34.8449 43.6364 43.6364 34.8449 43.6364 24C43.6364 13.1551 34.8449 4.36364 24 4.36364ZM19.1273 11.6177L22.7626 12.3626C22.6634 13.0622 22.4273 13.8541 22.0543 14.7383C23.2431 14.31 24.3806 13.9947 25.466 13.7917C27.8531 13.3454 29.7082 13.0909 31.5472 13.0909C33.3862 13.0909 34.8014 13.1095 36.5962 14.5261C37.7129 15.4076 38.3999 16.5671 38.6572 18.0045L38.7058 18.3168V30.9897C38.7058 31.8359 38.4803 32.7094 38.0292 33.6101C37.6064 34.4546 36.7928 34.932 35.5885 35.0423L35.3424 35.0595H27.8024C27.3202 33.6504 27.3202 32.8184 27.8024 32.5637C28.5256 32.1816 31.3051 33.2064 32.5259 32.5637C33.2855 32.1638 33.6722 31.4194 33.6858 30.3307L33.6831 30.0921V18.1324C33.6831 16.2794 32.5496 14.9986 29.0578 15.189C27.1624 15.2924 24.9495 15.763 22.4192 16.601L23.2411 16.851L24.2327 17.1886V17.5143C24.2327 18.0662 24.6428 18.5237 25.1772 18.5955L25.3025 18.605L32.6004 18.7457V20.7543H27.1449V23.2534H32.6004V24.8061H27.0854L27.1449 29.6797C27.6591 29.7188 28.1662 29.6142 28.6661 29.3658C29.0013 29.1993 29.2635 28.9579 29.4526 28.6415L29.0889 27.9224C29.0885 27.9216 29.0881 27.9209 29.0877 27.9201C28.8361 27.4205 29.0048 26.8192 29.4611 26.5189L29.5714 26.4551L30.8247 25.8239C30.8745 25.7989 30.9261 25.7776 30.9791 25.7605C31.5114 25.588 32.0798 25.8465 32.307 26.3432L32.3532 26.462L33.0964 28.7558C33.2436 29.2102 33.0774 29.7019 32.6981 29.976L32.5894 30.0451L31.689 30.5466C31.6765 30.5536 31.6639 30.5603 31.6511 30.5667C31.152 30.8195 30.5504 30.6522 30.249 30.1966L30.185 30.0865L30.1714 30.0629C29.6195 30.6617 29.0968 31.1206 28.6034 31.4398C27.7867 31.9681 26.9058 32.3985 25.8899 32.4665L25.6095 32.4759H20.3553C19.9292 32.4759 19.1567 32.1994 18.3633 31.4398C17.8785 30.9756 17.5835 30.2517 17.4785 29.268L17.4545 28.9933V26.2516H21.6108C21.6443 27.4372 21.7552 28.3511 21.9437 28.9933C22.1196 29.5926 22.5858 29.8319 23.3422 29.7111L23.5088 29.6797V24.8061H17.4545V23.2534H23.5088V20.7543H22.3509L20.5157 23.0498L18.5174 21.7861C19.7463 20.4007 20.498 19.5036 20.7724 19.0947C21.0468 18.6858 21.0468 17.9813 20.7724 16.9814L20.8189 17.1633L20.7778 17.1801C20.07 18.2499 19.1326 19.2869 17.9657 20.2909L17.5827 20.6125L15.0765 18.1365C16.2176 17.2504 17.053 16.4263 17.5827 15.6642C18.1124 14.9021 18.6273 13.5533 19.1273 11.6177ZM11.4318 17.788L15.0085 21.15C16.3057 22.3693 16.7268 24.2477 16.093 25.8952L16.0043 26.1087L12.2945 34.4169L8.20691 31.5766L13.409 26.0677C13.4785 25.9941 13.5428 25.9157 13.6014 25.8332C14.2643 24.9 14.0893 23.624 13.2279 22.9005L13.0862 22.791L9.37195 20.1527L11.4318 17.788ZM13.6364 10.9091C15.1426 10.9091 16.3636 12.1301 16.3636 13.6364C16.3636 15.1426 15.1426 16.3636 13.6364 16.3636C12.1301 16.3636 10.9091 15.1426 10.9091 13.6364C10.9091 12.1301 12.1301 10.9091 13.6364 10.9091Z"></svg:path>`,
})
export class IconParkTaobaoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTapeIcon],svg[icon-park-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 12C4 10.8954 4.89543 10 6 10H10H38H42C43.1046 10 44 10.8954 44 12V36C44 37.1046 43.1046 38 42 38H6C4.89543 38 4 37.1046 4 36V12Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.2701 10C12.5744 10 11.6481 11.9777 12.7336 13.2804L14.4003 15.2804C14.7803 15.7364 15.3432 16 15.9367 16H24H32.0633C32.6568 16 33.2197 15.7364 33.5997 15.2804L35.2664 13.2804C36.3519 11.9777 35.4256 10 33.7299 10H14.2701Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 10V10H10H38H42"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M33 31C35.2091 31 37 29.2091 37 27C37 24.7909 35.2091 23 33 23C30.7909 23 29 24.7909 29 27C29 29.2091 30.7909 31 33 31Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M15 31C17.2091 31 19 29.2091 19 27C19 24.7909 17.2091 23 15 23C12.7909 23 11 24.7909 11 27C11 29.2091 12.7909 31 15 31Z"></svg:path></svg:g>`,
})
export class IconParkTapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTapeMeasureIcon],svg[icon-park-tape-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M13 15V12C13 10.3431 11.6569 9 10 9V9C8.34315 9 7 10.3431 7 12V19"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 27C4 20.3726 9.37258 15 16 15C22.6274 15 28 20.3726 28 27V39H4V27Z"></svg:path><svg:rect width="16" height="12" x="28" y="27" fill="#2F88FF" stroke="#000" stroke-linejoin="round"></svg:rect><svg:circle cx="16" cy="27" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M39 27L39 31"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M33 27L33 31"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 27H42"></svg:path></svg:g>`,
})
export class IconParkTapeMeasureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTargetIcon],svg[icon-park-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.4172 18.5828C19.3962 19.5481 18 21.6109 18 23.9999C18 27.3136 20.6863 29.9999 24 29.9999C26.389 29.9999 28.4519 28.6037 29.4172 26.5828"></svg:path><svg:path d="M28.2793 11.7207C26.9392 11.2538 25.4992 11 24 11C16.8203 11 11 16.8203 11 24C11 31.1797 16.8203 37 24 37C31.1797 37 37 31.1797 37 24C37 22.5008 36.7462 21.0608 36.2793 19.7207"></svg:path><svg:path d="M33.5675 6.43255C30.7255 4.88151 27.4657 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 20.5343 43.1185 17.2745 41.5675 14.4325"></svg:path><svg:path d="M44 4L24 24"></svg:path></svg:g>`,
})
export class IconParkTargetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTargetOneIcon],svg[icon-park-target-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23.8887 39.8887C32.7287 39.8887 39.8887 32.7287 39.8887 23.8887C39.8887 15.0487 32.7287 7.88867 23.8887 7.88867C15.0487 7.88867 7.88867 15.0487 7.88867 23.8887C7.88867 32.7287 15.0487 39.8887 23.8887 39.8887Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23.8887 31.8887C28.3087 31.8887 31.8887 28.3087 31.8887 23.8887C31.8887 19.4687 28.3087 15.8887 23.8887 15.8887C19.4687 15.8887 15.8887 19.4687 15.8887 23.8887C15.8887 28.3087 19.4687 31.8887 23.8887 31.8887Z"></svg:path><svg:path fill="#000" d="M23.8887 25.8887C24.9887 25.8887 25.8887 24.9887 25.8887 23.8887C25.8887 22.7887 24.9887 21.8887 23.8887 21.8887C22.7887 21.8887 21.8887 22.7887 21.8887 23.8887C21.8887 24.9887 22.7887 25.8887 23.8887 25.8887Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23.8887 7.88867V3.88867"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M37.8887 43.8887L33.8887 36.8887"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M13.8887 36.8887L9.88867 43.8887"></svg:path></svg:g>`,
})
export class IconParkTargetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTargetTwoIcon],svg[icon-park-target-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 41C33.39 41 41 33.39 41 24C41 14.61 33.39 7 24 7C14.61 7 7 14.61 7 24C7 33.39 14.61 41 24 41Z"></svg:path><svg:path d="M24 32C28.42 32 32 28.42 32 24C32 19.58 28.42 16 24 16C19.58 16 16 19.58 16 24C16 28.42 19.58 32 24 32Z"></svg:path><svg:path stroke-linecap="round" d="M4 24H44"></svg:path><svg:path stroke-linecap="round" d="M24 4V44"></svg:path></svg:g>`,
})
export class IconParkTargetTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTaurusIcon],svg[icon-park-taurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="31" r="9" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M44 8C44 15.732 35.0457 22 24 22C12.9543 22 4 15.732 4 8"></svg:path></svg:g>`,
})
export class IconParkTaurusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTaxiIcon],svg[icon-park-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M4 35V27.7097C4 25.4363 5.28486 23.3581 7.3186 22.3422L8.00053 22.0015L10.3105 14.0919C10.7326 12.2812 12.3467 11 14.206 11H33.8943C35.7675 11 37.3899 12.3 37.7981 14.1282L40.0031 22.0015L40.6834 22.3416C42.716 23.358 44 25.4355 44 27.7081V35C44 36.6569 42.6569 38 41 38H39.0031V39C39.0031 41.2091 37.2123 43 35.0031 43C32.7909 43 31 41.2091 31 39V38H17V39.0003C17 41.2093 15.2093 43 13.0003 43C10.7913 43 9.00053 41.2093 9.00053 39.0003V38H7C5.34315 38 4 36.6569 4 35Z"></svg:path><svg:path fill="#fff" d="M13.5 33C14.8807 33 16 31.8807 16 30.5C16 29.1193 14.8807 28 13.5 28C12.1193 28 11 29.1193 11 30.5C11 31.8807 12.1193 33 13.5 33Z"></svg:path><svg:path fill="#fff" d="M34.5 33C35.8807 33 37 31.8807 37 30.5C37 29.1193 35.8807 28 34.5 28C33.1193 28 32 29.1193 32 30.5C32 31.8807 33.1193 33 34.5 33Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 11H30L29.0088 6.04409C28.8868 5.43404 28.3998 5 27.8374 5H20.1626C19.6002 5 19.1132 5.43404 18.9912 6.04409L18 11Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 23H33"></svg:path></svg:g>`,
})
export class IconParkTaxiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTeaIcon],svg[icon-park-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M11 18.1672C11 18.0749 11.0749 18 11.1672 18H34.8328C34.9251 18 35 18.0749 35 18.1672V30C35 36.6274 29.6274 42 23 42C16.3726 42 11 36.6274 11 30V18.1672Z"></svg:path><svg:path d="M35 30C38.3137 30 41 27.3137 41 24C41 20.6863 38.3137 18 35 18"></svg:path><svg:line x1="11" x2="11" y1="8" y2="11" stroke-linejoin="round"></svg:line><svg:line x1="35" x2="35" y1="8" y2="11" stroke-linejoin="round"></svg:line><svg:line x1="23" x2="23" y1="5" y2="11" stroke-linejoin="round"></svg:line></svg:g>`,
})
export class IconParkTeaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTeaDrinkIcon],svg[icon-park-tea-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" d="M2 20C2 32.1503 8 42 20 42C32 42 38 32.1503 38 20H2Z" clip-rule="evenodd"></svg:path><svg:path d="M20 14V6"></svg:path><svg:path d="M30 14V10"></svg:path><svg:path d="M10 14V10"></svg:path><svg:path d="M36.1904 30.6229C37.1802 28.039 37.764 25.1374 37.9417 22.0511C38.2868 22.0174 38.6402 22 39 22C42.866 22 46 24.0147 46 26.5C46 28.9853 42.866 31 39 31C38.0007 31 37.0504 30.8654 36.1904 30.6229Z"></svg:path></svg:g>`,
})
export class IconParkTeaDrinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTeapotIcon],svg[icon-park-teapot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.0013 13C15.7011 13 9.54283 18.0701 7.62207 25H38.3805C36.4597 18.0701 30.3014 13 23.0013 13Z"></svg:path><svg:path fill="#2F88FF" d="M7.00098 29.5926C7.00098 34.0112 8.66648 38.0265 11.382 41H34.62C37.3355 38.0265 39.001 34.0112 39.001 29.5926C39.001 27.9993 38.7844 26.4585 38.3802 25H7.62177C7.21753 26.4585 7.00098 27.9993 7.00098 29.5926Z"></svg:path><svg:path d="M27 13V11C27 8.79086 25.2091 7 23 7V7C20.7909 7 19 8.79086 19 11V13"></svg:path><svg:path d="M7.0006 27.9999C7.0006 27.9999 5.01521 27.8685 4.00007 25.4999C2.5 21.9999 5.00023 19.9998 6.00025 16.9999C6.76104 14.7176 5.20688 13.014 4.41976 12.3296C4.16754 12.1103 4.00053 11.7992 4.00044 11.4649L4.00028 10.8473C4.00015 10.3583 4.35398 9.94412 4.84258 9.92617C5.87825 9.88814 7.66273 9.9969 9.00029 10.9999C11.0006 12.4999 12.0006 16.9999 12.0006 16.9999"></svg:path><svg:path d="M9 41L37 41"></svg:path><svg:path d="M39 25C41.7614 25 44 22.7614 44 20C44 17.2386 41.7614 15 39 15C36.9497 15 35.1876 16.2341 34.416 18"></svg:path></svg:g>`,
})
export class IconParkTeapotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTeethIcon],svg[icon-park-teeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M13.1172 5H14.0026C18.6687 5.68989 19.9341 8.33825 24.0003 8.33825C28.0664 8.33825 29.3314 5.69005 33.9978 5H34.5003C39.747 5 44.0003 9.25329 44.0003 14.5V15.1259C44.0003 18.0287 40.9091 21.3433 40.0003 24.4829C39.035 27.8174 38.3737 30.5425 38.1796 33.3943C37.7248 40.0751 35.447 43 33.0003 43C29.3465 43 26.1017 28.0251 24.0627 28.0251C22.0237 28.0251 17.9776 43 15.0003 43C13.1832 43 10.8293 41.9254 9.94554 33.3943C9.59391 30 9.00122 27.9407 8.00028 24.4829C7.1205 21.4437 4.15199 17.8111 4.00028 14.5511C3.76597 9.51593 7.65782 5.24419 12.693 5.00988C12.8343 5.00331 12.9757 5.00002 13.1172 5Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15.4824 12.4634L32.0005 17.7887"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15.4824 17.7886L32.0005 12.4632"></svg:path></svg:g>`,
})
export class IconParkTeethIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTelegramIcon],svg[icon-park-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z"></svg:path>`,
})
export class IconParkTelegramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTelescopeIcon],svg[icon-park-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="12" height="38" x="6" y="5" rx="6"></svg:rect><svg:rect width="12" height="38" x="30" y="5" rx="6"></svg:rect><svg:path fill="#2F88FF" d="M12 43C15.3137 43 18 40.3137 18 37C18 33.6863 15.3137 31 12 31C8.68629 31 6 33.6863 6 37C6 40.3137 8.68629 43 12 43Z"></svg:path><svg:path fill="#2F88FF" d="M36 43C39.3137 43 42 40.3137 42 37C42 33.6863 39.3137 31 36 31C32.6863 31 30 33.6863 30 37C30 40.3137 32.6863 43 36 43Z"></svg:path><svg:path stroke-linecap="round" d="M30 21C30 17.6863 27.3137 15 24 15C20.6863 15 18 17.6863 18 21"></svg:path><svg:path stroke-linecap="round" d="M30 31C30 27.6863 27.3137 25 24 25C20.6863 25 18 27.6863 18 31"></svg:path></svg:g>`,
})
export class IconParkTelescopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTencentQqIcon],svg[icon-park-tencent-qq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M23.7927 44.5178C20.1344 44.5178 16.7762 43.2933 14.6142 41.4646C13.5161 41.7927 12.1115 42.3204 11.2254 42.9751C10.4664 43.535 10.5613 44.1059 10.6979 44.3362C11.298 45.3491 20.9938 44.9831 23.7927 44.6678V44.5178ZM23.7927 44.5178C27.4516 44.5178 30.8095 43.2933 32.9718 41.4646C34.0693 41.7927 35.4742 42.3204 36.3606 42.9751C37.119 43.535 37.0244 44.1059 36.8875 44.3362C36.2874 45.3491 26.5919 44.9831 23.7927 44.6678V44.5178Z"></svg:path><svg:path fill-rule="evenodd" d="M36.3386 20.9326C34.6979 21.3809 29.856 22.5505 23.8144 22.5914H23.7698C17.5753 22.5491 12.6423 21.3214 11.1274 20.8999C10.816 20.8129 10.6458 20.6334 10.6458 20.6334C10.644 20.5785 10.6207 19.6503 10.6207 19.171C10.6207 11.1055 14.4284 3.00029 23.7922 3C33.1561 3.00029 36.9635 11.1052 36.9635 19.1713C36.9635 19.65 36.9402 20.5785 36.9387 20.6337C36.9387 20.6337 36.7297 20.8255 36.3386 20.9326ZM38.8284 25.3504C39.3462 26.7001 39.8573 28.1055 40.2318 29.3107C42.0176 35.0578 41.4388 37.4364 40.9986 37.4898C40.0532 37.6039 37.3187 33.1634 37.3187 33.1634C37.3187 37.6757 33.2448 44.604 23.916 44.6677H23.6685C14.3394 44.604 10.2655 37.6757 10.2655 33.1634C10.2655 33.1634 7.53131 37.6039 6.58588 37.4895C6.14542 37.4364 5.5666 35.0581 7.35268 29.3107C7.72717 28.1058 8.23827 26.7001 8.75609 25.3504C8.75609 25.3504 9.10519 25.3285 9.28207 25.3795C10.7319 25.798 12.2762 26.1689 13.8447 26.4792C13.5776 28.1343 13.4249 30.1827 13.5692 32.6021C13.9533 39.0363 17.7745 43.081 23.6727 43.1394H23.9121C29.8106 43.081 33.6314 39.0363 34.0161 32.6021C34.1604 30.1823 34.0075 28.1345 33.7402 26.4793C35.3363 26.1633 36.9076 25.7848 38.3798 25.3571C38.5307 25.3136 38.8284 25.3504 38.8284 25.3504ZM33.7402 26.4793C30.3004 27.1601 26.7448 27.5502 23.8144 27.5147H23.7698C20.8396 27.5498 17.2841 27.1598 13.8447 26.4792C13.8586 26.3929 13.8728 26.3076 13.8874 26.2234C17.3136 26.8989 20.8513 27.2853 23.769 27.2503H23.8137L23.814 27.25C26.7323 27.2856 30.2709 26.8989 33.6974 26.2231C33.712 26.3074 33.7262 26.3928 33.7402 26.4793ZM18.0376 11.6868C18.1059 13.5266 19.1912 14.9735 20.4615 14.916C21.7309 14.8594 22.7044 13.3208 22.6349 11.4802C22.566 9.6398 21.4811 8.19348 20.2122 8.2504C18.9419 8.30791 17.9687 9.84646 18.0376 11.6868ZM27.1253 14.916C28.3957 14.9735 29.4809 13.5263 29.5489 11.6868C29.6181 9.84646 28.6449 8.30791 27.3746 8.2504C26.1055 8.19378 25.0208 9.64009 24.9519 11.4805C24.8825 13.3208 25.8556 14.8591 27.1253 14.916ZM23.8148 15.9248C28.0469 15.9248 31.4658 16.7625 31.805 17.5141V17.5144C31.821 17.5477 31.8295 17.5841 31.8298 17.621C31.8294 17.6731 31.8131 17.7238 31.7831 17.7663C31.497 18.1835 27.701 20.2436 23.8148 20.2436H23.7692C19.8827 20.2436 16.0867 18.1829 15.8006 17.7663C15.7708 17.7239 15.7545 17.6734 15.7539 17.6216C15.7542 17.5845 15.7627 17.5479 15.7787 17.5144C16.1182 16.7625 19.5368 15.9248 23.7692 15.9248H23.8148Z" clip-rule="evenodd"></svg:path><svg:path d="M22.0218 11.7142C22.0799 12.441 21.6812 13.0867 21.1327 13.157C20.5831 13.2277 20.0912 12.6958 20.0329 11.969C19.9754 11.2416 20.3735 10.596 20.9211 10.5259C21.4716 10.4547 21.9643 10.9871 22.0218 11.7139V11.7142ZM25.5117 11.9571C25.624 11.7559 26.3885 10.6984 27.9714 11.0834C28.3874 11.1847 28.5797 11.3336 28.6203 11.392C28.6801 11.4784 28.6968 11.6015 28.6358 11.7673C28.5155 12.096 28.2671 12.087 28.1296 12.0227C28.0406 11.9813 26.9381 11.2463 25.9223 12.3429C25.8523 12.418 25.7274 12.4439 25.6091 12.3546C25.4903 12.2647 25.4416 12.0832 25.5117 11.9571Z"></svg:path><svg:path d="M15.5039 26.7117V33.0437C15.5039 33.0437 18.4044 33.6286 21.3105 33.2235V27.383C19.4695 27.2788 17.4841 27.0468 15.5039 26.7117Z"></svg:path><svg:path d="M36.9385 20.6337C36.9385 20.6337 31.2962 22.4148 23.8142 22.4653H23.7695C16.2998 22.4151 10.6648 20.6395 10.6456 20.6337L8.75586 25.35C13.4824 26.775 19.3401 27.6933 23.7695 27.6399H23.8142C28.2436 27.6933 34.101 26.775 38.8282 25.35L36.9385 20.6337Z"></svg:path>`,
})
export class IconParkTencentQqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTennisIcon],svg[icon-park-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 4C23.8991 10.6682 22.2619 15.6696 19.0884 19.0044C15.9148 22.3391 10.8853 24.0071 4 24.0083"></svg:path><svg:path stroke-linecap="round" d="M43.9682 25.0052C37.4557 24.5585 32.4795 25.9505 29.0395 29.1812C25.5994 32.4119 23.9206 37.3515 24.0029 43.9999"></svg:path></svg:g>`,
})
export class IconParkTennisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTentIcon],svg[icon-park-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M10 12L4 36H16"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M38 12H10L16 36H44L38 12Z"></svg:path><svg:path stroke="#fff" d="M12 18H39"></svg:path><svg:path stroke="#000" d="M10 12L13 24"></svg:path><svg:path stroke="#000" d="M38 12L41 24"></svg:path></svg:g>`,
})
export class IconParkTentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTentBannerIcon],svg[icon-park-tent-banner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M7 43H39L23 17L7 43Z"></svg:path><svg:path d="M18.0769 25L23 28L27.9231 25"></svg:path><svg:path d="M23 17V12V4"></svg:path><svg:path fill="#2F88FF" d="M35 4H23V12H35L32 8L35 4Z"></svg:path></svg:g>`,
})
export class IconParkTentBannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTerminalIcon],svg[icon-park-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M12 18L19 24L12 30"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M23 32H36"></svg:path></svg:g>`,
})
export class IconParkTerminalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTerminationFileIcon],svg[icon-park-termination-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20"></svg:path><svg:path stroke="#000" d="M16 14H29"></svg:path><svg:path stroke="#000" d="M16 21H21"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M34 44C28.4772 44 24 39.5228 24 34C24 28.4772 28.4772 24 34 24C39.5228 24 44 28.4772 44 34C44 39.5228 39.5228 44 34 44Z"></svg:path><svg:path stroke="#fff" d="M27 27L41 41"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M24 34C24 28.4772 28.4772 24 34 24"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M34 44C39.5228 44 44 39.5228 44 34"></svg:path></svg:g>`,
})
export class IconParkTerminationFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTerraceIcon],svg[icon-park-terrace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M5 24V40C5 41.1046 5.89543 42 7 42H41C42.1046 42 43 41.1046 43 40V24"></svg:path><svg:path stroke-linejoin="round" d="M43 31L5 31"></svg:path><svg:path d="M32 23C32 18.5817 28.4183 15 24 15C19.5817 15 16 18.5817 16 23"></svg:path><svg:path stroke-linejoin="round" d="M24 6V8"></svg:path><svg:path stroke-linejoin="round" d="M35.4141 10L33.9998 11.4142"></svg:path><svg:path stroke-linejoin="round" d="M12 10L13.4142 11.4142"></svg:path></svg:g>`,
})
export class IconParkTerraceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTestTubeIcon],svg[icon-park-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M18 4H30"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C27.3137 44 30 41.3137 30 38V10H18V38C18 41.3137 20.6863 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M24 27V28"></svg:path><svg:path stroke="#fff" d="M24 18V21"></svg:path><svg:path stroke="#000" d="M19 35H30"></svg:path></svg:g>`,
})
export class IconParkTestTubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextIcon],svg[icon-park-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M16 19V16H32V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 34H26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 18L24 34"></svg:path></svg:g>`,
})
export class IconParkTextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextBoldIcon],svg[icon-park-text-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M24 24C29.5056 24 33.9688 19.5228 33.9688 14C33.9688 8.47715 29.5056 4 24 4H11V24H24Z"></svg:path><svg:path d="M28.0312 44C33.5368 44 38 39.5228 38 34C38 28.4772 33.5368 24 28.0312 24H11V44H28.0312Z"></svg:path></svg:g>`,
})
export class IconParkTextBoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextItalicIcon],svg[icon-park-text-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 6H36"></svg:path><svg:path d="M12 42H28"></svg:path><svg:path d="M29 5.95215L19 41.9998"></svg:path></svg:g>`,
})
export class IconParkTextItalicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextMessageIcon],svg[icon-park-text-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 7H4V37H19L24 42L29 37H44V7Z"></svg:path><svg:path stroke="#fff" d="M14 16H20"></svg:path><svg:path stroke="#fff" d="M14 24H16"></svg:path><svg:path stroke="#fff" d="M29 14L36 28"></svg:path><svg:path stroke="#fff" d="M28.9998 13.9998L21.9998 27.9998"></svg:path><svg:path stroke="#fff" d="M24 24H34"></svg:path></svg:g>`,
})
export class IconParkTextMessageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextRecognitionIcon],svg[icon-park-text-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 33V39C6 40.6569 7.34315 42 9 42H15"></svg:path><svg:path d="M33 42H39C40.6569 42 42 40.6569 42 39V33"></svg:path><svg:path d="M42 15V9C42 7.34315 40.6569 6 39 6H33"></svg:path><svg:path d="M6 15V9C6 7.34315 7.34315 6 9 6H15"></svg:path><svg:path d="M24 15V35"></svg:path><svg:path d="M17 15H24H31"></svg:path></svg:g>`,
})
export class IconParkTextRecognitionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextRotationDownIcon],svg[icon-park-text-rotation-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M29 35L21 31.3333M29 13L21 16.6667M21 16.6667L17 18.5L5 24L17 29.5L21 31.3333M21 16.6667V31.3333"></svg:path><svg:path d="M37 6V42L43 36"></svg:path></svg:g>`,
})
export class IconParkTextRotationDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextRotationLeftIcon],svg[icon-park-text-rotation-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 29L16.6667 21M35 29L31.3333 21M31.3333 21L29.5 17L24 5L18.5 17L16.6667 21M31.3333 21H16.6667"></svg:path><svg:path d="M42 37H6L12 43"></svg:path></svg:g>`,
})
export class IconParkTextRotationLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextRotationNoneIcon],svg[icon-park-text-rotation-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13 29L16.6667 21M35 29L31.3333 21M31.3333 21L29.5 17L24 5L18.5 17L16.6667 21M31.3333 21H16.6667"></svg:path><svg:path d="M6 37H42L36 43"></svg:path></svg:g>`,
})
export class IconParkTextRotationNoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextRotationUpIcon],svg[icon-park-text-rotation-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M29 35L21 31.3333M29 13L21 16.6667M21 16.6667L17 18.5L5 24L17 29.5L21 31.3333M21 16.6667V31.3333"></svg:path><svg:path d="M37 42V6L43 12"></svg:path></svg:g>`,
})
export class IconParkTextRotationUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextStyleIcon],svg[icon-park-text-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 6H42V16"></svg:path><svg:path d="M17 32L19.1875 27M31 32L28.8125 27M19.1875 27L24 16L28.8125 27M19.1875 27H28.8125"></svg:path><svg:path d="M16 6H6V16"></svg:path><svg:path d="M32 42H42V32"></svg:path><svg:path d="M16 42H6V32"></svg:path></svg:g>`,
})
export class IconParkTextStyleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextStyleOneIcon],svg[icon-park-text-style-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 42L8.94118 30M32 42L27.0588 30M27.0588 30L25 25L18 8L11 25L8.94118 30M27.0588 30H8.94118"></svg:path><svg:path d="M28 10L44 10"></svg:path><svg:path d="M32 20L44 20"></svg:path><svg:path d="M36 30L44 30"></svg:path><svg:path d="M40 40H44"></svg:path></svg:g>`,
})
export class IconParkTextStyleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextUnderlineIcon],svg[icon-park-text-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M8 44H40"></svg:path><svg:path d="M37 6.09717C37 12.7638 37 15.3335 37 22.0002C37 29.1799 31.1797 35.0002 24 35.0002C16.8203 35.0002 11 29.1799 11 22.0002C11 15.3335 11 12.7638 11 6.09717"></svg:path></svg:g>`,
})
export class IconParkTextUnderlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextWrapOverflowIcon],svg[icon-park-text-wrap-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M8 10V38"></svg:path><svg:path d="M24 4V16"></svg:path><svg:path d="M16 24H42"></svg:path><svg:path stroke-linejoin="round" d="M37.0561 19.0113L42.0929 24.0255L37.0561 29.123"></svg:path><svg:path d="M24 32V44"></svg:path></svg:g>`,
})
export class IconParkTextWrapOverflowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextWrapTruncationIcon],svg[icon-park-text-wrap-truncation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M8 8V40"></svg:path><svg:path d="M40 8V40"></svg:path><svg:path d="M20.0522 24.0083H40.0002"></svg:path></svg:g>`,
})
export class IconParkTextWrapTruncationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextareaIcon],svg[icon-park-textarea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 4C23 4 24 10 24 12C24 14 24 34 24 36C24 38 23 44 16 44"></svg:path><svg:path d="M32 4C26 4 24 10 24 12C24 14 24 34 24 36C24 38 25 44 32 44"></svg:path><svg:path d="M17 24L31 24"></svg:path></svg:g>`,
})
export class IconParkTextareaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextureIcon],svg[icon-park-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 6L6 12"></svg:path><svg:path d="M42 36L36 42"></svg:path><svg:path d="M22 6L6 22"></svg:path><svg:path d="M32 6L6 32"></svg:path><svg:path d="M42 6L6 42"></svg:path><svg:path d="M42 16L16 42"></svg:path><svg:path d="M42 26L26 42"></svg:path></svg:g>`,
})
export class IconParkTextureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTextureTwoIcon],svg[icon-park-texture-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M40 4H8C5.79086 4 4 5.79086 4 8V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V8C44 5.79086 42.2091 4 40 4Z"></svg:path><svg:path stroke="#fff" d="M12 12V20"></svg:path><svg:path stroke="#fff" d="M28 28V36"></svg:path><svg:path stroke="#fff" d="M20 12V20"></svg:path><svg:path stroke="#fff" d="M28 12H36"></svg:path><svg:path stroke="#fff" d="M12 28H20"></svg:path><svg:path stroke="#fff" d="M28 20H36"></svg:path><svg:path stroke="#fff" d="M12 36H20"></svg:path><svg:path stroke="#fff" d="M36 28V36"></svg:path></svg:g>`,
})
export class IconParkTextureTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTheSingleShoulderBagIcon],svg[icon-park-the-single-shoulder-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 27C28 18.1813 26.7806 4 24 4C20.5714 4 20 18.1813 20 27"></svg:path><svg:rect width="18" height="17" x="15" y="27"></svg:rect><svg:path fill="#2F88FF" d="M15 27H33L27.7059 36H19.7647L15 27Z"></svg:path></svg:g>`,
})
export class IconParkTheSingleShoulderBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTheaterIcon],svg[icon-park-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linejoin="round" d="M8 6H40C41.1046 6 42 6.89543 42 8V36L32 22.0053C29.3333 23.5901 26.6667 24.3825 24 24.3825C21.3333 24.3825 18.6667 23.5901 16 22.0053L6 36V8C6 6.89543 6.89543 6 8 6Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M6 42H42"></svg:path></svg:g>`,
})
export class IconParkTheaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThemeIcon],svg[icon-park-theme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M18 6C18 9.31371 20.6863 12 24 12C27.3137 12 30 9.31371 30 6H35.4545L42 15.8182L36.2727 20.7273V42H11.7273V20.7273L6 15.8182L12.5455 6H18Z"></svg:path>`,
})
export class IconParkThemeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThermometerIcon],svg[icon-park-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M18 25.9993V10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10V25.9993C32.4289 27.8237 34 30.7284 34 34C34 39.5228 29.5228 44 24 44C18.4772 44 14 39.5228 14 34C14 30.7284 15.5711 27.8237 18 25.9993Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 17V30"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 38C26.2091 38 28 36.2091 28 34C28 31.7909 26.2091 30 24 30C21.7909 30 20 31.7909 20 34C20 36.2091 21.7909 38 24 38Z"></svg:path></svg:g>`,
})
export class IconParkThermometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThermometerOneIcon],svg[icon-park-thermometer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 44C28.9706 44 33 39.9706 33 35C33 31.4663 30.9634 28.4082 28 26.9355V10C28 8 28 4 24 4C20 4 20 8 20 10V26.9355C17.0366 28.4082 15 31.4663 15 35C15 39.9706 19.0294 44 24 44Z"></svg:path>`,
})
export class IconParkThermometerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThermosCupIcon],svg[icon-park-thermos-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M10 31C10 31 10.0714 37 24 37C37.9286 37 38 31 38 31V15H24H10V31Z"></svg:path><svg:path stroke-linecap="round" d="M24 4V10"></svg:path><svg:path stroke-linecap="round" d="M16 5V9"></svg:path><svg:path stroke-linecap="round" d="M32 5V9"></svg:path><svg:path stroke-linecap="round" d="M14 36V41C14 42.1046 14.8954 43 16 43H32C33.1046 43 34 42.1046 34 41V36"></svg:path></svg:g>`,
})
export class IconParkThermosCupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThinIcon],svg[icon-park-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M33 25H15C13.41 25 11.23 24.77 10 24C6.35 21.69 5.66004 16.63 8.00004 13L14.0001 4C17.9301 12.43 30.04 12.42 34 4L40 13C42.34 16.63 41.64 21.69 38 24C36.77 24.78 34.59 25 33 25Z"></svg:path><svg:path d="M12 25L14.52 34.55C15.39 37.93 14.46 41.52 12 44"></svg:path><svg:path d="M36.0004 25L33.4804 34.58C32.6104 37.96 33.5404 41.52 36.0004 44"></svg:path><svg:path d="M24 42V40"></svg:path></svg:g>`,
})
export class IconParkThinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThinkingProblemIcon],svg[icon-park-thinking-problem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M38 21L43 30L38 31V37H35L29 36L28 43H13L11 32.619C7.92077 29.7028 6 25.5757 6 21C6 12.1634 13.1634 5 22 5C30.8366 5 38 12.1634 38 21Z"></svg:path><svg:path stroke="#fff" d="M17 19C17 16.2386 19.2386 14 22 14C24.7614 14 27 16.2386 27 19C27 21.7614 24.7614 24 22 24V27"></svg:path><svg:path stroke="#fff" d="M22 33V34"></svg:path></svg:g>`,
})
export class IconParkThinkingProblemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeIcon],svg[icon-park-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 40L6.79224 30.8832C5.7604 28.6475 6.5098 25.9935 8.55853 24.6276L10.4628 23.3581C10.7898 23.1401 11.2142 23.1339 11.5475 23.3422L12 23.625L10.1291 9.94424C10.0464 9.33927 10.2055 8.72606 10.5718 8.23757C11.0844 7.55408 12.0541 7.41556 12.7376 7.92818L12.8707 8.02802C13.2808 8.33563 13.5896 8.75888 13.7573 9.24336L17.869 21.1217C17.9474 21.3481 18.1607 21.5 18.4003 21.5C18.7251 21.5 18.9823 21.2257 18.9614 20.9016L18.0785 7.21729C18.0286 6.44352 18.3143 5.68573 18.8625 5.13746C19.5101 4.4899 20.541 4.43281 21.2561 5.00489L21.5966 5.27727C22.178 5.74239 22.5657 6.40711 22.6842 7.14218L24.9229 21.0222C24.9673 21.2976 25.2051 21.5 25.484 21.5C25.7767 21.5 26.0215 21.2777 26.0497 20.9864L27.3779 7.26175C27.456 6.45511 27.857 5.71437 28.4899 5.20811L28.6963 5.04293C29.4385 4.44919 30.5084 4.50844 31.1805 5.18051C31.7052 5.70522 32 6.41688 32 7.15893V19.9113C32 19.9703 32.005 20.0284 32.0175 20.086C32.1291 20.6002 32.8074 23.2691 35 24C35.9074 24.3025 37.3638 26.8008 38.3729 28.7274C39.113 30.1406 39.042 31.8243 38.2673 33.2189L34.5 40C34.5 40 31 44 23 44C15 44 11.6667 41.3333 11 40Z"></svg:path>`,
})
export class IconParkThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeDGlassesIcon],svg[icon-park-three-d-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M19.5996 34.5H28.3996"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.30273 27.3909L9.95784 9.5618L14.9491 7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M45.8045 27.6333L38.0499 9.5618L33.0586 7"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M3.40063 26.7998H18.717C19.4317 26.7998 20.0111 27.3792 20.0111 28.0939C20.0111 28.128 20.0098 28.1621 20.0071 28.1961L19.0797 39.9078C19.0264 40.5808 18.4647 41.0998 17.7896 41.0998H4.32803C3.65293 41.0998 3.09124 40.5808 3.03795 39.9078L2.11055 28.1961C2.05413 27.4836 2.58598 26.8603 3.29847 26.8038C3.33246 26.8012 3.36654 26.7998 3.40063 26.7998Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M29.2835 26.7998H44.5999C45.3146 26.7998 45.894 27.3792 45.894 28.0939C45.894 28.128 45.8926 28.1621 45.89 28.1961L44.9625 39.9078C44.9093 40.5808 44.3476 41.0998 43.6725 41.0998H30.2109C29.5358 41.0998 28.9741 40.5808 28.9208 39.9078L27.9934 28.1961C27.937 27.4836 28.4689 26.8603 29.1814 26.8038C29.2153 26.8012 29.2494 26.7998 29.2835 26.7998Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkThreeDGlassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeHexagonsIcon],svg[icon-park-three-hexagons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 27L14 21L4 27V39L14 45L24 39V27Z"></svg:path><svg:path d="M44 27L34 21L24 27V39L34 45L44 39V27Z"></svg:path><svg:path d="M34 9L24 3L14 9V21L24 27L34 21V9Z"></svg:path></svg:g>`,
})
export class IconParkThreeHexagonsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeKeyIcon],svg[icon-park-three-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M19 14H29L22 23C26 23 29 25 29 29C29 33 26 34 24 34C21.619 34 20 33 19 31.9"></svg:path></svg:g>`,
})
export class IconParkThreeKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeSlashesIcon],svg[icon-park-three-slashes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10L42 4V11L6 17V10Z"></svg:path><svg:path d="M6 24L42 18V25L6 31V24Z"></svg:path><svg:path d="M6 38L42 32V39L6 45V38Z"></svg:path></svg:g>`,
})
export class IconParkThreeSlashesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeThreeIcon],svg[icon-park-three-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25.7446 44H24.8495C19.6392 44 14.7797 41.3742 11.9243 37.016L9.72884 33.6651C8.17072 31.2869 8.63077 28.1201 10.8012 26.2836L13.0887 24.3481C13.3496 24.1273 13.5 23.8029 13.5 23.4611V7.25C13.5 5.45507 14.9551 4 16.75 4C18.5449 4 20 5.45508 20 7.25V6.25C20 4.45507 21.4551 3 23.25 3C25.0449 3 26.5 4.45508 26.5 6.25V7.25C26.5 5.45507 27.9551 4 29.75 4C31.5449 4 33 5.45508 33 7.25V21.75C33 19.9551 34.4551 18.5 36.25 18.5C38.0449 18.5 39.5 19.9551 39.5 21.75V31.9688C39.5 33.6177 39.0018 35.2282 38.0707 36.589L37.097 38.012C34.5331 41.7593 30.2851 44 25.7446 44Z"></svg:path>`,
})
export class IconParkThreeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeTrianglesIcon],svg[icon-park-three-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M17.0001 7L24.0001 19.1244L29.9905 29.5H4.00977L17.0001 7Z"></svg:path><svg:path fill="#2F88FF" d="M31.0001 7L43.9905 29.5H18.0098L24.0001 19.1244L31.0001 7Z"></svg:path><svg:path fill="#2F88FF" d="M11.0098 41.5H36.9905L29.9905 29.5H18.0098L11.0098 41.5Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29.9905 29.5L24.0001 19.1244M18.0098 29.5L11.0098 41.5H36.9905L29.9905 29.5H18.0098ZM18.0098 29.5H43.9905L31.0001 7L24.0001 19.1244L18.0098 29.5ZM18.0098 29.5L24.0001 19.1244L18.0098 29.5ZM18.0098 29.5H29.9905H18.0098ZM29.9905 29.5H4.00977L17.0001 7L24.0001 19.1244L29.9905 29.5Z"></svg:path></svg:g>`,
})
export class IconParkThreeTrianglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThumbsDownIcon],svg[icon-park-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M20.3793 29.4002V36.6002C20.3793 39.5826 22.7969 42.0002 25.7793 42.0002L32.9793 25.8002V6.00023H12.0633C10.2682 5.97994 8.73244 7.2853 8.46327 9.06023L5.97927 25.2602C5.82077 26.3045 6.12885 27.3657 6.82192 28.1627C7.51499 28.9597 8.52311 29.4122 9.57927 29.4002H20.3793Z"></svg:path><svg:path fill="#2F88FF" d="M32.9795 6.00017H37.7855C39.8942 5.96288 41.6968 7.51019 41.9795 9.60017V22.2002C41.6968 24.2901 39.8942 26.0375 37.7855 26.0002H32.9795V6.00017Z"></svg:path></svg:g>`,
})
export class IconParkThumbsDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThumbsUpIcon],svg[icon-park-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M27.6002 18.5998V11.3998C27.6002 8.41743 25.1826 5.99977 22.2002 5.99977L15.0002 22.1998V41.9998H35.9162C37.7113 42.0201 39.2471 40.7147 39.5162 38.9398L42.0002 22.7398C42.1587 21.6955 41.8506 20.6343 41.1576 19.8373C40.4645 19.0403 39.4564 18.5878 38.4002 18.5998H27.6002Z"></svg:path><svg:path fill="#2F88FF" d="M15 22.0001H10.194C8.08532 21.9628 6.2827 23.7095 6 25.7994V38.3994C6.2827 40.4894 8.08532 42.0367 10.194 41.9994H15V22.0001Z"></svg:path></svg:g>`,
})
export class IconParkThumbsUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThunderboltIcon],svg[icon-park-thunderbolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 26C4 24.8954 4.89543 24 6 24H42C43.1046 24 44 24.8954 44 26V31.3604C44 32.3138 43.3167 33.1412 42.4802 33.5984C41.2932 34.2471 39.7561 35.5405 39.2065 38.0136C38.9669 39.0919 38.1046 40 37 40H11C9.89543 40 9.03308 39.0919 8.79348 38.0136C8.24394 35.5405 6.70677 34.2471 5.51983 33.5984C4.68326 33.1412 4 32.3138 4 31.3604V26Z"></svg:path><svg:path stroke="#fff" d="M14 31H34"></svg:path><svg:path stroke="#000" d="M25 4L19 11H29L23 18"></svg:path></svg:g>`,
})
export class IconParkThunderboltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThunderstormIcon],svg[icon-park-thunderstorm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33"></svg:path><svg:path d="M17.4141 22.5859L14.5856 25.4144"></svg:path><svg:path d="M26.9996 24L19 32.0012H29.004L21.0003 40.0018"></svg:path><svg:path d="M33.4141 38.5859L30.5856 41.4144"></svg:path></svg:g>`,
})
export class IconParkThunderstormIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkThunderstormOneIcon],svg[icon-park-thunderstorm-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M20.5294 20L17 31.5L23.1765 32.3846L20.5294 43L32 29.7308L24.9412 27.9615L30.2353 20H20.5294Z"></svg:path><svg:path stroke-linecap="round" d="M9.45455 29.9942C6.14242 27.461 4 23.4278 4 18.8851C4 11.2166 10.1052 5 17.6364 5C23.9334 5 29.2336 9.34618 30.8015 15.2533C32.0353 14.6159 33.431 14.2567 34.9091 14.2567C39.9299 14.2567 44 18.4011 44 23.5135C44 27.3094 41.7562 30.5716 38.5455 32"></svg:path></svg:g>`,
})
export class IconParkThunderstormOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTicketIcon],svg[icon-park-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#000" stroke-linejoin="round" d="M9.00013 16.0001L34 6.00008L38.0004 16.0001"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 16H44V22C41 22 38 24 38 27.5C38 31 41 34 44 34V40H4V34C7.00016 34 10 32 10 28C10 24 7 22 4 22V16Z"></svg:path><svg:path stroke="#fff" d="M17 25.3848H23"></svg:path><svg:path stroke="#fff" d="M17 31.3848H31"></svg:path></svg:g>`,
})
export class IconParkTicketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTicketOneIcon],svg[icon-park-ticket-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 8H11C11 8 12 13 17 13C22 13 23 8 23 8H44V40H23C23 40 22 35 17 35C12 35 11 40 11 40H4V8Z"></svg:path><svg:path stroke="#fff" d="M17 19V21"></svg:path><svg:path stroke="#fff" d="M17 27L17 29"></svg:path><svg:path stroke="#fff" d="M25 21H36"></svg:path><svg:path stroke="#fff" d="M25 27H36"></svg:path></svg:g>`,
})
export class IconParkTicketOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTicketsCheckedIcon],svg[icon-park-tickets-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M34 30V28.989C34 27.3382 35.3382 26 36.989 26V26C38.6381 26 39.9756 27.3356 39.978 28.9847L39.99 37.1853C39.9955 40.9473 36.9473 44 33.1853 44H25.6472C21.2342 44 17.0822 41.9088 14.4552 38.363L10.19 32.6062C9.46968 31.6339 9.40592 30.3235 10.0285 29.2858V29.2858C11.0299 27.6168 13.3332 27.3332 14.7096 28.7096L16 30V16C16 14.3431 17.3431 13 19 13V13C20.6569 13 22 14.3431 22 16V27.875V21.0263C22 19.3549 23.3549 18 25.0263 18V18C26.6977 18 28.0526 19.3549 28.0526 21.0263V29V27.8987C28.0526 26.2564 29.384 24.925 31.0263 24.925V24.925C32.6686 24.925 34 26.2564 34 27.8987V30Z"></svg:path><svg:path d="M32 4V12"></svg:path><svg:path stroke-linejoin="round" d="M16 20H6V16C8 16 10 14.5 9.97403 12C9.94805 9.5 8 8 6 8V4H42V8C40 8 38.0519 9.5 38.026 12C38 14.5 40 16 42 16V20H28"></svg:path></svg:g>`,
})
export class IconParkTicketsCheckedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTicketsOneIcon],svg[icon-park-tickets-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="26" height="38" x="5" y="42" fill="#2F88FF" stroke="#000" stroke-linejoin="bevel" stroke-width="4" rx="2" transform="rotate(-90 5 42)"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9.00002 16L32 4.99999L37 16"></svg:path><svg:circle cx="13" cy="23" r="2" fill="#fff"></svg:circle><svg:circle cx="13" cy="29" r="2" fill="#fff"></svg:circle><svg:circle cx="13" cy="35" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 35H25L36 23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 29H30"></svg:path></svg:g>`,
})
export class IconParkTicketsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTicketsTwoIcon],svg[icon-park-tickets-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 30C33 30 35 31.8809 35 34L41 34L41 4L35 4C35 6 33 8 30 8C27 8 25 6 25 4L19 4L19 18"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 44L24 44C24 41.8809 22 40 19 40C16 40 14 41.8809 14 44L8 44L8 14L14 14C14 16 16 18 19 18C22 18 24 16 24 14L30 14L30 44Z"></svg:path><svg:circle cx="14" cy="24" r="2" fill="#fff"></svg:circle><svg:circle cx="19" cy="24" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="24" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkTicketsTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTigerZodiacIcon],svg[icon-park-tiger-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 44V15C6 13.5 7 9.8 11 7L8.5 4C10.1667 4 14.1 4.6 16.5 7C20.6667 6.66667 30 9 26.5 15C25.6101 16.3349 24 17 21 17"></svg:path><svg:path d="M19 24C23 24 31 29 31 38C31 40 32 42.8834 36.1343 42.4015C39 42.0674 41.6269 40.0523 43 35.8759"></svg:path><svg:path d="M17 44.0003C17 40.0001 19 35.0003 27 35.0003L30 35.0003"></svg:path></svg:g>`,
})
export class IconParkTigerZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTiktokIcon],svg[icon-park-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="3.833" d="M21.358 19.1399C15.4694 18.8558 11.3762 20.9553 9.07838 25.4384C5.63169 32.163 8.48026 43.1666 19.9788 43.1666C31.4774 43.1666 31.81 32.0554 31.81 30.8914C31.81 30.1154 31.81 25.7764 31.81 17.8746C34.2694 19.4323 36.343 20.37 38.0308 20.6877C39.7186 21.0053 40.7915 21.1461 41.2497 21.11V14.6343C39.6886 14.4461 38.3386 14.0873 37.1997 13.5581C35.4913 12.7643 32.1037 10.5611 32.1037 7.33208C32.106 7.34787 32.106 6.51493 32.1037 4.83325H24.9857C24.9645 20.6493 24.9645 29.3353 24.9857 30.8914C25.0175 33.2255 23.2068 36.4905 19.5355 36.4905C15.8642 36.4905 14.0535 33.2281 14.0535 31.1239C14.0535 29.8357 14.496 27.9685 16.3251 26.5858C17.4098 25.7658 18.9153 25.4384 21.358 25.4384C21.358 24.6828 21.358 22.5833 21.358 19.1399Z"></svg:path>`,
})
export class IconParkTiktokIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTimeIcon],svg[icon-park-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24.0084 12.0001L24.0072 24.0089L32.4866 32.4883"></svg:path></svg:g>`,
})
export class IconParkTimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTimedMailIcon],svg[icon-park-timed-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M44 35V9H24H4V23V37H26"></svg:path><svg:circle cx="35" cy="35" r="9" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34 32V36H38"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M4 9L24 22L44 9"></svg:path></svg:g>`,
})
export class IconParkTimedMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTimelineIcon],svg[icon-park-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M13 12C13 14.2091 14.7909 16 17 16C19.2091 16 21 14.2091 21 12C21 9.79086 19.2091 8 17 8C14.7909 8 13 9.79086 13 12Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M31 24C31 26.2091 32.7909 28 35 28C37.2091 28 39 26.2091 39 24C39 21.7909 37.2091 20 35 20C32.7909 20 31 21.7909 31 24Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M13 36C13 38.2091 14.7909 40 17 40C19.2091 40 21 38.2091 21 36C21 33.7909 19.2091 32 17 32C14.7909 32 13 33.7909 13 36Z"></svg:path><svg:path stroke-linecap="round" d="M4 36H13"></svg:path><svg:path stroke-linecap="round" d="M21 36H44"></svg:path><svg:path stroke-linecap="round" d="M4 12H13"></svg:path><svg:path stroke-linecap="round" d="M21 12H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 4V44"></svg:path><svg:path stroke-linecap="round" d="M4 24H31"></svg:path><svg:path stroke-linecap="round" d="M39 24H44"></svg:path></svg:g>`,
})
export class IconParkTimelineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTimerIcon],svg[icon-park-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="28" r="16" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 4L20 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 4V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M35 16L38 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 28V22"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 28H18"></svg:path></svg:g>`,
})
export class IconParkTimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTipsIcon],svg[icon-park-tips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M40 20C40 26.8077 35.7484 32.6224 29.7555 34.9336H24H18.2445C12.2516 32.6224 8 26.8077 8 20C8 11.1634 15.1634 4 24 4C32.8366 4 40 11.1634 40 20Z"></svg:path><svg:path stroke="#000" d="M29.7557 34.9336L29.0766 43.0831C29.0334 43.6014 28.6001 44 28.08 44H19.9203C19.4002 44 18.9669 43.6014 18.9238 43.0831L18.2446 34.9336"></svg:path><svg:path stroke="#fff" d="M18 17V23L24 20L30 23V17"></svg:path></svg:g>`,
})
export class IconParkTipsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTipsOneIcon],svg[icon-park-tips-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 8H4V38H19L24 43L29 38H44V8Z"></svg:path><svg:path stroke="#fff" d="M24 23V32"></svg:path><svg:path stroke="#fff" d="M24 16V17"></svg:path></svg:g>`,
})
export class IconParkTipsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTireSwingIcon],svg[icon-park-tire-swing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M4 4C4 4 10 10 24 10C38 10 44 4 44 4"></svg:path><svg:path stroke="#000" d="M24 10V16"></svg:path><svg:ellipse cx="30" cy="30" fill="#2F88FF" stroke="#000" rx="8" ry="14"></svg:ellipse><svg:ellipse cx="30" cy="30" fill="#43CCF8" stroke="#fff" rx="3" ry="6"></svg:ellipse><svg:path stroke="#000" d="M18 44C13.5817 44 10 37.732 10 30C10 22.268 13.5817 16 18 16"></svg:path><svg:path stroke="#000" d="M30 16H18"></svg:path><svg:path stroke="#000" d="M30 44H18"></svg:path><svg:path stroke="#000" d="M22 29H10"></svg:path><svg:path stroke="#000" d="M23 22L12 22"></svg:path><svg:path stroke="#000" d="M23 37H12"></svg:path></svg:g>`,
})
export class IconParkTireSwingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTitleLevelIcon],svg[icon-park-title-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M6 8.00049V40.0005"></svg:path><svg:path stroke-linejoin="round" d="M24 8.00049V40.0005"></svg:path><svg:path stroke-linejoin="round" d="M7 24.0005H23"></svg:path><svg:path d="M32 24V40"></svg:path><svg:path d="M32 31.0239C32 28.4599 34 26.0005 37 26.0005C40 26.0005 42 28.3585 42 31.0239C42 32.8009 42 36.4642 42 40.0139"></svg:path></svg:g>`,
})
export class IconParkTitleLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToBottomIcon],svg[icon-park-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.0083 33.8995V6"></svg:path><svg:path d="M36 22L24 34L12 22"></svg:path><svg:path d="M36 42H12"></svg:path></svg:g>`,
})
export class IconParkToBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToBottomOneIcon],svg[icon-park-to-bottom-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 14L24 26L12 14"></svg:path><svg:path d="M12 34H36"></svg:path></svg:g>`,
})
export class IconParkToBottomOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToLeftIcon],svg[icon-park-to-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 23.9917H42"></svg:path><svg:path d="M26 36L14 24L26 12"></svg:path><svg:path d="M5 36V12"></svg:path></svg:g>`,
})
export class IconParkToLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToRightIcon],svg[icon-park-to-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M34 24.0083H6"></svg:path><svg:path d="M22 12L34 24L22 36"></svg:path><svg:path d="M42 12V36"></svg:path></svg:g>`,
})
export class IconParkToRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToTopIcon],svg[icon-park-to-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.0083 14.1006V42.0001"></svg:path><svg:path d="M12 26L24 14L36 26"></svg:path><svg:path d="M12 6H36"></svg:path></svg:g>`,
})
export class IconParkToTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToTopOneIcon],svg[icon-park-to-top-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 33L24 21L36 33"></svg:path><svg:path d="M12 13H36"></svg:path></svg:g>`,
})
export class IconParkToTopOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToiletIcon],svg[icon-park-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M19.999 10H27.999V22H19.999V10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.0001 35L12.0001 44H11.999H35.999L31.0001 35"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33.999 22V5C33.999 4.44772 33.5513 4 32.999 4H14.999C14.4467 4 13.999 4.44772 13.999 5V22"></svg:path><svg:path d="M6.07992 22.364C6.0384 22.1772 6.18056 22 6.37194 22H41.6261C41.8175 22 41.9596 22.1772 41.9181 22.3641V22.3641C40.6941 27.8723 37.2835 32.8158 31.9187 34.5641C29.4348 35.3735 26.6549 36 24.0001 36C21.3449 36 18.5642 35.3733 16.0797 34.5637C10.7148 32.8154 7.30395 27.8722 6.07992 22.364V22.364Z"></svg:path></svg:g>`,
})
export class IconParkToiletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTomatoIcon],svg[icon-park-tomato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 43.9999C35.0457 43.9999 44 36.6126 44 27.4999C44 21.0579 39.5252 15.7014 33 12.9841L29.5 14.4999L30 19.9999L23.5 17.9999L17 19.9999V14.4999L14 12.9841C8.02199 15.837 4 21.3926 4 27.4999C4 36.6126 12.9543 43.9999 24 43.9999Z"></svg:path><svg:path d="M23.5 4L27.3088 9.11672L36 9.90983L29.6628 14.4833L31.5 21L23.5 18L15.5 21L17.3371 14.4833L11 9.90983L19.6911 9.11672L23.5 4Z"></svg:path></svg:g>`,
})
export class IconParkTomatoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToolIcon],svg[icon-park-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 16C44 22.6274 38.6274 28 32 28C29.9733 28 28.0639 27.4975 26.3896 26.6104L9 44L4 39L21.3896 21.6104C20.5025 19.9361 20 18.0267 20 16C20 9.37258 25.3726 4 32 4C34.0267 4 35.9361 4.50245 37.6104 5.38959L30 13L35 18L42.6104 10.3896C43.4975 12.0639 44 13.9733 44 16Z"></svg:path>`,
})
export class IconParkToolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToolkitIcon],svg[icon-park-toolkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 25V38C8 39.6569 9.34315 41 11 41H37C38.6569 41 40 39.6569 40 38V25"></svg:path><svg:path fill="#2F88FF" d="M5 15C5 13.8954 5.89543 13 7 13H41C42.1046 13 43 13.8954 43 15V23C43 24.1046 42.1046 25 41 25H7C5.89543 25 5 24.1046 5 23V15Z"></svg:path><svg:path stroke-linecap="round" d="M31 13V9C31 7.89543 30.1046 7 29 7H19C17.8954 7 17 7.89543 17 9V13"></svg:path><svg:path stroke-linecap="round" d="M15 23V29"></svg:path><svg:path stroke-linecap="round" d="M33 23V29"></svg:path></svg:g>`,
})
export class IconParkToolkitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTopBarIcon],svg[icon-park-top-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M6 16H42"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M6 13V19"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M42 13V19"></svg:path></svg:g>`,
})
export class IconParkTopBarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTopbuzzIcon],svg[icon-park-topbuzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M18.9054 18.168L10.3257 16.3443C9.76801 16.2257 9.41204 15.6776 9.53057 15.12L11.4621 6.03265C11.5807 5.47501 12.1288 5.11904 12.6865 5.23757L41.9678 11.4615C42.5254 11.58 42.8814 12.1282 42.7629 12.6858L40.8313 21.7731C40.7128 22.3308 40.1646 22.6867 39.607 22.5682L31.1006 20.7601C30.7133 20.6778 30.4837 20.806 30.4117 21.1448C29.5295 25.295 28.2063 31.5204 26.4419 39.821C26.3234 40.3786 25.7752 40.7346 25.2176 40.616L16.1303 38.6845C15.5727 38.5659 15.2167 38.0178 15.3352 37.4602C17.1 29.1573 18.4236 22.9302 19.3061 18.7788C19.3773 18.4435 19.2438 18.2399 18.9054 18.168Z"></svg:path>`,
})
export class IconParkTopbuzzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTopicIcon],svg[icon-park-topic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 26.7117 4.53967 29.2974 5.51747 31.6554C6.02232 32.8729 6.64396 34.0297 7.36843 35.1119C7.61157 35.4751 7.15543 37.7711 6 42C10.2289 40.8446 12.5249 40.3884 12.8881 40.6316C13.9703 41.356 15.1271 41.9777 16.3446 42.4825C18.7026 43.4603 21.2883 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16.6045 19.8201H33.3838"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21.8467 15.7378L18.933 32.2622"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28.8467 15.7378L25.933 32.2622"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.6045 28H31.3838"></svg:path></svg:g>`,
})
export class IconParkTopicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTopicDiscussionIcon],svg[icon-park-topic-discussion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M44 8H4V38H19L24 43L29 38H44V8Z"></svg:path><svg:path stroke="#fff" d="M21 15L20 32"></svg:path><svg:path stroke="#fff" d="M28 15L27 32"></svg:path><svg:path stroke="#fff" d="M33 20L16 20"></svg:path><svg:path stroke="#fff" d="M32 27L15 27"></svg:path></svg:g>`,
})
export class IconParkTopicDiscussionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTorchIcon],svg[icon-park-torch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M27 34H21V44H27V34Z"></svg:path><svg:path d="M31 34H17L14 26H34L31 34Z"></svg:path><svg:path fill="#2F88FF" d="M20.9996 14C22.9996 9.39 26.9996 4 26.9996 4C26.9996 4 33.3596 15.49 33.3596 19.23C33.3596 22.97 30.7396 26 26.9996 26H18.9996C16.3596 26 14.6396 23.86 14.6396 21.22C14.6396 18.58 18.9996 10 18.9996 10C18.9996 10 19.9596 12.01 20.9996 14Z"></svg:path></svg:g>`,
})
export class IconParkTorchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTourBusIcon],svg[icon-park-tour-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M9 23H39V34C39 35.1046 38.1046 36 37 36H11C9.89543 36 9 35.1046 9 34V23Z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M9 8C9 6.89543 9.89543 6 11 6H37C38.1046 6 39 6.89543 39 8V23H9V8Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 42C13.3431 42 12 40.6569 12 39V36H18V39C18 40.6569 16.6569 42 15 42Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 42C31.3431 42 30 40.6569 30 39V36H36V39C36 40.6569 34.6569 42 33 42Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M6 12V16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M42 12V16"></svg:path><svg:circle cx="15" cy="30" r="2" fill="#fff"></svg:circle><svg:circle cx="33" cy="30" r="2" fill="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M31 6L22 16"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M38 7L33 13"></svg:path></svg:g>`,
})
export class IconParkTourBusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTowelIcon],svg[icon-park-towel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M36 18H4V26H36V18Z"></svg:path><svg:path d="M36 12V32C36 34.2091 34.2091 36 32 36H12M12 36H8C5.79086 36 4 34.2091 4 32V8C4 5.79086 5.79086 4 8 4H40C42.2091 4 44 5.79086 44 8V40C44 42.21 42.21 44 40 44H16C13.79 44 12 42.21 12 40V36Z"></svg:path></svg:g>`,
})
export class IconParkTowelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTowerIcon],svg[icon-park-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="13" x="17" y="31" fill="#2F88FF"></svg:rect><svg:rect width="10" height="14" x="19" y="17" fill="#2F88FF"></svg:rect><svg:rect width="6" height="13" x="21" y="4" fill="#2F88FF"></svg:rect><svg:path stroke-linecap="round" d="M4 44H44"></svg:path></svg:g>`,
})
export class IconParkTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTowerOfBabelIcon],svg[icon-park-tower-of-babel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 14.5V4L28 4.00002V13.5"></svg:path><svg:path d="M14 25V15.4619L34 13V23"></svg:path><svg:path d="M11 35V26L37 23V32"></svg:path><svg:path fill="#2F88FF" d="M40 44H8V36L40 32V44Z"></svg:path></svg:g>`,
})
export class IconParkTowerOfBabelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTowerOfPisaIcon],svg[icon-park-tower-of-pisa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44H44"></svg:path><svg:path stroke-linejoin="round" d="M21.2498 7.47448L36.7046 11.6156L28.0004 43.9998L11.0004 43.9998L21.2498 7.47448Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M19.3174 6.95703L38.6359 12.1334"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.2109 18.5479L35.5295 23.7242"></svg:path><svg:path stroke-linecap="round" d="M25.4823 20.9316L26.5176 17.0679"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.1055 30.1392L32.424 35.3155"></svg:path><svg:path stroke-linecap="round" d="M22.4823 31.9316L23.5176 28.0679"></svg:path><svg:rect width="10" height="4" x="25.183" y="4.387" stroke-linecap="round" stroke-linejoin="round" rx="1" transform="rotate(15 25.183 4.387)"></svg:rect><svg:path stroke-linecap="round" d="M19.4823 42.9316L20.5176 39.0679"></svg:path></svg:g>`,
})
export class IconParkTowerOfPisaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkToxinsIcon],svg[icon-park-toxins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M33.9579 44.0002C33.9579 44.0002 33.9824 40.5294 33.9579 39.7603C34.5074 39.4659 35.0408 39.1454 35.5563 38.8002C36.5925 38.1066 37.5566 37.3137 38.435 36.4353C41.8734 32.9969 44 28.2469 44 23.0002C44 12.5068 35.4934 4.00024 25 4.00024C14.5066 4.00024 6 12.5068 6 23.0002C6 28.2469 8.12665 32.9969 11.565 36.4353C12.4434 37.3137 13.4075 38.1066 14.4437 38.8002C14.9592 39.1454 15.4547 39.4659 16.0043 39.7603C16.0043 40.0084 16.0043 41.4218 16.0043 44.0002C27.9733 44.0002 33.9579 44.0002 33.9579 44.0002Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M18 27.0002C20.2091 27.0002 22 25.2094 22 23.0002L18 19.0002C15.7909 19.0002 14 20.7911 14 23.0002C14 25.2094 15.7909 27.0002 18 27.0002Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M32 27.0002C29.7909 27.0002 28 25.2094 28 23.0002L32 19.0002C34.2091 19.0002 36 20.7911 36 23.0002C36 25.2094 34.2091 27.0002 32 27.0002Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 34.0002L24.9379 31.0002L28 33.8965"></svg:path></svg:g>`,
})
export class IconParkToxinsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTraceIcon],svg[icon-park-trace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42C33.9411 42 42 33.9411 42 24"></svg:path><svg:path stroke-linecap="round" d="M24 15C19.0294 15 15 19.0294 15 24C15 28.9706 19.0294 33 24 33C28.9706 33 33 28.9706 33 24"></svg:path><svg:path stroke-linecap="round" d="M24 24.0001L30.3 17.6943"></svg:path><svg:path fill="#2F88FF" d="M30.2998 11.4264V17.7H36.6249L41.9999 12.3002H35.7031V6L30.2998 11.4264Z"></svg:path></svg:g>`,
})
export class IconParkTraceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrademarkIcon],svg[icon-park-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" d="M12 19H16L20 19"></svg:path><svg:path stroke="#fff" d="M16 19L16 29"></svg:path><svg:path stroke="#fff" d="M26 29V19L31 25L36 19V29"></svg:path></svg:g>`,
})
export class IconParkTrademarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTraditionalChineseMedicineIcon],svg[icon-park-traditional-chinese-medicine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linejoin="round" d="M24 43C24.8653 43 26.8503 43 29.9551 43C30.0381 40.2631 30.4393 38.7582 31.1586 38.4852C38.6685 35.6357 44 28.434 44 20H4C4 28.2514 9.10319 35.3234 16.3568 38.2941C17.1151 38.6047 17.6815 40.1733 18.056 43C21.0857 43 23.067 43 24 43Z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M14.4434 27.0225C14.803 28.2103 15.2786 29.191 15.8702 29.9646C16.4484 30.7209 17.1619 31.4223 18.0104 32.0688"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M25.2139 20.0264C28.9697 12.2748 31.177 7.70521 31.8358 6.31775C32.8851 4.10791 35.0156 3.57614 36.9808 4.41569C38.9459 5.25524 39.7411 7.65828 38.9162 9.33311C38.4068 10.3675 36.6766 13.9245 33.7258 20.004"></svg:path></svg:g>`,
})
export class IconParkTraditionalChineseMedicineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrainIcon],svg[icon-park-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M9 8.83932C9 7.90724 9.43829 7.03279 10.2715 6.61502C12.2462 5.62486 16.6123 4 24 4C31.3877 4 35.7538 5.62486 37.7285 6.61502C38.5617 7.0328 39 7.90724 39 8.83932V36C39 37.1046 38.1046 38 37 38H11C9.89543 38 9 37.1046 9 36V8.83932Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 38V42"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 38V42"></svg:path><svg:path fill="#000" stroke="#000" d="M20.5 32C20.5 32.8284 19.8284 33.5 19 33.5C18.1716 33.5 17.5 32.8284 17.5 32C17.5 31.1716 18.1716 30.5 19 30.5C19.8284 30.5 20.5 31.1716 20.5 32Z"></svg:path><svg:path fill="#000" stroke="#000" d="M30.5 32C30.5 32.8284 29.8284 33.5 29 33.5C28.1716 33.5 27.5 32.8284 27.5 32C27.5 31.1716 28.1716 30.5 29 30.5C29.8284 30.5 30.5 31.1716 30.5 32Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 44L28 44"></svg:path><svg:rect width="30" height="14" x="9" y="12" fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 12V26"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 12L28 12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 26L28 26"></svg:path></svg:g>`,
})
export class IconParkTrainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTransactionIcon],svg[icon-park-transaction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" d="M21 31L26 35L34 25"></svg:path><svg:path stroke="#fff" d="M14 15H34"></svg:path><svg:path stroke="#fff" d="M14 23L22 23"></svg:path></svg:g>`,
})
export class IconParkTransactionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTransactionOrderIcon],svg[icon-park-transaction-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="30" height="36" x="9" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M18 4V10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M30 4V10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 19L32 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 27L28 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 35H24"></svg:path></svg:g>`,
})
export class IconParkTransactionOrderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTransferIcon],svg[icon-park-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 28.3923V35.4066C37 39.048 34.0885 42 30.497 42C26.9054 42 23.9939 39.048 23.9939 35.4066L24.0061 13.1429C24.0061 9.19797 21.0946 6 17.503 6C13.9115 6 11 9.19797 11 13.1429V28.3923"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 31L37 25L31 31"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 10.7273C43 15.1818 37 19 37 19C37 19 31 15.1818 31 10.7273C31 9.20831 31.6321 7.75155 32.7574 6.67748C33.8826 5.60341 35.4087 5 37 5C38.5913 5 40.1174 5.60341 41.2426 6.67748C42.3679 7.75155 43 9.20831 43 10.7273Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 34.7273C17 39.1818 11 43 11 43C11 43 5 39.1818 5 34.7273C5 33.2083 5.63214 31.7516 6.75736 30.6775C7.88258 29.6034 9.4087 29 11 29C12.5913 29 14.1174 29.6034 15.2426 30.6775C16.3679 31.7516 17 33.2083 17 34.7273Z"></svg:path><svg:circle cx="37" cy="11" r="2" fill="#fff"></svg:circle><svg:circle cx="11" cy="35" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTransferDataIcon],svg[icon-park-transfer-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 8L4 14L10 20"></svg:path><svg:path d="M38 28L44 34L38 40"></svg:path><svg:path d="M4 14H44"></svg:path><svg:path d="M4 34H44"></svg:path></svg:g>`,
})
export class IconParkTransferDataIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTransformIcon],svg[icon-park-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="13.715" cy="13.714" r="6.857" fill="#2F88FF"></svg:circle><svg:circle cx="34.286" cy="34.285" r="6.857" fill="#2F88FF"></svg:circle><svg:path d="M24.001 44C12.9553 44 4.00098 35.0457 4.00098 24L10.6676 27.3333"></svg:path><svg:path d="M24.001 4C35.0467 4 44.001 12.9543 44.001 24L37.3343 20.6667"></svg:path></svg:g>`,
})
export class IconParkTransformIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTranslateIcon],svg[icon-park-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28.2857 37H39.7143M42 42L39.7143 37L42 42ZM26 42L28.2857 37L26 42ZM28.2857 37L34 24L39.7143 37H28.2857Z"></svg:path><svg:path d="M16 6L17 9"></svg:path><svg:path d="M6 11H28"></svg:path><svg:path d="M10 16C10 16 11.7895 22.2609 16.2632 25.7391C20.7368 29.2174 28 32 28 32"></svg:path><svg:path d="M24 11C24 11 22.2105 19.2174 17.7368 23.7826C13.2632 28.3478 6 32 6 32"></svg:path></svg:g>`,
})
export class IconParkTranslateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTranslationIcon],svg[icon-park-translation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 32L19.1875 27M31 32L28.8125 27M19.1875 27L24 16L28.8125 27M19.1875 27H28.8125"></svg:path><svg:path d="M43.1999 20C41.3468 10.871 33.2758 4 23.5999 4C13.9241 4 5.85308 10.871 4 20L10 18"></svg:path><svg:path d="M4 28C5.85308 37.129 13.9241 44 23.5999 44C33.2758 44 41.3468 37.129 43.1999 28L38 30"></svg:path></svg:g>`,
})
export class IconParkTranslationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTransportIcon],svg[icon-park-transport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="28" height="18" x="16" y="12" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M24 18V24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 18V24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M36 12V6H24V12"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M44 36H12C10.8954 36 10 35.1046 10 34V11C10 9.89543 9.10457 9 8 9H4"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M19 42C17.3431 42 16 40.6569 16 39V36H22V39C22 40.6569 20.6569 42 19 42Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M37 42C35.3431 42 34 40.6569 34 39V36H40V39C40 40.6569 38.6569 42 37 42Z"></svg:path></svg:g>`,
})
export class IconParkTransportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTransporterIcon],svg[icon-park-transporter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M42 8H20C18.8954 8 18 8.89543 18 10V32C18 33.1046 18.8954 34 20 34H42C43.1046 34 44 33.1046 44 32V10C44 8.89543 43.1046 8 42 8Z"></svg:path><svg:path fill="#2F88FF" d="M4 34H18V20H11L4 26.4615V34Z"></svg:path><svg:path stroke-linecap="round" d="M18 36C18 38.2091 16.2091 40 14 40C11.7909 40 10 38.2091 10 36"></svg:path><svg:path stroke-linecap="round" d="M40 36C40 38.2091 38.2091 40 36 40C33.7909 40 32 38.2091 32 36"></svg:path></svg:g>`,
})
export class IconParkTransporterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrapezoidIcon],svg[icon-park-trapezoid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M31.7944 8H16.2056C14.8934 8 13.7335 8.85275 13.3421 10.1052L5.21713 36.1052C4.61345 38.037 6.05665 40 8.08057 40H39.9194C41.9433 40 43.3866 38.037 42.7829 36.1052L34.6579 10.1052C34.2665 8.85275 33.1066 8 31.7944 8Z"></svg:path>`,
})
export class IconParkTrapezoidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrayIcon],svg[icon-park-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="30" x="24.762" y="3.243" fill="#2F88FF" stroke="#000" rx="2" transform="rotate(45 24.762 3.243)"></svg:rect><svg:path stroke="#000" d="M38.1966 16.6775L42.4392 12.4348L35.3682 5.36377L31.1255 9.60641"></svg:path><svg:path stroke="#fff" d="M18 21H30"></svg:path><svg:path stroke="#fff" d="M18 27H22"></svg:path><svg:path stroke="#fff" d="M28 27H30"></svg:path></svg:g>`,
})
export class IconParkTrayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTreadmillIcon],svg[icon-park-treadmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M39.75 44.0001H9.31C6.38 44.0001 4 41.6201 4 38.6901V33.2701C4 32.0601 5.06 31.1301 6.25 31.2801L40.27 35.5301C42.4 35.8001 44 37.6101 44 39.7501C44 42.1001 42.1 44.0001 39.75 44.0001Z"></svg:path><svg:path d="M16 32L4 4H10.43"></svg:path><svg:path d="M6 31L12 23"></svg:path><svg:path d="M25 15H9"></svg:path></svg:g>`,
})
export class IconParkTreadmillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTreadmillOneIcon],svg[icon-park-treadmill-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M30 14C32.7614 14 35 11.7614 35 9C35 6.23858 32.7614 4 30 4C27.2386 4 25 6.23858 25 9C25 11.7614 27.2386 14 30 14Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 21L17 16L25 19L22 25L29 31L31 38"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 25L17 33L9 32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 44H40L44 35"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M25 19L33 24L39 22"></svg:path></svg:g>`,
})
export class IconParkTreadmillOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTreadmillTwoIcon],svg[icon-park-treadmill-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 39V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 39V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 31L42 15L38 9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 14L43 4"></svg:path><svg:rect width="40" height="8" x="4" y="31" fill="#2F88FF" rx="4"></svg:rect></svg:g>`,
})
export class IconParkTreadmillTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTreasureChestIcon],svg[icon-park-treasure-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 4H6C4.89543 4 4 4.89543 4 6V42C4 43.1046 4.89543 44 6 44H42C43.1046 44 44 43.1046 44 42V6C44 4.89543 43.1046 4 42 4Z"></svg:path><svg:path stroke-linecap="round" d="M4 24H17"></svg:path><svg:path stroke-linecap="round" d="M31 24H44"></svg:path><svg:path fill="#2F88FF" d="M24 31C27.866 31 31 27.866 31 24C31 20.134 27.866 17 24 17C20.134 17 17 20.134 17 24C17 27.866 20.134 31 24 31Z"></svg:path></svg:g>`,
})
export class IconParkTreasureChestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTreeIcon],svg[icon-park-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M13.0448 14C13.5501 8.3935 18.262 4 24 4C29.738 4 34.4499 8.3935 34.9552 14H35C39.9706 14 44 18.0294 44 23C44 27.9706 39.9706 32 35 32H13C8.02944 32 4 27.9706 4 23C4 18.0294 8.02944 14 13 14H13.0448Z"></svg:path><svg:path d="M24 28L29 23"></svg:path><svg:path d="M24 25L18 19"></svg:path><svg:path d="M24 44V18"></svg:path></svg:g>`,
})
export class IconParkTreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTreeDiagramIcon],svg[icon-park-tree-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="10" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="38" cy="10" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="38" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="38" cy="38" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 38L22 38V10H34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 24L34 24"></svg:path></svg:g>`,
})
export class IconParkTreeDiagramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTreeListIcon],svg[icon-park-tree-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M38 20H18V28H38V20Z"></svg:path><svg:path fill="#2F88FF" d="M32 6H18V14H32V6Z"></svg:path><svg:path fill="#2F88FF" d="M44 34H18V42H44V34Z"></svg:path><svg:path stroke-linecap="round" d="M17 10H5"></svg:path><svg:path stroke-linecap="round" d="M17 24H5"></svg:path><svg:path stroke-linecap="round" d="M17 38H5"></svg:path><svg:path stroke-linecap="round" d="M5 44V4"></svg:path></svg:g>`,
})
export class IconParkTreeListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTreeOneIcon],svg[icon-park-tree-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:ellipse cx="24" cy="20" fill="#2F88FF" stroke="#000" rx="15" ry="16"></svg:ellipse><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 14L24 36"></svg:path><svg:path stroke="#000" d="M30 34.6689C28.1626 35.5253 26.1333 36.0003 24 36.0003C21.8667 36.0003 19.8374 35.5253 18 34.6689"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 36L24 44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 22L30 16"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 29L18 23"></svg:path></svg:g>`,
})
export class IconParkTreeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTreeTwoIcon],svg[icon-park-tree-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M11 24C11 24 8.00001 26 8 30C7.99998 36 18 38 18 38"></svg:path><svg:path stroke-linejoin="round" d="M37 24C37 24 40 26 40 30C40 36 30 38 30 38"></svg:path><svg:path stroke-linejoin="round" d="M24 15.999L24 43.999"></svg:path><svg:path d="M19.126 13.5C18.4174 12.5149 18 11.3062 18 10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10C30 11.3062 29.5826 12.5149 28.874 13.5"></svg:path><svg:path stroke-linejoin="round" d="M13 13C13 13 9 15.5 9 19C9 22.5 12 25 12 25"></svg:path><svg:path stroke-linejoin="round" d="M35 13C35 13 39 15.5 39 19C39 22.5 36 25 36 25"></svg:path></svg:g>`,
})
export class IconParkTreeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrendIcon],svg[icon-park-trend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M13.4398 29.8347L19.0967 24.1778L23.4847 28.5555L34 18.0001"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M26 18H34V26"></svg:path></svg:g>`,
})
export class IconParkTrendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrendTwoIcon],svg[icon-park-trend-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44H44"></svg:path><svg:path fill="#2F88FF" d="M4 26L12 28V38H4V26Z"></svg:path><svg:path fill="#2F88FF" d="M20 24L28 20V38H20V24Z"></svg:path><svg:path fill="#2F88FF" d="M36 16L44 12V38H36V16Z"></svg:path><svg:path stroke-linecap="round" d="M4 18L12 20L44 4H34"></svg:path></svg:g>`,
})
export class IconParkTrendTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrendingDownIcon],svg[icon-park-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M29 34.9999H41V23"></svg:path><svg:path d="M6 13L16.3385 25.5L26.1846 19.5L41 35"></svg:path></svg:g>`,
})
export class IconParkTrendingDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrendingUpIcon],svg[icon-park-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40.9999 27.0005V15.0005H29"></svg:path><svg:path d="M6 37L16.3385 24.5L26.1846 30.5L41 15"></svg:path></svg:g>`,
})
export class IconParkTrendingUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTriangleIcon],svg[icon-park-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.2692 6.98965C23.0395 5.65908 24.9605 5.65908 25.7309 6.98965L44.262 38.9979C45.0339 40.3313 44.0718 42 42.5311 42H5.4689C3.92823 42 2.96611 40.3313 3.73804 38.9979L22.2692 6.98965Z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTriangleRoundRectangleIcon],svg[icon-park-triangle-round-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 29H6V43H20V29Z"></svg:path><svg:path d="M24 4L34 21H14L24 4Z"></svg:path><svg:path d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z"></svg:path></svg:g>`,
})
export class IconParkTriangleRoundRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTriangleRulerIcon],svg[icon-park-triangle-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 44L4 4V44H44Z"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path fill="#2F88FF" fill-rule="evenodd" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 35H25L13 23V35Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 44V41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44V41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 44V41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 44V41"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 36H7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 30H7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24H7"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 18H7"></svg:path></svg:g>`,
})
export class IconParkTriangleRulerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTriangularPyramidIcon],svg[icon-park-triangular-pyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44L42 35L24 4L6 35L24 44Z"></svg:path><svg:path d="M24 44V4"></svg:path></svg:g>`,
})
export class IconParkTriangularPyramidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrophyIcon],svg[icon-park-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 30C30.6274 30 36 24.4694 36 17.6471V4H12V17.6471C12 24.4694 17.3726 30 24 30Z"></svg:path><svg:path stroke-linecap="round" d="M12 21V11H4C4 17.6667 8 21 12 21Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M36 21V11H44C44 17.6667 40 21 36 21Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 32V36"></svg:path><svg:path fill="#2F88FF" d="M15 42L18.69 36H29.0425L33 42H15Z"></svg:path></svg:g>`,
})
export class IconParkTrophyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrousersBellBottomsIcon],svg[icon-park-trousers-bell-bottoms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16 12L18 4H30L32 12V24L36 41L24 44L12 41L16 24V12Z"></svg:path><svg:path stroke="#fff" d="M24 44V16"></svg:path><svg:path stroke="#000" d="M12 41L24 44L36 41"></svg:path></svg:g>`,
})
export class IconParkTrousersBellBottomsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTruckIcon],svg[icon-park-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M12 39C14.2091 39 16 37.2091 16 35C16 32.7909 14.2091 31 12 31C9.79086 31 8 32.7909 8 35C8 37.2091 9.79086 39 12 39Z"></svg:path><svg:path d="M35 39C37.2091 39 39 37.2091 39 35C39 32.7909 37.2091 31 35 31C32.7909 31 31 32.7909 31 35C31 37.2091 32.7909 39 35 39Z"></svg:path><svg:path stroke-linecap="round" d="M8 35H2V11H31V35H16"></svg:path><svg:path stroke-linecap="round" d="M31 35V18H39.5714L46 26.5V35H39.8112"></svg:path></svg:g>`,
})
export class IconParkTruckIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrumpetIcon],svg[icon-park-trumpet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" d="M32 28H38V39C38 40.6569 36.6569 42 35 42C33.3431 42 32 40.6569 32 39V28Z"></svg:path><svg:path stroke-linecap="round" d="M29 12H39C40.6569 12 42 13.3431 42 15V25C42 26.6569 40.6569 28 39 28H28"></svg:path><svg:path stroke-linejoin="round" d="M14 14H12C8.68629 14 6 16.6863 6 20C6 23.3137 8.68629 26 12 26H14"></svg:path><svg:path fill="#2F88FF" d="M14.1984 33C14.0888 33 14 32.9112 14 32.8016L14 6.19844C14 6.08885 14.0888 6 14.1984 6L17.5 6C24.9558 6 31 12.0442 31 19.5C31 26.9558 24.9558 33 17.5 33L14.1984 33Z"></svg:path></svg:g>`,
})
export class IconParkTrumpetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTrunkIcon],svg[icon-park-trunk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="28" x="12" y="12" fill="#2F88FF" stroke="#000" rx="4"></svg:rect><svg:path stroke="#000" d="M20 12V6"></svg:path><svg:path stroke="#000" d="M28 12V6"></svg:path><svg:path stroke="#000" d="M16 4H32"></svg:path><svg:path stroke="#000" d="M18 40V44"></svg:path><svg:path stroke="#000" d="M30 40V44"></svg:path><svg:path stroke="#fff" d="M20 25H24H28"></svg:path></svg:g>`,
})
export class IconParkTrunkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTubIcon],svg[icon-park-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M40 23V12C40 8.13401 36.866 5 33 5V5C29.134 5 26 8.13401 26 12V13"></svg:path><svg:path fill="#2F88FF" d="M40 29V23H8V29C8 33.4183 11.5817 37 16 37H32C36.4183 37 40 33.4183 40 29Z"></svg:path><svg:path d="M43 23H5"></svg:path><svg:path stroke-linejoin="round" d="M17 37L13 43"></svg:path><svg:path stroke-linejoin="round" d="M31 37L35 43"></svg:path></svg:g>`,
})
export class IconParkTubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTuchongIcon],svg[icon-park-tuchong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 39H43V28H37V33H11V15H23V9H5V39Z"></svg:path><svg:path stroke-linecap="round" d="M43 16V22C35 22 29 17 29 9H35C35 13 37 16 43 16Z"></svg:path></svg:g>`,
})
export class IconParkTuchongIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTumblrIcon],svg[icon-park-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M39 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V9C42 7.34315 40.6569 6 39 6Z"></svg:path><svg:path fill="#fff" d="M15 22V17H20V14L26 12V17H31V22H26V29C26 29 26 30.5 28 31C30 31.5 33 30 33 30L31 36H26C22.5 36 20 32.5 20 30V22H15Z"></svg:path></svg:g>`,
})
export class IconParkTumblrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTurkeyIcon],svg[icon-park-turkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 36H44L39 44H9L4 36Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 30.0001V36.0001H37L37 31.0001C37 25.0001 34 23.0001 34 23.0001C36 20.5001 37 17.0001 34 15.0001C31 13.0001 28.5 15.0001 27 17.0001C27 17.0001 11 15.0001 11 30.0001Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M21 24C21 24 20 24.5 19 26C18 27.5 18 29 18 29"></svg:path><svg:path stroke="#000" stroke-width="4" d="M39 9C38.4667 9.64 35.4444 13.2667 34 15"></svg:path><svg:circle cx="38.356" cy="7.483" r="2.5" fill="#000" transform="rotate(35.072 38.356 7.483)"></svg:circle><svg:circle cx="40.811" cy="9.206" r="2.5" fill="#000" transform="rotate(35.072 40.81 9.206)"></svg:circle></svg:g>`,
})
export class IconParkTurkeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTurnAroundIcon],svg[icon-park-turn-around-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M24 14C26.7614 14 29 11.7614 29 9C29 6.23858 26.7614 4 24 4C21.2386 4 19 6.23858 19 9C19 11.7614 21.2386 14 24 14Z"></svg:path><svg:path fill="#2F88FF" d="M27 20H21C20.0713 20 19.607 20 19.2159 20.0385C15.4176 20.4126 12.4126 23.4176 12.0385 27.2159C12 27.607 12 28.0713 12 29H36C36 28.0713 36 27.607 35.9615 27.2159C35.5874 23.4176 32.5824 20.4126 28.7841 20.0385C28.393 20 27.9287 20 27 20Z"></svg:path><svg:path d="M41 26.7837C42.9017 28.0079 44 29.4527 44 31C44 35.4183 35.0457 39 24 39C12.9543 39 4 35.4183 4 31C4 29.4527 5.09827 28.0079 7 26.7837"></svg:path><svg:path d="M19 34L24 39L19 44"></svg:path></svg:g>`,
})
export class IconParkTurnAroundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTurnOffBluetoothIcon],svg[icon-park-turn-off-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M20.6719 11.7778V4L35.2563 15.1111L28.0771 19.5556M32.4996 35.9744L20.6751 44V29.6275L32.4996 35.9744Z"></svg:path><svg:path d="M4 12.5L44 35.5"></svg:path><svg:path stroke-linejoin="round" d="M7.44434 33.9999L20.6751 29.6274"></svg:path></svg:g>`,
})
export class IconParkTurnOffBluetoothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTurnOnIcon],svg[icon-park-turn-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><svg:path fill="#2F88FF" stroke-width="4" d="M21 43C16.2742 41.2327 12.3325 35.1851 10.3597 31.6428C9.50794 30.1134 9.95664 28.2347 11.3236 27.1411C12.8473 25.9222 15.0438 26.0438 16.4236 27.4236L18 29V17.5C18 16.1193 19.1193 15 20.5 15C21.8807 15 23 16.1193 23 17.5V23.5C23 22.1193 24.1193 21 25.5 21C26.8807 21 28 22.1193 28 23.5V25.5C28 24.1193 29.1193 23 30.5 23C31.8807 23 33 24.1193 33 25.5V27.5C33 26.1193 34.1193 25 35.5 25C36.8807 25 38 26.1193 38 27.5V35.368C38 36.4383 37.7354 37.496 37.1185 38.3707C36.0949 39.8219 34.255 42.0336 32 43C28.5 44.5 25.3701 44.6343 21 43Z"></svg:path><svg:path stroke-width="3" d="M12 9L15 12"></svg:path><svg:path stroke-width="3" d="M19 4L20 10"></svg:path><svg:path stroke-width="3" d="M27 8L25 11"></svg:path></svg:g>`,
})
export class IconParkTurnOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTvIcon],svg[icon-park-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="38" height="28" x="5" y="14" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 14L38 6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 14L10 6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 20L35 26"></svg:path><svg:rect width="4" height="4" x="33" y="32" fill="#000" rx="2"></svg:rect></svg:g>`,
})
export class IconParkTvIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTvOneIcon],svg[icon-park-tv-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 12H6C4.89543 12 4 12.8954 4 14V40C4 41.1046 4.89543 42 6 42H42C43.1046 42 44 41.1046 44 40V14C44 12.8954 43.1046 12 42 12Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M31 19H11V35H31V19Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14 4.5L23.0909 12L34 2"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 18V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 25V26"></svg:path></svg:g>`,
})
export class IconParkTvOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwitterIcon],svg[icon-park-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M5 35.7622C6.92886 36.8286 20.8914 44.8773 30.8199 38.674C40.7483 32.4707 40.2006 21.7833 40.2006 16.886C41.1 15.0018 43 14.0439 43 8.9438C41.1337 10.6678 39.2787 11.2544 37.435 10.7036C35.6287 7.94957 33.1435 6.73147 29.9794 7.04934C25.2333 7.52614 23.4969 12.1825 24.0079 18.2067C16.6899 21.9074 10.9515 15.524 7.99418 10.7036C7.00607 14.4999 6.0533 19.0576 7.99418 24.0995C9.2881 27.4607 12.3985 30.3024 17.3254 32.6246C12.3323 35.3308 8.22382 36.3766 5 35.7622Z"></svg:path>`,
})
export class IconParkTwitterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoIcon],svg[icon-park-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 40L6.8931 31.1017C5.81795 28.7722 6.68043 26.007 8.88925 24.7018L14.4301 21.4277C15.3946 20.8577 16.5963 20.8727 17.5463 21.4664L18.2334 21.8959C18.9449 22.3405 19.8546 21.7643 19.7566 20.9311L18.1481 7.25893C18.0546 6.46386 18.3303 5.66974 18.8963 5.10367C19.5247 4.47535 20.5249 4.41995 21.2188 4.97504L21.5966 5.27727C22.178 5.74239 22.5657 6.40711 22.6842 7.14218L24.9229 21.0222C24.9673 21.2976 25.2051 21.5 25.484 21.5C25.7767 21.5 26.0215 21.2777 26.0497 20.9864L27.3779 7.26175C27.456 6.45511 27.857 5.71437 28.4899 5.20811L28.6963 5.04293C29.4385 4.44919 30.5084 4.50844 31.1805 5.18051C31.7052 5.70522 32 6.41688 32 7.15893V29.4194C32 30.2579 32.9695 30.7244 33.6243 30.2006L37 27.5C38.6529 26.1777 40.8749 27.041 42.255 27.945C42.6936 28.2323 42.7587 28.8265 42.447 29.2482L34.5 40C34.5 40 31 44 23 44C15 44 11.6667 41.3333 11 40Z"></svg:path>`,
})
export class IconParkTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoDimensionalCodeIcon],svg[icon-park-two-dimensional-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M20 6H6V20H20V6Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M20 28H6V42H20V28Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 6H28V20H42V6Z"></svg:path><svg:path stroke-linecap="round" d="M29 28V42"></svg:path><svg:path stroke-linecap="round" d="M41 28V42"></svg:path></svg:g>`,
})
export class IconParkTwoDimensionalCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoDimensionalCodeOneIcon],svg[icon-park-two-dimensional-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M18 6H6V18H18V6Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M18 30H6V42H18V30Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 30H30V42H42V30Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 6H30V18H42V6Z"></svg:path><svg:path stroke-linecap="round" d="M24 6V24"></svg:path><svg:path stroke-linecap="round" d="M24 30V42"></svg:path><svg:path stroke-linecap="round" d="M24 24L6 24"></svg:path><svg:path stroke-linecap="round" d="M42 24H30"></svg:path></svg:g>`,
})
export class IconParkTwoDimensionalCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoDimensionalCodeTwoIcon],svg[icon-park-two-dimensional-code-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linejoin="round" d="M18 6H6V18H18V6Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M18 30H6V42H18V30Z"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M42 6H30V18H42V6Z"></svg:path><svg:path stroke-linecap="round" d="M24 6V18"></svg:path><svg:path stroke-linecap="round" d="M42 24H6"></svg:path><svg:path stroke-linecap="round" d="M34 30V42"></svg:path><svg:path stroke-linecap="round" d="M42 30V42"></svg:path><svg:path stroke-linecap="round" d="M26 30V42"></svg:path></svg:g>`,
})
export class IconParkTwoDimensionalCodeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoEllipsesIcon],svg[icon-park-two-ellipses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M40.579 7.34863C44.3436 11.1132 39.9566 21.604 30.7803 30.7803C21.604 39.9566 11.1133 44.3436 7.34863 40.579C3.58399 36.8143 7.97101 26.3236 17.1473 17.1473C26.3236 7.97101 36.8143 3.58399 40.579 7.34863Z"></svg:path><svg:path d="M7.48535 7.34863C3.72071 11.1132 8.10773 21.604 17.284 30.7803C26.4603 39.9566 36.951 44.3436 40.7157 40.579C44.4803 36.8143 40.0933 26.3236 30.917 17.1473C21.7407 7.97101 11.25 3.58399 7.48535 7.34863Z"></svg:path></svg:g>`,
})
export class IconParkTwoEllipsesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoFingersIcon],svg[icon-park-two-fingers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M12.5658 27.1824C10.8553 28.3542 10 30.2935 10 33.0002C10 37.0603 14.9753 44.0002 19.4618 44.0002C23.9483 44.0002 26.5502 44.0002 30.9415 44.0002C35.3328 44.0002 38 40.1496 38 37.0603C38 32.7099 38 28.3596 38 24.0093C38 22.3524 36.6569 21.0093 35 21.0093H34.9909C33.3391 21.0093 32 22.3484 32 24.0002"></svg:path><svg:path d="M13.981 29.4452V11.0059C13.981 9.35036 15.323 8.0083 16.9785 8.0083C16.9813 8.0083 16.9841 8.0083 16.9868 8.00831C18.6482 8.01291 19.9927 9.36106 19.9927 11.0225V24.592"></svg:path><svg:path stroke-linejoin="round" d="M19.9927 24.0083V7.01549C19.9927 5.35008 21.3428 4 23.0082 4C24.6736 4 26.0236 5.35008 26.0236 7.01549V24.0083"></svg:path><svg:path stroke-linejoin="round" d="M26 23.7158V21.0034C26 19.3466 27.3431 18.0034 29 18.0034C30.6569 18.0034 32 19.3466 32 21.0034V24.0034"></svg:path></svg:g>`,
})
export class IconParkTwoFingersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoHandsIcon],svg[icon-park-two-hands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36.9999 19.9757L36.0174 23.9333L27.3115 30.2403L27.3616 41.9576L33.9999 42.0002L33.6273 33.5147C40.5487 29.1859 44.0095 26.0144 44.0095 24.0002C44.0095 21.986 44.0095 16.6722 44.0095 6.05875"></svg:path><svg:path d="M11.0001 20.051L12.0332 24.0002L20.4006 30.4159L20.7596 42.1279L14.0001 42.0002L14.203 33.9087C7.4094 30.0009 4.0127 27.0251 4.0127 24.9812C4.0127 22.9374 4.0127 17.2867 4.0127 6.02917"></svg:path></svg:g>`,
})
export class IconParkTwoHandsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoKeyIcon],svg[icon-park-two-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M19 19C19 15.8334 21.6667 14 24 14C26.3334 14 29 15.8334 29 19C29 24.7 19 28.9333 19 34H29"></svg:path></svg:g>`,
})
export class IconParkTwoKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoSemicirclesIcon],svg[icon-park-two-semicircles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path d="M44 25C44 13.9543 35.0457 5 24 5C12.9543 5 4 13.9543 4 25H44Z"></svg:path><svg:path d="M14 32C14 37.5228 18.4772 42 24 42C29.5228 42 34 37.5228 34 32H14Z"></svg:path></svg:g>`,
})
export class IconParkTwoSemicirclesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoTrianglesIcon],svg[icon-park-two-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z"></svg:path><svg:path fill="#2F88FF" d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.0002 4L41.3207 34H6.67969L24.0002 4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24.0002 44L41.3207 14H6.67969L24.0002 44Z"></svg:path></svg:g>`,
})
export class IconParkTwoTrianglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoTrianglesTwoIcon],svg[icon-park-two-triangles-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 24L4 4V44L44 24Z"></svg:path><svg:path d="M4 24L44 44V4L4 24Z"></svg:path></svg:g>`,
})
export class IconParkTwoTrianglesTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTwoTwoIcon],svg[icon-park-two-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26.7446 44H25.8495C20.6392 44 15.7797 41.3742 12.9243 37.016L10.7288 33.6651C9.17072 31.2869 9.63077 28.1201 11.8012 26.2836L14.0887 24.3481C14.3496 24.1273 14.5 23.8029 14.5 23.4611V7.25C14.5 5.45507 15.9551 4 17.75 4C19.5449 4 21 5.45508 21 7.25V6.25C21 4.45507 22.4551 3 24.25 3C26.0449 3 27.5 4.45508 27.5 6.25V17.75C27.5 15.9551 28.9551 14.5 30.75 14.5C32.5449 14.5 34 15.9551 34 17.75V21.75C34 19.9551 35.4551 18.5 37.25 18.5C39.0449 18.5 40.5 19.9551 40.5 21.75V31.9688C40.5 33.6177 40.0018 35.2282 39.0707 36.589L38.097 38.012C35.5331 41.7593 31.2851 44 26.7446 44Z"></svg:path>`,
})
export class IconParkTwoTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkTypeDriveIcon],svg[icon-park-type-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 12C4 10.8954 4.89543 10 6 10H42C43.1046 10 44 10.8954 44 12V36C44 37.1046 43.1046 38 42 38H6C4.89543 38 4 37.1046 4 36V12Z"></svg:path><svg:path fill="#2F88FF" stroke="#fff" d="M15.4142 32.5858C15.7893 32.2107 16.298 32 16.8284 32H30.2602C30.7376 32 31.1992 32.1708 31.5617 32.4815L38 38H10L15.4142 32.5858Z"></svg:path><svg:path stroke="#000" d="M39 38H9"></svg:path><svg:circle cx="15" cy="21" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:circle cx="33" cy="21" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" d="M15 25L33 25"></svg:path><svg:path stroke="#fff" d="M15 17L33 17"></svg:path></svg:g>`,
})
export class IconParkTypeDriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUDiskIcon],svg[icon-park-u-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M30 12V4H18V12"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M13 12.3735C13 12.1672 13.1672 12 13.3735 12H34.6265C34.8328 12 35 12.1672 35 12.3735V33C35 39.0751 30.0751 44 24 44C17.9249 44 13 39.0751 13 33V12.3735Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 21L28 21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M20 29L28 29"></svg:path></svg:g>`,
})
export class IconParkUDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUTurnDownIcon],svg[icon-park-u-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 34V15C35 8.92487 30.0751 4 24 4V4C17.9249 4 13 8.92487 13 15V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 39L13 44L8 39"></svg:path><svg:circle cx="35" cy="39" r="5" fill="#2F88FF" transform="rotate(90 35 39)"></svg:circle></svg:g>`,
})
export class IconParkUTurnDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUTurnLeftIcon],svg[icon-park-u-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 13H33C39.0751 13 44 17.9249 44 24V24C44 30.0751 39.0751 35 33 35H4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 40L4 35L9 30"></svg:path><svg:circle cx="9" cy="13" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkUTurnLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUTurnRightIcon],svg[icon-park-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 13H15C8.92487 13 4 17.9249 4 24V24C4 30.0751 8.92487 35 15 35H44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 30L44 35L39 40"></svg:path><svg:circle cx="39" cy="13" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkUTurnRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUTurnUpIcon],svg[icon-park-u-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14L13 33C13 39.0751 17.9249 44 24 44V44C30.0751 44 35 39.0751 35 33V4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 9L35 4L40 9"></svg:path><svg:circle cx="13" cy="9" r="5" fill="#2F88FF" transform="rotate(-90 13 9)"></svg:circle></svg:g>`,
})
export class IconParkUTurnUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUlikecamIcon],svg[icon-park-ulikecam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-width="4"><svg:path d="M22 44C31.9411 44 40 35.9411 40 26C40 16.0589 31.9411 8 22 8C12.0589 8 4 16.0589 4 26C4 35.9411 12.0589 44 22 44Z"></svg:path><svg:path d="M41 10C42.6569 10 44 8.65685 44 7C44 5.34315 42.6569 4 41 4C39.3431 4 38 5.34315 38 7C38 8.65685 39.3431 10 41 10Z"></svg:path></svg:g>`,
})
export class IconParkUlikecamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUmbrellaIcon],svg[icon-park-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M16.7273 27C19.1515 24.5758 21.5758 23.3636 24 23.3636C26.4242 23.3636 28.8485 24.5758 31.2727 27C34.101 24.5758 36.2222 23.3636 37.6364 23.3636C39.0505 23.3636 41.1717 24.5758 44 27C44 15.9543 35.0457 7 24 7C12.9543 7 4 15.9543 4 27C6.82828 24.5758 8.9495 23.3636 10.3636 23.3636C11.7778 23.3636 13.899 24.5758 16.7273 27Z"></svg:path><svg:path stroke-linecap="round" d="M24 24V38.5536C24 41.5678 26.4858 44.0112 29.5 44.0112C32.5142 44.0112 35 41.5678 35 38.5536"></svg:path><svg:path stroke-linecap="round" d="M24 3V7"></svg:path></svg:g>`,
})
export class IconParkUmbrellaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUmbrellaOneIcon],svg[icon-park-umbrella-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24H44Z"></svg:path><svg:path stroke-linecap="round" d="M24 24V38.5536C24 41.5678 26.4858 44.0112 29.5 44.0112C32.5142 44.0112 35 41.5678 35 38.5536"></svg:path></svg:g>`,
})
export class IconParkUmbrellaOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUmbrellaTwoIcon],svg[icon-park-umbrella-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M27 24V37.125C27 39 26.6379 44 23 44C19.5714 44 19 39.625 19 38.375"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 4C38.5 4 43.375 17.3333 44 24H4C4.625 17.3333 9.5 4 24 4Z"></svg:path><svg:path stroke="#fff" d="M19 14L23 18L29 11"></svg:path></svg:g>`,
})
export class IconParkUmbrellaTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUndoIcon],svg[icon-park-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M11.2721 36.7279C14.5294 39.9853 19.0294 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C19.0294 6 14.5294 8.01472 11.2721 11.2721C9.61407 12.9301 6 17 6 17"></svg:path><svg:path d="M6 9V17H14"></svg:path></svg:g>`,
})
export class IconParkUndoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUngroupIcon],svg[icon-park-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M11.2727 4H4V11.2727H11.2727V4Z"></svg:path><svg:path fill="#2F88FF" d="M43.9998 36.7271H36.7271V43.9998H43.9998V36.7271Z"></svg:path><svg:path fill="#2F88FF" d="M11.2727 24H4V31.2727H11.2727V24Z"></svg:path><svg:path fill="#2F88FF" d="M23.9998 36.7271H16.7271V43.9998H23.9998V36.7271Z"></svg:path><svg:path fill="#2F88FF" d="M31.2727 4H24V11.2727H31.2727V4Z"></svg:path><svg:path fill="#2F88FF" d="M43.9998 16.7271H36.7271V23.9998H43.9998V16.7271Z"></svg:path><svg:path stroke-linecap="round" d="M11.2729 7.63623H24.0002"></svg:path><svg:path stroke-linecap="round" d="M24 40.3638H36.7273"></svg:path><svg:path stroke-linecap="round" d="M11.2729 27.6366H27.6366V11.2729"></svg:path><svg:path stroke-linecap="round" d="M28.8275 20.3633H36.7269M20.3633 36.7269V27.6282V36.7269Z"></svg:path><svg:path stroke-linecap="round" d="M7.63672 11.2725V23.9997"></svg:path><svg:path stroke-linecap="round" d="M40.3633 24V36.7273"></svg:path></svg:g>`,
})
export class IconParkUngroupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUnicastIcon],svg[icon-park-unicast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000"><svg:path fill="#2F88FF" stroke-width="4" d="M24 15C26.7614 15 29 12.7614 29 10C29 7.23858 26.7614 5 24 5C21.2386 5 19 7.23858 19 10C19 12.7614 21.2386 15 24 15Z"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M24 15V23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 33V23L24 23.0034"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M41 41V42"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M7 41V42"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M18 41V42"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M30 41V42"></svg:path></svg:g>`,
})
export class IconParkUnicastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUnionSelectionIcon],svg[icon-park-union-selection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 16H41C42.1046 16 43 16.8954 43 18V41C43 42.1046 42.1046 43 41 43H18C16.8954 43 16 42.1046 16 41V32"></svg:path><svg:path d="M32 16V7C32 5.89543 31.1046 5 30 5H7C5.89543 5 5 5.89543 5 7V30C5 31.1046 5.89543 32 7 32H16"></svg:path><svg:path d="M41.0005 16L17.0005 40"></svg:path><svg:path d="M32.0005 7L7.00049 32"></svg:path><svg:path d="M32.0005 16L16.0005 32"></svg:path><svg:path d="M43.0005 24L24.0005 43"></svg:path><svg:path d="M24.0005 5L5.00049 24"></svg:path><svg:path d="M43.0005 34L34.0005 43"></svg:path><svg:path d="M14.0005 5L5.00049 14"></svg:path></svg:g>`,
})
export class IconParkUnionSelectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUniversalIcon],svg[icon-park-universal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-width="4" d="M24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M11 29C12.5089 29.6244 15 30 16.2586 28.5317C17.5171 27.0633 16.395 24.7522 17.7889 23.9682C19.317 23.1086 20.4203 26.0319 23.2912 25.516C26.162 25 28 21 28 19C28 17 26.2854 17 26.162 15.0542C26 12.5 28 11 28 11"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M27.9995 37C26.9137 36.091 25.9995 35.5 26.0001 34C26.0006 32.5 26.9995 33 27.9995 32C28.9996 31 28.4995 29 29.4999 28.5C30.5004 28 33.6075 29.0558 35.9998 31"></svg:path><svg:circle cx="24" cy="4" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="44" r="2" fill="#000"></svg:circle><svg:circle cx="44" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="38" cy="10" r="2" fill="#000"></svg:circle><svg:circle cx="10" cy="38" r="2" fill="#000"></svg:circle><svg:circle cx="4" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="10" cy="10" r="2" fill="#000"></svg:circle><svg:circle cx="38" cy="38" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 24C10 27.8146 11.5256 31.2729 14 33.798"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 38C31.732 38 38 31.732 38 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 10C27.8146 10 31.2729 11.5256 33.798 14"></svg:path></svg:g>`,
})
export class IconParkUniversalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUnlikeIcon],svg[icon-park-unlike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C25.1936 41.9295 26.5616 41.3098 28.0099 40.5"></svg:path><svg:path d="M34.959 27L41.8375 35.5"></svg:path><svg:path d="M41.8375 27L34.959 35.5"></svg:path></svg:g>`,
})
export class IconParkUnlikeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkUnlinkIcon],svg[icon-park-unlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M25.8927 16.0307L18.1145 8.2525C15.2506 5.38866 10.7031 5.29302 7.9572 8.0389C5.21132 10.7848 5.30696 15.3323 8.1708 18.1962L15.949 25.9744"></svg:path><svg:path d="M31.9161 22.0707L39.6943 29.8489C42.5581 32.7127 42.9291 37.1233 39.9079 40.0062C36.8867 42.8891 32.6144 42.6564 29.7506 39.7926L21.9724 32.0144"></svg:path><svg:path d="M21.2384 21.0759L17.3493 17.1868"></svg:path><svg:path d="M30.3131 30.1504L26.424 26.2613"></svg:path></svg:g>`,
})
export class IconParkUnlinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
