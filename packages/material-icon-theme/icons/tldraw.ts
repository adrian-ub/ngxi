import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeTldrawIcon],svg[material-icon-theme-tldraw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b0bec5" d="M14.69 5.75q0 1.058-.808 1.796c-.808.738-1.194.738-1.966.738q-1.195 0-2.002-.738q-.808-.737-.808-1.797q0-1.058.808-1.796c.808-.738 1.206-.738 2.002-.738q1.159 0 1.966.738q.808.738.808 1.796zm-5.619 8.883q0-1.059.808-1.797q.842-.77 2.037-.77a2.82 2.82 0 0 1 1.966.77q.843.738.984 1.668q.28 1.733-.703 3.434q-.948 1.7-2.74 2.598q-.982.514-1.615-.032q-.596-.513.352-1.219q.525-.353.878-.898q.351-.546.456-1.123q.036-.257-.246-.257q-.702-.032-1.44-.706a2.17 2.17 0 0 1-.737-1.668"></svg:path>`,
})
export class MaterialIconThemeTldrawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
