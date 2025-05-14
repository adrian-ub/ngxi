import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsVolumeOffIcon],svg[famicons-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 416a23.92 23.92 0 0 1-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 0 1-24-24V200.07a24 24 0 0 1 24-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 0 1 368 120v272a24 24 0 0 1-24 24"></svg:path>`,
})
export class FamiconsVolumeOffIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWalkIcon],svg[famicons-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m312.55 479.9l-56.42-114l-44.62-57a72.37 72.37 0 0 1-10.06-36.9V143.64H217a40 40 0 0 1 40 40v182.21"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M127.38 291.78v-74.07s37-74.07 74.07-74.07"></svg:path><svg:path fill="currentColor" d="M368.09 291.78a18.5 18.5 0 0 1-10.26-3.11L297.7 250a21.18 21.18 0 0 1-9.7-17.79v-23.7a5.65 5.65 0 0 1 8.69-4.77l81.65 54.11a18.52 18.52 0 0 1-10.29 33.93ZM171.91 493.47a18.5 18.5 0 0 1-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0 1 10.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09c5.24 9.95 6 16.11-1.68 25.7c-8 10-52 67.44-52 67.44c-2.62 2.98-7.23 3.7-11.09 3.7"></svg:path><svg:circle cx="257" cy="69.56" r="37.04" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></svg:circle>`,
})
export class FamiconsWalkIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWalletIcon],svg[famicons-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M95.5 104h320a88 88 0 0 1 11.18.71a66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104m320 24h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64M368 320a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path><svg:path fill="currentColor" d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16s-18.5 24.5 0 24.5s0 23.5 0 23.5L85.5 236Z"></svg:path>`,
})
export class FamiconsWalletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWarningIcon],svg[famicons-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M449.07 399.08L278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17m-198.6-1.83a20 20 0 1 1 20-20a20 20 0 0 1-20 20m21.72-201.15l-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z"></svg:path>`,
})
export class FamiconsWarningIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWatchIcon],svg[famicons-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="240" height="240" x="136" y="136" fill="currentColor" rx="56" ry="56"></svg:rect><svg:path fill="currentColor" d="M336 96V32a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v64a80.09 80.09 0 0 0-80 80v160a80.09 80.09 0 0 0 80 80v64a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-64a80.09 80.09 0 0 0 80-80V176a80.09 80.09 0 0 0-80-80m56 224a72.08 72.08 0 0 1-72 72H192a72.08 72.08 0 0 1-72-72V192a72.08 72.08 0 0 1 72-72h128a72.08 72.08 0 0 1 72 72Z"></svg:path>`,
})
export class FamiconsWatchIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWaterIcon],svg[famicons-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M265.12 60.12a12 12 0 0 0-18.23 0C215.23 97.15 112 225.17 112 320c0 88.37 55.64 144 144 144s144-55.63 144-144c0-94.83-103.23-222.85-134.88-259.88M272 412a12 12 0 0 1-11.34-16a11.89 11.89 0 0 1 11.41-8A60.06 60.06 0 0 0 332 328.07a11.89 11.89 0 0 1 8-11.41A12 12 0 0 1 356 328a84.09 84.09 0 0 1-84 84"></svg:path>`,
})
export class FamiconsWaterIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWifiIcon],svg[famicons-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M346.65 304.3a136 136 0 0 0-180.71 0a21 21 0 1 0 27.91 31.38a94 94 0 0 1 124.89 0a21 21 0 0 0 27.91-31.4Z"></svg:path><svg:path fill="currentColor" d="M256.28 183.7a221.47 221.47 0 0 0-151.8 59.92a21 21 0 1 0 28.68 30.67a180.28 180.28 0 0 1 246.24 0a21 21 0 1 0 28.68-30.67a221.47 221.47 0 0 0-151.8-59.92"></svg:path><svg:path fill="currentColor" d="M462 175.86a309 309 0 0 0-411.44 0a21 21 0 1 0 28 31.29a267 267 0 0 1 355.43 0a21 21 0 0 0 28-31.31Z"></svg:path><svg:circle cx="256.28" cy="393.41" r="32" fill="currentColor"></svg:circle>`,
})
export class FamiconsWifiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWineIcon],svg[famicons-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.56 94.92V80a16 16 0 0 0-16-16H113.44a16 16 0 0 0-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69c24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 0 0 0 32h192a16 16 0 0 0 0-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86c46.58-53.95 38.37-133.32 36.93-144.69m-285.3 3.41a15 15 0 0 0 .18-2.33h253.12a15 15 0 0 0 .18 2.33a202 202 0 0 1 0 45.67H129.32a204.3 204.3 0 0 1-.06-45.67"></svg:path>`,
})
export class FamiconsWineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsWomanIcon],svg[famicons-woman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="255.75" cy="56" r="56" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m394.63 277.9l-10.33-34.41v-.11l-22.46-74.86h-.05l-2.51-8.45a44.87 44.87 0 0 0-43-32.08h-120a44.84 44.84 0 0 0-43 32.08l-2.51 8.45h-.06l-22.46 74.86v.11l-10.37 34.41c-3.12 10.39 2.3 21.66 12.57 25.14a20 20 0 0 0 25.6-13.18l25.58-85.25l2.17-7.23a8 8 0 0 1 15.53 2.62a7.8 7.8 0 0 1-.17 1.61L155.43 347.4a16 16 0 0 0 15.32 20.6h29v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h16v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h30a16 16 0 0 0 15.33-20.6l-43.74-145.81a7.5 7.5 0 0 1-.16-1.59a8 8 0 0 1 15.54-2.63l2.17 7.23l25.57 85.25A20 20 0 0 0 382.05 303c10.27-3.44 15.69-14.71 12.58-25.1"></svg:path>`,
})
export class FamiconsWomanIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[famiconsAlertIcon],svg[famicons-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16"></svg:path><svg:circle cx="256" cy="416" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></svg:circle>`,
})
export class FamiconsAlertIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
