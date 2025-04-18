import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRadioCircleFilledIcon],svg[pepicons-pencil-radio-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilRadioCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M18 10H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M8 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M13 15a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill-rule="evenodd" d="M17.447 4.474a.5.5 0 0 1-.223.67l-10 5a.5.5 0 1 1-.448-.894l10-5a.5.5 0 0 1 .671.224M14 13.65a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilRadioCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilRadioCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
