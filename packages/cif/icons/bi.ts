import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifBiIcon],svg[cif-bi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="cifBi0" d="M.5.5h300v180H.5z"></svg:path></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:path fill="#CE1126" fill-rule="nonzero" d="M.5.5h300l-300 180h300z"></svg:path><svg:path fill="#1EB53A" fill-rule="nonzero" d="M.5.5v180l300-180v180z"></svg:path><svg:mask id="cifBi1" fill="#fff"><svg:use href="#cifBi0"></svg:use></svg:mask><svg:path fill="#000" fill-rule="nonzero" stroke="#FFF" stroke-width="22.5" d="m.5.5l300 180m0-180l-300 180" mask="url(#cifBi1)"></svg:path><svg:circle cx="150.5" cy="90.5" r="51" fill="#FFF" fill-rule="nonzero"></svg:circle><svg:path fill="#1EB53A" fill-rule="nonzero" d="m140.108 58.1l3.464 6l-3.464 6h6.928l3.464 6l3.464-6h6.928l-3.464-6l3.464-6h-6.928l-3.464-6l-3.464 6z"></svg:path><svg:path fill="#CE1126" fill-rule="nonzero" d="m141.979 59.18l2.84 4.92l-2.84 4.92h5.681l2.84 4.92l2.841-4.92h5.681l-2.841-4.92l2.841-4.92h-5.681l-2.841-4.92l-2.84 4.92z"></svg:path><svg:path fill="#1EB53A" fill-rule="nonzero" d="m117.233 97.475l3.464 6l-3.464 6h6.928l3.464 6l3.464-6h6.928l-3.464-6l3.464-6h-6.928l-3.464-6l-3.464 6z"></svg:path><svg:path fill="#CE1126" fill-rule="nonzero" d="m119.104 98.555l2.84 4.92l-2.84 4.92h5.681l2.84 4.92l2.841-4.92h5.681l-2.841-4.92l2.841-4.92h-5.681l-2.841-4.92l-2.84 4.92z"></svg:path><svg:path fill="#1EB53A" fill-rule="nonzero" d="m163.184 97.731l3.464 6l-3.464 6h6.929l3.464 6l3.464-6h6.928l-3.464-6.001l3.464-5.999h-6.928l-3.464-6l-3.464 6z"></svg:path><svg:path fill="#CE1126" fill-rule="nonzero" d="m165.055 98.811l2.841 4.92l-2.841 4.92h5.681l2.841 4.919l2.84-4.919h5.681l-2.84-4.92l2.84-4.92h-5.681l-2.84-4.92l-2.841 4.919z"></svg:path></svg:g>`,
})
export class CifBiIcon {
  readonly viewBox = input("0 0 301 181")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
