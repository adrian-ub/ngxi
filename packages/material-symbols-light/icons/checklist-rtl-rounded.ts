import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightChecklistRtlRoundedIcon],svg[material-symbols-light-checklist-rtl-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.08 16.502l3.897-3.896q.146-.146.354-.153t.354.159q.14.153.14.357t-.14.35l-4.014 4.02q-.242.242-.565.242t-.566-.243L13.603 15.4q-.14-.14-.13-.344q.009-.204.15-.344t.347-.14t.34.14zm0-7.23l3.897-3.897q.146-.146.354-.153t.354.159q.14.153.14.357t-.14.35l-4.014 4.02q-.242.242-.565.242t-.566-.242l-1.938-1.939q-.14-.14-.13-.344q.009-.204.15-.344t.347-.14t.34.14zM3.5 16.115q-.213 0-.356-.144T3 15.615t.144-.356t.356-.143h7q.213 0 .356.143q.144.144.144.357t-.144.356t-.356.144zm0-7.231q-.213 0-.356-.144Q3 8.597 3 8.384t.144-.356t.356-.144h7q.213 0 .356.144t.144.357t-.144.356t-.356.143z"></svg:path>`,
})
export class MaterialSymbolsLightChecklistRtlRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
