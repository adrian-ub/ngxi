import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirNumber8SquareSolidIcon],svg[iconoir-number-8-square-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.25 3.6c0-.746.604-1.35 1.35-1.35h16.8c.746 0 1.35.604 1.35 1.35v16.8a1.35 1.35 0 0 1-1.35 1.35H3.6a1.35 1.35 0 0 1-1.35-1.35zm11.092 9.455c.225.155.408.41.408.945s-.183.79-.409.945c-.272.189-.72.305-1.341.305s-1.069-.116-1.341-.305c-.226-.155-.409-.41-.409-.945s.183-.79.409-.945c.272-.189.72-.305 1.341-.305s1.069.116 1.342.305M9.576 12c-.534.47-.826 1.15-.826 2c0 .965.376 1.71 1.056 2.18c.632.436 1.435.57 2.194.57c.76 0 1.562-.134 2.194-.57c.68-.47 1.056-1.215 1.056-2.18c0-.85-.292-1.53-.826-2c.534-.47.826-1.15.826-2c0-.965-.376-1.71-1.056-2.18c-.632-.436-1.435-.57-2.194-.57c-.76 0-1.562.134-2.194.57c-.68.47-1.056 1.215-1.056 2.18c0 .85.292 1.53.826 2M12 11.25c.621 0 1.069-.116 1.342-.305c.225-.155.408-.41.408-.945s-.183-.79-.409-.945c-.272-.189-.72-.305-1.341-.305s-1.069.116-1.341.305c-.226.155-.409.41-.409.945s.183.79.409.945c.272.189.72.305 1.341.305" clip-rule="evenodd"></svg:path>`,
})
export class IconoirNumber8SquareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
