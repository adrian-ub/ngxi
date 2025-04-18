import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineModulePuzzle3SolidIcon],svg[streamline-module-puzzle-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5 0h4.875v1.158a2.125 2.125 0 1 0 0 4.184v1.033H4.368a.625.625 0 0 0-.466 1.042a.875.875 0 1 1-1.305 0a.625.625 0 0 0-.465-1.042H0V1.5A1.5 1.5 0 0 1 1.5 0M0 7.625V12.5A1.5 1.5 0 0 0 1.5 14h4.875v-2.132a.625.625 0 0 1 1.042-.466a.875.875 0 1 0 0-1.305a.625.625 0 0 1-1.042-.465V7.625H5.342a2.125 2.125 0 1 1-4.184 0zm7.625 0v1.033a2.125 2.125 0 1 1 0 4.184V14H12.5a1.5 1.5 0 0 0 1.5-1.5V7.625h-2.132a.625.625 0 0 1-.466-1.042a.875.875 0 1 0-1.305 0a.625.625 0 0 1-.465 1.042zM14 6.375V1.5A1.5 1.5 0 0 0 12.5 0H7.625v2.132a.625.625 0 0 1-1.042.466a.875.875 0 1 0 0 1.305a.625.625 0 0 1 1.042.465v2.007h1.033a2.125 2.125 0 1 1 4.184 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineModulePuzzle3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
