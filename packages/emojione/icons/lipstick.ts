import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneLipstickIcon],svg[emojione-lipstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#ed4c5c"><svg:path d="m20.8 6.4l20.1 20.1l-11.2 11.2L2.2 10.2z"></svg:path><svg:path d="M10.6 5.8c-5.2.9-9 2.7-8.6 4.1c.5 1.4 5.1 1.8 10.4.9c5.2-1 9.1-2.8 8.6-4.2s-5.2-1.7-10.4-.8"></svg:path></svg:g><svg:path fill="#ff8080" d="M10.8 5.8c-4.9.8-8.5 2.6-8 3.9s4.8 1.6 9.7.8s8.5-2.6 8-3.8c-.5-1.4-4.8-1.8-9.7-.9"></svg:path><svg:path fill="#e8e8e8" d="m16.855 26.363l12.869-12.869l16.829 16.829l-12.87 12.87z"></svg:path><svg:path fill="#555b61" d="M44.407 54.577L57.84 41.14l4.173 4.171L48.58 58.748z"></svg:path><svg:path fill="#b2c1c0" d="m28.047 38.228l13.43-13.439l3.89 3.888l-13.43 13.439z"></svg:path><svg:path fill="#3e4347" d="m29.229 40.798l14.849-14.85L61.33 43.203l-14.85 14.85z"></svg:path>`,
})
export class EmojioneLipstickIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
