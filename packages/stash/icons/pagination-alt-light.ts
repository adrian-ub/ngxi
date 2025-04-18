import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPaginationAltLightIcon],svg[stash-pagination-alt-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="M2.5 12.313c0-1.753 0-2.63.327-3.3a3.07 3.07 0 0 1 1.311-1.367c.642-.342 1.482-.342 3.162-.342h9.4c1.68 0 2.52 0 3.162.342c.565.3 1.023.779 1.311 1.368c.327.67.327 1.546.327 3.299v.417c0 1.754 0 2.63-.327 3.3a3.07 3.07 0 0 1-1.311 1.368c-.642.341-1.482.341-3.162.341H7.3c-1.68 0-2.52 0-3.162-.341a3.07 3.07 0 0 1-1.311-1.368c-.327-.67-.327-1.546-.327-3.3z"></svg:path><svg:path fill="currentColor" d="M16 13.044L17 12h-2z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.75 15.13v-4.565a.64.64 0 0 0-.625-.652H7.5m-.2 7.826h9.4c1.68 0 2.52 0 3.162-.341a3.07 3.07 0 0 0 1.311-1.368c.327-.67.327-1.546.327-3.3v-.417c0-1.753 0-2.63-.327-3.3a3.07 3.07 0 0 0-1.311-1.367c-.642-.342-1.482-.342-3.162-.342H7.3c-1.68 0-2.52 0-3.162.342c-.564.3-1.023.779-1.311 1.368c-.327.67-.327 1.546-.327 3.299v.417c0 1.754 0 2.63.327 3.3a3.07 3.07 0 0 0 1.311 1.368c.642.341 1.482.341 3.162.341M17 12l-1 1.043L15 12z"></svg:path></svg:g>`,
})
export class StashPaginationAltLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
