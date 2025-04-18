import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SkypeCheckIcon],svg[fluent-mdl2-skype-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1570 437q42 0 78 15t64 43t42 63t16 79q0 40-15 77t-43 65l-794 795q-28 28-65 43t-77 16q-40 0-77-15t-65-44l-362-362q-28-28-43-65t-16-77q0-42 16-78t43-64t63-42t79-16q40 0 77 15t65 43l220 220l652-653q28-28 65-43t77-15"></svg:path>`,
})
export class FluentMdl2SkypeCheckIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
