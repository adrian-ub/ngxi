import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2VideoOff2Icon],svg[fluent-mdl2-video-off-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1536 760l512-256v1040l-250-125q-18-9-33-15t-31-13t-29-15t-32-20q-15-10-26-20t-20-21t-19-22t-23-25l-177-177V640H957L829 512h707zm384 577V711l-384 193v240zM19 109l90-90l1920 1920l-90 90l-494-493H0V512h421zm109 1299h1189L549 640H128z"></svg:path>`,
})
export class FluentMdl2VideoOff2Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
