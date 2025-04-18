import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBloodTransfusionIcon],svg[openmoji-blood-transfusion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d0cfce" d="M23.606 44.026h9.36v4.777h-9.36z"></svg:path><svg:path fill="#d22f27" d="M16 19.309h25v12.495c0 3.828-2.52 6.93-5.63 6.93h-1.365c-3.13.567-3 5.292-3 5.292h-5.66s.13-4.725-3-5.292h-.714c-3.11 0-5.631-3.102-5.631-6.93zm35.086 1.207h1.419c1.05 0 1.902.852 1.902 1.903v7.77c0 1.05-.852 1.902-1.902 1.902h-1.419a1.9 1.9 0 0 1-1.902-1.902v-7.77c0-1.051.852-1.903 1.902-1.903"></svg:path><svg:path fill="#ea5a47" d="M32.007 30.836a3.513 3.513 0 1 1-7.013-.004s-.038-2.508 2.92-7.045c0 0 .555-.941 1.114-.062c2.959 4.537 2.979 7.111 2.979 7.111"></svg:path><svg:path fill="#d22f27" d="M28.5 23.35c2.257 1.819 3.484 7.166 3.484 7.166c0 2.63-1.548 4.054-3.484 4.054c0 0 3.857-3.178 0-11.22"></svg:path><svg:path fill="#fff" d="m16.839 18.505l23.298-.072s.678-5.53-5.031-5.601c-5.53-.07-13.843-.036-13.843-.036s-4.674.178-4.424 5.709"></svg:path><svg:g fill="none" stroke="#000"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M28.286 49.967V53.9h0a7.315 7.315 0 0 0 5.993 7.211c2.56.518 5.21.378 7.701-.407a7.154 7.154 0 0 0 4.703-8.058a13 13 0 0 1-.224-2.142a9.5 9.5 0 0 1 3.185-7.043c1.982-1.865 4.217-4.534 2.037-11.37M16 19.309v-1.737a5.63 5.63 0 0 1 5.631-5.631H35.37a5.63 5.63 0 0 1 5.631 5.63h0v1.777"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M23.606 44.026h9.36v4.777h-9.36zm27.48-23.51h1.419c1.05 0 1.902.852 1.902 1.903v7.77c0 1.05-.852 1.902-1.902 1.902h-1.419a1.9 1.9 0 0 1-1.902-1.902v-7.77c0-1.051.852-1.903 1.902-1.903m.709 0v-6.603"></svg:path><svg:path stroke-miterlimit="10" stroke-width="2" d="M16 19.309h25v12.495c0 3.828-2.52 6.93-5.63 6.93h-1.365c-3.13.567-3 5.292-3 5.292h-5.66s.13-4.725-3-5.292h-.714c-3.11 0-5.631-3.102-5.631-6.93z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M32.007 30.836a3.513 3.513 0 1 1-7.013-.004s-.038-2.508 2.92-7.045c0 0 .555-.941 1.114-.062c2.959 4.537 2.979 7.111 2.979 7.111"></svg:path></svg:g>`,
})
export class OpenmojiBloodTransfusionIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
