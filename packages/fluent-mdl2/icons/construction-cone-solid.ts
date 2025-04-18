import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ConstructionConeSolidIcon],svg[fluent-mdl2-construction-cone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1920v128H128v-128h270l96-384h802l-32-128H526l64-256h610l-32-128H622l224-896h356l448 1792z"></svg:path>`,
})
export class FluentMdl2ConstructionConeSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
