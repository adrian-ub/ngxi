import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixDiagramModuleNewIcon],svg[ix-diagram-module-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m426.667 320l-.001 63.999l64 .001v42.667l-64-.001v64H384l-.001-64H320V384l63.999-.001L384 320zM341.333 42.667l64 64v192h-42.666v64h-64l-.001 64h-192l-64-64v-320zM320 85.333H85.333v256H320zM170.667 128v21.333h42.666V256h21.334v-21.333h64v64h-64v-21.334h-64v21.334h-64v-64h64V256H192v-85.334h-21.333V192h-64v-64z"></svg:path>`,
})
export class IxDiagramModuleNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
