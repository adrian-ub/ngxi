import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideoCameraBackAddOutlineIcon],svg[material-symbols-light-video-camera-back-add-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.096 19q-.69 0-1.153-.462t-.462-1.15v-5.004h1v5q0 .27.173.443t.442.173h10.77q.269 0 .442-.173t.173-.442V6.615q0-.269-.173-.442Q16.134 6 15.865 6h-5V5h5.003q.688 0 1.15.463t.463 1.153v4.653l3.038-3.038v7.538l-3.038-3.038v4.654q0 .69-.463 1.153T15.866 19zm1.039-3.27h8.692l-2.74-3.653l-2.53 3.192l-1.605-1.925zM5.48 10V8h-2V7h2V5h1v2h2v1h-2v2z"></svg:path>`,
})
export class MaterialSymbolsLightVideoCameraBackAddOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
