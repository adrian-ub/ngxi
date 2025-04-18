import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsAffectscriptIcon],svg[file-icons-affectscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M512 105.026H170.667L0 406.974h341.333L252.29 249.436h177.002l30.195-52.513H222.61l-22.261-39.385h283.676zM83.89 357.48l86.777-153.495l86.777 153.495z" clip-rule="evenodd"></svg:path>`,
})
export class FileIconsAffectscriptIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
