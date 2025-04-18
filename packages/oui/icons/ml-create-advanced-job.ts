import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMlCreateAdvancedJobIcon],svg[oui-ml-create-advanced-job-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16h-2c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14z"></svg:path><svg:path fill="currentColor" d="M27 20v12h-2V20zm-5 4v8h-2v-8zm10-2v10h-2V22zM17 9v6h6v2h-6v6h-2v-6H9v-2h6V9z" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiMlCreateAdvancedJobIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
