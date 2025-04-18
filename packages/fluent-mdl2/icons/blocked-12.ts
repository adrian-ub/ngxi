import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Blocked12Icon],svg[fluent-mdl2-blocked-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M939 171q129 0 249 33t224 95t190 146t147 190t94 225t34 249q0 129-33 249t-95 224t-146 191t-190 147t-225 94t-249 34t-250-33t-224-95t-190-147t-147-190t-94-224t-34-250q0-129 33-249t95-224t147-190t190-147t224-94t250-34m0 1740q111 0 213-28t192-81t162-126t125-162t81-191t29-214q0-110-28-212t-81-192t-126-162t-163-126t-191-81t-213-29q-111 0-213 28t-192 81t-162 126t-125 162t-81 191t-29 214q0 111 28 213t81 192t125 162t163 126t191 80t214 29m-470-887h939v171H469z"></svg:path>`,
})
export class FluentMdl2Blocked12Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
