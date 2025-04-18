import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiRailwayTrackIcon],svg[openmoji-railway-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b1cc33" d="M11 17.17h50V56H11z"></svg:path><svg:path fill="#6a462f" d="M26.564 17.552L16 43.649L11 56h50l-5-12.351l-10.564-26.097z"></svg:path><svg:path fill="#a57939" d="m16 54.941l2.075-5.288h35.85L56 54.941zm3.174-8.089h33.652l-1.997-5.091H21.171zm3.025-7.913h27.602l-1.965-5.009H24.164zm3.152-7.831h21.298l-2.063-5.26H27.414zm3.158-8.049h14.982l-1.979-4.377H30.046z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.233 17.17h47.702M16 54.941l2.075-5.288h35.85L56 54.941zm3.174-8.089h33.652l-1.997-5.091H21.171zm3.025-7.913h27.602l-1.965-5.009H24.164zm3.152-7.831h21.298l-2.063-5.26H27.414zm3.158-8.049h14.982l-1.979-4.377H30.046zm-5.31 31.467l9.692-35.801m15.91 35.801l-9.692-35.801"></svg:path>`,
})
export class OpenmojiRailwayTrackIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
