import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideoCameraBackAddIcon],svg[material-symbols-light-video-camera-back-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.096 19q-.69 0-1.153-.462t-.462-1.153v-5.693q.573.347 1.204.52q.63.173 1.296.173q2.036 0 3.46-1.424T10.865 7.5q0-.665-.173-1.296T10.173 5h5.693q.69 0 1.152.463t.463 1.153v4.653l3.038-3.038v7.538l-3.038-3.038v4.654q0 .69-.463 1.153T15.866 19zm.385-9V8h-2V7h2V5h1v2h2v1h-2v2zm.654 5.73h8.692l-2.74-3.653l-2.53 3.192l-1.605-1.925z"></svg:path>`,
})
export class MaterialSymbolsLightVideoCameraBackAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
