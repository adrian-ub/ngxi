import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosStackbitIconIcon],svg[logos-stackbit-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FF364E" d="m177.246 78.768l61.363 30.971a31.48 31.48 0 0 1 17.29 25.637l.101 2.494v70.9a47.263 47.263 0 0 1-44.57 47.184l-2.676.077H.158l78.682-78.783h98.406zM255.856 0l-78.608 78.769H78.84v98.479l-61.52-30.885A31.51 31.51 0 0 1 .099 120.71L0 118.218V47.334A47.263 47.263 0 0 1 44.162.102l3.1-.102z"></svg:path>`,
})
export class LogosStackbitIconIcon {
  readonly viewBox = input("0 0 256 257")
  readonly width = input("1em")
  readonly height = input("1em")
}
