import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsFthtmlIcon],svg[file-icons-fthtml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85.44 261.51v232.524h94.862V261.51h142.453v189.085l77.774 43.439h91.508v-76.497h-74.74V261.51H512v-78.892h-94.702V61.565l-94.543 52.541v68.512H180.302V94.782h76.816V17.966H164.81L85.44 61.565v121.053H0v78.892z"></svg:path>`,
})
export class FileIconsFthtmlIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
