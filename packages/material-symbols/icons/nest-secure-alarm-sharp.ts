import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNestSecureAlarmSharpIcon],svg[material-symbols-nest-secure-alarm-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22M8 10h2V8H8zm3 0h2V8h-2zm3 0h2V8h-2zm-6 3h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2zm-6 3h2v-2H8zm3 0h2v-2h-2zm3 0h2v-2h-2z"></svg:path>`,
})
export class MaterialSymbolsNestSecureAlarmSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
