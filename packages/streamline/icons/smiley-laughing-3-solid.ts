import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSmileyLaughing3SolidIcon],svg[streamline-smiley-laughing-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.526.982a6.949 6.949 0 1 0 6.948 12.036A6.949 6.949 0 0 0 3.526.982M2.23 5.66a.625.625 0 0 1 .792-.392l1.928.65a.625.625 0 0 1 .113 1.134l-1.441.832A.625.625 0 1 1 2.998 6.8l.243-.14l-.617-.209a.625.625 0 0 1-.393-.792Zm6.483-2.724a.625.625 0 1 0-1.226-.246l-.4 1.995a.625.625 0 0 0 .925.664l1.441-.832a.625.625 0 1 0-.625-1.082l-.244.14zm-4.506 6.96a.5.5 0 0 1 .183-.683l5.83-3.366a.5.5 0 0 1 .683.183c.309.534.472 1.407.281 2.306c-.196.923-.767 1.883-1.936 2.558s-2.286.69-3.184.398c-.874-.284-1.548-.862-1.857-1.396" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSmileyLaughing3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
