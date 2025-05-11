import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirDrawerIcon],svg[iconoir-drawer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 14H3m0-6h18m-10 9h2m-2-6h2m-2-6h2m8-2.4v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V2.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6M17.5 20v2m-11-2v2"></svg:path>`,
})
export class IconoirDrawerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDribbbleIcon],svg[iconoir-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path><svg:path d="M16.673 20.844C15.5 14 12.5 8 8.5 2.63"></svg:path><svg:path d="M2.067 10.84C6 11 15.283 10.5 19.142 5m2.826 7.81C15.344 10.84 7.5 14 5.23 19.361"></svg:path></svg:g>`,
})
export class IconoirDribbbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDroneIcon],svg[iconoir-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.463 17h-2.926a.6.6 0 0 1-.596-.534l-.867-7.8A.6.6 0 0 1 9.67 8h4.66a.6.6 0 0 1 .596.666l-.867 7.8a.6.6 0 0 1-.596.534Z"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="M4.5 4.5L9 8M4.5 19.5l5-4m10-11L15 8m4.5 11.5l-5-4"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path></svg:g>`,
})
export class IconoirDroneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDroneChargeFullIcon],svg[iconoir-drone-charge-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m14.25 14.75l.25-2.25l.426-3.834A.6.6 0 0 0 14.33 8H9.67a.6.6 0 0 0-.596.666l.867 7.8a.6.6 0 0 0 .596.534H11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5L9 8M4.5 19.5l5-4m10-11L15 8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 19v2m-8-2v2m2-2v2m2-2v2"></svg:path><svg:path d="M13 22.4v-4.8a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-6.8a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirDroneChargeFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDroneChargeHalfIcon],svg[iconoir-drone-charge-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m14.25 14.75l.25-2.25l.426-3.834A.6.6 0 0 0 14.33 8H9.67a.6.6 0 0 0-.596.666l.867 7.8a.6.6 0 0 0 .596.534H11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5L9 8M4.5 19.5l5-4m10-11L15 8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 19v2m-8-2v2m2-2v2"></svg:path><svg:path d="M13 22.4v-4.8a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-6.8a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirDroneChargeHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDroneChargeLowIcon],svg[iconoir-drone-charge-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="m14.25 14.75l.25-2.25l.426-3.834A.6.6 0 0 0 14.33 8H9.67a.6.6 0 0 0-.596.666l.867 7.8a.6.6 0 0 0 .596.534H11"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5L9 8M4.5 19.5l5-4m10-11L15 8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M23 19v2m-8-2v2"></svg:path><svg:path d="M13 22.4v-4.8a.6.6 0 0 1 .6-.6h6.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-6.8a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirDroneChargeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDroneCheckIcon],svg[iconoir-drone-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.463 17h-2.926a.6.6 0 0 1-.596-.534l-.867-7.8A.6.6 0 0 1 9.67 8h4.66a.6.6 0 0 1 .596.666l-.867 7.8a.6.6 0 0 1-.596.534Z"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="M4.5 4.5L9 8M4.5 19.5l5-4m10-11L15 8m-.5 7.5l1.25 1"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="m16 20l2 2l4-4"></svg:path></svg:g>`,
})
export class IconoirDroneCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDroneLandingIcon],svg[iconoir-drone-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.463 17h-2.926a.6.6 0 0 1-.596-.534l-.867-7.8A.6.6 0 0 1 9.67 8h4.66a.6.6 0 0 1 .596.666l-.867 7.8a.6.6 0 0 1-.596.534Z"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="M4.5 4.5L9 8M4.5 19.5l5-4m10-11L15 8m-.5 7.5l1.25 1"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="M19.5 16v6m0 0L17 19.5m2.5 2.5l2.5-2.5"></svg:path></svg:g>`,
})
export class IconoirDroneLandingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDroneRefreshIcon],svg[iconoir-drone-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m14.5 12.5l.426-3.834A.6.6 0 0 0 14.33 8H9.67a.6.6 0 0 0-.596.666l.867 7.8a.6.6 0 0 0 .596.534H11"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="M4.5 4.5L9 8M4.5 19.5l5-4m10-11L15 8"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="M21.666 16.667C21.048 15.097 19.634 14 17.99 14c-1.758 0-3.252 1.255-3.793 3"></svg:path><svg:path stroke-linejoin="round" d="M19.995 16.772H21.4a.6.6 0 0 0 .6-.6V14.55m-7.666 4.783C14.952 20.903 16.366 22 18.01 22c1.758 0 3.252-1.255 3.793-3"></svg:path><svg:path stroke-linejoin="round" d="M16.005 19.228H14.6a.6.6 0 0 0-.6.6v1.622"></svg:path></svg:g>`,
})
export class IconoirDroneRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDroneTakeOffIcon],svg[iconoir-drone-take-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.463 17h-2.926a.6.6 0 0 1-.596-.534l-.867-7.8A.6.6 0 0 1 9.67 8h4.66a.6.6 0 0 1 .596.666l-.867 7.8a.6.6 0 0 1-.596.534Z"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="M4.5 4.5L9 8M4.5 19.5l5-4m10-11L15 8m-.5 7.5l1.25 1"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="M19.5 22v-6m0 0L17 18.5m2.5-2.5l2.5 2.5"></svg:path></svg:g>`,
})
export class IconoirDroneTakeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDroneXmarkIcon],svg[iconoir-drone-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M13.463 17h-2.926a.6.6 0 0 1-.596-.534l-.867-7.8A.6.6 0 0 1 9.67 8h4.66a.6.6 0 0 1 .596.666l-.867 7.8a.6.6 0 0 1-.596.534Z"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 7a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="M4.5 4.5L9 8M4.5 19.5l5-4m10-11L15 8m-.5 7.5l1.25 1"></svg:path><svg:path stroke-linejoin="round" stroke-miterlimit="1.5" d="M4.5 22a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m15-15a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path><svg:path stroke-linejoin="round" d="m18 22.243l2.121-2.122m0 0L22.243 18m-2.122 2.121L18 18m2.121 2.121l2.122 2.122"></svg:path></svg:g>`,
})
export class IconoirDroneXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDropletIcon],svg[iconoir-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M20 14c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z"></svg:path>`,
})
export class IconoirDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDropletCheckIcon],svg[iconoir-droplet-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 21.57A8.132 8.132 0 0 1 6.25 7.75l5.326-5.326a.6.6 0 0 1 .848 0L17.75 7.75A8.13 8.13 0 0 1 19.74 16M16 20l2 2l4-4"></svg:path>`,
})
export class IconoirDropletCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDropletHalfIcon],svg[iconoir-droplet-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m4.5 16.5l14-6.5m1.5 4c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z"></svg:path>`,
})
export class IconoirDropletHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDropletSnowFlakeInIcon],svg[iconoir-droplet-snow-flake-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 14c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 10v3.5m0 3.5v-3.5m0 0l-3-1.75m3 1.75l3 1.75m-3-1.75l3-1.75m-3 1.75l-3 1.75"></svg:path></svg:g>`,
})
export class IconoirDropletSnowFlakeInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDropletSnowFlakeInSolidIcon],svg[iconoir-droplet-snow-flake-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m12 2l-.516-.544zm.517-.544l.001.002l.005.004l.018.018l.07.067l.26.254a53 53 0 0 1 3.71 4.068c1.014 1.24 2.043 2.64 2.823 4.024c.768 1.364 1.346 2.805 1.346 4.107a8.75 8.75 0 1 1-17.5 0c0-1.302.578-2.743 1.346-4.107c.78-1.384 1.81-2.783 2.823-4.024a53 53 0 0 1 3.97-4.322l.07-.067l.018-.018l.007-.006l.516-.49zM12 2l.517-.544zm.75 8a.75.75 0 0 0-1.5 0v2.194l-1.872-1.092a.75.75 0 1 0-.756 1.296l1.89 1.102l-1.89 1.102a.75.75 0 1 0 .756 1.296l1.872-1.092V17a.75.75 0 0 0 1.5 0v-2.194l1.872 1.092a.75.75 0 0 0 .756-1.296l-1.89-1.102l1.89-1.102a.75.75 0 1 0-.756-1.296l-1.872 1.092z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirDropletSnowFlakeInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirDropletSolidIcon],svg[iconoir-droplet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="M20 14c0-4.418-8-12-8-12S4 9.582 4 14a8 8 0 1 0 16 0Z"></svg:path>`,
})
export class IconoirDropletSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEaseCurveControlPointsIcon],svg[iconoir-ease-curve-control-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 0h-2M7 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0h2m5 0h-2m0 16h-2m-7 0c8 0 10-16 18-16"></svg:path>`,
})
export class IconoirEaseCurveControlPointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEaseInIcon],svg[iconoir-ease-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20c8 0 18-16 18-16"></svg:path>`,
})
export class IconoirEaseInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEaseInControlPointIcon],svg[iconoir-ease-in-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20c8 0 18-16 18-16m-4 16a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 0h-2m-3 0h-2"></svg:path>`,
})
export class IconoirEaseInControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEaseInOutIcon],svg[iconoir-ease-in-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20c8 0 10-16 18-16"></svg:path>`,
})
export class IconoirEaseInOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEaseOutIcon],svg[iconoir-ease-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20S13 4 21 4"></svg:path>`,
})
export class IconoirEaseOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEaseOutControlPointIcon],svg[iconoir-ease-out-control-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20S13 4 21 4M7 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 0h2m5 0h-2"></svg:path>`,
})
export class IconoirEaseOutControlPointIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEcologyBookIcon],svg[iconoir-ecology-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></svg:path><svg:path stroke-linejoin="round" d="M10 14s.9-3.118 3-5"></svg:path><svg:path stroke-linejoin="round" d="m12.802 12.425l-.134.012a3.094 3.094 0 0 1-3.366-2.774a3.06 3.06 0 0 1 2.761-3.35l2.986-.28a.35.35 0 0 1 .381.314l.255 2.58a3.194 3.194 0 0 1-2.883 3.498"></svg:path><svg:path d="M6 17h14M6 21h14"></svg:path><svg:path stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"></svg:path></svg:g>`,
})
export class IconoirEcologyBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEditIcon],svg[iconoir-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 21h18M12.222 5.828L15.05 3L20 7.95l-2.828 2.828m-4.95-4.95l-5.607 5.607a1 1 0 0 0-.293.707v4.536h4.536a1 1 0 0 0 .707-.293l5.607-5.607m-4.95-4.95l4.95 4.95"></svg:path>`,
})
export class IconoirEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEditPencilIcon],svg[iconoir-edit-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14.363 5.652l1.48-1.48a2 2 0 0 1 2.829 0l1.414 1.414a2 2 0 0 1 0 2.828l-1.48 1.48m-4.243-4.242l-9.616 9.615a2 2 0 0 0-.578 1.238l-.242 2.74a1 1 0 0 0 1.084 1.085l2.74-.242a2 2 0 0 0 1.24-.578l9.615-9.616m-4.243-4.242l4.243 4.242"></svg:path>`,
})
export class IconoirEditPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEggIcon],svg[iconoir-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22a8 8 0 0 0 8-8c0-4.418-3.582-12-8-12S4 9.582 4 14a8 8 0 0 0 8 8"></svg:path>`,
})
export class IconoirEggIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEjectIcon],svg[iconoir-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 14l-.592-.46A.75.75 0 0 0 5 14.75zm14 0v.75a.75.75 0 0 0 .592-1.21zm-14 .75h14v-1.5H5zm5.619-9.196L4.408 13.54l1.184.92l6.21-7.985zm8.973 7.986l-6.21-7.986l-1.185.921l6.211 7.986zm-7.79-7.065a.25.25 0 0 1 .395 0l1.184-.92a1.75 1.75 0 0 0-2.762 0zM5 17.25a.75.75 0 0 0 0 1.5zm14 1.5a.75.75 0 0 0 0-1.5zm-14 0h14v-1.5H5z"></svg:path>`,
})
export class IconoirEjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirElectronicsChipIcon],svg[iconoir-electronics-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 19.4V4.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6v14.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6m7 .6v2.5M10 20v2.5M14 4V1.5M10 4V1.5M7 12H4.5m15 0H17M7 6.5H4.5m15 0H17m-10 11H4.5m15 0H17"></svg:path>`,
})
export class IconoirElectronicsChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirElectronicsTransistorIcon],svg[iconoir-electronics-transistor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16V3.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6V16M7 16h2m-2 0H5m12 0h-2m2 0h2m-7 0v6m0-6H9m3 0h3m-6 0v6m6-6v6"></svg:path>`,
})
export class IconoirElectronicsTransistorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirElevatorIcon],svg[iconoir-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 3v18m9-17.4v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="m6 12l1.5-2L9 12m6 0l1.5 2l1.5-2"></svg:path></svg:g>`,
})
export class IconoirElevatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEllipse3dIcon],svg[iconoir-ellipse-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M12 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M12 22c4.418 0 8-4.477 8-10S16.418 2 12 2S4 6.477 4 12s3.582 10 8 10"></svg:path><svg:path fill="currentColor" d="M12 23a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirEllipse3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEllipse3dThreePointsIcon],svg[iconoir-ellipse-3d-three-points-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M5 3a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M5 22h8m-8 0V2"></svg:path><svg:path fill="currentColor" d="M5 23a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path stroke-dasharray="3 3" d="M8 4.193C9.37 2.821 11.108 2 13 2c4.418 0 8 4.477 8 10c0 3.271-1.256 6.176-3.2 8"></svg:path><svg:path d="M8.2 20A9 9 0 0 1 7 18.615"></svg:path><svg:path fill="currentColor" d="M13 23a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirEllipse3dThreePointsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiIcon],svg[iconoir-emoji-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M16.5 14.5s-1.5 2-4.5 2s-4.5-2-4.5-2"></svg:path><svg:path fill="currentColor" d="M15.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiBallIcon],svg[iconoir-emoji-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 9H8m8 0h-2m4 6H6m-4-3c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path>`,
})
export class IconoirEmojiBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiBlinkLeftIcon],svg[iconoir-emoji-blink-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 9H8m-6 3c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path><svg:path d="M16.5 14.5s-1.5 2-4.5 2s-4.5-2-4.5-2"></svg:path><svg:path fill="currentColor" d="M15.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiBlinkLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiBlinkRightIcon],svg[iconoir-emoji-blink-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path d="M14 9h2m6 3c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M7.5 14.5s1.5 2 4.5 2s4.5-2 4.5-2"></svg:path></svg:g>`,
})
export class IconoirEmojiBlinkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiLookDownIcon],svg[iconoir-emoji-look-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M8.5 14a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path d="M10 18h4m8-6c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class IconoirEmojiLookDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiLookLeftIcon],svg[iconoir-emoji-look-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path d="M2.458 15A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10c-4.478 0-8.268-2.943-9.542-7m0 0H7"></svg:path></svg:g>`,
})
export class IconoirEmojiLookLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiLookRightIcon],svg[iconoir-emoji-look-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M15.5 9a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="M21.542 15A10 10 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c4.478 0 8.268-2.943 9.542-7m0 0H17"></svg:path></svg:g>`,
})
export class IconoirEmojiLookRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiLookUpIcon],svg[iconoir-emoji-look-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M8.5 7a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path d="M10 11h4m8 1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path></svg:g>`,
})
export class IconoirEmojiLookUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiPuzzledIcon],svg[iconoir-emoji-puzzled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path d="M11.5 15.5s1.5-2 4.5-2s4.5 2 4.5 2M3 4c0-2.754 4-2.754 4 0c0 1.967-2 1.64-2 4m0 3.01l.01-.011"></svg:path><svg:path fill="currentColor" d="M17.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiPuzzledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiQuiteIcon],svg[iconoir-emoji-quite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 15h6m7-3c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiQuiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiReallyIcon],svg[iconoir-emoji-really-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 9H8m8 0h-2m1 6H9m-7-3c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path>`,
})
export class IconoirEmojiReallyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiSadIcon],svg[iconoir-emoji-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M7.5 15.5s1.5-2 4.5-2s4.5 2 4.5 2"></svg:path></svg:g>`,
})
export class IconoirEmojiSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiSatisfiedIcon],svg[iconoir-emoji-satisfied-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 9H8m8 0h-2M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path><svg:path d="M16.5 14.5s-1.5 2-4.5 2s-4.5-2-4.5-2"></svg:path></svg:g>`,
})
export class IconoirEmojiSatisfiedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiSingLeftIcon],svg[iconoir-emoji-sing-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiSingLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiSingLeftNoteIcon],svg[iconoir-emoji-sing-left-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path fill="currentColor" d="M2.8 8.1a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M2.8 8.1a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.05 13c.501 5.053 4.765 9 9.95 9c5.523 0 10-4.477 10-10S17.523 2 12 2a10 10 0 0 0-4 .832"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.5 9a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-7 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiSingLeftNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiSingRightIcon],svg[iconoir-emoji-sing-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="iconoirEmojiSingRight0" fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:use href="#iconoirEmojiSingRight0"></svg:use><svg:use href="#iconoirEmojiSingRight0"></svg:use></svg:g>`,
})
export class IconoirEmojiSingRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiSingRightNoteIcon],svg[iconoir-emoji-sing-right-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path fill="currentColor" d="M20.8 8.1a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M20.8 8.1a.9.9 0 1 1-1.8 0a.9.9 0 0 1 1.8 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H23"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.95 13c-.501 5.053-4.765 9-9.95 9c-5.523 0-10-4.477-10-10S6.477 2 12 2a10 10 0 0 1 4 .832"></svg:path><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiSingRightNoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiSurpriseIcon],svg[iconoir-emoji-surprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m3.5 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m3.5-8a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiSurpriseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiSurpriseAltIcon],svg[iconoir-emoji-surprise-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 17a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiSurpriseAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiTalkingAngryIcon],svg[iconoir-emoji-talking-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 9H8m8 0h-2M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m12 6h-4v-3c0-.667.4-2 2-2s2 1.333 2 2z"></svg:path>`,
})
export class IconoirEmojiTalkingAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiTalkingHappyIcon],svg[iconoir-emoji-talking-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 9H8m8 0h-2M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12m12 1h-4v3c0 .667.4 2 2 2s2-1.333 2-2z"></svg:path>`,
})
export class IconoirEmojiTalkingHappyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiThinkLeftIcon],svg[iconoir-emoji-think-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 15H7m-5-3c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiThinkLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmojiThinkRightIcon],svg[iconoir-emoji-think-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 15h3m5-3c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path fill="currentColor" d="M8.5 9a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m7 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path></svg:g>`,
})
export class IconoirEmojiThinkRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEmptyPageIcon],svg[iconoir-empty-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 21.4V2.6a.6.6 0 0 1 .6-.6h11.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 20 5.75V21.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6"></svg:path><svg:path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></svg:path></svg:g>`,
})
export class IconoirEmptyPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEnergyUsageWindowIcon],svg[iconoir-energy-usage-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 19V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M11.667 11L10 14h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirEnergyUsageWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEnlargeIcon],svg[iconoir-enlarge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m15 9l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4"></svg:path>`,
})
export class IconoirEnlargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEraseIcon],svg[iconoir-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21H9m6.889-6.11L8.464 7.463m-5.571 5.144l9.193-9.193a2 2 0 0 1 2.828 0l4.95 4.95a2 2 0 0 1 0 2.828l-9.243 9.243a1.93 1.93 0 0 1-2.728 0l-5-5a2 2 0 0 1 0-2.828"></svg:path>`,
})
export class IconoirEraseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEraseSolidIcon],svg[iconoir-erase-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 21H9"></svg:path><svg:path fill="currentColor" d="m14.914 3.414l4.95 4.95a2 2 0 0 1 0 2.828l-9.243 9.243a1.93 1.93 0 0 1-2.728 0l-5-5a2 2 0 0 1 0-2.828L7 8.5l4.75 4.75a1.768 1.768 0 1 0 2.5-2.5L9.5 6l2.586-2.586a2 2 0 0 1 2.828 0"></svg:path></svg:g>`,
})
export class IconoirEraseSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEthereumCircleIcon],svg[iconoir-ethereum-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m7 12l5 7l5-7M7 12l5-7m-5 7l5 1m0-8l5 7m-5-7v8m5-1l-5 1"></svg:path><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class IconoirEthereumCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEthereumCircleSolidIcon],svg[iconoir-ethereum-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m.61 3.314a.75.75 0 0 0-1.22 0l-5 7a.75.75 0 0 0 0 .872l5 7a.75.75 0 0 0 1.22 0l5-7a.75.75 0 0 0 0-.872zM12 17.71l-3.287-4.603l3.14.628q.147.03.294 0l3.14-.628zm.75-5.625l2.966-.593L12.75 7.34zm-1.5 0V7.34l-2.966 4.152z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirEthereumCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEthereumRotateOutIcon],svg[iconoir-ethereum-rotate-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.168 8A10 10 0 0 0 12 2c-5.185 0-9.45 3.947-9.95 9"></svg:path><svg:path d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6c5.186 0 9.45-3.947 9.951-9"></svg:path><svg:path d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20M7 12l5 7l5-7M7 12l5-7m-5 7l5 1m0-8l5 7m-5-7v8m5-1l-5 1"></svg:path></svg:g>`,
})
export class IconoirEthereumRotateOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEuroIcon],svg[iconoir-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.5 4.804a8 8 0 1 0 0 14.392M5 10h11M5 14h11"></svg:path>`,
})
export class IconoirEuroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEuroSquareIcon],svg[iconoir-euro-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 7.503A4.75 4.75 0 0 0 13.87 7C11.18 7 9 9.239 9 12s2.18 5 4.87 5a4.7 4.7 0 0 0 2.13-.503M8 11h6m-6 2h6"></svg:path></svg:g>`,
})
export class IconoirEuroSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEuroSquareSolidIcon],svg[iconoir-euro-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm10.27 4c-2.52 0-4.633 1.689-5.354 4H8a.75.75 0 0 0 0 1.5h.255a6 6 0 0 0 0 .5H8a.75.75 0 0 0 0 1.5h.516c.721 2.311 2.834 4 5.354 4c.883 0 1.72-.21 2.466-.582a.75.75 0 0 0-.671-1.341a4 4 0 0 1-1.795.423c-1.66 0-3.107-1.02-3.756-2.5H14a.75.75 0 0 0 0-1.5H9.757a5 5 0 0 1 0-.5H14a.75.75 0 0 0 0-1.5h-3.886c.649-1.48 2.096-2.5 3.756-2.5c.644 0 1.252.152 1.794.423a.75.75 0 1 0 .672-1.341a5.5 5.5 0 0 0-2.466-.582" clip-rule="evenodd"></svg:path>`,
})
export class IconoirEuroSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEvChargeIcon],svg[iconoir-ev-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M6 9v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5M9 5.6V7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6ZM4 5V3m4 2V3"></svg:path><svg:path stroke-linejoin="round" d="M18.167 4L16.5 7h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirEvChargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEvChargeAltIcon],svg[iconoir-ev-charge-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m22 5l-2 4l-2-4m-2 0h-2v4h2m-2-2h1.5"></svg:path><svg:path d="M6 9v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5M9 5.6V7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6ZM4 5V3m4 2V3"></svg:path></svg:g>`,
})
export class IconoirEvChargeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEvPlugIcon],svg[iconoir-ev-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 13.154V21m5-12.615v2.769a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-2.77a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Zm-1.667-2V3M8.667 6.385V3"></svg:path>`,
})
export class IconoirEvPlugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEvPlugChargingIcon],svg[iconoir-ev-plug-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 13.154V21m5-12.615v2.769a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2.77a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Zm-1.667-2V3M6.667 6.385V3"></svg:path><svg:path stroke-linejoin="round" d="M16.667 16L15 19h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirEvPlugChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEvPlugXmarkIcon],svg[iconoir-ev-plug-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10 13.154V21m5-12.615v2.769a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2.77a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2Zm-1.667-2V3M6.667 6.385V3"></svg:path><svg:path stroke-linejoin="round" d="m15.121 21.364l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L15.12 17.12m2.122 2.122l2.121 2.121"></svg:path></svg:g>`,
})
export class IconoirEvPlugXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEvStationIcon],svg[iconoir-ev-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 5v4"></svg:path><svg:path d="M5 19V9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M5 10V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.167 11L9.5 14h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirEvStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEvTagIcon],svg[iconoir-ev-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18.5 9l-3 6l-3-6M10 9H6v6h4m-4-3h3"></svg:path><svg:path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path></svg:g>`,
})
export class IconoirEvTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirExcludeIcon],svg[iconoir-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.5 15h-.9a.6.6 0 0 0-.6.6v4.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6V9.6a.6.6 0 0 0-.6-.6h-4.8a.6.6 0 0 0-.6.6v.9"></svg:path><svg:path d="M13.5 15h.9a.6.6 0 0 0 .6-.6v-.9m-6 0v.9a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-.9"></svg:path><svg:path d="M9 10.5v-.9a.6.6 0 0 1 .6-.6h.9"></svg:path></svg:g>`,
})
export class IconoirExcludeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirExpandIcon],svg[iconoir-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 9L4 4m0 0v4m0-4h4m7 5l5-5m0 0v4m0-4h-4M9 15l-5 5m0 0v-4m0 4h4m7-5l5 5m0 0v-4m0 4h-4"></svg:path>`,
})
export class IconoirExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirExpandLinesIcon],svg[iconoir-expand-lines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 2H6m12 20H6m6-8v5m0 0l3-3m-3 3l-3-3m3-6V5m0 0l3 3m-3-3L9 8"></svg:path>`,
})
export class IconoirExpandLinesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirExtrudeIcon],svg[iconoir-extrude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 12.353v4.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647v-4.294a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524"></svg:path><svg:path d="m3.528 12.294l8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21.5V17m0-5V2m0 0l2.5 2.5M12 2L9.5 4.5"></svg:path></svg:g>`,
})
export class IconoirExtrudeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEyeIcon],svg[iconoir-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 13c3.6-8 14.4-8 18 0"></svg:path><svg:path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path></svg:g>`,
})
export class IconoirEyeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEyeClosedIcon],svg[iconoir-eye-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19.5 16l-2.475-3.396M12 17.5V14m-7.5 2l2.469-3.388M3 8c3.6 8 14.4 8 18 0"></svg:path>`,
})
export class IconoirEyeClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEyeEmptyIcon],svg[iconoir-eye-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></svg:path><svg:path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6Z"></svg:path></svg:g>`,
})
export class IconoirEyeEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEyeOffIcon],svg[iconoir-eye-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m3 3l18 18M10.5 10.677a2 2 0 0 0 2.823 2.823"></svg:path><svg:path d="M7.362 7.561C5.68 8.74 4.279 10.42 3 12c1.889 2.991 5.282 6 9 6c1.55 0 3.043-.523 4.395-1.35M12 6c4.008 0 6.701 3.158 9 6a15.66 15.66 0 0 1-1.078 1.5"></svg:path></svg:g>`,
})
export class IconoirEyeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirEyeSolidIcon],svg[iconoir-eye-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 13c3.6-8 14.4-8 18 0"></svg:path><svg:path fill="currentColor" d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path></svg:g>`,
})
export class IconoirEyeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFSquareIcon],svg[iconoir-f-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M10 16V8h4m-4 4h4"></svg:path></svg:g>`,
})
export class IconoirFSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFace3dDraftIcon],svg[iconoir-face-3d-draft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 7.78v7.796a.6.6 0 0 1-.27.502l-6.616 4.347a.6.6 0 0 1-.249.093l-10.184 1.39A.6.6 0 0 1 2 21.312v-12.3a.6.6 0 0 1 .298-.519l10.789-6.28a.6.6 0 0 1 .688.058l6.01 5.05A.6.6 0 0 1 20 7.78"></svg:path><svg:path d="m2.5 9l10.227 2.922a.6.6 0 0 0 .506-.084L19.5 7.5m-6.5 13V12m3.5 2.01l.01-.011M22 17.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirFace3dDraftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFaceIdIcon],svg[iconoir-face-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 3H5a2 2 0 0 0-2 2v2m14-4h2a2 2 0 0 1 2 2v2m-5 1v2M8 8v2m1 6s1 1 3 1s3-1 3-1m-3-8v5h-1m-4 8H5a2 2 0 0 1-2-2v-2m14 4h2a2 2 0 0 0 2-2v-2"></svg:path>`,
})
export class IconoirFaceIdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFacebookIcon],svg[iconoir-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></svg:path>`,
})
export class IconoirFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFacebookTagIcon],svg[iconoir-facebook-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></svg:path><svg:path d="M11 21v-9c0-2.187.5-4 4-4m-6 5h6"></svg:path></svg:g>`,
})
export class IconoirFacebookTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFacetimeIcon],svg[iconoir-facetime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 16V8a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path><svg:path d="M6 13v-2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17.04 9.22l-3.067 2.3a.6.6 0 0 0 0 .96l3.067 2.3a.6.6 0 0 0 .96-.48V9.7a.6.6 0 0 0-.96-.48"></svg:path></svg:g>`,
})
export class IconoirFacetimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFacetimeSolidIcon],svg[iconoir-facetime-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 8A6.75 6.75 0 0 1 8 1.25h8A6.75 6.75 0 0 1 22.75 8v8A6.75 6.75 0 0 1 16 22.75H8A6.75 6.75 0 0 1 1.25 16zm4 3A2.75 2.75 0 0 1 8 8.25h3a2.75 2.75 0 0 1 2.74 2.508l2.85-2.138c.89-.667 2.16-.032 2.16 1.08v4.6c0 1.112-1.27 1.748-2.16 1.08l-2.85-2.138A2.75 2.75 0 0 1 11 15.75H8A2.75 2.75 0 0 1 5.25 13z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFacetimeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFarmIcon],svg[iconoir-farm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 20H2V8l6-3l6 3v12h-3m-6 0v-7h6v7m-6 0h6m7-6v6m-4-3h8m-8-3h8"></svg:path>`,
})
export class IconoirFarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowDownIcon],svg[iconoir-fast-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 13l6 6l6-6M6 5l6 6l6-6"></svg:path>`,
})
export class IconoirFastArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowDownSquareIcon],svg[iconoir-fast-arrow-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 7.5L12 11L8.5 7.5m7 6L12 17l-3.5-3.5"></svg:path></svg:g>`,
})
export class IconoirFastArrowDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowDownSquareSolidIcon],svg[iconoir-fast-arrow-down-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 20.4a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35V3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35zm-9.22-8.87l3.5-3.5a.75.75 0 0 0-1.06-1.06L12 9.94L9.03 6.97a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0m3.5 2.5l-3.5 3.5a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 1 1 1.06-1.06L12 15.94l2.97-2.97a.75.75 0 1 1 1.06 1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFastArrowDownSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowLeftIcon],svg[iconoir-fast-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11 6l-6 6l6 6m8-12l-6 6l6 6"></svg:path>`,
})
export class IconoirFastArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowLeftSquareIcon],svg[iconoir-fast-arrow-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.5L13 12l3.5 3.5m-6-7L7 12l3.5 3.5"></svg:path></svg:g>`,
})
export class IconoirFastArrowLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowLeftSquareSolidIcon],svg[iconoir-fast-arrow-left-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm8.87 9.22l3.5-3.5a.75.75 0 1 1 1.06 1.06L14.06 12l2.97 2.97a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06m-2.5-3.5l-3.5 3.5a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 1 0 1.06-1.06L8.06 12l2.97-2.97a.75.75 0 1 0-1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFastArrowLeftSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowRightIcon],svg[iconoir-fast-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13 6l6 6l-6 6M5 6l6 6l-6 6"></svg:path>`,
})
export class IconoirFastArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowRightSquareIcon],svg[iconoir-fast-arrow-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 8.5l3.5 3.5L8 15.5m6-7l3.5 3.5l-3.5 3.5"></svg:path><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirFastArrowRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowRightSquareSolidIcon],svg[iconoir-fast-arrow-right-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.4 2.25c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35V3.6c0-.746.604-1.35 1.35-1.35zm-8.37 9.22l-3.5-3.5a.75.75 0 0 0-1.06 1.06L10.44 12l-2.97 2.97a.75.75 0 1 0 1.06 1.06l3.5-3.5a.75.75 0 0 0 0-1.06m2.5-3.5l3.5 3.5a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 1 1-1.06-1.06L16.44 12l-2.97-2.97a.75.75 0 0 1 1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFastArrowRightSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowUpIcon],svg[iconoir-fast-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 11l6-6l6 6M6 19l6-6l6 6"></svg:path>`,
})
export class IconoirFastArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowUpSquareIcon],svg[iconoir-fast-arrow-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15.5 16.5L12 13l-3.5 3.5m7-6L12 7l-3.5 3.5"></svg:path><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirFastArrowUpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastArrowUpSquareSolidIcon],svg[iconoir-fast-arrow-up-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21.75 3.6a1.35 1.35 0 0 0-1.35-1.35H3.6A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35zm-9.22 8.87l3.5 3.5a.75.75 0 1 1-1.06 1.06L12 14.06l-2.97 2.97a.75.75 0 0 1-1.06-1.06l3.5-3.5a.75.75 0 0 1 1.06 0m3.5-2.5l-3.5-3.5a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 1 0 1.06 1.06L12 8.06l2.97 2.97a.75.75 0 1 0 1.06-1.06" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFastArrowUpSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastDownCircleIcon],svg[iconoir-fast-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.5 7.5L12 11l3.5-3.5m-7 6L12 17l3.5-3.5"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirFastDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastLeftCircleIcon],svg[iconoir-fast-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M16.5 8.5L13 12l3.5 3.5m-6-7L7 12l3.5 3.5"></svg:path></svg:g>`,
})
export class IconoirFastLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastRightCircleIcon],svg[iconoir-fast-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m8 8.5l3.5 3.5L8 15.5m6-7l3.5 3.5l-3.5 3.5"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirFastRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFastUpCircleIcon],svg[iconoir-fast-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.5 16.5L12 13l3.5 3.5m-7-6L12 7l3.5 3.5"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirFastUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFavouriteBookIcon],svg[iconoir-favourite-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114"></svg:path><svg:path stroke-linejoin="round" d="M16 8.78a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.822-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214a2.277 2.277 0 0 1 3.232 0L12 7.28l.106-.107A2.276 2.276 0 0 1 16 8.78Z"></svg:path><svg:path stroke-linecap="round" d="M6 17h14M6 21h14"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"></svg:path></svg:g>`,
})
export class IconoirFavouriteBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFavouriteWindowIcon],svg[iconoir-favourite-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M13 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></svg:path><svg:path stroke-linejoin="round" d="M22 17.28a2.28 2.28 0 0 1-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 0 1-.823-.017l-2.918-2.94a2.28 2.28 0 0 1 0-3.214a2.277 2.277 0 0 1 3.233 0l.106.107l.106-.107A2.277 2.277 0 0 1 22 17.28Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirFavouriteWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFemaleIcon],svg[iconoir-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0 0v4m0 2v-2m0 0h-2m2 0h2"></svg:path>`,
})
export class IconoirFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFigmaIcon],svg[iconoir-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3m6-3h3a3 3 0 0 1 0 6h-3z"></svg:path><svg:path d="M12 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m-6 6a3 3 0 0 1 3-3h3v3a3 3 0 0 1-6 0m0-6a3 3 0 0 1 3-3h3v6H9a3 3 0 0 1-3-3"></svg:path></svg:g>`,
})
export class IconoirFigmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFileNotFoundIcon],svg[iconoir-file-not-found-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4.01l.01-.011M9 3H4v3m0 5v2m16-2v2M15 3h5v3M9 21H4v-3m11 3h5v-3"></svg:path>`,
})
export class IconoirFileNotFoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFillColorIcon],svg[iconoir-fill-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m2.636 10.293l7.071-7.071l8.485 8.485l-7.07 7.071a2 2 0 0 1-2.83 0l-5.656-5.657a2 2 0 0 1 0-2.828m5.657-8.485l1.414 1.414"></svg:path><svg:path stroke-miterlimit="1.5" d="M20 15s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C17.01 17.992 20 15 20 15" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirFillColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFillColorSolidIcon],svg[iconoir-fill-color-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="m2.636 10.293l7.071-7.071l8.485 8.485l-7.07 7.071a2 2 0 0 1-2.83 0l-5.656-5.657a2 2 0 0 1 0-2.828"></svg:path><svg:path d="m8.293 1.808l1.414 1.414"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" stroke-miterlimit="1.5" d="M20 15s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C17.01 17.992 20 15 20 15" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirFillColorSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFillet3dIcon],svg[iconoir-fillet-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 20v-4C2 8.268 8.268 2 16 2h4m.839 18.84h-3.536m3.536 0v-3.536m0 3.535L18 18"></svg:path><svg:path stroke-dasharray="2 3" d="m9 9l7 7"></svg:path></svg:g>`,
})
export class IconoirFillet3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFilterIcon],svg[iconoir-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 3h16a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707v6.305a1 1 0 0 1-1.243.97l-2-.5a1 1 0 0 1-.757-.97v-5.805a1 1 0 0 0-.293-.707L3.293 6.293A1 1 0 0 1 3 5.586V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class IconoirFilterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFilterAltIcon],svg[iconoir-filter-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3M3 7l6.65 5.7a1 1 0 0 1 .35.76v6.26a1 1 0 0 0 1.242.97l2-.5a1 1 0 0 0 .758-.97v-5.76a1 1 0 0 1 .35-.76L21 7M3 7h18"></svg:path>`,
})
export class IconoirFilterAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFilterListIcon],svg[iconoir-filter-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M7 12h10m-6 6h2"></svg:path>`,
})
export class IconoirFilterListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFilterListCircleIcon],svg[iconoir-filter-list-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 9h12M8 13h8m-6 4h4m-2 5C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path>`,
})
export class IconoirFilterListCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFilterListCircleSolidIcon],svg[iconoir-filter-list-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75S1.25 17.937 1.25 12S6.063 1.25 12 1.25m-6 7a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5zM7.25 13a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 16.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFilterListCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFilterSolidIcon],svg[iconoir-filter-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 3h16a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707v6.305a1 1 0 0 1-1.242.97l-2-.5a1 1 0 0 1-.758-.97v-5.805a1 1 0 0 0-.293-.707L3.293 6.293A1 1 0 0 1 3 5.586V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class IconoirFilterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFinderIcon],svg[iconoir-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 15V9a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6"></svg:path><svg:path d="M15 3s-4.5 0-4.5 9H13c0 9 2 9 2 9"></svg:path><svg:path d="M16.5 14.5s-1.5 2-4.5 2s-4.5-2-4.5-2M7 9v2m10-2v2"></svg:path></svg:g>`,
})
export class IconoirFinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFingerprintIcon],svg[iconoir-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 3.516A9.004 9.004 0 0 1 20.648 8.5M21 22v-8M3 22V11c0-1.052.18-2.062.512-3"></svg:path><svg:path d="M18 22V11.3C18 7.82 15.314 5 12 5s-6 2.82-6 6.3V14m0 8v-4"></svg:path><svg:path d="M9 22V11.15C9 9.41 10.343 8 12 8c.865 0 1.645.385 2.193 1M15 22v-8m-3 8v-3.5m0-7.5v3"></svg:path></svg:g>`,
})
export class IconoirFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFingerprintCheckCircleIcon],svg[iconoir-fingerprint-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 16v-4.639c0-.51.1-.999.285-1.453M17 16v-3.185m-7.778-5.08A5.5 5.5 0 0 1 12 7c2.28 0 4.203 1.33 4.805 3.15M10 17v-2.177M14 17v-5.147C14 10.83 13.105 10 12 10s-2 .83-2 1.853v.794"></svg:path><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-.458 3M15.5 20.5l2 2l5-5"></svg:path></svg:g>`,
})
export class IconoirFingerprintCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFingerprintCircleIcon],svg[iconoir-fingerprint-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 16v-4.639c0-.51.1-.999.285-1.453M17 16v-3.185m-7.778-5.08A5.5 5.5 0 0 1 12 7c2.28 0 4.203 1.33 4.805 3.15M10 17v-2.177M14 17v-5.147C14 10.83 13.105 10 12 10s-2 .83-2 1.853v.794"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirFingerprintCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFingerprintLockCircleIcon],svg[iconoir-fingerprint-lock-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 16v-4.639c0-.51.1-.999.285-1.453M17 13.5v-.685m-7.778-5.08A5.5 5.5 0 0 1 12 7c2.28 0 4.203 1.33 4.805 3.15M10 17v-2.177M14 17v-5.147C14 10.83 13.105 10 12 10s-2 .83-2 1.853v.794"></svg:path><svg:path d="M14 21.8q-.97.198-2 .2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q0 .381-.028.755"></svg:path><svg:path d="M21.167 18.5h.233a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6h-3.8a.6.6 0 0 1-.6-.6v-2.3a.6.6 0 0 1 .6-.6h.233m3.334 0v-1.75c0-.583-.334-1.75-1.667-1.75s-1.667 1.167-1.667 1.75v1.75m3.334 0h-3.334"></svg:path></svg:g>`,
})
export class IconoirFingerprintLockCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFingerprintScanIcon],svg[iconoir-fingerprint-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16v-4.639c0-.51.1-.999.285-1.453M17 16v-3.185m-7.778-5.08A5.5 5.5 0 0 1 12 7c2.28 0 4.203 1.33 4.805 3.15M10 17v-2.177M14 17v-5.147C14 10.83 13.105 10 12 10s-2 .83-2 1.853v.794M6 3H3v3m15-3h3v3M6 21H3v-3m15 3h3v-3"></svg:path>`,
})
export class IconoirFingerprintScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFingerprintSquareIcon],svg[iconoir-fingerprint-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 16v-4.639c0-.51.1-.999.285-1.453M17 16v-3.185m-7.778-5.08A5.5 5.5 0 0 1 12 7c2.28 0 4.203 1.33 4.805 3.15M10 17v-2.177M14 17v-5.147C14 10.83 13.105 10 12 10s-2 .83-2 1.853v.794"></svg:path><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path></svg:g>`,
})
export class IconoirFingerprintSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFingerprintWindowIcon],svg[iconoir-fingerprint-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M9 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6"></svg:path><svg:path stroke-linejoin="round" d="M12 21v-4.639c0-.51.1-.999.284-1.453M22 21v-3.185m-7.778-5.08A5.5 5.5 0 0 1 17 12c2.28 0 4.203 1.33 4.805 3.15M15 22v-2.177M19 22v-5.147C19 15.83 18.105 15 17 15s-2 .83-2 1.853v.794M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirFingerprintWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFingerprintXmarkCircleIcon],svg[iconoir-fingerprint-xmark-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 16v-4.639c0-.51.1-.999.285-1.453M17 14v-1.185m-7.778-5.08A5.5 5.5 0 0 1 12 7c2.28 0 4.203 1.33 4.805 3.15M10 17v-2.177M14 17v-5.147C14 10.83 13.105 10 12 10s-2 .83-2 1.853v.794"></svg:path><svg:path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-.458 3m-4.421 7.364l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L17.12 18.12m2.122 2.122l2.121 2.121"></svg:path></svg:g>`,
})
export class IconoirFingerprintXmarkCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFireFlameIcon],svg[iconoir-fire-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 18c0 2.415 1.79 3 4 3c3.759 0 5-2.5 2.5-7.5C11 18 10.5 11 11 9c-1.5 3-3 5.818-3 9"></svg:path><svg:path d="M12 21c5.05 0 8-2.904 8-7.875C20 8.155 12 3 12 3S4 8.154 4 13.125C4 18.095 6.95 21 12 21"></svg:path></svg:g>`,
})
export class IconoirFireFlameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFishIcon],svg[iconoir-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.5 9s0-2-1-4c4 0 6.5 2.5 6.5 2.5s3.5-.5 6 4.5c-1 5.5-6 6-6 6l-4 2.5v-3c-2.5-1-5-3.5-5-5S10.5 9 10.5 9m0 0s1-.5 2-.5M2 9.5l1 3l-1 3s5 0 5-3s-5-3-5-3m15 2.51l.01-.011"></svg:path>`,
})
export class IconoirFishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFishingIcon],svg[iconoir-fishing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 0v10c0 6-10 6-10 0v-4l2 2"></svg:path>`,
})
export class IconoirFishingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFlareIcon],svg[iconoir-flare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.456 2.665a.6.6 0 0 1 1.088 0l2.864 6.137a.6.6 0 0 0 .29.29l6.137 2.864a.6.6 0 0 1 0 1.088l-6.137 2.864a.6.6 0 0 0-.29.29l-2.864 6.137a.6.6 0 0 1-1.088 0l-2.864-6.137a.6.6 0 0 0-.29-.29l-6.137-2.864a.6.6 0 0 1 0-1.088l6.137-2.864a.6.6 0 0 0 .29-.29z"></svg:path>`,
})
export class IconoirFlareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFlashIcon],svg[iconoir-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L5 14h6v7l8-11z"></svg:path>`,
})
export class IconoirFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFlashOffIcon],svg[iconoir-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.795 8.782L5 14h6v7l4-5.5m2.182-3L19 10h-6V3l-2.182 3M4 4l16 16"></svg:path>`,
})
export class IconoirFlashOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFlashSolidIcon],svg[iconoir-flash-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.232 2.287A.75.75 0 0 1 13.75 3v6.25H19a.75.75 0 0 1 .607 1.191l-8 11a.75.75 0 0 1-1.357-.44v-6.25H5a.75.75 0 0 1-.607-1.192l8-11a.75.75 0 0 1 .839-.272" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFlashSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFlaskIcon],svg[iconoir-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18.5 15h-13"></svg:path><svg:path stroke-linecap="round" d="M16 4H8m1 .5v5.76a2 2 0 0 1-.481 1.302L3.48 17.438A2 2 0 0 0 3 18.74V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-.26a2 2 0 0 0-.482-1.302l-5.036-5.876A2 2 0 0 1 15 10.26V4.5m-3 4.51l.01-.011M11 2.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirFlaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFlaskSolidIcon],svg[iconoir-flask-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path fill-rule="evenodd" d="M7.25 4A.75.75 0 0 1 8 3.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 4" clip-rule="evenodd"></svg:path><svg:path d="M9 3.75a.75.75 0 0 1 .75.75v5.76a2.75 2.75 0 0 1-.662 1.79l-1.884 2.198h9.592l-1.884-2.198a2.75 2.75 0 0 1-.662-1.79V4.5a.75.75 0 0 1 1.5 0v5.76c0 .299.107.587.3.814l5.038 5.876a2.75 2.75 0 0 1 .662 1.79V19A2.75 2.75 0 0 1 19 21.75H5A2.75 2.75 0 0 1 2.25 19v-.26c0-.657.235-1.291.662-1.79l5.037-5.876c.194-.227.301-.515.301-.814V4.5A.75.75 0 0 1 9 3.75"></svg:path><svg:path fill-rule="evenodd" d="M12.512 8.442a.75.75 0 0 1 .056 1.059l-.01.01a.75.75 0 0 1-1.115-1.003l.01-.01a.75.75 0 0 1 1.059-.056m-1-7a.75.75 0 0 1 .056 1.059l-.01.01a.75.75 0 0 1-1.115-1.003l.01-.01a.75.75 0 0 1 1.059-.056" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirFlaskSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFlipIcon],svg[iconoir-flip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 20H2L9.5 4zm10.625 0H22l-.937-2m-4.688 2H14.5v-2m0-6v2m3.75-2l.938 2m-2.813-6L14.5 4v4"></svg:path>`,
})
export class IconoirFlipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFlipReverseIcon],svg[iconoir-flip-reverse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.5 12v2m-3.75-2l-.937 2m2.812 6H9.5v-2m-5.625 2H2l.938-2M7.625 8L9.5 4v4m5 12H22L14.5 4z"></svg:path>`,
})
export class IconoirFlipReverseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFloppyDiskIcon],svg[iconoir-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 19V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 21 7.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></svg:path><svg:path d="M8.6 9h6.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6H8.6a.6.6 0 0 0-.6.6v4.8a.6.6 0 0 0 .6.6ZM6 13.6V21h12v-7.4a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6Z"></svg:path></svg:g>`,
})
export class IconoirFloppyDiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFloppyDiskArrowInIcon],svg[iconoir-floppy-disk-arrow-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 7.5V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 21 7.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2.5M6 21v-4"></svg:path><svg:path d="M18 21v-7.4a.6.6 0 0 0-.6-.6H15m1-10v5.4a.6.6 0 0 1-.6.6h-1.9M8 3v3m-7 6h11m0 0L9 9m3 3l-3 3"></svg:path></svg:g>`,
})
export class IconoirFloppyDiskArrowInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFloppyDiskArrowOutIcon],svg[iconoir-floppy-disk-arrow-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 6.5V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 21 7.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5"></svg:path><svg:path d="M8 3h8v5.4a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6zm10 18v-7.4a.6.6 0 0 0-.6-.6H15m-9 8v-3.5m6-5.5H1m0 0l3-3m-3 3l3 3"></svg:path></svg:g>`,
})
export class IconoirFloppyDiskArrowOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFlowerIcon],svg[iconoir-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5"><svg:path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m1-6s1-2 1-4s-2-4-2-4s-2 2-2 4s1 4 1 4"></svg:path><svg:path d="M9 11s-2-1-4-1s-4 2-4 2s2 2 4 2s4-1 4-1m4 2s1 2 1 4s-2 4-2 4s-2-2-2-4s1-4 1-4m4-4s2-1 4-1s4 2 4 2s-2 2-4 2s-4-1-4-1m-4.414-3.828S9.879 7.05 8.464 5.636C7.05 4.222 4.222 4.222 4.222 4.222s0 2.828 1.414 4.243c1.414 1.414 3.536 2.121 3.536 2.121m0 2.828s-2.122.707-3.536 2.122c-1.414 1.414-1.414 4.242-1.414 4.242s2.828 0 4.242-1.414s2.122-3.536 2.122-3.536m4.243-1.414s2.12.707 3.535 2.122c1.414 1.414 1.414 4.242 1.414 4.242s-2.828 0-4.242-1.414s-2.122-3.536-2.122-3.536m0-5.656s.707-2.122 2.122-3.536c1.414-1.414 4.242-1.414 4.242-1.414s0 2.828-1.414 4.243c-1.414 1.414-3.536 2.121-3.536 2.121"></svg:path></svg:g>`,
})
export class IconoirFlowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFogIcon],svg[iconoir-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 14h6m-6 8h6m-8-4h10m-13.5-.618C2.188 16.707 1 15.388 1 13c0-4 3.333-5 5-5c0-2 0-6 6-6s6 4 6 6c1.667 0 5 1 5 5c0 2.388-1.188 3.707-2.5 4.382"></svg:path>`,
})
export class IconoirFogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFolderIcon],svg[iconoir-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 11V4.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6V11M2 11v8.4a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V11M2 11h20"></svg:path>`,
})
export class IconoirFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFolderMinusIcon],svg[iconoir-folder-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6h4m-.6 14H2.6a.6.6 0 0 1-.6-.6V11h19.4a.6.6 0 0 1 .6.6v7.8a.6.6 0 0 1-.6.6M2 11V4.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H14"></svg:path>`,
})
export class IconoirFolderMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFolderPlusIcon],svg[iconoir-folder-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6h2m2 0h-2m0 0V4m0 2v2m1.4 12H2.6a.6.6 0 0 1-.6-.6V11h19.4a.6.6 0 0 1 .6.6v7.8a.6.6 0 0 1-.6.6M2 11V4.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H14"></svg:path>`,
})
export class IconoirFolderPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFolderSettingsIcon],svg[iconoir-folder-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.6 4h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6M22 10v4"></svg:path><svg:path d="M2 10v9.4a.6.6 0 0 0 .6.6H13m6 1a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke-dasharray=".3 2" d="M19 22a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirFolderSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFolderWarningIcon],svg[iconoir-folder-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 3v4m0 4.01l.01-.011M22 7v12.4a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6V11"></svg:path><svg:path d="M14 7h-1.278a.6.6 0 0 1-.39-.144L9.169 4.144A.6.6 0 0 0 8.778 4H2.6a.6.6 0 0 0-.6.6V11h12"></svg:path></svg:g>`,
})
export class IconoirFolderWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFontQuestionIcon],svg[iconoir-font-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.469 18.374l1.064-2.341m9.58 2.341l-1.064-2.341m0 0L8.79 6.664l-4.258 9.368m8.516 0H4.533m10.645-7.238c0-3.725 5.854-3.725 5.854 0c0 2.661-2.66 2.13-2.66 5.322m-.001 4.269l.01-.012"></svg:path>`,
})
export class IconoirFontQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFootballIcon],svg[iconoir-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 13.828V21M5 3v10.828h14V3"></svg:path><svg:path d="M13 6.732c1.071-.618 1.434-2.114 1.549-2.833a.505.505 0 0 0-.321-.556c-.68-.26-2.157-.693-3.228-.075C9.93 3.886 9.567 5.38 9.452 6.1a.505.505 0 0 0 .32.556c.681.26 2.158.693 3.228.075"></svg:path></svg:g>`,
})
export class IconoirFootballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFootballBallIcon],svg[iconoir-football-ball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.115 14.015a22.3 22.3 0 0 0-.103 3.665a2.413 2.413 0 0 0 2.309 2.308c1.007.052 2.294.055 3.664-.103m-5.87-5.87C4.394 11.604 5.17 8.93 7.05 7.05s4.554-2.656 6.965-2.935m-9.9 9.9l5.87 5.87m0 0c2.411-.279 5.084-1.055 6.965-2.935c1.88-1.88 2.656-4.554 2.935-6.965m-5.87-5.87a22.3 22.3 0 0 1 3.665-.103a2.413 2.413 0 0 1 2.308 2.309a22.3 22.3 0 0 1-.103 3.664m-5.87-5.87l5.87 5.87M9.172 14.828l1.414-1.414m0 0L9.172 12m1.414 1.414L12 14.828m-1.414-1.414l2.828-2.828m0 0l1.414-1.414m-1.414 1.414L12 9.172m1.414 1.414L14.828 12"></svg:path>`,
})
export class IconoirFootballBallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirForwardIcon],svg[iconoir-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.956 5.704A.6.6 0 0 0 2 6.187v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966zm11 0a.6.6 0 0 0-.956.483v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966z"></svg:path>`,
})
export class IconoirForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirForward15SecondsIcon],svg[iconoir-forward-15-seconds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 13a9 9 0 1 1-9-9m0 0h7.5m0 0l-2-2m2 2l-2 2M9 9v7"></svg:path><svg:path d="M15 9h-2a1 1 0 0 0-1 1v1.5a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1V15a1 1 0 0 1-1 1h-2"></svg:path></svg:g>`,
})
export class IconoirForward15SecondsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirForwardMessageIcon],svg[iconoir-forward-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m7 8l5 3l5-3"></svg:path><svg:path d="M10 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6.857"></svg:path><svg:path stroke-linejoin="round" d="M22 17.111h-6.3c-3.6 0-3.6 4.889 0 4.889m6.3-4.889L18.85 14M22 17.111l-3.15 3.111"></svg:path></svg:g>`,
})
export class IconoirForwardMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirForwardSolidIcon],svg[iconoir-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.956 5.704A.6.6 0 0 0 2 6.187v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966zm11 0a.6.6 0 0 0-.956.483v11.626a.6.6 0 0 0 .956.483l7.889-5.813a.6.6 0 0 0 0-.966z"></svg:path>`,
})
export class IconoirForwardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameIcon],svg[iconoir-frame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5"><svg:path d="M4.998 2.001H2v2.998h2.998zm0 8.501H2V13.5h2.998zM20.498 5v5.503M3.5 5v5.503m16.998 2.999v5.502M3.5 13.502v5.502m1.499 1.498h5.5"></svg:path><svg:path stroke-width="1.22" d="M4.999 3.503h5.5"></svg:path><svg:path d="M13.498 20.499h5.5"></svg:path><svg:path stroke-width="1.22" d="M13.498 3.501h5.5"></svg:path><svg:path d="M4.998 19.001H2v2.998h2.998zM21.997 2.002H19V5h2.998zM13.497 2H10.5v2.998h2.998zm8.5 8.503H19V13.5h2.998zm0 8.499H19V22h2.998zm-8.5-.002H10.5v2.998h2.998z"></svg:path></svg:g>`,
})
export class IconoirFrameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameAltIcon],svg[iconoir-frame-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6 3v18M18 3v18M3 6h18"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M9.6 9h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6V9.6a.6.6 0 0 1 .6-.6" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M3 18h18"></svg:path></svg:g>`,
})
export class IconoirFrameAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameAltEmptyIcon],svg[iconoir-frame-alt-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 3v18M18 3v18M3 6h18M3 18h18"></svg:path>`,
})
export class IconoirFrameAltEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameMinusInIcon],svg[iconoir-frame-minus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-miterlimit="1.5" d="M4.998 2H2v2.998h2.998zm.001 1.5h14M3.5 4.998V19M20.498 5v14.002M4.999 20.5h14M4.998 19H2v2.998h2.998zM21.997 2.001H19v2.998h2.998zm0 17H19v2.998h2.998z"></svg:path><svg:path d="M9 12h6"></svg:path></svg:g>`,
})
export class IconoirFrameMinusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFramePlusInIcon],svg[iconoir-frame-plus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-miterlimit="1.5" d="M4.998 2H2v2.998h2.998zm.001 1.5h14M3.5 4.998V19M20.498 5v14.002M4.999 20.5h14M4.998 19H2v2.998h2.998zM21.997 2.001H19v2.998h2.998zm0 17H19v2.998h2.998z"></svg:path><svg:path d="M9 12h3m3 0h-3m0 0V9m0 3v3"></svg:path></svg:g>`,
})
export class IconoirFramePlusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameSelectIcon],svg[iconoir-frame-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5"><svg:path d="M4.998 2H2v2.998h2.998zm.001 1.501h14M3.5 4.999V19M20.498 5v14.002M4.999 20.501h14M4.998 19H2v2.998h2.998zM21.997 2.002H19V5h2.998zm0 17H19V22h2.998z"></svg:path><svg:path d="m10.997 15.002l-3-7l7 3l-2.998.999zm1.002-3l2.998 3z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirFrameSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameSimpleIcon],svg[iconoir-frame-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5" d="M4.998 2H2v2.998h2.998zm0 1.501h14M3.499 4.998V19M20.497 5v14.002M4.998 20.501h14M4.998 19H2v2.998h2.998zM21.996 2.002h-2.998V5h2.998zm0 17h-2.998V22h2.998z"></svg:path>`,
})
export class IconoirFrameSimpleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameToolIcon],svg[iconoir-frame-tool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 7h1M2 17h1M21 7h1m-1 10h1M17 3V2M7 3V2m10 20v-1M7 22v-1M18 6.6v10.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V6.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6"></svg:path>`,
})
export class IconoirFrameToolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFrameToolSolidIcon],svg[iconoir-frame-tool-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 7h1M2 17h1M21 7h1m-1 10h1M17 3V2M7 3V2m10 20v-1M7 22v-1"></svg:path><svg:path fill="currentColor" d="M6 17.4V6.6a.6.6 0 0 1 .6-.6h10.8a.6.6 0 0 1 .6.6v10.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6"></svg:path></svg:g>`,
})
export class IconoirFrameToolSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFridgeIcon],svg[iconoir-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 14H9m1-8H9"></svg:path><svg:path d="M5 10V2.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6V10M5 10v11.4a.6.6 0 0 0 .6.6h12.8a.6.6 0 0 0 .6-.6V10M5 10h14"></svg:path></svg:g>`,
})
export class IconoirFridgeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFxIcon],svg[iconoir-fx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17V7h7m-7 5h5m5 5l4-5m0 0l4-5m-4 5l-4-5m4 5l4 5"></svg:path>`,
})
export class IconoirFxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFxTagIcon],svg[iconoir-fx-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 15V9h5m-5 3h3.571M13 15l2.5-3m0 0L18 9m-2.5 3L13 9m2.5 3l2.5 3"></svg:path></svg:g>`,
})
export class IconoirFxTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirFxTagSolidIcon],svg[iconoir-fx-tag-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 2.25A6.75 6.75 0 0 0 1.25 9v6A6.75 6.75 0 0 0 8 21.75h8A6.75 6.75 0 0 0 22.75 15V9A6.75 6.75 0 0 0 16 2.25zm-2 6a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 1.5 0v-2.25h2.821a.75.75 0 0 0 0-1.5H6.75v-1.5H11a.75.75 0 0 0 0-1.5zm7.576.27a.75.75 0 1 0-1.152.96l2.1 2.52l-2.1 2.52a.75.75 0 1 0 1.152.96l1.924-2.308l1.924 2.308a.75.75 0 1 0 1.152-.96l-2.1-2.52l2.1-2.52a.75.75 0 1 0-1.152-.96L15.5 10.829z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirFxTagSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGamepadIcon],svg[iconoir-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.5 17.5c2.5 3.5 6.449.915 5.5-2.5c-1.425-5.129-2.2-7.984-2.603-9.492A2.03 2.03 0 0 0 18.438 4H5.562c-.918 0-1.718.625-1.941 1.515C2.78 8.863 2.033 11.802 1.144 15c-.948 3.415 3 6 5.5 2.5M18 8.5l.011.01M16.49 7l.011.01M16.49 10l.011.01M15 8.5l.011.01M7 7v3M5.5 8.5h3"></svg:path><svg:path d="M8 16a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class IconoirGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGarageIcon],svg[iconoir-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 20H3V6l9-2l9 2v14h-3M6 20h12M6 20v-4m12 4v-4M6 12V8h12v4M6 12h12M6 12v4m12-4v4M6 16h12"></svg:path>`,
})
export class IconoirGarageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGasIcon],svg[iconoir-gas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M9 8a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v13.4a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6zm0 3h6m-3-6V2m0 0h-1m1 0h1"></svg:path>`,
})
export class IconoirGasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGasTankIcon],svg[iconoir-gas-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5"><svg:path stroke-width="1.493" d="M3 7.562A2.56 2.56 0 0 1 5.563 5H7V3h5v2h2.002A7 7 0 0 1 21 11.998v6.442a2.56 2.56 0 0 1-2.563 2.562H5.563A2.565 2.565 0 0 1 3 18.44z" clip-rule="evenodd"></svg:path><svg:path stroke-width="1.502" d="m8 8.878l8 8.238l-4-4.121l-4 4.12l4-4.12l4-4.121"></svg:path></svg:g>`,
})
export class IconoirGasTankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGasTankDropletIcon],svg[iconoir-gas-tank-droplet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" stroke-width="1.5" clip-rule="evenodd"><svg:path stroke-width="1.493" d="M3 7.562A2.56 2.56 0 0 1 5.563 5H7V3h5v2h2.002A7 7 0 0 1 21 11.998v6.442a2.56 2.56 0 0 1-2.563 2.562H5.563A2.565 2.565 0 0 1 3 18.44z"></svg:path><svg:path d="M12 9s3 2.993 3 4.887c0 1.655-1.345 3-3 3s-2.988-1.345-3-3C9.01 11.992 12 9 12 9"></svg:path></svg:g>`,
})
export class IconoirGasTankDropletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGifFormatIcon],svg[iconoir-gif-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"></svg:path><svg:path stroke-linejoin="round" d="M15.5 15V9h3m-3 3h2M12 15V9M8.5 9h-3v6h3v-2.4"></svg:path></svg:g>`,
})
export class IconoirGifFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGiftIcon],svg[iconoir-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12v9.4a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V12m17.4-5H2.6a.6.6 0 0 0-.6.6v3.8a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6M12 22V7m0 0H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7m0 0h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7"></svg:path>`,
})
export class IconoirGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitIcon],svg[iconoir-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 10a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 8a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m4.25-3.75a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M12 10v5M8.25 4.75L10.5 7m2.75 2.75l1.5 1.5"></svg:path><svg:path d="M11.576 1.424a.6.6 0 0 1 .848 0l10.152 10.152a.6.6 0 0 1 0 .848L12.424 22.576a.6.6 0 0 1-.848 0L1.424 12.424a.6.6 0 0 1 0-.848z"></svg:path></svg:g>`,
})
export class IconoirGitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitBranchIcon],svg[iconoir-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-4V3"></svg:path><svg:path d="M8 18h1c3.5 0 9-2.1 9-8.5V8"></svg:path></svg:g>`,
})
export class IconoirGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitCherryPickCommitIcon],svg[iconoir-git-cherry-pick-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 11v-1a2 2 0 0 0-2-2h-3m-5 3v-1a2 2 0 0 1 2-2h3m0 0V4m0 16a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-3-3H3m12 0h6"></svg:path>`,
})
export class IconoirGitCherryPickCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitCommitIcon],svg[iconoir-git-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-3-3H3m12 0h6"></svg:path>`,
})
export class IconoirGitCommitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitCompareIcon],svg[iconoir-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 10V7s0-2-2-2h-3M6 7v10s0 2 2 2h3"></svg:path><svg:path d="M15 7.5L12.5 5L15 2.5m-6.5 14L11 19l-2.5 2.5"></svg:path></svg:g>`,
})
export class IconoirGitCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitForkIcon],svg[iconoir-git-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4M7 7v10M17 7v1c0 2.5-2 3-2 3l-6 2s-2 .5-2 3v1"></svg:path>`,
})
export class IconoirGitForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitMergeIcon],svg[iconoir-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 20a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 21V7"></svg:path><svg:path d="M6 7v2c0 3.5 2.5 9 8.5 9H16M6 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class IconoirGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitPullRequestIcon],svg[iconoir-git-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 7v10m12 0V7s0-2-2-2h-3"></svg:path><svg:path d="M15 7.5L12.5 5L15 2.5"></svg:path></svg:g>`,
})
export class IconoirGitPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitPullRequestClosedIcon],svg[iconoir-git-pull-request-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-10v6m12 0V7s0-2-2-2h-4M4 7.243L6.121 5.12m0 0L8.243 3M6.12 5.121L4 3m2.121 2.121l2.122 2.122"></svg:path>`,
})
export class IconoirGitPullRequestClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitSolidIcon],svg[iconoir-git-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.955.893a1.35 1.35 0 0 0-1.91 0L8.24 3.7c.219.208.43.41.54.52l2.25 2.25a2.25 2.25 0 0 1 3 3l1.25 1.25a2.25 2.25 0 1 1-1.06 1.06l-1.25-1.248a2 2 0 0 1-.22.09v3.757a2.251 2.251 0 1 1-1.5 0v-3.756A2.25 2.25 0 0 1 9.97 7.53L7.72 5.28c-.074-.073-.29-.299-.52-.541L.894 11.045a1.35 1.35 0 0 0 0 1.91l10.151 10.15a1.35 1.35 0 0 0 1.91 0l10.151-10.15a1.35 1.35 0 0 0 0-1.91zM12 15.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m.75-7.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m2.75 4.25a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0" clip-rule="evenodd"></svg:path>`,
})
export class IconoirGitSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGithubIcon],svg[iconoir-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></svg:path><svg:path d="M9 20.027c-3 .973-5.5 0-7-3"></svg:path></svg:g>`,
})
export class IconoirGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGithubCircleIcon],svg[iconoir-github-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M14.333 19v-1.863c.025-.31-.018-.62-.126-.913a2.2 2.2 0 0 0-.5-.781c2.093-.227 4.293-1 4.293-4.544a3.48 3.48 0 0 0-1-2.434a3.2 3.2 0 0 0-.06-2.448s-.787-.227-2.607.961a9.15 9.15 0 0 0-4.666 0c-1.82-1.188-2.607-.96-2.607-.96A3.2 3.2 0 0 0 7 8.464a3.48 3.48 0 0 0-1 2.453c0 3.519 2.2 4.291 4.293 4.544a2.2 2.2 0 0 0-.496.773a2.1 2.1 0 0 0-.13.902V19"></svg:path><svg:path d="M9.667 17.702c-2 .631-3.667 0-4.667-1.948"></svg:path></svg:g>`,
})
export class IconoirGithubCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGitlabFullIcon],svg[iconoir-gitlab-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M17.057 2.544a.2.2 0 0 1 .378-.008l3.114 8.31l1.398 3.73a.2.2 0 0 1-.07.232l-9.76 7.106a.2.2 0 0 1-.235 0l-9.76-7.106a.2.2 0 0 1-.069-.231l1.398-3.73l.167-.45l2.944-7.861a.2.2 0 0 1 .378.008l2.47 7.6a.2.2 0 0 0 .19.137h4.8a.2.2 0 0 0 .19-.138z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirGitlabFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGlassEmptyIcon],svg[iconoir-glass-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7.5 11l1 5"></svg:path><svg:path d="M3.04 4.294a.5.5 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.5.5 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944z"></svg:path><svg:path d="M3 5c2.571 2.667 15.429 2.667 18 0"></svg:path></svg:g>`,
})
export class IconoirGlassEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGlassFragileIcon],svg[iconoir-glass-fragile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8 22h4m4 0h-4m0 0v-7m-5.422-4.952C7.783 12.682 12 15 12 15s4.217-2.318 5.422-4.952c1.3-2.845 0-8.048 0-8.048H6.578s-1.3 5.203 0 8.048"></svg:path><svg:path d="m12.5 2l-2 4h3l-2 4"></svg:path></svg:g>`,
})
export class IconoirGlassFragileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGlassHalfIcon],svg[iconoir-glass-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.04 4.294a.5.5 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.5.5 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944z"></svg:path><svg:path d="M3 5c2.571 2.667 15.429 2.667 18 0M4 13c1.032 1.203 3.925 1.864 7 1.981a25.4 25.4 0 0 0 4-.158c2.266-.279 4.197-.886 5-1.823M4 13c2.286-2.667 13.714-2.667 16 0"></svg:path></svg:g>`,
})
export class IconoirGlassHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGlassHalfAltIcon],svg[iconoir-glass-half-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.04 4.294a.5.5 0 0 1 .191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.5.5 0 0 1 .192.479l-1.7 12.744a4 4 0 0 1-1.98 2.944l-.32.183a10 10 0 0 1-9.922 0l-.32-.183a4 4 0 0 1-1.98-2.944z"></svg:path><svg:path d="M3 5c2.571 2.667 15.429 2.667 18 0M4 13c1.032 1.203 3.925 1.864 7 1.981c3.739.143 7.746-.518 9-1.981m-5 1.823V20.5M4 13c2.286-2.667 13.714-2.667 16 0"></svg:path></svg:g>`,
})
export class IconoirGlassHalfAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGlassesIcon],svg[iconoir-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14a4 4 0 1 0 8 0a4 4 0 0 0-8 0m0 0V6m20 8a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 0V6m-8 8h-4"></svg:path>`,
})
export class IconoirGlassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGlobeIcon],svg[iconoir-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="m2.5 12.5l5.5 2L7 18l1 3m9-.5l-.5-2.5l-2.5-1v-3.5l3-1l4.5.5M19 5.5L18.5 7l-3.5.5v3l2.5-1h2l2 1m-19 0l2.5-2L7.5 8l2-3l-1-2"></svg:path></svg:g>`,
})
export class IconoirGlobeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGolfIcon],svg[iconoir-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18v-6m0 0V3.41a.6.6 0 0 1 .836-.552l8.444 3.62a.6.6 0 0 1 .022 1.093zm0 10c3.866 0 7-1.567 7-3.5S15.866 15 12 15s-7 1.567-7 3.5S8.134 22 12 22"></svg:path>`,
})
export class IconoirGolfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleIcon],svg[iconoir-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15.548 8.303A5.15 5.15 0 0 0 12.108 7C9.288 7 7 9.239 7 12s2.287 5 5.109 5c3.47 0 4.751-2.57 4.891-4.583h-4.159"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5"></svg:path></svg:g>`,
})
export class IconoirGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleCircleIcon],svg[iconoir-google-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M15.548 8.303A5.15 5.15 0 0 0 12.108 7C9.288 7 7 9.239 7 12s2.287 5 5.109 5c3.47 0 4.751-2.57 4.891-4.583h-4.159"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirGoogleCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleCircleSolidIcon],svg[iconoir-google-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m.109 5C8.888 6.25 6.25 8.81 6.25 12s2.638 5.75 5.859 5.75c1.942 0 3.34-.73 4.262-1.797c.9-1.044 1.299-2.356 1.377-3.484l.056-.802h-4.963v1.5h3.288c-.153.642-.442 1.282-.894 1.806c-.622.721-1.599 1.277-3.126 1.277c-2.423 0-4.359-1.918-4.359-4.25s1.936-4.25 4.359-4.25c1.135 0 2.166.422 2.939 1.113l.999-1.12a5.9 5.9 0 0 0-3.938-1.493" clip-rule="evenodd"></svg:path>`,
})
export class IconoirGoogleCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleDocsIcon],svg[iconoir-google-docs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M7 7h10M7 12h10M7 17h6"></svg:path>`,
})
export class IconoirGoogleDocsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleDriveIcon],svg[iconoir-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.143 3.004L14.857 3m-5.714.004L2 15.004m7.143-12L18.433 21M14.856 3L22 15.004M14.857 3L5.575 21m12.857 0H5.575m12.857 0L22 15.004M5.575 21L2 15.004m20 0H2"></svg:path>`,
})
export class IconoirGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleDriveCheckIcon],svg[iconoir-google-drive-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.143 3.004L14.857 3m-5.714.004L2 15.004m7.143-12l4.902 9.496m.812-9.5L5.575 21m9.282-18L21.5 14M5.575 21L2 15.004M5.575 21h6.429M2 15.004h10.5M15 19l3 3l5-5"></svg:path>`,
})
export class IconoirGoogleDriveCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleDriveSyncIcon],svg[iconoir-google-drive-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9.143 3.004L14.857 3m-5.714.004L2 15.004m7.143-12l4.902 9.496m.812-9.5L5.575 21m9.282-18l5.356 9M5.575 21L2 15.004M5.575 21h6.429M2 15.004h10.5m10.166 2.663C22.048 16.097 20.634 15 18.99 15c-1.758 0-3.252 1.255-3.793 3"></svg:path><svg:path d="M20.995 17.772H22.4a.6.6 0 0 0 .6-.6V15.55m-7.666 4.783C15.952 21.903 17.366 23 19.01 23c1.758 0 3.252-1.255 3.793-3"></svg:path><svg:path d="M17.005 20.228H15.6a.6.6 0 0 0-.6.6v1.622"></svg:path></svg:g>`,
})
export class IconoirGoogleDriveSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleDriveWarningIcon],svg[iconoir-google-drive-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.143 3.004L14.857 3m-5.714.004L2 15.004m7.143-12l4.902 9.496m.812-9.5L5.575 21m9.282-18L21.5 14M5.575 21L2 15.004M5.575 21h6.429M2 15.004h10.5M18 16v2m0 4.01l.01-.011"></svg:path>`,
})
export class IconoirGoogleDriveWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleHomeIcon],svg[iconoir-google-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M17.708 17A9 9 0 1 0 4.291 5a9 9 0 0 0 13.417 12Zm0 0H19.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5H17"></svg:path><svg:path stroke-linejoin="round" d="m11 11.01l.01-.011M8 11.01l.01-.011m5.99.011l.01-.011"></svg:path></svg:g>`,
})
export class IconoirGoogleHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGoogleOneIcon],svg[iconoir-google-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11 5v14a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0"></svg:path><svg:path d="M11.64 3.53L6.747 8.171a2 2 0 0 0 2.754 2.901l4.892-4.642a2 2 0 0 0-2.753-2.902"></svg:path></svg:g>`,
})
export class IconoirGoogleOneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGpsIcon],svg[iconoir-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 8.5h-2.25A1.75 1.75 0 0 0 18 10.25v0c0 .966.784 1.75 1.75 1.75h1.5c.966 0 1.75.784 1.75 1.75v0a1.75 1.75 0 0 1-1.75 1.75H18m-7.5 0v-2.8m0 0h2.857c.714 0 2.143 0 2.143-2.1s-1.429-2.1-2.143-2.1H10.5zm-4-3.573a3.5 3.5 0 1 0-2 6.373C6.433 15.5 8 14 8 12H5"></svg:path>`,
})
export class IconoirGpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGraduationCapIcon],svg[iconoir-graduation-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m2.573 8.463l8.659-4.329a.6.6 0 0 1 .536 0l8.659 4.33a.6.6 0 0 1 0 1.073l-8.659 4.329a.6.6 0 0 1-.536 0l-8.659-4.33a.6.6 0 0 1 0-1.073"></svg:path><svg:path d="M22.5 13V9.5l-2-1m-16 2v5.412a2 2 0 0 0 1.142 1.807l5 2.374a2 2 0 0 0 1.716 0l5-2.374a2 2 0 0 0 1.142-1.807V10.5"></svg:path></svg:g>`,
})
export class IconoirGraduationCapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGraduationCapSolidIcon],svg[iconoir-graduation-cap-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M3.75 12.641v3.271a2.75 2.75 0 0 0 1.57 2.484l5 2.374a2.75 2.75 0 0 0 2.36 0l5-2.374a2.75 2.75 0 0 0 1.57-2.484v-3.27l-6.475 3.237a2.85 2.85 0 0 1-2.55 0z"></svg:path><svg:path d="M10.896 3.464c.38-.19.828-.19 1.208 0l8.658 4.329c.995.497.995 1.917 0 2.415l-8.658 4.33c-.38.19-.828.19-1.208 0l-8.658-4.33c-.995-.498-.995-1.918 0-2.415z"></svg:path><svg:path d="M19.83 8.165a.75.75 0 0 1 1.006-.336l2 1a.75.75 0 0 1 .414.671V13a.75.75 0 1 1-1.5 0V9.964l-1.585-.793a.75.75 0 0 1-.336-1.006"></svg:path></svg:g>`,
})
export class IconoirGraduationCapSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGraphDownIcon],svg[iconoir-graph-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 20H4V4"></svg:path><svg:path d="m4 7l8 8l3-3l4.5 4.5"></svg:path></svg:g>`,
})
export class IconoirGraphDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGraphUpIcon],svg[iconoir-graph-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20 20H4V4"></svg:path><svg:path d="M4 16.5L12 9l3 3l4.5-4.5"></svg:path></svg:g>`,
})
export class IconoirGraphUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGridMinusIcon],svg[iconoir-grid-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.992 17h6"></svg:path><svg:path d="M4 9.4V4.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Zm0 10v-4.8a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Zm10-10V4.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-4.8a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirGridMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGridPlusIcon],svg[iconoir-grid-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13.992 17h3m3 0h-3m0 0v-3m0 3v3"></svg:path><svg:path d="M4 9.4V4.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Zm0 10v-4.8a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Zm10-10V4.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-4.8a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirGridPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGridXmarkIcon],svg[iconoir-grid-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14.871 19.121L16.993 17m2.121-2.121L16.993 17m0 0l-2.122-2.121M16.993 17l2.121 2.121"></svg:path><svg:path d="M4 9.4V4.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Zm0 10v-4.8a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6Zm10-10V4.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6h-4.8a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirGridXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGroupIcon],svg[iconoir-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M1 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1"></svg:path><svg:path d="M13 14v0a5 5 0 0 1 5-5v0a5 5 0 0 1 5 5v.5"></svg:path><svg:path stroke-linejoin="round" d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m10-3a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirGymIcon],svg[iconoir-gym-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.4 7H4.6a.6.6 0 0 0-.6.6v8.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6m12 0h-2.8a.6.6 0 0 0-.6.6v8.8a.6.6 0 0 0 .6.6h2.8a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6"></svg:path><svg:path d="M1 14.4V9.6a.6.6 0 0 1 .6-.6h1.8a.6.6 0 0 1 .6.6v4.8a.6.6 0 0 1-.6.6H1.6a.6.6 0 0 1-.6-.6m22 0V9.6a.6.6 0 0 0-.6-.6h-1.8a.6.6 0 0 0-.6.6v4.8a.6.6 0 0 0 .6.6h1.8a.6.6 0 0 0 .6-.6M8 12h8"></svg:path></svg:g>`,
})
export class IconoirGymIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHSquareIcon],svg[iconoir-h-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6M10 8v4m0 4v-4m0 0h4m0 0V8m0 4v4"></svg:path>`,
})
export class IconoirHSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHalfCookieIcon],svg[iconoir-half-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.8 14c-.927 4.564-4.962 8-9.8 8c-5.523 0-10-4.477-10-10c0-5.185 3.947-9.449 9-9.95"></svg:path><svg:path d="M6.5 10a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m14-6a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M12 19a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-5-3.99l.01-.011m9.99.011l.01-.011M11 12.01l.01-.011M21 9.01l.01-.011M17 6.01l.01-.011M11 2c-.5 1.5.5 3 2.085 3C11 8.5 13 12 18 11.5c0 2.5 2.5 3 3.7 2.514"></svg:path></svg:g>`,
})
export class IconoirHalfCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHalfMoonIcon],svg[iconoir-half-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.49 9.49 0 0 0 3 11.507"></svg:path>`,
})
export class IconoirHalfMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHammerIcon],svg[iconoir-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.634 11.056L2.148 19.54l2.122 2.121l8.485-8.485"></svg:path><svg:path d="m10.634 11.056l1.414-1.415s.354-3.182-3.182-6.717l1.06-1.06l8.486 5.656l-1.06 1.06l1.413 1.415l1.061-1.06l2.475 2.474l-4.95 4.95l-2.475-2.475l1.061-1.06l-1.414-1.415l-1.768 1.768z"></svg:path></svg:g>`,
})
export class IconoirHammerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHandBrakeIcon],svg[iconoir-hand-brake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 16v-4m0-3V8"></svg:path><svg:circle cx="12" cy="12" r="8"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.953 4.5A10.96 10.96 0 0 0 1 12c0 2.899 1.121 5.535 2.953 7.5m16.094-15A10.96 10.96 0 0 1 23 12c0 2.899-1.121 5.535-2.953 7.5"></svg:path></svg:g>`,
})
export class IconoirHandBrakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHandCardIcon],svg[iconoir-hand-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 9h11M2 11l2.807-3.157A4 4 0 0 1 7.797 6.5H8m-6 13h5.5l4-3s.81-.547 2-1.5c2.5-2 0-5.166-2.5-3.5C8.964 12.857 7 14 7 14"></svg:path><svg:path d="M8 13.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6.5"></svg:path></svg:g>`,
})
export class IconoirHandCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHandCashIcon],svg[iconoir-hand-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m2 11l2.807-3.157A4 4 0 0 1 7.797 6.5H8m-6 13h5.5l4-3s.81-.547 2-1.5c2.5-2 0-5.166-2.5-3.5C8.964 12.857 7 14 7 14"></svg:path><svg:path d="M8 13.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m4.5-1.99l.01-.011m-9.01.011l.01-.011"></svg:path></svg:g>`,
})
export class IconoirHandCashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHandContactlessIcon],svg[iconoir-hand-contactless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m2 11l2.807-3.157A4 4 0 0 1 7.797 6.5H8m-6 13h5.5l4-3s.81-.547 2-1.5c2.5-2 0-5.166-2.5-3.5C8.964 12.857 7 14 7 14"></svg:path><svg:path d="M8 13.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6.5"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18.25 12c.5-1.5.5-2.5 0-4M16 9c.227.5.227 1.5 0 2"></svg:path></svg:g>`,
})
export class IconoirHandContactlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHandbagIcon],svg[iconoir-handbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 8H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-5M9 8V3.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6V8M9 8h6M9 8v6m6-6v6"></svg:path>`,
})
export class IconoirHandbagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHardDriveIcon],svg[iconoir-hard-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m10 17.01l.01-.011M6 17.01l.01-.011"></svg:path><svg:path d="M2 13v7.4a.6.6 0 0 0 .6.6h18.8a.6.6 0 0 0 .6-.6V13M2 13h20M2 13l2.872-9.572A.6.6 0 0 1 5.446 3h13.108a.6.6 0 0 1 .574.428L22 13"></svg:path></svg:g>`,
})
export class IconoirHardDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHashtagIcon],svg[iconoir-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M10 3L6 21m14.5-5h-18M22 7H4m14-4l-4 18"></svg:path>`,
})
export class IconoirHashtagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHatIcon],svg[iconoir-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 17v-2a7 7 0 1 1 14 0v2zm0 0H2M14 6.01l.01-.011"></svg:path>`,
})
export class IconoirHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHdIcon],svg[iconoir-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 7v5m0 5v-5m0 0h7m0 0V7m0 5v5m3-5V7c4 0 8 0 8 5s-4 5-8 5z"></svg:path>`,
})
export class IconoirHdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHdDisplayIcon],svg[iconoir-hd-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 8.5V12m0 3.5V12m0 0h4.5m0 0V8.5m0 3.5v3.5M14 12V8.5c2.5 0 5 0 5 3.5s-2.5 3.5-5 3.5z"></svg:path><svg:path d="M1 15V9a6 6 0 0 1 6-6h10a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6Z"></svg:path></svg:g>`,
})
export class IconoirHdDisplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHdDisplaySolidIcon],svg[iconoir-hd-display-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.25 9A6.75 6.75 0 0 1 7 2.25h10A6.75 6.75 0 0 1 23.75 9v6A6.75 6.75 0 0 1 17 21.75H7A6.75 6.75 0 0 1 .25 15zM6 7.75a.75.75 0 0 1 .75.75v2.75h3V8.5a.75.75 0 0 1 1.5 0v7a.75.75 0 0 1-1.5 0v-2.75h-3v2.75a.75.75 0 0 1-1.5 0v-7A.75.75 0 0 1 6 7.75m8.75 6.996V9.254c.965.015 1.766.081 2.37.363c.344.16.607.387.795.724c.194.349.335.869.335 1.659s-.142 1.31-.335 1.66c-.188.336-.45.562-.795.723c-.604.282-1.405.348-2.37.363m5-2.746c0-.96-.171-1.752-.524-2.388a3.17 3.17 0 0 0-1.471-1.354c-1.09-.509-2.483-.508-3.659-.508H14a.75.75 0 0 0-.75.75v7c0 .414.336.75.75.75h.096c1.176 0 2.569 0 3.659-.508a3.17 3.17 0 0 0 1.47-1.354c.354-.636.525-1.428.525-2.388" clip-rule="evenodd"></svg:path>`,
})
export class IconoirHdDisplaySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHdrIcon],svg[iconoir-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1.5 8.5V12m0 3.5V12m0 0H6m0 0V8.5M6 12v3.5m11.5 0v-2.8m2.857 0c.714 0 2.143 0 2.143-2.1s-1.429-2.1-2.143-2.1H17.5v4.2m2.857 0H17.5m2.857 0l2.143 2.8M9.5 12V8.5c2.5 0 5 0 5 3.5s-2.5 3.5-5 3.5z"></svg:path>`,
})
export class IconoirHdrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeadsetIcon],svg[iconoir-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"></svg:path>`,
})
export class IconoirHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeadsetBoltIcon],svg[iconoir-headset-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.5 13L10 17h4l-2.5 4"></svg:path><svg:path d="m4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"></svg:path></svg:g>`,
})
export class IconoirHeadsetBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeadsetBoltSolidIcon],svg[iconoir-headset-bolt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.5 13L10 17h4l-2.5 4"></svg:path><svg:path d="M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5"></svg:path><svg:path fill="currentColor" d="M2 17.438v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.463a.6.6 0 0 1-.746.582l-1.74-.434A2 2 0 0 1 2 17.438m20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.582l1.74-.434A2 2 0 0 0 22 17.438"></svg:path></svg:g>`,
})
export class IconoirHeadsetBoltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeadsetHelpIcon],svg[iconoir-headset-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="m4 11.5l-.485.121A2 2 0 0 0 2 13.561v1.877a2 2 0 0 0 1.515 1.94l1.74.435A.6.6 0 0 0 6 17.231v-5.463a.6.6 0 0 0-.746-.582zm0 0V11a8 8 0 1 1 16 0v.5m0 0l.485.121A2 2 0 0 1 22 13.561v1.877a2 2 0 0 1-1.515 1.94L20 17.5m0-6l-1.255-.314a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.582L20 17.5m-5 3h3a2 2 0 0 0 2-2v-1m-5 3a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0 0 3h3a1.5 1.5 0 0 0 1.5-1.5Z"></svg:path>`,
})
export class IconoirHeadsetHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeadsetSolidIcon],svg[iconoir-headset-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5"></svg:path><svg:path fill="currentColor" d="M2 17.438v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.463a.6.6 0 0 1-.746.582l-1.74-.434A2 2 0 0 1 2 17.438m20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.582l1.74-.434A2 2 0 0 0 22 17.438"></svg:path></svg:g>`,
})
export class IconoirHeadsetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeadsetWarningIcon],svg[iconoir-headset-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 13v5m0 3.01l.01-.011M4 13.5l-.485.121A2 2 0 0 0 2 15.561v1.877a2 2 0 0 0 1.515 1.94l1.74.436A.6.6 0 0 0 6 19.23v-5.463a.6.6 0 0 0-.746-.582zm0 0V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5m0 0l.485.121A2 2 0 0 1 22 15.561v1.877a2 2 0 0 1-1.515 1.94l-1.74.436A.6.6 0 0 1 18 19.23v-5.463a.6.6 0 0 1 .745-.582z"></svg:path>`,
})
export class IconoirHeadsetWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeadsetWarningSolidIcon],svg[iconoir-headset-warning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 12v5m0 4.01l.01-.011M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5"></svg:path><svg:path fill="currentColor" d="M2 17.438v-1.877a2 2 0 0 1 1.515-1.94L4 13.5l1.254-.314a.6.6 0 0 1 .746.582v5.463a.6.6 0 0 1-.746.582l-1.74-.434A2 2 0 0 1 2 17.438m20 0v-1.877a2 2 0 0 0-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 0 0-.745.582v5.463a.6.6 0 0 0 .745.582l1.74-.434A2 2 0 0 0 22 17.438"></svg:path></svg:g>`,
})
export class IconoirHeadsetWarningSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHealthShieldIcon],svg[iconoir-health-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.667 16h-3.334v-2.333H8v-3.334h2.333V8h3.334v2.333H16v3.334h-2.333z"></svg:path><svg:path d="M5 18L3.13 4.913a.996.996 0 0 1 .774-1.114l7.662-1.703a2 2 0 0 1 .868 0L20.096 3.8c.51.113.848.596.774 1.114L19 18c-.07.495-.5 3.5-7 3.5S5.07 18.495 5 18"></svg:path></svg:g>`,
})
export class IconoirHealthShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHealthcareIcon],svg[iconoir-healthcare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m18 20l3.824-3.824a.6.6 0 0 0 .176-.424V10.5A1.5 1.5 0 0 0 20.5 9v0a1.5 1.5 0 0 0-1.5 1.5V15"></svg:path><svg:path d="m18 16l.858-.858a.48.48 0 0 0 .142-.343v0a.49.49 0 0 0-.268-.433l-.443-.221a2 2 0 0 0-2.308.374l-.895.895a2 2 0 0 0-.586 1.414V20M6 20l-3.824-3.824A.6.6 0 0 1 2 15.752V10.5A1.5 1.5 0 0 1 3.5 9v0A1.5 1.5 0 0 1 5 10.5V15"></svg:path><svg:path d="m6 16l-.858-.858A.5.5 0 0 1 5 14.799v0c0-.183.104-.35.268-.433l.443-.221a2 2 0 0 1 2.308.374l.895.895a2 2 0 0 1 .586 1.414V20m4.167-8h-3.334V9.667H8V6.333h2.333V4h3.334v2.333H16v3.334h-2.333z"></svg:path></svg:g>`,
})
export class IconoirHealthcareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeartIcon],svg[iconoir-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M22 8.862a5.95 5.95 0 0 1-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608c-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274l.265-.274A5.6 5.6 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862Z"></svg:path>`,
})
export class IconoirHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeartArrowDownIcon],svg[iconoir-heart-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m5.478 14.883l-1.824-1.89c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 0 1 8.08 0l.266.274l.265-.274A5.6 5.6 0 0 1 16.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0 1 22 8.862a5.95 5.95 0 0 1-1.654 4.13q-.904.94-1.8 1.891M12 21.5V11m4 6.5l-4 4l-4-4"></svg:path>`,
})
export class IconoirHeartArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeartSolidIcon],svg[iconoir-heart-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3.942a6.35 6.35 0 0 1 4.305-1.692c1.726 0 3.374.71 4.58 1.96a6.7 6.7 0 0 1 1.865 4.652a6.7 6.7 0 0 1-1.865 4.652c-.796.825-1.591 1.67-2.39 2.518c-1.624 1.724-3.265 3.467-4.97 5.108l-.003.004a2.213 2.213 0 0 1-3.113-.069l-7.295-7.561c-2.485-2.577-2.485-6.727 0-9.303A6.33 6.33 0 0 1 12 3.942" clip-rule="evenodd"></svg:path>`,
})
export class IconoirHeartSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeatingSquareIcon],svg[iconoir-heating-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M8 6s-2.5 3 0 6s0 6 0 6m4-12s-2.5 3 0 6s0 6 0 6m4-12s-2.5 3 0 6s0 6 0 6"></svg:path></svg:g>`,
})
export class IconoirHeatingSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeatingSquareSolidIcon],svg[iconoir-heating-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20.4 21.75a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35H3.6A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35zM7.424 12.48c.829.995 1.015 1.917.924 2.736c-.095.853-.5 1.66-.972 2.368a.75.75 0 0 0 1.249.832c.528-.793 1.08-1.836 1.214-3.034c.137-1.231-.176-2.559-1.262-3.862c-.83-.995-1.016-1.917-.924-2.736c.095-.853.5-1.66.971-2.368a.75.75 0 1 0-1.248-.832c-.528.793-1.08 1.836-1.214 3.034c-.137 1.231.176 2.559 1.262 3.862m8.924 2.736c.091-.82-.095-1.741-.924-2.736c-1.086-1.303-1.4-2.63-1.262-3.862c.133-1.198.686-2.241 1.214-3.034a.75.75 0 0 1 1.249.832c-.472.708-.877 1.515-.972 2.368c-.092.82.095 1.741.924 2.736c1.086 1.303 1.4 2.631 1.262 3.862c-.134 1.198-.686 2.242-1.214 3.034a.75.75 0 1 1-1.249-.832c.472-.707.877-1.515.972-2.368m-4.924-2.736c.829.995 1.016 1.917.924 2.736c-.095.853-.5 1.66-.972 2.368a.75.75 0 1 0 1.249.832c.528-.793 1.08-1.836 1.214-3.034c.137-1.231-.176-2.559-1.262-3.862c-.829-.995-1.016-1.917-.924-2.736c.095-.853.5-1.66.971-2.368a.75.75 0 0 0-1.248-.832c-.528.793-1.08 1.836-1.214 3.034c-.137 1.231.176 2.559 1.262 3.862" clip-rule="evenodd"></svg:path>`,
})
export class IconoirHeatingSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeavyRainIcon],svg[iconoir-heavy-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 13v7m8-7v7m-4-5v7m8-4.393c1.494-.585 3-1.918 3-4.607c0-4-3.333-5-5-5c0-2 0-6-6-6S6 6 6 8c-1.667 0-5 1-5 5c0 2.689 1.506 4.022 3 4.607"></svg:path>`,
})
export class IconoirHeavyRainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHelpCircleIcon],svg[iconoir-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirHelpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHelpCircleSolidIcon],svg[iconoir-help-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m9.095-4.397C10 7.895 9.75 8.341 9.75 9a.75.75 0 0 1-1.5 0c0-1.091.437-1.958 1.124-2.54c.67-.57 1.538-.835 2.376-.835s1.705.265 2.376.834c.687.583 1.124 1.45 1.124 2.541c0 .766-.196 1.35-.517 1.83c-.269.404-.619.716-.894.962l-.002.002l-.085.076c-.308.276-.539.504-.709.804c-.162.287-.293.688-.293 1.326a.75.75 0 1 1-1.5 0c0-.862.181-1.524.488-2.065c.299-.528.693-.894 1.01-1.18l.072-.065c.3-.27.508-.455.665-.692c.149-.222.265-.514.265-.998c0-.659-.25-1.105-.595-1.397c-.36-.306-.868-.478-1.405-.478s-1.045.172-1.405.478m2.223 10.898a.75.75 0 0 0-1.115-1.004l-.01.011a.75.75 0 0 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirHelpCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHelpSquareIcon],svg[iconoir-help-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 9c0-3.5 5.5-3.5 5.5 0c0 2.5-2.5 2-2.5 5m0 4.01l.01-.011"></svg:path><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirHelpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHelpSquareSolidIcon],svg[iconoir-help-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35zm8.095 4.003C10 7.895 9.75 8.341 9.75 9a.75.75 0 0 1-1.5 0c0-1.091.437-1.958 1.124-2.54c.67-.57 1.538-.835 2.376-.835s1.705.265 2.376.834c.687.583 1.124 1.45 1.124 2.541c0 .766-.196 1.35-.517 1.83c-.269.404-.619.716-.894.962l-.087.078c-.308.276-.539.504-.709.804c-.162.287-.293.688-.293 1.326a.75.75 0 1 1-1.5 0c0-.862.181-1.524.488-2.065c.299-.528.693-.894 1.01-1.18l.072-.065c.3-.27.508-.455.665-.692c.149-.222.265-.514.265-.998c0-.659-.25-1.105-.595-1.397c-.36-.306-.868-.478-1.405-.478s-1.045.172-1.405.478m2.223 10.898a.75.75 0 0 0-1.115-1.004l-.01.011a.75.75 0 0 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirHelpSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHeptagonIcon],svg[iconoir-heptagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.74 1.625a.6.6 0 0 1 .52 0l8.08 3.891a.6.6 0 0 1 .324.407l1.996 8.743a.6.6 0 0 1-.116.508l-5.591 7.01a.6.6 0 0 1-.47.227H7.517a.6.6 0 0 1-.469-.226l-5.591-7.011a.6.6 0 0 1-.116-.508l1.996-8.743a.6.6 0 0 1 .324-.407z"></svg:path>`,
})
export class IconoirHeptagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHexagonIcon],svg[iconoir-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.7 1.173a.6.6 0 0 1 .6 0l8.926 5.154a.6.6 0 0 1 .3.52v10.307a.6.6 0 0 1-.3.52L12.3 22.826a.6.6 0 0 1-.6 0l-8.926-5.154a.6.6 0 0 1-.3-.52V6.847a.6.6 0 0 1 .3-.52z"></svg:path>`,
})
export class IconoirHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHexagonAltIcon],svg[iconoir-hexagon-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.327 2.774a.6.6 0 0 1 .52-.3h10.307a.6.6 0 0 1 .52.3l5.153 8.926a.6.6 0 0 1 0 .6l-5.154 8.926a.6.6 0 0 1-.52.3H6.847a.6.6 0 0 1-.52-.3L1.174 12.3a.6.6 0 0 1 0-.6l5.154-8.926Z"></svg:path>`,
})
export class IconoirHexagonAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHexagonDiceIcon],svg[iconoir-hexagon-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M11.7 1.173a.6.6 0 0 1 .6 0l8.926 5.154a.6.6 0 0 1 .3.52v10.307a.6.6 0 0 1-.3.52L12.3 22.826a.6.6 0 0 1-.6 0l-8.926-5.154a.6.6 0 0 1-.3-.52V6.847a.6.6 0 0 1 .3-.52z"></svg:path><svg:path stroke-linecap="round" d="M17 15H7l5-8z"></svg:path><svg:path d="M2.5 6.5L12 7m-9.5-.5L7 15m14.5-8.5L17 15m4.5-8.5L12 7V1m9.5 16.5L17 15M2.5 17.5L7 15m0 0l5 8l5-8"></svg:path></svg:g>`,
})
export class IconoirHexagonDiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHexagonPlusIcon],svg[iconoir-hexagon-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h3m3 0h-3m0 0V9m0 3v3m-.3-13.827a.6.6 0 0 1 .6 0l8.926 5.154a.6.6 0 0 1 .3.52v10.307a.6.6 0 0 1-.3.52L12.3 22.826a.6.6 0 0 1-.6 0l-8.926-5.154a.6.6 0 0 1-.3-.52V6.847a.6.6 0 0 1 .3-.52z"></svg:path>`,
})
export class IconoirHexagonPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHistoricShieldIcon],svg[iconoir-historic-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 15.528V2.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v12.928a4 4 0 0 1-2.211 3.578l-5.52 2.76a.6.6 0 0 1-.537 0l-5.52-2.76A4 4 0 0 1 4 15.528"></svg:path>`,
})
export class IconoirHistoricShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHistoricShieldAltIcon],svg[iconoir-historic-shield-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m11.732 21.866l-5.52-2.76A4 4 0 0 1 4 15.528V2.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6v12.928a4 4 0 0 1-2.211 3.578l-5.52 2.76a.6.6 0 0 1-.537 0M12 10V2m-8 8h16"></svg:path>`,
})
export class IconoirHistoricShieldAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeIcon],svg[iconoir-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path>`,
})
export class IconoirHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeAltIcon],svg[iconoir-home-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10 18v-3a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v3M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"></svg:path><svg:path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path></svg:g>`,
})
export class IconoirHomeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeAltSlimIcon],svg[iconoir-home-alt-slim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 17v-4M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path>`,
})
export class IconoirHomeAltSlimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeAltSlimHorizIcon],svg[iconoir-home-alt-slim-horiz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 16h4M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path>`,
})
export class IconoirHomeAltSlimHorizIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeHospitalIcon],svg[iconoir-home-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.5L12 4l9 5.5M19 13v6.4a.6.6 0 0 1-.6.6H5.6a.6.6 0 0 1-.6-.6V13"></svg:path><svg:path d="M13.667 17h-3.334v-2.333H8v-3.334h2.333V9h3.334v2.333H16v3.334h-2.333z"></svg:path></svg:g>`,
})
export class IconoirHomeHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeSaleIcon],svg[iconoir-home-sale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 9.846c-1-.923-3.667-1.23-3.667.616S14 11.385 14 13.23s-3 1.846-4 .615m2 .857V16m0-6.887V8M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"></svg:path><svg:path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path></svg:g>`,
})
export class IconoirHomeSaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeSecureIcon],svg[iconoir-home-secure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 12h.4a.6.6 0 0 1 .6.6v2.8a.6.6 0 0 1-.6.6H9.6a.6.6 0 0 1-.6-.6v-2.8a.6.6 0 0 1 .6-.6h.4m4 0v-2c0-.667-.4-2-2-2s-2 1.333-2 2v2m4 0h-4"></svg:path><svg:path d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path></svg:g>`,
})
export class IconoirHomeSecureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeShieldIcon],svg[iconoir-home-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m12.502 9.13l2.049.531c.264.069.45.309.441.582C14.826 15.232 12 16 12 16s-2.826-.768-2.992-5.757a.584.584 0 0 1 .441-.582l2.05-.53a2 2 0 0 1 1.003 0M2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8"></svg:path><svg:path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path></svg:g>`,
})
export class IconoirHomeShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeSimpleIcon],svg[iconoir-home-simple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 21H7a4 4 0 0 1-4-4v-6.292a4 4 0 0 1 1.927-3.421l5-3.03a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.707V17a4 4 0 0 1-4 4m-8-4h6"></svg:path>`,
})
export class IconoirHomeSimpleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeSimpleDoorIcon],svg[iconoir-home-simple-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 21H7a4 4 0 0 1-4-4v-6.292a4 4 0 0 1 1.927-3.421l5-3.03a4 4 0 0 1 4.146 0l5 3.03A4 4 0 0 1 21 10.707V17a4 4 0 0 1-4 4h-2m-6 0v-4a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m-6 0h6"></svg:path>`,
})
export class IconoirHomeSimpleDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeTableIcon],svg[iconoir-home-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 7v10M1 7h22M4 10h16m0-3v10"></svg:path>`,
})
export class IconoirHomeTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeTemperatureInIcon],svg[iconoir-home-temperature-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m2 8l9.732-4.866a.6.6 0 0 1 .536 0L22 8m-2 3v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></svg:path><svg:path d="M12 18a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-10.5V14m0-2h2m-2-3h2"></svg:path></svg:g>`,
})
export class IconoirHomeTemperatureInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeTemperatureOutIcon],svg[iconoir-home-temperature-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 8L4.311 3.156a.6.6 0 0 0-.6.037L2.5 4m9.5 7v8a2 2 0 0 1-2 2H7m0 0H3.6a.6.6 0 0 1-.6-.6v-4.8a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6zm12-3a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0-10.5V14m0-2h2m-2-3h2"></svg:path>`,
})
export class IconoirHomeTemperatureOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHomeUserIcon],svg[iconoir-home-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.5 9.5L12 4l9.5 5.5"></svg:path><svg:path d="M7 21v-1a5 5 0 0 1 10 0v1"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirHomeUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHorizDistributionLeftIcon],svg[iconoir-horiz-distribution-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 17V7m0 10h-5.4a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H19m0 10v3m0-13V4M9 17V7m0 10H5.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H9m0 10v3M9 7V4"></svg:path>`,
})
export class IconoirHorizDistributionLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHorizDistributionLeftSolidIcon],svg[iconoir-horiz-distribution-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M19 7v10h-5.4a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 17V7m0 10h-5.4a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H19m0 10v3m0-13V4"></svg:path><svg:path fill="currentColor" d="M9 7v10H5.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17V7m0 10H5.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6H9m0 10v3M9 7V4"></svg:path></svg:g>`,
})
export class IconoirHorizDistributionLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHorizDistributionRightIcon],svg[iconoir-horiz-distribution-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17V7m0 10h5.4a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6H5m0 10v3M5 7V4m10 13V7m0 10h3.4a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6H15m0 10v3m0-13V4"></svg:path>`,
})
export class IconoirHorizDistributionRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHorizDistributionRightSolidIcon],svg[iconoir-horiz-distribution-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M5 7v10h5.4a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17V7m0 10h5.4a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6H5m0 10v3M5 7V4"></svg:path><svg:path fill="currentColor" d="M15 7v10h3.4a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 17V7m0 10h3.4a.6.6 0 0 0 .6-.6V7.6a.6.6 0 0 0-.6-.6H15m0 10v3m0-13V4"></svg:path></svg:g>`,
})
export class IconoirHorizDistributionRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHorizontalMergeIcon],svg[iconoir-horizontal-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 12h-8m0 0l3.5-3.5M14 12l3.5 3.5M2 12h8m0 0L6.5 8.5M10 12l-3.5 3.5M10 21V3m4 18V3"></svg:path>`,
})
export class IconoirHorizontalMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHorizontalSplitIcon],svg[iconoir-horizontal-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 12H2m0 0l3.5-3.5M2 12l3.5 3.5M14 12h8m0 0l-3.5-3.5M22 12l-3.5 3.5M10 21V3m4 18V3"></svg:path>`,
})
export class IconoirHorizontalSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHospitalIcon],svg[iconoir-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6.4 8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 1 .6-.6h8.8a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 0 .6.6h1.8a.6.6 0 0 1 .6.6v11.8a.6.6 0 0 1-.6.6H4.6a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9.992 8h2m2 0h-2m0 0V6m0 2v2M16 17.01l.01-.011M16 13.01l.01-.011M12 13.01l.01-.011M8 13.01l.01-.011M8 17.01l.01-.011m3.99.011l.01-.011"></svg:path></svg:g>`,
})
export class IconoirHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHospitalCircleIcon],svg[iconoir-hospital-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10M8 12h8m-8 0V7m0 5v5m8-5v5m0-5V7"></svg:path>`,
})
export class IconoirHospitalCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHospitalCircleSolidIcon],svg[iconoir-hospital-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M8.75 7a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0v-4.25h6.5V17a.75.75 0 0 0 1.5 0V7a.75.75 0 0 0-1.5 0v4.25h-6.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirHospitalCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHotAirBalloonIcon],svg[iconoir-hot-air-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="1.5" d="M4 9.5c0 4.571 5.714 8 5.714 8h4.572S20 14.071 20 9.5s-3.582-8-8-8s-8 3.429-8 8"></svg:path><svg:path stroke-linejoin="round" d="M9 2c-3 6 1 15.5 1 15.5M14.884 2c3 6-1 15.5-1 15.5"></svg:path><svg:path stroke-linecap="round" d="M13.4 23h-2.8a.6.6 0 0 1-.6-.6v-1.8a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6v1.8a.6.6 0 0 1-.6.6Z"></svg:path></svg:g>`,
})
export class IconoirHotAirBalloonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHourglassIcon],svg[iconoir-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12a7 7 0 0 0 7-7H5a7 7 0 0 0 7 7m0 0a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7M5 2h14M5 22h14"></svg:path>`,
})
export class IconoirHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHouseRoomsIcon],svg[iconoir-house-rooms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M11 19v2m0-9v4m5-4v4h-2m7-4H8m-3 0H3m0-7l9-2l9 2"></svg:path><svg:path d="M21 8.6v11.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V8.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path></svg:g>`,
})
export class IconoirHouseRoomsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirHtml5Icon],svg[iconoir-html5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4 3l1.778 17.09L12 22l6.222-1.91L20 3z"></svg:path><svg:path d="M17 7H7.5l.5 4.5h8l-.5 5.5l-3.5 1l-3.5-1l-.25-2.5"></svg:path></svg:g>`,
})
export class IconoirHtml5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirIceCreamIcon],svg[iconoir-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M14 18v2a2 2 0 1 1-4 0v-2m-5-6h14"></svg:path><svg:path d="M7 18a2 2 0 0 1-2-2V9a7 7 0 1 1 14 0v7a2 2 0 0 1-2 2z"></svg:path></svg:g>`,
})
export class IconoirIceCreamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirIceCreamSolidIcon],svg[iconoir-ice-cream-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.75 20a1.25 1.25 0 1 0 2.5 0v-2h1.5v2a2.75 2.75 0 1 1-5.5 0v-2h1.5z"></svg:path><svg:path d="M4.25 16a2.75 2.75 0 0 0 2.751 2.75H17A2.75 2.75 0 0 0 19.75 16V9a7.75 7.75 0 0 0-15.5 0zm13-3.25a.75.75 0 0 0 0-1.5H6.75a.75.75 0 0 0 0 1.5z"></svg:path></svg:g>`,
})
export class IconoirIceCreamSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirIconoirIcon],svg[iconoir-iconoir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path></svg:g>`,
})
export class IconoirIconoirIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirImportIcon],svg[iconoir-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 13v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M12 3v12m0 0l-3.5-3.5M12 15l3.5-3.5"></svg:path>`,
})
export class IconoirImportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirInclinationIcon],svg[iconoir-inclination-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 19H3.41a.6.6 0 0 1-.431-1.016L16.444 4"></svg:path><svg:path d="M20 16c-.5-3.5-1-5-3-8"></svg:path></svg:g>`,
})
export class IconoirInclinationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirIndustryIcon],svg[iconoir-industry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 10c0-1-1-2-3-2h-1a3 3 0 0 1-3-3V2m7 19h3v-9h-3v4.5m0 4.5v-4.5m0 4.5H3v-4l3.5-3l4 2.5l4-2.5l3.5 2.5m3-6.5c0-6-4-6-4-6s4 .5 4-2"></svg:path>`,
})
export class IconoirIndustryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirInfiniteIcon],svg[iconoir-infinite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 9l-.25.375M10 9a5 5 0 1 0 0 6l.334-.5M10 9l4 6a5 5 0 1 0 0-6"></svg:path>`,
})
export class IconoirInfiniteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirInfoCircleIcon],svg[iconoir-info-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11.5v5m0-8.99l.01-.011M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirInfoCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirInfoCircleSolidIcon],svg[iconoir-info-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12M12 10.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75M12.568 8a.75.75 0 1 0-1.115-1.003l-.01.011a.75.75 0 1 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirInfoCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirInputFieldIcon],svg[iconoir-input-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2m1 2.5h1.5m1.5 0H6.5m0 0v7m0 0H5m1.5 0H8"></svg:path>`,
})
export class IconoirInputFieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirInputOutputIcon],svg[iconoir-input-output-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-miterlimit="1.5" d="M14 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path><svg:path d="M3 19V5"></svg:path></svg:g>`,
})
export class IconoirInputOutputIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirInputSearchIcon],svg[iconoir-input-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12v-2a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v0a5 5 0 0 0 5 5h4m8.124 4.119a3 3 0 1 0-4.248-4.237a3 3 0 0 0 4.248 4.237m0 0L22 21"></svg:path>`,
})
export class IconoirInputSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirInstagramIcon],svg[iconoir-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path d="M3 16V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17.5 6.51l.01-.011"></svg:path></svg:g>`,
})
export class IconoirInstagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirInternetIcon],svg[iconoir-internet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"></svg:path><svg:path d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirInternetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirIntersectIcon],svg[iconoir-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 13.5v3M13.5 21h3m0-12H9.6a.6.6 0 0 0-.6.6v6.9m1.5 4.5h-.9a.6.6 0 0 1-.6-.6v-.9m12 0v.9a.6.6 0 0 1-.6.6h-.9m0-12h.9a.6.6 0 0 1 .6.6v.9m-18 0v-3M7.5 3h3"></svg:path><svg:path d="M7.5 15h6.9a.6.6 0 0 0 .6-.6V7.5M4.5 15h-.9a.6.6 0 0 1-.6-.6v-.9m0-9v-.9a.6.6 0 0 1 .6-.6h.9m9 0h.9a.6.6 0 0 1 .6.6v.9"></svg:path></svg:g>`,
})
export class IconoirIntersectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirIntersectAltIcon],svg[iconoir-intersect-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15.01 3l-.01.011M11.01 3l-.01.011M7.01 3L7 3.011M3.01 3L3 3.011M3.01 7L3 7.011M3.01 11l-.01.011M3.01 15l-.01.011m6 5.999l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011m3.99.011l.01-.011M21 17.01l.01-.011M21 13.01l.01-.011M21 9.01l.01-.011M9 17v-7a1 1 0 0 1 1-1h7"></svg:path><svg:path d="M15 7v7a1 1 0 0 1-1 1H7"></svg:path></svg:g>`,
})
export class IconoirIntersectAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirIosSettingsIcon],svg[iconoir-ios-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m6-6h-6M9 6.803L12 12m0 0l-3 5.197"></svg:path><svg:path stroke-dasharray="1 3" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirIosSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirIpAddressTagIcon],svg[iconoir-ip-address-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 15V9a6 6 0 0 1 6-6h8a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H8a6 6 0 0 1-6-6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6M9 9v6m3-3h2.5a1.5 1.5 0 0 0 1.5-1.5v0A1.5 1.5 0 0 0 14.5 9H12"></svg:path></svg:g>`,
})
export class IconoirIpAddressTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirIrisScanIcon],svg[iconoir-iris-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 3H3v3m9 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="M21 12c-1.889 2.991-5.282 6-9 6s-7.111-3.009-9-6c2.299-2.842 4.992-6 9-6s6.701 3.158 9 6m-3-9h3v3M6 21H3v-3m15 3h3v-3"></svg:path></svg:g>`,
})
export class IconoirIrisScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirItalicIcon],svg[iconoir-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5h3m3 0h-3m0 0l-4 14m0 0H7m3 0h3"></svg:path>`,
})
export class IconoirItalicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirItalicSquareIcon],svg[iconoir-italic-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 6h2m2 0h-2m0 0l-4 12m0 0H8m2 0h2"></svg:path><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirItalicSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirItalicSquareSolidIcon],svg[iconoir-italic-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zM16 6.75h-1.46l-3.5 10.5H12a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h1.46l3.5-10.5H12a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 0 1.5" clip-rule="evenodd"></svg:path>`,
})
export class IconoirItalicSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirJellyfishIcon],svg[iconoir-jellyfish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2c4.97 0 9 4.104 9 9.167l-.002.204c-.02.954-.865 1.629-1.819 1.629H4.821c-.954 0-1.798-.675-1.819-1.629L3 11.167C3 6.104 7.03 2 12 2M6 13l1 1.125c.57.642.57 1.608 0 2.25v0a1.693 1.693 0 0 0 0 2.25v0c.57.642.57 1.608 0 2.25L6 22m5-9l1 1.125c.57.642.57 1.608 0 2.25v0a1.693 1.693 0 0 0 0 2.25v0c.57.642.57 1.608 0 2.25L11 22m5-9l1 1.125c.57.642.57 1.608 0 2.25v0a1.693 1.693 0 0 0 0 2.25v0c.57.642.57 1.608 0 2.25L16 22"></svg:path>`,
})
export class IconoirJellyfishIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirJournalIcon],svg[iconoir-journal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 6h12M6 10h12m-5 4h5m-5 4h5M2 21.4V2.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v18.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6"></svg:path><svg:path d="M6 18v-4h3v4z"></svg:path></svg:g>`,
})
export class IconoirJournalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirJournalPageIcon],svg[iconoir-journal-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6 6h8m-8 4h12m-5 4h5m-5 4h5M2 21.4V2.6a.6.6 0 0 1 .6-.6h15.652a.6.6 0 0 1 .424.176l3.148 3.148A.6.6 0 0 1 22 5.75V21.4a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6"></svg:path><svg:path d="M6 18v-4h3v4zM18 2v3.4a.6.6 0 0 0 .6.6H22"></svg:path></svg:g>`,
})
export class IconoirJournalPageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirJpegFormatIcon],svg[iconoir-jpeg-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M7 15v-3m0 0V9h3v3zm9-3h-3v6h3m6-6h-3v6h3v-2.4M4 9v4.2C4 15 2 15 2 15m11-3h2"></svg:path><svg:path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"></svg:path></svg:g>`,
})
export class IconoirJpegFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirJpgFormatIcon],svg[iconoir-jpg-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 6V3.6a.6.6 0 0 1 .6-.6h14.8a.6.6 0 0 1 .6.6V6M4 18v2.4a.6.6 0 0 0 .6.6h14.8a.6.6 0 0 0 .6-.6V18"></svg:path><svg:path stroke-linejoin="round" d="M10 15v-3m0 0V9h3v3zm9-3h-3v6h3v-2.4M7 9v4.2C7 15 5 15 5 15"></svg:path></svg:g>`,
})
export class IconoirJpgFormatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKanbanBoardIcon],svg[iconoir-kanban-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6M6 6v10m4-10v3m4-3v7m4-7v5"></svg:path>`,
})
export class IconoirKanbanBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyIcon],svg[iconoir-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0 0h12v3m-4-3v3"></svg:path>`,
})
export class IconoirKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyBackIcon],svg[iconoir-key-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0m0 0H2v3m4-3v3"></svg:path>`,
})
export class IconoirKeyBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyCommandIcon],svg[iconoir-key-command-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6v12m6-12v12M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3M9 18a3 3 0 1 1-3-3h12a3 3 0 1 1-3 3"></svg:path>`,
})
export class IconoirKeyCommandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyMinusIcon],svg[iconoir-key-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.992 18h6m-8.58-7.657a4 4 0 1 0 5.657-5.657a4 4 0 0 0-5.657 5.657m0 0l-8.485 8.485l2.121 2.122M6.755 16l2.122 2.121"></svg:path>`,
})
export class IconoirKeyMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyPlusIcon],svg[iconoir-key-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.992 18h3m3 0h-3m0 0v-3m0 3v3m-5.58-10.657a4 4 0 1 0 5.657-5.657a4 4 0 0 0-5.657 5.657m0 0l-8.485 8.485l2.121 2.122M6.755 16l2.122 2.121"></svg:path>`,
})
export class IconoirKeyPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyXmarkIcon],svg[iconoir-key-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.87 20.121L17.993 18m2.121-2.121L17.993 18m0 0l-2.122-2.121M17.992 18l2.121 2.121m-7.701-9.778a4 4 0 1 0 5.657-5.657a4 4 0 0 0-5.657 5.657m0 0l-8.485 8.485l2.121 2.122M6.755 16l2.122 2.121"></svg:path>`,
})
export class IconoirKeyXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeIcon],svg[iconoir-keyframe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.777 13.345l-7.297 8.027a2 2 0 0 1-2.96 0l-7.297-8.027a2 2 0 0 1 0-2.69l7.297-8.027a2 2 0 0 1 2.96 0l7.297 8.027a2 2 0 0 1 0 2.69"></svg:path>`,
})
export class IconoirKeyframeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeAlignCenterIcon],svg[iconoir-keyframe-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.68 12.384l-4.22 5.063a.6.6 0 0 1-.92 0l-4.22-5.063a.6.6 0 0 1 0-.768l4.22-5.063a.6.6 0 0 1 .92 0l4.22 5.063a.6.6 0 0 1 0 .768M12 22v-2m0-16V2M4 12H2m20 0h-2"></svg:path>`,
})
export class IconoirKeyframeAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeAlignCenterSolidIcon],svg[iconoir-keyframe-align-center-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path d="M10.963 6.073a1.35 1.35 0 0 1 2.074 0l4.219 5.062a1.35 1.35 0 0 1 0 1.729l-4.219 5.063a1.35 1.35 0 0 1-2.074 0l-4.22-5.063a1.35 1.35 0 0 1 0-1.729z"></svg:path><svg:path fill-rule="evenodd" d="M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m0-18a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirKeyframeAlignCenterSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeAlignHorizontalIcon],svg[iconoir-keyframe-align-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.68 12.384l-4.22 5.063a.6.6 0 0 1-.92 0l-4.22-5.063a.6.6 0 0 1 0-.768l4.22-5.063a.6.6 0 0 1 .92 0l4.22 5.063a.6.6 0 0 1 0 .768M4 12H2m20 0h-2"></svg:path>`,
})
export class IconoirKeyframeAlignHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeAlignHorizontalSolidIcon],svg[iconoir-keyframe-align-horizontal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path d="M10.963 6.073a1.35 1.35 0 0 1 2.074 0l4.22 5.062a1.35 1.35 0 0 1 0 1.729l-4.22 5.063a1.35 1.35 0 0 1-2.074 0l-4.22-5.063a1.35 1.35 0 0 1 .001-1.729z"></svg:path><svg:path fill-rule="evenodd" d="M1.25 12a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75m18 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirKeyframeAlignHorizontalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeAlignVerticalIcon],svg[iconoir-keyframe-align-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.68 12.384l-4.22 5.063a.6.6 0 0 1-.92 0l-4.22-5.063a.6.6 0 0 1 0-.768l4.22-5.063a.6.6 0 0 1 .92 0l4.22 5.063a.6.6 0 0 1 0 .768M12 22v-2m0-16V2"></svg:path>`,
})
export class IconoirKeyframeAlignVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeAlignVerticalSolidIcon],svg[iconoir-keyframe-align-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path d="M10.963 6.073a1.35 1.35 0 0 1 2.074 0l4.22 5.062a1.35 1.35 0 0 1 0 1.729l-4.22 5.063a1.35 1.35 0 0 1-2.074 0l-4.22-5.063a1.35 1.35 0 0 1 .001-1.729z"></svg:path><svg:path fill-rule="evenodd" d="M12 19.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75m0-18a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirKeyframeAlignVerticalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeMinusIcon],svg[iconoir-keyframe-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 5h6m-5.181 9.329l-5.324 5.99a2 2 0 0 1-2.99 0l-5.324-5.99a2 2 0 0 1 0-2.658l5.324-5.99a2 2 0 0 1 2.99 0l5.324 5.99a2 2 0 0 1 0 2.658"></svg:path>`,
})
export class IconoirKeyframeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeMinusInIcon],svg[iconoir-keyframe-minus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m5.777 1.345l-7.297 8.027a2 2 0 0 1-2.96 0l-7.297-8.027a2 2 0 0 1 0-2.69l7.297-8.027a2 2 0 0 1 2.96 0l7.297 8.027a2 2 0 0 1 0 2.69"></svg:path>`,
})
export class IconoirKeyframeMinusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeMinusInSolidIcon],svg[iconoir-keyframe-minus-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.035 2.124a2.75 2.75 0 0 0-4.07 0L2.668 10.15a2.75 2.75 0 0 0 0 3.7l7.297 8.026a2.75 2.75 0 0 0 4.07 0l7.297-8.027a2.75 2.75 0 0 0 0-3.7zM9 11.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirKeyframeMinusInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeMinusSolidIcon],svg[iconoir-keyframe-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path fill-rule="evenodd" d="M15.25 5a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path><svg:path d="M7.945 5.184a2.75 2.75 0 0 1 4.11 0l5.325 5.99a2.75 2.75 0 0 1 0 3.653l-5.324 5.99a2.75 2.75 0 0 1-4.111 0l-5.324-5.99a2.75 2.75 0 0 1 0-3.654z"></svg:path></svg:g>`,
})
export class IconoirKeyframeMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframePlusIcon],svg[iconoir-keyframe-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 5h3m3 0h-3m0 0V2m0 3v3m-2.181 6.329l-5.324 5.99a2 2 0 0 1-2.99 0l-5.324-5.99a2 2 0 0 1 0-2.658l5.324-5.99a2 2 0 0 1 2.99 0l5.324 5.99a2 2 0 0 1 0 2.658"></svg:path>`,
})
export class IconoirKeyframePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframePlusInIcon],svg[iconoir-keyframe-plus-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m20.777 13.345l-7.297 8.027a2 2 0 0 1-2.96 0l-7.297-8.027a2 2 0 0 1 0-2.69l7.297-8.027a2 2 0 0 1 2.96 0l7.297 8.027a2 2 0 0 1 0 2.69M9 12h3m3 0h-3m0 0V9m0 3v3"></svg:path>`,
})
export class IconoirKeyframePlusInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframePlusInSolidIcon],svg[iconoir-keyframe-plus-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.035 2.124a2.75 2.75 0 0 0-4.07 0L2.668 10.15a2.75 2.75 0 0 0 0 3.7l7.297 8.026a2.75 2.75 0 0 0 4.07 0l7.297-8.027a2.75 2.75 0 0 0 0-3.7zM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirKeyframePlusInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframePlusSolidIcon],svg[iconoir-keyframe-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path fill-rule="evenodd" d="M19 1.25a.75.75 0 0 1 .75.75v2.25H22a.75.75 0 0 1 0 1.5h-2.25V8a.75.75 0 0 1-1.5 0V5.75H16a.75.75 0 0 1 0-1.5h2.25V2a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M7.945 5.184a2.75 2.75 0 0 1 4.11 0l5.325 5.99a2.75 2.75 0 0 1 0 3.653l-5.324 5.99a2.75 2.75 0 0 1-4.111 0l-5.324-5.99a2.75 2.75 0 0 1 0-3.654z"></svg:path></svg:g>`,
})
export class IconoirKeyframePlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframePositionIcon],svg[iconoir-keyframe-position-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m16.68 9.384l-4.22 5.063a.6.6 0 0 1-.92 0L7.32 9.384a.6.6 0 0 1 0-.768l4.22-5.063a.6.6 0 0 1 .92 0l4.22 5.063a.6.6 0 0 1 0 .768M3 20h9m9 0h-9m0 0v-3"></svg:path>`,
})
export class IconoirKeyframePositionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframePositionSolidIcon],svg[iconoir-keyframe-position-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path fill-rule="evenodd" d="M12 16.25a.75.75 0 0 1 .75.75v2.25H21a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5h8.25V17a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path><svg:path d="M10.963 3.073a1.35 1.35 0 0 1 2.074 0l4.22 5.062a1.35 1.35 0 0 1 0 1.729l-4.22 5.063a1.35 1.35 0 0 1-2.074 0l-4.22-5.063a1.35 1.35 0 0 1 .001-1.729z"></svg:path></svg:g>`,
})
export class IconoirKeyframePositionSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframeSolidIcon],svg[iconoir-keyframe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.965 2.124a2.75 2.75 0 0 1 4.07 0l7.297 8.027a2.75 2.75 0 0 1 0 3.7l-7.297 8.026a2.75 2.75 0 0 1-4.07 0L2.668 13.85a2.75 2.75 0 0 1 0-3.7z"></svg:path>`,
})
export class IconoirKeyframeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframesIcon],svg[iconoir-keyframes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.848 13.317L9.505 18.28a2 2 0 0 1-3.01 0l-4.343-4.963a2 2 0 0 1 0-2.634L6.495 5.72a2 2 0 0 1 3.01 0l4.343 4.963a2 2 0 0 1 0 2.634"></svg:path><svg:path d="m13 19l4.884-5.698a2 2 0 0 0 0-2.604L13 5"></svg:path><svg:path d="m17 19l4.884-5.698a2 2 0 0 0 0-2.604L17 5"></svg:path></svg:g>`,
})
export class IconoirKeyframesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframesCoupleIcon],svg[iconoir-keyframes-couple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m15.819 13.329l-5.324 5.99a2 2 0 0 1-2.99 0l-5.324-5.99a2 2 0 0 1 0-2.658l5.324-5.99a2 2 0 0 1 2.99 0l5.324 5.99a2 2 0 0 1 0 2.658"></svg:path><svg:path d="m12 6.375l1.505-1.693a2 2 0 0 1 2.99 0l5.324 5.99a2 2 0 0 1 0 2.657l-5.324 5.99a2 2 0 0 1-2.99 0L12 17.624"></svg:path></svg:g>`,
})
export class IconoirKeyframesCoupleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframesCoupleSolidIcon],svg[iconoir-keyframes-couple-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path fill-rule="evenodd" d="M14.066 5.18L12.56 6.874l-1.121-.997l1.505-1.693a2.75 2.75 0 0 1 4.11 0l5.324 5.99a2.75 2.75 0 0 1 0 3.653m0 0l-5.324 5.99a2.75 2.75 0 0 1-4.11 0l-1.505-1.693l1.12-.997l1.506 1.693a1.25 1.25 0 0 0 1.868 0l5.324-5.99a1.25 1.25 0 0 0 0-1.66l-5.324-5.99a1.25 1.25 0 0 0-1.868 0" clip-rule="evenodd"></svg:path><svg:path d="M6.945 4.184a2.75 2.75 0 0 1 4.11 0l5.325 5.99a2.75 2.75 0 0 1 0 3.653l-5.324 5.99a2.75 2.75 0 0 1-4.111 0l-5.324-5.99a2.75 2.75 0 0 1 0-3.654z"></svg:path></svg:g>`,
})
export class IconoirKeyframesCoupleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframesMinusIcon],svg[iconoir-keyframes-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 12h6M6.25 6l.245-.28a2 2 0 0 1 3.01 0l4.343 4.963a2 2 0 0 1 0 2.634L9.505 18.28a2 2 0 0 1-3.01 0L6.25 18"></svg:path><svg:path d="m13 19l4.884-5.698a2 2 0 0 0 0-2.604L13 5"></svg:path><svg:path d="m17 19l4.884-5.698a2 2 0 0 0 0-2.604L17 5"></svg:path></svg:g>`,
})
export class IconoirKeyframesMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframesPlusIcon],svg[iconoir-keyframes-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 12h3m3 0H5m0 0V9m0 3v3m1.25-9l.245-.28a2 2 0 0 1 3.01 0l4.343 4.963a2 2 0 0 1 0 2.634L9.505 18.28a2 2 0 0 1-3.01 0L6.25 18"></svg:path><svg:path d="m13 19l4.884-5.698a2 2 0 0 0 0-2.604L13 5"></svg:path><svg:path d="m17 19l4.884-5.698a2 2 0 0 0 0-2.604L17 5"></svg:path></svg:g>`,
})
export class IconoirKeyframesPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirKeyframesSolidIcon],svg[iconoir-keyframes-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path fill="currentColor" fill-rule="evenodd" d="m10.07 5.226l4.342 4.963a2.75 2.75 0 0 1 0 3.622l-4.342 4.963a2.75 2.75 0 0 1-4.14 0L1.588 13.81a2.75 2.75 0 0 1 0-3.622L5.93 5.226a2.75 2.75 0 0 1 4.14 0" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13 19l4.884-5.698a2 2 0 0 0 0-2.604L13 5"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17 19l4.884-5.698a2 2 0 0 0 0-2.604L17 5"></svg:path></svg:g>`,
})
export class IconoirKeyframesSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLabelIcon],svg[iconoir-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M3 17.4V6.6a.6.6 0 0 1 .6-.6h13.079c.2 0 .388.1.5.267l3.6 5.4a.6.6 0 0 1 0 .666l-3.6 5.4a.6.6 0 0 1-.5.267H3.6a.6.6 0 0 1-.6-.6Z"></svg:path>`,
})
export class IconoirLabelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLabelSolidIcon],svg[iconoir-label-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-width="1.5" d="M3 17.4V6.6a.6.6 0 0 1 .6-.6h13.079c.2 0 .388.1.5.267l3.6 5.4a.6.6 0 0 1 0 .666l-3.6 5.4a.6.6 0 0 1-.5.267H3.6a.6.6 0 0 1-.6-.6Z"></svg:path>`,
})
export class IconoirLabelSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLampIcon],svg[iconoir-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 21h3m3 0h-3m0 0V11m0-4v4m0 0H6l3-8h6l3 8z"></svg:path>`,
})
export class IconoirLampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLanguageIcon],svg[iconoir-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12"></svg:path><svg:path d="M13 2.05S16 6 16 12s-3 9.95-3 9.95m-2 0S8 18 8 12s3-9.95 3-9.95M2.63 15.5h18.74m-18.74-7h18.74"></svg:path></svg:g>`,
})
export class IconoirLanguageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLaptopIcon],svg[iconoir-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 19h2"></svg:path></svg:g>`,
})
export class IconoirLaptopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLaptopChargingIcon],svg[iconoir-laptop-charging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11.667 5L10 8h4l-1.667 3M11 19h2"></svg:path></svg:g>`,
})
export class IconoirLaptopChargingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLaptopDevModeIcon],svg[iconoir-laptop-dev-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M11 19h2m1-13l2 2l-2 2m-4-4L8 8l2 2"></svg:path></svg:g>`,
})
export class IconoirLaptopDevModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLaptopFixIcon],svg[iconoir-laptop-fix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.8 14.222H3.654a.6.6 0 0 0-.578.437L1.72 19.456A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544zm0 0v-6.11m-17.6 6.11V4a2 2 0 0 1 2-2H12m-1 17h2m4.657-14.172l-2.829 2.829m5.657-2.829A2 2 0 1 1 17.657 2m-2.829 8.485A2 2 0 0 0 12 7.657"></svg:path>`,
})
export class IconoirLaptopFixIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLaptopWarningIcon],svg[iconoir-laptop-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3.2 14.222V4a2 2 0 0 1 2-2h13.6a2 2 0 0 1 2 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 0 0 3.644 22h16.712a2 2 0 0 0 1.924-2.544l-1.48-5.234"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 5v3m0 3.01l.01-.011M11 19h2"></svg:path></svg:g>`,
})
export class IconoirLaptopWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLayoutLeftIcon],svg[iconoir-layout-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M3.6 3h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6Zm6.15 6.75V21M3 9.75h18"></svg:path>`,
})
export class IconoirLayoutLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLayoutRightIcon],svg[iconoir-layout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M20.4 3H3.6a.6.6 0 0 0-.6.6v16.8a.6.6 0 0 0 .6.6h16.8a.6.6 0 0 0 .6-.6V3.6a.6.6 0 0 0-.6-.6Zm-6.15 6.75V21M21 9.75H3"></svg:path>`,
})
export class IconoirLayoutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLeaderboardIcon],svg[iconoir-leaderboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 19H9V8.6a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6zm0-14H9m11.4 14H15v-3.9a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v3.3a.6.6 0 0 1-.6.6M9 19v-5.9a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v5.3a.6.6 0 0 0 .6.6z"></svg:path>`,
})
export class IconoirLeaderboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLeaderboardStarIcon],svg[iconoir-leaderboard-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 21H9v-8.4a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6zm5.4 0H15v-2.9a.6.6 0 0 1 .6-.6h4.8a.6.6 0 0 1 .6.6v2.3a.6.6 0 0 1-.6.6M9 21v-4.9a.6.6 0 0 0-.6-.6H3.6a.6.6 0 0 0-.6.6v4.3a.6.6 0 0 0 .6.6zm1.806-15.887l.909-1.927a.312.312 0 0 1 .57 0l.91 1.927l2.032.311c.261.04.365.376.176.568l-1.47 1.5l.347 2.118c.044.272-.228.48-.462.351l-1.818-1l-1.818 1c-.233.128-.506-.079-.462-.351l.347-2.118l-1.47-1.5c-.19-.192-.085-.528.175-.568z"></svg:path>`,
})
export class IconoirLeaderboardStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLeafIcon],svg[iconoir-leaf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 21s.5-4.5 4-8.5"></svg:path><svg:path d="m19.13 4.242l.594 6.175c.374 3.886-2.54 7.346-6.425 7.72c-3.813.367-7.267-2.42-7.634-6.233a6.936 6.936 0 0 1 6.239-7.569l6.571-.632a.6.6 0 0 1 .655.54"></svg:path></svg:g>`,
})
export class IconoirLeafIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLearningIcon],svg[iconoir-learning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.818 22v-2.857C6.52 16.166 3 14.572 3 10c0-4.57 2.727-8.056 8.182-8c3.927.042 7.636 2.286 7.636 6.858L21 12.286c0 2.286-2.182 2.286-2.182 2.286s.546 5.714-4.364 5.714V22"></svg:path><svg:path d="M11 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke-dasharray=".3 2" d="M11 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class IconoirLearningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLensIcon],svg[iconoir-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M17.197 9q-.15-.259-.323-.5m.937 5a6.01 6.01 0 0 1-4.311 4.311"></svg:path></svg:g>`,
})
export class IconoirLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLensPlusIcon],svg[iconoir-lens-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.992 6h3m3 0h-3m0 0V3m0 3v3m-3.88 4.5C2.835 18.311 6.987 22 12 22c5.523 0 10-4.477 10-10c0-5.013-3.689-9.165-8.5-9.888"></svg:path><svg:path d="M17.197 9q-.15-.259-.323-.5m.937 5a6.01 6.01 0 0 1-4.311 4.311"></svg:path></svg:g>`,
})
export class IconoirLensPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLifebeltIcon],svg[iconoir-lifebelt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path><svg:path d="M8 12a4 4 0 1 0 8 0a4 4 0 0 0-8 0m1.235 2.89L5 19m9.765-4.11L19 19m-4.235-9.89L19 5M9.235 9.11L5 5"></svg:path></svg:g>`,
})
export class IconoirLifebeltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLightBulbIcon],svg[iconoir-light-bulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 18h6m-5 3h4m-5-6c.001-2-.499-2.5-1.5-3.5S6.025 9.487 6 8c-.047-3.05 2-5 6-5c4.001 0 6.049 1.95 6 5c-.023 1.487-.5 2.5-1.5 3.5c-.999 1-1.499 1.5-1.5 3.5"></svg:path>`,
})
export class IconoirLightBulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLightBulbOffIcon],svg[iconoir-light-bulb-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 18h6m-5 3h4m2.5-9.5c1-1 1.477-2.013 1.5-3.5c.048-3.05-2-5-6-5c-1.168 0-2.169.166-3 .477M9 15c0-2-.5-2.5-1.5-3.5S6.023 9.487 6 8a5.6 5.6 0 0 1 .168-1.5M3 3l18 18"></svg:path>`,
})
export class IconoirLightBulbOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLightBulbOnIcon],svg[iconoir-light-bulb-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21 2l-1 1M3 2l1 1m17 13l-1-1M3 16l1-1m5 3h6m-5 3h4M12 3C8 3 5.952 4.95 6 8c.023 1.487.5 2.5 1.5 3.5S9 13 9 15h6c0-2 .5-2.5 1.5-3.5h0c1-1 1.477-2.013 1.5-3.5c.048-3.05-2-5-6-5"></svg:path>`,
})
export class IconoirLightBulbOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLineSpaceIcon],svg[iconoir-line-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 6h10m-10 6h10m-10 6h10M5 19V5m0 14l-2-2.5M5 19l2-2.5M5 5L3 7m2-2l2 2"></svg:path>`,
})
export class IconoirLineSpaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLinearIcon],svg[iconoir-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 20L21 4"></svg:path>`,
})
export class IconoirLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLinkIcon],svg[iconoir-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 0 0 1.143.124"></svg:path><svg:path d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997h1.714c2.84 0 5.143-2.237 5.143-4.997c0-2.379-1.71-4.37-4-4.874A5.3 5.3 0 0 0 16.857 7"></svg:path></svg:g>`,
})
export class IconoirLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLinkSlashIcon],svg[iconoir-link-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7.143 16.995q-.59-.002-1.143-.123c-2.29-.506-4-2.496-4-4.874c0-2.714 2.226-4.923 5-4.996m6.318 2.632A5.5 5.5 0 0 0 11 7.5"></svg:path><svg:path d="M16.857 7q.59.001 1.143.124c2.29.505 4 2.495 4 4.874c0 2.76-2.302 4.997-5.143 4.997h-1.714c-2.826 0-5.143-2.506-5.143-4.997c0 0 0-.998.5-1.498M3 3l18 18"></svg:path></svg:g>`,
})
export class IconoirLinkSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLinkXmarkIcon],svg[iconoir-link-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14 11.998C14 9.506 11.683 7 8.857 7H7.143C4.303 7 2 9.238 2 11.998c0 2.378 1.71 4.368 4 4.873a5.3 5.3 0 0 0 1.143.124M16.857 7q.59.001 1.143.124c2.29.505 4 2.495 4 4.874a4.92 4.92 0 0 1-1.634 3.653"></svg:path><svg:path d="M10 11.998c0 2.491 2.317 4.997 5.143 4.997M18 22.243l2.121-2.122m0 0L22.243 18m-2.122 2.121L18 18m2.121 2.121l2.122 2.122"></svg:path></svg:g>`,
})
export class IconoirLinkXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLinkedinIcon],svg[iconoir-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 8v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5M7 17v-7"></svg:path><svg:path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirLinkedinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLinuxIcon],svg[iconoir-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M2.5 20c1 0 2-.8 2-2v-7c0-3.5 3.1-7 7.5-7m9.5 16c-1 0-2-.8-2-2v-7c0-3.5-3.1-7-7.5-7"></svg:path><svg:path stroke-linejoin="round" d="M12 19c2.761 0 5-1.12 5-2.5S14.761 14 12 14s-5 1.12-5 2.5S9.239 19 12 19"></svg:path><svg:path stroke-linejoin="round" d="M7.75 15c-.463-.635-.75-1.52-.75-2.5C7 10.567 8.12 9 9.5 9s2.5 1.567 2.5 3.5c0 .455-.062.89-.175 1.29M16.25 15c.463-.635.75-1.52.75-2.5c0-1.933-1.12-3.5-2.5-3.5S12 10.567 12 12.5c0 .455.062.89.175 1.29M9.5 12v2m5-2v2"></svg:path></svg:g>`,
})
export class IconoirLinuxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirListIcon],svg[iconoir-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 6h12M4 6.01l.01-.011M4 12.01l.01-.011M4 18.01l.01-.011M8 12h12M8 18h12"></svg:path>`,
})
export class IconoirListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirListSelectIcon],svg[iconoir-list-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 6h11M5 6.01l.01-.011M5 12.01l.01-.011M3.8 17.8l.8.8l2-2M9 12h11M9 18h11"></svg:path>`,
})
export class IconoirListSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLitecoinCircleIcon],svg[iconoir-litecoin-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M10.5 7v9.4a.6.6 0 0 0 .6.6h4.4"></svg:path><svg:path stroke-linejoin="round" d="m8.5 13l4.5-2m-1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10"></svg:path></svg:g>`,
})
export class IconoirLitecoinCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLitecoinCircleSolidIcon],svg[iconoir-litecoin-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12S17.937 22.75 12 22.75S1.25 17.937 1.25 12m9.25-5.75a.75.75 0 0 1 .75.75v3.957l1.445-.642a.75.75 0 0 1 .61 1.37l-2.055.913v3.652h4.25a.75.75 0 0 1 0 1.5h-4.4a1.35 1.35 0 0 1-1.35-1.35v-3.135l-.945.42a.75.75 0 0 1-.61-1.37l1.555-.691V7a.75.75 0 0 1 .75-.75" clip-rule="evenodd"></svg:path>`,
})
export class IconoirLitecoinCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLitecoinRotateOutIcon],svg[iconoir-litecoin-rotate-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M21.168 8A10 10 0 0 0 12 2c-5.185 0-9.45 3.947-9.95 9"></svg:path><svg:path stroke-linejoin="round" d="M18 8h3.4a.6.6 0 0 0 .6-.6V4M2.881 16c1.544 3.532 5.068 6 9.168 6c5.186 0 9.45-3.947 9.951-9"></svg:path><svg:path stroke-linejoin="round" d="M6.05 16h-3.4a.6.6 0 0 0-.6.6V20"></svg:path><svg:path d="M10.5 7v9.4a.6.6 0 0 0 .6.6h4.4"></svg:path><svg:path stroke-linejoin="round" d="m8.5 13l4.5-2"></svg:path></svg:g>`,
})
export class IconoirLitecoinRotateOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLockIcon],svg[iconoir-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 12h1.4a.6.6 0 0 1 .6.6v6.8a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6v-6.8a.6.6 0 0 1 .6-.6H8m8 0V8c0-1.333-.8-4-4-4S8 6.667 8 8v4m8 0H8"></svg:path>`,
})
export class IconoirLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLockSlashIcon],svg[iconoir-lock-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 12H6.6a.6.6 0 0 0-.6.6v6.8a.6.6 0 0 0 .6.6h10.8a.6.6 0 0 0 .6-.6v-.9M16 12V8c0-1.333-.8-4-4-4c-.747 0-1.363.145-1.869.385M16 12h1.4a.6.6 0 0 1 .6.6v.4M8 8v4M3 3l18 18"></svg:path>`,
})
export class IconoirLockSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLockSquareIcon],svg[iconoir-lock-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14.667 12h.733a.6.6 0 0 1 .6.6v3.8a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6v-3.8a.6.6 0 0 1 .6-.6h.733m5.334 0V9.5c0-.833-.534-2.5-2.667-2.5S9.333 8.667 9.333 9.5V12m5.334 0H9.333"></svg:path><svg:path d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirLockSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLoft3dIcon],svg[iconoir-loft-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M22 17c-9 0-11 6-20 6M22 1C13 1 11 7 2 7m10 9.5v-9m0 9l2.5-2.5M12 16.5L9.5 14M12 7.5l2.5 2.5M12 7.5L9.5 10"></svg:path>`,
})
export class IconoirLoft3dIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLogInIcon],svg[iconoir-log-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 12h-7m0 0l3 3m-3-3l3-3m4-3V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"></svg:path>`,
})
export class IconoirLogInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLogNoAccessIcon],svg[iconoir-log-no-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M17.857 9.2a4 4 0 0 0-5.713 5.6m5.713-5.6a4 4 0 0 1-5.713 5.6m5.713-5.6l-5.714 5.6"></svg:path><svg:path d="M19 6V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"></svg:path></svg:g>`,
})
export class IconoirLogNoAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLogOutIcon],svg[iconoir-log-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12h7m0 0l-3 3m3-3l-3-3m3-3V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"></svg:path>`,
})
export class IconoirLogOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowDownLeftIcon],svg[iconoir-long-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.25 19.25l-3.5-3.5l3.5-3.5"></svg:path><svg:path d="M6.75 15.75h6a4 4 0 0 0 4-4v-7"></svg:path></svg:g>`,
})
export class IconoirLongArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowDownLeftSolidIcon],svg[iconoir-long-arrow-down-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M6.22 15.22a.75.75 0 0 0 0 1.06l3.5 3.5a.75.75 0 0 0 1.28-.53v-7a.75.75 0 0 0-1.28-.53z"></svg:path><svg:path d="M9 15.75c0 .414.336.75.75.75h3a4.75 4.75 0 0 0 4.75-4.75v-7a.75.75 0 0 0-1.5 0v7A3.25 3.25 0 0 1 12.75 15h-3a.75.75 0 0 0-.75.75"></svg:path></svg:g>`,
})
export class IconoirLongArrowDownLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowDownRightIcon],svg[iconoir-long-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m13.25 19.25l3.5-3.5l-3.5-3.5"></svg:path><svg:path d="M16.75 15.75h-6a4 4 0 0 1-4-4v-7"></svg:path></svg:g>`,
})
export class IconoirLongArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowDownRightSolidIcon],svg[iconoir-long-arrow-down-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M17.28 15.22a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.28-.53v-7a.75.75 0 0 1 1.28-.53z"></svg:path><svg:path d="M14.5 15.75a.75.75 0 0 1-.75.75h-3A4.75 4.75 0 0 1 6 11.75v-7a.75.75 0 0 1 1.5 0v7A3.25 3.25 0 0 0 10.75 15h3a.75.75 0 0 1 .75.75"></svg:path></svg:g>`,
})
export class IconoirLongArrowDownRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowLeftDownIcon],svg[iconoir-long-arrow-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.5 13.5L8 17l3.5-3.5"></svg:path><svg:path d="M8 17v-6a4 4 0 0 1 4-4h7"></svg:path></svg:g>`,
})
export class IconoirLongArrowLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowLeftDownSolidIcon],svg[iconoir-long-arrow-left-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M8.53 17.53a.75.75 0 0 1-1.06 0l-3.5-3.5a.75.75 0 0 1 .53-1.28h7a.75.75 0 0 1 .53 1.28z"></svg:path><svg:path d="M8 14.75a.75.75 0 0 1-.75-.75v-3A4.75 4.75 0 0 1 12 6.25h7a.75.75 0 0 1 0 1.5h-7A3.25 3.25 0 0 0 8.75 11v3a.75.75 0 0 1-.75.75"></svg:path></svg:g>`,
})
export class IconoirLongArrowLeftDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowLeftUpIcon],svg[iconoir-long-arrow-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4.5 10.5L8 7l3.5 3.5"></svg:path><svg:path d="M8 7v6a4 4 0 0 0 4 4h7"></svg:path></svg:g>`,
})
export class IconoirLongArrowLeftUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowLeftUpSolidIcon],svg[iconoir-long-arrow-left-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M8.53 6.47a.75.75 0 0 0-1.06 0l-3.5 3.5a.75.75 0 0 0 .53 1.28h7a.75.75 0 0 0 .53-1.28z"></svg:path><svg:path d="M8 9.25a.75.75 0 0 0-.75.75v3A4.75 4.75 0 0 0 12 17.75h7a.75.75 0 0 0 0-1.5h-7A3.25 3.25 0 0 1 8.75 13v-3A.75.75 0 0 0 8 9.25"></svg:path></svg:g>`,
})
export class IconoirLongArrowLeftUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowRightDownIcon],svg[iconoir-long-arrow-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 13.5L15.5 17L12 13.5"></svg:path><svg:path d="M15.5 17v-6a4 4 0 0 0-4-4h-7"></svg:path></svg:g>`,
})
export class IconoirLongArrowRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowRightDownSolidIcon],svg[iconoir-long-arrow-right-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M14.97 17.53a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-.53-1.28h-7a.75.75 0 0 0-.53 1.28z"></svg:path><svg:path d="M15.5 14.75a.75.75 0 0 0 .75-.75v-3a4.75 4.75 0 0 0-4.75-4.75h-7a.75.75 0 0 0 0 1.5h7A3.25 3.25 0 0 1 14.75 11v3c0 .414.336.75.75.75"></svg:path></svg:g>`,
})
export class IconoirLongArrowRightDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowRightUpIcon],svg[iconoir-long-arrow-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 10.5L15.5 7L12 10.5"></svg:path><svg:path d="M15.5 7v6a4 4 0 0 1-4 4h-7"></svg:path></svg:g>`,
})
export class IconoirLongArrowRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowRightUp1Icon],svg[iconoir-long-arrow-right-up-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.5 7v6a4 4 0 0 1-4 4h-7m11-10l3.5 3.5M15.5 7L12 10.5"></svg:path>`,
})
export class IconoirLongArrowRightUp1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowRightUpSolidIcon],svg[iconoir-long-arrow-right-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M14.97 6.47a.75.75 0 0 1 1.06 0l3.5 3.5a.75.75 0 0 1-.53 1.28h-7a.75.75 0 0 1-.53-1.28z"></svg:path><svg:path d="M15.5 9.25a.75.75 0 0 1 .75.75v3a4.75 4.75 0 0 1-4.75 4.75h-7a.75.75 0 0 1 0-1.5h7A3.25 3.25 0 0 0 14.75 13v-3a.75.75 0 0 1 .75-.75"></svg:path></svg:g>`,
})
export class IconoirLongArrowRightUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowUpLeftIcon],svg[iconoir-long-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m10.25 4.75l-3.5 3.5l3.5 3.5"></svg:path><svg:path d="M6.75 8.25h6a4 4 0 0 1 4 4v7"></svg:path></svg:g>`,
})
export class IconoirLongArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowUpLeftSolidIcon],svg[iconoir-long-arrow-up-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M6.22 8.78a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.28.53v7a.75.75 0 0 1-1.28.53z"></svg:path><svg:path d="M9 8.25a.75.75 0 0 1 .75-.75h3a4.75 4.75 0 0 1 4.75 4.75v7a.75.75 0 0 1-1.5 0v-7A3.25 3.25 0 0 0 12.75 9h-3A.75.75 0 0 1 9 8.25"></svg:path></svg:g>`,
})
export class IconoirLongArrowUpLeftSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowUpRightIcon],svg[iconoir-long-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m13.25 4.75l3.5 3.5l-3.5 3.5"></svg:path><svg:path d="M16.75 8.25h-6a4 4 0 0 0-4 4v7"></svg:path></svg:g>`,
})
export class IconoirLongArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLongArrowUpRightSolidIcon],svg[iconoir-long-arrow-up-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M17.28 8.78a.75.75 0 0 0 0-1.06l-3.5-3.5a.75.75 0 0 0-1.28.53v7a.75.75 0 0 0 1.28.53z"></svg:path><svg:path d="M14.5 8.25a.75.75 0 0 0-.75-.75h-3A4.75 4.75 0 0 0 6 12.25v7a.75.75 0 0 0 1.5 0v-7A3.25 3.25 0 0 1 10.75 9h3a.75.75 0 0 0 .75-.75"></svg:path></svg:g>`,
})
export class IconoirLongArrowUpRightSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLotOfCashIcon],svg[iconoir-lot-of-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 18v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2m14.5-3.99l.01-.011M7.5 14.01l.01-.011"></svg:path><svg:path d="M4 16H3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2m-6 8a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path></svg:g>`,
})
export class IconoirLotOfCashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirLullabyIcon],svg[iconoir-lullaby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M3 11.507a9.493 9.493 0 0 0 18 4.219c-8.507 0-12.726-4.22-12.726-12.726A9.49 9.49 0 0 0 3 11.507"></svg:path><svg:path d="M19 9.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Zm0 0V3.6a.6.6 0 0 1 .6-.6H21"></svg:path></svg:g>`,
})
export class IconoirLullabyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMacControlKeyIcon],svg[iconoir-mac-control-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m8 14l4-4l4 4"></svg:path></svg:g>`,
})
export class IconoirMacControlKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMacDockIcon],svg[iconoir-mac-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M8 17a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m4 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1"></svg:path><svg:path d="M21 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1M2 17.5l2-1m18 1l-2-1"></svg:path></svg:g>`,
})
export class IconoirMacDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMacOptionKeyIcon],svg[iconoir-mac-option-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 10h3m0 4h-5l-1.667-4H7"></svg:path></svg:g>`,
})
export class IconoirMacOptionKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMacOsWindowIcon],svg[iconoir-mac-os-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 17.714V6.286C2 5.023 2.995 4 4.222 4h15.556C21.005 4 22 5.023 22 6.286v11.428C22 18.977 21.005 20 19.778 20H4.222C2.995 20 2 18.977 2 17.714Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 7.01L5.01 7M7 7.01L7.01 7M9 7.01L9.01 7"></svg:path></svg:g>`,
})
export class IconoirMacOsWindowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMagicWandIcon],svg[iconoir-magic-wand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="m3 21l10-10m5-5l-2.5 2.5"></svg:path><svg:path d="m9.5 2l.945 2.555L13 5.5l-2.555.945L9.5 9l-.945-2.555L6 5.5l2.555-.945zm9.5 8l.54 1.46L21 12l-1.46.54L19 14l-.54-1.46L17 12l1.46-.54z"></svg:path></svg:g>`,
})
export class IconoirMagicWandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMagnetIcon],svg[iconoir-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M4 4v8.296C4 16.551 7.582 20 12 20s8-3.45 8-7.704V4"></svg:path><svg:path d="M4 4h5.63v6.818C9.63 12.023 10.69 13 12 13s2.37-.977 2.37-2.182V4H20M9 8H4m16 0h-5"></svg:path></svg:g>`,
})
export class IconoirMagnetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMagnetEnergyIcon],svg[iconoir-magnet-energy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path stroke-linecap="round" d="M5 9v6.74C5 19.199 8.134 22 12 22s7-2.802 7-6.26V9M5 9h3m8 0h3"></svg:path><svg:path stroke-linecap="round" d="M14.074 11.5v3.56c0 1.072-.928 1.94-2.074 1.94s-2.074-.868-2.074-1.94V11.5"></svg:path><svg:path d="M10 13H5m14 0h-5"></svg:path><svg:path stroke-linecap="round" d="M11.667 2L10 5h4l-1.667 3"></svg:path></svg:g>`,
})
export class IconoirMagnetEnergyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMagnetSolidIcon],svg[iconoir-magnet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" stroke-width="1.5"><svg:path d="M20 7.25a.75.75 0 0 1 .75.75v4.296c0 4.696-3.944 8.454-8.75 8.454s-8.75-3.758-8.75-8.454V8A.75.75 0 0 1 4 7.25h5.63a.75.75 0 0 1 .75.75v2.818c0 .734.665 1.432 1.62 1.432s1.62-.698 1.62-1.432V8a.75.75 0 0 1 .75-.75z"></svg:path><svg:path fill-rule="evenodd" d="M3.25 4A.75.75 0 0 1 4 3.25h5.63a.75.75 0 0 1 .75.75v6.818c0 .734.665 1.432 1.62 1.432s1.62-.698 1.62-1.432V4a.75.75 0 0 1 .75-.75H20a.75.75 0 0 1 0 1.5h-4.88v6.068c0 1.677-1.456 2.932-3.12 2.932s-3.12-1.255-3.12-2.932V4.75H4A.75.75 0 0 1 3.25 4" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M4 9.75A.75.75 0 0 1 3.25 9V4a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75m16 0a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 1.5 0v5a.75.75 0 0 1-.75.75" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirMagnetSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMailIcon],svg[iconoir-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 9l5 3.5L17 9"></svg:path><svg:path d="M2 17V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirMailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMailInIcon],svg[iconoir-mail-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m5 9l4.5 3L14 9"></svg:path><svg:path d="M17 19H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2"></svg:path><svg:path stroke-linejoin="round" d="M23 14h-6m0 0l3-3m-3 3l3 3"></svg:path></svg:g>`,
})
export class IconoirMailInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMailInSolidIcon],svg[iconoir-mail-in-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M.25 7A2.75 2.75 0 0 1 3 4.25h13A2.75 2.75 0 0 1 18.75 7v2.129q-.181.12-.341.28l-3 3a2.25 2.25 0 0 0 0 3.182l2.901 2.901A2.75 2.75 0 0 1 16 19.75H3A2.75 2.75 0 0 1 .25 17zm16.22 6.47l2.28-2.28v5.62l-1-1l-1.28-1.28a.75.75 0 0 1 0-1.06M5.416 8.376a.75.75 0 0 0-.832 1.248l4.5 3a.75.75 0 0 0 .832 0l4.5-3a.75.75 0 0 0-.832-1.248L9.5 11.099z"></svg:path><svg:path d="M20.53 10.47a.75.75 0 0 1 0 1.06l-1.72 1.72H23a.75.75 0 0 1 0 1.5h-4.19l1.72 1.72a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0"></svg:path></svg:g>`,
})
export class IconoirMailInSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMailOpenIcon],svg[iconoir-mail-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m7 12l5 3.5l5-3.5"></svg:path><svg:path d="M2 20V9.132a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 22 9.132V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"></svg:path></svg:g>`,
})
export class IconoirMailOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMailOpenSolidIcon],svg[iconoir-mail-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.415 1.974a2.75 2.75 0 0 0-2.83 0l-8 4.8A2.75 2.75 0 0 0 1.25 9.132V20A2.75 2.75 0 0 0 4 22.75h16A2.75 2.75 0 0 0 22.75 20V9.132a2.75 2.75 0 0 0-1.335-2.358zM7.43 11.386a.75.75 0 1 0-.86 1.228l5 3.5a.75.75 0 0 0 .86 0l5-3.5a.75.75 0 1 0-.86-1.228L12 14.585z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMailOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMailOutIcon],svg[iconoir-mail-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m5 9l4.5 3L14 9"></svg:path><svg:path d="M17 19H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v2"></svg:path><svg:path stroke-linejoin="round" d="M17 14h6m0 0l-3-3m3 3l-3 3"></svg:path></svg:g>`,
})
export class IconoirMailOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMailOutSolidIcon],svg[iconoir-mail-out-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="1.5"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17 14h6m0 0l-3-3m3 3l-3 3"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M.25 7A2.75 2.75 0 0 1 3 4.25h13A2.75 2.75 0 0 1 18.75 7v2.129q-.181.12-.341.28a2.25 2.25 0 0 0-.53 2.341H17a2.25 2.25 0 0 0 0 4.5h.878a2.25 2.25 0 0 0 .435 2.239A2.75 2.75 0 0 1 16 19.75H3A2.75 2.75 0 0 1 .25 17zM17 13.25h1.75v1.5H17a.75.75 0 0 1 0-1.5M5.416 8.376a.75.75 0 0 0-.832 1.248l4.5 3a.75.75 0 0 0 .832 0l4.5-3a.75.75 0 0 0-.832-1.248L9.5 11.099z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconoirMailOutSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMailSolidIcon],svg[iconoir-mail-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4.25A2.75 2.75 0 0 0 1.25 7v10A2.75 2.75 0 0 0 4 19.75h16A2.75 2.75 0 0 0 22.75 17V7A2.75 2.75 0 0 0 20 4.25zm3.43 4.136a.75.75 0 0 0-.86 1.228l5 3.5a.75.75 0 0 0 .86 0l5-3.5a.75.75 0 1 0-.86-1.228L12 11.585z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMailSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMaleIcon],svg[iconoir-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.232 9.747a6 6 0 1 0-8.465 8.506a6 6 0 0 0 8.465-8.506m0 0L20 4m0 0h-4m4 0v4"></svg:path>`,
})
export class IconoirMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapIcon],svg[iconoir-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 19l-5.21 1.737a.6.6 0 0 1-.79-.57V5.433a.6.6 0 0 1 .41-.569L9 3m0 16l6 2m-6-2V3m6 18l5.59-1.863a.6.6 0 0 0 .41-.57V3.832a.6.6 0 0 0-.79-.569L15 5m0 16V5m0 0L9 3"></svg:path>`,
})
export class IconoirMapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapPinIcon],svg[iconoir-map-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirMapPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapPinMinusIcon],svg[iconoir-map-pin-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 9.2C16 13.177 9 20 9 20S2 13.177 2 9.2C2 5.224 5.134 2 9 2s7 3.224 7 7.2Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 19h6"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path></svg:g>`,
})
export class IconoirMapPinMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapPinPlusIcon],svg[iconoir-map-pin-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 9.2C16 13.177 9 20 9 20S2 13.177 2 9.2C2 5.224 5.134 2 9 2s7 3.224 7 7.2Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16 19h3m3 0h-3m0 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class IconoirMapPinPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapPinXmarkIcon],svg[iconoir-map-pin-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M16 9.2C16 13.177 9 20 9 20S2 13.177 2 9.2C2 5.224 5.134 2 9 2s7 3.224 7 7.2Z"></svg:path><svg:path fill="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.88 21.121L19 19m2.122-2.121L19 19m0 0l-2.12-2.121M19 19l2.122 2.121"></svg:path></svg:g>`,
})
export class IconoirMapPinXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapXmarkIcon],svg[iconoir-map-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 19l-5.21 1.737a.6.6 0 0 1-.79-.57V5.433a.6.6 0 0 1 .41-.569L9 3m0 16l5.21 1.737a.6.6 0 0 0 .79-.57V5.433a.6.6 0 0 0-.41-.569L9 3m0 16V3m6 2l5.21-1.737a.6.6 0 0 1 .79.57V15m-3.879 7.364l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L17.12 18.12m2.122 2.122l2.121 2.121"></svg:path>`,
})
export class IconoirMapXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapsArrowIcon],svg[iconoir-maps-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m3.685 18.783l7.88-14.008a.5.5 0 0 1 .87 0l7.88 14.008a.5.5 0 0 1-.617.71l-7.517-2.922a.5.5 0 0 0-.362 0l-7.517 2.923a.5.5 0 0 1-.617-.711"></svg:path>`,
})
export class IconoirMapsArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapsArrowDiagonalIcon],svg[iconoir-maps-arrow-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.031 8.917l15.477-4.334a.5.5 0 0 1 .616.617l-4.333 15.476a.5.5 0 0 1-.94.067l-3.248-7.382a.5.5 0 0 0-.256-.257L3.965 9.856a.5.5 0 0 1 .066-.94"></svg:path>`,
})
export class IconoirMapsArrowDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapsArrowXmarkIcon],svg[iconoir-maps-arrow-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 17.278l-1.819-.707a.5.5 0 0 0-.362 0l-7.517 2.923a.5.5 0 0 1-.617-.711l7.88-14.008a.5.5 0 0 1 .87 0l6.065 10.78m-1.379 6.809l2.122-2.121m0 0l2.121-2.122m-2.121 2.122L17.12 18.12m2.122 2.122l2.121 2.121"></svg:path>`,
})
export class IconoirMapsArrowXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapsGoStraightIcon],svg[iconoir-maps-go-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m4.365 19.787l7.303-6.492a.5.5 0 0 1 .664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.5.5 0 0 0-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865M12 10.5V4m0 0L8 6.5M12 4l4 2.5"></svg:path>`,
})
export class IconoirMapsGoStraightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapsTurnBackIcon],svg[iconoir-maps-turn-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4.365 19.787l7.303-6.492a.5.5 0 0 1 .664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.5.5 0 0 0-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865M5.5 11V6v0s0-3.5 3-3.5C12 2.5 12 6 12 6v4.5"></svg:path><svg:path d="M9 7.5L5.5 11L2 7.5"></svg:path></svg:g>`,
})
export class IconoirMapsTurnBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapsTurnLeftIcon],svg[iconoir-maps-turn-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4.365 19.787l7.303-6.492a.5.5 0 0 1 .664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.5.5 0 0 0-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865M5 6.5h3q0 0 0 0s4 0 4 4"></svg:path><svg:path d="M8.5 9L5 6.5L8.5 4"></svg:path></svg:g>`,
})
export class IconoirMapsTurnLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMapsTurnRightIcon],svg[iconoir-maps-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m4.365 19.787l7.303-6.492a.5.5 0 0 1 .664 0l7.303 6.492c.38.338.072.962-.427.864l-7.113-1.382a.5.5 0 0 0-.19 0l-7.113 1.383c-.499.097-.808-.527-.427-.865M19 6.5h-3q0 0 0 0s-4 0-4 4"></svg:path><svg:path d="M15.5 9L19 6.5L15.5 4"></svg:path></svg:g>`,
})
export class IconoirMapsTurnRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMaskSquareIcon],svg[iconoir-mask-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M10 17.659a6 6 0 0 0 4-11.317m-4 11.317a6 6 0 1 1 4-11.317m-4 11.317L14 6.34"></svg:path></svg:g>`,
})
export class IconoirMaskSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMastercardCardIcon],svg[iconoir-mastercard-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 9v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm0 0H6"></svg:path><svg:path d="M16.5 13.382a1.5 1.5 0 1 1 0 2.236m0-2.236a1.5 1.5 0 1 0 0 2.236"></svg:path></svg:g>`,
})
export class IconoirMastercardCardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMastodonIcon],svg[iconoir-mastodon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M7 13.5V9c0-3 5-3 5 0v3m5 1.5V9c0-3-5-3-5 0v3"></svg:path><svg:path d="M8 17c7.5 1 13 0 13-4V9c0-5.5-4-6.5-6-6.5H9c-3 0-6.067 1-5.863 6.5c.074 1.987.036 4.385.363 7c1 8 10.5 5.5 12 5v-1.5S7.5 21 8 17"></svg:path></svg:g>`,
})
export class IconoirMastodonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMathBookIcon],svg[iconoir-math-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M4 19V5a2 2 0 0 1 2-2h13.4a.6.6 0 0 1 .6.6v13.114M6 17h14M6 21h14"></svg:path><svg:path stroke-linejoin="round" d="M6 21a2 2 0 1 1 0-4"></svg:path><svg:path d="M10 10h4"></svg:path><svg:path stroke-linejoin="round" d="m12 13.01l.01-.011M12 7.01l.01-.011"></svg:path></svg:g>`,
})
export class IconoirMathBookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMaximizeIcon],svg[iconoir-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4H4v3m13-3h3v3M7 20H4v-3m13 3h3v-3"></svg:path>`,
})
export class IconoirMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMedalIcon],svg[iconoir-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.762 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0"></svg:path>`,
})
export class IconoirMedalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMedal1stIcon],svg[iconoir-medal-1st-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.272 10.445L18 2m-8.684 8.632L5 2m7.762 8.048L8.835 2m5.525 0l-1.04 2.5M6 16a6 6 0 1 0 12 0a6 6 0 0 0-12 0"></svg:path><svg:path d="m10.5 15l2-1.5v5"></svg:path></svg:g>`,
})
export class IconoirMedal1stIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMedal1stSolidIcon],svg[iconoir-medal-1st-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.667 1.712a.75.75 0 1 1 1.385.576l-1.04 2.5a.75.75 0 1 1-1.385-.576zm3.647-.015a.75.75 0 1 1 1.372.606l-3.435 7.78a6.75 6.75 0 1 1-6.923.252l-4-8a.75.75 0 1 1 1.342-.67l4 7.998a6.7 6.7 0 0 1 1.875-.398L8.16 2.33a.75.75 0 0 1 1.348-.658l3.755 7.697q.306.059.6.143zM12.05 12.9a.75.75 0 0 1 1.2.6v5a.75.75 0 0 1-1.5 0V15l-.8.6a.75.75 0 0 1-.9-1.2z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMedal1stSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMedalSolidIcon],svg[iconoir-medal-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.648 1.308a.75.75 0 0 0-.98.404l-1.04 2.5a.75.75 0 0 0 1.384.576l1.04-2.5a.75.75 0 0 0-.404-.98m3.655.006a.75.75 0 0 0-.99.383l-3.449 7.814a7 7 0 0 0-.6-.143L9.51 1.671a.75.75 0 0 0-1.348.658l3.384 6.936a6.7 6.7 0 0 0-1.875.398l-4-7.998a.75.75 0 1 0-1.341.67l4 8a6.75 6.75 0 1 0 6.922-.252l3.435-7.78a.75.75 0 0 0-.383-.989" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMedalSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaImageIcon],svg[iconoir-media-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="m3 16l7-3l11 5m-5-8a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path></svg:g>`,
})
export class IconoirMediaImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaImageFolderIcon],svg[iconoir-media-image-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 12.6v7.8a.6.6 0 0 1-.6.6h-7.8a.6.6 0 0 1-.6-.6v-7.8a.6.6 0 0 1 .6-.6h7.8a.6.6 0 0 1 .6.6m-2.5 1.91l.01-.011"></svg:path><svg:path d="m13 18.2l3.5-1.2l5.5 2M2 10V3.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6V9M2 10v8.4a.6.6 0 0 0 .6.6H10m-8-9h8"></svg:path></svg:g>`,
})
export class IconoirMediaImageFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaImageListIcon],svg[iconoir-media-image-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7.6v12.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M18 4H4.6a.6.6 0 0 0-.6.6V18m3-1.2l5.444-1.8L21 18m-4.5-5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path></svg:g>`,
})
export class IconoirMediaImageListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaImagePlusIcon],svg[iconoir-media-image-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13"></svg:path><svg:path d="m3 16l7-3l5.5 2.5M16 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 9h3m3 0h-3m0 0v-3m0 3v3"></svg:path></svg:g>`,
})
export class IconoirMediaImagePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaImageXmarkIcon],svg[iconoir-media-image-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m3 16l7-3l4 1.818M16 10a2 2 0 1 1 0-4a2 2 0 0 1 0 4m.879 11.121L19 19m2.121-2.121L19 19m0 0l-2.121-2.121M19 19l2.121 2.121"></svg:path><svg:path d="M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13"></svg:path></svg:g>`,
})
export class IconoirMediaImageXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaVideoIcon],svg[iconoir-media-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 3.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M9.898 8.513a.6.6 0 0 0-.898.52v5.933a.6.6 0 0 0 .898.521l5.19-2.966a.6.6 0 0 0 0-1.042z"></svg:path></svg:g>`,
})
export class IconoirMediaVideoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaVideoFolderIcon],svg[iconoir-media-video-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 12.6v7.8a.6.6 0 0 1-.6.6h-7.8a.6.6 0 0 1-.6-.6v-7.8a.6.6 0 0 1 .6-.6h7.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M16.918 14.574a.6.6 0 0 0-.918.508v2.835a.6.6 0 0 0 .918.51l2.268-1.418a.6.6 0 0 0 0-1.018zM2 10V3.6a.6.6 0 0 1 .6-.6h6.178a.6.6 0 0 1 .39.144l3.164 2.712a.6.6 0 0 0 .39.144H21.4a.6.6 0 0 1 .6.6V9M2 10v8.4a.6.6 0 0 0 .6.6H10m-8-9h8"></svg:path></svg:g>`,
})
export class IconoirMediaVideoFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaVideoListIcon],svg[iconoir-media-video-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21 7.6v12.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M18 4H4.6a.6.6 0 0 0-.6.6V18m8.909-6.455a.6.6 0 0 0-.909.515v3.88a.6.6 0 0 0 .909.515l3.233-1.94a.6.6 0 0 0 0-1.03z"></svg:path></svg:g>`,
})
export class IconoirMediaVideoListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaVideoPlusIcon],svg[iconoir-media-video-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13m-5 6h3m3 0h-3m0 0v-3m0 3v3"></svg:path><svg:path d="M9.898 8.513a.6.6 0 0 0-.898.52v5.933a.6.6 0 0 0 .898.521l5.19-2.966a.6.6 0 0 0 0-1.042z"></svg:path></svg:g>`,
})
export class IconoirMediaVideoPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediaVideoXmarkIcon],svg[iconoir-media-video-xmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16.879 21.121L19 19m2.121-2.121L19 19m0 0l-2.121-2.121M19 19l2.121 2.121M13 21H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6V13"></svg:path><svg:path d="M9.898 8.513a.6.6 0 0 0-.898.52v5.933a.6.6 0 0 0 .898.521l5.19-2.966a.6.6 0 0 0 0-1.042z"></svg:path></svg:g>`,
})
export class IconoirMediaVideoXmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMediumIcon],svg[iconoir-medium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m8 0c1.105 0 2-1.79 2-4s-.895-4-2-4s-2 1.79-2 4s.895 4 2 4m5 0c.552 0 1-1.79 1-4s-.448-4-1-4s-1 1.79-1 4s.448 4 1 4"></svg:path>`,
})
export class IconoirMediumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMegaphoneIcon],svg[iconoir-megaphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M14 14V6m0 8l6.102 3.487a.6.6 0 0 0 .898-.52V3.033a.6.6 0 0 0-.898-.521L14 6m0 8H7a4 4 0 1 1 0-8h7M7.757 19.3L7 14h4l.677 4.74a1.98 1.98 0 0 1-3.92.56Z"></svg:path>`,
})
export class IconoirMegaphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMenuIcon],svg[iconoir-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h18M3 12h18M3 19h18"></svg:path>`,
})
export class IconoirMenuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMenuScaleIcon],svg[iconoir-menu-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5h8m-8 7h13M3 19h18"></svg:path>`,
})
export class IconoirMenuScaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMessageIcon],svg[iconoir-message-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="1.5" d="M3 20.29V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z"></svg:path>`,
})
export class IconoirMessageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMessageAlertIcon],svg[iconoir-message-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7v2m0 4.01l.01-.011"></svg:path><svg:path d="M3 20.29V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z"></svg:path></svg:g>`,
})
export class IconoirMessageAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMessageAlertSolidIcon],svg[iconoir-message-alert-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 5A2.75 2.75 0 0 1 5 2.25h14A2.75 2.75 0 0 1 21.75 5v10A2.75 2.75 0 0 1 19 17.75H7.961c-.38 0-.739.173-.976.47l-2.33 2.913c-.798.996-2.405.433-2.405-.843zM12 6.25a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0V7a.75.75 0 0 1 .75-.75m.567 7.251a.75.75 0 1 0-1.114-1.004l-.01.011a.75.75 0 1 0 1.114 1.004z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMessageAlertSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMessageSolidIcon],svg[iconoir-message-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 5A2.75 2.75 0 0 1 5 2.25h14A2.75 2.75 0 0 1 21.75 5v10A2.75 2.75 0 0 1 19 17.75H7.961c-.38 0-.739.173-.976.47l-2.33 2.913c-.798.996-2.405.433-2.405-.843z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMessageSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMessageTextIcon],svg[iconoir-message-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 12h10M7 8h6"></svg:path><svg:path d="M3 20.29V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.961a2 2 0 0 0-1.561.75l-2.331 2.914A.6.6 0 0 1 3 20.29Z"></svg:path></svg:g>`,
})
export class IconoirMessageTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMessageTextSolidIcon],svg[iconoir-message-text-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 5A2.75 2.75 0 0 1 5 2.25h14A2.75 2.75 0 0 1 21.75 5v10A2.75 2.75 0 0 1 19 17.75H7.961c-.38 0-.739.173-.976.47l-2.33 2.913c-.798.996-2.405.433-2.405-.843zm4 7a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75M7 7.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMessageTextSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMeterArrowDownRightIcon],svg[iconoir-meter-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.5 3.5L7 8m0 0V4m0 4H3m12 8l-3.5-3.5"></svg:path><svg:path d="M14.5 9C10.358 9 7 12.283 7 16.333a7.2 7.2 0 0 0 .733 3.165a.93.93 0 0 0 .84.502h11.853a.93.93 0 0 0 .841-.502A7.2 7.2 0 0 0 22 16.333C22 12.283 18.642 9 14.5 9Z"></svg:path></svg:g>`,
})
export class IconoirMeterArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMetroIcon],svg[iconoir-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m14 16.01l.01-.011M10 16.01l.01-.011M22 12v3a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5v-3C2 6.477 6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path stroke-linejoin="round" d="M18 12v3a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5v-3a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5"></svg:path><svg:path d="m10.5 20l-2 2.5m5-2.5l2 2.5m1-2.5l2 2.5M7.5 20l-2 2.5"></svg:path><svg:path stroke-linejoin="round" d="M11.786 10h.428C13.2 10 14 10.8 14 11.786a.214.214 0 0 1-.214.214h-3.572a.214.214 0 0 1-.214-.214C10 10.8 10.8 10 11.786 10"></svg:path></svg:g>`,
})
export class IconoirMetroIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneIcon],svg[iconoir-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="6" height="12" x="9" y="2" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H9m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneCheckIcon],svg[iconoir-microphone-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.5 20.5l2 2l5-5"></svg:path><svg:rect width="6" height="12" x="5" y="2" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H5m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneCheckSolidIcon],svg[iconoir-microphone-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15.5 20.5l2 2l5-5"></svg:path><svg:rect width="6" height="12" x="5" y="2" fill="currentColor" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H5m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneMinusIcon],svg[iconoir-microphone-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.992 19h6"></svg:path><svg:rect width="6" height="12" x="5" y="2" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H5m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneMinusSolidIcon],svg[iconoir-microphone-minus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.992 19h6"></svg:path><svg:rect width="6" height="12" x="5" y="2" fill="currentColor" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H5m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneMinusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneMuteIcon],svg[iconoir-microphone-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m3 3l18 18M9 9a5 5 0 0 0 5 5v0m1-3.5V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v.5"></svg:path><svg:path d="M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H9m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneMuteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneMuteSolidIcon],svg[iconoir-microphone-mute-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06"></svg:path><svg:path d="M8.25 4.384a3.134 3.134 0 0 1 3.134-3.134H12A3.75 3.75 0 0 1 15.75 5v5.5a.75.75 0 0 1-1.23.576L9.378 6.791A3.13 3.13 0 0 1 8.25 4.384M14 14.75A5.75 5.75 0 0 1 8.25 9h1.5A4.25 4.25 0 0 0 14 13.25z"></svg:path><svg:path d="M5 9.25a.75.75 0 0 1 .75.75v1a6.25 6.25 0 1 0 12.5 0v-1a.75.75 0 0 1 1.5 0v1a7.75 7.75 0 0 1-15.5 0v-1A.75.75 0 0 1 5 9.25"></svg:path><svg:path d="M12 17.25a.75.75 0 0 1 .75.75v3.25H15a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5h2.25V18a.75.75 0 0 1 .75-.75"></svg:path></svg:g>`,
})
export class IconoirMicrophoneMuteSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophonePlusIcon],svg[iconoir-microphone-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.992 19h3m3 0h-3m0 0v-3m0 3v3"></svg:path><svg:rect width="6" height="12" x="5" y="2" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H5m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophonePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophonePlusSolidIcon],svg[iconoir-microphone-plus-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.992 19h3m3 0h-3m0 0v-3m0 3v3"></svg:path><svg:rect width="6" height="12" x="5" y="2" fill="currentColor" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M1 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H5m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophonePlusSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneSolidIcon],svg[iconoir-microphone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="6" height="12" x="9" y="2" fill="currentColor" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H9m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneSpeakingIcon],svg[iconoir-microphone-speaking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="6" height="12" x="9" y="2" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H9m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneSpeakingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneSpeakingSolidIcon],svg[iconoir-microphone-speaking-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="6" height="12" x="9" y="2" fill="currentColor" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M5 3v2M1 2v4m18-3v2m4-3v4M5 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H9m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneSpeakingSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneWarningIcon],svg[iconoir-microphone-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 14v4m0 4.01l.01-.011"></svg:path><svg:rect width="6" height="12" x="7" y="2" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H7m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneWarningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicrophoneWarningSolidIcon],svg[iconoir-microphone-warning-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M21 14v4m0 4.01l.01-.011"></svg:path><svg:rect width="6" height="12" x="7" y="2" fill="currentColor" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3 10v1a7 7 0 0 0 7 7v0a7 7 0 0 0 7-7v-1m-7 8v4m0 0H7m3 0h3"></svg:path></svg:g>`,
})
export class IconoirMicrophoneWarningSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicroscopeIcon],svg[iconoir-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19 22H7m-2 0h2m0 0v-3m12-3h-9m6-14h-4m0 5c-3 0-5 1-5 4v2m9-8.4v6.8a.6.6 0 0 1-.6.6h-2.8a.6.6 0 0 1-.6-.6V4.6a.6.6 0 0 1 .6-.6h2.8a.6.6 0 0 1 .6.6"></svg:path><svg:path d="M7 19a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path></svg:g>`,
})
export class IconoirMicroscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMicroscopeSolidIcon],svg[iconoir-microscope-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" stroke-width="1.5" clip-rule="evenodd"><svg:path d="M19.75 22a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h1.25V19a.75.75 0 0 1 1.5 0v2.25H19a.75.75 0 0 1 .75.75m0-6a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75m-3-14a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h4a.75.75 0 0 1 .75.75m-4 5a.75.75 0 0 1-.75.75c-1.443 0-2.503.245-3.19.735c-.635.454-1.06 1.2-1.06 2.515v2a.75.75 0 0 1-1.5 0v-2c0-1.685.575-2.94 1.69-3.735C9.002 6.505 10.442 6.25 12 6.25a.75.75 0 0 1 .75.75"></svg:path><svg:path d="M16.75 11.4a1.35 1.35 0 0 1-1.35 1.35h-2.8a1.35 1.35 0 0 1-1.35-1.35V4.6c0-.746.604-1.35 1.35-1.35h2.8c.746 0 1.35.604 1.35 1.35zm-6 4.6a3.75 3.75 0 1 0-7.5 0a3.75 3.75 0 0 0 7.5 0"></svg:path></svg:g>`,
})
export class IconoirMicroscopeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMinusIcon],svg[iconoir-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 12h12"></svg:path>`,
})
export class IconoirMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMinusCircleIcon],svg[iconoir-minus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 12h8m-4 10c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path>`,
})
export class IconoirMinusCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMinusCircleSolidIcon],svg[iconoir-minus-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25m-4 10a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMinusCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMinusHexagonIcon],svg[iconoir-minus-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6M11.7 1.173a.6.6 0 0 1 .6 0l8.926 5.154a.6.6 0 0 1 .3.52v10.307a.6.6 0 0 1-.3.52L12.3 22.826a.6.6 0 0 1-.6 0l-8.926-5.154a.6.6 0 0 1-.3-.52V6.847a.6.6 0 0 1 .3-.52z"></svg:path>`,
})
export class IconoirMinusHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMinusSquareIcon],svg[iconoir-minus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m6-8.4v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6"></svg:path>`,
})
export class IconoirMinusSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMinusSquareDashedIcon],svg[iconoir-minus-square-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 4H4v3m4 5h8M4 11v2m7-9h2m-2 16h2m7-9v2m-3-9h3v3M7 20H4v-3m13 3h3v-3"></svg:path>`,
})
export class IconoirMinusSquareDashedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMinusSquareSolidIcon],svg[iconoir-minus-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm5.4 9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMinusSquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMirrorIcon],svg[iconoir-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 4v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2m0 1l-6 5m6-1l-7.5 6"></svg:path>`,
})
export class IconoirMirrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMobileDevModeIcon],svg[iconoir-mobile-dev-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="m12 19.01l.01-.011"></svg:path><svg:path d="M18 18v3.4a.6.6 0 0 1-.6.6H6.6a.6.6 0 0 1-.6-.6V18M18 6V2.6a.6.6 0 0 0-.6-.6H6.6a.6.6 0 0 0-.6.6V6"></svg:path><svg:path stroke-linejoin="round" d="M15.5 8.5L19 12l-3.5 3.5m-7-7L5 12l3.5 3.5"></svg:path></svg:g>`,
})
export class IconoirMobileDevModeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMobileFingerprintIcon],svg[iconoir-mobile-fingerprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 11V6.362c0-.51.1-1 .284-1.454M22 11V7.815m-7.778-5.08A5.5 5.5 0 0 1 17 2c2.28 0 4.203 1.33 4.805 3.15M15 12V9.824M19 12V6.853C19 5.83 18.105 5 17 5s-2 .83-2 1.853v.794M8 17.01l.01-.011M8 5H3.6a.6.6 0 0 0-.6.6v14.8a.6.6 0 0 0 .6.6h8.8a.6.6 0 0 0 .6-.6V16"></svg:path>`,
})
export class IconoirMobileFingerprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMobileVoiceIcon],svg[iconoir-mobile-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8 17.01l.01-.011M8 5H3.6a.6.6 0 0 0-.6.6v14.8a.6.6 0 0 0 .6.6h8.8a.6.6 0 0 0 .6-.6V16m3-13v10m-3-8v6m9-4v2M10 7v2m9-5v8"></svg:path>`,
})
export class IconoirMobileVoiceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirModernTvIcon],svg[iconoir-modern-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10"></svg:path><svg:path d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirModernTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirModernTv4kIcon],svg[iconoir-modern-tv-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 21h10M13.5 7v4m0 2v-2m0 0l1.37-1.566M17 7l-2.13 2.434m0 0L17 13M9.5 7l-3 4.5H10V13"></svg:path><svg:path d="M2 16.4V3.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v12.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"></svg:path></svg:g>`,
})
export class IconoirModernTv4kIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMoneySquareIcon],svg[iconoir-money-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M3 20.4V3.6a.6.6 0 0 1 .6-.6h16.8a.6.6 0 0 1 .6.6v16.8a.6.6 0 0 1-.6.6H3.6a.6.6 0 0 1-.6-.6Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 8.5c-.685-.685-1.891-1.161-3-1.191M9 15c.644.86 1.843 1.35 3 1.391m0-9.082c-1.32-.036-2.5.561-2.5 2.191c0 3 5.5 1.5 5.5 4.5c0 1.711-1.464 2.446-3 2.391m0-9.082V5.5m0 10.891V18.5"></svg:path></svg:g>`,
})
export class IconoirMoneySquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMoneySquareSolidIcon],svg[iconoir-money-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.6 2.25A1.35 1.35 0 0 0 2.25 3.6v16.8c0 .746.604 1.35 1.35 1.35h16.8a1.35 1.35 0 0 0 1.35-1.35V3.6a1.35 1.35 0 0 0-1.35-1.35zm9.15 3.25a.75.75 0 0 0-1.5 0v1.103c-.515.077-1.02.255-1.447.579C9.13 7.692 8.75 8.483 8.75 9.5q0 .744.342 1.316c.225.376.534.653.865.864c.612.39 1.393.602 2.039.778l.057.016c.719.196 1.284.357 1.685.612c.185.118.305.239.382.367c.073.123.13.292.13.547c0 .61-.245.992-.604 1.243c-.39.273-.965.422-1.62.399c-1-.037-1.955-.464-2.426-1.092a.75.75 0 1 0-1.2.9c.67.893 1.757 1.425 2.85 1.615V18.5a.75.75 0 0 0 1.5 0v-1.391c.628-.075 1.242-.276 1.756-.637c.757-.53 1.244-1.37 1.244-2.472q0-.744-.342-1.316a2.6 2.6 0 0 0-.865-.864c-.612-.39-1.393-.602-2.039-.778l-.057-.016c-.719-.196-1.284-.357-1.685-.612a1.1 1.1 0 0 1-.382-.367a1.03 1.03 0 0 1-.13-.547c0-.614.21-.935.458-1.122c.28-.212.716-.335 1.272-.32c.949.026 1.961.444 2.49.972a.75.75 0 1 0 1.06-1.06c-.682-.683-1.731-1.163-2.78-1.34z" clip-rule="evenodd"></svg:path>`,
})
export class IconoirMoneySquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMoonSatIcon],svg[iconoir-moon-sat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:circle cx="12" cy="12" r="10"></svg:circle><svg:path d="M7.633 3.067A3.001 3.001 0 1 1 4.017 6.32M22 13.05a3.5 3.5 0 1 0-3 5.914"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m14.5 8.51l.01-.011M10 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path></svg:g>`,
})
export class IconoirMoonSatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMoreHorizIcon],svg[iconoir-more-horiz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-8 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m-8 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class IconoirMoreHorizIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMoreHorizCircleIcon],svg[iconoir-more-horiz-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path fill="currentColor" d="M7 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m5 0a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10"></svg:path></svg:g>`,
})
export class IconoirMoreHorizCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[iconoirMoreVertIcon],svg[iconoir-more-vert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 12.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0 8a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-16a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1"></svg:path>`,
})
export class IconoirMoreVertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
