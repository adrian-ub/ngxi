import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2WinesIcon],svg[fluent-mdl2-wines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 704q0 110-39 208t-108 175t-162 127t-203 63v643h192q26 0 45 19t19 45t-19 45t-45 19H704q-26 0-45-19t-19-45t19-45t45-19h192v-643q-109-13-202-63t-163-126t-108-175t-39-209q0-88 14-172t43-169L562 0h796l121 363q28 84 42 168t15 173m-1024 0q0 93 35 174t96 142t142 96t175 36q93 0 174-35t142-96t96-142t36-175q0-76-13-149t-34-144t-46-141t-49-142H654l-92 277q-24 73-37 147t-13 152"></svg:path>`,
})
export class FluentMdl2WinesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
