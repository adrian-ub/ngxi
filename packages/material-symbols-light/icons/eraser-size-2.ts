import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEraserSize2Icon],svg[material-symbols-light-eraser-size-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.442 18.058q-1.041 0-1.77-.73q-.73-.729-.73-1.77q0-.48.187-.936q.186-.457.554-.824l7.115-7.115q.368-.368.828-.554t.932-.187q1.041 0 1.77.73q.73.728.73 1.77q0 .48-.187.936q-.186.456-.554.824l-7.115 7.115q-.367.368-.828.554t-.932.187"></svg:path>`,
})
export class MaterialSymbolsLightEraserSize2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
