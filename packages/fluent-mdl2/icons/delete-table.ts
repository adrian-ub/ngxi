import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DeleteTableIcon],svg[fluent-mdl2-delete-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1819 1728l227 227l-91 90l-227-227l-227 227l-90-90l227-227l-227-227l91-90l226 226l227-226l90 90zm226 0l3-3v6zm3-1600v1152h-642l-126 126v-126H768v384h512v128H0V128zM640 1280H128v384h512zm0-512H128v384h512zm0-512H128v384h512zm640 512H768v384h512zm0-512H768v384h512zm640 512h-512v384h512zm0-512h-512v384h512z"></svg:path>`,
})
export class FluentMdl2DeleteTableIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
