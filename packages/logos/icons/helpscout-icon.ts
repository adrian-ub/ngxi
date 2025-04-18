import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosHelpscoutIconIcon],svg[logos-helpscout-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1292EE" d="m18.432 180.969l90.484-90.485a63.72 63.72 0 0 0 18.99-45.428A64.25 64.25 0 0 0 109.476 0L18.99 90.484A63.72 63.72 0 0 0 0 135.913c0 17.687 7.075 33.512 18.432 45.056m219.136-52.876l-90.484 90.484a63.72 63.72 0 0 0-18.99 45.429a64.25 64.25 0 0 0 18.431 45.056l90.484-90.485A63.72 63.72 0 0 0 256 173.15c0-17.687-7.075-33.513-18.432-45.056m-.559-37.422A63.72 63.72 0 0 0 256 45.242A64.25 64.25 0 0 0 237.568.186L18.991 218.577C7.26 230.307 0 246.32 0 264.192a64.25 64.25 0 0 0 18.432 45.056z"></svg:path>`,
})
export class LogosHelpscoutIconIcon {
  readonly viewBox = input("0 0 256 310")
  readonly width = input("0.83em")
  readonly height = input("1em")
}
