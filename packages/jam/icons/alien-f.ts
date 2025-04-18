import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamAlienFIcon],svg[jam-alien-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 20.858c-4.5 0-9-6.03-9-11a9 9 0 1 1 18 0c0 4.97-4.5 11-9 11m-1.974-6.181c.529-.192 1.42-1.946.853-3.503c-.566-1.557-2.399-2.32-2.905-2.135c-.506.184-1.42 1.946-.853 3.503c.566 1.557 2.376 2.327 2.905 2.135m3.948 0c.529.192 2.339-.578 2.905-2.135c.567-1.557-.347-3.319-.853-3.503s-2.339.578-2.905 2.135c-.567 1.557.324 3.31.853 3.503"></svg:path>`,
})
export class JamAlienFIcon {
  readonly viewBox = input("-3 -1.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
