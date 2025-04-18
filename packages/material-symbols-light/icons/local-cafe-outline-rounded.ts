import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLocalCafeOutlineRoundedIcon],svg[material-symbols-light-local-cafe-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 20q-.213 0-.356-.144T5 19.499t.144-.356T5.5 19h13q.213 0 .356.144t.144.357t-.144.356T18.5 20zm2.635-3.77q-1.304 0-2.22-.886Q5 14.458 5 13.192V5.038q0-.44.299-.739T6.039 4h13.269q.698 0 1.195.472T21 5.634v2.231q0 .69-.497 1.163q-.497.472-1.195.472h-2v3.692q0 1.266-.916 2.152q-.915.887-2.219.887zm0-1h6.038q.88 0 1.508-.6q.627-.601.627-1.445V5H6v8.192q0 .845.627 1.442t1.508.597M17.307 8.5h2q.288 0 .49-.183T20 7.865v-2.23q0-.27-.202-.452Q19.596 5 19.308 5h-2zm-9.173 6.73H6h10.308z"></svg:path>`,
})
export class MaterialSymbolsLightLocalCafeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
