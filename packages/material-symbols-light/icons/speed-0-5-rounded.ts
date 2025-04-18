import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpeed05RoundedIcon],svg[material-symbols-light-speed-0-5-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.75 16.5q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h2.885q.269 0 .442-.173t.173-.442v-1.77q0-.269-.173-.442t-.442-.173h-2.577q-.343 0-.576-.23t-.232-.587V8.317q0-.358.232-.587t.576-.23h3.692q.213 0 .356.144t.144.357t-.144.356t-.356.143h-3.5v3h2.385q.69 0 1.152.463t.463 1.153v1.769q0 .69-.462 1.153t-1.153.462zm-2.5 0q-.214 0-.357-.144t-.143-.357t.144-.356t.357-.143t.356.144t.143.357t-.144.356t-.357.143"></svg:path>`,
})
export class MaterialSymbolsLightSpeed05RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
