import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsBuildingIcon],svg[ls-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M41 0h525c23 0 41 18 41 41v592c0 23-18 41-41 41H431V541H176v133H41c-23 0-41-18-41-41V41C0 18 18 0 41 0m49 134h427V84H90zm0 115h427v-50H90zm0 115h427v-50H90zm0 115h427v-50H90zm200 217h-87V568h87zm114 0h-87V568h87z"></svg:path>`,
})
export class LsBuildingIcon {
  readonly viewBox = input("0 0 607 696")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
