import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconLineStackoverflowIcon],svg[devicon-line-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m83.693 0l-.398.296l-9.478 7.042l34.354 46.17l9.874-7.337Zm-.205 1.385l33.172 44.58l-8.284 6.158l-33.173-44.58ZM62.701 18.054l-.316.379l-7.56 9.071l44.24 36.825l7.874-9.454zm.127 1.395l42.715 35.553l-6.606 7.932l-42.715-35.558zm-16.96 22.229l-.209.449l-4.984 10.702l52.18 24.294l5.2-11.151zm.482 1.316l50.39 23.458l-4.364 9.355L41.992 52.35ZM35.955 67.433l-.102.483l-2.433 11.556l56.332 11.83l2.53-12.031Zm.764 1.174l54.39 11.428l-2.121 10.095l-54.393-11.422ZM9.955 81.943V128h102.442V81.943h-12.262l-.002 33.799H22.221V81.943H10.45Zm.99.99H21.23v33.8h79.894l.002-33.8h10.28v44.076H10.946Zm22.052 10.274v.989l-.494-.494v11.763h57.35V93.207h-56.36zm.497.99h55.368v10.277H33.494Z"></svg:path>`,
})
export class DeviconLineStackoverflowIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
