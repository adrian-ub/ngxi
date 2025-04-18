import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilMovieIcon],svg[cil-movie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 488h359.985V24H16v464zM408 56h55.985v40H408Zm0 72h55.985v40H408Zm0 72h55.985v40H408Zm0 72h55.985v40H408Zm0 72h55.985v40H408Zm0 72h55.985v40H408ZM136 200V56h239.985v184H136Zm0 216V272h239.985v184H136ZM48 56h56v40H48Zm0 72h56v40H48Zm0 72h56v40H48Zm0 72h56v40H48Zm0 72h56v40H48Zm0 72h56v40H48Z"></svg:path>`,
})
export class CilMovieIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
