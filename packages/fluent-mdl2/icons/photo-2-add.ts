import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Photo2AddIcon],svg[fluent-mdl2-photo-2-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 576q0-26 19-45t45-19t45 19t19 45t-19 45t-45 19t-45-19t-19-45m640 960v128h-256v256h-128v-256h-256v-128h256v-256h128v256zM922 1216l358 357v91H0V256h1792v896h-128V384H128v421l192-191l512 512l256-256l448 447v91h-91l-357-358zM320 794L128 987v549h933z"></svg:path>`,
})
export class FluentMdl2Photo2AddIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
