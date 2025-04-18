import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFavoritefolderIcon],svg[whh-favoritefolder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.678 896v128h-96l-128-64l-128 64h-96V896h-320q-53 0-90.5-37.5T.678 768V256q0-26 19-45t45-19h960v576q0 53-37.5 90.5t-90.5 37.5m-147-276l-77-172l-77 172l-179 24l132 130l-34 186l158-92l158 92l-34-186l132-130zm-159-512q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480zm-544-64q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480z"></svg:path>`,
})
export class WhhFavoritefolderIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
