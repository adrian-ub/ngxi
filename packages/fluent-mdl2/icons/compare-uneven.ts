import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CompareUnevenIcon],svg[fluent-mdl2-compare-uneven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1817 1152h103v128h-22q-20 57-56 104t-85 81t-104 52t-117 19q-60 0-117-18t-105-52t-84-81t-56-105h-22v-128h103l187-560l-418-139v1213q169 11 317 75t272 179h179v128H128v-128h179q123-114 272-178t317-76V410L502 279l163 489h103v128h-22q-20 57-56 104t-85 81t-104 52t-117 19q-60 0-117-18t-105-52t-84-81t-56-105H0V768h103l187-560l-262-87L69 0l827 275V0h128v318l867 288l-41 122l-197-66zM606 896H162q35 60 94 94t128 34t128-34t94-94m-76-128L384 330L238 768zm430 1024q-118 0-231 32t-213 96h888q-99-63-213-95t-231-33m576-1078l-146 438h292zm222 566h-444q35 60 94 94t128 34t128-34t94-94"></svg:path>`,
})
export class FluentMdl2CompareUnevenIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
