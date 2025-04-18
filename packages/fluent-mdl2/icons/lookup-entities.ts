import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2LookupEntitiesIcon],svg[fluent-mdl2-lookup-entities-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2048 835l-128-128V256h-512v512h-128V256H768v1408h512v-512h128v512h512v-451l128-128v707H0V128h2048zM640 768H128v384h512zm0 896v-384H128v384zm0-1408H128v384h512zm899 931l162-163h-677V896h677l-162-163l90-90l317 317l-317 317z"></svg:path>`,
})
export class FluentMdl2LookupEntitiesIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
