import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRockGestureIcon],svg[icon-park-solid-rock-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 25V7.5c0-1.281.5-3.5 3-3.5s3 2.219 3 3.5V30l7-7c1.297-1.297 3.078-1.922 4.5-.5s1.594 2.906 0 4.5L35 33.5S29.094 44 26 44H13s-3 0-5-2s-2-4.5-2-4.5V12.781C6 12.062 6.5 10 9 10s3 2 3 2.781V25"></svg:path><svg:rect width="6" height="12" x="12" y="19" fill="currentColor" rx="3"></svg:rect><svg:rect width="6" height="12" x="18" y="19" fill="currentColor" rx="3"></svg:rect></svg:g>`,
})
export class IconParkSolidRockGestureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRocketIcon],svg[icon-park-solid-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M18.705 7.894L24 4l5.295 3.894A14 14 0 0 1 35 19.172V37H13V19.173a14 14 0 0 1 5.705-11.279Z"></svg:path><svg:path stroke-linecap="round" d="m13 17l-6 6v8l6-3zm22 0l6 6v8l-6-3z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M18 39v3m6-3v5m6-5v3"></svg:path></svg:g>`,
})
export class IconParkSolidRocketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRocketOneIcon],svg[icon-park-solid-rocket-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m20.906 6.063l1.43-.954a3 3 0 0 1 3.328 0l1.43.954A20 20 0 0 1 36 22.703V33H12V22.704a20 20 0 0 1 8.906-16.641"></svg:path><svg:circle cx="24" cy="20" r="6" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 22l-6 6.217V33h36v-4.783L36 22M24 38v6m-8-4v2m16-2v2"></svg:path></svg:g>`,
})
export class IconParkSolidRocketOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRockingHorseIcon],svg[icon-park-solid-rocking-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M14 29s-3-5-3-11h16s0-4.5 3-8s6-5 6-5l8 8.5v5L36 16c-4 5-2 13-2 13z"></svg:path><svg:path d="m30 29l5 12M18 29l-5 12m-9-4s6 6 20 6s20-6 20-6M11 18c0-3-2-6-7-6"></svg:path></svg:g>`,
})
export class IconParkSolidRockingHorseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRollerskatesIcon],svg[icon-park-solid-rollerskates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRollerskates0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke="#fff" d="M44 4H28v8h16z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M44 12v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6z"></svg:path><svg:path stroke="#000" d="M14 24v-6m7 6v-6"></svg:path><svg:path stroke="#fff" d="M23 18H12M9 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.33 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10.34 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8M40 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRollerskates0)"></svg:path>`,
})
export class IconParkSolidRollerskatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRomperIcon],svg[icon-park-solid-romper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRomper0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m6.572 19.575l-2.165-7.217c-.244-.813.048-1.696.765-2.15C8.057 8.377 14.642 5 24 5c9.343 0 15.8 3.366 18.759 5.198c.748.463 1.068 1.377.816 2.22l-2.147 7.157A2 2 0 0 1 39.512 21H36c-1.105 0-2 .891-2 1.996v10.006c0 1.104-.905 2.011-1.973 2.295c-1.299.345-2.952 1.09-4.027 2.703c-2 3-2 6-2 6h-4s0-3-2-6c-1.075-1.613-2.728-2.358-4.027-2.703c-1.068-.284-1.973-1.19-1.973-2.295V22.996A1.996 1.996 0 0 0 12 21H8.488a2 2 0 0 1-1.916-1.425"></svg:path><svg:path stroke="#000" d="M29.811 5.5a6 6 0 1 1-11.622 0"></svg:path><svg:path stroke="#fff" d="M13.5 6.494A37 37 0 0 1 24 5c4.043 0 7.545.63 10.457 1.494"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRomper0)"></svg:path>`,
})
export class IconParkSolidRomperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRopeSkippingIcon],svg[icon-park-solid-rope-skipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 32V11a7 7 0 1 1 14 0v26a7 7 0 1 0 14 0V16"></svg:path><svg:path fill="currentColor" d="M41 4v12h-6V4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 16h3m9 0h-3m0 0V4h-6v12m6 0h-6"></svg:path><svg:path fill="currentColor" d="M7 44V32h6v12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 32h-3m-9 0h3m0 0v12h6V32m-6 0h6"></svg:path></svg:g>`,
})
export class IconParkSolidRopeSkippingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRotateIcon],svg[icon-park-solid-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M12 24h30v18H12z"></svg:path><svg:path stroke-linecap="round" d="M6 8v9h9"></svg:path><svg:path stroke-linecap="round" d="M38.475 13.299C35.195 8.87 29.933 6 24 6c-5.821 0-10.997 2.763-14.287 7.05L6 17"></svg:path></svg:g>`,
})
export class IconParkSolidRotateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRotateOneIcon],svg[icon-park-solid-rotate-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M44 24c0-11.046-8.954-20-20-20S4 12.954 4 24s8.954 20 20 20c6.957 0 13.084-3.552 16.667-8.94M44 24H30"></svg:path><svg:circle cx="24" cy="24" r="6" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidRotateOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRotationOneIcon],svg[icon-park-solid-rotation-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 4v36h36"></svg:path><svg:path fill="currentColor" d="M28 40c0-11.046-8.954-20-20-20v20z"></svg:path></svg:g>`,
})
export class IconParkSolidRotationOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRoundIcon],svg[icon-park-solid-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="20" fill="currentColor" stroke="currentColor" stroke-width="4"></svg:circle>`,
})
export class IconParkSolidRoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRoundCaliperIcon],svg[icon-park-solid-round-caliper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path fill="currentColor" d="M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m20-4a20 20 0 0 1-9.284 16.887l-4.286-6.755A12 12 0 0 0 36 24zM13.423 40.975A20 20 0 0 1 4 24.165l8-.066a12 12 0 0 0 5.654 10.086zm1.019-34.543a20 20 0 0 1 19.27.084l-3.885 6.994a12 12 0 0 0-11.562-.051z"></svg:path></svg:g>`,
})
export class IconParkSolidRoundCaliperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRoundMaskIcon],svg[icon-park-solid-round-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path fill="currentColor" d="M24 44c8.955 0 16.536-5.886 19.084-14H4.916C7.464 38.114 15.045 44 24 44"></svg:path></svg:g>`,
})
export class IconParkSolidRoundMaskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRoundSocketIcon],svg[icon-park-solid-round-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRoundSocket0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m15 26l2 6m16-6l-2 6m-7-19v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRoundSocket0)"></svg:path>`,
})
export class IconParkSolidRoundSocketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRoundTripIcon],svg[icon-park-solid-round-trip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="m9 24l-4-4s-1.4 4.728-1.076 7.578S7.274 32.574 10 31c2.727-1.574 34-21 34-21l-9-2z"></svg:path><svg:path d="m26 13l-15.202-1.615L8 13l7 7m14 24l-4-5h17v-4m-10-7l4 5H19v4"></svg:path></svg:g>`,
})
export class IconParkSolidRoundTripIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRouterIcon],svg[icon-park-solid-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRouter0"><svg:g fill="none"><svg:rect width="40" height="14" x="4" y="28" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 35h8"></svg:path><svg:rect width="4" height="4" x="30" y="33" fill="#000" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M12 28V8m24 20V8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRouter0)"></svg:path>`,
})
export class IconParkSolidRouterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRouterOneIcon],svg[icon-park-solid-router-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M10 24L4 38h40l-6-14z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 4v20z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 4v20"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M38 4v20z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 4v20"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M24 4v20z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 4v20M4 38v6h40v-6"></svg:path></svg:g>`,
})
export class IconParkSolidRouterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRowingIcon],svg[icon-park-solid-rowing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M30.02 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m42 31l-7 13m-2.99-4L26 29L9 40l12-20l23 5M4 40h40"></svg:path></svg:g>`,
})
export class IconParkSolidRowingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRsMaleIcon],svg[icon-park-solid-rs-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRsMale0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4.31 16.27A2 2 0 0 1 6.29 14h35.42a2 2 0 0 1 1.981 2.27l-2.454 18A2 2 0 0 1 39.254 36H8.746a2 2 0 0 1-1.982-1.73z"></svg:path><svg:path stroke="#000" d="M19 22h2m2 6h2m-14-6h2m2 6h2m10-6h2m2 6h2m2-6h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRsMale0)"></svg:path>`,
})
export class IconParkSolidRsMaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRssIcon],svg[icon-park-solid-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRss0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M8 44V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v38l-16-8.273z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M23.95 13.95v12m-6-6h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRss0)"></svg:path>`,
})
export class IconParkSolidRssIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRugbyIcon],svg[icon-park-solid-rugby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSRugby0"><svg:g fill="none"><svg:g stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-path="url(#ipSRugby1)"><svg:path d="M33.9 33.9c9.372-9.373 12.538-21.403 7.07-26.87c-5.467-5.468-17.497-2.302-26.87 7.07c-9.372 9.373-12.538 21.403-7.07 26.87c5.467 5.468 17.497 2.302 26.87-7.07ZM21.171 21.172l5.657 5.656m-1.414-9.899l5.657 5.657M16.93 25.414l5.656 5.657m-9.894 4.249L35.32 12.692M5.615 28.243l14.142 14.142m8.486-36.77l14.142 14.142"></svg:path></svg:g><svg:defs><svg:clippath id="ipSRugby1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRugby0)"></svg:path>`,
})
export class IconParkSolidRugbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRulerOneIcon],svg[icon-park-solid-ruler-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRulerOne0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#fff" stroke-linejoin="round" d="M43 41H23"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M38.718 5H21L5 41h17.662z"></svg:path><svg:path stroke="#000" stroke-linejoin="round" d="M9.959 29.882h8.028m-4.722-7.412h8.028m-4.519-7.87h8.029"></svg:path><svg:path stroke="#fff" d="M21 5L5 41"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRulerOne0)"></svg:path>`,
})
export class IconParkSolidRulerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidRunLeftIcon],svg[icon-park-solid-run-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSRunLeft0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M6 5h18v32H6zm18 6h18v32H24z"></svg:path><svg:path stroke="#000" d="m17 17l-4 3.79L16.667 25M35 23l-4 3.79L34.667 31"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSRunLeft0)"></svg:path>`,
})
export class IconParkSolidRunLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSTurnDownIcon],svg[icon-park-solid-s-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 17v-4c0-4 3-7 7-7s7 3 7 7v19M10 6v29c0 4 3 7 7 7s7-3 7-7V17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 11l-5-5l-5 5"></svg:path><svg:circle cx="38" cy="37" r="5" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidSTurnDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSTurnLeftIcon],svg[icon-park-solid-s-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 38H13c-4 0-7-3-7-7s3-7 7-7h6m0 0h16c4 0 7-3 7-7s-3-7-7-7H17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m37 43l5-5l-5-5"></svg:path><svg:circle cx="12" cy="10" r="5" fill="currentColor" transform="rotate(-180 12 10)"></svg:circle></svg:g>`,
})
export class IconParkSolidSTurnLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSTurnRightIcon],svg[icon-park-solid-s-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M30 24H13c-4 0-7-3-7-7s3-7 7-7h19M8 38h27c4 0 7-3 7-7s-3-7-7-7h-5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13 43l-5-5l5-5"></svg:path><svg:circle cx="37.176" cy="10" r="5" fill="currentColor" transform="rotate(-180 37.176 10)"></svg:circle></svg:g>`,
})
export class IconParkSolidSTurnRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSTurnUpIcon],svg[icon-park-solid-s-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 31v4c0 4-3 7-7 7s-7-3-7-7V16m28 26V13c0-4-3-7-7-7s-7 3-7 7v18"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m33 37l5 5l5-5"></svg:path><svg:circle cx="10" cy="11" r="5" fill="currentColor" transform="rotate(-180 10 11)"></svg:circle></svg:g>`,
})
export class IconParkSolidSTurnUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSafeRetrievalIcon],svg[icon-park-solid-safe-retrieval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSafeRetrieval0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M7 9.127L24.008 4L41 9.127v10.515C41 30.695 34.153 40.506 24.003 44C13.849 40.506 7 30.692 7 19.638z"></svg:path><svg:path fill="#000" stroke="#000" d="M24 30a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m29 29l6 7"></svg:path><svg:path stroke="#fff" d="M41 19.643C41 30.695 34.153 40.507 24.002 44"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSafeRetrieval0)"></svg:path>`,
})
export class IconParkSolidSafeRetrievalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSailboatIcon],svg[icon-park-solid-sailboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="m8 28l-2-4h36l-2 4"></svg:path><svg:path fill="currentColor" d="M28 4L10 24h18z"></svg:path><svg:path d="m28 11l10 13H28zM4 34l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 34M4 40l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 40"></svg:path></svg:g>`,
})
export class IconParkSolidSailboatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSailboatOneIcon],svg[icon-park-solid-sailboat-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M21 31V5L7 31zm6 0V13l14 18z"></svg:path><svg:path d="M5 37h38l-5 6H10z"></svg:path></svg:g>`,
})
export class IconParkSolidSailboatOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSailingIcon],svg[icon-park-solid-sailing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M19 30h-8l8-9m20 9C39 17.008 28.994 4 19 4v26z"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M32.651 41.577L42 36H6l2 6h23.114a3 3 0 0 0 1.537-.423"></svg:path><svg:path stroke-linejoin="round" d="M19 30v6"></svg:path><svg:path d="M29 21h12"></svg:path></svg:g>`,
})
export class IconParkSolidSailingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSalesReportIcon],svg[icon-park-solid-sales-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSalesReport0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M41 14L24 4L7 14v20l17 10l17-10z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 22v8m8-12v12m-16-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSalesReport0)"></svg:path>`,
})
export class IconParkSolidSalesReportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSandwichIcon],svg[icon-park-solid-sandwich-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSandwich0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 36V22H6v14a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4"></svg:path><svg:path stroke="#000" d="M6 30h36"></svg:path><svg:path stroke="#fff" d="M6 26v8m36-8v8M6.067 22H42c0-2.016-11.807-10.582-17.967-14.613S12.74 8.9 8.633 13.937C5.348 17.97 6.067 19.986 6.067 22"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSandwich0)"></svg:path>`,
})
export class IconParkSolidSandwichIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSandwichOneIcon],svg[icon-park-solid-sandwich-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSandwichOne0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M17.799 40.142s4.16 4.16 8.652 2.995s15.805-12.478 16.97-16.97c1.165-4.493-2.995-8.652-2.995-8.652M7.9 30.243s-4.16-4.16-2.995-8.652c1.164-4.492 12.478-15.806 16.97-16.97c4.492-1.165 8.652 2.994 8.652 2.994"></svg:path><svg:rect width="40" height="14" x="5.071" y="33.071" fill="#fff" stroke="#fff" rx="7" transform="rotate(-45 5.071 33.071)"></svg:rect><svg:path stroke="#000" d="m15.678 33.779l.563-1.689a6 6 0 0 1 3.326-3.615l.42-.18a4.98 4.98 0 0 0 2.762-3.002v0a4.98 4.98 0 0 1 2.762-3.002l.95-.407a4.7 4.7 0 0 0 2.614-2.84v0a4.71 4.71 0 0 1 2.98-2.981l2.008-.67"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSandwichOne0)"></svg:path>`,
})
export class IconParkSolidSandwichOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSaplingIcon],svg[icon-park-solid-sapling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M27 8c-4.686 4.686-3.965 13.035-3.965 13.035S31.314 21.686 36 17s4.006-12.965 4.006-12.965S31.686 3.314 27 8"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23.035 21.035L31 13.07m-7.965 7.965S22.314 12.686 27 8s13.006-3.965 13.006-3.965S40.686 12.314 36 17s-12.965 4.035-12.965 4.035"></svg:path><svg:path fill="currentColor" d="M20 21c3.85 3.843 2.971 10.971 2.971 10.971s-7.122.872-10.97-2.971c-3.85-3.843-2.969-10.971-2.969-10.971S16.151 17.157 20 21"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.971 31.971L16.001 25m6.97 6.971s.878-7.128-2.97-10.971c-3.85-3.843-10.969-2.971-10.969-2.971S8.151 25.157 12 29s10.971 2.971 10.971 2.971M23 4v40"></svg:path></svg:g>`,
})
export class IconParkSolidSaplingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSaveIcon],svg[icon-park-solid-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSave0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M6 9a3 3 0 0 1 3-3h25.281L42 13.207V39a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M24.008 6L24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24.008 6L24 13.385c0 .34-.448.615-1 .615h-8c-.552 0-1-.275-1-.615V6z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 6h25.281"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 26h20m-20 8h10.008"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSave0)"></svg:path>`,
})
export class IconParkSolidSaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSaveOneIcon],svg[icon-park-solid-save-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSaveOne0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M39.3 6H8.7A2.7 2.7 0 0 0 6 8.7v30.6A2.7 2.7 0 0 0 8.7 42h30.6a2.7 2.7 0 0 0 2.7-2.7V8.7A2.7 2.7 0 0 0 39.3 6Z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linejoin="round" d="M32 6v18H15V6z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M26 13v4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M10.997 6H36"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSaveOne0)"></svg:path>`,
})
export class IconParkSolidSaveOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScaleOneIcon],svg[icon-park-solid-scale-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSScaleOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M18 14H5V9l13-5h12l13 5v5H30"></svg:path><svg:path fill="#fff" stroke="#fff" d="M18 4h12v40H18z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18 12h4m-4 18h5m-5-12h5m-5 6h4m-4 12h4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 10v28"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSScaleOne0)"></svg:path>`,
})
export class IconParkSolidScaleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScallionIcon],svg[icon-park-solid-scallion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 24s2.5-4.5 3-9s-1-8-1-8l5-3s1 6 1 9"></svg:path><svg:path fill="currentColor" d="M6 43c-2-1.5-2-6.91 2-10s4.186-2.283 9-6S34 4 34 4l4.5 3.5l-12.19 16.24c-2.984 3.977-3.758 9.313-6.26 13.61C18.102 40.7 16 42 14 43s-6 1.5-8 0"></svg:path><svg:path d="M23 30s3-2 7-4s13-2 13-2l-3-7s-8 0-11 3"></svg:path></svg:g>`,
})
export class IconParkSolidScallionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScanSettingIcon],svg[icon-park-solid-scan-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSScanSetting0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" d="m34 21l3 3l-3 3m-20-6l-3 3l3 3m13-13l-3-3l-3 3m6 20l-3 3l-3-3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSScanSetting0)"></svg:path>`,
})
export class IconParkSolidScanSettingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScheduleIcon],svg[icon-park-solid-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSchedule0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="10" fill="#fff" stroke="#fff" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke="#fff" d="M14 6v8"></svg:path><svg:path stroke="#000" d="M25 23H14m20 8H14"></svg:path><svg:path stroke="#fff" d="M34 6v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSchedule0)"></svg:path>`,
})
export class IconParkSolidScheduleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSchoolIcon],svg[icon-park-solid-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSchool0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4 33a2 2 0 0 1 2-2h6v-7l12-8l12 8v7h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 6v10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M36 12V6s-1.5 3-6 0s-6 0-6 0v6s1.5-3 6 0s6 0 6 0"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 44V31h-8v13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M18 44h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSchool0)"></svg:path>`,
})
export class IconParkSolidSchoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScissorsIcon],svg[icon-park-solid-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSScissors0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="38" x="5" y="5" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" d="M19 19c2 3 2 7 0 10m17-15L21 24l15 10"></svg:path><svg:circle cx="16" cy="16" r="4" stroke="#000"></svg:circle><svg:circle cx="16" cy="32" r="4" stroke="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSScissors0)"></svg:path>`,
})
export class IconParkSolidScissorsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScoreboardIcon],svg[icon-park-solid-scoreboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSScoreboard0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="12" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M14 6v6m20-6v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10.227 24L15 19.017V33m9-21v28"></svg:path><svg:ellipse cx="34" cy="26" stroke="#000" rx="3" ry="7"></svg:ellipse><svg:path stroke="#fff" stroke-linecap="round" d="M21 12h6m-6 28h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSScoreboard0)"></svg:path>`,
})
export class IconParkSolidScoreboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScreenRotationIcon],svg[icon-park-solid-screen-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24c0 11.046 8.954 20 20 20l-5-5m25-15c0-11.046-8.954-20-20-20l5 5"></svg:path><svg:path fill="currentColor" d="M30 41L7 18L18 7l23 23z"></svg:path></svg:g>`,
})
export class IconParkSolidScreenRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScreenshotIcon],svg[icon-park-solid-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M10 42a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke-linecap="round" d="M40.062 8C24 28.433 15.805 38.68 14.242 40.243a6 6 0 0 1-8.485 0"></svg:path><svg:path fill="currentColor" d="M38 42a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke-linecap="round" d="M42.242 40.243a6 6 0 0 1-8.485 0C32.195 38.68 24 28.446 8 8"></svg:path></svg:g>`,
})
export class IconParkSolidScreenshotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScreenshotOneIcon],svg[icon-park-solid-screenshot-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8"></svg:path><svg:rect width="20" height="20" x="14" y="14" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class IconParkSolidScreenshotOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScreenshotTwoIcon],svg[icon-park-solid-screenshot-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 24V4h40v20"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12" clip-rule="evenodd"></svg:path><svg:path d="M36 12C20.39 33.266 15.805 40.68 14.243 42.243a6 6 0 0 1-8.486 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M38 44a6 6 0 1 0 0-12a6 6 0 0 0 0 12" clip-rule="evenodd"></svg:path><svg:path d="M42.243 42.243a6 6 0 0 1-8.486 0C32.195 40.68 27.61 33.266 12 12"></svg:path></svg:g>`,
})
export class IconParkSolidScreenshotTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScrewdriverIcon],svg[icon-park-solid-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M19 24h10v5c.961.976 2.039 2.524 3 3.5V44H16V32.5l3-3.5z"></svg:path><svg:path stroke-linecap="round" d="M21 13v11h6V13l2-3l-2-6h-6l-2 6z"></svg:path></svg:g>`,
})
export class IconParkSolidScrewdriverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSdIcon],svg[icon-park-solid-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSd0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M15.402 5.683A2 2 0 0 1 16.907 5H37a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V24h4v-6H9v-5z"></svg:path><svg:path stroke="#000" d="M33 11v4m-12-4v4m6-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSd0)"></svg:path>`,
})
export class IconParkSolidSdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSdCardIcon],svg[icon-park-solid-sd-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSdCard0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" d="M8 12v32h32V4H14z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 15v6m6-9v6m12-6v6m-6-6v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSdCard0)"></svg:path>`,
})
export class IconParkSolidSdCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSealIcon],svg[icon-park-solid-seal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" d="M5 37a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path d="M5 31a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18.763 15.664a1 1 0 0 1 .942-.664h8.59a1 1 0 0 1 .942.664L34 29H14z"></svg:path><svg:rect width="18" height="10.8" x="15" y="4" fill="currentColor" rx="5.4"></svg:rect></svg:g>`,
})
export class IconParkSolidSealIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSearchIcon],svg[icon-park-solid-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSearch0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m33.222 33.222l8.485 8.485"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSearch0)"></svg:path>`,
})
export class IconParkSolidSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSeatIcon],svg[icon-park-solid-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M17 21.458c-4.057 1.274-7 5.065-7 9.542c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8.662-5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20c-4 0-7.5-.5-14-3v12h14v14"></svg:path><svg:circle cx="24" cy="8" r="4" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidSeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSecurityStallIcon],svg[icon-park-solid-security-stall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M16 29h16v15H16zM12 4h24v6H12z"></svg:path><svg:path d="M16 10v19m16-19v19"></svg:path><svg:path stroke-linejoin="round" d="M4 44h40"></svg:path></svg:g>`,
})
export class IconParkSolidSecurityStallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSeedlingIcon],svg[icon-park-solid-seedling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 42V26"></svg:path><svg:path fill="currentColor" d="M41.942 10.007c-.776 13.024-9.13 17.236-15.946 17.896C24.896 28.009 24 27.104 24 26v-8.372c0-.233.04-.468.125-.684C27.117 9.199 34.283 8.155 40 8.02c1.105-.027 2.006.884 1.94 1.987M7.998 6.072c9.329.685 14.197 6.091 15.836 9.558c.115.242.166.508.166.776v7.504c0 1.14-.96 2.055-2.094 1.94C7.337 24.384 6.11 14.786 6.009 8C5.993 6.894 6.897 5.99 8 6.072"></svg:path></svg:g>`,
})
export class IconParkSolidSeedlingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSelectedIcon],svg[icon-park-solid-selected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M12 4H4v8h8zm32 32h-8v8h8zm-32 0H4v8h8zM44 4h-8v8h8z"></svg:path><svg:path stroke-linecap="round" d="M8 36V12m32 24V12M12 8h24M12 40h24"></svg:path></svg:g>`,
})
export class IconParkSolidSelectedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSelectedFocusIcon],svg[icon-park-solid-selected-focus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M12 4H4v8h8zm32 32h-8v8h8zm-32 0H4v8h8zM44 4h-8v8h8z"></svg:path><svg:path stroke-dasharray="1 5" stroke-linecap="round" d="M8 36V12m32 24V12M12 8h24M12 40h24"></svg:path></svg:g>`,
})
export class IconParkSolidSelectedFocusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSelfieIcon],svg[icon-park-solid-selfie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M29.234 6.98c3.714-1.568 11.276-2.47 13.794 5.891s-8.307 14.612-8.026 8.099c.28-6.514 7.995-1.152 7.83 3.562s-5.062 5.232-5.062 5.232"></svg:path><svg:rect width="26" height="12" x="4.241" y="15.778" fill="currentColor" rx="2" transform="rotate(-30 4.241 15.778)"></svg:rect><svg:path stroke-linecap="round" d="M21.5 19.67L29 32.66"></svg:path><svg:rect width="6" height="10" x="26.401" y="34.16" fill="currentColor" rx="3" transform="rotate(-30 26.401 34.16)"></svg:rect><svg:path stroke-linecap="round" d="m11.401 8.18l5.197-3m5.303 21.186l5.197-3"></svg:path></svg:g>`,
})
export class IconParkSolidSelfieIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSendBackwardIcon],svg[icon-park-solid-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M6 14h36V6H6zm0 14h36v-8H6z"></svg:path><svg:path stroke-linecap="round" d="m30 36l-6 6l-6-6v0m6 6V28m0-14v6"></svg:path></svg:g>`,
})
export class IconParkSolidSendBackwardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSendToBackIcon],svg[icon-park-solid-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 21H5V5h16v9"></svg:path><svg:path stroke-linecap="round" d="M32 27h11v16H27V32"></svg:path><svg:path fill="currentColor" d="M14 32V14h18v18z"></svg:path></svg:g>`,
})
export class IconParkSolidSendToBackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSeoIcon],svg[icon-park-solid-seo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSeo0"><svg:g fill="none" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" fill="#fff" stroke="#fff" rx="1.633"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M16 18.948c-2-2.948-5.502-1.01-5.251 2.02C11 24 15 24 15.249 27.032C15.5 30.062 12 32 10 29.051M26 18h-4v13h4m-4-6h4"></svg:path><svg:rect width="6" height="13" x="32" y="18" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSeo0)"></svg:path>`,
})
export class IconParkSolidSeoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSeoFolderIcon],svg[icon-park-solid-seo-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSeoFolder0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m14 22l5 5l-5 5"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M26 32h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSeoFolder0)"></svg:path>`,
})
export class IconParkSolidSeoFolderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidServerIcon],svg[icon-park-solid-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSServer0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M44 4H4v16h40zm0 24H4v16h40z"></svg:path><svg:path fill="#000" d="M13 10h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 24h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m8-24h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m0 24h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSServer0)"></svg:path>`,
})
export class IconParkSolidServerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSetOffIcon],svg[icon-park-solid-set-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-miterlimit="2" d="M29 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m24 19l-4.29 8l7.6 6.02c.31.24.53.57.66.94L31.31 44m-11.6-17l-5.2 7.64C12.973 36.888 10.5 39.5 9.5 41"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="m42 24l-6.94.1c-.36 0-.72-.09-1.04-.27l-3.27-1.91c-4.01-2.35-8.4-3.96-12.97-4.78l-3.22-.57L12 21"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="m8.652 19.103l6.373 3.68l-4.5 7.794l-6.373-3.68z"></svg:path></svg:g>`,
})
export class IconParkSolidSetOffIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSettingIcon],svg[icon-park-solid-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSetting0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M36.686 15.171a15.4 15.4 0 0 1 2.529 6.102H44v5.454h-4.785a15.4 15.4 0 0 1-2.529 6.102l3.385 3.385l-3.857 3.857l-3.385-3.385a15.4 15.4 0 0 1-6.102 2.529V44h-5.454v-4.785a15.4 15.4 0 0 1-6.102-2.529l-3.385 3.385l-3.857-3.857l3.385-3.385a15.4 15.4 0 0 1-2.529-6.102H4v-5.454h4.785a15.4 15.4 0 0 1 2.529-6.102l-3.385-3.385l3.857-3.857l3.385 3.385a15.4 15.4 0 0 1 6.102-2.529V4h5.454v4.785a15.4 15.4 0 0 1 6.102 2.529l3.385-3.385l3.857 3.857z"></svg:path><svg:path fill="#000" stroke="#000" d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSetting0)"></svg:path>`,
})
export class IconParkSolidSettingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSettingComputerIcon],svg[icon-park-solid-setting-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 6H9a3 3 0 0 0-3 3v22a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3v-5m-18 8v8m-10 0h20"></svg:path><svg:circle cx="37" cy="13" r="3" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 20v-4m0-6V6m-6.062 10.5l3.464-2m5.196-3l3.464-2m-12.124 0l3.464 2m5.196 3l3.464 2"></svg:path></svg:g>`,
})
export class IconParkSolidSettingComputerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSettingLaptopIcon],svg[icon-park-solid-setting-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 9H11a3 3 0 0 0-3 3v21h32v-7"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path><svg:circle cx="35" cy="14" r="3"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 21v-4m0-6V7m-6.062 10.5l3.464-2m5.196-3l3.464-2m-12.124 0l3.464 2m5.196 3l3.464 2"></svg:path></svg:g>`,
})
export class IconParkSolidSettingLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSettingOneIcon],svg[icon-park-solid-setting-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSettingOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m34 41l10-17L34 7H14L4 24l10 17z"></svg:path><svg:path fill="#000" stroke="#000" d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSettingOne0)"></svg:path>`,
})
export class IconParkSolidSettingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSettingThreeIcon],svg[icon-park-solid-setting-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="15" fill="currentColor"></svg:circle><svg:path d="M24 39v5m15-21h5M4 23h5M24 4v5m10.606 25.606l3.536 3.536M33.9 12.687l3.535-3.536M9.15 37.435l3.536-3.535M9.858 9.858l3.535 3.535"></svg:path></svg:g>`,
})
export class IconParkSolidSettingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSettingTwoIcon],svg[icon-park-solid-setting-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSettingTwo0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M18.284 43.171a20 20 0 0 1-8.696-5.304a6 6 0 0 0-5.182-9.838A20 20 0 0 1 4 24c0-2.09.32-4.106.916-6H5a6 6 0 0 0 5.385-8.65a20 20 0 0 1 8.267-4.627A6 6 0 0 0 24 8a6 6 0 0 0 5.348-3.277a20 20 0 0 1 8.267 4.627A6 6 0 0 0 43.084 18A20 20 0 0 1 44 24c0 1.38-.14 2.728-.406 4.03a6 6 0 0 0-5.182 9.838a20 20 0 0 1-8.696 5.303a6.003 6.003 0 0 0-11.432 0Z"></svg:path><svg:path fill="#000" stroke="#000" d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSettingTwo0)"></svg:path>`,
})
export class IconParkSolidSettingTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSettingWebIcon],svg[icon-park-solid-setting-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSettingWeb0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12.059"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></svg:path><svg:circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)"></svg:circle><svg:circle cx="37" cy="34" r="3" stroke="#fff" stroke-width="4"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 41v-4m0-6v-4m-6.062 10.5l3.464-2m5.196-3l3.464-2m-12.124 0l3.464 2m5.196 3l3.464 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSettingWeb0)"></svg:path>`,
})
export class IconParkSolidSettingWebIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSevenKeyIcon],svg[icon-park-solid-seven-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSevenKey0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" d="M18.998 15H29l-8.006 18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSevenKey0)"></svg:path>`,
})
export class IconParkSolidSevenKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShadeIcon],svg[icon-park-solid-shade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShade0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 6C14.059 6 6 14.034 6 23.944V26c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5s4.5 2.522 4.5 5v-2.056C42 14.034 33.941 6 24 6"></svg:path><svg:path stroke="#000" d="M15 26s-1.5-5.5 1-11s8-9 8-9m9 20s.5-4.5-2-11s-7-9-7-9"></svg:path><svg:path stroke="#fff" d="M24 25v14.5a4.5 4.5 0 0 1-4.5 4.5v0a4.5 4.5 0 0 1-4.5-4.5v-1.318"></svg:path><svg:path stroke="#000" d="M24 25V6"></svg:path><svg:path stroke="#fff" d="M24 6V4m4.5 17c2.485 0 4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5m-9 0c-2.485 0-4.5 2.522-4.5 5c0-2.478-2.015-5-4.5-5m-9 0c2.485 0 4.5 2.522 4.5 5c0-2.478 2.015-5 4.5-5M15.733 8C18.21 6.722 21.02 6 24 6s5.79.722 8.266 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShade0)"></svg:path>`,
})
export class IconParkSolidShadeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShakeIcon],svg[icon-park-solid-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShake0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="m4 10l4 4.667l-4 4.666L8 24l-4 4.667l4 4.666L4 38m40-28l-4 4.667l4 4.666L40 24l4 4.667l-4 4.666L44 38"></svg:path><svg:path fill="#fff" stroke="#fff" d="M34 6H14v36h20z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M22 35h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShake0)"></svg:path>`,
})
export class IconParkSolidShakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShareOneIcon],svg[icon-park-solid-share-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M35 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10ZM13 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" d="m30 13.575l-12.66 7.67m-.001 5.319l13.34 7.883"></svg:path><svg:path fill="currentColor" d="M35 32a5 5 0 1 1 0 10a5 5 0 0 1 0-10Z"></svg:path></svg:g>`,
})
export class IconParkSolidShareOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShareTwoIcon],svg[icon-park-solid-share-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m26 4l18 18l-18 17V28C12 28 6 43 6 43c0-17 5-28 20-28z"></svg:path>`,
})
export class IconParkSolidShareTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShaverIcon],svg[icon-park-solid-shaver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShaver0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M20.785 18.73a.72.72 0 0 1 1.016 0l7.469 7.469a.72.72 0 0 1 0 1.016L17.757 38.728a6 6 0 0 1-8.485-8.486z"></svg:path><svg:path stroke="#fff" d="M42.581 22.389a.894.894 0 0 0 0-1.264L26.874 5.418a.894.894 0 0 0-1.263 0l-.783.783c-4.686 4.686-4.686 12.284 0 16.97c4.687 4.687 12.285 4.687 16.97 0z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m19.879 28.121l-1.415 1.414"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m27.657 17.515l2.828 2.828"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShaver0)"></svg:path>`,
})
export class IconParkSolidShaverIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShaverOneIcon],svg[icon-park-solid-shaver-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M36 14H12V6.02L16.474 4l4.245 2.02L24.193 4l3.474 2.02L31.912 4L36 6.02z"></svg:path><svg:path d="M12 14v19c0 15 24 15 24 0V14M20 35h8"></svg:path><svg:circle cx="24" cy="25" r="4"></svg:circle></svg:g>`,
})
export class IconParkSolidShaverOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShavingIcon],svg[icon-park-solid-shaving-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="27" x="14" y="17" fill="currentColor" rx="2"></svg:rect><svg:path d="M19 12h10v5H19zm0 0V9c0-1 0-5 8-5h9v5h-7v3"></svg:path></svg:g>`,
})
export class IconParkSolidShavingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShieldIcon],svg[icon-park-solid-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M6 8.256L24.009 3L42 8.256v10.778A26.32 26.32 0 0 1 24.003 44A26.32 26.32 0 0 1 6 19.029z"></svg:path>`,
})
export class IconParkSolidShieldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShieldAddIcon],svg[icon-park-solid-shield-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShieldAdd0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M6 8.256L24.009 3L42 8.256v10.778A26.32 26.32 0 0 1 24.003 44A26.32 26.32 0 0 1 6 19.029z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M23.95 14.95v16m-8-8h16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShieldAdd0)"></svg:path>`,
})
export class IconParkSolidShieldAddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShipIcon],svg[icon-park-solid-ship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M6 20.377L24 14l18 6.377L36.667 34H11.333z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 8h22l-.002 9.896L24 14l-11 3.896z"></svg:path><svg:path stroke-linecap="round" d="M24 8V4m0 20v-8M10 40l3.5 4l3.5-4l3.5 4l3.5-4l3.5 4l3.5-4l3.5 4l3.5-4"></svg:path></svg:g>`,
})
export class IconParkSolidShipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShopIcon],svg[icon-park-solid-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M4 12h40v8l-1.398.84a7 7 0 0 1-7.203 0L34 20l-1.398.84a7 7 0 0 1-7.203 0L24 20l-1.398.84a7 7 0 0 1-7.203 0L14 20l-1.399.84a7 7 0 0 1-7.202 0L4 20z"></svg:path><svg:path d="M8 22.489V44h32V22M8 11.822V4h32v8"></svg:path><svg:path fill="currentColor" d="M19 32h10v12H19z"></svg:path></svg:g>`,
})
export class IconParkSolidShopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoppingIcon],svg[icon-park-solid-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M39 32H13L8 12h36z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"></svg:path><svg:circle cx="13" cy="39" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="39" cy="39" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkSolidShoppingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoppingBagIcon],svg[icon-park-solid-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShoppingBag0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 17h38l-4.2 26H9.2z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M35 17c0-6.627-4.925-12-11-12s-11 5.373-11 12"></svg:path><svg:circle cx="17" cy="26" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 33s2 3 6 3s6-3 6-3"></svg:path><svg:circle cx="31" cy="26" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShoppingBag0)"></svg:path>`,
})
export class IconParkSolidShoppingBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoppingBagOneIcon],svg[icon-park-solid-shopping-bag-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="30" x="10" y="12" fill="currentColor" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M30 18v-8a6 6 0 0 0-6-6v0a6 6 0 0 0-6 6v8"></svg:path></svg:g>`,
})
export class IconParkSolidShoppingBagOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoppingCartIcon],svg[icon-park-solid-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShoppingCart0"><svg:g fill="none"><svg:path fill="#fff" d="M39 32H13L8 12h36z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"></svg:path><svg:circle cx="13" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="39" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 22h8m-4 4v-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShoppingCart0)"></svg:path>`,
})
export class IconParkSolidShoppingCartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoppingCartAddIcon],svg[icon-park-solid-shopping-cart-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShoppingCartAdd0"><svg:g fill="none"><svg:path fill="#fff" d="M39 32H13L8 12h36z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"></svg:path><svg:circle cx="13" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="39" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 22h8m-4 4v-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShoppingCartAdd0)"></svg:path>`,
})
export class IconParkSolidShoppingCartAddIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoppingCartDelIcon],svg[icon-park-solid-shopping-cart-del-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShoppingCartDel0"><svg:g fill="none"><svg:path fill="#fff" d="M39 32H13L8 12h36z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"></svg:path><svg:circle cx="13" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="39" cy="39" r="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 22h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShoppingCartDel0)"></svg:path>`,
})
export class IconParkSolidShoppingCartDelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoppingCartTwoIcon],svg[icon-park-solid-shopping-cart-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 7h6l7 17h17.5L43 10m-22 2h12m-6-6v12m-9 6l-4 6h26"></svg:path><svg:circle cx="19" cy="39" r="3" fill="currentColor"></svg:circle><svg:circle cx="35" cy="39" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidShoppingCartTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoppingMallIcon],svg[icon-park-solid-shopping-mall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M8 44V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v38" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 44V6a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v38m0-29l10 6v23"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="4" d="M4 44h40"></svg:path></svg:g>`,
})
export class IconParkSolidShoppingMallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShortSkirtIcon],svg[icon-park-solid-short-skirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShortSkirt0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m12 9l5-5h14l5 5l7 26s-3 9-19 9s-19-9-19-9z"></svg:path><svg:path stroke="#000" d="m13 42l4-16"></svg:path><svg:path stroke="#fff" d="M5 35s3 9 19 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShortSkirt0)"></svg:path>`,
})
export class IconParkSolidShortSkirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShortsIcon],svg[icon-park-solid-shorts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShorts0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 6H11v10L4 33l15 9l5-6l5 6l15-9l-7-17z"></svg:path><svg:path fill="#000" d="M11 14a2 2 0 1 0 0 4zm26 4a2 2 0 1 0 0-4zm-26 0h26v-4H11z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 14v2l1.75 4.25M11 14v2l-1.75 4.25"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShorts0)"></svg:path>`,
})
export class IconParkSolidShortsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShoulderBagIcon],svg[icon-park-solid-shoulder-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShoulderBag0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4.682 23.564A3 3 0 0 1 7.63 20h32.74a3 3 0 0 1 2.947 3.564l-3.062 16A3 3 0 0 1 37.309 42H10.691a3 3 0 0 1-2.947-2.436z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m24 6l-9 14h18z"></svg:path><svg:circle cx="24" cy="31" r="3" fill="#000" stroke="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShoulderBag0)"></svg:path>`,
})
export class IconParkSolidShoulderBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShovelIcon],svg[icon-park-solid-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M13 4h22l-1 9l-8.5 6h-3L14 13z"></svg:path><svg:path d="M24 19v11"></svg:path><svg:rect width="6" height="14" x="21" y="30" fill="currentColor" rx="3"></svg:rect></svg:g>`,
})
export class IconParkSolidShovelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShovelOneIcon],svg[icon-park-solid-shovel-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShovelOne0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M11 4h26l-2.833 20H13.833z"></svg:path><svg:path stroke="#000" d="M21 11v6m6-6v6"></svg:path><svg:path stroke="#fff" d="M24 24v20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShovelOne0)"></svg:path>`,
})
export class IconParkSolidShovelOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShowerHeadIcon],svg[icon-park-solid-shower-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M27 20v2H9v-2c0-3.314 4.03-6 9-6s9 2.686 9 6"></svg:path><svg:path d="M42 44V12.5C42 7.806 36.627 4 30 4s-12 3.806-12 8.5V14m0 15v-1m-7.829.03l-.342.94M4.171 43.03l-.342.94M18 44v-1m0-6v-2m-10.658.06l-.684 1.88"></svg:path></svg:g>`,
})
export class IconParkSolidShowerHeadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShrimpIcon],svg[icon-park-solid-shrimp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShrimp0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20.623 11H39s0 5-3 8s-6 4-7 4s-10.5 1-13 3s-3.999 5.5 0 9s11 5 16 3s8-8 8-8l4 10s-8 3-15 4s-14 0-20-6s-7.001-13.5-2-20c4.166-5.416 10.414-6.666 12.382-6.933A9 9 0 0 1 20.623 11"></svg:path><svg:path stroke="#fff" stroke-width="4" d="m26 23l-6-12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 4h14a7 7 0 0 1 7 7v0"></svg:path><svg:circle cx="30" cy="16" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShrimp0)"></svg:path>`,
})
export class IconParkSolidShrimpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidShutterPriorityIcon],svg[icon-park-solid-shutter-priority-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSShutterPriority0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="m15 12l3-6h12l3 6z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M41 12H7c-1.657 0-3 1.254-3 2.8v24.4C4 40.746 5.343 42 7 42h34c1.657 0 3-1.254 3-2.8V14.8c0-1.546-1.343-2.8-3-2.8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M28 20c-3 .13-9 1.089-9 3.889c0 3.5 10 2.722 10 6.222c0 2.8-6.667 3.76-10 3.889"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSShutterPriority0)"></svg:path>`,
})
export class IconParkSolidShutterPriorityIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSickbedIcon],svg[icon-park-solid-sickbed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m4 23l36 12"></svg:path><svg:circle cx="12" cy="16" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" stroke-linejoin="round" d="M29 36v-4.5L19 28v8z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 27.5L23 14l18.374 7a3 3 0 0 1 1.8 3.686L40 35"></svg:path></svg:g>`,
})
export class IconParkSolidSickbedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSignalStrengthIcon],svg[icon-park-solid-signal-strength-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38.142 38.142c7.81-7.81 7.81-20.474 0-28.284s-20.474-7.81-28.284 0s-7.81 20.474 0 28.284m22.627-5.657c4.687-4.686 4.687-12.284 0-16.97c-4.686-4.687-12.284-4.687-16.97 0c-4.687 4.686-4.687 12.284 0 16.97"></svg:path><svg:path fill="currentColor" d="M28 24a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 0v16m0 0h4m-4 0h-4"></svg:path></svg:g>`,
})
export class IconParkSolidSignalStrengthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSignalTowerIcon],svg[icon-park-solid-signal-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M17.081 6c-6.12 4.285-7.607 12.72-3.322 18.84s12.72 7.608 18.84 3.323z"></svg:path><svg:path d="M22 31v11m-9-17.5L6 42h36M40 6L25 17M17 6h23l-7 21.5"></svg:path></svg:g>`,
})
export class IconParkSolidSignalTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSimIcon],svg[icon-park-solid-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSim0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M8 4h24.889L40 11.273V44H8z"></svg:path><svg:path fill="#000" stroke="#000" d="M33 26H15v10h18z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 12v6m6-6v6m6-6v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSim0)"></svg:path>`,
})
export class IconParkSolidSimIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSimCardIcon],svg[icon-park-solid-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M10 44h28a2 2 0 0 0 2-2V14.885a2 2 0 0 0-.655-1.48L29.572 4.52A2 2 0 0 0 28.227 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2Z"></svg:path><svg:circle cx="17" cy="14" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16 23h16v14H16z"></svg:path></svg:g>`,
})
export class IconParkSolidSimCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSingleBedIcon],svg[icon-park-solid-single-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 12a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v11H8zM6 35v4m36-4v4"></svg:path><svg:path fill="currentColor" d="M29 18H19a3 3 0 0 0-3 3v2h16v-2a3 3 0 0 0-3-3"></svg:path><svg:path d="M4 26a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></svg:path></svg:g>`,
})
export class IconParkSolidSingleBedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSippyCupIcon],svg[icon-park-solid-sippy-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m34 44l3-28H11l3.5 28zM24 10l-2-6M6 16h36m-5.005 9s5.47 0 4.973 4.404C41.471 33.81 36 32.929 36 32.929M11.005 25s-5.47 0-4.973 4.404C6.529 33.81 12 32.929 12 32.929"></svg:path><svg:path fill="currentColor" d="M37 10H11v6h26z"></svg:path></svg:g>`,
})
export class IconParkSolidSippyCupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSixIcon],svg[icon-park-solid-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 41C13.5 38.25 8 30 5 25s3.313-9.687 7-6l4 4v-5.5a3.5 3.5 0 1 1 7 0V16a3.5 3.5 0 1 1 7 0v1.5a3.5 3.5 0 1 1 7 0v-10a3.5 3.5 0 1 1 7 0v21.466c0 2.003-.37 4.008-1.456 5.691C41.264 36.645 39.112 39.303 36 41c-5.5 3-11.5 2.75-17 0"></svg:path>`,
})
export class IconParkSolidSixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSixCircularConnectionIcon],svg[icon-park-solid-six-circular-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37.856 20v8M27.464 38l3.464-2l3.464-2m-13.856 4l-3.465-2l-3.464-2m-3.463-14v8m3.463-14l3.465-2l3.464-2m6.928 0l3.464 2l3.464 2"></svg:path><svg:path fill="currentColor" d="M24 44a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-32a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m14-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8M10 20a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g>`,
})
export class IconParkSolidSixCircularConnectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSixKeyIcon],svg[icon-park-solid-six-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSixKey0"><svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#000" d="M24.5 33a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M29.596 17.74C28.778 15.545 26.804 14 24.5 14c-3.038 0-5.5 2.686-5.5 6v7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSixKey0)"></svg:path>`,
})
export class IconParkSolidSixKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSixPointsIcon],svg[icon-park-solid-six-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 24V12m0 12l-10.5 6.062zm0 0l10.5 6.062z"></svg:path><svg:path fill="currentColor" d="M14 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 16a4 4 0 1 1-8 0a4 4 0 0 1 8 0m14 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m14-8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0-16a4 4 0 1 1-8 0a4 4 0 0 1 8 0M28 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path></svg:g>`,
})
export class IconParkSolidSixPointsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSkateIcon],svg[icon-park-solid-skate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M44 39.82H4l32.54-18H44z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M3.857 19.201L7.09 20.8l17.321-10l.232-3.598"></svg:path><svg:path fill="currentColor" d="M12.33 24.88a3 3 0 1 0 0-6a3 3 0 0 0 0 6m11.12-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconParkSolidSkateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSkatesIcon],svg[icon-park-solid-skates-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 5h26v8H5z"></svg:path><svg:path fill="currentColor" d="M9 36V13h18v10c14 0 14 9 14 13z"></svg:path><svg:path d="M7 36h36v6H7z"></svg:path></svg:g>`,
})
export class IconParkSolidSkatesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSkatingIcon],svg[icon-park-solid-skating-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSkating0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke="#fff" d="M44 4H28v8h16z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M44 12v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6z"></svg:path><svg:path stroke="#000" d="M14 24v-6m7 6v-6"></svg:path><svg:path stroke="#fff" d="M14 44v-8m22 8v-8M23 18H12m32 26H6a2 2 0 0 1-2-2v-1.37"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSkating0)"></svg:path>`,
})
export class IconParkSolidSkatingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSketchIcon],svg[icon-park-solid-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSketch0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path fill="#000" stroke="#000" stroke-linecap="round" d="M18.6 16h10.8l3.6 4.706L24 32l-9-11.294z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSketch0)"></svg:path>`,
})
export class IconParkSolidSketchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSkiingNordicIcon],svg[icon-park-solid-skiing-nordic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24h-6l-6-5l-3 10l6 6l2 9M17 34l-2 5l-6 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 44h34l5-7M34 24v20"></svg:path></svg:g>`,
})
export class IconParkSolidSkiingNordicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSkullIcon],svg[icon-park-solid-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSkull0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m11.263 44l3.364-8.315C10.031 32.593 7 27.293 7 21.273C7 11.733 14.611 4 24 4s17 7.733 17 17.273c0 6.02-3.031 11.32-7.627 14.412L36.737 44z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M20 38v6m8-6v6"></svg:path><svg:path fill="#000" stroke="#000" d="M17 23a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm14 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M32 44h-8m0 0h-8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSkull0)"></svg:path>`,
})
export class IconParkSolidSkullIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlaveIcon],svg[icon-park-solid-slave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlave0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 38v-7.5M10 38V6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v1"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 13h-1a6 6 0 0 0-6 6v0a6 6 0 0 0 6 6h1m8-12h1a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6h-1m-8-6h8"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 38a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H16a6 6 0 0 1-6-6"></svg:path><svg:circle cx="32" cy="38" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlave0)"></svg:path>`,
})
export class IconParkSolidSlaveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSleepIcon],svg[icon-park-solid-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M16.866 7.47A18 18 0 0 0 16 13c0 9.941 8.059 18 18 18a17.9 17.9 0 0 0 7.134-1.47C38.801 36.767 32.012 42 24 42c-9.941 0-18-8.059-18-18c0-7.407 4.473-13.768 10.866-16.53Z"></svg:path><svg:path stroke-linecap="round" d="M31.66 10H41l-10 8h10"></svg:path></svg:g>`,
})
export class IconParkSolidSleepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSleepTwoIcon],svg[icon-park-solid-sleep-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 12v24m40-7v7m0-7H4"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22 16v13h22V19a3 3 0 0 0-3-3z"></svg:path><svg:circle cx="13" cy="20" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidSleepTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlideIcon],svg[icon-park-solid-slide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlide0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M41 5.5H7v28h34z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m16 41.5l8-8l8 8"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m13.924 24.663l5.642-5.508l4.442 4.345l9.959-9.98"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 5.5h40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlide0)"></svg:path>`,
})
export class IconParkSolidSlideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlideTwoIcon],svg[icon-park-solid-slide-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlideTwo0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M4 8h40"></svg:path><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="M8 8h32v26H8z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="m31 18l3 3l-3 3m-14 0l-3-3l3-3"></svg:path><svg:path stroke="#fff" d="m16 42l8-8l8 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlideTwo0)"></svg:path>`,
})
export class IconParkSolidSlideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlidingHorizontalIcon],svg[icon-park-solid-sliding-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlidingHorizontal0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m28 20l4 4l-4 4m-8-8l-4 4l4 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlidingHorizontal0)"></svg:path>`,
})
export class IconParkSolidSlidingHorizontalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlidingVerticalIcon],svg[icon-park-solid-sliding-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlidingVertical0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m20 20l4-4l4 4m-8 8l4 4l4-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlidingVertical0)"></svg:path>`,
})
export class IconParkSolidSlidingVerticalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlightlyFrowningFaceWhitOpenMouthIcon],svg[icon-park-solid-slightly-frowning-face-whit-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlightlyFrowningFaceWhitOpenMouth0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 29c5 0 7 4 7 4H17s2-4 7-4m7-11v4m-14-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlightlyFrowningFaceWhitOpenMouth0)"></svg:path>`,
})
export class IconParkSolidSlightlyFrowningFaceWhitOpenMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlightlySmilingFaceIcon],svg[icon-park-solid-slightly-smiling-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlightlySmilingFace0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 18v1m-14-1v1m14 12s-2 4-7 4s-7-4-7-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlightlySmilingFace0)"></svg:path>`,
})
export class IconParkSolidSlightlySmilingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlippersIcon],svg[icon-park-solid-slippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 29h40v6H4z"></svg:path><svg:path fill="currentColor" d="M23.53 13c-3.5 4-3.5 12-3.5 16h20v-8.5S28 15 23.53 13"></svg:path></svg:g>`,
})
export class IconParkSolidSlippersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlippersOneIcon],svg[icon-park-solid-slippers-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 29h40v6H4z"></svg:path><svg:path fill="currentColor" d="M7 22c-3 4-3 7-3 7h26v-8c0-2.5-1.5-5.5-5-6s-13.124.5-18 7"></svg:path></svg:g>`,
})
export class IconParkSolidSlippersOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSlyFaceWhitSmileIcon],svg[icon-park-solid-sly-face-whit-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSlyFaceWhitSmile0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m34 21l-4-2m-11 0l-4 2m16 10s-2 4-7 4s-7-4-7-4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSlyFaceWhitSmile0)"></svg:path>`,
})
export class IconParkSolidSlyFaceWhitSmileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSmilingFaceIcon],svg[icon-park-solid-smiling-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSmilingFace0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 31s-2 4-7 4s-7-4-7-4m14-13v4m-14-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSmilingFace0)"></svg:path>`,
})
export class IconParkSolidSmilingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSmilingFaceWithSquintingEyesIcon],svg[icon-park-solid-smiling-face-with-squinting-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSmilingFaceWithSquintingEyes0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 31s-2 4-7 4s-7-4-7-4m4-10s-1-4-4-4s-4 4-4 4m22 0s-1-4-4-4s-4 4-4 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSmilingFaceWithSquintingEyes0)"></svg:path>`,
})
export class IconParkSolidSmilingFaceWithSquintingEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSnacksIcon],svg[icon-park-solid-snacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M6 14h36V8h-4l-2-4H12l-2 4H6z"></svg:path><svg:path stroke-linecap="round" d="m36 44l2-30H10l2 30z"></svg:path></svg:g>`,
})
export class IconParkSolidSnacksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSnakeZodiacIcon],svg[icon-park-solid-snake-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSSnakeZodiac0"><svg:g fill="none"><svg:g stroke="#fff" stroke-linecap="round" stroke-width="4" clip-path="url(#ipSSnakeZodiac1)"><svg:path d="m35.786 39.083l2.828-2.828a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-2.462 2.462m-10.266-6.705l7.071-7.07a6 6 0 0 0 0-8.486v0a6 6 0 0 0-8.485 0l-7.071 7.071"></svg:path><svg:path d="m18.283 22.645l-8.66 8.66a6 6 0 0 0 0 8.486v0a6 6 0 0 0 8.485 0l9.9-9.9"></svg:path><svg:path stroke-linejoin="round" d="M15 9H7"></svg:path></svg:g><svg:defs><svg:clippath id="ipSSnakeZodiac1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSnakeZodiac0)"></svg:path>`,
})
export class IconParkSolidSnakeZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSnowmanIcon],svg[icon-park-solid-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSnowman0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m12 24l-8-4m4 2v-4m32 4v-4"></svg:path><svg:circle cx="24" cy="10" r="6" fill="#fff" stroke="#fff" stroke-width="4"></svg:circle><svg:ellipse cx="24" cy="30" fill="#fff" stroke="#fff" stroke-width="4" rx="13" ry="14"></svg:ellipse><svg:circle cx="24" cy="26" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="31" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="36" r="2" fill="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m44 20l-8 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSnowman0)"></svg:path>`,
})
export class IconParkSolidSnowmanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSoapBubbleIcon],svg[icon-park-solid-soap-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSoapBubble0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:ellipse cx="22" cy="30" fill="#fff" stroke="#fff" stroke-linejoin="round" rx="16" ry="14"></svg:ellipse><svg:path stroke="#000" d="M26 24c1.333.167 4 1 5 5"></svg:path><svg:circle cx="8" cy="8" r="4" fill="#fff" stroke="#fff" stroke-linejoin="round"></svg:circle><svg:circle cx="41" cy="13" r="3" fill="#fff" stroke="#fff" stroke-linejoin="round"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSoapBubble0)"></svg:path>`,
})
export class IconParkSolidSoapBubbleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSoccerIcon],svg[icon-park-solid-soccer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M17.817 4.98C7.31 8.39 1.57 19.677 4.98 30.176c3.41 10.498 14.698 16.247 25.196 12.838c10.508-3.41 16.247-14.698 12.838-25.196C39.603 7.309 28.315 1.57 17.817 4.98"></svg:path><svg:path fill="currentColor" d="m34 21l-10-8l-10 8l4 12h12z"></svg:path><svg:path d="m34 21l9-3m-7 22l-6-7m-12 0l-6 7m2-19l-9-3m19-5V4"></svg:path></svg:g>`,
})
export class IconParkSolidSoccerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSoccerOneIcon],svg[icon-park-solid-soccer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-miterlimit="2" stroke-width="4" d="M29 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path fill="currentColor" d="M19 46a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M24.38 18.91L20 27l7.31 6.02c.31.24.53.57.66.94L31 44M20 27l-5.49 7.64c-.54.79-1.56 1.09-2.44.72L4 32"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M42 24h-7c-.36 0-.72-.09-1.04-.27l-3.21-1.81c-4.01-2.35-8.4-3.96-12.97-4.78l-3.22-.57c-.45-.08-.92 0-1.32.22L7 20"></svg:path></svg:g>`,
})
export class IconParkSolidSoccerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSofaIcon],svg[icon-park-solid-sofa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M12 21H4v14h8zm32 0h-8v14h8z"></svg:path><svg:path stroke-linecap="round" d="M36 27H12v8h24zM8 20V8h32v12M8 36v4m32-4v4"></svg:path></svg:g>`,
})
export class IconParkSolidSofaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSofaTwoIcon],svg[icon-park-solid-sofa-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 38V18h-8v13H12V18H4v20z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 6H12v25h24z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M10 44a4 4 0 0 0 4-4c-1.097.004-7.3 0-8 0a4 4 0 0 0 4 4m28 0a4 4 0 0 0 4-4c-1.905-.007-7.137 0-8 0a4 4 0 0 0 4 4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkSolidSofaTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSolarEnergyOneIcon],svg[icon-park-solid-solar-energy-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M10 30h6a6 6 0 0 1 0 12h-6z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 28v16M4 32h6m-6 6h6m12-2h8a2 2 0 0 0 2-2V23m0-19v7m-9.121-3.121l4.243 4.243m-4.243 12.999l4.243-4.242m13.999-13l-4.242 4.243m4.242 12.999L36.88 20.88"></svg:path><svg:circle cx="32" cy="17" r="6" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 17h6m12 0h6"></svg:path></svg:g>`,
})
export class IconParkSolidSolarEnergyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSolidStateDiskIcon],svg[icon-park-solid-solid-state-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSolidStateDisk0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M44 29H4v13h40z"></svg:path><svg:path fill="#000" d="M35.5 38a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M4 29L9.038 4.999H39.02l4.98 24"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M10 35.5h17"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSolidStateDisk0)"></svg:path>`,
})
export class IconParkSolidSolidStateDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSorcererHatIcon],svg[icon-park-solid-sorcerer-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 40c11.046 0 20-1.79 20-4c0-1.439-3.299-2.7-9-3.405L27 12L15 8l3 6l-5 18.595C7.299 33.3 4 34.56 4 36c0 2.21 8.954 4 20 4"></svg:path>`,
})
export class IconParkSolidSorcererHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSortIcon],svg[icon-park-solid-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="m24 42l-9-13h18zm0-36l-9 13h18z"></svg:path>`,
})
export class IconParkSolidSortIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSoundIcon],svg[icon-park-solid-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="24" cy="15" r="5" fill="currentColor" stroke="currentColor" stroke-width="4"></svg:circle><svg:circle cx="14" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="38" r="2" fill="currentColor"></svg:circle><svg:circle cx="34" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="34" cy="38" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="32" r="6" fill="currentColor" stroke="currentColor" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkSolidSoundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSoundOneIcon],svg[icon-park-solid-sound-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSoundOne0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M9 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v34a3 3 0 0 1-3 3H12a3 3 0 0 1-3-3z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M24 29a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path><svg:rect width="4" height="4" x="30" y="8" fill="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M27 36h2m-10 0h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSoundOne0)"></svg:path>`,
})
export class IconParkSolidSoundOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSourceCodeIcon],svg[icon-park-solid-source-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSourceCode0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M23 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v14.882"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m34 33l-4 4l4 4m6-8l4 4l-4 4"></svg:path><svg:circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSourceCode0)"></svg:path>`,
})
export class IconParkSolidSourceCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSoybeanMilkMakerIcon],svg[icon-park-solid-soybean-milk-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSoybeanMilkMaker0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M35 10h5.064a1 1 0 0 1 .998.934l.867 13A1 1 0 0 1 40.93 25H32M7 5h28l-4 26H15l-3-21z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M15 31h16l4 12H11z"></svg:path><svg:path stroke="#000" d="M21 37h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSoybeanMilkMaker0)"></svg:path>`,
})
export class IconParkSolidSoybeanMilkMakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpaCandleIcon],svg[icon-park-solid-spa-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M6.54 26.434A2 2 0 0 1 8.494 24h31.014a2 2 0 0 1 1.952 2.434l-3.111 14A2 2 0 0 1 36.396 42H11.604a2 2 0 0 1-1.952-1.566z"></svg:path><svg:path d="M20.643 9.889C22.074 8.009 23.178 5.41 23.774 4c1.044 1.41 3.31 4.948 4.026 6.829c.894 2.35-1.342 5.171-4.026 5.171s-4.92-3.76-3.131-6.111M24 16v8"></svg:path></svg:g>`,
})
export class IconParkSolidSpaCandleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpannerIcon],svg[icon-park-solid-spanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M30.442 5c1.964 0 3.823.448 5.479 1.246l-3.204 3.18a4.67 4.67 0 0 0 0 6.64a4.753 4.753 0 0 0 6.687 0l2.853-2.832c.48 1.322.743 2.748.743 4.234c0 6.887-5.623 12.469-12.558 12.469c-1.66 0-3.244-.32-4.693-.9L13.07 41.625a4.75 4.75 0 0 1-6.685 0a4.67 4.67 0 0 1 0-6.637L18.952 22.51a12.35 12.35 0 0 1-1.069-5.042C17.883 10.583 23.506 5 30.442 5Z"></svg:path>`,
})
export class IconParkSolidSpannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpeakerIcon],svg[icon-park-solid-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSpeaker0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M38 2H10a2 2 0 0 0-2 2v40a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="#000" stroke="#000" d="M24 38a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm0-20a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSpeaker0)"></svg:path>`,
})
export class IconParkSolidSpeakerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpeakerOneIcon],svg[icon-park-solid-speaker-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M4 15h11v18H4z"></svg:path><svg:path d="m15 15l18-7v32l-18-7m25-16h2m-3 8h5m-4 8h2"></svg:path></svg:g>`,
})
export class IconParkSolidSpeakerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpeedIcon],svg[icon-park-solid-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M34.023 6.69A19.9 19.9 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20c0-3.627-.966-7.03-2.654-9.962"></svg:path><svg:path fill="currentColor" d="M31.95 16.05S28.562 25.095 27 26.657A4 4 0 0 1 21.343 21c1.562-1.562 10.607-4.95 10.607-4.95Z"></svg:path></svg:g>`,
})
export class IconParkSolidSpeedIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpeedOneIcon],svg[icon-park-solid-speed-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M30.297 18.779s-3.23 9.102-4.764 10.691a4 4 0 0 1-5.754-5.557c1.534-1.59 10.518-5.134 10.518-5.134Z"></svg:path><svg:path stroke-linecap="round" d="M38.85 38.85A20.94 20.94 0 0 0 45 24c0-11.598-9.402-21-21-21S3 12.402 3 24c0 5.799 2.35 11.049 6.15 14.85M24 4v4m14.845 3.142l-3.108 2.517m6.785 13.574l-3.897-.9m-33.148.9l3.898-.9m-.22-15.191l3.108 2.517"></svg:path></svg:g>`,
})
export class IconParkSolidSpeedOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpermIcon],svg[icon-park-solid-sperm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" fill-rule="evenodd" d="M18.237 24.475c1.856 1.299 2.33 2.674 3.609 3.57c1.4.98 2.947 1.5 4.169 1.014c2.307-.916 3.976-3.908 6.011-6.815c3.96-5.655 3.954-14.385.26-16.971c-3.692-2.586-11.843.433-15.802 6.088c-1.935 2.763-4.47 6.445-4.317 8.002c.129 1.311.57 2.042 1.958 3.275s2.132.45 4.112 1.837Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M13.618 22.317q-5.312 5.847-1.403 8.885q3.908 3.038 9.815-2.995"></svg:path><svg:path stroke-linecap="round" d="M12.239 31.227q-4.645 5.081-1.71 9.477c2.937 4.396 8.755 4.155 11.595.879s8.184-11.396 14.059-9.727s4.877 8.088.939 8.762"></svg:path></svg:g>`,
})
export class IconParkSolidSpermIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpikedshoesIcon],svg[icon-park-solid-spikedshoes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSpikedshoes0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke="#fff" d="M44 6H28v8h16z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M44 14v22c0 1.11-.89 2-2 2H8c-2.21 0-4-1.79-4-4v-6c0-4.42 3.58-8 8-8h16v-6z"></svg:path><svg:path stroke="#000" d="M14 26v-6m7 6v-6"></svg:path><svg:path stroke="#fff" d="M15 42v-4m-7 4v-4m14 4v-4m12 4v-4m7 4v-4M23 20H12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSpikedshoes0)"></svg:path>`,
})
export class IconParkSolidSpikedshoesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpinningTopIcon],svg[icon-park-solid-spinning-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M24 44v-3"></svg:path><svg:path fill="currentColor" d="M44 20L24 41L4 20z"></svg:path><svg:path d="M44 12H4v8h40zm-20 0V4"></svg:path></svg:g>`,
})
export class IconParkSolidSpinningTopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSplitIcon],svg[icon-park-solid-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 10V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2h-4"></svg:path><svg:rect width="24" height="24" x="5" y="18" fill="currentColor" rx="2"></svg:rect></svg:g>`,
})
export class IconParkSolidSplitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSplitBranchIcon],svg[icon-park-solid-split-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M44 44V4H24v13l9 9v18zM4 4v40h21V30l-9-9V4z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 44V4H24v13l9 9v18zM4 4v40h21V30l-9-9V4z"></svg:path></svg:g>`,
})
export class IconParkSolidSplitBranchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSplitTurnDownLeftIcon],svg[icon-park-solid-split-turn-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 22H21a8 8 0 0 0-8 8v14"></svg:path><svg:circle cx="37" cy="8.944" r="5" fill="currentColor" transform="rotate(-90 37 8.944)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M37 14v29m5-4l-5 5l-5-5m-14 0l-5 5l-5-5"></svg:path></svg:g>`,
})
export class IconParkSolidSplitTurnDownLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSplitTurnDownRightIcon],svg[icon-park-solid-split-turn-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 22h16a8 8 0 0 1 8 8v14"></svg:path><svg:circle cx="13" cy="8.944" r="5" fill="currentColor" transform="rotate(-90 13 8.944)"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14v29m5-4l-5 5l-5-5m34 0l-5 5l-5-5"></svg:path></svg:g>`,
})
export class IconParkSolidSplitTurnDownRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSpoonIcon],svg[icon-park-solid-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="20" height="20" x="14" y="4" fill="currentColor" rx="10"></svg:rect><svg:path d="M24 24v12"></svg:path><svg:rect width="6" height="8" x="21" y="36" fill="currentColor" rx="3"></svg:rect></svg:g>`,
})
export class IconParkSolidSpoonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSportIcon],svg[icon-park-solid-sport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" d="M36 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m12 16.77l8.003-2.772L31 19.247l-10.997 8.197L31 34.684l-6.992 9.314M35.32 21.643l2.682 1.459L44 17.466M16.849 31.545l-2.97 3.912l-9.875 5.54"></svg:path></svg:g>`,
})
export class IconParkSolidSportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSportingIcon],svg[icon-park-solid-sporting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="8" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 18h12v16m22-16H29v26"></svg:path></svg:g>`,
})
export class IconParkSolidSportingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSquareIcon],svg[icon-park-solid-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="4" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path>`,
})
export class IconParkSolidSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSquareSmallIcon],svg[icon-park-solid-square-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="4" d="M34 12H14a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class IconParkSolidSquareSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSsdIcon],svg[icon-park-solid-ssd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSsd0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 38V6a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v32m15-24h-2m2 8h-2"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 38a6 6 0 0 1 6-6h16a6 6 0 0 1 0 12H16a6 6 0 0 1-6-6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 39v5m5-5v5m5-5v5"></svg:path><svg:circle cx="32" cy="38" r="2" fill="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 44H15"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSsd0)"></svg:path>`,
})
export class IconParkSolidSsdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStackLightIcon],svg[icon-park-solid-stack-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M17 4h14v30H17z"></svg:path><svg:path stroke-linecap="round" d="M17 14h14M17 24h14M6.879 7.879l4.243 4.243M6.879 33.121l4.243-4.243M41.121 7.879l-4.242 4.243m4.242 20.999l-4.242-4.243M4 21h6m28 0h6"></svg:path><svg:path fill="currentColor" d="M20 34h8v10h-8z"></svg:path></svg:g>`,
})
export class IconParkSolidStackLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStampIcon],svg[icon-park-solid-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSStamp0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M5 8.8L8.8 5l3.8 2.85L16.4 5l3.8 2.85L24 5l3.8 2.85L31.6 5l3.8 2.85L39.2 5L43 8.8l-2.85 3.8L43 16.4l-2.85 3.8L43 24l-2.85 3.8L43 31.6l-2.85 3.8L43 39.2L39.2 43l-3.8-2.85L31.6 43l-3.8-2.85L24 43l-3.8-2.85L16.4 43l-3.8-2.85L8.8 43L5 39.2l2.85-3.8L5 31.6l2.85-3.8L5 24l2.85-3.8L5 16.4l2.85-3.8z"></svg:path><svg:circle cx="24" cy="24" r="9" fill="#000" stroke="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSStamp0)"></svg:path>`,
})
export class IconParkSolidStampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStandUpIcon],svg[icon-park-solid-stand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M17 22.458c-4.057 1.274-7 5.065-7 9.542c0 5.523 4.477 10 10 10a9.99 9.99 0 0 0 8.662-5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 18l1.5-2H30l-7 14h14v14"></svg:path><svg:circle cx="34" cy="8" r="4" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidStandUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStaplerIcon],svg[icon-park-solid-stapler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 35v8H6v-8h25m7.384-13.193L8.314 10.862l-2.736 7.517l24.175 8.8M8.37 10.778l14.512 5.38a.03.03 0 0 0 .04-.018v0a5.285 5.285 0 0 0-3.119-6.792l-9.502-3.523a.09.09 0 0 0-.115.053zm8.385 11.942l-1.368 3.759a1 1 0 0 1-1.282.597l-6.578-2.394a1 1 0 0 1-.598-1.281l1.368-3.76"></svg:path><svg:circle cx="36" cy="30" r="7" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidStaplerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStarIcon],svg[icon-park-solid-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="m23.999 5l-6.113 12.478L4 19.49l10.059 9.834L11.654 43L24 36.42L36.345 43L33.96 29.325L44 19.491l-13.809-2.013z"></svg:path>`,
})
export class IconParkSolidStarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSteeringWheelIcon],svg[icon-park-solid-steering-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipSSteeringWheel0" fill="currentColor" d="M32 24a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:defs><svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0 0V32M4 24h12m28 0H32"></svg:path><svg:use href="#ipSSteeringWheel0"></svg:use><svg:use href="#ipSSteeringWheel0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 24a8 8 0 1 1-16 0a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class IconParkSolidSteeringWheelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSteollerIcon],svg[icon-park-solid-steoller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M40 24H12l2.5 10H36z"></svg:path><svg:path d="m12 24l-4-9H3.5"></svg:path><svg:circle cx="20" cy="41" r="3" fill="currentColor"></svg:circle><svg:circle cx="31" cy="41" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m23 8l5 16h12s3.5-8-2.5-14S25.667 6.667 23 8"></svg:path></svg:g>`,
})
export class IconParkSolidSteollerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStereoOneIcon],svg[icon-park-solid-stereo-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="30" height="38" x="9" y="5" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 18h30"></svg:path><svg:circle cx="24" cy="30" r="6" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidStereoOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStethoscopeIcon],svg[icon-park-solid-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M21.947 4v6M10.053 7H4v14c0 5 4 11 12 11s12-6 12-11V7zm0-3v6z"></svg:path><svg:path fill="currentColor" d="M40 23a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M16 32c0 6.627 5.373 12 12 12s12-5.373 12-12v-9"></svg:path></svg:g>`,
})
export class IconParkSolidStethoscopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStickersIcon],svg[icon-park-solid-stickers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 44c11.046 0 20-8.954 20-20c0 0-10.5 3-17-4S24 4 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path d="M44 24L24 4"></svg:path></svg:g>`,
})
export class IconParkSolidStickersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStockMarketIcon],svg[icon-park-solid-stock-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M6 20h8v14H6zm14-6h8v26h-8z"></svg:path><svg:path stroke-linecap="round" d="M24 44v-4"></svg:path><svg:path fill="currentColor" d="M34 12h8v9h-8z"></svg:path><svg:path stroke-linecap="round" d="M10 20V10m28 24V21m0-9V4"></svg:path></svg:g>`,
})
export class IconParkSolidStockMarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStopwatchIcon],svg[icon-park-solid-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSStopwatch0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c9.389 0 17-7.611 17-17s-7.611-17-17-17S7 17.611 7 27s7.611 17 17 17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 4H17m21 6l-3 3"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 18v9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSStopwatch0)"></svg:path>`,
})
export class IconParkSolidStopwatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStopwatchStartIcon],svg[icon-park-solid-stopwatch-start-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSStopwatchStart0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c9.389 0 17-7.611 17-17s-7.611-17-17-17S7 17.611 7 27s7.611 17 17 17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 4h12"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 19v8m8 0h-8"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSStopwatchStart0)"></svg:path>`,
})
export class IconParkSolidStopwatchStartIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStorageCardOneIcon],svg[icon-park-solid-storage-card-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M33.778 4h-18v8h18z"></svg:path><svg:path stroke-linecap="round" d="M15.366 4h-4.588a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H34.19"></svg:path><svg:path stroke-linecap="round" d="m27.778 20l-8 8.001h10.004l-8.004 8"></svg:path></svg:g>`,
})
export class IconParkSolidStorageCardOneIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStorageCardTwoIcon],svg[icon-park-solid-storage-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSStorageCardTwo0"><svg:g fill="none" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 4v10h20V4"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 24h20v20H14z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 32h20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34 29v6m-20-6v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSStorageCardTwo0)"></svg:path>`,
})
export class IconParkSolidStorageCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStraightRazorIcon],svg[icon-park-solid-straight-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="38" height="6" x="3.609" y="36.534" fill="currentColor" rx="2" transform="rotate(-10 3.61 36.534)"></svg:rect><svg:path d="m44 40l-4-4"></svg:path><svg:path fill="currentColor" d="m8 4l18.385 18.385l-4.243 4.242L9.414 13.9c-2.828-2.83-2.828-4.243-2.828-5.657C6.586 6.828 8 4 8 4"></svg:path><svg:path d="m8 4l18 18l9 9"></svg:path></svg:g>`,
})
export class IconParkSolidStraightRazorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStretchingIcon],svg[icon-park-solid-stretching-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSStretching0"><svg:g fill="none"><svg:g stroke="#fff" stroke-width="4" clip-path="url(#ipSStretching1)"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V25"></svg:path><svg:path stroke-linecap="round" d="M24.001 16v8M42 6v8m-9.999 10h-8"></svg:path><svg:path d="M42 6L24 24"></svg:path><svg:path stroke-linecap="round" d="M42 6h-8"></svg:path></svg:g><svg:defs><svg:clippath id="ipSStretching1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSStretching0)"></svg:path>`,
})
export class IconParkSolidStretchingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStretchingOneIcon],svg[icon-park-solid-stretching-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="8" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m41 8l-12 9.59V44M10.111 23.25L19 18v10.917L7 41"></svg:path></svg:g>`,
})
export class IconParkSolidStretchingOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStrongboxIcon],svg[icon-park-solid-strongbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSStrongbox0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3"></svg:path><svg:path fill="#000" d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4m24-24a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 24a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSStrongbox0)"></svg:path>`,
})
export class IconParkSolidStrongboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSubwayIcon],svg[icon-park-solid-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="26" x="8" y="6" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:circle cx="14" cy="27" r="2" fill="currentColor"></svg:circle><svg:circle cx="34" cy="27" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 12h20v10H14z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m32 32l8 9m-23-9l-9 9"></svg:path></svg:g>`,
})
export class IconParkSolidSubwayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSuccessIcon],svg[icon-park-solid-success-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSuccess0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z"></svg:path><svg:path stroke="#000" d="m17 24l5 5l10-10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSuccess0)"></svg:path>`,
})
export class IconParkSolidSuccessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSumIcon],svg[icon-park-solid-sum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 7v12H7a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V29h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H21a2 2 0 0 0-2 2"></svg:path>`,
})
export class IconParkSolidSumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSunIcon],svg[icon-park-solid-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSun0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="m9.15 9.15l2.228 2.228M3 24h3.15m3 14.85l2.228-2.228M38.85 38.85l-2.228-2.228M45 24h-3.15m-3-14.85l-2.228 2.228M24 3v3.15"></svg:path><svg:path fill="#000" d="M24 36c6.627 0 12-5.373 12-12s-5.373-12-12-12s-12 5.373-12 12s5.373 12 12 12Z"></svg:path><svg:path stroke-linecap="round" d="M24 45v-3.15"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSun0)"></svg:path>`,
})
export class IconParkSolidSunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSunHatIcon],svg[icon-park-solid-sun-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M12 10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v10H12z"></svg:path><svg:path d="M44 35c-1.108 1.333-2.375 5-7.6 5c-2.737 0-6.456-1.684-11.4-3"></svg:path><svg:path d="M4 35s6-9 8-15h24c2 6 8 15 8 15c-6-4-25 5-32 5c-5.5 0-6.833-3.667-8-5"></svg:path></svg:g>`,
})
export class IconParkSolidSunHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSunOneIcon],svg[icon-park-solid-sun-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13s-13 5.82-13 13s5.82 13 13 13Z"></svg:path><svg:path fill="currentColor" d="M24 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m14.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M24 47a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M9.5 41a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class IconParkSolidSunOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSunsetIcon],svg[icon-park-solid-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="m19 8l14 26H5z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m29 26l5-6l9 14H32m-22 7h28"></svg:path><svg:circle cx="38" cy="10" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidSunsetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSurprisedFaceWithOpenBigMouthIcon],svg[icon-park-solid-surprised-face-with-open-big-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSurprisedFaceWithOpenBigMouth0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 18v1m-14-1v1"></svg:path><svg:rect width="12" height="12" x="18" y="24" fill="#000" stroke="#000" stroke-linecap="round" rx="6"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSurprisedFaceWithOpenBigMouth0)"></svg:path>`,
})
export class IconParkSolidSurprisedFaceWithOpenBigMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSurprisedFaceWithOpenMouthIcon],svg[icon-park-solid-surprised-face-with-open-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSurprisedFaceWithOpenMouth0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 18v1m-14-1v1"></svg:path><svg:rect width="8" height="8" x="20" y="28" fill="#000" stroke="#000" stroke-linecap="round" rx="4"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSurprisedFaceWithOpenMouth0)"></svg:path>`,
})
export class IconParkSolidSurprisedFaceWithOpenMouthIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSurveillanceCamerasIcon],svg[icon-park-solid-surveillance-cameras-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 6H5m18 17V6"></svg:path><svg:path fill="currentColor" d="m8.425 19.58l31.876 8.54l-1.743 2.64l-4.002 7.21l-1.743 2.639l-28.011-7.506z"></svg:path><svg:path d="m38.558 30.76l3.864 1.035l-2.07 7.727l-5.796-1.552"></svg:path></svg:g>`,
})
export class IconParkSolidSurveillanceCamerasIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSurveillanceCamerasOneIcon],svg[icon-park-solid-surveillance-cameras-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 26v16m0-9h7l4-6M7 20l26.474 17.649a1 1 0 0 0 1.069.025L44 32"></svg:path><svg:path fill="currentColor" d="M7.078 12.719a1 1 0 0 1-.11-1.58l7.46-6.63a1 1 0 0 1 1.212-.09l27.065 17.732a1 1 0 0 1-.011 1.68l-9.144 5.82a1 1 0 0 1-1.092-.012z"></svg:path></svg:g>`,
})
export class IconParkSolidSurveillanceCamerasOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSurveillanceCamerasTwoIcon],svg[icon-park-solid-surveillance-cameras-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19.006 26.276V37H5m37.62-15.785l-3.863-1.035l-4.003 7.21l5.796 1.553z"></svg:path><svg:path fill="currentColor" d="m38.757 20.18l-4.003 7.21l-1.742 2.639L5 22.523L8.623 9L40.5 17.541z"></svg:path></svg:g>`,
})
export class IconParkSolidSurveillanceCamerasTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwallowIcon],svg[icon-park-solid-swallow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8.999 33.314L24.034 6.942Q25.42 4 29.04 4c3.62 0 5.977 4.986 5.977 4.986L39 9.58q-6.016.098-6.957 2.42c-.94 2.322 2.456 4.73 2.975 8.004s-1.55 8.801-6.529 11.563Q23.51 34.329 16.058 33l-6.1 11"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M18.942 27.978q3.87-6.974 5.087-8.957c1.219-1.982 6.246-1.384 4.44 3.563q-1.806 4.947-9.527 5.394Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkSolidSwallowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSweaterIcon],svg[icon-park-solid-sweater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M14 37H6V24l5-15l8-5h10l9 5l4 15v13h-8v7H14z"></svg:path><svg:path d="M34 28v9m-20-9v9"></svg:path></svg:g>`,
})
export class IconParkSolidSweaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwimmingRingIcon],svg[icon-park-solid-swimming-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M28 33.168A10.04 10.04 0 0 0 33.168 28m-18.336 0A10.04 10.04 0 0 0 20 33.168m0-18.336A10.04 10.04 0 0 0 14.832 20M28 14.832A10.04 10.04 0 0 1 33.168 20M30 40.976A18.05 18.05 0 0 0 40.976 30M7.024 30A18.05 18.05 0 0 0 18 40.976m0-33.952A18.05 18.05 0 0 0 7.024 18M30 7.024A18.05 18.05 0 0 1 40.976 18"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" stroke-miterlimit="2" d="M27 17h-6L18 7l2-3h8l2 3zm-10 4v6L7 30l-3-2v-8l3-2zm4 10h6l3 10l-2 3h-8l-2-3zm10-4v-6l10-3c1.08.8 1.92 1.2 3 2v8c-1.08.8-1.92 1.2-3 2z"></svg:path></svg:g>`,
})
export class IconParkSolidSwimmingRingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwimsuitIcon],svg[icon-park-solid-swimsuit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M14 4v7m20-7v7M12 31h24v5c-3 0-10 3-10 8h-5c0-5-6-8-9-8z"></svg:path><svg:circle cx="14" cy="18" r="7" fill="currentColor"></svg:circle><svg:circle cx="34" cy="18" r="7" fill="currentColor"></svg:circle><svg:path d="M21 18h6"></svg:path></svg:g>`,
})
export class IconParkSolidSwimsuitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwingIcon],svg[icon-park-solid-swing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M10 36c-2-3.5-2.001-10-2-19c0-3 4-4 6-1c1.107 1.662 1.816 6.264 1.816 6.264l6.495-11.25a2.52 2.52 0 1 1 4.365 2.52l.388-.67a2.52 2.52 0 1 1 4.366 2.52l-.388.671a2.52 2.52 0 1 1 4.365 2.52l-1.552 2.69a2.523 2.523 0 0 1 4.373 2.518l-9.17 15.962c-.097.17-.197.337-.32.489C28.167 40.94 26.143 43 22 43c-4.66 0-9.522-2.661-12-7"></svg:path><svg:path d="M37 5c1.379.733 3.505 1.758 5 4c1 1.5 1.5 3.5 1.79 6"></svg:path></svg:g>`,
})
export class IconParkSolidSwingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwitchButtonIcon],svg[icon-park-solid-switch-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSwitchButton0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M36 4H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16Zm0 24H12a8 8 0 1 0 0 16h24a8 8 0 1 0 0-16Z"></svg:path><svg:path fill="#000" stroke="#000" d="M36 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM12 38a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSwitchButton0)"></svg:path>`,
})
export class IconParkSolidSwitchButtonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwitchNintendoIcon],svg[icon-park-solid-switch-nintendo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSwitchNintendo0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M6 12a8 8 0 0 1 8-8h5a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2h-5a8 8 0 0 1-8-8zm36 2a8 8 0 0 0-8-8h-6a2 2 0 0 0-2 2v34a2 2 0 0 0 2 2h6a8 8 0 0 0 8-8z"></svg:path><svg:rect width="5" height="5" x="11" y="30" fill="#000" rx="2.5"></svg:rect><svg:rect width="5" height="5" x="31.5" y="14" fill="#000" rx="2.5"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 17h-3m22 11v6m-3-3h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSwitchNintendo0)"></svg:path>`,
})
export class IconParkSolidSwitchNintendoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwitchOneIcon],svg[icon-park-solid-switch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSwitchOne0"><svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="19" fill="#fff" stroke="#fff"></svg:circle><svg:rect width="10.519" height="24.012" x="36.006" y="19.334" fill="#000" stroke="#000" rx="5.259" transform="rotate(90 36.006 19.334)"></svg:rect><svg:rect width="10" height="10" x="36.006" y="29.852" stroke="#000" rx="5" transform="rotate(-180 36.006 29.852)"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSwitchOne0)"></svg:path>`,
})
export class IconParkSolidSwitchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSwitchThemesIcon],svg[icon-park-solid-switch-themes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSwitchThemes0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" d="M23 4v23h20.993L44 4z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" d="M31.005 44H18.658c-1.702 0-3.742-.568-5.11-2.387c-.925-1.23-1.543-3.03-1.543-5.613V25"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="m4 33l8.005-8l8.009 8"></svg:path><svg:path stroke="#000" d="M30 19h7m-7-7h7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSwitchThemes0)"></svg:path>`,
})
export class IconParkSolidSwitchThemesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidSystemIcon],svg[icon-park-solid-system-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M18 6H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 22H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Zm17-8a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm5 8H30a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V30a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class IconParkSolidSystemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTShirtIcon],svg[icon-park-solid-t-shirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="m9 9l9-5h12l9 5l4 15l-8 6v14H13V30l-8-6z"></svg:path><svg:path d="M13 31v-7m22 7v-7"></svg:path></svg:g>`,
})
export class IconParkSolidTShirtIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTableIcon],svg[icon-park-solid-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTable0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" d="M14 16h20m-20 8h20m-20 8h20M18 12v24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTable0)"></svg:path>`,
})
export class IconParkSolidTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTableFileIcon],svg[icon-park-solid-table-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTableFile0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 6H6a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 18h40m-26.5 0v24m13-24v24M4 30h40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M44 8v32a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTableFile0)"></svg:path>`,
})
export class IconParkSolidTableFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTableLampIcon],svg[icon-park-solid-table-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m31 44l11-16l-20-16"></svg:path><svg:path fill="currentColor" d="m6 12l10 10l8-14l-4-4z"></svg:path><svg:path d="M38 44H12m5 0v-4"></svg:path></svg:g>`,
})
export class IconParkSolidTableLampIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTableReportIcon],svg[icon-park-solid-table-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTableReport0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M5 7a3 3 0 0 1 3-3h24a3 3 0 0 1 3 3v37H8a3 3 0 0 1-3-3z"></svg:path><svg:path stroke="#fff" d="M35 24a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v17a3 3 0 0 1-3 3h-5z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 12h8m-8 7h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTableReport0)"></svg:path>`,
})
export class IconParkSolidTableReportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTabletennisIcon],svg[icon-park-solid-tabletennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" stroke="currentColor" stroke-miterlimit="2" stroke-width="4" d="M31.45 16.96a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m36 34l-2-11l-11 5l-13-3M4 41.03h40"></svg:path><svg:circle cx="9" cy="25" r="5" fill="currentColor"></svg:circle><svg:circle cx="6" cy="17" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m34 23l10 6l-15 5"></svg:path></svg:g>`,
})
export class IconParkSolidTabletennisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTagIcon],svg[icon-park-solid-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTag0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M8 44V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v38l-16-8.273z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 18h16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTag0)"></svg:path>`,
})
export class IconParkSolidTagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTagOneIcon],svg[icon-park-solid-tag-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTagOne0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M42.17 29.245L29.262 42.151a3.6 3.6 0 0 1-5.094 0L8 26V8h18l16.17 16.17a3.6 3.6 0 0 1 0 5.075Z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M18.5 21a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTagOne0)"></svg:path>`,
})
export class IconParkSolidTagOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTajMahalIcon],svg[icon-park-solid-taj-mahal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTajMahal0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linejoin="round" d="M16 28H8a2 2 0 0 0-2 2v14m26-16h8a2 2 0 0 1 2 2v14"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M20 24h8s5.165-5.678 4-9c-.755-2.15-2.439-3.34-4-5c-1.563-1.66-4-4-4-4s-2.439 2.34-4 4c-1.563 1.66-3.246 2.85-4 5c-1.166 3.322 4 9 4 9Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M4 44h40"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 24h16v20H16z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 34v10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 4v3M10 24v4m28-4v4M20 44h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTajMahal0)"></svg:path>`,
})
export class IconParkSolidTajMahalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTakeOffOneIcon],svg[icon-park-solid-take-off-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4.997 40.988h38"></svg:path><svg:path fill="currentColor" d="m8.52 31.264l-4.612-7.99c.97-.56 5.771 1.115 7.559 2.032l9.702-3.473l-8.296-14.368l4.115-.247l13.4 12.462l8.25-2.612c3.655-1.045 4.807.95 5.037 1.35c1.383 2.394-1.411 4.007-1.81 4.238c-3.193 1.843-33.344 8.608-33.344 8.608"></svg:path></svg:g>`,
})
export class IconParkSolidTakeOffOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTapeIcon],svg[icon-park-solid-tape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTape0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 12a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14.27 10c-1.696 0-2.622 1.978-1.536 3.28l1.666 2a2 2 0 0 0 1.537.72h16.126a2 2 0 0 0 1.537-.72l1.666-2c1.086-1.302.16-3.28-1.536-3.28z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 10h36"></svg:path><svg:path fill="#000" stroke="#000" d="M33 31a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm-18 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTape0)"></svg:path>`,
})
export class IconParkSolidTapeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTapeMeasureIcon],svg[icon-park-solid-tape-measure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTapeMeasure0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M13 15v-3a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v7"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4 27c0-6.627 5.373-12 12-12s12 5.373 12 12v12H4zm24 0h16v12H28z"></svg:path><svg:circle cx="16" cy="27" r="4" fill="#000" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M39 27v4m-6-4v4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 27h12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTapeMeasure0)"></svg:path>`,
})
export class IconParkSolidTapeMeasureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTargetOneIcon],svg[icon-park-solid-target-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTargetOne0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23.889 39.889c8.84 0 16-7.16 16-16s-7.16-16-16-16s-16 7.16-16 16s7.16 16 16 16Z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23.889 31.889c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8Z"></svg:path><svg:path fill="#fff" d="M23.889 25.889c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M23.889 7.889v-4m14 40l-4-7m-20 0l-4 7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTargetOne0)"></svg:path>`,
})
export class IconParkSolidTargetOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTaurusIcon],svg[icon-park-solid-taurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="24" cy="31" r="9" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" d="M44 8c0 7.732-8.954 14-20 14S4 15.732 4 8"></svg:path></svg:g>`,
})
export class IconParkSolidTaurusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTaxiIcon],svg[icon-park-solid-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTaxi0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M4 35v-7.29a6 6 0 0 1 3.319-5.368l.682-.34l2.31-7.91A4 4 0 0 1 14.205 11h19.688a4 4 0 0 1 3.904 3.128l2.205 7.874l.68.34A6 6 0 0 1 44 27.708V35a3 3 0 0 1-3 3h-1.997v1a4 4 0 0 1-4 4A4 4 0 0 1 31 39v-1H17v1a4 4 0 1 1-8 0v-1H7a3 3 0 0 1-3-3Z"></svg:path><svg:path fill="#000" d="M13.5 33a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m21 0a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 11h12l-.991-4.956C28.887 5.434 28.399 5 27.837 5h-7.674c-.563 0-1.05.434-1.172 1.044z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 23h18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTaxi0)"></svg:path>`,
})
export class IconParkSolidTaxiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTeaIcon],svg[icon-park-solid-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M11 18.167c0-.092.075-.167.167-.167h23.666c.092 0 .167.075.167.167V30c0 6.627-5.373 12-12 12s-12-5.373-12-12z"></svg:path><svg:path d="M35 30a6 6 0 0 0 0-12"></svg:path><svg:path stroke-linejoin="round" d="M11 8v3m24-3v3M23 5v6"></svg:path></svg:g>`,
})
export class IconParkSolidTeaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTeaDrinkIcon],svg[icon-park-solid-tea-drink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" fill-rule="evenodd" d="M2 20c0 12.15 6 22 18 22s18-9.85 18-22z" clip-rule="evenodd"></svg:path><svg:path d="M20 14V6m10 8v-4m-20 4v-4m26.19 20.623c.99-2.584 1.574-5.486 1.752-8.572Q38.46 22 39 22c3.866 0 7 2.015 7 4.5S42.866 31 39 31c-1 0-1.95-.135-2.81-.377"></svg:path></svg:g>`,
})
export class IconParkSolidTeaDrinkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTeapotIcon],svg[icon-park-solid-teapot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M23.001 13c-7.3 0-13.458 5.07-15.379 12H38.38c-1.92-6.93-8.079-12-15.379-12"></svg:path><svg:path fill="currentColor" d="M7.001 29.593c0 4.418 1.665 8.433 4.381 11.407H34.62c2.716-2.974 4.381-6.989 4.381-11.407c0-1.594-.217-3.134-.62-4.593H7.62C7.217 26.459 7 28 7 29.593"></svg:path><svg:path d="M27 13v-2a4 4 0 0 0-4-4v0a4 4 0 0 0-4 4v2M7 28s-1.985-.131-3-2.5C2.5 22 5 20 6 17c.761-2.282-.793-3.986-1.58-4.67c-.252-.22-.42-.53-.42-.865v-.618c0-.489.354-.903.843-.92C5.878 9.887 7.663 9.996 9 11c2 1.5 3 6 3 6M9 41h28m2-16a5 5 0 1 0-4.584-7"></svg:path></svg:g>`,
})
export class IconParkSolidTeapotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTeethIcon],svg[icon-park-solid-teeth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTeeth0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="M13.117 5h.886c4.666.69 5.931 3.338 9.997 3.338S29.331 5.69 33.998 5h.502a9.5 9.5 0 0 1 9.5 9.5v.626c0 2.903-3.09 6.217-4 9.357c-.965 3.334-1.626 6.06-1.82 8.911C37.725 40.075 35.447 43 33 43c-3.654 0-6.898-14.975-8.937-14.975C22.023 28.025 17.978 43 15 43c-1.817 0-4.17-1.075-5.054-9.606C9.594 30 9 27.941 8 24.483c-.88-3.04-3.848-6.672-4-9.932A9.127 9.127 0 0 1 13.117 5Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m15.482 12.463l16.519 5.326m-16.519 0l16.519-5.326"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTeeth0)"></svg:path>`,
})
export class IconParkSolidTeethIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTelescopeIcon],svg[icon-park-solid-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="12" height="38" x="6" y="5" rx="6"></svg:rect><svg:rect width="12" height="38" x="30" y="5" rx="6"></svg:rect><svg:path fill="currentColor" d="M12 43a6 6 0 1 0 0-12a6 6 0 0 0 0 12Zm24 0a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z"></svg:path><svg:path stroke-linecap="round" d="M30 21a6 6 0 0 0-12 0m12 10a6 6 0 0 0-12 0"></svg:path></svg:g>`,
})
export class IconParkSolidTelescopeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTencentQqIcon],svg[icon-park-solid-tencent-qq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="svgIDa"><svg:g fill="none"><svg:path fill="#fff" d="M23.794 44.518c-3.659 0-7.017-1.225-9.179-3.053c-1.098.328-2.502.855-3.389 1.51c-.759.56-.664 1.13-.527 1.361c.6 1.013 10.296.647 13.095.332v-.15Zm0 0c3.659 0 7.016-1.225 9.179-3.053c1.097.328 2.502.855 3.389 1.51c.758.56.663 1.13.526 1.361c-.6 1.013-10.295.647-13.094.332v-.15Z"></svg:path><svg:path fill="#fff" d="M23.814 22.591c6.042-.04 10.884-1.21 12.525-1.658c.39-.107.6-.3.6-.3c.001-.055.025-.983.025-1.462c0-8.066-3.808-16.17-13.172-16.171c-9.364 0-13.171 8.105-13.171 16.171c0 .48.023 1.407.025 1.462c0 0 .17.18.481.267c1.515.421 6.448 1.65 12.643 1.691h.044Zm16.418 6.72c-.375-1.206-.886-2.61-1.404-3.96c0 0-.297-.037-.448.006c-4.645 1.35-10.275 2.21-14.566 2.158h-.044c-4.267.05-9.858-.8-14.488-2.136c-.177-.05-.526-.029-.526-.029c-.518 1.35-1.029 2.756-1.403 3.96c-1.786 5.748-1.208 8.126-.767 8.18c.945.114 3.68-4.327 3.68-4.327c0 4.513 4.073 11.441 13.403 11.505h.247c9.329-.064 13.403-6.992 13.403-11.505c0 0 2.734 4.44 3.68 4.327c.44-.054 1.019-2.432-.767-8.18Z"></svg:path><svg:path fill="#000" d="M20.46 14.916c-1.27.057-2.355-1.39-2.423-3.23c-.07-1.84.904-3.378 2.174-3.436c1.27-.057 2.354 1.39 2.423 3.23c.07 1.84-.904 3.38-2.174 3.436Zm9.088-3.23c-.068 1.84-1.153 3.287-2.424 3.23c-1.27-.057-2.242-1.595-2.173-3.436c.069-1.84 1.154-3.286 2.423-3.23c1.27.058 2.243 1.596 2.174 3.437Zm2.257 5.828c-.34-.751-3.758-1.59-7.99-1.59h-.046c-4.232 0-7.65.839-7.99 1.59a.253.253 0 0 0-.025.108c0 .052.017.102.047.145c.286.416 4.082 2.477 7.968 2.477h.046c3.886 0 7.682-2.06 7.968-2.477a.256.256 0 0 0 .047-.146a.25.25 0 0 0-.025-.106"></svg:path><svg:path fill="#fff" d="M22.022 11.714c.058.727-.34 1.373-.89 1.443c-.549.07-1.04-.461-1.1-1.188c-.057-.727.341-1.373.89-1.443c.55-.071 1.042.461 1.1 1.188Zm3.49.243c.112-.201.877-1.259 2.46-.874c.415.102.608.25.648.309c.06.086.077.21.016.375c-.12.329-.369.32-.506.256c-.09-.042-1.192-.777-2.208.32c-.07.075-.195.1-.313.012c-.119-.09-.167-.272-.097-.398Z"></svg:path><svg:path fill="#000" d="M23.814 27.25h-.045c-2.918.035-6.455-.351-9.882-1.027c-.293 1.699-.47 3.834-.318 6.38c.384 6.433 4.205 10.478 10.104 10.536h.24c5.898-.058 9.718-4.103 10.103-10.537c.152-2.546-.025-4.68-.319-6.379c-3.426.676-6.965 1.063-9.883 1.027"></svg:path><svg:path fill="#fff" d="M15.504 26.712v6.332s2.9.585 5.807.18v-5.841a53.39 53.39 0 0 1-5.807-.671Z"></svg:path><svg:path fill="#fff" d="M36.938 20.634s-5.642 1.78-13.124 1.831h-.044c-7.47-.05-13.105-1.825-13.124-1.831l-1.89 4.716c4.726 1.425 10.584 2.343 15.014 2.29h.044c4.43.053 10.287-.865 15.014-2.29l-1.89-4.716Z"></svg:path></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#svgIDa)"></svg:path>`,
})
export class IconParkSolidTencentQqIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTentIcon],svg[icon-park-solid-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTent0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M10 12L4 36h12"></svg:path><svg:path fill="#fff" stroke="#fff" d="M38 12H10l6 24h28z"></svg:path><svg:path stroke="#000" d="M12 18h27"></svg:path><svg:path stroke="#fff" d="m10 12l3 12m25-12l3 12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTent0)"></svg:path>`,
})
export class IconParkSolidTentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTentBannerIcon],svg[icon-park-solid-tent-banner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M7 43h32L23 17z"></svg:path><svg:path d="M18.077 25L23 28l4.923-3M23 17V4"></svg:path><svg:path fill="currentColor" d="M35 4H23v8h12l-3-4z"></svg:path></svg:g>`,
})
export class IconParkSolidTentBannerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTerminalIcon],svg[icon-park-solid-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTerminal0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="32" x="4" y="8" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="m12 18l7 6l-7 6m11 2h13"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTerminal0)"></svg:path>`,
})
export class IconParkSolidTerminalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTerminationFileIcon],svg[icon-park-solid-termination-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTerminationFile0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#fff" stroke-linejoin="round" d="M40 16.398V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h10"></svg:path><svg:path stroke="#fff" d="M16 14h13m-13 7h5"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M34 44c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path stroke="#000" d="m27 27l14 14"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M24 34c0-5.523 4.477-10 10-10m0 20c5.523 0 10-4.477 10-10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTerminationFile0)"></svg:path>`,
})
export class IconParkSolidTerminationFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTestTubeIcon],svg[icon-park-solid-test-tube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTestTube0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M18 4h12"></svg:path><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="M24 44a6 6 0 0 0 6-6V10H18v28a6 6 0 0 0 6 6" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M24 27v1m0-10v3"></svg:path><svg:path stroke="#fff" d="M19 35h11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTestTube0)"></svg:path>`,
})
export class IconParkSolidTestTubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTextIcon],svg[icon-park-solid-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSText0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M16 19v-3h16v3M22 34h4m-2-16v16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSText0)"></svg:path>`,
})
export class IconParkSolidTextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTextMessageIcon],svg[icon-park-solid-text-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTextMessage0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M44 7H4v30h15l5 5l5-5h15z"></svg:path><svg:path stroke="#000" d="M14 16h6m-6 8h2m13-10l7 14m-7-14l-7 14m2-4h10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTextMessage0)"></svg:path>`,
})
export class IconParkSolidTextMessageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTextureTwoIcon],svg[icon-park-solid-texture-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTextureTwo0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M40 4H8a4 4 0 0 0-4 4v32a4 4 0 0 0 4 4h32a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4"></svg:path><svg:path stroke="#000" d="M12 12v8m16 8v8m-8-24v8m8-8h8M12 28h8m8-8h8M12 36h8m16-8v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTextureTwo0)"></svg:path>`,
})
export class IconParkSolidTextureTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTheSingleShoulderBagIcon],svg[icon-park-solid-the-single-shoulder-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M28 27c0-8.819-1.22-23-4-23c-3.429 0-4 14.181-4 23m-5 0h18v17H15z"></svg:path><svg:path fill="currentColor" d="M15 27h18l-5.294 9h-7.941z"></svg:path></svg:g>`,
})
export class IconParkSolidTheSingleShoulderBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTheaterIcon],svg[icon-park-solid-theater-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" fill-rule="evenodd" stroke-linejoin="round" d="M8 6h32a2 2 0 0 1 2 2v28L32 22.005q-4 2.378-8 2.378t-8-2.378L6 36V8a2 2 0 0 1 2-2Z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M6 42h36"></svg:path></svg:g>`,
})
export class IconParkSolidTheaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThemeIcon],svg[icon-park-solid-theme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M18 6a6 6 0 0 0 12 0h5.455L42 15.818l-5.727 4.91V42H11.727V20.727L6 15.818L12.546 6z"></svg:path>`,
})
export class IconParkSolidThemeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThermometerIcon],svg[icon-park-solid-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSThermometer0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M18 26V10a6 6 0 0 1 12 0v16a9.99 9.99 0 0 1 4 8c0 5.523-4.477 10-10 10s-10-4.477-10-10a9.99 9.99 0 0 1 4-8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 17v13"></svg:path><svg:path fill="#000" stroke="#000" d="M24 38a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSThermometer0)"></svg:path>`,
})
export class IconParkSolidThermometerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThermometerOneIcon],svg[icon-park-solid-thermometer-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 44a9 9 0 0 0 4-17.064V10c0-2 0-6-4-6s-4 4-4 6v16.936A9 9 0 0 0 24 44Z"></svg:path>`,
})
export class IconParkSolidThermometerOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThermosCupIcon],svg[icon-park-solid-thermos-cup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M10 31s.071 6 14 6s14-6 14-6V15H10z"></svg:path><svg:path stroke-linecap="round" d="M24 4v6m-8-5v4m16-4v4M14 36v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5"></svg:path></svg:g>`,
})
export class IconParkSolidThermosCupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThinIcon],svg[icon-park-solid-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M33 25H15c-1.59 0-3.77-.23-5-1c-3.65-2.31-4.34-7.37-2-11l6-9c3.93 8.43 16.04 8.42 20 0l6 9c2.34 3.63 1.64 8.69-2 11c-1.23.78-3.41 1-5 1"></svg:path><svg:path d="m12 25l2.52 9.55c.87 3.38-.06 6.97-2.52 9.45m24-19l-2.52 9.58c-.87 3.38.06 6.94 2.52 9.42m-12-2v-2"></svg:path></svg:g>`,
})
export class IconParkSolidThinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThinkingProblemIcon],svg[icon-park-solid-thinking-problem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSThinkingProblem0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m38 21l5 9l-5 1v6h-3l-6-1l-1 7H13l-2-10.381C7.92 29.703 6 25.576 6 21c0-8.837 7.163-16 16-16s16 7.163 16 16"></svg:path><svg:path stroke="#000" d="M17 19a5 5 0 1 1 5 5v3m0 6v1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSThinkingProblem0)"></svg:path>`,
})
export class IconParkSolidThinkingProblemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThreeIcon],svg[icon-park-solid-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m11 40l-4.208-9.117a5 5 0 0 1 1.767-6.255l1.904-1.27a1 1 0 0 1 1.085-.016l.452.283l-1.87-13.68a2.32 2.32 0 0 1 .442-1.707a1.547 1.547 0 0 1 2.166-.31l.133.1c.41.308.719.73.886 1.215l4.112 11.879a.562.562 0 0 0 1.092-.22l-.883-13.685a2.7 2.7 0 0 1 .785-2.08a1.797 1.797 0 0 1 2.393-.132l.34.272a3 3 0 0 1 1.088 1.865l2.239 13.88a.568.568 0 0 0 1.127-.036l1.328-13.724a3 3 0 0 1 1.112-2.054l.206-.165a1.865 1.865 0 0 1 2.484.138c.525.524.82 1.236.82 1.978V19.91a1 1 0 0 0 .017.175c.112.514.79 3.183 2.983 3.914c.907.302 2.364 2.8 3.373 4.727c.74 1.414.669 3.097-.106 4.492L34.5 40S31 44 23 44s-11.333-2.667-12-4"></svg:path>`,
})
export class IconParkSolidThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThreeDGlassesIcon],svg[icon-park-solid-three-d-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M19.6 34.5h8.8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.303 27.39L9.958 9.563L14.949 7m30.856 20.633L38.05 9.562L33.059 7"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.4 26.8h15.317a1.294 1.294 0 0 1 1.29 1.396l-.927 11.712a1.294 1.294 0 0 1-1.29 1.192H4.328a1.294 1.294 0 0 1-1.29-1.192l-.927-11.712A1.294 1.294 0 0 1 3.4 26.8Zm25.884 0H44.6a1.294 1.294 0 0 1 1.29 1.396l-.928 11.712a1.294 1.294 0 0 1-1.29 1.192h-13.46a1.294 1.294 0 0 1-1.29-1.192l-.928-11.712a1.294 1.294 0 0 1 1.29-1.396Z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkSolidThreeDGlassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThreeHexagonsIcon],svg[icon-park-solid-three-hexagons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 27l-10-6l-10 6v12l10 6l10-6zm20 0l-10-6l-10 6v12l10 6l10-6z"></svg:path><svg:path d="M34 9L24 3L14 9v12l10 6l10-6z"></svg:path></svg:g>`,
})
export class IconParkSolidThreeHexagonsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThreeKeyIcon],svg[icon-park-solid-three-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSThreeKey0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" d="M19 14h10l-7 9c4 0 7 2 7 6s-3 5-5 5c-2.381 0-4-1-5-2.1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSThreeKey0)"></svg:path>`,
})
export class IconParkSolidThreeKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThreeSlashesIcon],svg[icon-park-solid-three-slashes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m6 10l36-6v7L6 17zm0 14l36-6v7L6 31zm0 14l36-6v7L6 45z"></svg:path>`,
})
export class IconParkSolidThreeSlashesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThreeThreeIcon],svg[icon-park-solid-three-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25.745 44h-.896c-5.21 0-10.07-2.626-12.925-6.984l-2.195-3.35a5.63 5.63 0 0 1 1.072-7.382l2.288-1.936c.26-.22.411-.545.411-.887V7.25a3.25 3.25 0 0 1 6.5 0v-1a3.25 3.25 0 0 1 6.5 0v1a3.25 3.25 0 0 1 6.5 0v14.5a3.25 3.25 0 0 1 6.5 0v10.219c0 1.649-.498 3.26-1.43 4.62l-.973 1.423A13.76 13.76 0 0 1 25.745 44"></svg:path>`,
})
export class IconParkSolidThreeThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThreeTrianglesIcon],svg[icon-park-solid-three-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m17 7l7 12.124L29.99 29.5H4.01z"></svg:path><svg:path fill="currentColor" d="m31 7l12.99 22.5H18.01L24 19.124zM11.01 41.5h25.98l-7-12H18.01z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29.99 29.5L24 19.124M18.01 29.5l-7 12h25.98l-7-12zm0 0h25.98L31 7l-7 12.124zm0 0L24 19.124zm0 0h11.98zm11.98 0H4.01L17 7l7 12.124z"></svg:path></svg:g>`,
})
export class IconParkSolidThreeTrianglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThumbsDownIcon],svg[icon-park-solid-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M20.38 29.4v7.2a5.4 5.4 0 0 0 5.4 5.4l7.2-16.2V6H12.062a3.6 3.6 0 0 0-3.6 3.06L5.98 25.26a3.6 3.6 0 0 0 3.6 4.14z"></svg:path><svg:path fill="currentColor" d="M32.98 6h4.806a4.16 4.16 0 0 1 4.194 3.6v12.6c-.283 2.09-2.086 3.838-4.194 3.8H32.98z"></svg:path></svg:g>`,
})
export class IconParkSolidThumbsDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThumbsUpIcon],svg[icon-park-solid-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M27.6 18.6v-7.2A5.4 5.4 0 0 0 22.2 6L15 22.2V42h20.916a3.6 3.6 0 0 0 3.6-3.06L42 22.74a3.6 3.6 0 0 0-3.6-4.14z"></svg:path><svg:path fill="currentColor" d="M15 22h-4.806C8.085 21.963 6.283 23.71 6 25.8v12.6a4.16 4.16 0 0 0 4.194 3.6H15z"></svg:path></svg:g>`,
})
export class IconParkSolidThumbsUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThunderboltIcon],svg[icon-park-solid-thunderbolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSThunderbolt0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 26a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v5.36c0 .954-.683 1.781-1.52 2.238c-1.187.65-2.724 1.943-3.273 4.416C38.967 39.092 38.105 40 37 40H11c-1.105 0-1.967-.908-2.207-1.986c-.55-2.474-2.086-3.767-3.273-4.416C4.683 33.141 4 32.314 4 31.36z"></svg:path><svg:path stroke="#000" d="M14 31h20"></svg:path><svg:path stroke="#fff" d="m25 4l-6 7h10l-6 7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSThunderbolt0)"></svg:path>`,
})
export class IconParkSolidThunderboltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidThunderstormOneIcon],svg[icon-park-solid-thunderstorm-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M20.53 20L17 31.5l6.177.885L20.529 43L32 29.73l-7.059-1.768L30.235 20z"></svg:path><svg:path stroke-linecap="round" d="M9.455 29.994A13.95 13.95 0 0 1 4 18.885C4 11.217 10.105 5 17.636 5c6.297 0 11.598 4.346 13.166 10.253a8.9 8.9 0 0 1 4.107-.996c5.02 0 9.091 4.144 9.091 9.257c0 3.795-2.244 7.058-5.455 8.486"></svg:path></svg:g>`,
})
export class IconParkSolidThunderstormOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTicketIcon],svg[icon-park-solid-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTicket0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path stroke="#fff" stroke-linejoin="round" d="M9 16L34 6l4 10"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4 16h40v6c-3 0-6 2-6 5.5s3 6.5 6 6.5v6H4v-6c3 0 6-2 6-6s-3-6-6-6z"></svg:path><svg:path stroke="#000" d="M17 25.385h6m-6 6h14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTicket0)"></svg:path>`,
})
export class IconParkSolidTicketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTicketOneIcon],svg[icon-park-solid-ticket-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTicketOne0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4 8h7s1 5 6 5s6-5 6-5h21v32H23s-1-5-6-5s-6 5-6 5H4z"></svg:path><svg:path stroke="#000" d="M17 19v2m0 6v2m8-8h11m-11 6h11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTicketOne0)"></svg:path>`,
})
export class IconParkSolidTicketOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTicketsOneIcon],svg[icon-park-solid-tickets-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTicketsOne0"><svg:g fill="none"><svg:rect width="26" height="38" x="5" y="42" fill="#fff" stroke="#fff" stroke-linejoin="bevel" stroke-width="4" rx="2" transform="rotate(-90 5 42)"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 16L32 5l5 11"></svg:path><svg:circle cx="13" cy="23" r="2" fill="#000"></svg:circle><svg:circle cx="13" cy="29" r="2" fill="#000"></svg:circle><svg:circle cx="13" cy="35" r="2" fill="#000"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 35h4l11-12m-12 6h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTicketsOne0)"></svg:path>`,
})
export class IconParkSolidTicketsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTicketsTwoIcon],svg[icon-park-solid-tickets-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTicketsTwo0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 30c3 0 5 1.88 5 4h6V4h-6c0 2-2 4-5 4s-5-2-5-4h-6v14"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 44h-6c0-2.12-2-4-5-4s-5 1.88-5 4H8V14h6c0 2 2 4 5 4s5-2 5-4h6z"></svg:path><svg:circle cx="14" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="19" cy="24" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="24" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTicketsTwo0)"></svg:path>`,
})
export class IconParkSolidTicketsTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTiktokIcon],svg[icon-park-solid-tiktok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="3.833" d="M21.358 19.14q-8.833-.426-12.28 6.298c-3.446 6.725-.598 17.729 10.9 17.729c11.5 0 11.832-11.112 11.832-12.276V17.875q3.69 2.336 6.22 2.813q2.533.476 3.22.422v-6.476q-2.342-.282-4.05-1.076c-1.709-.794-5.096-2.997-5.096-6.226q.003.024 0-2.499h-7.118q-.031 23.724 0 26.058c.031 2.334-1.78 5.6-5.45 5.6c-3.672 0-5.483-3.263-5.483-5.367c0-1.288.443-3.155 2.272-4.538c1.085-.82 2.59-1.148 5.033-1.148z"></svg:path>`,
})
export class IconParkSolidTiktokIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTimeIcon],svg[icon-park-solid-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTime0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24.008 12v12.01l8.479 8.48"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTime0)"></svg:path>`,
})
export class IconParkSolidTimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTimedMailIcon],svg[icon-park-solid-timed-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTimedMail0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M44 35V9H4v28h22"></svg:path><svg:circle cx="35" cy="35" r="9" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M34 32v4h4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="m4 9l20 13L44 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTimedMail0)"></svg:path>`,
})
export class IconParkSolidTimedMailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTimelineIcon],svg[icon-park-solid-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M13 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0Zm18 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0ZM13 36a4 4 0 1 0 8 0a4 4 0 0 0-8 0Z"></svg:path><svg:path stroke-linecap="round" d="M4 36h9m8 0h23M4 12h9m8 0h23"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 4v40"></svg:path><svg:path stroke-linecap="round" d="M4 24h27m8 0h5"></svg:path></svg:g>`,
})
export class IconParkSolidTimelineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTimerIcon],svg[icon-park-solid-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTimer0"><svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="28" r="16" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M28 4h-8m4 0v8m11 4l3-3"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 28v-6m0 6h-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTimer0)"></svg:path>`,
})
export class IconParkSolidTimerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTipsIcon],svg[icon-park-solid-tips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTips0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M40 20c0 6.808-4.252 12.622-10.244 14.934H18.244C12.252 32.622 8 26.808 8 20c0-8.837 7.163-16 16-16s16 7.163 16 16"></svg:path><svg:path stroke="#fff" d="m29.756 34.934l-.68 8.15a1 1 0 0 1-.996.916h-8.16a1 1 0 0 1-.996-.917l-.68-8.15"></svg:path><svg:path stroke="#000" d="M18 17v6l6-3l6 3v-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTips0)"></svg:path>`,
})
export class IconParkSolidTipsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTipsOneIcon],svg[icon-park-solid-tips-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTipsOne0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M44 8H4v30h15l5 5l5-5h15z"></svg:path><svg:path stroke="#000" d="M24 23v9m0-16v1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTipsOne0)"></svg:path>`,
})
export class IconParkSolidTipsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTireSwingIcon],svg[icon-park-solid-tire-swing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTireSwing0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M4 4s6 6 20 6s20-6 20-6m-20 6v6"></svg:path><svg:ellipse cx="30" cy="30" fill="#fff" stroke="#fff" rx="8" ry="14"></svg:ellipse><svg:ellipse cx="30" cy="30" fill="#000" stroke="#000" rx="3" ry="6"></svg:ellipse><svg:path stroke="#fff" d="M18 44c-4.418 0-8-6.268-8-14s3.582-14 8-14m12 0H18m12 28H18m4-15H10m13-7H12m11 15H12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTireSwing0)"></svg:path>`,
})
export class IconParkSolidTireSwingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidToiletIcon],svg[icon-park-solid-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.999 10h8v12h-8z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 35l-5 9h24l-5-9m2.999-13V5a1 1 0 0 0-1-1h-18a1 1 0 0 0-1 1v17"></svg:path><svg:path d="M6.08 22.364A.3.3 0 0 1 6.372 22h35.254a.3.3 0 0 1 .292.364c-1.224 5.508-4.635 10.452-10 12.2C29.436 35.374 26.656 36 24 36s-5.436-.627-7.92-1.436c-5.365-1.749-8.776-6.692-10-12.2Z"></svg:path></svg:g>`,
})
export class IconParkSolidToiletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTomatoIcon],svg[icon-park-solid-tomato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 44c11.046 0 20-7.387 20-16.5c0-6.442-4.475-11.799-11-14.516L29.5 14.5L30 20l-6.5-2l-6.5 2v-5.5l-3-1.516C8.022 15.837 4 21.393 4 27.5C4 36.613 12.954 44 24 44"></svg:path><svg:path d="m23.5 4l3.809 5.117L36 9.91l-6.337 4.573L31.5 21l-8-3l-8 3l1.837-6.517L11 9.91l8.691-.793z"></svg:path></svg:g>`,
})
export class IconParkSolidTomatoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidToolIcon],svg[icon-park-solid-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 16c0 6.627-5.373 12-12 12c-2.027 0-3.936-.503-5.61-1.39L9 44l-5-5l17.39-17.39A11.95 11.95 0 0 1 20 16c0-6.627 5.373-12 12-12c2.027 0 3.936.502 5.61 1.39L30 13l5 5l7.61-7.61A11.95 11.95 0 0 1 44 16"></svg:path>`,
})
export class IconParkSolidToolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidToolkitIcon],svg[icon-park-solid-toolkit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 25v13a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V25"></svg:path><svg:path fill="currentColor" d="M5 15a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linecap="round" d="M31 13V9a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2v4m-2 10v6m18-6v6"></svg:path></svg:g>`,
})
export class IconParkSolidToolkitIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTopBarIcon],svg[icon-park-solid-top-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTopBar0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M6 16h36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M6 13v6m36-6v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTopBar0)"></svg:path>`,
})
export class IconParkSolidTopBarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTopbuzzIcon],svg[icon-park-solid-topbuzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="m18.905 18.168l-8.58-1.824a1.03 1.03 0 0 1-.794-1.224l1.931-9.087a1.03 1.03 0 0 1 1.225-.795l29.28 6.223c.558.119.914.667.796 1.225l-1.932 9.087a1.03 1.03 0 0 1-1.224.795l-8.506-1.808q-.581-.123-.69.385l-3.97 18.676a1.03 1.03 0 0 1-1.223.795l-9.088-1.931a1.03 1.03 0 0 1-.795-1.225l3.971-18.681q.107-.503-.4-.611Z"></svg:path>`,
})
export class IconParkSolidTopbuzzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTopicIcon],svg[icon-park-solid-topic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTopic0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24a19.94 19.94 0 0 0 3.368 11.112Q7.733 35.657 6 42q6.344-1.733 6.888-1.368A19.94 19.94 0 0 0 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16.605 19.82h16.779m-11.537-4.082l-2.914 16.524m9.914-16.524l-2.914 16.524M14.605 28h16.779"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTopic0)"></svg:path>`,
})
export class IconParkSolidTopicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTopicDiscussionIcon],svg[icon-park-solid-topic-discussion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTopicDiscussion0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M44 8H4v30h15l5 5l5-5h15z"></svg:path><svg:path stroke="#000" d="m21 15l-1 17m8-17l-1 17m6-12H16m16 7H15"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTopicDiscussion0)"></svg:path>`,
})
export class IconParkSolidTopicDiscussionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTorchIcon],svg[icon-park-solid-torch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M27 34h-6v10h6zm4 0H17l-3-8h20z"></svg:path><svg:path fill="currentColor" d="M21 14c2-4.61 6-10 6-10s6.36 11.49 6.36 15.23S30.74 26 27 26h-8c-2.64 0-4.36-2.14-4.36-4.78S19 10 19 10s.96 2.01 2 4"></svg:path></svg:g>`,
})
export class IconParkSolidTorchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTourBusIcon],svg[icon-park-solid-tour-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTourBus0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M9 23h30v11a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M9 8a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v15H9z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M15 42a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3m18 0a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M6 12v4m36-4v4"></svg:path><svg:circle cx="15" cy="30" r="2" fill="#000"></svg:circle><svg:circle cx="33" cy="30" r="2" fill="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="m31 6l-9 10m16-9l-5 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTourBus0)"></svg:path>`,
})
export class IconParkSolidTourBusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTowelIcon],svg[icon-park-solid-towel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M36 18H4v8h32z"></svg:path><svg:path d="M36 12v20a4 4 0 0 1-4 4H12m0 0H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v32c0 2.21-1.79 4-4 4H16c-2.21 0-4-1.79-4-4z"></svg:path></svg:g>`,
})
export class IconParkSolidTowelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTowerIcon],svg[icon-park-solid-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M17 31h14v13H17zm2-14h10v14H19zm2-13h6v13h-6z"></svg:path><svg:path stroke-linecap="round" d="M4 44h40"></svg:path></svg:g>`,
})
export class IconParkSolidTowerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTowerOfBabelIcon],svg[icon-park-solid-tower-of-babel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M20 14.5V4h8v9.5M14 25v-9.538L34 13v10M11 35v-9l26-3v9"></svg:path><svg:path fill="currentColor" d="M40 44H8v-8l32-4z"></svg:path></svg:g>`,
})
export class IconParkSolidTowerOfBabelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTowerOfPisaIcon],svg[icon-park-solid-tower-of-pisa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSTowerOfPisa0"><svg:g fill="none"><svg:g stroke="#fff" stroke-width="4" clip-path="url(#ipSTowerOfPisa1)"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40"></svg:path><svg:path stroke-linejoin="round" d="m21.25 7.474l15.455 4.142L28 44H11L21.25 7.474Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m19.317 6.957l19.319 5.176M16.21 18.548l19.32 5.176"></svg:path><svg:path stroke-linecap="round" d="m25.482 20.932l1.036-3.864"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m13.105 30.14l19.319 5.175"></svg:path><svg:path stroke-linecap="round" d="m22.482 31.932l1.036-3.864"></svg:path><svg:rect width="10" height="4" x="25.183" y="4.387" stroke-linecap="round" stroke-linejoin="round" rx="1" transform="rotate(15 25.183 4.387)"></svg:rect><svg:path stroke-linecap="round" d="m19.482 42.932l1.036-3.864"></svg:path></svg:g><svg:defs><svg:clippath id="ipSTowerOfPisa1"><svg:path fill="#000" d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g></svg:mask><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTowerOfPisa0)"></svg:path>`,
})
export class IconParkSolidTowerOfPisaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidToxinsIcon],svg[icon-park-solid-toxins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSToxins0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="M33.958 44s.024-3.47 0-4.24a19 19 0 0 0 4.477-3.325A18.94 18.94 0 0 0 44 23c0-10.493-8.507-19-19-19S6 12.507 6 23a18.94 18.94 0 0 0 5.565 13.435a19 19 0 0 0 2.879 2.365c.515.345 1.01.666 1.56.96V44z" clip-rule="evenodd"></svg:path><svg:path fill="#000" stroke="#000" d="M18 27a4 4 0 0 0 4-4l-4-4a4 4 0 0 0 0 8Zm14 0a4 4 0 0 1-4-4l4-4a4 4 0 0 1 0 8Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m22 34l2.938-3L28 33.897"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSToxins0)"></svg:path>`,
})
export class IconParkSolidToxinsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTraceIcon],svg[icon-park-solid-trace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 6C14.059 6 6 14.059 6 24s8.059 18 18 18s18-8.059 18-18"></svg:path><svg:path stroke-linecap="round" d="M24 15a9 9 0 1 0 9 9m-9 0l6.3-6.306"></svg:path><svg:path fill="currentColor" d="M30.3 11.426V17.7h6.325L42 12.3h-6.297V6z"></svg:path></svg:g>`,
})
export class IconParkSolidTraceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrademarkIcon],svg[icon-park-solid-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTrademark0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#000" d="M12 19h8m-4 0v10m10 0V19l5 6l5-6v10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTrademark0)"></svg:path>`,
})
export class IconParkSolidTrademarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTraditionalChineseMedicineIcon],svg[icon-park-solid-traditional-chinese-medicine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTraditionalChineseMedicine0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" d="M24 43h5.955q.124-4.106 1.204-4.515C38.669 35.635 44 28.434 44 20H4c0 8.251 5.103 15.323 12.357 18.294q1.137.466 1.699 4.706z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M14.443 27.023q.54 1.78 1.427 2.942a11.3 11.3 0 0 0 2.14 2.104"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M25.214 20.026a3301 3301 0 0 0 6.622-13.708c1.05-2.21 3.18-2.742 5.145-1.902s2.76 3.242 1.935 4.917q-.765 1.552-5.19 10.671"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTraditionalChineseMedicine0)"></svg:path>`,
})
export class IconParkSolidTraditionalChineseMedicineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrainIcon],svg[icon-park-solid-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTrain0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M9 8.84c0-.933.438-1.807 1.271-2.225C12.247 5.625 16.613 4 24 4s11.754 1.625 13.728 2.615C38.563 7.033 39 7.907 39 8.839V36a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M34 38v4m-20-4v4"></svg:path><svg:path fill="#fff" stroke="#fff" d="M20.5 32a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm10 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 44h8"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M9 12h30v14H9z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 12v14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 12h8m-8 14h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTrain0)"></svg:path>`,
})
export class IconParkSolidTrainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTransactionIcon],svg[icon-park-solid-transaction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTransaction0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3"></svg:path><svg:path stroke="#000" d="m21 31l5 4l8-10M14 15h20m-20 8h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTransaction0)"></svg:path>`,
})
export class IconParkSolidTransactionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTransactionOrderIcon],svg[icon-park-solid-transaction-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTransactionOrder0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="30" height="36" x="9" y="8" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M18 4v6m12-6v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 19h16m-16 8h12m-12 8h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTransactionOrder0)"></svg:path>`,
})
export class IconParkSolidTransactionOrderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTransferIcon],svg[icon-park-solid-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTransfer0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 28.392v7.015C37 39.048 34.089 42 30.497 42s-6.503-2.952-6.503-6.593l.012-22.264C24.006 9.198 21.095 6 17.503 6S11 9.198 11 13.143v15.25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m43 31l-6-6l-6 6"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 10.727C43 15.182 37 19 37 19s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.15 6.15 0 0 1 37 5a6.15 6.15 0 0 1 4.243 1.677A5.6 5.6 0 0 1 43 10.727m-26 24C17 39.182 11 43 11 43s-6-3.818-6-8.273c0-1.519.632-2.975 1.757-4.05A6.15 6.15 0 0 1 11 29a6.15 6.15 0 0 1 4.243 1.677A5.6 5.6 0 0 1 17 34.728"></svg:path><svg:circle cx="37" cy="11" r="2" fill="#000"></svg:circle><svg:circle cx="11" cy="35" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTransfer0)"></svg:path>`,
})
export class IconParkSolidTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTransformIcon],svg[icon-park-solid-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="13.715" cy="13.714" r="6.857" fill="currentColor"></svg:circle><svg:circle cx="34.286" cy="34.285" r="6.857" fill="currentColor"></svg:circle><svg:path d="M24.001 44c-11.046 0-20-8.954-20-20l6.667 3.333M24.001 4c11.046 0 20 8.954 20 20l-6.667-3.333"></svg:path></svg:g>`,
})
export class IconParkSolidTransformIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTransportIcon],svg[icon-park-solid-transport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTransport0"><svg:g fill="none" stroke-width="4"><svg:rect width="28" height="18" x="16" y="12" fill="#fff" stroke="#fff" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M24 18v6m12-6v6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M36 12V6H24v6m20 24H12a2 2 0 0 1-2-2V11a2 2 0 0 0-2-2H4"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M19 42a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3m18 0a3 3 0 0 1-3-3v-3h6v3a3 3 0 0 1-3 3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTransport0)"></svg:path>`,
})
export class IconParkSolidTransportIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTransporterIcon],svg[icon-park-solid-transporter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M42 8H20a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM4 34h14V20h-7l-7 6.462z"></svg:path><svg:path stroke-linecap="round" d="M18 36a4 4 0 0 1-8 0m30 0a4 4 0 0 1-8 0"></svg:path></svg:g>`,
})
export class IconParkSolidTransporterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrapezoidIcon],svg[icon-park-solid-trapezoid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="4" d="M31.794 8H16.206a3 3 0 0 0-2.864 2.105l-8.125 26A3 3 0 0 0 8.081 40h31.838a3 3 0 0 0 2.864-3.895l-8.125-26A3 3 0 0 0 31.794 8Z"></svg:path>`,
})
export class IconParkSolidTrapezoidIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrayIcon],svg[icon-park-solid-tray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTray0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="28" height="30" x="24.762" y="3.243" fill="#fff" stroke="#fff" rx="2" transform="rotate(45 24.762 3.243)"></svg:rect><svg:path stroke="#fff" d="m38.197 16.678l4.242-4.243l-7.07-7.071l-4.244 4.242"></svg:path><svg:path stroke="#000" d="M18 21h12m-12 6h4m6 0h2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTray0)"></svg:path>`,
})
export class IconParkSolidTrayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreadmillIcon],svg[icon-park-solid-treadmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M39.75 44H9.31C6.38 44 4 41.62 4 38.69v-5.42c0-1.21 1.06-2.14 2.25-1.99l34.02 4.25c2.13.27 3.73 2.08 3.73 4.22C44 42.1 42.1 44 39.75 44"></svg:path><svg:path d="M16 32L4 4h6.43M6 31l6-8m13-8H9"></svg:path></svg:g>`,
})
export class IconParkSolidTreadmillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreadmillOneIcon],svg[icon-park-solid-treadmill-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M30 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m11 21l6-5l8 3l-3 6l7 6l2 7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m22 25l-5 8l-8-1M6 44h34l4-9M25 19l8 5l6-2"></svg:path></svg:g>`,
})
export class IconParkSolidTreadmillOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreadmillTwoIcon],svg[icon-park-solid-treadmill-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 39v5m32-5v5m-4-13l6-16l-4-6m-5 5L43 4"></svg:path><svg:rect width="40" height="8" x="4" y="31" fill="currentColor" rx="4"></svg:rect></svg:g>`,
})
export class IconParkSolidTreadmillTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreasureChestIcon],svg[icon-park-solid-treasure-chest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 4H6a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M4 24h13m14 0h13"></svg:path><svg:path fill="currentColor" d="M24 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path></svg:g>`,
})
export class IconParkSolidTreasureChestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreeDiagramIcon],svg[icon-park-solid-tree-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="10" cy="24" r="4" fill="currentColor"></svg:circle><svg:circle cx="38" cy="10" r="4" fill="currentColor"></svg:circle><svg:circle cx="38" cy="24" r="4" fill="currentColor"></svg:circle><svg:circle cx="38" cy="38" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 38H22V10h12M14 24h20"></svg:path></svg:g>`,
})
export class IconParkSolidTreeDiagramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreeListIcon],svg[icon-park-solid-tree-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M38 20H18v8h20zM32 6H18v8h14zm12 28H18v8h26z"></svg:path><svg:path stroke-linecap="round" d="M17 10H5m12 14H5m12 14H5m0 6V4"></svg:path></svg:g>`,
})
export class IconParkSolidTreeListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTreeOneIcon],svg[icon-park-solid-tree-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTreeOne0"><svg:g fill="none" stroke-width="4"><svg:ellipse cx="24" cy="20" fill="#fff" stroke="#fff" rx="15" ry="16"></svg:ellipse><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 14v22"></svg:path><svg:path stroke="#fff" d="M30 34.669A14.15 14.15 0 0 1 24 36a14.2 14.2 0 0 1-6-1.331"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 36v8"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m24 22l6-6m-6 13l-6-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTreeOne0)"></svg:path>`,
})
export class IconParkSolidTreeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrendIcon],svg[icon-park-solid-trend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTrend0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m13.44 29.835l5.657-5.657l4.388 4.377L34 18"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M26 18h8v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTrend0)"></svg:path>`,
})
export class IconParkSolidTrendIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrendTwoIcon],svg[icon-park-solid-trend-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M4 44h40"></svg:path><svg:path fill="currentColor" d="m4 26l8 2v10H4zm16-2l8-4v18h-8zm16-8l8-4v26h-8z"></svg:path><svg:path stroke-linecap="round" d="m4 18l8 2L44 4H34"></svg:path></svg:g>`,
})
export class IconParkSolidTrendTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTriangleIcon],svg[icon-park-solid-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22.27 6.99c.77-1.33 2.69-1.33 3.46 0l18.532 32.008c.772 1.333-.19 3.002-1.73 3.002H5.468c-1.54 0-2.503-1.669-1.731-3.002z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkSolidTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTriangleRoundRectangleIcon],svg[icon-park-solid-triangle-round-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 29H6v14h14zm4-25l10 17H14zm12 40a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class IconParkSolidTriangleRoundRectangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTriangleRulerIcon],svg[icon-park-solid-triangle-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="ipSTriangleRuler0" fill="currentColor" d="M13 35h12L13 23z"></svg:path><svg:path id="ipSTriangleRuler1" stroke="currentColor" d="M13 35h12L13 23z"></svg:path></svg:defs><svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 44L4 4v40z"></svg:path><svg:use href="#ipSTriangleRuler0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#ipSTriangleRuler0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#ipSTriangleRuler0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#ipSTriangleRuler0" fill-rule="evenodd" clip-rule="evenodd"></svg:use><svg:use href="#ipSTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:use href="#ipSTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:use href="#ipSTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:use href="#ipSTriangleRuler1" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"></svg:use><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 44v-3m-6 3v-3m-6 3v-3m-6 3v-3m-8-5h3m-3-6h3m-3-6h3m-3-6h3"></svg:path></svg:g>`,
})
export class IconParkSolidTriangleRulerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrophyIcon],svg[icon-park-solid-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 30c6.627 0 12-5.53 12-12.353V4H12v13.647C12 24.47 17.373 30 24 30Z"></svg:path><svg:path stroke-linecap="round" d="M12 21V11H4c0 6.667 4 10 8 10m24 0V11h8c0 6.667-4 10-8 10" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M24 32v4"></svg:path><svg:path fill="currentColor" d="m15 42l3.69-6h10.353L33 42z"></svg:path></svg:g>`,
})
export class IconParkSolidTrophyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrousersBellBottomsIcon],svg[icon-park-solid-trousers-bell-bottoms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTrousersBellBottoms0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m16 12l2-8h12l2 8v12l4 17l-12 3l-12-3l4-17z"></svg:path><svg:path stroke="#000" d="M24 44V16"></svg:path><svg:path stroke="#fff" d="m12 41l12 3l12-3"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTrousersBellBottoms0)"></svg:path>`,
})
export class IconParkSolidTrousersBellBottomsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrumpetIcon],svg[icon-park-solid-trumpet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" d="M32 28h6v11a3 3 0 1 1-6 0z"></svg:path><svg:path stroke-linecap="round" d="M29 12h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H28"></svg:path><svg:path stroke-linejoin="round" d="M14 14h-2a6 6 0 0 0 0 12h2"></svg:path><svg:path fill="currentColor" d="M14.198 33a.2.2 0 0 1-.198-.198V6.198c0-.11.089-.198.198-.198H17.5C24.956 6 31 12.044 31 19.5S24.956 33 17.5 33z"></svg:path></svg:g>`,
})
export class IconParkSolidTrumpetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTrunkIcon],svg[icon-park-solid-trunk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTrunk0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="28" x="12" y="12" fill="#fff" stroke="#fff" rx="4"></svg:rect><svg:path stroke="#fff" d="M20 12V6m8 6V6M16 4h16M18 40v4m12-4v4"></svg:path><svg:path stroke="#000" d="M20 25h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTrunk0)"></svg:path>`,
})
export class IconParkSolidTrunkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTubIcon],svg[icon-park-solid-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M40 23V12a7 7 0 0 0-7-7v0a7 7 0 0 0-7 7v1"></svg:path><svg:path fill="currentColor" d="M40 29v-6H8v6a8 8 0 0 0 8 8h16a8 8 0 0 0 8-8Z"></svg:path><svg:path d="M43 23H5"></svg:path><svg:path stroke-linejoin="round" d="m17 37l-4 6m18-6l4 6"></svg:path></svg:g>`,
})
export class IconParkSolidTubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTuchongIcon],svg[icon-park-solid-tuchong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M5 39h38V28h-6v5H11V15h12V9H5z"></svg:path><svg:path stroke-linecap="round" d="M43 16v6c-8 0-14-5-14-13h6c0 4 2 7 8 7"></svg:path></svg:g>`,
})
export class IconParkSolidTuchongIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTumblrIcon],svg[icon-park-solid-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTumblr0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path fill="#000" d="M15 22v-5h5v-3l6-2v5h5v5h-5v7s0 1.5 2 2s5-1 5-1l-2 6h-5c-3.5 0-6-3.5-6-6v-8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTumblr0)"></svg:path>`,
})
export class IconParkSolidTumblrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTurkeyIcon],svg[icon-park-solid-turkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTurkey0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 36h40l-5 8H9z"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 30v6h26v-5c0-6-3-8-3-8c2-2.5 3-6 0-8s-5.5 0-7 2c0 0-16-2-16 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M21 24s-1 .5-2 2s-1 3-1 3"></svg:path><svg:path stroke="#fff" stroke-width="4" d="m39 9l-5 6"></svg:path><svg:circle cx="38.356" cy="7.483" r="2.5" fill="#fff" transform="rotate(35.072 38.356 7.483)"></svg:circle><svg:circle cx="40.811" cy="9.206" r="2.5" fill="#fff" transform="rotate(35.072 40.81 9.206)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTurkey0)"></svg:path>`,
})
export class IconParkSolidTurkeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTurnAroundIcon],svg[icon-park-solid-turn-around-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10m3 6h-6c-.929 0-1.393 0-1.784.038a8 8 0 0 0-7.177 7.178C12 27.607 12 28.07 12 29h24c0-.929 0-1.393-.038-1.784a8 8 0 0 0-7.178-7.178C28.393 20 27.93 20 27 20"></svg:path><svg:path d="M41 26.784c1.902 1.224 3 2.669 3 4.216c0 4.418-8.954 8-20 8S4 35.418 4 31c0-1.547 1.098-2.992 3-4.216"></svg:path><svg:path d="m19 34l5 5l-5 5"></svg:path></svg:g>`,
})
export class IconParkSolidTurnAroundIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTurnOnIcon],svg[icon-park-solid-turn-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path fill="currentColor" stroke-width="4" d="M21 43c-4.726-1.767-8.667-7.815-10.64-11.357c-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L18 29V17.5a2.5 2.5 0 0 1 5 0v6a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v2a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C36.095 39.82 34.256 42.034 32 43c-3.5 1.5-6.63 1.634-11 0"></svg:path><svg:path stroke-width="3" d="m12 9l3 3m4-8l1 6m7-2l-2 3"></svg:path></svg:g>`,
})
export class IconParkSolidTurnOnIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTvOneIcon],svg[icon-park-solid-tv-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTvOne0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 12H6a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h36a2 2 0 0 0 2-2V14a2 2 0 0 0-2-2Z"></svg:path><svg:path fill="#000" stroke="#000" d="M31 19H11v16h20z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m14 4.5l9.09 7.5L34 2"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M38 18v1m0 6v1"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTvOne0)"></svg:path>`,
})
export class IconParkSolidTvOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwitterIcon],svg[icon-park-solid-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M5 35.762c1.929 1.067 15.891 9.115 25.82 2.912s9.38-16.89 9.38-21.788c.9-1.884 2.8-2.842 2.8-7.942q-2.799 2.585-5.565 1.76q-2.709-4.131-7.456-3.655c-4.746.477-6.482 5.133-5.971 11.158c-7.318 3.7-13.056-2.683-16.014-7.503c-.988 3.796-1.94 8.354 0 13.395q1.942 5.042 9.331 8.526Q9.835 36.685 5 35.762Z"></svg:path>`,
})
export class IconParkSolidTwitterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoIcon],svg[icon-park-solid-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m11 40l-4.107-8.898a5 5 0 0 1 1.996-6.4l5.541-3.274a3 3 0 0 1 3.116.038l.687.43a1 1 0 0 0 1.524-.965L18.148 7.26a2.62 2.62 0 0 1 .748-2.155a1.744 1.744 0 0 1 2.323-.129l.378.302a3 3 0 0 1 1.087 1.865l2.239 13.88a.568.568 0 0 0 1.127-.036l1.328-13.724a3 3 0 0 1 1.112-2.054l.206-.165a1.865 1.865 0 0 1 2.484.138c.525.524.82 1.236.82 1.978v22.26a1 1 0 0 0 1.624.782L37 27.5c1.653-1.322 3.875-.459 5.255.445c.439.287.504.881.192 1.303L34.5 40S31 44 23 44s-11.333-2.667-12-4"></svg:path>`,
})
export class IconParkSolidTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoDimensionalCodeIcon],svg[icon-park-solid-two-dimensional-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M20 6H6v14h14zm0 22H6v14h14zM42 6H28v14h14z"></svg:path><svg:path stroke-linecap="round" d="M29 28v14m12-14v14"></svg:path></svg:g>`,
})
export class IconParkSolidTwoDimensionalCodeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoDimensionalCodeOneIcon],svg[icon-park-solid-two-dimensional-code-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M18 6H6v12h12zm0 24H6v12h12zm24 0H30v12h12zm0-24H30v12h12z"></svg:path><svg:path stroke-linecap="round" d="M24 6v18m0 6v12m0-18H6m36 0H30"></svg:path></svg:g>`,
})
export class IconParkSolidTwoDimensionalCodeOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoDimensionalCodeTwoIcon],svg[icon-park-solid-two-dimensional-code-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M18 6H6v12h12zm0 24H6v12h12zM42 6H30v12h12z"></svg:path><svg:path stroke-linecap="round" d="M24 6v12m18 6H6m28 6v12m8-12v12M26 30v12"></svg:path></svg:g>`,
})
export class IconParkSolidTwoDimensionalCodeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoKeyIcon],svg[icon-park-solid-two-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTwoKey0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" d="M19 19c0-3.167 2.667-5 5-5s5 1.833 5 5c0 5.7-10 9.933-10 15h10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTwoKey0)"></svg:path>`,
})
export class IconParkSolidTwoKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoSemicirclesIcon],svg[icon-park-solid-two-semicircles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M44 25c0-11.046-8.954-20-20-20S4 13.954 4 25zm-30 7c0 5.523 4.477 10 10 10s10-4.477 10-10z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkSolidTwoSemicirclesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoTrianglesIcon],svg[icon-park-solid-two-triangles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m24 4l17.32 30H6.68z"></svg:path><svg:path fill="currentColor" d="m24 44l17.32-30H6.68z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 4l17.32 30H6.68z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 44l17.32-30H6.68z"></svg:path></svg:g>`,
})
export class IconParkSolidTwoTrianglesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTwoTwoIcon],svg[icon-park-solid-two-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M26.745 44h-.896c-5.21 0-10.07-2.626-12.925-6.984l-2.195-3.35a5.63 5.63 0 0 1 1.072-7.382l2.288-1.936c.26-.22.411-.545.411-.887V7.25a3.25 3.25 0 0 1 6.5 0v-1a3.25 3.25 0 0 1 6.5 0v11.5a3.25 3.25 0 0 1 6.5 0v4a3.25 3.25 0 0 1 6.5 0v10.219c0 1.649-.498 3.26-1.43 4.62l-.973 1.423A13.76 13.76 0 0 1 26.745 44"></svg:path>`,
})
export class IconParkSolidTwoTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTypeDriveIcon],svg[icon-park-solid-type-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTypeDrive0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 12a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path fill="#fff" stroke="#000" d="M15.414 32.586A2 2 0 0 1 16.828 32H30.26a2 2 0 0 1 1.302.481L38 38H10z"></svg:path><svg:path stroke="#fff" d="M39 38H9"></svg:path><svg:circle cx="15" cy="21" r="4" fill="#000" stroke="#000"></svg:circle><svg:circle cx="33" cy="21" r="4" fill="#000" stroke="#000"></svg:circle><svg:path stroke="#000" d="M15 25h18m-18-8h18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTypeDrive0)"></svg:path>`,
})
export class IconParkSolidTypeDriveIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUDiskIcon],svg[icon-park-solid-u-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUDisk0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 12V4H18v8"></svg:path><svg:path fill="#fff" stroke="#fff" d="M13 12.374c0-.207.167-.374.373-.374h21.254c.206 0 .373.167.373.373V33c0 6.075-4.925 11-11 11s-11-4.925-11-11z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M20 21h8m-8 8h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUDisk0)"></svg:path>`,
})
export class IconParkSolidUDiskIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUTurnDownIcon],svg[icon-park-solid-u-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M35 34V15c0-6.075-4.925-11-11-11v0c-6.075 0-11 4.925-11 11v29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18 39l-5 5l-5-5"></svg:path><svg:circle cx="35" cy="39" r="5" fill="currentColor" transform="rotate(90 35 39)"></svg:circle></svg:g>`,
})
export class IconParkSolidUTurnDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUTurnLeftIcon],svg[icon-park-solid-u-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 13h19c6.075 0 11 4.925 11 11v0c0 6.075-4.925 11-11 11H4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m9 40l-5-5l5-5"></svg:path><svg:circle cx="9" cy="13" r="5" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidUTurnLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUTurnRightIcon],svg[icon-park-solid-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 13H15C8.925 13 4 17.925 4 24v0c0 6.075 4.925 11 11 11h29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m39 30l5 5l-5 5"></svg:path><svg:circle cx="39" cy="13" r="5" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidUTurnRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUTurnUpIcon],svg[icon-park-solid-u-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 14v19c0 6.075 4.925 11 11 11v0c6.075 0 11-4.925 11-11V4"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m30 9l5-5l5 5"></svg:path><svg:circle cx="13" cy="9" r="5" fill="currentColor" transform="rotate(-90 13 9)"></svg:circle></svg:g>`,
})
export class IconParkSolidUTurnUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUlikecamIcon],svg[icon-park-solid-ulikecam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="4" d="M22 44c9.941 0 18-8.059 18-18S31.941 8 22 8S4 16.059 4 26s8.059 18 18 18Zm19-34a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path>`,
})
export class IconParkSolidUlikecamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUmbrellaIcon],svg[icon-park-solid-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M16.727 27q3.636-3.636 7.273-3.636T31.273 27q4.243-3.636 6.363-3.636q2.122 0 6.364 3.636c0-11.046-8.954-20-20-20S4 15.954 4 27q4.243-3.636 6.364-3.636T16.727 27Z"></svg:path><svg:path stroke-linecap="round" d="M24 24v14.554c0 3.014 2.486 5.457 5.5 5.457s5.5-2.443 5.5-5.457M24 3v4"></svg:path></svg:g>`,
})
export class IconParkSolidUmbrellaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUmbrellaOneIcon],svg[icon-park-solid-umbrella-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M44 24c0-11.046-8.954-20-20-20S4 12.954 4 24z"></svg:path><svg:path stroke-linecap="round" d="M24 24v14.554c0 3.014 2.486 5.457 5.5 5.457s5.5-2.443 5.5-5.457"></svg:path></svg:g>`,
})
export class IconParkSolidUmbrellaOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUmbrellaTwoIcon],svg[icon-park-solid-umbrella-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUmbrellaTwo0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M27 24v13.125C27 39 26.638 44 23 44c-3.429 0-4-4.375-4-5.625"></svg:path><svg:path fill="#fff" stroke="#fff" d="M24 4c14.5 0 19.375 13.333 20 20H4c.625-6.667 5.5-20 20-20"></svg:path><svg:path stroke="#000" d="m19 14l4 4l6-7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUmbrellaTwo0)"></svg:path>`,
})
export class IconParkSolidUmbrellaTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUngroupIcon],svg[icon-park-solid-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M11.273 4H4v7.273h7.273zM44 36.727h-7.273V44H44zM11.273 24H4v7.273h7.273zM24 36.727h-7.273V44H24zM31.273 4H24v7.273h7.273zM44 16.727h-7.273V24H44z"></svg:path><svg:path stroke-linecap="round" d="M11.273 7.636H24m0 32.728h12.727M11.273 27.637h16.364V11.273m1.191 9.09h7.899M20.363 36.727v-9.099zM7.637 11.273V24m32.726 0v12.727"></svg:path></svg:g>`,
})
export class IconParkSolidUngroupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUnicastIcon],svg[icon-park-solid-unicast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path fill="currentColor" stroke-width="4" d="M24 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-width="4" d="M24 15v8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M18 33V23l6 .003"></svg:path><svg:path stroke-linecap="round" stroke-width="5" d="M41 41v1M7 41v1m11-1v1m12-1v1"></svg:path></svg:g>`,
})
export class IconParkSolidUnicastIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUniversalIcon],svg[icon-park-solid-universal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUniversal0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M24 38c7.732 0 14-6.268 14-14s-6.268-14-14-14s-14 6.268-14 14s6.268 14 14 14Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M11 29c1.509.624 4 1 5.259-.468c1.258-1.469.136-3.78 1.53-4.564c1.528-.86 2.631 2.064 5.502 1.548S28 21 28 19s-1.715-2-1.838-3.946C26 12.5 28 11 28 11m0 26c-1.086-.909-2-1.5-2-3s1-1 2-2s.5-3 1.5-3.5s4.108.556 6.5 2.5"></svg:path><svg:circle cx="24" cy="4" r="2" fill="#fff"></svg:circle><svg:circle cx="24" cy="44" r="2" fill="#fff"></svg:circle><svg:circle cx="44" cy="24" r="2" fill="#fff"></svg:circle><svg:circle cx="38" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="10" cy="38" r="2" fill="#fff"></svg:circle><svg:circle cx="4" cy="24" r="2" fill="#fff"></svg:circle><svg:circle cx="10" cy="10" r="2" fill="#fff"></svg:circle><svg:circle cx="38" cy="38" r="2" fill="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 24c0 3.815 1.526 7.273 4 9.798M24 38c7.732 0 14-6.268 14-14M24 10c3.815 0 7.273 1.526 9.798 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUniversal0)"></svg:path>`,
})
export class IconParkSolidUniversalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUnlockIcon],svg[icon-park-solid-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUnlock0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="34" height="22" x="7" y="22.048" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M14 22v-7.995c-.005-5.135 3.923-9.438 9.086-9.954S32.967 6.974 34 12.006"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 30v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUnlock0)"></svg:path>`,
})
export class IconParkSolidUnlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUnlockOneIcon],svg[icon-park-solid-unlock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUnlockOne0"><svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="30" r="14" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M31 12v-1a7 7 0 0 0-7-7v0a7 7 0 0 0-7 7v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M24 26v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUnlockOne0)"></svg:path>`,
})
export class IconParkSolidUnlockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUpAndDownIcon],svg[icon-park-solid-up-and-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M12 36v8h32V12h-8v8h-8v8h-8v8z"></svg:path><svg:path d="m18 13l9-9m-6 0h6v6M10 27H4v-6m9-3l-9 9"></svg:path></svg:g>`,
})
export class IconParkSolidUpAndDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUpCIcon],svg[icon-park-solid-up-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUpC0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m33 27l-9-9l-9 9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUpC0)"></svg:path>`,
})
export class IconParkSolidUpCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUpOneIcon],svg[icon-park-solid-up-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="m12 29l12-12l12 12z"></svg:path>`,
})
export class IconParkSolidUpOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUpSquareIcon],svg[icon-park-solid-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUpSquare0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" d="m14 29l10-10l10 10"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUpSquare0)"></svg:path>`,
})
export class IconParkSolidUpSquareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUpTwoIcon],svg[icon-park-solid-up-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 24L24 6l19 18H31v18H17V24z"></svg:path>`,
})
export class IconParkSolidUpTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUpdateRotationIcon],svg[icon-park-solid-update-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUpdateRotation0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path stroke="#000" d="M33.542 27c-1.274 4.057-5.064 7-9.542 7s-8.268-2.943-9.542-7v6m19.084-18v6c-1.274-4.057-5.064-7-9.542-7s-8.268 2.943-9.542 7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUpdateRotation0)"></svg:path>`,
})
export class IconParkSolidUpdateRotationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUploadIcon],svg[icon-park-solid-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSUpload0" width="48" height="48" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="#fff" d="M48 0H0v48h48z"></svg:path></svg:mask><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" mask="url(#ipSUpload0)"><svg:path d="M6 24.008V42h36V24m-9-9l-9-9l-9 9m8.992 17V6"></svg:path></svg:g>`,
})
export class IconParkSolidUploadIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUploadLaptopIcon],svg[icon-park-solid-upload-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M25 9H11a3 3 0 0 0-3 3v21h32v-9"></svg:path><svg:path fill="currentColor" d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path><svg:path stroke-linecap="round" d="M37 19V7m-5 5l5-5l5 5"></svg:path></svg:g>`,
})
export class IconParkSolidUploadLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUploadThreeIcon],svg[icon-park-solid-upload-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUploadThree0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m32 28l-8-8l-8 8m8 8V20.5M16 14h16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUploadThree0)"></svg:path>`,
})
export class IconParkSolidUploadThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUploadWebIcon],svg[icon-park-solid-upload-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUploadWeb0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 40H7a3 3 0 0 1-3-3V11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12.059M39 41V29m-5 5l5-5l5 5"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></svg:path><svg:circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUploadWeb0)"></svg:path>`,
})
export class IconParkSolidUploadWebIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUpsideDownFaceIcon],svg[icon-park-solid-upside-down-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUpsideDownFace0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M17 30v-1m14 1v-1M17 17s2-4 7-4s7 4 7 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUpsideDownFace0)"></svg:path>`,
})
export class IconParkSolidUpsideDownFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUsbIcon],svg[icon-park-solid-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M12 22a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm24 6a4 4 0 1 0 0-8a4 4 0 0 0 0 8Z"></svg:path><svg:path stroke-linecap="round" d="m19 9l5-5l5 5m-4 30L12 28.263V22m24 6v4.79L24 41m0-37v39m-3 1h6"></svg:path></svg:g>`,
})
export class IconParkSolidUsbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUsbMemoryStickIcon],svg[icon-park-solid-usb-memory-stick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUsbMemoryStick0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M8 22a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm7-18h18v16H15z"></svg:path><svg:path stroke="#000" d="M21 10v2m6-2v2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUsbMemoryStick0)"></svg:path>`,
})
export class IconParkSolidUsbMemoryStickIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUsbMicroOneIcon],svg[icon-park-solid-usb-micro-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUsbMicroOne0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 18a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z"></svg:path><svg:path fill="#fff" stroke="#000" d="M11 15h26v8H11z"></svg:path><svg:path stroke="#000" d="M21 23v-2m6 2v-2m5 2v-2m-16 2v-2"></svg:path><svg:path stroke="#fff" d="M8 15h32"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUsbMicroOne0)"></svg:path>`,
})
export class IconParkSolidUsbMicroOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUsbMicroTwoIcon],svg[icon-park-solid-usb-micro-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUsbMicroTwo0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 18a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v6.14a3 3 0 0 1-.456 1.59l-3.663 5.86A3 3 0 0 1 37.337 33H10.663a3 3 0 0 1-2.544-1.41l-3.663-5.86A3 3 0 0 1 4 24.14z"></svg:path><svg:path fill="#fff" stroke="#000" d="M11 15h26v8H11z"></svg:path><svg:path stroke="#000" d="M21 23v-2m6 2v-2m5 2v-2m-16 2v-2"></svg:path><svg:path stroke="#fff" d="M8 15h32"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUsbMicroTwo0)"></svg:path>`,
})
export class IconParkSolidUsbMicroTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUsbOneIcon],svg[icon-park-solid-usb-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M42 21H6v21h36z"></svg:path><svg:path stroke-linecap="round" d="M14 21V6h20v15m-14-9v2m8-2v2"></svg:path></svg:g>`,
})
export class IconParkSolidUsbOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUsbTypeCIcon],svg[icon-park-solid-usb-type-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSUsbTypeC0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M15 15h18c15 0 15 18 0 18H15C0 33 0 15 15 15"></svg:path><svg:path stroke="#000" d="M21 27v-6m6 6v-6m6 6v-6m-18 6v-6m21 3H12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSUsbTypeC0)"></svg:path>`,
})
export class IconParkSolidUsbTypeCIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUserIcon],svg[icon-park-solid-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="currentColor"></svg:circle><svg:path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44"></svg:path></svg:g>`,
})
export class IconParkSolidUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUserBusinessIcon],svg[icon-park-solid-user-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="currentColor"></svg:circle><svg:path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44"></svg:path><svg:path fill="currentColor" d="m24 44l4-5l-4-13l-4 13z"></svg:path></svg:g>`,
})
export class IconParkSolidUserBusinessIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUserPositioningIcon],svg[icon-park-solid-user-positioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="16" r="6" fill="currentColor"></svg:circle><svg:path d="M36 36c0-6.627-5.373-12-12-12s-12 5.373-12 12M36 4h8v8M12 4H4v8m32 32h8v-8m-32 8H4v-8"></svg:path></svg:g>`,
})
export class IconParkSolidUserPositioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUserToUserTransmissionIcon],svg[icon-park-solid-user-to-user-transmission-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M14 18a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm20 0a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path><svg:path stroke-linecap="round" d="M4 44v-9c0-5.523 3.77-10 8.421-10h5.053C21.559 25 24 29.027 24 29.027"></svg:path><svg:path stroke-linecap="round" d="M44 44v-9c0-5.523-3.815-10-8.521-10h-5.113c-3.961 0-6.374 4.027-6.366 4.027M11 40h27"></svg:path><svg:path stroke-linecap="round" d="m34.295 36.258l1.24 1.247L38.015 40l-2.48 2.561l-1.24 1.281m-19.965-7.61l-1.26 1.254l-2.518 2.507l2.518 2.548l1.26 1.275"></svg:path></svg:g>`,
})
export class IconParkSolidUserToUserTransmissionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUterusIcon],svg[icon-park-solid-uterus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" d="M32 18c-.923 6-3 11.5-7.5 11.5s-6-5-7.5-11.5s0-12 7.5-12s8.423 6 7.5 12Z"></svg:path><svg:path stroke-linecap="round" d="M32.5 12.5c1.75-1.632 3.533-2.17 6.34-1.996c4.212.262 5.16 3.144 5.16 7.452m0 0c0 4.309-1.651 8.227-4.941 7.34c-3.29-.886-2.83-4.386-1.291-6.027c1.538-1.641 4.23-2.31 6.232-1.313ZM16.5 12c-1.77-1.544-3.86-1.67-6.413-1.495C6.257 10.767 4 13.692 4 18m0 0c0 4.308 2.897 8.182 5.888 7.296s2.574-4.387 1.175-6.028C9.663 17.63 5.82 17.003 4 18.001Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 27v16m9-16v16"></svg:path></svg:g>`,
})
export class IconParkSolidUterusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVacationIcon],svg[icon-park-solid-vacation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="m11 14.999l-6 1c1.63-7.514 6.364-9.993 11-10c2.997-.005 5.952 1.026 8 2c2.048-.974 5-2 8-2c4.611 0 9.37 2.486 11 10l-6-1c.559 2.1 1.788 5.792 0 9c-2.98-2.673-9.87-6.709-13-9c-3.13 2.291-10.02 6.327-13 9c-1.788-3.207-.559-6.9 0-9"></svg:path><svg:path d="M24 15c-.755 3.889-1.811 13.533 0 21"></svg:path><svg:path fill="currentColor" d="M12 42h24c-4.787-4.585-7-5.995-12-6s-10.108 3.382-12 6"></svg:path></svg:g>`,
})
export class IconParkSolidVacationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVacuumCleanerIcon],svg[icon-park-solid-vacuum-cleaner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M26 22.5V10c0-3 2-6 6-6s6 3 6 6v24"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M32.75 34h10.5l.75 6H32z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 40h15.886c.063 0 .114-.05.114-.114V23.255C26 15.935 20.066 10 12.745 10v0A5.745 5.745 0 0 0 7 15.745V29"></svg:path><svg:circle cx="10" cy="34" r="6" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 10v19"></svg:path></svg:g>`,
})
export class IconParkSolidVacuumCleanerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVegetableBasketIcon],svg[icon-park-solid-vegetable-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 14H7.378a3 3 0 0 0-2.98 3.354L7.12 40.236A2 2 0 0 0 9.105 42h30.368a2 2 0 0 0 1.991-1.807l2.218-22.904A3 3 0 0 0 40.696 14H38M5 22h38m-28 7h18m-16 7h14"></svg:path><svg:path fill="currentColor" d="M24 6c-4.418 0-8 6.925-8 15.467q0 .267.005.533h15.99q.005-.266.005-.533C32 12.925 28.418 6 24 6"></svg:path></svg:g>`,
})
export class IconParkSolidVegetableBasketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVegetablesIcon],svg[icon-park-solid-vegetables-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M32 7.902c1.5-.402 3.33-.29 4.44 0c2.501.658 4.325 1.788 5.416 3.36c1.263 1.817 1.481 4.137.652 6.894c-1.699 5.64-8.6 9.14-9.008 9.344m-6.253 13.77q.774.148 1.562.151c1.47 0 2.735-.415 3.757-1.234c1.113-.885 1.934-2.187 2.267-3.909s-.153-3.335-.68-4.91c-.373-1.118-.618-2.804-.653-3.868m-20.5-1s-5.81-2.706-7.507-8.344c-.83-2.756-.611-5.074.651-6.894c1.093-1.571 2.914-2.7 5.416-3.36c1.111-.29 2.174-.439 3.162-.439M13.5 27c.5 1 .068 2.796-.46 4.372c-.527 1.576-1.071 3.202-.68 4.91c.39 1.706 1.153 3.023 2.264 3.908c1.024.818 1.906 1.31 3.376 1.31c.523-.002 2-.5 2-.5"></svg:path><svg:path d="M23.5 4C28.747 4 33 6.643 33 14.375S23.5 32 23.5 32S14 22.107 14 14.375C14 6.642 18.253 4 23.5 4"></svg:path><svg:path fill="currentColor" d="M24 42.229c-2.01 0-3.72-.662-4.87-1.67c-1.327-1.166-2.003-2.826-2.003-4.932c0-1.756.95-3.221 1.867-4.64c.652-1.007 1.554-2.99 1.554-2.99s.475-1.636.397-2.7c-.145-1.964-2.052-3.443-2.362-4.457c-.375-1.26-.283-2.028.285-2.412c.175-.12.845-.16.845-.16s-.126-1.846-.047-2.455c.095-.73.476-1.772 1.372-1.848c.62-.053 1.11.04 1.428.707c.102.216.173.477.272.839a26 26 0 0 0 1.257 3.532a26 26 0 0 0 1.26-3.532c.1-.361.17-.623.273-.84c.318-.667.81-.758 1.43-.705c.755.066 1.275 1.119 1.37 1.847c.08.609.064 1.42-.047 2.454h.047c.215 0 .626.04.802.16c.569.384.602 1.519.283 2.413C29 22 27.203 23.133 27 25c-.129 1.177.095 1.87.451 2.998c.396 1.255.9 1.983 1.554 2.989c.918 1.418 1.867 2.885 1.867 4.64c0 2.106-.674 3.765-2.004 4.931c-1.152 1.008-2.859 1.67-4.869 1.671"></svg:path></svg:g>`,
})
export class IconParkSolidVegetablesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVerticalTidyUpIcon],svg[icon-park-solid-vertical-tidy-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 7h32v6H8zm0 14h32v6H8zm0 14h32v6H8z"></svg:path>`,
})
export class IconParkSolidVerticalTidyUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVerticalTimelineIcon],svg[icon-park-solid-vertical-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" d="M4 5h40M4 43h40M8 36v7"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M12 28H4v8h8zm16-8h-8v8h8zm16-8h-8v8h8z"></svg:path><svg:path stroke-linecap="round" d="M40 20v23M8 12v1m0 7v1m15-9v1m1 15v15"></svg:path></svg:g>`,
})
export class IconParkSolidVerticalTimelineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVerticallyCenteredIcon],svg[icon-park-solid-vertically-centered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path d="M6 7h36"></svg:path><svg:path fill="currentColor" stroke-linejoin="round" d="M16 16h16v16H16z"></svg:path><svg:path d="M6 41h36"></svg:path></svg:g>`,
})
export class IconParkSolidVerticallyCenteredIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVestIcon],svg[icon-park-solid-vest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 4h-5l-7 20v20h16V19l-4-6zM12 4h5l7 20v20H8V19l4-6z"></svg:path>`,
})
export class IconParkSolidVestIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVialIcon],svg[icon-park-solid-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M30 33V4H18v28.968M30 14h-5m5 6h-5"></svg:path><svg:path fill="currentColor" d="M18 33v4.699C18 41.179 20.686 44 24 44s6-2.821 6-6.301v-4.635z"></svg:path></svg:g>`,
})
export class IconParkSolidVialIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidViciaFabaIcon],svg[icon-park-solid-vicia-faba-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSViciaFaba0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 31c0-6.5 4-8.963 7-9.981S16 20 19 17s3-9 9-11s13.091 1 15 8c1.908 7-3.5 16-6 19s-7.501 8-16 9c-8.5 1-17-4.5-17-11Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 21.044c7 8.956 17 0 10-9.044"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M11 21.019C14 20 16 20 19 17s3-9 9-11"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSViciaFaba0)"></svg:path>`,
})
export class IconParkSolidViciaFabaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVideoIcon],svg[icon-park-solid-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVideo0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 10a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M36 8v32M12 8v32m26-22h6m-6 12h6M4 18h6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 16v4M9 8h6M9 40h6M33 8h6m-6 32h6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 30h6"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 28v4m40-4v4m0-16v4"></svg:path><svg:path fill="#000" stroke="#000" d="m21 19l8 5l-8 5z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVideo0)"></svg:path>`,
})
export class IconParkSolidVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVideoConferenceIcon],svg[icon-park-solid-video-conference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVideoConference0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 10a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v9l8-6v23l-8-6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#000" d="M10 16v4m5-6v8m5-6v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVideoConference0)"></svg:path>`,
})
export class IconParkSolidVideoConferenceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVideoFileIcon],svg[icon-park-solid-video-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVideoFile0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M10 44h28a2 2 0 0 0 2-2V14H30V4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2"></svg:path><svg:path stroke="#fff" d="m30 4l10 10"></svg:path><svg:path fill="#000" stroke="#000" d="M14 21h13.493v3.5L34 22v11l-6.507-2.5V34H14z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVideoFile0)"></svg:path>`,
})
export class IconParkSolidVideoFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVideoOneIcon],svg[icon-park-solid-video-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVideoOne0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 10a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v9l8-6v23l-8-6v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:circle cx="17" cy="21" r="5" fill="#000" stroke="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVideoOne0)"></svg:path>`,
})
export class IconParkSolidVideoOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVideoTwoIcon],svg[icon-park-solid-video-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3"></svg:path><svg:path fill="currentColor" d="M20.5 28v-6.062l5.25 3.03L31 28l-5.25 3.031l-5.25 3.031z"></svg:path><svg:path d="M6 15h36m-9-9l-6 9m-6-9l-6 9"></svg:path></svg:g>`,
})
export class IconParkSolidVideoTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVideocameraIcon],svg[icon-park-solid-videocamera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="32" height="26" x="4" y="11" rx="2"></svg:rect><svg:circle cx="20" cy="24" r="6" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m36 29l8 4V15l-8 4"></svg:path></svg:g>`,
})
export class IconParkSolidVideocameraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVideocameraOneIcon],svg[icon-park-solid-videocamera-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="31" height="20" x="4" y="21" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 27h9v8h-9z"></svg:path><svg:circle cx="27" cy="13" r="5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="13" cy="13" r="5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m35 35l9 4V23l-9 4"></svg:path></svg:g>`,
})
export class IconParkSolidVideocameraOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidViewGridCardIcon],svg[icon-park-solid-view-grid-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSViewGridCard0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path fill="#000" stroke="#000" d="M13 13h8v8h-8zm14 0h8v8h-8zM13 27h8v8h-8zm14 0h8v8h-8z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSViewGridCard0)"></svg:path>`,
})
export class IconParkSolidViewGridCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidViewGridDetailIcon],svg[icon-park-solid-view-grid-detail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSViewGridDetail0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path fill="#000" stroke="#000" d="M13 13h8v8h-8z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M27 13h8m-8 7h8m-22 8h22m-22 7h22"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSViewGridDetail0)"></svg:path>`,
})
export class IconParkSolidViewGridDetailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidViewGridListIcon],svg[icon-park-solid-view-grid-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSViewGridList0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path fill="#000" stroke="#000" d="M13 13h8v8h-8zm0 14h8v8h-8z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M27 28h8m-8 7h8m-8-22h8m-8 7h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSViewGridList0)"></svg:path>`,
})
export class IconParkSolidViewGridListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidViewListIcon],svg[icon-park-solid-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSViewList0"><svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 14h12M21 24h12M21 34h12"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M15 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 10a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSViewList0)"></svg:path>`,
})
export class IconParkSolidViewListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidViewfinderIcon],svg[icon-park-solid-viewfinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSViewfinder0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 6H8a2 2 0 0 0-2 2v8m10 26H8a2 2 0 0 1-2-2v-8m26 10h8a2 2 0 0 0 2-2v-8M32 6h8a2 2 0 0 1 2 2v8"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M13 33V18h6l2-3h6l2 3h6v15z"></svg:path><svg:path fill="#000" stroke="#000" stroke-miterlimit="10" d="M24 28a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSViewfinder0)"></svg:path>`,
})
export class IconParkSolidViewfinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVigoIcon],svg[icon-park-solid-vigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVigo0"><svg:g fill="#fff" stroke-linejoin="round" stroke-width="3.833"><svg:path stroke="#fff" d="M24 44.125c9.527 0 17.25-7.616 17.25-17.01c0-2.306-.315-4.5-.99-6.591c-.39-1.207-.704-1.783-1.167-2.894s-1.079-2.05-1.78-2.993c-.7-.943-2.067-2.798-3.012-3.17c0 1.461-2.873 6.568-3.975 6.824c-1.103.257.815-5.369-1.628-9.217S22.305 2.7 22.305 4.43s-1.093 4.632-2.194 6.072c-1.1 1.439-2.886 2.675-4.13 3.256s-.793-2.908-1.726-2.292c-.94.621-2.278 2.351-2.98 3.437c-2.462 3.801-4.525 7.515-4.525 12.212c0 9.394 7.723 17.01 17.25 17.01Z"></svg:path><svg:path stroke="#000" d="M19.296 23.733v8.737a1.878 1.878 0 0 0 2.863 1.599l8.385-5.169a.94.94 0 0 0 0-1.598l-8.385-5.168a1.878 1.878 0 0 0-2.863 1.599Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVigo0)"></svg:path>`,
})
export class IconParkSolidVigoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVipIcon],svg[icon-park-solid-vip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M12 4H4l11 40h8z"></svg:path><svg:path stroke-linecap="round" d="M23 44L44 4"></svg:path></svg:g>`,
})
export class IconParkSolidVipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVipOneIcon],svg[icon-park-solid-vip-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVipOne0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m4.503 16.366l8.013-8.694A2.13 2.13 0 0 1 14.082 7h19.836a2.13 2.13 0 0 1 1.566.672l8.013 8.694a1.85 1.85 0 0 1-.035 2.572L24.75 40.15a1 1 0 0 1-1.5 0L4.538 18.938a1.85 1.85 0 0 1-.035-2.572"></svg:path><svg:path stroke="#000" d="m16 20l8 9l8-9"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVipOne0)"></svg:path>`,
})
export class IconParkSolidVipOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVirtualRealityGlassesIcon],svg[icon-park-solid-virtual-reality-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVirtualRealityGlasses0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M5 16h38a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H30l-5.992-5.999L18 40H5a1 1 0 0 1-1-1V17a1 1 0 0 1 1-1Z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 32a4 4 0 1 0 0-8a4 4 0 0 0 0 8m20 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M6 10h36z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 10h36"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVirtualRealityGlasses0)"></svg:path>`,
})
export class IconParkSolidVirtualRealityGlassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVoiceIcon],svg[icon-park-solid-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="14" height="27" x="17" y="4" fill="currentColor" rx="7"></svg:rect><svg:path stroke-linecap="round" d="M9 23c0 8.284 6.716 15 15 15s15-6.716 15-15M24 38v6"></svg:path></svg:g>`,
})
export class IconParkSolidVoiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVoiceInputIcon],svg[icon-park-solid-voice-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 30c0 6.627 5.373 12 12 12s10-4 11-7l1.538-5L35 9l9 33m-3.273-12H28.54"></svg:path><svg:path fill="currentColor" d="M22 15a6 6 0 0 0-12 0v15a6 6 0 0 0 12 0z"></svg:path></svg:g>`,
})
export class IconParkSolidVoiceInputIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVoiceMessageIcon],svg[icon-park-solid-voice-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVoiceMessage0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path fill="#000" d="M17 25.9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21.95 28.85A6.98 6.98 0 0 0 24 23.9a6.98 6.98 0 0 0-2.05-4.95m4.95 14.849a13.96 13.96 0 0 0 4.1-9.9c0-3.866-1.567-7.366-4.1-9.899"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVoiceMessage0)"></svg:path>`,
})
export class IconParkSolidVoiceMessageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVoiceOneIcon],svg[icon-park-solid-voice-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVoiceOne0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M30 18v12m6-8v4m-18-8v12m-6-8v4m12-12v20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVoiceOne0)"></svg:path>`,
})
export class IconParkSolidVoiceOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVoicemailIcon],svg[icon-park-solid-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M11 31a7 7 0 1 0 0-14a7 7 0 0 0 0 14Zm26 0a7 7 0 1 0 0-14a7 7 0 0 0 0 14Z"></svg:path><svg:path stroke-linecap="round" d="M12 31h24"></svg:path></svg:g>`,
})
export class IconParkSolidVoicemailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVolkswagenIcon],svg[icon-park-solid-volkswagen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVolkswagen0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m7 14l9 23l6-11h4l6 11l9-23"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m16 6l6 13h4l6-13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M44 24a19.95 19.95 0 0 0-6.77-15A19.92 19.92 0 0 0 24 4a19.92 19.92 0 0 0-13.23 5A19.95 19.95 0 0 0 4 24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVolkswagen0)"></svg:path>`,
})
export class IconParkSolidVolkswagenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVolumeDownIcon],svg[icon-park-solid-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"></svg:path><svg:path stroke-linecap="round" d="M32 24h12"></svg:path></svg:g>`,
})
export class IconParkSolidVolumeDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVolumeMuteIcon],svg[icon-park-solid-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="ipSVolumeMute0" width="13" height="13" x="30" y="18" maskUnits="userSpaceOnUse" style="mask-type:alpha"><svg:path fill="#fff" d="M30 18h13v13H30z"></svg:path></svg:mask><svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:g stroke-linecap="round" mask="url(#ipSVolumeMute0)"><svg:path d="m40.735 20.286l-8.486 8.485m.001-8.485l8.485 8.485"></svg:path></svg:g><svg:path fill="currentColor" d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"></svg:path></svg:g>`,
})
export class IconParkSolidVolumeMuteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVolumeNoticeIcon],svg[icon-park-solid-volume-notice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path fill="currentColor" stroke-linejoin="round" d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 15a12 12 0 0 1 1.684 1.859A12.07 12.07 0 0 1 36 24c0 2.654-.846 5.107-2.278 7.09A12 12 0 0 1 32 33"></svg:path><svg:path stroke-linecap="round" d="M34.236 41.186C40.084 37.696 44 31.305 44 24c0-7.192-3.796-13.496-9.493-17.02"></svg:path></svg:g>`,
})
export class IconParkSolidVolumeNoticeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVolumeSmallIcon],svg[icon-park-solid-volume-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"></svg:path><svg:path stroke-linecap="round" d="M32 15a12 12 0 0 1 1.684 1.859A12.07 12.07 0 0 1 36 24c0 2.654-.846 5.107-2.278 7.09A12 12 0 0 1 32 33"></svg:path></svg:g>`,
})
export class IconParkSolidVolumeSmallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVolumeUpIcon],svg[icon-park-solid-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 6v36c-7 0-12.201-9.16-12.201-9.16H6a2 2 0 0 1-2-2V17.01a2 2 0 0 1 2-2h5.799S17 6 24 6Z"></svg:path><svg:path stroke-linecap="round" d="M32 24h12m-6-6v12"></svg:path></svg:g>`,
})
export class IconParkSolidVolumeUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidVrGlassesIcon],svg[icon-park-solid-vr-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSVrGlasses0"><svg:g fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" clip-rule="evenodd"><svg:path fill="#fff" stroke="#fff" d="M2 12h44v24H30l-6-6l-6 6H2z"></svg:path><svg:path fill="#000" stroke="#000" d="M13 28a4 4 0 1 0 0-8a4 4 0 0 0 0 8m22 0a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSVrGlasses0)"></svg:path>`,
})
export class IconParkSolidVrGlassesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWalletIcon],svg[icon-park-solid-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWallet0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M17.982 11.969L31.785 4l4.612 7.989z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" d="M4 14a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linejoin="round" d="M35.25 33H44V23h-8.75c-2.9 0-5.25 2.239-5.25 5s2.35 5 5.25 5Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M44 16.5v24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWallet0)"></svg:path>`,
})
export class IconParkSolidWalletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWalletOneIcon],svg[icon-park-solid-wallet-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWalletOne0"><svg:g fill="none"><svg:rect width="38" height="26" x="5" y="13" fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M25 20h18v11H25z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M43 18v15M32 13c0-5-3.5-6-5-6H12.5C8.9 7 8 9.866 8 11.299V13"></svg:path><svg:circle cx="33.5" cy="25.5" r="1.5" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWalletOne0)"></svg:path>`,
})
export class IconParkSolidWalletOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWalletThreeIcon],svg[icon-park-solid-wallet-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWalletThree0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M39 16V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h27a3 3 0 0 0 3-3v-7"></svg:path><svg:rect width="20" height="16" x="22" y="16" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:circle r="2" fill="#000" transform="matrix(0 -1 -1 0 30 24)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWalletThree0)"></svg:path>`,
})
export class IconParkSolidWalletThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWalletTwoIcon],svg[icon-park-solid-wallet-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M4 8h40v8s-10 2-10 8s10 8 10 8v8H4z"></svg:path><svg:path stroke-linecap="round" d="M44 24h-2"></svg:path></svg:g>`,
})
export class IconParkSolidWalletTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWarehousingIcon],svg[icon-park-solid-warehousing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 24H18m6-6l-6 6l6 6"></svg:path><svg:circle cx="38" cy="24" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" d="M40.706 13A20 20 0 0 0 38 9.717A19.93 19.93 0 0 0 24 4C12.954 4 4 12.954 4 24s8.954 20 20 20c5.45 0 10.392-2.18 14-5.717A20 20 0 0 0 40.706 35"></svg:path></svg:g>`,
})
export class IconParkSolidWarehousingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWashingMachineIcon],svg[icon-park-solid-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="40" x="8.778" y="4" stroke="currentColor" stroke-width="4" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8.778 15.5h32"></svg:path><svg:circle cx="28.778" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="34.778" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="24.778" cy="30" r="7" fill="currentColor" stroke="currentColor" stroke-width="4"></svg:circle></svg:g>`,
})
export class IconParkSolidWashingMachineIcon {
  readonly viewBox = input("0 0 49 48")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWashingMachineOneIcon],svg[icon-park-solid-washing-machine-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWashingMachineOne0"><svg:g fill="none"><svg:rect width="32" height="40" x="8" y="4" stroke="#fff" stroke-width="4" rx="2"></svg:rect><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M8 12a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2z"></svg:path><svg:circle cx="14" cy="9" r="2" fill="#000"></svg:circle><svg:circle cx="20" cy="9" r="2" fill="#000"></svg:circle><svg:circle cx="24" cy="29" r="7" fill="#fff" stroke="#fff" stroke-width="4"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWashingMachineOne0)"></svg:path>`,
})
export class IconParkSolidWashingMachineOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWatchIcon],svg[icon-park-solid-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWatch0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M34.956 31L31 44H17l-3.956-13m0-14L17 4h14l3.956 13"></svg:path><svg:path fill="#fff" stroke="#fff" d="M37 24c0 2.577-.75 4.98-2.044 7A12.99 12.99 0 0 1 24 37a12.99 12.99 0 0 1-10.956-6A12.94 12.94 0 0 1 11 24c0-2.577.75-4.98 2.044-7A12.99 12.99 0 0 1 24 11a12.99 12.99 0 0 1 10.956 6A12.94 12.94 0 0 1 37 24"></svg:path><svg:path stroke="#000" d="M24 17v7l4 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWatch0)"></svg:path>`,
})
export class IconParkSolidWatchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWatchOneIcon],svg[icon-park-solid-watch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWatchOne0"><svg:g fill="none" stroke-width="4"><svg:path stroke="#fff" stroke-linecap="round" d="M19 14V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v8m0 20v8a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-8"></svg:path><svg:circle cx="24" cy="24" r="11" fill="#fff" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M21 25h4m0-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWatchOne0)"></svg:path>`,
})
export class IconParkSolidWatchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWaterIcon],svg[icon-park-solid-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M9 29a5 5 0 0 0 5-5a5 5 0 0 0 10 0a5 5 0 0 0 10 0a5 5 0 0 0 10 0c0 11.046-8.954 20-20 20S4 35.046 4 24a5 5 0 0 0 5 5m19-16a4 4 0 0 1-8 0c0-2.21 4-9 4-9s4 6.79 4 9"></svg:path>`,
})
export class IconParkSolidWaterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWaterLevelIcon],svg[icon-park-solid-water-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 44c8.284 0 15-6.716 15-15C39 15 24 4 24 4S9 15 9 29c0 8.284 6.716 15 15 15" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M9 29c0 8.284 6.716 15 15 15s15-6.716 15-15c0 0-9 3-15 0S9 29 9 29Z"></svg:path></svg:g>`,
})
export class IconParkSolidWaterLevelIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWaterNoIcon],svg[icon-park-solid-water-no-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M9 29a5 5 0 0 0 5-5a5 5 0 0 0 10 0a5 5 0 0 0 10 0a5 5 0 0 0 10 0c0 11.046-8.954 20-20 20S4 35.046 4 24a5 5 0 0 0 5 5"></svg:path><svg:path d="m19 5l10 10m0-10L19 15"></svg:path></svg:g>`,
})
export class IconParkSolidWaterNoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWaterRateIcon],svg[icon-park-solid-water-rate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWaterRate0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c8.837 0 16-6.512 16-14.545Q40 17.635 24 4Q8 17.636 8 29.455C8 37.488 15.163 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M18.857 19L24 24.368L29.143 19M18 26.158h12m-12 5.368h12m-6-5.368V36"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWaterRate0)"></svg:path>`,
})
export class IconParkSolidWaterRateIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWaterRateTwoIcon],svg[icon-park-solid-water-rate-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWaterRateTwo0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" d="M24 44c8.837 0 16-7.164 16-16C40 15 24 4 24 4S8 15 8 28c0 8.837 7.163 16 16 16" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="m24 20l-4 8h8l-4 8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWaterRateTwo0)"></svg:path>`,
})
export class IconParkSolidWaterRateTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWaterfallsHIcon],svg[icon-park-solid-waterfalls-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M20 6H6v11h14zm22 25H28v11h14zm0-25H28v17h14zM20 25H6v17h14z"></svg:path>`,
})
export class IconParkSolidWaterfallsHIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWaterfallsVIcon],svg[icon-park-solid-waterfalls-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M23 20V6H6v14zm19 22V28H25v14zM31 6v14h11V6zM6 28v14h11V28z"></svg:path>`,
})
export class IconParkSolidWaterfallsVIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWatermelonIcon],svg[icon-park-solid-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWatermelon0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M23 34c11.046 0 20-8.954 20-20H3c0 11.046 8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M23 23v3m-6.364-5.636l-2.121 2.121m14.849-2.121l2.122 2.121"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWatermelon0)"></svg:path>`,
})
export class IconParkSolidWatermelonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWatermelonOneIcon],svg[icon-park-solid-watermelon-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWatermelonOne0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 4l17 29.92S36.046 38 24 38S7 33.92 7 33.92z"></svg:path><svg:circle cx="24" cy="17" r="2" fill="#000"></svg:circle><svg:circle cx="27" cy="23" r="2" fill="#000"></svg:circle><svg:circle cx="21" cy="23" r="2" fill="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M41 39.92S36.046 44 24 44S7 39.92 7 39.92"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWatermelonOne0)"></svg:path>`,
})
export class IconParkSolidWatermelonOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWaterpoloOneIcon],svg[icon-park-solid-waterpolo-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m4 35l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 35M4 41l2.5 1.351c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0c1.6-.864 3.4-.864 5 0c1.6.865 3.4.865 5 0L44 41"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-miterlimit="2" stroke-width="4" d="M25 18a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="m25 29l-1-4M4 11l7 11l13 2.93h18"></svg:path><svg:path fill="currentColor" d="M11 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconParkSolidWaterpoloOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWearyFaceIcon],svg[icon-park-solid-weary-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWearyFace0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 29c5 0 7 4 7 4H17s2-4 7-4m-5-11l-4 2m14-2l4 2"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWearyFace0)"></svg:path>`,
})
export class IconParkSolidWearyFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWebPageIcon],svg[icon-park-solid-web-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWebPage0"><svg:g fill="none"><svg:rect width="40" height="32" x="4" y="8" stroke="#fff" stroke-linejoin="round" stroke-width="4" rx="3"></svg:rect><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"></svg:path><svg:circle r="2" fill="#000" transform="matrix(0 -1 -1 0 10 14)"></svg:circle><svg:circle r="2" fill="#000" transform="matrix(0 -1 -1 0 16 14)"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWebPage0)"></svg:path>`,
})
export class IconParkSolidWebPageIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWebcamIcon],svg[icon-park-solid-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWebcam0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M7.825 29.766C11.462 34.756 17.352 38 24 38s12.538-3.243 16.175-8.234C43.79 33.508 46 38.508 46 44H2c0-5.492 2.209-10.492 5.825-14.234Z"></svg:path><svg:path fill="#fff" stroke="#fff" d="M24 30c7.18 0 13-5.82 13-13S31.18 4 24 4S11 9.82 11 17s5.82 13 13 13Z"></svg:path><svg:path fill="#000" stroke="#000" d="M24 22a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWebcam0)"></svg:path>`,
})
export class IconParkSolidWebcamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWechatIcon],svg[icon-park-solid-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWechat0"><svg:g fill="none"><svg:path fill="#fff" fill-rule="evenodd" d="M36.997 21.711C36.843 13.008 29.74 6 21 6C12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21l7.115-3.055q4.702 1.563 8.875.782" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36.997 21.711C36.843 13.008 29.74 6 21 6C12.163 6 5 13.163 5 22c0 4.17 1.595 7.968 4.209 10.815l-1.199 7.21l7.115-3.055q4.702 1.563 8.875.782"></svg:path><svg:path fill="#000" d="M15.125 20.467a2.26 2.26 0 0 0 2.25-2.267a2.26 2.26 0 0 0-2.25-2.267a2.26 2.26 0 0 0-2.25 2.267a2.26 2.26 0 0 0 2.25 2.267m9 0a2.26 2.26 0 0 0 2.25-2.267a2.26 2.26 0 0 0-2.25-2.267a2.26 2.26 0 0 0-2.25 2.267a2.26 2.26 0 0 0 2.25 2.267"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M38.762 39.93A10.45 10.45 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21S43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38.762 39.93A10.45 10.45 0 0 1 32.5 42C26.701 42 22 37.299 22 31.5S26.701 21 32.5 21S43 25.701 43 31.5c0 1.6-.358 3.116-.998 4.473"></svg:path><svg:path fill="#fff" fill-rule="evenodd" d="M42.002 35.973L43 42l-4.238-2.07" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.002 35.973L43 42l-4.238-2.07"></svg:path><svg:path fill="#000" d="M35.688 30.8A1.694 1.694 0 0 1 34 29.1c0-.939.755-1.7 1.688-1.7c.931 0 1.687.761 1.687 1.7s-.755 1.7-1.687 1.7m-6.75 0a1.694 1.694 0 0 1-1.688-1.7c0-.939.756-1.7 1.688-1.7s1.687.761 1.687 1.7s-.756 1.7-1.687 1.7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWechat0)"></svg:path>`,
})
export class IconParkSolidWechatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeiboIcon],svg[icon-park-solid-weibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWeibo0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4.159" d="M12.562 16.41c-3.344 3.25-10.399 12.736-5.2 19.522c5.2 6.785 19.92 4.168 25.997-.613c6.077-4.78 5.477-7.734 4.16-9.036s-5.163.014-6.24-1.757s1.917-6.195-.634-7.595c-2.55-1.4-6.954 3.65-8.943 2.338c-1.99-1.312 2.189-5.596 0-6.83c-2.19-1.235-5.796.722-9.14 3.972Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4.159" d="M43.379 16.516a12.95 12.95 0 0 0-3.642-8.073a12.96 12.96 0 0 0-7.723-3.84m5.278 12.328c-.13-1.64-.867-3.117-2-4.228a7.25 7.25 0 0 0-4.24-2.01"></svg:path><svg:path fill="#000" d="M25 30c0 2.21-2.686 4-6 4s-6-1.79-6-4s2.686-4 6-4s6 1.79 6 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWeibo0)"></svg:path>`,
})
export class IconParkSolidWeiboIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeightIcon],svg[icon-park-solid-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWeight0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-width="4" d="M41 4H7a3 3 0 0 0-3 3v34a3 3 0 0 0 3 3h34a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M12 19.054q4.987-6 12-6q7.012 0 12 6"></svg:path><svg:path fill="#000" d="M24 31a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="m19 21l5.008 7"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWeight0)"></svg:path>`,
})
export class IconParkSolidWeightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeightliftingIcon],svg[icon-park-solid-weightlifting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M24 27a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 9h40M4 4v10M44 4v10M11 9v17.1L24 34l13-8V9M24 34v10"></svg:path></svg:g>`,
})
export class IconParkSolidWeightliftingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinCardsOffersIcon],svg[icon-park-solid-weixin-cards-offers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="m6 12l36 4v24L6 36z"></svg:path><svg:path d="M38 15.555V8L6 12"></svg:path></svg:g>`,
})
export class IconParkSolidWeixinCardsOffersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinMarketIcon],svg[icon-park-solid-weixin-market-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M38 14H10a2 2 0 0 0-2 2v26a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2"></svg:path><svg:path d="M17 18v-7a7 7 0 1 1 14 0v7"></svg:path></svg:g>`,
})
export class IconParkSolidWeixinMarketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinMiniAppIcon],svg[icon-park-solid-weixin-mini-app-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWeixinMiniApp0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20"></svg:path><svg:path stroke="#000" d="M29 24a5 5 0 1 0-5-5v10a5 5 0 1 1-5-5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWeixinMiniApp0)"></svg:path>`,
})
export class IconParkSolidWeixinMiniAppIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinPeopleNearbyIcon],svg[icon-park-solid-weixin-people-nearby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="15" cy="10" r="4"></svg:circle><svg:circle cx="33" cy="10" r="4"></svg:circle><svg:path d="M10 20h10l-2 22h-6zm18 0h10l-2 22h-6z"></svg:path></svg:g>`,
})
export class IconParkSolidWeixinPeopleNearbyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinScanIcon],svg[icon-park-solid-weixin-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 30H12l2 5h12l2.088 6.265A4 4 0 0 0 31.883 44H38a4 4 0 0 0 4-4V30l1-7l-3.646.73a2 2 0 0 0-1.58 1.632zM11 18h25l-2-5H22l-2.088-6.265A4 4 0 0 0 16.117 4H10a4 4 0 0 0-4 4v10l-1 7l3.646-.73a2 2 0 0 0 1.58-1.632z"></svg:path>`,
})
export class IconParkSolidWeixinScanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinShakeIcon],svg[icon-park-solid-weixin-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWeixinShake0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M42 19L29 6L6 29l13 13z"></svg:path><svg:path stroke="#000" d="m16 29l3 3"></svg:path><svg:path stroke="#fff" d="m30 42l12-12M6 18L18 6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWeixinShake0)"></svg:path>`,
})
export class IconParkSolidWeixinShakeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinTopStoriesIcon],svg[icon-park-solid-weixin-top-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m24 4l7.2 7.53L41.32 14L38.4 24l2.92 10l-10.12 2.47L24 44l-7.2-7.53L6.68 34L9.6 24L6.68 14l10.12-2.47z"></svg:path><svg:path fill="currentColor" d="m30.977 11.915l.395 7.829L37.954 24l-6.582 4.256l-.395 7.829L24 32.512l-6.977 3.573l-.395-7.829L10.045 24l6.583-4.256l.395-7.829L24 15.488z"></svg:path></svg:g>`,
})
export class IconParkSolidWeixinTopStoriesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWhaleIcon],svg[icon-park-solid-whale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWhale0"><svg:g fill="none"><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M16.07 13c-9.817.35-11.394 8.006-10.956 11.791c-1.753 3.145-1.218 3.93.096 5.24c6.574 6.115 18.843 5.678 24.54 3.495c5.96-2.446 8.999-7.051 9.29-9.526c5.26-3.494 5.366-9.399 4.636-11c-.78 1.31-3.029 2.272-4.635 3c-1.753.35-4.275-.962-5.005-2.127c-.502 2.627 0 4.627 1.314 5.678c2.288 1.747 1.125 3.512.687 3.949c-1.896 1.89-5.506.99-7.26-1.766C24.053 14.31 18.991 13 16.07 13"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 28c2.833.532 8.4 1.554 12-1"></svg:path><svg:circle cx="12" cy="20" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWhale0)"></svg:path>`,
})
export class IconParkSolidWhaleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWheelchairIcon],svg[icon-park-solid-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M29.622 35c-1.332 5.176-6.03 9-11.622 9c-6.627 0-12-5.373-12-12c0-4.843 2.869-9.016 7-10.912"></svg:path><svg:path d="m18 12l2 18l15-1l3 11h3"></svg:path><svg:path fill="currentColor" d="M22 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path><svg:path d="M25 20h8"></svg:path></svg:g>`,
})
export class IconParkSolidWheelchairIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWhirlwindIcon],svg[icon-park-solid-whirlwind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M24 29a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="M23.5 44C16.596 44 11 38.404 11 31.5S16.596 19 23.5 19"></svg:path><svg:path d="M44 23.5C44 30.404 38.404 36 31.5 36S19 30.404 19 23.5"></svg:path><svg:path d="M23.5 29C30.404 29 36 23.404 36 16.5S30.404 4 23.5 4"></svg:path><svg:path d="M29 23.5C29 16.596 23.404 11 16.5 11S4 16.596 4 23.5"></svg:path></svg:g>`,
})
export class IconParkSolidWhirlwindIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWholeSiteAcceleratorIcon],svg[icon-park-solid-whole-site-accelerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="22" cy="40" r="4" fill="currentColor"></svg:circle><svg:circle cx="26" cy="8" r="4" fill="currentColor"></svg:circle><svg:circle cx="36" cy="24" r="4" fill="currentColor"></svg:circle><svg:circle cx="12" cy="24" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 24H16m7-13l-8 10"></svg:path><svg:path d="m33 27l-8.001 10"></svg:path></svg:g>`,
})
export class IconParkSolidWholeSiteAcceleratorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWindTurbineIcon],svg[icon-park-solid-wind-turbine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWindTurbine0"><svg:g fill="none"><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M24 30v14"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 23c11 5 16 14 16 14s-12 0-21-8c-9 8-21 8-21 8s5-10 16-14c0-13 5-19 5-19s5 6 5 19"></svg:path><svg:circle cx="24" cy="24" r="2" fill="#000"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWindTurbine0)"></svg:path>`,
})
export class IconParkSolidWindTurbineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWindmillIcon],svg[icon-park-solid-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m24 23.992l-.03-9.996L23.943 4L12 14v10zm.008.008l9.996-.03L44 23.943L34 12H24zm-.008.008l.03 9.996l.028 9.996L36 34V24zM23.992 24l-9.996.03L4 24.057L14 36h10z" clip-rule="evenodd"></svg:path>`,
})
export class IconParkSolidWindmillIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWindmillTwoIcon],svg[icon-park-solid-windmill-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M24 24c5.523 0 10-4.477 10-10S29.523 4 24 4zm0 0c0 5.523 4.477 10 10 10s10-4.477 10-10zm0 0c0-5.523-4.477-10-10-10S4 18.477 4 24zm0 0c-5.523 0-10 4.477-10 10s4.477 10 10 10z"></svg:path>`,
})
export class IconParkSolidWindmillTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWindowsIcon],svg[icon-park-solid-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="3.833" d="m6.75 11.063l12.938-1.725v12.075H6.75zm18.112-2.218L41.25 6.75v14.663H24.862zm0 18.605l16.388.383V41.25l-16.388-2.683zM6.75 26.588l12.938.311V37.8L6.75 35.62z"></svg:path>`,
})
export class IconParkSolidWindowsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWingsuitFlyingIcon],svg[icon-park-solid-wingsuit-flying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-miterlimit="2" stroke-width="4"><svg:path fill="currentColor" d="M24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 20c-8.71 0-16 7.28-16 16h7v8h18v-8h7c.01-8.71-7.29-16-16-16m-9 16V23m18 13V23m-9 21V20"></svg:path></svg:g>`,
})
export class IconParkSolidWingsuitFlyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWinkingFaceIcon],svg[icon-park-solid-winking-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWinkingFace0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 31s-2 4-7 4s-7-4-7-4m16-11h-4m-12-2v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWinkingFace0)"></svg:path>`,
})
export class IconParkSolidWinkingFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWinkingFaceWithOpenEyesIcon],svg[icon-park-solid-winking-face-with-open-eyes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWinkingFaceWithOpenEyes0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="m33 16l-4 4l4 4m-2 7s-2 4-7 4s-7-4-7-4"></svg:path><svg:circle cx="17" cy="20" r="4" fill="#000" stroke="#000" stroke-linecap="round"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWinkingFaceWithOpenEyes0)"></svg:path>`,
})
export class IconParkSolidWinkingFaceWithOpenEyesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWomenIcon],svg[icon-park-solid-women-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M19.225 6.37c-3.183 0-8.063 1.837-6.366 13.213q.04.258.095.557c.31 1.711.788 4.36-2.254 6.544c2.069 1.698 5.016 3.395 8.597 4.13a28 28 0 0 1-.532 2.414c-.291 1.068-.901 1.825-1.991 2.148c-.96.284-1.966.514-2.996.75q-.398.09-.8.184c-1.285.299-2.595.63-3.756 1.098c-1.164.47-2.246 1.103-3.028 2.047c-.796.963-1.222 2.177-1.193 3.695c.01.472.414.85.91.85h36.178c.496 0 .9-.378.91-.85c.029-1.518-.396-2.732-1.193-3.695c-.781-.944-1.864-1.578-3.027-2.047c-1.162-.469-2.472-.8-3.758-1.099l-.798-.183c-1.031-.236-2.037-.466-2.997-.75c-1.09-.323-1.7-1.08-1.991-2.148a27 27 0 0 1-.606-2.88c2.738-.824 5.648-2.305 8.671-4.67l-.014-.014c-1.419-1.358-4.079-3.904-4.268-9.948c0-8.322-5.306-15.637-13.793-9.347Z"></svg:path>`,
})
export class IconParkSolidWomenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWoolenHatIcon],svg[icon-park-solid-woolen-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="40" height="10" x="4" y="34" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 26v8m9-8v8m9-8v8"></svg:path><svg:circle cx="24" cy="8" r="4" fill="currentColor"></svg:circle><svg:path d="M8 34c0-8.25 1-22 16-22s16 13.75 16 22"></svg:path></svg:g>`,
})
export class IconParkSolidWoolenHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWordIcon],svg[icon-park-solid-word-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWord0"><svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#fff" stroke="#fff" rx="3"></svg:rect><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m14 16l4 16l6-13l6 13l4-16"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWord0)"></svg:path>`,
})
export class IconParkSolidWordIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWorkbenchIcon],svg[icon-park-solid-workbench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWorkbench0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M12 33H4V7h40v26z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 22v4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 33v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 18v8m8-12v12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 41h24"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWorkbench0)"></svg:path>`,
})
export class IconParkSolidWorkbenchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWorkerIcon],svg[icon-park-solid-worker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWorker0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#fff" d="M32 16a8 8 0 1 1-16 0"></svg:path><svg:path fill="#fff" stroke="#fff" d="M24 8a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8"></svg:path><svg:path stroke="#fff" d="M12 16h24M24 4v4"></svg:path><svg:path fill="#fff" stroke="#fff" d="M24 27c-9.389 0-17 7.163-17 16h34c0-8.837-7.611-16-17-16"></svg:path><svg:path stroke="#000" d="M18 34v4m12-4v4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWorker0)"></svg:path>`,
})
export class IconParkSolidWorkerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWorriedFaceIcon],svg[icon-park-solid-worried-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSWorriedFace0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M31 18v1m-14-1v1m14 12s-2-4-7-4s-7 4-7 4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSWorriedFace0)"></svg:path>`,
})
export class IconParkSolidWorriedFaceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWriteIcon],svg[icon-park-solid-write-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M5.325 43.5h8.485l31.113-31.113l-8.486-8.485L5.325 35.015z"></svg:path><svg:path stroke-linecap="round" d="m27.952 12.387l8.485 8.485"></svg:path></svg:g>`,
})
export class IconParkSolidWriteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWritingFluentlyIcon],svg[icon-park-solid-writing-fluently-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" fill-rule="evenodd" d="M24 24v-5L39 4l5 5l-15 15z" clip-rule="evenodd"></svg:path><svg:path d="M16 24H9a5 5 0 0 0 0 10h30a5 5 0 0 1 0 10H18"></svg:path></svg:g>`,
})
export class IconParkSolidWritingFluentlyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWrongUserIcon],svg[icon-park-solid-wrong-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="12" r="8" fill="currentColor"></svg:circle><svg:path d="M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44m14-8l8 8m0-8l-8 8"></svg:path></svg:g>`,
})
export class IconParkSolidWrongUserIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidXiaoduIcon],svg[icon-park-solid-xiaodu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSXiaodu0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4.143 21.08c.355-3.786.533-5.68 2.513-7.705s4.16-2.28 8.517-2.788C18.003 10.257 21.131 10 24 10c2.87 0 5.996.257 8.827.587c4.358.508 6.537.763 8.517 2.788s2.158 3.919 2.513 7.706c.09.955.143 1.937.143 2.919s-.054 1.964-.143 2.92c-.355 3.786-.533 5.68-2.513 7.705s-4.16 2.28-8.517 2.788c-2.83.33-5.957.587-8.827.587s-5.996-.257-8.827-.587c-4.358-.508-6.537-.763-8.517-2.788s-2.158-3.919-2.513-7.706A31 31 0 0 1 4 24c0-.982.054-1.964.143-2.92"></svg:path><svg:path stroke="#000" d="M16 19v10m17-10l-5 5l5 5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSXiaodu0)"></svg:path>`,
})
export class IconParkSolidXiaoduIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidXiaoduHomeIcon],svg[icon-park-solid-xiaodu-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSXiaoduHome0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 20L24 6l20 14v22H4z"></svg:path><svg:path stroke="#000" d="M12.687 26.686a16 16 0 0 1 22.627 0m-16.971 5.657a8 8 0 0 1 11.314 0"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSXiaoduHome0)"></svg:path>`,
})
export class IconParkSolidXiaoduHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidXiguaIcon],svg[icon-park-solid-xigua-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSXigua0"><svg:g fill="none" stroke-linejoin="round" stroke-width="3.667"><svg:path fill="#fff" stroke="#fff" d="M24 42.333c10.126 0 18.334-8.208 18.334-18.333S34.126 5.667 24 5.667S5.667 13.875 5.667 24c0 2.486 1.14 3.687 2.947 4.745c1.807 1.057 5.206.882 7.519 2.956c2.312 2.075 2.468 5.45 2.947 7.09s2.435 3.542 4.92 3.542Z"></svg:path><svg:path fill="#000" stroke="#000" d="M19.526 18.541q-.807 1.962-.807 4.612q0 2.52.535 4.99a3.056 3.056 0 0 0 3.812 2.294q2.7-.757 4.701-1.983q1.871-1.146 3.489-2.894a3.056 3.056 0 0 0-.278-4.413a33 33 0 0 0-3.977-2.87q-2.17-1.328-4.25-1.602a3.056 3.056 0 0 0-3.225 1.866Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSXigua0)"></svg:path>`,
})
export class IconParkSolidXiguaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidXingfuliIcon],svg[icon-park-solid-xingfuli-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSXingfuli0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="m32 17l-12-4v19l6 3V19z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSXingfuli0)"></svg:path>`,
})
export class IconParkSolidXingfuliIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidYepIcon],svg[icon-park-solid-yep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 42c-4.736 2.706-11 2.5-16 0s-9-8-9-12.5c0-2.623 4.356-4.53 6.196-5.219c.46-.172.75-.64.677-1.126L11.586 7.909a3.404 3.404 0 1 1 6.75-.88L20 22l.83-15.77a3.408 3.408 0 1 1 6.795.518l-1.038 10.386A2.37 2.37 0 0 1 28.947 15A4.053 4.053 0 0 1 33 19.053V21.5a3.5 3.5 0 1 1 7 0v10.649c0 .566-.053 1.132-.253 1.661c-.596 1.577-2.46 5.169-7.747 8.19"></svg:path>`,
})
export class IconParkSolidYepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidYoutobeIcon],svg[icon-park-solid-youtobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSYoutobe0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M44 32.768V15.232c0-1.325-.87-2.49-2.155-2.812C38.369 11.548 31.185 10 24 10S9.631 11.548 6.155 12.42C4.87 12.743 4 13.907 4 15.232v17.536c0 1.325.87 2.49 2.155 2.812C9.631 36.452 16.815 38 24 38s14.369-1.548 17.845-2.42C43.13 35.257 44 34.093 44 32.768Z"></svg:path><svg:path fill="#000" stroke="#000" stroke-linejoin="round" d="M22.574 29.899a1 1 0 0 1-1.574-.82V18.921a1 1 0 0 1 1.573-.82l7.257 5.08a1 1 0 0 1 0 1.638z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSYoutobe0)"></svg:path>`,
})
export class IconParkSolidYoutobeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidYoutubeIcon],svg[icon-park-solid-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSYoutube0"><svg:g fill="none" stroke-linejoin="round"><svg:path fill="#fff" stroke="#fff" stroke-width="4" d="M11.064 10.414Q19.378 10 23.998 10t12.939.415a6 6 0 0 1 5.68 5.492q.381 4.55.381 8.017q0 3.508-.39 8.128a6 6 0 0 1-5.587 5.483Q29.91 38 23.998 38q-5.91 0-13.018-.465a6 6 0 0 1-5.587-5.48q-.395-4.655-.395-8.131q0-3.435.385-8.02a6 6 0 0 1 5.68-5.49Z"></svg:path><svg:path fill="#000" stroke="#000" stroke-width="3.429" d="M21 19.61v8.796a.857.857 0 0 0 1.33.715l6.597-4.36a.857.857 0 0 0 .006-1.427l-6.598-4.436a.857.857 0 0 0-1.335.711Z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSYoutube0)"></svg:path>`,
})
export class IconParkSolidYoutubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidZeroKeyIcon],svg[icon-park-solid-zero-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSZeroKey0"><svg:g fill="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" stroke="#fff" rx="3"></svg:rect><svg:rect width="10" height="20" x="19" y="14" stroke="#000" rx="5"></svg:rect></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSZeroKey0)"></svg:path>`,
})
export class IconParkSolidZeroKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidZijinyunyingIcon],svg[icon-park-solid-zijinyunying-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSZijinyunying0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M34 6H14L3 24l11 18h20l11-18z"></svg:path><svg:path fill="#000" stroke="#000" d="m15 29l9-14l9 14z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSZijinyunying0)"></svg:path>`,
})
export class IconParkSolidZijinyunyingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidZipIcon],svg[icon-park-solid-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSZip0"><svg:g fill="none" stroke-width="4"><svg:path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" d="M4.629 12.749L24 5l19.371 7.749a1 1 0 0 1 .629.928V42a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13.677a1 1 0 0 1 .629-.928Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 22v10"></svg:path><svg:path stroke="#000" d="M33 27c1.657 0 3-1.12 3-2.5S34.657 22 33 22h-2.7a.3.3 0 0 0-.3.3v2.2c0 1.38 1.343 2.5 3 2.5Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M30 22v10"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12 22h6.005L12 32h6.005"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSZip0)"></svg:path>`,
})
export class IconParkSolidZipIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidZoomIcon],svg[icon-park-solid-zoom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="currentColor" d="M20 43c-4.726-1.767-8.667-7.815-10.64-11.357c-.852-1.53-.403-3.408.964-4.502a3.83 3.83 0 0 1 5.1.283L17 29v-8.5a2.5 2.5 0 0 1 5 0v-4a2.5 2.5 0 0 1 5 0v8a2.5 2.5 0 0 1 5 0v3a2.5 2.5 0 0 1 5 0v7.868c0 1.07-.265 2.128-.882 3.003C35.095 39.82 33.256 42.034 31 43c-3.5 1.5-6.63 1.634-11 0"></svg:path><svg:path d="M13 8h22m-18 4l-4-4l4-4m14 0l4 4l-4 4"></svg:path></svg:g>`,
})
export class IconParkSolidZoomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidZoomInIcon],svg[icon-park-solid-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSZoomIn0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M21 15v12m-5.984-5.984L27 21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m33.222 33.222l8.485 8.485"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSZoomIn0)"></svg:path>`,
})
export class IconParkSolidZoomInIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidZoomInternalIcon],svg[icon-park-solid-zoom-internal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSZoomInternal0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M44 4H4v40h40z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 4v12H4m32 8v12H24m12 0L24 24"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 6v20M7 4h20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSZoomInternal0)"></svg:path>`,
})
export class IconParkSolidZoomInternalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidZoomOutIcon],svg[icon-park-solid-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSZoomOut0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M15 21h12"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="m33.222 33.222l8.485 8.485"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSZoomOut0)"></svg:path>`,
})
export class IconParkSolidZoomOutIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAddModeIcon],svg[icon-park-solid-add-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSAddMode0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="m24.003 4l5.27 5.27h9.457v9.456l5.27 5.27l-5.27 5.278v9.456h-9.456L24.004 44l-5.278-5.27H9.27v-9.456L4 23.997l5.27-5.27V9.27h9.456z"></svg:path><svg:path stroke="#000" d="M17 23.997h14M24.004 17v14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSAddMode0)"></svg:path>`,
})
export class IconParkSolidAddModeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidAddItemIcon],svg[icon-park-solid-add-item-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 30v-6"></svg:path><svg:path fill="currentColor" d="M6 30h36v12H6z"></svg:path><svg:path d="M6 12.5v-1M6 18v-1M6 7V6m36 6.5v-1m0 6.5v-1m0-10V6m0 12h-1M7 18H6M7 6H6m8 0h-1m8 0h-1m1 12h-1m8-12h-1M14 18h-1m15 0h-1m8-12h-1m1 12h-1m8-12h-1"></svg:path></svg:g>`,
})
export class IconParkSolidAddItemIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
