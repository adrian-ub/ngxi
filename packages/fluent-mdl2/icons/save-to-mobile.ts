import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2SaveToMobileIcon],svg[fluent-mdl2-save-to-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1664v128h-256v-128zM384 128v640h768v128H256V128H128v1381l154 155h102v-512h768v128H512v384h128v-256h128v256h384v128H229L0 1562V128q0-27 10-50t27-40t41-28t50-10h1536q27 0 50 10t40 27t28 41t10 50v512h-128V128h-128v512h-128V128zm1664 768v1024q0 27-10 50t-27 40t-41 28t-50 10h-512q-27 0-50-10t-40-27t-28-41t-10-50V896q0-27 10-50t27-40t41-28t50-10h512q27 0 50 10t40 27t28 41t10 50m-128 1024V896h-512v1024z"></svg:path>`,
})
export class FluentMdl2SaveToMobileIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
