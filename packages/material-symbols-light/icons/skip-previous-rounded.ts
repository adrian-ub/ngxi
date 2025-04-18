import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSkipPreviousRoundedIcon],svg[material-symbols-light-skip-previous-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.73 16.116V7.885q0-.213.145-.357t.357-.144t.356.144t.143.356v8.231q0 .213-.144.357q-.144.143-.357.143t-.356-.143t-.143-.357m9.277-.332l-4.662-3.112q-.186-.13-.27-.295T10.992 12t.084-.376q.084-.164.27-.295l4.662-3.112q.106-.08.217-.105t.237-.025q.323 0 .565.222t.242.585v6.212q0 .363-.242.585q-.242.223-.565.223q-.125 0-.237-.025t-.217-.106"></svg:path>`,
})
export class MaterialSymbolsLightSkipPreviousRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
