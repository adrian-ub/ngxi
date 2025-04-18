import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMicExternalOffOutlineSharpIcon],svg[material-symbols-light-mic-external-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.462 6.766l-3.15-3.15q.234-.103.438-.129t.365-.026q1.039 0 1.77.729q.73.727.73 1.771q0 .2-.031.382t-.123.423m9.385 9.384l-1-1V4.462h-4.615v6.073l-1-1V3.462h6.615zm-12.23 4.389V17.23h-.77l-.884-8.692h2.034l-4.95-4.962l.708-.708l18.108 18.108l-.708.708l-6.923-6.923v5.777zm.126-4.308h.747l.646-6.566l-.139-.126h-1.93zm5.489 3.307v-5.776L9.05 10.58l-.666 6.65h-.768v2.307zm-5.489-10h-.676h2.069z"></svg:path>`,
})
export class MaterialSymbolsLightMicExternalOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
