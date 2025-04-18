import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2AltTextIcon],svg[fluent-mdl2-alt-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 704q0-26 19-45t45-19t45 19t19 45t-19 45t-45 19t-45-19t-19-45M0 256h2048v1024h-128V384H128v677l448-447l640 640l256-256l283 282h-182l-101-102l-101 102h-310L576 794l-448 449v421h512v128H0zm768 1792v-640h1280v640zm128-512v384h1024v-384zm256 256v-128h512v128z"></svg:path>`,
})
export class FluentMdl2AltTextIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
