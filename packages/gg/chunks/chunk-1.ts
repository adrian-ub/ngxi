import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayTrackPrevOIcon],svg[gg-play-track-prev-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m8 7.464L10 12l6-3.464z"></svg:path><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m9-11C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1"></svg:path></svg:g>`,
})
export class GgPlayTrackPrevOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlayTrackPrevRIcon],svg[gg-play-track-prev-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8 8a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m8 7.464L10 12l6-3.464z"></svg:path><svg:path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4z"></svg:path></svg:g>`,
})
export class GgPlayTrackPrevRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPlugIcon],svg[gg-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1M8 9h8v2a4 4 0 0 1-8 0zm5 7.917A6 6 0 0 0 18 11V7H6v4a6 6 0 0 0 5 5.917V22a1 1 0 1 0 2 0zM14 3a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgPlugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPocketIcon],svg[gg-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h18v7a9 9 0 1 1-18 0zM1 2h22v9c0 6.075-4.925 11-11 11S1 17.075 1 11zm10.293 12.694a1 1 0 0 0 1.414 0l4.243-4.243a1 1 0 1 0-1.414-1.414L12 12.572L8.464 9.037A1 1 0 0 0 7.05 10.45z" clip-rule="evenodd"></svg:path>`,
})
export class GgPocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPokemonIcon],svg[gg-pokemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0m2.07 1a7.002 7.002 0 0 0 13.86 0h-4.1a3.001 3.001 0 0 1-5.66 0zm13.86-2a7.001 7.001 0 0 0-13.86 0h4.1a3.001 3.001 0 0 1 5.66 0zM12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2" clip-rule="evenodd"></svg:path>`,
})
export class GgPokemonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPolaroidIcon],svg[gg-polaroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 0h14v11H5z" clip-rule="evenodd"></svg:path>`,
})
export class GgPolaroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPollIcon],svg[gg-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M19 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M11 7h2v10h-2zm4 6h2v4h-2zm-8-3h2v7H7z"></svg:path></svg:g>`,
})
export class GgPollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPresentationIcon],svg[gg-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m8-10h-2a6 6 0 0 0-12 0H4a8 8 0 1 1 16 0M4.252 14h15.496a8.003 8.003 0 0 1-15.496 0M8 12a4 4 0 1 1 8 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgPresentationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPrinterIcon],svg[gg-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 4h8v2H8zm10 2h4v12h-4v4H6v-4H2V6h4V2h12zm2 10h-2v-2H6v2H4V8h16zM8 16h8v4H8zm0-6H6v2h2z" clip-rule="evenodd"></svg:path>`,
})
export class GgPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggProductHuntIcon],svg[gg-product-hunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 19a7 7 0 1 1 0-14a7 7 0 0 1 0 14m-9-7a9 9 0 1 1 18 0a9 9 0 0 1-18 0m6 4V8h4a3 3 0 1 1 0 6h-2v2zm5-5a1 1 0 0 1-1 1h-2v-2h2a1 1 0 0 1 1 1" clip-rule="evenodd"></svg:path>`,
})
export class GgProductHuntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggProfileIcon],svg[gg-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1M3 12c0 2.09.713 4.014 1.908 5.542A8.99 8.99 0 0 1 12.065 14a8.98 8.98 0 0 1 7.092 3.458A9 9 0 1 0 3 12m9 9a8.96 8.96 0 0 1-5.672-2.012A6.99 6.99 0 0 1 12.065 16a6.99 6.99 0 0 1 5.689 2.92A8.96 8.96 0 0 1 12 21"></svg:path></svg:g>`,
})
export class GgProfileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPullClearIcon],svg[gg-pull-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 6H2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6h-2v10H4z"></svg:path><svg:path d="M6 12h12v2H6zm12-4H6v2h12z"></svg:path></svg:g>`,
})
export class GgPullClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronDownIcon],svg[gg-push-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7.414L6.414 6l5.657 5.657L17.728 6l1.414 1.414l-7.07 7.071zm14 8.929H5v2h14z"></svg:path>`,
})
export class GgPushChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronDownOIcon],svg[gg-push-chevron-down-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 14v2H8v-2zM7.757 8.703l1.415-1.415L12 10.117l2.828-2.829l1.415 1.415L12 12.945z"></svg:path><svg:path fill-rule="evenodd" d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 0 0-18a9 9 0 0 0 0 18" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronDownOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronDownRIcon],svg[gg-push-chevron-down-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.172 7.288L7.757 8.703L12 12.945l4.243-4.242l-1.415-1.415L12 10.117zM8 14h8v2H8z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronDownRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronLeftIcon],svg[gg-push-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.929 5l1.414 1.414l-5.657 5.657l5.657 5.657l-1.414 1.414l-7.071-7.07zM8 19V5H6v14z"></svg:path>`,
})
export class GgPushChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronLeftOIcon],svg[gg-push-chevron-left-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 16H8V8h2zm5.297-8.243l1.415 1.415L13.883 12l2.829 2.828l-1.415 1.415L11.055 12z"></svg:path><svg:path fill-rule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1S1 5.925 1 12m2 0a9 9 0 1 0 18 0a9 9 0 0 0-18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronLeftOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronLeftRIcon],svg[gg-push-chevron-left-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.674 9.172L15.26 7.757L11.017 12l4.243 4.243l1.414-1.415L13.846 12zM9.963 8v8h-2V8z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronLeftRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronRightIcon],svg[gg-push-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.414 5L6 6.414l5.657 5.657L6 17.728l1.414 1.414l7.071-7.07zm8.929 14V5h2v14z"></svg:path>`,
})
export class GgPushChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronRightOIcon],svg[gg-push-chevron-right-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 8h2v8h-2zm-5.297 8.243l-1.415-1.414L10.117 12L7.288 9.172l1.415-1.415L12.945 12z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11m-2 0a9 9 0 1 0-18 0a9 9 0 0 0 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronRightOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronRightRIcon],svg[gg-push-chevron-right-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m7.644 14.828l1.415 1.415L13.3 12L9.06 7.757L7.644 9.172L10.473 12zM14.356 16V8h2v8z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgPushChevronRightRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronUpIcon],svg[gg-push-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5 16.929l1.414 1.414l5.657-5.657l5.657 5.657l1.414-1.414l-7.07-7.071zM19 8H5V6h14z"></svg:path>`,
})
export class GgPushChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronUpOIcon],svg[gg-push-chevron-up-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0-18m0-2C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1m-4 9V8h8v2zm8.243 5.297l-1.414 1.415L12 13.883l-2.828 2.829l-1.415-1.415L12 11.055z" clip-rule="evenodd"></svg:path>`,
})
export class GgPushChevronUpOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushChevronUpRIcon],svg[gg-push-chevron-up-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 21h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2m-4-2a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4zm8.172-2.288l-1.415-1.415L12 11.055l4.243 4.242l-1.415 1.415L12 13.883zM8 10h8V8H8z" clip-rule="evenodd"></svg:path>`,
})
export class GgPushChevronUpRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushDownIcon],svg[gg-push-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 1h2v14.485l3.243-3.242l1.414 1.414L12 19.314l-5.657-5.657l1.414-1.414L11 15.485zm7 19.288H6v2h12z"></svg:path>`,
})
export class GgPushDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushLeftIcon],svg[gg-push-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.288 11v2H7.802l3.243 3.243l-1.414 1.414L3.974 12L9.63 6.343l1.414 1.414L7.802 11zM3 18V6H1v12z"></svg:path>`,
})
export class GgPushLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushRightIcon],svg[gg-push-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 13v-2h14.485l-3.242-3.243l1.414-1.414L19.314 12l-5.657 5.657l-1.414-1.415L15.485 13zm19.288-7v12h2V6z"></svg:path>`,
})
export class GgPushRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggPushUpIcon],svg[gg-push-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 22.288h2V7.802l3.243 3.243l1.414-1.414L12 3.974L6.343 9.63l1.414 1.414L11 7.802zM18 3H6V1h12z" clip-rule="evenodd"></svg:path>`,
})
export class GgPushUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggQrIcon],svg[gg-qr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9 3H3v6h2V5h4zM3 21v-6h2v4h4v2zM15 3v2h4v4h2V3zm4 12h2v6h-6v-2h4zM7 7h4v4H7zm0 6h4v4H7zm10-6h-4v4h4zm-4 6h4v4h-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgQrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggQuoteIcon],svg[gg-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.135 9h3L10 14.608H7zm5 0h3L15 14.608h-3z"></svg:path>`,
})
export class GgQuoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggQuoteOIcon],svg[gg-quote-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20 5H4v14h16zM4 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M9.067 9.196h3l-2.134 5.608h-3zm5 0h3l-2.134 5.608h-3z"></svg:path></svg:g>`,
})
export class GgQuoteOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRadioCheckIcon],svg[gg-radio-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" clip-rule="evenodd"></svg:path>`,
})
export class GgRadioCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRadioCheckedIcon],svg[gg-radio-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgRadioCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRatioIcon],svg[gg-ratio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 6v6h2V8h4V6zm16 12h-6v-2h4v-4h2z"></svg:path><svg:path fill-rule="evenodd" d="M4 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4zm16 2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgRatioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggReadIcon],svg[gg-read-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3.465-4a4.002 4.002 0 0 0-7.339 1H2a1 1 0 1 0 0 2h1.126A4.002 4.002 0 0 0 11 12h2a4 4 0 0 0 7.874 1H22a1 1 0 1 0 0-2h-1.126a4.002 4.002 0 0 0-7.339-1zM15 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" clip-rule="evenodd"></svg:path>`,
})
export class GgReadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggReadmeIcon],svg[gg-readme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 5.5h5a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1m10 14c-.35 0-.687-.06-1-.17v.17a1 1 0 1 1-2 0v-.17c-.313.11-.65.17-1 .17H4a3 3 0 0 1-3-3v-10a3 3 0 0 1 3-3h5a4 4 0 0 1 3 1.354A4 4 0 0 1 15 3.5h5a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3zm-1-12v9a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-5a2 2 0 0 0-2 2m-8 0h4v2H5zm10 0h4v2h-4zm4 3h-4v2h4zm-14 0h4v2H5zm14 3h-4v2h4zm-14 0h4v2H5z" clip-rule="evenodd"></svg:path>`,
})
export class GgReadmeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRecordIcon],svg[gg-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgRecordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRedoIcon],svg[gg-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.146 11.05l-.174-1.992l2.374-.208a5 5 0 1 0 .82 6.173l2.002.5a7 7 0 1 1-1.315-7.996l-.245-2.803L18.6 4.55l.523 5.977z"></svg:path>`,
})
export class GgRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRemoteIcon],svg[gg-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.051 4.322l1.415 1.414l-4.243 4.243l4.243 4.242l-1.415 1.415l-5.656-5.657zM6.949 19.679l-1.415-1.415l4.243-4.242l-4.243-4.243L6.95 8.365l5.656 5.657z"></svg:path>`,
})
export class GgRemoteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRemoveIcon],svg[gg-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRemoveRIcon],svg[gg-remove-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgRemoveRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRenameIcon],svg[gg-rename-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M10 4H8v2H5a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3v2h2zM8 8v8H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" clip-rule="evenodd"></svg:path><svg:path d="M19 16h-7v2h7a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-7v2h7a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1"></svg:path></svg:g>`,
})
export class GgRenameIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggReorderIcon],svg[gg-reorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-opacity=".5" d="M3 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M15.17 9a3.001 3.001 0 1 0 0-2H4a1 1 0 0 0 0 2zM19 8a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgReorderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRepeatIcon],svg[gg-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.37 8l-4.5 2.598V9H6.89v4h-2V7h8.98V5.402zm-8.24 9h8.98v-6h-2v4h-6.98v-1.598L5.63 16l4.5 2.598z"></svg:path>`,
})
export class GgRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRingIcon],svg[gg-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M6.343 3.686A8 8 0 0 1 7.936 2.45a8.01 8.01 0 0 1 8.128 0a8 8 0 0 1 1.593 1.236L12 9.343zM12 6.514L9.413 3.927a6.02 6.02 0 0 1 5.174 0z" clip-rule="evenodd"></svg:path><svg:path d="M2 12.658a9.98 9.98 0 0 1 3.692-7.76l1.423 1.424a8 8 0 1 0 9.77 0l1.423-1.424A9.98 9.98 0 0 1 22 12.658c0 5.522-4.477 10-10 10s-10-4.478-10-10"></svg:path></svg:g>`,
})
export class GgRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRowFirstIcon],svg[gg-row-first-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" opacity=".5"></svg:path><svg:path d="M5 8a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class GgRowFirstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRowLastIcon],svg[gg-row-last-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 13a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2zm0-4a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2z" opacity=".5"></svg:path><svg:path d="M5 16a1 1 0 0 0 1 1h12a1 1 0 1 0 0-2H6a1 1 0 0 0-1 1"></svg:path></svg:g>`,
})
export class GgRowLastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggRulerIcon],svg[gg-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm6 2H7v5a1 1 0 1 1-2 0V8H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2v3a1 1 0 1 1-2 0V8h-2v5a1 1 0 1 1-2 0V8h-2v3a1 1 0 1 1-2 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSandClockIcon],svg[gg-sand-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 6h-2v1a1 1 0 1 0 2 0z"></svg:path><svg:path fill-rule="evenodd" d="M6 2v2h1v3a5 5 0 0 0 5 5a5 5 0 0 0-5 5v3H6v2h12v-2h-1v-3a5 5 0 0 0-5-5a5 5 0 0 0 5-5V4h1V2zm3 2h6v3a3 3 0 1 1-6 0zm0 13v3h6v-3a3 3 0 1 0-6 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSandClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggScanIcon],svg[gg-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3h2v18h-2zM5 8a1 1 0 0 1 1-1h3V5H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3v-2H6a1 1 0 0 1-1-1zm14 0a1 1 0 0 0-1-1h-3V5h3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-3v-2h3a1 1 0 0 0 1-1z"></svg:path>`,
})
export class GgScanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggScreenIcon],svg[gg-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 17H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3zM4 5h16a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgScreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggScreenMirrorIcon],svg[gg-screen-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 8h14v6h-3v2h5V6H3v10h5v-2H5z"></svg:path><svg:path d="M16.33 19L12 13l-4.33 6z"></svg:path></svg:g>`,
})
export class GgScreenMirrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggScreenShotIcon],svg[gg-screen-shot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 8V6H8v4h2V8zm2 6h2v4h-4v-2h2z"></svg:path><svg:path fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2 17V4h12v16z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgScreenShotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggScreenWideIcon],svg[gg-screen-wide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 16H3a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-8v1h2a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h2zM3 7h18a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgScreenWideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggScrollHIcon],svg[gg-scroll-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.182 9.172L5.768 7.757L1.525 12l4.243 4.243l1.414-1.415L4.353 12zm9.636 5.656l1.414 1.415L22.475 12l-4.243-4.243l-1.414 1.415L19.646 12z"></svg:path><svg:path fill-rule="evenodd" d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgScrollHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggScrollVIcon],svg[gg-scroll-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.172 16.818l-1.415 1.414L12 22.475l4.243-4.243l-1.415-1.414L12 19.647zm5.656-9.636l1.415-1.414L12 1.525L7.757 5.768l1.415 1.414L12 4.354z"></svg:path><svg:path fill-rule="evenodd" d="M12 9a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 1 0 2a1 1 0 0 1 0-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgScrollVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSearchIcon],svg[gg-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485" clip-rule="evenodd"></svg:path>`,
})
export class GgSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSearchFoundIcon],svg[gg-search-found-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7.665 10.237L9.198 8.95l1.285 1.532l3.064-2.571l1.286 1.532l-4.596 3.857z"></svg:path><svg:path fill-rule="evenodd" d="M16.207 4.893a8 8 0 0 1 .662 10.565q.023.02.045.042l4.243 4.243a1 1 0 0 1-1.414 1.414L15.5 16.914l-.042-.045A8.001 8.001 0 0 1 4.893 4.893a8 8 0 0 1 11.314 0m-1.414 9.9a6 6 0 1 0-8.485-8.485a6 6 0 0 0 8.485 8.485" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSearchFoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSearchLoadingIcon],svg[gg-search-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8.55 10.55a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m3 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M16.207 4.893a8 8 0 0 1 .662 10.565q.023.02.045.042l4.243 4.243a1 1 0 0 1-1.414 1.414L15.5 16.914l-.042-.045A8.001 8.001 0 0 1 4.893 4.893a8 8 0 0 1 11.314 0m-9.9 9.9a6 6 0 1 0 8.486-8.485a6 6 0 0 0-8.485 8.485" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSearchLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSelectIcon],svg[gg-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 9.657l1.414 1.414l4.243-4.243l4.243 4.243l1.414-1.414L11.657 4zm0 4.786l1.414-1.414l4.243 4.243l4.243-4.243l1.414 1.414l-5.657 5.657z"></svg:path>`,
})
export class GgSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSelectOIcon],svg[gg-select-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.172 11.508l-1.415-1.414L12 5.85l4.243 4.243l-1.415 1.414L12 8.68zm0 .984l-1.415 1.414L12 18.15l4.243-4.243l-1.415-1.414L12 15.32z"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSelectOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSelectRIcon],svg[gg-select-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m9.172 11.508l-1.415-1.414L12 5.85l4.243 4.243l-1.415 1.414L12 8.68zm0 .984l-1.415 1.414L12 18.15l4.243-4.243l-1.415-1.414L12 15.32z"></svg:path><svg:path fill-rule="evenodd" d="M1 5a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4zm4-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSelectRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggServerIcon],svg[gg-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 6a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm4 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgServerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggServerlessIcon],svg[gg-serverless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.787 6H5v3h5.695zm-1.82 5H5v3h3.875zm1.037 3l1.092-3H20v3zm-2.856 2H5v3h2.056zm1.036 3l1.092-3H20v3zm3.64-10l1.092-3H20v3z"></svg:path>`,
})
export class GgServerlessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShapeCircleIcon],svg[gg-shape-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m0 3a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShapeHalfCircleIcon],svg[gg-shape-half-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4a8 8 0 1 0 0 16v-3a5 5 0 0 1 0-10z"></svg:path>`,
})
export class GgShapeHalfCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShapeHexagonIcon],svg[gg-shape-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m6 15.235l6 3.333l6-3.333v-6.47l-6-3.333l-6 3.333zM12 2L3 7v10l9 5l9-5V7z" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShapeRhombusIcon],svg[gg-shape-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.343L6.343 12L12 17.657L17.657 12zM2.1 12l9.9 9.9l9.9-9.9L12 2.1z" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShapeSquareIcon],svg[gg-shape-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 7H7v10h10zM4 4v16h16V4z" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShapeTriangleIcon],svg[gg-shape-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.66 5L3 20h17.32zm0 6l-3.464 6h6.928z" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShapeZigzagIcon],svg[gg-shape-zigzag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.312 9L1 10.51l3.774 3.28l1.509 1.312l1.312-1.51l1.54-1.77l2.264 1.968l1.51 1.312l1.311-1.51l1.538-1.769l2.263 1.967l1.51 1.312l1.311-1.51l1.969-2.264l-1.51-1.312l-1.968 2.264L15.559 9l-1.312 1.51h.002l-1.538 1.77L8.937 9l-.883 1.016l-1.968 2.264z" clip-rule="evenodd"></svg:path>`,
})
export class GgShapeZigzagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShareIcon],svg[gg-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9a3 3 0 1 0-2.977-2.63l-6.94 3.47a3 3 0 1 0 0 4.319l6.94 3.47a3 3 0 1 0 .895-1.789l-6.94-3.47a3 3 0 0 0 0-.74l6.94-3.47C16.456 8.68 17.19 9 18 9"></svg:path>`,
})
export class GgShareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShieldIcon],svg[gg-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 8v5a5 5 0 0 0 10 0V8zM5 4h14v9a7 7 0 1 1-14 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShoppingBagIcon],svg[gg-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm10 7c-2.761 0-5-2.686-5-6h2c0 2.566 1.67 4 3 4s3-1.434 3-4h2c0 3.314-2.239 6-5 6" clip-rule="evenodd"></svg:path>`,
})
export class GgShoppingBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShoppingCartIcon],svg[gg-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.792 2H1v2h3.218l2.77 12.678H7V17h13v-.248l2.193-9.661L22.531 6H6.655l-.57-2.611zm14.195 6H7.092l1.529 7h9.777z" clip-rule="evenodd"></svg:path><svg:path d="M10 22a2 2 0 1 0 0-4a2 2 0 0 0 0 4m9-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class GgShoppingCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShortcutIcon],svg[gg-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.192 7.707a1 1 0 0 0-1.414 0l-7.07 7.071a1 1 0 1 0 1.413 1.414l7.071-7.07a1 1 0 0 0 0-1.415"></svg:path><svg:path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgShortcutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggShutterstockIcon],svg[gg-shutterstock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 17a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v4h-4zM11 6a1 1 0 0 1 1 1v1H8v4H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1z"></svg:path><svg:path fill-rule="evenodd" d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm14 2H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgShutterstockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSidebarIcon],svg[gg-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M21 20H7V4h14zm-2-2H9V6h10z" clip-rule="evenodd"></svg:path><svg:path d="M3 20h2V4H3z"></svg:path></svg:g>`,
})
export class GgSidebarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSidebarOpenIcon],svg[gg-sidebar-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 4h18v16H3zm6 2h10v12H9z" clip-rule="evenodd"></svg:path>`,
})
export class GgSidebarOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSidebarRightIcon],svg[gg-sidebar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 4h14v16H3zm2 2h10v12H5z" clip-rule="evenodd"></svg:path><svg:path d="M21 4h-2v16h2z"></svg:path></svg:g>`,
})
export class GgSidebarRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSignalIcon],svg[gg-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 7a1 1 0 1 1 2 0v10a1 1 0 1 1-2 0zm-8 8a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0zm5-5a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1"></svg:path>`,
})
export class GgSignalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSizeIcon],svg[gg-size-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6V4h8v16h-8v-2H8v-2H4V8h4V6zm2 0h4v12h-4zm-2 2h-2v8h2zm-4 2v4H6v-4z" clip-rule="evenodd"></svg:path>`,
})
export class GgSizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSketchIcon],svg[gg-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M5.209 3h13.694l1.209 7.253l-8.056 10.933L4 10.253zm1.694 2l-.791 4.747l5.944 8.067L18 9.747L17.209 5z" clip-rule="evenodd"></svg:path><svg:path d="M8.056 8h8v2h-8z"></svg:path></svg:g>`,
})
export class GgSketchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSlackIcon],svg[gg-slack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13 10a2 2 0 1 0 4 0V5a2 2 0 1 0-4 0zM5 8a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4zm10 5a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4zm-5 9a2 2 0 0 1-2-2v-5a2 2 0 1 1 4 0v5a2 2 0 0 1-2 2M8 5a2 2 0 1 1 4 0v2h-2a2 2 0 0 1-2-2M3 15a2 2 0 1 0 4 0v-2H5a2 2 0 0 0-2 2m14 5a2 2 0 1 1-4 0v-2h2a2 2 0 0 1 2 2m5-10a2 2 0 1 0-4 0v2h2a2 2 0 0 0 2-2" clip-rule="evenodd"></svg:path>`,
})
export class GgSlackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSleepIcon],svg[gg-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0m-4.101 5A6.98 6.98 0 0 1 12 19a6.98 6.98 0 0 1-4.899-2zm1.427-2a7 7 0 1 0-12.653 0z" clip-rule="evenodd"></svg:path>`,
})
export class GgSleepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeBoilerIcon],svg[gg-smart-home-boiler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v16h-3.856l.742 2h-2l-.742-2h-2l.742 2h-2l-.742-2H5zm4-2h6a2 2 0 0 1 2 2v2H7V5a2 2 0 0 1 2-2M7 9h10v10H7z" clip-rule="evenodd"></svg:path>`,
})
export class GgSmartHomeBoilerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeCookerIcon],svg[gg-smart-home-cooker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15 16a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M15 1H9v2h2v2H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-4V3h2zm2 6H7a2 2 0 0 0-2 2h14a2 2 0 0 0-2-2m2 4H5v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z"></svg:path></svg:g>`,
})
export class GgSmartHomeCookerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeHeatIcon],svg[gg-smart-home-heat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 11H7a1 1 0 1 0 0 2h3v2H7a3 3 0 1 1 0-6h10a3 3 0 1 1 0 6h-3v-2h3a1 1 0 1 0 0-2"></svg:path><svg:path fill-rule="evenodd" d="M0 12a7 7 0 0 1 7-7h10a7 7 0 1 1 0 14H7a7 7 0 0 1-7-7m7-5h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmartHomeHeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeLightIcon],svg[gg-smart-home-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.034 6.5a5 5 0 0 1 10 0v4a5 5 0 0 1-10 0zm8 0v4a3 3 0 0 1-6 0v-4a3 3 0 0 1 6 0" clip-rule="evenodd"></svg:path><svg:path d="M12.034 16.5a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m-4.29-.06a1 1 0 1 1 1.88.684l-1.368 3.759a1 1 0 1 1-1.88-.684zm7.23-.598a1 1 0 0 0-.598 1.282l1.369 3.759a1 1 0 1 0 1.879-.684l-1.368-3.76a1 1 0 0 0-1.282-.597"></svg:path></svg:g>`,
})
export class GgSmartHomeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeRefrigeratorIcon],svg[gg-smart-home-refrigerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 6a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm1 7a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1"></svg:path><svg:path fill-rule="evenodd" d="M5 4a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3zm3-1h8a1 1 0 0 1 1 1v6H7V4a1 1 0 0 1 1-1m-1 9h10v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmartHomeRefrigeratorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartHomeWashMachineIcon],svg[gg-smart-home-wash-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 4h12a1 1 0 0 1 1 1v3H5V5a1 1 0 0 1 1-1m13 15v-9H5v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm4 0a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm7 2a1 1 0 1 0 0-2a1 1 0 0 0 0 2m4-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-4 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m2 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path>`,
})
export class GgSmartHomeWashMachineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartphoneIcon],svg[gg-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 16h-2v2h2z"></svg:path><svg:path fill-rule="evenodd" d="M5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zm2 0h10v16H7z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmartphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartphoneChipIcon],svg[gg-smartphone-chip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M9 22a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path d="M9 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2M9 22a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m7-7a1 1 0 1 0-2 0a1 1 0 0 0 2 0m0-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-1-5a1 1 0 1 1 0 2a1 1 0 0 1 0-2M2 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2m1-3a1 1 0 1 0-2 0a1 1 0 0 0 2 0m14-2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1M7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm7 6h-4v4h4zM8 8v8h8V8z"></svg:path></svg:g>`,
})
export class GgSmartphoneChipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartphoneRamIcon],svg[gg-smartphone-ram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5 20a1 1 0 1 1-2 0a1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2M5 12a1 1 0 1 0 0-2a1 1 0 0 0 0 2m15 1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M0 9a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm3-1h18a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmartphoneRamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmartphoneShakeIcon],svg[gg-smartphone-shake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 14h-2v2h2z"></svg:path><svg:path fill-rule="evenodd" d="M8 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm2 0h4v10h-4z" clip-rule="evenodd"></svg:path><svg:path d="M18 9h2v6h-2zM0 14h2v-4H0zm6 1H4V9h2zm18-5h-2v4h2z"></svg:path></svg:g>`,
})
export class GgSmartphoneShakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmileIcon],svg[gg-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 13h-2a2 2 0 1 1-4 0H8a4 4 0 0 0 8 0m-6-3a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmileMouthOpenIcon],svg[gg-smile-mouth-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 17a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4m-2-7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmileMouthOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmileNeutralIcon],svg[gg-smile-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2zm7-5a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmileNeutralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmileNoMouthIcon],svg[gg-smile-no-mouth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmileNoMouthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmileNoneIcon],svg[gg-smile-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2zm7 0a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2zm-6 6a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmileNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmileSadIcon],svg[gg-smile-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2m5 6a2 2 0 1 0-4 0H8a4 4 0 0 1 8 0zm2-7a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmileSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSmileUpsideIcon],svg[gg-smile-upside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 11h-2a2 2 0 1 0-4 0H8a4 4 0 1 1 8 0m-6 3a1 1 0 1 0-2 0a1 1 0 0 0 2 0m5-1a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-2 0a8 8 0 1 0-16 0a8 8 0 0 0 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSmileUpsideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSoftwareDownloadIcon],svg[gg-software-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 5a1 1 0 1 1 2 0v7.158l3.243-3.243l1.414 1.414L12 15.986L6.343 10.33l1.414-1.414L11 12.158z"></svg:path><svg:path d="M4 14h2v4h12v-4h2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class GgSoftwareDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSoftwareUploadIcon],svg[gg-software-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 14.986a1 1 0 1 0 2 0V7.828l3.243 3.243l1.414-1.414L12 4L6.343 9.657l1.414 1.414L11 7.83z"></svg:path><svg:path d="M4 14h2v4h12v-4h2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path></svg:g>`,
})
export class GgSoftwareUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSortAzIcon],svg[gg-sort-az-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m2 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m3 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z"></svg:path>`,
})
export class GgSortAzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSortZaIcon],svg[gg-sort-za-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1m2-4a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H9a1 1 0 0 0-1 1m3-3a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2z"></svg:path>`,
})
export class GgSortZaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSpaceBetweenIcon],svg[gg-space-between-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-4v14h4v-2h-2V7h2zM5 5h4v14H5v-2h2V7H5zm8 2v10h-2V7z"></svg:path>`,
})
export class GgSpaceBetweenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSpaceBetweenVIcon],svg[gg-space-between-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v4h14V5h-2v2H7V5zm0 14v-4h14v4h-2v-2H7v2zm2-8h10v2H7z"></svg:path>`,
})
export class GgSpaceBetweenVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSpectrumIcon],svg[gg-spectrum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h4a8 8 0 0 0-8-8v4a4 4 0 0 1 4 4"></svg:path>`,
})
export class GgSpectrumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSpinnerIcon],svg[gg-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" clip-rule="evenodd" opacity=".2"></svg:path><svg:path d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z"></svg:path></svg:g>`,
})
export class GgSpinnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSpinnerAltIcon],svg[gg-spinner-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z"></svg:path>`,
})
export class GgSpinnerAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSpinnerTwoIcon],svg[gg-spinner-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" clip-rule="evenodd" opacity=".2"></svg:path><svg:path d="M12 22c5.523 0 10-4.477 10-10h-3a7 7 0 0 1-7 7zM2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z"></svg:path></svg:g>`,
})
export class GgSpinnerTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSpinnerTwoAltIcon],svg[gg-spinner-two-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10h-3a7 7 0 0 1-7 7zM2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z"></svg:path>`,
})
export class GgSpinnerTwoAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSquareIcon],svg[gg-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 10h-4v4h4z"></svg:path><svg:path fill-rule="evenodd" d="M5 9a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm4-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggStackIcon],svg[gg-stack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M20 4v12h2V2H8v2z"></svg:path><svg:path fill-rule="evenodd" d="M2 8v14h14V8zm12 2H4v10h10z" clip-rule="evenodd"></svg:path><svg:path d="M17 7H5V5h14v14h-2z"></svg:path></svg:g>`,
})
export class GgStackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggStarkIcon],svg[gg-stark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.172 18.025a8 8 0 0 1 4.935-14.948l-.437 3.126a4.844 4.844 0 0 0-2.988 9.05l6.146-11.278l2.634 1.436a8 8 0 0 1-4.934 14.948l.436-3.126a4.844 4.844 0 0 0 2.988-9.05L9.806 19.46z"></svg:path>`,
})
export class GgStarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggStopwatchIcon],svg[gg-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m18.621 2.55l2.829 2.83l-1.414 1.414l-2.829-2.828zM12.823 8.6h-2v4h2z"></svg:path><svg:path fill-rule="evenodd" d="M5.186 18.814A9 9 0 1 0 17.914 6.086A9 9 0 0 0 5.186 18.814m1.415-1.415A7 7 0 1 0 16.5 7.5a7 7 0 0 0-9.9 9.9" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggStoriesIcon],svg[gg-stories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M15 6H9a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1M9 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M2 6a1 1 0 0 1 2 0v12a1 1 0 1 1-2 0zm18 0a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0z"></svg:path></svg:g>`,
})
export class GgStoriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggStudioIcon],svg[gg-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 13h-4v4h4z"></svg:path><svg:path fill-rule="evenodd" d="M3 3h18v18H3zm2 2h14v14H5z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgStudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggStyleIcon],svg[gg-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 21v-8h8v8zm2-6h4v4h-4zM3 11V3h8v8zm2-6h4v4H5z" clip-rule="evenodd"></svg:path><svg:path d="M18 6v6h-2V8h-4V6zm-6 12H6v-6h2v4h4z"></svg:path></svg:g>`,
})
export class GgStyleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSunIcon],svg[gg-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0 2a6 6 0 1 0 0-12a6 6 0 0 0 0 12M11 0h2v4.062a8 8 0 0 0-2 0zM7.094 5.68L4.222 2.808L2.808 4.222L5.68 7.094A8 8 0 0 1 7.094 5.68M4.062 11H0v2h4.062a8 8 0 0 1 0-2m1.618 5.906l-2.872 2.872l1.414 1.414l2.872-2.872a8 8 0 0 1-1.414-1.414M11 19.938V24h2v-4.062a8 8 0 0 1-2 0m5.906-1.618l2.872 2.872l1.414-1.414l-2.872-2.872a8 8 0 0 1-1.414 1.414M19.938 13H24v-2h-4.062a8 8 0 0 1 0 2M18.32 7.094l2.872-2.872l-1.414-1.414l-2.872 2.872c.528.41 1.003.886 1.414 1.414" clip-rule="evenodd"></svg:path>`,
})
export class GgSunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSupportIcon],svg[gg-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.26 21.997a10 10 0 0 1-.52 0a10 10 0 0 1-8.983-6.173a10.03 10.03 0 0 1 .017-7.69A10 10 0 0 1 4.908 4.95l.042-.042a10 10 0 0 1 3.167-2.126a10.03 10.03 0 0 1 7.753-.006a10 10 0 0 1 3.186 2.138l.03.03c.913.917 1.65 2.01 2.153 3.223a10 10 0 0 1 .76 3.985a10 10 0 0 1-6.226 9.112a10 10 0 0 1-3.512.733m1.772-6.55l2.874 2.873a8.004 8.004 0 0 1-9.812 0l2.874-2.874a4.01 4.01 0 0 0 4.064 0m-5.478-1.415L5.68 16.906a8.004 8.004 0 0 1 0-9.812l2.874 2.874a4.01 4.01 0 0 0 0 4.064m1.528-1.463l-.014-.051a1.99 1.99 0 0 1 .518-1.932a1.99 1.99 0 0 1 1.932-.518c.328.088.639.26.896.518a1.99 1.99 0 0 1 .518 1.932c-.088.328-.26.639-.518.896a1.99 1.99 0 0 1-1.932.518a2 2 0 0 1-.896-.518a2 2 0 0 1-.504-.845m3.95-4.015a4.01 4.01 0 0 0-4.064 0L7.094 5.68a8.004 8.004 0 0 1 9.812 0zm4.288 8.352a8.004 8.004 0 0 0 0-9.812l-2.874 2.874a4.01 4.01 0 0 1 0 4.064z" clip-rule="evenodd"></svg:path>`,
})
export class GgSupportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSwapIcon],svg[gg-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 13v-1.5h-6v-2h6V8l3 2.5zm-8 4v-1.5h6v-2H8V12l-3 2.5z"></svg:path>`,
})
export class GgSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSwapVerticalIcon],svg[gg-swap-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16h1.5v-6h2v6H17l-2.5 3zM8 8h1.5v6h2V8H13l-2.5-3z"></svg:path>`,
})
export class GgSwapVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSwedenIcon],svg[gg-sweden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 4H10v7h13zm0 9v7H10v-7zM8 13v7H1v-7zm-7-2V4h7v7z"></svg:path>`,
})
export class GgSwedenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSwissIcon],svg[gg-swiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 3v18h18V3zm11 4h-4v3H7v4h3v3h4v-3h3v-4h-3z" clip-rule="evenodd"></svg:path>`,
})
export class GgSwissIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggSyncIcon],svg[gg-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.56 10.642L6.355 3.95l1.9 1.9a9.004 9.004 0 0 1 11.156 1.256l-1.414 1.415a7 7 0 0 0-8.28-1.21l1.537 1.538zm14.88 2.716l-1.794 6.692l-1.9-1.9A9 9 0 0 1 4.59 16.894l1.414-1.415a7 7 0 0 0 8.28 1.21l-1.537-1.538z"></svg:path>`,
})
export class GgSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTabIcon],svg[gg-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm1 5.625h-7c-.552 0-1.156-.42-1.348-.938L10.654 6H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GgTabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTagIcon],svg[gg-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M2 8v8a1 1 0 0 0 1 1h13.62a1 1 0 0 0 .76-.35l3.428-4a1 1 0 0 0 0-1.3l-3.428-4a1 1 0 0 0-.76-.35H3a1 1 0 0 0-1 1M0 8v8a3 3 0 0 0 3 3h13.62a3 3 0 0 0 2.278-1.048l3.428-4a3 3 0 0 0 0-3.904l-3.428-4A3 3 0 0 0 16.62 5H3a3 3 0 0 0-3 3"></svg:path><svg:path d="M15 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path></svg:g>`,
})
export class GgTagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTallyIcon],svg[gg-tally-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.661 2.671a.63.63 0 0 1 .595-.49h2c.276 0 .457.219.405.49L5.34 9.545a.63.63 0 0 1-.595.491h-2a.397.397 0 0 1-.405-.49zm5 0a.63.63 0 0 1 .595-.49h2c.276 0 .457.219.405.49L8.071 21.33a.63.63 0 0 1-.594.491h-2a.397.397 0 0 1-.405-.491zm5 0a.63.63 0 0 1 .595-.49h2c.276 0 .457.219.405.49l-3.59 18.658a.63.63 0 0 1-.594.491h-2a.397.397 0 0 1-.405-.491zm5 0a.63.63 0 0 1 .595-.49h2c.276 0 .457.219.405.49L20.34 9.545a.63.63 0 0 1-.595.491h-2a.397.397 0 0 1-.405-.49z"></svg:path>`,
})
export class GgTallyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTapDoubleIcon],svg[gg-tap-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14.924 18v-4a3 3 0 0 0-6 0v4a3 3 0 1 0 6 0m-3-9a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5" clip-rule="evenodd"></svg:path><svg:path d="M10.924 14a1 1 0 1 1 2 0v3h-2zm1-13a9.97 9.97 0 0 1 7.105 2.963l-1.415 1.414A7.98 7.98 0 0 0 11.924 3c-2.15 0-4.1.847-5.538 2.227L4.97 3.812A9.97 9.97 0 0 1 11.924 1"></svg:path><svg:path fill-rule="evenodd" d="M11.923 5a6.97 6.97 0 0 1 4.38 1.539l-1.426 1.426A4.98 4.98 0 0 0 11.923 7c-1.075 0-2.071.34-2.886.917l-1.43-1.429A6.97 6.97 0 0 1 11.924 5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTapDoubleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTapSingleIcon],svg[gg-tap-single-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.05 3.114c2.143 0 4.09.843 5.526 2.216L16.16 6.744a5.98 5.98 0 0 0-4.112-1.63a5.98 5.98 0 0 0-4.21 1.725L6.424 5.425a7.97 7.97 0 0 1 5.625-2.311m-1.072 8.772a1 1 0 1 1 2 0v2h-2z"></svg:path><svg:path fill-rule="evenodd" d="M11.977 6.886a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5m3 9v-4a3 3 0 0 0-6 0v4a3 3 0 0 0 6 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTapSingleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTemplateIcon],svg[gg-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 3v6h18V3zm16 2H5v2h14zM3 11v10h8V11zm6 2H5v6h4z" clip-rule="evenodd"></svg:path><svg:path d="M21 11h-8v2h8zm-8 4h8v2h-8zm8 4h-8v2h8z"></svg:path></svg:g>`,
})
export class GgTemplateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTennisIcon],svg[gg-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.071 19.071c3.905-3.905 3.905-10.237 0-14.142s-10.237-3.905-14.142 0s-3.905 10.237 0 14.142s10.237 3.905 14.142 0m.872-8.03a7.97 7.97 0 0 0-2.286-4.698a7.97 7.97 0 0 0-4.717-2.288l-.01.056a11.01 11.01 0 0 1-8.819 8.819l-.056.01a7.97 7.97 0 0 0 2.288 4.717a7.97 7.97 0 0 0 4.698 2.286l.012-.07a11.01 11.01 0 0 1 8.819-8.82zm-.071 2.388v-.334a9.01 9.01 0 0 0-6.777 6.777h.334a7.96 7.96 0 0 0 4.228-2.215a7.96 7.96 0 0 0 2.215-4.228m-15.76-2.54v-.223a7.96 7.96 0 0 1 2.231-4.323a7.96 7.96 0 0 1 4.323-2.232h.222a9.01 9.01 0 0 1-6.777 6.777" clip-rule="evenodd"></svg:path>`,
})
export class GgTennisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTerminalIcon],svg[gg-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m5.033 14.828l1.415 1.415L10.69 12L6.448 7.757L5.033 9.172L7.862 12zM15 14h-4v2h4z"></svg:path><svg:path fill-rule="evenodd" d="M2 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm20 2H2v16h20z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTerminalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTerrainIcon],svg[gg-terrain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 10l-5 8h10zm2.529.754L13.5 6L21 18h-5.943z"></svg:path>`,
})
export class GgTerrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggThermometerIcon],svg[gg-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16.95 5.636a1 1 0 1 1 1.414 1.414l-7.071 7.071a1 1 0 1 1-1.414-1.414z"></svg:path><svg:path fill-rule="evenodd" d="M7.828 17.586a5 5 0 0 0 6.293-.636l7.071-7.071a5 5 0 1 0-7.07-7.071L7.05 9.878a5 5 0 0 0-.636 6.294l-3.606 3.606a1 1 0 1 0 1.414 1.415zm4.88-2.05l7.07-7.071a3 3 0 1 0-4.242-4.243l-7.071 7.071a3 3 0 1 0 4.242 4.243" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggThermostatIcon],svg[gg-thermostat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M15 14a5 5 0 1 1-6 0V4a3 3 0 1 1 6 0zM13 4v11.17A3.001 3.001 0 0 1 12 21a3 3 0 0 1-1-5.83V4a1 1 0 1 1 2 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgThermostatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTikcodeIcon],svg[gg-tikcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M9 5H5v4h4zM3 3v8h8V3zm16 2h-4v4h4zm-6-2v8h8V3zM9 15H5v4h4zm-6-2v8h8v-8z" clip-rule="evenodd"></svg:path><svg:path d="M13 13h2v8h-2zm3 0h2v8h-2zm3 0h2v8h-2z"></svg:path></svg:g>`,
})
export class GgTikcodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTimeIcon],svg[gg-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 7h2v5h5v2H9z"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTimelapseIcon],svg[gg-timelapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 19a6.98 6.98 0 0 1-4.95-2.05L12 12V5a7 7 0 1 1 0 14"></svg:path><svg:path fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTimelapseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTimerIcon],svg[gg-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 5.07A7.002 7.002 0 0 1 12 19A7 7 0 0 1 7.262 6.847L5.847 5.432A9 9 0 1 0 11 3.055v6.03h2z"></svg:path><svg:path d="M7.707 8.707a1 1 0 0 0 0 1.414l2.829 2.829a1 1 0 0 0 1.414-1.414L9.12 8.707a1 1 0 0 0-1.414 0"></svg:path></svg:g>`,
})
export class GgTimerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTodayIcon],svg[gg-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="10" height="10" x="7" y="9" opacity=".5" rx="1"></svg:rect><svg:path fill-rule="evenodd" d="M18 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M7 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1"></svg:path></svg:g>`,
})
export class GgTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggToggleOffIcon],svg[gg-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M17 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill-rule="evenodd" d="M0 12a7 7 0 0 1 7-7h10a7 7 0 1 1 0 14H7a7 7 0 0 1-7-7m7-5h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggToggleOnIcon],svg[gg-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:path fill-rule="evenodd" d="M24 12a7 7 0 0 0-7-7H7a7 7 0 0 0 0 14h10a7 7 0 0 0 7-7m-7-5H7a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggToggleSquareIcon],svg[gg-toggle-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z"></svg:path><svg:path fill-rule="evenodd" d="M24 7a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2zm-2 0H2v10h20z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToggleSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggToggleSquareOffIcon],svg[gg-toggle-square-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M0 7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2 0h20v10H2z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToggleSquareOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggToolbarBottomIcon],svg[gg-toolbar-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 13H6v2h12z"></svg:path><svg:path fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToolbarBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggToolbarLeftIcon],svg[gg-toolbar-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 9H6v6h2z"></svg:path><svg:path fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToolbarLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggToolbarRightIcon],svg[gg-toolbar-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M16 9h2v6h-2z"></svg:path><svg:path fill-rule="evenodd" d="M22 8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3zm-3-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToolbarRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggToolbarTopIcon],svg[gg-toolbar-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M18 11H6V9h12z"></svg:path><svg:path fill-rule="evenodd" d="M2 16a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3zm3 1h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgToolbarTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggToolboxIcon],svg[gg-toolbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 5.5h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3m-3-1h-4a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1m6 3H4v2h16zm-16 12v-8h3v2h4v-2h2v2h4v-2h3v8z" clip-rule="evenodd"></svg:path>`,
})
export class GgToolboxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTouchpadIcon],svg[gg-touchpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M20 21a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3zM4 5h16a1 1 0 0 1 1 1v8H3V6a1 1 0 0 1 1-1M3 16v2a1 1 0 0 0 1 1h7v-3zm10 3v-3h8v2a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class GgTouchpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTrackIcon],svg[gg-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path fill-rule="evenodd" d="M12 3a1 1 0 0 1 1 1v1.07A7 7 0 0 1 18.93 11H20a1 1 0 1 1 0 2h-1.07A7 7 0 0 1 13 18.93V20a1 1 0 1 1-2 0v-1.07A7 7 0 0 1 5.07 13H4a1 1 0 1 1 0-2h1.07A7.005 7.005 0 0 1 11 5.07V4a1 1 0 0 1 1-1m-5 9a5 5 0 1 1 10 0a5 5 0 0 1-10 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTranscriptIcon],svg[gg-transcript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M5 16a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m13-5a1 1 0 1 1 0 2h-8a1 1 0 1 1 0-2zm-2 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1m-9-5a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTranscriptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTrashIcon],svg[gg-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17 5V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7h1a1 1 0 1 0 0-2zm-2-1H9v1h6zm2 3H7v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path><svg:path d="M9 9h2v8H9zm4 0h2v8h-2z"></svg:path></svg:g>`,
})
export class GgTrashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTrashEmptyIcon],svg[gg-trash-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 6V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 1 0 0-2zm-2-1H9v1h6zm2 3H7v11a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path>`,
})
export class GgTrashEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTreeIcon],svg[gg-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 17.9A5 5 0 0 1 7 13V7a5 5 0 0 1 10 0v6a5 5 0 0 1-4 4.9V21a1 1 0 1 1-2 0zM12 4a3 3 0 0 1 3 3v6a3 3 0 0 1-2 2.83V11a1 1 0 1 0-2 0v4.83A3 3 0 0 1 9 13V7a3 3 0 0 1 3-3" clip-rule="evenodd"></svg:path>`,
})
export class GgTreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTreesIcon],svg[gg-trees-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.74 16.319A5 5 0 0 1 10 17.9V21a1 1 0 1 1-2 0v-3.1A5 5 0 0 1 4 13V7a5 5 0 0 1 9.98-.453A4 4 0 0 1 20 10v4a4 4 0 0 1-3 3.874V21a1 1 0 1 1-2 0v-3.126a4 4 0 0 1-2.26-1.555M12 7v6a3 3 0 0 1-2 2.83V13a1 1 0 1 0-2 0v2.83A3 3 0 0 1 6 13V7a3 3 0 0 1 6 0m5 8.732V13a1 1 0 1 0-2 0v2.732A2 2 0 0 1 14 14v-4a2 2 0 1 1 4 0v4a2 2 0 0 1-1 1.732" clip-rule="evenodd"></svg:path>`,
})
export class GgTreesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTrelloIcon],svg[gg-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm7 0a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1z"></svg:path><svg:path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 0h16v16H4z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTrelloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTrendingIcon],svg[gg-trending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.414 16.432L0 15.018l7.071-7.071l6.364 6.364l4.243-4.243l-1.743-1.742l6.692-1.793l-1.793 6.692l-1.742-1.742l-5.657 5.656l-6.364-6.364z"></svg:path>`,
})
export class GgTrendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTrendingDownIcon],svg[gg-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.851 8.106L.437 9.52l7.07 7.072l6.365-6.364l4.243 4.242l-1.743 1.743l6.692 1.793l-1.793-6.692l-1.742 1.742l-5.657-5.657l-6.364 6.364z"></svg:path>`,
})
export class GgTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTrophyIcon],svg[gg-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13 15.9a5 5 0 0 0 4-4.9V4H7v7a5 5 0 0 0 4 4.9V18H9v2h6v-2h-2zM9 6h6v5a3 3 0 1 1-6 0z" clip-rule="evenodd"></svg:path><svg:path d="M18 6h2v5h-2zM6 6H4v5h2z"></svg:path></svg:g>`,
})
export class GgTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTvIcon],svg[gg-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m8 6.119l1.413-1.413l2.124 2.124L14.367 4l1.411 1.412l-2.464 2.464H18a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3.757zm10 3.757H6v7h12z" clip-rule="evenodd"></svg:path><svg:path d="M8 19.876h8v1H8z"></svg:path></svg:g>`,
})
export class GgTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTwilioIcon],svg[gg-twilio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 9a2 2 0 1 1-4 0a2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-4-2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0s12 5.373 12 12m-3 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgTwilioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggTwitterIcon],svg[gg-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 3a2 2 0 0 1 2 2v3h6a2 2 0 1 1 0 4h-6v2a3 3 0 0 0 3 3h3a2 2 0 1 1 0 4h-3a7 7 0 0 1-7-7V5a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path>`,
})
export class GgTwitterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUiKitIcon],svg[gg-ui-kit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 6h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-4-2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="m6 7.46l-2.507-.418A3 3 0 0 0 0 10v4.917a3 3 0 0 0 3.493 2.96L6 17.458v-2.027l-2.836.472A1 1 0 0 1 2 14.918v-4.917a1 1 0 0 1 1.164-.987L6 9.487zm12 0l2.507-.418A3 3 0 0 1 24 10v4.917a3 3 0 0 1-3.493 2.96L18 17.458v-2.027l2.836.472A1 1 0 0 0 22 14.918v-4.917a1 1 0 0 0-1.164-.987L18 9.487z"></svg:path></svg:g>`,
})
export class GgUiKitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUmbrellaIcon],svg[gg-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 9a8 8 0 1 1 16 0v2h-6.981v9.5a2.5 2.5 0 0 1-5 0v-2.643h2V20.5a.5.5 0 1 0 1 0V11H4zm8-6a6 6 0 0 1 6 6H6a6 6 0 0 1 6-6" clip-rule="evenodd"></svg:path>`,
})
export class GgUmbrellaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUnavailableIcon],svg[gg-unavailable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M18.364 5.636A9 9 0 1 1 5.636 18.364A9 9 0 0 1 18.364 5.636m-2.172 11.97L6.393 7.808a7.001 7.001 0 0 0 9.8 9.8M16.95 7.05a7 7 0 0 1 .657 9.142l-9.8-9.799a7 7 0 0 1 9.143.657" clip-rule="evenodd"></svg:path>`,
})
export class GgUnavailableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUnblockIcon],svg[gg-unblock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.636 18.364A9 9 0 1 0 18.364 5.636A9 9 0 0 0 5.636 18.364m2.171-.757a7.001 7.001 0 0 0 9.8-9.8l-2.779 2.779a1 1 0 0 1-1.414-1.414l2.778-2.779a7.002 7.002 0 0 0-9.799 9.8l2.779-2.779a1 1 0 0 1 1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class GgUnblockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUndoIcon],svg[gg-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.34 4.468h2v2.557a7 7 0 1 1-1.037 10.011l1.619-1.185a5 5 0 1 0 .826-7.384h2.591v2h-6z"></svg:path>`,
})
export class GgUndoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUnfoldIcon],svg[gg-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10z"></svg:path>`,
})
export class GgUnfoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUnsplashIcon],svg[gg-unsplash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4.5H9v4h6zm-11 6h5v4h6v-4h5v9H4z"></svg:path>`,
})
export class GgUnsplashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUsbIcon],svg[gg-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M10 4.5h1v2h-1zm4 0h-1v2h1z"></svg:path><svg:path fill-rule="evenodd" d="M7 8.5v-7h10v7h2v11a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-11zm2-5h6v5H9zm8 7H7v9a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgUsbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUsbCIcon],svg[gg-usb-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"></svg:path><svg:path fill-rule="evenodd" d="M3 12a5 5 0 0 1 5-5h8a5 5 0 0 1 0 10H8a5 5 0 0 1-5-5m5-3h8a3 3 0 1 1 0 6H8a3 3 0 1 1 0-6" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgUsbCIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUserIcon],svg[gg-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0m-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path><svg:path d="M16 15a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6H6v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6h-2z"></svg:path></svg:g>`,
})
export class GgUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUserAddIcon],svg[gg-user-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M11 14a1 1 0 0 1 1 1v6h2v-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6h2v-6a1 1 0 0 1 1-1zm7-7h2v2h2v2h-2v2h-2v-2h-2V9h2z"></svg:path></svg:g>`,
})
export class GgUserAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUserListIcon],svg[gg-user-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M11 14a1 1 0 0 1 1 1v6h2v-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6h2v-6a1 1 0 0 1 1-1zm11-3h-6v2h6zm-6 4h6v2h-6zm6-8h-6v2h6z"></svg:path></svg:g>`,
})
export class GgUserListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUserRemoveIcon],svg[gg-user-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 11a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4" clip-rule="evenodd"></svg:path><svg:path d="M11 14a1 1 0 0 1 1 1v6h2v-6a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v6h2v-6a1 1 0 0 1 1-1zm11-5h-6v2h6z"></svg:path></svg:g>`,
})
export class GgUserRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggUserlaneIcon],svg[gg-userlane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h6v6h-6zM3 12a9 9 0 1 0 18 0h-4a5 5 0 0 1-10 0zm3-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class GgUserlaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggVercelIcon],svg[gg-vercel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.992 17.023L11.981 6.977L6.008 17.023z"></svg:path>`,
})
export class GgVercelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggViewColsIcon],svg[gg-view-cols-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm14-1h3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3zm-2 0h-4v10h4zM8 17V7H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewColsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggViewComfortableIcon],svg[gg-view-comfortable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-1h14a1 1 0 0 1 1 1v3H4V8a1 1 0 0 1 1-1m-1 6v3a1 1 0 0 0 1 1h3v-4zm6 4h9a1 1 0 0 0 1-1v-3H10z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewComfortableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggViewDayIcon],svg[gg-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm11-1h6a1 1 0 0 1 1 1v3h-7zm-2 0H5a1 1 0 0 0-1 1v3h7zm-7 6v3a1 1 0 0 0 1 1h6v-4zm9 4h6a1 1 0 0 0 1-1v-3h-7z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggViewGridIcon],svg[gg-view-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm3 2H5a1 1 0 0 0-1 1v1h4zm2 0v2h4V7zm6 0v2h4V8a1 1 0 0 0-1-1zm-2 4h-4v2h4zm2 2v-2h4v2zm-2 2h-4v2h4zm2 2v-2h4v1a1 1 0 0 1-1 1zm-8 0v-2H4v1a1 1 0 0 0 1 1zm0-4v-2H4v2z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggViewListIcon],svg[gg-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm2 2H5a1 1 0 0 0-1 1v1h3zm2 0v2h11V8a1 1 0 0 0-1-1zm-2 4H4v2h3zm2 2v-2h11v2zm-2 2H4v1a1 1 0 0 0 1 1h2zm2 2v-2h11v1a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggViewMonthIcon],svg[gg-view-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm15-1h2a1 1 0 0 1 1 1v1h-3zm-2 0h-2v2h2zm-4 0H9v2h2zM7 7H5a1 1 0 0 0-1 1v1h3zm-3 4v2h3v-2zm0 4v1a1 1 0 0 0 1 1h2v-2zm5 2h2v-2H9zm4 0h2v-2h-2zm4 0h2a1 1 0 0 0 1-1v-1h-3zm3-4v-2h-3v2zm-9 0H9v-2h2zm4 0h-2v-2h2z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewMonthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggViewSplitIcon],svg[gg-view-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm11-1h6a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-6zm-2 0H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h6z" clip-rule="evenodd"></svg:path>`,
})
export class GgViewSplitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggVinylIcon],svg[gg-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path><svg:path fill-rule="evenodd" d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-4 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgVinylIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggVoicemailIcon],svg[gg-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 15a5 5 0 1 0-4 2h12a5 5 0 1 0-4-2zm-4 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6m12 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path>`,
})
export class GgVoicemailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggVoicemailOIcon],svg[gg-voicemail-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11 12c0 .35-.06.687-.17 1h2.34A3 3 0 1 1 16 15H8a3 3 0 1 1 3-3m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></svg:path></svg:g>`,
})
export class GgVoicemailOIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggVoicemailRIcon],svg[gg-voicemail-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M11.5 12c0 .35-.06.687-.17 1h2.34a3 3 0 1 1 2.83 2h-8a3 3 0 1 1 3-3m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M1.5 8a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3zm3-1h15a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1"></svg:path></svg:g>`,
})
export class GgVoicemailRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggVolumeIcon],svg[gg-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 12a8 8 0 0 1-8 8v-2a6 6 0 0 0 0-12V4a8 8 0 0 1 8 8"></svg:path><svg:path d="M20 12a4 4 0 0 1-4 4v-2a2 2 0 1 0 0-4V8a4 4 0 0 1 4 4"></svg:path><svg:path fill-rule="evenodd" d="m9 16l6 4V4L9 8H5a4 4 0 1 0 0 8zm-4-6h4l4-2.5v9L9 14H5a2 2 0 1 1 0-4" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggWebcamIcon],svg[gg-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M13 14.9A5.002 5.002 0 0 0 12 5a5 5 0 0 0-1 9.9V17H7v2h10v-2h-4zM12 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgWebcamIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggWebsiteIcon],svg[gg-website-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M14 7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm3 2h-2v6h2z" clip-rule="evenodd"></svg:path><svg:path d="M6 7a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm-1 5a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"></svg:path><svg:path fill-rule="evenodd" d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm16 2H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgWebsiteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggWindowsIcon],svg[gg-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 5.549l7.195-.967v7.029l-7.188.054zm7.195 6.842v7.105l-7.19-.985v-6.12zm.918-7.935L20.998 3v8.533l-9.885.078zM21 12.505L20.998 21l-9.885-1.353v-7.142z"></svg:path>`,
})
export class GgWindowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggWorkAltIcon],svg[gg-work-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 7a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-3-1h-4a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1M6 9h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path>`,
})
export class GgWorkAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggYinyangIcon],svg[gg-yinyang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M14 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path><svg:path fill-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 0a4 4 0 0 1 0-8a8 8 0 1 0 0 16a4 4 0 0 0 0-8m2-4a2 2 0 1 1-4 0a2 2 0 0 1 4 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgYinyangIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggYoutubeIcon],svg[gg-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 7h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1M2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm8 1l4 3l-4 3z" clip-rule="evenodd"></svg:path>`,
})
export class GgYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggZoomInIcon],svg[gg-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.343 15.243a6 6 0 1 0-8.485-8.486a6 6 0 0 0 8.485 8.486m1.414-9.9a8 8 0 0 1 .662 10.565l.046.042l4.242 4.242a1 1 0 0 1-1.414 1.415l-4.243-4.243l-.042-.045A8.001 8.001 0 0 1 5.444 5.343a8 8 0 0 1 11.313 0M10.1 7h2v3h3v2h-3v3h-2v-3h-3v-2h3z" clip-rule="evenodd"></svg:path>`,
})
export class GgZoomInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggZoomOutIcon],svg[gg-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M15.343 15.243a6 6 0 1 0-8.485-8.486a6 6 0 0 0 8.485 8.486m1.414-9.9a8 8 0 0 1 .662 10.565l.046.042l4.242 4.242a1 1 0 0 1-1.414 1.415l-4.243-4.243l-.042-.045A8.001 8.001 0 0 1 5.444 5.343a8 8 0 0 1 11.313 0M7.101 10v2h8v-2z" clip-rule="evenodd"></svg:path>`,
})
export class GgZoomOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAdidasIcon],svg[gg-adidas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.33 19l-.6-1.036l4.33-2.5L7.103 19zm13.856 0H9.412l-3.619-6.268l4.33-2.5zm8.083 0h-5.774l-6.64-11.5l4.33-2.5z"></svg:path>`,
})
export class GgAdidasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAddRIcon],svg[gg-add-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 6a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1"></svg:path><svg:path fill-rule="evenodd" d="M5 22a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3zm-1-3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgAddRIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ggAirplaneIcon],svg[gg-airplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.01 5.128h2c1.104 0 2.458.769 3.024 1.718L16.509 11h4.5a1 1 0 1 1 0 2h-4.595l-2.476 4.154c-.565.95-1.919 1.718-3.024 1.718h-2l3.5-5.872h-6.99L3.99 15.453h-2L4.01 12v-.033l-2-3.42h2L5.444 11h7.065z"></svg:path>`,
})
export class GgAirplaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
