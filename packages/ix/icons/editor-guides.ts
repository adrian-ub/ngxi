import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixEditorGuidesIcon],svg[ix-editor-guides-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 106.667H192v42.666h42.667v-42.666H448V64H64v384h42.667V234.667h42.666V192h-42.666zM192 192h42.667v42.667H192zm42.667 85.333H192V320h42.667zM192 362.667h42.667v42.666H192zM320 192h-42.667v42.667H320zm42.667 0h42.666v42.667h-42.666zm55.544 115.123l-15.085 15.085l-19.123-19.123v59.582h59.583l-19.125-19.125l15.085-15.085l44.876 44.876l-44.876 44.875l-15.085-15.085L443.585 384h-59.582v59.584l19.125-19.125l15.085 15.084l-44.876 44.876l-44.876-44.876l15.085-15.084l19.123 19.123V384h-59.583l19.125 19.125l-15.085 15.085l-44.876-44.876l44.876-44.876l15.085 15.085l-19.124 19.124h59.582v-59.584l-19.125 19.125l-15.085-15.085l44.876-44.876z" clip-rule="evenodd"></svg:path>`,
})
export class IxEditorGuidesIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
