import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsZendframeworkIcon],svg[simple-icons-zendframework-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.932 6.242v2.535h5.652L0 17.757h10.219v-2.534h-5.18l6.553-8.98H.932zm13.537.162c-3.178 0-3.178 3.178-3.178 3.178h9.531C24 9.582 24 6.404 24 6.404h-9.531zm-.006 4.067c-3.173 0-3.172 3.172-3.172 3.172l4.762.005c3.178 0 3.177-3.177 3.177-3.177h-4.767zm0 4.049c-3.173 0-3.172 3.183-3.172 3.183l1.584-.006c3.178 0 3.178-3.177 3.178-3.177h-1.59Z"></svg:path>`,
})
export class SimpleIconsZendframeworkIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
