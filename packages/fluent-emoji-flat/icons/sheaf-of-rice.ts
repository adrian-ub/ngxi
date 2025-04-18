import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatSheafOfRiceIcon],svg[fluent-emoji-flat-sheaf-of-rice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#44911B" d="M13.26 30h.49c.14 0 .25-.11.25-.26V11h-1v14h-2v-7.01c0-2.05-1.54-3.74-3.53-3.97a.416.416 0 0 0-.47.41v7.55c0 2.21 1.79 4 4 4h2v3.76c0 .15.11.26.26.26M16 16h1v13h2.03v-4.14c0-2.05 1.54-3.74 3.53-3.97c.25-.03.47.16.47.41V26c0 2.21-1.79 4-4 4h-2.7c-.18 0-.33-.15-.33-.33z"></svg:path><svg:path fill="#F9C23C" d="M18.23 8c.41 0 .76.32.77.74s-.33.76-.75.76h-3.06c-.52 0-.94.42-.94.94v1.8c0 .42-.34.76-.76.75c-.42 0-.74-.36-.74-.77V6.06c0-2.24 1.82-4.06 4.06-4.06h4.44c.42 0 .76.34.75.76c0 .42-.36.74-.77.74h-4.4c-.42 0-.76.34-.75.76s.36.74.77.74h3.4c.42 0 .76.34.75.76c0 .42-.36.74-.77.74h-4.4c-.42 0-.76.34-.75.76s.36.74.77.74zm3 9c.41 0 .76.32.78.73c.01.42-.33.76-.75.76H18.2c-.52 0-.94.42-.94.94v1.81c0 .42-.34.76-.76.75c-.42 0-.74-.36-.74-.77v-6.16c0-2.24 1.82-4.06 4.06-4.06h4.43c.42 0 .76.34.75.76c0 .42-.36.74-.77.74h-4.21c-.42 0-.76.34-.75.76c0 .42.36.74.77.74h3.21c.42 0 .76.34.75.76c0 .42-.36.74-.77.74h-4.21c-.42 0-.76.34-.75.76c0 .42.36.74.77.74z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatSheafOfRiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
