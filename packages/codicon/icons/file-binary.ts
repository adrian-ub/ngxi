import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconFileBinaryIcon],svg[codicon-file-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m10.57 1.14l3.28 3.3l.15.36v9.7l-.5.5h-11l-.5-.5v-13l.5-.5h7.72zM3 2v12h10V5l-3-3zm1.46 4.052q0 1.93 1.374 1.93q.686 0 1.05-.52q.369-.521.368-1.499Q7.252 4 5.91 4q-.707 0-1.08.526q-.37.524-.37 1.526m.862-.022q0-1.383.55-1.383q.516 0 .516 1.343c0 1.343-.176 1.343-.527 1.343q-.54 0-.54-1.303zm3.187 1.886h2.435v-.672h-.792V4l-1.665.336v.687l.82-.177v2.398h-.798zm-1.337 5H4.736v-.672h.798V9.846l-.82.177v-.687L6.38 9v3.244h.792v.671zm1.035-1.931q0 1.93 1.375 1.93q.686 0 1.05-.52q.368-.521.368-1.499q0-1.963-1.343-1.963q-.705 0-1.08.526q-.37.524-.37 1.526m.862-.022q0-1.383.55-1.383q.516 0 .516 1.343c0 1.343-.175 1.343-.526 1.343q-.54 0-.54-1.303" clip-rule="evenodd"></svg:path>`,
})
export class CodiconFileBinaryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
