import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamStackoverflowCircleIcon],svg[jam-stackoverflow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10"></svg:path><svg:path d="M12.746 14.068v-2.636h.832v3.511H6.065v-3.511h.832v2.636z"></svg:path><svg:path d="m7.816 11.182l4.087.898l.173-.864l-4.087-.898zm.54-2.046l3.785 1.853l.345-.796L8.703 8.33zm1.05-1.954l3.21 2.807l.53-.67l-3.21-2.808zm2.075-2.08l-.67.523l2.486 3.523l.67-.523zm-3.751 8.08h4.173v-.875H7.73z"></svg:path></svg:g>`,
})
export class JamStackoverflowCircleIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
