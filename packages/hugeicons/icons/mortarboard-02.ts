import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMortarboard02Icon],svg[hugeicons-mortarboard-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 8c0 1.342 8.095 5 9.986 5s9.986-3.658 9.986-5s-8.095-5-9.986-5S2 6.658 2 8"></svg:path><svg:path d="m5.994 11l.245 5.63c.005.113.017.226.05.334c.101.333.287.637.571.84c2.221 1.595 8.03 1.595 10.252 0c.284-.203.47-.507.57-.84a1.4 1.4 0 0 0 .05-.334l.245-5.63m2.496-1.5v7m0 0c-.792 1.446-1.142 2.221-1.497 3.5c-.078.455-.016.684.297.888c.128.083.28.112.433.112h1.52a.8.8 0 0 0 .458-.125c.291-.201.366-.422.287-.875c-.311-1.187-.709-2-1.498-3.5"></svg:path></svg:g>`,
})
export class HugeiconsMortarboard02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
